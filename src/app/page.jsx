"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import ImageCarousel from "./components/ImageCarousel";
import { NEWS } from "./data/news";
import { EVENTS } from "./data/events";

const RESOURCE_CATEGORIES = [
  { title: "Health Services",  desc: "Find clinics, mental health support, and emergency contacts near you.", href: "/resources?category=Health+Services" },
  { title: "Education",        desc: "Schools, tutoring programs, scholarships, and adult learning resources.", href: "/resources?category=Education" },
  { title: "Housing Support",  desc: "Rental assistance, emergency housing, and homeowner programmes.", href: "/resources?category=Housing+Support" },
  { title: "Employment",       desc: "Job listings, resume help, and career development workshops.", href: "/resources?category=Employment" },
  { title: "Transport",        desc: "Bus schedules, ride-share programmes, and accessibility services.", href: "/resources?category=Transport" },
  { title: "Family Services",  desc: "Childcare, parenting classes, and family counselling services.", href: "/resources?category=Family+Services" },
];

const CAROUSEL_SLIDES = [
  ...EVENTS.slice(0, 2).map((e) => ({
    image: e.hero,
    tag: "Event",
    title: e.title,
    description: e.excerpt,
    date: e.date,
    href: `/events/${e.slug}`,
  })),
  ...NEWS.slice(0, 1).map((n) => ({
    image: n.hero,
    tag: "News",
    title: n.title,
    description: n.excerpt,
    date: n.date,
    href: `/news/${n.slug}`,
  })),
];

function SectionHeader({ label, title, subtitle, actionLabel, actionHref }) {
  return (
    <div className="sec-header">
      <div className="sec-header-text">
        <span className="sec-label">{label}</span>
        <h2 className="sec-title">{title}</h2>
        {subtitle && <p className="sec-subtitle">{subtitle}</p>}
      </div>
      {actionLabel && (
        <a href={actionHref} className="sec-action">{actionLabel} &rarr;</a>
      )}
    </div>
  );
}

function Card({ item, type }) {
  const href = type === "news" ? `/news/${item.slug}` : `/events/${item.slug}`;
  const tagColor = type === "news" ? "var(--accent-blue)" : "var(--accent)";
  return (
    <a href={href} className="card">
      <div className="card-img">
        <img src={item.hero} alt={item.title} />
        <span className="card-tag" style={{ background: tagColor }}>{item.tag}</span>
      </div>
      <div className="card-body">
        <p className="card-date">{item.date}</p>
        <h3 className="card-title">{item.title}</h3>
        <p className="card-excerpt">{item.excerpt}</p>
        <span className="card-link">Read more &rarr;</span>
      </div>
    </a>
  );
}

