import { Component, OnInit } from '@angular/core';

export interface Tile {
  cols: number;
  rows: number;
  name: string;
  record: string;
  path: string;
}

@Component({
  selector: 'app-grid-layout',
  templateUrl: './grid-layout.component.html',
  styleUrls: ['./grid-layout.component.css'],
})
export class GridLayoutComponent implements OnInit {
  constructor() {}

  tiles: Tile[] = [
    { name: "Tyler's League ", path: 'tyler', record: '0-0', cols: 2, rows: 1 },
    { name: "Dad's Leage", path: 'dad', record: '0-0', cols: 2, rows: 1 },
    { name: 'Family League', path: 'family', record: '0-0', cols: 2, rows: 1 },
  ];

  ngOnInit(): void {}
}
