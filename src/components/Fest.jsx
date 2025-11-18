import React, { useState, useEffect } from "react";
import "./fest.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { motion, AnimatePresence } from "framer-motion";

const PUBLIC_URL = import.meta.env.BASE_URL || "";

const events = [
  {
    id: 1,
    title: "Antaragni - Kanreki's Oraculum",
    logo: PUBLIC_URL + "/images/antaragni-2025.jpg",
    description:
      "IIT Kanpur's 60th Edition Cultural Festival featuring a mystical theme of 'Kanreki's Oraculum'. Join the celebration of art, culture, and creativity.",
    date: "Oct 9-12, 2025",
    location: "IIT Kanpur, Uttar Pradesh",
    type: "Cultural Festival",
    "college/university": "Indian Institute of Technology Kanpur",
  },
  {
    id: 2,
    title: "ATMoS'25",
    logo: PUBLIC_URL + "/images/atmos-2025.jpg",
    description:
      "Techno-management fest with workshops, quizzes, exhibitions, competitions across tech & management.",
    date: "Nov 7-9, 2025",
    location: "Hyderabad, Telangana",
    type: "Technical / Management / Fest",
    "college/university": "BITS Pilani, Hyderabad Campus",
  },
  {
    id: 3,
    title: "Mood Indigo ’25",
    logo: PUBLIC_URL + "/images/mood-indigo-2025.jpg",
    description:
      "One of Asia’s largest college cultural festivals: music, dance, art, competitions, Pro-nights.",
    date: "Dec 15-18, 2025",
    location: "Mumbai, Maharashtra",
    type: "Cultural Fest",
    "college/university": "Indian Institute of Technology Bombay (IIT Bombay)",
  },
  {
    id: 4,
    title: "Waves '25",
    logo: "https://i.ytimg.com/vi/OBNawUBwYFI/hq720.jpg?rs=AOn4CLC-Hh8WIj94qkpkTSfvTI3jZD9a7Q&sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD",
    description:
      "Three-day cultural extravaganza: dance, fashion, music, thousands of students across India participate.",
    date: "31 Oct-2 Nov, 2025",
    location: "Goa",
    type: "Cultural Fest",
    "college/university": "IBITS Pilani, K. K. Birla Goa Campus",
  },
  {
    id: 5,
    title: "HACKCBS 8.0",
    logo: "https://hackcbs.tech/assets/img/8.0_assets/hackCBS7.0%20logo_white.png",
    description:
      "Student-run hackathon / development sprint held over 2 days; intensive coding competition.",
    date: "Nov 8-9, 2025",
    location: "Delhi",
    type: "Hackathon / Technical",
    "college/university": "Shaheed Sukhdev College of Business Studies (DU)",
  },
  {
    id: 6,
    title: "Synergy ’25",
    logo: PUBLIC_URL + "/images/synergy-2025.jpg",
    description:
      "Flagship tech fest with workshops, multi-track competitions for students.",
    date: "Nov 7-9, 2025",
    location: "Bangalore, Karnataka",
    type: "Technical / Fest",
    "college/university":
      "International Institute of Information Technology Bangalore (IIIT-Bangalore)",
  },
  {
    id: 7,
    title: "Atharv Ranbhoomi 2025",
    logo: "https://static.wixstatic.com/media/c10612_587666f8b60e4eb6923bf2c8587cb59e~mv2.png/v1/crop/x_468%2Cy_0%2Cw_5065%2Ch_3375/fill/w_1094%2Ch_1176%2Cfp_0.50_0.50%2Cq_90%2Cusm_0.66_1.00_0.01%2Cenc_avif%2Cquality_auto/Atharv%20Ranbhoomi%20-%203%20-%20Edited.png",
    description:
      "Multi-track fest: cultural, literary, sports & management theme.",
    date: "31 Oct-2 Nov, 2025",
    location: "Indore, Madhya Pradesh",
    type: "Management / Cultural / Literary Fest",
    "college/university": "Indian Institute of Management Indore (IIM Indore)",
  },
  {
    id: 8,
    title: "TRMUN 2025",
    logo: PUBLIC_URL + "/images/trmun-2025.jpg",
    description:
      "A Model United Nations conference with simulations and debates.",
    date: "Nov 6-7, 2025",
    location: "New Delhi",
    type: "MUN / Cultural",
    "college/university": "MUNSOC, Ramjas College (DU)",
  },
  {
    id: 9,
    title: "Daहाड़ MUN'25",
    logo: PUBLIC_URL + "/images/dahad-mun-2025.jpg",
    description: "Combines Model United Nations with hackathon challenges.",
    date: "Nov 15-16, 2025",
    location: "Dehradun",
    type: "MUN / Hackathon",
    "college/university": "Dehradun Institute of Technology (DIT University)",
  },
  {
    id: 10,
    title: "Dudhwa Festival 2025",
    logo: PUBLIC_URL + "/images/dudhwa-festival-2025.jpg",
    description:
      "Promotes eco-tourism and wildlife awareness through cultural events.",
    date: "Nov 14-16, 2025",
    location: "Dudhwa Tiger Reserve",
    type: "MUN / Hackathon",
    "college/university": "Uttar Pradesh Government",
  },
];

