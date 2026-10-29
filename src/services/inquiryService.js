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
      console.error('Error reading inquiries:', e);
      return INITIAL_INQUIRIES;
    }
  },

  // Save new client inquiry
  saveInquiry(inquiryData) {
    const inquiries = this.getInquiries();
    const newInquiry = {
      id: `inq-${Date.now()}`,
      name: inquiryData.name || 'Anonymous',
      company: inquiryData.company || 'Direct Client',
      email: inquiryData.email || '',
      phone: inquiryData.phone || '',
      service: inquiryData.service || 'Website Development',
      budget: inquiryData.budget || 'Flexible',
      timeline: inquiryData.timeline || 'Flexible',
      message: inquiryData.message || '',
      status: 'New',
      createdAt: new Date().toISOString(),
      source: inquiryData.source || 'Website Lead',
    };

    const updated = [newInquiry, ...inquiries];
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      window.dispatchEvent(new Event('webnexora_inquiry_updated'));
    } catch (e) {
      console.error('Error saving inquiry:', e);
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
      i.id,
      new Date(i.createdAt).toLocaleString(),
      `"${(i.name || '').replace(/"/g, '""')}"`,
      `"${(i.company || '').replace(/"/g, '""')}"`,
      i.email,
      i.phone,
      `"${i.service || ''}"`,
      `"${i.budget || ''}"`,
      `"${i.timeline || ''}"`,
      i.status,
      `"${(i.message || '').replace(/"/g, '""')}"`,
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
