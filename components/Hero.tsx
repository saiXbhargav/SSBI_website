"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const heroImage =
  "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1920&q=85";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage}
          alt="Premium interior design"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-charcoal/50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-warm font-medium text-sm uppercase tracking-widest mb-4"
          >
            Interior Design Studio
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-cream leading-tight"
          >
            Spaces that inspire
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-cream/90 text-lg md:text-xl max-w-lg"
          >
            We design homes and offices that reflect your style and elevate everyday living.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link
              href="/projects"
              className="inline-flex items-center px-6 py-3 bg-warm text-charcoal font-medium rounded-full hover:bg-warm/90 transition-colors"
            >
              View Projects
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 border-2 border-cream text-cream font-medium rounded-full hover:bg-cream/10 transition-colors"
            >
              Get Quote
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
