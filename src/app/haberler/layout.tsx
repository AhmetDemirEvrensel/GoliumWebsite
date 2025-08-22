import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Haberler - Golium Cup",
  description: "Golium Cup futbol turnuvasının en güncel haberleri, maç analizleri ve turnuva gelişmeleri. Son dakika futbol haberleri.",
  keywords: "golium cup haberler, futbol haberleri, turnuva haberleri, maç analizleri, futbol gelişmeleri",
  openGraph: {
    title: "Haberler - Golium Cup",
    description: "Golium Cup futbol turnuvasının en güncel haberleri, maç analizleri ve turnuva gelişmeleri. Son dakika futbol haberleri.",
    url: "https://www.goliumcup.com.tr/haberler",
  },
};

export default function HaberlerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
