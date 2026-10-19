import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { categories, menuItems, specials, type Category } from "@/lib/cafe-menu";
import cafeWindow from "@/assets/cafe-window.jpg";
import flatWhite from "@/assets/menu-flat-white.jpg";
import sourdough from "@/assets/specials-sourdough.jpg";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Little Fern — Your Neighborhood Cafe" },
    { name: "description", content: "A warm corner for slow mornings. Explore Little Fern’s coffee, breakfast, lunch and pastries, opening hours and neighborhood location." },
    { property: "og:title", content: "Little Fern — Your Neighborhood Cafe" },
    { property: "og:description", content: "Brewed, baked and plated daily. Find your favorite coffee and a welcoming seat at Little Fern." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Index,
});

const hours: [string, string][] = [
  ["Mon – Fri", "7:00 am – 4:00 pm"],
  ["Saturday", "8:00 am – 5:00 pm"],
  ["Sunday", "8:00 am – 3:00 pm"],
];

function Index() {
  const [category, setCategory] = useState<Category>("All");
  const visibleItems = menuItems.filter((item) => category === "All" || item.category === category);

  return (
    <div className="min-h-screen bg-background text-foreground antialiased selection:bg-primary/20">
      <header className="sticky top-0 z-30 border-b border-border bg-background">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-6 py-4">
          <a href="#home" className="brand-name min-w-0 truncate text-foreground">Little Fern</a>
          <nav aria-label="Main navigation" className="hidden items-center gap-5 sm:flex">
            <Button asChild variant="navigation"><a href="#menu">Menu</a></Button>
            <Button asChild variant="navigation"><a href="#hours">Hours</a></Button>
            <Button asChild variant="navigation"><a href="#find-us">Find us</a></Button>
          </nav>
          <Button asChild variant="cafe" className="h-10 shrink-0 px-5 text-[11px] uppercase tracking-widest"><a href="#menu">Our menu <span aria-hidden="true">→</span></a></Button>
        </div>
      </header>

      <main>
        <section id="home" className="mx-auto max-w-6xl scroll-mt-24 px-6 pb-16 pt-10 sm:pb-20">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:gap-14">
            <div className="hero-copy order-2 lg:order-1">
              <p className="eyebrow text-primary">Neighborhood cafe · Fernwood</p>
              <h1 className="mt-4 font-display text-6xl leading-[1.02] sm:text-7xl">Little Fern</h1>
              <p className="mt-4 max-w-[22ch] font-display text-2xl italic leading-snug text-foreground/90 sm:text-3xl">A warm corner for slow mornings.</p>
              <p className="mt-5 max-w-[38ch] text-base leading-relaxed text-muted-foreground">Brewed, baked and plated a few steps from your door. Come as you are.</p>
              <div className="hero-line mt-7 h-px w-40 bg-primary/60" />
            </div>
            <div className="relative order-1 lg:order-2">
              <img src={cafeWindow} alt="Golden afternoon light on a latte, fresh pastry and leafy ferns in our cozy cafe" width={1920} height={1088} fetchPriority="high" className="photo-card h-[320px] w-full object-cover sm:h-[420px] lg:h-[520px]" />
              <span className="hero-tag absolute -bottom-4 right-5 bg-primary px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.2em] text-primary-foreground">Kettle’s on</span>
            </div>
          </div>
        </section>

        <section id="menu" className="band-sand scroll-mt-24 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,340px)_minmax(0,1fr)] lg:items-end lg:gap-14">
              <img src={flatWhite} alt="A flat white with fern art in a handmade ceramic cup on our wooden counter" width={1280} height={864} loading="lazy" className="photo-card h-44 w-full object-cover sm:h-56" />
              <div className="min-w-0">
                <p className="eyebrow text-primary">(a) The menu</p>
                <h2 className="mt-2 font-display text-3xl sm:text-4xl">What’s on today</h2>
                <p className="mt-3 max-w-[42ch] font-display text-lg italic leading-relaxed text-muted-foreground">Good coffee, seasonal plates, and something sweet from the oven.</p>
              </div>
            </div>
            <div className="pill-scroll no-scrollbar mt-8 -mx-6 flex gap-2 overflow-x-auto px-6 pb-1 sm:mx-0 sm:flex-wrap sm:px-0 sm:pb-0 sm:[mask-image:none] [-webkit-mask-image:none]" role="group" aria-label="Filter menu by category">
              {categories.map((value) => <Button key={value} className="h-10 shrink-0 px-5" variant={category === value ? "cafe" : "filter"} onClick={() => setCategory(value)} aria-pressed={category === value}>{value}</Button>)}
            </div>
            <div className="menu-grid mt-8 grid gap-4 sm:grid-cols-2" aria-live="polite" aria-label={`${category} menu items`}>
              {visibleItems.map((item) => <article key={item.name} className="menu-item rounded-2xl bg-card/80 p-5 ring-1 ring-border/70">
                <span className="eyebrow text-primary">{item.category}</span>
                <div className="mt-2 flex items-baseline gap-3">
                  <h3 className="min-w-0 font-display text-xl leading-snug">{item.name}</h3>
                  <span aria-hidden="true" className="menu-leader" />
                  <span className="special-price shrink-0 text-base">{item.price}</span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </article>)}
            </div>
          </div>
        </section>

        <section id="specials" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-16 sm:py-20">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,300px)] lg:gap-16">
            <div className="min-w-0">
              <p className="eyebrow text-primary">(b) Today’s specials</p>
              <h2 className="mt-2 font-display text-3xl leading-tight sm:text-4xl">Two favourites,<br />on the pass</h2>
              <div className="mt-10 space-y-9">
                {specials.map((item, i) => <article key={item.name} className={`special-row${i === 1 ? " special-row--ink" : ""}`}>
                  <div className="flex items-baseline gap-3">
                    <h3 className="min-w-0 font-display text-xl leading-snug sm:text-2xl">{item.name}</h3>
                    <span aria-hidden="true" className="menu-leader" />
                    <span className="special-price shrink-0 text-lg">{item.price}</span>
                  </div>
                  <p className="mt-2 max-w-[48ch] text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                  <div className="mt-3 flex flex-wrap items-center gap-3">
                    <span className="special-chip eyebrow rounded-md px-2 py-1 text-foreground/80">{item.category}</span>
                    <span className="font-display text-sm italic text-muted-foreground">{item.note}</span>
                  </div>
                </article>)}
              </div>
            </div>
            <div className="lg:pt-4">
              <img src={sourdough} alt="Our mushroom sourdough: garlic mushrooms, a just-broken poached egg and snipped chives" width={912} height={1200} loading="lazy" className="photo-tilt h-72 w-full object-cover sm:h-96 lg:h-[420px]" />
            </div>
          </div>
        </section>
      </main>

      <footer className="band-ink px-6 pt-16 pb-12 sm:px-10 sm:pt-20">
        <div className="mx-auto max-w-6xl">
          {/* Main Footer Grid: Hours & Location */}
          <div className="grid grid-cols-2 gap-4 sm:gap-12">
            <div id="hours" className="scroll-mt-24">
              <p className="eyebrow text-primary-on-ink text-xs">(c) Opening hours</p>
              <h2 className="mt-1 font-display text-base sm:text-xl">When the kettle’s on</h2>
              <dl className="mt-3 space-y-1.5 text-xs sm:text-sm">
                {hours.map(([day, time]) => (
                  <div key={day} className="grid grid-cols-[minmax(0,1fr)_auto] gap-2 border-b border-surface-ink-foreground/15 pb-1.5">
                    <dt className="text-surface-ink-foreground/70">{day}</dt>
                    <dd className="font-semibold">{time}</dd>
                  </div>
                ))}
              </dl>
            </div>
            
            <div id="find-us" className="scroll-mt-24">
              <p className="eyebrow text-primary-on-ink text-xs">(d) Find us</p>
              <h2 className="mt-1 font-display text-base sm:text-xl">Little Fern</h2>
              <address className="mt-3 text-xs sm:text-sm font-semibold not-italic leading-relaxed">
                14 Fernwood Lane, Fernwood<br />Fern, FF 12345
              </address>
              <p className="mt-2 hidden text-xs leading-relaxed text-surface-ink-foreground/70 sm:block sm:text-sm">
                Look for the terracotta awning beside the old bookshop. Two blocks from the tram stop.
              </p>
            </div>
          </div>
          
          {/* Sub-footer divider & signature */}
          <div className="mt-16 flex flex-col justify-between gap-4 border-t border-surface-ink-foreground/15 pt-8 sm:flex-row sm:items-center">
            <a href="#home" className="brand-name text-surface-ink-foreground">Little Fern</a>
            <p className="text-sm text-surface-ink-foreground/60">
              Brewed, baked & plated daily · 14 Fernwood Lane
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
