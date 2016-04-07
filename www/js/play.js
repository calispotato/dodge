// State: DodgeDodge..play

"use strict";

var DogeDodge = {};

DogeDodge.Play = function () {};

DogeDodge.Play.prototype = {
  init: function () {
    console.log("%c~~~Booting the DogeDodge ~~~\n Compliments of Skilstak");
    
  },
  preload: function () {
    this.load.image('background','assets/background.png');
    this.load.spritesheet('dodger','assets/dodger.png',46,64,2);
    this.load.spritesheet('dodger', 'assets/projectile.png',28,28,2); 
  },
  create: function () {
      game.physics.startSystem(Phaser.Physics.Arcade);
    this.background = this.add.tileSprite(0,0,320,568,'background');
    // this.background.autoScroll(0,50);
    this.background.scale.set(1);  

    // dodger 
    this.dodger = this.add.sprite(160, 510,'dodger');
    this.dodger.anchor.set(0.5,0.5);
    this.dodger.animations.add('blink');
    this.dodger.animations.play('blink',2,true); // (name,fps,loop)
    game.physics.arcade.enable(this.dodger); 
    this.dodger.body.collideWorldBounds = true; 


    this.projectile = this.add.sprite(40,40,'projectile');
    this.projectile.anchor.set(0.5,0.5); 
    this.projectile.animations.add('blink');
    this.projectile.animations.play('blink',2,true);

    this.cursors = game.input.keyboard.createCursorKeys();
    game.physics.arcade.enable(this.projectile);
    this.projectile.body.gravity.y = 1;
  },

  update: function() {
    if (this.cursors.left.isDown) {
      this.dodger.body.velocity.x = -800;
    }
    if (this.cursors.right.isDown) {
      this.dodger.body.velocity.x = 800;
    }
    if (this.dodge.y >= 568) {
      this.dodge.y = -32;
      this.dodge.body.velocity.y = 0;
      this.dodge.x = game.rnd.integerInRange(0,320);
    }
    game.physics.arcade.collide(this.dodge,this.dodger,this.handleCollision);
  },

  handleCollision: function() {
    console.log("OUUCHH");
    game.state.start('Play')
    
 

  }
};



