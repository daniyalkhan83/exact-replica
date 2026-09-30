import { photos } from "@/lib/photos";
import { useParallax } from "@/lib/scroll";
import { PHONE, WHATSAPP, INSTAGRAM, MAPS, DIRECTIONS } from "./Chrome";

export function Intro() {
  return (
    <section className="relative bg-night px-6 py-32 lg:px-10 lg:py-44">
      <div className="mx-auto grid max-w-[1400px] gap-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="eyebrow reveal" data-reveal>
            The studio
          </p>
          <h2
            className="reveal mt-6 font-display text-[clamp(2.2rem,5vw,4rem)] leading-[1.05] text-ivory"
            data-reveal
            data-reveal-delay="90"
          >
            An event is built
            <span className="block italic text-gold">hours before anyone sees it</span>
          </h2>
        </div>
        <div className="md:col-span-6 md:col-start-7">
          <p
            className="reveal font-body text-lg leading-[1.8] text-ivory/80"
            data-reveal
            data-reveal-delay="140"
          >
            Event Planner by Heer works out of Satellite Town in Gujranwala, styling weddings and
            family celebrations across the city. The work is decoration in its fullest sense:
            stages, floral walls, draped ceilings, entrances and the lighting that holds it all
            together once the sun goes down.
          </p>
          <p
            className="reveal mt-8 font-body text-lg leading-[1.8] text-ivory/80"
            data-reveal
            data-reveal-delay="220"
          >
            Every setup is assembled on site for a single evening, then taken apart. What stays are
            the photographs, and the way the room felt when the guests walked in.
          </p>
          <dl className="reveal mt-14 grid grid-cols-2 gap-10 sm:grid-cols-3" data-reveal>
            <div>
              <dt className="font-body text-[0.62rem] tracking-[0.3em] text-muted-foreground uppercase">
                Based in
              </dt>
              <dd className="mt-2 font-display text-2xl text-ivory">Gujranwala</dd>
            </div>
            <div>
              <dt className="font-body text-[0.62rem] tracking-[0.3em] text-muted-foreground uppercase">
                Availability
              </dt>
              <dd className="mt-2 font-display text-2xl text-ivory">Open 24 hours</dd>
            </div>
            <div>
              <dt className="font-body text-[0.62rem] tracking-[0.3em] text-muted-foreground uppercase">
                Public rating
              </dt>
              <dd className="mt-2 font-display text-2xl text-ivory">
                5.0 <span className="font-body text-sm text-muted-foreground">/ 50 reviews</span>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}

const celebrations = [
  {
    name: "Barat",
    body: "Main stage, seating, floral backdrop and walkway, lit for photography from the entrance onward.",
  },
  {
    name: "Mehndi",
    body: "Colour-led fabric work, hanging florals, low seating and warm strung lighting.",
  },
  {
    name: "Walima",
    body: "Formal stage and hall styling, chandeliers, table arrangements and a composed palette.",
  },
  {
    name: "Birthdays and family events",
    body: "Balloon installations, neon lettering and table settings for smaller gatherings at home or in a hall.",
  },
];

export function Celebrations() {
  const { ref, offset } = useParallax<HTMLDivElement>(0.12);

  return (
    <section id="celebrations" className="relative overflow-hidden bg-background">
      <div ref={ref} className="absolute inset-0 opacity-25">
        <img
          src={photos.stage.src}
          srcSet={photos.stage.srcSet}
          sizes="100vw"
          decoding="async"
          alt=""
          loading="lazy"
          className="h-[125%] w-full object-cover"
          style={{ transform: `translate3d(0, ${offset}px, 0)` }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,var(--night),oklch(0.16_0.014_70/0.85),var(--night))]" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 py-32 lg:px-10 lg:py-44">
        <p className="eyebrow reveal" data-reveal>
          Celebrations we style
        </p>
        <div className="mt-14 divide-y divide-border border-y border-border">
          {celebrations.map((c, i) => (
            <div
              key={c.name}
              className="reveal group grid gap-4 py-10 md:grid-cols-12 md:items-baseline"
              data-reveal
              data-reveal-delay={String(i * 80)}
            >
              <span className="font-body text-[0.62rem] tracking-[0.3em] text-gold md:col-span-1">
                0{i + 1}
              </span>
              <h3 className="font-display text-[clamp(1.9rem,4vw,3.2rem)] leading-tight text-ivory transition-colors duration-700 group-hover:text-gold md:col-span-5">
                {c.name}
              </h3>
              <p className="max-w-md font-body text-base leading-relaxed text-muted-foreground md:col-span-6">
                {c.body}
              </p>
            </div>
          ))}
        </div>
        <p className="reveal mt-10 max-w-xl font-body text-sm text-muted-foreground" data-reveal>
          Scope and quotation are discussed directly, based on the venue, the date and the scale of
          the setup.
        </p>
      </div>
    </section>
  );
}

export function Interlude() {
  const { ref, offset } = useParallax<HTMLDivElement>(0.22);

  return (
    <section className="relative h-[85svh] overflow-hidden bg-night">
      <div ref={ref} className="absolute inset-0">
        <img
          src={photos.ceiling.src}
          srcSet={photos.ceiling.srcSet}
          sizes="100vw"
          decoding="async"
          alt="Crystal chandeliers beneath tiered blush and black ceiling draping with strung lights"
          loading="lazy"
          className="h-[130%] w-full object-cover object-center"
          style={{ transform: `translate3d(0, ${offset}px, 0) scale(1.05)` }}
        />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(90%_70%_at_50%_50%,transparent,oklch(0.13_0.012_70/0.8))]" />
      <div className="relative flex h-full items-center justify-center px-6">
        <p
          className="reveal reveal-mask max-w-3xl text-center font-display text-[clamp(1.8rem,4.6vw,3.6rem)] leading-[1.15] text-ivory italic"
          data-reveal
        >
          Fabric, flower and light, arranged until the room stops looking like a hall.
        </p>
      </div>
    </section>
  );
}

