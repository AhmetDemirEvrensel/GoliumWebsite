# Golium Turnuvası - Hızlı Maç Ekleme Şablonu

## Aşağıdaki şablonu kopyalayıp doldurun:

```javascript
// YENİ MAÇ ŞABLONU - Bu satırları kopyalayıp doldurun
{
  id: OTOMATIK_NUMARA,
  homeTeam: "EV_SAHİBİ_TAKIM",
  awayTeam: "MİSAFİR_TAKIM",
  date: "GG Ay YYYY",
  time: "SS:DD", 
  stadium: "STADYUM_ADI",
  group: "GRUP_HARFİ",
  week: HAFTA_NUMARASI,
  status: "planned"
}
```

## Hızlı Dolum Örnekleri:

### 1. Grup A - 1. Hafta:
```javascript
{
  id: 1,
  homeTeam: "Galatasaray",
  awayTeam: "Fenerbahçe",
  date: "25 Ağustos 2025",
  time: "20:00",
  stadium: "Türk Telekom Stadyumu", 
  group: "A",
  week: 1,
  status: "planned"
}
```

### 2. Grup B - 1. Hafta:
```javascript
{
  id: 2,
  homeTeam: "Beşiktaş", 
  awayTeam: "Trabzonspor",
  date: "26 Ağustos 2025",
  time: "19:00",
  stadium: "Vodafone Park",
  group: "B", 
  week: 1,
  status: "planned"
}
```

## Grup Dağılımı Rehberi:

**Grup A**: [Takım 1], [Takım 2], [Takım 3], [Takım 4]
**Grup B**: [Takım 1], [Takım 2], [Takım 3], [Takım 4]
**Grup C**: [Takım 1], [Takım 2], [Takım 3], [Takım 4]
**Grup D**: [Takım 1], [Takım 2], [Takım 3], [Takım 4]
**Grup E**: [Takım 1], [Takım 2], [Takım 3], [Takım 4]
**Grup F**: [Takım 1], [Takım 2], [Takım 3], [Takım 4]
**Grup G**: [Takım 1], [Takım 2], [Takım 3], [Takım 4]
**Grup H**: [Takım 1], [Takım 2], [Takım 3], [Takım 4]

## Haftalık Maç Programı:

**1. Hafta**: Her grupta 2 maç (16 maç toplam)
**2. Hafta**: Her grupta 2 maç (16 maç toplam)  
**3. Hafta**: Her grupta 2 maç (16 maç toplam)

## Sık Kullanılan Stadyumlar:

- Türk Telekom Stadyumu (İstanbul)
- Şükrü Saracoğlu Stadyumu (İstanbul)
- Vodafone Park (İstanbul)
- Medical Park Stadyumu (Trabzon)

## Maç Saatleri Önerileri:

- **Hafta içi**: 19:00, 20:00, 21:00
- **Hafta sonu**: 14:00, 17:00, 20:00

---

Bu şablonu kullanarak maçları hızlıca ekleyebilirsiniz. 
Her maç eklendikten sonra `data/matches.json` dosyasını güncelleyin.
