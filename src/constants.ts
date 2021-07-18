import {ExperienceProps} from "./experience";
import ms from './ms.png';
import vs from './vs.jpeg';
import aa from './Appacademylogo.png';
import vapor from "./vapor.png";
import lobe from './lobe.png';
import el from './engineerLiving.png';
import fe from './Screen Shot 2021-07-16 at 9.47.12 PM.png';
import at from './agileTrack.png';
import tm from './tripmates.png';
import bj from './betterjobs.png';
import scrabble from './scrabble.png';
import instadate from './instadate.jpg';
import {TestimonialProps} from "./testomonial";
import aa_pic from "./aa_pic.jpeg";
import React from "react";
import {ProjectProps} from "./project";

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
];

export const projects: ProjectProps[] = [
  {
    title: 'Lobe',
    flag: '💼 Work Platform',
    technologies: [
      'AXIOS',
      'Cypress',
      'Electron',
      'Express',
      'GraphQL',
      'HTML',
      'Jest',
      'OAUTH',
      'React',
      'SASS',
      'TypeScript',
    ],
    subtitle: 'Create machine learning models with a free, easy to use tool.',
    detail: 'Lobe is a machine learning platform which allows users to easily train image regression models right from their computer for free. While working on Lobe, I\'ve created animations, UI, worked on window and process management with electron, greatly improved clientside performance through various investigations and changes, worked on the server side GraphQL layer, and much more!',
    image: lobe,
    liveUrl: 'https://www.lobe.ai/',
  },
  {
    title: 'Better Jobs',
    flag: '👨🏽‍💻 Personal Product',
    technologies: [
      'Chron Jobs',
      'HTML',
      'Heroku',
      'JavaScript',
      'Postgres',
      'Ruby',
      'SASS',
      'Selenium Webdriver',
      'Sinatra',
    ],
    subtitle: 'Efficiently and easily find awesome jobs matches based upon keyword rankings.',
    detail: 'Better jobs is a application based upon an inefficiency I found during job searching. Typically you look through many job postings, with the goal of identifying a good fit. What I found is that keywords in a job posting is what determines what\'s likely a good fit. So, I created a scraper which pulls job postings from various locations and allows user to query against it with defined keywords to either increase or decrease a job post\'s score. Then, matches are returned in descending order so users can find good job fits quickly. I actually found my current position at Microsoft (Lobe listed below) through this application. It was the top ranked post!',
    image: bj,
    codeUrl: 'https://github.com/thesimpledev/better_jobs',
  },
  {
    title: 'Tripmates',
    flag: '👨🏽‍💻 Personal Product',
    technologies: [
      'Heroku',
      'HTML',
      'JavaScript',
      'Postgres',
      'React',
      'Redux',
      'Ruby',
      'Ruby on Rails',
      'SASS',
    ],
    subtitle: 'Trip planning made social.',
    detail: 'Tripmates is an application I started building with the goal of making it easy for users to find people and groups that are going on trips. The roadmap also included functionality to help users find cool things to do and collaborative tools to organize the trip with others.',
    image: tm,
    codeUrl: 'https://github.com/thesimpledev/tripmates',
  },
  {
    title: 'Flippin Easy',
    flag: '👨🏽‍💻 Personal Product',
    technologies: [
      'CSS',
      'HTML',
      'Google Analytics',
      'Google Optimize',
      'JavaScript',
      'Netlify',
      'Serverless Functions',
      'Stripe API',
    ],
    subtitle: 'Make huge profits flipping products.',
    detail: 'Flippin Easy is an ~80 page ebook I produced which shares techniques to easily flip items for really nice profits. It\'s primarily a landing which is consistently running A/B tests with Google Optimize + Analytics. Users can purchase the ebook through a stripe integration, which sends a request to a serverless function where the ebook is then sent to their email.',
    image: fe,
    liveUrl: 'https://flippin-easy.com/',
  },
  {
    title: 'Instadate',
    flag: '👨🏽‍💻 Personal Product',
    technologies: [
      'Expo',
      'HTML',
      'Geocoder API',
      'React Native',
      'Redux',
      'RSpec',
      'Ruby',
      'Ruby on Rails',
      'SASS',
    ],
    subtitle: 'Get out from behind the phone and on dates.',
    detail: 'Instadate is a platform I started building with the intent to bring together serious daters to get off their phones and on real dates.',
    image: instadate,
    codeUrl: ['https://github.com/thesimpledev/instadate-api', 'https://github.com/thesimpledev/instadate-client'],
  },
  {
    title: 'Scrabble',
    flag: '👥 Personal Partner Project',
    technologies: [
      'HTML',
      'JavaScript',
      'React',
      'SASS',
      'Sockets',
    ],
    subtitle: 'Seriously, it\'s scrabble :P.',
    detail: 'Scrabble is a little game I built with my girlfriend. She was learning React, so I thought it would be cool to work on something together. And plus, who doesn\'t love scrabble!',
    image: scrabble,
    codeUrl: 'https://github.com/thesimpledev/scrabble-shared',
  },
  {
    title: 'Vapor',
    flag: '👥 Bootcamp Team Project',
    technologies: [
      'AXIOS',
      'Express',
      'JavaScript',
      'MongoDB',
      'OAUTH',
      'React',
      'Steam API',
    ],
    subtitle: 'Aggregated game recommendations',
    image: vapor,
    codeUrl: 'https://github.com/thesimpledev/vapor',
  },
  {
    title: 'Agile Tracker',
    flag: '👨🏽‍💻 Bootcamp Personal Project',
    technologies: [],
    subtitle: 'Project management tool, inspired by Pivotal Tracker.',
    image: at,
    codeUrl: 'https://github.com/thesimpledev/agile_tracker',
  },
  {
    title: 'Engineer Living',
    flag: '👨🏽‍💻 Bootcamp Personal Project',
    technologies: [
      'D3.js',
      'HTML',
      'JavaScript',
      'SASS',
    ],
    subtitle: 'Best places to live as a Software Engineer in 2019',
    image: el,
    codeUrl: 'https://github.com/thesimpledev/engineerLiving',
    liveUrl: 'https://thesimpledev.github.io/engineerLiving/',
  }
]