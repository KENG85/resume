import React, { useState } from "react";
import Modal from "react-modal";
import Contact from "../contact/ContactInfo";

Modal.setAppElement("#root");

const News = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  function toggleModalOne() {
    setIsOpen(!isOpen);
  }
  function toggleModalTwo() {
    setIsOpen2(!isOpen2);
  }
  function toggleModalThree() {
    setIsOpen3(!isOpen3);
  }
  function toggleModalFour() {
    setIsOpen4(!isOpen4);
  }

  return (
    <>
      <div className="row">
        <div
          className="col-md-6 m-15px-tb"
          data-aos="fade-right"
          data-aos-duration="1200"
        >
          <div className="blog-grid" onClick={toggleModalOne}>
            <div className="blog-img">
              <img src={`img/blog/1.jpg`} alt="blog post"></img>
            </div>
            <div className="blog-info">
              <div className="meta">Excerpt - BY KATE</div>
              <h6>
                <a>
                They're human and they go through human experiences.
                </a>
              </h6>
            </div>
          </div>
        </div>
        {/* End .col for blog-1 */}

        <div
          className="col-md-6 m-15px-tb"
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-delay="200"
        >
          <div className="blog-grid" onClick={toggleModalTwo}>
            <div className="blog-img">
              <img src={`img/blog/2.jpg`} alt="blog post"></img>
            </div>
            <div className="blog-info">
              <div className="meta">05/JAN/2020 - BY SMITH</div>
              <h6>
                <a>
                  Ten Mind-Blowing Reasons Why Design Is Using This Technique
                  For Exposure.
                </a>
              </h6>
            </div>
          </div>
        </div>
        {/* End .col for blog-2 */}

        <div
          className="col-md-6 m-15px-tb"
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-delay="400"
        >
          <div className="blog-grid" onClick={toggleModalThree}>
            <div className="blog-img">
              <img src={`img/blog/3.jpg`} alt="blog post"></img>
            </div>

            <div className="blog-info">
              <div className="meta">12/AUG/2020 - BY RIO</div>
              <h6>
                <a>
                  I Will Tell You The Truth About Design In The Next 60 Seconds.
                </a>
              </h6>
            </div>
          </div>
        </div>
        {/* End .col for blog-3 */}

        <div
          className="col-md-6 m-15px-tb"
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-delay="800"
        >
          <div className="blog-grid" onClick={toggleModalFour}>
            <div className="blog-img">
              <img src={`img/blog/4.jpg`} alt="blog post"></img>
            </div>

            <div className="blog-info">
              <div className="meta">22/JUN/2020 - BY SVEIL</div>
              <h6>
                <a>
                  What You Know About Design And What You Don't Know About
                  Design.
                </a>
              </h6>
            </div>
          </div>
        </div>
        {/* End .col for blog-4 */}
      </div>
      {/* End .row */}

      {/* Start Modal for Blog-1 */}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModalOne}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div>
          <button className="close-modal" onClick={toggleModalOne}>
            <img src="/img/cancel.svg" alt="close icon" />
          </button>
          {/* End close icon */}

          <div className="box_inner">
            <div className="scrollable">
              <div className="blog-grid">
                <div className="blog-img">
                  <img src="img/blog/4.jpg" alt="blog post"></img>
                </div>
                {/* End blog-img */}
                <article className="article">
                  <div className="article-title">
                    <h2>
                    They're human and they go through human experiences.
                    </h2>
                    <div className="media">
                      <div className="avatar">
                        <img src="img/about/626.png" alt="thumbnail" />
                      </div>
                      <div className="media-body">
                        <label>By Kate</label>
                        <span>Excerpt</span>
                      </div>
                    </div>
                  </div>
                  {/* End .article-title */}

                  <div className="article-content">
                    <p>
                    As I began to look at player stories in combination with organizational systems, 
                    I found that player potential was being diminished by social nuance and perceptual 
                    load as inflicted by the cascading effects of multiple system failures. 
                    </p>
                    <p>
                    There remain innumerable confounding factors outside of the actual training session 
                    that affect player performance; the majority of them are difficult to quantify social 
                    nuances that obscure opportunity, increase cognitive load and alter decision making. 
                    </p>
                    <p>                    
                    Ultimately, these perceptual burdens manifest in the performance setting as the yips, 
                    some difficult-to-pinpoint task-execution rut the athlete unexpectedly finds him/herself in, 
                    heightened risk taking behavior and worse yet, physical injury.  
                    </p>
                    <h4>Perceptual Experiences Add to Physical and Cognitive Load</h4>
                    <p>
                    My career as a strength and conditioning coach has culminated not in the metrics defined 
                    as speed or weight but in understanding the weight of life experiences as carried by 
                    each individual I worked with. 
                    </p>
                    <blockquote>
                      <p>
                      Today, there’s seemingly insurmountable data coming off of every single player, 
                      every single day.  And still, we struggle to manage player load.  Why?
                      </p>
                      <p className="blockquote-footer">
                        Foreward{" "}
                        <cite title="Source Title"> The Weight of Perception</cite>
                      </p>
                    </blockquote>
                    <p>
                      ...They're human and they go through human experiences.  Athetes carry a lot more stress than the average 
                      person at a very young age. I hope to get the fan to understand the true athlete experience and on the flip, 
                      I hope to get  coaches to understand that being in a position of power necessitates accountability.  
                      It is incumbent on all Coaches, and the organizational systems they represent to be truly accountable to the 
                      health and well being of the athletes they bring in. 
                    </p>
                  </div>
                  {/* End article content */}
                  <ul className="nav tag-cloud">
                    <li href="#">Load Monitoring</li>
                    <li href="#">Player Development</li>
                    <li href="#">Human Systems</li>
                    <li href="#">Culture</li>
                  </ul>
                  {/* End tag */}
                </article>
                {/* End Article */}

                <div className="contact-form article-comment">
                  <Contact />
                </div>
                {/* End .contact Form */}
              </div>
            </div>
          </div>
        </div>
        {/* End modal box news */}
      </Modal>
      {/* End  Modal for Blog-1 */}

      {/* Start Modal for Blog-2 */}
      <Modal
        isOpen={isOpen2}
        onRequestClose={toggleModalTwo}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div>
          <button className="close-modal" onClick={toggleModalTwo}>
            <img src="/img/cancel.svg" alt="close icon" />
          </button>
          {/* End close icon */}

          <div className="box_inner">
            <div className="scrollable">
              <div className="blog-grid">
                <div className="blog-img">
                  <img src="img/blog/blog-2.jpg" alt="blog post"></img>
                </div>
                {/* End blog-img */}
                <article className="article">
                  <div className="article-title">
                    <h2>
                      Ten Mind-Blowing Reasons Why Design Is Using This
                      Technique For Exposure.
                    </h2>
                    <div className="media">
                      <div className="avatar">
                        <img src="img/testimonial/team-2.jpg" alt="thumbnail" />
                      </div>
                      <div className="media-body">
                        <label>BY SMITH</label>
                        <span>05 JAN 2020</span>
                      </div>
                    </div>
                  </div>
                  {/* End .article-title */}

                  <div className="article-content">
                    <p>
                      Aenean eleifend ante maecenas pulvinar montes lorem et
                      pede dis dolor pretium donec dictum. Vici consequat justo
                      enim. Venenatis eget adipiscing luctus lorem. Adipiscing
                      veni amet luctus enim sem libero tellus viverra venenatis
                      aliquam. Commodo natoque quam pulvinar elit.
                    </p>
                    <p>
                      Eget aenean tellus venenatis. Donec odio tempus. Felis
                      arcu pretium metus nullam quam aenean sociis quis sem
                      neque vici libero. Venenatis nullam fringilla pretium
                      magnis aliquam nunc vulputate integer augue ultricies
                      cras. Eget viverra feugiat cras ut. Sit natoque montes
                      tempus ligula eget vitae pede rhoncus maecenas
                      consectetuer commodo condimentum aenean.
                    </p>
                    <h4>What are my payment options?</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <blockquote>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam.
                      </p>
                      <p className="blockquote-footer">
                        Someone famous in{" "}
                        <cite title="Source Title">Dick Grayson</cite>
                      </p>
                    </blockquote>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                  </div>
                  {/* End article content */}
                  <ul className="nav tag-cloud">
                    <li href="#">Design</li>
                    <li href="#">Development</li>
                    <li href="#">Travel</li>
                    <li href="#">Web Design</li>
                    <li href="#">Marketing</li>
                    <li href="#">Research</li>
                    <li href="#">Managment</li>
                  </ul>
                  {/* End tag */}
                </article>
                {/* End Article */}

                <div className="contact-form article-comment">
                  
                  <Contact />
                </div>
                {/* End .contact Form */}
              </div>
            </div>
          </div>
        </div>
        {/* End modal box news */}
      </Modal>
      {/* End  Modal for Blog-2 */}

      {/* Start Modal for Blog-3 */}
      <Modal
        isOpen={isOpen3}
        onRequestClose={toggleModalThree}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div>
          <button className="close-modal" onClick={toggleModalThree}>
            <img src="/img/cancel.svg" alt="close icon" />
          </button>
          {/* End close icon */}

          <div className="box_inner">
            <div className="scrollable">
              <div className="blog-grid">
                <div className="blog-img">
                  <img src="img/blog/blog-3.jpg" alt="blog post"></img>
                </div>
                {/* End blog-img */}
                <article className="article">
                  <div className="article-title">
                    <h2>
                      I Will Tell You The Truth About Design In The Next 60
                      Seconds.
                    </h2>
                    <div className="media">
                      <div className="avatar">
                        <img src="img/testimonial/team-3.jpg" alt="thumbnail" />
                      </div>
                      <div className="media-body">
                        <label>BY RIO</label>
                        <span>12 AUG 2020</span>
                      </div>
                    </div>
                  </div>
                  {/* End .article-title */}

                  <div className="article-content">
                    <p>
                      Aenean eleifend ante maecenas pulvinar montes lorem et
                      pede dis dolor pretium donec dictum. Vici consequat justo
                      enim. Venenatis eget adipiscing luctus lorem. Adipiscing
                      veni amet luctus enim sem libero tellus viverra venenatis
                      aliquam. Commodo natoque quam pulvinar elit.
                    </p>
                    <p>
                      Eget aenean tellus venenatis. Donec odio tempus. Felis
                      arcu pretium metus nullam quam aenean sociis quis sem
                      neque vici libero. Venenatis nullam fringilla pretium
                      magnis aliquam nunc vulputate integer augue ultricies
                      cras. Eget viverra feugiat cras ut. Sit natoque montes
                      tempus ligula eget vitae pede rhoncus maecenas
                      consectetuer commodo condimentum aenean.
                    </p>
                    <h4>What are my payment options?</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <blockquote>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam.
                      </p>
                      <p className="blockquote-footer">
                        Someone famous in{" "}
                        <cite title="Source Title">Dick Grayson</cite>
                      </p>
                    </blockquote>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                  </div>
                  {/* End article content */}
                  <ul className="nav tag-cloud">
                    <li href="#">Design</li>
                    <li href="#">Development</li>
                    <li href="#">Travel</li>
                    <li href="#">Web Design</li>
                    <li href="#">Marketing</li>
                    <li href="#">Research</li>
                    <li href="#">Managment</li>
                  </ul>
                  {/* End tag */}
                </article>
                {/* End Article */}

                <div className="contact-form article-comment">
                  
                  <Contact />
                </div>
                {/* End .contact Form */}
              </div>
            </div>
          </div>
        </div>
        {/* End modal box news */}
      </Modal>
      {/* End  Modal for Blog-3 */}

      {/* Start Modal for Blog-4 */}
      <Modal
        isOpen={isOpen4}
        onRequestClose={toggleModalFour}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div>
          <button className="close-modal" onClick={toggleModalFour}>
            <img src="/img/cancel.svg" alt="close icon" />
          </button>
          {/* End close icon */}

          <div className="box_inner">
            <div className="scrollable">
              <div className="blog-grid">
                <div className="blog-img">
                  <img src="img/blog/blog-1.jpg" alt="blog post"></img>
                </div>
                {/* End blog-img */}
                <article className="article">
                  <div className="article-title">
                    <h2>
                      They Now Bade Farewell To The Kind But Unseen People
                    </h2>
                    <div className="media">
                      <div className="avatar">
                        <img src="img/testimonial/team-4.jpg" alt="thumbnail" />
                      </div>
                      <div className="media-body">
                        <label>BY SVEIL</label>
                        <span>22 JAN 2020</span>
                      </div>
                    </div>
                  </div>
                  {/* End .article-title */}

                  <div className="article-content">
                    <p>
                      Aenean eleifend ante maecenas pulvinar montes lorem et
                      pede dis dolor pretium donec dictum. Vici consequat justo
                      enim. Venenatis eget adipiscing luctus lorem. Adipiscing
                      veni amet luctus enim sem libero tellus viverra venenatis
                      aliquam. Commodo natoque quam pulvinar elit.
                    </p>
                    <p>
                      Eget aenean tellus venenatis. Donec odio tempus. Felis
                      arcu pretium metus nullam quam aenean sociis quis sem
                      neque vici libero. Venenatis nullam fringilla pretium
                      magnis aliquam nunc vulputate integer augue ultricies
                      cras. Eget viverra feugiat cras ut. Sit natoque montes
                      tempus ligula eget vitae pede rhoncus maecenas
                      consectetuer commodo condimentum aenean.
                    </p>
                    <h4>What are my payment options?</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <blockquote>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam.
                      </p>
                      <p className="blockquote-footer">
                        Someone famous in{" "}
                        <cite title="Source Title">Dick Grayson</cite>
                      </p>
                    </blockquote>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                  </div>
                  {/* End article content */}
                  <ul className="nav tag-cloud">
                    <li href="#">Design</li>
                    <li href="#">Development</li>
                    <li href="#">Travel</li>
                    <li href="#">Web Design</li>
                    <li href="#">Marketing</li>
                    <li href="#">Research</li>
                    <li href="#">Managment</li>
                  </ul>
                  {/* End tag */}
                </article>
                {/* End Article */}

                <div className="contact-form article-comment">
                  
                  <Contact />
                </div>
                {/* End .contact Form */}
              </div>
            </div>
          </div>
        </div>
        {/* End modal box news */}
      </Modal>
      {/* End  Modal for Blog-4 */}
    </>
  );
};

export default News;
