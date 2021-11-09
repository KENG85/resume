import React from "react";

const ContactInfo = () => {
  return (
    <>
      <div className="contact-info">
        <h4>Get in touch</h4>
        <p>
          When I'm not behind the computer, find me at the track, 
          training kids or photographing the human experience. 
        </p>

        <ul>
          <li className="media">
            <i className="icon icon-map"></i>
            <span className="media-body">
              Phoenix, AZ, United States
            </span>
          </li>
          {/* End li */}

          <li className="media">
            <i className="icon icon-envelope"></i>
            <span className="media-body"><a href="mailto:kate@engardathletics.com">kate@engardathletics.com</a></span>
          </li>
          {/* End li */}

          <li className="media">
            <i className="icon icon-phone"></i>
            <span className="media-body">+1 602 380 5283</span>
          </li>
          {/* End li */}
        </ul>
      </div>
      {/* End .contact-info */}
    </>
  );
};

export default ContactInfo;
