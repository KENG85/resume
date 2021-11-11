import React from "react";
import TextLoop from "react-text-loop";

const conctInfo = {
  phone: "+1 602-380-5283",
  email: " kateengard@gmail.com",
};

const sliderContent = {
  name: "Kate Engard",
  designation: "Leadership | Human Performance | Machine Learning",
  description: `Certified Strength and Conditioning Specialist seeking entry-level position in 
  performance analytics and machine learning.`,
  btnText: "Download CV",
};

const Slider = () => {
  return (
    <>
      {/*  Home Banner */}
      <section id="home" className="home-banner">
        <div className="hb-top-fixed d-flex">
          <div className="hb-info">
            <a href="tel:+1 602-380-5283">{conctInfo.phone}</a>
            <a href="mailto:kateengard@gmail.com">
              {conctInfo.email}
            </a>
          </div>
          <div className="hb-lang">
            <ul className="nav">
              <li className="active">
                {/*<a href="#">EN</a>*/}
              </li>
              <li>
                {/*<a href="#">FR</a>*/}
              </li>
            </ul>
          </div>
        </div>
        {/* End hp-top-fixed */}

        <div className="container">
          <div className="row full-screen align-items-center">
            <div className="col-lg-7">
              <div className="type-box">
                <h6 data-aos="fade-up" data-aos-duration="1200">
                  Hello, My name is
                </h6>
                <h1
                  className="font-alt"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="100"
                >
                  {sliderContent.name}
                </h1>
                <div
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                >
                  <TextLoop>
                    <p className="loop-text lead"> Human Performance</p>
                    <p className="loop-text lead"> Machine Learning</p>
                    <p className="loop-text lead"> Data Visualization</p>
                    
                  </TextLoop>
                </div>

                <p
                  className="desc"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="300"
                >
                  {sliderContent.description}
                </p>
                <div
                  className="mt-4"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="400"
                >
                  <a
                    className="px-btn px-btn-white"
                    href="https://www.dropbox.com/s/os33g2ov3b9s0i5/Engard-Resume-App.pdf?dl=0"
                    download
                  >
                    {sliderContent.btnText}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Container*/}
        <div
          className="hb-me"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "img/about/engard.png"
            })`,
          }}
        ></div>
      </section>

      {/* End Home Banner  */}
    </>
  );
};

export default Slider;
