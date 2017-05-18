const GLOBAL = {
    WIDTH: 864,
    HEIGHT: 864,
    DIR: {
        IMAGE: './assets/img/'
    }
};
GLOBAL.HALFWIDTH = GLOBAL.WIDTH / 2;
GLOBAL.HALFHEIGHT = GLOBAL.HEIGHT / 2;

const ITEMS = {
    TOWER: {name: 'tower', life: -1, IMMORTAL: true},
    WALL: {name: 'wall', life: 30},
    ROCK: {name: 'rock', life: 50},
    LIFE: {name: 'life', life: 1},
    REFLECT: {name: 'reflect', life: 30},
};

var game = new Phaser.Game(GLOBAL.WIDTH, GLOBAL.HEIGHT, Phaser.AUTO, 'game');

game.state.add('play', PlayState);
game.state.start('play');

