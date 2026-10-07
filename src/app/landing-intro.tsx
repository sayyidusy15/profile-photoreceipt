"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { HowItWorks } from "./how-it-works";
import { MomentsWall } from "./moments-wall";
import { FrameCollection } from "./frame-collection";
import { RentalMenu } from "./rental-menu";
import { FaqSection } from "./faq-section";
import { FinalCtaFooter } from "./final-cta-footer";
import "./landing.css";

const styles = {
  page: "page",
  header: "header",
  navbar: "navbar",
  wordmark: "wordmark",
  desktopLinks: "desktopLinks",
  rentButton: "rentButton",
  desktopRent: "desktopRent",
  mobileActions: "mobileActions",
  mobileRent: "mobileRent",
  menuButton: "menuButton",
  mobileMenu: "mobileMenu",
  hero: "hero",
  copy: "copy",
  eyebrow: "eyebrow",
  headline: "headline",
  accent: "accent",
  subcopy: "subcopy",
  ctas: "ctas",
  primaryCta: "primaryCta",
  secondaryCta: "secondaryCta",
  visual: "visual",
  visualImage: "visualImage",
  placeholder: "placeholder",
  dialog: "dialog",
  dialogContent: "dialogContent",
  dialogLabel: "dialogLabel",
  productSetup: "productSetup",
  setupIntro: "setupIntro",
  setupEyebrow: "setupEyebrow",
  setupHeading: "setupHeading",
  setupDescription: "setupDescription",
  configurationSelector: "configurationSelector",
  selectorOptions: "selectorOptions",
  setupGallery: "setupGallery",
  setupMainVisual: "setupMainVisual",
  setupDetails: "setupDetails",
  setupDetailVisual: "setupDetailVisual",
  setupMediaImage: "setupMediaImage",
  setupPlaceholder: "setupPlaceholder",
  configurationLabel: "configurationLabel",
  equipmentList: "equipmentList",
  equipmentNumber: "equipmentNumber",
  equipmentName: "equipmentName",
} as const;

const navigation = ["Produk", "Galeri", "Frame", "Paket", "FAQ"];

const equipment = ["Tablet", "Printer", "Box", "Stand", "Perlengkapan pendukung"];

type ConfigurationId = "vertical" | "landscape";

type SetupImage = {
  src?: string;
  alt: string;
  label: string;
  size: string;
};

type UnitConfiguration = {
  id: ConfigurationId;
  label: string;
  fullSetup: SetupImage;
  details: [SetupImage, SetupImage];
};

const unitConfigurations: Record<ConfigurationId, UnitConfiguration> = {
  vertical: {
    id: "vertical",
    label: "Vertikal",
    fullSetup: {
      alt: "Unit Photo Receipt konfigurasi vertikal lengkap dengan stand",
      label: "FOTO FULL SETUP",
      size: "1200 × 1200 px",
    },
    details: [
      { alt: "Detail tablet konfigurasi vertikal", label: "DETAIL TABLET", size: "800 × 600 px" },
      { alt: "Detail printer konfigurasi vertikal", label: "DETAIL PRINTER", size: "800 × 600 px" },
    ],
  },
  landscape: {
    id: "landscape",
    label: "Landscape",
    fullSetup: {
      alt: "Unit Photo Receipt konfigurasi landscape lengkap dengan stand",
      label: "FOTO FULL SETUP",
      size: "1200 × 1200 px",
    },
    details: [
      { alt: "Detail tablet konfigurasi landscape", label: "DETAIL TABLET", size: "800 × 600 px" },
      { alt: "Detail printer konfigurasi landscape", label: "DETAIL PRINTER", size: "800 × 600 px" },
    ],
  },
};

type HeroVisualProps = {
  imageSrc?: string;
  imageAlt?: string;
};

function HeroVisual({ imageSrc, imageAlt = "Photo Receipt by Lyven" }: HeroVisualProps) {
  return (
    <div className={styles.visual}>
      {imageSrc ? (
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          sizes="(max-width: 999px) calc(100vw - 40px), 55vw"
          className={styles.visualImage}
        />
      ) : (
        <div className={styles.placeholder} aria-label="Placeholder foto produk atau lifestyle">
          <strong>FOTO PRODUK / LIFESTYLE</strong>
          <span>1200 × 1280 px</span>
          <small>Placeholder gambar</small>
        </div>
      )}
    </div>
  );
}

function SetupMedia({
  image,
  className,
  sizes,
  configuration,
}: {
  image: SetupImage;
  className: string;
  sizes: string;
  configuration?: string;
}) {
  return (
    <div className={className}>
      {image.src ? (
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes={sizes}
          className={styles.setupMediaImage}
        />
      ) : (
        <div className={styles.setupPlaceholder} aria-label={`${image.label}, placeholder gambar`}>
          <strong>{image.label}</strong>
          <span>{image.size}</span>
        </div>
      )}
      {configuration && <span className={styles.configurationLabel}>{configuration}</span>}
    </div>
  );
}

