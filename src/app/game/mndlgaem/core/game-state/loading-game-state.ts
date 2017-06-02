import { MndlGaemState, keyActions } from './';
import { Player } from '../../player/player';
import { Actor } from '../../actor/actor';
import { GameDataEvents } from '../../../../common/events/gamedata-events';

export class LoadingGameState extends MndlGaemState {
  private player:Player;
  private socket: SocketIOClient.Socket;
  private events: GameDataEvents;

  constructor(player:Player, socket: SocketIOClient.Socket) {
    super();
    this.player = player;
    this.socket = socket;
    this.events = new GameDataEvents();
    this.events.loadPlayerResponseStream(this.socket).subscribe((playerData) => { this.game.state.start('battle'); }); // todo: don't hardcode; move this to a preload state
  }
  preload():void {
    let style:Phaser.PhaserTextStyle = { font: "24px Courier", fill: "#fff" };
    this.game.add.text(500, 300, 'LOADING', style);
    this.game.load.image('background', '../assets/bg.png'); // also move to preload state
    this.game.load.atlasJSONArray('sprites', '../assets/alteredbeast.png', '../assets/alteredbeast.json');
  }

  create():void {
    this.socket.emit(this.events.loadPlayerEvent);
  }

  update():void {
  }
}
