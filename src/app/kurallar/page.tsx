import Header from "../../components/Header";
import styles from "./page.module.css";

export default function Rules() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.title}>Royal Cup Turnuva Kuralları</h1>
          
          <div className={styles.rulesContainer}>
            <section className={styles.ruleSection}>
              <h2>Genel Kurallar</h2>
              <ul>
                <li>Turnuva 8 grup halinde oynanacaktır</li>
                <li>Her grupta 4 takım yer alacaktır</li>
                <li>Grup maçları tek devreli lig usulü oynanacaktır</li>
                <li>Her gruptan ilk 2 takım bir sonraki tura geçecektir</li>
                <li>Maçlar 90 dakika + hakem ekleme süresi olarak oynanacaktır</li>
              </ul>
            </section>

            <section className={styles.ruleSection}>
              <h2>Puan Sistemi</h2>
              <ul>
                <li>Galibiyet: 3 puan</li>
                <li>Beraberlik: 1 puan</li>
                <li>Mağlubiyet: 0 puan</li>
                <li>Eşitlik durumunda sırasıyla: averaj, atılan gol, karşılıklı sonuç</li>
              </ul>
            </section>

            <section className={styles.ruleSection}>
              <h2>Oyuncu Kuralları</h2>
              <ul>
                <li>Her takım maximum 22 kişilik kadro ile katılabilir</li>
                <li>Maç sırasında 11 başlama oyuncusu + 11 yedek oyuncu</li>
                <li>Maç başına maximum 5 oyuncu değişikliği yapılabilir</li>
                <li>Oyuncular en az 18 yaşında olmalıdır</li>
                <li>Tüm oyuncular turnuva öncesi sağlık raporu sunmalıdır</li>
              </ul>
            </section>

            <section className={styles.ruleSection}>
              <h2>Disiplin Kuralları</h2>
              <ul>
                <li>Sarı kart: Uyarı (2 sarı kart = 1 maç ceza)</li>
                <li>Kırmızı kart: 1 maç ceza (ağır faulde daha fazla olabilir)</li>
                <li>Hakem kararlarına saygı gösterilmelidir</li>
                <li>Fair play kurallarına uyulmalıdır</li>
              </ul>
            </section>

            <section className={styles.ruleSection}>
              <h2>Ödül Sistemi</h2>
              <ul>
                <li>Şampiyon: 75.000 TL</li>
                <li>İkinci: 45.000 TL</li>
                <li>Üçüncü: 20.000 TL</li>
                <li>Dördüncü: 10.000 TL</li>
                <li>Fair Play Ödülü: 5.000 TL</li>
                <li>En İyi Golcü: 3.000 TL</li>
                <li>En İyi Kaleci: 2.000 TL</li>
              </ul>
            </section>

            <section className={styles.ruleSection}>
              <h2>Kayıt ve Başvuru</h2>
              <ul>
                <li>Kayıt ücreti: 2.500 TL (takım başına)</li>
                <li>Son başvuru tarihi: 25 Temmuz 2025</li>
                <li>Başvuru sırasında takım listeleri ve belgeler teslim edilmelidir</li>
                <li>Kayıt ücreti iade edilmez</li>
              </ul>
            </section>

            <div className={styles.contactInfo}>
              <h3>İletişim Bilgileri</h3>
              <p>Sorularınız için: info@futbolturnuvasi.com</p>
              <p>Telefon: +90 555 123 4567</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
