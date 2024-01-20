import React from "react";
import { BsTwitter, BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <Link
        className="social__item"
        to={"https://twitter.com/Brayckend"}
        target="_blank"
      >
        <BsTwitter />
      </Link>
      <Link
        className="social__item"
        to={"https://www.linkedin.com/in/brayan-alexis-salazar-rivas-238725157/"}
        target="_blank"
      >
        <BsLinkedin />
      </Link>
      <Link
        className="social__item"
        to={"https://github.com/BrayanSalazarUSA"}
        target="_blank"
      >
        <BsGithub />
      </Link>
    </div>
  );
};

export default SocialMedia;
