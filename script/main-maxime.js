// var game = new Phaser.Game(800,800,Phaser.AUTO,'game',{preload: preload, create:
//  create,update:update, render: render});

// function preload(){
// 	game.load.image('bullet','assets/img/bullet.png');
// 	game.load.image('turret','assets/img/turret.png');

// 	var turret;
// 	var weapon;
// 	var cursors;
// 	var fireButton;
// }
// var rand = function(min, max){
// 	return Math.round(Math.random()*(max-min)+min);
// }
// function create(){
// 	weapon=game.add.weapon(30,'bullet');
// 	//pool d'objet on créé 30 objet bullet dans la mémoire du programme

// 	weapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
// 	//on détruit les balles quand elles sortent des limites du monde

// 	weapon.bulletSpeed = 300;
// 	//vitesse de la balle

// 	weapon.fireRate = 10;
// 	//intervalle entre 2 tirs

// 	turret = this.add.sprite(400,300, 'turret');
// 	turret.angle = 90;

// 	turret.anchor.setTo(0.5, 0.5);
// 	//ajout point d'anchrage pour que ce soi s au mileu de l'objet

// 	game.physics.arcade.enable( turret );
// 	//ajout moteur physique
// 	turret.body.drag.set(70);
// 	//ajout friction sur élément
// 	turret.mass = 1;
// 	turret.body.maxVelocity.set(50);
// 	//vitesse maximal du sprite
// 	turret.body.collideWorldBounds = true;
// 	//empecher le vaisseau de sortir du plateau
// 	weapon.trackSprite(turret, 0, 0, true);
// 	//instancier les balles par rapport au vaisseau (true = par rapport à la rotation)

// 	cursors = this.input.keyboard.createCursorKeys();
// 	//créer les curseurs du clavier
// 	fireButton = this.input.keyboard.addKey( Phaser.KeyCode.SPACEBAR );
// 	//button pour tirer


// }
// function update(){
// 	if( cursors.up.isDown ){
// 		game.physics.arcade.accelerationFromRotation(
// 		 turret.rotation, 300, turret.body.acceleration );
// 		//demande au moteur physique de phaser une acceleration en fonction d'une rotation
// 	} else if ( cursors.down.isDown ){
// 		game.physics.arcade.accelerationFromRotation(
// 		 turret.rotation, -300, turret.body.acceleration );
// 		//acceleration arrière
// 	}
// 	else{
// 		turret.body.acceleration.set( 0 );
// 		//acceleration du vaisseau à 0
// 	}

// 	if( cursors.left.isDown ){
// 		turret.body.angularVelocity =-500;
// 		//faire tourner le vaisseau
// 	} else if( cursors.right.isDown ){
// 		turret.body.angularVelocity = 500;
// 	} else{
// 		turret.body.angularVelocity = 0;
// 	}

// 	if( fireButton.isDown || game.input.activePointer.leftButton.isDown){
// 		weapon.fire();
// 	}
// 	game.world.wrap( turret, 16);
	



	
// }

// function randomHexNumber() {
//     return '0x' + Math.floor(Math.random() * 16777215).toString(16);
// } 
// function render(){

// }

var GAME_WIDTH = 800;
var GAME_HEIGHT = 800;

//Game Variables
var turret;
var bullet;
var mouseTouchDown = false;
var cursors;

// Create a Phaser game instance
var game = new Phaser.Game(
	GAME_WIDTH,
	GAME_HEIGHT,
	Phaser.AUTO,
	'game',
	{ preload: preload, create: create, update: update, init: init, render: render }
);

// Preload assets
function preload() 
{
	var dir = 'assets/img/';
	game.load.image('turret', dir + 'turret.png');
	game.load.image('bullet', dir + 'bullet.png');
}

// Init
function init() {
	// Listen to space & enter keys
	var keys = [Phaser.KeyCode.SPACEBAR, Phaser.KeyCode.ENTER];
	// Create Phaser.Key objects for listening to the state
	phaserKeys = game.input.keyboard.addKeys(keys);
	// Capture these keys to stop the browser from receiving this event
	game.input.keyboard.addKeyCapture(keys);
}


function create() 
{
	bullet = game.add.group();

	bullet.enableBody = true;

	bullet.physicsBodyType = Phaser.Physics.ARCADE;

	bullet.createMultiple(3, 'bullet');

	turret = game.add.sprite(game.world.centerX, game.world.centerY*1.9, 'turret');

	turret.anchor.setTo(0.5, 0.5);

	bullet.callAll('events.onOutOfBounds.add', 'events.onOutOfBounds', resetLaser);

	bullet.callAll('anchor.setTo', 'anchor', 0.5, 1.0);
	bullet.scale.setTo(0.5, 0.5);

	bullet.setAll('checkWorldBounds', true);

	cursors = this.input.keyboard.createCursorKeys();
}

function resetLaser(bullet) {
	bullet.kill();
}


function update() 
{	
	for (var index in phaserKeys) 
	{
		var key = phaserKeys[index];
		
		if (key.justDown) 
		{
			fireBullet();
		}
	}	
	if (game.input.activePointer.isDown) 
	{
		if (!mouseTouchDown) 
		{
			touchDown();
		}
	} else 
	{
		if (mouseTouchDown) 
		{
			touchUp();
		}
	}
	if( cursors.left.isDown ){
		turret.body.angularVelocity =-500;
		//faire tourner le vaisseau
	}
}

function touchDown() {
	
	mouseTouchDown = true;
	fireBullet();
}

function touchUp() {
	
	mouseTouchDown = false;
}

function fireBullet() {
	
	var laser = bullet.getFirstExists(false);
	if (laser) {
		
		laser.reset(turret.x, turret.y - 20);
		
		laser.body.velocity.y = -500;
	}

}


function render()
{
	
}
