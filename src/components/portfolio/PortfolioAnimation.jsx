import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";
import { FiLink } from "react-icons/fi";
import Masonry from "react-masonry-css";

const breakpointColumnsObj = {
  default: 3,
  1100: 3,
  700: 2,
  500: 1,
};

const tabList = ["All", "Web Applications", "DataViz", "ML Projects", "Legacy Projects"];
const AllPortfolioContent = [
  {
    img: "web-app",
    title: "Bottle Illustration",
    subTitle: "Figma Shoot",
    alterText: "Bottle Illustration",
    delayAnimation: "",
    portfolioLink:
      "https://dribbble.com/shots/16529339-Beny-Personal-Portfolio-React-Template",
  },
  {
    img: "web-app",
    title: "Wordpress Dashboard",
    subTitle: "Real-Time Athlete Readiness & Power Trends",
    alterText: "DataViz",
    delayAnimation: "",
    portfolioLink:
      "https://analytics.engardathletics.com/index.php/capstone-demo/",
  },
  {
    img: "web-app",
    title: "Tableau",
    subTitle: "Citibike Storyboard",
    alterText: "DataViz",
    delayAnimation: "100",
    portfolioLink:
      "https://public.tableau.com/shared/S4R2NS2MJ?:display_count=n&:origin=viz_share_link",
  },
  {
    img: "web-app",
    title: "HTML Reporting Dashboard",
    subTitle: "Dashboard",
    alterText: "map",
    delayAnimation: "300",
    portfolioLink:
      "https://keng85.github.io/team-dashboard/",
  },
  {
    img: "web-app",
    title: "Web scrape: Total College Games Per Player",
    subTitle: "2006 Data Webscrape",
    alterText: "DataViz",
    delayAnimation: "200",
    portfolioLink:
      "https://public.tableau.com/views/College_15940833178270/GamesPerPlayer?:language=en-US&:display_count=n&:origin=viz_share_link",
  },
  {
    img: "web-app",
    title: "Web Application",
    subTitle: "Behance Shot",
    alterText: "Web Application",
    delayAnimation: "200",
    portfolioLink:
      "https://dribbble.com/shots/16529226-Krozo-Personal-Portfolio-React-Template",
  },
  {
    img: "web-app",
    title: "Learning Management System",
    subTitle: "Engard Academy",
    alterText: "DataViz",
    delayAnimation: "300",
    portfolioLink:
      "https://engardacademy.com/",
  },
  {
    img: "web-app",
    title: "Chatting App Design",
    subTitle: "Codecanyon Market",
    alterText: "Chatting App Design",
    delayAnimation: "100",
    portfolioLink:
      "https://www.behance.net/gallery/128278341/Imroz-Vue-JS-Creative-Agency-Portfolio-Template",
  },
  {
    img: "web-app",
    title: "Web Motion",
    subTitle: "Behance Shot",
    alterText: "Web Motion",
    delayAnimation: "200",
    portfolioLink: "https://www.facebook.com/ibthemes",
  },
];

const WebAppPortfolioContent = [
  {
    img: "dashboard",
    title: "Realtime Wordpress Dashboard",
    subTitle: "Real-Time Athlete Readiness & Power Trends",
    alterText: "DataViz",
    delayAnimation: "",
    portfolioLink:
      "https://analytics.engardathletics.com/index.php/capstone-demo/",
  },
  {
    img: "engacademy2",
    title: "Wordpress Learning Management System",
    subTitle: "Engard Academy",
    alterText: "Webdev",
    delayAnimation: "300",
    portfolioLink:
      "https://engardacademy.com/",
  },
  {
    img: "m-portfolio-8",
    title: "Wellness Survey Chatbot",
    subTitle: "Rasa & NLP",
    alterText: "Wellness Chatbot",
    delayAnimation: "200",
    portfolioLink:
      "#",
  },
  {
    img: "teamreport",
    title: "HTML Reporting Dashboard",
    subTitle: "Dashboard",
    alterText: "map",
    delayAnimation: "300",
    portfolioLink:
      "https://keng85.github.io/team-dashboard/",
  },
];
const DataVizPortfolioContent = [
  {
    img: "collegewebscrape",
    title: "Web scrape: Total College Games Per Player",
    subTitle: "2006 Data Webscrape",
    alterText: "DataViz",
    delayAnimation: "200",
    portfolioLink:
      "https://public.tableau.com/views/College_15940833178270/GamesPerPlayer?:language=en-US&:display_count=n&:origin=viz_share_link",
  },

  {
    img: "citibike",
    title: "Tableau",
    subTitle: "Citibike Storyboard",
    alterText: "DataViz",
    delayAnimation: "100",
    portfolioLink:
      "https://public.tableau.com/shared/S4R2NS2MJ?:display_count=n&:origin=viz_share_link",
  },
  {
    img: "m-portfolio-6",
    title: "Web Application",
    subTitle: "Behance Shot",
    alterText: "Web Application",
    delayAnimation: "200",
    portfolioLink:
      "https://dribbble.com/shots/16529226-Krozo-Personal-Portfolio-React-Template",
  },
];

