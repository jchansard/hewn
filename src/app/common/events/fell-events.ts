import { Events } from './fell-events.enum';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/of';

export class FellEvents {
  treeRequestStream():Observable<string> { return Observable.of(String(Events.treeRequest)); }
  treeResponseStream():Observable<string> { return Observable.of(String(Events.treeResponse)); }
}
