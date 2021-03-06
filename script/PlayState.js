var PlayState = {};

let map;
let layers = {};
let Groups = {};
let cursors;

PlayState.preload = function () {
    game.load.tilemap("map", GLOBAL.DIR.IMAGE + "map.json", null, Phaser.Tilemap.TILED_JSON);
    game.load.image("tileset", GLOBAL.DIR.IMAGE + "tileset.png");
    game.load.image("background", GLOBAL.DIR.IMAGE + "bg.png");
    game.load.image("base", GLOBAL.DIR.IMAGE + "base.png");
    game.load.image("canon", GLOBAL.DIR.IMAGE + "canon.png");
}

PlayState.create = function () {

    cursors = this.input.keyboard.createCursorKeys();

    game.add.sprite(-64, -64, 'background');

    map = game.add.tilemap('map');
    map.addTilesetImage('tileset');

    layers = {
        fond: map.createLayer('contour')
    };

    // map.setCollisionBetween(1, 2000, true, layers.collisions);
    Groups.bases = Helper.Phaser.addGroups(['base1','base2','base3','base4','centre'], 'objectLayer', map);
    
    // console.log(group);


    // game.physics.arcade.enable(layers.mort);
    let base1 = new Base(Groups.bases['base1'].centerX,Groups.bases['base1'].centerY);
    let base2 = new Base(Groups.bases['base2'].centerX,Groups.bases['base2'].centerY);
    let base3 = new Base(Groups.bases['base3'].centerX,Groups.bases['base3'].centerY);
    let base4 = new Base(Groups.bases['base4'].centerX,Groups.bases['base4'].centerY);

    let canon1 = new Canon(Groups.bases['base2'].centerX,Groups.bases['base2'].centerY);

}

PlayState.update = function () {

    // game.physics.arcade.collide(car.sprite, layers.collisions);
    // game.physics.arcade.overlap(car.sprite, flag.sprite, (car_sprite, flag_sprite)=>{
    //
    // });

    if (cursors.up.isDown) {

    }
}

PlayState.render = function () {
    // game.debug.body(car.sprite);
    // game.debug.cameraInfo(game.camera, 32, 32);
    //game.debug.text('Elapsed seconds: ' + this.game.time.totalElapsedSeconds(), 32, 32);
}