const MLOpsPortfolioContent = [
  {
    img: "m-portfolio-1",
    title: "Bottle Illustration",
    subTitle: "Figma Shoot",
    alterText: "Bottle Illustration",
    delayAnimation: "",
    portfolioLink:
      "https://dribbble.com/shots/16529339-Beny-Personal-Portfolio-React-Template",
  },
  {
    img: "m-portfolio-7",
    title: "Business Card",
    subTitle: "Graphicriver Market",
    alterText: "Business Card",
    delayAnimation: "100",
    portfolioLink:
      "https://dribbble.com/shots/16529282-Shane-Personal-Portfolio-React-Template",
  },
  {
    img: "m-portfolio-9",
    title: "Web Motion",
    subTitle: "Behance Shot",
    alterText: "Web Motion",
    delayAnimation: "200",
    portfolioLink: "https://www.facebook.com/ibthemes",
  },
];

const LegacyPortfolioContent = [
  {
    img: "m-portfolio-2",
    title: "Foot Posture Index",
    subTitle: "Computer Vision",
    alterText: "FPI Project",
    delayAnimation: "",
    portfolioLink:
      "#",
  },
  {
    img: "m-portfolio-5",
    title: "Injury Risk Analysis",
    subTitle: "Random Forest Classifiers",
    alterText: "Movement Analysis",
    delayAnimation: "100",
    portfolioLink:
      "#",
  },

  {
    img: "m-portfolio-9",
    title: "Posture Screen",
    subTitle: "EDA & Postural Adaptations",
    alterText: "EDA",
    delayAnimation: "200",
    portfolioLink:
      "https://public.tableau.com/views/College_15940833178270/GamesPerPlayer?:language=en-US&:display_count=n&:origin=viz_share_link",
  },
];

