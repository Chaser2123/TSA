"use client";

import { use } from "react";
import { NEWS } from "../../data/news";

export default function NewsPage({ params }) {
  const { slug } = use(params);
  const ARTICLE = NEWS.find((n) => n.slug === slug);
  const RELATED = NEWS.filter((n) => ARTICLE?.related?.includes(n.slug));

  if (!ARTICLE) {
    return (
      <div style={{ padding: "64px", fontFamily: "sans-serif" }}>
        <h1>Article not found</h1>
        <a href="/news" style={{ color: "#3a7ec8" }}>Back to News</a>
      </div>
    );
  }

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  return (
    <div className="np-root">

      {/* Hero */}
      <div className="np-hero">
        <img src={ARTICLE.hero} alt={ARTICLE.title} />
        <div className="np-hero-overlay" />
        <div className="np-hero-content">
          <span className="np-tag">{ARTICLE.tag}</span>
          <h1 className="np-hero-title">{ARTICLE.title}</h1>
          <p className="np-hero-excerpt">{ARTICLE.excerpt}</p>
        </div>
      </div>

      {/* Body */}
      <div className="np-body">

        {/* Main */}
        <div className="np-main">
          {ARTICLE.body.split("\n\n").map((para, i) => (
            <p key={i} className="np-para">{para}</p>
          ))}
        </div>

        {/* Sidebar */}
        <aside className="np-sidebar">

          <div className="np-card">
            <p className="np-card-label">Published</p>
            <p className="np-card-value">{ARTICLE.date}</p>
            <div className="np-divider" />
            <p className="np-card-label">Author</p>
            <div className="np-author">
              <div className="np-author-avatar">{ARTICLE.author.charAt(0)}</div>
              <p className="np-author-name">{ARTICLE.author}</p>
            </div>
          </div>

          <div className="np-card">
            <p className="np-card-label">Tags</p>
            <div className="np-tags">
              {ARTICLE.tags.map((tag) => (
                <span key={tag} className="np-tag-pill">{tag}</span>
              ))}
            </div>
          </div>

          <div className="np-card">
            <p className="np-card-label">Share this article</p>
            <div className="np-share">
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="np-share-btn np-share-fb"
              >
                Share on Facebook
              </a>
              <a
                href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${encodeURIComponent(ARTICLE.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="np-share-btn np-share-tw"
              >
                Share on X
              </a>
              <button
                className="np-share-btn np-share-copy"
                onClick={() => navigator.clipboard.writeText(shareUrl)}
              >
                Copy Link
              </button>
            </div>
          </div>

          {RELATED.length > 0 && (
            <div className="np-card">
              <p className="np-card-label">Related News</p>
              <div className="np-related">
                {RELATED.map((item) => (
                  <a key={item.slug} href={`/news/${item.slug}`} className="np-related-item">
                    <div className="np-related-img">
                      <img src={item.hero} alt={item.title} />
                    </div>
                    <div>
                      <p className="np-related-tag">{item.tag}</p>
                      <p className="np-related-title">{item.title}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}

          <a href="/news" className="np-back">&larr; Back to News</a>
        </aside>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap');

        .np-root { background: #faf8f5; min-height: 100vh; font-family: 'DM Sans', sans-serif; color: #1c1c1c; }
        .np-hero { position: relative; width: 100%; height: 420px; overflow: hidden; background: #111; }
        .np-hero img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .np-hero-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.72) 100%);
        }
        .np-hero-content { position: absolute; bottom: 48px; left: 64px; z-index: 2; max-width: 680px; }
        .np-tag {
          display: inline-block; font-size: 0.68rem; font-weight: 700;
          letter-spacing: 0.12em; text-transform: uppercase;
          color: white; padding: 4px 12px; border-radius: 100px;
          background: #3a7ec8; margin-bottom: 12px;
        }
        .np-hero-title {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(1.8rem, 4vw, 3rem);
          font-weight: 400; color: white;
          line-height: 1.15; letter-spacing: -0.02em; margin: 0 0 12px;
        }
        .np-hero-excerpt { font-size: 1rem; color: rgba(255,255,255,0.75); line-height: 1.6; margin: 0; }
        .np-body {
          display: grid; grid-template-columns: 1fr 300px;
          gap: 48px; max-width: 1100px; margin: 0 auto; padding: 56px 32px;
        }
        .np-para { font-size: 1.05rem; line-height: 1.85; color: #3a3a38; margin-bottom: 20px; }
        .np-sidebar { display: flex; flex-direction: column; gap: 16px; }
        .np-card { background: white; border-radius: 14px; padding: 22px; }
        .np-card-label {
          font-size: 0.68rem; font-weight: 700; letter-spacing: 0.12em;
          text-transform: uppercase; color: #9a9890; margin-bottom: 8px;
        }
        .np-card-value { font-size: 0.92rem; font-weight: 500; color: #1c1c1c; }
        .np-divider { height: 1px; background: #e8e2d9; margin: 14px 0; }
        .np-author { display: flex; align-items: center; gap: 10px; }
        .np-author-avatar {
          width: 36px; height: 36px; border-radius: 50%;
          background: #3a7ec8; color: white;
          display: flex; align-items: center; justify-content: center;
          font-size: 0.9rem; font-weight: 700; flex-shrink: 0;
        }
        .np-author-name { font-size: 0.92rem; font-weight: 500; color: #1c1c1c; }
        .np-tags { display: flex; flex-wrap: wrap; gap: 8px; }
        .np-tag-pill {
          font-size: 0.72rem; font-weight: 600; color: #3a7ec8;
          background: #eef4fc; padding: 4px 12px; border-radius: 100px;
        }
        .np-share { display: flex; flex-direction: column; gap: 8px; }
        .np-share-btn {
          display: block; width: 100%; text-align: center;
          font-family: 'DM Sans', sans-serif; font-size: 0.82rem; font-weight: 600;
          padding: 9px 16px; border-radius: 100px; text-decoration: none;
          cursor: pointer; border: none; transition: opacity 0.2s;
        }
        .np-share-fb { background: #1877f2; color: white; }
        .np-share-tw { background: #000; color: white; }
        .np-share-copy { background: #f2ede7; color: #1c1c1c; border: 1px solid #e8e2d9 !important; }
        .np-related { display: flex; flex-direction: column; gap: 12px; }
        .np-related-item {
          display: flex; gap: 12px; align-items: center;
          text-decoration: none; color: inherit; transition: opacity 0.2s;
        }
        .np-related-img { width: 60px; height: 48px; flex-shrink: 0; border-radius: 8px; overflow: hidden; background: #e8e2d9; }
        .np-related-img img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .np-related-tag { font-size: 0.62rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #3a7ec8; margin-bottom: 3px; }
        .np-related-title { font-size: 0.82rem; font-weight: 500; color: #1c1c1c; line-height: 1.3; }
        .np-back { font-size: 0.85rem; font-weight: 600; color: #3a7ec8; text-decoration: none; display: inline-block; transition: transform 0.2s; }

        @media (max-width: 900px) {
          .np-body { grid-template-columns: 1fr; padding: 40px 24px; }
          .np-hero-content { left: 24px; bottom: 32px; }
          .np-hero { height: 360px; }
        }
      `}</style>
    </div>
  );
}