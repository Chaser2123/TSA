"use client";

import { useState } from "react";
import { RESOURCES, CATEGORIES } from "../data/resources";

function ResourcesContent() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");  

  const filtered = RESOURCES.filter((r) => {
    const matchesCategory =
      activeCategory === "All" || r.category === activeCategory;
    const q = query.toLowerCase();
    const matchesQuery =
      query === "" ||
      r.title.toLowerCase().includes(q) ||
      r.excerpt.toLowerCase().includes(q) ||
      r.category.toLowerCase().includes(q) ||
      r.eligibility.toLowerCase().includes(q);
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="rp-root">

      {/* Hero */}
      <div className="rp-hero">
        <div className="rp-hero-content">
          <span className="rp-hero-label">Community</span>
          <h1 className="rp-hero-title">Resources</h1>
          <p className="rp-hero-subtitle">
            Find services, support, and programmes available to all Saratoga Springs residents.
          </p>

          {/* Search */}
          <div className="rp-search-bar">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" strokeLinecap="round" />
            </svg>
            <input
              type="text"
              placeholder="Search by name, category, or eligibility..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="rp-search-input"
            />
            {query && (
              <button className="rp-search-clear" onClick={() => setQuery("")}>
                &times;
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Category tabs */}
      <div className="rp-tabs">
        <button
          className={`rp-tab ${activeCategory === "All" ? "rp-tab-active" : ""}`}
          onClick={() => setActiveCategory("All")}
        >
          All
        </button>
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            className={`rp-tab ${activeCategory === cat ? "rp-tab-active" : ""}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Results */}
      <div className="rp-body">
        {query && (
          <p className="rp-count">
            {filtered.length} result{filtered.length !== 1 ? "s" : ""} for <strong>"{query}"</strong>
          </p>
        )}

        {filtered.length === 0 ? (
          <div className="rp-empty">
            <p>No resources found{query ? ` for "${query}"` : ""}. Try a different search or category.</p>
          </div>
        ) : (
          <div className="rp-grid">
            {filtered.map((r) => (
              <a href={`/resources/${r.slug}`} key={r.slug} className="rp-card">
                <div className="rp-card-header">
                  <div>
                    <span className="rp-card-category">{r.category}</span>
                    <h3 className="rp-card-title">{r.title}</h3>
                  </div>
                  <span className="rp-card-arrow">&rarr;</span>
                </div>
                <p className="rp-card-excerpt">{r.excerpt}</p>
                <div className="rp-card-footer">
                  <span className="rp-card-hours">
                    {r.hours[0].day} &middot; {r.hours[0].time}
                  </span>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap');

        .rp-root {
          background: #faf8f5; min-height: 100vh;
          font-family: 'DM Sans', sans-serif; color: #1c1c1c;
        }

        /* ── Hero ── */
        .rp-hero { background: #1c1c1c; padding: 80px 64px 56px; }
        .rp-hero-content { max-width: 700px; }
        .rp-hero-label {
          display: inline-block; font-size: 0.68rem; font-weight: 700;
          letter-spacing: 0.14em; text-transform: uppercase;
          color: #3ac87e; margin-bottom: 12px;
        }
        .rp-hero-title {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 400; color: white;
          line-height: 1.1; letter-spacing: -0.02em; margin: 0 0 12px;
        }
        .rp-hero-subtitle {
          font-size: 1rem; color: rgba(255,255,255,0.55);
          line-height: 1.6; margin: 0 0 32px;
        }

        /* Search */
        .rp-search-bar {
          display: flex; align-items: center; gap: 12px;
          background: white; border-radius: 100px;
          padding: 6px 8px 6px 22px;
          max-width: 560px;
          box-shadow: 0 4px 24px rgba(0,0,0,0.2);
        }
        .rp-search-bar svg { width: 18px; height: 18px; color: #9a9890; flex-shrink: 0; }
        .rp-search-input {
          flex: 1; border: none; outline: none;
          font-family: 'DM Sans', sans-serif; font-size: 0.95rem;
          color: #1c1c1c; background: transparent; padding: 10px 0;
        }
        .rp-search-input::placeholder { color: #9a9890; }
        .rp-search-clear {
          background: #f2ede7; border: none; border-radius: 100px;
          width: 34px; height: 34px; cursor: pointer;
          font-size: 1rem; color: #555550; flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
          transition: background 0.2s;
        }

        /* ── Tabs ── */
        .rp-tabs {
          display: flex; flex-wrap: wrap; gap: 0;
          background: white;
          border-bottom: 2px solid #e8e2d9;
          padding: 0 64px;
          overflow-x: auto;
        }
        .rp-tab {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.85rem; font-weight: 600;
          padding: 16px 22px;
          border: none; border-bottom: 2px solid transparent;
          margin-bottom: -2px;
          background: transparent; color: #9a9890;
          cursor: pointer; white-space: nowrap;
          transition: color 0.2s, border-color 0.2s;
        }
        .rp-tab-active { color: #3ac87e !important; border-bottom-color: #3ac87e !important; }

        /* ── Body ── */
        .rp-body { padding: 48px 64px; max-width: 1200px; margin: 0 auto; }
        .rp-count { font-size: 0.85rem; color: #9a9890; margin-bottom: 24px; }

        .rp-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        .rp-card {
          background: white; 
          border-radius: 14px; padding: 28px;
          text-decoration: none; color: inherit;
          display: flex; flex-direction: column; gap: 12px;
          transition: box-shadow 0.2s, transform 0.2s;
        }

        .rp-card-header {
          display: flex; align-items: flex-start;
          justify-content: space-between; gap: 16px;
        }
        .rp-card-category {
          display: inline-block;
          font-size: 0.65rem; font-weight: 700;
          letter-spacing: 0.1em; text-transform: uppercase;
          color: #3ac87e; background: #edfaf3;
          padding: 3px 10px; border-radius: 100px;
          margin-bottom: 8px;
        }
        .rp-card-title {
          font-family: 'DM Serif Display', serif;
          font-size: 1.15rem; font-weight: 400;
          color: #1c1c1c; line-height: 1.3; margin: 0;
        }
        .rp-card-arrow {
          font-size: 1.1rem; color: #3ac87e; flex-shrink: 0;
          margin-top: 4px; transition: transform 0.2s;
        }

        .rp-card-excerpt {
          font-size: 0.88rem; color: #555550;
          line-height: 1.6; margin: 0; flex: 1;
        }

        .rp-card-footer {
          padding-top: 12px;
          border-top: 1px solid #f0ebe4;
        }
        .rp-card-hours {
          font-size: 0.78rem; color: #9a9890; font-weight: 500;
        }

        .rp-empty {
          text-align: center; padding: 80px 0;
          color: #9a9890; font-size: 1rem;
        }

        @media (max-width: 900px) {
          .rp-hero { padding: 48px 24px 40px; }
          .rp-tabs { padding: 0 24px; }
          .rp-body { padding: 32px 24px; }
          .rp-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
}

export default function ResourcesPage() {
  return (
      <ResourcesContent />
  );
}