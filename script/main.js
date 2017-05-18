const GLOBAL = {
    WIDTH: 864,
    HEIGHT: 864,
    DIR :{
        IMAGE : './assets/img/'
    }
};
GLOBAL.HALFWIDTH = GLOBAL.WIDTH /2;
GLOBAL.HALFHEIGHT = GLOBAL.HEIGHT /2;

const ITEMS = {
    TOUR : 'tour',
    MUR : 'mur',
    ROCHER : 'rocher',
    VIE : 'vie',
    REFLECT : 'reflect'
};

var game = new Phaser.Game(GLOBAL.WIDTH, GLOBAL.HEIGHT, Phaser.AUTO, 'game');

game.state.add('play', PlayState);
game.state.start('play');

