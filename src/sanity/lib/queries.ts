import { groq } from "next-sanity";

export const TESTIMONIALS_QUERY = groq`
  *[_type == "testimonial"] | order(_createdAt desc) {
    _id,
    quote,
    name,
    title,
    property
  }
`;

export const SERVICES_QUERY = groq`
  *[_type == "service"] | order(order asc) {
    _id,
    title,
    description,
    tags
  }
`;

export const SITE_SETTINGS_QUERY = groq`
  *[_type == "siteSettings"][0] {
    tagline,
    subheadline,
    phone,
    email
  }
`;
