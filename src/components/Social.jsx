import React from "react";
import {
  FaTwitter,
  FaLinkedinIn,
  FaSlackHash,
  FaGithub,
  FaTwitch,
} from "react-icons/fa";

const SocialShare = [
  { Social: <FaGithub />, link: "https://www.github.com/KENG85" },
  { Social: <FaTwitter />, link: "www.linkedin.com/in/kate-engard" },
  { Social: <FaTwitch />, link: "https://www.twtich.com/KENG85" },
  { Social: <FaLinkedinIn />, link: "https://twitter.com/kateengard" },
  { Social: <FaSlackHash />, link: "https://join.slack.com/t/sportandhp/shared_invite/zt-kj9ztgwz-P0VlVI1F11yr0Eqebt40uA" },
];

const Social = () => {
  return (
    <div className="nav social-icons justify-content-center">
      {SocialShare.map((val, i) => (
        <a key={i} href={`${val.link}`} rel="noreferrer" target="_blank">
          {val.Social}
        </a>
      ))}
    </div>
  );
};

export default Social;
