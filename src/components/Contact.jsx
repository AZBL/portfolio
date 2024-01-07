import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <div className="contact">
      <h3>Contact</h3>
      <div className="linkContainer">
        <a href="mailto:azbyrdleitner@gmail.com">
          Email
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>
      <div className="linkContainer">
        <a
          href="https://www.linkedin.com/in/alex-byrd-leitner"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
      <div className="linkContainer">
        <a
          href="https://github.com/AZBL"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <div>Resume link</div>
      </div>
    </div>
  );
};
export default Contact;
