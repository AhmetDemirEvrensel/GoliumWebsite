import Header from "../../components/Header";
import styles from "./page.module.css";

export default function Haberler() {
  const news = [
    {
      id: 1,
      title: "Turnuva başvuruları tamamlandı!",
      date: "18 Temmuz 2025",
      content: "Royal Cup turnuvası için tüm başvurular tamamlanmış olup, 32 takım belirlendi. Turnuva 22 Temmuz'da başlayacak.",
      image: "/slider.png"
    },
    {
      id: 2,
      title: "Grup kuraları çekildi",
      date: "17 Temmuz 2025",
      content: "8 grup halinde düzenlenecek turnuvada kura çekimi tamamlandı. Her grupta 4 takım yer alacak.",
      image: "/slider.png"
    },
    {
      id: 3,
      title: "Stadyum rezervasyonları tamamlandı",
      date: "16 Temmuz 2025",
      content: "Turnuva maçları için gerekli stadyum rezervasyonları tamamlanmış olup, maç programı yayınlandı.",
      image: "/slider.png"
    },
    {
      id: 4,
      title: "150.000 TL ödül dağıtımı açıklandı",
      date: "15 Temmuz 2025",
      content: "Royal Cup turnuvasında kazanacak takımlara verilecek ödüllerin dağıtımı açıklandı. Şampiyon takım 75.000 TL alacak.",
      image: "/slider.png"
    },
    {
      id: 5,
      title: "Teknik kurallara son rötuşlar",
      date: "14 Temmuz 2025",
      content: "Turnuva kurallarına son rötuşlar yapıldı. Oyuncu değişiklik sayısı ve diğer teknik detaylar belirlendi.",
      image: "/slider.png"
    },
    {
      id: 6,
      title: "Royal Cup logosu tanıtıldı",
      date: "13 Temmuz 2025",
      content: "Turnuvanın resmi logosu ve görselleri tanıtıldı. Modern ve prestijli tasarım büyük beğeni topladı.",
      image: "/slider.png"
    },
    {
      id: 7,
      title: "Antrenör toplantısı gerçekleştirildi",
      date: "12 Temmuz 2025",
      content: "Tüm takım antrenörleri ile bilgilendirme toplantısı gerçekleştirildi. Turnuva formatı ve kurallar aktarıldı.",
      image: "/slider.png"
    },
    {
      id: 8,
      title: "Sosyal medya kampanyası başladı",
      date: "11 Temmuz 2025",
      content: "Royal Cup'ın sosyal medya kampanyası başladı. Taraftarlar #RoyalCup hashtagi ile desteklerini gösterebilir.",
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
            <p>Royal Cup turnuvası ile ilgili en güncel haberler</p>
          </div>

          <div className={styles.newsGrid}>
            {news.map((item) => (
              <article key={item.id} className={styles.newsCard}>
                <div className={styles.newsImage}>
                  <img src={item.image} alt={item.title} />
                </div>
                <div className={styles.newsContent}>
                  <span className={styles.newsDate}>{item.date}</span>
                  <h2 className={styles.newsTitle}>{item.title}</h2>
                  <p className={styles.newsExcerpt}>{item.content}</p>
                  <button className={styles.readMore}>Devamını Oku</button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
