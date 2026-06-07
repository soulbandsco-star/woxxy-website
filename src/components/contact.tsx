"use client";

import { motion } from "framer-motion";
import Magnetic from "./magnetic";

const ease = [0.16, 1, 0.3, 1] as const;

function WhatsAppIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function EmailIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="3" />
      <path d="M2 7L12 13L22 7" />
    </svg>
  );
}

function InstagramIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

const contactMethods = [
  { icon: <EmailIcon className="w-6 h-6" />, label: "Email", value: "hitesh@woxxy.co.in", href: "mailto:hitesh@woxxy.co.in" },
  { icon: <WhatsAppIcon className="w-6 h-6" />, label: "WhatsApp", value: "+91 98290 99799", href: "https://wa.me/919829099799" },
  { icon: <InstagramIcon className="w-6 h-6" />, label: "Instagram", value: "@woxxyskincare", href: "https://www.instagram.com/woxxyskincare/" },
];

const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const itemVariants = { hidden: { opacity: 0, x: -25 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease } } };
const rightVariants = { hidden: { opacity: 0, x: 25 }, visible: { opacity: 1, x: 0, transition: { duration: 0.7, delay: 0.1, ease } } };

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 md:px-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.8, ease }}
          className="text-center mb-14 md:mb-18"
        >
          <p className="eyebrow text-burgundy-soft mb-4">Reach Out</p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-light text-burgundy tracking-[0.02em]">
            Let&apos;s <span className="font-serif italic text-rose-dusty">connect</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14">
          {/* Contact methods — ivory cards on silk */}
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10px" }} className="space-y-4">
            {contactMethods.map((method) => (
              <motion.div key={method.label} variants={itemVariants}>
                <Magnetic strength={0.08}>
                  <a
                    href={method.href}
                    target={method.href.startsWith("mailto") ? undefined : "_blank"}
                    rel={method.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                    className="group flex items-center gap-5 p-5 rounded-xl transition-all duration-300 hover:-translate-y-0.5"
                    style={{
                      backgroundColor: "var(--cream-card)",
                      border: "1px solid rgba(217,169,158,0.12)",
                      boxShadow: "0 1px 3px rgba(74,35,41,0.03)",
                    }}
                  >
                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-burgundy-soft transition-all duration-300 group-hover:scale-110" style={{ backgroundColor: "rgba(217,169,158,0.1)" }}>
                      {method.icon}
                    </div>
                    <div>
                      <p className="eyebrow text-burgundy-soft/40 text-[10px] mb-1">{method.label}</p>
                      <p className="text-burgundy font-sans text-base group-hover:text-burgundy-soft transition-colors duration-300">{method.value}</p>
                    </div>
                    <svg className="w-4 h-4 text-rosegold-line/30 ml-auto group-hover:text-burgundy group-hover:translate-x-1 transition-all duration-300" viewBox="0 0 16 16" fill="none">
                      <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </Magnetic>
              </motion.div>
            ))}
          </motion.div>

          {/* Bulk orders CTA — faintest blush tint card */}
          <motion.div variants={rightVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10px" }} className="flex items-start">
            <div
              className="w-full rounded-2xl p-8 md:p-10 relative overflow-hidden"
              style={{
                backgroundColor: "var(--blush-whisper)",
                border: "1px solid rgba(217,169,158,0.18)",
                boxShadow: "0 2px 16px rgba(74,35,41,0.04)",
              }}
            >
              <div className="absolute top-0 right-0 w-28 h-28 rounded-bl-full" style={{ backgroundColor: "rgba(217,169,158,0.06)" }} />
              <div className="relative z-10">
                <div className="eyebrow text-burgundy-soft text-[11px] mb-3">Wholesale</div>
                <h3 className="font-display text-2xl md:text-3xl text-burgundy mb-3 tracking-[0.02em]">Bulk &amp; Wholesale Orders</h3>
                <p className="text-ink/50 font-sans text-sm leading-relaxed mb-7">
                  Stocking Woxxy or ordering in volume? Let&apos;s talk. We partner with retailers, salons, and distributors who share our commitment to quality.
                </p>
                <Magnetic strength={0.15}>
                  <a
                    href="https://wa.me/919829099799"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center gap-3 h-[54px] px-8 bg-burgundy text-cream-on-dark rounded-full text-sm tracking-[0.15em] uppercase font-sans font-medium overflow-hidden transition-all duration-400 hover:shadow-xl hover:shadow-burgundy/20 hover:-translate-y-0.5"
                  >
                    <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
                    <WhatsAppIcon className="w-4 h-4 relative z-10" />
                    <span className="relative z-10">Get in Touch</span>
                  </a>
                </Magnetic>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
