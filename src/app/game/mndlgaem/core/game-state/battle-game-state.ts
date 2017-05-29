import { MndlGaemState, keyActions } from './';
import { Player } from '../../player/player';
import { Actor } from '../../actor/actor';

export class BattleGameState extends MndlGaemState {
  private player:Player;

  constructor(player:Player) {
    super();
    this.player = player;
  }
  preload():void {
    this.onPreload();
    this.game.load.image('background', '../assets/bg.png');
    this.game.load.atlasJSONArray('sprites', '../assets/alteredbeast.png', '../assets/alteredbeast.json');
  }

  create():void {
    this.game.add.image(0, 0, 'background');
    this.player.init(this.game);

    this.inputComponent.registerHandler(keyActions.DOWN, () => this.player.activateCard());
  }

  update():void {
    this.player.update(); // todo: update all actors
  }
}