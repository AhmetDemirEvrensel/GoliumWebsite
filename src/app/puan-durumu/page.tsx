'use client';

import { useState } from 'react';
import Header from "../../components/Header";
import styles from "./page.module.css";

interface Team {
  id: number;
  name: string;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
  points: number;
}

interface Match {
  id: number;
  homeTeam: string;
  awayTeam: string;
  homeScore?: number;
  awayScore?: number;
  date: string;
  time: string;
  played: boolean;
}

interface Player {
  id: number;
  name: string;
  team: string;
  goals: number;
  assists: number;
  matches: number;
}

// Mock data for 8 groups
const mockGroups: { [key: string]: Team[] } = {
  'A': [
    { id: 1, name: "Galatasaray", played: 3, won: 2, drawn: 1, lost: 0, goalsFor: 6, goalsAgainst: 2, goalDifference: 4, points: 7 },
    { id: 2, name: "Fenerbahçe", played: 3, won: 2, drawn: 0, lost: 1, goalsFor: 5, goalsAgainst: 3, goalDifference: 2, points: 6 },
    { id: 3, name: "Beşiktaş", played: 3, won: 1, drawn: 1, lost: 1, goalsFor: 4, goalsAgainst: 4, goalDifference: 0, points: 4 },
    { id: 4, name: "Trabzonspor", played: 3, won: 0, drawn: 0, lost: 3, goalsFor: 2, goalsAgainst: 8, goalDifference: -6, points: 0 },
  ],
  'B': [
    { id: 5, name: "Real Madrid", played: 3, won: 3, drawn: 0, lost: 0, goalsFor: 8, goalsAgainst: 1, goalDifference: 7, points: 9 },
    { id: 6, name: "Barcelona", played: 3, won: 2, drawn: 0, lost: 1, goalsFor: 6, goalsAgainst: 3, goalDifference: 3, points: 6 },
    { id: 7, name: "Atletico Madrid", played: 3, won: 1, drawn: 0, lost: 2, goalsFor: 3, goalsAgainst: 6, goalDifference: -3, points: 3 },
    { id: 8, name: "Sevilla", played: 3, won: 0, drawn: 0, lost: 3, goalsFor: 2, goalsAgainst: 9, goalDifference: -7, points: 0 },
  ],
  'C': [
    { id: 9, name: "Manchester City", played: 3, won: 2, drawn: 1, lost: 0, goalsFor: 7, goalsAgainst: 2, goalDifference: 5, points: 7 },
    { id: 10, name: "Liverpool", played: 3, won: 2, drawn: 1, lost: 0, goalsFor: 6, goalsAgainst: 3, goalDifference: 3, points: 7 },
    { id: 11, name: "Chelsea", played: 3, won: 1, drawn: 0, lost: 2, goalsFor: 4, goalsAgainst: 6, goalDifference: -2, points: 3 },
    { id: 12, name: "Arsenal", played: 3, won: 0, drawn: 0, lost: 3, goalsFor: 2, goalsAgainst: 8, goalDifference: -6, points: 0 },
  ],
  'D': [
    { id: 13, name: "Bayern München", played: 3, won: 3, drawn: 0, lost: 0, goalsFor: 9, goalsAgainst: 2, goalDifference: 7, points: 9 },
    { id: 14, name: "Borussia Dortmund", played: 3, won: 1, drawn: 1, lost: 1, goalsFor: 5, goalsAgainst: 5, goalDifference: 0, points: 4 },
    { id: 15, name: "RB Leipzig", played: 3, won: 1, drawn: 0, lost: 2, goalsFor: 4, goalsAgainst: 7, goalDifference: -3, points: 3 },
    { id: 16, name: "Eintracht Frankfurt", played: 3, won: 0, drawn: 1, lost: 2, goalsFor: 3, goalsAgainst: 7, goalDifference: -4, points: 1 },
  ],
  'E': [
    { id: 17, name: "PSG", played: 3, won: 2, drawn: 1, lost: 0, goalsFor: 7, goalsAgainst: 3, goalDifference: 4, points: 7 },
    { id: 18, name: "Olympique Marseille", played: 3, won: 2, drawn: 0, lost: 1, goalsFor: 6, goalsAgainst: 4, goalDifference: 2, points: 6 },
    { id: 19, name: "AS Monaco", played: 3, won: 1, drawn: 1, lost: 1, goalsFor: 5, goalsAgainst: 5, goalDifference: 0, points: 4 },
    { id: 20, name: "OGC Nice", played: 3, won: 0, drawn: 0, lost: 3, goalsFor: 2, goalsAgainst: 8, goalDifference: -6, points: 0 },
  ],
  'F': [
    { id: 21, name: "Juventus", played: 3, won: 2, drawn: 1, lost: 0, goalsFor: 6, goalsAgainst: 2, goalDifference: 4, points: 7 },
    { id: 22, name: "AC Milan", played: 3, won: 2, drawn: 0, lost: 1, goalsFor: 5, goalsAgainst: 3, goalDifference: 2, points: 6 },
    { id: 23, name: "Inter Milan", played: 3, won: 1, drawn: 1, lost: 1, goalsFor: 4, goalsAgainst: 4, goalDifference: 0, points: 4 },
    { id: 24, name: "AS Roma", played: 3, won: 0, drawn: 0, lost: 3, goalsFor: 1, goalsAgainst: 7, goalDifference: -6, points: 0 },
  ],
  'G': [
    { id: 25, name: "Ajax", played: 3, won: 3, drawn: 0, lost: 0, goalsFor: 8, goalsAgainst: 2, goalDifference: 6, points: 9 },
    { id: 26, name: "PSV Eindhoven", played: 3, won: 2, drawn: 0, lost: 1, goalsFor: 6, goalsAgainst: 4, goalDifference: 2, points: 6 },
    { id: 27, name: "Feyenoord", played: 3, won: 1, drawn: 0, lost: 2, goalsFor: 4, goalsAgainst: 6, goalDifference: -2, points: 3 },
    { id: 28, name: "AZ Alkmaar", played: 3, won: 0, drawn: 0, lost: 3, goalsFor: 2, goalsAgainst: 8, goalDifference: -6, points: 0 },
  ],
  'H': [
    { id: 29, name: "Sporting CP", played: 3, won: 2, drawn: 1, lost: 0, goalsFor: 7, goalsAgainst: 3, goalDifference: 4, points: 7 },
    { id: 30, name: "FC Porto", played: 3, won: 2, drawn: 0, lost: 1, goalsFor: 5, goalsAgainst: 4, goalDifference: 1, points: 6 },
    { id: 31, name: "Benfica", played: 3, won: 1, drawn: 1, lost: 1, goalsFor: 4, goalsAgainst: 4, goalDifference: 0, points: 4 },
    { id: 32, name: "Braga", played: 3, won: 0, drawn: 0, lost: 3, goalsFor: 2, goalsAgainst: 7, goalDifference: -5, points: 0 },
  ],
};

