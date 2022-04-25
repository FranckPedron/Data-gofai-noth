const readline = require('readline');

const listener = readline.createInterface({
    input: process.stdin
});

let parseLine = function (line) {
    if (/[dehp][0-5]?/.test(line)) {
        const [action, index] = line.split('');
        switch (action) {
            case 'd':
                this.player.discard(index);
                break;
            case 'p':
                this.player.play(index);
                break;
            case 'h':
                console.log('\x1b[31m%s\x1b[0m', 'Your hand');
                console.table(this.player.hand.map(c => {
                    return {name: c.name, text: c.text, cost: c.cost};
                }));
                break;
            case 'e':
                console.log('\x1b[33m%s\x1b[0m', 'Game state');
                console.table({
                    "Player 1": this.player.getEnvironment().player,
                    "Player 2": this.player.getEnvironment().opponent
                });
                break;
            default:
                console.error('Unknown command, try again');
                break;
        }
    } else {
        console.error('Unknown command, try again');
    }
}


module.exports = class {
    player;

    constructor(player) {
        this.player = player;

        parseLine = parseLine.bind(this);
    }

    toggleCanPlay(player) {
        if (this.player === player) {
            console.log('Your turn');
            listener.on('line', parseLine);
        } else {
            console.log('Their turn');
            listener.off('line', parseLine);
        }
    }
}