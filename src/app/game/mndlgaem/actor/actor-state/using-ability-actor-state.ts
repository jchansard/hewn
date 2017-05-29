import { Actor, actorInputActions } from '../actor';
import { ActorState, IdleActorState  } from './';
import { Ability } from '../ability';

export class UsingAbilityActorState extends ActorState {
  ability: Ability;
  inRange:boolean = false;

  constructor(actor:Actor, ability: Ability) {
    super(actor);
    this.ability = ability;
  }

  update(input: actorInputActions):ActorState {
    this.ability.update(this.actor);
    if (this.ability.isFinished) {
      let nextAbility:Ability = this.ability.nextLinkedAbility;
      // if there is no next ability, return to idle
      if (!nextAbility) {
        return new IdleActorState(this.actor);
      }
    // else if ((nextAbility.range = 0) && (!this.inRange)) { // todo: handle ranges better
    //   return new ApproachingPointActorState(this.actor)
    // }
      else return new UsingAbilityActorState(this.actor, nextAbility);
    }
  }
}
