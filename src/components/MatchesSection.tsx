'use client';

import { useState } from 'react';
import styles from './MatchesSection.module.css';

interface Match {
  id: number;
  homeTeam: string;
  awayTeam: string;
  date: string;
  time: string;
  stadium: string;
  week: number;
}

const mockMatches: Match[] = [
  { id: 1, homeTeam: "Galatasaray", awayTeam: "Fenerbahçe", date: "22 Temmuz", time: "20:00", stadium: "Türk Telekom Stadyumu", week: 1 },
  { id: 2, homeTeam: "Beşiktaş", awayTeam: "Trabzonspor", date: "22 Temmuz", time: "17:30", stadium: "Vodafone Park", week: 1 },
  { id: 3, homeTeam: "Real Madrid", awayTeam: "Barcelona", date: "23 Temmuz", time: "21:00", stadium: "Santiago Bernabeu", week: 1 },
  { id: 4, homeTeam: "Manchester City", awayTeam: "Liverpool", date: "23 Temmuz", time: "19:00", stadium: "Etihad Stadium", week: 1 },
  { id: 5, homeTeam: "Bayern München", awayTeam: "Borussia Dortmund", date: "24 Temmuz", time: "20:30", stadium: "Allianz Arena", week: 1 },
  { id: 6, homeTeam: "PSG", awayTeam: "Olympique Marseille", date: "24 Temmuz", time: "22:00", stadium: "Parc des Princes", week: 1 },
  { id: 7, homeTeam: "Juventus", awayTeam: "AC Milan", date: "25 Temmuz", time: "21:30", stadium: "Allianz Stadium", week: 1 },
  { id: 8, homeTeam: "Chelsea", awayTeam: "Arsenal", date: "25 Temmuz", time: "18:00", stadium: "Stamford Bridge", week: 1 },
  
  // Next week matches
  { id: 9, homeTeam: "Fenerbahçe", awayTeam: "Beşiktaş", date: "29 Temmuz", time: "20:00", stadium: "Şükrü Saracoğlu", week: 2 },
  { id: 10, homeTeam: "Trabzonspor", awayTeam: "Galatasaray", date: "29 Temmuz", time: "17:30", stadium: "Medical Park Stadyumu", week: 2 },
  { id: 11, homeTeam: "Barcelona", awayTeam: "Manchester City", date: "30 Temmuz", time: "21:00", stadium: "Camp Nou", week: 2 },
  { id: 12, homeTeam: "Liverpool", awayTeam: "Bayern München", date: "30 Temmuz", time: "19:00", stadium: "Anfield", week: 2 },
  { id: 13, homeTeam: "Borussia Dortmund", awayTeam: "PSG", date: "31 Temmuz", time: "20:30", stadium: "Signal Iduna Park", week: 2 },
  { id: 14, homeTeam: "Olympique Marseille", awayTeam: "Juventus", date: "31 Temmuz", time: "22:00", stadium: "Orange Vélodrome", week: 2 },
  { id: 15, homeTeam: "AC Milan", awayTeam: "Chelsea", date: "1 Ağustos", time: "21:30", stadium: "San Siro", week: 2 },
  { id: 16, homeTeam: "Arsenal", awayTeam: "Real Madrid", date: "1 Ağustos", time: "18:00", stadium: "Emirates Stadium", week: 2 },
];

