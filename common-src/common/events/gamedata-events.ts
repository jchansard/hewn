import { GameDataEventNames } from './gamedata-events.names';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/of';

export class GameDataEvents {
  events:GameDataEventNames = new GameDataEventNames();

  public get loadPlayerEvent():string { return this.events.loadPlayer; }
  public get loadPlayerResponseEvent():string { return this.events.loadPlayerResponse }
  public loadPlayerResponseStream(socket:SocketIOClient.Socket):Observable<any> {
    return new Observable(stream => {
      socket.on(this.events.loadPlayerResponse, (playerData) => {
        stream.next(playerData)
        stream.complete();
      });
    })
  }
}
