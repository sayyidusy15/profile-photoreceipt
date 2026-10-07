"use client";

import { useEffect, useRef, useState } from "react";
import { createWhatsAppUrl } from "./contact-config";

type StepIcon = "document" | "calendar" | "payment" | "gear";

type RentalStep = {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: StepIcon;
  highlight?: boolean;
};

export const rentalSteps: RentalStep[] = [
  {
    id: "needs",
    number: "01",
    title: "Ceritakan kebutuhanmu",
    description: "Kirim lokasi, rencana mulai sewa, durasi, dan pilihan unit.",
    icon: "document",
  },
  {
    id: "confirmation",
    number: "02",
    title: "Konfirmasi paket & jadwal",
    description: "Sepakati ketersediaan, harga, dan biaya tambahan.",
    icon: "calendar",
  },
  {
    id: "deposit",
    number: "03",
    title: "Bayar DP",
    description: "Konfirmasi pemesanan setelah detail disepakati.",
    icon: "payment",
    highlight: true,
  },
  {
    id: "preparation",
    number: "04",
    title: "Persiapan & pemasangan",
    description: "Koordinasikan desain frame dan jadwal pemasangan bersama Lyven.",
    icon: "gear",
  },
];

export const paymentNote = "Ketentuan DP dan pelunasan dikonfirmasi saat pemesanan.";

function StepIconGraphic({ icon }: { icon: StepIcon }) {
  if (icon === "calendar") {
    return <svg viewBox="0 0 48 48" aria-hidden="true"><rect x="5" y="8" width="38" height="34" rx="5" /><path d="M5 18h38M15 4v9M33 4v9" /><circle cx="15" cy="27" r="1" /><circle cx="24" cy="27" r="1" /><circle cx="33" cy="27" r="1" /><circle cx="15" cy="35" r="1" /><circle cx="24" cy="35" r="1" /></svg>;
  }
  if (icon === "payment") {
    return <svg viewBox="0 0 48 48" aria-hidden="true"><rect x="4" y="9" width="40" height="30" rx="5" /><path d="M4 19h40M12 31h8" /></svg>;
  }
  if (icon === "gear") {
    return <svg viewBox="0 0 48 48" aria-hidden="true"><path d="m20 4-1 5-5 2-4-3-4 4 3 4-2 5-5 1v6l5 1 2 5-3 4 4 4 4-3 5 2 1 5h6l1-5 5-2 4 3 4-4-3-4 2-5 5-1v-6l-5-1-2-5 3-4-4-4-4 3-5-2-1-5z" /><circle cx="23" cy="25" r="8" /></svg>;
  }
  return <svg viewBox="0 0 48 48" aria-hidden="true"><path d="M10 4h20l8 8v31H10zM30 4v9h8M17 23h15M17 30h15M17 37h10" /></svg>;
}

export function RentalSteps() {
  const [contactOpen, setContactOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (contactOpen && !dialog.open) dialog.showModal();
    if (!contactOpen && dialog.open) dialog.close();
  }, [contactOpen]);

  const handleContact = () => {
    const whatsAppUrl = createWhatsAppUrl("Halo Lyven, saya ingin menyewa Photo Receipt. Boleh dibantu proses pemesanan, ketersediaan paket, serta ketentuan DP dan pelunasannya?");
    if (!whatsAppUrl) {
      setContactOpen(true);
      return;
    }
    window.open(whatsAppUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="rentalSteps" id="cara-sewa" aria-labelledby="rental-steps-title">
      <div className="rentalStepsIntro">
        <p><span aria-hidden="true" />CARA SEWA<span aria-hidden="true" /></p>
        <h2 id="rental-steps-title" tabIndex={-1}>Dari rencana jadi kenangan.</h2>
        <p>Empat langkah untuk membawa Lyven ke tempatmu.</p>
      </div>

      <ol className="rentalStepsList">
        {rentalSteps.map((step) => (
          <li className={`rentalStepCard${step.highlight ? " highlight" : ""}`} key={step.id}>
            <div className="rentalStepHeader">
              <strong>{step.number}</strong>
              <span>LYVEN<br />RENTAL STEP</span>
            </div>
            <span className="rentalStepDivider" aria-hidden="true" />
            <StepIconGraphic icon={step.icon} />
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </li>
        ))}
      </ol>

      <div className="rentalStepsAction">
        <p>{paymentNote}</p>
        <button type="button" onClick={handleContact}>Mulai Diskusi Sewa <span aria-hidden="true">→</span></button>
      </div>

      <dialog
        ref={dialogRef}
        className="dialog rentalStepsDialog"
        aria-labelledby="rental-steps-contact-title"
        onCancel={() => setContactOpen(false)}
        onClose={() => setContactOpen(false)}
        onClick={(event) => { if (event.target === event.currentTarget) setContactOpen(false); }}
      >
        <div className="dialogContent">
          <p className="dialogLabel">PHOTO RECEIPT / BY LYVEN</p>
          <h2 id="rental-steps-contact-title">Kontak Lyven akan ditambahkan</h2>
          <p>Nomor WhatsApp resmi belum tersedia. Silakan kembali setelah kontak Lyven ditambahkan.</p>
          <button type="button" onClick={() => setContactOpen(false)} autoFocus>Tutup</button>
        </div>
      </dialog>
    </section>
  );
}
