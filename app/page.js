import { TemplateCard } from '../components/TemplateCard'

const templates = [
  { slug: 'classic', name: 'Classic Elegance', description: 'Timeless serif typography with gold accents', previewClass: 'bg-gradient-to-br from-amber-700 to-rose-500' },
  { slug: 'modern', name: 'Modern Minimal', description: 'Clean, bold typography with ample white space', previewClass: 'bg-gradient-to-br from-slate-900 to-slate-600' },
  { slug: 'boho', name: 'Boho Garden', description: 'Romantic florals with script headings', previewClass: 'bg-gradient-to-br from-emerald-600 to-emerald-400' },
]

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-display tracking-tight">Wedding Website Templates</h1>
        <p className="mt-4 text-gray-600">Pick a style, then customize via URL parameters.</p>
        <p className="mt-2 text-xs text-gray-500">Example: /template/classic?couple=Amelia+%26+Noah&date=June+21,+2025&venue=Sunset+Gardens</p>
      </section>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {templates.map((t) => (
          <TemplateCard key={t.slug} template={t} />
        ))}
      </div>
    </main>
  )
}
