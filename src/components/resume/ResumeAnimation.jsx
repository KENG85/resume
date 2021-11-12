import React from "react";
import Skills from "../skills/Skills";

const resumeContent = [
  {
    jobPosition: `Human Perfomrance Engineer`,
    jobType: `In-Person`,
    jobDuration: `Aug 2008 - Present`,
    timeDuraton: `Full Time`,
    compnayName: "Engard Athletics, LLC",
    jobDescription: `Created a systems-based approach to design, 
    develop, implement and evaluate player performance.  This system uses causal analysis 
    to reduce/eliminate barriers to change and makes a continuous effort to produce stable 
    and predictable results over time.`,
  },
  {
    jobPosition: `Adjunct Faculty`,
    jobType: `In-Person | Remote`,
    jobDuration: `Jan 2010 - May 2021`,
    timeDuraton: `Part Time`,
    compnayName: "Maricopa Community Colleges",
    jobDescription: `Facilitated class instruction and student evaluation of 100 & 200 level college courses.  
    Developed and managed syllabus materials, compiled assignments, instructed online discussion exercises, and 
    lead hands-on labs relative to standardized learning objectives.
    | EXS132 - Principles of Cardiovascular Fitness
    | EXS216 - Principles of Strength Training
    | EXS218 - Advanced Cardiovascular Fitness
    | EXS250 - Applied Kinesiology
    | HES210 - Cultural Aspects of Health and Illness
    | EXS130 - Principles of Strength & Fitness 
    | PED101, 102 & 201WT - Strength Training For Athletes
    | PE014 - Anatomy For Yoga Instructors`,
    delayAnimation: "100",
  },
  {
    jobPosition: `Performance Specialist`,
    jobType: `In-Person`,
    jobDuration: `Oct 2010 - May 2021`,
    timeDuraton: `Full Time`,
    compnayName: `Alliance of American Football`,
    jobDescription: ` Lead strength, conditioning and injury prevention 
    training for over 54 professional athletes.   
    Managed player performance and analytics. 
    Collaborated with medical staff to improve return-to-play protocol. 
    Responsible for creating and maintaining wellness data, load monitoring and official training prescription.`,
    delayAnimation: "200",
  },
  {
    jobPosition: `Performance Specialist`,
    jobType: `In-Person`,
    jobDuration: `Oct 2010 - May 2021`,
    timeDuraton: `Full Time`,
    compnayName: `Maricopa Community Colleges`,
    jobDescription: `Managed player performance and analytics for over 300+ college athletes. 
    Developed comprehensive, position-specific annual plans, including rehabilitation and nutrition programs for 
    football athletes at Scottsdale CC.
    Lead and manage training for 72-100+ college football athletes each year.
    Developed a comprehensive training manual with 5 distinct position-specific annual plans. 
    Played an integral part in performance of the 2013 Conference and Bowl Championships.
    Significantly decreased non-contact injury rate and specifically reduced number of ACL injuries.`,
    delayAnimation: "300",
  },
];

const educatonContent = [
  {
    passingYear: "Current Applicant",
    degreeTitle: "Ph.D Human Systems Engineering",
    instituteName: "Arizona State University",
  },
  {
    passingYear: "2012 - 2013",
    degreeTitle: "MSc. in Kinesiology",
    instituteName: "A.T. Still University",
  },
  {
    passingYear: "2004 - 2007",
    degreeTitle: "BSc. Biology/Pre-Med, Minor in Chemistry",
    instituteName: "New Mexico Highlands University",
  },
];

const Resume = () => {
  return (
    <>
      <section id="resume" className="section">
        <div className="container">
          <div className="title">
            <h3>Experience.</h3>
          </div>
          {/* End title */}
          <div className="resume-box">
            {resumeContent.map((val, i) => (
              <div
                className="resume-row"
                key={i}
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay={val.delayAnimation}
              >
                <div className="row">
                  <div className="col-md-4 col-xl-3">
                    <div className="rb-left">
                      <h6>{val.jobPosition}</h6>
                      <label>{val.jobType}</label>
                      <p>{val.jobDuration}</p>
                      <div className="rb-time">{val.timeDuraton}</div>
                    </div>
                  </div>
                  <div className="col-md-8 col-xl-9">
                    <div className="rb-right">
                      <h6>{val.compnayName}</h6>
                      <p>{val.jobDescription}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
            <h3>Education & Skills</h3>{" "}
          </div>

          <div className="row align-items-center">
            <div
              className="col-lg-4 m-15px-tb"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <ul className="aducation-box">
                {educatonContent.map((val, i) => (
                  <li key={i}>
                    <span>{val.passingYear}</span>
                    <h6>{val.degreeTitle} </h6>
                    <p>{val.instituteName}</p>{" "}
                  </li>
                ))}
              </ul>
            </div>
            {/* End .col */}

            <div
              className="col-lg-7 ml-auto m-15px-tb"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <Skills />
            </div>
            {/* End .col */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;
