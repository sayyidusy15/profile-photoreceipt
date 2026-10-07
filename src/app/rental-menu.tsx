"use client";

import { useEffect, useRef, useState } from "react";
import { createWhatsAppUrl } from "./contact-config";

export type UnitConfigurationId = "vertical" | "landscape";

type RentalPackage = {
  id: string;
  number: string;
  name: string;
  duration: number;
  prices: Record<UnitConfigurationId, number>;
  inclusions: [string, string];
  badge?: string;
  isDemo: true;
};

const packages: RentalPackage[] = [
  {
    id: "starter",
    number: "01",
    name: "Starter",
    duration: 1,
    prices: { vertical: 1490000, landscape: 1690000 },
    inclusions: ["6 frame standar", "Support dasar"],
    isDemo: true,
  },
  {
    id: "space",
    number: "02",
    name: "Space",
    duration: 5,
    prices: { vertical: 6250000, landscape: 7000000 },
    inclusions: ["10 frame standar + 2 custom", "Maintenance"],
    badge: "Pilihan untuk café",
    isDemo: true,
  },
  {
    id: "signature",
    number: "03",
    name: "Signature",
    duration: 10,
    prices: { vertical: 10900000, landscape: 12400000 },
    inclusions: ["12 frame standar + 4 custom", "Support prioritas"],
    isDemo: true,
  },
];

const currency = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  maximumFractionDigits: 0,
});

function formatPrice(value: number) {
  return currency.format(value).replace(/\s/g, "");
}

type RentalMenuProps = {
  configurationId: UnitConfigurationId;
  onConfigurationChange: (configuration: UnitConfigurationId) => void;
};

