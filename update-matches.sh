#!/bin/bash

# Golium Turnuvası - Maç Güncelleme Script'i
# Bu script maç verilerini otomatik olarak günceller

echo "🏆 Golium Turnuvası - Maç Güncelleme Script'i"
echo "============================================="

# Proje dizinine git
cd /Users/ahmetdemir/Documents/Golium/nextjs-app

# JSON dosyasının varlığını kontrol et
if [ ! -f "data/matches.json" ]; then
    echo "❌ Hata: data/matches.json dosyası bulunamadı!"
    exit 1
fi

# Public klasörünü oluştur (eğer yoksa)
mkdir -p public/data

# JSON dosyasını public klasörüne kopyala
echo "📋 Maç verileri güncelleniyor..."
cp data/matches.json public/data/matches.json

# Başarı kontrolü
if [ $? -eq 0 ]; then
    echo "✅ Maç verileri başarıyla güncellendi!"
    echo "🌐 Anasayfa yenilendiğinde yeni maçlar görünecek"
    
    # JSON dosyasından maç sayısını al
    if command -v jq &> /dev/null; then
        TOTAL_MATCHES=$(jq '.totalMatches' data/matches.json 2>/dev/null)
        THIS_WEEK=$(jq '.thisWeekMatches | length' data/matches.json 2>/dev/null)
        NEXT_WEEK=$(jq '.nextWeekMatches | length' data/matches.json 2>/dev/null)
        
        echo ""
        echo "📊 Güncel İstatistikler:"
        echo "   • Toplam Maç: $TOTAL_MATCHES"
        echo "   • Bu Haftanın Maçları: $THIS_WEEK"
        echo "   • Gelecek Haftanın Maçları: $NEXT_WEEK"
    fi
    
    echo ""
    echo "🚀 Tarayıcınızı yenileyerek değişiklikleri görebilirsiniz!"
    echo "   → http://localhost:3000"
else
    echo "❌ Hata: Dosya kopyalanamadı!"
    exit 1
fi

echo ""
echo "✨ İşlem tamamlandı!"
