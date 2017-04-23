import { Injectable } from '@angular/core';
import { Project, Path, Point, Style } from 'paper';
import { mockTreePath } from './mock-tree';

@Injectable()
export class TreeService {

  constructor() { }
  getTree(project:Project): Promise<Path> {
    return new Promise(resolve => {
      let treePath = new Path();
      let style = new Style();
      treePath.closed = true;
      style.strokeColor = "brown";
      style.fillColor = "brown";
      treePath.style = style;
      mockTreePath.forEach(point => treePath.add(new Point(point[0], point[1])));
      treePath.onClick = () => treePath.fillColor = "green";
      resolve(treePath);
      //   console.log(x + ';' +  yArray[index]);
      // });
    });
  }
}
