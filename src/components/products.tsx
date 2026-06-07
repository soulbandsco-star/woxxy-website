"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, useScroll } from "framer-motion";
import Magnetic from "./magnetic";

const icons = {
  lip: (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10 md:w-12 md:h-12">
      <path d="M24 8C24 8 14 16 14 26C14 32 18 38 24 38C30 38 34 32 34 26C34 16 24 8 24 8Z" stroke="var(--burgundy)" strokeWidth="1.2" fill="none" />
      <path d="M24 14C24 14 20 20 20 26C20 30 22 34 24 34" stroke="var(--rosegold-line)" strokeWidth="0.8" opacity="0.45" fill="none" />
      <line x1="24" y1="12" x2="24" y2="36" stroke="var(--burgundy)" strokeWidth="0.6" opacity="0.25" />
    </svg>
  ),
  face: (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10 md:w-12 md:h-12">
      <path d="M24 6C24 6 10 18 10 30C10 38 16 42 24 42C32 42 38 38 38 30C38 18 24 6 24 6Z" stroke="var(--burgundy)" strokeWidth="1.2" fill="none" />
      <line x1="24" y1="10" x2="24" y2="40" stroke="var(--burgundy)" strokeWidth="0.8" opacity="0.3" />
      <path d="M24 18C20 22 18 26 17 30" stroke="var(--rosegold-line)" strokeWidth="0.6" opacity="0.35" fill="none" />
      <path d="M24 18C28 22 30 26 31 30" stroke="var(--rosegold-line)" strokeWidth="0.6" opacity="0.35" fill="none" />
    </svg>
  ),
  body: (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10 md:w-12 md:h-12">
      <line x1="24" y1="6" x2="24" y2="42" stroke="var(--burgundy)" strokeWidth="0.8" opacity="0.35" />
      <path d="M24 14C24 14 18 10 14 14C10 18 16 22 24 20" stroke="var(--burgundy)" strokeWidth="1.2" fill="none" />
      <path d="M24 22C24 22 30 18 34 22C38 26 32 30 24 28" stroke="var(--burgundy)" strokeWidth="1.2" fill="none" />
      <path d="M24 30C24 30 18 26 14 30C10 34 16 38 24 36" stroke="var(--burgundy)" strokeWidth="1.2" fill="none" />
      <path d="M24 14L17 14" stroke="var(--rosegold-line)" strokeWidth="0.5" opacity="0.35" />
      <path d="M24 22L31 22" stroke="var(--rosegold-line)" strokeWidth="0.5" opacity="0.35" />
      <path d="M24 30L17 30" stroke="var(--rosegold-line)" strokeWidth="0.5" opacity="0.35" />
    </svg>
  ),
  essentials: (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10 md:w-12 md:h-12">
      <path d="M24 6C24 6 12 20 12 30C12 36.627 17.373 42 24 42C30.627 42 36 36.627 36 30C36 20 24 6 24 6Z" stroke="var(--burgundy)" strokeWidth="1.2" fill="none" />
      <path d="M24 18C24 18 18 26 18 31C18 34 20.5 37 24 37C27.5 37 30 34 30 31C30 26 24 18 24 18Z" stroke="var(--rosegold-line)" strokeWidth="0.8" opacity="0.35" fill="none" />
      <circle cx="20" cy="28" r="1.5" fill="var(--rosegold-line)" opacity="0.2" />
    </svg>
  ),
};

const categories = [
  { name: "Lip Care", description: "Nourish, protect, and soften.", icon: icons.lip },
  { name: "Face Care", description: "Cleanse, treat, and glow.", icon: icons.face },
  { name: "Body Care", description: "Care that goes beyond the surface.", icon: icons.body },
  { name: "Essentials", description: "The actives your routine deserves.", icon: icons.essentials },
];

const ease = [0.16, 1, 0.3, 1] as const;

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

function TiltCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(y, [0, 1], [4, -4]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [0, 1], [-4, 4]), { stiffness: 200, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width);
    y.set((e.clientY - rect.top) / rect.height);
  };

  const handleMouseLeave = () => { x.set(0.5); y.set(0.5); };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}

export default function Products() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <section id="products" ref={sectionRef} className="py-24 md:py-32 relative overflow-hidden">
      {/* Subtle background botanical parallax */}
      <motion.div style={{ y: bgY }} className="absolute -left-24 top-1/4 opacity-[0.035] pointer-events-none">
        <svg width="360" height="360" viewBox="0 0 200 200" fill="none">
          <path d="M100 185 C100 160, 95 140, 98 120 C101 100, 105 80, 100 55 C96 35, 100 20, 100 15" stroke="var(--rosegold-line)" strokeWidth="1.2" strokeLinecap="round" fill="none" />
          <path d="M98 100 C85 95, 55 85, 40 65 C30 50, 45 35, 60 42 C75 49, 90 70, 98 100Z" stroke="var(--rosegold-line)" strokeWidth="1.2" fill="none" />
          <path d="M102 78 C115 73, 145 60, 158 42 C168 28, 152 15, 138 22 C124 29, 110 52, 102 78Z" stroke="var(--rosegold-line)" strokeWidth="1.2" fill="none" />
        </svg>
      </motion.div>

      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.8, ease }}
          className="text-center mb-14 md:mb-20"
        >
          <p className="eyebrow text-burgundy-soft mb-4">Our Range</p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-light text-burgundy tracking-[0.02em]">
            Curated <span className="font-serif italic text-rose-dusty">categories</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10px" }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-7"
        >
          {categories.map((cat) => (
            <motion.div key={cat.name} variants={cardVariants}>
              <Magnetic strength={0.06}>
                <TiltCard>
                  <div
                    className="group rounded-[20px] p-8 md:p-10 transition-all duration-500 hover:-translate-y-1 border relative overflow-hidden"
                    style={{
                      backgroundColor: "var(--cream-card)",
                      borderColor: "rgba(217,169,158,0.15)",
                      boxShadow: "0 1px 3px rgba(74,35,41,0.04), 0 4px 16px rgba(74,35,41,0.03)",
                    }}
                  >
                    {/* Corner botanical decoration */}
                    <svg className="absolute top-3 right-3 w-16 h-16 opacity-[0.04]" viewBox="0 0 64 64" fill="none">
                      <path d="M60 4C60 4 40 10 30 24C20 38 24 58 24 58" stroke="var(--rosegold-line)" strokeWidth="1" />
                      <path d="M50 4C50 4 44 16 48 28C52 40 60 44 60 44" stroke="var(--rosegold-line)" strokeWidth="0.8" />
                    </svg>

                    {/* Hover glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--rosegold-line)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[20px]" />
                    {/* Rose-gold border glow on hover */}
                    <div
                      className="absolute inset-0 rounded-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{ boxShadow: "inset 0 0 0 1px rgba(217,169,158,0.35)" }}
                    />

                    <div className="relative z-10">
                      <div className="mb-5 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                        {cat.icon}
                      </div>
                      <h3 className="font-display text-2xl md:text-3xl text-burgundy mb-2 tracking-[0.02em]">
                        {cat.name}
                      </h3>
                      <p className="text-ink/50 font-sans text-sm md:text-base mb-5 leading-relaxed">
                        {cat.description}
                      </p>
                      <span className="inline-flex items-center gap-2 text-burgundy-soft text-sm font-sans tracking-wide group-hover:gap-3 transition-all duration-300">
                        Discover
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform duration-300 group-hover:translate-x-1">
                          <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </TiltCard>
              </Magnetic>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
