import "./about.css";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import ME from "../../assets/me-about.jpg";

export default function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About me" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>Junior</small>
            </article>
            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>6+ Completed </small>
            </article>
            <article className="about_card">
              <FiUsers className="about_icon" />
              <h5>Business</h5>
              <small>GCI /AUCHAN RETAIL</small>
            </article>
          </div>
          <p>
            Aprés 10 années au sein de la grande famille du Retail et de la
            Supply, j'ai repris une formation en temps que développeur Web à la
            Wild Code School sur le campus de Lille. Profil evolutif passionné
            par le développement web et mobile, je cherche à rejoindre une
            entreprise avec laquelle je pourrais partager plus que du code !
          </p>

          <a href="#contact" className="btn btn-primary">
            Stay In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
