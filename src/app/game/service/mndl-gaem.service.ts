import { Injectable } from '@angular/core';
// import { Raster } from 'paper';
// import * as paper from 'paper';

import { MndlGaem } from '../mndlgaem/core/game';
import { SocketService } from '../../shared/services/socket.service';
//import { MndlGaem } from '../../../../../../phaser-test/phaser-es6-webpack/src/game';

//import { GameDataEvents } from '../../common/events/gamedata-events';


@Injectable()
export class MndlGaemService {
  // paper = paper;
  // view = this.paper.view;
  private game: MndlGaem;
  private socket:SocketIOClient.Socket;

  constructor(private socketService: SocketService) {
    this.init();
  }

  private init() {
    // let bg = new Raster('assets/bg.png');
    // bg.position = this.view.center;
    // Draw the tree
		// this.view.draw();
    //this.game.init();
    this.socket = this.socketService.getSocket();
    // this.events = new GameDataEvents();
    // this.events.loadPlayerResponseStream(this.socket).subscribe((playerData) => { this.launchGame(playerData); });
  }

  public bindTo(containerID: string):void {
    // this.paper.setup(canvas);
    // this.draw();
    this.game = new MndlGaem(containerID, this.socket);
    // this.socket.emit(this.events.loadPlayerEvent);

  }

}
