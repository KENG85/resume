import React from "react";
import {
  FaTwitter,
  FaLinkedinIn,
  FaSlackHash,
  FaGithub,
  FaTwitch,
} from "react-icons/fa";

const SocialShare = [
  { Social: <FaGithub />, link: "https://www.github.io/KENG85" },
  { Social: <FaTwitter />, link: "https://www.linkedin.com/" },
  { Social: <FaTwitch />, link: "https://www.twitch.com/KENG85" },
  { Social: <FaLinkedinIn />, link: "https://twitter.com/" },
  { Social: <FaSlackHash />, link: "https://www.slack.com/" },
];

const Footer = () => {
  return (
    <>
      <div className="row align-items-center">
        <div className="col-md-6 my-2">
          <div className="nav justify-content-center justify-content-md-start">
            {SocialShare.map((val, i) => (
              <a key={i} href={`${val.link}`} rel="noreferrer" target="_blank">
                {val.Social}
              </a>
            ))}
          </div>
          {/* End .nav */}
        </div>
        {/* End .col */}

        <div className="col-md-6 my-2 text-center text-md-end">
          <p>
            © {new Date().getFullYear()} copyright{" "} LFT FLD.{" "}
            All right reserved.
          </p>
        </div>
        {/* End .col */}
      </div>
      {/* End .row */}
    </>
  );
};

export default Footer;
