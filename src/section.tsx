import React from "react";

interface SectionProps {
  children: JSX.Element | JSX.Element[];
  title: string;
}

export function Section({title, children}: SectionProps) {
  return <section className={`section section__${title.toLowerCase()}`}>
    <h4 className="section__header">{title}</h4>
    {children}
  </section>
}
