import { photos } from "@/lib/photos";
import { useSectionProgress } from "@/lib/scroll";

export function Hero() {
  const { ref, progress } = useSectionProgress<HTMLDivElement>();

  return (
    <div ref={ref} className="relative h-[190svh]" id="top">
      <div className="sticky top-0 h-svh overflow-hidden bg-night">
        {/* Layer 1: the mandap, slow cinematic push */}
        <div
          className="absolute inset-0"
          style={{
            transform: `scale(${1 + progress * 0.14}) translate3d(0, ${progress * -4}%, 0)`,
            opacity: 1 - progress * 0.55,
          }}
        >
          <img
            src={photos.mandap.src}
            srcSet={photos.mandap.srcSet}
            sizes="100vw"
            alt="Illuminated wedding mandap with chandeliers and floral canopy styled by Event Planner by Heer in Gujranwala"
            className="kenburns h-full w-full object-cover object-center"
            width={photos.mandap.width}
            height={photos.mandap.height}
            decoding="async"
            fetchPriority="high"
          />
        </div>

        {/* Layer 2: floral stage rising behind, creates depth */}
        <div
          className="absolute inset-0 mix-blend-screen"
          style={{
            opacity: progress * 0.4,
            transform: `scale(${1.25 - progress * 0.1}) translate3d(0, ${18 - progress * 22}%, 0)`,
          }}
          aria-hidden="true"
        >
          <img src={photos.stage.src} srcSet={photos.stage.srcSet} sizes="100vw" alt="" className="h-full w-full object-cover" loading="lazy" />
        </div>

        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 90% at 50% 15%, transparent 10%, oklch(0.13 0.012 70 / 0.35) 45%, oklch(0.13 0.012 70 / 0.92) 100%)",
          }}
        />
        <div className="flicker pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-[linear-gradient(to_bottom,oklch(0.82_0.12_82/0.16),transparent)]" />

        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <div
            style={{
              transform: `translate3d(0, ${progress * -60}px, 0)`,
              opacity: 1 - progress * 1.4,
            }}
          >
            <p className="eyebrow reveal is-revealed">Gujranwala, Pakistan</p>
            <h1 className="mt-6 font-display text-[clamp(2.9rem,9vw,7.5rem)] leading-[0.92] tracking-tight text-ivory">
              Where the light
              <span className="block italic text-gold">is set before</span>
              the guests arrive
            </h1>
            <p className="mx-auto mt-8 max-w-md font-body text-sm leading-relaxed tracking-wide text-ivory/70 sm:text-base">
              Wedding and event styling by Heer. Stages, florals and lighting built for barat,
              mehndi, walima and every celebration in between.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href="#contact" className="min-h-11 border border-gold bg-gold px-8 py-3.5 font-body text-[0.68rem] tracking-[0.3em] text-night uppercase transition-colors duration-500 hover:bg-transparent hover:text-gold">
                Plan your event
              </a>
              <a href="#work" className="min-h-11 border border-ivory/40 px-8 py-3.5 font-body text-[0.68rem] tracking-[0.3em] text-ivory uppercase transition-colors duration-500 hover:border-gold hover:text-gold">
                View the work
              </a>
            </div>
          </div>
        </div>

        <div
          className="absolute inset-x-0 bottom-8 flex flex-col items-center gap-3"
          style={{ opacity: 1 - progress * 2.2 }}
        >
          <span className="eyebrow text-[0.6rem]">Scroll</span>
          <span className="h-14 w-px bg-[linear-gradient(to_bottom,var(--gold),transparent)]" />
        </div>
      </div>
    </div>
  );
}
