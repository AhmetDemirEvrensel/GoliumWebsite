'use client';

import { useState } from 'react';
import Header from "../../components/Header";
import styles from "./page.module.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('Mesajınız gönderildi! En kısa sürede size dönüş yapacağız.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.title}>İletişim</h1>
          
          <div className={styles.contentGrid}>
            <div className={styles.contactInfo}>
              <h2>Bizimle İletişime Geçin</h2>
              <p>
                Turnuva hakkında sorularınız, önerileriniz veya destek ihtiyaçlarınız için 
                bizimle iletişime geçebilirsiniz. Ekibimiz size en kısa sürede dönüş yapacaktır.
              </p>

              <div className={styles.infoCards}>
                <div className={styles.infoCard}>
                  <div className={styles.infoIcon}>📧</div>
                  <h3>E-posta</h3>
                  <p>info@futbolturnuvasi.com</p>
                  <p>destek@futbolturnuvasi.com</p>
                </div>

                <div className={styles.infoCard}>
                  <div className={styles.infoIcon}>📞</div>
                  <h3>Telefon</h3>
                  <p>+90 555 123 4567</p>
                  <p>+90 555 765 4321</p>
                </div>

                <div className={styles.infoCard}>
                  <div className={styles.infoIcon}>📍</div>
                  <h3>Adres</h3>
                  <p>Spor Kompleksi</p>
                  <p>Sarıyer/İstanbul</p>
                </div>

                <div className={styles.infoCard}>
                  <div className={styles.infoIcon}>⏰</div>
                  <h3>Çalışma Saatleri</h3>
                  <p>Pazartesi - Cumartesi</p>
                  <p>09:00 - 18:00</p>
                </div>
              </div>

              <div className={styles.socialSection}>
                <h3>Sosyal Medya</h3>
                <div className={styles.socialLinks}>
                  <a href="#" className={styles.socialLink}>Facebook</a>
                  <a href="#" className={styles.socialLink}>Instagram</a>
                  <a href="#" className={styles.socialLink}>Twitter</a>
                  <a href="#" className={styles.socialLink}>YouTube</a>
                </div>
              </div>
            </div>

            <div className={styles.contactForm}>
              <h2>Mesaj Gönder</h2>
              <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Ad Soyad *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className={styles.formInput}
                    placeholder="Adınız ve soyadınız"
                  />
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="email">E-posta *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className={styles.formInput}
                      placeholder="ornek@email.com"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="phone">Telefon</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={styles.formInput}
                      placeholder="0555 123 4567"
                    />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="subject">Konu *</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className={styles.formSelect}
                  >
                    <option value="">Konu seçiniz</option>
                    <option value="kayit">Takım Kaydı</option>
                    <option value="kurallar">Turnuva Kuralları</option>
                    <option value="sahalar">Saha Bilgileri</option>
                    <option value="odeme">Ödeme İşlemleri</option>
                    <option value="teknik">Teknik Destek</option>
                    <option value="diger">Diğer</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message">Mesaj *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className={styles.formTextarea}
                    placeholder="Mesajınızı buraya yazınız..."
                    rows={5}
                  />
                </div>

                <button type="submit" className={styles.submitButton}>
                  Mesajı Gönder
                </button>
              </form>
            </div>
          </div>

          <div className={styles.faqSection}>
            <h2>Sık Sorulan Sorular</h2>
            <div className={styles.faqGrid}>
              <div className={styles.faqCard}>
                <h3>Takım kaydı nasıl yapılır?</h3>
                <p>
                  Takım kaydı için iletişim formunu kullanabilir veya doğrudan telefon ile 
                  bize ulaşabilirsiniz. Gerekli evraklar ve kayıt ücreti hakkında bilgi verilecektir.
                </p>
              </div>

              <div className={styles.faqCard}>
                <h3>Kayıt ücreti ne kadardır?</h3>
                <p>
                  Takım başına kayıt ücreti 2.500 TL'dir. Bu ücret hakem giderleri, 
                  saha kirası ve organizasyon masraflarını kapsamaktadır.
                </p>
              </div>

              <div className={styles.faqCard}>
                <h3>Maçlar hangi sahalarda oynanacak?</h3>
                <p>
                  Maçlar İstanbul çevresindeki profesyonel futbol sahalarında oynanacaktır. 
                  Detaylı saha listesi kayıt tamamlandıktan sonra paylaşılacaktır.
                </p>
              </div>

              <div className={styles.faqCard}>
                <h3>Ödül ödemeleri ne zaman yapılacak?</h3>
                <p>
                  Ödüller turnuva bitiş töreninde nakit olarak takımlara teslim edilecektir. 
                  Herhangi bir kesinti yapılmayacaktır.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
