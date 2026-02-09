"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { projects } from "@/lib/data";

export default function FeaturedProjects() {
  const featured = projects.slice(0, 4);

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
              Portfolio
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-charcoal">
              Featured projects
            </h2>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center text-warm font-medium hover:text-charcoal transition-colors"
          >
            View all projects
            <span className="ml-2">→</span>
          </Link>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <Link href={`/projects#${project.slug}`} className="group block">
                <div className="aspect-[4/5] relative rounded-2xl overflow-hidden bg-sand/50">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="mt-4">
                  <p className="text-charcoal/60 text-sm">{project.category}</p>
                  <h3 className="font-display text-lg font-semibold text-charcoal group-hover:text-warm transition-colors">
                    {project.title}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
