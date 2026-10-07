"use client";

import { CSSProperties, useState } from "react";

type CrossingRibbonsProps = {
  frontPhrases: readonly string[];
  backPhrases: readonly string[];
  label: string;
  frontDuration?: number;
  backDuration?: number;
};

type RibbonStyle = CSSProperties & { "--ribbon-duration": string };

function RibbonGroup({ phrases }: { phrases: readonly string[] }) {
  const extendedPhrases = [...phrases, ...phrases];

  return (
    <span className="ribbonGroup" aria-hidden="true">
      {extendedPhrases.map((phrase, index) => (
        <span className="ribbonPhrase" key={`${phrase}-${index}`}>
          <span>{phrase}</span>
          <i aria-hidden="true">✦</i>
        </span>
      ))}
    </span>
  );
}

function RibbonTrack({
  phrases,
  duration,
}: {
  phrases: readonly string[];
  duration: number;
}) {
  return (
    <div className="ribbonTrack" style={{ "--ribbon-duration": `${duration}s` } as RibbonStyle}>
      <RibbonGroup phrases={phrases} />
      <RibbonGroup phrases={phrases} />
    </div>
  );
}

export function CrossingRibbons({
  frontPhrases,
  backPhrases,
  label,
  frontDuration = 54,
  backDuration = 58,
}: CrossingRibbonsProps) {
  const [paused, setPaused] = useState(false);
  const accessibleCopy = [...frontPhrases, ...backPhrases].join(". ");

  return (
    <section className={`crossingRibbons${paused ? " isPaused" : ""}`} aria-label={label}>
      <p className="srOnly">{accessibleCopy}</p>
      <div className="ribbonBand ribbonBack" aria-hidden="true">
        <RibbonTrack phrases={backPhrases} duration={backDuration} />
      </div>
      <div className="ribbonBand ribbonFront" aria-hidden="true">
        <RibbonTrack phrases={frontPhrases} duration={frontDuration} />
      </div>
      <button
        className="ribbonMotionControl"
        type="button"
        aria-pressed={paused}
        onClick={() => setPaused((current) => !current)}
      >
        {paused ? "Putar marquee" : "Jeda marquee"}
      </button>
    </section>
  );
}
