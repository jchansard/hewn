import { MndlGaemState, keyActions } from './';
import { Player } from '../../player/player';
import { Actor } from '../../actor/actor';

export class BattleGameState extends MndlGaemState {

  preload():void {
    this.onPreload();
    this.game.load.image('background', '../assets/bg.png');
    this.game.load.atlas('sprite', '../assets/sprites.png', '../assets/sprites.json', Phaser.Loader.TEXTURE_ATLAS_JSON_ARRAY);
  }

  create():void {
    this.game.add.image(0, 0, 'background');

    let moon = new Actor('sprite');
    moon.init(this.game, 30, 30);

    let player = new Player();
    player.init(this.game);

    this.inputComponent.registerHandler(keyActions.DOWN, () => console.log('down pressed'));
  }

  update():void {

  }
}
