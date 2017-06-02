import './phaser';
import { BattleGameState, LoadingGameState } from './game-state';
import { Player } from '../player/player';

const height = 768;
const width = 1024;

export class MndlGaem extends Phaser.Game {
  public socket: SocketIOClient.Socket;
  public readonly player:Player;

  constructor(containerID: string, socket: SocketIOClient.Socket) {
    super(width, height, Phaser.AUTO, containerID);
    this.socket = socket;
    this.player = new Player(); // todo: load player
    Phaser.Device.whenReady(this.init, this);
  }

  public init():void {
    this.tweens.frameBased = true;
    this.state.add('loading', new LoadingGameState(this.player, this.socket));
    this.state.add('battle', new BattleGameState(this.player));
    this.state.start('loading');
  }


}
