"use client";

import { useState, useRef, useEffect } from "react";

// ── Icons ──────────────────────────────────────────────────────────────────────
const InstagramIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
  </svg>
);

const FacebookIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7H10v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TikTokIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.77 0 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 0 0-6.13 8.88 6.34 6.34 0 0 0 11.47-3.59V8.67a8.27 8.27 0 0 0 4.84 1.55V6.78a4.85 4.85 0 0 1-1.07-.09z" />
  </svg>
);

const AppStoreIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
);

const PlayStoreIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M3 20.5v-17c0-.83.94-1.3 1.6-.8l14 8.5c.6.37.6 1.23 0 1.6l-14 8.5c-.66.5-1.6.03-1.6-.8z" />
  </svg>
);

const ChevronDown = ({ open }: { open: boolean }) => (
  <svg
    width="14" height="14" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2"
    style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s ease" }}
  >
    <path d="M6 9l6 6 6-6" />
  </svg>
);

// ── Language data ──────────────────────────────────────────────────────────────
const languages = [
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
];

// ── Shared style helpers ───────────────────────────────────────────────────────
const interLight: React.CSSProperties = {
  fontFamily: "'Inter', sans-serif",
  fontWeight: 300,
  letterSpacing: "0.02em",
};

const libodoni: React.CSSProperties = {
  fontFamily: "'Libre Bodoni', serif",
  fontWeight: 400,
  lineHeight: "100%",
  letterSpacing: "0",
};

// ── Sub-components ─────────────────────────────────────────────────────────────

function AppBadge({ icon, sub, main }: { icon: React.ReactNode; sub: string; main: string }) {
  return (
    <a
      href="#"
      className="flex items-center gap-3 border border-white/25 rounded-xl px-4 py-2.5 hover:border-white/50 transition-colors duration-200"
      style={{ minWidth: "140px" }}
    >
      <span className="text-white">{icon}</span>
      <div>
        <p style={{ ...interLight, fontSize: "9px", letterSpacing: "0.05em", color: "rgba(255,255,255,0.55)" }}>{sub}</p>
        <p style={{ ...interLight, fontSize: "13px", fontWeight: 500, color: "#fff" }}>{main}</p>
      </div>
    </a>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <a
        href={href}
        className="text-white/65 hover:text-white transition-colors duration-200"
        style={{ ...interLight, fontSize: "14px", lineHeight: "100%" }}
      >
        {children}
      </a>
    </li>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-white" style={{ ...libodoni, fontSize: "22px" }}>
      {children}
    </h3>
  );
}

// ── Language dropdown ──────────────────────────────────────────────────────────
function LanguageSelector() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(languages[0]);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-2 border border-white/25 rounded-full px-4 py-2 hover:border-white/45 transition-colors duration-200"
        style={{ ...interLight, fontSize: "13px", color: "rgba(255,255,255,0.75)" }}
      >
        <span>{selected.flag}</span>
        <span>{selected.label}</span>
        <ChevronDown open={open} />
      </button>

      {open && (
        <div
          className="absolute bottom-full mb-2 left-0 min-w-full rounded-xl overflow-hidden z-50"
          style={{ background: "rgba(30,32,48,0.97)", border: "1px solid rgba(255,255,255,0.12)" }}
        >
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => { setSelected(lang); setOpen(false); }}
              className="w-full flex items-center gap-3 px-4 py-3 hover:bg-white/10 transition-colors duration-150 text-left"
              style={{
                ...interLight,
                fontSize: "13px",
                color: selected.code === lang.code ? "#fff" : "rgba(255,255,255,0.65)",
              }}
            >
              <span>{lang.flag}</span>
              <span>{lang.label}</span>
              {selected.code === lang.code && (
                <svg className="ml-auto" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 13l4 4L19 7" />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// ── Newsletter block ───────────────────────────────────────────────────────────
function Newsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <div className="flex flex-col gap-5">
      <SectionTitle>Subscribe To Our Newsletter</SectionTitle>
      <p style={{ ...interLight, fontSize: "14px", color: "rgba(255,255,255,0.65)", lineHeight: "1.55" }}>
        Get travel tips and exclusive offers delivered to your inbox.
      </p>

      {/* Input row */}
      <div
        className="flex items-center"
        style={{
          background: "rgba(255,255,255,0.07)",
          border: "1px solid rgba(255,255,255,0.15)",
          borderRadius: "100px",
          padding: "4px 4px 4px 16px",
        }}
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSubscribe()}
          placeholder="Enter Email"
          className="bg-transparent flex-1 outline-none min-w-0 text-white placeholder-white/30"
          style={{ ...interLight, fontSize: "13px" }}
        />
        <button
          onClick={handleSubscribe}
          className="shrink-0 text-white hover:opacity-90 active:scale-95 transition-all"
          style={{
            width: "100px",
            height: "35px",
            borderRadius: "100px",
            background: subscribed
              ? "linear-gradient(90deg,#6fcf97 0%,#a8e6cf 100%)"
              : "linear-gradient(90deg,#8F9CD3 0%,#FFCAA4 100%)",
            fontFamily: "'Inter', sans-serif",
            fontSize: "13px",
            fontWeight: 500,
            border: "none",
            cursor: "pointer",
            transition: "background 0.4s ease",
          }}
        >
          {subscribed ? "Done ✓" : "Subscribe"}
        </button>
      </div>

      {/* Disclaimer */}
      <p style={{ ...interLight, fontSize: "12px", color: "rgba(255,255,255,0.45)", lineHeight: "1.65" }}>
        By subscribing, you agree to receive marketing emails from TransitStay. You can unsubscribe at any time. Read our{" "}
        <a href="#" className="underline text-white/70 hover:text-white transition-colors duration-200">
          Privacy Policy
        </a>{" "}
        to learn how we handle your data.
      </p>
    </div>
  );
}

