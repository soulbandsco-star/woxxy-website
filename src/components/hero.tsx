"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import BotanicalSprig from "./woxxy-mark";
import Botanicals from "./botanicals";
import Magnetic from "./magnetic";

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

const ease = [0.16, 1, 0.3, 1] as const;

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
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

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const sprigLeftY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const sprigRightY = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const wMarkY = useTransform(scrollYProgress, [0, 1], [0, -30]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* W mark — centered embossed backdrop behind all content,
          like the watermark on the Woxxy product label. */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2.5, delay: 0, ease }}
        style={{ y: wMarkY }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <motion.div
          animate={{ scale: [1, 1.012, 1] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src="/w-mark.png"
            alt=""
            width={1254}
            height={1254}
            className="max-w-none object-contain
              w-[85vw] h-[85vw]
              sm:w-[75vw] sm:h-[75vw]
              md:w-[70vh] md:h-[70vh]
              lg:w-[75vh] lg:h-[75vh]
              opacity-[0.12] sm:opacity-[0.14] md:opacity-[0.17]"
            style={{ mixBlendMode: "multiply" }}
            aria-hidden="true"
            priority
          />
        </motion.div>
      </motion.div>

      {/* Botanical sprig — left side */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.5, delay: 0.3 }}
        style={{ y: sprigLeftY }}
        className="absolute -left-12 md:left-8 top-[15%] pointer-events-none"
      >
        <BotanicalSprig
          size={340}
          className="opacity-[0.06] -rotate-12"
          color="var(--rosegold-line)"
          animate={true}
        />
      </motion.div>

      {/* Botanical sprig — right side (desktop only, behind the W) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.5, delay: 0.6 }}
        style={{ y: sprigRightY }}
        className="absolute -right-12 md:right-8 bottom-[10%] pointer-events-none hidden md:block"
      >
        <BotanicalSprig
          size={280}
          className="opacity-[0.05] rotate-[195deg]"
          color="var(--rosegold-line)"
          animate={true}
        />
      </motion.div>

      {/* Floating botanicals */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1.2 }}
        className="absolute inset-0"
      >
        <Botanicals />
      </motion.div>

      {/* Content — offset left on desktop to compose with the giant W */}
      <div className="relative z-10 text-center md:text-left px-6 max-w-4xl mx-auto md:ml-[8%] lg:ml-[10%] md:mr-auto">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease }}
          className="eyebrow text-burgundy-soft mb-6 md:mb-8"
        >
          Premium Skincare
        </motion.p>

        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-burgundy tracking-[0.04em] leading-[1.1] mb-6 md:mb-8">
          <span className="overflow-hidden inline-block">
            <motion.span
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, delay: 0.4, ease }}
              className="inline-block mr-[0.25em]"
            >
              Skincare,
            </motion.span>
          </span>
          <span className="overflow-hidden inline-block">
            <motion.span
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, delay: 0.6, ease }}
              className="inline-block font-serif italic text-rose-dusty"
            >
              refined.
            </motion.span>
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease }}
          className="text-ink/55 text-base md:text-lg max-w-lg md:mx-0 mx-auto leading-relaxed mb-10 md:mb-12 font-sans"
        >
          Effective, gentle, and beautifully designed. Everyday self-care,
          elevated into something you look forward to.
        </motion.p>

        {/* CTAs — primary pill + secondary understated link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1, ease }}
          className="flex flex-col sm:flex-row items-center md:items-start gap-5 sm:gap-6"
        >
          {/* Primary CTA */}
          <Magnetic strength={0.2}>
            <button
              onClick={() => scrollTo("#products")}
              className="group relative h-[54px] px-9 bg-burgundy text-cream-on-dark rounded-full text-sm tracking-[0.14em] uppercase font-sans font-medium overflow-hidden transition-all duration-400 hover:shadow-xl hover:shadow-burgundy/20 hover:-translate-y-0.5"
            >
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
              <span className="relative z-10">Explore Products</span>
            </button>
          </Magnetic>

          {/* Secondary CTA — understated icon + text with animated underline */}
          <a
            href="https://www.instagram.com/woxxyskincare/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 py-3 text-burgundy/70 hover:text-burgundy transition-colors duration-300"
          >
            <InstagramIcon className="w-[18px] h-[18px]" />
            <span className="relative text-sm tracking-[0.08em] font-sans">
              Follow on Instagram
              <span
                className="absolute -bottom-0.5 left-0 h-[1px] w-0 group-hover:w-full transition-all duration-400"
                style={{ backgroundColor: "var(--rosegold-line)" }}
              />
            </span>
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-burgundy-soft/35 text-[10px] tracking-[0.3em] uppercase font-sans">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-[1px] h-8 bg-gradient-to-b from-burgundy-soft/25 to-transparent"
          />
        </div>
      </motion.div>
    </section>
  );
}
