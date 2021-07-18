import React from "react";

export interface ProjectProps {
  technologies: string[];
  image: string;
  title: string;
  subtitle: string;
  detail?: string;
  flag?: string;
  codeUrl?: string | string[];
  liveUrl?: string;
}

export default function Project({technologies, image, title, subtitle, detail, codeUrl, flag, liveUrl}: ProjectProps) {
  return <>
    <div className="project">
      <ul className="project__technologies">
        {technologies.map(technology => <li className="project__technology">{technology}</li>)}
      </ul>
      <img src={image} alt="" className="project__image" />
      <p className="project__tag">{flag}</p>
      <h6 className="project__title">{title}</h6>
      <p className="project__subtitle">{subtitle}</p>
      {detail && <p className="project__detail">{detail}</p>}
      {codeUrl && (Array.isArray(codeUrl) ? codeUrl : [codeUrl]).map(url => <a href={url} target="_blank" rel="noreferrer">💻 Code</a>)}
      {liveUrl && <a href={liveUrl} target="_blank" rel="noreferrer">👀 Check It Out</a>}
    </div>
  </>
}