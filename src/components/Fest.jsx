import React, { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import './fest.css'

// Only copy details (data) while preserving the existing layout/structure
const PUBLIC_URL = import.meta.env.BASE_URL || ''

const events = [
  {
    id: 1,
    title: "Antaragni - Kanreki's Oraculum",
    logo: PUBLIC_URL + '/images/antaragni-2025.jpg',
    description:
      "IIT Kanpur's 60th Edition Cultural Festival featuring a mystical theme of 'Kanreki's Oraculum'. Join the celebration of art, culture, and creativity.",
    date: 'Oct 9-12, 2025',
    location: 'IIT Kanpur, Uttar Pradesh',
    type: 'Cultural Festival',
    'college/university': 'Indian Institute of Technology Kanpur',
  },
  {
    id: 2,
    title: "ATMoS'25",
    logo: PUBLIC_URL + '/images/atmos-2025.jpg',
    description:
      'Techno-management fest with workshops, quizzes, exhibitions, competitions across tech & management.',
    date: 'Nov 7-9, 2025',
    location: 'Hyderabad, Telangana',
    type: 'Technical / Management / Fest',
    'college/university': 'BITS Pilani, Hyderabad Campus',
  },
  {
    id: 3,
    title: 'Mood Indigo ’25',
    logo: PUBLIC_URL + '/images/mood-indigo-2025.jpg',
    description:
      'One of Asia’s largest college cultural festivals: music, dance, art, competitions, Pro-nights.',
    date: 'Dec 15-18, 2025',
    location: 'Mumbai, Maharashtra',
    type: 'Cultural Fest',
    'college/university': 'Indian Institute of Technology Bombay (IIT Bombay)',
  },
  {
    id: 4,
    title: "Waves '25",
    logo: 'https://i.ytimg.com/vi/OBNawUBwYFI/hq720.jpg?rs=AOn4CLC-Hh8WIj94qkpkTSfvTI3jZD9a7Q&sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD',
    description:
      'Three-day cultural extravaganza: dance, fashion, music, thousands of students across India participate.',
    date: '31 Oct-2 Nov, 2025',
    location: 'Goa',
    type: 'Cultural Fest',
    'college/university': 'IBITS Pilani, K. K. Birla Goa Campus',
  },
  {
    id: 5,
    title: 'HACKCBS 8.0',
    logo: 'https://hackcbs.tech/assets/img/8.0_assets/hackCBS7.0%20logo_white.png',
    description:
      'Student-run hackathon / development sprint held over 2 days; intensive coding competition.',
    date: 'Nov 8-9, 2025',
    location: 'Delhi',
    type: 'Hackathon / Technical',
    'college/university': 'Shaheed Sukhdev College of Business Studies (DU)',
  },
  {
    id: 6,
    title: 'Synergy ’25',
    logo: PUBLIC_URL + '/images/synergy-2025.jpg',
    description:
      'Flagship tech fest with workshops, multi-track competitions for students.',
    date: 'Nov 7-9, 2025',
    location: 'Bangalore, Karnataka',
    type: 'Technical / Fest',
    'college/university':
      'International Institute of Information Technology Bangalore (IIIT-Bangalore)',
  },
  {
    id: 7,
    title: 'Atharv Ranbhoomi 2025',
    logo: 'https://static.wixstatic.com/media/c10612_587666f8b60e4eb6923bf2c8587cb59e~mv2.png/v1/crop/x_468%2Cy_0%2Cw_5065%2Ch_3375/fill/w_1094%2Ch_1176%2Cfp_0.50_0.50%2Cq_90%2Cusm_0.66_1.00_0.01%2Cenc_avif%2Cquality_auto/Atharv%20Ranbhoomi%20-%203%20-%20Edited.png',
    description:
      'Multi-track fest: cultural, literary, sports & management theme.',
    date: '31 Oct-2 Nov, 2025',
    location: 'Indore, Madhya Pradesh',
    type: 'Management / Cultural / Literary Fest',
    'college/university': 'Indian Institute of Management Indore (IIM Indore)',
  },
  {
    id: 8,
    title: 'TRMUN 2025',
    logo: PUBLIC_URL + '/images/trmun-2025.jpg',
    description:
      'A Model United Nations conference with simulations and debates.',
    date: 'Nov 6-7, 2025',
    location: 'New Delhi',
    type: 'MUN / Cultural',
    'college/university': 'MUNSOC, Ramjas College (DU)',
  },
  {
    id: 9,
    title: "Daहाड़ MUN'25",
    logo: PUBLIC_URL + '/images/dahad-mun-2025.jpg',
    description: 'Combines Model United Nations with hackathon challenges.',
    date: 'Nov 15-16, 2025',
    location: 'Dehradun',
    type: 'MUN / Hackathon',
    'college/university': 'Dehradun Institute of Technology (DIT University)',
  },
  {
    id: 10,
    title: 'Dudhwa Festival 2025',
    logo: PUBLIC_URL + '/images/dudhwa-festival-2025.jpg',
    description:
      'Promotes eco-tourism and wildlife awareness through cultural events.',
    date: 'Nov 14-16, 2025',
    location: 'Dudhwa Tiger Reserve',
    type: 'MUN / Hackathon',
    'college/university': 'Uttar Pradesh Government',
  },
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
      <img src={event.logo} alt="logo" className="fest-card-logo" width={55} height={55} onError={(e) => { e.currentTarget.src = 'https://placehold.co/55x55/000000/ffffff?text=?' }} />
      <div className="fest-card-body">
        <div className="fest-card-title">{event.title}</div>
        <div className="fest-card-desc">{event.description}</div>
        <div className="fest-card-date">{event.date}</div>
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
          <img
            src={event.logo}
            alt={event.title}
            className="fest-right-image"
            onError={(e) => {
              e.currentTarget.src =
                'https://placehold.co/600x320/000000/ffffff?text=' + encodeURIComponent(event.title)
            }}
          />
          <h3 className="fest-right-title">{event.title}</h3>
          <p className="fest-right-date">{event.date}</p>
          <p className="fest-right-desc">{event.description}</p>
          {event.location && <p className="fest-right-meta"><strong>Location:</strong> {event.location}</p>}
          {event.type && <p className="fest-right-meta"><strong>Type:</strong> {event.type}</p>}
          {event['college/university'] && (
            <p className="fest-right-meta"><strong>College/University:</strong> {event['college/university']}</p>
          )}
        </div>
      ) : (
        <div className="fest-right-empty">Select an event to see details</div>
      )}
    </motion.aside>
  )
}

const Fest = () => {
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState(null)

  const filtered = useMemo(() => {
    const q = query.toLowerCase()
    return events.filter(e => e.title.toLowerCase().includes(q))
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
