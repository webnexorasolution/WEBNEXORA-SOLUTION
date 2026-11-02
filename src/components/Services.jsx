import { Link } from 'react-router-dom';
import { ArrowUpRight, Check } from 'lucide-react';
import './Services.css';

const services = [
  {
    id: 'web-dev',
    theme: 'light',
    badgeTheme: 'lime',
    line1: 'Custom website',
    line2: 'development',
    title: 'Website Development',
    badge: 'Custom Code',
    desc: 'Professional business websites with clean layouts, clear messaging, and fully responsive code built for conversions.',
    features: ['Custom HTML/CSS/JS & React', '100% Mobile Responsive', 'Lightning-Fast Load Speeds'],
    illustration: (
      <svg
        className="service-2d-svg"
        viewBox="0 0 210 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Shadow Plate */}
        <rect x="16" y="22" width="164" height="120" rx="14" fill="#191A23" />
        {/* Main Browser Window */}
        <rect x="12" y="18" width="164" height="120" rx="14" fill="#FFFFFF" stroke="#191A23" strokeWidth="2.8" />

        {/* Top Header / Traffic Bar */}
        <line x1="12" y1="46" x2="176" y2="46" stroke="#191A23" strokeWidth="2.2" />
        <circle cx="26" cy="32" r="4.5" fill="#FF5F56" stroke="#191A23" strokeWidth="1" />
        <circle cx="39" cy="32" r="4.5" fill="#FFBD2E" stroke="#191A23" strokeWidth="1" />
        <circle cx="52" cy="32" r="4.5" fill="#B9FF66" stroke="#191A23" strokeWidth="1" />

        {/* URL Pill (Textless Graphic) */}
        <rect x="68" y="25" width="96" height="15" rx="4.5" fill="#F3F3F3" stroke="#191A23" strokeWidth="1.4" />
        <line x1="77" y1="32.5" x2="120" y2="32.5" stroke="#191A23" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.7" />

        {/* Big Bold Code Brackets */}
        <path d="M42 66 L25 83 L42 100" fill="none" stroke="#191A23" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="58" y1="108" x2="78" y2="58" stroke="#B9FF66" strokeWidth="6" strokeLinecap="round" />
        <line x1="58" y1="108" x2="78" y2="58" stroke="#191A23" strokeWidth="2.4" strokeLinecap="round" />
        <path d="M94 66 L111 83 L94 100" fill="none" stroke="#191A23" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />

        {/* Code Lines on Right */}
        <rect x="124" y="66" width="42" height="7" rx="3.5" fill="#191A23" />
        <rect x="124" y="80" width="32" height="7" rx="3.5" fill="#B9FF66" stroke="#191A23" strokeWidth="1.4" />
        <rect x="124" y="94" width="38" height="7" rx="3.5" fill="#191A23" fillOpacity="0.25" />

        {/* Floating Code Bracket Icon Badge (Top-Right, 100% Textless) */}
        <g className="svc-float-slow">
          <rect x="128" y="7" width="76" height="26" rx="7" fill="#191A23" />
          <rect x="125" y="4" width="76" height="26" rx="7" fill="#B9FF66" stroke="#191A23" strokeWidth="2.2" />
          {/* Mini code brackets and lightning bolt */}
          <path d="M141 13 L136 17 L141 21" stroke="#191A23" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M165 13 L170 17 L165 21" stroke="#191A23" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M154 11 L148 18 H153 L151 23 L158 16 H153 Z" fill="#191A23" />
          <circle cx="187" cy="17" r="3" fill="#191A23" />
        </g>

        {/* Floating Cursor Pointer (Bottom) */}
        <g className="svc-float-fast">
          <path d="M104 114 L118 128 L112 130 L117 139 L111 142 L106 133 L100 137 Z" fill="#FFFFFF" stroke="#191A23" strokeWidth="2.2" strokeLinejoin="round" />
        </g>

        {/* Positivus 4-Point Star Sparkle */}
        <path d="M196 48 C196 55 191 58 184 58 C191 58 196 61 196 68 C196 61 201 58 208 58 C201 58 196 55 196 48 Z" fill="#B9FF66" stroke="#191A23" strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    id: 'ecommerce',
    theme: 'dark',
    badgeTheme: 'white',
    line1: 'E-Commerce',
    line2: 'storefronts',
    title: 'E-Commerce Websites',
    badge: 'Storefronts',
    desc: 'Feature-rich online store experiences to showcase your catalog and make shopping frictionless for your customers.',
    features: ['Modern Product Catalogs', 'Secure Payment Gateways', 'Inventory & Order Tracking'],
    illustration: (
      <svg
        className="service-2d-svg"
        viewBox="0 0 210 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Shopping Bag Shadow */}
        <rect x="36" y="40" width="112" height="106" rx="16" fill="#B9FF66" />
        {/* Shopping Bag Body */}
        <rect x="32" y="36" width="112" height="106" rx="16" fill="#FFFFFF" stroke="#191A23" strokeWidth="3" />

        {/* Bag Handles Arch */}
        <path d="M64 36 V18 C64 6 112 6 112 18 V36" fill="none" stroke="#B9FF66" strokeWidth="7" strokeLinecap="round" />
        <path d="M64 36 V18 C64 6 112 6 112 18 V36" fill="none" stroke="#191A23" strokeWidth="2.8" strokeLinecap="round" />

        {/* Big Verified Seal Badge on Bag */}
        <circle cx="88" cy="88" r="28" fill="#B9FF66" stroke="#191A23" strokeWidth="2.8" />
        {/* Bold Checkmark inside seal */}
        <path d="M76 88 L84 96 L101 78" fill="none" stroke="#191A23" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />

        {/* Floating Credit Card (Top-Right) */}
        <g className="svc-float-slow">
          <rect x="108" y="50" width="94" height="56" rx="9" fill="#000000" />
          <rect x="105" y="47" width="94" height="56" rx="9" fill="#2A2B38" stroke="#B9FF66" strokeWidth="2.4" />
          {/* Card Gold/Lime Chip */}
          <rect x="115" y="58" width="18" height="13" rx="3.5" fill="#B9FF66" stroke="#191A23" strokeWidth="1.4" />
          {/* Card Number lines */}
          <line x1="115" y1="84" x2="148" y2="84" stroke="#FFFFFF" strokeWidth="2.8" strokeLinecap="round" />
          <line x1="156" y1="84" x2="186" y2="84" stroke="#FFFFFF" strokeWidth="2.8" strokeLinecap="round" />
          {/* Brand circles */}
          <circle cx="172" cy="64" r="7" fill="#FF5F56" fillOpacity="0.85" />
          <circle cx="182" cy="64" r="7" fill="#FFBD2E" fillOpacity="0.85" />
        </g>

        {/* Floating Price Tag / Sale Icon Pill (Bottom-Left, 100% Textless) */}
        <g className="svc-float-fast">
          <rect x="10" y="118" width="80" height="26" rx="7" fill="#000000" />
          <rect x="8" y="115" width="80" height="26" rx="7" fill="#B9FF66" stroke="#191A23" strokeWidth="2.2" />
          {/* Vector Price Tag & Cart Symbol */}
          <path d="M22 122 H28 L34 128 L28 134 H22 Z" fill="#191A23" />
          <circle cx="25" cy="128" r="1.5" fill="#B9FF66" />
          {/* Vector Shopping Cart */}
          <path d="M44 123 H48 L52 133 H64 L67 126 H49" fill="none" stroke="#191A23" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="54" cy="135" r="1.8" fill="#191A23" />
          <circle cx="62" cy="135" r="1.8" fill="#191A23" />
          {/* Mini star */}
          <path d="M74 123 L75 127 L79 127 L76 129 L77 133 L74 130 L71 133 L72 129 L69 127 L73 127 Z" fill="#191A23" />
        </g>

        {/* Positivus Sparkle */}
        <path d="M198 28 C198 34 193 37 187 37 C193 37 198 40 198 46 C198 40 203 37 209 37 C203 37 198 34 198 28 Z" fill="#B9FF66" />
      </svg>
    ),
  },
  {
    id: 'mobile-apps',
    theme: 'dark',
    badgeTheme: 'white',
    line1: 'Mobile app',
    line2: 'development',
    title: 'Mobile App Development',
    badge: 'Cross-Platform',
    desc: 'High-performance cross-platform mobile apps for iOS and Android engineered with modern web tech and Capacitor framework.',
    features: ['Native iOS & Android Builds', 'Capacitor Plugins & Hardware APIs', 'App Store & Play Store Deployment'],
    illustration: (
      <svg
        className="service-2d-svg"
        viewBox="0 0 210 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Smartphone Shadow */}
        <rect x="52" y="8" width="98" height="148" rx="20" fill="#B9FF66" />
        {/* Smartphone Body */}
        <rect x="48" y="4" width="98" height="148" rx="20" fill="#FFFFFF" stroke="#191A23" strokeWidth="3" />

        {/* Dynamic Island Pill */}
        <rect x="79" y="12" width="36" height="7.5" rx="3.75" fill="#191A23" />

        {/* Header Avatar & Search bar */}
        <circle cx="65" cy="31" r="7" fill="#B9FF66" stroke="#191A23" strokeWidth="1.6" />
        <rect x="78" y="26" width="56" height="9" rx="4.5" fill="#F3F3F3" stroke="#191A23" strokeWidth="1.4" />

        {/* Featured Widget Card */}
        <rect x="58" y="44" width="78" height="34" rx="8" fill="#F3F3F3" stroke="#191A23" strokeWidth="1.8" />
        <line x1="67" y1="55" x2="106" y2="55" stroke="#191A23" strokeWidth="2.4" strokeLinecap="round" />
        <rect x="67" y="63" width="46" height="7.5" rx="3.75" fill="#B9FF66" stroke="#191A23" strokeWidth="1.2" />

        {/* Dark Widget Card */}
        <rect x="58" y="86" width="78" height="32" rx="8" fill="#191A23" />
        <circle cx="71" cy="102" r="5" fill="#B9FF66" />
        <line x1="84" y1="102" x2="124" y2="102" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" />

        {/* 4 Mini App Icons Grid */}
        <rect x="58" y="125" width="15" height="15" rx="3.5" fill="#B9FF66" stroke="#191A23" strokeWidth="1.2" />
        <rect x="79" y="125" width="15" height="15" rx="3.5" fill="#191A23" />
        <rect x="100" y="125" width="15" height="15" rx="3.5" fill="#F3F3F3" stroke="#191A23" strokeWidth="1.2" />
        <rect x="121" y="125" width="15" height="15" rx="3.5" fill="#FFBD2E" stroke="#191A23" strokeWidth="1.2" />

        {/* Home Bar Indicator */}
        <line x1="77" y1="145" x2="117" y2="145" stroke="#191A23" strokeWidth="3.2" strokeLinecap="round" />

        {/* Floating Connectivity & Platform Signal Pill (Top-Right, 100% Textless) */}
        <g className="svc-float-slow">
          <rect x="126" y="18" width="78" height="26" rx="7" fill="#000000" />
          <rect x="123" y="15" width="78" height="26" rx="7" fill="#B9FF66" stroke="#191A23" strokeWidth="2.2" />
          {/* Phone icon */}
          <rect x="133" y="21" width="9" height="14" rx="2" fill="#191A23" />
          <circle cx="137.5" cy="32" r="1" fill="#B9FF66" />
          {/* Signal bars */}
          <rect x="148" y="29" width="3" height="5" rx="1" fill="#191A23" />
          <rect x="153" y="26" width="3" height="8" rx="1" fill="#191A23" />
          <rect x="158" y="23" width="3" height="11" rx="1" fill="#191A23" />
          <rect x="163" y="20" width="3" height="14" rx="1" fill="#191A23" />
          {/* Wifi waves */}
          <circle cx="178" cy="31" r="1.8" fill="#191A23" />
          <path d="M173 27 C176 24 180 24 183 27" stroke="#191A23" strokeWidth="1.8" fill="none" strokeLinecap="round" />
          <path d="M170 23 C175 19 181 19 186 23" stroke="#191A23" strokeWidth="1.8" fill="none" strokeLinecap="round" />
        </g>

        {/* Floating Speed Bolt & Performance Pill (Bottom-Left, 100% Textless) */}
        <g className="svc-float-fast">
          <rect x="6" y="98" width="74" height="26" rx="7" fill="#000000" />
          <rect x="4" y="95" width="74" height="26" rx="7" fill="#FFFFFF" stroke="#191A23" strokeWidth="2.2" />
          {/* Lightning bolt */}
          <path d="M20 100 L13 109 H19 L16 117 L25 107 H19 Z" fill="#B9FF66" stroke="#191A23" strokeWidth="1.5" strokeLinejoin="round" />
          {/* High-frequency pulse waveform */}
          <path d="M30 108 L34 108 L37 102 L41 114 L45 105 L48 108 L55 108" fill="none" stroke="#191A23" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          {/* Star sparkle */}
          <circle cx="65" cy="108" r="3" fill="#B9FF66" stroke="#191A23" strokeWidth="1" />
        </g>

        {/* Positivus Sparkle */}
        <path d="M196 60 C196 66 191 69 185 69 C191 69 196 72 196 78 C196 72 201 69 207 69 C201 69 196 66 196 60 Z" fill="#B9FF66" />
      </svg>
    ),
  },
  {
    id: 'uiux',
    theme: 'light',
    badgeTheme: 'lime',
    line1: 'UI/UX design',
    line2: 'systems',
    title: 'UI/UX Design',
    badge: 'User Experience',
    desc: 'Intuitive page structures, design systems, and user journeys that guide visitors straight to conversion.',
    features: ['Wireframes & High-Fi Prototypes', 'Modern Aesthetic Guidelines', 'Conversion-Optimized UX'],
    illustration: (
      <svg
        className="service-2d-svg"
        viewBox="0 0 210 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Canvas Artboard Shadow */}
        <rect x="24" y="20" width="156" height="122" rx="14" fill="#191A23" />
        {/* Canvas Artboard Body */}
        <rect x="20" y="16" width="156" height="122" rx="14" fill="#FFFFFF" stroke="#191A23" strokeWidth="2.8" />

        {/* Wireframe Header */}
        <rect x="32" y="28" width="48" height="9" rx="4.5" fill="#B9FF66" stroke="#191A23" strokeWidth="1.5" />
        <circle cx="160" cy="32" r="6.5" fill="#191A23" />

        {/* 2 Wireframe Column Blocks */}
        <rect x="32" y="45" width="60" height="40" rx="7" fill="#F3F3F3" stroke="#191A23" strokeWidth="1.6" />
        <line x1="41" y1="56" x2="72" y2="56" stroke="#191A23" strokeWidth="2.2" strokeLinecap="round" />
        <rect x="41" y="65" width="42" height="6.5" rx="3.25" fill="#191A23" fillOpacity="0.3" />

        <rect x="102" y="45" width="60" height="40" rx="7" fill="#F3F3F3" stroke="#191A23" strokeWidth="1.6" />
        <line x1="111" y1="56" x2="142" y2="56" stroke="#191A23" strokeWidth="2.2" strokeLinecap="round" />
        <rect x="111" y="65" width="42" height="6.5" rx="3.25" fill="#B9FF66" stroke="#191A23" strokeWidth="1.2" />

        {/* Smooth Vector Bezier Path */}
        <path d="M36 118 C 66 88, 108 136, 162 102" fill="none" stroke="#191A23" strokeWidth="3.4" strokeLinecap="round" />

        {/* Bezier Vector Diamond Anchors */}
        <rect x="68" y="96" width="10" height="10" transform="rotate(45 73 101)" fill="#B9FF66" stroke="#191A23" strokeWidth="2.2" />
        <rect x="136" y="108" width="10" height="10" transform="rotate(45 141 113)" fill="#B9FF66" stroke="#191A23" strokeWidth="2.2" />

        {/* Vector Pen Tool / Stylus */}
        <g transform="translate(10, -2)">
          <path d="M128 72 L144 56 L152 64 L136 80 L126 82 Z" fill="#191A23" stroke="#191A23" strokeWidth="1.6" strokeLinejoin="round" />
          <path d="M126 82 L130 78 L134 82 Z" fill="#B9FF66" />
        </g>

        {/* Floating Swatches Pill (Top-Right, 100% Textless) */}
        <g className="svc-float-slow">
          <rect x="122" y="5" width="82" height="28" rx="14" fill="#191A23" />
          <rect x="119" y="3" width="82" height="28" rx="14" fill="#FFFFFF" stroke="#191A23" strokeWidth="2.2" />
          <circle cx="134" cy="17" r="6.5" fill="#B9FF66" stroke="#191A23" strokeWidth="1.4" />
          <circle cx="155" cy="17" r="6.5" fill="#191A23" />
          <circle cx="176" cy="17" r="6.5" fill="#FF5F56" />
        </g>

        {/* Floating Figma Cursor Arrow (Bottom) */}
        <g className="svc-float-fast">
          <path d="M86 106 L99 119 L94 121 L98 129 L93 131 L90 123 L83 126 Z" fill="#FFFFFF" stroke="#191A23" strokeWidth="2.2" strokeLinejoin="round" />
        </g>

        {/* Positivus Sparkle */}
        <path d="M198 44 C198 50 193 53 187 53 C193 53 198 56 198 62 C198 56 203 53 209 53 C203 53 198 50 198 44 Z" fill="#B9FF66" stroke="#191A23" strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    id: 'seo',
    theme: 'light',
    badgeTheme: 'lime',
    line1: 'Search engine',
    line2: 'optimization',
    title: 'Search Engine Optimization',
    badge: 'Organic Visibility',
    desc: 'Search-optimized website foundations, technical speed audits, and keyword strategies to increase organic visibility.',
    features: ['On-Page Meta & Schema', 'Core Web Vitals Tuning', 'Keyword & Competitor Strategy'],
    illustration: (
      <svg
        className="service-2d-svg"
        viewBox="0 0 210 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Solid Shadow Plate */}
        <rect x="18" y="22" width="166" height="118" rx="14" fill="#191A23" />
        {/* Main Search Engine Window */}
        <rect x="14" y="18" width="166" height="118" rx="14" fill="#FFFFFF" stroke="#191A23" strokeWidth="2.8" />

        {/* Browser Top Bar */}
        <line x1="14" y1="46" x2="180" y2="46" stroke="#191A23" strokeWidth="2.2" />
        <circle cx="28" cy="32" r="4.5" fill="#FF5F56" stroke="#191A23" strokeWidth="1" />
        <circle cx="41" cy="32" r="4.5" fill="#FFBD2E" stroke="#191A23" strokeWidth="1" />
        <circle cx="54" cy="32" r="4.5" fill="#B9FF66" stroke="#191A23" strokeWidth="1" />

        {/* Search Input Bar with Mini Search Lens */}
        <rect x="68" y="24" width="104" height="16" rx="5" fill="#F3F3F3" stroke="#191A23" strokeWidth="1.4" />
        <circle cx="78" cy="32" r="3" fill="none" stroke="#191A23" strokeWidth="1.4" />
        <line x1="80" y1="34" x2="83" y2="37" stroke="#191A23" strokeWidth="1.4" strokeLinecap="round" />
        <line x1="88" y1="32" x2="136" y2="32" stroke="#191A23" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.5" />
        <rect x="150" y="26" width="18" height="12" rx="3.5" fill="#B9FF66" stroke="#191A23" strokeWidth="1.2" />

        {/* Rank #1 Featured Search Result (Highlighted in Bold Lime) */}
        <g>
          <rect x="24" y="54" width="146" height="34" rx="8" fill="#B9FF66" stroke="#191A23" strokeWidth="2.2" />
          {/* Result Title Bar */}
          <rect x="34" y="62" width="76" height="7" rx="3.5" fill="#191A23" />
          {/* Result Snippet Lines */}
          <rect x="34" y="73" width="98" height="5" rx="2.5" fill="#191A23" fillOpacity="0.55" />
          {/* Verified / Top Rank Badge */}
          <circle cx="154" cy="71" r="8" fill="#191A23" />
          <path d="M150 71 L153 74 L159 68" fill="none" stroke="#B9FF66" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </g>

        {/* Secondary SERP Result Line Items */}
        <rect x="24" y="94" width="94" height="6.5" rx="3.25" fill="#191A23" />
        <rect x="24" y="105" width="72" height="5" rx="2.5" fill="#191A23" fillOpacity="0.3" />
        <rect x="24" y="114" width="84" height="4.5" rx="2" fill="#191A23" fillOpacity="0.2" />

        {/* Floating Speed / SEO Performance Badge (Top-Right) */}
        <g className="svc-float-slow">
          <rect x="130" y="6" width="74" height="26" rx="7" fill="#191A23" />
          <rect x="127" y="3" width="74" height="26" rx="7" fill="#B9FF66" stroke="#191A23" strokeWidth="2.2" />
          {/* Speedometer Gauge Arc */}
          <path d="M141 18 A7 7 0 0 1 155 18" fill="none" stroke="#191A23" strokeWidth="2.2" strokeLinecap="round" />
          <line x1="148" y1="18" x2="152" y2="13" stroke="#191A23" strokeWidth="2" strokeLinecap="round" />
          {/* Upward Rank Growth Arrow */}
          <path d="M165 21 L172 13 M172 13 H166 M172 13 V19" stroke="#191A23" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="187" cy="16" r="2.8" fill="#191A23" />
        </g>

        {/* Precision Magnifying Glass Focus Lens */}
        <g className="svc-float-fast">
          {/* Thick Brutalist Handle with Lime Core Stripe */}
          <path d="M152 118 L184 150" stroke="#191A23" strokeWidth="15" strokeLinecap="round" />
          <line x1="154" y1="120" x2="182" y2="148" stroke="#B9FF66" strokeWidth="5" strokeLinecap="round" />

          {/* Lens Shadow & Ring */}
          <circle cx="132" cy="98" r="32" fill="#191A23" />
          <circle cx="129" cy="95" r="32" fill="#FFFFFF" stroke="#191A23" strokeWidth="3.2" />
          <circle cx="129" cy="95" r="23" fill="#B9FF66" stroke="#191A23" strokeWidth="2.2" />

          {/* Precision Crosshairs inside Lens */}
          <circle cx="129" cy="95" r="11" fill="none" stroke="#191A23" strokeWidth="2" />
          <circle cx="129" cy="95" r="4" fill="#191A23" />
          <line x1="113" y1="95" x2="145" y2="95" stroke="#191A23" strokeWidth="2" strokeLinecap="round" />
          <line x1="129" y1="79" x2="129" y2="111" stroke="#191A23" strokeWidth="2" strokeLinecap="round" />

          {/* Specular Glint Arc */}
          <path d="M112 83 C116 76 124 73 132 73" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" />
        </g>

        {/* Clean Positivus Sparkle */}
        <path d="M198 48 C198 54 193 57 187 57 C193 57 198 60 198 66 C198 60 203 57 209 57 C203 57 198 54 198 48 Z" fill="#B9FF66" stroke="#191A23" strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    id: 'marketing',
    theme: 'dark',
    badgeTheme: 'white',
    line1: 'Digital growth',
    line2: 'marketing',
    title: 'Digital Marketing & Growth',
    badge: 'Paid & Organic Reach',
    desc: 'Targeted campaigns and digital marketing roadmaps to help your business reach, engage, and convert ideal audiences.',
    features: ['High-Converting Funnels', 'Social & Search Ad Strategy', 'Analytics & ROI Reporting'],
    illustration: (
      <svg
        className="service-2d-svg"
        viewBox="0 0 210 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Audience Reach Concentric Expanding Waves (Left Side) */}
        <g>
          <path d="M52 46 C28 66 28 98 52 118" stroke="#FFFFFF" strokeWidth="3.2" strokeLinecap="round" fill="none" opacity="0.4" />
          <path d="M36 34 C10 60 10 104 36 130" stroke="#B9FF66" strokeWidth="3.6" strokeLinecap="round" strokeDasharray="6 7" fill="none" />
          <path d="M20 22 C-8 54 -8 110 20 142" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" fill="none" opacity="0.25" />
        </g>

        {/* Giant Electric Lime Shadow Plate (High Contrast "POP" Factor) */}
        <circle cx="106" cy="86" r="56" fill="#B9FF66" />

        {/* Main Precision Target Bullseye Platform */}
        <g className="svc-float-slow">
          {/* Outer White Ring */}
          <circle cx="102" cy="82" r="56" fill="#FFFFFF" stroke="#191A23" strokeWidth="3.4" />
          {/* Middle Dark Charcoal Ring */}
          <circle cx="102" cy="82" r="42" fill="#191A23" />
          {/* Inner White Ring */}
          <circle cx="102" cy="82" r="28" fill="#FFFFFF" stroke="#191A23" strokeWidth="2.4" />
          {/* Bullseye Core (Vibrant Electric Lime) */}
          <circle cx="102" cy="82" r="14" fill="#B9FF66" stroke="#191A23" strokeWidth="2.8" />
          <circle cx="102" cy="82" r="4.5" fill="#191A23" />

          {/* Compass / Crosshair Alignment Ticks */}
          <line x1="46" y1="82" x2="60" y2="82" stroke="#191A23" strokeWidth="3" />
          <line x1="144" y1="82" x2="158" y2="82" stroke="#191A23" strokeWidth="3" />
          <line x1="102" y1="26" x2="102" y2="40" stroke="#191A23" strokeWidth="3" />
          <line x1="102" y1="124" x2="102" y2="138" stroke="#191A23" strokeWidth="3" />
        </g>

        {/* The Piercing Marketing Arrow (In Flight, Hitting Bullseye Dead-Center) */}
        <g className="svc-float-fast">
          {/* Arrow Shadow */}
          <line x1="177" y1="19" x2="108" y2="88" stroke="#000000" strokeWidth="5.5" strokeLinecap="round" />
          {/* Arrow Shaft */}
          <line x1="173" y1="15" x2="104" y2="84" stroke="#FFFFFF" strokeWidth="5.5" strokeLinecap="round" />
          {/* Inner Lime Core Line */}
          <line x1="171" y1="17" x2="114" y2="74" stroke="#B9FF66" strokeWidth="2" strokeLinecap="round" />

          {/* Arrow Fletching / Wings (Top-Right) */}
          <path
            d="M158 11 L178 9 L174 29 L167 22 L156 24 Z"
            fill="#B9FF66"
            stroke="#191A23"
            strokeWidth="2.4"
            strokeLinejoin="round"
          />

          {/* Chevron Arrowhead Embedded in Bullseye */}
          <polygon points="102,82 112,72 110,84" fill="#191A23" />
        </g>

        {/* Impact Energy Burst Sparkle */}
        <path d="M116 66 C116 71 112 73 107 73 C112 73 116 75 116 80 C116 75 120 73 125 73 C120 73 116 71 116 66 Z" fill="#B9FF66" />

        {/* Floating Conversion Funnel & Acceleration Badge (Bottom-Right) */}
        <g className="svc-float-slow">
          <rect x="122" y="112" width="76" height="28" rx="7" fill="#000000" />
          <rect x="119" y="109" width="76" height="28" rx="7" fill="#2A2B38" stroke="#B9FF66" strokeWidth="2.2" />
          {/* Marketing Funnel */}
          <path d="M130 116 H144 L139 123 V129 L135 127 V123 Z" fill="#B9FF66" stroke="#FFFFFF" strokeWidth="1.2" />
          {/* Fast-forward Chevrons */}
          <path d="M152 119 L156 123 L152 127 M158 119 L162 123 L158 127" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          {/* Upward Growth Arrow */}
          <path d="M174 127 L182 119 M182 119 H176 M182 119 V125" stroke="#B9FF66" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </g>

        {/* High-Impact Ambient Sparkles */}
        <path d="M194 36 C194 42 189 45 183 45 C189 45 194 48 194 54 C194 48 199 45 205 45 C199 45 194 42 194 36 Z" fill="#B9FF66" />
        <path d="M78 20 C78 25 74 28 69 28 C74 28 78 31 78 36 C78 31 82 28 87 28 C82 28 78 25 78 20 Z" fill="#B9FF66" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section className="section services-section positivus-services-section" id="services">
      <div className="container">
        {/* POSITIVUS SECTION HEADER ROW */}
        <div className="section-head section-header-row" data-aos>
          <h2 className="section-title-badge">
            <span className="title-badge">Services</span>
          </h2>
          <p className="section-head-desc">
            At Webnexora Solution, we engineer high-performance web applications,
            bespoke storefronts, and conversion-focused digital strategies to scale your business.
          </p>
        </div>

        {/* 2-COLUMN SERVICE CARDS GRID */}
        <div className="services-cards-grid">
          {services.map((s, i) => {
            const isDark = s.theme === 'dark';
            return (
              <article
                key={s.id}
                className={`service-card ${isDark ? 'card-dark' : 'card-light'}`}
                data-aos
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                {/* INFO (TITLE, DESCRIPTION, FEATURES) */}
                <div className="service-card-info">
                  <h3 className="service-card-title">
                    <span className={`svc-title-pill ${s.badgeTheme}`}>
                      {s.line1}
                    </span>
                    <br />
                    <span className={`svc-title-pill ${s.badgeTheme}`}>
                      {s.line2}
                    </span>
                  </h3>
                  <p className="service-card-desc">{s.desc}</p>

                  {/* Feature Bullets */}
                  <ul className="service-features-list">
                    {s.features.map((feat) => (
                      <li key={feat} className="service-feature-item">
                        <span className={`feat-icon-dot ${isDark ? 'feat-lime' : 'feat-dark'}`}>
                          <Check size={12} strokeWidth={3} />
                        </span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* ACTION (CIRCULAR ARROW + LEARN MORE) */}
                <div className="service-card-action">
                  <Link
                    to="/services"
                    className={`service-card-link ${isDark ? 'link-dark' : 'link-light'}`}
                    id={`svc-btn-${s.id}`}
                  >
                    <span className={`service-arrow-circle ${isDark ? 'circle-white' : 'circle-dark'}`}>
                      <ArrowUpRight size={20} strokeWidth={2.4} />
                    </span>
                    <span className="service-link-text">Learn more</span>
                  </Link>
                </div>

                {/* VISUAL (VECTOR ILLUSTRATION - 100% TEXTLESS) */}
                <div className="service-card-visual">
                  <div className="service-illustration-wrap">
                    {s.illustration}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* BOTTOM CTA BUTTON */}
        <div className="services-bottom-row" data-aos>
          <Link
            className="btn btn-primary"
            to="/services"
            id="all-services-btn"
          >
            View All Services &amp; Packages <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}
