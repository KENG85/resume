import React from "react";
import Header from "../../components/header/Header";
import Slider from "../../components/slider/SliderAnimation";
import About from "../../components/about/AboutAnimation";
import Resume from "../../components/resume/ResumeAnimation";
import Portfolio from "../../components/portfolio/PortfolioAnimation";
import Blog from "../../components/blog/BlogAnimation";
import ContactInfo from "../../components/contact/ContactInfo";
import Map from "../../components/contact/Map";
import Footer from "../../components/footer/FooterAnimation";
import useDocumentTitle from "../../components/useDocumentTitle";

const HomeOne = () => {
  useDocumentTitle(
    "Kate Engard || Leadership & Innovation | MLOps | Human 1st."
  );
  document.body.classList.add("theme-light");
  return (
    <div className="main-left">
      <Header />
      {/* End Header Section */}

      <Slider />
      {/* End Slider Section */}

      <About />
      {/* End About Section */}

      <Resume />
      {/* End Resume Section */}

      <section id="work" className="section theme-light dark-bg">
        <div className="container">
          <div className="title">
            <h3>Projects.</h3>
          </div>
          <Portfolio />
        </div>
      </section>
      {/* End Portfolio Section */}

      <section id="blog" className="section">
        <div className="container">
          <div className="title">
            <h3>The Human Experience.</h3>
            <p></p>
            <p>Excerpts from my upcomming book, "The Weight of Perception".  Expected Release Fall 2022</p>
          </div>
          <Blog />
        </div>
      </section>
      {/* End Portfolio Section */}

      <section id="contactus" className="section theme-light dark-bg">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-5 col-xl-4 m-15px-tb"
              data-aos="fade-right"
              data-aos-duration="1200"
            >
              <ContactInfo />
            </div>
            {/* End Contact info */}

            <div
              className="col-lg-7 ml-auto m-15px-tb"
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <div className="contact-form">
                
                <Map />
              </div>
            </div>
            {/* End contact map */}

          
            {/* End Col */}
          </div>
        </div>
      </section>
      {/* End Contact Section */}

      <footer className="footer white">
        <div className="container">
          <Footer />
        </div>
      </footer>
      {/* End Contact Section */}
    </div>
  );
};

export default HomeOne;
