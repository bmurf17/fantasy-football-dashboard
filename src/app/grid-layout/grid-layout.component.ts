import { Component, OnInit } from '@angular/core';
import { TEAMS } from '../mock-data';

@Component({
  selector: 'app-grid-layout',
  templateUrl: './grid-layout.component.html',
  styleUrls: ['./grid-layout.component.css'],
})
export class GridLayoutComponent implements OnInit {
  constructor() {}

  tiles = TEAMS;

  ngOnInit(): void {}
}
