'use client';

import { useState, useEffect } from 'react';
import styles from './MatchesSection.module.css';

interface Match {
  id: number;
  homeTeam: string;
  awayTeam: string;
  date: string;
  time: string;
  stadium: string;
  group: string;
  week: number;
  status: string;
}

interface NewsItem {
  id: number;
  title: string;
  date: string;
}

export default function MatchesSection() {
  const [thisWeekMatches, setThisWeekMatches] = useState<Match[]>([]);
  const [nextWeekMatches, setNextWeekMatches] = useState<Match[]>([]);
  const [latestNews, setLatestNews] = useState<NewsItem[]>([]);
  const [thisWeekPage, setThisWeekPage] = useState(0);
  const [nextWeekPage, setNextWeekPage] = useState(0);
  
  const MATCHES_PER_PAGE = 6;

  useEffect(() => {
    // JSON dosyasından maçları yükle
    fetch('/data/matches.json')
      .then(response => response.json())
      .then(data => {
        setThisWeekMatches(data.thisWeekMatches || []);
        setNextWeekMatches(data.nextWeekMatches || []);
      })
      .catch(error => {
        console.error('Maçlar yüklenirken hata:', error);
      });

    // JSON dosyasından haberleri yükle (son 3 haber)
    fetch('/data/news.json')
      .then(response => response.json())
      .then(data => {
        const sortedNews = (data.news || [])
          .sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime())
          .slice(0, 3);
        setLatestNews(sortedNews);
      })
      .catch(error => {
        console.error('Haberler yüklenirken hata:', error);
      });
  }, []);

  // Bu haftanın maçları için pagination
  const thisWeekStartIndex = thisWeekPage * MATCHES_PER_PAGE;
  const thisWeekEndIndex = thisWeekStartIndex + MATCHES_PER_PAGE;
  const thisWeekVisibleMatches = thisWeekMatches.slice(thisWeekStartIndex, thisWeekEndIndex);
  const thisWeekTotalPages = Math.ceil(thisWeekMatches.length / MATCHES_PER_PAGE);

  // Gelecek haftanın maçları için pagination
  const nextWeekStartIndex = nextWeekPage * MATCHES_PER_PAGE;
  const nextWeekEndIndex = nextWeekStartIndex + MATCHES_PER_PAGE;
  const nextWeekVisibleMatches = nextWeekMatches.slice(nextWeekStartIndex, nextWeekEndIndex);
  const nextWeekTotalPages = Math.ceil(nextWeekMatches.length / MATCHES_PER_PAGE);

  const nextThisWeekPage = () => {
    if (thisWeekPage < thisWeekTotalPages - 1) {
      setThisWeekPage(thisWeekPage + 1);
    }
  };

  const prevThisWeekPage = () => {
    if (thisWeekPage > 0) {
      setThisWeekPage(thisWeekPage - 1);
    }
  };

  const nextNextWeekPage = () => {
    if (nextWeekPage < nextWeekTotalPages - 1) {
      setNextWeekPage(nextWeekPage + 1);
    }
  };

  const prevNextWeekPage = () => {
    if (nextWeekPage > 0) {
      setNextWeekPage(nextWeekPage - 1);
    }
  };

  return (
    <section className={styles.matchesSection}>
      {/* Bu Haftanın Maçları */}
      {thisWeekMatches.length > 0 && (
        <div className={styles.weekSection}>
          <div className={styles.weekHeader}>
            <h2>Bu Haftanın Maçları</h2>
            {thisWeekMatches.length > MATCHES_PER_PAGE && (
              <div className={styles.navigation}>
                <button 
                  onClick={prevThisWeekPage} 
                  disabled={thisWeekPage === 0}
                  className={styles.navButton}
                >
                  &#8249;
                </button>
                <span className={styles.pageInfo}>
                  {thisWeekPage + 1} / {thisWeekTotalPages}
                </span>
                <button 
                  onClick={nextThisWeekPage} 
                  disabled={thisWeekPage >= thisWeekTotalPages - 1}
                  className={styles.navButton}
                >
                  &#8250;
                </button>
              </div>
            )}
          </div>
          <div className={styles.matchesGrid}>
            {thisWeekVisibleMatches.map((match) => (
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
                  <div className={styles.group}>Grup {match.group}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Gelecek Haftanın Maçları */}
      {nextWeekMatches.length > 0 && (
        <div className={styles.weekSection}>
          <div className={styles.weekHeader}>
            <h2>Gelecek Haftanın Maçları</h2>
            {nextWeekMatches.length > MATCHES_PER_PAGE && (
              <div className={styles.navigation}>
                <button 
                  onClick={prevNextWeekPage} 
                  disabled={nextWeekPage === 0}
                  className={styles.navButton}
                >
                  &#8249;
                </button>
                <span className={styles.pageInfo}>
                  {nextWeekPage + 1} / {nextWeekTotalPages}
                </span>
                <button 
                  onClick={nextNextWeekPage} 
                  disabled={nextWeekPage >= nextWeekTotalPages - 1}
                  className={styles.navButton}
                >
                  &#8250;
                </button>
              </div>
            )}
          </div>
          <div className={styles.matchesGrid}>
            {nextWeekVisibleMatches.map((match) => (
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
                  <div className={styles.group}>Grup {match.group}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      
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
              <div className={styles.statNumber}>{thisWeekMatches.length + nextWeekMatches.length}</div>
              <div className={styles.statLabel}>Maç</div>
            </div>
          </div>
        </div>
        
        <div className={styles.newsSection}>
          <h2>Son Haberler</h2>
          <div className={styles.newsList}>
            {latestNews.map((news) => (
              <div key={news.id} className={styles.newsItem}>
                <span className={styles.newsDate}>{news.date}</span>
                <span className={styles.newsTitle}>{news.title}</span>
              </div>
            ))}
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
