//State: DogeDodge.Play

'use strict';

DogeDodge.Play = function () {};

DogeDodge.Play.prototype = {

  init: function () {
    this.background = null;
    console.log("%c~~~ Booting the DogeDodge ~~~\n Compliments of SkilStak", "color:#fdf6e3; background:#073642");
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;
  },

  preload: function () {
    this.game.load.spritesheet('skilstak','assets/skilstak.png', 46,64);                                    
    this.load.spritesheet('background','assets/background.png',320,568);
  },

  create: function () {                                            
    this.game.stage.backgroundColor = "#073642";                   
    this.game.state.start('preload');                                            
    this.background = this.add.tileSprite(0,0,320,568,"background");                      
    this.background.autoScroll(0,50);                                                              
    this.background.scale.set(1);
                                     
  },

  update: function () {
  },

  end: function () {
  }

};
