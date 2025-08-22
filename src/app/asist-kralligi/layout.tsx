import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Asist Krallığı - Golium Cup",
  description: "Golium Cup futbol turnuvasında en çok asist yapan oyuncular. Güncel asist krallığı sıralaması ve oyuncu istatistikleri.",
  keywords: "golium cup asist krallığı, en çok asist yapan, futbol istatistikleri, oyuncu performansı, asist sıralaması",
  openGraph: {
    title: "Asist Krallığı - Golium Cup",
    description: "Golium Cup futbol turnuvasında en çok asist yapan oyuncular. Güncel asist krallığı sıralaması ve oyuncu istatistikleri.",
    url: "https://www.goliumcup.com.tr/asist-kralligi",
  },
};

export default function AsistKralligiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
