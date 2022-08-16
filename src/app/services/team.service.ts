import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Team } from '../Types';
import { TEAMS } from '../mock-data';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  constructor() {}

  getTeams(): Observable<Team[]> {
    const teams = of(TEAMS);
    return teams;
  }

  getTeamById(id: number): Observable<Team> {
    const team = TEAMS.find((team) => team.id === id)!;
    return of(team);
  }
}
