import Head from 'next/head';
import { useState } from 'react';

export default function Memento22() {
  const [status, setStatus] = useState('');
  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('Sending...');
    const fd = new FormData(e.target);
    if (fd.get('address_line2')) { setStatus('Submission blocked.'); return; }
    const payload = Object.fromEntries(fd.entries());
    try {
      const res = await fetch('/api/book', { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify(payload) });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Error');
      setStatus(data.message || 'Request received.');
      e.target.reset();
    } catch (err) {
      console.error(err);
      setStatus('There was an error. Please try again later.');
    }
  }

  return (
    <>
      <Head>
        <title>Memento22 | Coffee & Cuts Chania</title>
        <meta name="description" content="Memento22 — Chania's first combined specialty coffee bar and modern barber concept." />
      </Head>

      <main className="bg-[#0f0c29] text-white min-h-screen">
        {/* For brevity, convert the HTML into JSX and reuse the class names from the HTML file.
            Convert <img> to <Image> from next/image and add domains to next.config.js for production. */}
        <section className="hero-container">
          <div className="container mx-auto p-6">
            <h1 className="sr-only">Memento22</h1>
            <div className="max-w-4xl mx-auto text-center">
              <img src="/statue.jpg" alt="Classical marble bust" className="w-full h-[60vh] object-cover rounded-md" />
              <h2 className="text-5xl font-[Cinzel] font-black mt-6">TWENTY<span className="text-[#b026ff]">22</span></h2>
              <p className="text-[#00f3ff] uppercase tracking-widest">Chania's First Coffee & Barber Concept</p>
            </div>
          </div>
        </section>

        <section className="py-16 container mx-auto px-4">
          <h3 className="text-3xl font-[Cinzel]">More Than Just A Haircut</h3>
          <p className="mt-4">Ported site content. See the static HTML for full markup. Use next/image and optimize assets before production.</p>
        </section>

        <section id="book" className="py-12 container mx-auto px-4 max-w-3xl">
          <h3 className="text-2xl font-[Cinzel]">Book an Appointment</h3>
          <form onSubmit={handleSubmit} className="mt-6 space-y-4 bg-white/5 p-6 rounded-md">
            <input type="text" name="address_line2" className="sr-only" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name">Full name</label>
                <input id="name" name="name" required className="mt-1 block w-full rounded-md bg-black/30" />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" required className="mt-1 block w-full rounded-md bg-black/30" />
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <button type="submit" className="px-4 py-2 bg-[#b026ff] text-black rounded-md font-bold">Request Booking</button>
              <div aria-live="polite">{status}</div>
            </div>
          </form>
        </section>
      </main>
    </>
  );
}