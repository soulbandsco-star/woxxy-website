"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Magnetic from "./magnetic";

const links = [
  { label: "Products", href: "#products" },
  { label: "Our Story", href: "#our-story" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

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

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-silk-1/90 backdrop-blur-xl border-b border-rosegold-line/8 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-16 md:h-20">
          {/* Brand lockup: framed W mark (PNG) + WOXXY wordmark */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0 });
            }}
            className="relative z-10 flex items-center gap-2.5 px-4 py-2 rounded-lg group transition-all duration-500"
            style={{
              border: "1px solid rgba(217,169,158,0.25)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(217,169,158,0.5)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(217,169,158,0.25)";
            }}
          >
            <Image
              src="/w-mark.png"
              alt="Woxxy"
              width={64}
              height={64}
              className="w-7 h-7 md:w-8 md:h-8"
              priority
            />
            <span className="font-display text-lg md:text-xl tracking-[0.28em] font-medium text-burgundy">
              WOXXY
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <Magnetic key={link.href} strength={0.15}>
                <button
                  onClick={() => scrollTo(link.href)}
                  className="text-sm tracking-[0.12em] uppercase text-ink/70 hover:text-burgundy transition-colors duration-300 relative group font-sans"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-rosegold-line transition-all duration-300 group-hover:w-full" />
                </button>
              </Magnetic>
            ))}
            <Magnetic strength={0.15}>
              <a
                href="https://www.instagram.com/woxxyskincare/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink/70 hover:text-burgundy transition-colors duration-300"
              >
                <InstagramIcon />
              </a>
            </Magnetic>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden relative z-10 w-8 h-8 flex flex-col items-center justify-center gap-1.5 text-burgundy"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
              className="block w-6 h-[1.5px] bg-current origin-center"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-6 h-[1.5px] bg-current"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className="block w-6 h-[1.5px] bg-current origin-center"
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-silk-1/98 backdrop-blur-2xl flex flex-col items-center justify-center"
          >
            <div className="flex flex-col items-center gap-8">
              {links.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{
                    delay: 0.1 + i * 0.1,
                    duration: 0.5,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  onClick={() => {
                    setMenuOpen(false);
                    setTimeout(() => scrollTo(link.href), 300);
                  }}
                  className="text-burgundy font-display text-4xl tracking-[0.1em] hover:text-rose-dusty transition-colors"
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.a
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.4, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                href="https://www.instagram.com/woxxyskincare/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-burgundy hover:text-rose-dusty transition-colors mt-4"
              >
                <InstagramIcon className="w-7 h-7" />
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
