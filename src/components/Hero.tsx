"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden">
      <motion.div
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
      >
        <Image
          src="/hero/home_intro.jpg"
          alt="Interior design mood collage"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/50 to-ink/30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(20,18,16,0.45)_100%)]" />

      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center px-5 py-28 text-center sm:px-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-[clamp(2.75rem,9vw,6.5rem)] leading-[0.92] tracking-tight text-paper"
        >
          {site.name}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 text-[0.7rem] tracking-[0.22em] uppercase text-paper/75"
        >
          {site.role}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 max-w-md text-base leading-relaxed text-paper/90 sm:text-lg"
        >
          {site.tagline}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.26, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 flex flex-wrap items-center justify-center gap-2.5"
        >
          <Link
            href="/#featured"
            className="bg-paper px-5 py-3 text-xs tracking-[0.08em] text-ink transition hover:bg-blush-soft"
          >
            Featured work
          </Link>
          <Link
            href="/contact"
            className="border border-paper/50 px-5 py-3 text-xs tracking-[0.08em] text-paper transition hover:bg-paper/10"
          >
            Contact
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
