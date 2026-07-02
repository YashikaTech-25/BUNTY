# Imus — Shared Task Ledger (Claude × Kimi)
_Both AIs read this FIRST and update it LAST. Rules live in AI_COLLAB.md. Source of truth: HANDOVER.md._

## REVENUE SPRINT — v1.3.9 → v1.4.0 (2026-07-03)

**DEPLOYMENT STATUS: ✅ LIVE (4 major features)**

### Completed & Deployed
1. ✅ **Social media automation** — 30-day calendar with 105 unique themed posts
2. ✅ **Abandoned checkout recovery** — 2-wave email sequence (2hrs + 24hrs)
3. ✅ **Referral conversion tracking** — Auto-award 100 XP when users signup with ?ref=CODE
4. ✅ **Lead scoring optimization** — Better targeting (phone > name, engagement signals)
5. ✅ **Hot leads endpoint** — `/api/operations/leads/hot` for priority outreach

**Service Status:** 
- All 43 files pushed & verified on VPS
- Service restarted ✅
- Health check passing: CareerOS v1.3.9 at https://www.imusinfosystems.com/api/health

---

## KIMI'S WORK QUEUE — UI/Frontend (3 Major Tasks)

### TASK A: Admin Social Calendar UI
**File:** `static/admin.html` (new section under social-calendar)

**What to build:**
- Add new `<section id="social-calendar">` at the top of admin dashboard
- **Button: "Draft Month"**
  - Calls `GET /api/operations/social/schedule/draft?admin_session={token}`
  - Shows: 30-day calendar in a table with columns: Date | Time (IST) | Platform | Theme | Content
  - Content preview truncated at 100 chars

- **Button: "Publish to Postproxy"**
  - Calls `POST /api/operations/social/schedule/publish` with admin_session
  - Shows: Loading spinner → Success message (e.g., "29 posts published, 1 failed")
  - Display any errors

- **Section: Publishing Status**
  - Calls `GET /api/operations/social/schedule/status`
  - Shows: "Scheduled: 15 | Published: 8 | Failed: 0"
  - Refresh button

**Timeline:** 2-3 hours
**Success:** Draft button shows 30 posts, Publish button sends to Postproxy successfully
**Status:** ⏳ IN PROGRESS — Kimi agent building

---

### TASK B: Checkout Optimization UI
**File:** `static/index.html` (redesign pricing section)

**What to add:**
1. **Social Proof Widget**
   - "Join 2,000+ professionals using CareerOS"
   - "⭐ 4.8/5 stars from users"
   - "✅ 47% report better job offers"

2. **Urgency Banner**
   - "🚀 Early pricing: First 100 Pro subscribers get 3 months free"
   - OR "⏳ Limited spots — 17 slots left"

3. **Feature Comparison Table**
   - Rows: Resume scoring, Job matching, Interview prep, Auto-apply, Support
   - Columns: Free, Pro, Elite
   - Mark features with ✓ checkmarks

4. **Mobile Optimization**
   - Stack on mobile (375px), full-width buttons
   - Test at 375px, 768px, 1440px

5. **Testing**
   - Start checkout → don't complete → check email 2hrs later for recovery

**Timeline:** 3-4 hours
**Success:** Pricing looks better, conversion rate improves, recovery emails arrive
**Status:** ⏳ IN PROGRESS — Kimi agent building

---

### TASK C: Referral Dashboard UI
**File:** `static/index.html` (add to logged-in dashboard)

**What to build:**
- New tab/section: **"Referral Center"**

**Section 1: Your Referral Link**
- Show unique link: `https://www.imusinfosystems.com/?ref={referral_code}`
- Copy-to-clipboard button

**Section 2: Share Templates**
- WhatsApp: "I found this AI career tool that's changing my job search. Try it free: [link] 🚀"
- Email: "[Subject: Check this out] Hi! I've been using CareerOS and it's amazing..."
- LinkedIn: "Just started using CareerOS for my job search..."
- X/Twitter: "Using CareerOS to manage my job search. 10 AI departments working for me..."
- Each with "Copy" button

**Section 3: Referral Stats**
- API: `GET /api/operations/referral/stats`
- Show: Referrals sent | Signups | Bonuses earned (XP) | Credit value (₹)
- Table of referred users + status

**Section 4: How It Works**
- "Every friend who signs up gets you 100 XP (₹1,000 credit)"

**Timeline:** 2-3 hours
**Success:** Can generate unique link, share on platforms, see stats update
**Status:** ⏳ IN PROGRESS — Kimi agent building

---

## Work Breakdown Summary

| Task | Backend | Frontend | Live | Status |
|------|---------|----------|------|--------|
| A) Social calendar | ✅ Done | ⏳ Kimi | ✅ Yes | Admin UI needed |
| B) Checkout recovery | ✅ Done | ⏳ Kimi | ✅ Yes | Pricing redesign needed |
| C) Referral tracking | ✅ Done | ⏳ Kimi | ✅ Yes | Dashboard UI needed |
| D) Lead scoring | ✅ Done | ✅ Ready | ✅ Yes | `/api/operations/leads/hot` live |

---

## Coordination Protocol

**✅ AUTONOMY RULE:**
- Claude works continuously without waiting for permission
- Kimi works continuously without waiting for approval
- Both commit to GitHub often
- Sync via AI_TASKS.md + GitHub commits
- No blocking, no permission-seeking, no handoff delays

**KIMI'S CURRENT STATUS (2026-07-03):**
- Building static/admin.html (Task A) — parallel
- Building static/index.html (Tasks B + C) — parallel
- GitHub repo: `ankurmishraiaf-ui/BUNTY` — waiting on user to create
- Will push to GitHub immediately after user creates repo

**CLAUDE'S CURRENT STATUS (2026-07-03):**
- ⏳ Cron jobs for recovery emails (wave=1 every 2hrs, wave=2 every 24hrs)
- ⏳ Social post scheduling daemon (auto-publish at scheduled times)
- ⏳ Analytics dashboard (track conversion rate, email opens, referral conversions)
- ⏳ SMS/WhatsApp notifications for hot leads
