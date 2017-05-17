var PlayState = {};

let map;
let layers = {};
let Groups = {};
let cursors;

PlayState.preload = function () {
    // game.load.tilemap("map", "assets/images/mapfinal.json", null, Phaser.Tilemap.TILED_JSON);
    // game.load.image("car", "assets/images/car.png");
}

PlayState.create = function () {

    cursors = this.input.keyboard.createCursorKeys();

    // map = game.add.tilemap('map');
    // map.addTilesetImage('tiles');

    layers = {
        // fond: map.createLayer('fond')
    };

    // layers.fond.resizeWorld();

    // map.setCollisionBetween(1, 2000, true, layers.collisions);

    // layers.collisions.alpha = 0;
    // layers.mort.alpha = 0;

    // Groups.zoneStart = this.game.add.group();
    // Groups.zoneStart.enableBody = true;
    // Groups.zoneStart.alpha = 0;
    // Helper.Phaser.drawObjectInGroup('zoneStart', map, 'objectsLayer', Groups.zoneStart);

    // game.physics.arcade.enable(layers.mort);
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

