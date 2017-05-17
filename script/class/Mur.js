/**
 * Classe pour créer les différents items de type mur
 */
class Mur
{
	constructor(x,y)
	{
		this.sprite = game.add.sprite(x , y, 'mur');
    this.sprite.anchor.set(.5, .5);
    game.physics.arcade.enable(this.sprite);
	}
}