import { Component, HostListener, OnInit } from '@angular/core';
import { TeamService } from '../services/team.service';
import { Team } from '../Types';

@Component({
  selector: 'app-grid-layout',
  templateUrl: './grid-layout.component.html',
  styleUrls: ['./grid-layout.component.css'],
})
export class GridLayoutComponent implements OnInit {
  teams: Team[] = [];
  getScreenWidth: any;
  columns: number;

  constructor(private teamService: TeamService) {}
  getTeams(): void {
    this.teamService.getTeams().subscribe((teams) => (this.teams = teams));
    this.getScreenWidth = window.innerWidth;
  }

  ngOnInit(): void {
    this.columns = 8
    this.getTeams();
    this.adjustColumns();
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
    this.adjustColumns();
  }

  adjustColumns() {
    if(window.innerWidth < 600){
      this.columns = 2;
    }
    else if (window.innerWidth >= 600 && window.innerWidth < 960) {
      this.columns = 4;
    }
    else if (window.innerWidth >= 960 && window.innerWidth < 1290){
      this.columns = 6;
    }
    else{
      this.columns = 8;
    }
  }
}
