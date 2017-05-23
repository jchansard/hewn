import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TreeService } from '../shared/tree.service';
import { MndlGaemService } from '../service/mndl-gaem.service';
import { Path, Raster, Point, Style } from 'paper';
import { Observable }  from 'rxjs/Observable';

import { HewnTree } from '../shared/hewn-tree';

@Component({
  selector: 'mndl-gaem',
  templateUrl: './mndl-gaem.component.html',
  styleUrls: ['./mndl-gaem.component.css']
})
export class MndlGaemComponent implements OnInit {
  @ViewChild('fellCanvas') canvas: ElementRef;
  tree: Path;
  containerID: string = 'mndlgaem-container'

  constructor(private gameService: MndlGaemService) {

  }

  ngOnInit() {
    //this.subscribeToResponseStreams();
    // Create an empty project and a view for the canvas
    this.gameService.bindTo(this.containerID);
  }

  private subscribeToResponseStreams():void {
   //  this.treeService.subscribe(this.drawTree);
  }



// old tree stuff
  private getTree():void {
  //  this.treeService.requestTree();
  }

  private drawTree(tree:HewnTree):void {
    let treePath = new Path();
    let style = new Style();
    treePath.closed = true;
    style.strokeColor = tree.color;
    style.fillColor = tree.color;
    treePath.style = style;
    tree.pointData.forEach(point => treePath.add(new Point(point[0], point[1])));
  }

}
