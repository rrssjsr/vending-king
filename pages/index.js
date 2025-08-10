import React, { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const features = [
    { title: 'On-campus convenience', desc: 'Snacks & beverages inside ASMSOC — no gate exits, no ID rescans, zero time loss.' },
    { title: 'Fast, cashless checkout', desc: 'UPI, prepaid card, and NFC-ready. Tap, pay, done in under 10 seconds.' },
    { title: 'Student-first rewards', desc: 'QR polls to pick next SKU, 100th buyer free, daily keyword bonuses.' },
    { title: 'Live restock', desc: 'Smart monitoring + rapid refill so favourites don’t run out during peak hours.' },
  ];

  const skus = [
    { name: 'Diet Coke 300ml', mrp: 40, campusPrice: 55 },
    { name: 'Lays Classic 52g', mrp: 20, campusPrice: 30 },
    { name: 'Kurkure 50g', mrp: 20, campusPrice: 30 },
    { name: 'Cadbury Dairy Milk 24g', mrp: 20, campusPrice: 30 },
    { name: 'Maaza 250ml', mrp: 35, campusPrice: 50 },
  ];

  const valueProps = [
    { k: 'USP', v: 'Time > Money: pay a small premium to save the 10–15 minutes wasted leaving the building.' },
    { k: 'Inventory', v: '5–6 high-rotation SKUs, 30–40 units. Data-driven rotations each week.' },
    { k: 'Ops', v: 'Founder-led maintenance, cleaning, and twice-daily restock.' },
    { k: 'Compliance', v: 'Packaged foods only; GST threshold monitoring; college-first policy alignment.' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <header className="sticky top-0 z-20 backdrop-blur border-b border-neutral-800/80 bg-neutral-950/70">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-emerald-500" />
            <span className="text-lg font-semibold">CampusVends</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-300">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#why" className="hover:text-white">Why us</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <section className="relative">
        <div className="absolute inset-0" style={{background: 'radial-gradient(circle at 20% 10%, rgba(16,185,129,0.15), transparent 40%), radial-gradient(circle at 80% 0%, rgba(59,130,246,0.12), transparent 35%)'}} />
        <div className="relative mx-auto max-w-6xl px-4 pt-20 pb-14 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
              Snacks on your floor. <span className="text-emerald-400">No exits. No queues.</span>
            </h1>
            <p className="mt-5 text-neutral-300 text-lg">
              A smart vending experience for NMIMS ASMSOC. Pay via UPI or prepaid campus card, vote the next SKU, and get back to class in under a minute.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="inline-flex items-center justify-center rounded-2xl bg-emerald-500 px-6 py-3 font-semibold text-neutral-950 hover:bg-emerald-400 transition">
                Request install
              </a>
              <a href="#pricing" className="inline-flex items-center justify-center rounded-2xl border border-neutral-700 px-6 py-3 font-semibold hover:border-neutral-500 transition">
                See pricing
              </a>
            </div>
            <p className="mt-4 text-sm text-neutral-400">Pilot-ready • Founder-operated • Maintenance included</p>
          </div>
          <div className="bg-neutral-900/60 border border-neutral-800 rounded-3xl p-6 shadow-xl">
            <div className="grid grid-cols-2 gap-4">
              {skus.map((s) => (
                <div key={s.name} className="rounded-2xl p-4 bg-neutral-900 border border-neutral-800">
                  <div className="text-sm text-neutral-400">{s.name}</div>
                  <div className="mt-2 text-2xl font-bold">₹{s.campusPrice}</div>
                  <div className="mt-1 text-xs text-neutral-400">MRP ₹{s.mrp} • Convenience premium covers time saved</div>
                </div>
              ))}
            </div>
            <div className="mt-4 text-xs text-neutral-400">Illustrative menu. Final SKUs by student vote.</div>
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold">Designed for campus reality</h2>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl bg-neutral-900 border border-neutral-800 p-5">
              <h3 className="font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-neutral-300">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="why" className="mx-auto max-w-6xl px-4 pb-6">
        <div className="rounded-3xl bg-neutral-900 border border-neutral-800 p-6 md:p-10">
          <h2 className="text-2xl md:text-3xl font-bold">What makes this viable</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            {valueProps.map((p) => (
              <div key={p.k} className="rounded-2xl border border-neutral-800 p-5">
                <div className="text-sm text-neutral-400">{p.k}</div>
                <div className="mt-1 font-medium text-neutral-100">{p.v}</div>
              </div>
            ))}
          </div>
          <ul className="mt-6 text-sm text-neutral-300 list-disc list-inside space-y-2">
            <li>Only packaged items; aligns with canteen policy. No fresh food handling.</li>
            <li>Transparent pricing: campus premium reflects saved time and building access friction.</li>
            <li>Data loop: QR polls → weekly SKU updates → higher sell-through, less dead stock.</li>
          </ul>
        </div>
      </section>

      <section id="pricing" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold">Pricing & unit economics</h2>
        <div className="mt-6 grid lg:grid-cols-2 gap-6">
          <div className="rounded-3xl bg-neutral-900 border border-neutral-800 p-6">
            <h3 className="font-semibold">Illustrative margin model</h3>
            <p className="mt-2 text-sm text-neutral-300">
              Sourced initially at MRP from the nearby shop; shifted to wholesale as volumes rise. Campus premium accounts for convenience value, maintenance, and spoilage risk.
            </p>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-neutral-400">
                    <th className="py-2 pr-4">SKU</th>
                    <th className="py-2 pr-4">MRP</th>
                    <th className="py-2 pr-4">Campus price</th>
                    <th className="py-2">Gross spread</th>
                  </tr>
                </thead>
                <tbody>
                  {skus.map((s) => (
                    <tr key={s.name} className="border-t border-neutral-800/80">
                      <td className="py-3 pr-4">{s.name}</td>
                      <td className="py-3 pr-4">₹{s.mrp}</td>
                      <td className="py-3 pr-4">₹{s.campusPrice}</td>
                      <td className="py-3">₹{s.campusPrice - s.mrp}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="rounded-3xl bg-neutral-900 border border-neutral-800 p-6">
            <h3 className="font-semibold">Pilot placement</h3>
            <ul className="mt-3 text-sm text-neutral-300 list-disc list-inside space-y-2">
              <li>Location: Inside ASMSOC academic building (ground or 1st floor landing).</li>
              <li>Footfall: High during 9:00–17:00; peak between classes.</li>
              <li>Service level: Daily sanitization; refill 2x/day during exams.</li>
              <li>Payment: UPI + prepaid campus card; NFC/fingerprint optional add-on.</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-4 pb-24">
        <div className="rounded-3xl bg-gradient-to-tr from-emerald-600/20 to-blue-600/20 border border-neutral-800 p-6 md:p-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold">Bring CampusVends to your floor</h3>
              <p className="mt-2 text-neutral-300 text-sm">
                Want a pilot inside your building? Share your email and we’ll coordinate placement with administration.
              </p>
              <form onSubmit={handleSubmit} className="mt-6 flex gap-3">
                <input
                  type="email"
                  placeholder="your.name@nmims.in"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl bg-neutral-950 border border-neutral-700 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  required
                />
                <button
                  type="submit"
                  className="rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-neutral-950 hover:bg-emerald-400 transition"
                >
                  Submit
                </button>
              </form>
              {submitted && (
                <p className="mt-3 text-sm text-emerald-300">Thanks — logged for follow-up.</p>
              )}
            </div>
            <div className="rounded-2xl bg-neutral-950/60 border border-neutral-800 p-6">
              <h4 className="font-semibold">At-a-glance</h4>
              <ul className="mt-3 text-sm text-neutral-300 space-y-2">
                <li>Install time: 48–72 hours post-approval</li>
                <li>Floor space: 1m × 0.8m, standard power outlet</li>
                <li>Noise/heat: Minimal; student-quiet hours compliant</li>
                <li>Support: On-call 9:00–21:00; SLA &lt; 2 hours on campus</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-neutral-800/80 py-10 text-center text-xs text-neutral-500">
        © {new Date().getFullYear()} CampusVends • Founder: Saksham S • Mumbai
      </footer>
    </main>
  );
}
