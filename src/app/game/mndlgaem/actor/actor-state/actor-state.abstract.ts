import { Actor } from '../actor';

export abstract class ActorState {
  protected actor: Actor;

  constructor(actor: Actor) {
    this.actor = actor;
  }

  handleInput():ActorState {
    return this;
  }

  enter():void {}
  exit():void {}
}
