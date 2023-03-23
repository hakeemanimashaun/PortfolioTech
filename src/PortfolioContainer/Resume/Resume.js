import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  //here we have
  const programmingSkillsDetails = [
    { skill: "XML", ratingPercentage: 90 },
    { skill: "Kotlin", ratingPercentage: 80 },
    { skill: "JavaScript", ratingPercentage: 90 },
    { skill: "TypeScript", ratingPercentage: 90 },
    { skill: "React Native", ratingPercentage: 85 },
    { skill: "Android Native", ratingPercentage: 75 },
    { skill: "React-js", ratingPercentage: 70 },
    { skill: "Git/Github", ratingPercentage: 85 },
    { skill: "Java for android", ratingPercentage: 60 },
    { skill: "CSS", ratingPercentage: 75 },
    { skill: "HTML", ratingPercentage: 95 },
  ];

  const projectsDetails = [
    {
      title: "Stanbic IBTC Mobile app",
      duration: { fromDate: "2022", toDate: "2023" },
      description:
        "Banking application with 6 modules that can be easily seperated into diffrent standalone applications",
      subHeading: "React-native",
    },
    {
      title: "Alladin Digital",
      duration: { fromDate: "2021", toDate: "2022" },
      description:
        "A marketplace for businesses that provides banking services and a trade mediation for customers and businesses, also provides loans for users",
      subHeading: "Technology: , React Native, , Typescript",
    },
    {
      title: "MobilFind",
      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "helps usesrs locate thier loved ones using thier phone number to provide thier realtime location.",
      subHeading: "Technology: Android studio, Kotlin,",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"University of Lagos, Akoka, Lagos"}
        subHeading={
          "BACHELOR OF SCIENCE METALURGICAL AND MATERIALS ENGINEERING"
        }
        fromDate={"2013"}
        toDate={"2019"}
      />

      <ResumeHeading
        heading={"National Youth Service Corps"}
        subHeading={"Anof Consulting  Shangisa Magodo"}
        fromDate={"2019"}
        toDate={"2020"}
      />
      <ResumeHeading
        heading={"NIIT"}
        subHeading={"National Institute for Information Technology"}
        fromDate={"2009"}
        toDate={"2012"}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"Standard Bank (Stanbic IBTC)"}
          subHeading={"Mobile Developer"}
          fromDate={"August-2022"}
          toDate={"February 2023"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            1. Lead the mobile team by tracking deliveries, assigning tasks to team
            members and Interacting with product managers and business
            stakeholders to ascertain needs and properly interpret them in the
            project.
          </span>
          <br />
          <span className="resume-description-text">
            2. Implemented the ease banking kodule and its functionalities
          </span>
          <br />
          <span className="resume-description-text">
            3. Contributed to other app modules within the mobile application like
            banking, pensions and insurance{" "}
          </span>
          <br />
          <span className="resume-description-text">
            4. Demonstrated ability to manage multiple tasks while remaining
            adaptable and flexible. Responded quickly to meet customer needs and
            resolve problems.
          </span>
          <br />
          <span className="resume-description-text">
            5. Conducted staff meetings to relay general information or to address
            specific topics
          </span>
          <br />
          <span className="resume-description-text">
            6. Tested software for bugs and operating speed, fixing bugs and
            documenting processes. Experience writing unit and integration test.
          </span>
          <br />
        </div>
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Learning"
        description="Continually trying to gather new information and improve my skills and well as general personal growth."
      />
      <ResumeHeading
        heading="Music"
        description="I love to listen and sometimes write music, it helps me relax and easy helps me focus too. music helps me relieve stress."
      />
      <ResumeHeading
        heading="Football"
        description="I like to play footbal when ever i get the time, often during weekends, also like table tennis and video games."
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="➡️"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div className="resume-container screen-container " id={props.id || ""}>
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
