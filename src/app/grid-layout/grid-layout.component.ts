import { Component, OnInit } from '@angular/core';
import { TeamService } from '../services/team.service';
import { Team } from '../Types';

@Component({
  selector: 'app-grid-layout',
  templateUrl: './grid-layout.component.html',
  styleUrls: ['./grid-layout.component.css'],
})
export class GridLayoutComponent implements OnInit {
  teams: Team[] = [];

  constructor(private teamService: TeamService) {}
  getTeams(): void {
    this.teamService.getTeams().subscribe((teams) => (this.teams = teams));
  }

  ngOnInit(): void {
    this.getTeams();
  }
}