const mockFixtures: { [key: string]: Match[] } = {
  'A': [
    { id: 1, homeTeam: "Galatasaray", awayTeam: "Fenerbahçe", homeScore: 2, awayScore: 1, date: "22 Temmuz", time: "20:00", played: true },
    { id: 2, homeTeam: "Beşiktaş", awayTeam: "Trabzonspor", homeScore: 3, awayScore: 0, date: "22 Temmuz", time: "17:30", played: true },
    { id: 3, homeTeam: "Galatasaray", awayTeam: "Beşiktaş", date: "25 Temmuz", time: "20:00", played: false },
    { id: 4, homeTeam: "Fenerbahçe", awayTeam: "Trabzonspor", date: "25 Temmuz", time: "17:30", played: false },
  ],
  'B': [
    { id: 5, homeTeam: "Real Madrid", awayTeam: "Barcelona", homeScore: 3, awayScore: 1, date: "23 Temmuz", time: "21:00", played: true },
    { id: 6, homeTeam: "Atletico Madrid", awayTeam: "Sevilla", homeScore: 1, awayScore: 0, date: "23 Temmuz", time: "18:30", played: true },
    { id: 7, homeTeam: "Real Madrid", awayTeam: "Atletico Madrid", date: "26 Temmuz", time: "21:00", played: false },
    { id: 8, homeTeam: "Barcelona", awayTeam: "Sevilla", date: "26 Temmuz", time: "18:30", played: false },
  ],
};