const PortfolioAnimation = () => {
  return (
    <SimpleReactLightbox>
      <div className="portfolio-filter-01">
        <Tabs>
          <TabList className="filter d-flex flex-wrap justify-content-start">
            {tabList.map((val, i) => (
              <Tab key={i}>{val}</Tab>
            ))}
          </TabList>
          {/* End tablist */}

          <SRLWrapper>
            <TabPanel>
              <div className="portfolio-content ">
                <Masonry
                  breakpointCols={breakpointColumnsObj}
                  className="my-masonry-grid"
                  columnClassName="my-masonry-grid_column"
                >
                  {AllPortfolioContent.map((val, i) => (
                    <div
                      className="portfolio-box-01"
                      key={i}
                      data-aos="fade-right"
                      data-aos-duration="1200"
                      data-aos-delay={val.delayAnimation}
                    >
                      <div className="portfolio-img">
                        <div className="portfolio-info">
                          <h5>
                            <a href={val.portfolioLink} target="_blank">
                              {val.title}
                            </a>
                          </h5>
                          <span>{val.subTitle}</span>
                        </div>
                        {/* End .portfolio-info */}
                        <a
                          href={`img/portfolio/${val.img}.jpg`}
                          className="gallery-link"
                        >
                          <img
                            src={`img/portfolio/${val.img}.jpg`}
                            alt={val.alterText}
                          />
                        </a>
                        {/* End gallery link */}

                        <a
                          className="portfolio-icon"
                          href={val.portfolioLink}
                          target="_blank"
                        >
                          <FiLink />
                        </a>
                        {/* End .portfolio-icon */}
                      </div>
                    </div>
                  ))}
                </Masonry>
              </div>
              {/* End list wrapper */}
            </TabPanel>

            <TabPanel>
              <div className="portfolio-content">
                <Masonry
                  breakpointCols={breakpointColumnsObj}
                  className="my-masonry-grid"
                  columnClassName="my-masonry-grid_column"
                >
                  {WebAppPortfolioContent.map((val, i) => (
                    <div
                      className="portfolio-box-01"
                      key={i}
                      data-aos="fade-right"
                      data-aos-duration="1200"
                      data-aos-delay={val.delayAnimation}
                    >
                      <div className="portfolio-img">
                        <div className="portfolio-info">
                          <h5>
                            <a href={val.portfolioLink} target="_blank">
                              {val.title}
                            </a>
                          </h5>
                          <span>{val.subTitle}</span>
                        </div>
                        {/* End .portfolio-info */}
                        <a
                          href={`img/portfolio/${val.img}.jpg`}
                          className="gallery-link"
                        >
                          <img
                            src={`img/portfolio/${val.img}.jpg`}
                            alt={val.alterText}
                          />
                        </a>
                        {/* End gallery link */}

                        <a
                          className="portfolio-icon"
                          href={val.portfolioLink}
                          target="_blank"
                        >
                          <FiLink />
                        </a>
                        {/* End .portfolio-icon */}
                      </div>
                    </div>
                  ))}
                </Masonry>
                {/* grid item  */}
              </div>

              {/* End list wrapper */}
            </TabPanel>

            <TabPanel>
              <div className="portfolio-content">
                <Masonry
                  breakpointCols={breakpointColumnsObj}
                  className="my-masonry-grid"
                  columnClassName="my-masonry-grid_column"
                >
                  {DataVizPortfolioContent.map((val, i) => (
                    <div
                      className="portfolio-box-01"
                      key={i}
                      data-aos="fade-right"
                      data-aos-duration="1200"
                      data-aos-delay={val.delayAnimation}
                    >
                      <div className="portfolio-img">
                        <div className="portfolio-info">
                          <h5>
                            <a href={val.portfolioLink} target="_blank">
                              {val.title}
                            </a>
                          </h5>
                          <span>{val.subTitle}</span>
                        </div>
                        {/* End .portfolio-info */}
                        <a
                          href={`img/portfolio/${val.img}.jpg`}
                          className="gallery-link"
                        >
                          <img
                            src={`img/portfolio/${val.img}.jpg`}
                            alt={val.alterText}
                          />
                        </a>
                        {/* End gallery link */}

                        <a
                          className="portfolio-icon"
                          href={val.portfolioLink}
                          target="_blank"
                        >
                          <FiLink />
                        </a>
                        {/* End .portfolio-icon */}
                      </div>
                    </div>
                  ))}
                </Masonry>
              </div>
              {/* End list wrapper */}
            </TabPanel>

            <TabPanel>
              <div className="portfolio-content">
                <Masonry
                  breakpointCols={breakpointColumnsObj}
                  className="my-masonry-grid"
                  columnClassName="my-masonry-grid_column"
                >
                  {MLOpsPortfolioContent.map((val, i) => (
                    <div
                      className="portfolio-box-01"
                      key={i}
                      data-aos="fade-right"
                      data-aos-duration="1200"
                      data-aos-delay={val.delayAnimation}
                    >
                      <div className="portfolio-img">
                        <div className="portfolio-info">
                          <h5>
                            <a href={val.portfolioLink} target="_blank">
                              {val.title}
                            </a>
                          </h5>
                          <span>{val.subTitle}</span>
                        </div>
                        {/* End .portfolio-info */}
                        <a
                          href={`img/portfolio/${val.img}.jpg`}
                          className="gallery-link"
                        >
                          <img
                            src={`img/portfolio/${val.img}.jpg`}
                            alt={val.alterText}
                          />
                        </a>
                        {/* End gallery link */}

                        <a
                          className="portfolio-icon"
                          href={val.portfolioLink}
                          target="_blank"
                        >
                          <FiLink />
                        </a>
                        {/* End .portfolio-icon */}
                      </div>
                    </div>
                  ))}
                </Masonry>
              </div>
              {/* End list wrapper */}
            </TabPanel>

            <TabPanel>
              <div className="portfolio-content ">
                <Masonry
                  breakpointCols={breakpointColumnsObj}
                  className="my-masonry-grid"
                  columnClassName="my-masonry-grid_column"
                >
                  {LegacyPortfolioContent.map((val, i) => (
                    <div
                      className="portfolio-box-01"
                      key={i}
                      data-aos="fade-right"
                      data-aos-duration="1200"
                      data-aos-delay={val.delayAnimation}
                    >
                      <div className="portfolio-img">
                        <div className="portfolio-info">
                          <h5>
                            <a href={val.portfolioLink} target="_blank">
                              {val.title}
                            </a>
                          </h5>
                          <span>{val.subTitle}</span>
                        </div>
                        {/* End .portfolio-info */}
                        <a
                          href={`img/portfolio/${val.img}.jpg`}
                          className="gallery-link"
                        >
                          <img
                            src={`img/portfolio/${val.img}.jpg`}
                            alt={val.alterText}
                          />
                        </a>
                        {/* End gallery link */}

                        <a
                          className="portfolio-icon"
                          href={val.portfolioLink}
                          target="_blank"
                        >
                          <FiLink />
                        </a>
                        {/* End .portfolio-icon */}
                      </div>
                    </div>
                  ))}
                </Masonry>
              </div>
              {/* End list wrapper */}
            </TabPanel>
          </SRLWrapper>
          {/* End tabpanel */}
        </Tabs>
      </div>
    </SimpleReactLightbox>
  );
};

export default PortfolioAnimation;
