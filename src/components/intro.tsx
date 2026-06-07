"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

function lockScroll() {
  document.body.style.overflow = "hidden";
  const lenis = (
    window as unknown as Record<string, { stop?: () => void }>
  ).__lenis;
  if (lenis?.stop) lenis.stop();
}

function unlockScroll() {
  document.body.style.overflow = "";
  const lenis = (
    window as unknown as Record<string, { start?: () => void }>
  ).__lenis;
  if (lenis?.start) lenis.start();
}

/* Botanical leaf SVG line — used for the drifting-in side accents */
function LeafLine({
  className,
  flip,
}: {
  className?: string;
  flip?: boolean;
}) {
  return (
    <svg
      width="120"
      height="300"
      viewBox="0 0 60 160"
      fill="none"
      className={className}
      style={flip ? { transform: "scaleX(-1)" } : undefined}
    >
      <path
        d="M30 155 C30 130, 28 100, 30 70 C32 40, 30 15, 30 5"
        stroke="var(--rosegold-line)"
        strokeWidth="0.8"
        strokeLinecap="round"
        opacity="0.4"
      />
      <path
        d="M30 90 C22 82, 8 78, 6 65 C4 55, 14 50, 22 58 C28 64, 30 78, 30 90"
        stroke="var(--rosegold-line)"
        strokeWidth="0.8"
        opacity="0.35"
        fill="none"
      />
      <path
        d="M30 55 C38 47, 50 42, 52 30 C54 20, 44 16, 36 24 C30 30, 30 44, 30 55"
        stroke="var(--rosegold-line)"
        strokeWidth="0.8"
        opacity="0.35"
        fill="none"
      />
    </svg>
  );
}

export default function Intro() {
  const [show, setShow] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [phase, setPhase] = useState<"playing" | "exiting" | "done">(
    "playing"
  );
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    setMounted(true);
    if (typeof window === "undefined") return;

    if (reducedMotion) {
      setShow(true);
      lockScroll();
      // Quick fade for reduced motion
      setTimeout(() => {
        setPhase("exiting");
        setTimeout(() => {
          setPhase("done");
          setShow(false);
          unlockScroll();
        }, 600);
      }, 800);
      return;
    }

    setShow(true);
    lockScroll();
  }, [reducedMotion]);

  const dismiss = useCallback(() => {
    setPhase("exiting");
    setTimeout(() => {
      setPhase("done");
      setShow(false);
      unlockScroll();
    }, 650);
  }, []);

  // Auto-dismiss after full sequence
  useEffect(() => {
    if (!show || phase !== "playing") return;
    const timer = setTimeout(dismiss, 2500);
    return () => clearTimeout(timer);
  }, [show, phase, dismiss]);

  if (!mounted || phase === "done") return null;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="intro"
          initial={{ y: 0 }}
          animate={phase === "exiting" ? { y: "-100%" } : { y: 0 }}
          transition={
            phase === "exiting"
              ? { duration: 0.65, ease }
              : { duration: 0 }
          }
          className="fixed inset-0 z-[9990] flex flex-col items-center justify-center"
          style={{ backgroundColor: "var(--silk-1)" }}
        >
          {/* Botanical leaf lines drifting in from edges */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0, ease }}
            className="absolute left-6 md:left-16 top-1/2 -translate-y-1/2"
          >
            <LeafLine />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            className="absolute right-6 md:right-16 top-1/2 -translate-y-1/2"
          >
            <LeafLine flip />
          </motion.div>

          {/* Center content */}
          <div className="relative flex flex-col items-center">
            {/* W mark — materializes from blur */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7, filter: "blur(8px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.9, delay: 0.3, ease }}
              className="relative w-[120px] h-[120px] md:w-[150px] md:h-[150px] mb-6"
            >
              <Image
                src="/w-mark.png"
                alt=""
                width={300}
                height={300}
                className="w-full h-full object-contain"
                aria-hidden="true"
                priority
              />

              {/* Shimmer sweep — diagonal light streak across the mark */}
              <motion.div
                initial={{ x: "-120%", opacity: 0 }}
                animate={{ x: "200%", opacity: [0, 1, 1, 0] }}
                transition={{
                  duration: 0.7,
                  delay: 1.0,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 pointer-events-none overflow-hidden rounded-full"
              >
                <div
                  className="absolute inset-[-20%] rotate-[25deg]"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent 30%, rgba(255,255,255,0.35) 48%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0.35) 52%, transparent 70%)",
                    width: "60%",
                    height: "140%",
                  }}
                />
              </motion.div>
            </motion.div>

            {/* WOXXY wordmark — letter-spacing expansion */}
            <motion.p
              initial={{ opacity: 0, letterSpacing: "0.05em" }}
              animate={{ opacity: 1, letterSpacing: "0.35em" }}
              transition={{ duration: 0.7, delay: 1.0, ease }}
              className="font-display text-2xl md:text-3xl font-light text-burgundy mb-4"
            >
              WOXXY
            </motion.p>

            {/* Hairline rule drawing outward from center */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 1.5, ease }}
              className="w-20 md:w-28 h-[1px] origin-center mb-3"
              style={{ backgroundColor: "var(--rosegold-line)" }}
            />

            {/* PREMIUM SKINCARE eyebrow */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 1.7 }}
              className="eyebrow text-burgundy-soft/50 text-[10px] md:text-[11px]"
            >
              Premium Skincare
            </motion.p>
          </div>

          {/* Skip */}
          <button
            onClick={dismiss}
            className="absolute bottom-6 right-6 text-[10px] tracking-[0.2em] uppercase font-sans text-burgundy-soft/25 hover:text-burgundy-soft/50 transition-colors duration-300"
          >
            Skip
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
