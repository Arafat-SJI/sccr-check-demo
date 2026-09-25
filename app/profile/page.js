"use client";

import { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function ProfilePage() {
  const [fullName, setFullName] = useState("John Doe");
  const [email, setEmail] = useState("john.doe@example.com");
  const [profilePhotoUrl, setProfilePhotoUrl] = useState("/stitch/profile.jpg");

  return (
    <div className="flex flex-col min-h-screen bg-surface text-on-surface">
      <Header />
      <main className="flex-grow pt-20">
        <div className="max-w-3xl mx-auto px-margin md:px-margin-desktop py-space-xl">
          <h1 className="font-headline-lg text-headline-lg mb-space-lg text-center">
            My Profile
          </h1>

          <div className="bg-surface-container-low p-space-xl rounded-lg shadow-md">
            <div className="flex flex-col items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={profilePhotoUrl}
                alt="Profile Avatar"
                className="w-32 h-32 rounded-full object-cover ring-2 ring-primary mb-space-md"
                onError={(e) => {
                  // Fallback to local avatar if provided URL fails
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = "/stitch/profile.jpg";
                }}
              />
              <div className="text-center mb-space-lg">
                <p className="font-headline-sm text-headline-sm leading-tight">
                  {fullName}
                </p>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  {email}
                </p>
              </div>
            </div>

            <div className="h-px w-full bg-surface-container-high my-space-md" />

            <form
              className="grid grid-cols-1 gap-space-lg"
              onSubmit={(e) => e.preventDefault()}
            >
              <div>
                <label
                  htmlFor="fullName"
                  className="block font-label-sm text-label-sm text-on-surface-variant mb-space-xs"
                >
                  Full Name
                </label>
                <input
                  id="fullName"
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full p-2 border border-outline-variant rounded-md bg-surface-container-highest text-on-surface focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="Enter your full name"
                  autoComplete="name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block font-label-sm text-label-sm text-on-surface-variant mb-space-xs"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2 border border-outline-variant rounded-md bg-surface-container-highest text-on-surface focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="you@example.com"
                  autoComplete="email"
                  inputMode="email"
                />
              </div>

              <div>
                <label
                  htmlFor="profilePhotoUrl"
                  className="block font-label-sm text-label-sm text-on-surface-variant mb-space-xs"
                >
                  Profile Photo URL
                </label>
                <input
                  id="profilePhotoUrl"
                  type="url"
                  value={profilePhotoUrl}
                  onChange={(e) => setProfilePhotoUrl(e.target.value)}
                  className="w-full p-2 border border-outline-variant rounded-md bg-surface-container-highest text-on-surface focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="https://example.com/avatar.jpg"
                  inputMode="url"
                />
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs">
                  Tip: Paste a direct image URL to preview instantly.
                </p>
              </div>

              <p className="font-body-sm text-body-sm text-on-surface-variant text-center mt-space-sm">
                Changes are temporary and will reset on page refresh.
              </p>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