// ── Main Footer ────────────────────────────────────────────────────────────────
export default function Footer() {
  const quickLinks = [
    { label: "My Moodboards", href: "#" },
    { label: "Search Discovery", href: "#" },
    { label: "Magazine", href: "#" },
    { label: "About Us", href: "#" },
  ];

  const legalLinks = [
    { label: "Contact Us", href: "#" },
    { label: "Security", href: "#" },
    { label: "Data Deletion", href: "#" },
    { label: "Privacy Policy", href: "#" },
  ];

  const socialLinks = [
    { icon: <InstagramIcon />, href: "#", label: "Instagram" },
    { icon: <FacebookIcon />, href: "#", label: "Facebook" },
    { icon: <LinkedInIcon />, href: "#", label: "LinkedIn" },
    { icon: <TikTokIcon />, href: "#", label: "TikTok" },
  ];

  return (
    <footer
      className="relative w-full"
      style={{
        background:
          "linear-gradient(310.6deg, #000000 28.25%, #8E97B4 87.82%), linear-gradient(0deg, rgba(0,0,0,0.2), rgba(0,0,0,0.2))",
        backgroundBlendMode: "normal",
      }}
    >
      {/* ── MOBILE layout  (< 768px) ─────────────────────────────────────────── */}
      <div className="block md:hidden px-5 pt-14 pb-10">
        {/* Brand */}
        <div className="mb-8">
          <p className="text-white" style={{ ...libodoni, fontSize: "28px" }}>
            <em>transit</em>stay
          </p>
          <p style={{ ...interLight, fontSize: "9px", letterSpacing: "0.28em", color: "rgba(255,255,255,0.55)", marginTop: "4px" }}>
            DISCOVER SMART
          </p>
        </div>

        <p style={{ ...interLight, fontSize: "14px", color: "rgba(255,255,255,0.65)", lineHeight: "1.6", marginBottom: "24px" }}>
          Your trusted companion for personalized travel suggestions. You can also get the mobile application
        </p>

        {/* App badges — side by side on mobile */}
        <div className="flex gap-3 mb-10 flex-wrap">
          <AppBadge icon={<AppStoreIcon />} sub="Download On" main="App Store" />
          <AppBadge icon={<PlayStoreIcon />} sub="Get It On" main="Google Play" />
        </div>

        {/* Quick Links + Contact & Legal in 2-column grid */}
        <div className="grid grid-cols-2 gap-8 mb-10">
          <div className="flex flex-col gap-5">
            <SectionTitle>Quick Links</SectionTitle>
            <ul className="flex flex-col gap-4">
              {quickLinks.map((l) => <NavLink key={l.label} href={l.href}>{l.label}</NavLink>)}
            </ul>
          </div>
          <div className="flex flex-col gap-5">
            <SectionTitle>Contact &amp; Legal</SectionTitle>
            <ul className="flex flex-col gap-4">
              {legalLinks.map((l) => <NavLink key={l.label} href={l.href}>{l.label}</NavLink>)}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mb-10">
          <Newsletter />
        </div>

        {/* Social icons */}
        <div className="flex gap-5 mb-2">
          {socialLinks.map((s) => (
            <a key={s.label} href={s.href} aria-label={s.label} className="text-white/55 hover:text-white transition-colors duration-200">
              {s.icon}
            </a>
          ))}
        </div>
      </div>

      {/* ── TABLET layout  (768px – 1023px) ──────────────────────────────────── */}
      <div className="hidden md:block lg:hidden px-8 pt-16 pb-10">
        <div className="grid grid-cols-2 gap-x-12 gap-y-12">
          {/* Left col: Brand + newsletter + social */}
          <div className="flex flex-col gap-7">
            {/* Brand */}
            <div>
              <p className="text-white" style={{ ...libodoni, fontSize: "30px" }}>
                <em>transit</em>stay
              </p>
              <p style={{ ...interLight, fontSize: "9px", letterSpacing: "0.28em", color: "rgba(255,255,255,0.55)", marginTop: "4px" }}>
                DISCOVER SMART
              </p>
            </div>
            <p style={{ ...interLight, fontSize: "14px", color: "rgba(255,255,255,0.65)", lineHeight: "1.6" }}>
              Your trusted companion for personalized travel suggestions. You can also get the mobile application
            </p>
            {/* App badges */}
            <div className="flex gap-3 flex-wrap">
              <AppBadge icon={<AppStoreIcon />} sub="Download On" main="App Store" />
              <AppBadge icon={<PlayStoreIcon />} sub="Get It On" main="Google Play" />
            </div>

            {/* Newsletter */}
            <Newsletter />

            {/* Social */}
            <div className="flex gap-5">
              {socialLinks.map((s) => (
                <a key={s.label} href={s.href} aria-label={s.label} className="text-white/55 hover:text-white transition-colors duration-200">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right col: Quick Links + More */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 content-start">
            <div className="flex flex-col gap-5">
              <SectionTitle>Quick Links</SectionTitle>
              <ul className="flex flex-col gap-4">
                {quickLinks.map((l) => <NavLink key={l.label} href={l.href}>{l.label}</NavLink>)}
              </ul>
            </div>
            <div className="flex flex-col gap-5">
              <SectionTitle>Contact &amp; Legal</SectionTitle>
              <ul className="flex flex-col gap-4">
                {legalLinks.map((l) => <NavLink key={l.label} href={l.href}>{l.label}</NavLink>)}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ── DESKTOP layout  (≥ 1024px) ───────────────────────────────────────── */}
      <div className="hidden lg:block max-w-[1342px] mx-auto px-10 pt-20 pb-16">
        <div className="grid grid-cols-4 gap-10 xl:gap-16">

          {/* Brand column */}
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-white" style={{ ...libodoni, fontSize: "30px" }}>
                <em>transit</em>stay
              </p>
              <p style={{ ...interLight, fontSize: "9px", letterSpacing: "0.28em", color: "rgba(255,255,255,0.55)", marginTop: "4px" }}>
                DISCOVER SMART
              </p>
            </div>
            <p style={{ ...interLight, fontSize: "14px", color: "rgba(255,255,255,0.65)", lineHeight: "1.6" }}>
              Your trusted companion for personalized travel suggestions. You can also get the mobile application
            </p>
            <div className="flex flex-col gap-3">
              <AppBadge icon={<AppStoreIcon />} sub="Download On" main="App Store" />
              <AppBadge icon={<PlayStoreIcon />} sub="Get It On" main="Google Play" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-6">
            <SectionTitle>Quick Links</SectionTitle>
            <ul className="flex flex-col gap-5">
              {quickLinks.map((l) => <NavLink key={l.label} href={l.href}>{l.label}</NavLink>)}
            </ul>
          </div>

          {/* Contact & Legal */}
          <div className="flex flex-col gap-6">
            <SectionTitle>Contact &amp; Legal</SectionTitle>
            <ul className="flex flex-col gap-5">
              {legalLinks.map((l) => <NavLink key={l.label} href={l.href}>{l.label}</NavLink>)}
            </ul>
          </div>

          {/* Newsletter */}
          <Newsletter />
        </div>

        {/* Social icons */}
        <div className="flex justify-end gap-4 mt-14">
          {socialLinks.map((s) => (
            <a key={s.label} href={s.href} aria-label={s.label} className="text-white/55 hover:text-white transition-colors duration-200 p-1.5">
              {s.icon}
            </a>
          ))}
        </div>
      </div>

      {/* ── Divider ───────────────────────────────────────────────────────────── */}
      <div className="border-t border-white/15 mx-5 md:mx-8" />

      {/* ── Bottom bar ────────────────────────────────────────────────────────── */}
      <div className="px-5 md:px-8 lg:max-w-[1342px] lg:mx-auto py-6 flex flex-col items-center gap-4 md:flex-row md:justify-between">
        <p style={{ ...interLight, fontSize: "13px", color: "rgba(255,255,255,0.5)" }}>
          © 2025 TransitStay. All rights reserved.
        </p>

        {/* Desktop: Terms & Privacy side-by-side; mobile: stacked */}
        <div className="flex gap-6">
          <a href="#" style={{ ...interLight, fontSize: "13px", color: "rgba(255,255,255,0.5)" }}
            className="hover:text-white/80 transition-colors duration-200">
            Terms of Service
          </a>
          <a href="#" style={{ ...interLight, fontSize: "13px", color: "rgba(255,255,255,0.5)" }}
            className="hover:text-white/80 transition-colors duration-200 hidden md:inline">
            Privacy Policy
          </a>
        </div>

        <LanguageSelector />
      </div>
    </footer>
  );
}