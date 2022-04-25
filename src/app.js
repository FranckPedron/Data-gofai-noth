const Player = require('./modules/player');
const Game = require('./modules/game');
const Agent = require('./modules/agent');

const cards = require('../data/cards.json');

const app = {
    init() {
        // créer un jeu vierge
        app.game = new Game();

        // créer 2 decks composés de 2 exemplaires de chaque carte
        const decks = [
            cards.map(c => [{...c}, {...c}]).flat(),
            cards.map(c => [{...c}, {...c}]).flat()
        ];

        // créer 2 joueurs, chacun son deck
        const players = decks.map(d => new Player(d, app.game));

        app.human = players[0];
        app.human.name = "human";
        app.human.area = document.querySelector('#your-area');
        app.robot = players[1];
        app.robot.name = "robot";
        app.robot.area = document.querySelector('#enemy-area');

        // rien besoin de stocker, c'est autonome, ces bêtes-là
        new Agent(app.robot);

        app.addListeners();

        app.game.init();
    },

    addListeners() {
        app.robot.on('robot.played', app.showPlayedCard);
        
        app.human.on('player.afterDrawing', app.populateHand.bind(app.human));
        app.robot.on('player.afterDrawing', app.populateHand.bind(app.robot));
        app.human.on('player.afterDiscarding', app.drawCard.bind(app.human));
        app.robot.on('player.afterDiscarding', app.drawCard.bind(app.robot));

        app.game.on('game.togglingTurn', app.toggleTurn);

        app.human.area.querySelector('.deck').addEventListener('click', app.playCard);

        app.game.once('game.afterStarting', () => app.refreshEnvironment(app.human.getEnvironment()));

        app.game.once('game.endingGame', app.endGame);
    },

    toggleTurn(e) {
        if (e.turn === app.human) {
            app.human.area.querySelector('.deck').addEventListener('click', app.playCard);
            app.human.area.querySelector('.deck').addEventListener('contextmenu', app.discardCard);
        } else {
            app.human.area.querySelector('.deck').removeEventListener('click', app.playCard);
            app.human.area.querySelector('.deck').removeEventListener('contextmenu', app.discardCard);
        }
        app.refreshEnvironment(app.human.getEnvironment());
    },

    discardCard(e) {
        const index = Array.from(app.human.area.querySelector('.deck').children).indexOf(e.target.closest('.card'));
        if (index >= 0) {
            if (app.human.discard(index)) {
                e.target.closest('.card').remove();
            } else {
                alert('you cannot discard a magnet card');
            }
        }
    },

    playCard(e) {
        console.log(e);
        if (e.ctrlKey) return app.discardCard(e);
        const index = Array.from(app.human.area.querySelector('.deck').children).indexOf(e.target.closest('.card'));
        if (index >= 0) {
            if (app.human.play(index)) {
                e.target.closest('.card').remove();
                app.refreshEnvironment(app.human.getEnvironment());
            } else {
                alert('you cannot afford the card');
            }
        }
    },

    showPlayedCard(data) {
        const theCard = app.robot.area.querySelector(`.card:nth-child(${data.card + 1})`);
        theCard.classList.add('playing');
        setTimeout(() => theCard.remove(), 3000);
    },

    endGame(e) {
        app.refreshEnvironment(app.human.getEnvironment());
        alert(`${e.winner.name} won !`);
    },

    drawCard(e) {

        const deck = this.area.querySelector('.deck');

        const card = e.newCard;

        const [resource, cost] = Object.entries(card.cost)[0];

        const cardElement = document.importNode(document.querySelector('#card').content, true).firstElementChild;
        cardElement.classList.add(card.reference, resource);
        
        cardElement.querySelector('.card-title').textContent = card.name;
        
        cardElement.querySelector('.card-effect').textContent = card.text;
        
        cardElement.querySelector('.card-cost').textContent = cost;

        cardElement.querySelector('.card-illustration').setAttribute('src', `assets/images/cards/${card.reference}.png`);

        deck.append(cardElement);
    },

    populateHand(e) {

        const deck = this.area.querySelector('.deck');

        for (let card of e.hand) {
            const [resource, cost] = Object.entries(card.cost)[0];

            const cardElement = document.importNode(document.querySelector('#card').content, true).firstElementChild;
            cardElement.classList.add(card.reference, resource);
            
            cardElement.querySelector('.card-title').textContent = card.name;
            
            cardElement.querySelector('.card-effect').textContent = card.text;
            
            cardElement.querySelector('.card-cost').textContent = cost;

            cardElement.querySelector('.card-illustration').setAttribute('src', `assets/images/cards/${card.reference}.png`);

            deck.append(cardElement);
        }
    },

    refreshEnvironment(envData) {
        const defenseElement = app.human.area.querySelector('.defense');
        defenseElement.textContent = envData.player.defense;
        defenseElement.style.height = 10 * Math.log2(envData.player.defense + 1) + 'pt';

        const bulwarkElement = app.human.area.querySelector('.bulwark');
        bulwarkElement.textContent = envData.player.bulwark;
        bulwarkElement.style.height = 10 * Math.log2(envData.player.bulwark + 1) + 'pt';

        app.human.area.querySelector('.resources .sentinels .units').textContent = envData.player.sentinels;
        app.human.area.querySelector('.resources .sentinels .generators').textContent = envData.player.garrison;
        app.human.area.querySelector('.resources .workers .units').textContent = envData.player.workers;
        app.human.area.querySelector('.resources .workers .generators').textContent = envData.player.guild;
        app.human.area.querySelector('.resources .attackers .units').textContent = envData.player.soldiers;
        app.human.area.querySelector('.resources .attackers .generators').textContent = envData.player.barracks;

        const enemyDefenseElement = app.robot.area.querySelector('.defense');
        enemyDefenseElement.textContent = envData.opponent.defense;
        enemyDefenseElement.style.height = 10 * Math.log2(envData.opponent.defense + 1) + 'pt';

        const enemyBulwarkElement = app.robot.area.querySelector('.bulwark');
        enemyBulwarkElement.textContent = envData.opponent.bulwark;
        enemyBulwarkElement.style.height = 10 * Math.log2(envData.opponent.bulwark + 1) + 'pt';

        app.robot.area.querySelector('.resources .sentinels .units').textContent = envData.opponent.sentinels;
        app.robot.area.querySelector('.resources .sentinels .generators').textContent = envData.opponent.garrison;
        app.robot.area.querySelector('.resources .workers .units').textContent = envData.opponent.workers;
        app.robot.area.querySelector('.resources .workers .generators').textContent = envData.opponent.guild;
        app.robot.area.querySelector('.resources .attackers .units').textContent = envData.opponent.soldiers;
        app.robot.area.querySelector('.resources .attackers .generators').textContent = envData.opponent.barracks;
    }
}

document.addEventListener('DOMContentLoaded', app.init);