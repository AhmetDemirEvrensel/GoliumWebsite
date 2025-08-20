# Golium Turnuvası - Maç Yönetim Sistemi

Bu dosya turnuva maçlarını yönetmek için kullanılır. Maçları buradan ekleyebilir, düzenleyebilir ve silebilirsiniz.

## Maç Bilgileri Formatı

JSON dosyası artık iki ayrı kategori içeriyor:

### Bu Haftanın Maçları:
```javascript
"thisWeekMatches": [
  {
    id: [Unique ID - otomatik artar],
    homeTeam: "[Ev Sahibi Takım Adı]",
    awayTeam: "[Misafir Takım Adı]", 
    date: "[Tarih - örn: 22 Ağustos 2025]",
    time: "[Saat - örn: 20:00]",
    stadium: "[Stadyum Adı]",
    group: "[Grup - A, B, C, D, E, F, G, H]",
    week: [Hafta numarası - 1, 2, 3, vs.],
    status: "[planned/live/finished]"
  }
]
```

### Gelecek Haftanın Maçları:
```javascript
"nextWeekMatches": [
  {
    id: [Unique ID - otomatik artar],
    homeTeam: "[Ev Sahibi Takım Adı]",
    awayTeam: "[Misafir Takım Adı]", 
    date: "[Tarih - örn: 29 Ağustos 2025]",
    time: "[Saat - örn: 20:00]",
    stadium: "[Stadyum Adı]",
    group: "[Grup - A, B, C, D, E, F, G, H]",
    week: [Hafta numarası - 1, 2, 3, vs.],
    status: "[planned/live/finished]"
  }
]
```

## Mevcut Maçlar

### Bu Haftanın Maçları:
- Galatasaray vs Fenerbahçe (24 Ağustos 2025, 20:00, Türk Telekom Stadyumu, Grup A)

### Gelecek Haftanın Maçları:
- Beşiktaş vs Trabzonspor (31 Ağustos 2025, 19:00, Vodafone Park, Grup B)

### Yeni Maç Ekleme Örnekleri:

#### Bu Haftaya Maç Eklemek:
```javascript
{
  id: 3,
  homeTeam: "Real Madrid",
  awayTeam: "Barcelona", 
  date: "25 Ağustos 2025",
  time: "21:00",
  stadium: "Santiago Bernabeu",
  group: "C",
  week: 1,
  status: "planned"
}
```

#### Gelecek Haftaya Maç Eklemek:
```javascript
{
  id: 4,
  homeTeam: "Manchester City",
  awayTeam: "Liverpool", 
  date: "1 Eylül 2025",
  time: "18:00",
  stadium: "Etihad Stadium",
  group: "D",
  week: 2,
  status: "planned"
}
```

## Maç Ekleme Talimatları:

1. **Takım İsimleri**: Tam ve doğru takım isimlerini kullanın
2. **Tarih**: "GG Ay YYYY" formatında yazın (örn: 25 Ağustos 2025)
3. **Saat**: "SS:DD" formatında yazın (örn: 20:00)
4. **Stadyum**: Stadyumun tam adını yazın
5. **Grup**: A-H arası grup harfi
6. **Hafta**: 1'den başlayan hafta numarası
7. **Durum**: 
   - "planned" = Planlanmış
   - "live" = Canlı
   - "finished" = Bitmiş

## Maç Durumları:

- **planned**: Henüz oynanmamış maçlar
- **live**: Şu anda oynanmakta olan maçlar  
- **finished**: Tamamlanmış maçlar

---

Bu dosyayı güncellemek için lütfen maç bilgilerini yukarıdaki formata uygun şekilde ekleyin.
Sisteme entegre etmek için geliştirici ile iletişime geçin.
