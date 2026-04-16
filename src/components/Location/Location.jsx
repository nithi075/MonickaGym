import React from "react";
import "./Location.css";

const Location = () => {

  const location = {
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15579.594760546011!2d78.18761689214158!3d12.522870073195259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bac3500330af8f9%3A0xf53eae23965dad44!2sMonicka%20parlour%20l%20Gym%20%26%20Fitness%20%7C%20Zumba%20%7C%20Massage%20(only%20Ladies)!5e0!3m2!1sen!2sin!4v1776333586271!5m2!1sen!2sin",

    link: "https://www.google.com/maps/place/Monicka+parlour+%7C+Gym+%26+Fitness+%7C+Zumba+%7C+Massage+(only+Ladies)/@12.5228701,78.1876169,15z",

    address: "Monicka Parlour | Gym & Fitness | Zumba | Massage (Ladies Only), Tamil Nadu",

    timing: "Mon - Sat : 05:00 AM - 09:00 PM"
  };

  return (
    <section className="location-section" id="branches">

      <div className="location-container">

        <div className="location-header">

          <span className="mini-tag">OUR STUDIO</span>

          <h2 className="location-title">
            FIND YOUR <span>ZONE</span>
          </h2>

          <div className="title-bar"></div>

        </div>


        <div className="map-view">

          <div className="map-frame">

            <iframe
              src={location.map}
              loading="lazy"
              title="Monicka Gym Location"
              className="google-map"
              allowFullScreen
            />

          </div>


          <div className="address-card">

            <div className="card-top">

              <h3>MONICKA GYM</h3>

              <p className="loc-status">● Open Now</p>

            </div>


            <div className="address-details">

              <div className="detail-row">

                <span className="icon">📍</span>

                <p>{location.address}</p>

              </div>


              <div className="detail-row">

                <span className="icon">🕒</span>

                <p>{location.timing}</p>

              </div>

            </div>


            <a
              href={location.link}
              target="_blank"
              rel="noreferrer"
              className="direction-btn"
            >
              Get Directions →
            </a>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Location;