export function RentalMenu({ configurationId, onConfigurationChange }: RentalMenuProps) {
  const [packageId, setPackageId] = useState("space");
  const [contactOpen, setContactOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const activePackage = packages.find((item) => item.id === packageId) ?? packages[1];
  const configurationLabel = configurationId === "vertical" ? "Vertikal" : "Landscape";

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (contactOpen && !dialog.open) dialog.showModal();
    if (!contactOpen && dialog.open) dialog.close();
  }, [contactOpen]);

  const handleContact = () => {
    const message = `Halo Lyven, saya tertarik paket ${activePackage.name} untuk ${activePackage.duration} bulan, konfigurasi ${configurationLabel}. Saya ingin menanyakan ketersediaan dan detail sewanya.`;
    const whatsAppUrl = createWhatsAppUrl(message);

    if (!whatsAppUrl) {
      setContactOpen(true);
      return;
    }
    window.open(whatsAppUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="rentalMenu" id="paket" aria-labelledby="rental-menu-title">
      <div className="rentalGrid">
        <div className="rentalConfigurator">
          <div className="rentalIntro">
            <p className="rentalEyebrow">#006 / RENTAL MENU</p>
            <div className="rentalIntroRow">
              <div>
                <h2 id="rental-menu-title" tabIndex={-1}>Bawa Lyven<br />ke tempatmu.</h2>
                <p>Pilih durasi sewa dan konfigurasi yang sesuai.</p>
              </div>
              <aside className="rentalDemoNote">
                <strong>Harga dan isi paket masih demo.</strong>
                <span>Ini adalah estimasi untuk kebutuhan referensi. Harga dan isi paket dapat berubah mengikuti kebutuhan dan lokasi.</span>
              </aside>
            </div>
          </div>

          <fieldset className="rentalConfiguration">
            <legend><span>01 /</span> Pilih konfigurasi unit</legend>
            <div className="rentalConfigurationOptions">
              {(["vertical", "landscape"] as UnitConfigurationId[]).map((id) => {
                const label = id === "vertical" ? "Vertikal" : "Landscape";
                return (
                  <label key={id}>
                    <input
                      type="radio"
                      name="rental-unit-configuration"
                      checked={configurationId === id}
                      onChange={() => onConfigurationChange(id)}
                    />
                    <span><i aria-hidden="true" />{label}</span>
                  </label>
                );
              })}
            </div>
          </fieldset>

          <fieldset className="rentalPackages">
            <legend><span>02 /</span> Pilih durasi sewa</legend>
            <div className="rentalPackageList">
              {packages.map((item) => (
                <label className="rentalPackageOption" key={item.id}>
                  <input
                    type="radio"
                    name="rental-package"
                    checked={packageId === item.id}
                    onChange={() => setPackageId(item.id)}
                  />
                  <span className="rentalRadio" aria-hidden="true" />
                  <span className="rentalPackageName">
                    <strong>{item.name}</strong>
                    {item.badge && <small>{item.badge}</small>}
                  </span>
                  <span className="rentalPackageDetails">
                    <strong>{item.duration} bulan</strong>
                    {item.inclusions.map((inclusion) => <small key={inclusion}>{inclusion}</small>)}
                  </span>
                  <span className="rentalPackagePrice">
                    <small>Total sewa</small>
                    <strong>{formatPrice(item.prices[configurationId])}</strong>
                    <span>total / {item.duration} bulan</span>
                  </span>
                </label>
              ))}
            </div>
          </fieldset>

          <div className="rentalIncluded">
            <svg viewBox="0 0 32 32" aria-hidden="true"><path d="m3 9 13-6 13 6v15l-13 5-13-5zM3 9l13 6 13-6M16 15v14" /></svg>
            <span><strong>Semua paket sudah termasuk 1 set unit lengkap:</strong>Tablet, printer, box, stand, dan perlengkapan pendukung.</span>
          </div>
        </div>

        <aside className="rentalReceipt" aria-label="Ringkasan sewa" aria-live="polite">
          <span className="rentalPaperclip" aria-hidden="true" />
          <div className="receiptHeader">
            <strong>LYVEN / RINGKASAN SEWA</strong>
            <span>Estimasi demo</span>
          </div>
          <div className="receiptSection receiptPackage">
            <small>PAKET</small>
            <strong>{activePackage.name}</strong>
          </div>
          <div className="receiptSection">
            <small>KONFIGURASI UNIT</small>
            <span>{configurationLabel}</span>
          </div>
          <div className="receiptSection">
            <small>DURASI SEWA</small>
            <span>{activePackage.duration} bulan</span>
          </div>
          <div className="receiptSection">
            <small>ISI PAKET</small>
            {activePackage.inclusions.map((inclusion) => <span key={inclusion}>{inclusion}</span>)}
          </div>
          <div className="receiptSection">
            <small>UNIT LENGKAP</small>
            <span>Tablet, printer, box, stand,<br />dan perlengkapan pendukung.</span>
          </div>
          <div className="receiptTotal">
            <small>TOTAL SEWA</small>
            <strong>{formatPrice(activePackage.prices[configurationId])}</strong>
            <span>total / {activePackage.duration} bulan</span>
          </div>
          <button type="button" onClick={handleContact}>Tanya Paket <span aria-hidden="true">→</span></button>
        </aside>
      </div>

      <p className="rentalFootnote"><span aria-hidden="true">!</span>Pengiriman, deposit, pemasangan, pajak, dan jatah kertas dikonfirmasi bersama Lyven.</p>

      <dialog
        ref={dialogRef}
        className="dialog rentalContactDialog"
        aria-labelledby="rental-contact-title"
        onCancel={() => setContactOpen(false)}
        onClose={() => setContactOpen(false)}
        onClick={(event) => { if (event.target === event.currentTarget) setContactOpen(false); }}
      >
        <div className="dialogContent">
          <p className="dialogLabel">PHOTO RECEIPT / BY LYVEN</p>
          <h2 id="rental-contact-title">Kontak Lyven akan ditambahkan</h2>
          <p>Nomor WhatsApp resmi belum tersedia. Pilihan paketmu tetap tersimpan selama dialog ini terbuka.</p>
          <button type="button" onClick={() => setContactOpen(false)} autoFocus>Tutup</button>
        </div>
      </dialog>
    </section>
  );
}
