import Reveal from '../Reveal'

// Общая «шапка» секции: тег + заголовок + подзаголовок.
export default function SectionHeader({ tag, title, subtitle, light = false }) {
  return (
    <Reveal className="section-header">
      {tag && <span className={`tag ${light ? 'tag-light' : ''}`}>{tag}</span>}
      <h2 style={light ? { color: '#fff' } : undefined}>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </Reveal>
  )
}
