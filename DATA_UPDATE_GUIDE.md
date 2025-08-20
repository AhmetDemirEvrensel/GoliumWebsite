# 🏆 Golium Tournament - Veri Güncelleme Rehberi

## 📋 Güncelleyebileceğiniz Veriler

### 1. **Ana Sayfa Maçları** (`data/matches.json`)
```json
{
  "thisWeekMatches": [
    {
      "id": 1,
      "homeTeam": "Galatasaray",
      "awayTeam": "Fenerbahçe",
      "date": "24 Ağustos 2025",
      "time": "20:00",
      "stadium": "Türk Telekom Stadyumu",
      "group": "A"
    }
  ],
  "nextWeekMatches": [...]
}
```

### 2. **Puan Durumu** (`data/standings.json`)
```json
{
  "groups": {
    "A": [
      {
        "id": 1,
        "name": "Galatasaray",
        "played": 3,
        "won": 2,
        "drawn": 1,
        "lost": 0,
        "goalsFor": 6,
        "goalsAgainst": 2,
        "goalDifference": 4,
        "points": 7
      }
    ]
  }
}
```

### 3. **Fikstür** (`data/fixtures.json`)
```json
{
  "fixtures": {
    "A": [
      {
        "id": 1,
        "homeTeam": "Takım 1",
        "awayTeam": "Takım 2",
        "date": "25 Ağustos 2025",
        "time": "16:00",
        "stadium": "Stadyum Adı"
      }
    ]
  }
}
```

### 4. **İstatistikler** (`data/statistics.json`)
```json
{
  "goalScorers": [
    {
      "id": 1,
      "name": "Oyuncu Adı",
      "team": "Takım Adı",
      "goals": 5
    }
  ],
  "assistProviders": [
    {
      "id": 1,
      "name": "Oyuncu Adı",
      "team": "Takım Adı",
      "assists": 3
    }
  ]
}
```

## 🚀 Güncelleme Yöntemleri

### Yöntem 1: VS Code'da Manuel
1. `data/` klasöründeki JSON dosyasını açın
2. Verileri düzenleyin
3. Kaydedin (Cmd+S)
4. Terminal'de: `npm run update-data`

### Yöntem 2: Terminal Komutları
```bash
# Tüm verileri güncelle
npm run update-all

# Sadece maçları güncelle
npm run update-matches

# Manuel script çalıştır
./update-all-data.sh
```

### Yöntem 3: Otomatik İzleme (Gelecek)
- Git hooks ile otomatik güncelleme
- Webhook entegrasyonu
- API tabanlı güncelleme

## ⚡ Hızlı İpuçları

### JSON Formatı Kontrolü
```bash
# JSON formatını kontrol et (jq gerekli)
jq '.' data/matches.json

# Hatalı JSON'ları bul
find data/ -name "*.json" -exec jq '.' {} \;
```

### Toplu Güncelleme
```bash
# Tüm "Bekleniyor" entrilerini bul
grep -r "Bekleniyor" data/

# Tarih formatı: "DD Ay YYYY" (örn: "24 Ağustos 2025")
# Saat formatı: "HH:MM" (örn: "20:00")
```

## 🔍 Sorun Giderme

### JSON Hatası
- Virgül eksikliği `,`
- Süslü parantez kapanmamış `{}`
- Tırnak işareti eksik `""`

### Veriler Görünmüyor
1. `npm run update-data` çalıştırın
2. Sayfayı yenileyin (F5)
3. Browser cache'i temizleyin

### Script Çalışmıyor
```bash
# Script izinlerini kontrol et
ls -la *.sh

# İzin ver
chmod +x update-all-data.sh
```

## 📱 Canlı Test
- Geliştirme: http://localhost:3000
- Ana sayfa: `/`
- Puan durumu: `/puan-durumu`
- Gol krallığı: `/gol-kralligi`
- Asist krallığı: `/asist-kralligi`

---
💡 **İpucu**: JSON dosyalarında değişiklik yaptıktan sonra mutlaka `npm run update-data` komutunu çalıştırın!
