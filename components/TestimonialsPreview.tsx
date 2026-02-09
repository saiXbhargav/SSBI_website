"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { testimonials } from "@/lib/data";

export default function TestimonialsPreview() {
  const featured = testimonials.slice(0, 2);

  return (
    <section className="py-16 md:py-24 bg-sand/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
        >
          <div>
            <p className="text-warm font-medium text-sm uppercase tracking-widest mb-2">
              Testimonials
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-charcoal">
              What our clients say
            </h2>
          </div>
          <Link
            href="/testimonials"
            className="inline-flex items-center text-warm font-medium hover:text-charcoal transition-colors"
          >
            All reviews
            <span className="ml-2">→</span>
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {featured.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-cream rounded-2xl p-8 shadow-sm"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <span key={j} className="text-warm" aria-hidden>★</span>
                ))}
              </div>
              <blockquote className="text-charcoal/90 leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="mt-6 flex items-center gap-4">
                <div className="w-12 h-12 relative rounded-full overflow-hidden bg-sand/50">
                  <Image
                    src={t.image}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <div>
                  <p className="font-semibold text-charcoal">{t.clientName}</p>
                  <p className="text-charcoal/60 text-sm">{t.project}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
