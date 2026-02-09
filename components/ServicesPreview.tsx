"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { services } from "@/lib/data";

export default function ServicesPreview() {
  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <p className="text-warm font-medium text-sm uppercase tracking-widest mb-2">
            What we do
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-charcoal">
            Our services
          </h2>
          <p className="mt-4 text-charcoal/80">
            From full home design to modular kitchens, office interiors, and renovation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link href="/services" className="group flex flex-col sm:flex-row gap-6 p-6 rounded-2xl bg-sand/30 hover:bg-sand/50 transition-colors">
                <div className="w-full sm:w-48 h-48 flex-shrink-0 relative rounded-xl overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 12rem"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl font-semibold text-charcoal group-hover:text-warm transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-charcoal/80 text-sm leading-relaxed">
                    {service.description.slice(0, 120)}...
                  </p>
                  <span className="inline-block mt-3 text-warm font-medium text-sm">
                    Learn more →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Link
            href="/services"
            className="inline-flex items-center px-6 py-3 bg-charcoal text-cream font-medium rounded-full hover:bg-warm hover:text-charcoal transition-colors"
          >
            View all services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
