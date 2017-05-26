import { Actor, actorInputActions } from '../actor';

export abstract class ActorState {
  protected actor: Actor;

  constructor(actor: Actor) {
    this.actor = actor;
  }

  update(input: actorInputActions):ActorState {
    return this;
  }

  enter():void {}
  exit():void {}
}
