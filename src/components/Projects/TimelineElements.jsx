import MyPortfolioWebsite from '../../assets/my-portfolio.png';
import CoffeeWebsite from '../../assets/coffee-website.png';
import ToDoListWebsite from '../../assets/todolist-website.png';

let timelineElements = [
  {
    id: 1,
    title: 'Coffee Website',
    url: 'https://baristachawsu.great-site.net',
    description:
      'This website is made for the business called Barista Chaw Su. They train people to be baristas and also works as a cafe consultant. I made this so they have an easier time training people and for me to be able to look up recipes quickly.',
    date: '2023',
    tag: 'Educational',
    image: CoffeeWebsite,
  },
  {
    id: 2,
    title: 'First Portfolio Website',
    url: 'http://julianhein.great-site.net',
    description:
      'The first portfolio website I wrote with basic HTML, CSS and Javascript. ',
    date: '2023',
    tag: 'Portfolio',
    image: MyPortfolioWebsite,
  },
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
      'The portfolio website I currently use. This website is built with Astro, React and SCSS which is more complex compared to the first portfolio website. The website structure and theme is similar, but the main difference is the frameworks.',
    date: '2023',
    tag: 'Portfolio',
    image: MyPortfolioWebsite,
  },
];

export default timelineElements;
