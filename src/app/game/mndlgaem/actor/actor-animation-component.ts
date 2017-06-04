import { Actor } from './actor';

class ActorAnimation {
  constructor(public name: string, public beginFrame: number = 1, public endFrame: number = 1, public frameRate: number = 8, public shouldLoop: boolean = true) { }
}

export class ActorAnimationComponent {
  actorName: string;
  animations:ActorAnimation[];
  sprite: Phaser.Sprite;

  constructor(actorName:string) {
    this.actorName = actorName;
    this.animations = [];
  }

  public init(sprite:Phaser.Sprite):void {
    this.sprite = sprite;
    this.animations.forEach((animation) => this.sprite.animations.add(animation.name, Phaser.Animation.generateFrameNames(`${this.actorName}_${animation.name}_`, animation.beginFrame, animation.endFrame), animation.frameRate, animation.shouldLoop));
  }

  public get startingFrame():string {
      return `${this.actorName}_idle_1`;
  }

  public addAnimation(name:string, beginFrame?:number, endFrame?:number, frameRate?:number, loop?:boolean):void {
    this.animations.push(new ActorAnimation(name, beginFrame, endFrame, frameRate, loop));
  }

  public play(key:string):void {
    this.sprite.animations.play(key);
  }

}
