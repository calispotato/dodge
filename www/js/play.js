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
    this.load.spritesheet('dodger', 'assets/projectile.1.png',28,28,2); 
  },
  create: function () {
    this.background = this.add.tileSprite(0,0,320,568,'background');
    // this.background.autoScroll(0,50);
    this.background.scale.set(1);  

    // dodger 
    this.dodger = this.add.sprite(160, 510,'dodger');
    this.dodger.anchor.set(0.5,0.5);
    this.dodger.animations.add('blink');
    this.dodger.animations.play('blink',2,true); // (name,fps,loop)

    this.cursors = game.input.keyboard.createCursorKeys();


    this.projectile = this.add.sprite(40,40,'projectile');
  },

  update: function () {
    if (this.cursors.left.isDown) {
      this.dodger.x -= 10;
    }
  if (this.cursors.right.isDown) {
    this.dodger.x += 10;
    }
  
  }
};



