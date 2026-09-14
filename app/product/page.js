"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ASSETS = {
  main: "/stitch/product-main.jpg",
  thumbs: [
    {
      id: "dial",
      src: "/stitch/product-thumb-1.jpg",
      alt: "Dial Face",
      label: "01 / Dial Face",
    },
    {
      id: "caseback",
      src: "/stitch/product-thumb-2.jpg",
      alt: "Calibre 104 Caseback",
      label: "02 / Calibre 104",
    },
    {
      id: "profile",
      src: "/stitch/product-thumb-3.jpg",
      alt: "Wrist Profile",
      label: "03 / Wrist Profile",
    },
    {
      id: "lume",
      src: "/stitch/product-thumb-4.jpg",
      alt: "Luminescence View",
      label: "04 / Night Glow",
      thumbBg: "bg-primary-container",
    },
  ],
  detail1: "/stitch/product-detail-1.jpg",
  detail2: "/stitch/product-detail-2.jpg",
  related: [
    "/stitch/product-related-1.jpg",
    "/stitch/product-related-2.jpg",
    "/stitch/product-related-3.jpg",
  ],
};

const METALS = [
  {
    id: "titanium",
    label: "Grade 5 Brushed Titanium",
    title: "Titanium",
    price: 12800,
    priceLabel: "Included",
    badge: "Base",
    badgeClass: "text-outline",
    swatch: "bg-surface-variant",
  },
  {
    id: "rosegold",
    label: "18K 4N Rose Gold",
    title: "18K Rose Gold",
    price: 17400,
    priceLabel: "+$4,600",
    badge: "Precious",
    badgeClass: "text-secondary",
    swatch: "bg-secondary-fixed-dim",
  },
  {
    id: "platinum",
    label: "Platinum 950 Sovereign",
    title: "Platinum 950",
    price: 22500,
    priceLabel: "+$9,700",
    badge: "Rare",
    badgeClass: "text-outline",
    swatch: "bg-surface-dim",
  },
];

const STRAPS = [
  {
    id: "alligator",
    label: "Hand-Sewn Matte Alligator Noir",
    swatchClass: "bg-primary-container",
    swatchText: "text-on-primary",
    swatchLabel: "Noir Matt",
    name: "Alligator",
  },
  {
    id: "horween",
    label: "Saddle Horween Chromexcel Leather",
    swatchClass: "bg-secondary-container",
    swatchText: "text-on-secondary-container",
    swatchLabel: "Cognac",
    name: "Horween Calf",
  },
  {
    id: "mesh",
    label: "Milanese Grade 5 Titanium Mesh",
    swatchClass: "bg-surface-variant",
    swatchText: "text-on-surface",
    swatchLabel: "Mesh Knit",
    name: "Ti Mesh",
  },
];

const WRIST_SIZES = [
  "Standard (16.5cm - 18.5cm)",
  "Cadet (15.0cm - 16.5cm)",
  "Grand (18.5cm - 21.0cm)",
];

const SPEC_TABS = [
  { id: "movement", label: "Movement & Gear Train" },
  { id: "case", label: "Case & Crystal" },
  { id: "functions", label: "Complication & Rating" },
];

const MOVEMENT_SPECS = [
  {
    label: "Calibre Designation",
    value: "In-House Horologe Calibre 104-M",
    emphasis: true,
  },
  { label: "Frequency", value: "28,800 vibrations/hour (4 Hz)" },
  {
    label: "Power Reserve",
    value: "72 Hours Autonomous (Twin Barrel System)",
  },
  {
    label: "Component Count & Jewels",
    value: "268 Components • 33 Synthetic Rubies",
  },
  {
    label: "Escapement & Hairspring",
    value: "Silicon Balance Spring with Breguet Overcoil",
  },
  {
    label: "Finishing & Anglage",
    value:
      "Hand-chamfered bridges, Côtes de Genève, mirror-polished column wheel",
  },
];

const CASE_SPECS = [
  { label: "Case Diameter", value: "40.5 mm", emphasis: true },
  {
    label: "Overall Thickness",
    value: "10.8 mm (including domed crystal)",
  },
  { label: "Lug-to-Lug Distance", value: "47.2 mm" },
  {
    label: "Front Glass",
    value:
      "Double-domed anti-reflective sapphire crystal (5-layer AR coating)",
  },
  {
    label: "Exhibition Caseback",
    value: "Flat sapphire crystal with screw-down perimeter bezel",
  },
  {
    label: "Water Resistance",
    value: "10 ATM / 100 meters / 330 feet",
  },
];

