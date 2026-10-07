"use client";

import { MouseEvent, useEffect, useRef, useState, useSyncExternalStore } from "react";
import { createWhatsAppUrl } from "./contact-config";

const footerLinks = [
  { label: "Produk", href: "#produk" },
  { label: "Galeri", href: "#galeri" },
  { label: "Frame", href: "#frame" },
  { label: "Paket", href: "#paket" },
  { label: "FAQ", href: "#faq" },
] as const;

export function FinalCtaFooter() {
  const [contactOpen, setContactOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const currentYear = useSyncExternalStore<number | null>(
    () => () => undefined,
    () => new Date().getFullYear(),
    () => null,
  );

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (contactOpen && !dialog.open) dialog.showModal();
    if (!contactOpen && dialog.open) dialog.close();
  }, [contactOpen]);

  const scrollToAnchor = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    const target = document.querySelector<HTMLElement>(href);
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
      block: "start",
    });
    window.history.replaceState(null, "", href);
  };

  const handleContact = () => {
    const whatsAppUrl = createWhatsAppUrl("Halo Lyven, saya tertarik menyewa Photo Receipt untuk café, event, atau ruang kreatif. Boleh dibantu info paket dan ketersediaannya?");
    if (!whatsAppUrl) {
      setContactOpen(true);
      return;
    }
    window.open(whatsAppUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <section className="finalCta" id="kontak" aria-labelledby="final-cta-title">
        <div className="finalCtaInner">
          <svg className="finalSparkles" viewBox="0 0 80 100" aria-hidden="true">
            <path d="M35 2c2 19 8 27 24 31-16 5-22 13-24 34-3-21-9-29-25-34C26 29 32 21 35 2Z" />
            <path d="M10 58c1 10 5 15 14 17-9 3-13 7-14 18-2-11-5-15-14-18 9-2 12-7 14-17Z" />
          </svg>
          <svg className="finalArrowDoodle" viewBox="0 0 120 150" aria-hidden="true">
            <path d="M15 15c39-1 57 13 56 34-1 17-19 22-24 9-4-11 17-12 25 1 12 19 2 48-15 70" />
            <path d="m48 113 8 17 17-9M94 112l10-6M96 128l14 2M86 96l6-10" />
          </svg>

          <p className="finalCtaEyebrow">#009 / LET’S MAKE MEMORIES</p>
          <h2 id="final-cta-title">Siap bikin sudutmu<br />lebih berkesan?</h2>
          <p>Bawa Photo Receipt by Lyven ke café, event, atau ruang kreatifmu.</p>
          <div className="finalCtaActions">
            <button type="button" onClick={handleContact}>Tanya Sewa <span aria-hidden="true">→</span></button>
            <a href="#paket" onClick={(event) => scrollToAnchor(event, "#paket")}>Lihat Paket</a>
          </div>
        </div>
      </section>

      <footer className="siteFooter">
        <div className="footerInner">
          <div className="footerTop">
            <a className="footerBrand" href="#top" onClick={(event) => scrollToAnchor(event, "#top")} aria-label="Lyven, kembali ke atas">
              <strong>lyven</strong>
              <span>Photo Receipt by Lyven</span>
            </a>
            <span className="footerDivider" aria-hidden="true" />
            <nav className="footerNav" aria-label="Navigasi footer">
              {footerLinks.map((link) => (
                <a key={link.href} href={link.href} onClick={(event) => scrollToAnchor(event, link.href)}>{link.label}</a>
              ))}
            </nav>
          </div>

          <div className="footerBottom">
            <span>© {currentYear ?? ""} Lyven</span>
            <span>Momen kecil, kenangan yang dibawa pulang.</span>
            <a href="#top" onClick={(event) => scrollToAnchor(event, "#top")}>Kembali ke atas <span aria-hidden="true">↑</span></a>
          </div>
        </div>
      </footer>

      <dialog
        ref={dialogRef}
        className="dialog finalContactDialog"
        aria-labelledby="final-contact-title"
        onCancel={() => setContactOpen(false)}
        onClose={() => setContactOpen(false)}
        onClick={(event) => { if (event.target === event.currentTarget) setContactOpen(false); }}
      >
        <div className="dialogContent">
          <p className="dialogLabel">PHOTO RECEIPT / BY LYVEN</p>
          <h2 id="final-contact-title">Kontak Lyven akan ditambahkan</h2>
          <p>Nomor WhatsApp resmi belum tersedia. Silakan kembali setelah kontak Lyven ditambahkan.</p>
          <button type="button" onClick={() => setContactOpen(false)} autoFocus>Tutup</button>
        </div>
      </dialog>
    </>
  );
}
