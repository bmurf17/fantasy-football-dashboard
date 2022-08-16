export interface Team {
  id: number;
  cols: number;
  rows: number;
  name: string;
  record: string;
  path: string;
  players: Player[];
}

export interface Player {
  id: number;
  teamId: number[];
  name: string;
  nflTeam: string;
  position: Position;
}

export enum Position {
  RB = 'RB',
  WR = 'WR',
  TE = 'TE',
  QB = 'QB',
  DEF = 'DEF',
  K = 'K',
}
