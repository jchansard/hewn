import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/of';

export interface ITreeResponse {
  id: number,
  color: string,
  pointData: number[][]
}

export class FellEvents {
  treeRequestStream():Observable<string> { return Observable.of('tree-request'); }
  treeResponseStream():Observable<string> { return Observable.of('tree-update'); }
}
