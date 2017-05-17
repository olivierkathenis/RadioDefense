/**
 * Classe pour créer les bases des joueurs
 */
class Base {
    constructor(position) {

        this.position = position;


        this.maxlife = 100;
        this.life = this.maxlife;

        this.sprite = game.add.sprite(this.position.x, this.position.y, 'base');

        game.physics.arcade.enable(this.sprite);

        this.sprite.anchor.set(0.5, 0.5);

        this.canon = new Canon(this.position);
    }

    getLife(damage) {
        this.Maxlife -= damage;
        this.Maxlife -= damage;
    }

    addLife(bonus) {
        this.Maxlife += bonus;
    }
    getCanon(){
        return this.canon;
    }
}