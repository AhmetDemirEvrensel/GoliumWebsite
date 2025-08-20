'use client';

import { useState, useEffect } from 'react';
import Header from "../../components/Header";
import styles from "./page.module.css";

interface NewsItem {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  category: string;
  priority: string;
}

export default function Haberler() {
  const [expandedNews, setExpandedNews] = useState<number[]>([]);
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  useEffect(() => {
    // Haber verilerini yükle
    fetch('/data/news.json')
      .then(response => response.json())
      .then(data => {
        setNews(data.news || []);
        setLoading(false);
      })
      .catch(error => {
        console.error('Haberler yüklenirken hata:', error);
        setLoading(false);
      });
  }, []);

  const toggleExpanded = (newsId: number) => {
    setExpandedNews(prev => 
      prev.includes(newsId) 
        ? prev.filter(id => id !== newsId)
        : [...prev, newsId]
    );
  };

  // Kategori filtreleme
  const filteredNews = selectedCategory === 'all' 
    ? news 
    : news.filter(item => item.category === selectedCategory);

  // Mevcut kategorileri bul
  const categories = ['all', ...Array.from(new Set(news.map(item => item.category)))];

  if (loading) {
    return (
      <div className={styles.page}>
        <Header />
        <main className={styles.main}>
          <div className={styles.container}>
            <div className={styles.loading}>Haberler yükleniyor...</div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h1>Tüm Haberler</h1>
            <p>Golium turnuvası ile ilgili en güncel haberler</p>
            
            {/* Kategori filtreleri */}
            <div className={styles.categoryFilters}>
              {categories.map(category => (
                <button
                  key={category}
                  className={`${styles.categoryBtn} ${selectedCategory === category ? styles.active : ''}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category === 'all' ? 'Tümü' : category}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.newsGrid}>
            {filteredNews.map((item) => {
              const isExpanded = expandedNews.includes(item.id);
              return (
                <article key={item.id} className={styles.newsCard}>
                  <div className={styles.newsContent}>
                    <div className={styles.newsHeader}>
                      <span className={styles.newsDate}>{item.date}</span>
                      <span className={`${styles.categoryTag} ${styles[item.priority]}`}>
                        {item.category}
                      </span>
                    </div>
                    <h2 className={styles.newsTitle}>{item.title}</h2>
                    <p className={styles.newsExcerpt}>
                      {isExpanded ? item.content : item.excerpt}
                    </p>
                    <button 
                      className={styles.readMore}
                      onClick={() => toggleExpanded(item.id)}
                    >
                      {isExpanded ? 'Daha Az Göster' : 'Devamını Oku'}
                    </button>
                  </div>
                </article>
              );
            })}
          </div>

          {filteredNews.length === 0 && (
            <div className={styles.noNews}>
              <p>Bu kategoride henüz haber bulunmuyor.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
