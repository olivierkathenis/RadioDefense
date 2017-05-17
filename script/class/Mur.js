/**
 * Classe pour créer les différents items de type mur
 */
class Mur
{
	constructor(x,y,type)
	{
		this.sprite = game.add.sprite(x , y, 'mur');
    this.sprite.anchor.set(.5, .5);
    game.physics.arcade.enable(this.sprite);
    this.Maxlife = 30;
    this.type = type;
	}

	getLife(damage)
	{
		this.Maxlife -= damage;
		console.log(this.Maxlife);
	}

	addLife(bonus)
	{
		this.Maxlife += bonus;
		console.log(this.Maxlife);
	}
}