"use client";

export function LyvenInMotion() {
  return (
    <section className="motionSection" id="reels" aria-labelledby="motion-title">
      <div className="motionIntro">
        <p className="motionEyebrow">LYVEN IN MOTION</p>
        <h2 id="motion-title" tabIndex={-1}>Lyven, dalam gerak.</h2>
        <p>Lihat momennya, rasakan suasananya.</p>
      </div>

      <svg className="motionArrow" viewBox="0 0 130 150" aria-hidden="true">
        <path d="M22 12c67 13 90 66 50 107" />
        <path d="m49 108 23 11 6-25" />
      </svg>

      <div className="motionSingleContainer">
        <div className="motionReelFrame">
          <iframe
            src="https://www.instagram.com/reel/DdTEM2-zdsv/embed"
            className="motionReelIframe"
            title="Instagram Reel Photo Receipt by Lyven"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
