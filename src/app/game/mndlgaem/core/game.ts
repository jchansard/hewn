import './phaser';
import { BattleGameState } from './game-state/battle-game-state';

const height = 768;
const width = 1024;

export class MndlGaem extends Phaser.Game {
  private socket: SocketIOClient.Socket;

  constructor(containerID: string, socket: SocketIOClient.Socket) {
    super(width, height, Phaser.AUTO, containerID);
    this.socket = socket;
  }

  public init():void {
    this.state.add('battle', new BattleGameState());
    this.state.start('battle');
  }


}
