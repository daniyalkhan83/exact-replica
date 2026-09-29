import { useCallback, useEffect, useState } from "react";
import { photos, type Photo } from "@/lib/photos";
import { useSectionProgress } from "@/lib/scroll";

const frames: {
  photo: Photo;
  title: string;
  note: string;
  size: string;
  pos: string;
  alt: string;
}[] = [
  {
    photo: photos.stage,
    title: "The ivory barat stage",
    note: "Arched panels, cascading pastel florals and a run of crystal chandeliers over a marble walkway.",
    size: "w-[86vw] md:w-[62vw]",
    pos: "object-[50%_45%]",
    alt: "Ivory and green barat stage with arched panels, pastel florals and crystal chandeliers",
  },
  {
    photo: photos.roses,
    title: "A wall of red roses",
    note: "Full flower wall, hanging greenery and layered chandeliers over a red carpeted stage.",
    size: "w-[80vw] md:w-[42vw]",
    pos: "object-[50%_60%]",
    alt: "Red rose flower wall stage with chandeliers and gilded seating",
  },
  {
    photo: photos.ceiling,
    title: "Draped ceilings",
    note: "Tiered fabric swags, fairy strings and antique crystal lighting across the full span of the hall.",
    size: "w-[72vw] md:w-[32vw]",
    pos: "object-[50%_30%]",
    alt: "Draped ceiling in blush and black fabric with fairy lights and a crystal chandelier",
  },
  {
    photo: photos.birthday,
    title: "Birthdays and small celebrations",
    note: "Balloon arches, neon lettering and sequin table settings for intimate family events.",
    size: "w-[72vw] md:w-[32vw]",
    pos: "object-[50%_55%]",
    alt: "Gold and rose balloon arch with neon happy birthday sign and sequin table",
  },
];

export function Journey() {
  const { ref, progress } = useSectionProgress<HTMLDivElement>();
  const [open, setOpen] = useState<number | null>(null);
  const shift = progress * 100;

  const close = useCallback(() => setOpen(null), []);
  const step = useCallback(
    (d: number) => setOpen((i) => (i === null ? i : (i + d + frames.length) % frames.length)),
    [],
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close, step]);

  const current = open === null ? null : frames[open];

  return (
    <section id="work" ref={ref} className="relative h-[420svh] bg-night">
      <div className="sticky top-0 flex h-svh flex-col justify-center overflow-hidden">
        <div className="flex items-baseline justify-between px-6 lg:px-10">
          <p className="eyebrow">Signature work</p>
          <p className="hidden font-body text-[0.62rem] tracking-[0.3em] text-muted-foreground uppercase md:block">
            Select a photograph to view it in full
          </p>
        </div>
        <div
          className="mt-8 flex items-center gap-[6vw] px-6 will-change-transform lg:px-10"
          style={{ transform: `translate3d(-${shift}%, 0, 0)` }}
        >
          {frames.map((f, i) => (
            <figure key={f.title} className={`${f.size} shrink-0`}>
              <button
                type="button"
                onClick={() => setOpen(i)}
                aria-label={`View photograph: ${f.title}`}
                className="group relative block w-full cursor-zoom-in overflow-hidden"
              >
                <img
                  src={f.photo.src}
                  srcSet={f.photo.srcSet}
                  sizes="(min-width: 768px) 62vw, 86vw"
                  width={f.photo.width}
                  height={f.photo.height}
                  alt={f.alt}
                  loading="lazy"
                  decoding="async"
                  className={`h-[52svh] w-full object-cover ${f.pos} transition-transform duration-[1400ms] ease-out group-hover:scale-[1.03] md:h-[62svh]`}
                />
                <span className="absolute top-4 left-4 font-body text-[0.65rem] tracking-[0.3em] text-ivory/80">
                  0{i + 1}
                </span>
                <span className="absolute right-4 bottom-4 border border-ivory/40 bg-night/40 px-3 py-1.5 font-body text-[0.58rem] tracking-[0.3em] text-ivory uppercase opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100">
                  View
                </span>
              </button>
              <figcaption className="mt-5 max-w-sm">
                <h3 className="font-display text-2xl text-ivory md:text-3xl">{f.title}</h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-muted-foreground">
                  {f.note}
                </p>
              </figcaption>
            </figure>
          ))}
          <div className="w-[30vw] shrink-0" />
        </div>
        <div className="mt-10 px-6 lg:px-10">
          <div className="h-px w-full max-w-xs bg-border">
            <div className="rule-gold h-px" style={{ width: `${progress * 100}%` }} />
          </div>
        </div>
      </div>

      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.title}
          className="fixed inset-0 z-[60] flex flex-col bg-night/97"
          onClick={close}
        >
          <div className="flex items-center justify-between px-6 py-5 lg:px-10">
            <span className="font-body text-[0.65rem] tracking-[0.3em] text-gold uppercase">
              0{(open ?? 0) + 1} / 0{frames.length}
            </span>
            <button
              type="button"
              onClick={close}
              className="px-2 py-2 font-body text-[0.68rem] tracking-[0.3em] text-ivory uppercase hover:text-gold"
            >
              Close
            </button>
          </div>
          <div className="relative flex min-h-0 flex-1 items-center justify-center px-4 sm:px-16">
            <img
              src={current.photo.src}
              alt={current.alt}
              width={current.photo.width}
              height={current.photo.height}
              onClick={(e) => e.stopPropagation()}
              className="max-h-full max-w-full object-contain"
            />
          </div>
          <div
            className="flex items-center justify-between gap-6 px-6 py-6 lg:px-10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => step(-1)}
              className="min-h-11 px-2 font-body text-[0.68rem] tracking-[0.3em] text-ivory uppercase hover:text-gold"
            >
              Previous
            </button>
            <p className="hidden text-center font-display text-xl text-ivory sm:block">
              {current.title}
            </p>
            <button
              type="button"
              onClick={() => step(1)}
              className="min-h-11 px-2 font-body text-[0.68rem] tracking-[0.3em] text-ivory uppercase hover:text-gold"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
