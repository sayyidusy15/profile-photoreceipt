"use client";

import { useEffect, useRef, useState } from "react";
import { createWhatsAppUrl } from "./contact-config";

const faqItems = [
  {
    id: "setup",
    question: "Apa saja yang termasuk dalam setup?",
    answer: "Setup mencakup tablet, printer, box, stand, dan perlengkapan pendukung.",
  },
  {
    id: "configuration",
    question: "Apa bedanya unit Vertikal dan Landscape?",
    answer: "Vertikal dan Landscape adalah pilihan konfigurasi unit. Pilihan ini berbeda dari orientasi frame foto. Lihat contoh setup pada section Produk atau diskusikan kebutuhan tempatmu dengan Lyven.",
  },
  {
    id: "custom-frame",
    question: "Bisa custom frame untuk acara atau brand?",
    answer: "Kamu bisa mendiskusikan penambahan logo brand, nama acara, serta header dan footer pada desain receipt. Kebutuhan desain dan paketnya dikonfirmasi bersama Lyven.",
  },
  {
    id: "delivery",
    question: "Bagaimana pengiriman dan pemasangannya?",
    answer: "Detail pengiriman, pemasangan, jadwal, dan biaya terkait dikonfirmasi bersama Lyven sesuai lokasi dan kebutuhan sewa.",
  },
  {
    id: "rent",
    question: "Bagaimana cara mulai sewa?",
    answer: "Pilih paket dan konfigurasi unit pada section Paket, lalu ikuti alur pada section Cara Sewa untuk mendiskusikan kebutuhan, ketersediaan, serta ketentuan DP dan pelunasan bersama Lyven.",
  },
] as const;

export function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(faqItems[0].id);
  const [contactOpen, setContactOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (contactOpen && !dialog.open) dialog.showModal();
    if (!contactOpen && dialog.open) dialog.close();
  }, [contactOpen]);

  const handleContact = () => {
    const whatsAppUrl = createWhatsAppUrl("Halo Lyven, saya ingin bertanya tentang Photo Receipt dan paket sewanya.");
    if (!whatsAppUrl) {
      setContactOpen(true);
      return;
    }
    window.open(whatsAppUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="faqSection" id="faq" aria-labelledby="faq-title">
      <div className="faqIntro">
        <p className="faqEyebrow">#008 / FAQ</p>
        <h2 id="faq-title" tabIndex={-1}>Masih ada yang<br />ingin ditanyakan?</h2>
        <p>Biar lebih jelas sebelum membawa Lyven ke tempatmu.</p>
        <svg className="faqChatIcon" viewBox="0 0 88 65" aria-hidden="true">
          <path d="M9 48C3 42 2 34 4 26 8 11 24 3 43 4c21 1 37 13 38 29 1 15-14 27-34 28-8 0-16-1-22-4L5 63l8-12" />
          <circle cx="29" cy="33" r="2.6" /><circle cx="43" cy="33" r="2.6" /><circle cx="57" cy="33" r="2.6" />
          <path d="m74 5 6-9M82 15l10-4M76 24l9 5" />
        </svg>
      </div>

      <div className="faqConversation">
        <div className="faqList">
          {faqItems.map((item) => {
            const isOpen = openId === item.id;
            const answerId = `faq-answer-${item.id}`;
            return (
              <div className="faqItem" key={item.id}>
                <button
                  className="faqQuestionBubble"
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                >
                  <span>{item.question}</span>
                  <i aria-hidden="true"><span>{isOpen ? "−" : "+"}</span></i>
                </button>
                {isOpen && (
                  <div className="faqAnswerBubble" id={answerId} role="region" aria-label={`Jawaban: ${item.question}`}>
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="faqContact">
          <span>Belum menemukan jawaban?</span>
          <button type="button" onClick={handleContact}>Tanya Lyven <span aria-hidden="true">→</span></button>
        </div>
      </div>

      <dialog
        ref={dialogRef}
        className="dialog faqContactDialog"
        aria-labelledby="faq-contact-title"
        onCancel={() => setContactOpen(false)}
        onClose={() => setContactOpen(false)}
        onClick={(event) => { if (event.target === event.currentTarget) setContactOpen(false); }}
      >
        <div className="dialogContent">
          <p className="dialogLabel">PHOTO RECEIPT / BY LYVEN</p>
          <h2 id="faq-contact-title">Kontak Lyven akan ditambahkan</h2>
          <p>Nomor WhatsApp resmi belum tersedia. Silakan kembali setelah kontak Lyven ditambahkan.</p>
          <button type="button" onClick={() => setContactOpen(false)} autoFocus>Tutup</button>
        </div>
      </dialog>
    </section>
  );
}
