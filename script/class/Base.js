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

        this.cases = [];

        this.items = {};

        for(let key in ITEMS){
            this.items[key] = new Item(key)
        }

        console.log(this.items);
        this.selectedItem = ITEMS.TOUR;

        for(let i=0; i < 6; i++){
            this.cases[i] = new Case(position, (i * 30) + this.angle + 15, 115);

            this.cases[i].sprite.inputEnabled = true;
            this.cases[i].sprite.input.pixelPerfectOver = true;
            this.cases[i].sprite.input.useHandCursor = true;
            this.cases[i].sprite.events.onInputDown.add(()=>{
                console.log(this.selectedItem);
            }, this);
        }
    }
    setWeapon(){
        this.canon = new Canon(this.position);
    }

    newItem(){
        this.canon = new Canon(this.position);
    }

    hit(){
        
    }

    getDamage(damage) {
        this.maxlife -= damage;
    }

    addLife(bonus) {
        this.maxlife += bonus;
    }
}