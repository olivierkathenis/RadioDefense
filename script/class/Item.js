/**
 * Classe pour créer les différents items de type mur
 */
class Item {
    constructor(item, caseIndex) {

        this.caseIndex = caseIndex;
        this.life = item.life;
        this.type = item.name;
        this.amount = 3;
        this.immortal = item.IMMORTAL || false;
    }

    show(position, angle) {
        this.sprite = game.add.sprite(position.x, position.y, this.type);
        this.sprite.anchor.set(.5, .5);
        this.sprite.angle = angle - 90;
        this.sprite.width = 32;
        this.sprite.height = 32;
        game.physics.arcade.enable(this.sprite);
        this.sprite.body.immovable = true;
    }

    getDamage(damage) {
        return this.life -= damage;
    }

    destroy() {
        this.sprite.destroy();
    }

    addLife(bonus) {
        this.life += bonus;
    }
}