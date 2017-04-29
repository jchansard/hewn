import { Injectable }                from '@angular/core';
import { Observable }                from 'rxjs/Observable';
import { HewnTree, HewnTreeFactory } from './hewn-tree';
import { SocketService }             from '../../shared/services/socket.service';
import { ITreeResponse }             from '../../common/json-data/json.ITreeResponse';
import { FellEvents }                from '../../common/events/fell-events'

import 'rxjs/add/operator/mergeMap';

@Injectable()
export class TreeService {
  private socket:SocketIOClient.Socket;
  private requestStream:Observable<any>;
  private responseStream:Observable<HewnTree>;

  constructor(private socketService: SocketService) { this.init(); }

  private init():void {
    // todo: use a service
    this.socket = this.socketService.getSocket();
    let fellEvents = new FellEvents();
    this.requestStream = fellEvents.treeRequestStream();
    this.responseStream = fellEvents.treeResponseStream()
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
