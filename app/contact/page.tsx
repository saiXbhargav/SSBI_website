"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", requirements: "" });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      setFormData({ name: "", phone: "", email: "", requirements: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="min-h-screen bg-cream">
      <section className="py-12 md:py-20 border-b border-sand/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-warm font-medium text-sm uppercase tracking-widest mb-2">Contact</p>
          <h1 className="font-display text-3xl md:text-5xl font-semibold text-charcoal">Get in touch</h1>
          <p className="mt-4 text-charcoal/80 max-w-xl">
            Share your requirements and we will get back with a custom proposal.
          </p>
        </div>
      </section>
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
              <h2 className="font-display text-2xl font-semibold text-charcoal">Inquiry form</h2>
              <p className="text-charcoal/80">Fill in your details. We typically respond within 24 hours.</p>
              <div>
                <p className="text-charcoal font-medium">Email</p>
                <a href="mailto:srisaibhargavinteriors@gmail.com" className="text-warm hover:underline">srisaibhargavinteriors@gmail.com</a>
              </div>
              <div>
                <p className="text-charcoal font-medium">Phone</p>
                <a href="tel:+919876543210" className="text-warm hover:underline">+91 6305704978</a>
              </div>
            </motion.div>
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl shadow-sm border border-sand/50 p-6 md:p-8 space-y-6"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">Name *</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData((d) => ({ ...d, name: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl border border-sand bg-cream/50 focus:outline-none focus:ring-2 focus:ring-warm"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-2">Phone *</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData((d) => ({ ...d, phone: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl border border-sand bg-cream/50 focus:outline-none focus:ring-2 focus:ring-warm"
                  placeholder="+91 6305704978"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">Email *</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData((d) => ({ ...d, email: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl border border-sand bg-cream/50 focus:outline-none focus:ring-2 focus:ring-warm"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="requirements" className="block text-sm font-medium text-charcoal mb-2">Requirements *</label>
                <textarea
                  id="requirements"
                  name="requirements"
                  required
                  rows={4}
                  value={formData.requirements}
                  onChange={(e) => setFormData((d) => ({ ...d, requirements: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl border border-sand bg-cream/50 focus:outline-none focus:ring-2 focus:ring-warm resize-none"
                  placeholder="Project type, area, budget, style..."
                />
              </div>
              {status === "success" && <p className="text-green-600 text-sm">Thank you. We will get back soon.</p>}
              {status === "error" && <p className="text-red-600 text-sm">Something went wrong. Please try again.</p>}
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full py-4 bg-charcoal text-cream font-medium rounded-xl hover:bg-warm hover:text-charcoal transition-colors disabled:opacity-60"
              >
                {status === "sending" ? "Sending..." : "Send inquiry"}
              </button>
            </motion.form>
          </div>
        </div>
      </section>
    </div>
  );
}
