const Builder = require('./ai/builder.ai');

module.exports = class {
    constructor(player) {
        this.player = player;
        this.canPlay = false;

        this.player.game.on('game.togglingTurn', e => {
            this.canPlay = this.player === e.turn;
            setTimeout(this.play.bind(this), 1500);
        });
        
        this.player.game.on('game.endingGame', e => {
            this.canPlay = false;
        });
    }

    play() {
        let tries = 0;
        while (this.canPlay) {
            tries++;
            const candidateCard = this.decide();
            console.log('agent will play ', candidateCard);
            if (this.player.play(candidateCard)) {
                this.player.emit('robot.played', { card: candidateCard} );
            } else {
                console.log('but they cannot');
                if (tries > 20) {
                    console.log('too many tries, discarding card instead');
                    this.player.discard(candidateCard);
                }
            }
        }
    }

    decide() {
        if (!this.ai) {
            this.ai = new Builder(this.player);
        }

        // maintenant, on demande à notre IA de décider
        // pour décider, c'est mieux d'avoir la main en cours
        return this.ai.decide();
    }
}