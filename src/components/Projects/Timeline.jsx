import '../../styles/main.css';

import timelineElements from './TimelineElements';

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';

import 'react-vertical-timeline-component/style.min.css';

export default function Timeline() {
  return (
    <div className="timeline--projects | container padding-block-700">
      <h className="timeline--heading | fs-primary-heading fw-bold">
        Projects Timeline
      </h>
      <VerticalTimeline lineColor="hsl(234, 30%, 18%)" layout="2-columns">
        {timelineElements.map((element) => {
          return (
            <VerticalTimelineElement key={element.key} IconStyle={element.icon}>
              <img className="timeline--image" src={element.image} alt="" />
              <a
                className="timeline--title | fw-black fs-small-650 text-primary-400"
                href={element.url}
              >
                {element.title}
              </a>
              <div className="projects--description">
                <p className="timeline--year | year-button fw-medium">
                  {element.date}
                </p>
                <p className="timeline--tag | text-primary-300">
                  {element.tag}
                </p>
              </div>
              <p className="timeline--description">{element.description}</p>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}
