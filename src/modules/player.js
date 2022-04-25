const { EventEmitter } = require('events');

// fonction pratique pour copier une carte en profondeur, vu le niveau d'imbrication de certains effets
const deepCopy = (obj) => {
    const copy = Array.isArray(obj)?[...obj]:{...obj};
    for (const key in obj) {
        if (typeof obj[key] === 'object') copy[key] = deepCopy(obj[key]);
    }
    return copy;
}

module.exports = class extends EventEmitter {

    constructor(deck, game) {
        super();
        // on mémorise son deck
        this.deck = deck;
        // on le mélange
        for (let index = 0; index < 15; index++) {
            this.deck.sort(_ => Math.random() - .4);
        }

        // la main est vide, elle ne sera tirée que lorsque les 2 joueurs seront prêts
        this.hand = [];

        // on s'enregistre comme participant à la partie
        game.register(this);
        // et on le mémorise
        this.game = game;
    }

    // quand la partie se lance
    drawHand() {
        // on pioche 6 cartes pour créer la main
        for (let i = 0; i < 6; i++) {
            this.hand.push(this.deck.pop());
        }

        // à déplacer : le premier des 2 joueurs s'inscrit mais ce n'est que quand le deuxième arrive qu'on donne accès à l'environnement
        // event afterDrawing (before, aucun intérêt)
        this.emit('player.afterDrawing', {
            hand: deepCopy(this.hand)
        });
    }

    // override pour passer systématiquement l'environnement du joueur
    emit(event, data = null) {
        if (data) data.environment = this.getEnvironment();
        super.emit(event, data);
    }

    // getEnvironment() : greffé par l'environnement
    // ce n'est pas l'objet Environment, seulement un objet plat en lecture seule
    // mais il permet d'accéder rapidement à ce que voit le joueur

    // le joueur ne pourra que défausser une carte (effet des 2 cartes "piocher, défausser, rejouer")
    forceDiscard() {
        this.shallDiscard = true;
    }


    // jouer une carte (index est sa position dans la main)
    play(index) {

        // si le joueur doit défausser, on force l'action de défausse
        if (this.shallDiscard) {
            this.discard(index);
            return true;
        }

        // on copie la carte
        let theCard = deepCopy(this.hand[index]);

        // étape 0 : vérifier que le coût passe
        const [primary, cost] = Object.entries(theCard.cost)[0];
        // ressources insuffisantes
        if (this.getEnvironment().player[primary] < cost) {
            // la méthode renvoie faux si le coût ne passe
            // ou si la carte n'a pas été jouée (parce que ce n'est pas le tour du joueur, cf plus bas)
            return false;
        }

        // event beforePlaying
        this.emit('player.beforePlaying', {
            card: theCard,
            index
        });

        // s'il n'y a qu'un seul effet, pour faciliter l'écriture des cartes, l'effet ({}) est directement mis dans la prop effects
        // mais on va avoir besoin d'en faire un tableau, parce qu'il y a un autre effet à ajouter : le coût
        if (!Array.isArray(theCard.effects)) {
            theCard.effects = [theCard.effects];
        }

        // coût => effet
        theCard.effects.unshift({
            player: {
                [primary]: -cost
            }
        });

        // on compose une carte résolvable facilement par l'environnement
        let resolvableEffects = {
            player: this,
            effects: theCard.effects,
            playagain: theCard.playagain || false,
            forcediscard: theCard.forcediscard || false
        };

        let played;
        if (played = this.game.resolveCard(resolvableEffects)) {
            // event afterPlaying
            this.emit('player.afterPlaying', {
                card: theCard,
                index
            });

            // on défausse la carte, qui retourne dans le deck
            this.returnToDeck(index);
        }

        return played;
    }

    // défausser une carte
    discard(index) {
        
        let oldCard = this.hand[index];
            
        // event beforeDiscarding, avec l'ancienne carte et son index
        this.emit('player.beforeDiscarding', {
            oldCard: deepCopy(oldCard),
            index
        });

        if (!oldCard.magnet) {

            this.returnToDeck(index);

            // qu'il ait naturellement défaussé ou "joué" la carte qu'il devait défausser, on ne doit pas changer le tour
            if (this.shallDiscard) {
                // la carte est défaussée, c'est toujours son tour
                this.shallDiscard = false;
            } else {
                this.game.toggleTurn();
            }
        }

        return !oldCard.magnet;
    }

    // commun à play et discard : la partie où, après vérifs, on remet la carte dans le paquet et on en pioche une nouvelle
    returnToDeck(index) {

        // on défausse la carte, qui retourne dans le deck
        this.deck.unshift(this.hand.splice(index, 1)[0]);

        // et on repioche une carte
        let newCard;
        this.hand.push(newCard = this.deck.pop());

        // dont on fait une copie
        newCard = deepCopy(newCard);

        // event afterDiscarding, avec la carte piochée
        this.emit('player.afterDiscarding', {
            newCard
        });
    }
}