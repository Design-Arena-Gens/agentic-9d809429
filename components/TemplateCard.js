import Link from 'next/link'

export function TemplateCard({ template }) {
  return (
    <Link href={`/template/${template.slug}`}>
      <div className="group border rounded-2xl overflow-hidden hover:shadow-xl transition ring-1 ring-black/5">
        <div className={`h-40 ${template.previewClass} grid place-items-center`}>
          <span className="text-white/90 text-xl font-semibold drop-shadow">{template.name}</span>
        </div>
        <div className="p-4">
          <p className="text-sm text-gray-600">{template.description}</p>
        </div>
      </div>
    </Link>
  )
}
