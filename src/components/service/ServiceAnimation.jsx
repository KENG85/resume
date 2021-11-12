import React from "react";

const ServiceContent = [
  {
    icon: "icon-target",
    title: "The (Hu)Man",
    descriptions: `Cultivating a 'Human 1st' culture of performance success.`,
    delayAnimation: "400",
  },
  {
    icon: "icon-desktop",
    title: "The Methods",
    descriptions: `Utilizing machine learning models to monitor, classify and 
    predict causal changes in perfomrance.`,
    delayAnimation: "200",
  },
  {
    icon: "icon-mobile",
    title: "The Machine",
    descriptions: `Committed to helping organizations drive success by 
    monitoring the complex socio-technical environment.`,
    delayAnimation: "",
  },
];
export default function Service() {
  return (
    <>
      <div className="row">
        {ServiceContent.map((val, i) => (
          <div
            className="col-md-6 col-lg-4 my-3"
            key={i}
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay={val.delayAnimation}
          >
            <div className="feature-box-01">
              <div className="icon">
                <i className={`icon ${val.icon}`}></i>
              </div>
              <div className="feature-content">
                <h5>{val.title}</h5>
                <p>{val.descriptions}</p>
              </div>
            </div>
            {/* End .feature-box-01 */}
          </div>
        ))}
      </div>
    </>
  );
}
