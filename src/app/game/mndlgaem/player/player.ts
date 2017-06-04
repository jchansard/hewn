import { MndlGaem } from '../core/game';
import { Actor, ActorBuilder } from '../actor/actor'
import { IPlayerData, IActorData } from '../../../common/json-data/';

export class Player {
  deck: Actor[];
  game: Phaser.Game;

  constructor(id:number, name:string, commander:Actor, deck:Actor[]) {
    this.deck = deck;
  }

  init(game:Phaser.Game) {
    this.game = game;
    this.deck.forEach((actor) => actor.init(this.game, 30, 630));
    // let moon = new Actor('bear')
    // moon.init(this.game, 30, 630);
    // this.deck.push(moon);
  }

  public activateCard() {
    this.deck[0].handleInput();
  }


  // todo: move this out of player to group that updates all actors
  public update() {
    this.deck[0].update();
  }
}

export class PlayerBuilder {

  public buildFromJSON(jsonData:IPlayerData, game:MndlGaem):Player {
    let player:Player, commander:Actor, deckData:IActorData[];
    let actorBuilder = new ActorBuilder();
    let deck:Actor[] = [];

    commander = actorBuilder.buildFromJSON(jsonData.commander);
    deckData = jsonData.deck;
    deckData.forEach((actorData:IActorData) => deck.push(actorBuilder.buildFromJSON(actorData)));

    player = new Player(jsonData.id, jsonData.name, commander, deck);
    return player;
  }
}
