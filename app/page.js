 import Image from "next/image";

const ASSETS = {
  logo: "/stitch/logo.svg",
  profile: "/stitch/profile.jpg",
  heroWatch: "/stitch/hero-watch.jpg",
  watchAtelier: "/stitch/watch-atelier.jpg",
  watchChrono: "/stitch/watch-chrono.jpg",
  watchPerpetual: "/stitch/watch-perpetual.jpg",
  craftsmanship: "/stitch/craftsmanship.jpg",
};

const TIMEPIECES = [
  {
    image: ASSETS.watchAtelier,
    alt: "Studio catalog photograph of Atelier Automatic 38 luxury timepiece with a refined slate grey sunburst dial, applied white gold hour markers, polished bevelled lugs, and genuine black alligator strap on off-white pedestal.",
    badge: "Series I",
    badgeClass: "text-on-surface",
    title: "Atelier Automatic 38",
    price: "$6,400",
    description:
      "Slate Grey Sunburst Dial · Anti-Reflective Sapphire Caseback · Calibre 104-A",
    caseInfo: "Case: 38mm Stainless 904L",
    status: "Available",
    statusClass: "text-secondary font-semibold",
  },
  {
    image: ASSETS.watchChrono,
    alt: "Editorial product shot of Chronographe Chronometer 41 featuring brushed solid 950 platinum case, midnight black lacquered dial with dual silver sub-registers, and sapphire exhibition back, warm rim lighting.",
    badge: "Numbered / 50",
    badgeClass: "text-secondary",
    title: "Chronographe Chronometer 41",
    price: "$12,800",
    description:
      "Brushed 950 Platinum & Midnight Black Lacquer · Column-Wheel Actuation",
    caseInfo: "Case: 41mm Platinum",
    status: "Low Allocation",
    statusClass: "text-secondary font-semibold",
  },
  {
    image: ASSETS.watchPerpetual,
    alt: "Macro photo of high-complication Perpetual Calendar luxury dress watch in warm 18k rose gold with genuine grand feu ivory enamel dial, moonphase display in lapis lazuli, hand-stitched honey brown strap.",
    badge: "Grand Complication",
    badgeClass: "text-on-surface",
    title: "Minimalist Perpetual Calendar",
    price: "$18,500",
    description:
      "18k Rose Gold & Grand Feu Ivory Enamel · Astronomical Moonphase Aperture",
    caseInfo: "Case: 39.5mm Rose Gold",
    status: "By Commission",
    statusClass: "text-on-surface-variant",
  },
];

const PILLARS = [
  {
    icon: "tune",
    title: "Free-Sprung Gyromax Balance",
    body: "Eliminates regulator friction to guarantee poise stability through shock and temperature variation.",
  },
  {
    icon: "stream",
    title: "Geneva Stripes (Côtes de Genève)",
    body: "Parallel micro-crests machined at 0.05-degree inclinations to reflect light with liquid-like cohesion.",
  },
  {
    icon: "diamond",
    title: "Hand-Bevelled Internal Angles",
    body: "Sharp internal junctures chamfered by manual file, a hallmark unattainable by five-axis CNC automation.",
  },
];