// Mock data for top scorers
const mockTopScorers: Player[] = [
  { id: 1, name: "Cristiano Ronaldo", team: "Real Madrid", goals: 8, assists: 2, matches: 3 },
  { id: 2, name: "Lionel Messi", team: "Barcelona", goals: 7, assists: 4, matches: 3 },
  { id: 3, name: "Erling Haaland", team: "Manchester City", goals: 6, assists: 1, matches: 3 },
  { id: 4, name: "Kylian Mbappé", team: "PSG", goals: 5, assists: 3, matches: 3 },
  { id: 5, name: "Harry Kane", team: "Bayern München", goals: 5, assists: 2, matches: 3 },
  { id: 6, name: "Mauro Icardi", team: "Galatasaray", goals: 4, assists: 1, matches: 3 },
  { id: 7, name: "Dusan Vlahovic", team: "Juventus", goals: 4, assists: 0, matches: 3 },
  { id: 8, name: "Mohamed Salah", team: "Liverpool", goals: 3, assists: 2, matches: 3 },
];

// Mock data for top assists
const mockTopAssists: Player[] = [
  { id: 1, name: "Kevin De Bruyne", team: "Manchester City", goals: 2, assists: 6, matches: 3 },
  { id: 2, name: "Lionel Messi", team: "Barcelona", goals: 7, assists: 4, matches: 3 },
  { id: 3, name: "Luka Modric", team: "Real Madrid", goals: 1, assists: 4, matches: 3 },
  { id: 4, name: "Kylian Mbappé", team: "PSG", goals: 5, assists: 3, matches: 3 },
  { id: 5, name: "Bruno Fernandes", team: "Manchester City", goals: 2, assists: 3, matches: 3 },
  { id: 6, name: "Dries Mertens", team: "Galatasaray", goals: 2, assists: 3, matches: 3 },
  { id: 7, name: "Federico Chiesa", team: "Juventus", goals: 1, assists: 2, matches: 3 },
  { id: 8, name: "Harry Kane", team: "Bayern München", goals: 5, assists: 2, matches: 3 },
];

