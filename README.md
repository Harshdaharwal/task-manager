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

## 📱 WhatsApp (optional)

`.env` me `WHATSAPP_ENABLED=true` + Aumpfy API URL/key bharo
(ya `whatsapp.config.js` me). Number har user ke `phone` field se jaata hai.
