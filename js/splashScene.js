/* global Phaser */

// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Julianne Leblanc-Peltier
// Created on: April 2024
// This is the Phaser3 configuration file

class SplashScene extends Phaser.Scene {
  constructor () {
    super({key: 'splashScene'})
  }

  init (data) {
    this.cameras.main.setBackgroundColor('#ffffff')
  }

  preload () {
    console.log('Splash Scene')
  }
    
  create (data) {
  }

  update (time, delta) {
    this.scene.switch("titleScene")
  }
}

export default SplashScene
