// gagner en bâtissant les plus hauts remparts le plus vite possible
// priorités : bâtir, farmer, attaquer

let state = 'build';

module.exports = class Builder {

    constructor(player) {
        this.player = player;
    }

    decide() {
        // ok, c'est bon, j'ai compris, this.env représente l'état de la partie
        // this.env.player = mon camp d'IA
        // this.env.opponent = le camp de l'adversaire, l'humain
        console.log(this.env);
        const env = this.player.getEnvironment();

        // maintenant que faire ?
        // étape 1 : mon état est-il toujours adapté ?
        // ici, on liste les déclencheurs, on les vérifie et on change l'état si nécessaire

        switch (state) {
            case 'build':
                // vérif des déclencheurs possible de build vers un autre état
                // les ressources se font rares
                if (env.player.sentinels < 10 && env.player.workers < 5) {
                    state = 'farm';
                    break;
                }
                if (env.player.defense + env.player.bulwark < 15) {
                    state = 'defend';
                    break;
                }
                if (env.opponent.defense + env.opponent.bulwark < 10) {
                    state = 'attack';
                    break;
                }
                break;
                
            case 'defend':
                if (env.player.defense + env.player.bulwark > 20) {
                    state = 'build';
                    break;
                }
                break;

            case 'farm':
                if (
                    env.player.sentinels > 15 &&
                    env.player.workers > 10 &&
                    env.player.soldiers > 5
                ) {
                    state = 'defend';
                    break;
                }
                break;

            case 'attack':
                // les ressources se font rares
                if (env.player.sentinels < 10 && env.player.workers < 5) {
                    state = 'farm';
                    break;
                }
                // la défense ennemie tient bon
                if (env.opponent.defense > 15) {
                    state = 'build';
                    break;
                }
                break;
            // on aura à terme, la même chose pour les autres états
        }

        // étape 2 : noter les cartes en fonction de leur intérêt pour mon état actuel
        // ma main = this.player.hand
        this.player.hand.forEach(card => {
            card.score = this.setScore(card);
        })

        // étape 2.1 : filtrer la main pour retirer les cartes non jouables
        this.player.hand.forEach(card => {
            if (card.cost.soldiers) {
                card.playable = card.cost.soldiers < env.player.soldiers;
            } else if (card.cost.sentinels) {
                card.playable = card.cost.sentinels < env.player.sentinels;
            } else if (card.cost.workers) {
                card.playable = card.cost.workers < env.player.workers;
            } else {
                card.playable = true;   
            }
        });

        const theCard = this.player.hand.reduce((best, next) => {
            if (next.playable && next.score > best.score) {
                return next;
            } else {
                return best;
            }
        });

        console.log('état actuel : ', state);

        return this.player.hand.indexOf(theCard);
    }

    setScore(card) {
        let score = 0;

        switch (state) {
            case 'build':
                if (card.cost.soldiers) {
                    score = -10;
                }
                break;
        }

        return score;
    }
}
