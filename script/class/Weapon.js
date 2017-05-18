class Weapon{
    constructor(sprite){

        this.weapon = game.add.weapon(10, 'bullet');

        game.physics.arcade.enable(this.weapon);

        this.weapon.trackSprite(sprite, 20, 0, true);

        this.weapon.bullets.setAll("collideWorldBounds", true);

        this.damage = 2;
        
        this.weapon.bulletSpeed = 400;
        this.weapon.bullets.forEach(bullet => {
            bullet.width = 16;
            bullet.height = 16;
            bullet.body.collideWorldBounds = true;
            bullet.body.bounce.setTo(1, 1);
            bullet.maxRebond = 3;
            bullet.rebond = 0;
            bullet.damage = this.getDamage();
        }, this);
    }

    getDamage(){
        return this.damage;
    }

    fire(){
        this.weapon.fire();
    }

    /**
     * Retourne les balles tirées par l'arme
     * @return {[type]} [description]
     */
    getBullets(){
        return this.weapon.bullets;
    }

    update() {
        this.getBullets().forEach(bullet => {
           game.physics.arcade.collide(bullet, layers.contour, this.hit.bind(this));

           let towers = centres['centre'].towers;

           for (var i = 0; i < towers.length; i++) {
               game.physics.arcade.collide(bullet, towers[i].sprite, this.hit.bind(this));
           }
           for(let key in bases){
               let base =  bases[key];
               for(let j=0; j < base.boardItems.length; j++){
                   let item = base.boardItems[j];
                   game.physics.arcade.collide(bullet, item.sprite, this.hitBaseItem.bind(this, base, item));
               }

            }

        }, this);
    }

    hit(bullet,tower){
        bullet.rebond++;
        if (bullet.rebond > bullet.maxRebond){
            bullet.kill();
            bullet.rebond = 0;
        }
    }
    hitBaseItem(base, item, bullet, itemSprite){

        let life = item.getDamage(bullet.damage);

        console.log(life);

        if(!item.immortal && life <= 0){
            console.log('die');
            base.removeItem(item);
        }
    }
} 