export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ message: 'Method not allowed' });
  const { name, email, service, address_line2 } = req.body;
  if (address_line2) return res.status(400).json({ message: 'Spam detected' });
  if (!name || !email || !service) return res.status(400).json({ message: 'Missing fields' });

  console.log('Booking request (Next.js API):', req.body);
  // TODO: persist to DB or send an email using environment variables
  return res.status(200).json({ message: 'Request received. We will contact you.' });
}