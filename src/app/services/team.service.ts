import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Team } from '../Types';
import { TEAMS } from '../mock-data';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  constructor(private http: HttpClient) {}
  private teamsUrl = 'https://localhost:7061/api/Team';
  private teams: Observable<Team[]>;

  getTeams(): Observable<Team[]> {
    this.teams = this.http.get<Team[]>(this.teamsUrl) 
    return this.teams;
  }

  getTeamById(id: number): Observable<Team> {
    const sub = this.teams.subscribe();

    const team = TEAMS.find((team) => team.id === id)!;
    return of(team);
  }
}
