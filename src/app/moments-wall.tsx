import Image from "next/image";
import type { CSSProperties } from "react";

type MomentKind = "landscape" | "portrait" | "square" | "receipt";

type MomentItem = {
  id: string;
  kind: MomentKind;
  label: string;
  sourceSize: string;
  alt: string;
  rotation: number;
  src?: string;
};

const momentRows: MomentItem[][] = [
  [
    {
      id: "moment",
      kind: "landscape",
      label: "FOTO MOMEN",
      sourceSize: "1200 × 900 px",
      alt: "Foto momen Photo Receipt",
      rotation: 1.2,
    },
    {
      id: "usage",
      kind: "portrait",
      label: "FOTO PENGGUNAAN",
      sourceSize: "900 × 1200 px",
      alt: "Foto penggunaan Photo Receipt",
      rotation: -0.8,
    },
    {
      id: "receipt-one",
      kind: "receipt",
      label: "HASIL RECEIPT",
      sourceSize: "400 × 1000 px",
      alt: "Hasil cetak Photo Receipt",
      rotation: 1.5,
    },
  ],
  [
    {
      id: "venue",
      kind: "square",
      label: "FOTO DI VENUE",
      sourceSize: "1000 × 1000 px",
      alt: "Foto Photo Receipt di venue",
      rotation: 1,
    },
    {
      id: "together",
      kind: "landscape",
      label: "FOTO BERSAMA",
      sourceSize: "1200 × 900 px",
      alt: "Foto bersama dengan Photo Receipt",
      rotation: -0.6,
    },
    {
      id: "receipt-two",
      kind: "receipt",
      label: "HASIL RECEIPT",
      sourceSize: "400 × 1000 px",
      alt: "Hasil cetak Photo Receipt kedua",
      rotation: -1.3,
    },
  ],
];

function Rope() {
  return (
    <svg className="momentRope" viewBox="0 0 1200 72" preserveAspectRatio="none" aria-hidden="true">
      <path d="M0 7 Q600 76 1200 7" />
    </svg>
  );
}

function Doodles() {
  return (
    <div className="momentDoodles" aria-hidden="true">
      <svg className="doodle doodleHeart" viewBox="0 0 52 52">
        <path d="M25 42S8 31 8 18c0-8 10-10 17-2 7-8 17-6 17 2 0 13-17 24-17 24Z" />
        <path d="m43 7 5-4M47 16h5" />
      </svg>
      <svg className="doodle doodleSpark" viewBox="0 0 48 48">
        <path d="M24 4c0 11-5 16-16 16 11 0 16 5 16 16 0-11 5-16 16-16-11 0-16-5-16-16Z" />
        <path d="m8 37-5 5M39 36l6 5" />
      </svg>
      <svg className="doodle doodleLines" viewBox="0 0 48 48">
        <path d="m8 29-6 5M15 36l-2 8M34 10l5-7" />
      </svg>
    </div>
  );
}

function MomentCard({ item }: { item: MomentItem }) {
  const style = { "--rotation": `${item.rotation}deg` } as CSSProperties;
  const isReceipt = item.kind === "receipt";

  return (
    <div className={`momentItem ${item.kind}`} style={style}>
      <span className="momentClip" aria-hidden="true" />
      <div className={`momentCard ${isReceipt ? "receiptMomentCard" : "photoMomentCard"}`}>
        <div className="momentMedia">
          {item.src ? (
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(max-width: 560px) 90vw, (max-width: 999px) 45vw, 400px"
              className="momentImage"
            />
          ) : (
            <div className="momentPlaceholder" aria-label={`${item.label}, placeholder gambar`}>
              <strong>{item.label}</strong>
              <span>{item.sourceSize}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function MomentsWall() {
  return (
    <section className="momentsWall" id="galeri" aria-labelledby="moments-title">
      <div className="momentsIntro">
        <p className="momentsEyebrow">#004 / THE MOMENTS WALL</p>
        <h2 id="moments-title" tabIndex={-1}>
          <span>Momen mereka,</span>
          <span>jadi kenangan.</span>
        </h2>
        <p>Dari coffee dates sampai hari spesial.</p>
      </div>

      <div className="momentRows">
        {momentRows.map((row, rowIndex) => (
          <div className={`momentRow momentRow${rowIndex + 1}`} key={`row-${rowIndex + 1}`}>
            <Rope />
            <div className="momentGrid">
              {row.map((item) => (
                <MomentCard item={item} key={item.id} />
              ))}
            </div>
          </div>
        ))}
      </div>
      <Doodles />
    </section>
  );
}
