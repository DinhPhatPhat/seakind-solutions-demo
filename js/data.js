// ============================================================
// STATIC DATA FILE — All site content lives here
// ============================================================

const SITE = {

  // ── Developer / Freelancer ──────────────────────────────
  developer: {
    name: "Dinh Phat Phat",
    title: "Software Engineering Student & Freelancer",
    subtitle: "Java Backend · .NET · Web Development",
    bio: `Software Engineering student at Ton Duc Thang University. 
    I take on freelance projects to help small and medium-sized businesses go digital — building 
    web management systems that replace paper-based workflows with clean, modern platforms. 
    Specialized in Java and Node.js backend development, 
    with hands-on experience deploying production-ready apps via Docker, 
    Nginx, AWS, VPS. 
    If your business needs a website, a booking system, 
    or a management dashboard — I can build it and keep it running.`,
    location: "Ho Chi Minh City, Vietnam",
    email: "dinhphatphat.work@gmail.com",
    phone: "0376 630 746",
    github: "https://github.com/DinhPhatPhat",
    freelance_note: "Open to freelance projects — small & mid-sized web management systems at competitive rates.",
  },

  // ── Brand ───────────────────────────────────────────────
  brand: {
    name: "Seakind Solutions",
    tagline: "Smart Business. Simplified.",
    description: "A complete web platform for small and medium businesses — manage appointments, customers, revenue, and invoices in one place. Say goodbye to paper notebooks.",
  },

  // ── Navigation ──────────────────────────────────────────
  nav: [
    { label: "Home", href: "index.html" },
    { label: "About", href: "about.html" },
    { label: "Industries", href: "industries.html" },
    { label: "Dashboard", href: "dashboard.html" },
    { label: "Appointments", href: "appointments.html" },
    { label: "Customers", href: "customers.html" },
    { label: "Revenue", href: "revenue.html" },
    { label: "Pricing", href: "pricing.html" },
  ],

  // ── Industries ───────────────────────────────────────────
  industries: [
    {
      id: "nail",
      name: "Nail Salon",
      tagline: "Beautiful Nails, Seamless Booking",
      description: "Manage nail appointments, track loyal clients, and grow your salon — all from one elegant platform built for the nail industry.",
      emoji: "💅",
      color: "#b5477a",
      color2: "#7c1d4e",
      accent: "#f7c5dc",
      href: "demo-nail.html",
      badge: "Most Popular",
      services: [
        { name: "Manicure", price: "$35", duration: "45 min" },
        { name: "Pedicure", price: "$50", duration: "60 min" },
        { name: "Gel Nails", price: "$55", duration: "75 min" },
        { name: "Acrylic Full Set", price: "$70", duration: "90 min" },
        { name: "Nail Art (per nail)", price: "$5+", duration: "varies" },
        { name: "Full Package", price: "$110", duration: "2h 30min" },
      ],
      gallery: [
        { label: "Salon Interior", img: "images/nail/1.jpg" },
        { label: "Gel Art", img: "images/nail/2.jpg" },
        { label: "Pedicure Station", img: "images/nail/3.jpg" },
        { label: "Nail Design", img: "images/nail/4.jpg" },
      ],
      testimonials: [
        { name: "Jennifer L.", text: "Best nail salon in the area! I love how easy it is to book online.", stars: 5 },
        { name: "Michelle T.", text: "Always on time, always perfect. The gel lasts weeks!", stars: 5 },
      ],
    },
    {
      id: "spa",
      name: "Spa & Massage",
      tagline: "Relax. Restore. Renew.",
      description: "Give your clients the premium spa experience they deserve — with effortless online booking, membership tracking, and revenue management.",
      emoji: "🌿",
      color: "#2d7a5e",
      color2: "#1a4d3a",
      accent: "#c8ead8",
      href: "demo-spa.html",
      badge: "Trending",
      services: [
        { name: "Swedish Massage", price: "$80", duration: "60 min" },
        { name: "Deep Tissue Massage", price: "$95", duration: "60 min" },
        { name: "Hot Stone Therapy", price: "$110", duration: "75 min" },
        { name: "Facial Treatment", price: "$90", duration: "60 min" },
        { name: "Aromatherapy", price: "$75", duration: "50 min" },
        { name: "Couples Package", price: "$200", duration: "90 min" },
      ],
      gallery: [
        { label: "Treatment Room", bg: "linear-gradient(135deg,#c8ead8,#90c9a8)" },
        { label: "Hot Stone Set", bg: "linear-gradient(135deg,#a8d8be,#6ab890)" },
        { label: "Facial Suite", bg: "linear-gradient(135deg,#d8f0e4,#a0d8b8)" },
        { label: "Relaxation Lounge", bg: "linear-gradient(135deg,#b8e0cc,#78c898)" },
      ],
      testimonials: [
        { name: "Sophie M.", text: "The hot stone massage was incredible. I felt completely renewed.", stars: 5 },
        { name: "David N.", text: "We came as a couple and it was the best date night ever!", stars: 5 },
      ],
    },
  ],

  // ── Home Hero ────────────────────────────────────────────
  hero: {
    heading: "Run Your Business Smarter",
    subheading: "Book appointments, track customers, manage revenue — all from one clean dashboard.",
    cta_primary: { label: "Get Started", href: "appointments.html" },
    cta_secondary: { label: "View Demo", href: "dashboard.html" },
  },

  // ── Features ─────────────────────────────────────────────
  features: [
    { icon: "📅", title: "Appointment Booking", desc: "Let customers book online 24/7. Manage your schedule with ease and reduce no-shows." },
    { icon: "👥", title: "Customer Management", desc: "Keep a full profile for every client — visit history, preferences, and contact details." },
    { icon: "💰", title: "Revenue Tracking", desc: "See daily, weekly, and monthly income at a glance. No more manual calculations." },
    { icon: "🧾", title: "Invoice Generation", desc: "Create and send professional invoices in seconds. Track paid and unpaid status." },
    { icon: "📊", title: "Analytics Dashboard", desc: "Visual reports that show your busiest hours, top services, and growth trends." },
    { icon: "☁️", title: "Cloud & Secure", desc: "Your data is backed up automatically. Access from any device, anywhere." },
  ],

  // ── Stats (Home) ─────────────────────────────────────────
  stats: [
    { value: "4 years", label: "Web Development Experience" },
    { value: "10+", label: "Real-World Clients" },
    { value: "99%", label: "Uptime Guaranteed" },
    { value: "$600+", label: "Starting Price" }
  ],

  // ── About ────────────────────────────────────────────────
  about: {
    story_heading: "Why We Built This",
    story: "Many small business owners still track appointments and revenue in paper notebooks — which is slow, error-prone, and hard to scale. We set out to build a simple, affordable web platform that brings real digital management to every local business, regardless of size or technical background.",
    mission: "Empower small businesses with professional-grade tools — at a price that makes sense.",
    team: [
      { name: "Dinh Phat Phat", role: "Lead Developer", note: "Backend & full-stack web development" },
    ],
    values: [
      { icon: "🎯", title: "Simplicity", desc: "Clean interfaces that anyone can learn in minutes." },
      { icon: "💡", title: "Affordability", desc: "Professional tools should not cost a fortune." },
      { icon: "🤝", title: "Trust", desc: "We build long-term relationships, not just software." },
    ],
  },

  // ── Dashboard Stats ──────────────────────────────────────
  dashboard: {
    today_revenue: "$842",
    total_customers: 138,
    appointments_today: 12,
    pending_invoices: 5,
    recent_activity: [
      { time: "09:15 AM", event: "New appointment — Emily Carter (Cut & Style)" },
      { time: "10:00 AM", event: "Payment received — $65.00 — Invoice #1042" },
      { time: "11:30 AM", event: "New customer registered — James Liu" },
      { time: "01:00 PM", event: "Appointment cancelled — Sarah Nguyen" },
      { time: "02:45 PM", event: "Invoice #1043 sent — $120.00" },
    ],
    weekly_revenue: [320, 510, 480, 620, 710, 842, 390],
    weekly_labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },

  // ── Appointments ─────────────────────────────────────────
  appointments: [
    { id: 1, customer: "Emily Carter", service: "Cut & Style", date: "2025-07-15", time: "09:00 AM", status: "Confirmed", price: "$65" },
    { id: 2, customer: "James Liu", service: "Color & Tone", date: "2025-07-15", time: "11:00 AM", status: "Confirmed", price: "$120" },
    { id: 3, customer: "Mia Thompson", service: "Manicure", date: "2025-07-15", time: "01:00 PM", status: "Pending", price: "$45" },
    { id: 4, customer: "Liam Brown", service: "Full Package", date: "2025-07-16", time: "10:00 AM", status: "Confirmed", price: "$150" },
    { id: 5, customer: "Sarah Nguyen", service: "Pedicure", date: "2025-07-16", time: "02:00 PM", status: "Cancelled", price: "$55" },
    { id: 6, customer: "Olivia Smith", service: "Cut & Style", date: "2025-07-17", time: "09:30 AM", status: "Confirmed", price: "$65" },
  ],

  // ── Customers ────────────────────────────────────────────
  customers: [
    { id: 1, name: "Emily Carter", email: "emily@email.com", phone: "647-555-0101", visits: 12, spent: "$720", last_visit: "2025-07-14", status: "VIP" },
    { id: 2, name: "James Liu", email: "james@email.com", phone: "416-555-0202", visits: 7, spent: "$490", last_visit: "2025-07-10", status: "Regular" },
    { id: 3, name: "Mia Thompson", email: "mia@email.com", phone: "905-555-0303", visits: 3, spent: "$185", last_visit: "2025-07-12", status: "New" },
    { id: 4, name: "Liam Brown", email: "liam@email.com", phone: "647-555-0404", visits: 20, spent: "$1,400", last_visit: "2025-07-08", status: "VIP" },
    { id: 5, name: "Sarah Nguyen", email: "sarah@email.com", phone: "416-555-0505", visits: 5, spent: "$310", last_visit: "2025-07-01", status: "Regular" },
    { id: 6, name: "Olivia Smith", email: "olivia@email.com", phone: "905-555-0606", visits: 1, spent: "$65", last_visit: "2025-07-13", status: "New" },
  ],

  // ── Revenue ──────────────────────────────────────────────
  revenue: {
    summary: { today: "$842", this_week: "$3,872", this_month: "$14,320", this_year: "$98,750" },
    invoices: [
      { id: "#1041", customer: "Liam Brown", date: "2025-07-14", amount: "$150", status: "Paid" },
      { id: "#1042", customer: "Emily Carter", date: "2025-07-14", amount: "$65", status: "Paid" },
      { id: "#1043", customer: "Olivia Smith", date: "2025-07-13", amount: "$120", status: "Pending" },
      { id: "#1044", customer: "James Liu", date: "2025-07-12", amount: "$490", status: "Paid" },
      { id: "#1045", customer: "Mia Thompson", date: "2025-07-11", amount: "$45", status: "Overdue" },
    ],
    monthly: [8200, 9100, 7800, 10200, 11500, 12000, 14320],
    monthly_labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  },

  // ── Pricing ──────────────────────────────────────────────
  pricing: {
    intro: "Transparent, one-time build cost + a low monthly fee to keep everything running. No hidden charges.",
    plans: [
      {
        name: "Basic",
        build: "$360",
        monthly: "$24",
        build_range: "$360 – $400",
        color: "purple-light",
        features: [
          "Up to 10 pages",
          "Appointment booking",
          "Customer management",
          "Basic revenue tracking",
          "Mobile responsive",
          "Cloud deployment (runs 24/7)",
          "1 month post-handover minor adjustments",
          "6 months warranty — free fixes for developer-caused bugs",
        ],
        cta: "Get a Quote",
      },
      {
        name: "Professional",
        build: "$450",
        monthly: "$24",
        build_range: "$450 – $600",
        color: "purple-main",
        badge: "Most Popular",
        features: [
          "Everything in Basic, plus:",
          "Unlimited pages",
          "Full appointment system",
          "Customer CRM",
          "Revenue & invoice management",
          "Analytics dashboard",
          "Cloud deployment (runs 24/7)",
          "3 months post-handover minor adjustments",
          "6 months warranty — free fixes for developer-caused bugs",
        ],
        cta: "Get a Quote",
      },
    ],
    maintenance_note: "$30/month covers hosting, server, backups, and SSL — keeping your site live 24/7. Separate from warranty.",
    warranty_note: "Warranty covers bugs and issues caused by the developer only. New features or change requests after handover are quoted separately.",
    contact_prompt: "Have questions or want a custom quote? Reach out directly:",
  },
};
