export interface Course {
  id: string;
  category: string;
  title: string;
  description: string;
  price: string;
  duration: string;
  features: string[];
  image: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface ContactInfo {
  phone: string;
  secondaryPhones?: string[];
  email: string;
  address: string;
  mapEmbedUrl: string;
}

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: string;
}

export interface Instructor {
  id: string;
  name: string;
  role: string;
  experience: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
}