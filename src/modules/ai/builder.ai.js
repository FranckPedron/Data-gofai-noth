// gagner en bâtissant les plus hauts remparts le plus vite possible
// priorités : bâtir, farmer, attaquer

let state = 'build';

module.exports = class Builder {


    decide() {
        return Math.floor(Math.random() * 6);
    }
}