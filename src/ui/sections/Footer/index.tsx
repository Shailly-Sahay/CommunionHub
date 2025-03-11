import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <section className="section-pd !py-12 bg-black">
      <div className="flex flex-row justify-between">
        <Link to="/">
          <h3 className="tracking-tight text-white header">CommunionHub</h3>
        </Link>

        <div className="flex gap-8 md:gap-16">
          <Link
            to="https://www.linkedin.com/in/shailly-sahay/"
            target="_blank"
            className="flex items-center"
          >
            <FontAwesomeIcon
              className="h-6 w-6 md:h-8 md:w-8 text-white"
              icon={faEnvelope}
            />
          </Link>

          <Link
            to="https://github.com/Shailly-Sahay"
            target="_blank"
            className="flex items-center"
          >
            <FontAwesomeIcon
              className="h-6 w-6 md:h-8 md:w-8 text-white"
              icon={faGithub}
            />
          </Link>

          <Link
            to="https://www.linkedin.com/in/shailly-sahay/"
            target="_blank"
            className="flex items-center"
          >
            <FontAwesomeIcon
              className="h-6 w-6 md:h-8 md:w-8 text-white"
              icon={faLinkedin}
            />
          </Link>
        </div>

        <div className="flex items-center">
          <p className="text-[#fff9] body-font">© Shailly Sahay</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
