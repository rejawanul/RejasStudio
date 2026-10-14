"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
        <div className="wrap">
          <div className="nav-inner">
            <Link href="/" className="site-logo">REJA&apos;<span>STUDIO</span></Link>

            <ul className="nav-menu">
              <li>
                <a href="#about" className="nav-link">About</a>
              </li>
              <li>
                <a href="#experience" className="nav-link">Experience</a>
              </li>
              <li>
                <a href="#portfolio" className="nav-link">Portfolio</a>
              </li>
              <li>
                <a href="#workflow" className="nav-link">Procedure</a>
              </li>
              <li>
                <a href="#pricing" className="nav-link">Pricing</a>
              </li>
              <li>
                <a href="#contact" className="nav-link">Contact</a>
              </li>
            </ul>

            <div className="nav-actions">
              <a href="#contact" className="btn btn-red" style={{ height: "44px", padding: "0 24px", fontSize: "14px" }}>
                Work With Me
              </a>
              <button
                className="hamburger-btn"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
              >
                <span className="hamburger-line" style={menuOpen ? { transform: "translateY(7.5px) rotate(45deg)" } : {}}></span>
                <span className="hamburger-line" style={menuOpen ? { opacity: 0 } : {}}></span>
                <span className="hamburger-line" style={menuOpen ? { transform: "translateY(-7.5px) rotate(-45deg)" } : {}}></span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div className={`mobile-menu-overlay ${menuOpen ? "open" : ""}`}>
        <a href="#about" className="mobile-link" onClick={closeMenu}>About</a>
        <a href="#experience" className="mobile-link" onClick={closeMenu}>Experience</a>
        <a href="#portfolio" className="mobile-link" onClick={closeMenu}>Portfolio</a>
        <a href="#workflow" className="mobile-link" onClick={closeMenu}>Procedure</a>
        <a href="#pricing" className="mobile-link" onClick={closeMenu}>Pricing</a>
        <a href="#contact" className="mobile-link" onClick={closeMenu}>Contact</a>
        <a href="#contact" className="btn btn-red" onClick={closeMenu} style={{ marginTop: "16px" }}>
          Get In Touch →
        </a>
      </div>
    </>
  );
}