const SERVICES = [
  {
    icon: "workspace_premium",
    title: "COSC Chronometer",
    body: "Official Swiss Chronometer Testing Bureau certification accompanying every Calibre dispatch.",
  },
  {
    icon: "flight_takeoff",
    title: "Insured Global Courier",
    body: "Armored delivery with dedicated liaison handover direct from our Geneva vaults to your residence.",
  },
  {
    icon: "inventory_2",
    title: "Bespoke Walnut Case",
    body: "Turned Swiss walnut presentation box, bespoke calfskin travel case, and registered leather archive ledger.",
  },
  {
    icon: "published_with_changes",
    title: "Lifetime Preservation",
    body: "Guaranteed restoration and movement parts availability preserved in our archives in perpetuity.",
  },
];

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/90 backdrop-blur-md border-b border-surface-container-high transition-all duration-300">
      <div className="bg-surface-container-low border-b border-surface-container px-margin-desktop py-1.5 hidden md:block">
        <div className="max-w-[1440px] mx-auto flex justify-between items-center">
          <p className="font-label-caps text-label-caps tracking-[0.14em] text-on-surface-variant uppercase">
            Complimentary Insured Worldwide Delivery & 5-Year International
            Atelier Guarantee
          </p>
          <div className="flex items-center gap-space-lg font-label-caps text-label-caps uppercase text-on-surface-variant">
            <span className="cursor-pointer hover:text-on-surface transition-colors">
              Geneva, CH
            </span>
            <span className="h-2.5 w-px bg-outline-variant" />
            <span className="cursor-pointer hover:text-on-surface transition-colors">
              Bespoke Services
            </span>
          </div>
        </div>
      </div>

      <div className="h-20 max-w-[1440px] mx-auto px-margin md:px-margin-desktop flex items-center justify-between">
        <nav className="hidden lg:flex items-center gap-space-lg">
          {["Collection", "Atelier & Heritage", "Journal", "Concierge"].map(
            (item) => (
              <a
                key={item}
                href="#"
                className="font-label-caps text-label-caps uppercase tracking-[0.14em] text-on-surface-variant hover:text-on-surface transition-colors py-1"
              >
                {item}
              </a>
            ),
          )}
        </nav>

        <div className="flex items-center gap-space-sm">
          <a href="#" className="flex items-center gap-3 group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={ASSETS.logo}
              alt="Horologe Genève Logo"
              className="h-8 w-auto object-contain"
            />
            <div className="flex flex-col">
              <span className="font-headline-sm text-headline-sm tracking-wider uppercase text-on-surface font-normal leading-none">
                Horologe
              </span>
              <span className="font-label-caps text-[9px] tracking-[0.25em] text-on-surface-variant uppercase text-center mt-0.5">
                Genève
              </span>
            </div>
          </a>
        </div>

        <div className="flex items-center gap-space-md">
          <button
            aria-label="Search Archive"
            className="p-1.5 text-on-surface-variant hover:text-on-surface transition-colors"
            type="button"
          >
            <span className="material-symbols-outlined text-[20px]">search</span>
          </button>
          <a
            href="#"
            className="p-1.5 text-on-surface-variant hover:text-on-surface transition-colors flex items-center gap-1"
          >
            <span className="material-symbols-outlined text-[20px]">
              favorite
            </span>
            <span className="font-label-caps text-[10px] hidden sm:inline-block">
              (0)
            </span>
          </a>
          <a
            href="#"
            className="p-1.5 text-on-surface-variant hover:text-on-surface transition-colors flex items-center gap-1.5"
          >
            <span className="material-symbols-outlined text-[20px]">
              shopping_bag
            </span>
            <span className="font-label-caps text-label-caps uppercase tracking-[0.14em]">
              Bag (0)
            </span>
          </a>
          <div className="h-4 w-px bg-surface-container-high mx-1 hidden sm:block" />
          <a href="#" className="flex items-center gap-2 group pl-1">
            <Image
              src={ASSETS.profile}
              alt="Profile"
              width={32}
              height={32}
              className="w-8 h-8 rounded-full object-cover ring-1 ring-surface-container-highest group-hover:ring-secondary transition-all"
            />
            <span className="font-label-caps text-label-caps uppercase tracking-[0.14em] text-on-surface-variant group-hover:text-on-surface hidden xl:inline-block">
              Account
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative w-full bg-surface-container-low overflow-hidden pb-space-xl">
      <div className="max-w-[1440px] mx-auto px-margin md:px-margin-desktop pt-12 md:pt-16 lg:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-center">
          <div className="lg:col-span-6 flex flex-col items-start z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-surface mb-6 shadow-sm rounded">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
              <span className="font-label-caps text-label-caps uppercase tracking-[0.14em] text-on-surface-variant">
                Geneva Manufacture N° 1894
              </span>
            </div>
            <h1 className="font-headline-xl text-headline-xl max-md:text-headline-xl-mobile text-on-surface mb-6 tracking-tight leading-[1.08]">
              The Art of <br />
              <span className="italic font-normal">Measured</span> Time.
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg mb-10 font-light leading-relaxed">
              Hand-assembled in Geneva. Engineered for enduring generations with
              bespoke Calibre 104 manual-wind movements and architectural
              chronometric purity.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-space-md w-full sm:w-auto">
              <a
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-on-primary font-label-caps text-label-caps uppercase tracking-[0.14em] transition-colors duration-200 hover:bg-secondary shadow-sm"
                href="#curated-collection"
              >
                Explore The 2025 Collection
              </a>
              <a
                className="inline-flex items-center justify-center gap-2 px-4 py-4 text-on-surface hover:text-secondary font-label-caps text-label-caps uppercase tracking-[0.14em] transition-colors group"
                href="#"
              >
                <span>Book Atelier Appointment</span>
                <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </a>
            </div>

            <div className="mt-14 pt-8 w-full max-w-md flex items-center justify-between bg-surface p-5 rounded-none shadow-sm">
              <div>
                <span className="block font-label-caps text-label-caps text-outline uppercase tracking-[0.14em]">
                  Calibre Frequency
                </span>
                <span className="font-title-md text-title-md text-on-surface font-semibold">
                  28,800 vph (4 Hz)
                </span>
              </div>
              <div className="h-8 w-px bg-surface-container-high" />
              <div>
                <span className="block font-label-caps text-label-caps text-outline uppercase tracking-[0.14em]">
                  Power Reserve
                </span>
                <span className="font-title-md text-title-md text-on-surface font-semibold">
                  72 Hours Double Barrel
                </span>
              </div>
              <div className="h-8 w-px bg-surface-container-high" />
              <div>
                <span className="block font-label-caps text-label-caps text-outline uppercase tracking-[0.14em]">
                  Chronometer
                </span>
                <span className="font-title-md text-title-md text-secondary font-semibold">
                  COSC Validated
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative mt-10 lg:mt-0 flex justify-center">
            <div className="relative w-full max-w-[560px] aspect-square flex items-center justify-center bg-surface-container-lowest shadow-md">
              <Image
                src={ASSETS.heroWatch}
                alt="Editorial close-up macro studio photograph of an ultra-luxury Swiss titanium chronograph wristwatch"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 560px"
                priority
              />
              <div className="absolute bottom-6 left-6 bg-surface/95 backdrop-blur-md p-5 shadow-sm max-w-[260px] z-10">
                <span className="font-label-caps text-[10px] uppercase text-secondary tracking-[0.18em] block mb-1">
                  Flagship Masterpiece
                </span>
                <h3 className="font-headline-sm text-[19px] text-on-surface mb-2 leading-snug">
                  Chronographe Monopoussoir N° 04
                </h3>
                <div className="space-y-1 text-on-surface-variant font-body-sm text-[12px]">
                  <p className="flex justify-between gap-4">
                    <span>Material</span>
                    <span className="font-medium text-on-surface">
                      Titanium Grade 5
                    </span>
                  </p>
                  <p className="flex justify-between gap-4">
                    <span>Diameter</span>
                    <span className="font-medium text-on-surface">40.0 mm</span>
                  </p>
                  <p className="flex justify-between gap-4">
                    <span>Regulator</span>
                    <span className="font-medium text-on-surface">
                      Free-Sprung Gyromax
                    </span>
                  </p>
                </div>
              </div>
              <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-surface-container-low flex items-center justify-center text-on-surface shadow-sm z-10">
                <span className="material-symbols-outlined text-[20px] text-secondary">
                  verified
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PressBar() {
  return (
    <section className="w-full bg-surface-container py-8 shadow-inner">
      <div className="max-w-[1440px] mx-auto px-margin md:px-margin-desktop">
        <div className="flex flex-wrap items-center justify-between gap-6 md:gap-12">
          <span className="font-label-caps text-label-caps uppercase tracking-[0.2em] text-outline">
            Recognised In Critical Horology
          </span>
          <div className="flex flex-wrap items-center gap-8 md:gap-14 text-on-surface-variant">
            <span className="font-headline-sm text-[20px] tracking-wider uppercase font-normal hover:text-on-surface transition-colors cursor-default">
              HODINKEE
            </span>
            <span className="font-headline-sm text-[20px] tracking-widest uppercase italic font-serif hover:text-on-surface transition-colors cursor-default">
              Haute Time
            </span>
            <span className="font-title-md text-[17px] tracking-[0.18em] uppercase font-light hover:text-on-surface transition-colors cursor-default">
              Financial Times{" "}
              <span className="text-xs font-normal">How To Spend It</span>
            </span>
            <span className="font-headline-sm text-[19px] tracking-widest uppercase hover:text-on-surface transition-colors cursor-default">
              The Rake
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Collection() {
  return (
    <section
      className="w-full bg-background py-space-xl"
      id="curated-collection"
    >
      <div className="max-w-[1440px] mx-auto px-margin md:px-margin-desktop">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="font-label-caps text-label-caps uppercase tracking-[0.16em] text-secondary block mb-2">
              Curated Geneva Catalog
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">
              Signature Timepieces
            </h2>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
            Strictly limited production runs of under 100 iterations worldwide.
            Each individual reference is numbered and catalogued in our
            historical vault.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter-desktop">
          {TIMEPIECES.map((piece) => (
            <div
              key={piece.title}
              className="group flex flex-col bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-surface-container-low flex items-center justify-center">
                <Image
                  src={piece.image}
                  alt={piece.alt}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute top-4 left-4 z-10">
                  <span
                    className={`px-2.5 py-1 bg-surface/90 backdrop-blur-sm font-label-caps text-[10px] uppercase tracking-[0.14em] ${piece.badgeClass}`}
                  >
                    {piece.badge}
                  </span>
                </div>
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-surface/90 via-surface/60 to-transparent flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <button
                    className="px-4 py-2.5 bg-primary text-on-primary font-label-caps text-[11px] uppercase tracking-[0.12em] hover:bg-secondary transition-colors"
                    type="button"
                  >
                    Quick View
                  </button>
                  <button
                    className="px-4 py-2.5 bg-surface text-on-surface font-label-caps text-[11px] uppercase tracking-[0.12em] hover:bg-surface-container-high transition-colors shadow-sm"
                    type="button"
                  >
                    Reserve
                  </button>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow justify-between bg-surface-container-lowest">
                <div>
                  <div className="flex items-baseline justify-between mb-2 gap-3">
                    <h3 className="font-headline-sm text-headline-sm text-on-surface">
                      {piece.title}
                    </h3>
                    <span className="font-title-md text-title-md text-on-surface font-semibold shrink-0">
                      {piece.price}
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mb-4">
                    {piece.description}
                  </p>
                </div>
                <div className="pt-4 bg-surface-container-low/50 -mx-6 -mb-6 px-6 py-3 flex items-center justify-between">
                  <span className="font-label-caps text-[10px] text-outline uppercase tracking-[0.12em]">
                    {piece.caseInfo}
                  </span>
                  <span
                    className={`font-label-caps text-[10px] uppercase ${piece.statusClass}`}
                  >
                    {piece.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <a
            className="inline-flex items-center gap-2 font-label-caps text-label-caps uppercase tracking-[0.16em] text-on-surface hover:text-secondary transition-colors pb-1"
            href="#"
          >
            <span>Explore All 14 Manufacture References</span>
            <span className="material-symbols-outlined text-[16px]">
              north_east
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

function Craftsmanship() {
  return (
    <section className="w-full bg-surface-container-high py-space-xl">
      <div className="max-w-[1440px] mx-auto px-margin md:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-center">
          <div className="lg:col-span-6 relative">
            <div className="relative w-full aspect-[5/4] bg-surface shadow-md overflow-hidden">
              <Image
                src={ASSETS.craftsmanship}
                alt="Intense close-up photograph of a master Swiss watchmaker working under a warm bench lamp with loupe ocular"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="hidden sm:block absolute -bottom-8 -right-8 w-64 bg-primary text-on-primary p-6 shadow-xl z-10">
              <span className="font-headline-xl text-[44px] leading-none text-secondary-fixed block mb-1">
                58h
              </span>
              <p className="font-body-sm text-[12px] text-inverse-primary leading-relaxed">
                Required hand-chamfering and anglage per Calibre 104 movement
                before assembly.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-center lg:pl-space-md mt-10 lg:mt-0">
            <span className="font-label-caps text-label-caps uppercase tracking-[0.16em] text-secondary block mb-3">
              Manufacture Purity
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-6">
              The Intolerance of Imperfection.
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant font-light leading-relaxed mb-8">
              Every Horologe Genève escapement is shaped by hand using
              traditional boxwood laps and gentian wood pegs. We believe true
              luxury does not shout; it resounds in the quiet accuracy of
              internal bevels no client may ever see without a 10x ocular loupe.
            </p>
            <div className="space-y-4">
              {PILLARS.map((pillar) => (
                <div
                  key={pillar.title}
                  className="p-4 bg-surface flex items-start gap-4 shadow-sm"
                >
                  <span className="material-symbols-outlined text-secondary text-[24px] mt-0.5">
                    {pillar.icon}
                  </span>
                  <div>
                    <h4 className="font-title-md text-title-md text-on-surface mb-1">
                      {pillar.title}
                    </h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      {pillar.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="w-full bg-surface py-space-xl">
      <div className="max-w-[1440px] mx-auto px-margin md:px-margin-desktop">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="p-6 bg-surface-container-lowest flex flex-col items-start shadow-sm"
            >
              <div className="w-12 h-12 bg-surface-container flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-on-surface text-[22px]">
                  {service.icon}
                </span>
              </div>
              <h3 className="font-headline-sm text-[18px] text-on-surface mb-2">
                {service.title}
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                {service.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Concierge() {
  return (
    <section className="w-full bg-surface-container-lowest py-space-xl">
      <div className="max-w-[1440px] mx-auto px-margin md:px-margin-desktop">
        <div className="p-8 md:p-14 bg-surface-container flex flex-col lg:flex-row items-center justify-between gap-8 shadow-sm">
          <div className="max-w-xl">
            <span className="font-label-caps text-label-caps uppercase tracking-[0.18em] text-secondary block mb-2">
              Private Consultation
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">
              Commission a Unique Piece
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Speak directly with our Master Horologist regarding bespoke
              hand-engraved casebacks, custom dial enameling, and personalized
              movement bridge monograms.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
            <a
              className="px-8 py-4 bg-primary text-on-primary font-label-caps text-label-caps uppercase tracking-[0.14em] text-center hover:bg-secondary transition-colors"
              href="#"
            >
              Inquire with Concierge
            </a>
            <a
              className="px-8 py-4 bg-surface text-on-surface font-label-caps text-label-caps uppercase tracking-[0.14em] text-center hover:bg-surface-container-high transition-colors shadow-sm"
              href="#"
            >
              View Bespoke Archive
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="w-full bg-surface-container-lowest border-t border-surface-container-high">
      <div className="max-w-[1440px] mx-auto px-margin md:px-margin-desktop pt-space-xl pb-space-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-space-lg lg:gap-gutter-desktop mb-space-xl">
          <div className="lg:col-span-4 flex flex-col justify-between pr-0 lg:pr-space-md">
            <div className="mb-8">
              <span className="font-headline-sm text-headline-sm tracking-wider uppercase text-on-surface block mb-3">
                Horologe Genève
              </span>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-sm font-light leading-relaxed">
                Independent Swiss haute horlogerie dedicated to rigorous
                mechanical purity, hand-finished calibres, and eternal aesthetic
                discretion since 1894.
              </p>
            </div>
            <div>
              <label
                className="font-label-caps text-label-caps tracking-[0.14em] uppercase text-on-surface block mb-3"
                htmlFor="newsletter-email"
              >
                The Atelier Gazette
              </label>
              <form className="flex items-center border-b border-on-surface pb-2 max-w-sm">
                <input
                  className="bg-transparent w-full text-on-surface placeholder:text-outline font-body-sm text-body-sm focus:outline-none"
                  id="newsletter-email"
                  placeholder="Enter your correspondence email"
                  type="email"
                />
                <button
                  aria-label="Subscribe"
                  className="text-on-surface hover:text-secondary transition-colors pl-2"
                  type="submit"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    arrow_forward
                  </span>
                </button>
              </form>
            </div>
          </div>

          <div className="lg:col-span-2 lg:col-start-6">
            <h3 className="font-label-caps text-label-caps tracking-[0.14em] uppercase text-on-surface mb-space-md">
              Collections
            </h3>
            <ul className="space-y-3">
              {[
                "Grand Chronographs",
                "Automatic Dress",
                "Skeleton Complications",
                "Limited Editions",
                "Archive Heritage",
              ].map((item) => (
                <li
                  key={item}
                  className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors"
                >
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2 lg:col-start-9">
            <h3 className="font-label-caps text-label-caps tracking-[0.14em] uppercase text-on-surface mb-space-md">
              Maison
            </h3>
            <ul className="space-y-3">
              {[
                "Our Provenance",
                "Watchmaking Art",
                "Bespoke Engraving",
                "Manufacture Journal",
                "Sustainability Charter",
              ].map((item) => (
                <li
                  key={item}
                  className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors"
                >
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2 lg:col-start-11">
            <h3 className="font-label-caps text-label-caps tracking-[0.14em] uppercase text-on-surface mb-space-md">
              Client Services
            </h3>
            <ul className="space-y-3">
              {[
                "Private Appointments",
                "Authentication & Registry",
                "Track Consignment",
                "Servicing & Restoration",
                "Contact Concierge",
              ].map((item) => (
                <li
                  key={item}
                  className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors"
                >
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-space-md border-t border-surface-container-high flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-space-md font-label-caps text-[10px] tracking-[0.14em] uppercase text-outline">
            <span className="text-on-surface font-medium">
              © 2025 Horologe Genève S.A.
            </span>
            <span>Swiss Made</span>
            <a className="hover:text-on-surface transition-colors" href="#">
              Privacy Policy
            </a>
            <a className="hover:text-on-surface transition-colors" href="#">
              Terms of Service
            </a>
            <a className="hover:text-on-surface transition-colors" href="#">
              Cookie Settings
            </a>
          </div>
          <div className="flex items-center gap-4 font-label-caps text-[10px] tracking-[0.14em] text-on-surface-variant uppercase">
            <span className="text-outline">Currency:</span>
            <div className="flex items-center gap-3">
              <button
                className="text-on-surface font-semibold hover:text-primary transition-colors"
                type="button"
              >
                CHF
              </button>
              <span className="text-surface-container-highest">|</span>
              <button
                className="hover:text-on-surface transition-colors"
                type="button"
              >
                EUR €
              </button>
              <span className="text-surface-container-highest">|</span>
              <button
                className="hover:text-on-surface transition-colors"
                type="button"
              >
                USD $
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-full pt-20 md:pt-[7.25rem] bg-background min-h-screen">
        <div className="flex flex-col w-full">
          <Hero />
          <PressBar />
          <Collection />
          <Craftsmanship />
          <Services />
          <Concierge />
        </div>
      </main>
      <Footer />
    </>
  );
}
