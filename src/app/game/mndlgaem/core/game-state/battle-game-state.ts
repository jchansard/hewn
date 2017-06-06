import { MndlGaemState, keyActions } from './';
import { Player } from '../../player/player';
import { Actor } from '../../actor/actor';

export class BattleGameState extends MndlGaemState {
  private player:Player;
  public playerStage: any[];

  constructor(player:Player) {
    super();
    this.player = player;
    this.playerStage = [{x:175, y:625}, {x:100,y:550}, {x:175, y:475}, {x:250, y:550} ]; //todo: enforce type
  }
  preload():void {
    this.onPreload();
  }

  create():void {
    this.game.add.image(0, 0, 'background');
    this.player.init(this.game, this.playerStage);

    this.inputComponent.registerHandler(keyActions.DOWN, () => this.player.activateCard(0)); //todo: not magic numbers
    this.inputComponent.registerHandler(keyActions.LEFT, () => this.player.activateCard(1));
    this.inputComponent.registerHandler(keyActions.UP, () => this.player.activateCard(2));
    this.inputComponent.registerHandler(keyActions.RIGHT, () => this.player.activateCard(3));
  }

  update():void {
    this.player.update(); // todo: update all actors
  }
}
