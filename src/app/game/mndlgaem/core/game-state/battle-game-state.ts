import { Actor } from '../../actor/actor'

export class BattleGameState extends Phaser.State {

  preload():void {
    this.game.load.image('background', '../assets/bg.png');
    this.game.load.atlas('sprite', '../assets/sprites.png', '../assets/sprites.json', Phaser.Loader.TEXTURE_ATLAS_JSON_ARRAY);
  }

  create():void {
    this.game.add.image(0, 0, 'background');
    // this.game.add.sprite(30, 30, 'sprites');
    // let sprite = this.game.add.sprite(30, 30, 'sprites');
    // sprite.scale.setTo(2.5,2.5);
    // sprite.animations.add('anim', Phaser.Animation.generateFrameNames('sprite', 1, 4), 5, true);
    // sprite.animations.play('anim');
    let moon = new Actor('sprite');
    moon.init(this.game, 30, 30);

  }

  update():void {

  }
}
