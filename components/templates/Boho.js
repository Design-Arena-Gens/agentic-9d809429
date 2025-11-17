export default function Boho({ couple = 'Sage & River', date = 'October 5, 2025', venue = 'Willow Grove', story }) {
  return (
    <div className="min-h-screen bg-emerald-50">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="rounded-3xl overflow-hidden ring-1 ring-emerald-800/10 bg-white">
          <div className="relative">
            <div className="h-40 bg-gradient-to-r from-emerald-600 to-emerald-400" />
            <div className="absolute inset-0 bg-[url('/floral.svg')] bg-center opacity-30" />
            <div className="absolute inset-x-6 -bottom-8 md:-bottom-10">
              <div className="bg-white rounded-2xl shadow p-6 md:p-8">
                <h1 className="font-script text-5xl md:text-6xl text-emerald-700 text-center">{couple}</h1>
                <p className="text-center text-emerald-900/80 mt-2">{date} ? {venue}</p>
              </div>
            </div>
          </div>
          <div className="p-6 md:p-10 mt-16">
            <p className="text-emerald-900/80 leading-relaxed text-lg">
              {story || 'Under canopies of green and golden light, we invite you to gather, feast, and dance with us as we begin our life together.'}
            </p>
            <div className="mt-8 flex justify-center">
              <a href="#" className="rounded-full bg-emerald-700 text-white px-6 py-2">RSVP</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
