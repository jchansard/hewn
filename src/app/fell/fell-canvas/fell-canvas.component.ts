import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TreeService } from '../shared/tree.service';
import { Path, Project, PaperScope, View } from 'paper';
import * as paper from 'paper';

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
    this.getTree();
    // Draw the tree
		this.paper.view.draw();
  }

  getTree() {
    this.treeService.getTree(this.paper.project).then(tree => this.tree = tree);
  }

}
