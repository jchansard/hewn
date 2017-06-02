import { IAbilityData, IAnimationData } from './';

export interface IActorData {
  id: number;
  name: string;
  abilities: IAbilityData[];
  animations: IAnimationData[];
}
