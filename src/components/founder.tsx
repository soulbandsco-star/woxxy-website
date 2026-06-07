"use client";

import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Founder() {
  return (
    <section id="about" className="py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-2xl mx-auto px-6 md:px-10 relative z-10">
        {/* Eyebrow + Name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.8, ease }}
          className="text-center mb-6 md:mb-8"
        >
          <p className="eyebrow text-burgundy-soft mb-3">The Founder</p>
          <h2 className="font-sans text-sm sm:text-base tracking-[0.18em] uppercase text-burgundy mb-1">
            Hitesh Sachdeva
          </h2>
          <p className="font-sans text-[11px] tracking-[0.15em] uppercase text-burgundy-soft/50">
            Founder
          </p>
        </motion.div>

        {/* Blurb */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15px" }}
          transition={{ duration: 0.7, delay: 0.1, ease }}
          className="text-center text-ink/50 font-sans text-sm md:text-base leading-relaxed max-w-md mx-auto mb-7 md:mb-9"
        >
          With over 25 years in the pharmaceutical industry, Hitesh founded
          Woxxy to bring real formulation expertise to everyday skincare.
        </motion.p>

        {/* Hairline rule */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-10px" }}
          transition={{ duration: 0.6, delay: 0.2, ease }}
          className="w-12 h-[1px] mx-auto mb-7 md:mb-9 origin-center"
          style={{ backgroundColor: "var(--rosegold-line)" }}
        />

        {/* Vision pull-quote */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10px" }}
          transition={{ duration: 0.7, delay: 0.25, ease }}
          className="text-center max-w-sm mx-auto"
        >
          <p className="font-serif italic text-base sm:text-lg md:text-xl text-burgundy/85 leading-relaxed tracking-wide">
            &ldquo;Thoughtful formulas, beautiful design, zero compromise.
            This is everyday care, elevated.&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  );
}
