import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Puan Durumu & Fikstür - Golium Cup",
  description: "Golium Cup futbol turnuvası puan durumu, fikstür, gol krallığı ve asist krallığı istatistikleri. Güncel maç sonuçları ve grup durumları.",
  keywords: "golium cup puan durumu, futbol turnuvası fikstür, gol krallığı, asist krallığı, maç sonuçları",
  openGraph: {
    title: "Puan Durumu & Fikstür - Golium Cup",
    description: "Golium Cup futbol turnuvası puan durumu, fikstür, gol krallığı ve asist krallığı istatistikleri. Güncel maç sonuçları ve grup durumları.",
    url: "https://www.goliumcup.com.tr/puan-durumu",
  },
};

export default function PuanDurumuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