const FUNCTION_SPECS = [
  {
    label: "Primary Indications",
    value:
      "Central hours and minutes; continuous running small-seconds at 9 o'clock",
    emphasis: true,
  },
  {
    label: "Chronograph Mechanism",
    value:
      "Monopusher integrated into winding crown (Start - Stop - Reset sequence)",
  },
  {
    label: "Chronograph Counter",
    value: "Instantaneous jumping 30-minute totalizer register at 3 o'clock",
  },
  {
    label: "Dial Luminosity",
    value: "Super-LumiNova Grade X1 Old Radium tint emission",
  },
];

const RELATED = [
  {
    image: ASSETS.related[0],
    alt: "Atelier Dress Watch 38mm",
    badge: "Dress Series",
    ref: "Ref. HG-1912-D",
    title: "Classique Petite Seconde 38",
    description: "Ultra-thin manual calibre with Grand Feu enamel dial.",
    price: "$9,400 USD",
    cta: "Configure",
  },
  {
    image: ASSETS.related[1],
    alt: "Tourbillon Squelette",
    badge: "Grand Complication",
    ref: "Ref. HG-TOURB-01",
    title: "Tourbillon Squelette No. 01",
    description: "Openworked flying tourbillon in microblasted titanium.",
    price: "$34,500 USD",
    cta: "Configure",
  },
  {
    image: ASSETS.related[2],
    alt: "Triple Timepiece Travel Roll",
    badge: "Atelier Accessory",
    ref: "Leathergoods Atelier",
    title: "Triple Horological Travel Roll",
    description:
      "Bridle calfskin with individually removable cushioned pillows.",
    price: "$680 USD",
    cta: "Acquire",
  },
];

function formatPrice(amount) {
  return `$${amount.toLocaleString("en-US")} USD`;
}

