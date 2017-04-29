import { Injectable }   from '@angular/core';
import { mockTreePath } from './mock-tree';
import { Observable }   from 'rxjs/Observable';
import { HewnTree }     from './hewn-tree';

import * as io from 'socket.io-client';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/of';

import { treeResponse, FellEvents } from '../../shared/tree-response';

@Injectable()
export class TreeService {
  private url = 'http://localhost:3000';
  private socket:SocketIOClient.Socket;
  private requestStream:Observable<string>;
  private responseStream:Observable<HewnTree>;
  private fellEvents:FellEvents;

  constructor() { this.init(); }

  private init():void {
    this.socket = io(this.url);
    this.fellEvents = new FellEvents();
    this.requestStream = this.fellEvents.treeRequestStream();
    this.responseStream = this.fellEvents.treeResponseStream()
      .mergeMap(event => {
        return new Observable(stream => {
          this.socket.on(event, (treeData:treeResponse) => {
            console.log('hey');
            stream.next(new HewnTree(treeData.id, treeData.color, treeData.pointData))}); // todo: make factory

          return () => this.socket.disconnect();
        });
      });
  }

  public getResponseStream():Observable<HewnTree> {
    return this.responseStream;
  }

  public requestTree():void {
    this.requestStream.subscribe(event => this.socket.emit(event));
  }

}
