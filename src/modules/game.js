const rulesets = require('./rulesets');

const { EventEmitter } = require('events');
// juste pour écrire le passage d'un joueur à l'autre plus simplement
// cf constructeur de Game
let not = function(player) {
    return this.players.filter(p => p !== player).pop();
};

class GameSnapShot {

    constructor(resources, player) {
        this.environment = {
            player: resources.get(player),
            opponent: resources.get(not(player))
        };
    }

    // fonction récursive qui parcourt les effets
    parse(effect, context = null) {
        // les cas simples d'abord
        if (typeof effect === 'number') return effect;

        // pour les cas du type { "player": "magic" } => lecture de la magic du player
        // et { "magic": "@store" } => écriture de la valeur stockée dans magic
        if (typeof effect === 'string') {
            // le plus simple pour différencier les 2 : l'existence ou non d'un contexte
            if (context) {
                return context[effect];
            } else {
                // et là, c'est pas chouette mais c'est tellement plus simple : on eval
                return Math.ceil(eval(effect.replace('@', 'this.')));
            }
        }

        let returnValue;

        // les multiples cas où on tombe sur un object
        for (const [key, value] of Object.entries(effect)) {

            switch (key) {
                // ces deux-là seront lancés conditionnellement par le if
                // on ne les mentionne ici que dans le cas où ils seraient lus avant le if
                case 'then':
                case 'else':
                    continue;
                case 'if':
                    // value va être un test (greaterthan par exemple)
                    if (this.parse(value)) {
                        this.parse(effect.then);
                    } else {
                        this.parse(effect.else);
                    }
                    return;
                case '@store':
                    // value va être une valeur, un calcul ou une attribution, dans tous ces cas, une valeur sera renvoyée
                    this.store = this.parse(value);
                    return;
                case 'opponent':
                case 'player':
                    // pour être cohérent avec le cas où c'est encapsulé dans un @store, on retourne l'attribution/la lecture
                    return this.parse(value, this.environment[key]);
                case 'greaterthan':
                    // value est un tableau contenant 2 éléments, qui peuvent être des sous-noeuds, donc on les parse
                    let values = value.map(val => this.parse(val));
                    return values[0] > values[1];
                case 'max':
                    // même principe mais qui retourne le max de 2 (ou plus) sous-noeuds
                    return Math.max.apply(null, value.map(val => this.parse(val)));
                case 'replace':
                    // comme les attributions ajoutent systématiquement la valeur à la ressource, si on veut remplacer...
                    // on prend un peu d'avance, on va chercher la ressource à la main...
                    const [resource, ] = Object.entries(value)[0];
                    // et on lui attribue 0, comme ça 0 + la nouvelle valeur => on a bien un remplacement de valeur
                    context[resource] = 0;
                    // et on continue comme si de rien n'était
                    return this.parse(value, context);
                // cas un peu particulier, les dégâts s'appliquent d'abord au mur, puis si le mur ne suffit pas, la tour encaisse le reste
                case 'damage':
                    let theDamage = this.parse(value);
                    // est-ce que je peux enlever theDamage ou est-ce que le joueur concerné meurt avant (tour+mur < dégâts)
                    returnValue = Math.min(theDamage, context.bulwark + context.defense);
                    // on s'attaque au mur d'abord
                    [theDamage, context.defense] = [Math.max(theDamage - context.defense, 0), Math.max(context.defense - theDamage, 0)];
                    // on inflige d'éventuels dégâts résiduels
                    context.bulwark = Math.max(context.bulwark - theDamage, 0);
                    
                    break;
                // tous les autres cas peuvent être traités de la même manière, ce sont des ressources
                // bricks, gems, beasts, quarry, magic, zoo, wall, tower
                default:
                    const theValue = this.parse(value);
                    returnValue = Math.max(-context[key], theValue);
                    context[key] = Math.max(0, context[key] + theValue);
                    break;
            }
        }

        return returnValue;
    }

}

// classe Game
module.exports = class extends EventEmitter {

    constructor(rules = null) {
        super();

        this.players = [];
        this.resources = new WeakMap();

        if (rules === null || typeof rules === 'string') {
            rules = rulesets[rules] || rulesets['Carcyn'];
        }

        this.rules = rules;

        // héhé
        not = not.bind(this);
    }

    // dès qu'on a 2 joueurs
    init() {
        this.emit('game.beforeStarting', {
            players: this.players,
            rules: this.rules
        });

        this.players.forEach(player => {
            // on gère leurs ressources
            this.resources.set(player, this.initResources());

            // et on leur donne une copie de l'environnement, vu de leur fenêtre
            player.getEnvironment = () => {
                return {
                    player: {...this.resources.get(player)},
                    opponent: {...this.resources.get(not(player))}
                };
            };

            // chaque joueur pioche sa main
            player.drawHand();
        });

        // déterminer qui commence
        this.turn = this.players[0];

        // et générer ses ressources
        this.generateResources(this.turn);

        this.emit('game.afterStarting');
    }

    // chaque joueur s'enregistre auprès du jeu
    register(player) {
        this.players.push(player);
    }

    // le joueur passe par ici pour jouer une carte
    // ec = effects collection, objet créé pour l'occasion
    resolveCard(ec) {
        // vérifier si c'est son tour
        if (ec.player !== this.turn) return false;

        const { player, effects, playagain, forcediscard } = ec;
        const snap = new GameSnapShot(this.resources, player);

        // une carte a au moins 2 effets :
        // - son coût : transformé en effet par le joueur et exécuté en priorité
        // - son... effet :-) ou ses effets, parfois
        effects.forEach(e => snap.parse(e));

        if (this.victoryConditionsMet()) {
            // assure qu'aucun autre événement ne sera déclenché
            return false;
        }

        if (forcediscard) {
            player.forceDiscard();
        }

        if (!playagain && !forcediscard) {
            this.toggleTurn();
        }

        return true;
    }

    victoryConditionsMet() {
        const enemy = this.resources.get(not(this.turn));
        const player = this.resources.get(this.turn);
        
        const playerWon = enemy.bulwark == 0 ||
            player.bricks >= this.rules.goals.primary ||
            player.gems >= this.rules.goals.primary ||
            player.beasts >= this.rules.goals.primary ||
            player.bulwark >= this.rules.goals.bulwark;
        const enemyWon = player.bulwark == 0 ||
            enemy.bricks >= this.rules.goals.primary ||
            enemy.gems >= this.rules.goals.primary ||
            enemy.beasts >= this.rules.goals.primary ||
            enemy.bulwark >= this.rules.goals.bulwark;

        if (!playerWon & !enemyWon) return false;

        let data;
        // peu probable mais ça peut arriver
        if (playerWon && enemyWon) {
            data = { draw: true };
        } else if (playerWon) {
            data = { winner: this.turn };
        } else {
            data = { winner: not(this.turn)}
        }

        this.emit('game.endingGame', data);
        return true;
    }

    generateResources(player) {
        const playerResources = this.resources.get(player);

        playerResources.sentinels += playerResources.garrison;
        playerResources.workers += playerResources.guild;
        playerResources.soldiers += playerResources.barracks;
    }

    toggleTurn() {
        this.turn = not(this.turn);

        this.generateResources(this.turn);

        this.emit('game.togglingTurn', {
            turn: this.turn,
            resources: this.resources.get(this.turn)
        });
    }

    // personnalisable plus tard avec les variantes de taverne
    initResources() {
        return {...this.rules.resources};
    }
}