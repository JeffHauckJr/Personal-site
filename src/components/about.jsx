import React from "react";
import "./about.css";
import superDome from "./img/superdome-at-night.jpg";
import headshot from "./img/Headshot.jpeg";
import signature from "./img/signature.png";

const AboutInfo = () => {
  const aboutInfo = `
    Athlete, Scholar, Leader, and many others. Most days I spend my time working on personal coding projects, developing apps and learning new algorithms.
     I also cruise the web keeping up with all the new tech news so that I can always stay fresh and up to date on the constant changes of the tech world. 
     I'll also play the occasional game of pickup baseball to get out the house. Having a good work/life balance is crucial in preventing burnout.
    `;

  const professionalInfo = `An athlete turned salesman who was ready for a change. I Always had a love for technology but never knew how to take the leap.
    Before Covid I held various jobs as a salesman and Customer Service Rep. Although I enjoyed it, I knew it was not the right career path for me.
    When everything shut down I decided it was time ti tak control make the jump. In January 2021 I enrolled in LSU's Online Coding Bootcamp Powered By Fullstack Academy.
    I endured the stress and my passion for coding grew by the day. During the program I had the opportunity to learn from Great Instructors and was able to gain experience
    in group environments. While I was able to Thrive in this program I would be lying if I said it was not stressful. It was. But, after completing that last project and
    Graduating in July of 2021, I knew I was prepared to take on the World with my newfound love of coding and skills I had learned.
    `;

  return (
    <>
      <img
        src={signature}
        alt=""
        style={{ width: "300px", marginTop: "10%" }}
      ></img>
      <div className="header-container">
        <h1 className="about-header">
          “Try not to become a man of success, but rather become a man of
          value.” – Albert Einstein.
        </h1>
      </div>
      <div className="about-container">
        <div className="about-info-container">
          <img
            className="img1"
            src={superDome}
            alt=""
            style={{ height: "500px", width: "400px" }}
          ></img>
          <div
            className="about-info-text"
            style={{
              width: "600px",
              height: "500px",
              border: "black, solid, 1px",
            }}
          >
            <h1 style={{ color: "beige" }}>About Jeff Hauck</h1>
            <p className="p1">{aboutInfo}</p>
          </div>
        </div>
        <div className="pro-info-container" style={{ marginTop: "10%" }}>
          <img
            className="img1"
            src={headshot}
            alt=""
            style={{ height: "500px", width: "400px" }}
          ></img>
          <div
            className="pro-info-text"
            style={{ width: "600px", height: "500px" }}
          >
            <h1 style={{ color: "beige" }}>Professional Bio</h1>
            <p className="p1">{professionalInfo}</p>
          </div>
        </div>
        <h1
          style={{
            color: "beige",
            fontSize: "50px",
            paddingTop: "15%",
            paddingBottom: "3%",
          }}
        >
          Technical Skills
        </h1>
        <div className="skills-container">
          <div>
            <p className="p1" style={{ fontSize: "50px" }}>
              Languages
            </p>
            <ul>
              <li>JavaScript</li>
              <li>PostgreSQL</li>
              <li>SQL</li>
              <li>HTML5</li>
              <li>CSS</li>
            </ul>
          </div>
          <div>
            <p className="p1" style={{ fontSize: "50px" }}>
              Libraries
            </p>
            <ul>
              <li>React.js</li>
              <li>jQuery</li>
              <li>Node.js</li>
              <li>Express</li>
            </ul>
          </div>
          <div>
            <p className="p1" style={{ fontSize: "50px" }}>
              Services
            </p>
            <ul>
              <li>Git</li>
              <li>Heroku</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutInfo;
