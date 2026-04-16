import "./Services.css";

export default function Services() {
  const data = [
    { title: "Elite Strength", desc: "Heavy lifting & muscle building for women.", icon: "🏋️‍♀️" },
    { title: "HIIT Training", desc: "High-intensity bursts for maximum fat burn.", icon: "⚡" },
    { title: "Pilates", desc: "Core stability and full-body flexibility.", icon: "🧘" },
    { title: "Yoga", desc: "Mind-body connection and stress relief.", icon: "✨" },
    { title: "Personal Coach", desc: "1-on-1 dedicated expert guidance.", icon: "👑" },
    { title: "Nutrition", desc: "Customized diet plans for your goals.", icon: "🥗" }
  ];

  return (
    <section id="services" className="services">
      <div className="services-container">
        <div className="services-header">
          <div className="header-badge">PREMIUM ACCESS</div>
          <h2 className="title">Our <span>Programs</span></h2>
          <div className="title-underline"></div>
          <p className="header-desc">
            Tailored fitness solutions designed for the modern woman who demands excellence.
          </p>
        </div>

        <div className="services-grid">
          {data.map((item, i) => (
            <div className="service-card" key={i}>
              <div className="card-bg-number">{i + 1}</div>
              
              <div className="card-content">
                <div className="card-icon">{item.icon}</div>
                <h3 className="card-title">{item.title}</h3>
                <p className="card-desc">{item.desc}</p>
                
                <a href="#contact" className="card-link">
                  <span>Explore Program</span>
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
              
              <div className="card-border-glow"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}