"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { testimonials } from "@/lib/data";

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-cream">
      <section className="py-12 md:py-20 border-b border-sand/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-warm font-medium text-sm uppercase tracking-widest mb-2">
            Testimonials
          </p>
          <h1 className="font-display text-3xl md:text-5xl font-semibold text-charcoal">
            What our clients say
          </h1>
          <p className="mt-4 text-charcoal/80 max-w-xl">
            Real feedback from homeowners and businesses we have worked with.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {testimonials.map((t, i) => (
              <motion.article
                key={t.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl shadow-sm overflow-hidden"
              >
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[320px]">
                    <Image
                      src={t.image}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-8 md:p-10 flex flex-col justify-center">
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: t.rating }).map((_, j) => (
                        <span key={j} className="text-warm" aria-hidden>★</span>
                      ))}
                    </div>
                    <blockquote className="text-charcoal/90 text-lg leading-relaxed">
                      &ldquo;{t.quote}&rdquo;
                    </blockquote>
                    <div className="mt-6">
                      <p className="font-semibold text-charcoal">{t.clientName}</p>
                      <p className="text-charcoal/60 text-sm">{t.project}</p>
                    </div>
                  </div>
                </div>
                {(t.beforeImage || t.afterImage) && (
                  <div className="grid grid-cols-2 gap-4 p-6 md:p-8 border-t border-sand/50 bg-sand/20">
                    {t.beforeImage && (
                      <div>
                        <p className="text-charcoal/60 text-xs uppercase tracking-wider mb-2">
                          Before
                        </p>
                        <div className="aspect-video relative rounded-lg overflow-hidden">
                          <Image
                            src={t.beforeImage}
                            alt="Before"
                            fill
                            className="object-cover"
                            sizes="50vw"
                          />
                        </div>
                      </div>
                    )}
                    {t.afterImage && (
                      <div>
                        <p className="text-charcoal/60 text-xs uppercase tracking-wider mb-2">
                          After
                        </p>
                        <div className="aspect-video relative rounded-lg overflow-hidden">
                          <Image
                            src={t.afterImage}
                            alt="After"
                            fill
                            className="object-cover"
                            sizes="50vw"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
