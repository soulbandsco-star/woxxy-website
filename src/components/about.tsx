"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import BotanicalSprig from "./woxxy-mark";

const ease = [0.16, 1, 0.3, 1] as const;

const pillars = [
  {
    title: "Premium",
    description: "Quality ingredients, thoughtfully formulated.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8">
        <path d="M16 6C16 6 10 12 10 18C10 22 12 26 16 26C20 26 22 22 22 18C22 12 16 6 16 6Z" stroke="var(--burgundy)" strokeWidth="1.2" fill="none" />
        <line x1="16" y1="10" x2="16" y2="26" stroke="var(--burgundy)" strokeWidth="0.6" opacity="0.3" />
        <path d="M16 14C14 16 13 18 12.5 20" stroke="var(--burgundy-soft)" strokeWidth="0.6" opacity="0.3" fill="none" />
        <path d="M16 14C18 16 19 18 19.5 20" stroke="var(--burgundy-soft)" strokeWidth="0.6" opacity="0.3" fill="none" />
      </svg>
    ),
  },
  {
    title: "Elegant",
    description: "Design that elevates your everyday.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8">
        <path d="M8 24C8 24 10 8 24 6" stroke="var(--burgundy)" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        <path d="M8 24C8 24 14 14 24 6" stroke="var(--burgundy-soft)" strokeWidth="0.8" opacity="0.3" fill="none" />
        <path d="M10 22C12 18 16 12 22 8" stroke="var(--burgundy)" strokeWidth="0.5" opacity="0.2" fill="none" />
        <circle cx="8" cy="24" r="1.5" fill="var(--burgundy)" opacity="0.25" />
      </svg>
    ),
  },
  {
    title: "Clean",
    description: "Gentle, considered, made with care.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8">
        <line x1="16" y1="4" x2="16" y2="28" stroke="var(--burgundy)" strokeWidth="0.8" opacity="0.3" />
        <path d="M16 10C16 10 10 8 8 12C6 16 12 18 16 14" stroke="var(--burgundy)" strokeWidth="1.2" fill="none" />
        <path d="M16 18C16 18 22 16 24 20C26 24 20 26 16 22" stroke="var(--burgundy)" strokeWidth="1.2" fill="none" />
        <path d="M16 10L10 12" stroke="var(--burgundy-soft)" strokeWidth="0.5" opacity="0.3" />
        <path d="M16 18L22 20" stroke="var(--burgundy-soft)" strokeWidth="0.5" opacity="0.3" />
      </svg>
    ),
  },
];

const pillarContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const pillarVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const sprigY = useTransform(scrollYProgress, [0, 1], [40, -50]);
  const sprigRotate = useTransform(scrollYProgress, [0, 1], [-5, 8]);

  return (
    <section
      id="our-story"
      ref={sectionRef}
      className="py-24 md:py-32 relative overflow-hidden"
    >
      {/* Faint W mark — brand continuity */}
      <motion.div
        style={{ y: sprigY }}
        className="absolute -left-[5%] top-[10%] pointer-events-none"
      >
        <Image
          src="/w-mark.png"
          alt=""
          width={350}
          height={350}
          className="w-[280px] h-[280px] md:w-[350px] md:h-[350px] object-contain opacity-[0.03]"
          style={{ mixBlendMode: "multiply" }}
          aria-hidden="true"
        />
      </motion.div>

      {/* Botanical sprig — tone-on-tone, bottom-right framing */}
      <motion.div
        style={{ y: sprigY, rotate: sprigRotate }}
        className="absolute -right-8 bottom-[5%] pointer-events-none"
      >
        <BotanicalSprig
          size={480}
          className="opacity-[0.04]"
          color="var(--rosegold-line)"
          strokeWidth={1.0}
        />
      </motion.div>

      <div className="max-w-5xl mx-auto px-6 md:px-10 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.8, ease }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="eyebrow text-burgundy-soft mb-4">Our Story</p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-light text-burgundy tracking-[0.02em]">
            The <span className="font-serif italic text-rose-dusty">Woxxy</span> way
          </h2>
        </motion.div>

        {/* Brand story — framed ivory inset panel with rose-gold hairline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15px" }}
          transition={{ duration: 0.8, delay: 0.1, ease }}
          className="mb-14 md:mb-18"
        >
          <div
            className="max-w-3xl mx-auto text-center rounded-2xl px-8 py-10 md:px-14 md:py-14"
            style={{
              backgroundColor: "var(--cream-card)",
              border: "1px solid rgba(217,169,158,0.18)",
              boxShadow: "0 2px 20px rgba(74,35,41,0.03)",
            }}
          >
            <div className="text-rosegold-line/40 text-5xl md:text-6xl font-serif leading-none mb-4">
              &ldquo;
            </div>
            <p className="font-serif italic text-xl sm:text-2xl md:text-[1.7rem] text-burgundy leading-relaxed md:leading-relaxed tracking-wide">
              Woxxy is a premium skincare brand focused on creating effective,
              gentle, and aesthetically beautiful products for modern consumers.
              We combine quality ingredients with elegant design to make everyday
              self-care feel luxurious and effortless.
            </p>
            <div className="text-rosegold-line/40 text-5xl md:text-6xl font-serif leading-none mt-4 rotate-180">
              &ldquo;
            </div>
          </div>
        </motion.div>

        {/* Three brand pillars */}
        <motion.div
          variants={pillarContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mb-12 md:mb-16"
        >
          {pillars.map((pillar) => (
            <motion.div
              key={pillar.title}
              variants={pillarVariants}
              className="text-center group"
            >
              <div className="mb-3 flex justify-center transition-transform duration-500 group-hover:scale-110">
                {pillar.icon}
              </div>
              <h3 className="font-display text-2xl text-burgundy mb-2 tracking-[0.03em]">
                {pillar.title}
              </h3>
              <p className="text-ink/50 font-sans text-sm leading-relaxed max-w-xs mx-auto">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* International expansion strip */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10px" }}
          transition={{ duration: 0.7, ease }}
          className="text-center"
        >
          <div
            className="inline-flex items-center gap-3 md:gap-4 rounded-full px-8 py-3.5"
            style={{ border: "1px solid rgba(217,169,158,0.18)" }}
          >
            <span className="eyebrow text-burgundy-soft/50 text-[11px]">Coming soon to</span>
            <span className="w-[1px] h-4 bg-rosegold-line/20" />
            <div className="flex items-center gap-3 md:gap-5">
              {["UK", "USA", "Singapore"].map((country, i) => (
                <span key={country} className="flex items-center gap-3 md:gap-5">
                  <span className="eyebrow text-burgundy/60 text-[11px]">{country}</span>
                  {i < 2 && <span className="text-rosegold-line/30 text-xs">&#xb7;</span>}
                </span>
              ))}
            </div>
            <motion.span
              animate={{ opacity: [0.25, 0.8, 0.25] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-rose-dusty/50"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
