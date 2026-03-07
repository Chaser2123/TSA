"use client";

import { use } from "react";
import { RESOURCES } from "../../data/resources";

export default function ResourcePage({ params }) {
  const { slug } = use(params);
  const RESOURCE = RESOURCES.find((r) => r.slug === slug);
  const related = RESOURCES.filter(
    (r) => r.category === RESOURCE?.category && r.slug !== slug
  );

  if (!RESOURCE) {
    return (
      <div style={{ padding: "64px", fontFamily: "sans-serif" }}>
        <h1>Resource not found</h1>
        <a href="/resources" style={{ color: "#3ac87e" }}>Back to Resources</a>
      </div>
    );
  }

  return (
    <div className="rsp-root">

      {/* Hero */}
      <div className="rsp-hero">
        <div className="rsp-hero-inner">
          <a href="/resources" className="rsp-back-top">&larr; Back to Resources</a>
          <span className="rsp-category-tag">{RESOURCE.category}</span>
          <h1 className="rsp-title">{RESOURCE.title}</h1>
          <p className="rsp-excerpt">{RESOURCE.excerpt}</p>
        </div>
      </div>

      {/* Body */}
      <div className="rsp-body">

        {/* Main */}
        <div className="rsp-main">

          <section className="rsp-section">
            <h2 className="rsp-section-title">About This Resource</h2>
            {RESOURCE.description.split("\n\n").map((para, i) => (
              <p key={i} className="rsp-para">{para}</p>
            ))}
          </section>

          <section className="rsp-section">
            <h2 className="rsp-section-title">Who Is This For?</h2>
            <div className="rsp-eligibility">
              <p className="rsp-para">{RESOURCE.eligibility}</p>
            </div>
          </section>

          {related.length > 0 && (
            <section className="rsp-section">
              <h2 className="rsp-section-title">More in {RESOURCE.category}</h2>
              <div className="rsp-related">
                {related.map((r) => (
                  <a key={r.slug} href={`/resources/${r.slug}`} className="rsp-related-card">
                    <div>
                      <h4 className="rsp-related-title">{r.title}</h4>
                      <p className="rsp-related-excerpt">{r.excerpt}</p>
                    </div>
                    <span className="rsp-related-arrow">&rarr;</span>
                  </a>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Sidebar */}
        <aside className="rsp-sidebar">

          <div className="rsp-card">
            <p className="rsp-card-label">Opening Hours</p>
            <div className="rsp-hours">
              {RESOURCE.hours.map((h, i) => (
                <div key={i} className="rsp-hours-row">
                  <span className="rsp-hours-day">{h.day}</span>
                  <span className="rsp-hours-time">{h.time}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rsp-card">
            <p className="rsp-card-label">Contact</p>
            <p className="rsp-contact-name">{RESOURCE.contact.name}</p>
            <div className="rsp-contact-details">
              <a href={`tel:${RESOURCE.contact.phone}`} className="rsp-contact-item">
                {RESOURCE.contact.phone}
              </a>
              <a href={`mailto:${RESOURCE.contact.email}`} className="rsp-contact-item">
                {RESOURCE.contact.email}
              </a>
              <p className="rsp-contact-address">{RESOURCE.contact.address}</p>
            </div>
          </div>

          <a href="/resources" className="rsp-back">&larr; Back to Resources</a>
        </aside>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap');

        .rsp-root { background: #faf8f5; min-height: 100vh; font-family: 'DM Sans', sans-serif; color: #1c1c1c; }

        .rsp-hero { background: #1c1c1c; padding: 56px 64px 48px; }
        .rsp-hero-inner { max-width: 720px; }
        .rsp-back-top {
          display: inline-block; font-size: 0.82rem; font-weight: 600;
          color: rgba(255,255,255,0.5); text-decoration: none; margin-bottom: 20px; transition: color 0.2s;
        }

        .rsp-category-tag {
          display: inline-block; font-size: 0.68rem; font-weight: 700;
          letter-spacing: 0.12em; text-transform: uppercase;
          color: #3ac87e; padding: 4px 12px; border-radius: 100px;
          border: 1px solid rgba(58,200,126,0.4); margin-bottom: 16px;
        }
        .rsp-title {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(1.8rem, 4vw, 3rem);
          font-weight: 400; color: white;
          line-height: 1.15; letter-spacing: -0.02em; margin: 0 0 14px;
        }
        .rsp-excerpt { font-size: 1rem; color: rgba(255,255,255,0.65); line-height: 1.7; margin: 0; }

        .rsp-body {
          display: grid; grid-template-columns: 1fr 320px;
          gap: 48px; max-width: 1100px; margin: 0 auto; padding: 56px 32px;
        }

        .rsp-section { margin-bottom: 48px; }
        .rsp-section-title {
          font-family: 'DM Serif Display', serif; font-size: 1.5rem; font-weight: 400;
          letter-spacing: -0.02em; color: #1c1c1c; margin: 0 0 18px;
          padding-bottom: 12px; border-bottom: 1px solid #e8e2d9;
        }
        .rsp-para { font-size: 1rem; line-height: 1.8; color: #555550; margin-bottom: 16px; }

        .rsp-eligibility {
          background: #f2faf6; border: 1px solid #c6eedd;
          border-radius: 12px; padding: 20px;
        }
        .rsp-eligibility .rsp-para { margin-bottom: 0; }

        .rsp-related { display: flex; flex-direction: column; gap: 12px; }
        .rsp-related-card {
          display: flex; align-items: center; justify-content: space-between; gap: 16px;
          background: white; 
          border-radius: 12px; padding: 18px 20px;
          text-decoration: none; color: inherit;
          transition: box-shadow 0.2s, transform 0.2s;
        }
        
        .rsp-related-title { font-size: 0.92rem; font-weight: 600; color: #1c1c1c; margin-bottom: 4px; }
        .rsp-related-excerpt { font-size: 0.8rem; color: #9a9890; line-height: 1.4; }
        .rsp-related-arrow { color: #3ac87e; font-size: 1rem; flex-shrink: 0; transition: transform 0.2s; }
      
        .rsp-sidebar { display: flex; flex-direction: column; gap: 16px; }
        .rsp-card { background: white; border-radius: 14px; padding: 24px; position: sticky; top: 24px; }
        .rsp-card-label {
          font-size: 0.68rem; font-weight: 700; letter-spacing: 0.12em;
          text-transform: uppercase; color: #9a9890; margin-bottom: 14px;
        }
        .rsp-hours { display: flex; flex-direction: column; gap: 8px; }
        .rsp-hours-row { display: flex; justify-content: space-between; align-items: flex-start; gap: 8px; font-size: 0.85rem; }
        .rsp-hours-day { color: #555550; font-weight: 500; }
        .rsp-hours-time { color: #1c1c1c; font-weight: 600; text-align: right; }

        .rsp-contact-name { font-size: 0.95rem; font-weight: 600; color: #1c1c1c; margin-bottom: 12px; }
        .rsp-contact-details { display: flex; flex-direction: column; gap: 10px; }
        .rsp-contact-item { font-size: 0.85rem; color: #3ac87e; text-decoration: none; transition: opacity 0.2s; display: block; }
        .rsp-contact-address { font-size: 0.85rem; color: #555550; }

        .rsp-back { font-size: 0.85rem; font-weight: 600; color: #3ac87e; text-decoration: none; display: inline-block; transition: transform 0.2s; }

        @media (max-width: 900px) {
          .rsp-body { grid-template-columns: 1fr; padding: 40px 24px; }
          .rsp-sidebar { order: -1; }
          .rsp-card { position: static; }
          .rsp-hero { padding: 40px 24px 36px; }
        }
      `}</style>
    </div>
  );
}