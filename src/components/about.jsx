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

  const professionalInfo = `An athlete turned salesman who was ready for a change. I always had a love for technology but never knew how to take the leap.
    Before Covid I held various jobs as a salesman and Customer Service Rep. Although I enjoyed it, I knew it was not the right career path for me.
    When everything shut down I decided it was time to takre control make the jump. In January 2021 I enrolled in LSU's Online Coding Bootcamp Powered By Fullstack Academy.
    I endured the stress and my passion for coding grew by the day. During the program I had the opportunity to learn from great instructors and was able to gain experience
    in group environments. While I was able to thrive in this program I would be lying if I said it was not difficult. It was. But, after completing that last project and
    Graduating in July of 2021, I knew I was prepared to take on the World with my newfound love of coding and skills I had learned.
    `;

  return (
    <div className="about-info-container">
      <img className="aboutimg" src={signature} alt="Signature" />
      <div className="contact-info">
        <p>
          Tel: <b>1-602-516-9519</b>
        </p>
        <p>
          Email: <b>jefferyhauckjr@gmail.com</b>
        </p>
      </div>
      <div className="quote">
        <h1 className="quote-text">
          “Try not to become a man of success, but rather become a man of
          value.” – Albert Einstein.
        </h1>
      </div>
      <div className="skills-container">
        <div className="skills-group">
          <p className="p1" style={{ fontSize: "24px" }}>
            Languages
          </p>
          <ul>
            <li>JavaScript</li>
            <li>Python</li>
            {/* Add more languages */}
          </ul>
        </div>
        <div className="skills-group">
          <p className="p1" style={{ fontSize: "24px" }}>
            Libraries
          </p>
          <ul>
            <li>React.js</li>
            <li>Node.js</li>
            {/* Add more libraries */}
          </ul>
        </div>
        <div className="skills-group">
          <p className="p1" style={{ fontSize: "24px" }}>
            Services
          </p>
          <ul>
            <li>Git</li>
            <li>Heroku</li>
            {/* Add more services */}
          </ul>
        </div>
      </div>
      <div className="about-container">
        <div className="info-section">{aboutInfo}</div>
        <div className="info-section">{professionalInfo}</div>
      </div>
    </div>
  );
};

export default AboutInfo;
