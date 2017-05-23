import { ActorState } from './';
import { Actor } from '../actor';

export class IdleActorState extends ActorState {
  actor: Actor;

  enter():void {
    this.actor.setAnimation('idle'); // todo: constantize
  }

  exit():void {}

  handleInput() {
    return this;
  }
}
