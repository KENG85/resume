import React from "react";
import Social from "../Social";
import Testimonials from "../testimonial/TestimonialAnimation";
import Services from "../service/ServiceAnimation";
import Awards from "../award/AwardsAnimation";

const About = () => {
  return (
    <>
      <section id="about" className="section theme-light dark-bg">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div
              className="col-md-6 col-lg-4"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="about-me">
                <div className="img">
                  <div className="img-in">
                    <img src="img/about/kate.jpg" alt="about image" />
                  </div>

                  <Social />

                  {/* End social icon */}
                </div>
                {/* End img */}
                <div className="info">
                  <h3>Kate Engard</h3>
                  <sub>Quantify the Human Experience</sub>
                  <p>Human 1st.</p>
                  
                </div>
                {/* End info */}
              </div>
              {/* End about-me */}
            </div>
            {/* End col */}

            <div
              className="col-lg-7 ml-auto"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <div className="about-info">
                <div className="title">
                  <h3>Professional Statement</h3>
                </div>
                <div className="about-text">
                  <p>
                  Former strength coach and business owner transitioning to an 
                  entry-level analyst/MLOps role after completing U of A Data Analytics and 
                  Visualization Bootcamp. Diverse experience leading teams in fast-pace, 
                  high-performance environments. A slightly obsessive, but always adaptable, 
                  adjustable, and flexible team player.
                  
                  </p>
              
                </div>
                <div className="info-list">
                  <div className="row">
                    <div className="col-sm-6">
                      <ul>
                        <li>
                          <label>Name: </label>
                          <span>Kate Engard</span>
                        </li>
                        <li>
                          <label>Fav Food: </label>
                          <span>Guac on errythang!</span>
                        </li>
                      
                        <li>
                          <label>Location: </label>
                          <span>Phoenix</span>
                        </li>
                      </ul>
                    </div>
                    <div className="col-sm-6">
                      <ul>
                        <li>
                          <label>Phone: </label>
                          <span>(+1) 602 380 5283</span>
                        </li>
                        <li>
                          <label>Email: </label>
                          <span>kateengard@gmail.com</span>
                        </li>
                      
                        <li>
                          <label>Open to Work: </label>
                          <span>YES!</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End col */}
          </div>

          {/* separated */}

          <div
            className="separated"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "img/border-dark.png"
              })`,
            }}
          ></div>

          {/* End separated */}
          <div className="title">
            <h3>Leadership.</h3>
          </div>

          <Services />

          {/* End .row */}

          {/* separated */}
          <div
            className="separated"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "img/border-dark.png"
              })`,
            }}
          ></div>
          {/* End separated */}

          <div className="title">
            <h3>Certificates.</h3>
          </div>

          <Awards />
          {/* End Awards */}

          {/* separated */}
          <div
            className="separated"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "img/border-dark.png"
              })`,
            }}
          ></div>
          {/* End separated 

          <div className="title">
            <h3>Endorsements.</h3>
          </div>

          <Testimonials />
          End Testimonaial */}
        </div>
        
      </section>
    </>
  );
};

export default About;
