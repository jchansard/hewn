import { Injectable }   from '@angular/core';
import { mockTreePath } from './mock-tree';
import { Observable }   from 'rxjs/Observable';
import { Http }         from '@angular/http';
import { HewnTree }     from './hewn-tree';

import 'rxjs/add/operator/map';

interface treeResponse {
  id: number,
  color: string,
  pointData: number[][]
}

@Injectable()
export class TreeService {
  treePoints: number[][] = [];
  constructor(private http:Http) { }

  getTree(): Observable<HewnTree> {
    return this.http.get('/api/tree')
      .map(response => response.json() as treeResponse)
      .map((data:treeResponse) => new HewnTree(data.id, data.color, data.pointData));
  }

}
