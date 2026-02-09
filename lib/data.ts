export type ProjectCategory = "Living Room" | "Kitchen" | "Office" | "Bedroom";

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  image: string;
  area: string;
  budget: string;
  style: string;
  slug: string;
}

export const PROJECT_CATEGORIES: ProjectCategory[] = [
  "Living Room",
  "Kitchen",
  "Office",
  "Bedroom",
];

export const projects: Project[] = [
  {
    id: "1",
    title: "Minimalist Living Room",
    category: "Living Room",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80",
    area: "450 sq ft",
    budget: "₹4.5L",
    style: "Minimalist",
    slug: "minimalist-living-room",
  },
  {
    id: "2",
    title: "Scandinavian Living",
    category: "Living Room",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
    area: "520 sq ft",
    budget: "₹5.2L",
    style: "Scandinavian",
    slug: "scandinavian-living",
  },
  {
    id: "3",
    title: "Modern Modular Kitchen",
    category: "Kitchen",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    area: "180 sq ft",
    budget: "₹6L",
    style: "Modern",
    slug: "modern-modular-kitchen",
  },
  {
    id: "4",
    title: "Open Plan Kitchen",
    category: "Kitchen",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    area: "220 sq ft",
    budget: "₹7L",
    style: "Contemporary",
    slug: "open-plan-kitchen",
  },
  {
    id: "5",
    title: "Executive Office",
    category: "Office",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    area: "600 sq ft",
    budget: "₹8L",
    style: "Corporate",
    slug: "executive-office",
  },
  {
    id: "6",
    title: "Creative Studio",
    category: "Office",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80",
    area: "400 sq ft",
    budget: "₹5.5L",
    style: "Industrial",
    slug: "creative-studio",
  },
  {
    id: "7",
    title: "Serene Master Bedroom",
    category: "Bedroom",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80",
    area: "280 sq ft",
    budget: "₹4L",
    style: "Contemporary",
    slug: "serene-master-bedroom",
  },
  {
    id: "8",
    title: "Cozy Bedroom Retreat",
    category: "Bedroom",
    image: "https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?w=800&q=80",
    area: "200 sq ft",
    budget: "₹3.2L",
    style: "Warm Minimal",
    slug: "cozy-bedroom-retreat",
  },
];

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}

export const team: TeamMember[] = [
  {
    name: "Priya Sharma",
    role: "Lead Designer",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
    bio: "15+ years in residential and commercial interiors.",
  },
  {
    name: "Rahul Mehta",
    role: "Senior Architect",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    bio: "Specialist in modular kitchens and space planning.",
  },
  {
    name: "Anita Krishnan",
    role: "Project Manager",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
    bio: "Ensures seamless execution and client satisfaction.",
  },
];

export interface Testimonial {
  id: string;
  clientName: string;
  project: string;
  quote: string;
  image: string;
  beforeImage?: string;
  afterImage?: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    clientName: "Vikram & Sneha",
    project: "Full Home Design, Chennai",
    quote:
      "SSBI transformed our 3BHK into a magazine-worthy home. On time, on budget, and the team was a pleasure to work with.",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&q=80",
    beforeImage: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400&q=80",
    afterImage: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=400&q=80",
    rating: 5,
  },
  {
    id: "2",
    clientName: "TechStart Pvt Ltd",
    project: "Office Interiors, Bangalore",
    quote:
      "Our new office reflects our brand perfectly. The team understood our vision and delivered beyond expectations.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
    rating: 5,
  },
  {
    id: "3",
    clientName: "Mrs. Lakshmi",
    project: "Modular Kitchen, Hyderabad",
    quote:
      "Dream kitchen finally done! Every detail was thought through. Highly recommend SSBI for kitchen projects.",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80",
    rating: 5,
  },
];

export interface Service {
  title: string;
  description: string;
  image: string;
  slug: string;
  features: string[];
}

export const services: Service[] = [
  {
    title: "Full Home Design",
    description:
      "End-to-end interior design for your entire home—living, bedrooms, kitchen, and bathrooms. Cohesive style and seamless execution.",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80",
    slug: "full-home-design",
    features: ["Space planning", "Material selection", "Furniture & decor", "Project management"],
  },
  {
    title: "Modular Kitchen",
    description:
      "Custom modular kitchens designed for your space, workflow, and style. Premium finishes and smart storage solutions.",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    slug: "modular-kitchen",
    features: ["Ergonomic design", "Premium shutters", "Hardware & appliances", "Installation"],
  },
  {
    title: "Office Interiors",
    description:
      "Professional workspaces that boost productivity and reflect your brand. From startups to corporates.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    slug: "office-interiors",
    features: ["Layout & zoning", "Furniture systems", "Lighting & acoustics", "Brand integration"],
  },
  {
    title: "Renovation",
    description:
      "Revamp existing spaces without full demolition. Smart upgrades for kitchens, bathrooms, and living areas.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    slug: "renovation",
    features: ["Assessment & design", "Structural updates", "New finishes", "Quick turnaround"],
  },
];
