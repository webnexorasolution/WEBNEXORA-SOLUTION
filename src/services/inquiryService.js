// ========================================================
// WEBNEXORA SOLUTION — INQUIRY STORAGE & MANAGEMENT SERVICE
// Supports local offline persistence and Supabase integration
// ========================================================

const STORAGE_KEY = 'webnexora_inquiries';

// Initial realistic demo inquiries for a turnkey admin experience
const INITIAL_INQUIRIES = [
  {
    id: 'inq-1718001',
    name: 'Aarav Mehta',
    company: 'Apex Logistics India',
    email: 'aarav.mehta@apexlogistics.in',
    phone: '+91 98201 44521',
    service: 'Custom Website Development',
    budget: '₹1,50,000 – ₹3,00,000',
    timeline: 'Within 1 Month',
    message: 'We need a high-performance corporate platform with client portal tracking and modern UI design system.',
    status: 'New',
    createdAt: new Date(Date.now() - 1000 * 60 * 45).toISOString(), // 45 mins ago
    source: 'Contact Scope Planner',
  },
  {
    id: 'inq-1718002',
    name: 'Priya Sharma',
    company: 'Vogue Luxe Jewels',
    email: 'priya@vogueluxe.com',
    phone: '+91 98112 89901',
    service: 'E-Commerce Storefront',
    budget: '₹3,00,000+',
    timeline: '1 to 2 Months',
    message: 'Looking to migrate our luxury jewelry storefront to a headless React platform with Razorpay and custom 3D product view.',
    status: 'Contacted',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString(), // 5 hours ago
    source: 'Home Contact Section',
  },
  {
    id: 'inq-1718003',
    name: 'Vikramaditya Roy',
    company: 'FinPulse Advisory',
    email: 'v.roy@finpulse.co',
    phone: '+91 99003 12455',
    service: 'UI/UX Design & Prototyping',
    budget: '₹50,000 – ₹1,50,000',
    timeline: 'Urgent (< 2 Weeks)',
    message: 'Need design system audit and Figma prototypes for our B2B fintech web app before our upcoming investor seed round.',
    status: 'Proposal Sent',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 26).toISOString(), // 1 day ago
    source: 'Contact Scope Planner',
  },
  {
    id: 'inq-1718004',
    name: 'Sneha Kulkarni',
    company: 'GreenRoot Organics',
    email: 'sneha@greenroot.in',
    phone: '+91 97665 33210',
    service: 'WordPress CMS Development',
    budget: '₹50,000 – ₹1,50,000',
    timeline: 'Within 1 Month',
    message: 'Redesigning our existing organic brand blog and online store into a clean, super-fast WordPress WooCommerce store.',
    status: 'Converted',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 72).toISOString(), // 3 days ago
    source: 'Home Contact Section',
  },
];

import { getStoredUTMParams } from '../utils/utmTracker';

// Basic XSS sanitization
function sanitizeText(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<[^>]+>/g, '')
    .trim();
}

