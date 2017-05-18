class Hud {
    constructor(name, position, angle) {

        this.name = name;

        this.position = position;
        this.angle = angle;
        this.size = 256;

        this.buttons = {};
        this.buttonGroups = game.add.group();

        this.size = 24;
        this.step = -50;

        let text = game.add.text(position.x, position.y, this.name, {
            font: "20px Arial",
            fill: "#fff",
            align: "left",
            boundsAlignH: "top",
            boundsAlignV: "top"
        });
        text.pivot.x = text.width / 2;
        text.pivot.y = -3;
        text.angle = this.angle;

        //Wall
        let wall = new Button(new Vector(
            this.position.x,
            this.position.y
        ), ITEMS.WALL, this.angle, this.size, this.size);

        wall.sprite.pivot.x = 200;
        wall.sprite.pivot.y = -this.size - 5;
        wall.sprite.angle = this.angle;

        //Rock
        let rock = new Button(new Vector(
            this.position.x,
            this.position.y
        ), ITEMS.ROCK, this.angle, this.size, this.size);
        rock.sprite.pivot.x = 145;
        rock.sprite.pivot.y = -this.size - 5;
        rock.sprite.angle = this.angle;

        //Life
        let life = new Button(new Vector(
            this.position.x,
            this.position.y
        ), ITEMS.LIFE, this.angle, this.size, this.size);
        life.sprite.pivot.x = -145;
        life.sprite.pivot.y = -this.size - 5;
        life.sprite.angle = this.angle;

        //Reflect
        let reflect = new Button(new Vector(
            this.position.x,
            this.position.y
        ), ITEMS.REFLECT, this.angle, this.size, this.size);
        reflect.sprite.pivot.x = -200;
        reflect.sprite.pivot.y = -this.size - 5;
        reflect.sprite.angle = this.angle;

        //Save buttons
        this.buttons = {wall: wall, rock: rock, life: life, reflect: reflect}
    }
}