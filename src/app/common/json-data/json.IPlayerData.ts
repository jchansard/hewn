declare interface IActorData {}

export interface IPlayerData {
  id: number,
  name: string,
  commander: IActorData;
  deck: IActorData[];
}
