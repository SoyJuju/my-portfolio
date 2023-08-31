import '../../styles/main.css';

import MyPortfolioWebsite from '../../assets/my-portfolio.png';
import CoffeeWebsite from '../../assets/coffee-website.png';
import ToDoListWebsite from '../../assets/todolist-website.png';

function ProjectTag(Image, Link, Name, Year, Tag, Description) {
  return (
    <li class="projects--tag">
      <img class="projects--image" src={Image} alt="" />
      <div class="projects--detail">
        <a href={Link} class="fs-secondary-heading fw-black text-primary-400">
          {Name}
        </a>
        <div class="projects--description">
          <p class="projects--year | year-button fw-medium">{Year}</p>
          <p class="regular fs-450 text-primary-300">{Tag}</p>
        </div>
        <p class="fs-400 fw-regular">{Description}</p>
      </div>
    </li>
  );
}

export default function Projects() {
  return (
    <section class="projects bg-primary-100 text-primary-400 padding-block-800">
      <div class="container">
        <h2 class="fs-small-700 fw-medium">Featured Works</h2>
        <ul role="list" class="projects--container">
          {ProjectTag(
            MyPortfolioWebsite,
            '#',
            'My Portfolio Website',
            '2023',
            'Portfolio',
            'This is the website you are currently viewing. My very first portfolio website that I built on my own. The idea is to be minimalstic and to look clean.'
          )}
          {ProjectTag(
            CoffeeWebsite,
            'https://baristachawsu.great-site.net',
            'Coffee Recipes Website',
            '2023',
            'Educational',
            'This website is made for the business called Barista Chaw Su. They train people to be baristas and also works as a cafe consultant. I made this so they have an easier time training people and for me to be able to look up recipes quickly.'
          )}
          {ProjectTag(
            ToDoListWebsite,
            'https://juju-to-do-list.netlify.app',
            'To Do List',
            '2023',
            'Utility',
            'This is a more advanced website I created after building a few static websites. This included more complex javascript but with a very simple UI. This project is not connected to a database because I built this to progress my javascript skills.'
          )}
        </ul>
      </div>
    </section>
  );
}
