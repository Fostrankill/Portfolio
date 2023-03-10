import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.jpg";
import IMG6 from "../../assets/portfolio6.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Wild-NewsPaper",
    github: "https://github.com/Fostrankill/wild-newspaper",
    demo: "https://github.com/Fostrankill/wild-newspaper",
  },
  {
    id: 2,
    image: IMG2,
    title: "Randomovie",
    github:
      "https://github.com/WildCodeSchool/2022-09-JS-Lille-project-2-g3-bulles-bizarres",
    demo: "https://github.com/Fostrankill/wild-newspaper",
  },
  {
    id: 3,
    image: IMG3,
    title: "Origin Digital",
    github: "https://github.com/Fostrankill/wild-newspaper",
    demo: "https://github.com/Fostrankill/wild-newspaper",
  },
  {
    id: 4,
    image: IMG4,
    title: "Where is my %*!# Passport",
    github: "https://github.com/Fostrankill/wild-newspaper",
    demo: "https://github.com/Fostrankill/wild-newspaper",
  },
  {
    id: 5,
    image: IMG5,
    title: "Ecocco",
    github:
      "https://github.com/WildCodeSchool/2022-09-JS-Lille-project-3-g3-origin",
    demo: "https://github.com/Fostrankill/wild-newspaper",
  },
  {
    id: 6,
    image: IMG6,
    title: "Data Base",
    github: "https://github.com/Fostrankill/wild-newspaper",
    demo: "https://github.com/Fostrankill/wild-newspaper",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2> Portfolio</h2>

      <div className="container portfolio_container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
