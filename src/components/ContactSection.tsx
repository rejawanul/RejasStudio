"use client";

export default function ContactSection() {
  return (
    <section className="contact-section" id="contact">
      <div className="wrap">
        <div className="section-header-center">
          <h2 className="section-title">
            Book a <span>Call &amp; Contact.</span>
          </h2>
          <p className="section-sub">
            Ready to elevate your channel? Connect directly via Google Meet, Email, Fiverr, or Upwork.
          </p>
        </div>

        <div className="contact-split-wrap">
          {/* Left Column: Direct Collaboration Pitch & Trust Points */}
          <div className="contact-pitch-col">
            <div>
              <div className="contact-status-badge">
                <span className="live-pulse-dot"></span>
                <span>Dhaka, Bangladesh · Open for New Projects</span>
              </div>

              <h3 className="contact-pitch-title">
                Work Directly With Reja
              </h3>

              <p className="contact-pitch-desc">
                Zero middle agency managers, no junior apprentices, and no communication breakdowns. 
                You collaborate 1-on-1 with me from raw footage to final delivery.
              </p>
            </div>

            <div className="contact-trust-checklist">
              <div className="trust-check-row">
                <span className="trust-check-icon">✓</span>
                <span className="trust-check-text">Direct 1-on-1 Communication &amp; Daily Updates</span>
              </div>
              <div className="trust-check-row">
                <span className="trust-check-icon">✓</span>
                <span className="trust-check-text">Fast 48-Hour Turnaround On Highlight Cuts</span>
              </div>
              <div className="trust-check-row">
                <span className="trust-check-icon">✓</span>
                <span className="trust-check-text">100% YouTube &amp; Broadcast Copyright-Safe</span>
              </div>
              <div className="trust-check-row">
                <span className="trust-check-icon">✓</span>
                <span className="trust-check-text">Level 2 Seller &amp; Top Rated Platform Escrow</span>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Action Contact Bars */}
          <div className="contact-actions-col">
            {/* 1. Schedule Call on Google Calendar (Featured Primary) */}
            <a
              href="https://calendar.app.google/FXV3pmuVkiASMcbt6"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-action-bar featured"
            >
              <div className="action-bar-icon-box" style={{ color: "#4285F4" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
              </div>
              <div className="action-bar-info">
                <span className="action-bar-label">Schedule 1-on-1 Call</span>
                <strong className="action-bar-title">Discovery Call with Reja (30 Min)</strong>
                <span className="action-bar-sub">Google Meet link auto-generated</span>
              </div>
              <div className="action-bar-arrow">↗</div>
            </a>

            {/* 2. Direct Email */}
            <a
              href="mailto:rejasstudio@gmail.com"
              className="contact-action-bar"
            >
              <div className="action-bar-icon-box" style={{ color: "var(--primary-red)" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div className="action-bar-info">
                <span className="action-bar-label">Direct Email</span>
                <strong className="action-bar-title">rejasstudio@gmail.com</strong>
                <span className="action-bar-sub">Send raw footage, scripts &amp; inquiries</span>
              </div>
              <div className="action-bar-arrow">↗</div>
            </a>

            {/* 3. Fiverr */}
            <a
              href="https://www.fiverr.com/md_rejawanul"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-action-bar"
            >
              <div className="action-bar-icon-box" style={{ color: "#1DBF73" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <div className="action-bar-info">
                <span className="action-bar-label">Order on Fiverr</span>
                <strong className="action-bar-title">Fiverr Level 2 Seller</strong>
                <span className="action-bar-sub">155+ 5-Star Reviews &amp; Secure Escrow</span>
              </div>
              <div className="action-bar-arrow">↗</div>
            </a>

            {/* 4. Upwork */}
            <a
              href="https://www.upwork.com/freelancers/~01aa3ab3ae87338767"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-action-bar"
            >
              <div className="action-bar-icon-box" style={{ color: "#14A800" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
              </div>
              <div className="action-bar-info">
                <span className="action-bar-label">Hire on Upwork</span>
                <strong className="action-bar-title">Upwork Top Rated Profile</strong>
                <span className="action-bar-sub">100% Job Success Score · Enterprise Escrow</span>
              </div>
              <div className="action-bar-arrow">↗</div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
