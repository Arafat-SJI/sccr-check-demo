import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-lowest border-t border-surface-container-high">
      <div className="max-w-[1440px] mx-auto px-margin md:px-margin-desktop pt-space-xl pb-space-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-space-lg lg:gap-gutter-desktop mb-space-xl">
          <div className="lg:col-span-4 flex flex-col justify-between pr-0 lg:pr-space-md">
            <div className="mb-8">
              <Link
                href="/"
                className="font-headline-sm text-headline-sm tracking-wider uppercase text-on-surface block mb-3"
              >
                Horologe Genève
              </Link>
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
                { label: "Grand Chronographs", href: "/product" },
                { label: "Automatic Dress", href: "/#curated-collection" },
                { label: "Skeleton Complications", href: "/product" },
                { label: "Limited Editions", href: "/product" },
                { label: "Archive Heritage", href: "/#curated-collection" },
              ].map((item) => (
                <li
                  key={item.label}
                  className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors"
                >
                  <Link href={item.href}>{item.label}</Link>
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
                  <Link href="/">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2 lg:col-start-11">
            <h3 className="font-label-caps text-label-caps tracking-[0.14em] uppercase text-on-surface mb-space-md">
              Client Services
            </h3>
            <ul className="space-y-3">
              <li className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors">
                <Link href="/login">Client Portal</Link>
              </li>
              <li className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors">
                <Link href="/register">Create Account</Link>
              </li>
              <li className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors">
                <Link href="/product">Track Consignment</Link>
              </li>
              <li className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors">
                <a href="#">Servicing & Restoration</a>
              </li>
              <li className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors">
                <a href="#">Contact Concierge</a>
              </li>
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
