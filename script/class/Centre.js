class Centre{
    constructor(position){

        this.position = position;

        this.sprite = game.add.sprite(this.position.x, this.position.y, 'centre');

        this.sprite.alpha = 1

        Helper.Phaser.drawPoint(this.position, 0xFF0000)

        game.physics.arcade.enable(this.sprite);

        this.sprite.anchor.set(0.5, 0.5);

        this.angle = 0;

        this.towers = [];
        this.cases = [];

        for(let i=0; i < 4; i++){
            this.towers[i] = new Tower(position, i * 90);
        }

        for(let i=0; i < 4; i++){
            this.cases[i] = new Case(position, (i * 90) + 45);
        }

        this.speed = .4;
    }

    update(){
        this.turn('left')

        for(let i=0; i < this.towers.length; i++){
            this.towers[i].turn('left')
        }
        for(let i=0; i < this.cases.length; i++){
            this.cases[i].turn('left')
        }
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
}
