import Image from "next/image";
import Header from "../components/Header";
import MatchesSection from "../components/MatchesSection";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        {/* Hero Section with Slider */}
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <h1>
                <span className={styles.highlight}>GOLİUM CUP</span>
                ŞAMPİYONLUK SENİ BEKLİYOR!
              </h1>
              <p>8 grup, 32 takım, tek hedef: şampiyonluk!</p>
            </div>
            <div className={styles.heroImage}>
              <Image
                src="/tanitim.jpg"
                alt="150.000 TL Ödüllü Futbol Turnuvası"
                width={600}
                height={450}
                priority
                className={styles.sliderImage}
              />
            </div>
          </div>
          
          <div className={styles.infoCards}>
            <div className={styles.infoCard}>
              <span className={styles.icon}>🏆</span>
              <span className={styles.label}>150.000 TL ÖDÜL</span>
            </div>
            <div className={styles.infoCard}>
              <span className={styles.icon}>⚽</span>
              <span className={styles.label}>32 TAKIM</span>
            </div>
            <div className={styles.infoCard}>
              <span className={styles.icon}>🏟️</span>
              <span className={styles.label}>8 GRUP</span>
            </div>
          </div>
        </section>

        {/* Matches Section */}
        <MatchesSection />
      </main>
    </div>
  );
}
