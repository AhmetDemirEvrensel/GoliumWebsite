# 🏆 Golium Turnuvası - Hızlı Maç Yönetimi

## 🚀 Hızlı Güncelleme

Maç ekledikten veya düzenledikten sonra tek komut ile güncelleyin:

```bash
./update-matches.sh
```

## 📝 Maç Ekleme Adımları

### 1. JSON Dosyasını Düzenle
```bash
# VS Code ile aç
code data/matches.json

# Veya herhangi bir editör ile
nano data/matches.json
```

### 2. Maç Bilgilerini Ekle

#### Bu Haftaya Maç Ekle:
`"thisWeekMatches"` array'ine ekleyin:
```json
{
  "id": 4,
  "homeTeam": "Real Madrid",
  "awayTeam": "Barcelona",
  "date": "26 Ağustos 2025",
  "time": "21:00",
  "stadium": "Santiago Bernabeu",
  "group": "C",
  "week": 1,
  "status": "planned"
}
```

#### Gelecek Haftaya Maç Ekle:
`"nextWeekMatches"` array'ine ekleyin:
```json
{
  "id": 5,
  "homeTeam": "Manchester City", 
  "awayTeam": "Liverpool",
  "date": "2 Eylül 2025",
  "time": "18:00",
  "stadium": "Etihad Stadium",
  "group": "D", 
  "week": 2,
  "status": "planned"
}
```

### 3. totalMatches Sayısını Güncelle
Yeni maç ekledikten sonra `"totalMatches"` değerini artırın.

### 4. Güncelleme Script'ini Çalıştır
```bash
./update-matches.sh
```

## 🎯 Hızlı Komutlar

| Komut | Açıklama |
|-------|----------|
| `./update-matches.sh` | Maçları güncelle |
| `code data/matches.json` | JSON dosyasını düzenle |
| `npm run dev` | Development server'ı başlat |
| `open http://localhost:3000` | Siteyi tarayıcıda aç |

## 📊 Durum Kodları

- `"planned"` - Planlanmış maç
- `"live"` - Canlı maç  
- `"finished"` - Bitmiş maç

## 🏟️ Grup Listesi

A, B, C, D, E, F, G, H

---

**💡 İpucu:** Her maç eklemeden sonra `./update-matches.sh` komutunu çalıştırmayı unutmayın!
