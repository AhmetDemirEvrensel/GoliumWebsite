import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gol Krallığı - Golium Cup",
  description: "Golium Cup futbol turnuvasında en çok gol atan oyuncular. Güncel gol krallığı sıralaması ve oyuncu istatistikleri.",
  keywords: "golium cup gol krallığı, en çok gol atan, futbol istatistikleri, oyuncu performansı, gol sıralaması",
  openGraph: {
    title: "Gol Krallığı - Golium Cup",
    description: "Golium Cup futbol turnuvasında en çok gol atan oyuncular. Güncel gol krallığı sıralaması ve oyuncu istatistikleri.",
    url: "https://www.goliumcup.com.tr/gol-kralligi",
  },
};

export default function GolKralligiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
