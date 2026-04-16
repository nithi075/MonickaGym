import "./Trainers.css";

export default function Trainers() {
  const trainerData = [
    { name: "Meera", role: "Strength Coach", exp: "5+ Years", special: "Powerlifting" },
    { name: "Priya", role: "Yoga Expert", exp: "4+ Years", special: "Flexibility" },
    { name: "Divya", role: "HIIT Specialist", exp: "6+ Years", special: "Fat Loss" },
  ];

  return (
    <section className="trainers" id="trainers">
      <div className="trainers-container">
        <div className="trainers-header">
          <div className="title-stack">
            <span className="subtitle">Expert Coaching</span>
            <h2 className="title">Meet Your <span>Mentors</span></h2>
          </div>
          <p className="header-text">Our world-class trainers are here to push your limits.</p>
        </div>

        <div className="trainer-grid">
          {trainerData.map((trainer, index) => (
            <div className="trainer-card" key={index}>
              <div className="trainer-visual">
                <div className="trainer-img-placeholder">
                   {/* <img src={...} alt={trainer.name} /> */}
                </div>
                
                {/* Vertical Tag */}
                <div className="trainer-tag">{trainer.special}</div>
                
                <div className="trainer-hover-box">
                  <span className="exp-label">Experience</span>
                  <span className="exp-val">{trainer.exp}</span>
                  <div className="social-row">
                    <a href="#">IG</a>
                    <a href="#">TW</a>
                    <a href="#">FB</a>
                  </div>
                </div>
              </div>
              
              <div className="trainer-details">
                <div className="name-box">
                  <span className="trainer-index">0{index + 1}</span>
                  <h3>{trainer.name}</h3>
                </div>
                <p className="trainer-role">{trainer.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}