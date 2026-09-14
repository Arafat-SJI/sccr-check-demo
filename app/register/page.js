"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const SALUTATIONS = ["Mr.", "Ms.", "Mx.", "Dr."];
const INTERESTS = [
  "Chronographs & Split-Seconds",
  "Haute Horlogerie & Tourbillons",
  "Vintage Restorations & Archives",
  "Astronomical & Perpetual Calendars",
];

function passwordScore(val) {
  let score = 0;
  if (val.length >= 6) score++;
  if (val.length >= 10) score++;
  if (/[A-Z]/.test(val) && /[0-9]/.test(val)) score++;
  if (/[^A-Za-z0-9]/.test(val)) score++;
  return score;
}

export default function RegisterPage() {
  const [salutation, setSalutation] = useState("Mr.");
  const [interests, setInterests] = useState([
    "Haute Horlogerie & Tourbillons",
    "Astronomical & Perpetual Calendars",
  ]);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const strength = useMemo(() => {
    if (!password) {
      return {
        label: "Minimum 8 characters",
        labelClass: "text-outline",
        bars: 0,
        barClass: "bg-surface-container-high",
      };
    }
    const score = passwordScore(password);
    if (score === 1) {
      return {
        label: "Weak",
        labelClass: "text-error",
        bars: 1,
        barClass: "bg-error",
      };
    }
    if (score === 2) {
      return {
        label: "Moderate",
        labelClass: "text-secondary",
        bars: 2,
        barClass: "bg-secondary-fixed-dim",
      };
    }
    if (score === 3) {
      return {
        label: "Strong",
        labelClass: "text-secondary",
        bars: 3,
        barClass: "bg-secondary",
      };
    }
    return {
      label: "Impenetrable",
      labelClass: "text-on-surface",
      bars: 4,
      barClass: "bg-primary",
    };
  }, [password]);

  function toggleInterest(item) {
    setInterests((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item],
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <main className="w-full min-h-screen bg-background flex items-center justify-center">
      <div className="w-full max-w-6xl mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop py-space-xl">
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-label-caps text-label-caps uppercase tracking-widest text-on-surface-variant hover:text-on-surface transition-colors"
          >
            <span className="material-symbols-outlined text-[16px]">
              arrow_back
            </span>
            Back to Maison
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 bg-surface-container-lowest rounded-xl shadow-xl overflow-hidden">
          <div className="lg:col-span-5 bg-surface-container-low p-space-lg lg:p-space-xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-secondary/5 blur-3xl pointer-events-none" />
            <div className="space-y-space-lg relative z-10">
              <div className="flex items-center space-x-space-sm">
                <span className="w-2 h-2 rounded-full bg-secondary" />
                <span className="font-label-caps text-label-caps uppercase tracking-widest text-on-surface-variant">
                  Atelier Horologe Genève
                </span>
              </div>
              <div className="space-y-space-xs">
                <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest">
                  Client Privilege
                </span>
                <h2 className="font-headline-md text-headline-md text-on-surface">
                  The Distinction of Provenance
                </h2>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Membership establishes direct patronage with our historic
                  manufacture in Plan-les-Ouates, offering custodians of our
                  calibres absolute access to manufacture archives and bespoke
                  horological commissions.
                </p>
              </div>

              <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/stitch/signup-movement.jpg"
                  alt="Macro close-up of a luxury Swiss watch movement with Geneva stripes"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 flex justify-between items-end text-on-primary">
                  <div>
                    <p className="font-label-caps text-label-caps text-secondary-fixed-dim">
                      Calibre CH-1882
                    </p>
                    <p className="font-body-sm text-body-sm text-surface">
                      Geneva Seal Certified
                    </p>
                  </div>
                  <span className="font-label-caps text-label-caps text-surface-variant">
                    3.8 Hz / 28,800 vph
                  </span>
                </div>
              </div>

              <div className="space-y-space-md pt-space-xs">
                {[
                  {
                    icon: "verified_user",
                    title: "Digital Provenance & Vault",
                    body: "Encrypted cryptographic register certifying individual serial numbers and complete service lineage.",
                  },
                  {
                    icon: "hotel_class",
                    title: "Priority Numbered Allocations",
                    body: "Guaranteed right of first refusal for ultra-limited complication pieces and commemorative releases.",
                  },
                  {
                    icon: "support_agent",
                    title: "Dedicated Horological Concierge",
                    body: "Personalized white-glove logistics, factory visits, and access to master watchmaker seminars.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex items-start space-x-space-sm"
                  >
                    <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-secondary shrink-0">
                      <span className="material-symbols-outlined text-lg">
                        {item.icon}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-title-md text-title-md text-on-surface">
                        {item.title}
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        {item.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-space-lg text-center lg:text-left relative z-10">
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Already possess an Atelier account?{" "}
                <Link
                  className="font-title-md text-title-md text-secondary hover:text-primary transition-colors underline underline-offset-4"
                  href="/login"
                >
                  Sign In
                </Link>
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 p-space-lg lg:p-space-xl flex flex-col justify-between">
            <div>
              <div className="flex flex-col items-start mb-space-lg">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt="Horologe Genève Logo"
                  className="h-10 w-auto object-contain mb-space-sm"
                  src="/stitch/logo.svg"
                />
                <h1 className="font-headline-lg text-headline-lg text-on-surface">
                  Join the Maison Horologe
                </h1>
                <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs max-w-xl">
                  Create an account to register your timepieces, activate 5-year
                  manufacture warranties, and receive private allocations of
                  limited editions.
                </p>
              </div>

              <form className="space-y-space-md" onSubmit={handleSubmit}>
                <div>
                  <label className="block font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider mb-space-xs">
                    Salutation
                  </label>
                  <div className="grid grid-cols-4 gap-space-xs">
                    {SALUTATIONS.map((item) => {
                      const active = salutation === item;
                      return (
                        <button
                          key={item}
                          type="button"
                          onClick={() => setSalutation(item)}
                          className={`py-2 text-center rounded font-title-md text-title-md transition-colors ${
                            active
                              ? "bg-surface-container-high text-on-surface"
                              : "bg-surface-container-low text-on-surface-variant hover:bg-surface-variant"
                          }`}
                        >
                          {item}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                  <div className="space-y-space-xs">
                    <label
                      className="block font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider"
                      htmlFor="firstName"
                    >
                      Given Name
                    </label>
                    <input
                      className="w-full px-4 py-3 bg-surface-container-low text-on-surface rounded focus:bg-surface-container-lowest focus:outline-none focus:ring-1 focus:ring-secondary font-body-md text-body-md transition-all placeholder:text-outline-variant"
                      id="firstName"
                      placeholder="e.g. Laurent"
                      required
                      type="text"
                    />
                  </div>
                  <div className="space-y-space-xs">
                    <label
                      className="block font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider"
                      htmlFor="lastName"
                    >
                      Family Name
                    </label>
                    <input
                      className="w-full px-4 py-3 bg-surface-container-low text-on-surface rounded focus:bg-surface-container-lowest focus:outline-none focus:ring-1 focus:ring-secondary font-body-md text-body-md transition-all placeholder:text-outline-variant"
                      id="lastName"
                      placeholder="e.g. Ferrier"
                      required
                      type="text"
                    />
                  </div>
                </div>

                <div className="space-y-space-xs">
                  <label
                    className="block font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider"
                    htmlFor="email"
                  >
                    Email Address
                  </label>
                  <div className="relative">
                    <input
                      className="w-full px-4 py-3 bg-surface-container-low text-on-surface rounded focus:bg-surface-container-lowest focus:outline-none focus:ring-1 focus:ring-secondary font-body-md text-body-md transition-all placeholder:text-outline-variant"
                      id="email"
                      placeholder="client@domaine.ch"
                      required
                      type="email"
                    />
                    <span className="material-symbols-outlined absolute right-3 top-3.5 text-outline text-lg">
                      mail
                    </span>
                  </div>
                </div>

                <div className="space-y-space-xs">
                  <div className="flex justify-between items-center">
                    <label
                      className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider"
                      htmlFor="password"
                    >
                      Passphrase
                    </label>
                    <span
                      className={`font-label-sm text-label-sm ${strength.labelClass}`}
                    >
                      {strength.label}
                    </span>
                  </div>
                  <div className="relative">
                    <input
                      className="w-full px-4 py-3 bg-surface-container-low text-on-surface rounded focus:bg-surface-container-lowest focus:outline-none focus:ring-1 focus:ring-secondary font-body-md text-body-md transition-all placeholder:text-outline-variant"
                      id="password"
                      placeholder="••••••••••••"
                      required
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                      className="absolute right-3 top-3 text-outline hover:text-on-surface transition-colors"
                      type="button"
                      onClick={() => setShowPassword((v) => !v)}
                    >
                      <span className="material-symbols-outlined text-lg">
                        {showPassword ? "visibility_off" : "visibility"}
                      </span>
                    </button>
                  </div>
                  <div className="w-full bg-surface-container h-1 rounded overflow-hidden mt-2 flex">
                    {[0, 1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className={`h-full w-1/4 transition-all duration-300 ${
                          i < strength.bars
                            ? strength.barClass
                            : "bg-surface-container-high"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <div className="space-y-space-xs pt-space-xs">
                  <label className="block font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">
                    Primary Horological Interest (Optional)
                  </label>
                  <div className="flex flex-wrap gap-space-xs">
                    {INTERESTS.map((item) => {
                      const active = interests.includes(item);
                      return (
                        <button
                          key={item}
                          type="button"
                          onClick={() => toggleInterest(item)}
                          className={`px-3 py-1.5 rounded text-left font-body-sm text-body-sm transition-colors ${
                            active
                              ? "bg-primary text-on-primary"
                              : "bg-surface-container-low text-on-surface-variant hover:bg-surface-container"
                          }`}
                        >
                          {item}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="space-y-space-sm pt-space-xs">
                  <label className="flex items-start space-x-space-sm cursor-pointer group">
                    <input
                      className="mt-1 w-4 h-4 rounded-none accent-primary cursor-pointer text-primary"
                      required
                      type="checkbox"
                    />
                    <span className="font-body-sm text-body-sm text-on-surface-variant group-hover:text-on-surface transition-colors">
                      I agree to the Maison Terms of Service, Manufacture
                      Guarantee Rules, and confidential{" "}
                      <a
                        className="text-secondary underline underline-offset-2"
                        href="#"
                      >
                        Privacy Policy
                      </a>
                      .
                    </span>
                  </label>
                  <label className="flex items-start space-x-space-sm cursor-pointer group">
                    <input
                      defaultChecked
                      className="mt-1 w-4 h-4 rounded-none accent-primary cursor-pointer text-primary"
                      type="checkbox"
                    />
                    <span className="font-body-sm text-body-sm text-on-surface-variant group-hover:text-on-surface transition-colors">
                      Receive confidential invitations to annual Basel & Geneva
                      private previews, Salon VIP lounges, and private
                      allocations.
                    </span>
                  </label>
                </div>

                <div className="pt-space-md">
                  <button
                    className="w-full py-4 bg-primary text-on-primary font-label-caps text-label-caps uppercase tracking-widest rounded-none hover:bg-secondary transition-colors duration-200 shadow-md flex items-center justify-center space-x-space-sm group"
                    type="submit"
                  >
                    <span>Create Atelier Account</span>
                    <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </button>
                </div>
              </form>
            </div>

            <div className="mt-space-lg pt-space-md flex flex-wrap items-center justify-between gap-y-2 text-outline-variant font-label-sm text-label-sm">
              <div className="flex items-center space-x-2">
                <span className="material-symbols-outlined text-secondary text-base">
                  lock
                </span>
                <span className="text-on-surface-variant">
                  256-Bit Vault Protocol
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="material-symbols-outlined text-secondary text-base">
                  workspace_premium
                </span>
                <span className="text-on-surface-variant">
                  Swiss Manufacture Standard
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="material-symbols-outlined text-secondary text-base">
                  location_city
                </span>
                <span className="text-on-surface-variant">
                  Geneva, Switzerland
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
