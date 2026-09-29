import heer1 from "@/assets/heer1.webp.asset.json";
import heer7 from "@/assets/heer7.webp.asset.json";
import heer3 from "@/assets/heer3.webp.asset.json";
import heer2 from "@/assets/heer2.webp.asset.json";
import { useSectionProgress } from "@/lib/scroll";

const frames = [
  {
    src: heer1.url,
    title: "The ivory barat stage",
    note: "Arched panels, cascading pastel florals and a run of crystal chandeliers over a marble walkway.",
    size: "w-[86vw] md:w-[62vw]",
    alt: "Ivory and green barat stage with arched panels, pastel florals and crystal chandeliers",
  },
  {
    src: heer7.url,
    title: "A wall of red roses",
    note: "Full flower wall, hanging greenery and layered chandeliers over a red carpeted stage.",
    size: "w-[80vw] md:w-[46vw]",
    alt: "Red rose flower wall stage with chandeliers and gilded seating",
  },
  {
    src: heer3.url,
    title: "Draped ceilings",
    note: "Tiered fabric swags, fairy strings and antique crystal lighting across the full span of the hall.",
    size: "w-[72vw] md:w-[34vw]",
    alt: "Draped ceiling in blush and black fabric with fairy lights and a crystal chandelier",
  },
  {
    src: heer2.url,
    title: "Birthdays and small celebrations",
    note: "Balloon arches, neon lettering and sequin table settings for intimate family events.",
    size: "w-[72vw] md:w-[34vw]",
    alt: "Gold and rose balloon arch with neon happy birthday sign and sequin table",
  },
];

export function Journey() {
  const { ref, progress } = useSectionProgress<HTMLDivElement>();
  const shift = progress * 100;

  return (
    <section id="work" ref={ref} className="relative h-[420svh] bg-night">
      <div className="sticky top-0 flex h-svh flex-col justify-center overflow-hidden">
        <div className="px-6 lg:px-10">
          <p className="eyebrow">Signature work</p>
        </div>
        <div
          className="mt-8 flex items-center gap-[6vw] px-6 will-change-transform lg:px-10"
          style={{ transform: `translate3d(-${shift}%, 0, 0)` }}
        >
          {frames.map((f, i) => (
            <figure key={f.title} className={`${f.size} shrink-0`}>
              <div className="relative overflow-hidden">
                <img
                  src={f.src}
                  alt={f.alt}
                  loading="lazy"
                  className="h-[52svh] w-full object-cover transition-transform duration-1000 md:h-[62svh]"
                  style={{ transform: `scale(${1.08 - progress * 0.06})` }}
                />
                <span className="absolute top-4 left-4 font-body text-[0.65rem] tracking-[0.3em] text-ivory/70">
                  0{i + 1}
                </span>
              </div>
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
    </section>
  );
}
