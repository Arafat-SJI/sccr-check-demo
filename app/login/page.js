"use client";

import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [notice, setNotice] = useState("");

  function showNotice(msg, autoHide) {
    setNotice(msg);
    if (autoHide) {
      setTimeout(() => setNotice(""), 3500);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    showNotice("Authenticating with Horologe Geneva Atelier Registry...", true);
  }

  return (
    <main className="w-full min-h-screen bg-background flex items-center justify-center">
      <div className="relative w-full py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[720px] bg-gradient-to-tr from-surface-container via-surface-container-low to-surface-bright rounded-full blur-3xl opacity-60 pointer-events-none -z-10" />

        <div className="w-full max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-12 items-center">
          <div className="lg:col-span-5 flex flex-col justify-between space-y-10 lg:pr-6">
            <div className="space-y-6">
              <Link
                href="/"
                className="inline-flex items-center gap-2 font-label-caps text-label-caps uppercase tracking-widest text-on-surface-variant hover:text-on-surface transition-colors"
              >
                <span className="material-symbols-outlined text-[16px]">
                  arrow_back
                </span>
                Back to Maison
              </Link>
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-surface-container text-on-surface-variant rounded-full">
                <span
                  className="material-symbols-outlined text-secondary"
                  style={{ fontSize: 16 }}
                >
                  verified_user
                </span>
                <span className="font-label-caps text-label-caps tracking-widest uppercase text-secondary">
                  Geneva Registry Protocol
                </span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                Perpetual provenance in one secured sanctuary.
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Your private vault preserves immutable archives of acquisition,
                digital certificates of authenticity (C.O.S.C.), warranty
                milestones, and discrete concierge access to master horologists.
              </p>
            </div>

            <div className="relative p-6 bg-surface-container-low rounded-xl flex items-center space-x-5 shadow-sm">
              <div className="relative flex-shrink-0 w-14 h-14 bg-surface-container-highest rounded-full flex items-center justify-center text-on-surface">
                <svg
                  className="w-10 h-10 animate-[spin_16s_linear_infinite]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 100 100"
                >
                  <circle
                    className="text-outline-variant"
                    cx="50"
                    cy="50"
                    r="45"
                    strokeDasharray="4 4"
                    strokeWidth="1.5"
                  />
                  <circle
                    className="text-secondary"
                    cx="50"
                    cy="50"
                    r="32"
                    strokeWidth="2"
                  />
                  <line strokeWidth="1.5" x1="50" x2="50" y1="18" y2="82" />
                  <line strokeWidth="1.5" x1="18" x2="82" y1="50" y2="50" />
                  <circle cx="50" cy="50" fill="currentColor" r="7" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest">
                  Vault Status: Synchronized
                </span>
                <span className="font-title-md text-title-md text-on-surface">
                  Calibre Horloger Secure Crypt
                </span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  Bespoke 256-bit hardware enclave
                </span>
              </div>
            </div>

            <div className="flex items-center space-x-6 text-on-surface-variant font-body-sm text-body-sm">
              <div className="flex items-center space-x-2">
                <span
                  className="material-symbols-outlined text-on-surface"
                  style={{ fontSize: 18 }}
                >
                  lock
                </span>
                <span>Zero-Knowledge Vault</span>
              </div>
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-outline-variant" />
              <div className="flex items-center space-x-2">
                <span
                  className="material-symbols-outlined text-on-surface"
                  style={{ fontSize: 18 }}
                >
                  fingerprint
                </span>
                <span>FIDO2 Passkey Tier</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-surface-container-lowest shadow-xl rounded-xl p-8 sm:p-12 transition-all duration-300 relative">
              <div className="absolute top-0 right-12 w-24 h-1 bg-secondary rounded-b-full" />

              <div className="flex flex-col items-center text-center space-y-4 mb-8">
                <div className="h-14 flex items-center justify-center mb-2">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt="Horologe Genève Logo"
                    className="h-10 object-contain"
                    src="/stitch/logo.svg"
                  />
                </div>
                <div className="space-y-1">
                  <h1 className="font-headline-md text-headline-md text-on-surface">
                    Client Atelier Portal
                  </h1>
                  <p className="font-body-sm text-body-sm text-on-surface-variant max-w-sm mx-auto">
                    Sign in to manage your timepiece collection, certificates of
                    authenticity, and private boutique appointments.
                  </p>
                </div>
              </div>

              <div className="mb-8">
                <button
                  className="group relative w-full flex items-center justify-center space-x-3 py-3.5 px-5 bg-surface-container-low hover:bg-surface-container transition-all duration-200 rounded-lg text-on-surface"
                  type="button"
                  onClick={() => {
                    showNotice(
                      "Querying biometric hardware authenticators...",
                      false,
                    );
                    setTimeout(() => {
                      showNotice(
                        "Biometric authentication confirmed. Establishing secure Swiss vault handshake...",
                        true,
                      );
                    }, 1200);
                  }}
                >
                  <span
                    className="material-symbols-outlined text-secondary group-hover:scale-110 transition-transform duration-200"
                    style={{ fontSize: 22 }}
                  >
                    fingerprint
                  </span>
                  <span className="font-title-md text-title-md tracking-wide">
                    Sign in with Passkey / Face ID
                  </span>
                  <span className="absolute right-4 px-2 py-0.5 bg-surface-container-high rounded text-[10px] font-label-caps uppercase tracking-wider text-on-surface-variant">
                    Instant
                  </span>
                </button>

                <div className="relative my-8 text-center">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full bg-surface-container-high h-px" />
                  </div>
                  <div className="relative flex justify-center">
                    <span className="bg-surface-container-lowest px-4 font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">
                      or client credentials
                    </span>
                  </div>
                </div>
              </div>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <label
                      className="font-label-caps text-label-caps uppercase text-on-surface-variant tracking-wider"
                      htmlFor="clientEmail"
                    >
                      Client Email
                    </label>
                    <span className="font-body-sm text-body-sm text-outline hidden sm:inline">
                      e.g. client@geneve.ch
                    </span>
                  </div>
                  <div className="relative flex items-center">
                    <span
                      className="absolute left-4 material-symbols-outlined text-outline-variant pointer-events-none"
                      style={{ fontSize: 20 }}
                    >
                      alternate_email
                    </span>
                    <input
                      className="w-full pl-11 pr-4 py-3 bg-surface-container-low focus:bg-surface-container-lowest text-on-surface font-body-md text-body-md rounded-lg focus:outline-none focus:ring-1 focus:ring-secondary transition-all placeholder:text-outline-variant"
                      id="clientEmail"
                      placeholder="patron@horologe-geneve.com"
                      required
                      type="email"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <label
                      className="font-label-caps text-label-caps uppercase text-on-surface-variant tracking-wider"
                      htmlFor="clientKey"
                    >
                      Passphrase
                    </label>
                    <a
                      className="font-body-sm text-body-sm text-secondary hover:text-on-secondary-container transition-colors"
                      href="#reset-vault"
                    >
                      Forgot Passphrase?
                    </a>
                  </div>
                  <div className="relative flex items-center">
                    <span
                      className="absolute left-4 material-symbols-outlined text-outline-variant pointer-events-none"
                      style={{ fontSize: 20 }}
                    >
                      key
                    </span>
                    <input
                      className="w-full pl-11 pr-11 py-3 bg-surface-container-low focus:bg-surface-container-lowest text-on-surface font-body-md text-body-md rounded-lg focus:outline-none focus:ring-1 focus:ring-secondary transition-all placeholder:text-outline-variant"
                      id="clientKey"
                      placeholder="••••••••••••••••"
                      required
                      type={showPassword ? "text" : "password"}
                    />
                    <button
                      aria-label="Toggle password visibility"
                      className="absolute right-3 p-1 text-outline-variant hover:text-on-surface transition-colors"
                      type="button"
                      onClick={() => setShowPassword((v) => !v)}
                    >
                      <span
                        className="material-symbols-outlined"
                        style={{ fontSize: 20 }}
                      >
                        {showPassword ? "visibility_off" : "visibility"}
                      </span>
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-1">
                  <label className="flex items-center space-x-3 cursor-pointer select-none">
                    <input
                      className="w-4 h-4 rounded bg-surface-container-low text-primary focus:ring-0 focus:outline-none cursor-pointer"
                      id="rememberDevice"
                      type="checkbox"
                    />
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      Remember this trusted device
                    </span>
                  </label>
                  <div
                    className="flex items-center space-x-1 text-on-surface-variant"
                    title="Encrypted session stored securely"
                  >
                    <span
                      className="material-symbols-outlined"
                      style={{ fontSize: 14 }}
                    >
                      shield
                    </span>
                    <span className="font-label-caps text-label-caps text-outline uppercase">
                      30-day token
                    </span>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    className="w-full py-4 px-6 bg-primary text-on-primary hover:bg-secondary transition-all duration-300 rounded-lg flex items-center justify-center space-x-3 group shadow-md"
                    type="submit"
                  >
                    <span className="font-label-caps text-label-caps uppercase tracking-widest text-on-primary">
                      Access Atelier Account
                    </span>
                    <span
                      className="material-symbols-outlined text-on-primary group-hover:translate-x-1 transition-transform duration-200"
                      style={{ fontSize: 18 }}
                    >
                      arrow_forward
                    </span>
                  </button>
                </div>
              </form>

              {notice ? (
                <div className="mt-4 p-3 bg-surface-container text-on-surface rounded font-body-sm text-body-sm flex items-center space-x-2">
                  <span
                    className="material-symbols-outlined text-secondary"
                    style={{ fontSize: 18 }}
                  >
                    info
                  </span>
                  <span>{notice}</span>
                </div>
              ) : null}

              <div className="mt-8 pt-6 bg-surface-container-low/50 -mx-8 -mb-8 sm:-mx-12 sm:-mb-12 p-6 rounded-b-xl flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
                <div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Not yet registered with the Maison?
                  </p>
                  <p className="font-title-md text-title-md text-on-surface">
                    Acquire timepiece membership
                  </p>
                </div>
                <Link
                  className="inline-flex items-center space-x-1.5 px-4 py-2 bg-surface-container-highest hover:bg-secondary hover:text-on-secondary text-on-surface rounded font-label-caps text-label-caps uppercase tracking-wider transition-colors duration-200"
                  href="/register"
                >
                  <span>Create Atelier Account</span>
                  <span
                    className="material-symbols-outlined"
                    style={{ fontSize: 14 }}
                  >
                    north_east
                  </span>
                </Link>
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4 text-center">
              <div className="flex items-center space-x-2 text-on-surface-variant">
                <span
                  className="material-symbols-outlined text-secondary"
                  style={{ fontSize: 16 }}
                >
                  enhanced_encryption
                </span>
                <span className="font-label-caps text-label-caps tracking-widest uppercase">
                  256-bit Swiss Encrypted Horological Registry & Vault
                </span>
              </div>
              <span className="hidden sm:inline text-outline-variant">•</span>
              <span className="font-label-caps text-label-caps text-outline uppercase tracking-wider">
                ISO/IEC 27001
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
