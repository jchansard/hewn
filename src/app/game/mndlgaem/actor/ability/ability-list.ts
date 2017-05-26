import { Ability } from './';

export class AbilityList {
  private currentIndex: number = 0;
  private abilities: Ability[];

  constructor(abilities:Ability[]) {
    this.abilities = abilities;
  }

  public next():Ability {
    if (this.currentIndex == this.abilities.length) { return null; }
    else return this.abilities[this.currentIndex++];
  }
}

//todo eventually: flyweight abilities?
