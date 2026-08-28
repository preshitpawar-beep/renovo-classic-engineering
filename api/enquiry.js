// Vercel Serverless Function — receives the enquiry form and emails it via Resend.
// The secret RESEND_API_KEY lives in Vercel's Environment Variables, never in the client.

const TO_EMAIL = 'renovoclassicengineering@gmail.com'
// Until a custom domain is verified in Resend, we must send FROM Resend's shared
// onboarding address. Once renovoclassicengineering.com (or similar) is verified,
// change this to e.g. 'Renovo Classic Engineering <enquiries@renovoclassicengineering.com>'.
const FROM_EMAIL = 'Renovo Classic Engineering <onboarding@resend.dev>'

const esc = (s) =>
  String(s == null ? '' : s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  // Vercel parses JSON bodies automatically, but guard just in case.
  let body = req.body
  if (typeof body === 'string') {
    try { body = JSON.parse(body) } catch { body = {} }
  }
  const { name, email, vehicle, works, coffee } = body || {}

  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required.' })
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    return res.status(500).json({ error: 'Email service is not configured yet.' })
  }

  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;font-size:15px;color:#111;line-height:1.6">
      <h2 style="margin:0 0 16px">New enquiry — Renovo Classic Engineering</h2>
      <p><strong>Name:</strong> ${esc(name)}</p>
      <p><strong>Email:</strong> ${esc(email)}</p>
      <p><strong>Vehicle:</strong> ${esc(vehicle) || '—'}</p>
      <p><strong>Works required:</strong><br>${esc(works) || '—'}</p>
      <p><strong>Coffee order:</strong> ${esc(coffee) || '—'}</p>
      <hr style="border:none;border-top:1px solid #ddd;margin:20px 0">
      <p style="color:#666;font-size:13px">Sent from the renovo-classic-engineering.vercel.app enquiry form. Reply directly to respond to the customer.</p>
    </div>`

  const text =
    `New enquiry — Renovo Classic Engineering\n\n` +
    `Name: ${name}\n` +
    `Email: ${email}\n` +
    `Vehicle: ${vehicle || '—'}\n` +
    `Works required: ${works || '—'}\n` +
    `Coffee order: ${coffee || '—'}\n`

  try {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [TO_EMAIL],
        reply_to: email,
        subject: `New enquiry — ${name}`,
        html,
        text,
      }),
    })

    if (!r.ok) {
      const detail = await r.text().catch(() => '')
      console.error('Resend error', r.status, detail)
      return res.status(502).json({ error: 'Could not send the enquiry. Please try again later.' })
    }

    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('Enquiry handler error', err)
    return res.status(500).json({ error: 'Something went wrong sending your enquiry.' })
  }
}
