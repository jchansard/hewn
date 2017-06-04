import { IActorData, IAnimationData } from '../../../common/json-data';
import { ActorAnimationComponent } from './actor-animation-component';

// todo: this should probably live elsewhere
export enum actorInputActions {
  ACT,
  NONE
}

import { ActorState, IdleActorState } from './actor-state'
import { Ability, AbilityList } from './ability';

export class Actor {
  public sprite: Phaser.Sprite;

  private name: string;
  private state: ActorState;
  private input: actorInputActions;
  private abilities: AbilityList;
  private _animations: ActorAnimationComponent;

  constructor(name:string) {
    this.name = name;

    //todo: load
    let ability = new Ability();
    let abilities = [];
    abilities.push(ability);
    this.abilities = new AbilityList(abilities);
    this._animations = new ActorAnimationComponent(this.name);
  }

  public init(game:Phaser.Game, x:number, y: number) {
    this.sprite = new Phaser.Sprite(game, x, y, 'sprites', this.animations.startingFrame); // todo: constant
    this.animations.init(this.sprite);
    //this.sprite.scale = new Phaser.Point(3, 3);
    // this.sprite.animations.add('idle', Phaser.Animation.generateFrameNames(this.name + '_idle_', 1, 1), 8, true); //todo: modular
    // this.sprite.animations.add('walk', Phaser.Animation.generateFrameNames(this.name + '_walk_', 1, 4), 8, true);
    this.state = new IdleActorState(this);
    this.state.enter(); //todo:modularize obvi
    game.add.existing(this.sprite);
  }

  public get animations() { return this._animations; }

  public update() {
    let state:ActorState = this.state.update(this.input);
    if (state) {
      this.state = state;
      this.state.enter();
    }
    this.input = actorInputActions.NONE;
  }

  public handleInput() {
    // todo: actually take input...
    this.input = actorInputActions.ACT;
  }

  public nextAbility():Ability {
    return this.abilities.next();
  }

}

export class ActorBuilder {
  public buildFromJSON(jsonData:IActorData):Actor {
    let newActor = new Actor(jsonData.name);
    jsonData.animations.forEach((animationData:IAnimationData) => newActor.animations.addAnimation(animationData.name, animationData.beginFrame, animationData.endFrame));

    return newActor;
  }
}
