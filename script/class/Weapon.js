class Weapon{
    constructor(sprite){

        this.weapon = game.add.weapon(10, 'bullet');

        game.physics.arcade.enable(this.weapon);

        this.weapon.trackSprite(sprite, 20, 0, true);
        this.weapon.bulletSpeed = 400;

        this.weapon.bullets.forEach(bullet => {
            bullet.width = 16;
            bullet.height = 16;
        }, this);
    }

    fire(){
        this.weapon.fire();
    }
}