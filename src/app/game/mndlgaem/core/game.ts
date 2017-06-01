import './phaser';
import { BattleGameState } from './game-state/battle-game-state';
import { Player } from '../player/player';

const height = 768;
const width = 1024;

export class MndlGaem extends Phaser.Game {
  private socket: SocketIOClient.Socket;
  public readonly player:Player;

  constructor(containerID: string, socket: SocketIOClient.Socket, playerData: any) {
    super(width, height, Phaser.AUTO, containerID);
    this.socket = socket;
    console.log(playerData);
    this.player = new Player(); // todo: load player
    Phaser.Device.whenReady(this.init, this);
  }

  public init():void {
    this.tweens.frameBased = true;
    this.state.add('battle', new BattleGameState(this.player));
    this.state.start('battle');
    console.log('game started. FPS: ' + this.time.fps)
  }


}
