import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-grid-layout',
  templateUrl: './grid-layout.component.html',
  styleUrls: ['./grid-layout.component.css'],
})
export class GridLayoutComponent implements OnInit {
  constructor() {}

  tiles: Tile[] = [
    { text: 'Team One ', cols: 2, rows: 1, color: 'lightblue' },
    { text: 'Team Two', cols: 2, rows: 1, color: 'lightgreen' },
    { text: 'Team Three', cols: 2, rows: 1, color: 'lightpink' },
  ];

  ngOnInit(): void {}
}
