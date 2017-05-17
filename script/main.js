const GLOBAL = {
    WIDTH: 864,
    HEIGHT: 864,
    DIR :{
        IMAGE : './assets/img/'
    }
};

var game = new Phaser.Game(GLOBAL.WIDTH, GLOBAL.HEIGHT, Phaser.AUTO, 'game');

game.state.add('play', PlayState);
game.state.start('play');

