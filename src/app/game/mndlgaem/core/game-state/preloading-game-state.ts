import { MndlGaemState } from './';

export class PreloadingGameState extends MndlGaemState {

  constructor() {
    super();
  }
  preload():void {
    let style:Phaser.PhaserTextStyle = { font: "24px Courier", fill: "#fff" };
    this.game.add.text(500, 300, 'PRELOADING', style);
  }

  create():void {
  }

  update():void {
    console.log('preloading');
  }
}
