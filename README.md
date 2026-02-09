# SSBI Interior Design Website

A premium interior design website built with Next.js, featuring smooth animations, responsive design, and all essential functionalities.

## Features

- **Home Page** - Hero section with CTA buttons, company intro, featured projects preview
- **Project Portfolio** - Filterable gallery by category (Living Room, Kitchen, Office, Bedroom)
- **About Us** - Company story, team members, experience & certifications
- **Services** - Full Home Design, Modular Kitchen, Office Interiors, Renovation
- **Testimonials** - Client reviews with before/after images
- **Contact Form** - Inquiry form with data storage (saves to `data/inquiries.json`)

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS** - Custom color palette (cream, sand, charcoal, warm, sage)
- **Framer Motion** - Smooth animations
- **Next/Image** - Optimized images
- **Google Fonts** - Playfair Display (headings), DM Sans (body)

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── about/          # About Us page
│   ├── api/contact/    # Contact form API endpoint
│   ├── contact/        # Contact page
│   ├── projects/       # Project gallery with filtering
│   ├── services/       # Services page
│   ├── testimonials/   # Testimonials page
│   ├── layout.tsx      # Root layout with Navbar & Footer
│   └── page.tsx        # Home page
├── components/         # Reusable components
├── lib/
│   └── data.ts        # Mock data (projects, team, testimonials, services)
└── data/              # Contact form submissions (created at runtime)
```

## Customization

- **Colors**: Edit `tailwind.config.ts` to change the color palette
- **Content**: Update `lib/data.ts` with your projects, team, testimonials, and services
- **Contact Email**: Update email/phone in `components/Footer.tsx` and `app/contact/page.tsx`
- **Images**: Replace Unsplash URLs in `lib/data.ts` with your own images

## Contact Form

The contact form saves submissions to `data/inquiries.json`. To integrate with email services:

1. Install an email service (e.g., Resend, Nodemailer)
2. Update `app/api/contact/route.ts` to send emails
3. Optionally keep file storage as backup

## Build for Production

```bash
npm run build
npm start
```

## License

Private project - SSBI Interior Design
