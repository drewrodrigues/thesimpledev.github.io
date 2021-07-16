import React from 'react';
import './App.scss';

import javascript from './javascript.jpeg';
import typescript from './typescript-logo.svg';
import rails from './rails.png';
import ruby from './ruby.png';
import node from './node.jpeg';
import react from './react.png';
import sass from './sass.png';
import git from './git.png';
import electron from './electron.png';
import redux from './redux.png';
import html5 from './html5.png';
import graphql from './Graphql.png';
import postgresql from './postgresql.png';
import css from './css.png';
import bash from './bash.png';
import mongo from './mongo.png';
import express from './express.png';
import gcp from './gcp.png';
import me from './me.png';

function App() {
  return (
    <div className="App">
      <section className="section">
        <aside className="jumbo__aside">
          <h3>👋🏽 Hey there, I'm</h3>
          <h1>DREW</h1>
          <h2>An awesome Software Engineer specializing in web development.</h2>

          {/*<img src={me} alt="Me" />*/}

          <h4 className="section__header with--me">
            About Me
            <img src={me} alt="Me" className="me"/>
          </h4>

          <h5 className="about__title">My Background</h5>
          <p className="jumbo__detail">Over the last few years I’ve worked with small to medium-sized businesses all the way up to giants like Microsoft. I've also taught at App Academy, the most prestigious web development bootcamp in the United States.</p>
          <p className="jumbo__detail">
            As a software engineer, I’ve helped build everything from complex UIs and animations, web scrapers, to full stack web and mobile applications, working alone or as part of a team. And if you’ve attended an online college, you’ve likely used code I’ve worked on.
          </p>

          <h5 className="about__title">Features</h5>
          <ul className="about__features">
            <li className="about__feature"><i>🧪</i> <span>I love testing</span> code as it tends to be much cleaner and more well thought out.</li>
            <li className="about__feature"><i>🏅</i> <span>I'm well rounded</span> whether it's the frontend, backend or design.</li>
            <li className="about__feature"><i>🎨</i> <span>I have an eye for design</span> and enjoy building not only functional, but beautiful products.</li>
            <li className="about__feature"><i>😊</i> <span>I love working with others</span> because we can accomplish more and inspire each other along the way.</li>
          </ul>
        </aside>
      </section>

      <section className="section">
        <h4 className="section__header">Skills</h4>
        
        <ul className="skills">
          <li className="skill__container">
            <img className="skill__icon" src={javascript} alt="JavaScript"/>
            <div>
              <h5>JavaScript</h5>
              <p>3+ years</p>
            </div>
          </li>

          <li className="skill__container">
            <img className="skill__icon" src={typescript} alt=""/>
            <div>
              <h5>TypeScript</h5>
              <p>~2 years</p>
            </div>
          </li>

          <li className="skill__container">
            <img className="skill__icon" src={rails} alt=""/>
            <div>
              <h5>Ruby on Rails</h5>
              <p>~1 years</p>
            </div>
          </li>

          <li className="skill__container">
            <img className="skill__icon" src={ruby} alt=""/>
            <div>
              <h5>Ruby</h5>
              <p>~1 years</p>
            </div>
          </li>

          <li className="skill__container">
            <img className="skill__icon" src={html5} alt=""/>
            <div>
              <h5>HTML</h5>
              <p>~1 years</p>
            </div>
          </li>

          <li className="skill__container">
            <img className="skill__icon" src={redux} alt=""/>
            <div>
              <h5>Redux</h5>
              <p>~3 years</p>
            </div>
          </li>

          <li className="skill__container">
            <img className="skill__icon" src={graphql} alt=""/>
            <div>
              <h5>Graphql</h5>
              <p>~1 year</p>
            </div>
          </li>

          <li className="skill__container">
            <img className="skill__icon" src={node} alt=""/>
            <div>
              <h5>Node</h5>
              <p>~3 years</p>
            </div>
          </li>

          <li className="skill__container">
            <img className="skill__icon" src={react} alt=""/>
            <div>
              <h5>React</h5>
              <p>~3 years</p>
            </div>
          </li>

          <li className="skill__container">
            <img className="skill__icon" src={sass} alt=""/>
            <div>
              <h5>Sass</h5>
              <p>~4 years</p>
            </div>
          </li>

          <li className="skill__container">
            <img className="skill__icon" src={git} alt=""/>
            <div>
              <h5>Git</h5>
              <p>~4 years</p>
            </div>
          </li>

          <li className="skill__container">
            <img className="skill__icon" src={electron} alt=""/>
            <div>
              <h5>Electron</h5>
              <p>~2 years</p>
            </div>
          </li>

          <li className="skill__container">
            <img className="skill__icon" src={postgresql} alt=""/>
            <div>
              <h5>Postgres</h5>
              <p>~2 years</p>
            </div>
          </li>

          <li className="skill__container">
            <img className="skill__icon" src={css} alt=""/>
            <div>
              <h5>CSS</h5>
              <p>4+ years</p>
            </div>
          </li>

          <li className="skill__container">
            <img className="skill__icon" src={bash} alt=""/>
            <div>
              <h5>Bash</h5>
              <p>1+ year</p>
            </div>
          </li>

          <li className="skill__container">
            <img className="skill__icon" src={mongo} alt=""/>
            <div>
              <h5>MongoDB</h5>
              <p>~1 year</p>
            </div>
          </li>

          <li className="skill__container">
            <img className="skill__icon" src={express} alt=""/>
            <div>
              <h5>Express</h5>
              <p>~2 years</p>
            </div>
          </li>

          <li className="skill__container">
            <img className="skill__icon" src={gcp} alt=""/>
            <div>
              <h5>GCP</h5>
              <p>{"\<"}1 year</p>
            </div>
          </li>
        </ul>
      </section>

      <section className="section">
        <h4 className="section__header">Adjacent Skills</h4>
      </section>

      <section className="section">
        <h4 className="section__header">Experience</h4>
      </section>

      <section className="section">
        <h4 className="section__header">Projects</h4>
      </section>
    </div>
  );
}

export default App;
