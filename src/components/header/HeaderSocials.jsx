import React from "react";
import { BsLinkedin, BsGithub, BsTwitter } from "react-icons/bs";
const HeaderSocials = () => {
  return (
    <div className="header-socials">
      <a
        href="https://linkedin.com/in/shubham-nanaware-4b0b23211"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/Shubhamsrmn" target="_blank">
        <BsGithub />
      </a>
      <a href="https://twitter.com/shubhamsrmn/" target="_blank">
        <BsTwitter />
      </a>
    </div>
  );
};

export default HeaderSocials;
