// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Julianne Leblanc-Peltier
// Created on: April 2024
// This is the Phaser3 configuration file

import SplashScene from './splashScene.js'
import TitleScene from "./titleScene.js"


// create new scenes
const splashScene = new SplashScene()
const titleScene = new TitleScene()

/* global Phaser */
const config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  physics: {
    default: 'arcade',
    arcade: {
      debug: true
    }
  },
  // set background colour
  backgroundColor: 0x5f6e7a, 
  scale: {
    mode: Phaser.Scale.FIT,
    // we place it in the middle of the page.
    autoCenter: Phaser.Scale.CENTER_BOTH
  }
}

const game = new Phaser.Game(config)
//console.log(game)

// load scenes
// NOTE: remember any "key" is global and CAN NOT be reused!
game.scene.add('splashScene', splashScene)
game.scene.add('titleScene', titleScene)

// start title
game.scene.start('splashScene')
