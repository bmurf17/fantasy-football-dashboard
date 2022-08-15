import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-tile',
  templateUrl: './team-tile.component.html',
  styleUrls: ['./team-tile.component.css'],
})
export class TeamTileComponent implements OnInit {
  @Input() teamName: string;
  @Input() teamRecord: string;

  constructor() {}

  ngOnInit(): void {}
}
