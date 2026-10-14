import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-top">
          <Link href="/" className="footer-logo">REJA&apos;<span>STUDIO</span></Link>
          <div className="footer-nav">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#workflow">Procedure</a>
            <a href="#pricing">Pricing</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
        <div className="footer-bottom">
          <div>
            © 2026 Reja Studio. Individual Video Editor &amp; Content Strategist.
          </div>
          <div className="footer-badges">
            <a
              href="https://www.fiverr.com/md_rejawanul"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-badge-link"
            >
              Fiverr Profile ↗
            </a>
            <span style={{ color: "#444" }}>•</span>
            <a
              href="https://www.upwork.com/freelancers/~01aa3ab3ae87338767"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-badge-link"
            >
              Upwork Profile ↗
            </a>
            <span style={{ color: "#444" }}>•</span>
            <a
              href="mailto:rejasstudio@gmail.com"
              className="footer-badge-link"
            >
              rejasstudio@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
