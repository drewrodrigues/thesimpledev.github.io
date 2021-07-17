import React from "react";

export interface TestimonialProps {
  photo: string;
  relation: string;
  name: string;
  detail: string;
}

export default function Testimonial({photo, name, relation, detail}: TestimonialProps) {
  return <section className="experience">
    <header className="experience__header">
      <img src={photo} />
      <div className="header__detail">
        <h5 className="experience__title">{name}</h5>
        <h6 className="experience__company">{relation}</h6>
      </div>
    </header>
    <p className="experience__detail">{detail}</p>
  </section>
}