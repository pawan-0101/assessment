import React from "react";
import "./Services.css";

const services = [
  {
    title: "Film Production",
    image: "/service-film.jpg", // Place your image in public folder
  },
  {
    title: "Branding",
    image: "/service-branding.jpg",
  },
  {
    title: "Art Curation",
    image: "/service-art.jpg",
  },
];

const Services = () => (
  <div className="services-bg">
    <header className="services-header">
      <h2>The storyboard reveals the breadth of our craft.</h2>
      <div className="services-underline"></div>
    </header>
    <div className="services-list">
      {services.map((service, idx) => (
        <div className="service-card" key={service.title}>
          <div className="service-image-wrapper">
            <img src={service.image} alt={service.title} className="service-image" />
            <div className="service-tape"></div>
          </div>
          <div className="service-title">{service.title}</div>
        </div>
      ))}
    </div>
    <div className="services-border"></div>
  </div>
);

export default Services;