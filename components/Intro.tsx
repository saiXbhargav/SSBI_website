"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Intro() {
  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-warm font-medium text-sm uppercase tracking-widest mb-4">
              About SSBI
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-charcoal mb-6">
              Crafting interiors that tell your story
            </h2>
            <p className="text-charcoal/80 leading-relaxed mb-4">
              We are a full-service interior design studio focused on residential and commercial
              projects. From concept to completion, we bring clarity, creativity, and quality to
              every space.
            </p>
            <p className="text-charcoal/80 leading-relaxed mb-8">
              Our team combines years of experience with a passion for materials, light, and
              functionality—so your home or office feels both beautiful and lived-in.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center text-warm font-medium hover:text-charcoal transition-colors"
            >
              Learn more about us
              <span className="ml-2">→</span>
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="bg-sand/50 rounded-2xl p-6 md:p-8">
              <p className="font-display text-3xl md:text-4xl font-semibold text-warm">12+</p>
              <p className="text-charcoal/80 text-sm mt-1">Years of experience</p>
            </div>
            <div className="bg-sand/50 rounded-2xl p-6 md:p-8 mt-8">
              <p className="font-display text-3xl md:text-4xl font-semibold text-warm">500+</p>
              <p className="text-charcoal/80 text-sm mt-1">Projects delivered</p>
            </div>
            <div className="bg-sand/50 rounded-2xl p-6 md:p-8 col-span-2">
              <p className="font-display text-3xl md:text-4xl font-semibold text-warm">100%</p>
              <p className="text-charcoal/80 text-sm mt-1">Client satisfaction focus</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
