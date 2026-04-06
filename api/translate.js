import { generateLinkedinPost } from '../src/lib/translator.js';

export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
  
  if (req.method === 'POST') {
    try {
      // Vercel parses application/json automatically into req.body
      const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
      const result = generateLinkedinPost(body);
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({
        error: "Impossible de traiter la requete.",
        detail: error instanceof Error ? error.message : "Erreur inconnue"
      });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
