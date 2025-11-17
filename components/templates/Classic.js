export default function Classic({ couple = 'Ava & Liam', date = 'June 21, 2025', venue = 'Sunset Gardens', story }) {
  return (
    <div className="min-h-screen bg-blush/30">
      <header className="bg-white/70 backdrop-blur sticky top-0 border-b">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="font-display text-2xl">{couple}</h1>
          <span className="text-gold font-medium">{date}</span>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        <section className="rounded-3xl border border-amber-900/20 bg-white shadow-sm overflow-hidden">
          <div className="bg-gradient-to-r from-amber-700 to-rose-500 h-2" />
          <div className="p-8 md:p-12">
            <h2 className="font-display text-4xl md:text-6xl mb-4 tracking-tight">We Are Getting Married</h2>
            <p className="text-gray-600 leading-relaxed">Join us to celebrate our love at <span className="font-medium text-amber-700">{venue}</span>.</p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <div className="prose prose-rose max-w-none">
                  <p>{story || 'After years of adventures, laughter, and love, we are excited to start this new chapter together. We would be honored to have you there.'}</p>
                </div>
              </div>
              <div className="md:border-l md:pl-6">
                <div className="rounded-xl border bg-amber-50 text-amber-900 p-6">
                  <p className="font-semibold">When</p>
                  <p>{date}</p>
                  <p className="font-semibold mt-4">Where</p>
                  <p>{venue}</p>
                  <a href="#" className="mt-6 inline-block rounded-full bg-amber-700 text-white px-5 py-2">RSVP</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
