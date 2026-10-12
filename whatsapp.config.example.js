// ══════════════════════════════════════════════════════
// WhatsApp API config (ZWhatsapp) — TEMPLATE / EXAMPLE
// ══════════════════════════════════════════════════════
// Is file ko copy karke  whatsapp.config.js  banao aur usme apni asli values
// daalo — ya neeche wale env vars .env me set karo. whatsapp.config.js aur .env
// dono gitignored hain — aapki API key GitHub par kabhi nahi jayegi.
//
//   WHATSAPP_ENABLED=true
//   ZWA_BASE_URL=https://greenyellow-locust-717944.hostingersite.com
//   ZWA_API_KEY=wb_live_xxxxx        (ZWhatsapp Dashboard → API Keys)
//   ZWA_SESSION_ID=sess_xxxxx        (optional — khali ho to account ka pehla
//                                     connected number apne aap chun liya jata hai)
//   WHATSAPP_GAP_SEC=60              (har message ke beech kam se kam itne second)
// ══════════════════════════════════════════════════════
module.exports = {
  // WhatsApp alerts ON/OFF
  enabled: (process.env.WHATSAPP_ENABLED || 'true').toLowerCase() !== 'false',

  // ── ZWhatsapp API (docs: <baseUrl>/docs) ──
  baseUrl:   (process.env.ZWA_BASE_URL || 'https://greenyellow-locust-717944.hostingersite.com').replace(/\/+$/, ''),
  apiKey:    process.env.ZWA_API_KEY || '',      // "Authorization: Bearer wb_live_…"
  sessionId: process.env.ZWA_SESSION_ID || '',   // sess_… — WhatsApp number jisse message jayega

  // ── Baaki settings ──
  gapSec:       parseInt(process.env.WHATSAPP_GAP_SEC) || 60,                   // delegation / checklist / reminder / campaign — sab ke beech
  countryCode:  (process.env.WHATSAPP_COUNTRY_CODE || '91').replace(/\D/g, ''), // 10-digit number ke aage lagega
  reminderHour: parseInt(process.env.WHATSAPP_REMINDER_HOUR) || 10,             // daily reminder (24h, server time)
  timeoutMs:    10000,  // Vercel serverless limit ke andar (API turant 202 "queued" deti hai)
  appUrl:       process.env.APP_URL || ''   // message me "Open:" link ke liye
};
