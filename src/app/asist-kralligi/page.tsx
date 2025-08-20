'use client';

import { useState, useEffect } from 'react';
import styles from './page.module.css';

interface PlayerStats {
  rank: number;
  name: string;
  team: string;
  assists: number;
}

export default function AsistKralligi() {
  const [playerStats, setPlayerStats] = useState<PlayerStats[]>([]);

  useEffect(() => {
    fetch('/data/statistics.json')
      .then(response => response.json())
      .then(data => {
        const assistStats = data.assists || [];
        setPlayerStats(assistStats);
      })
      .catch(error => {
        console.error('Asist istatistikleri yüklenirken hata:', error);
      });
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Asist Krallığı</h1>
      
      <div className={styles.statsTable}>
        <div className={styles.tableHeader}>
          <div className={styles.rank}>Sıra</div>
          <div className={styles.playerName}>Oyuncu</div>
          <div className={styles.team}>Takım</div>
          <div className={styles.assists}>Asist</div>
        </div>
        
        {playerStats.map(player => (
          <div key={player.rank} className={styles.tableRow}>
            <div className={styles.rank}>{player.rank}</div>
            <div className={styles.playerName}>{player.name}</div>
            <div className={styles.team}>{player.team}</div>
            <div className={styles.assists}>{player.assists}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
