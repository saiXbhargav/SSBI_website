"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { projects, PROJECT_CATEGORIES, type ProjectCategory } from "@/lib/data";

export default function ProjectsPage() {
  const [category, setCategory] = useState<ProjectCategory | "All">("All");

  const filtered = useMemo(() => {
    if (category === "All") return projects;
    return projects.filter((p) => p.category === category);
  }, [category]);

  return (
    <div className="min-h-screen bg-cream">
      <section className="py-12 md:py-16 border-b border-sand/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-warm font-medium text-sm uppercase tracking-widest mb-2">
            Portfolio
          </p>
          <h1 className="font-display text-3xl md:text-5xl font-semibold text-charcoal">
            Our projects
          </h1>
          <p className="mt-4 text-charcoal/80 max-w-xl">
            Browse our work by category: Living Room, Kitchen, Office, and Bedroom.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {["All", ...PROJECT_CATEGORIES].map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setCategory(cat as ProjectCategory | "All")}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === cat
                    ? "bg-charcoal text-cream"
                    : "bg-sand/50 text-charcoal/80 hover:bg-sand"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            {filtered.length === 0 ? (
              <motion.p
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-charcoal/60 text-center py-12"
              >
                No projects in this category yet.
              </motion.p>
            ) : (
              <motion.div
                key={category}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
              >
                {filtered.map((project, i) => (
                  <motion.article
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="group"
                  >
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
                      <h2 className="font-display text-xl font-semibold text-charcoal mt-1">
                        {project.title}
                      </h2>
                      <ul className="mt-2 flex flex-wrap gap-3 text-sm text-charcoal/70">
                        <li>Area: {project.area}</li>
                        <li>Budget: {project.budget}</li>
                        <li>Style: {project.style}</li>
                      </ul>
                    </div>
                  </motion.article>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