// Prevent CSV Formula Injection in spreadsheets
function sanitizeCSVCell(str) {
  if (!str) return '""';
  const clean = String(str).replace(/"/g, '""');
  if (/^[=+\-@\t\r]/.test(clean)) {
    return `"'${clean}"`;
  }
  return `"${clean}"`;
}

// ── Service Definition ──
export const inquiryService = {
  // Load all inquiries from LocalStorage (or initial seed)
  getInquiries() {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      if (!data) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_INQUIRIES));
        return INITIAL_INQUIRIES;
      }
      return JSON.parse(data);
    } catch (e) {
      return INITIAL_INQUIRIES;
    }
  },

  // Save new client inquiry directly into DB with security & UTM tags
  async saveInquiry(inquiryData) {
    // 1. Client-Side Rate Limiting (Anti-spam cooldown 15s)
    const lastSubTime = Number(localStorage.getItem('webnexora_last_sub_time') || 0);
    const now = Date.now();
    if (now - lastSubTime < 15000) {
      const waitSec = Math.ceil((15000 - (now - lastSubTime)) / 1000);
      throw new Error(`Please wait ${waitSec}s before submitting another inquiry.`);
    }

    // 2. Capture session UTM attribution
    const utm = getStoredUTMParams();

    // 3. Sanitize inputs against XSS
    const sanitizedName = sanitizeText(inquiryData.name) || 'Anonymous';
    const sanitizedCompany = sanitizeText(inquiryData.company) || 'Direct Client';
    const sanitizedEmail = sanitizeText(inquiryData.email);
    const sanitizedPhone = sanitizeText(inquiryData.phone);
    const sanitizedService = sanitizeText(inquiryData.service) || 'Website Development';
    const sanitizedBudget = sanitizeText(inquiryData.budget) || 'Flexible';
    const sanitizedTimeline = sanitizeText(inquiryData.timeline) || 'Flexible';
    const sanitizedMessage = sanitizeText(inquiryData.message);

    const inquiries = this.getInquiries();
    const newInquiry = {
      id: `inq-${now}`,
      name: sanitizedName,
      company: sanitizedCompany,
      email: sanitizedEmail,
      phone: sanitizedPhone,
      service: sanitizedService,
      budget: sanitizedBudget,
      timeline: sanitizedTimeline,
      preferredContact: sanitizeText(inquiryData.preferredContact) || 'WhatsApp',
      deliverables: Array.isArray(inquiryData.deliverables) ? inquiryData.deliverables.map(sanitizeText) : [],
      message: sanitizedMessage,
      status: 'New',
      createdAt: new Date().toISOString(),
      source: inquiryData.source || 'Website Lead',
      utmSource: utm.utm_source || 'organic',
      utmCampaign: utm.utm_campaign || 'direct',
    };

    const updated = [newInquiry, ...inquiries];
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      localStorage.setItem('webnexora_last_sub_time', String(now));
      window.dispatchEvent(new Event('webnexora_inquiry_updated'));
    } catch (e) {
      console.error('Local DB persistence error:', e.message);
    }

    // Optional remote Supabase DB sync if configured
    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
    const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
    if (supabaseUrl && supabaseKey && !supabaseKey.includes('<')) {
      try {
        await fetch(`${supabaseUrl}/rest/v1/inquiries`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'apikey': supabaseKey,
            'Authorization': `Bearer ${supabaseKey}`,
            'Prefer': 'return=minimal',
          },
          body: JSON.stringify({
            id: newInquiry.id,
            name: newInquiry.name,
            company: newInquiry.company,
            email: newInquiry.email,
            phone: newInquiry.phone,
            service: newInquiry.service,
            budget: newInquiry.budget,
            timeline: newInquiry.timeline,
            message: newInquiry.message,
            status: newInquiry.status,
            source: newInquiry.source,
            created_at: newInquiry.createdAt,
          }),
        });
      } catch (err) {
        // Fallback gracefully to local store
      }
    }

    return newInquiry;
  },

  // Update inquiry status (New, Contacted, Proposal Sent, Converted, Archived)
  updateStatus(id, newStatus) {
    const inquiries = this.getInquiries();
    const updated = inquiries.map((item) =>
      item.id === id ? { ...item, status: newStatus } : item
    );
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    window.dispatchEvent(new Event('webnexora_inquiry_updated'));
    return updated;
  },

  // Delete an inquiry
  deleteInquiry(id) {
    const inquiries = this.getInquiries();
    const updated = inquiries.filter((item) => item.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    window.dispatchEvent(new Event('webnexora_inquiry_updated'));
    return updated;
  },

  // Export inquiries as CSV
  exportCSV() {
    const inquiries = this.getInquiries();
    if (!inquiries.length) return;

    const headers = ['ID', 'Date', 'Name', 'Company', 'Email', 'Phone', 'Service', 'Budget', 'Timeline', 'Status', 'Message'];
    const rows = inquiries.map((i) => [
      sanitizeCSVCell(i.id),
      sanitizeCSVCell(new Date(i.createdAt).toLocaleString()),
      sanitizeCSVCell(i.name),
      sanitizeCSVCell(i.company),
      sanitizeCSVCell(i.email),
      sanitizeCSVCell(i.phone),
      sanitizeCSVCell(i.service),
      sanitizeCSVCell(i.budget),
      sanitizeCSVCell(i.timeline),
      sanitizeCSVCell(i.status),
      sanitizeCSVCell(i.message),
    ]);

    const csvContent = [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `webnexora-leads-${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  },
};

export default inquiryService;
