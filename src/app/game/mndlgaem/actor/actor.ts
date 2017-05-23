import { ActorState, IdleActorState } from './actor-state'

export class Actor {
  state: ActorState;
  sprite: Phaser.Sprite;
  name: string;

  constructor(name:string) {
    this.name = name;
  }

  public init(game:Phaser.Game, x:number, y: number) {
    this.sprite = new Phaser.Sprite(game, x, y, this.name);
    this.sprite.animations.add('idle', Phaser.Animation.generateFrameNames(this.name, 1, 4), 5, true); //todo: modular
    this.state = new IdleActorState(this);
    this.state.enter(); //todo:modularize obvi
    game.add.existing(this.sprite);

  }

  public update() {
    this.state.handleInput();
  }

  public setAnimation(key: string) {
    switch (key) {
      case 'idle': {
        this.sprite.animations.play('idle');
      }
    }
  }
}
