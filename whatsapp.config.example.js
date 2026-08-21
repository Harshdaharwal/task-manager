// ══════════════════════════════════════════════════════
// WhatsApp API config (Waumfy) — TEMPLATE / EXAMPLE
// ══════════════════════════════════════════════════════
// Is file ko copy karke  whatsapp.config.js  banao aur usme apni asli values
// daalo. whatsapp.config.js gitignored hai — aapki API key GitHub par kabhi
// nahi jayegi.
//
// Vercel/hosting par ye example file hi chalti hai — wahan env vars set karo:
//   WHATSAPP_ENABLED=true
//   AUMPFY_API_URL=https://www.waumfy.com/api/v1/send-message
//   AUMPFY_API_KEY=wag_sk_xxxxx
// ══════════════════════════════════════════════════════
module.exports = {
  // WhatsApp alerts ON/OFF
  enabled: (process.env.WHATSAPP_ENABLED || 'true').toLowerCase() !== 'false',

  // ── Waumfy API (dashboard: waumfy.com/dashboard) ──
  url:    process.env.AUMPFY_API_URL || 'https://www.waumfy.com/api/v1/send-message',
  apiKey: process.env.AUMPFY_API_KEY || '',

  // ── Waumfy body shape (API change ho to sirf ye 3 lines badlo) ──
  authHeader:   'x-api-key',   // header jisme API key jaati hai
  phoneField:   'phone',       // number wala field, e.g. "919876543210"
  messageField: 'message',     // message text wala field

  // ── Baaki settings ──
  countryCode:  (process.env.WHATSAPP_COUNTRY_CODE || '91').replace(/\D/g, ''), // 10-digit number ke aage lagega
  reminderHour: parseInt(process.env.WHATSAPP_REMINDER_HOUR) || 10,             // daily reminder (24h, server time)
  timeoutMs:    8000,   // Vercel serverless limit ke andar
  appUrl:       process.env.APP_URL || ''   // message me "Open:" link ke liye
};
