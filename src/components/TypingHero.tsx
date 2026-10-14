"use client";

import { useState, useEffect } from "react";

const words = [
  "Going Viral.",
  "Millions of Views.",
  "High Retention.",
  "Top Rankings.",
  "Max Engagement.",
];

export default function TypingHero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(110);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    if (!isDeleting && subIndex === currentWord.length) {
      const pauseTimer = setTimeout(() => {
        setIsDeleting(true);
        setSpeed(55);
      }, 2200);
      return () => clearTimeout(pauseTimer);
    }

    if (isDeleting && subIndex === 0) {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
      setSpeed(110);
      return;
    }

    const timer = setTimeout(() => {
      setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, speed);

    return () => clearTimeout(timer);
  }, [subIndex, isDeleting, speed, wordIndex]);

  return (
    <section className="hero-banner" id="about">
      <div className="wrap">
        <div className="hero-grid">
          {/* Left Column: Intro & Info */}
          <div className="hero-content">
            <div className="hero-status-pill">
              <span className="status-indicator"></span>
              <span>Available for New Projects · YouTube &amp; Athlete Recruitment Specialist</span>
            </div>

            {/* Headline with 1 clean static line + dedicated typing line (Zero Layout Shift) */}
            <h1 className="hero-headline">
              <span className="hero-headline-static">
                Engineering Videos Engineered For
              </span>
              <span className="hero-typing-line">
                <span className="hero-typing-word">
                  {words[wordIndex].substring(0, subIndex)}
                </span>
              </span>
            </h1>

            <p className="hero-description">
              Hi, I'm <strong>Reja</strong> — an independent sports &amp; high-retention video editor. 
              I collaborate with creators and brands to turn raw footage, scripts, and ideas into 
              high-impact YouTube videos and viral Reels that hook viewers from the very first frame 
              and keep them watching.
            </p>

            <div className="hero-buttons">
              <a href="#portfolio" className="btn btn-red">
                Explore Portfolio <span>↓</span>
              </a>
              <a href="#contact" className="btn btn-outline-red">
                Contact Me <span>→</span>
              </a>
            </div>

            <div className="hero-trust-bar">
              <div className="trust-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <span>48h Fast Turnaround</span>
              </div>
              <div className="trust-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <span>Athlete Recruitment Specialist</span>
              </div>
              <div className="trust-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <span>Direct 1-on-1 Work</span>
              </div>
            </div>
          </div>

          {/* Right Column: NBA Reel 1 Video Showcase */}
          <div className="hero-visual">
            <div
              className="hero-card"
              onClick={() => !isPlaying && setIsPlaying(true)}
              style={{ cursor: isPlaying ? "default" : "pointer" }}
            >
              {/* Video / Thumbnail Container */}
              <div className="hero-img-wrap">
                {isPlaying ? (
                  <div className="hero-video-embed">
                    <iframe
                      src="https://www.youtube-nocookie.com/embed/_cKoBW7PxwA?autoplay=1&rel=0&modestbranding=1"
                      title="NBA Viral Short Reel #1 · Clutch Moments"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                    <button
                      className="hero-video-close"
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsPlaying(false);
                      }}
                      aria-label="Close video"
                      title="Close Video"
                    >
                      ✕
                    </button>
                  </div>
                ) : (
                  <>
                    <img
                      src="/hero_nba_reel.jpg"
                      alt="NBA Viral Short Reel #1 · Clutch Moments"
                      loading="eager"
                    />
                    <div className="hero-play-overlay">
                      <div className="hero-play-btn" aria-label="Play NBA Reel 1">
                        <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
