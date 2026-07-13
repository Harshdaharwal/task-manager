require('dotenv').config();
const { google } = require('googleapis');
const creds = require('./credentials.json');

const SHEET_ID = process.env.SHEET_ID || '';

(async () => {
  const auth = new google.auth.GoogleAuth({ credentials: creds, scopes: ['https://www.googleapis.com/auth/spreadsheets'] });
  const sheets = google.sheets({ version: 'v4', auth });
  const meta = await sheets.spreadsheets.get({ spreadsheetId: SHEET_ID });
  console.log('✅ Connected! Sheets:', meta.data.sheets.map(s => s.properties.title).join(', '));
})().catch(e => console.error('❌', e.message));
