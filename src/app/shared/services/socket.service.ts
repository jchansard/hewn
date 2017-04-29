import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';

@Injectable()
export class SocketService {
  private url = 'http://localhost:3000';
  private socket: SocketIOClient.Socket;

  constructor() {
    this.init();
  }

  init():void {
    this.socket = io();
  }

  getSocket():SocketIOClient.Socket {
    return this.socket;
  }
}