export function LandingIntro() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [configurationId, setConfigurationId] = useState<ConfigurationId>("vertical");
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const configuration = unitConfigurations[configurationId];

  useEffect(() => {
    if (!menuOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [menuOpen]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (dialogOpen && !dialog.open) dialog.showModal();
    if (!dialogOpen && dialog.open) dialog.close();
  }, [dialogOpen]);

  const showComingSoon = () => {
    setMenuOpen(false);
    setDialogOpen(true);
  };

  const handleSectionNavigation = (sectionId: string) => {
    setMenuOpen(false);
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
      block: "start",
    });
    requestAnimationFrame(() => section?.querySelector<HTMLElement>("h2")?.focus({ preventScroll: true }));
  };

  const handleNavigation = (item: string) => {
    const sectionId = item === "Produk" ? "produk" : item === "Galeri" ? "galeri" : item === "Frame" ? "frame" : item === "Paket" ? "paket" : item === "FAQ" ? "faq" : undefined;

    if (!sectionId) {
      showComingSoon();
      return;
    }

    handleSectionNavigation(sectionId);
  };

  return (
    <main className={styles.page} id="top">
      <header className={styles.header}>
        <nav className={styles.navbar} aria-label="Navigasi utama">
          <button className={styles.wordmark} type="button" onClick={showComingSoon}>
            lyven
          </button>

          <div className={styles.desktopLinks}>
            {navigation.map((item) => (
              <button key={item} type="button" onClick={() => handleNavigation(item)}>
                {item}
              </button>
            ))}
          </div>

          <button className={`${styles.rentButton} ${styles.desktopRent}`} type="button" onClick={showComingSoon}>
            Tanya Sewa
          </button>

          <div className={styles.mobileActions}>
            <button className={styles.mobileRent} type="button" onClick={showComingSoon}>
              Sewa
            </button>
            <button
              ref={menuButtonRef}
              className={styles.menuButton}
              type="button"
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span />
              <span />
            </button>
          </div>

          {menuOpen && (
            <div className={styles.mobileMenu} id="mobile-navigation">
              {navigation.map((item) => (
                <button key={item} type="button" onClick={() => handleNavigation(item)}>
                  {item}
                </button>
              ))}
            </div>
          )}
        </nav>
      </header>

      <section className={styles.hero} aria-labelledby="hero-title">
        <div className={styles.copy}>
          <p className={styles.eyebrow}>PHOTO RECEIPT / BY LYVEN</p>
          <h1 className={styles.headline} id="hero-title">
            <span>Momen kecil.</span>{" "}
            <span className={styles.accent}>Kenangan yang bisa</span>{" "}
            <span>dibawa pulang.</span>
          </h1>
          <p className={styles.subcopy}>
            Foto bergaya receipt untuk café, event, dan ruang kreatifmu.
          </p>
          <div className={styles.ctas}>
            <button className={styles.primaryCta} type="button" onClick={() => handleSectionNavigation("paket")}>
              Lihat Paket Sewa
            </button>
            <button className={styles.secondaryCta} type="button" onClick={() => handleSectionNavigation("galeri")}>
              Lihat Hasil Foto
            </button>
          </div>
        </div>

        <HeroVisual />
      </section>

      <section className={styles.productSetup} id="produk" aria-labelledby="setup-title">
        <div className={styles.setupGallery} aria-live="polite">
          <SetupMedia
            image={configuration.fullSetup}
            className={styles.setupMainVisual}
            sizes="(max-width: 999px) calc(100vw - 40px), 600px"
            configuration={configuration.label}
          />
          <div className={styles.setupDetails}>
            {configuration.details.map((detail) => (
              <SetupMedia
                key={`${configuration.id}-${detail.label}`}
                image={detail}
                className={styles.setupDetailVisual}
                sizes="(max-width: 560px) calc(50vw - 28px), 290px"
              />
            ))}
          </div>
        </div>

        <div className={styles.setupIntro}>
          <p className={styles.setupEyebrow}>#002 / THE SETUP</p>
          <h2 className={styles.setupHeading} id="setup-title" tabIndex={-1}>
            <span>Semua sudah</span>
            <span>dalam satu setup.</span>
          </h2>
          <p className={styles.setupDescription}>
            Tablet, printer, box, perlengkapan pendukung, dan stand untuk sudut foto di tempatmu.
          </p>

          <fieldset className={styles.configurationSelector}>
            <legend>Konfigurasi unit</legend>
            <div className={styles.selectorOptions}>
              {Object.values(unitConfigurations).map((option) => (
                <label key={option.id}>
                  <input
                    type="radio"
                    name="unit-configuration"
                    value={option.id}
                    checked={configurationId === option.id}
                    onChange={() => setConfigurationId(option.id)}
                  />
                  <span>{option.label}</span>
                </label>
              ))}
            </div>
          </fieldset>
        </div>

        <ol className={styles.equipmentList} aria-label="Kelengkapan unit">
          {equipment.map((item, index) => (
            <li key={item}>
              <span className={styles.equipmentNumber}>{String(index + 1).padStart(2, "0")}</span>
              <span className={styles.equipmentName}>{item}</span>
            </li>
          ))}
        </ol>
      </section>

      <HowItWorks />
      <MomentsWall />
      <FrameCollection />
      <RentalMenu configurationId={configurationId} onConfigurationChange={setConfigurationId} />
      <FaqSection />
      <FinalCtaFooter />

      <dialog
        ref={dialogRef}
        className={styles.dialog}
        aria-labelledby="preview-dialog-title"
        onCancel={() => setDialogOpen(false)}
        onClose={() => setDialogOpen(false)}
        onClick={(event) => {
          if (event.target === event.currentTarget) setDialogOpen(false);
        }}
      >
        <div className={styles.dialogContent}>
          <p className={styles.dialogLabel}>PHOTO RECEIPT / BY LYVEN</p>
          <h2 id="preview-dialog-title">Bagian ini akan tersedia pada tahap berikutnya</h2>
          <p>Saat ini preview difokuskan pada navbar dan hero section.</p>
          <button type="button" onClick={() => setDialogOpen(false)} autoFocus>
            Mengerti
          </button>
        </div>
      </dialog>
    </main>
  );
}
