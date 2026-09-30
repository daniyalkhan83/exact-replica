import { useEffect, useState } from "react";

const WHATSAPP =
  "https://wa.me/923446116182?text=" +
  encodeURIComponent("Hi, I would like to discuss an event with Event Planner by Heer.");
const MAPS_QUERY = encodeURIComponent(
  "Event Planner by Heer, Block B, Satellite Town, Gujranwala 52250, Pakistan",
);
const MAPS = `https://www.google.com/maps/search/?api=1&query=${MAPS_QUERY}`;
const DIRECTIONS = `https://www.google.com/maps/dir/?api=1&destination=${MAPS_QUERY}`;
const PHONE = "tel:+923446116182";
const INSTAGRAM = "https://www.instagram.com/eventplannerbyheer/";

const links = [
  { label: "The work", href: "#work" },
  { label: "Celebrations", href: "#celebrations" },
  { label: "Studio", href: "#studio" },
  { label: "Location", href: "#location" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,padding] duration-700 ${
        solid
          ? "border-b border-border bg-night/85 py-3 backdrop-blur-sm"
          : "border-b border-transparent py-6"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 lg:px-10">
        <a href="#top" className="flex items-center gap-3">
          <img src="/favicon.png" alt="" width={32} height={32} className="h-8 w-8" />
          <span className="font-display text-lg leading-none tracking-wide text-ivory">
            Event Planner
            <span className="block font-body text-[0.58rem] tracking-[0.4em] text-gold uppercase">
              by Heer
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-body text-[0.7rem] tracking-[0.28em] text-ivory/75 uppercase transition-colors duration-500 hover:text-gold"
            >
              {l.label}
            </a>
          ))}
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="border border-gold/60 px-5 py-2.5 font-body text-[0.68rem] tracking-[0.28em] text-gold uppercase transition-colors duration-500 hover:bg-gold hover:text-night"
          >
            WhatsApp
          </a>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
          aria-expanded={open}
          className="flex h-8 w-8 flex-col items-end justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-px bg-gold transition-all duration-500 ${open ? "w-6 translate-y-[3px] rotate-45" : "w-6"}`}
          />
          <span
            className={`h-px bg-gold transition-all duration-500 ${open ? "w-6 -translate-y-[3px] -rotate-45" : "w-4"}`}
          />
        </button>
      </div>

      <div
        className={`overflow-hidden bg-night/95 transition-[max-height] duration-700 md:hidden ${open ? "max-h-80" : "max-h-0"}`}
      >
        <nav className="flex flex-col gap-5 px-6 py-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-display text-2xl text-ivory"
            >
              {l.label}
            </a>
          ))}
          <a href={WHATSAPP} target="_blank" rel="noreferrer" className="eyebrow pt-2">
            WhatsApp +92 344 6116182
          </a>
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-night px-6 py-16 lg:px-10">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <div>
          <img src="/favicon.png" alt="" width={40} height={40} className="h-10 w-10" />
          <p className="mt-5 font-display text-3xl text-ivory">Event Planner by Heer</p>
          <p className="mt-2 max-w-xs font-body text-sm leading-relaxed text-muted-foreground">
            Block B, Satellite Town, Gujranwala 52250, Pakistan
          </p>
        </div>
        <div className="flex flex-col gap-3 font-body text-sm text-ivory/80">
          <a href={PHONE} className="transition-colors hover:text-gold">
            +92 344 6116182
          </a>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-gold"
          >
            WhatsApp
          </a>
          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-gold"
          >
            Instagram, @eventplannerbyheer
          </a>
          <a href={DIRECTIONS} target="_blank" rel="noreferrer" className="transition-colors hover:text-gold">
            Get directions
          </a>
          <span className="text-muted-foreground">Open 24 hours</span>
        </div>
      </div>
      <div className="mx-auto mt-14 max-w-[1400px] border-t border-border pt-6">
        <p className="font-body text-[0.65rem] tracking-[0.26em] text-muted-foreground uppercase">
          Event Planner by Heer, Gujranwala
        </p>
      </div>
    </footer>
  );
}

export { WHATSAPP, PHONE, INSTAGRAM, MAPS, DIRECTIONS };
