import { Actor } from '../actor';

export class Ability {
  private range: number;
  private _isFinished: boolean;
  readonly nextLinkedAbility: Ability;

  private started: boolean; // todo: don't tween or use this

  get isFinished():boolean {
    return this._isFinished;
  }

  update(actor:Actor) {
    if (this.started) return;
    let game:Phaser.Game = actor.sprite.game;
    let tween = game.add.tween(actor.sprite);
    tween.frameBased = true;
    tween.to({ x: 600 }, 1000, Phaser.Easing.Linear.None, true);
    tween.onComplete.add(() => this._isFinished = true, this);
    actor.animations.play('walk');
    this.started = true;
  }
}
