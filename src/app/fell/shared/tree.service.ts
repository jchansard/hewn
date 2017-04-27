import { Injectable }   from '@angular/core';
import { mockTreePath } from './mock-tree';
import { Observable }   from 'rxjs/Observable';
import { HewnTree }     from './hewn-tree';

import * as io from 'socket.io-client';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

interface treeResponse {
  id: number,
  color: string,
  pointData: number[][]
}

@Injectable()
export class TreeService {
  private url = 'http://localhost:3000';
  private socket:SocketIOClient.Socket;
  private requestStream:Observable<any>;

  constructor() { this.init(); }

  private init():void {
    this.socket = io(this.url);
    this.requestStream = Observable.of('request-tree');
  }

  public getTreeStream(): Observable<HewnTree> {
    let treeStream = new Observable(stream => {
      this.socket.on('tree-update', (treeData:treeResponse) => stream.next(new HewnTree(treeData.id, treeData.color, treeData.pointData))); // todo: make factory

      return () => this.socket.disconnect();
    })

    return treeStream;
  }

  public getTree() {
    this.requestStream.subscribe(event => this.socket.emit(event));
  }

}
