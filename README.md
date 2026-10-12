# Task Manager

Premium **Checklist & Delegation** web app — Node.js (Express) + Google Sheets / MySQL backend.

## ✨ Features

- **Delegation tasks** — assign karo, due date + priority + approval flow ke saath
- **Checklist tasks** — daily / weekly / monthly recurring checklists (bulk + CSV upload)
- **FMS tasks** — step-wise flow management with doer crediting
- **Records tab** — har employee ka plan-vs-done ka pura record (Admin/HOD/PC)
- **MIS scoring** — viewer-independent, role sirf visibility decide karta hai
- **Email reminders** — roz 12:00 PM, due se 2 din pehle se, ek user ke saare tasks ek mail me
- **WhatsApp notifications** (optional, Aumpfy API) — assign hote hi instant + daily reminder
- **Roles** — Admin / HOD / PC / Employee

## 🚀 Setup

```bash
npm install
cp .env.example .env    # values bharo
npm start               # ya: npm run dev
```

## 🗄️ Database — abhi connected NAHI hai

Ye fresh project hai — **purana database hata diya gaya hai**. Naya database
milne par `.env` me connect karna:

**Google Sheets:**
```env
DB_DRIVER=sheets
SHEET_ID=<naya spreadsheet id>
```
- `credentials.json` (Google service account) project root me rakho
- Naya sheet banane ke liye: `node setup-new-sheet.js`

**MySQL:**
```env
DB_DRIVER=mysql
DB_HOST=...
DB_PORT=3306
DB_USER=...
DB_PASSWORD=...
DB_NAME=...
```
- Tables banane ke liye: `npm run setup-db` (schema `schema.sql` me hai)

## 📧 Email (optional)

Gmail App Password banao ([myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords))
aur `.env` me `SMTP_USER` / `SMTP_PASS` bharo.

Manual reminder trigger (admin): `POST /api/admin/run-reminders`

## 📱 WhatsApp (optional — ZWhatsapp API)

`.env` me bharo (ya `whatsapp.config.js` me):

```env
WHATSAPP_ENABLED=true
ZWA_BASE_URL=https://greenyellow-locust-717944.hostingersite.com
ZWA_API_KEY=wb_live_...      # ZWhatsapp Dashboard → API Keys
ZWA_SESSION_ID=              # khali = pehla connected number apne aap
WHATSAPP_GAP_SEC=60          # har message ke beech gap
```

- Delegation / checklist assign hote hi user ke `phone` (Users tab) par message
- Campaign tab ke saare numbers par campaign message
- Har message ke beech **60 sec** ka gap — sab types milake ek line me.
  ZWhatsapp key par **1 request / minute** ki limit hai, isliye har API call ek
  hi gate se guzarti hai. Task messages pehle `WA_Outbox` table me line lagate
  hain (restart par bhi bache rehte hain) aur campaign se pehle jaate hain.
- Serverless (Vercel) par outbox campaign wale cron URL se aage badhta hai —
  cron-job.org par har minute wo URL hit karwao
- Server start par log me dikhta hai ki key sahi hai aur kaunsa number use hoga
