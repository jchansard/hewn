import { Injectable } from '@angular/core';
// import { Raster } from 'paper';
// import * as paper from 'paper';

import { MndlGaem } from '../mndlgaem/core/game';
import { SocketService } from '../../shared/services/socket.service';
//import { MndlGaem } from '../../../../../../phaser-test/phaser-es6-webpack/src/game';

import { GameDataEvents } from '../../common/events/gamedata-events';


@Injectable()
export class MndlGaemService {
  // paper = paper;
  // view = this.paper.view;
  private game: MndlGaem;
  private socket:SocketIOClient.Socket;
  private events:GameDataEvents;
  private containerID:string;

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
    this.events = new GameDataEvents();
    this.events.loadPlayerResponseStream(this.socket).subscribe((playerData) => { this.launchGame(playerData); });
  }

  public bindTo(containerID: string):void {
    // this.paper.setup(canvas);
    // this.draw();
    this.containerID = containerID;
    this.socket.emit(this.events.loadPlayerEvent);

    // todo: Move player load to mndlgaem!!!!!!!!!!
  }

  private launchGame(playerData:any) {
    console.log('launching');
    this.game = new MndlGaem(this.containerID, this.socket, playerData);
  //  this.init();
  }
}
