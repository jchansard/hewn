export enum keyActions {
  UP,
  DOWN,
  LEFT,
  RIGHT
}

export class InputComponent {
  private keys: Phaser.Key[];

  constructor(playerOverrides?: Phaser.Key[]) {
    // todo: implement overrides
  }

  public init(game:Phaser.Game) {
    let keys = {};
    keys[keyActions.UP] = Phaser.KeyCode.W;
    keys[keyActions.DOWN] = Phaser.KeyCode.S;
    keys[keyActions.LEFT] = Phaser.KeyCode.A;
    keys[keyActions.RIGHT] = Phaser.KeyCode.D;

    this.keys = game.input.keyboard.addKeys(keys);
  }

  public registerHandler(key:keyActions, handler:() => void, handlerContext?: any) {
    this.keys[key].onDown.add(handler, handlerContext);
  }
}
