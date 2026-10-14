"use client";

import AnimatedCounter from "@/components/AnimatedCounter";

const testimonials = [
  {
    quote: "Reja absolutely transformed my NBA highlights channel. The speed was unbelievable — a polished edit within 48 hours. Quality rivals channels with 100K+ subs.",
    author: "Marcus T.",
    role: "NBA Content Creator · USA 🇺🇸",
  },
  {
    quote: "Communication was seamless despite the time zone difference. Pacing, sound design, and caption animations keep viewer retention super high.",
    author: "Hiroshi K.",
    role: "Podcast & Sports Creator · Japan 🇯🇵",
  },
  {
    quote: "My average watch time increased from 35% to 67% after hiring Reja. My channel gained 40K subscribers in 3 months. Worth every penny.",
    author: "Emma V.",
    role: "Sports & Fitness Creator · Netherlands 🇳🇱",
  },
];

export default function ExperienceSection() {
  return (
    <section className="experience-section" id="experience">
      <div className="wrap">
        <div className="section-header-center">
          <h2 className="section-title">
            Proven Results on <span>Fiverr &amp; Upwork.</span>
          </h2>
          <p className="section-sub">
            Over 5 years of individual freelance video production, serving creators, athletes, and brands worldwide with consistent 5-star delivery.
          </p>
        </div>

        {/* Platform Cards */}
        <div className="platform-cards-grid">
          {/* Fiverr */}
          <div className="platform-card">
            <div>
              <div className="platform-card-header">
                <span className="platform-badge platform-fiverr">
                  Fiverr Level 2 Seller
                </span>
                <span style={{ fontSize: "14px", fontWeight: "700", color: "#1DBF73" }}>
                  Verified
                </span>
              </div>

              <h3>155+ Five-Star Reviews</h3>

              <div className="platform-rating">
                <span className="stars">★★★★★</span>
                <span>4.9 / 5.0 Rating</span>
              </div>

              <p>
                Trusted by international creators for fast-turnaround sports highlights, YouTube long-form videos, and viral reels. Over 155 glowing client reviews.
              </p>

              <div className="platform-highlights">
                <div className="highlight-row">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>155+ Verified 5-Star Reviews</span>
                </div>
                <div className="highlight-row">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>Fiverr Level 2 Seller Status</span>
                </div>
                <div className="highlight-row">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>99%+ On-Time Order Completion</span>
                </div>
              </div>
            </div>

            <a
              href="https://www.fiverr.com/md_rejawanul"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-dark platform-btn"
            >
              View My Fiverr Profile ↗
            </a>
          </div>

          {/* Upwork */}
          <div className="platform-card">
            <div>
              <div className="platform-card-header">
                <span className="platform-badge platform-upwork">
                  Upwork Top Rated
                </span>
                <span style={{ fontSize: "14px", fontWeight: "700", color: "#14A800" }}>
                  100% JSS
                </span>
              </div>

              <h3>100% Job Success Score</h3>

              <div className="platform-rating">
                <span className="stars">★★★★★</span>
                <span>Top Rated Freelancer</span>
              </div>

              <p>
                Long-term dedicated editing partner for high-retention YouTube channels, production houses, and athlete scouting profiles with perfect job success.
              </p>

              <div className="platform-highlights">
                <div className="highlight-row">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>100% Job Success Score (JSS)</span>
                </div>
                <div className="highlight-row">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>Top Rated Freelancer Badge</span>
                </div>
                <div className="highlight-row">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>1-on-1 Direct Communication</span>
                </div>
              </div>
            </div>

            <a
              href="https://www.upwork.com/freelancers/~01aa3ab3ae87338767"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-dark platform-btn"
            >
              View My Upwork Profile ↗
            </a>
          </div>
        </div>

        {/* Athlete Recruitment Specialization Spotlight */}
        <div className="recruitment-spotlight-card">
          <div className="recruitment-spotlight-content">
            <h3>Player Recruitment &amp; Scouting Video Profiles</h3>
            <p>
              Collaborating with top athlete branding &amp; scouting platforms, I transform raw game tapes into high-impact <strong>3-minute recruiter-ready highlight profiles</strong> across Basketball (NBA / NCAA), Football (NFL / High School), Soccer, and Ice Hockey.
            </p>
          </div>
          <div className="recruitment-spotlight-action">
            <a href="#workflow" className="btn btn-outline-red" style={{ height: "46px", fontSize: "14px" }}>
              Explore Recruitment Workflow ↓
            </a>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="stats-strip" style={{ borderRadius: "20px", marginBottom: "60px" }}>
          <div className="stats-grid">
            <div className="stat-box">
              <div className="stat-value">
                <AnimatedCounter value={1150} />+
              </div>
              <div className="stat-name">Projects Delivered</div>
            </div>
            <div className="stat-box">
              <div className="stat-value">
                <AnimatedCounter value={50} />+
              </div>
              <div className="stat-name">Global Clients</div>
            </div>
            <div className="stat-box">
              <div className="stat-value">
                <AnimatedCounter value={14} />+
              </div>
              <div className="stat-name">Countries Reached</div>
            </div>
            <div className="stat-box">
              <div className="stat-value">
                48h
              </div>
              <div className="stat-name">Average Turnaround</div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="testimonials-grid">
          {testimonials.map((t, idx) => (
            <div key={idx} className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">"{t.quote}"</p>
              <div className="testimonial-author">
                <span className="author-name">{t.author}</span>
                <span className="author-role">{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