export default function Standings() {
  const [activeTab, setActiveTab] = useState<'standings' | 'fixtures' | 'statistics'>('standings');
  const [selectedGroup, setSelectedGroup] = useState('A');

  const groups = Object.keys(mockGroups);

  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.title}>Royal Cup Puan Durumu & Fikstür</h1>
          
          <div className={styles.tabContainer}>
            <button 
              className={`${styles.tab} ${activeTab === 'standings' ? styles.activeTab : ''}`}
              onClick={() => setActiveTab('standings')}
            >
              Puan Durumu
            </button>
            <button 
              className={`${styles.tab} ${activeTab === 'fixtures' ? styles.activeTab : ''}`}
              onClick={() => setActiveTab('fixtures')}
            >
              Fikstür
            </button>
            <button 
              className={`${styles.tab} ${activeTab === 'statistics' ? styles.activeTab : ''}`}
              onClick={() => setActiveTab('statistics')}
            >
              Gol & Asist Krallığı
            </button>
          </div>

          <div className={styles.groupSelector}>
            {groups.map(group => (
              <button
                key={group}
                className={`${styles.groupButton} ${selectedGroup === group ? styles.activeGroup : ''}`}
                onClick={() => setSelectedGroup(group)}
              >
                Grup {group}
              </button>
            ))}
          </div>

          {activeTab === 'standings' && (
            <div className={styles.standingsContainer}>
              <h2 className={styles.groupTitle}>Grup {selectedGroup} Puan Durumu</h2>
              <div className={styles.table}>
                <div className={styles.tableHeader}>
                  <div className={styles.headerCell}>Sıra</div>
                  <div className={styles.headerCell}>Takım</div>
                  <div className={styles.headerCell}>O</div>
                  <div className={styles.headerCell}>G</div>
                  <div className={styles.headerCell}>B</div>
                  <div className={styles.headerCell}>M</div>
                  <div className={styles.headerCell}>A</div>
                  <div className={styles.headerCell}>Y</div>
                  <div className={styles.headerCell}>Av</div>
                  <div className={styles.headerCell}>P</div>
                </div>
                {mockGroups[selectedGroup]
                  .sort((a, b) => b.points - a.points || b.goalDifference - a.goalDifference)
                  .map((team, index) => (
                    <div key={team.id} className={`${styles.tableRow} ${index < 2 ? styles.qualifiedRow : ''}`}>
                      <div className={styles.cell}>{index + 1}</div>
                      <div className={styles.teamCell}>{team.name}</div>
                      <div className={styles.cell}>{team.played}</div>
                      <div className={styles.cell}>{team.won}</div>
                      <div className={styles.cell}>{team.drawn}</div>
                      <div className={styles.cell}>{team.lost}</div>
                      <div className={styles.cell}>{team.goalsFor}</div>
                      <div className={styles.cell}>{team.goalsAgainst}</div>
                      <div className={styles.cell}>{team.goalDifference > 0 ? '+' : ''}{team.goalDifference}</div>
                      <div className={styles.pointsCell}>{team.points}</div>
                    </div>
                  ))}
              </div>
              <div className={styles.legend}>
                <div className={styles.legendItem}>
                  <div className={styles.qualifiedIndicator}></div>
                  <span>Bir sonraki tura geçen takımlar</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'fixtures' && (
            <div className={styles.fixturesContainer}>
              <h2 className={styles.groupTitle}>Grup {selectedGroup} Fikstürü</h2>
              <div className={styles.matchesList}>
                {(mockFixtures[selectedGroup] || []).map(match => (
                  <div key={match.id} className={styles.matchCard}>
                    <div className={styles.matchTeams}>
                      <span className={styles.homeTeam}>{match.homeTeam}</span>
                      <div className={styles.scoreContainer}>
                        {match.played ? (
                          <span className={styles.score}>{match.homeScore} - {match.awayScore}</span>
                        ) : (
                          <span className={styles.vs}>VS</span>
                        )}
                      </div>
                      <span className={styles.awayTeam}>{match.awayTeam}</span>
                    </div>
                    <div className={styles.matchInfo}>
                      <span className={styles.matchDate}>{match.date}</span>
                      <span className={styles.matchTime}>{match.time}</span>
                    </div>
                    <div className={styles.matchStatus}>
                      {match.played ? (
                        <span className={styles.played}>Oynanmış</span>
                      ) : (
                        <span className={styles.scheduled}>Planlanmış</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'statistics' && (
            <div className={styles.statisticsContainer}>
              <div className={styles.statisticsGrid}>
                <div className={styles.statisticsSection}>
                  <h2 className={styles.sectionTitle}>🥅 Gol Krallığı</h2>
                  <div className={styles.playersTable}>
                    <div className={styles.playersHeader}>
                      <div className={styles.playerHeaderCell}>Sıra</div>
                      <div className={styles.playerHeaderCell}>Oyuncu</div>
                      <div className={styles.playerHeaderCell}>Takım</div>
                      <div className={styles.playerHeaderCell}>Gol</div>
                      <div className={styles.playerHeaderCell}>Maç</div>
                    </div>
                    {mockTopScorers
                      .sort((a, b) => b.goals - a.goals)
                      .map((player, index) => (
                        <div key={player.id} className={`${styles.playerRow} ${index < 3 ? styles.topPlayerRow : ''}`}>
                          <div className={styles.playerCell}>{index + 1}</div>
                          <div className={styles.playerNameCell}>{player.name}</div>
                          <div className={styles.playerTeamCell}>{player.team}</div>
                          <div className={styles.playerStatCell}>{player.goals}</div>
                          <div className={styles.playerCell}>{player.matches}</div>
                        </div>
                      ))}
                  </div>
                </div>

                <div className={styles.statisticsSection}>
                  <h2 className={styles.sectionTitle}>🎯 Asist Krallığı</h2>
                  <div className={styles.playersTable}>
                    <div className={styles.playersHeader}>
                      <div className={styles.playerHeaderCell}>Sıra</div>
                      <div className={styles.playerHeaderCell}>Oyuncu</div>
                      <div className={styles.playerHeaderCell}>Takım</div>
                      <div className={styles.playerHeaderCell}>Asist</div>
                      <div className={styles.playerHeaderCell}>Maç</div>
                    </div>
                    {mockTopAssists
                      .sort((a, b) => b.assists - a.assists)
                      .map((player, index) => (
                        <div key={player.id} className={`${styles.playerRow} ${index < 3 ? styles.topPlayerRow : ''}`}>
                          <div className={styles.playerCell}>{index + 1}</div>
                          <div className={styles.playerNameCell}>{player.name}</div>
                          <div className={styles.playerTeamCell}>{player.team}</div>
                          <div className={styles.playerStatCell}>{player.assists}</div>
                          <div className={styles.playerCell}>{player.matches}</div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
