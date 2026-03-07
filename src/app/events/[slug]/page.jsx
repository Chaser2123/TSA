"use client";

import { use } from "react";
import { EVENTS } from "../../data/events";

export default function EventPage({ params }) {
  const { slug } = use(params);
  const EVENT = EVENTS.find((e) => e.slug === slug);

  if (!EVENT) {
    return (
      <div style={{ padding: "64px", fontFamily: "sans-serif" }}>
        <h1>Event not found</h1>
        <a href="/events" style={{ color: "#c8633a" }}>Back to Events</a>
      </div>
    );
  }

  return (
    <div className="ep-root">

      {/* Hero */}
      <div className="ep-hero">
        <img src={EVENT.hero} alt={EVENT.title} />
        <div className="ep-hero-overlay" />
        <div className="ep-hero-content">
          <span className="ep-tag">Event</span>
          <h1 className="ep-hero-title">{EVENT.title}</h1>
        </div>
      </div>

      {/* Body */}
      <div className="ep-body">

        {/* Main */}
        <div className="ep-main">
          <section className="ep-section">
            <h2 className="ep-section-title">About This Event</h2>
            {EVENT.about.split("\n\n").map((para, i) => (
              <p key={i} className="ep-para">{para}</p>
            ))}
          </section>

          <section className="ep-section">
            <h2 className="ep-section-title">Photo Gallery</h2>
            <div className="ep-gallery">
              {EVENT.gallery.map((src, i) => (
                <div key={i} className="ep-gallery-item">
                  <img src={src} alt={`Gallery photo ${i + 1}`} />
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="ep-sidebar">
          <div className="ep-card">

            <div className="ep-detail">
              <div>
                <p className="ep-detail-label">Date</p>
                <p className="ep-detail-value">{EVENT.date}</p>
              </div>
            </div>

            <div className="ep-detail">
              <div>
                <p className="ep-detail-label">Time</p>
                <p className="ep-detail-value">{EVENT.time}</p>
              </div>
            </div>

            <div className="ep-detail">
              <div>
                <p className="ep-detail-label">Location</p>
                <p className="ep-detail-value">{EVENT.location}</p>
                <p className="ep-detail-sub">{EVENT.address}</p>
              </div>
            </div>

            <div className="ep-divider" />

            <p className="ep-rsvp-title">RSVP by contacting the organiser</p>
            <div className="ep-organiser">
              <p className="ep-organiser-name">{EVENT.organiser.name}</p>
              <a href={`mailto:${EVENT.organiser.email}`} className="ep-organiser-contact">
                {EVENT.organiser.email}
              </a>
              <a href={`tel:${EVENT.organiser.phone}`} className="ep-organiser-contact">
                {EVENT.organiser.phone}
              </a>
            </div>

          </div>

          <a href="/events" className="ep-back">&larr; Back to Events</a>
        </aside>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap');

        .ep-root {
          background: #faf8f5; min-height: 100vh;
          font-family: 'DM Sans', sans-serif; color: #1c1c1c;
        }
        .ep-hero {
          position: relative; width: 100%; height: 480px;
          overflow: hidden; background: #111;
        }
        .ep-hero img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .ep-hero-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.65) 100%);
        }
        .ep-hero-content { position: absolute; bottom: 48px; left: 64px; z-index: 2; }
        .ep-tag {
          display: inline-block; font-size: 0.68rem; font-weight: 700;
          letter-spacing: 0.12em; text-transform: uppercase;
          color: white; padding: 4px 12px; border-radius: 100px;
          background: #c8633a; margin-bottom: 12px;
        }
        .ep-hero-title {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 400; color: white;
          line-height: 1.15; letter-spacing: -0.02em;
          margin: 0; max-width: 700px;
        }
        .ep-body {
          display: grid; grid-template-columns: 1fr 340px;
          gap: 48px; max-width: 1100px;
          margin: 0 auto; padding: 64px 32px;
        }
        .ep-section { margin-bottom: 56px; }
        .ep-section-title {
          font-family: 'DM Serif Display', serif;
          font-size: 1.6rem; font-weight: 400;
          letter-spacing: -0.02em; color: #1c1c1c;
          margin: 0 0 20px; padding-bottom: 12px;
          border-bottom: 1px solid #e8e2d9;
        }
        .ep-para { font-size: 1rem; line-height: 1.8; color: #555550; margin-bottom: 16px; }
        .ep-gallery { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
        .ep-gallery-item {
          aspect-ratio: 4/3; overflow: hidden;
          border-radius: 10px; background: #e8e2d9;
        }
        .ep-gallery-item img {
          width: 100%; height: 100%; object-fit: cover; display: block;
          transition: transform 0.4s ease;
        }
       
        .ep-sidebar { display: flex; flex-direction: column; gap: 16px; }
        .ep-card {
          background: white;
          border-radius: 16px; padding: 28px;
          position: sticky; top: 24px;
        }
        .ep-detail { margin-bottom: 20px; }
        .ep-detail-label {
          font-size: 0.7rem; font-weight: 700;
          letter-spacing: 0.1em; text-transform: uppercase;
          color: #9a9890; margin-bottom: 3px;
        }
        .ep-detail-value { font-size: 0.95rem; font-weight: 500; color: #1c1c1c; line-height: 1.4; }
        .ep-detail-sub { font-size: 0.82rem; color: #9a9890; margin-top: 2px; }
        .ep-divider { height: 1px; background: #e8e2d9; margin: 8px 0 20px; }
        .ep-rsvp-title {
          font-size: 0.72rem; font-weight: 700;
          letter-spacing: 0.08em; text-transform: uppercase;
          color: #9a9890; margin-bottom: 14px;
        }
        .ep-organiser { display: flex; flex-direction: column; gap: 8px; }
        .ep-organiser-name { font-size: 0.95rem; font-weight: 600; color: #1c1c1c; }
        .ep-organiser-contact { font-size: 0.88rem; color: #c8633a; text-decoration: none; transition: opacity 0.2s; }
        
        .ep-back {
          font-size: 0.85rem; font-weight: 600; color: #c8633a;
          text-decoration: none; display: inline-block; transition: transform 0.2s;
        }

        @media (max-width: 900px) {
          .ep-body { grid-template-columns: 1fr; padding: 40px 24px; }
          .ep-sidebar { order: -1; }
          .ep-card { position: static; }
          .ep-hero-content { left: 24px; bottom: 32px; }
          .ep-hero { height: 360px; }
          .ep-gallery { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 480px) { .ep-gallery { grid-template-columns: 1fr; } }
      `}</style>
    </div>
  );
}