function SpecRows({ rows }) {
  return (
    <div className="lg:col-span-12 space-y-0">
      {rows.map((row, index) => (
        <div
          key={row.label}
          className={`flex items-center justify-between py-3.5 px-4 ${
            index % 2 === 0 ? "bg-surface-container-low" : ""
          }`}
        >
          <span className="font-label-caps text-label-caps uppercase tracking-[0.16em] text-on-surface-variant">
            {row.label}
          </span>
          <span
            className={`font-body-md text-body-md text-on-surface ${
              row.emphasis ? "font-medium" : ""
            }`}
          >
            {row.value}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function ProductPage() {
  const [selectedThumb, setSelectedThumb] = useState(0);
  const [mainImage, setMainImage] = useState({
    src: ASSETS.main,
    alt: "Horologe Chronographe Monopoussoir No. 04 Primary Dial",
  });
  const [selectedMetal, setSelectedMetal] = useState(METALS[0]);
  const [selectedStrap, setSelectedStrap] = useState(STRAPS[0]);
  const [wristOpen, setWristOpen] = useState(false);
  const [wristSize, setWristSize] = useState(WRIST_SIZES[0]);
  const [specTab, setSpecTab] = useState("movement");
  const [wishlisted, setWishlisted] = useState(false);

  function selectThumb(index) {
    const thumb = ASSETS.thumbs[index];
    setSelectedThumb(index);
    setMainImage({ src: thumb.src, alt: thumb.alt });
  }

  return (
    <>
      <Header />

      <main className="w-full pt-20 bg-background min-h-screen">
        <div className="flex flex-col w-full">
          {/* Top Breadcrumbs & Reference Bar */}
          <div className="w-full bg-surface-container-low py-3 px-margin md:px-margin-desktop">
            <div className="max-w-[1440px] mx-auto flex flex-wrap items-center justify-between gap-4">
              <nav
                aria-label="Breadcrumb"
                className="flex items-center gap-2 font-label-caps text-label-caps text-on-surface-variant uppercase tracking-[0.14em]"
              >
                <Link
                  href="/"
                  className="hover:text-on-surface transition-colors"
                >
                  Home
                </Link>
                <span className="text-outline-variant">/</span>
                <Link
                  href="#"
                  className="hover:text-on-surface transition-colors"
                >
                  Collections
                </Link>
                <span className="text-outline-variant">/</span>
                <Link
                  href="#"
                  className="hover:text-on-surface transition-colors"
                >
                  Atelier Automatic
                </Link>
                <span className="text-outline-variant">/</span>
                <span className="text-on-surface font-medium">
                  The Chronographe Monopoussoir No. 04
                </span>
              </nav>

              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-secondary" />
                <span className="font-label-caps text-[10px] uppercase tracking-[0.16em] text-on-surface">
                  Geneva Salon Allocation: Piece 14/50 Reserved
                </span>
              </div>
            </div>
          </div>

          {/* Main Product Detail Grid */}
          <section className="max-w-[1440px] mx-auto w-full px-margin md:px-margin-desktop py-space-lg lg:py-space-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-start">
              {/* Left Column: Visual Gallery */}
              <div className="lg:col-span-7 flex flex-col gap-space-md">
                <div className="relative w-full aspect-[4/5] bg-surface-container-lowest rounded-none overflow-hidden group shadow-sm flex items-center justify-center p-8">
                  <div className="absolute top-6 left-6 z-10 flex flex-col gap-2">
                    <span className="bg-surface-container-high text-on-surface px-3 py-1 font-label-caps text-label-caps uppercase tracking-[0.16em]">
                      Haute Horlogerie
                    </span>
                    <span className="bg-primary text-on-primary px-3 py-1 font-label-caps text-[10px] uppercase tracking-[0.16em]">
                      Series 2024 • 50 Pieces
                    </span>
                  </div>

                  <button
                    className="absolute top-6 right-6 z-10 bg-surface/90 hover:bg-primary hover:text-on-primary text-on-surface px-3 py-1.5 flex items-center gap-2 font-label-caps text-[10px] uppercase tracking-[0.14em] shadow-sm transition-all duration-200"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[16px]">
                      360
                    </span>
                    <span>Interactive 360°</span>
                  </button>

                  <Image
                    src={mainImage.src}
                    alt={mainImage.alt}
                    fill
                    className="object-contain transition-transform duration-700 ease-out group-hover:scale-105 select-none cursor-crosshair p-8"
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    priority
                  />

                  <div className="absolute bottom-6 right-6 bg-surface-container-high/80 backdrop-blur-md px-3 py-1.5 font-label-caps text-[10px] uppercase tracking-[0.12em] text-on-surface flex items-center gap-1.5 pointer-events-none">
                    <span className="material-symbols-outlined text-[14px]">
                      zoom_in
                    </span>
                    Hover To Examine Finish
                  </div>

                  <div className="absolute bottom-6 left-6 font-label-caps text-[10px] text-outline tracking-[0.18em]">
                    SCALE 1:1.15 ATELIER VIEW
                  </div>
                </div>

                {/* Thumbnail Rail */}
                <div className="grid grid-cols-4 gap-3">
                  {ASSETS.thumbs.map((thumb, index) => {
                    const active = selectedThumb === index;
                    return (
                      <button
                        key={thumb.id}
                        type="button"
                        onClick={() => selectThumb(index)}
                        className={`gallery-thumb bg-surface-container-lowest p-2 transition-all duration-200 text-left flex flex-col gap-2 ${
                          active
                            ? "ring-1 ring-primary"
                            : "hover:bg-surface-container-low"
                        }`}
                      >
                        <div
                          className={`w-full aspect-square overflow-hidden flex items-center justify-center relative ${
                            thumb.thumbBg || "bg-surface-container-low"
                          }`}
                        >
                          <Image
                            src={thumb.src}
                            alt={thumb.alt}
                            fill
                            className="object-cover"
                            sizes="120px"
                          />
                        </div>
                        <span
                          className={`font-label-caps text-[9px] uppercase tracking-[0.12em] truncate ${
                            active
                              ? "text-on-surface"
                              : "text-on-surface-variant"
                          }`}
                        >
                          {thumb.label}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Provenance Strip */}
                <div className="bg-surface-container-low p-space-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[20px]">
                        verified
                      </span>
                    </div>
                    <div>
                      <p className="font-title-md text-title-md text-on-surface">
                        Manufacture Horlogère Genevoise
                      </p>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Each component hand-assembled and regulated in 5
                        positions over 30 days.
                      </p>
                    </div>
                  </div>
                  <Link
                    href="#"
                    className="font-label-caps text-label-caps uppercase tracking-[0.14em] text-secondary hover:text-on-surface transition-colors flex items-center gap-1"
                  >
                    Certificate Dossier
                    <span className="material-symbols-outlined text-[14px]">
                      arrow_forward
                    </span>
                  </Link>
                </div>
              </div>

              {/* Right Column: Purchasing & Configuration */}
              <div className="lg:col-span-5 flex flex-col gap-space-lg lg:sticky lg:top-28">
                <div className="flex flex-col gap-2 pb-space-sm">
                  <div className="flex items-center justify-between">
                    <span className="font-label-caps text-label-caps uppercase tracking-[0.18em] text-outline">
                      Ref. HG-2024-04
                    </span>
                    <span className="font-label-caps text-label-caps uppercase tracking-[0.14em] text-secondary font-semibold">
                      Limited Series • 50 Pieces
                    </span>
                  </div>
                  <h1 className="font-headline-lg text-headline-lg text-on-surface font-normal leading-tight">
                    Chronographe Monopoussoir N° 04
                  </h1>
                  <p className="font-body-md text-body-md text-on-surface-variant font-light">
                    An archival complication refined for the modern purist.
                    Powered by our manual-wind column wheel calibre with single
                    crown pusher control.
                  </p>
                </div>

                {/* Pricing */}
                <div className="bg-surface-container-low p-space-md flex flex-col gap-1.5">
                  <div className="flex items-baseline justify-between">
                    <span className="font-headline-md text-headline-md text-on-surface font-normal">
                      {formatPrice(selectedMetal.price)}
                    </span>
                    <span className="font-label-caps text-label-caps uppercase tracking-[0.12em] text-outline">
                      Taxes & Insured Shipping Included
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-on-surface-variant">
                    <p className="font-body-sm text-body-sm">
                      From{" "}
                      <strong className="text-on-surface font-medium">
                        $
                        {Math.round(selectedMetal.price / 12).toLocaleString(
                          "en-US",
                        )}
                        /mo
                      </strong>{" "}
                      with Maison Private Concierge Financing
                    </p>
                    <button
                      className="font-label-caps text-[10px] uppercase tracking-[0.14em] underline hover:text-on-surface"
                      type="button"
                    >
                      Inquire
                    </button>
                  </div>
                </div>

                {/* Case Metal */}
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <label className="font-label-caps text-label-caps uppercase tracking-[0.14em] text-on-surface">
                      Case Metal:{" "}
                      <span className="text-on-surface font-semibold">
                        {selectedMetal.label}
                      </span>
                    </label>
                    <span className="font-label-caps text-[10px] text-outline uppercase tracking-[0.14em]">
                      40.5mm ⌀
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    {METALS.map((metal) => {
                      const active = selectedMetal.id === metal.id;
                      return (
                        <button
                          key={metal.id}
                          type="button"
                          onClick={() => setSelectedMetal(metal)}
                          className={`metal-btn p-3 text-left flex flex-col gap-2 transition-all duration-150 ${
                            active
                              ? "bg-surface-container-lowest ring-1 ring-primary"
                              : "bg-surface-container-low hover:bg-surface-container-lowest"
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span
                              className={`w-4 h-4 rounded-full inline-block ${metal.swatch}`}
                            />
                            <span
                              className={`font-label-caps text-[9px] uppercase tracking-wider ${metal.badgeClass}`}
                            >
                              {metal.badge}
                            </span>
                          </div>
                          <div>
                            <p className="font-title-md text-[13px] text-on-surface font-medium leading-none">
                              {metal.title}
                            </p>
                            <p className="font-label-caps text-[10px] text-on-surface-variant mt-1">
                              {metal.priceLabel}
                            </p>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Strap Selection */}
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <label className="font-label-caps text-label-caps uppercase tracking-[0.14em] text-on-surface">
                      Strap Attachment:{" "}
                      <span className="font-semibold text-on-surface">
                        {selectedStrap.label}
                      </span>
                    </label>
                    <span className="font-label-caps text-[10px] text-outline uppercase tracking-[0.14em]">
                      20mm / 18mm Taper
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    {STRAPS.map((strap) => {
                      const active = selectedStrap.id === strap.id;
                      return (
                        <label key={strap.id} className="cursor-pointer">
                          <input
                            className="sr-only peer"
                            name="strap"
                            type="radio"
                            value={strap.id}
                            checked={active}
                            onChange={() => setSelectedStrap(strap)}
                          />
                          <div className="bg-surface-container-lowest peer-checked:ring-1 peer-checked:ring-primary p-3 flex flex-col gap-2 hover:bg-surface-container-low transition-colors">
                            <div
                              className={`h-6 w-full rounded flex items-center justify-center ${strap.swatchClass}`}
                            >
                              <span
                                className={`font-label-caps text-[9px] uppercase tracking-widest ${strap.swatchText}`}
                              >
                                {strap.swatchLabel}
                              </span>
                            </div>
                            <p className="font-label-caps text-[10px] uppercase tracking-[0.1em] text-on-surface text-center">
                              {strap.name}
                            </p>
                          </div>
                        </label>
                      );
                    })}
                  </div>
                </div>

                {/* Wrist Sizing Accordion */}
                <div className="bg-surface-container-lowest">
                  <button
                    type="button"
                    onClick={() => setWristOpen((open) => !open)}
                    className="w-full flex items-center justify-between py-2 px-3"
                    aria-expanded={wristOpen}
                  >
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[18px] text-on-surface-variant">
                        straighten
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface text-left">
                        Complimentary Custom Lug & Strap Sizing
                      </span>
                    </div>
                    <span className="font-label-caps text-label-caps uppercase tracking-[0.12em] text-on-surface flex items-center gap-1">
                      <span className="truncate max-w-[140px]">{wristSize}</span>
                      <span className="material-symbols-outlined text-[18px]">
                        {wristOpen ? "expand_less" : "expand_more"}
                      </span>
                    </span>
                  </button>
                  {wristOpen && (
                    <div className="px-3 pb-3 flex flex-col gap-1">
                      {WRIST_SIZES.map((size) => (
                        <button
                          key={size}
                          type="button"
                          onClick={() => {
                            setWristSize(size);
                            setWristOpen(false);
                          }}
                          className={`text-left py-2 px-2 font-label-caps text-label-caps uppercase tracking-[0.12em] transition-colors ${
                            wristSize === size
                              ? "bg-surface-container-low text-on-surface"
                              : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low"
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Primary Actions */}
                <div className="flex flex-col gap-2.5 pt-2">
                  <div className="flex items-center gap-2">
                    <button
                      className="flex-1 bg-primary hover:bg-secondary text-on-primary py-4 px-6 font-label-caps text-label-caps uppercase tracking-[0.18em] transition-colors duration-200 flex items-center justify-center gap-3"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[18px]">
                        lock
                      </span>
                      <span>Acquire Timepiece</span>
                    </button>
                    <button
                      className="w-14 h-14 bg-surface-container-low hover:bg-surface-container-high text-on-surface flex items-center justify-center transition-colors"
                      type="button"
                      onClick={() => setWishlisted((w) => !w)}
                      aria-pressed={wishlisted}
                      aria-label="Toggle wishlist"
                    >
                      <span
                        className="material-symbols-outlined text-[22px]"
                        style={
                          wishlisted
                            ? { fontVariationSettings: "'FILL' 1" }
                            : undefined
                        }
                      >
                        favorite
                      </span>
                    </button>
                  </div>
                  <button
                    className="w-full bg-surface-container-low hover:bg-surface-container-high text-on-surface py-3.5 px-6 font-label-caps text-label-caps uppercase tracking-[0.18em] transition-colors duration-200 flex items-center justify-center gap-2"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[18px]">
                      calendar_month
                    </span>
                    <span>
                      Book Boutique Viewing / Inquire With Concierge
                    </span>
                  </button>
                </div>

                {/* Dispatch & Guarantee */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-[18px] text-secondary mt-0.5">
                      flight_takeoff
                    </span>
                    <div>
                      <p className="font-label-caps text-[10px] uppercase tracking-[0.14em] text-on-surface font-semibold">
                        Insured Global Courier
                      </p>
                      <p className="font-body-sm text-[12px] text-on-surface-variant">
                        Dispatched within 48h via Brink&apos;s secure transit
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-[18px] text-secondary mt-0.5">
                      verified_user
                    </span>
                    <div>
                      <p className="font-label-caps text-[10px] uppercase tracking-[0.14em] text-on-surface font-semibold">
                        5-Year Guarantee
                      </p>
                      <p className="font-body-sm text-[12px] text-on-surface-variant">
                        Full Swiss atelier movement warranty & first overhaul
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Technical Specifications */}
          <section className="w-full bg-surface-container-lowest py-space-xl px-margin md:px-margin-desktop my-8">
            <div className="max-w-[1440px] mx-auto">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-lg gap-4">
                <div>
                  <span className="font-label-caps text-label-caps uppercase tracking-[0.2em] text-secondary">
                    Manufacture Calibre Dossier
                  </span>
                  <h2 className="font-headline-lg text-headline-lg text-on-surface font-normal mt-1">
                    Horological Specifications
                  </h2>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant max-w-md">
                  Regulated to +2/-1 seconds per day. Tested continuously through
                  thermal variations and 6-position gravity simulation at our
                  Geneva laboratory.
                </p>
              </div>

              <div className="flex items-center gap-2 mb-space-md overflow-x-auto pb-2">
                {SPEC_TABS.map((tab) => {
                  const active = specTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setSpecTab(tab.id)}
                      className={`spec-tab px-4 py-2 font-label-caps text-label-caps uppercase tracking-[0.14em] transition-all ${
                        active
                          ? "bg-primary text-on-primary"
                          : "bg-surface-container-low text-on-surface-variant hover:text-on-surface"
                      }`}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>

              {specTab === "movement" && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-center">
                  <div className="lg:col-span-7 space-y-0">
                    {MOVEMENT_SPECS.map((row, index) => (
                      <div
                        key={row.label}
                        className={`flex items-center justify-between py-3.5 px-4 ${
                          index % 2 === 0 ? "bg-surface-container-low" : ""
                        }`}
                      >
                        <span className="font-label-caps text-label-caps uppercase tracking-[0.16em] text-on-surface-variant">
                          {row.label}
                        </span>
                        <span
                          className={`font-body-md text-body-md text-on-surface ${
                            row.emphasis ? "font-medium" : ""
                          }`}
                        >
                          {row.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="lg:col-span-5 bg-surface-container-low p-space-md flex flex-col gap-4">
                    <div className="aspect-[16/10] overflow-hidden bg-primary-container relative">
                      <Image
                        src={ASSETS.detail2}
                        alt="Internal Movement Mechanism"
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 40vw"
                      />
                      <div className="absolute bottom-3 left-3 bg-surface/90 px-2.5 py-1 font-label-caps text-[9px] uppercase tracking-[0.14em]">
                        Column-Wheel Chronograph Architecture
                      </div>
                    </div>

                    <div className="bg-surface-container-lowest p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-label-caps text-[10px] uppercase tracking-[0.14em] text-outline">
                          5-Position Chronometer Drift (s/day)
                        </span>
                        <span className="font-label-caps text-[11px] text-secondary font-semibold">
                          +0.8 s/avg
                        </span>
                      </div>
                      <svg
                        className="w-full h-12 text-secondary"
                        fill="none"
                        viewBox="0 0 300 40"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 20 Q 30 14, 60 22 T 120 18 T 180 24 T 240 16 T 300 20"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.75"
                        />
                        <circle cx="60" cy="22" fill="currentColor" r="3" />
                        <circle cx="120" cy="18" fill="currentColor" r="3" />
                        <circle cx="180" cy="24" fill="currentColor" r="3" />
                        <circle cx="240" cy="16" fill="currentColor" r="3" />
                        <line
                          stroke="#c4c7c7"
                          strokeDasharray="2 2"
                          strokeWidth="0.75"
                          x1="0"
                          x2="300"
                          y1="20"
                          y2="20"
                        />
                      </svg>
                      <div className="flex justify-between font-label-caps text-[9px] text-on-surface-variant uppercase mt-1">
                        <span>Dial Up</span>
                        <span>Crown Down</span>
                        <span>Dial Down</span>
                        <span>Crown Left</span>
                        <span>Crown Up</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {specTab === "case" && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-center">
                  <SpecRows rows={CASE_SPECS} />
                </div>
              )}

              {specTab === "functions" && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-center">
                  <SpecRows rows={FUNCTION_SPECS} />
                </div>
              )}
            </div>
          </section>

          {/* Packaging & Unboxing */}
          <section className="w-full max-w-[1440px] mx-auto px-margin md:px-margin-desktop py-space-xl">
            <div className="bg-surface-container-low p-space-lg lg:p-space-xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-center">
                <div className="lg:col-span-5 flex flex-col gap-space-md">
                  <span className="font-label-caps text-label-caps uppercase tracking-[0.2em] text-secondary">
                    The Unboxing Protocol
                  </span>
                  <h2 className="font-headline-lg text-headline-lg text-on-surface font-normal leading-tight">
                    Handcrafted Walnut Presentation Chest
                  </h2>
                  <p className="font-body-md text-body-md text-on-surface-variant font-light leading-relaxed">
                    Every timepiece leaves the Geneva atelier housed inside a
                    solid Swiss walnut box lined with charcoal alcantara suede.
                    Accompanying your watch is a precision brass inspection
                    loupe, a serialized chronometer rating certificate, and a
                    bespoke leather travel pouch for journeys abroad.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="p-3 bg-surface-container-lowest">
                      <p className="font-label-caps text-label-caps uppercase tracking-[0.14em] text-on-surface font-medium">
                        Brass Atelier Loupe
                      </p>
                      <p className="font-body-sm text-[12px] text-on-surface-variant mt-0.5">
                        10x aplanatic magnification lens
                      </p>
                    </div>
                    <div className="p-3 bg-surface-container-lowest">
                      <p className="font-label-caps text-label-caps uppercase tracking-[0.14em] text-on-surface font-medium">
                        Bespoke Travel Folio
                      </p>
                      <p className="font-body-sm text-[12px] text-on-surface-variant mt-0.5">
                        Full-grain vegetable tanned hide
                      </p>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-7">
                  <div className="relative aspect-[16/10] overflow-hidden shadow-sm bg-surface-container-high">
                    <Image
                      src={ASSETS.detail1}
                      alt="Horologe Walnut Presentation Case & Accessories"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 58vw"
                    />
                    <div className="absolute bottom-4 right-4 bg-surface/90 px-3 py-1 font-label-caps text-[10px] uppercase tracking-[0.16em] text-on-surface">
                      Included With Delivery
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Collectors Also Acquired */}
          <section className="w-full max-w-[1440px] mx-auto px-margin md:px-margin-desktop pt-space-md pb-space-xl">
            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-space-lg gap-2">
              <div>
                <span className="font-label-caps text-label-caps uppercase tracking-[0.2em] text-outline">
                  Curated Complements
                </span>
                <h2 className="font-headline-md text-headline-md text-on-surface font-normal mt-1">
                  Collectors Also Acquired
                </h2>
              </div>
              <Link
                href="#"
                className="font-label-caps text-label-caps uppercase tracking-[0.14em] text-on-surface hover:text-secondary transition-colors flex items-center gap-1.5"
              >
                Explore Complete Catalogue
                <span className="material-symbols-outlined text-[16px]">
                  arrow_forward
                </span>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
              {RELATED.map((item) => (
                <div
                  key={item.ref}
                  className="bg-surface-container-lowest p-space-md flex flex-col justify-between group"
                >
                  <div className="relative aspect-square overflow-hidden bg-surface-container-low mb-space-md flex items-center justify-center">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <span className="absolute top-3 left-3 bg-surface/90 text-on-surface px-2.5 py-0.5 font-label-caps text-[9px] uppercase tracking-[0.14em]">
                      {item.badge}
                    </span>
                  </div>
                  <div>
                    <span className="font-label-caps text-[10px] uppercase tracking-[0.16em] text-outline">
                      {item.ref}
                    </span>
                    <h3 className="font-headline-sm text-[18px] text-on-surface mt-1 group-hover:text-secondary transition-colors">
                      {item.title}
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                      {item.description}
                    </p>
                    <div className="flex items-center justify-between mt-4 pt-3 bg-surface-container-low px-3 py-2">
                      <span className="font-title-md text-[14px] text-on-surface font-medium">
                        {item.price}
                      </span>
                      <Link
                        href="/product"
                        className="font-label-caps text-[10px] uppercase tracking-[0.12em] text-on-surface hover:underline"
                      >
                        {item.cta}
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
