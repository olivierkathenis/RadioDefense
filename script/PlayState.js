var PlayState = {};

let map;
let layers = {};
let Groups = {};
let bases = {};
let center = {};
let cursors;
let spacebar;
let canon1;
let canon2;

PlayState.preload = function () {
    game.load.tilemap("map", GLOBAL.DIR.IMAGE + "map.json", null, Phaser.Tilemap.TILED_JSON);
    game.load.image("tileset", GLOBAL.DIR.IMAGE + "tileset.png");
    game.load.image("background", GLOBAL.DIR.IMAGE + "bg.png");
    game.load.image("base", GLOBAL.DIR.IMAGE + "base.png");
    game.load.image("canon", GLOBAL.DIR.IMAGE + "canon.png");
    // game.load.image("mur", GLOBAL.DIR.IMAGE + "muraille-v1.png");
    // game.load.spritesheet("radiosheets", GLOBAL.DIR.IMAGE + "tileset.png", 16, 20, 0, 0);
    game.load.image("bullet", GLOBAL.DIR.IMAGE + "bullet.png");
}

PlayState.create = function () {

    cursors = this.input.keyboard.createCursorKeys();
    spacebar = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

    game.add.sprite(-64, -64, 'background');

    map = game.add.tilemap('map');
    map.addTilesetImage('tileset');

    // map.setCollisionBetween(1, 2000, true, layers.collisions);
    Groups.bases = Helper.Phaser.addGroups(['base1', 'base2', 'base3', 'base4'], 'objectLayer', map);
    Groups.center = Helper.Phaser.addGroups(['center'], 'objectLayer', map);

    for (let key in Groups.bases) {
        bases[key] = new Base(
            new Vector(
                Groups.bases[key].centerX,
                Groups.bases[key].centerY
            )
        );
    }

    // let mur1 = new Mur(300, 300, 'mur');

    bases['base1'].getLife(30);
    bases['base2'].getLife(10);

    layers = {
        contour: map.createLayer('contour')
    };

    game.input.addMoveCallback(pointer => {
        let angle = Helper.degreeTwoPoints(
            bases['base1'].position,
            new Vector(pointer.x, pointer.y)
        );
        bases['base1'].canon.setAngle(angle);
    }, this);

}

PlayState.update = function () {

    // game.physics.arcade.collide(car.sprite, layers.collisions);
    // game.physics.arcade.overlap(car.sprite, flag.sprite, (car_sprite, flag_sprite)=>{
    //
    // });

    if (game.input.mousePointer.isDown) {
        bases['base1'].canon.shoot()
    }

    if (cursors.left.isDown) {
        bases['base1'].canon.turn("left");
    }
    if (cursors.right.isDown) {
        bases['base1'].canon.turn("right");
    }

    if (spacebar.justDown) {
        bases['base1'].canon.shoot();
    }
}

PlayState.render = function () {
    // game.debug.body(car.sprite);
    // game.debug.cameraInfo(game.camera, 32, 32);
    //game.debug.text('Elapsed seconds: ' + this.game.time.totalElapsedSeconds(), 32, 32);
}

