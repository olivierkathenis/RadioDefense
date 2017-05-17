/**
 * Classe pour créer les bases des joueurs
 */
class Base 
{
	constructor(x,y)
	{
		this.sprite = game.add.sprite(x , y, 'base');
    this.sprite.anchor.set(.5, .5);
    game.physics.arcade.enable(this.sprite);
	}
}