import { MndlGaemState, keyActions } from './';
import { Point } from '../../shared';
import { GameStage } from './game-stage/game-stage';
import { Player } from '../../player/player';
import { Actor } from '../../actor/actor';

export class BattleGameState extends MndlGaemState {
  private player:Player;
  public gameStage: GameStage;

  constructor(player:Player) {
    super();
    this.player = player;
    this.gameStage = new GameStage()
  }
  preload():void {
    this.onPreload();
  }

  create():void {
    this.game.add.image(0, 0, 'background');
    this.player.init(this.game);
    this.initializeLevel();

    this.inputComponent.registerHandler(keyActions.DOWN, () => this.player.activateCard(0)); //todo: not magic numbers
    this.inputComponent.registerHandler(keyActions.LEFT, () => this.player.activateCard(1));
    this.inputComponent.registerHandler(keyActions.UP, () => this.player.activateCard(2));
    this.inputComponent.registerHandler(keyActions.RIGHT, () => this.player.activateCard(3));
  }

  update():void {
    this.player.update(); // todo: update all actors
  }

  private initializeLevel():void {
    this.player.deck.slice(0, this.gameStage.playerSlotCount).forEach((actor, index) => actor.init(this.game, this.gameStage.playerSlot(index)));
  }
}
