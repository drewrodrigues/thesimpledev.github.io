import {ExperienceProps} from "./experience";
import ms from './ms.png';
import vs from './vs.jpeg';
import aa from './Appacademylogo.png';
import Testimonial, {TestimonialProps} from "./testomonial";
import aa_pic from "./aa_pic.jpeg";
import React from "react";

export const experiences: ExperienceProps[] = [
  {
    logo: ms,
    title: 'Software Engineer II',
    company: 'Microsoft',
    duration: '~2 years',
    detail: `• Increased client side scroll performance by 90% by refactoring components causing layout thrashing from a O(n) DOM read and write solution to O(1).

          • Decreased perceived application load time by 95% with Electron by showing a splash screen window while launching background processes. Once all processes are ready, the client rendering process starts and once mounted sends an IPC message to the main process. This causes the splash screen window to animate into the client, creating a seamless transition between initial startup and full application load.

          • Increased engineer efficiency and codebase testing by creating the first reducer and middleware unit tests and briefing the team on implementation and best practices.

          • Developed various UI components with complex state management and animations using libraries including React, React Springs, Redux, GraphQL Apollo and more.`
  },
  {
    logo: vs,
    title: 'Software Engineer',
    company: 'VitalSource',
    duration: '~3 months',
    detail: `• Increased code coverage by 40% using Jest and Enzyme.
• Created end to end tests for our main product flows using Cypress.
• Implemented status indicators with React components by iterating over the Redux store and checking conditions.`
  },
  {
    logo: aa,
    title: 'Teaching Assistant',
    company: 'App Academy',
    duration: '~3 months',
    detail: `• Helped students understand core concepts.
• Guided student design and implementation of full-stack applications.
• Closely reviewed student progression in order to support their individual learning needs.`
  },
];

export const testimonials: TestimonialProps[] = [
  {
    name: 'Aram Sargsyan',
    relation: 'Bootcamp Friend',
    detail: 'Drew is a truly awesome software engineer. He is highly competent in full stack web development, especially when it comes to Ruby on Rails and React. However, Drew\'s greatest strength derives from his passionate dedication to perfecting his code and delivering an amazing software solutions for users. Besides his strong technical skills, Drew also has a wonderful personality and is a very collaborative teammate, always ready to share or learn something new from his peers. So I believe Drew will be a great addition to any team of agile, like-minded developers.',
    photo: aa_pic
  },
  {
    name: 'Elliot Boschwitz',
    relation: 'Software Engineer',
    detail: 'The TLDR here is you\'re just really great to work with. Your engineering work has always been top-notch, I seem to learn something new whenever I read over one of your PRs. You\'re also incredibly helpful, not just with active PR suggestions but just in general whenever we\'ve collaborated on something. Your presentations in client syncs have also been REALLY helpful, especially with your perf-related discussions.',
    photo: aa_pic,
  },
  {
    name: 'Markus Beissinger',
    relation: 'Senior Program Manager',
    detail: `I love your passion, curiosity, and openness. You bring out the best of others you work with (and teach a lot!). It shows that you care about getting things done right and I'm grateful for the work you have done.
        
        You are able to dive deep and learn a ton about a given area and execute really well. You have shown great diversity and ability to tackle problems thrown at you, and communicate findings and progress really well to the whole team. I love how you ask questions when you need to as well, not only for clarification on details but also for reasoning behind things. You are able to bring a great perspective to building features and have an amazing collaborative attitude.`,
    photo: aa_pic
  }
]