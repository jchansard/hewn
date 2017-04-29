import { Injectable }   from '@angular/core';
import { mockTreePath } from './mock-tree';
import { Observable }   from 'rxjs/Observable';
import { HewnTree, HewnTreeFactory }     from './hewn-tree';

import * as io from 'socket.io-client';
import 'rxjs/add/operator/mergeMap';

import { ITreeResponse } from '../../common/json-data/json.ITreeResponse';
import { FellEvents } from '../../common/events/fell-events'

@Injectable()
export class TreeService {
  private url = 'http://localhost:3000';
  private socket:SocketIOClient.Socket;
  private requestStream:Observable<any>;
  private responseStream:Observable<HewnTree>;
  private fellEvents:FellEvents;

  constructor() { this.init(); }

  private init():void {
    // todo: use a service
    this.socket = io(this.url);
    this.fellEvents = new FellEvents();
    this.requestStream = this.fellEvents.treeRequestStream();
    this.responseStream = this.fellEvents.treeResponseStream()
      .mergeMap(responseEvent => {
        return new Observable(stream => {
          let hewnTreeFactory = new HewnTreeFactory();
          this.socket.on(responseEvent, (treeData:ITreeResponse) => stream.next(hewnTreeFactory.buildFromJSON(treeData)));

          return () => this.socket.disconnect();
        });
      });
  }

  public subscribe(handler:(HewnTree) => void) {
    this.responseStream.subscribe(handler)
  }

  public requestTree():void {
    this.requestStream.subscribe(requestEvent => this.socket.emit(requestEvent));
  }

}
