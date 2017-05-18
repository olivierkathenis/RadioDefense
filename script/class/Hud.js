class Hud {
    constructor(position, angle) {

        this.position = position;
        this.angle = angle;
        this.size = 256;

        console.log(this.angle);

        this.nb = 4;
        this.step = (this.size / this.nb);
        this.margin = 32;

        this.buttons = {};
        this.buttonGroups = game.add.group();

        let items = [ITEMS.WALL, ITEMS.ROCK, ITEMS.LIFE, ITEMS.REFLECT];
        
        for(let i=0; i < items.length; i++){

            let pos = new Vector(
                this.position.x - 16,
                this.position.y - (this.size / 2) + (this.step * i) + this.margin
            )

            let button = new Button(pos, items[i], this.angle);

            let sprite = button.sprite;

            this.buttonGroups.add(sprite);

            game.physics.arcade.enable(sprite);

            sprite.inputEnabled = true;
            sprite.input.pixelPerfectOver = true;
            sprite.input.useHandCursor = true;
            sprite.events.onInputDown.add(()=>{
                console.log(button.name);
            }, this);

            sprite.angle = this.angle;

            this.buttons[items[i].name] = button;
        }

        this.buttonGroups.angle = 5;
    }
}