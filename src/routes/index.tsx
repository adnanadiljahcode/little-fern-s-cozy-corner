import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { categories, menuItems, type Category } from "@/lib/cafe-menu";
import cafeWindow from "@/assets/cafe-window.jpg";

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

function Index() {
  const [category, setCategory] = useState<Category>("All");
  const visibleItems = menuItems.filter((item) => category === "All" || item.category === category);

  return (
    <div className="min-h-screen bg-background text-foreground antialiased selection:bg-primary/25">
      <header className="cafe-header sticky top-0 z-30 border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-6 py-4 sm:flex sm:justify-between">
          <a href="#home" className="brand-name min-w-0 truncate text-primary">Little Fern</a>
          <nav aria-label="Main navigation" className="hidden items-center gap-5 sm:flex">
            <Button asChild variant="navigation"><a href="#menu">Menu</a></Button>
            <Button asChild variant="navigation"><a href="#hours">Hours</a></Button>
            <Button asChild variant="navigation"><a href="#find-us">Find us</a></Button>
          </nav>
          <Button asChild variant="cafe" className="shrink-0"><a href="#menu">Our menu <span aria-hidden="true">↗</span></a></Button>
        </div>
      </header>

      <main>
        <section id="home" className="cafe-hero relative overflow-hidden">
          <img src={cafeWindow} alt="Golden afternoon light on a latte, fresh pastry and leafy ferns in our cozy cafe" width={1920} height={1088} fetchPriority="high" className="absolute inset-0 h-full w-full object-cover" />
          <div className="hero-veil absolute inset-0" />
          <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-24 sm:pb-28">
            <div className="hero-copy max-w-xl">
              <p className="eyebrow text-primary">Neighborhood cafe · Fernwood</p>
              <h1 className="mt-4 font-display text-6xl leading-[1.05] sm:text-7xl">Little Fern</h1>
              <h2 className="mt-4 font-display text-3xl leading-tight sm:text-4xl">A warm corner<br />for slow mornings.</h2>
              <p className="mt-5 max-w-[39ch] text-base leading-relaxed text-foreground/80">Brewed, baked and plated a few steps from your door. Come as you are.</p>
            </div>
            <div className="hero-line mt-7 h-px w-40 bg-primary/60" />
          </div>
        </section>

        <section id="menu" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-16">
          <div className="grid gap-4 border-b border-border pb-5 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
            <div className="min-w-0"><p className="eyebrow text-primary">(a) The menu</p><h2 className="mt-2 font-display text-3xl">What's on today</h2></div>
            <p className="max-w-[34ch] text-sm leading-relaxed text-muted-foreground">Good coffee, seasonal plates, and something sweet from the oven.</p>
          </div>
          <div className="mt-6 flex flex-wrap gap-2" role="group" aria-label="Filter menu by category">
            {categories.map((value) => <Button key={value} variant={category === value ? "cafe" : "filter"} onClick={() => setCategory(value)} aria-pressed={category === value}>{value}</Button>)}
          </div>
          <div className="menu-grid mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" aria-live="polite" aria-label={`${category} menu items`}>
            {visibleItems.map((item) => <article key={item.name} className="menu-item rounded-2xl bg-card/70 p-5 ring-1 ring-border backdrop-blur-xl">
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3"><span className="eyebrow text-primary">{item.category}</span><span className="shrink-0 text-sm text-muted-foreground">{item.price}</span></div>
              <h3 className="mt-3 font-display text-lg">{item.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
            </article>)}
          </div>
        </section>

        <section className="visit-section mx-auto max-w-6xl px-6 pb-16 pt-8">
          <div className="grid gap-10 sm:grid-cols-2 sm:gap-16">
            <div id="hours" className="scroll-mt-24">
              <p className="eyebrow text-primary">(b) Opening hours</p>
              <h2 className="mt-2 font-display text-2xl">When the kettle's on</h2>
              <dl className="mt-6 space-y-3 text-sm">
                {[['Mon – Fri', '7:00 am – 4:00 pm'], ['Saturday', '8:00 am – 5:00 pm'], ['Sunday', '8:00 am – 3:00 pm']].map(([day, hours]) => <div key={day} className="grid grid-cols-[minmax(0,1fr)_auto] gap-3 border-b border-border pb-3"><dt className="text-muted-foreground">{day}</dt><dd className="font-medium">{hours}</dd></div>)}
              </dl>
            </div>
            <div id="find-us" className="scroll-mt-24">
              <p className="eyebrow text-primary">(c) Find us</p>
              <h2 className="mt-2 font-display text-2xl">Little Fern</h2>
              <address className="mt-5 text-sm font-medium not-italic leading-relaxed">14 Fernwood Lane, Fernwood<br />Portland, OR 97209</address>
              <p className="mt-4 max-w-[44ch] text-sm leading-relaxed text-muted-foreground">Look for the green awning beside the old bookshop. Two blocks from the tram stop, three steps off the pavement — the kettle's already on.</p>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-border bg-card/40">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-4 px-6 py-8 sm:flex-row sm:items-center">
          <a href="#home" className="brand-name text-primary">Little Fern</a>
          <p className="text-sm text-muted-foreground">Brewed, baked & plated daily · 14 Fernwood Lane</p>
        </div>
      </footer>
    </div>
  );
}
