import './phaser';
import { PreloadingGameState, LoadingGameState, BattleGameState } from './game-state';
import { Player, PlayerBuilder } from '../player/player';
import { GameDataEvents } from '../../../common/events/gamedata-events';

const height = 768;
const width = 1024;

export class MndlGaem extends Phaser.Game {
  public socket: SocketIOClient.Socket;
  private player:Player;
  private events:GameDataEvents;

  constructor(containerID: string, socket: SocketIOClient.Socket) {
    super(width, height, Phaser.AUTO, containerID);
    this.socket = socket;
    //this.player = new Player(); // todo: load player
    this.events = new GameDataEvents();
    this.events.loadPlayerResponseStream(this.socket).subscribe((playerData) => {
      let playerFactory = new PlayerBuilder();
      this.player = playerFactory.buildFromJSON(playerData, this);
      this.start();
    });
    this.socket.emit(this.events.loadPlayerEvent);
    // todo: don't hardcode; move this to a preload state

    Phaser.Device.whenReady(this.init, this);
  }

  private init():void {
    this.tweens.frameBased = true;
    this.state.add('preloading', new PreloadingGameState());
    this.state.start('preloading');
  }

  private start():void {
    this.state.add('loading', new LoadingGameState());
    this.state.add('battle', new BattleGameState(this.player));
    this.state.start('loading');
  }
}
