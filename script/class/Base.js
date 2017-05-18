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

        this.canon = new Canon(this.position);
    }

    getLife(damage) {
        this.maxlife -= damage;
    }

    addLife(bonus) {
        this.maxlife += bonus;
    }
}