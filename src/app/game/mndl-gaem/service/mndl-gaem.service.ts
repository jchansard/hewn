import { Injectable } from '@angular/core';
import { Raster } from 'paper';
import * as paper from 'paper';

@Injectable()
export class MndlGaemService {
  paper = paper;
  view = this.paper.view;

  constructor() { }

  private draw() {
    let bg = new Raster('assets/bg.png');
    bg.position = this.view.center;
    // Draw the tree
		this.view.draw();
  }

  public bindTo(canvas: HTMLCanvasElement):void {
    this.paper.setup(canvas);
    this.draw();
  }
}
