/**
 * Created by Student on 17/05/2017.
 */
/**
 * Classe pour créer les bases des joueurs
 */
class Canon {
    constructor(position) {

        this.position = position;

        this.sprite = game.add.sprite(this.position.x, this.position.y, 'canon');

        game.physics.arcade.enable(this.sprite);

        this.sprite.anchor.set(0.5, 0.5);
        this.sprite.width = 32;
        this.sprite.height = 32;

        let startAngle = Helper.degreeTwoPoints(
            this.position,
            new Vector(GLOBAL.HALFWIDTH, GLOBAL.HALFHEIGHT)
        );

        this.angle = startAngle + 0.0000001;
        this.minAngle = this.angle + 80;
        this.maxAngle = this.angle - 80;
        this.speed = 3;

        this.sprite.pivot.x = -120;
        this.sprite.pivot.y = 0;
        this.sprite.angle = this.angle;

        this.weapon = new Weapon(this.sprite);

        Helper.Phaser.drawPoint(this.position);
    }

    turn(direction) {

        switch (direction.toLowerCase()) {
            case 'left':
                this.setAngle(this.angle - this.speed);
                break;
            case 'right':
                this.setAngle(this.angle + this.speed);
                break;
        }
        this.sprite.angle = this.angle;
    }

    setAngle(angle) {
        if (angle < this.maxAngle || angle > this.minAngle) {
            return;
        }
        this.angle = angle;
        this.sprite.angle = this.angle;
    }

    shoot() {
        this.weapon.fire();
    }
}