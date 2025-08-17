import Header from "../../components/Header";
import styles from "./page.module.css";

export default function AboutUs() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.title}>Biz Kimiz</h1>
          
          <div className={styles.contentContainer}>
            <section className={styles.introSection}>
              <h2>Misyonumuz</h2>
              <p>
                2010 yılından bu yana Türkiye'nin en prestijli futbol turnuvalarını organize eden 
                ekibimiz, sporun birleştirici gücüne inanıyor. Amacımız, profesyonel ve amatör 
                takımları bir araya getirerek, futbol severlere unutulmaz deneyimler yaşatmak.
              </p>
            </section>

            <section className={styles.visionSection}>
              <h2>Vizyonumuz</h2>
              <p>
                Türkiye'nin en büyük ve en kaliteli futbol turnuvalarının organizatörü olmak. 
                Her yaştan ve seviyeden futbolcuya eşit fırsatlar sunarak, sporun gelişimine 
                katkıda bulunmak en büyük hedefimiz.
              </p>
            </section>

            <div className={styles.statsSection}>
              <h2>Rakamlarla Biz</h2>
              <div className={styles.statsGrid}>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>15</div>
                  <div className={styles.statLabel}>Yıllık Deneyim</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>500+</div>
                  <div className={styles.statLabel}>Organize Edilen Turnuva</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>10.000+</div>
                  <div className={styles.statLabel}>Katılımcı Takım</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>50.000+</div>
                  <div className={styles.statLabel}>Mutlu Futbolcu</div>
                </div>
              </div>
            </div>

            <section className={styles.teamSection}>
              <h2>Ekibimiz</h2>
              <div className={styles.teamGrid}>
                <div className={styles.memberCard}>
                  <div className={styles.memberPhoto}></div>
                  <h3>Ahmet Yılmaz</h3>
                  <p className={styles.memberRole}>Genel Koordinatör</p>
                  <p className={styles.memberDesc}>
                    15 yıllık deneyimi ile turnuva organizasyonlarının başında yer alıyor.
                  </p>
                </div>
                <div className={styles.memberCard}>
                  <div className={styles.memberPhoto}></div>
                  <h3>Mehmet Kaya</h3>
                  <p className={styles.memberRole}>Sahalar Sorumlusu</p>
                  <p className={styles.memberDesc}>
                    Tüm saha rezervasyonları ve teknik düzenlemeleri koordine ediyor.
                  </p>
                </div>
                <div className={styles.memberCard}>
                  <div className={styles.memberPhoto}></div>
                  <h3>Fatma Demir</h3>
                  <p className={styles.memberRole}>Kayıt ve İletişim</p>
                  <p className={styles.memberDesc}>
                    Takım kayıtları ve katılımcı iletişiminden sorumlu.
                  </p>
                </div>
              </div>
            </section>

            <section className={styles.valuesSection}>
              <h2>Değerlerimiz</h2>
              <div className={styles.valuesGrid}>
                <div className={styles.valueCard}>
                  <div className={styles.valueIcon}>⚽</div>
                  <h3>Fair Play</h3>
                  <p>Adalet ve sportmenlik her zaman önceliğimizdir.</p>
                </div>
                <div className={styles.valueCard}>
                  <div className={styles.valueIcon}>🤝</div>
                  <h3>Takım Ruhu</h3>
                  <p>Birlikte hareket ederek en iyi sonuçları elde ederiz.</p>
                </div>
                <div className={styles.valueCard}>
                  <div className={styles.valueIcon}>🏆</div>
                  <h3>Kalite</h3>
                  <p>Her detayda mükemmelliği hedefleriz.</p>
                </div>
                <div className={styles.valueCard}>
                  <div className={styles.valueIcon}>💯</div>
                  <h3>Güvenilirlik</h3>
                  <p>Sözümüzün arkasında dururuz.</p>
                </div>
              </div>
            </section>

            <section className={styles.contactSection}>
              <h2>Bizimle İletişime Geçin</h2>
              <p>
                Sorularınız, önerileriniz veya iş birliği teklifleriniz için 
                bizimle iletişime geçmekten çekinmeyin.
              </p>
              <div className={styles.contactInfo}>
                <div className={styles.contactItem}>
                  <strong>E-posta:</strong> info@futbolturnuvasi.com
                </div>
                <div className={styles.contactItem}>
                  <strong>Telefon:</strong> +90 555 123 4567
                </div>
                <div className={styles.contactItem}>
                  <strong>Adres:</strong> Spor Kompleksi, İstanbul
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
