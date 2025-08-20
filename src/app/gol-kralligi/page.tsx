'use client';

import { useState, useEffect } from 'react';
import styles from './page.module.css';

interface PlayerStats {
  rank: number;
  name: string;
  team: string;
  goals: number;
}

export default function GolKralligi() {
  const [playerStats, setPlayerStats] = useState<PlayerStats[]>([]);

  useEffect(() => {
    fetch('/data/statistics.json')
      .then(response => response.json())
      .then(data => {
        const goalStats = data.goals || [];
        setPlayerStats(goalStats);
      })
      .catch(error => {
        console.error('Gol istatistikleri yüklenirken hata:', error);
      });
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Gol Krallığı</h1>
      
      <div className={styles.statsTable}>
        <div className={styles.tableHeader}>
          <div className={styles.rank}>Sıra</div>
          <div className={styles.playerName}>Oyuncu</div>
          <div className={styles.team}>Takım</div>
          <div className={styles.goals}>Gol</div>
        </div>
        
        {playerStats.map(player => (
          <div key={player.rank} className={styles.tableRow}>
            <div className={styles.rank}>{player.rank}</div>
            <div className={styles.playerName}>{player.name}</div>
            <div className={styles.team}>{player.team}</div>
            <div className={styles.goals}>{player.goals}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
