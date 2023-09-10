import MyPortfolioWebsite from '../../assets/my-portfolio.png';
import CoffeeWebsite from '../../assets/coffee-website.png';
import ToDoListWebsite from '../../assets/todolist-website.png';

let timelineElements = [
  {
    id: 3,
    title: 'To Do List',
    url: 'https://juju-to-do-list.netlify.app',
    description:
      'A to do list website I wrote with basic HTML, but SCSS instead of CSS and more complex Javascript.',
    date: '2023',
    tag: 'Utility',
    image: ToDoListWebsite,
  },
  {
    id: 4,
    title: 'Main Portfolio Website',
    url: 'https://julianhein.netlify.app',
    description:
      'The portfolio website I currently use. This website is built with Astro, React and SCSS which is more complex compared to the first portfolio website. The website structure and theme is similar, but the main difference is the frameworks. The coding dashboard is also linked with both codewars and leetcode apis to get the latest updates on my profile. The basic version was <a href="http://julianhein.great-site.net" target="_blank">http://julianhein.great-site.net</a>.',
    date: '2023',
    tag: 'Portfolio',
    image: MyPortfolioWebsite,
  },
  {
    id: 5,
    title: 'Main Coffee Website',
    url: 'https://baristachawsu.netlify.app',
    description:
      'This is an improved version of the first coffee website I made for Barista Chaw Su. This improved version is built upon Astro, React and SCSS. The design is quite similar but the frameworks used are different. The basic one was <a href="http://baristachawsu.great-site.net" target="_blank">http://baristachawsu.great-site.net</a>.',
    date: '2023',
    tag: 'Educational',
    image: CoffeeWebsite,
  },
];

export default timelineElements;
