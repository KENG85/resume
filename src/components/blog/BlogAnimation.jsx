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
                Random Forests, NLP and Athlete Monitoring: Capstone Project
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
              <div className="meta">BY - Kate</div>
              <h6>
                <a>
                  Using Random Forests to Classify Risk for ACL Injury
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
              <div className="meta">BY - Kate</div>
              <h6>
                <a>
                  U of A Coding Bootcamp Projects on GitHub
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
              <div className="meta">BY - Kate</div>
              <h6>
                <a>
                  Current Project: Rasa Chatbot for Athlete Monitoring
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
                    Capstone Project Demo
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
                   
                    <h4>Perceptual Experiences Add to Physical and Cognitive Load</h4>
                    <p>
                    My career as a strength and conditioning coach has culminated not in the metrics defined 
                    as speed or weight but in understanding the weight of life experiences as carried by 
                    each individual I worked with. 
                    </p>
                    <p>
                      Because of this, I begain utilizing sentiment analysis to more closely examine changes in mood. 
                      A demo project can been seen here: 
                      
                      <li>
                        <a href="https://analytics.engardathletics.com/index.php/capstone-demo/">https://analytics.engardathletics.com/index.php/capstone-demo/ </a>
                      </li>
                    </p>
                    <p>
                      NOTE: The sentiment analysis has been change to quotes to demonstrate the use case without using athlete
                      information. 
                    </p>
                    <blockquote>
                      <p>
                      Today, there’s seemingly insurmountable data coming off of every single player, 
                      every single day.  And still, we struggle to manage player load.  Why?
                      </p>
                      
                    </blockquote>
                    <p>
                      Athletes are human 1st, and like anyone, they go through human experiences.  Athetes carry a lot more stress than the average 
                      person, and from a very young age. Using sentiment analysis and NLP, I hope to gain a closer undersanding 
                      of the cognitive states the athlete goes through that affect performance. 
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
                  <img src="img/blog/2.jpg" alt="blog post"></img>
                </div>
                {/* End blog-img */}
                <article className="article">
                  <div className="article-title">
                    <h2>
                      Using Random Forest Classifiers to Identify ACL Risk
                    </h2>
                    <div className="media">
                      <div className="avatar">
                        <img src="img/about/626.png" alt="thumbnail" />
                      </div>
                      <div className="media-body">
                        <label>BY Kate</label>
                        <span>Random Forests</span>
                      </div>
                    </div>
                  </div>
                  {/* End .article-title */}

                  <div className="article-content">
                    <p>
                      In this demo project, 7 distinct assessments were conducted on athletes to identify posture and movement.
                      Random forest classifier was then use to identify biomechanical attributes (or deviations) that were 
                      most contributing to risk for knee valgus.  
                    </p>
                    <p>
                      Using feature importance to indentify attributes within stratified, position-specific groups, targeted
                      intervention strategies can be applied to position-specific workouts to reduce the risk of knee valgus
                      within the target population. 
                    </p>
                    <h4><a href="https://github.com/KENG85/colab_notebooks/blob/main/hs_football.ipynb"> -- View notebook example on GitHub </a></h4>
                    <p>
                      Coaches face the problem of training large groups and limited time with players.  Using random forests can 
                      provided targeted interventions that are specific to a position group as well as provide insights as to 
                      current posural adaptations or compensations that may arise within populations due to position-specific play.
                    </p>
                    <p>
                      <img src='/img/portfolio/random-forest-ACL.png' height='200'></img>
                    </p>
                    {/* 
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
                    */}
                  
                  </div>
                  {/* End article content */}
                  <ul className="nav tag-cloud">
                    <li href="#">Random Forests</li>
                    <li href="#">Machine Learning</li>
                    <li href="#">Stratification</li>
                    <li href="#">Injury Prevention</li>
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
                  <img src="img/blog/3.jpg" alt="blog post"></img>
                </div>
                {/* End blog-img */}
                <article className="article">
                  <div className="article-title">
                    <h2>
                    U of A Coding Bootcamp Projects on GitHub
                    </h2>
                    <div className="media">
                      <div className="avatar">
                        <img src="img/about/626.png" alt="thumbnail" />
                      </div>
                      <div className="media-body">
                        <label>BY Kate</label>
                        <span>Bootcamp Projects</span>
                      </div>
                    </div>
                  </div>
                  {/* End .article-title */}

                  <div className="article-content">
                    <p>
                      The following repositories were completed as part of assignments during the U of A Coding and Data Visualization Bootcamp.
                      These repositories demonstrate samples of basic compentencies within that skill set.
                    </p>
                    <h4><a href="https://github.com/KENG85/MatPlotLib/blob/master/pymaceuticals_KAE.ipynb">EDA with MatPlotLib</a></h4>
                    <p>
                      This exploratory data analysis examined the efficacy of various pharmaceutical treatments on tumor suppression in mice.  
                      EDA included summary statistics, IRQ ranges and graphical analysis using matplotlib. 
                    </p>
                    <ul className="nav tag-cloud">
                    <li href="#">MatPlotLib</li>
                    <li href="#">Pandas</li>
                    <li href="#">Statistics</li>
                    <li href="#">EDA</li>
                  </ul>
                  {/* End tag */}
                    <h4><a href="https://github.com/KENG85/leaflet-challenge/blob/master/index.html">Leaflet Challenge</a></h4>
                    <p>
                      Using leaflet to map location of earthquakes. 
                    </p>
                    <ul className="nav tag-cloud">
                    <li href="#">Leaflet</li>
                  </ul>
                  {/* End tag */}
                    <h4><a href="https://github.com/KENG85/SQL-Challenge">SQL Challenge</a></h4>
                    <p>
                      SQL Challenge 
                    </p>
                    <ul className="nav tag-cloud">
                    <li href="#">SQL</li>
                    <li href="#">postgreSQl</li>
                  </ul>
                  {/* End tag */}
                    <h4><a href="https://github.com/KENG85/API-challenge/blob/master/starter_code/WeatherPy.ipynb">API Challenge</a></h4>
                    <p>
                      Using weather API and Google Maps API we examined weather trends for various locations. 
                    </p>
                    <ul className="nav tag-cloud">
                    <li href="#">API</li>
                    <li href="#">OpenWeather</li>
                    
                  </ul>
                  {/* End tag */}
                    <h4><a href="https://github.com/KENG85/machine-learning-challenge">Machine Learning Challenge</a></h4>
                    <p>
                      The purpose of this assignment was to learn the use and application of three different ML models:
                      <li>KNN Model</li>
                      <li>Support Vector Classifier</li>
                      <li>Sequential Model</li>
                      &nbsp;
                      and compare the best use case to idenify planets in a dataset.
                    </p>
                  </div>
                  {/* End article content */}
                  <ul className="nav tag-cloud">
                    <li href="#">ML Models</li>
            
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
                  <img src="img/blog/4.jpg" alt="blog post"></img>
                </div>
                {/* End blog-img */}
                <article className="article">
                  <div className="article-title">
                    <h2>
                    Current Project: Rasa Chatbot for Athlete Monitoring
                    </h2>
                    <div className="media">
                      <div className="avatar">
                        <img src="img/about/626.png" alt="thumbnail" />
                      </div>
                      <div className="media-body">
                        <label>BY Kate</label>
                        <span>Rasa/Chatbot/NLP</span>
                      </div>
                    </div>
                  </div>
                  {/* End .article-title */}

                  <div className="article-content">
                    <p>
                      I'm currently beginning a Rasa/NLP project to convert current athlete wellness surveys to an interacive chatbot
                      that can not only collect the daily wellness data, but also provide immediate guidance to players 
                      based on the user interaction. 
                    </p>
                    
                    <h4>What is Rasa?</h4>
                    <p>
                    Rasa Open Source supplies the building blocks for creating virtual assistants. 
                    Use Rasa to automate human-to-computer interactions anywhere from websites to social media platforms.
                    </p>
                    <ul>
                      <li>
                        <em>Natural Language Understanding:</em> Convert raw text from user messages into structured data. 
                        Parse the user’s intent and extract important key details.
                      </li>
                      <li>
                        <em>Dialogue Management: </em> Machine learning-powered dialogue management decides what the 
                        assistant should do next, based on the user’s message and context from the conversation.
                      </li>
                      <li>
                        <em>Integrations:</em>Built-in integration points for over 10 messaging channels, 
                        plus endpoints to connect with databases, APIs, and other data sources.
                      </li>
                    </ul>
                    
                  </div>
                  {/* End article content */}
                  <ul className="nav tag-cloud">
                    <li href="#">Rasa</li>
                    <li href="#">NLP</li>
                    <li href="#">Chatbot</li>
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
