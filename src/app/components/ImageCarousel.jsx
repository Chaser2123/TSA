"use client";

import { useState, useEffect } from "react";

const DEFAULT_SLIDES = [
  {
    image: "MyPhotos/5.jpg",
    tag: "Event",
    title: "Summer Community Meetup",
    description: "Join us for our annual summer gathering at Saratoga Springs park. Food, fun, and great company.",
    date: "June 14, 2025",
    href: "/events/summer-meetup",
  },
  {
    image: "MyPhotos/6.jpg",
    tag: "News",
    title: "New Youth Center Now Open",
    description: "The long-awaited Saratoga Springs Youth Center has officially opened its doors to all residents.",
    date: "May 28, 2025",
    href: "/news/youth-center-opens",
  },
  {
    image: "MyPhotos/7.jpg",
    tag: "Resource",
    title: "Free Mental Health Services",
    description: "Access free counselling and mental health support resources now available to every resident.",
    date: "Ongoing",
    href: "/resources/mental-health",
  },
];

const TAG_COLORS = {
  Event: "#c8633a",
  News: "#3a7ec8",
  Resource: "#3ac87e",
};

export default function ImageCarousel({ slides }) {
  const data = slides || DEFAULT_SLIDES;
  const [current, setCurrent] = useState(0);
 
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % data.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [data.length]);

  const next = () => setCurrent((prev) => (prev + 1) % data.length);
  const prev = () => setCurrent((prev) => (prev - 1 + data.length) % data.length);
  const goTo = (index) => setCurrent(index);

  return (
    <div className="hc-wrapper">

      <div className="hc-root">
        {/* Background images */}
        {data.map((s, i) => (
          <div key={i} className={`hc-bg ${i === current ? "hc-bg-active" : ""}`}>
            <img src={s.image} alt={s.title} />
          </div>
        ))}

        {/* Dark overlay */}
        <div className="hc-overlay" />

        {/* Main content */}
        <div className="hc-content">
          <span className="hc-tag" style={{ background: TAG_COLORS[data[current].tag] || "#c8633a" }}>
            {data[current].tag}
          </span>
          <p className="hc-date">{data[current].date}</p>
          <h2 className="hc-title">{data[current].title}</h2>
          <p className="hc-desc">{data[current].description}</p>
          <a href={data[current].href} className="hc-btn">
            Read More
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        {/* Arrows */}
        <button className="hc-arrow hc-left" onClick={prev} aria-label="Previous">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button className="hc-arrow hc-right" onClick={next} aria-label="Next">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      <style jsx>{`
        .hc-wrapper {
          position: relative;
          width: 100%;
        }

        .hc-root {
          position: relative;
          width: 100%;
          height: 620px;
          overflow: hidden;
          background: #111;
          font-family: 'DM Sans', sans-serif;
        }

        .hc-bg {
          position: absolute;
          inset: 0;
          opacity: 0;
          transition: opacity 0.7s ease;
        }
        .hc-bg img {
          width: 100%; height: 100%; object-fit: cover; display: block;
        }
        .hc-bg-active { opacity: 1; }

        .hc-overlay {
          position: absolute; inset: 0; z-index: 2;
          background: linear-gradient(
            105deg,
            rgba(0,0,0,0.75) 0%,
            rgba(0,0,0,0.3) 60%,
            rgba(0,0,0,0.1) 100%
          );
        }

        .hc-content {
          position: absolute;
          top: 50%; left: 64px;
          transform: translateY(-50%);
          z-index: 3;
          max-width: 520px;
        }

        .hc-tag {
          display: inline-block;
          font-size: 0.68rem; font-weight: 700;
          letter-spacing: 0.12em; text-transform: uppercase;
          color: white; padding: 4px 12px;
          border-radius: 100px; margin-bottom: 12px;
        }

        .hc-date {
          font-size: 0.8rem; color: rgba(255,255,255,0.5);
          margin: 0 0 10px; letter-spacing: 0.04em;
        }

        .hc-title {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(1.8rem, 3.5vw, 3rem);
          font-weight: 400; color: white;
          margin: 0 0 16px; line-height: 1.2;
          letter-spacing: -0.02em;
        }

        .hc-desc {
          font-size: 1rem; color: rgba(255,255,255,0.72);
          line-height: 1.7; margin: 0 0 28px;
        }

        .hc-btn {
          display: inline-flex; align-items: center; gap: 8px;
          background: white; color: #1c1c1c;
          font-size: 0.85rem; font-weight: 600;
          padding: 12px 22px; border-radius: 100px;
          text-decoration: none;
          transition: background 0.2s, transform 0.2s;
          font-family: 'DM Sans', sans-serif;
        }
        .hc-btn svg { width: 16px; height: 16px; }
       
        .hc-arrow {
          position: absolute; top: 50%; transform: translateY(-50%);
          z-index: 4; background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.2); color: white;
          width: 44px; height: 44px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; transition: background 0.2s;
          backdrop-filter: blur(4px);
        }
        .hc-arrow svg { width: 20px; height: 20px; }
        .hc-left { left: 24px; }
        .hc-right { right: 24px; }

        .hc-tags {
          position: relative;
          padding: 16px 64px;
          background: #111;
          display: flex;
          gap: 10px;
        }

        .hc-tag-btn {
          font-size: 0.68rem; font-weight: 700;
          letter-spacing: 0.12em; text-transform: uppercase;
          color: white; padding: 6px 16px;
          border-radius: 100px;
          border: 1.5px solid rgba(255,255,255,0.35);
          background: rgba(0,0,0,0.3);
          cursor: pointer;
          transition: background 0.2s, border-color 0.2s;
          backdrop-filter: blur(4px);
        }
        .hc-tag-active {
          background: white !important;
          color: #1c1c1c !important;
          border-color: white !important;
        }

        @media (max-width: 768px) {
          .hc-root { height: 480px; }
          .hc-content { left: 24px; right: 24px; max-width: 100%; }
          .hc-left, .hc-right { display: none; }
          .hc-tags { padding: 16px 24px; }
        }
      `}</style>
    </div>
  );
}