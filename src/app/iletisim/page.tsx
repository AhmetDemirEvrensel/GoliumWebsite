import Header from "../../components/Header";
import styles from "./page.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "İletişim - Golium Cup",
  description: "Golium Cup ile iletişime geçin. Turnuva hakkında sorularınız için bizimle iletişim kurun.",
  keywords: "golium cup iletişim, futbol turnuvası iletişim, turnuva sorular, golium cup instagram",
  openGraph: {
    title: "İletişim - Golium Cup",
    description: "Golium Cup ile iletişime geçin. Turnuva hakkında sorularınız için bizimle iletişim kurun.",
    url: "https://www.goliumcup.com.tr/iletisim",
  },
};

export default function Contact() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.title}>İletişim</h1>
          
          <div className={styles.contentGrid}>
            <div className={styles.contactInfo}>
              <h2>Bizimle İletişime Geçin</h2>
              <p>
                Turnuva hakkında sorularınız, önerileriniz veya destek ihtiyaçlarınız için 
                bizimle iletişime geçebilirsiniz. Ekibimiz size en kısa sürede dönüş yapacaktır.
              </p>

                            <div className={styles.socialSection}>
                <h3>Sosyal Medya</h3>
                <div className={styles.socialLinks}>
                  <a 
                    href="https://www.instagram.com/goliumtr/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                  >
                    📸 Instagram
                  </a>
                </div>
              </div>

              <div className={styles.divider}></div>

              <div className={styles.faqSection}>
                <h2>Sık Sorulan Sorular</h2>
                <div className={styles.faqGrid}>
                  <div className={styles.faqCard}>
                    <h3>Takım kaydı nasıl yapılır?</h3>
                    <p>
                      Takım kaydı için iletişim formunu kullanabilir veya doğrudan telefon ile 
                      bize ulaşabilirsiniz. Her takımın bir başkanı olmak zorundadır ve 
                      minimum 20 oyuncu kadrosu gereklidir.
                    </p>
                  </div>

                  <div className={styles.faqCard}>
                    <h3>Kayıt ücreti ne kadardır?</h3>
                    <p>
                      Kişi başı katılım ücreti 1.000 TL&apos;dir. Takım başı minimum 20 oyuncu ile 
                      20.000 TL minimum ödeme gereklidir.
                    </p>
                  </div>

                  <div className={styles.faqCard}>
                    <h3>Turnuva formatı nasıldır?</h3>
                    <p>
                      32 takım, 8 grupta mücadele edecek. Grup liderleri çeyrek finale yükselecek. 
                      Maçlar 11&apos;e 11 formatında, 60 dakika süresince oynanacaktır.
                    </p>
                  </div>

                  <div className={styles.faqCard}>
                    <h3>Ödüller nelerdir?</h3>
                    <p>
                      1. Takım: 150.000 TL + Sonraki turnuvaya ücretsiz katılım,
                      2. ve 3. Takımlar: Sonraki turnuvaya ücretsiz katılım hakkı kazanacaktır.
                    </p>
                  </div>

                  <div className={styles.faqCard}>
                    <h3>Aktif lisanslı oyuncular oynayabilir mi?</h3>
                    <p>
                      Hayır, son 1 yıl içinde TFF lisanslı maçta oynamış oyuncular 
                      turnuvaya katılamaz. Bu durumda takım hükmen mağlup sayılır.
                    </p>
                  </div>

                  <div className={styles.faqCard}>
                    <h3>Maç süresi ve oyuncu değişikliği kuralları?</h3>
                    <p>
                      Maçlar 60 dakika sürer. Maksimum 5 oyuncu değişikliği yapılabilir. 
                      Çıkan oyuncu tekrar oyuna giremez.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
