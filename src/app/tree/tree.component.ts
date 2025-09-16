import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
@Component({
  selector: 'app-tree',
  imports: [CommonModule],
  templateUrl: './tree.component.html',
  styleUrl: './tree.component.css'
})
export class TreeComponent {

  tree:{[key:string]:string[]}={
    "a":["b", "c"],
    "b":["d", "e"],
    "c":["f", "g"],
    "e":["h", "i"],
    "f":["j", "k"]
  }

  root='a';
  getChildren(node:string):string[]{
    return this.tree[node] || [];
  }

}
