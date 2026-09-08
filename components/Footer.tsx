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
              SSB Interiors
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
          <div className="space-y-4">
            <div>
              <h3 className="font-display text-lg font-semibold text-cream mb-2">Contact</h3>
              <p className="text-cream/80 text-sm">
                srisaibhargavinteriors@gmail.com
                <br />
                +91 6305704978
              </p>
              <p className="mt-1 text-cream/60 text-sm">Mon–Sat, 10am–7pm</p>
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold text-cream mb-2">Follow</h3>
              <Link
                href="https://www.instagram.com/srisaibhargavinteriors?igsh=NDRkcWhtYjdpdjdl"
                className="inline-flex items-center text-cream/80 hover:text-warm text-sm transition-colors"
                target="_blank"
                rel="noreferrer"
              >
                <span className="mr-2 text-base">📷</span>
                Instagram
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-10 pt-8 border-t border-cream/10 text-center text-cream/60 text-sm">
          © {new Date().getFullYear()} SSB Interiors. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
