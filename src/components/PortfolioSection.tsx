"use client";

import { useState } from "react";
import { portfolioProjects, PortfolioProject } from "@/data/portfolio";

export default function PortfolioSection() {
  const [filter, setFilter] = useState<"All" | "Long-form" | "Shorts/Reels" | "Recruitment">("All");
  const [activeVideo, setActiveVideo] = useState<PortfolioProject | null>(null);

  const longFormCount = portfolioProjects.filter((p) => p.type === "Long-form" && !p.isRecruitment).length;
  const shortsCount = portfolioProjects.filter((p) => p.type === "Shorts/Reels").length;
  const recruitmentCount = portfolioProjects.filter((p) => p.isRecruitment).length;

  const filteredProjects = portfolioProjects.filter((p) => {
    if (filter === "All") return true;
    if (filter === "Recruitment") return p.isRecruitment;
    if (filter === "Long-form") return p.type === "Long-form" && !p.isRecruitment;
    return p.type === filter;
  });

  return (
    <section className="portfolio-section" id="portfolio">
      <div className="wrap">
        <div className="section-header-center">
          <h2 className="section-title">
            Selected Work That <span>Hooks &amp; Converts.</span>
          </h2>
          <p className="section-sub">
            From high-energy NBA, NFL, and UFC highlight reels to viral TikTok &amp; YouTube Shorts and Athlete Recruitment scouting profiles.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="portfolio-filter-tabs">
          <button
            className={`filter-tab ${filter === "All" ? "active" : ""}`}
            onClick={() => setFilter("All")}
          >
            All Projects ({portfolioProjects.length})
          </button>
          <button
            className={`filter-tab ${filter === "Long-form" ? "active" : ""}`}
            onClick={() => setFilter("Long-form")}
          >
            YouTube Long-Form ({longFormCount})
          </button>
          <button
            className={`filter-tab ${filter === "Shorts/Reels" ? "active" : ""}`}
            onClick={() => setFilter("Shorts/Reels")}
          >
            Viral Shorts &amp; Reels ({shortsCount})
          </button>
          <button
            className={`filter-tab ${filter === "Recruitment" ? "active" : ""}`}
            onClick={() => setFilter("Recruitment")}
          >
            🏆 Athlete Recruitment ({recruitmentCount})
          </button>
        </div>

        {/* Video Cards Grid */}
        <div className="portfolio-grid">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="video-card"
              onClick={() => setActiveVideo(project)}
            >
              <div className="video-card-thumb">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  loading="lazy"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = `https://img.youtube.com/vi/${project.youtubeId}/hqdefault.jpg`;
                  }}
                />
                <div className="video-badge">
                  {project.isRecruitment
                    ? `🏆 ${project.sport} · Recruitment Tape`
                    : `${project.sport} · ${project.type}`}
                </div>
                <div className="play-hover-btn">
                  <div className="play-circle">
                    <svg viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="video-card-body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal Popup */}
      {activeVideo && (
        <div
          className="video-modal-backdrop"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="video-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="video-modal-close"
              onClick={() => setActiveVideo(null)}
              aria-label="Close video player"
            >
              ✕
            </button>
            <div className="video-iframe-holder">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${activeVideo.youtubeId}?autoplay=1&rel=0`}
                title={activeVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div style={{ padding: "20px 24px", background: "#0D0D0D", color: "#FFF" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "10px" }}>
                <div>
                  <h4 style={{ fontSize: "18px", color: "#FFF", marginBottom: "4px" }}>
                    {activeVideo.title}
                  </h4>
                  <p style={{ fontSize: "13px", color: "#888" }}>
                    {activeVideo.type} · {activeVideo.sport}
                  </p>
                </div>
                <a
                  href={activeVideo.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-red"
                  style={{ height: "38px", padding: "0 18px", fontSize: "13px" }}
                >
                  Watch on YouTube ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
