import Image from "next/image";

type StepIcon = "frame" | "countdown" | "preview" | "receipt";

type HowItWorksStep = {
  number: string;
  title: string;
  description: string;
  icon: StepIcon;
  visual: {
    label: string;
    size: string;
    alt: string;
    src?: string;
    receipt?: boolean;
  };
};

const howItWorksSteps: HowItWorksStep[] = [
  {
    number: "01",
    title: "Pilih frame",
    description: "Temukan gaya yang paling kamu suka.",
    icon: "frame",
    visual: {
      label: "LAYAR PILIH FRAME",
      size: "600 × 800 px",
      alt: "Layar untuk memilih frame Photo Receipt",
    },
  },
  {
    number: "02",
    title: "Pose & countdown",
    description: "Siapkan pose, tunggu hitungan selesai.",
    icon: "countdown",
    visual: {
      label: "LAYAR COUNTDOWN",
      size: "600 × 800 px",
      alt: "Layar countdown sebelum pengambilan foto",
    },
  },
  {
    number: "03",
    title: "Lihat hasil",
    description: "Cek fotomu sebelum dicetak.",
    icon: "preview",
    visual: {
      label: "LAYAR PREVIEW",
      size: "600 × 800 px",
      alt: "Layar preview hasil Photo Receipt",
    },
  },
  {
    number: "04",
    title: "Print & simpan",
    description: "Ambil receipt dan bawa pulang kenangannya.",
    icon: "receipt",
    visual: {
      label: "HASIL RECEIPT",
      size: "400 × 800 px",
      alt: "Hasil cetak Photo Receipt",
      receipt: true,
    },
  },
];

function StepIconGraphic({ icon }: { icon: StepIcon }) {
  if (icon === "frame") {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <rect x="6" y="4" width="20" height="24" rx="2" />
        <path d="m9 23 5-6 4 4 3-3 3 4" />
        <circle cx="20.5" cy="10.5" r="2" />
      </svg>
    );
  }

  if (icon === "countdown") {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <circle cx="16" cy="17" r="11" />
        <path d="M16 10v7l5 3M12 3h8" />
      </svg>
    );
  }

  if (icon === "preview") {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="M3 16s5-8 13-8 13 8 13 8-5 8-13 8S3 16 3 16Z" />
        <circle cx="16" cy="16" r="4" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path d="M8 4h16v24l-3-2-3 2-3-2-3 2-4-2V4Z" />
      <path d="M12 10h8M12 15h8M12 20h5" />
    </svg>
  );
}

function FlowArrow() {
  return (
    <svg className="flowArrow" viewBox="0 0 34 18" aria-hidden="true">
      <path d="M1 9h29M23 2l7 7-7 7" />
    </svg>
  );
}

function StepVisual({ step }: { step: HowItWorksStep }) {
  const content = step.visual.src ? (
    <Image
      src={step.visual.src}
      alt={step.visual.alt}
      fill
      sizes="(max-width: 560px) 300px, (max-width: 999px) 45vw, 290px"
      className="stepVisualImage"
    />
  ) : (
    <div className="stepPlaceholder" aria-label={`${step.visual.label}, placeholder gambar`}>
      <strong>{step.visual.label}</strong>
      <span>{step.visual.size}</span>
    </div>
  );

  return (
    <div className="stepVisualStage">
      {step.visual.receipt ? (
        <div className="receiptPaper">
          <div className="receiptVisual">{content}</div>
        </div>
      ) : (
        <div className="screenVisual">{content}</div>
      )}
    </div>
  );
}

export function HowItWorks() {
  return (
    <section className="howItWorks" id="cara-kerja" aria-labelledby="how-it-works-title">
      <div className="howItWorksIntro">
        <p className="howItWorksEyebrow">#003 / HOW IT WORKS</p>
        <h2 id="how-it-works-title">Pilih. Pose. Print.</h2>
        <p>Empat langkah kecil untuk kenangan yang bisa dibawa pulang.</p>
      </div>

      <ol className="stepsList">
        {howItWorksSteps.map((step, index) => (
          <li className="stepItem" key={step.number}>
            <StepVisual step={step} />
            {index < howItWorksSteps.length - 1 && <FlowArrow />}
            <div className="stepCopy">
              <StepIconGraphic icon={step.icon} />
              <span className="stepNumber">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
