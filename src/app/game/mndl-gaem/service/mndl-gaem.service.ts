import { Injectable } from '@angular/core';
import { Raster } from 'paper';
import * as paper from 'paper';

import { MndlGaem } from '../../../../../../mndlgaem/src/app/core/game';
//import { MndlGaem } from '../../../../../../phaser-test/phaser-es6-webpack/src/game';


@Injectable()
export class MndlGaemService {
  paper = paper;
  view = this.paper.view;

  game: MndlGaem;

  constructor() {

  }

  private draw() {
    // let bg = new Raster('assets/bg.png');
    // bg.position = this.view.center;
    // Draw the tree
		// this.view.draw();
    this.game.init();
  }

  public bindTo(containerID: string):void {
    // this.paper.setup(canvas);
    // this.draw();

    this.game = new MndlGaem(containerID);

  }
}
