import Link from "next/link";

const footerLinks = [
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div>
            <Link href="/" className="font-display text-2xl font-semibold text-cream">
              SSBI
            </Link>
            <p className="mt-3 text-cream/80 text-sm leading-relaxed">
              Premium interior design for homes and offices. Transform your space with style and functionality.
            </p>
          </div>
          <div>
            <h3 className="font-display text-lg font-semibold text-cream mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-cream/80 hover:text-warm text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-display text-lg font-semibold text-cream mb-4">Contact</h3>
            <p className="text-cream/80 text-sm">
              hello@ssbi.in
              <br />
              +91 98765 43210
            </p>
            <p className="mt-2 text-cream/60 text-sm">Mon–Sat, 10am–7pm</p>
          </div>
        </div>
        <div className="mt-10 pt-8 border-t border-cream/10 text-center text-cream/60 text-sm">
          © {new Date().getFullYear()} SSBI Interior Design. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
