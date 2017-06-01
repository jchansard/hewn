import { ActorState, UsingAbilityActorState } from './';
import { Actor, actorInputActions } from '../actor';
import { Ability } from '../ability';

export class IdleActorState extends ActorState {
  actor: Actor;

  enter():void {
    console.log('idle entered');
    this.actor.setAnimation('idle'); // todo: constantize
  }

  exit():void {}

  update(input:actorInputActions) {
    if (input == actorInputActions.ACT) {
      let ability:Ability = this.actor.nextAbility();
      if (ability !== null) {
        return new UsingAbilityActorState(this.actor, ability)
      }
    }
    else return null;
  }
}
