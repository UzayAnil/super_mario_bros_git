var marioBros = marioBros ||{};

marioBros.marioPrefab = function(game,x,y)
{
    Phaser.Sprite.call(this,game,x,y,'mario');
    Phaser.Sprite.call(this,game,x,y,'runLeft');
    this.velocity = gameOptions.playerSpeed;
    this.jump = gameOptions.playerJump
    game.add.existing(this);
    this.state = 'mario';
   
  //  game.physics.arcade.enable(this);
    this.anchor.setTo(0.5);
    this.scale.setTo(2);
   // this.checkWorldBounds = true;
 
//oalaoaolaoao
        
};
marioBros.marioPrefab.prototype = Object.create(Phaser.Sprite.prototype);
marioBros.marioPrefab.prototype.constructor = marioBros.marioPrefab;


