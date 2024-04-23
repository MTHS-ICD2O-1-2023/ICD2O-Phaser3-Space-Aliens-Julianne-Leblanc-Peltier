/* global Phaser */

// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Julianne Leblanc-Peltier
// Created on: April 2024
// This is the Phaser3 configuration file

class TitleScene extends Phaser.Scene {
  /** 
   * This method is the constructor 
   */
  constructor() {
    super({ key: 'titleScene' })
  }

  /**
   * Can be defined on your own Scenes.
   * This method is called by the Scene Manager when the scene starts,
   *  before preload() and create().
   */
  init(data) {
    this.cameras.main.setBackgroundColor('#ffffff')
  }

  preload() {
    console.log('Title Scene')
  }

  create(data) {
    // pass
  }

  update(time, delta) {
    // pass
  }
}

export default TitleScene