function Fest() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    const scrollables = document.querySelectorAll(".left-section, .right-section");

    const handleWheel = (e) => {
      const el = e.currentTarget;
      const atTop = el.scrollTop === 0 && e.deltaY < 0;
      const atBottom =
        el.scrollHeight - el.scrollTop === el.clientHeight && e.deltaY > 0;
      if (atTop || atBottom) e.preventDefault();
    };

    scrollables.forEach((el) => {
      el.addEventListener("wheel", handleWheel, { passive: false });
    });

    return () => {
      scrollables.forEach((el) => {
        el.removeEventListener("wheel", handleWheel);
      });
    };
  }, []);

  const filteredEvents = events.filter((event) =>
    event.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="fullpage">
      <Navbar />

      <div className="content-layout">
        {/* Left section */}
        <div className="left-section">
          <div className="showcase-container">
            <header className="showcase-header">
              <h1>Fest & Events Showcase</h1>
              <p>.............................................................................</p>
            </header>

            <div className="search-filter-row">
              <input
                type="text"
                placeholder="Search fests & events..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-bar"
              />
              <select
                className="filter-dropdown"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              >
                <option value="All">All Levels</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
              </select>
            </div>

            <div className="hackathons-grid">
              {filteredEvents.map((event) => (
                <motion.div
                  key={event.id}
                  className={`hackathons-card ${
                    selectedEvent?.id === event.id ? "active" : ""
                  }`}
                  onClick={() => setSelectedEvent(event)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <h2>{event.title}</h2>
                  <p>{event.description}</p>
                  <p className="hackathons-date">{event.date}</p>
                  <button className="gradient-btn">Learn More</button>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Right section with animation */}
        <div className="right-section">
          <AnimatePresence mode="wait">
            {selectedEvent ? (
              <motion.div
                key={selectedEvent.id}
                className="event-details"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
              >
                <button
                  className="close-btn"
                  onClick={() => setSelectedEvent(null)}
                  title="Close"
                >
                  &times;
                </button>

                <h2>{selectedEvent.title}</h2>
                <img
                  src={selectedEvent.logo}
                  alt={selectedEvent.title}
                  onError={(e) => {
                    e.target.src =
                      "https://placehold.co/400x200/000000/ffffff?text=" +
                      encodeURIComponent(selectedEvent.title);
                  }}
                  style={{
                    width: "100%",
                    maxWidth: "400px",
                    height: "auto",
                    marginBottom: "24px",
                    borderRadius: "8px",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    backgroundColor: "#000",
                  }}
                />
                <p><strong>Description:</strong> {selectedEvent.description}</p>
                <p><strong>Date:</strong> {selectedEvent.date}</p>
                <p><strong>Location:</strong> {selectedEvent.location}</p>
                <p><strong>Type:</strong> {selectedEvent.type}</p>
                <p><strong>College/University:</strong> {selectedEvent["college/university"]}</p>
              </motion.div>
            ) : (
              <motion.p
                key="placeholder"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="placeholder-text"
              >
                Select a fest to view the details
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default Fest;
