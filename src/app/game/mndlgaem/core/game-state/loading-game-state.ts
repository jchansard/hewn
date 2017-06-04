import { MndlGaemState, keyActions } from './';
// import { Player } from '../../player/player';
// import { Actor } from '../../actor/actor';
// import { GameDataEvents } from '../../../../common/events/gamedata-events';

export class LoadingGameState extends MndlGaemState {
  // private socket: SocketIOClient.Socket;
  // private events: GameDataEvents;

  constructor() {
    super();
  }
  preload():void {
    let style:Phaser.PhaserTextStyle = { font: "24px Courier", fill: "#fff" };
    this.game.add.text(500, 300, 'LOADING', style);
    this.game.load.image('background', '../assets/bg.png'); // also move to preload state
    this.game.load.atlasJSONArray('sprites', '../assets/alteredbeast.png', '../assets/alteredbeast.json');
    // this.events.loadPlayerResponseStream(this.socket).subscribe(() => this.dataLoaded = true);
  }

  create():void {
    // this.socket.emit(this.events.loadPlayerEvent);
  }

  update():void {
    this.game.state.start('battle');
  }
}
