/**
 * Created by Student on 17/05/2017.
 */
/**
 * Classe pour créer les bases des joueurs
 */
class Canon {
    constructor(x, y) {
        this.sprite = game.add.sprite(x, y, 'canon');
        this.sprite.anchor.set(0.5, 0.5);

        this.sprite.width = 32;
        this.sprite.height = 32;

        game.physics.arcade.enable(this.sprite);

        let startAngle = Helper.degreeTwoPoints(
            new Vector(GLOBAL.HALFWIDTH, GLOBAL.HALFHEIGHT),
            new Vector(x, y)
        );

        this.sprite.pivot.x = -80;
        this.sprite.pivot.y = 0;

        this.sprite.angle = startAngle - 180 + 0.00001;

        var graphics = game.add.graphics(x, y);
        graphics.beginFill(0x00FF00);
        graphics.drawCircle(0, 0, 2);

        this.angle = this.sprite.angle;
        this.minAngle = this.sprite.angle + 80;
        this.maxAngle = this.sprite.angle - 80;

        this.canonSpeed = 2;

        this.weapon = game.add.weapon(10, 'bullet');

        game.physics.arcade.enable(this.weapon);

        this.weapon.trackSprite(this.sprite, 0, 0, true);
    }

    turn(direction) {

        switch (direction) {
            case 'left':
                if (this.angle > this.maxAngle) {
                    this.angle -= this.canonSpeed;
                }
                break;
            case 'right':
                if (this.angle < this.minAngle) {
                    this.angle += this.canonSpeed;
                }
                break;
        }
        this.sprite.angle = this.angle;
    }

    shoot() {

        console.log(this.angle);
        this.weapon.fire();
        /*let bullet = this.weapon.bullets.getFirstExists(false);

        if (bullet) {
            bullet.reset(this.sprite.x, this.sprite.y, 10);

            bullet.velocity = game.physics.arcade.velocityFromAngle(this.angle, 4);

            this.weapon.fire();
        }*/
    }
}