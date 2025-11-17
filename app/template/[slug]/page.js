import Classic from '../../../components/templates/Classic'
import Modern from '../../../components/templates/Modern'
import Boho from '../../../components/templates/Boho'

function getParams(searchParams) {
  const couple = searchParams.couple || undefined
  const date = searchParams.date || undefined
  const venue = searchParams.venue || undefined
  const story = searchParams.story || undefined
  return { couple, date, venue, story }
}

export default function TemplatePage({ params, searchParams }) {
  const { slug } = params
  const templateProps = getParams(searchParams || {})
  if (slug === 'classic') return <Classic {...templateProps} />
  if (slug === 'modern') return <Modern {...templateProps} />
  if (slug === 'boho') return <Boho {...templateProps} />
  return (
    <div className="min-h-screen grid place-items-center">
      <div className="text-center px-6">
        <h1 className="text-3xl font-display mb-2">Template not found</h1>
        <p className="text-gray-600">Choose from classic, modern, or boho.</p>
      </div>
    </div>
  )
}
