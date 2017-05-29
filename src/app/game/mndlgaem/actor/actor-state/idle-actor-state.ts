import { ActorState, UsingAbilityActorState } from './';
import { Actor, actorInputActions } from '../actor';

export class IdleActorState extends ActorState {
  actor: Actor;

  enter():void {
    console.log('idle entered');
    this.actor.setAnimation('idle'); // todo: constantize
  }

  exit():void {}

  update(input:actorInputActions) {
    if (input == actorInputActions.ACT) {
      return new UsingAbilityActorState(this.actor, this.actor.nextAbility())
    }
    else return null;
  }
}
