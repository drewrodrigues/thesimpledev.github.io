import vapor from "./vapor.png";
import React from "react";

export default function Project() {
  return <>
    <div className="project">
      <ul className="project__technologies">
        <li className="project__technology">MongoDB</li>
        <li className="project__technology">Express</li>
        <li className="project__technology">JavaScript</li>
        <li className="project__technology">React</li>
        <li className="project__technology">AXIOS</li>
        <li className="project__technology">Steam API</li>
        <li className="project__technology">OAUTH</li>
      </ul>
      <img src={vapor} alt=""/>
      <p className="project__tag">👥 Team Based Project</p>
      <h6 className="project__title">Vapor</h6>
      <p className="project__subtitle">Aggregated game recommendations</p>
      <p className="project__detail">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium aperiam autem delectus
        distinctio dolorem ipsam magni nam odio officia optio pariatur quia quibusdam quod, rem rerum, sed sunt
        temporibus.
      </p>
      <p className="project__detail">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium aperiam autem delectus
        distinctio dolorem ipsam magni nam odio officia optio pariatur quia quibusdam quod, rem rerum, sed sunt
        temporibus.
      </p>
      <button>Code</button>
      <button>Check It Out</button>
    </div>
  </>
}