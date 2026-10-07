"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

type Orientation = "Portrait" | "Landscape";
type Category = "standard" | "event";
type FrameFilter = "Semua" | Orientation | "Event";

type FrameItem = {
  id: string;
  number: string;
  name: string;
  category: Category;
  orientation: Orientation;
  sourceSize: string;
  src?: string;
  isDemo: true;
};

const filters: FrameFilter[] = ["Semua", "Portrait", "Landscape", "Event"];

const frames: FrameItem[] = [
  { id: "classic", number: "01", name: "Classic", category: "standard", orientation: "Portrait", sourceSize: "400 × 1000 px", isDemo: true },
  { id: "date-night", number: "02", name: "Date Night", category: "standard", orientation: "Portrait", sourceSize: "400 × 1000 px", isDemo: true },
  { id: "film-strip", number: "03", name: "Film Strip", category: "standard", orientation: "Portrait", sourceSize: "400 × 1000 px", isDemo: true },
  { id: "love-note", number: "04", name: "Love Note", category: "standard", orientation: "Portrait", sourceSize: "400 × 1000 px", isDemo: true },
  { id: "minimal", number: "05", name: "Minimal", category: "standard", orientation: "Portrait", sourceSize: "400 × 1000 px", isDemo: true },
  { id: "cafe-notes", number: "06", name: "Café Notes", category: "standard", orientation: "Portrait", sourceSize: "400 × 1000 px", isDemo: true },
  { id: "friends", number: "07", name: "Friends", category: "standard", orientation: "Landscape", sourceSize: "1000 × 600 px", isDemo: true },
  { id: "wide-film", number: "08", name: "Wide Film", category: "standard", orientation: "Landscape", sourceSize: "1000 × 600 px", isDemo: true },
  { id: "group-shot", number: "09", name: "Group Shot", category: "standard", orientation: "Landscape", sourceSize: "1000 × 600 px", isDemo: true },
  { id: "weekend", number: "10", name: "Weekend", category: "standard", orientation: "Landscape", sourceSize: "1000 × 600 px", isDemo: true },
  { id: "birthday", number: "11", name: "Birthday", category: "event", orientation: "Portrait", sourceSize: "400 × 1000 px", isDemo: true },
  { id: "wedding", number: "12", name: "Wedding", category: "event", orientation: "Portrait", sourceSize: "400 × 1000 px", isDemo: true },
];

function matchesFilter(frame: FrameItem, filter: FrameFilter) {
  if (filter === "Semua") return true;
  if (filter === "Event") return frame.category === "event";
  return frame.orientation === filter;
}

export function FrameCollection() {
  const [activeFilter, setActiveFilter] = useState<FrameFilter>("Semua");
  const [activeId, setActiveId] = useState("classic");

  const visibleFrames = useMemo(
    () => frames.filter((frame) => matchesFilter(frame, activeFilter)),
    [activeFilter],
  );
  const activeFrame = frames.find((frame) => frame.id === activeId) ?? frames[0];

  const selectFilter = (filter: FrameFilter) => {
    const nextFrames = frames.filter((frame) => matchesFilter(frame, filter));
    setActiveFilter(filter);
    if (!nextFrames.some((frame) => frame.id === activeId)) setActiveId(nextFrames[0].id);
  };

  return (
    <section className="frameCollection" id="frame" aria-labelledby="frame-collection-title">
      <div className="frameCollectionIntro">
        <div>
          <p className="frameCollectionEyebrow">#005 / FRAME COLLECTION</p>
          <h2 id="frame-collection-title" tabIndex={-1}>Satu momen,<br />banyak gaya.</h2>
          <p>Pilih desain yang cocok dengan mood atau acaranya.</p>
        </div>
        <p className="frameDemoCount"><span aria-hidden="true" />{frames.filter((frame) => frame.isDemo).length} frame demo</p>
      </div>

      <div className="frameAlbum">
        <div className="frameAlbumPage frameAlbumLeft">
          <div className="frameFilters" role="group" aria-label="Filter koleksi frame">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                aria-pressed={activeFilter === filter}
                onClick={() => selectFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="frameList" aria-label={`${visibleFrames.length} frame ditampilkan`}>
            {visibleFrames.map((frame) => (
              <button
                className="frameListItem"
                key={frame.id}
                type="button"
                aria-pressed={activeId === frame.id}
                onClick={() => setActiveId(frame.id)}
              >
                <span className="frameNumber">{frame.number}</span>
                <span className="frameItemCopy">
                  <strong>{frame.name}</strong>
                  <small>{frame.orientation}</small>
                </span>
              </button>
            ))}
          </div>

          <p className="frameAlbumFooter">LYVEN / PICK YOUR RECEIPT <span aria-hidden="true" /></p>
        </div>

        <div className="frameAlbumSpine" aria-hidden="true">
          {[0, 1, 2, 3].map((ring) => <span key={ring} />)}
        </div>

        <div className="frameAlbumPage frameAlbumRight">
          <div className="framePreviewStage">
            <div className={`framePreviewPaper ${activeFrame.orientation.toLowerCase()}`}>
              <i className="photoCorner cornerTopLeft" aria-hidden="true" />
              <i className="photoCorner cornerTopRight" aria-hidden="true" />
              <i className="photoCorner cornerBottomLeft" aria-hidden="true" />
              <i className="photoCorner cornerBottomRight" aria-hidden="true" />
              <div className="framePreviewMedia">
                {activeFrame.src ? (
                  <Image
                    src={activeFrame.src}
                    alt={`Preview frame ${activeFrame.name}`}
                    fill
                    sizes="(max-width: 999px) calc(100vw - 104px), 430px"
                    className="framePreviewImage"
                  />
                ) : (
                  <div className="framePreviewPlaceholder">
                    <strong>{activeFrame.name.toUpperCase()}</strong>
                    <span>PREVIEW FRAME</span>
                    <small>{activeFrame.sourceSize}</small>
                  </div>
                )}
              </div>
            </div>
          </div>
          <p className="framePreviewCaption" aria-live="polite">
            {activeFrame.name} / {activeFrame.orientation}
          </p>
        </div>
      </div>
    </section>
  );
}