export default function Home() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    if (searchQuery.trim()) {
      router.push(`/resources?q=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      router.push("/resources");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <>
      <ImageCarousel slides={CAROUSEL_SLIDES} />

      {/* Looking for Resources? */}
      <section className="resources-section">
        <SectionHeader
          label="Community"
          title="Looking for Resources?"
          subtitle="Everything you need, all in one place. Browse by category or search below."
        />
        <div className="resources-search">
          <input
            type="text"
            placeholder="Search resources, services, programs..."
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button className="search-btn" onClick={handleSearch}>Search</button>
        </div>
        <div className="resources-grid">
          {RESOURCE_CATEGORIES.map((r) => (
            <a href={r.href} key={r.title} className="resource-tile">
              <div>
                <h4 className="resource-tile-title">{r.title}</h4>
                <p className="resource-tile-desc">{r.desc}</p>
              </div>
              <span className="resource-arrow">&rarr;</span>
            </a>
          ))}
        </div>
      </section>


      {/* Events */}
      <section className="cards-section">
        <SectionHeader
          label="Coming Up"
          title="Events"
          subtitle="Mark your calendar and get involved."
          actionLabel="All Events"
          actionHref="/events"
        />
        <div className="cards-grid">
          {EVENTS.slice(0, 4).map((item) => (
            <Card key={item.slug} item={item} type="event" />
          ))}
        </div>
      </section>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --cream:       #faf8f5;
          --white:       #ffffff;
          --stone:       #e8e2d9;
          --stone-light: #f2ede7;
          --text:        #1c1c1c;
          --text-mid:    #555550;
          --text-muted:  #9a9890;
          --accent:      #c8633a;
          --accent-blue: #3a7ec8;
          --accent-green:#3ac87e;
          --radius:      14px;
          --shadow:      0 4px 24px rgba(0,0,0,0.07);
        }

        body {
          background: var(--cream);
          color: var(--text);
          font-family: 'DM Sans', sans-serif;
          -webkit-font-smoothing: antialiased;
        }

        .sec-header {
          display: flex; align-items: flex-end;
          justify-content: space-between; flex-wrap: wrap;
          gap: 16px; margin-bottom: 40px;
        }
        .sec-label {
          display: block; font-size: 0.68rem; font-weight: 700;
          letter-spacing: 0.14em; text-transform: uppercase;
          color: var(--accent); margin-bottom: 8px;
        }
        .sec-title {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(1.7rem, 3vw, 2.4rem);
          font-weight: 400; letter-spacing: -0.02em;
          color: var(--text); line-height: 1.15;
        }
        .sec-subtitle {
          font-size: 0.95rem; color: var(--text-muted);
          margin-top: 6px; line-height: 1.5;
        }
        .sec-action {
          font-size: 0.85rem; font-weight: 600;
          color: var(--accent); text-decoration: none;
          white-space: nowrap; padding-bottom: 2px;
          border-bottom: 1px solid transparent;
          transition: border-color 0.2s;
        }
       
        .resources-section {
          background: var(--white);
          padding: 80px 64px;
          border-bottom: 1px solid var(--stone);
        }
        .resources-search {
          display: flex; gap: 12px;
          margin-bottom: 40px; max-width: 560px;
        }
        .search-input {
          flex: 1; padding: 13px 18px;
          border: 1.5px solid var(--stone);
          border-radius: 100px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.9rem; color: var(--text);
          background: var(--cream);
          outline: none; transition: border-color 0.2s;
        }
        .search-input::placeholder { color: var(--text-muted); }
        .search-input:focus { border-color: var(--accent); }
        .search-btn {
          padding: 13px 28px;
          background: var(--accent); color: white;
          border: none; border-radius: 100px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.9rem; font-weight: 600;
          cursor: pointer; transition: opacity 0.2s;
        }
       
        .resources-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }
        .resource-tile {
          display: flex; align-items: center;
          justify-content: space-between; gap: 16px;
          background: var(--cream);
          border: 1px solid var(--stone);
          border-radius: var(--radius);
          padding: 22px 20px;
          text-decoration: none; color: inherit;
          transition: box-shadow 0.2s, transform 0.2s;
        }
       
        .resource-tile-title {
          font-size: 0.95rem; font-weight: 600;
          color: var(--text); margin-bottom: 4px;
        }
        .resource-tile-desc {
          font-size: 0.82rem; color: var(--text-muted); line-height: 1.5;
        }
        .resource-arrow {
          flex-shrink: 0; font-size: 1rem; color: var(--accent);
          transition: transform 0.2s;
        }
       
        .cards-section {
          padding: 80px 64px;
          background: var(--cream);
          border-bottom: 1px solid var(--stone);
        }
        .cards-section-alt { background: var(--stone-light); }

        .cards-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        .card {
          background: var(--white); border-radius: var(--radius);
          overflow: hidden; text-decoration: none; color: inherit;
          border: 1px solid var(--stone);
          transition: box-shadow 0.25s, transform 0.25s;
          display: flex; flex-direction: column;
        }
        .card-img { position: relative; width: 100%; height: 160px; overflow: hidden; }
        .card-img img {
          width: 100%; height: 100%; object-fit: cover;
          transition: transform 0.4s ease; display: block;
        }
        .card-tag {
          position: absolute; top: 12px; left: 12px;
          font-size: 0.65rem; font-weight: 700;
          letter-spacing: 0.1em; text-transform: uppercase;
          color: white; padding: 3px 10px; border-radius: 100px;
        }
        .card-body { padding: 20px; flex: 1; display: flex; flex-direction: column; }
        .card-date { font-size: 0.75rem; color: var(--text-muted); margin-bottom: 6px; }
        .card-title {
          font-family: 'DM Serif Display', serif;
          font-size: 1.05rem; font-weight: 400;
          color: var(--text); margin-bottom: 8px; line-height: 1.3;
        }
        .card-excerpt {
          font-size: 0.82rem; color: var(--text-muted);
          line-height: 1.55; flex: 1; margin-bottom: 16px;
        }
        .card-link { font-size: 0.8rem; font-weight: 600; color: var(--accent); }

        @media (max-width: 1100px) {
          .cards-grid { grid-template-columns: repeat(2, 1fr); }
          .resources-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 768px) {
          .resources-section, .cards-section { padding: 56px 24px; }
          .cards-grid { grid-template-columns: 1fr; max-width: 420px; }
          .resources-grid { grid-template-columns: 1fr; }
          .resources-search { flex-direction: column; }
          .search-btn { width: 100%; }
        }
      `}</style>
    </>
  );
}