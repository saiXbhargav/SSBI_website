"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { team } from "@/lib/data";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-cream">
      <section className="py-12 md:py-20 border-b border-sand/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-warm font-medium text-sm uppercase tracking-widest mb-2">About us</p>
          <h1 className="font-display text-3xl md:text-5xl font-semibold text-charcoal">Our story</h1>
          <div className="mt-8 md:mt-12 grid md:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-charcoal/80 leading-relaxed space-y-4">
              <p>SSBI Interior Design started with a simple belief: every space can tell a story. We combine aesthetics with functionality.</p>
              <p>Over the years we have worked on hundreds of residential and commercial projects. Our process is collaborative.</p>
              <p>We are committed to quality materials, clear timelines, and transparent pricing.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="grid grid-cols-2 gap-4">
              <div className="bg-sand/50 rounded-2xl p-6">
                <p className="font-display text-3xl font-semibold text-warm">12+</p>
                <p className="text-charcoal/80 text-sm mt-1">Years experience</p>
              </div>
              <div className="bg-sand/50 rounded-2xl p-6">
                <p className="font-display text-3xl font-semibold text-warm">500+</p>
                <p className="text-charcoal/80 text-sm mt-1">Projects completed</p>
              </div>
              <div className="col-span-2 bg-sand/50 rounded-2xl p-6">
                <p className="font-display text-3xl font-semibold text-warm">Certified</p>
                <p className="text-charcoal/80 text-sm mt-1">IIID member. Quality-assured.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-warm font-medium text-sm uppercase tracking-widest mb-2">The team</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-charcoal mb-12">Meet our experts</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {team.map((member, i) => (
              <motion.div key={member.name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
                <div className="aspect-square max-w-xs mx-auto relative rounded-2xl overflow-hidden bg-sand/50">
                  <Image src={member.image} alt={member.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
                <h3 className="font-display text-xl font-semibold text-charcoal mt-4">{member.name}</h3>
                <p className="text-warm text-sm font-medium mt-1">{member.role}</p>
                <p className="text-charcoal/80 text-sm mt-2">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