export function Contact() {
  const { ref, offset } = useParallax<HTMLDivElement>(0.1);

  return (
    <section id="contact" className="relative overflow-hidden bg-night">
      <div ref={ref} className="absolute inset-0 opacity-40">
        <img
          src={photos.mandap.src}
          srcSet={photos.mandap.srcSet}
          sizes="100vw"
          decoding="async"
          alt=""
          loading="lazy"
          className="h-[120%] w-full object-cover"
          style={{ transform: `translate3d(0, ${offset}px, 0)` }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,var(--night),oklch(0.13_0.012_70/0.7),var(--night))]" />
      </div>

      <div
        id="studio"
        className="relative mx-auto max-w-[1400px] px-6 py-36 text-center lg:px-10 lg:py-52"
      >
        <p className="eyebrow reveal" data-reveal>
          Plan your date
        </p>
        <h2
          className="reveal mx-auto mt-6 max-w-4xl font-display text-[clamp(2.4rem,7vw,5.5rem)] leading-[1.02] text-ivory"
          data-reveal
          data-reveal-delay="80"
        >
          Tell us the venue,
          <span className="block italic text-gold">we will set the room</span>
        </h2>

        <div
          className="reveal mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
          data-reveal
          data-reveal-delay="160"
        >
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="w-full border border-gold bg-gold px-10 py-4 font-body text-[0.72rem] tracking-[0.3em] text-night uppercase transition-colors duration-500 hover:bg-transparent hover:text-gold sm:w-auto"
          >
            Message on WhatsApp
          </a>
          <a
            href={PHONE}
            className="w-full border border-gold/50 px-10 py-4 font-body text-[0.72rem] tracking-[0.3em] text-gold uppercase transition-colors duration-500 hover:border-gold hover:bg-gold hover:text-night sm:w-auto"
          >
            Call +92 344 6116182
          </a>
        </div>

        <div
          className="reveal mx-auto mt-20 grid max-w-3xl gap-10 sm:grid-cols-3"
          data-reveal
          data-reveal-delay="220"
        >
          <div>
            <p className="font-body text-[0.62rem] tracking-[0.3em] text-muted-foreground uppercase">
              Studio
            </p>
            <p className="mt-3 font-body text-sm leading-relaxed text-ivory/85">
              Block B, Satellite Town
              <br />
              Gujranwala 52250, Pakistan
            </p>
          </div>
          <div>
            <p className="font-body text-[0.62rem] tracking-[0.3em] text-muted-foreground uppercase">
              Hours
            </p>
            <p className="mt-3 font-body text-sm text-ivory/85">Open 24 hours</p>
          </div>
          <div>
            <p className="font-body text-[0.62rem] tracking-[0.3em] text-muted-foreground uppercase">
              Instagram
            </p>
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-block font-body text-sm text-ivory/85 transition-colors hover:text-gold"
            >
              @eventplannerbyheer
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Location() {
  return (
    <section id="location" className="relative border-t border-border bg-night px-6 py-28 lg:px-10 lg:py-36">
      <div className="mx-auto grid max-w-[1400px] items-center gap-14 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="eyebrow reveal" data-reveal>Location</p>
          <h2 className="reveal mt-6 font-display text-[clamp(2.2rem,5vw,4rem)] leading-[1.05] text-ivory" data-reveal data-reveal-delay="80">
            Event Planner by Heer
          </h2>
          <p className="reveal mt-6 font-body text-lg leading-[1.8] text-ivory/80" data-reveal data-reveal-delay="140">
            Block B, Satellite Town
            <br />
            Gujranwala 52250, Pakistan
          </p>
          <div className="reveal mt-10 flex flex-col gap-3 sm:flex-row" data-reveal data-reveal-delay="200">
            <a href={DIRECTIONS} target="_blank" rel="noreferrer" className="min-h-11 border border-gold bg-gold px-8 py-3.5 text-center font-body text-[0.68rem] tracking-[0.3em] text-night uppercase transition-colors duration-500 hover:bg-transparent hover:text-gold">
              Get directions
            </a>
            <a href={MAPS} target="_blank" rel="noreferrer" className="min-h-11 border border-gold/50 px-8 py-3.5 text-center font-body text-[0.68rem] tracking-[0.3em] text-gold uppercase transition-colors duration-500 hover:border-gold hover:bg-gold hover:text-night">
              View on Google Maps
            </a>
          </div>
        </div>
        <div className="reveal md:col-span-6 md:col-start-7" data-reveal data-reveal-delay="120">
          <div className="relative border border-border p-2">
            <iframe
              title="Event Planner by Heer on Google Maps"
              src="https://maps.google.com/maps?q=Event%20Planner%20by%20Heer%2C%20Block%20B%2C%20Satellite%20Town%2C%20Gujranwala%2052250&z=15&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block h-[360px] w-full grayscale-[0.6] invert-[0.9] hue-rotate-180 contrast-[0.9] md:h-[440px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
