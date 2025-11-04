// Vercel Serverless Function to proxy OpenAI requests
// Set OPENAI_API_KEY in Vercel Environment Variables (Project Settings > Environment Variables)
import fetch from 'cross-fetch'

export default async function handler(req, res){
  if(req.method !== 'POST') return res.status(405).json({error:'Method not allowed'})
  const { prompt } = req.body || {}
  if(!prompt) return res.status(400).json({error:'No prompt provided'})
  const apiKey = process.env.OPENAI_API_KEY
  if(!apiKey) return res.status(500).json({error:'OpenAI key not configured'})
  try{
    const r = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${apiKey}` },
      body: JSON.stringify({
        model: 'gpt-4o-mini', // change if needed
        messages: [{ role: 'user', content: prompt }],
        max_tokens: 300
      })
    })
    const data = await r.json()
    const text = data?.choices?.[0]?.message?.content || data?.choices?.[0]?.text || ''
    res.status(200).json({ text })
  }catch(err){
    console.error(err)
    res.status(500).json({ error: 'OpenAI request failed' })
  }
}
