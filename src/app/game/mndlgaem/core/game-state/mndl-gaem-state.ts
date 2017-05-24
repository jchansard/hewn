import { InputComponent, keyActions } from './input/input-component';

export abstract class MndlGaemState extends Phaser.State {
  inputComponent: InputComponent;

  constructor() {
    super();
    this.inputComponent = new InputComponent();
  }

  protected onPreload() {
    this.inputComponent.init(this.game);
  }
}
