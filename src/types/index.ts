export interface NavLink {
  label: string;
  href: string;
  icon: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
  href: string;
  featured?: boolean;
}

export interface Industry {
  title: string;
  description: string;
  result: string;
}

export interface Testimonial {
  name: string;
  title: string;
  text: string;
  avatar: string;
}

export interface AppProduct {
  name: string;
  tagline: string;
  description: string;
  slug: string;
}
