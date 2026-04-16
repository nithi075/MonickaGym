import "./Footer.css";
import LogoImg from "../../assets/logo.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-top-line"></div>
      <div className="footer-container">
        {/* BRAND COLUMN */}
        <div className="footer-brand">
          <div className="footer-logo">
            <img src={LogoImg} alt="Monicka Gym" className="footer-logo-img" />
            <div className="logo-text">
              <h2>MONICKA<span>GYM</span></h2>
              <small>WOMEN'S ELITE FITNESS</small>
            </div>
          </div>
          <p className="footer-tagline">
            Empowering women through strength and discipline. 
            The premier destination for body transformation in Krishnagiri.
          </p>
          <div className="footer-social-wrapper">
            <a href="#" className="social-pill">INSTAGRAM</a>
            <a href="#" className="social-pill">FACEBOOK</a>
            <a href="#" className="social-pill">WHATSAPP</a>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-links">
          <h3>Explore</h3>
          <div className="links-grid">
            <ul>
              <li><a href="#about">Our Story</a></li>
              <li><a href="#services">Programs</a></li>
              <li><a href="#pricing">Memberships</a></li>
            </ul>
            <ul>
              <li><a href="#trainers">Trainers</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>
        </div>

        {/* CONTACT INFO */}
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <div className="contact-item">
            <span className="icon">📍</span>
            <p>Krishnagiri, Tamil Nadu, India</p>
          </div>
          <div className="contact-item">
            <span className="icon">📞</span>
            <p>+91 77082 61929</p>
          </div>
          <div className="contact-item">
            <span className="icon">✉️</span>
            <p>info@monickagym.com</p>
          </div>
          <div className="business-hours">
            <p className="status">Open Today</p>
            <p>5:00 AM — 9:00 PM</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="bottom-container">
          <p>&copy; {currentYear} MONICKA GYM. Elite Status Guaranteed.</p>
          <p className="developer-tag">Crafted by <span>Sam Nithish</span></p>
        </div>
      </div>
    </footer>
  );
}