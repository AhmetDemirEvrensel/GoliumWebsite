import Header from "../../components/Header";
import styles from "./page.module.css";

export default function AboutUs() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.contentContainer}>
            <section className={styles.aboutSection}>
              <h2 className={styles.sectionTitle}>Golium Hakkında</h2>
              <div className={styles.aboutContent}>
                <p>
                  Golium, Türkiye&apos;nin en prestijli futbol turnuvalarından biridir. 150.000 TL toplam
                  ödül havuzu ile düzenlenen bu dev organizasyon, profesyonel ve amatör takımları bir
                  araya getirerek futbol severlere unutulmaz deneyimler yaşatmayı hedefliyor.
                </p>
                <p>
                  Turnuva, fair play ruhunu ön planda tutarak, her seviyeden futbol takımına eşit
                  fırsatlar sunmaktadır. Modern stadyumlarda, profesyonel hakemler eşliğinde oynanan
                  maçlar, katılımcılara gerçek bir turnuva deneyimi yaşatacaktır.
                </p>
              </div>
            </section>

            <section className={styles.missionSection}>
              <h2 className={styles.sectionTitle}>Misyonumuz</h2>
              <div className={styles.missionContent}>
                <p>
                  Golium, amatör ruhu profesyonel heyecanla buluşturmayı amaçlayan özel bir futbol
                  organizasyonudur. Amacımız, her seviyeden futbol takımını bir araya getirerek,
                  katılımcılara unutulmaz bir turnuva deneyimi yaşatmaktır.
                </p>
                <p>
                  150.000 TL toplam ödül havuzu ile düzenlenen turnuvamız, fair play ruhunu ön planda
                  tutarak, sporun birleştirici gücünü ortaya çıkarmayı hedefler. Modern sahalar,
                  profesyonel hakemler ve titizlikle hazırlanmış organizasyon ile futbolun gerçek
                  heyecanını yaşatmaya devam ediyoruz.
                </p>
              </div>
            </section>

            <section className={styles.featuresSection}>
              <h2 className={styles.sectionTitle}>Turnuva Özellikleri</h2>
              <div className={styles.featuresGrid}>
                <div className={styles.featureCard}>
                  <div className={styles.featureIcon}>🏟️</div>
                  <h3>Modern Sahalar</h3>
                  <p>Profesyonel standartlarda, modern donanımlı sahalar</p>
                </div>
                <div className={styles.featureCard}>
                  <div className={styles.featureIcon}>👨‍⚖️</div>
                  <h3>Deneyimli Hakemler</h3>
                  <p>Federasyon belgeli, deneyimli hakem kadrosu</p>
                </div>
                <div className={styles.featureCard}>
                  <div className={styles.featureIcon}>🏅</div>
                  <h3>Fair Play</h3>
                  <p>Sportmenlik ve adalet ön planda</p>
                </div>
                <div className={styles.featureCard}>
                  <div className={styles.featureIcon}>📊</div>
                  <h3>Canlı Skor</h3>
                  <p>Anlık skorlar ve istatistikler</p>
                </div>
                <div className={styles.featureCard}>
                  <div className={styles.featureIcon}>�</div>
                  <h3>Kayıt Sistemi</h3>
                  <p>Dijital kayıt ve takip sistemi</p>
                </div>
                <div className={styles.featureCard}>
                  <div className={styles.featureIcon}>🎁</div>
                  <h3>Ödüller</h3>
                  <p>Şampiyonluk ve bireysel ödüller</p>
                </div>
              </div>
            </section>

            <section className={styles.contactSection}>
              <h2>Bizimle İletişime Geçin</h2>
              <p>
                Golium turnuvası hakkında detaylı bilgi almak ve başvuru yapmak için 
                aşağıdaki iletişim kanallarını kullanabilirsiniz.
              </p>
              <div className={styles.contactInfo}>
                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}>📧</div>
                  <div className={styles.contactText}>
                    <strong>E-posta</strong>
                    <span>info@golium.com</span>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
