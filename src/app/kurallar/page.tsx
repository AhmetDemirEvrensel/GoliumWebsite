import Header from "../../components/Header";
import styles from "./page.module.css";

export default function Rules() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.title}>Golium Turnuva Kuralları</h1>
          
          <div className={styles.rulesContainer}>
            <section className={styles.ruleSection}>
              <h2>Turnuva Hakkında</h2>
              <ul>
                <li>Turnuvamız, amatör ruhu profesyonel heyecanla buluşturmayı amaçlayan özel bir futbol organizasyonudur.</li>
                <li>Toplam 32 takımın katılımıyla gerçekleşecek.</li>
                <li>Toplam ödül: 150.000 TL + Ücretsiz Katılım Hakları</li>
              </ul>
            </section>

            <section className={styles.ruleSection}>
              <h2>Turnuva Formatı</h2>
              <h3>Grup Aşaması:</h3>
              <ul>
                <li>8 grup, her grupta 4 takım.</li>
                <li>Her takım 3 maç oynayacak (her takıma karşı bir maç).</li>
                <li>Grup liderleri doğrudan çeyrek finale yükselecek.</li>
              </ul>
              
              <h3>Eleme Aşaması:</h3>
              <ul>
                <li>Çeyrek final, yarı final ve final maçları tek maç eleme sistemiyle oynanacak.</li>
                <li>Yarı finalde kaybeden takımlar 3.&apos;lük maçına çıkacak.</li>
              </ul>
            </section>

            <section className={styles.ruleSection}>
              <h2>Ödüller</h2>
              <ul>
                <li>🏆 1. Takım: 150.000 TL + Bir sonraki turnuvaya ücretsiz katılım</li>
                <li>🥈 2. Takım: Bir sonraki turnuvaya ücretsiz katılım</li>
                <li>🥉 3. Takım: Bir sonraki turnuvaya ücretsiz katılım</li>
              </ul>
            </section>

            <section className={styles.ruleSection}>
              <h2>Katılım Şartları</h2>
              <ul>
                <li>Takım başı en az 20 oyuncu</li>
                <li>Kişi başı katılım ücreti: 1000 TL</li>
                <li>Takım başı minimum ödeme: 20.000 TL</li>
                <li>Aktif lisanslı oyuncular turnuvaya katılamaz. (Son 1 yıl içinde TFF lisanslı maçta oynamış kişiler elenir)</li>
              </ul>
            </section>

            <section className={styles.ruleSection}>
              <h2>Maç Düzeni</h2>
              <h3>2A. Maç Süresi</h3>
              <p>Tüm maçlar organizasyon tarafından belirlenen sahalarda ve turnuva için özel belirlenmiş süre (60 dk) üzerinden oynanacaktır.</p>
              
              <h3>2B. Maç Formatı</h3>
              <p>Maçlar 11 e 11 formatta oynanır.</p>
              
              <h3>2C. Beraberlik Durumu</h3>
              <p>Maç sırasında takım mevcut 7 oyuncunun altına düşerse, takım hükmen 3-0 mağlup sayılır eder.</p>
              
              <h3>2D. Oyuncu Değişiklikleri</h3>
              <p>Takım kaptan(lar)ı, maçtan önce oyuncu kadrosunu mobil uygulama üzerinden sisteme girmeli ve ayrıca sahaya maç saatinde öncesinde belirtmeli.</p>
              
              <h3>2E. Saha Hazırlığı</h3>
              <p>Takımlar, maç saatinden en az 20 dakika önce sahada hazır olmalıdır.</p>
              
              <h3>2G. Oyuncu Değişikliği Kuralları</h3>
              <ul>
                <li>Maksimum 5 oyuncu değişikliği yapılabilir.</li>
                <li>Oyuna tekrar girilmez (çıkıp yeniden girilemez).</li>
                <li>Değişiklikler sadece oyun durduğunda ve orta sahadan, hakem gözetiminde yapılır.</li>
                <li>Değişiklik sayısının takibinden takım kaptanı sorumludur.Koordinatör tarafından da kontrol edilir.</li>
                <li>Kurallara aykırı değişiklik yapan takım hükmen mağlup sayılır.</li>
              </ul>
            </section>

            <section className={styles.ruleSection}>
              <h2>Oyuncu İhlalleri ve Cezalar</h2>
              <h3>2H. Sarı Kart ve Kırmızı Kart</h3>
              <p>Herhangi bir takımın, aktif lisanslı oyuncusu oynattığı tespit edilirse, ilgili maç 3-0 hükmen mağlubiyet ile sonuçlanır.</p>
              
              <p>İki takım da lisanslı oyuncusu oynattıklarında maç iptal olup puan yazılmaz ve maç tekrarı yapılmaz. Grup aşamasından sonra bu durumun yaşanması halinde karar organizasyon yönetimine bağlıdır.</p>
              
              <h3>2J. Birden Fazla Oyuncu İhlali</h3>
              <p>Bir kez oyundan çıkan oyuncu, maçta tekrar oyuna dahil olamaz.</p>
              
              <h3>2K. Maç Süresi Uzatması</h3>
              <p>Uzatma süresi, maçın hakemi tarafından oyun içindeki duraklamalara göre belirlenir.</p>
            </section>

            <section className={styles.ruleSection}>
              <h2>Takım Yapısı ve Sorumluluklar</h2>
              <h3>3A. Takım Başkanı Zorunluluğu</h3>
              <p>Her takımın bir takım başkanı olmak zorundadır. Başkan, organizasyonla resmi iletişim kuran ve takımını temsil eden kişidir.</p>
              
              <h3>3B. Bilgilendirme ve Sorumluluk</h3>
              <p>Organizasyon ekibi, tüm duyuru, bilgilendirme ve güncellemeleri sadece takım başkanına yöneltmek yükümlüdür.</p>
              <p>Takım başkanının ekibini takım ile paylaşması takım kaptanına aittir.</p>
              <p>Organizasyon, başkana iletilen bilgilerin tüm takıma ulaştığını kabul eder.</p>
              <p>Takım iç iletişimsizlikten kaynaklanan sorunların sorumlusu organizasyon sorumlu değildir.</p>
              
              <h3>3C. Onay ve Temsil Yetkisi</h3>
              <p>Başkanlık, takımlarının resmi sözcüsü olarak kabul edilir.</p>
              <p>Bir başkanın verdiği onay ve beyan, tüm takım adına vermiş sayılır.</p>
              
              <h3>3D. Kadro Bildirimi</h3>
              <p>Turnuva başlamasından önce her takım başkanı, aşağıdaki bilgileri içeren takım kadrosunu organizasyon ekibine bildirmelidir:</p>
              <ul>
                <li>Oyuncu Adı – Soyadı</li>
                <li>Forma Numarası</li>
                <li>Kimlik Numarası (T.C.)</li>
                <li>Oyuncu Görseli (fotoğraf)</li>
              </ul>
            </section>

            <section className={styles.ruleSection}>
              <h2>Oyuncu Kayıt ve Kimlik Kuralları</h2>
              <h3>3E. Oyuncu Sayısı ve Kadro Düzeni</h3>
              <ul>
                <li>Her takım minimum 20 oyuncudan oluşmalıdır.</li>
                <li>Maç kadrosuna maksimum 20 kişi yazılabilir (11 ilk oyuncu + 9 yedek).</li>
              </ul>
              
              <h3>3F. Forma ve Sosyal Medya</h3>
              <ul>
                <li>Her takımın kendine özgü bir forması olmak zorundadır.</li>
                <li>Takımlar ayrıca, turnuva süresince aktif olacak bir sosyal medya hesabı açmalı ve içerik paylaşımı yapmalıdır.</li>
              </ul>
              
              <h3>3G. Takım İçi Disiplin ve Organizasyon</h3>
              <p>Takım başkanları, oyuncularının zamanında sahada olması, kural ihlallerinden kaçınması, düzenli forma kullanımı gibi tüm takım içi düzenin sağlanmasından sorumludur.</p>
            </section>

            <section className={styles.ruleSection}>
              <h2>Disiplin Kurulu ve Cezalar</h2>
              <h3>4A. Lisanslı Oyuncu Yasağı</h3>
              <ul>
                <li>Turnuvada aktif TFF lisanslı oyuncuların oynalması kesinlikle yasaktır.</li>
                <li>Turnuva süresince bir oyuncunun lisansı vize ettirilirse bu durum en geç 24 saat içinde organizasyon ekibine bildirilmelidir.</li>
                <li>Bildirilmeyen durumlarda Disiplin Kurulu kararı uygulanır; ilgili oyuncu ve takım hakkında cezai işlem yapılır.</li>
              </ul>
              
              <h3>4B. Formalar ve Giyim Kuralları</h3>
              <ul>
                <li>Takımlar, maçlara tek tip forma ile çıkmak zorundadır.</li>
                <li>Eksik veya farklı forma ile sahaya çıkan takımlar, sahaya çıkmadan önce uyarılır. Uyarıya rağmen forma uyumsuzluğu devam ederse hükmen mağlubiyet uygulanabilir.</li>
              </ul>
              
              <h3>4C. Kart ve Ceza Uygulamaları</h3>
              <ul>
                <li>Kırmızı kart (doğrudan ya da çift sarı): Oyuncu, Disiplin Kurulu kararıyla belirlenen maç sayısı kadar men cezası alır.</li>
                <li>3 sarı kart gören oyuncu, takip eden maçta 1 maç men cezası alır.</li>
                <li>Disiplin Kurulu kararları; hakem raporu, görüntü kaydı ve gözlemci raporlarına göre verilir.</li>
              </ul>
              
              <h3>4D. Organizasyon ve Yönetim Yetkisi</h3>
              <ul>
                <li>Organizasyon ile ilgili tüm kararlar, organizasyon yönetimi tarafından alınır.</li>
                <li>Turnuva kuralları, düzenleri, hakemlik hakkında uyar, hükmen mağlubiyet, puan silme ve diskalifiye dahil her türlü karar verirlebilir.</li>
              </ul>
              
              <h3>4E. Sözlü ve Fiziksel Müdahale</h3>
              <ul>
                <li>Organizasyona veya rakip takıma karşı sözlü saldırı gerçekleştiren takımlar, Disiplin Kurulu kararıyla cezalandırılır (derecesine göre hükmen yenilgi, puan silme, diskalifiye).</li>
                <li>Zarar verme: Fiziksel müdahalede bulunan kişi veya takımlar, derhal turnuvadan diskalifiye edilir.</li>
              </ul>
              
              <h3>4F. Maç Tatili ve Karar Yetkisi</h3>
              <p>Herhangi bir maç, güvenlik, disiplin veya benzeri sebeplerle yarıda kalırsa, maçın sonucu hakkında karar verme yetkisi organizasyon yönetimine aittir.</p>
              <p>Organizasyon yönetimi, olayları değerlendirerek şu kararlardan birini verebilir:</p>
              <ul>
                <li>Maçın aynı skorla tescil edilmesi</li>
                <li>Maçın yeniden oynatılması veya kaldığı yerden devamı</li>
                <li>Takımlardan birinin hükmen galibiyeti</li>
                <li>Her iki takımının diskalifiyesi</li>
                <li>Takımlara puan cezası uygulanması</li>
              </ul>
            </section>

            <section className={styles.ruleSection}>
              <h2>Oyuncu Değişimi ve Kimlik Aldatmacası</h2>
              <h3>4G. Maça Katılmayan Takımlar</h3>
              <p>Maç günü takımın sahaya çıkmaması halinde:</p>
              <ul>
                <li>Takım, hükmen mağlup (3-0) sayılır.</li>
                <li>Grup aşamasında: ilave olarak 3 puan cezası verilir.</li>
                <li>Takım ayrıca, oynatılan maçın toplam saha ücretini (iki tarafın ödeyeceği toplam tutar) karşılamakla yükümlüdür.</li>
              </ul>
              
              <h3>4H. Sahadan Çekilme</h3>
              <ul>
                <li>Organizasyon aitçilerında oluşabilecek her türlü maddi veya manevi zarardan, sorumlu olan takım veya oyuncular sorumlu tutulur.</li>
                <li>Organizasyon ekibi, bu zararlar karşısında hiçbir yükümlülük kabul etmez.</li>
                <li>Katılımcılar, her maddederi başvuru anında kabul etmiş sayılır.</li>
              </ul>
              
              <h3>4I. Oyuncu Değişimi ve Kimlik Aldatmacası</h3>
              <p>Takımların farklı bir oyuncuyu başka bir kişi oynattığı tespit edilirse:</p>
              <ul>
                <li>Maç hükmen mağlup ilan edilir.</li>
                <li>Grup aşamasında: 3 puan cezası</li>
                <li>Eleme aşamasında: Diskalifiye ihtimali dahil olmak üzere Disiplin Kurulu değerlendirmesi yapılır.</li>
              </ul>
              <p>Eğer iki takım da aldatmaca yapmışsa:</p>
              <ul>
                <li>Maç iptal edilir.</li>
                <li>Her iki takımdan da 3 puan silinir. Eleme aşamasında kural karar verir.</li>
              </ul>
            </section>

            <section className={styles.ruleSection}>
              <h2>Tesis Sorumluluğu</h2>
              <p>Organizasyon aitlerinden oluşacak her türlü maddi veya manevi zarlardan, sorunlu olan takım veya oyuncular sorumlu tutulur.</p>
              <p>Organizasyon ekibi, bu zararlar karşısında hiçbir yükümlülük kabul etmez.</p>
              <p>Katılımcılar, her maddeyi başvuru anında kabul etmiş sayılır.</p>
            </section>

            <section className={styles.ruleSection}>
              <h2>Hakemler</h2>
              <h3>5A. Hakem Atanması</h3>
              <p>Hakemin kararları nihai olup tüm taraflarca saygı gösterilmesi zorunludur.</p>
              
              <h3>5B. Hakem Raporu</h3>
              <p>Hakemler, yöneticiler her maçın ardından organizasyon yönetimine resmi maç raporu sunmakla yükümlüdür. Maç sırasında meydana gelebilecek olayların bilderindenmesinde hakem raporu birinci derecede esas kabul edilir.</p>
              
              <h3>5C. Hakem Güvenliği</h3>
              <p>Hakem yönetik fill esideri veya ağır hakaret kesirlikle yasaktır.bu davranışlarda bulunan kişi veya takımlar derhal turnuva kurulu tarafından cezalandırılır.</p>
              
              <h3>5D. Hakem Tutumu</h3>
              <p>Hakem atamalarından yüzde yöntim sorumludur.</p>
              
              <h3>5E. Hakem İtirazı</h3>
              <p>Hakemin herhangi bir nedende maçı yönetmez hale gelmesi durumunda, müsabaka, saha koordinatörü gözetimi altında devam edebilir.</p>
            </section>

            <section className={styles.ruleSection}>
              <h2>Güvenlik</h2>
              <h3>6A. Güvenlik Sorumluluğu</h3>
              <p>Organizasyona katılan tüm takımlar, güvenliklerinden bireysel olarak sorumludur. Her takım, oyuncularının ve misafirlerinin güvenliğini sağlamakla yükümlüdür.</p>
              
              <h3>6B. Güvenlik Olayları</h3>
              <p>Takımlar arasında güvenlik oluşabil ihtilafların organizasyon yönetimi taraf değildir ve bu tür durumlarda sorumlu kabul edilmez.</p>
              
              <h3>6C. Güvenlik Komitesi</h3>
              <p>Organizasyon komitesi, güvenlik önlemlerinin alınmasını veya öngörülmeyen olaylar nedeniyle oluşabilecek maddi ve manevi zararlardan sorumlu tutulmaz.</p>
            </section>

            <section className={styles.ruleSection}>
              <h2>Sağlık</h2>
              <h3>7A. Sağlık Sorumluluğu</h3>
              <p>Organizasyona katılan tüm oyuncular, kendi sağlık durumlarından bireysel olarak sorumludur. Spor yapmalarına engel olabilecek herhangi bir rahatsızlığı bulunan kişilerin organizasyona katılmamaları gerekmektedir.</p>
              
              <h3>7B. Sağlık Önlemleri</h3>
              <p>Organizasyon yönetimi; sağlıkla ilgili konularda gerekli önlemlerin alınmasını veya öngörülmeyen nedenlerden kaynakli olarak oluşabilecek maddi ve manevi zararlardan sorumlu tutulmaz.</p>
            </section>

            <div className={styles.contactInfo}>
              <h3>⚠️ TAKIMLARDAN TESİSLERİ TEMİZ VE DÜZENLİ KULLANMALARINI RİCA EDİYORUZ.</h3>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
