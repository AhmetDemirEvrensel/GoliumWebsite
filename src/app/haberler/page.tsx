'use client';

import { useState } from 'react';
import Header from "../../components/Header";
import styles from "./page.module.css";

export default function Haberler() {
  const [expandedNews, setExpandedNews] = useState<number[]>([]);

  const toggleExpanded = (newsId: number) => {
    setExpandedNews(prev => 
      prev.includes(newsId) 
        ? prev.filter(id => id !== newsId)
        : [...prev, newsId]
    );
  };

  const news = [
    {
      id: 1,
      title: "Turnuva başvuruları tamamlandı!",
      date: "18 Temmuz 2025",
      excerpt: "Golium turnuvası için tüm başvurular tamamlanmış olup, 32 takım belirlendi.",
      content: "Golium turnuvası için tüm başvurular tamamlanmış olup, 32 takım belirlendi. Turnuva 22 Temmuz'da başlayacak. Bu prestijli turnuvaya katılacak takımlar arasında hem yerli hem de yabancı güçlü ekipler bulunuyor. 150.000 TL toplam ödül havuzuyla düzenlenecek turnuva, futbol severlerin büyük ilgisini çekiyor. Organizasyon komitesi, tüm hazırlıkların planlandığı gibi ilerlediğini ve turnuvanın unutulmaz bir deneyim olacağını belirtti.",
      image: "/slider.png"
    },
    {
      id: 2,
      title: "Grup kuraları çekildi",
      date: "17 Temmuz 2025",
      excerpt: "8 grup halinde düzenlenecek turnuvada kura çekimi tamamlandı.",
      content: "8 grup halinde düzenlenecek turnuvada kura çekimi tamamlandı. Her grupta 4 takım yer alacak. Kura çekimi sırasında dikkat çeken eşleşmeler ortaya çıktı. Özellikle A grubunda yer alan güçlü takımlar arasındaki rekabet şimdiden heyecan yaratıyor. Grup aşaması maçları 3 hafta sürecek ve her takım gruplarında 3 maç oynayacak. Grup birincileri doğrudan eleme turuna yükselecek.",
      image: "/slider.png"
    },
    {
      id: 3,
      title: "Stadyum rezervasyonları tamamlandı",
      date: "16 Temmuz 2025",
      excerpt: "Turnuva maçları için gerekli stadyum rezervasyonları tamamlandı.",
      content: "Turnuva maçları için gerekli stadyum rezervasyonları tamamlanmış olup, maç programı yayınlandı. Toplamda 12 farklı stadyumda maçlar oynanacak. Modern tesislerle donatılmış stadyumlar, hem oyunculara hem de taraftarlara en iyi deneyimi sunacak. Güvenlik önlemleri de en üst seviyede tutulacak. Stadyum kapasiteleri ve ulaşım bilgileri takımlara ayrıntılı olarak iletildi.",
      image: "/slider.png"
    },
    {
      id: 4,
      title: "150.000 TL ödül dağıtımı açıklandı",
      date: "15 Temmuz 2025",
      excerpt: "Golium turnuvasında kazanacak takımlara verilecek ödüllerin dağıtımı açıklandı.",
      content: "Golium turnuvasında kazanacak takımlara verilecek ödüllerin dağıtımı açıklandı. Şampiyon takım 150.000 TL alacak, ikinci takım ücretsiz katılım hakkı kazanacak. Üçüncü takım da gelecek turnuvaya ücretsiz katılım hakkı elde edecek. Bu cömert ödül dağıtımı, turnuvanın prestijini artırıyor ve takımların motivasyonunu yükseltiyor. Ayrıca bireysel ödüller de gol kralı ve en iyi oyuncu seçimine verilecek.",
      image: "/slider.png"
    },
    {
      id: 5,
      title: "Teknik kurallara son rötuşlar",
      date: "14 Temmuz 2025",
      excerpt: "Turnuva kurallarına son rötuşlar yapıldı.",
      content: "Turnuva kurallarına son rötuşlar yapıldı. Oyuncu değişiklik sayısı ve diğer teknik detaylar belirlendi. Maçlar 11'e 11 formatında oynanacak ve maksimum 5 oyuncu değişikliği yapılabilecek. Sarı kart sistemi ve disiplin kuralları da netleştirildi. Hakem atanması için deneyimli hakemler seçildi. Tüm kurallar takım kaptanlarına ve antrenörlere detaylı olarak açıklandı.",
      image: "/slider.png"
    },
    {
      id: 6,
      title: "Golium logosu tanıtıldı",
      date: "13 Temmuz 2025",
      excerpt: "Turnuvanın resmi logosu ve görselleri tanıtıldı.",
      content: "Turnuvanın resmi logosu ve görselleri tanıtıldı. Modern ve prestijli tasarım büyük beğeni topladı. Logo tasarımında yeşil tonlar ve kraliyet teması kullanılarak turnuvanın prestijli kimliği vurgulandı. Sosyal medya hesaplarında paylaşılan logo tasarımı binlerce beğeni aldı. Merchandising ürünlerinde de bu logo kullanılacak. Tasarım ekibi, logoyu oluştururken futbolun evrensel dilini yansıtmaya özen gösterdiğini belirtti.",
      image: "/slider.png"
    },
    {
      id: 7,
      title: "Antrenör toplantısı gerçekleştirildi",
      date: "12 Temmuz 2025",
      excerpt: "Tüm takım antrenörleri ile bilgilendirme toplantısı gerçekleştirildi.",
      content: "Tüm takım antrenörleri ile bilgilendirme toplantısı gerçekleştirildi. Turnuva formatı ve kurallar aktarıldı. Toplantıda antrenörler turnuva programı, saha düzeni ve değişiklik kuralları hakkında detaylı bilgi aldı. Ayrıca fair play kuralları ve disiplin sistemine özel vurgu yapıldı. Antrenörlerden gelen öneriler de değerlendirilerek son düzenlemeler yapıldı. Toplantı sonrası antrenörler memnuniyetlerini dile getirdi.",
      image: "/slider.png"
    },
    {
      id: 8,
      title: "Sosyal medya kampanyası başladı",
      date: "11 Temmuz 2025",
      excerpt: "Golium'un sosyal medya kampanyası başladı.",
      content: "Golium'un sosyal medya kampanyası başladı. Taraftarlar #Golium hashtagi ile desteklerini gösterebilir. Instagram, Twitter ve Facebook hesaplarından güncel bilgiler paylaşılacak. Turnuva süresince canlı skorlar, fotoğraflar ve videolar sosyal medyada an be an paylaşılacak. Taraftarlar da kendi takımlarını desteklemek için sosyal medya içerikleri oluşturabilir. En yaratıcı paylaşımlara özel hediyeler verilecek.",
      image: "/slider.png"
    }
  ];

  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h1>Tüm Haberler</h1>
            <p>Golium turnuvası ile ilgili en güncel haberler</p>
          </div>

          <div className={styles.newsGrid}>
            {news.map((item) => {
              const isExpanded = expandedNews.includes(item.id);
              return (
                <article key={item.id} className={styles.newsCard}>
                  <div className={styles.newsImage}>
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className={styles.newsContent}>
                    <span className={styles.newsDate}>{item.date}</span>
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
        </div>
      </main>
    </div>
  );
}
