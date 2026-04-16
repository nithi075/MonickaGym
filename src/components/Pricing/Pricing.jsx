import "./Pricing.css";

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: 2999,
      tagline: "For Fitness Beginners",
      features: ["Gym Access", "General Training", "Locker Room", "Free WiFi"],
      recommended: false,
    },
    {
      name: "Elite",
      price: 5499,
      tagline: "Best for Transformation",
      features: ["All Starter Features", "Personal Training (4/mo)", "Custom Diet Plan", "Group Classes"],
      recommended: true,
    },
    {
      name: "Platinum",
      price: 9999,
      tagline: "Ultimate Luxury Experience",
      features: ["All Elite Features", "Unlimited PT Sessions", "Physiotherapy", "Sauna & Spa Access"],
      recommended: false,
    },
  ];

  return (
    <section id="pricing" className="pricing-section">
      <div className="pricing-mesh-bg"></div>
      
      <div className="container">
        <div className="pricing-header">
          <span className="subtitle-premium">INVEST IN YOURSELF</span>
          <h2 className="title-premium">MEMBERSHIP <span>PLANS</span></h2>
          <p className="header-desc">No hidden fees. Choose the plan that fits your lifestyle.</p>
        </div>

        <div className="price-grid">
          {plans.map((plan, i) => (
            <div 
              className={`price-card ${plan.recommended ? "is-featured" : ""}`} 
              key={i}
            >
              {plan.recommended && <div className="popular-badge">MOST POPULAR</div>}
              
              <div className="card-head">
                <h3 className="plan-name">{plan.name}</h3>
                <p className="plan-tagline">{plan.tagline}</p>
                <div className="price-value">
                  <span className="currency">₹</span>
                  <span className="amount">{plan.price.toLocaleString("en-IN")}</span>
                  <span className="duration">/MO</span>
                </div>
              </div>

              <div className="divider-line"></div>

              <ul className="features-list">
                {plan.features.map((feat, index) => (
                  <li key={index} className="feature-item">
                    <span className="star-icon">✦</span> {feat}
                  </li>
                ))}
              </ul>

              <button className="pricing-btn">
                <span>Select Plan</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}