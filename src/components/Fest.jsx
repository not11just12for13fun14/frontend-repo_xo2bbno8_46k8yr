import React, { useMemo } from 'react'
import { motion } from 'framer-motion'
import './fest.css'

const sampleEvents = [
  {
    id: 1,
    title: 'Autumn Harvest Fair',
    date: '2025-11-20',
    description: 'Local artisans, live music, and seasonal treats. Family friendly with workshops and craft stalls.',
    logo: 'https://images.unsplash.com/photo-1520975979651-27eae3b8a2f8?q=80&w=256&auto=format&fit=crop',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'City Lights Film Fest',
    date: '2025-12-05',
    description: 'Independent films from around the world, Q&A sessions with directors, and rooftop screenings.',
    logo: 'https://images.unsplash.com/photo-1517602302552-471fe67acf66?q=80&w=256&auto=format&fit=crop',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Aurora Music Nights',
    date: '2026-01-18',
    description: 'Electronic and indie bands across two stages with late-night food trucks and light shows.',
    logo: 'https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?q=80&w=256&auto=format&fit=crop',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 4,
    title: 'Makers & Tech Expo',
    date: '2026-02-10',
    description: 'Showcase of robotics, 3D printing, workshops, and startup demos. Perfect for curious minds.',
    logo: 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?q=80&w=256&auto=format&fit=crop',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1200&auto=format&fit=crop'
  }
]

const Card = ({ event, onSelect, index }) => {
  return (
    <motion.button
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: 0.05 * index }}
      className="fest-card"
      onClick={() => onSelect(event)}
    >
      <img src={event.logo} alt="logo" className="fest-card-logo" width={55} height={55} />
      <div className="fest-card-body">
        <div className="fest-card-title">{event.title}</div>
        <div className="fest-card-desc">{event.description}</div>
        <div className="fest-card-date">{new Date(event.date).toLocaleDateString()}</div>
      </div>
    </motion.button>
  )
}

const RightPanel = ({ event }) => {
  return (
    <motion.aside
      key={event ? event.id : 'empty'}
      initial={{ x: 40, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 220, damping: 26 }}
      className="fest-right"
    >
      {event ? (
        <div className="fest-right-inner">
          <img src={event.image} alt={event.title} className="fest-right-image" />
          <h3 className="fest-right-title">{event.title}</h3>
          <p className="fest-right-date">{new Date(event.date).toLocaleDateString()}</p>
          <p className="fest-right-desc">{event.description}</p>
        </div>
      ) : (
        <div className="fest-right-empty">Select an event to see details</div>
      )}
    </motion.aside>
  )
}

const Fest = () => {
  const [query, setQuery] = React.useState('')
  const [selected, setSelected] = React.useState(null)

  const filtered = useMemo(() => {
    const q = query.toLowerCase()
    return sampleEvents.filter(e => e.title.toLowerCase().includes(q) || e.description.toLowerCase().includes(q))
  }, [query])

  return (
    <div className="fest-page" style={{ padding: '20px 40px' }}>
      <div className="fest-left">
        <h1 className="fest-title">Fest & Events Showcase</h1>
        <div className="fest-divider" />

        <div className="fest-search-wrap">
          <input
            type="text"
            placeholder="Search events..."
            className="fest-search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <div className="fest-grid">
          {filtered.map((ev, idx) => (
            <Card key={ev.id} event={ev} index={idx} onSelect={setSelected} />
          ))}
        </div>
      </div>

      <RightPanel event={selected} />
    </div>
  )
}

export default Fest
