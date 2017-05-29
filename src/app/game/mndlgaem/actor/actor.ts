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

  constructor(name:string) {
    this.name = name;

    //todo: load
    let ability = new Ability();
    let abilities = [];
    abilities.push(ability);
    this.abilities = new AbilityList(abilities);
  }

  public init(game:Phaser.Game, x:number, y: number) {
    this.sprite = new Phaser.Sprite(game, x, y, 'sprites', this.name + '_idle_1'); // todo: constant
    //this.sprite.scale = new Phaser.Point(3, 3);
    this.sprite.animations.add('idle', Phaser.Animation.generateFrameNames(this.name + '_idle_', 1, 1), 8, true); //todo: modular
    this.sprite.animations.add('walk', Phaser.Animation.generateFrameNames(this.name + '_walk_', 1, 4), 8, true);
    this.state = new IdleActorState(this);
    this.state.enter(); //todo:modularize obvi
    game.add.existing(this.sprite);

  }

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

  public setAnimation(key: string) {
    this.sprite.animations.play(key);
  }

  public nextAbility():Ability {
    return this.abilities.next();
  }

}
