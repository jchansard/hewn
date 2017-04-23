import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TreeService } from '../shared/tree.service';
import { Path, Project, PaperScope, Point, Style } from 'paper';
import { Observable }  from 'rxjs/Observable';
import * as paper from 'paper';

import { HewnTree } from '../shared/hewn-tree';

@Component({
  selector: 'fell-viewport',
  templateUrl: './fell-canvas.component.html',
  styleUrls: ['./fell-canvas.component.css']
})
export class FellCanvasComponent implements OnInit {
  @ViewChild('fellCanvas') canvas: ElementRef;
  tree: Path;
  paperScope: PaperScope;
  paper = paper;

  constructor(private treeService: TreeService) {

  }

  ngOnInit() {
    // Create an empty project and a view for the canvas
    this.paper.setup(this.canvas.nativeElement);
    // Load the tree
    this.getTree().subscribe((tree:HewnTree) => {
      let treePath = new Path();
      let style = new Style();
      treePath.closed = true;
      style.strokeColor = tree.color;
      style.fillColor = tree.color;
      treePath.style = style;
      tree.pointData.forEach(point => treePath.add(new Point(point[0], point[1])));
      treePath.onClick = () => treePath.fillColor = "green";
    });

    // Draw the tree
		this.paper.view.draw();
  }

  getTree():Observable<HewnTree> {
    return this.treeService.getTree();
  }

}
