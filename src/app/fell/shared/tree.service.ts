import { Injectable } from '@angular/core';
import { Project, Path, Point, Style } from 'paper';
import { mockTreePath } from './mock-tree';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TreeService {
  treePoints: any = [];
  constructor(private http:Http) { }

  getTree(project:Project): Promise<Path> {
    return new Promise(resolve => {
      this.loadTree().subscribe(points => {
        this.treePoints = points;
        let treePath = new Path();
        let style = new Style();
        treePath.closed = true;
        style.strokeColor = "brown";
        style.fillColor = "brown";
        treePath.style = style;
        this.treePoints.forEach(point => treePath.add(new Point(point[0], point[1])));
        treePath.onClick = () => treePath.fillColor = "green";
        resolve(treePath);
      });
    })
  }

  loadTree() {
    return this.http.get('/api/tree').map(response => response.json());
  }

}
