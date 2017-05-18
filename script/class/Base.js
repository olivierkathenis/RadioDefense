/**
 * Classe pour créer les bases des joueurs
 */
class Base {
    constructor(position) {

        this.position = position;

        this.maxlife = 100;
        this.life = this.maxlife;

        this.sprite = game.add.sprite(this.position.x, this.position.y, 'base');

        this.sprite.alpha = 1

        game.physics.arcade.enable(this.sprite);

        this.sprite.anchor.set(0.5, 0.5);

        let startAngle = Helper.degreeTwoPoints(
            this.position,
            new Vector(GLOBAL.HALFWIDTH, GLOBAL.HALFHEIGHT)
        );

        this.angle = startAngle + 90;

        this.sprite.angle = this.angle;

        this.canon = new Canon(this.position);

        this.cases = [];

        for(let i=0; i < 6; i++){
            this.cases[i] = new Case(position, (i * 30) + this.angle + 15, 115);
        }
    }

    getLife(damage) {
        this.maxlife -= damage;
    }

    addLife(bonus) {
        this.maxlife += bonus;
    }
}