"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Petal {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
  rotate: number;
  opacity: number;
  drift: number;
  variant: number;
}

const petalConfigs: Petal[] = [
  { id: 0, x: 6, size: 14, duration: 20, delay: 0, rotate: 30, opacity: 0.07, drift: 25, variant: 0 },
  { id: 1, x: 18, size: 18, duration: 24, delay: 3, rotate: 120, opacity: 0.09, drift: -35, variant: 1 },
  { id: 2, x: 32, size: 11, duration: 18, delay: 6, rotate: 200, opacity: 0.06, drift: 18, variant: 0 },
  { id: 3, x: 45, size: 20, duration: 26, delay: 1, rotate: 60, opacity: 0.1, drift: -45, variant: 1 },
  { id: 4, x: 58, size: 15, duration: 22, delay: 8, rotate: 310, opacity: 0.07, drift: 30, variant: 0 },
  { id: 5, x: 72, size: 22, duration: 30, delay: 4, rotate: 170, opacity: 0.09, drift: -22, variant: 1 },
  { id: 6, x: 85, size: 13, duration: 19, delay: 9, rotate: 250, opacity: 0.06, drift: 38, variant: 0 },
  { id: 7, x: 12, size: 16, duration: 25, delay: 5, rotate: 90, opacity: 0.08, drift: -18, variant: 1 },
  { id: 8, x: 40, size: 12, duration: 17, delay: 7, rotate: 340, opacity: 0.07, drift: 28, variant: 0 },
  { id: 9, x: 52, size: 19, duration: 23, delay: 10, rotate: 140, opacity: 0.09, drift: -30, variant: 1 },
  { id: 10, x: 68, size: 14, duration: 28, delay: 2, rotate: 220, opacity: 0.06, drift: 20, variant: 0 },
  { id: 11, x: 92, size: 16, duration: 21, delay: 6, rotate: 45, opacity: 0.08, drift: -40, variant: 1 },
];

function PetalSvg({ size, variant }: { size: number; variant: number }) {
  if (variant === 0) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2C12 2 6 9 6 14C6 17.5 8.7 20 12 20C15.3 20 18 17.5 18 14C18 9 12 2 12 2Z"
          fill="var(--rose-dusty)"
          opacity="0.45"
        />
        <line x1="12" y1="7" x2="12" y2="18" stroke="var(--rosegold-line)" strokeWidth="0.4" opacity="0.3" />
      </svg>
    );
  }
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <ellipse cx="12" cy="12" rx="5" ry="8" fill="var(--rosegold-line)" opacity="0.3" transform="rotate(15 12 12)" />
    </svg>
  );
}

export default function Botanicals() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {petalConfigs.map((p) => (
        <motion.div
          key={p.id}
          className="absolute"
          style={{
            left: `${p.x}%`,
            bottom: "-40px",
          }}
          animate={{
            y: [0, -1200],
            x: [0, p.drift],
            rotate: [p.rotate, p.rotate + 360],
            opacity: [0, p.opacity, p.opacity, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <PetalSvg size={p.size} variant={p.variant} />
        </motion.div>
      ))}
    </div>
  );
}
