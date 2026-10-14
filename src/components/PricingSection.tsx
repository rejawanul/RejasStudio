"use client";

interface PricingTier {
  id: string;
  name: string;
  price: string;
  badge?: string;
  period: string;
  featured?: boolean;
  features: string[];
}

const tiers: PricingTier[] = [
  {
    id: "tier-1",
    name: "Tier 1 — Reels",
    price: "$100",
    period: "1 Week | 4 Viral Reels",
    features: [
      "4 Viral Reels (Up to 90 seconds each)",
      "High-quality vertical video editing (9:16 format)",
      "Advanced motion graphics, kinetic typography & sound SFX",
      "Custom After Effects animation & visual hooks",
      "3 Revisions included per video",
    ],
  },
  {
    id: "tier-2",
    name: "Tier 2 — Starter",
    badge: "Most Popular!",
    price: "$240",
    period: "1 Month | 4 Long-Form Videos",
    featured: true,
    features: [
      "4 Long-Form Videos (Up to 10 minutes length each)",
      "Standard high-quality editing (Pacing, cuts & sound design)",
      "3 to 4 days turnaround time per project",
      "3 Revisions included per video",
      "100% YouTube copyright-safe audio & media",
    ],
  },
  {
    id: "tier-3",
    name: "Tier 3 — Pro Creator",
    badge: "Best Value!",
    price: "$500",
    period: "1 Month | 4 Long-Forms + 4 Viral Reels",
    features: [
      "4 Long-Form Videos (Up to 12 minutes each)",
      "4 Viral Reels / Shorts (Up to 90 seconds each)",
      "Premium advanced motion graphics, kinetic typography & sound SFX",
      "Custom After Effects animations & dynamic visual hooks",
      "5 Revisions included per video",
      "100% YouTube copyright-safe audio & media",
    ],
  },
];

export default function PricingSection() {
  return (
    <section className="pricing-section" id="pricing">
      <div className="wrap">
        <div className="section-header-center">
          <h2 className="section-title">
            Packages and <span>Pricing.</span>
          </h2>
          <p className="section-sub">
            For High School Athletes, Content Creators &amp; Channel Owners.
          </p>
        </div>

        <div className="pricing-grid">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={`pricing-card ${tier.featured ? "featured" : ""}`}
            >
              {tier.badge && (
                <div className="pricing-badge">{tier.badge}</div>
              )}

              <div className="pricing-header">
                <div className="pricing-tier-name">{tier.name}</div>
                <div className="pricing-price">{tier.price}</div>
                <div className="pricing-period">{tier.period}</div>
              </div>

              <div className="pricing-features-title">Services Included:</div>
              <ul className="pricing-features-list">
                {tier.features.map((feat, idx) => (
                  <li key={idx} className="pricing-feature-item">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Athlete Recruitment Custom Pricing Box */}
        <div className="pricing-recruitment-box">
          <div className="pricing-recruitment-text">
            <h3>For Athlete Recruitment Videos</h3>
            <p>
              Scouting highlight reels, player spotlights &amp; agency volume profiles. Contact us for custom pricing.
            </p>
          </div>
          <a href="#contact" className="btn btn-red pricing-recruitment-btn">
            Contact Us for the Price →
          </a>
        </div>
      </div>
    </section>
  );
}
