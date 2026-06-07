"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

function scrollTo(id: string) {
  const lenis = (
    window as unknown as Record<
      string,
      { scrollTo: (target: string, options?: Record<string, unknown>) => void }
    >
  ).__lenis;
  if (lenis) {
    lenis.scrollTo(id, { offset: -80 });
  }
}

function InstagramIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

const links = [
  { label: "Products", href: "#products" },
  { label: "Our Story", href: "#our-story" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-burgundy-deep relative overflow-hidden mt-8">
      {/* Large W watermark — rose-gold glow on burgundy */}
      <motion.div
        animate={{ scale: [1, 1.02, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[-10%] top-[-20%] w-[500px] h-[500px] md:w-[600px] md:h-[600px] pointer-events-none"
      >
        <Image
          src="/w-mark.png"
          alt=""
          width={600}
          height={600}
          className="w-full h-full object-contain opacity-[0.07]"
          aria-hidden="true"
        />
      </motion.div>

      <div className="max-w-6xl mx-auto px-6 md:px-10 pt-16 pb-12 md:pt-20 md:pb-14 relative z-10">
        {/* Upper footer — staggered entrance */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
        >
          {/* Brand lockup + tagline */}
          <div className="flex flex-col items-center md:items-start mb-10">
            <div className="flex items-center gap-3 mb-3">
              <Image
                src="/w-mark.png"
                alt="Woxxy"
                width={40}
                height={40}
                className="w-9 h-9 md:w-10 md:h-10 brightness-[1.8]"
              />
              <span className="font-display text-2xl tracking-[0.3em] text-cream-on-dark font-light">
                WOXXY
              </span>
            </div>
            <p className="text-cream-on-dark/60 font-sans text-sm max-w-sm leading-relaxed text-center md:text-left">
              Effective, gentle, and beautifully designed skincare. Everyday
              self-care, elevated.
            </p>
          </div>

          {/* Nav links row */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease }}
            className="flex flex-wrap items-center justify-center md:justify-start gap-8 mb-10"
          >
            {links.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-cream-on-dark/60 hover:text-rosegold-line text-sm tracking-[0.12em] uppercase font-sans transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-rosegold-line/50 transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
            <a
              href="https://www.instagram.com/woxxyskincare/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream-on-dark/60 hover:text-rosegold-line transition-colors duration-300"
            >
              <InstagramIcon />
            </a>
          </motion.div>
        </motion.div>

        {/* Rose-gold hairline divider */}
        <div
          className="w-full h-[1px] mb-8"
          style={{ backgroundColor: "rgba(217,169,158,0.12)" }}
        />

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease }}
          className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-sans"
        >
          <p className="text-cream-on-dark/50">
            &copy; 2026 Woxxy Skincare. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <span className="tracking-[0.15em] uppercase text-[10px] text-cream-on-dark/50">
              Coming soon to
            </span>
            {["UK", "USA", "Singapore"].map((country, i) => (
              <span key={country} className="flex items-center gap-3">
                <span className="tracking-[0.15em] uppercase text-[10px] text-cream-on-dark/55">
                  {country}
                </span>
                {i < 2 && (
                  <span style={{ color: "rgba(217,169,158,0.45)" }}>&#xb7;</span>
                )}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
