import { Player, Position, Team } from './Types';

export const PLAYERS: Player[] = [
  {
    id: 1,
    teamId: [1],
    name: 'Justin Jeffesron',
    nflTeam: 'Vikings',
    position: Position.WR,
  },
  {
    id: 2,
    teamId: [2, 3, 4],
    name: 'Aaron Jones',
    nflTeam: 'Packers',
    position: Position.RB,
  },
  {
    id: 3,
    teamId: [1, 2, 4],
    name: 'Aaron Rodgers',
    nflTeam: 'Packers',
    position: Position.QB,
  },
];

export const TEAMS: Team[] = [
  {
    id: 1,
    name: "Tyler's League",
    path: 'tyler',
    record: '0-0',
    cols: 2,
    rows: 1,
    players: [PLAYERS[0], PLAYERS[2]],
  },
  {
    id: 2,
    name: "Dad's Leage",
    path: 'dad',
    record: '0-0',
    cols: 2,
    rows: 1,
    players: [PLAYERS[1], PLAYERS[2]],
  },
  {
    id: 3,
    name: 'Family League',
    path: 'family',
    record: '0-0',
    cols: 2,
    rows: 1,
    players: [PLAYERS[1]],
  },
  {
    id: 4,
    name: 'Connor Dynasty League',
    path: 'dynasty',
    record: '0-0',
    cols: 2,
    rows: 1,
    players: [PLAYERS[1], PLAYERS[2]],
  },
];
