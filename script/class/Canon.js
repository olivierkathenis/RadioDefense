/**
 * Created by Student on 17/05/2017.
 */
/**
 * Classe pour créer les bases des joueurs
 */
class Canon
{
    constructor(x,y)
    {
        this.sprite = game.add.sprite(x , y, 'canon');
        game.physics.arcade.enable(this.sprite);
        this.sprite.anchor.set(0.5, 0.5);


    }
}