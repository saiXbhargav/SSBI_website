"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { services } from "@/lib/data";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-cream">
      <section className="py-12 md:py-20 border-b border-sand/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-warm font-medium text-sm uppercase tracking-widest mb-2">
            What we do
          </p>
          <h1 className="font-display text-3xl md:text-5xl font-semibold text-charcoal">
            Our services
          </h1>
          <p className="mt-4 text-charcoal/80 max-w-2xl mx-auto">
            Full home design, modular kitchens, office interiors, and renovation—all under one roof.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {services.map((service, i) => (
            <motion.article
              key={service.slug}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`grid md:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}
            >
              <div className={i % 2 === 1 ? "md:order-2" : ""}>
                <div className="aspect-[4/3] relative rounded-2xl overflow-hidden bg-sand/50">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
              <div className={i % 2 === 1 ? "md:order-1" : ""}>
                <h2 className="font-display text-2xl md:text-3xl font-semibold text-charcoal">
                  {service.title}
                </h2>
                <p className="mt-4 text-charcoal/80 leading-relaxed">
                  {service.description}
                </p>
                <ul className="mt-6 space-y-2">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-charcoal/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-warm" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="inline-flex items-center mt-6 text-warm font-medium hover:text-charcoal transition-colors"
                >
                  Get a quote for this service
                  <span className="ml-2">→</span>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  );
}
