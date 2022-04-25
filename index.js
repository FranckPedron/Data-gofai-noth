const cards = require('./data/cards.json');
// dev only
cards.forEach(c => {
    if (!c.name || !c.effects || !c.cost) throw new Error(`La carte ${c.name} ne suit pas le format réglementaire`);
});

const Player = require('./src/modules/player');
const Game = require('./src/modules/game');

const Human = require('./src/modules/human');
const Agent = require('./src/modules/agent');

// créer un jeu vierge
const game = new Game();

// créer 2 decks composés de 2 exemplaires de chaque carte
const decks = [
    cards.map(c => [{...c}, {...c}]).flat(),
    cards.map(c => [{...c}, {...c}]).flat()
];

// piocher 6 cartes pour chaque joueur
// le joueur se charge de mélanger son deck
const players = decks.map(d => new Player(d, game));

players.forEach((p, i) => {
    p.on('player.beforePlaying', (e) => {
        const card = e.card;
        card.cost = Object.entries(card.cost)[0].reverse().join(' ');
        console.log('\x1b[32m%s\x1b[0m', `Player ${i+1} plays ${card.name} : ${card.text} (costs ${card.cost})`);
    });

    p.on('player.afterPlaying', e => {
        console.log('\x1b[33m%s\x1b[0m', 'Partie');
        console.table({
            "Player 1": game.resources.get(players[0]),
            "Player 2": game.resources.get(players[1])
        });
    });

    p.on('player.beforeDiscarding', e => {
        console.log(`Player ${i+1} discards ${e.oldCard.name}`);
    });
});

game.on('game.startingGame', e => {
    console.log('\x1b[36m%s\x1b[0m', `Starting game !
The conditions of victory are :
- Build a tower of ${e.rules.goals.tower}
- Gather ${e.rules.goals.primary} of any resource
- Destroy enemy tower`);
});

game.on('game.endingGame', e => {
    console.log('\x1b[33m%s\x1b[0m', 'Partie');
    console.table({
        "Player 1": game.resources.get(players[0]),
        "Player 2": game.resources.get(players[1])
    });

    if (e.winner) {
        let playerIndex = 1;
        if (players[1] == e.winner) playerIndex = 2;
        console.log('\x1b[36m%s\x1b[0m', `🏆 🏆 🏆  Player ${playerIndex} won 🏆 🏆 🏆`);
    } else {
        console.log('\x1b[36m%s\x1b[0m', `🤝 🤝 🤝  Draw 🤝 🤝 🤝`)
    }
});


players[0].on('player.afterDrawing', (e) => {
    console.log('\x1b[31m%s\x1b[0m', 'Your hand');
    console.table(e.hand.map(c => {
        return {name: c.name, text: c.text, cost: c.cost};
    }));
});

players[0].on('player.afterDiscarding', (e) => {
    console.log('\x1b[34m%s\x1b[0m', `You draw ${e.newCard.name}`);
});


game.init();

const me = new Human(players[0]);
const them = new Agent(players[1]);

game.on('game.togglingTurn', e => {
    me.toggleCanPlay(e.turn);
    them.toggleCanPlay(e.turn);
    them.play();
});

game.on('game.endingGame', e => {
    them.endGame();
    process.exit();
});

me.toggleCanPlay(players[0]);