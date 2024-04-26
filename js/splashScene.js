/* global Phaser */

// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Julianne Leblanc-Peltier
// Created on: April 2024
// This is the Phaser3 configuration file


/**
 * This class is the Splace Scene
 */
class SplashScene extends Phaser.Scene {
  /**
   * This method is the constructor
   */
  constructor () {
    super({key: "splashScene"})
  }

  /**
   * Can be defined on your own Scenes.
   * This method is called by the Scene Manager when the scene starts,
   *  before preload() and create().
   * @param {object} data - Any data passed via ScenePlugin.add() or ScenePlugin.start()
   */
  init (data) {
    this.cameras.main.setBackgroundColor('#ffffff')
  }

  /**
   * Can be defined on your own Scenes.
   * Use it to load assets.
   */
  preload () {
    console.log('Splash Scene')
    // image that loads as extends Phaser Scene
    this.load.image('splashSceneBackground', './assets/splashSceneImage.png')
  }
  
  /**
   * Can be defined on your own Scenes.
   * Use it to create your game objects.
   * @param {object} data - Any data via ScenePlugin.add() or ScenePlugin.start()
   */
  create (data) {
    this.splashSceneBackgroundImage = this.add.sprite(0,0, 'splashSceneBackground')
    this.splashSceneBackgroundImage.x = 1920 / 2
    this.splashSceneBackgroundImage.y = 1080 / 2
    // pass
  }

  /**
   * Should be overridden by your own Scenes.
   * this method is called once per game step while the scene is running.
   * @param {number} time - The current time.
   * @param {number} delta - The delta time in ms since the last frame.
   */
  update (time, delta) {
    if (time > 3000) {
      this.scene.switch('titleScene')
    }
  }
}

export default SplashScene
