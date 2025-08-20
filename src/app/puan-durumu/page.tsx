'use client';

import { useState, useEffect } from 'react';
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
  homeScore?: number | null;
  awayScore?: number | null;
  date: string;
  time: string;
  played: boolean;
  stadium?: string;
  group?: string;
}

interface Player {
  id: number;
  name: string;
  team: string;
  goals: number;
  assists: number;
  matches: number;
}

export default function Standings() {
  const [activeTab, setActiveTab] = useState<'standings' | 'fixtures' | 'statistics'>('standings');
  const [selectedGroup, setSelectedGroup] = useState('A');
  const [groups, setGroups] = useState<{ [key: string]: Team[] }>({});
  const [fixtures, setFixtures] = useState<{ [key: string]: Match[] }>({});
  const [topScorers, setTopScorers] = useState<Player[]>([]);
  const [topAssists, setTopAssists] = useState<Player[]>([]);
  const [scorersPage, setScorersPage] = useState(0);
  const [assistsPage, setAssistsPage] = useState(0);
  
  const PLAYERS_PER_PAGE = 8;

  useEffect(() => {
    // Puan durumu verilerini yükle
    fetch('/data/standings.json')
      .then(response => response.json())
      .then(data => {
        setGroups(data.groups || {});
      })
      .catch(error => {
        console.error('Puan durumu yüklenirken hata:', error);
      });

    // Fikstür verilerini yükle
    fetch('/data/fixtures.json')
      .then(response => response.json())
      .then(data => {
        setFixtures(data.fixtures || {});
      })
      .catch(error => {
        console.error('Fikstür yüklenirken hata:', error);
      });

    // İstatistik verilerini yükle
    fetch('/data/statistics.json')
      .then(response => response.json())
      .then(data => {
        setTopScorers(data.goalScorers || []);
        setTopAssists(data.assistProviders || []);
      })
      .catch(error => {
        console.error('İstatistikler yüklenirken hata:', error);
      });
  }, []);

  const groupKeys = Object.keys(groups).filter(key => groups[key].length > 0)
    .concat(Object.keys(fixtures).filter(key => fixtures[key].length > 0))
    .filter((value, index, self) => self.indexOf(value) === index) // Remove duplicates
    .sort(); // Sort alphabetically

  // Gol krallığı pagination
  const scorersStartIndex = scorersPage * PLAYERS_PER_PAGE;
  const scorersEndIndex = scorersStartIndex + PLAYERS_PER_PAGE;
  const scorersVisiblePlayers = topScorers
    .sort((a, b) => b.goals - a.goals)
    .slice(scorersStartIndex, scorersEndIndex);
  const scorersTotalPages = Math.ceil(topScorers.length / PLAYERS_PER_PAGE);

  // Asist krallığı pagination
  const assistsStartIndex = assistsPage * PLAYERS_PER_PAGE;
  const assistsEndIndex = assistsStartIndex + PLAYERS_PER_PAGE;
  const assistsVisiblePlayers = topAssists
    .sort((a, b) => b.assists - a.assists)
    .slice(assistsStartIndex, assistsEndIndex);
  const assistsTotalPages = Math.ceil(topAssists.length / PLAYERS_PER_PAGE);

  const nextScorersPage = () => {
    if (scorersPage < scorersTotalPages - 1) {
      setScorersPage(scorersPage + 1);
    }
  };

  const prevScorersPage = () => {
    if (scorersPage > 0) {
      setScorersPage(scorersPage - 1);
    }
  };

  const nextAssistsPage = () => {
    if (assistsPage < assistsTotalPages - 1) {
      setAssistsPage(assistsPage + 1);
    }
  };

  const prevAssistsPage = () => {
    if (assistsPage > 0) {
      setAssistsPage(assistsPage - 1);
    }
  };

  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.title}>Golium Puan Durumu & Fikstür</h1>
          
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
            {(activeTab === 'standings' || activeTab === 'fixtures') && groupKeys.map(group => (
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
                {(groups[selectedGroup] || [])
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
                {(fixtures[selectedGroup] || []).map(match => (
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
                  <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>🥅 Gol Krallığı</h2>
                    {topScorers.length > PLAYERS_PER_PAGE && (
                      <div className={styles.navigation}>
                        <button 
                          onClick={prevScorersPage} 
                          disabled={scorersPage === 0}
                          className={styles.navButton}
                        >
                          &#8249;
                        </button>
                        <span className={styles.pageInfo}>
                          {scorersPage + 1} / {scorersTotalPages}
                        </span>
                        <button 
                          onClick={nextScorersPage} 
                          disabled={scorersPage >= scorersTotalPages - 1}
                          className={styles.navButton}
                        >
                          &#8250;
                        </button>
                      </div>
                    )}
                  </div>
                  <div className={styles.playersTable}>
                    <div className={styles.playersHeader}>
                      <div className={styles.playerHeaderCell}>Sıra</div>
                      <div className={styles.playerHeaderCell}>Oyuncu</div>
                      <div className={styles.playerHeaderCell}>Takım</div>
                      <div className={styles.playerHeaderCell}>Gol</div>
                      <div className={styles.playerHeaderCell}>Maç</div>
                    </div>
                    {scorersVisiblePlayers.map((player, index) => (
                      <div key={player.id} className={`${styles.playerRow} ${(scorersPage * PLAYERS_PER_PAGE + index) === 0 ? styles.topPlayerRow : ''}`}>
                        <div className={styles.playerCell}>{(scorersPage * PLAYERS_PER_PAGE + index) === 0 ? '👑' : scorersPage * PLAYERS_PER_PAGE + index + 1}</div>
                        <div className={styles.playerNameCell}>{player.name}</div>
                        <div className={styles.playerTeamCell}>{player.team}</div>
                        <div className={styles.playerStatCell}>{player.goals}</div>
                        <div className={styles.playerCell}>{player.matches}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={styles.statisticsSection}>
                  <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>🎯 Asist Krallığı</h2>
                    {topAssists.length > PLAYERS_PER_PAGE && (
                      <div className={styles.navigation}>
                        <button 
                          onClick={prevAssistsPage} 
                          disabled={assistsPage === 0}
                          className={styles.navButton}
                        >
                          &#8249;
                        </button>
                        <span className={styles.pageInfo}>
                          {assistsPage + 1} / {assistsTotalPages}
                        </span>
                        <button 
                          onClick={nextAssistsPage} 
                          disabled={assistsPage >= assistsTotalPages - 1}
                          className={styles.navButton}
                        >
                          &#8250;
                        </button>
                      </div>
                    )}
                  </div>
                  <div className={styles.playersTable}>
                    <div className={styles.playersHeader}>
                      <div className={styles.playerHeaderCell}>Sıra</div>
                      <div className={styles.playerHeaderCell}>Oyuncu</div>
                      <div className={styles.playerHeaderCell}>Takım</div>
                      <div className={styles.playerHeaderCell}>Asist</div>
                      <div className={styles.playerHeaderCell}>Maç</div>
                    </div>
                    {assistsVisiblePlayers.map((player, index) => (
                      <div key={player.id} className={`${styles.playerRow} ${(assistsPage * PLAYERS_PER_PAGE + index) === 0 ? styles.topPlayerRow : ''}`}>
                        <div className={styles.playerCell}>{(assistsPage * PLAYERS_PER_PAGE + index) === 0 ? '👑' : assistsPage * PLAYERS_PER_PAGE + index + 1}</div>
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
