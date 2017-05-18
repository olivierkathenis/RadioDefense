var PlayState = {};

let map;
let layers = {};
let Groups = {};
let bases = {};
let centres = {};
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
    game.load.image("bullet", GLOBAL.DIR.IMAGE + "bullet.png");
    game.load.image("centre", GLOBAL.DIR.IMAGE + "centre.png");
    game.load.image("case", GLOBAL.DIR.IMAGE + "case.png");
    game.load.image("tower", GLOBAL.DIR.IMAGE + "tower.png");
}

PlayState.create = function () {

    game.world.bounds.setTo(32, 32, GLOBAL.WIDTH - 64, GLOBAL.HEIGHT - 64);

    cursors = this.input.keyboard.createCursorKeys();
    spacebar = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

    game.add.sprite(-64, -64, 'background');

    map = game.add.tilemap('map');
    map.addTilesetImage('tileset');

    map.setCollisionBetween(1, 2000, true, layers.contour);

    Groups.bases = Helper.Phaser.addGroups(['base1', 'base2', 'base3', 'base4'], 'objectLayer', map);
    Groups.centres = Helper.Phaser.addGroups(['centre'], 'objectLayer', map);

    for (let key in Groups.bases) {
        bases[key] = new Base(
            new Vector(
                Groups.bases[key].centerX,
                Groups.bases[key].centerY
            )
        );
    }

    //Build center
    for (let key in Groups.centres) {
        centres[key] = new Centre(
            new Vector(
                GLOBAL.HALFWIDTH,
                GLOBAL.HALFHEIGHT
            )
        );
    }

    //Init bases weapons
    for (let key in bases) {
        let base = bases[key];
        base.setWeapon();
    }

    let item1 = new Item(
        bases['base2'].cases[1].sprite.worldPosition.x,
        bases['base2'].cases[1].sprite.worldPosition.y,
        "mur"
    )
    let item2 = new Item(
        bases['base2'].cases[2].sprite.worldPosition.x,
        bases['base2'].cases[2].sprite.worldPosition.y,
        "mur"
    )
    let item = new Item(
        bases['base2'].cases[0].sprite.worldPosition.x,
        bases['base2'].cases[0].sprite.worldPosition.y,
        "mur"
    )
    let item3 = new Item(
        bases['base2'].cases[3].sprite.worldPosition.x,
        bases['base2'].cases[3].sprite.worldPosition.y,
        "mur"
    )
    let item4 = new Item(
        bases['base2'].cases[4].sprite.worldPosition.x,
        bases['base2'].cases[4].sprite.worldPosition.y,
        "mur"
    )
    let item5 = new Item(
        bases['base2'].cases[5].sprite.worldPosition.x,
        bases['base2'].cases[5].sprite.worldPosition.y,
        "mur"
    )

    //console.log(bases['base1'].cases[1].sprite.worldPosition.x);
    bases['base1'].getLife(30);
    bases['base2'].getLife(10);

    layers = {
        contour: map.createLayer('contour')
    };
    
    map.setCollisionBetween(1, 2000, true, layers.contour);
    // game.input.addMoveCallback(pointer => {
    //     let angle = Helper.degreeTwoPoints(
    //         bases['base1'].position,
    //         new Vector(pointer.x, pointer.y)
    //     );
    //     bases['base1'].canon.setAngle(angle);
    // }, this);
    
    // this.weapon.bullets.bounce.setTo(1, 1);

}

PlayState.update = function () {

    // game.physics.arcade.collide(car.sprite, layers.collisions);
    // game.physics.arcade.overlap(car.sprite, flag.sprite, (car_sprite, flag_sprite)=>{
    //
    // });

    // if (game.input.mousePointer.isDown) {
    //     bases['base1'].canon.shoot()
    // }


    centres['centre'].update();
    bases['base1'].canon.update();




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

