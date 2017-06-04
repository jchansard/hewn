import { IActorData } from './';

export interface IPlayerData {
  id: number,
  name: string,
  commander: IActorData;
  deck: IActorData[];
}
