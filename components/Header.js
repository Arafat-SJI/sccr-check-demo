import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Collection", href: "/#curated-collection" },
  { label: "Atelier & Heritage", href: "/#curated-collection" },
  { label: "Product", href: "/product" },
  { label: "Concierge", href: "/#concierge" },
];

export default function Header() {
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
            <Link
              href="/login"
              className="hover:text-on-surface transition-colors"
            >
              Client Portal
            </Link>
          </div>
        </div>
      </div>

      <div className="h-20 max-w-[1440px] mx-auto px-margin md:px-margin-desktop flex items-center justify-between">
        <nav className="hidden lg:flex items-center gap-space-lg">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="font-label-caps text-label-caps uppercase tracking-[0.14em] text-on-surface-variant hover:text-on-surface transition-colors py-1"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-space-sm">
          <Link href="/" className="flex items-center gap-3 group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/stitch/logo.svg"
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
          </Link>
        </div>

        <div className="flex items-center gap-space-md">
          <button
            aria-label="Search Archive"
            className="p-1.5 text-on-surface-variant hover:text-on-surface transition-colors"
            type="button"
          >
            <span className="material-symbols-outlined text-[20px]">search</span>
          </button>
          <Link
            href="/product"
            className="p-1.5 text-on-surface-variant hover:text-on-surface transition-colors flex items-center gap-1"
          >
            <span className="material-symbols-outlined text-[20px]">
              favorite
            </span>
            <span className="font-label-caps text-[10px] hidden sm:inline-block">
              (0)
            </span>
          </Link>
          <Link
            href="/product"
            className="p-1.5 text-on-surface-variant hover:text-on-surface transition-colors flex items-center gap-1.5"
          >
            <span className="material-symbols-outlined text-[20px]">
              shopping_bag
            </span>
            <span className="font-label-caps text-label-caps uppercase tracking-[0.14em]">
              Bag (0)
            </span>
          </Link>
          <div className="h-4 w-px bg-surface-container-high mx-1 hidden sm:block" />
          <Link href="/profile" className="flex items-center gap-2 group pl-1">
            <Image
              src="/stitch/profile.jpg"
              alt="Profile"
              width={32}
              height={32}
              className="w-8 h-8 rounded-full object-cover ring-1 ring-surface-container-highest group-hover:ring-secondary transition-all"
            />
            <span className="font-label-caps text-label-caps uppercase tracking-[0.14em] text-on-surface-variant group-hover:text-on-surface hidden xl:inline-block">
              Account
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}
