import { Actor } from '../actor/actor'

export class Player {
  deck: Actor[];
  game: Phaser.Game;

  constructor() {
    this.deck = [];
  }

  init(game:Phaser.Game) {
    this.game = game;
    let moon = new Actor('sprite')
    moon.init(this.game, 30, 30);
    this.deck.push(moon);
    console.log(this.deck);
  }

  public activateCard() {
    this.deck[0].handleInput();
  }


  // todo: move this out of player to group that updates all actors
  public update() {
    this.deck[0].update();
  }
}
