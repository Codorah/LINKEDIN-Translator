import { getCatalog } from '../src/lib/translator.js';

export default function handler(req, res) {
  // CORS configuration if needed, though Vercel handles same-domain implicitly
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
  
  if (req.method === 'GET') {
    res.status(200).json(getCatalog());
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
