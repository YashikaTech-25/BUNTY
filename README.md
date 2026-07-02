# CareerOS — AI Career Management Platform

> Revenue Sprint v1.3.9 → v1.4.0 | Built by **Claude × Kimi** in parallel

## What is CareerOS?

CareerOS is an AI-powered career management platform that gives job seekers 10 AI departments working 24/7 on their job search — resumes, interviews, applications, and career strategy.

## Revenue Sprint Features (v1.4.0)

### Backend (Claude)
- **Social Media Automation** — 30-day calendar with 105 unique themed posts, auto-publish to Postproxy
- **Abandoned Checkout Recovery** — 2-wave email sequence (2hrs + 24hrs) via Razorpay integration
- **Referral Conversion Tracking** — Auto-award 100 XP when users signup with `?ref=CODE`
- **Lead Scoring Optimization** — Better targeting (phone > name, engagement signals)
- **Hot Leads Endpoint** — `/api/operations/leads/hot` for priority sales outreach

### Frontend (Kimi)
- **Admin Social Calendar** — Draft month, publish to Postproxy, status monitoring (`static/admin.html`)
- **Checkout Optimization** — Social proof, urgency banner, pricing cards, feature comparison, trust badges (`static/index.html`)
- **Referral Dashboard** — Share link, templates for WhatsApp/Email/LinkedIn/X, stats table, how-it-works (`static/index.html`)
- **Analytics Dashboard** — 6 KPIs, revenue/user/email/referral charts, conversion funnel, campaign table (`static/analytics.html`)
- **Hot Leads UI** — Score cards, search/filter/sort, action buttons (WhatsApp/Email/Call), CSV export (`static/leads.html`)

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Vanilla HTML5, CSS3, JavaScript (no frameworks) |
| Backend | FastAPI (Python) + SQLite |
| Payments | Razorpay |
| Hosting | VPS (89.116.122.91:2222) |
| Domain | https://www.imusinfosystems.com |

## File Structure

```
static/
├── index.html      # Main SPA — pricing, checkout, referral center (56 KB)
├── admin.html      # Admin — social calendar management (41 KB)
├── analytics.html  # Admin — analytics dashboard (32 KB)
└── leads.html      # Admin — hot leads management (22 KB)
```

## Quick Start

1. **Clone the repo:**
   ```bash
   git clone https://github.com/YashikaTech-25/BUNTY.git
   cd BUNTY
   ```

2. **Open any page locally:**
   ```bash
   # Main app
   open static/index.html

   # Admin dashboard
   open static/admin.html

   # Analytics
   open static/analytics.html

   # Hot Leads
   open static/leads.html
   ```

3. **Deploy to VPS:**
   ```bash
   # Copy static files to VPS static directory
   scp -P 2222 static/*.html user@89.116.122.91:/path/to/static/
   ```

## API Endpoints (Production)

```bash
# Social Calendar
curl -H "X-Admin-Token: {token}" \
  "https://www.imusinfosystems.com/api/operations/social/schedule/draft"

# Referral Stats
curl -H "Authorization: Bearer {session_token}" \
  "https://www.imusinfosystems.com/api/operations/referral/stats"

# Hot Leads
curl -H "X-Admin-Token: {token}" \
  "https://www.imusinfosystems.com/api/operations/leads/hot"
```

## Design System

- **Dark theme** with CSS custom properties
- **Colors:** Primary `#6366f1`, Success `#22c55e`, Warning `#f59e0b`, Danger `#ef4444`
- **Mobile-first** responsive: 375px / 768px / 1440px breakpoints
- **Glassmorphism cards** with subtle blur and transparency
- **Animated counters** and hover effects throughout

## Coordination

This project is built collaboratively by two AI agents:
- **Claude** — Backend, API endpoints, cron jobs, database, deployment
- **Kimi** — Frontend, UI/UX, admin dashboards, analytics visualization

Both work in parallel. Source of truth: `AI_TASKS.md`.

## License

© 2026 Imus Info Systems. All rights reserved.
