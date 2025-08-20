#!/bin/bash

# Golium Tournament Veri Güncelleme Script'i
# Kullanım: ./update-all-data.sh

echo "🏆 Golium Tournament Veri Güncelleme Başlıyor..."

# Renk kodları
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# JSON dosyalarının varlığını kontrol et
echo -e "${BLUE}📁 JSON dosyaları kontrol ediliyor...${NC}"

DATA_DIR="data"
PUBLIC_DATA_DIR="public/data"

# Klasörleri oluştur (eğer yoksa)
mkdir -p "$DATA_DIR"
mkdir -p "$PUBLIC_DATA_DIR"

# JSON dosyaları listesi
files=("matches.json" "standings.json" "fixtures.json" "statistics.json" "news.json")

echo -e "${YELLOW}📝 Mevcut JSON dosyaları:${NC}"
for file in "${files[@]}"; do
    if [ -f "$DATA_DIR/$file" ]; then
        echo -e "  ✅ $file"
        # Son güncelleme tarihini göster
        if command -v jq > /dev/null 2>&1; then
            last_updated=$(jq -r '.lastUpdated // "Tarih bulunamadı"' "$DATA_DIR/$file" 2>/dev/null)
            echo -e "     📅 Son güncelleme: $last_updated"
        fi
    else
        echo -e "  ❌ $file ${RED}(eksik)${NC}"
    fi
done

echo ""
echo -e "${BLUE}🔄 JSON dosyaları public klasörüne kopyalanıyor...${NC}"

# JSON dosyalarını public/data klasörüne kopyala
for file in "${files[@]}"; do
    if [ -f "$DATA_DIR/$file" ]; then
        cp "$DATA_DIR/$file" "$PUBLIC_DATA_DIR/$file"
        echo -e "  ✅ $file kopyalandı"
    else
        echo -e "  ⚠️  $file bulunamadı, atlanıyor"
    fi
done

echo ""
echo -e "${GREEN}🎯 Güncelleme tamamlandı!${NC}"
echo ""
echo -e "${YELLOW}📋 Manuel güncelleme için:${NC}"
echo "  1. data/ klasöründeki JSON dosyalarını düzenleyin"
echo "  2. Bu script'i çalıştırın: ./update-all-data.sh"
echo "  3. Değişiklikleri görmek için sayfayı yenileyin"
echo ""
echo -e "${BLUE}🌐 Geliştirme sunucusu:${NC}"
echo "  http://localhost:3000"
echo ""
