"use client";

import { useEffect, useRef, useState } from "react";
import { createWhatsAppUrl } from "./contact-config";

type ServiceAreaItem = {
  id: string;
  name: string;
  stubLabel: string;
  description: string;
  tone: "light" | "rose";
  stamp: "camera" | "travel";
};

const serviceAreas: ServiceAreaItem[] = [
  {
    id: "bandung",
    name: "Bandung & sekitarnya",
    stubLabel: "BANDUNG & SEKITARNYA",
    description: "Area layanan utama Lyven. Hubungi kami untuk memastikan jangkauan lokasi kamu.",
    tone: "light",
    stamp: "camera",
  },
  {
    id: "jabodetabek",
    name: "Jabodetabek",
    stubLabel: "JABODETABEK",
    description: "Tersedia dengan biaya transport tambahan. Hubungi kami untuk detail biaya dan kebutuhan lokasi.",
    tone: "rose",
    stamp: "travel",
  },
];

function LocationPin() {
  return (
    <svg className="ticketPin" viewBox="0 0 48 62" aria-hidden="true">
      <path d="M24 59S5 38 5 23a19 19 0 1 1 38 0c0 15-19 36-19 36Z" />
      <circle cx="24" cy="23" r="7" />
    </svg>
  );
}

function TicketStamp({ type }: { type: ServiceAreaItem["stamp"] }) {
  if (type === "camera") {
    return (
      <svg className="ticketStamp cameraStamp" viewBox="0 0 170 95" aria-hidden="true">
        <path d="M4 54c20 12 31-11 51 1s31-11 51 1M4 66c20 12 31-11 51 1s31-11 51 1M4 78c20 12 31-11 51 1s31-11 51 1" />
        <circle cx="126" cy="48" r="39" /><circle cx="126" cy="48" r="32" />
        <path d="M108 40h10l4-7h10l5 7h8v26h-37z" /><circle cx="127" cy="53" r="9" /><path d="M126 27c-8-6-12-13-4-16 5-2 7 3 7 3s3-5 8-1c6 5-3 12-11 14Z" />
      </svg>
    );
  }

  return (
    <svg className="ticketStamp travelStamp" viewBox="0 0 170 95" aria-hidden="true">
      <path d="M2 66c25-14 47 17 72 2s47 15 72 0M2 77c25-14 47 17 72 2s47 15 72 0M2 88c25-14 47 17 72 2s47 15 72 0" />
      <path d="m70 54 18-16-24-13 6-6 31 7 17-15c5-4 12-4 15-1s1 9-4 13l-18 14 5 31-7 5-12-25-19 14z" />
    </svg>
  );
}

function ServiceTicket({ item }: { item: ServiceAreaItem }) {
  return (
    <li className={`serviceTicket ${item.tone}`}>
      <span className="ticketNotch notchTop" aria-hidden="true" />
      <span className="ticketNotch notchBottom" aria-hidden="true" />
      <div className="ticketInfo">
        <span className="ticketDoodle" aria-hidden="true"><i /><i /><i /></span>
        <p>LYVEN / SERVICE AREA</p>
        <span className="ticketDashed" aria-hidden="true" />
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <TicketStamp type={item.stamp} />
      </div>
      <div className="ticketStub">
        <LocationPin />
        <span aria-hidden="true" />
        <strong>{item.stubLabel}</strong>
      </div>
    </li>
  );
}

export function ServiceArea() {
  const [contactOpen, setContactOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (contactOpen && !dialog.open) dialog.showModal();
    if (!contactOpen && dialog.open) dialog.close();
  }, [contactOpen]);

  const handleContact = () => {
    const whatsAppUrl = createWhatsAppUrl("Halo Lyven, saya ingin cek layanan Photo Receipt untuk lokasi saya di [tulis lokasi]. Boleh dibantu info jangkauan dan biaya transportnya?");
    if (!whatsAppUrl) {
      setContactOpen(true);
      return;
    }
    window.open(whatsAppUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="serviceArea" id="wilayah-layanan" aria-labelledby="service-area-title">
      <div className="serviceAreaIntro">
        <div>
          <p>WILAYAH LAYANAN</p>
          <h2 id="service-area-title" tabIndex={-1}>Lyven hadir di dekatmu.</h2>
          <p>Dari Bandung, untuk momen di tempatmu.</p>
        </div>
        <svg className="serviceJourney" viewBox="0 0 430 150" aria-hidden="true">
          <path d="M7 133c48-57 88-29 131-24 63 7 89-18 97-48 8-31-23-35-31-14-8 22 28 39 61 23l94-43" />
          <path d="m356 27 30-23 37 8-28 20-3 29-10 5-6-24-24 9-7-7 20-14z" />
        </svg>
      </div>

      <ul className="serviceTickets" aria-label="Daftar wilayah layanan">
        {serviceAreas.map((item) => <ServiceTicket item={item} key={item.id} />)}
      </ul>

      <div className="serviceAreaBottom">
        <button type="button" onClick={handleContact}>Cek Lokasi Kamu <span aria-hidden="true">→</span></button>
        <p><i aria-hidden="true">i</i><span aria-hidden="true" />Jangkauan dan biaya transport dikonfirmasi sesuai lokasi.</p>
      </div>

      <dialog
        ref={dialogRef}
        className="dialog serviceContactDialog"
        aria-labelledby="service-contact-title"
        onCancel={() => setContactOpen(false)}
        onClose={() => setContactOpen(false)}
        onClick={(event) => { if (event.target === event.currentTarget) setContactOpen(false); }}
      >
        <div className="dialogContent">
          <p className="dialogLabel">PHOTO RECEIPT / BY LYVEN</p>
          <h2 id="service-contact-title">Kontak Lyven akan ditambahkan</h2>
          <p>Nomor WhatsApp resmi belum tersedia. Silakan kembali setelah kontak Lyven ditambahkan.</p>
          <button type="button" onClick={() => setContactOpen(false)} autoFocus>Tutup</button>
        </div>
      </dialog>
    </section>
  );
}
