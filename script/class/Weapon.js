class Weapon{
    constructor(sprite){

        this.weapon = game.add.weapon(10, 'bullet');

        game.physics.arcade.enable(this.weapon);

        this.weapon.trackSprite(sprite, 20, 0, true);

        this.weapon.bullets.setAll("collideWorldBounds", true);
        
        this.weapon.bulletSpeed = 400;
        this.weapon.bullets.forEach(bullet => {
            bullet.width = 16;
            bullet.height = 16;
            bullet.body.collideWorldBounds = true;
            bullet.body.bounce.setTo(1, 1);
        }, this);
    }

    fire(){
        this.weapon.fire();
    }

    /**
     * Retourne les balles tirées par l'arme
     * @return {[type]} [description]
     */
    getBullets(){
        return this.weapon.bullets;
    }
}