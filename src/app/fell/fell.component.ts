import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as paper from 'paper';

@Component({
  selector: 'fell-viewport',
  templateUrl: './fell.component.html',
  styleUrls: ['./fell.component.css']
})
export class FellComponent implements OnInit {
  @ViewChild('fellViewport') fellViewport: ElementRef;
  constructor() { }

  ngOnInit() {
    console.log(typeof this.fellViewport)
    // Create an empty project and a view for the canvas:
    paper.setup(this.fellViewport.nativeElement);
    var path = new paper.Path();
		// Give the stroke a color
		path.strokeColor = 'black';
		var start = new paper.Point(100, 100);
		// Move to start and draw a line from there
		path.moveTo(start);
		// Note that the plus operator on Point objects does not work
		// in JavaScript. Instead, we need to call the add() function:
		path.lineTo(start.add(new paper.Point(200, -50)));
		// Draw the view now:
		paper.view.draw();

  }

}
