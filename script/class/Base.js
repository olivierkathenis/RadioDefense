/**
 * Classe pour créer les bases des joueurs
 */
class Base
{
	constructor(x,y)
	{
		this.sprite = game.add.sprite(x , y, 'base');
    	game.physics.arcade.enable(this.sprite);
    	this.sprite.anchor.set(0.5, 0.5);

    	this.Maxlife = 100;
	}
}