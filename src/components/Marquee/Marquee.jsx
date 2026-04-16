import "./Marquee.css";

export default function Marquee() {
  const items = [
    "STRENGTH",
    "HIIT",
    "YOGA",
    "PILATES",
    "COACHING",
    "CARDIO",
    "RECOVERY",
  ];

  return (
    <div className="marquee-wrapper">
      <div className="marquee-main">
        <div className="marquee-track">
          {/* 4 times repeat for flawless infinite loop on all screens */}
          {[...items, ...items, ...items, ...items].map((item, index) => (
            <div key={index} className="marquee-item">
              <span className={index % 2 === 0 ? "text-solid" : "text-outline"}>
                {item}
              </span>
              <span className="star-icon">✦</span>
            </div>
          ))}
        </div>
      </div>
      {/* Optional: Overlay mask for smooth fade on edges */}
      <div className="marquee-mask-left"></div>
      <div className="marquee-mask-right"></div>
    </div>
  );
}