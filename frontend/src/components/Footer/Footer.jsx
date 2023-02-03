import "./footer.css";
import { FaFacebookF, FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";

export default function Footer() {
  return (
    <footer>
      {/* <a href="#" className="footer_logo">
        Romain
      </a> */}
      <ul className="permalinks">
        <li>
          <a href="#top">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        {/* <li>
          <a href="#testimonials">Testimonials</a>
        </li> */}
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer_socials">
        <a href="https://facebook.com">
          <FaFacebookF />
        </a>
        <a href="https://github.com/Fostrankill">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/romain-pourchaux/">
          <BsLinkedin />
        </a>
      </div>
      <div className=".footer_copyright">
        <small>&copy; ROMAIN POURCHAUX. All rights reserved.</small>
      </div>
    </footer>
  );
}