export default function MatchesSection() {
  const [currentWeekIndex, setCurrentWeekIndex] = useState(0);
  const [nextWeekIndex, setNextWeekIndex] = useState(0);

  const thisWeekMatches = mockMatches.filter(match => match.week === 1);
  const nextWeekMatches = mockMatches.filter(match => match.week === 2);

  const visibleThisWeek = thisWeekMatches.slice(currentWeekIndex * 4, (currentWeekIndex * 4) + 4);
  const visibleNextWeek = nextWeekMatches.slice(nextWeekIndex * 4, (nextWeekIndex * 4) + 4);

  const nextThisWeek = () => {
    if ((currentWeekIndex + 1) * 4 < thisWeekMatches.length) {
      setCurrentWeekIndex(currentWeekIndex + 1);
    }
  };

  const prevThisWeek = () => {
    if (currentWeekIndex > 0) {
      setCurrentWeekIndex(currentWeekIndex - 1);
    }
  };

  const nextNextWeek = () => {
    if ((nextWeekIndex + 1) * 4 < nextWeekMatches.length) {
      setNextWeekIndex(nextWeekIndex + 1);
    }
  };

  const prevNextWeek = () => {
    if (nextWeekIndex > 0) {
      setNextWeekIndex(nextWeekIndex - 1);
    }
  };

  return (
    <section className={styles.matchesSection}>
      <div className={styles.weekSection}>
        <div className={styles.weekHeader}>
          <h2>Bu Haftanın Maçları</h2>
          <div className={styles.navigation}>
            <button 
              onClick={prevThisWeek} 
              disabled={currentWeekIndex === 0}
              className={styles.navButton}
            >
              &#8249;
            </button>
            <button 
              onClick={nextThisWeek} 
              disabled={(currentWeekIndex + 1) * 4 >= thisWeekMatches.length}
              className={styles.navButton}
            >
              &#8250;
            </button>
          </div>
        </div>
        
        <div className={styles.matchesGrid}>
          {visibleThisWeek.map((match) => (
            <div key={match.id} className={styles.matchCard}>
              <div className={styles.teams}>
                <span className={styles.homeTeam}>{match.homeTeam}</span>
                <span className={styles.vs}>VS</span>
                <span className={styles.awayTeam}>{match.awayTeam}</span>
              </div>
              <div className={styles.matchInfo}>
                <div className={styles.datetime}>
                  <span className={styles.date}>{match.date}</span>
                  <span className={styles.time}>{match.time}</span>
                </div>
                <div className={styles.stadium}>{match.stadium}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.weekSection}>
        <div className={styles.weekHeader}>
          <h2>Gelecek Haftanın Maçları</h2>
          <div className={styles.navigation}>
            <button 
              onClick={prevNextWeek} 
              disabled={nextWeekIndex === 0}
              className={styles.navButton}
            >
              &#8249;
            </button>
            <button 
              onClick={nextNextWeek} 
              disabled={(nextWeekIndex + 1) * 4 >= nextWeekMatches.length}
              className={styles.navButton}
            >
              &#8250;
            </button>
          </div>
        </div>
        
        <div className={styles.matchesGrid}>
          {visibleNextWeek.map((match) => (
            <div key={match.id} className={styles.matchCard}>
              <div className={styles.teams}>
                <span className={styles.homeTeam}>{match.homeTeam}</span>
                <span className={styles.vs}>VS</span>
                <span className={styles.awayTeam}>{match.awayTeam}</span>
              </div>
              <div className={styles.matchInfo}>
                <div className={styles.datetime}>
                  <span className={styles.date}>{match.date}</span>
                  <span className={styles.time}>{match.time}</span>
                </div>
                <div className={styles.stadium}>{match.stadium}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.additionalSection}>
        <div className={styles.statsSection}>
          <h2>Turnuva İstatistikleri</h2>
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>32</div>
              <div className={styles.statLabel}>Takım</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>8</div>
              <div className={styles.statLabel}>Grup</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>150.000₺</div>
              <div className={styles.statLabel}>Ödül</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>64</div>
              <div className={styles.statLabel}>Maç</div>
            </div>
          </div>
        </div>
        
        <div className={styles.newsSection}>
          <h2>Son Haberler</h2>
          <div className={styles.newsList}>
            <div className={styles.newsItem}>
              <span className={styles.newsDate}>18 Temmuz 2025</span>
              <span className={styles.newsTitle}>Turnuva başvuruları tamamlandı!</span>
            </div>
            <div className={styles.newsItem}>
              <span className={styles.newsDate}>17 Temmuz 2025</span>
              <span className={styles.newsTitle}>Grup kuraları çekildi</span>
            </div>
            <div className={styles.newsItem}>
              <span className={styles.newsDate}>16 Temmuz 2025</span>
              <span className={styles.newsTitle}>Stadyum rezervasyonları tamamlandı</span>
            </div>
          </div>
          <div className={styles.newsButtonContainer}>
            <a href="/haberler" className={styles.allNewsButton}>
              Tüm Haberler
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
