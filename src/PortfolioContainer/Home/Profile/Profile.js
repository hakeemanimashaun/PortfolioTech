import React from "react";
import Typical from "react-typical";
import "./Profile.css";
import ScrollService from "../../../utilities/ScrollService";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile.details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.linkedin.com/in/hakeem-animashaun-b1600715a/">
                <i className="fa fa-linkedin-square "></i>
              </a>
              <a href="https://medium.com/@hakeem.animashaun">
                <i className="fa fa-medium "></i>
              </a>
              <a href="https://twitter.com/itshk_baby">
                <i className="fa fa-twitter-square "></i>
              </a>
              <a href="https://github.com/hakeemanimashaun?tab=repositories">
                <i className="fa fa-github-square "></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M{" "}
              <span className="highlighted-text">Hakeem Animashaun</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "React-Native Developer𝌔",
                    3000,
                    "Android Native Developer💻",
                    3000,
                    "Javascript|Typescript|Kotlin",
                    3000,
                    "Quality Assurance Engineer🌍",
                    3000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Building tech solutions present a dynamic opportunity to strech
                your mind
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button
              className="btn primary-btn"
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            >
              {""}
              Hire Me{" "}
            </button>

            <a href="Resume.pdf" download="HakeemAnimashaunResume.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
