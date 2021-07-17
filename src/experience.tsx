import React from "react";

export interface ExperienceProps {
  logo: string;
  company: string;
  title: string;
  duration: string;
  detail: string;
}

export default function Experience({logo, title, company, duration, detail}: ExperienceProps) {
  return <section className="experience">
    <header className="experience__header">
      <img src={logo} />
      <div className="header__detail">
        <h5 className="experience__title">{title}</h5>
        <h6 className="experience__company">{company}</h6>
      </div>
      <p>{duration}</p>
    </header>
    <p className="experience__detail">{detail}</p>
  </section>
}