export default function Modern({ couple = 'Maya ? Theo', date = '09 ? 14 ? 2025', venue = 'Warehouse 12', story }) {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">{couple}</h1>
            <p className="mt-4 text-slate-300 max-w-prose">{story || 'Minimal lines. Bold love. Celebrate with us in a modern space filled with music and memories.'}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full bg-white text-black px-4 py-1">{date}</span>
              <span className="rounded-full border border-slate-600 px-4 py-1">{venue}</span>
            </div>
          </div>
          <div className="aspect-[3/4] rounded-3xl bg-gradient-to-br from-slate-800 to-slate-600 ring-1 ring-white/10 grid place-items-center">
            <div className="w-24 h-24 border-4 border-white/70 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  )
}
