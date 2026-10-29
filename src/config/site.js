// Site-wide configuration and environment variables with safe fallbacks

export const siteConfig = {
  name: import.meta.env.VITE_SITE_NAME || 'Webnexora Solution',
  tagline: import.meta.env.VITE_SITE_TAGLINE || 'Precision Engineering · Clean UX · Measurable Growth',
  url: import.meta.env.VITE_SITE_URL || 'https://webnexorasolution.com',
  env: import.meta.env.VITE_APP_ENV || 'development',

  contact: {
    email: import.meta.env.VITE_CONTACT_EMAIL || 'hello@webnexora.com',
    phone: import.meta.env.VITE_CONTACT_PHONE || '+91 98765 43210',
    phoneRaw: (import.meta.env.VITE_CONTACT_PHONE || '+91 98765 43210').replace(/\s+/g, ''),
    whatsappNumber: import.meta.env.VITE_WHATSAPP_NUMBER || '919876543210',
    officeHours: import.meta.env.VITE_OFFICE_HOURS || '9:00 AM – 9:00 PM IST (Mon - Sat)',
    location: import.meta.env.VITE_OFFICE_LOCATION || 'Mumbai, Maharashtra, India',
  },

  socials: {
    facebook: import.meta.env.VITE_SOCIAL_FACEBOOK || 'https://facebook.com',
    instagram: import.meta.env.VITE_SOCIAL_INSTAGRAM || 'https://instagram.com',
    linkedin: import.meta.env.VITE_SOCIAL_LINKEDIN || 'https://linkedin.com',
    youtube: import.meta.env.VITE_SOCIAL_YOUTUBE || 'https://youtube.com',
    github: import.meta.env.VITE_SOCIAL_GITHUB || 'https://github.com/webnexorasolution',
  },

  // Helper to generate formatted WhatsApp link
  getWhatsAppUrl(message = '') {
    const text = message || "Hello Webnexora Solution! I'd like to discuss a project.";
    return `https://wa.me/${this.contact.whatsappNumber}?text=${encodeURIComponent(text)}`;
  },
};

export default siteConfig;
