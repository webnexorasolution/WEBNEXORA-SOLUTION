import { useState, useEffect, useMemo, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Lock,
  LogOut,
  Download,
  Search,
  MessageCircle,
  Phone,
  Mail,
  Trash2,
  Eye,
  EyeOff,
  CheckCircle2,
  Clock,
  Sparkles,
  ArrowUpRight,
  ArrowLeft,
  KeyRound,
  TrendingUp,
  Inbox,
  X,
  Filter,
  ShieldCheck,
  Building,
  Calendar,
  Wallet,
  ChevronDown,
  Check,
  Globe,
  AlertTriangle,
} from 'lucide-react';
import inquiryService from '../services/inquiryService';
import siteConfig from '../config/site';
import './AdminDashboard.css';

const DEFAULT_PASSCODE = import.meta.env.VITE_ADMIN_PASSCODE || 'webnexora2026';

const STATUS_OPTIONS = ['New', 'Contacted', 'Proposal Sent', 'Converted', 'Archived'];

// Custom status popover component
function StatusDropdown({ status, onSelect }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open]);

  const getStatusColor = (st) => {
    switch (st) {
      case 'New': return { dot: '#10B981', label: 'New' };
      case 'Contacted': return { dot: '#3B82F6', label: 'Contacted' };
      case 'Proposal Sent': return { dot: '#8B5CF6', label: 'Proposal Sent' };
      case 'Converted': return { dot: '#F59E0B', label: 'Converted' };
      case 'Archived': return { dot: '#6B7280', label: 'Archived' };
      default: return { dot: '#6B7280', label: st };
    }
  };

  const currentTheme = getStatusColor(status);

  return (
    <div className="custom-status-dropdown-wrap" ref={ref}>
      <button
        type="button"
        className={`status-pill-trigger status-${status.toLowerCase().replace(/\s+/g, '-')}`}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="st-dot" style={{ backgroundColor: currentTheme.dot }} />
        <span className="st-val-text">{status}</span>
        <ChevronDown size={11} strokeWidth={2.4} className={`st-chevron ${open ? 'st-chevron-open' : ''}`} />
      </button>

      {open && (
        <div className="status-dropdown-popover">
          <div className="st-popover-header">Update Lead Status</div>
          <div className="st-options-list">
            {STATUS_OPTIONS.map((opt) => {
              const isSelected = opt === status;
              const optTheme = getStatusColor(opt);
              return (
                <button
                  key={opt}
                  type="button"
                  className={`st-option-item ${isSelected ? 'st-option-selected' : ''}`}
                  onClick={() => {
                    onSelect(opt);
                    setOpen(false);
                  }}
                >
                  <span className="st-opt-dot" style={{ backgroundColor: optTheme.dot }} />
                  <span className="st-opt-label">{opt}</span>
                  {isSelected && <Check size={12} strokeWidth={2.5} className="st-opt-check" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default function AdminDashboard() {
  // Auth state
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem('webnexora_admin_auth') === 'true';
  });
  const [passcode, setPasscode] = useState('');
  const [showPasscode, setShowPasscode] = useState(false);
  const [authError, setAuthError] = useState('');

  // Data state
  const [inquiries, setInquiries] = useState([]);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [serviceFilter, setServiceFilter] = useState('All');
  const [activeInquiry, setActiveInquiry] = useState(null);
  const [leadToDelete, setLeadToDelete] = useState(null);
  const [notification, setNotification] = useState('');

  // Load inquiries
  const loadData = () => {
    setInquiries(inquiryService.getInquiries());
  };

  useEffect(() => {
    loadData();
    const handleUpdate = () => loadData();
    window.addEventListener('webnexora_inquiry_updated', handleUpdate);
    return () => window.removeEventListener('webnexora_inquiry_updated', handleUpdate);
  }, []);

  const showNotification = (msg) => {
    setNotification(msg);
    setTimeout(() => setNotification(''), 4000);
  };

  // Login handler with flexible matching for agency passkeys
  const handleLogin = (e) => {
    e.preventDefault();
    const entered = (passcode || '').trim().toLowerCase();
    const envPasscode = (import.meta.env.VITE_ADMIN_PASSCODE || '').trim().toLowerCase();
    
    // Accept standard agency passkeys
    const acceptedKeys = [
      'webnexora2026',
      'webnexora@2026',
      'admin2026',
      envPasscode,
    ].filter(Boolean);

    if (acceptedKeys.includes(entered)) {
      setIsAuthenticated(true);
      localStorage.setItem('webnexora_admin_auth', 'true');
      setAuthError('');
      showNotification('Welcome to Webnexora Solution Admin Console');
    } else {
      setAuthError('Invalid passcode. Please enter the correct agency passkey.');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('webnexora_admin_auth');
  };

  // Status update
  const handleStatusChange = (id, newStatus) => {
    inquiryService.updateStatus(id, newStatus);
    showNotification(`Lead #${id.slice(-4)} status updated to "${newStatus}"`);
    if (activeInquiry && activeInquiry.id === id) {
      setActiveInquiry({ ...activeInquiry, status: newStatus });
    }
  };

  // Delete inquiry request
  const handleDelete = (id, name) => {
    setLeadToDelete({ id, name });
  };

  // Confirmed delete execution
  const confirmDelete = () => {
    if (leadToDelete) {
      inquiryService.deleteInquiry(leadToDelete.id);
      showNotification(`Deleted inquiry from ${leadToDelete.name}`);
      if (activeInquiry && activeInquiry.id === leadToDelete.id) {
        setActiveInquiry(null);
      }
      setLeadToDelete(null);
    }
  };

  // Export CSV
  const handleExport = () => {
    inquiryService.exportCSV();
    showNotification('Exported all leads to CSV spreadsheet');
  };

  // Filtered inquiries
  const filteredInquiries = useMemo(() => {
    return inquiries.filter((item) => {
      const matchSearch =
        search === '' ||
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        (item.company && item.company.toLowerCase().includes(search.toLowerCase())) ||
        (item.email && item.email.toLowerCase().includes(search.toLowerCase())) ||
        (item.phone && item.phone.toLowerCase().includes(search.toLowerCase())) ||
        (item.message && item.message.toLowerCase().includes(search.toLowerCase()));

      const matchStatus = statusFilter === 'All' || item.status === statusFilter;
      const matchService = serviceFilter === 'All' || item.service === serviceFilter;

      return matchSearch && matchStatus && matchService;
    });
  }, [inquiries, search, statusFilter, serviceFilter]);

  // Unique services list for filter dropdown
  const uniqueServices = useMemo(() => {
    const set = new Set(inquiries.map((i) => i.service).filter(Boolean));
    return ['All', ...Array.from(set)];
  }, [inquiries]);

  // Metrics
  const stats = useMemo(() => {
    const total = inquiries.length;
    const newCount = inquiries.filter((i) => i.status === 'New').length;
    const convertedCount = inquiries.filter((i) => i.status === 'Converted').length;
    const convRate = total > 0 ? Math.round((convertedCount / total) * 100) : 0;
    return { total, newCount, convertedCount, convRate };
  }, [inquiries]);

  // LOGIN SCREEN
  if (!isAuthenticated) {
    return (
      <div className="admin-auth-screen">
        <div className="admin-auth-ambient-glow" />
        <div className="admin-auth-card glass-card">
          <div className="auth-brand-badge">
            <span className="auth-badge-dot" /> Secure Gateway · Webnexora Console
          </div>

          <div className="auth-icon-wrap">
            <div className="auth-icon-inner">
              <Lock size={26} strokeWidth={2.4} />
            </div>
          </div>

          <h2>Agency Admin Access</h2>
          <p>Encrypted command console for managing client inquiries, proposals, and pipeline leads.</p>

          <form onSubmit={handleLogin} className="admin-login-form">
            <div className="auth-field">
              <label htmlFor="admin-passcode">Security Passcode</label>
              <div className="auth-input-wrapper">
                <span className="auth-input-icon">
                  <KeyRound size={17} />
                </span>
                <input
                  id="admin-passcode"
                  type={showPasscode ? 'text' : 'password'}
                  placeholder="••••••••••••"
                  value={passcode}
                  onChange={(e) => setPasscode(e.target.value)}
                  autoFocus
                  required
                />
                <button
                  type="button"
                  className="auth-eye-btn"
                  onClick={() => setShowPasscode(!showPasscode)}
                  title={showPasscode ? 'Hide passkey' : 'Show passkey'}
                  tabIndex={-1}
                >
                  {showPasscode ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {authError && <div className="auth-error-msg">{authError}</div>}

            <button type="submit" className="btn btn-primary auth-btn">
              <span>Unlock Admin Console</span>
              <ArrowUpRight size={17} />
            </button>
          </form>

          <div className="auth-footer-actions">
            <Link to="/" className="auth-back-btn">
              <ArrowLeft size={15} /> Return to Main Website
            </Link>
            <div className="auth-system-badge">
              <span className="auth-live-indicator" /> Authorized Personnel Only · Webnexora Staff Portal
            </div>
          </div>
        </div>
      </div>
    );
  }

  // AUTHENTICATED DASHBOARD
  return (
    <div className="admin-dashboard-layout">
      {/* NOTIFICATION TOAST */}
      {notification && (
        <div className="admin-toast">
          <CheckCircle2 size={18} color="#22C55E" />
          <span>{notification}</span>
        </div>
      )}

      {/* TOPBAR */}
      <header className="admin-topbar">
        <div className="admin-topbar-inner">
          <div className="admin-topbar-left">
            <Link to="/" className="admin-logo">
              <span className="admin-logo-mark">W</span>
              <span className="admin-logo-text">
                Webnexora <span className="admin-logo-tag">Admin</span>
              </span>
            </Link>
            <span className="admin-status-pill">
              <span className="live-dot" /> Live Leads Hub
            </span>
          </div>

          <div className="admin-topbar-actions">
            <button className="admin-btn-secondary" onClick={handleExport} title="Export CSV">
              <Download size={15} /> Export CSV
            </button>
            <Link to="/" className="admin-btn-secondary admin-btn-site" title="View Public Website">
              <Globe size={14} className="site-globe-icon" />
              <span>Live Website</span>
              <ArrowUpRight size={13} className="site-arrow-icon" />
            </Link>
            <button className="admin-btn-logout" onClick={handleLogout} title="Sign Out">
              <LogOut size={15} /> Logout
            </button>
          </div>
        </div>
      </header>

      {/* MAIN CONTAINER */}
      <main className="admin-main-container">
        {/* KPI OVERVIEW CARDS */}
        <div className="admin-kpi-grid">
          <div className="admin-kpi-card bento-card">
            <div className="kpi-icon-wrap">
              <Inbox size={22} color="#121212" />
            </div>
            <div className="kpi-info">
              <span className="kpi-label">Total Inquiries</span>
              <h3 className="kpi-value">{stats.total}</h3>
              <span className="kpi-sub">All-time website leads</span>
            </div>
          </div>

          <div className="admin-kpi-card bento-card kpi-new-card">
            <div className="kpi-icon-wrap kpi-icon-lime">
              <Sparkles size={22} color="#121212" />
            </div>
            <div className="kpi-info">
              <span className="kpi-label">New / Pending</span>
              <h3 className="kpi-value">{stats.newCount}</h3>
              <span className="kpi-sub">Awaiting initial outreach</span>
            </div>
          </div>

          <div className="admin-kpi-card bento-card">
            <div className="kpi-icon-wrap">
              <CheckCircle2 size={22} color="#10b981" />
            </div>
            <div className="kpi-info">
              <span className="kpi-label">Converted Clients</span>
              <h3 className="kpi-value">{stats.convertedCount}</h3>
              <span className="kpi-sub">Signed &amp; active contracts</span>
            </div>
          </div>

          <div className="admin-kpi-card bento-card">
            <div className="kpi-icon-wrap">
              <TrendingUp size={22} color="#121212" />
            </div>
            <div className="kpi-info">
              <span className="kpi-label">Conversion Rate</span>
              <h3 className="kpi-value">{stats.convRate}%</h3>
              <span className="kpi-sub">Inquiry to client close</span>
            </div>
          </div>
        </div>

        {/* CONTROLS: SEARCH & FILTERS */}
        <div className="admin-controls-card bento-card">
          <div className="admin-search-wrap">
            <Search size={18} className="search-icon" />
            <input
              type="text"
              placeholder="Search by name, company, email, phone, or keyword..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="admin-search-input"
            />
            {search && (
              <button className="clear-search-btn" onClick={() => setSearch('')}>
                <X size={15} />
              </button>
            )}
          </div>

          <div className="admin-filter-row">
            {/* STATUS TABS */}
            <div className="status-tab-group">
              {['All', ...STATUS_OPTIONS].map((s) => (
                <button
                  key={s}
                  className={`status-tab ${statusFilter === s ? 'active' : ''}`}
                  onClick={() => setStatusFilter(s)}
                >
                  {s}
                  {s === 'All' && <span className="tab-count">{inquiries.length}</span>}
                  {s === 'New' && stats.newCount > 0 && (
                    <span className="tab-count count-new">{stats.newCount}</span>
                  )}
                </button>
              ))}
            </div>

            {/* SERVICE FILTER */}
            <div className="service-filter-wrap">
              <Filter size={14} className="filter-icon" />
              <select
                value={serviceFilter}
                onChange={(e) => setServiceFilter(e.target.value)}
                className="service-filter-select"
              >
                {uniqueServices.map((svc) => (
                  <option key={svc} value={svc}>
                    {svc === 'All' ? 'All Services' : svc}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* INQUIRIES LIST / TABLE */}
        <div className="admin-table-card bento-card">
          <div className="table-header-bar">
            <h4>
              Client Leads &amp; Inquiries ({filteredInquiries.length})
            </h4>
            <span className="table-timestamp">
              Last synced: {new Date().toLocaleTimeString()}
            </span>
          </div>

          {filteredInquiries.length === 0 ? (
            <div className="admin-empty-state">
              <Inbox size={48} strokeWidth={1.5} color="#949188" />
              <h3>No inquiries found</h3>
              <p>No client requests match your current filters or search terms.</p>
              {(search || statusFilter !== 'All' || serviceFilter !== 'All') && (
                <button
                  className="btn-reset-filters"
                  onClick={() => {
                    setSearch('');
                    setStatusFilter('All');
                    setServiceFilter('All');
                  }}
                >
                  Clear Filters
                </button>
              )}
            </div>
          ) : (
            <div className="table-responsive">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Client / Brand</th>
                    <th>Service &amp; Budget</th>
                    <th>Quick Contact</th>
                    <th>Submitted</th>
                    <th>Status</th>
                    <th style={{ textAlign: 'right' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredInquiries.map((item) => {
                    const waText = encodeURIComponent(
                      `Hello ${item.name}! Reaching out from Webnexora Solution regarding your ${item.service} inquiry.`
                    );
                    const cleanPhone = (item.phone || '').replace(/\D/g, '');

                    return (
                      <tr key={item.id} className={`lead-row ${item.status === 'New' ? 'row-new' : ''}`}>
                        {/* CLIENT */}
                        <td>
                          <div className="client-cell">
                            <div className="client-avatar">
                              {item.name ? item.name.charAt(0).toUpperCase() : 'U'}
                            </div>
                            <div className="client-meta">
                              <strong>{item.name}</strong>
                              <span>{item.company || 'Direct Client'}</span>
                            </div>
                          </div>
                        </td>

                        {/* SERVICE & BUDGET */}
                        <td>
                          <div className="service-cell">
                            <span className="svc-tag">{item.service}</span>
                            <div className="scope-meta">
                              {item.budget && <span className="budget-pill">{item.budget}</span>}
                              {item.timeline && (
                                <span className="timeline-pill">
                                  <Clock size={11} strokeWidth={2} className="timeline-icon" />
                                  <span>{item.timeline}</span>
                                </span>
                              )}
                            </div>
                          </div>
                        </td>

                        {/* CONTACT CHANNELS */}
                        <td>
                          <div className="quick-contact-actions">
                            {cleanPhone && (
                              <a
                                href={`https://wa.me/${cleanPhone}?text=${waText}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="action-circle-btn btn-wa"
                                title="Chat on WhatsApp"
                              >
                                <MessageCircle size={15} />
                              </a>
                            )}
                            {item.phone && (
                              <a
                                href={`tel:${item.phone}`}
                                className="action-circle-btn btn-phone"
                                title="Call hotline"
                              >
                                <Phone size={14} />
                              </a>
                            )}
                            {item.email && (
                              <a
                                href={`mailto:${item.email}?subject=Webnexora Solution Project Consultation`}
                                className="action-circle-btn btn-email"
                                title="Send Email"
                              >
                                <Mail size={14} />
                              </a>
                            )}
                          </div>
                        </td>

                        {/* SUBMITTED DATE */}
                        <td>
                          <div className="date-cell">
                            <div className="date-primary">
                              <Calendar size={12} strokeWidth={2} className="date-icon" />
                              <span>
                                {new Date(item.createdAt).toLocaleDateString('en-US', {
                                  day: 'numeric',
                                  month: 'short',
                                  year: 'numeric',
                                })}
                              </span>
                            </div>
                            <span className="date-time">
                              {new Date(item.createdAt).toLocaleTimeString([], {
                                hour: '2-digit',
                                minute: '2-digit',
                                hour12: true,
                              })}
                            </span>
                          </div>
                        </td>

                        {/* STATUS DROPDOWN */}
                        <td>
                          <StatusDropdown
                            status={item.status}
                            onSelect={(newStatus) => handleStatusChange(item.id, newStatus)}
                          />
                        </td>

                        {/* ACTIONS */}
                        <td style={{ textAlign: 'right' }}>
                          <div className="row-actions">
                            <button
                              className="btn-action-view"
                              onClick={() => setActiveInquiry(item)}
                              title="View Project Brief"
                            >
                              <Eye size={15} /> View
                            </button>
                            <button
                              className="btn-action-delete"
                              onClick={() => handleDelete(item.id, item.name)}
                              title="Delete inquiry"
                            >
                              <Trash2 size={15} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>

      {/* DETAIL MODAL */}
      {activeInquiry && (
        <div className="modal-overlay" onClick={() => setActiveInquiry(null)}>
          <div className="modal-content glass-card" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div>
                <span className="modal-badge">{activeInquiry.service}</span>
                <h2>{activeInquiry.name}</h2>
                <p className="modal-sub">
                  {activeInquiry.company ? `${activeInquiry.company} · ` : ''}
                  Submitted {new Date(activeInquiry.createdAt).toLocaleString()}
                </p>
              </div>
              <button className="modal-close-btn" onClick={() => setActiveInquiry(null)}>
                <X size={20} />
              </button>
            </div>

            <div className="modal-body">
              <div className="modal-grid-2">
                <div className="detail-item">
                  <span className="detail-label">Work Email</span>
                  <a href={`mailto:${activeInquiry.email}`} className="detail-val link-val">
                    {activeInquiry.email || 'N/A'}
                  </a>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Phone / WhatsApp</span>
                  <a href={`tel:${activeInquiry.phone}`} className="detail-val link-val">
                    {activeInquiry.phone || 'N/A'}
                  </a>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Estimated Budget</span>
                  <span className="detail-val">{activeInquiry.budget || 'Flexible'}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Target Timeline</span>
                  <span className="detail-val">{activeInquiry.timeline || 'Flexible'}</span>
                </div>
              </div>

              <div className="detail-message-box">
                <span className="detail-label">Client Project Description &amp; Scope:</span>
                <p className="message-text">
                  {activeInquiry.message || 'No additional message provided.'}
                </p>
              </div>

              <div className="modal-status-bar">
                <span className="detail-label">Update Status:</span>
                <div className="modal-status-buttons">
                  {STATUS_OPTIONS.map((st) => (
                    <button
                      key={st}
                      className={`modal-st-btn ${activeInquiry.status === st ? 'active' : ''}`}
                      onClick={() => handleStatusChange(activeInquiry.id, st)}
                    >
                      {st}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <div className="modal-footer-left">
                <a
                  href={`https://wa.me/${(activeInquiry.phone || '').replace(/\D/g, '')}?text=${encodeURIComponent(
                    `Hello ${activeInquiry.name}! Reaching out from Webnexora Solution regarding your project brief.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                >
                  <MessageCircle size={16} /> Open WhatsApp Chat
                </a>
              </div>
              <button className="btn-secondary" onClick={() => setActiveInquiry(null)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* DELETE CONFIRMATION MODAL */}
      {leadToDelete && (
        <div className="admin-modal-backdrop" onClick={() => setLeadToDelete(null)}>
          <div className="admin-confirm-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-icon-danger">
              <AlertTriangle size={26} color="#DC2626" strokeWidth={2.4} />
            </div>
            <h4>Confirm Lead Deletion</h4>
            <p>
              Are you sure you want to permanently delete the inquiry from <strong>"{leadToDelete.name}"</strong>?
              This record will be removed from your active agency pipeline.
            </p>
            <div className="admin-confirm-actions">
              <button
                type="button"
                className="btn-cancel-modal"
                onClick={() => setLeadToDelete(null)}
              >
                Keep Record
              </button>
              <button
                type="button"
                className="btn-delete-confirm"
                onClick={confirmDelete}
              >
                Delete Lead
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
