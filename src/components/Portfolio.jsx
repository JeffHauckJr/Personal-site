import "./portfolio.css";
import greatLinkImg from "./img/great-linkerator.PNG";
import snakeImg from "./img/snake.js-img.PNG";
import todoImg from "./img/to-do-img.PNG";
import artCollecterImg from "./img/art-collecter-img.PNG";
import dndBot from "./img/dnd-bot.PNG"
import nigelImg from "./img/nigel-bot.PNG"

const PortfolioInfo = () => {
  return (
    <>
      <div>
        <h1 style={{ color: "beige", fontSize: "50px ", marginBottom: "50px" }}>Projects</h1>
      </div>
      <div className="portfolio-container">
        <div>
          <article
            className="article-container"
          >
            <img
              className="img2"
              src={nigelImg}
              alt=""
              onClick={() => {
                window.open("https://github.com/JeffHauckJr/Nigel-discord-bot");
              }}
              style={{ width: "300px", height: "300px", borderRadius: "25%" }}
            ></img>
            <div className="article-text-container" style={{ width: "600px" }}>
              <h1
                style={{
                  fontFamily: "Lato",
                  color: "beige",
                  fontSize: "45px",
                  paddingBottom: "15px",
                }}
              >
                Nigel (Discord Bot)
              </h1>
              <p style={{ fontSize: "20px", color: "beige" }}>
                Nigel is a little something I put together to streamline information
                to Discord Channels. It was created using Node.js and the Discord.js
                library. Certain commands fetch data from specific api's to give the 
                user a better experience. Click Below to see the code written that makes 
                Nigel run.
              </p>
              <p style={{ fontSize: "20px", paddingTop: "20px" }}>
                GitHub Repo:
                <a
                  style={{ paddingLeft: "15px", textDecoration: "none" }}
                  href="https://github.com/JeffHauckJr/Nigel-discord-bot"
                  target="blank"
                >
                  Here
                </a>
              </p>
            </div>
          </article>
        </div>
        <div>
          <article
            className="article-container"
          >
            <img
              className="img2"
              src={dndBot}
              alt=""
              onClick={() => {
                window.open("https://github.com/JeffHauckJr/dnd-bot");
              }}
              style={{ width: "300px", height: "300px", borderRadius: "25%" }}
            ></img>
            <div className="article-text-container" style={{ width: "600px" }}>
              <h1
                style={{
                  fontFamily: "Lato",
                  color: "beige",
                  fontSize: "45px",
                  paddingBottom: "15px",
                }}
              >
                5th Edition Dungeons &#38; Dragons (Discord Bot)
              </h1>
              <p style={{ fontSize: "20px", color: "beige" }}>
                This bot is something I created to cut down alot of time 
                when needed to get information for Basic D&#38;D infromation.
                Using Javascript and Node.js I was able to set up an easy ui through 
                commands to help the members of the party get information quickly from 
                an api.
              </p>
              <p style={{ fontSize: "20px", paddingTop: "20px" }}>
                GitHub Repo:
                <a
                  style={{ paddingLeft: "15px", textDecoration: "none" }}
                  href="https://github.com/JeffHauckJr/dnd-bot"
                  target="blank"
                >
                  Here
                </a>
              </p>
            </div>
          </article>
        </div>
        <div>
          <article
            className="article-container"
          >
            <img
              className="img2"
              src={greatLinkImg}
              alt=""
              onClick={() => {
                window.open("https://universallinkerator.herokuapp.com/true");
              }}
              style={{ width: "300px", height: "300px", borderRadius: "25%" }}
            ></img>
            <div className="article-text-container" style={{ width: "600px" }}>
              <h1
                style={{
                  fontFamily: "Lato",
                  color: "beige",
                  fontSize: "45px",
                  paddingBottom: "15px",
                }}
              >
                The Great Linkerator
              </h1>
              <p style={{ fontSize: "20px", color: "beige" }}>
                This project is a FullStack application which allows users to
                create a post with a Link attached. This Link will have data on
                how popular this link may be. This FullStack application was a
                group project that spanned two weeks. We were able to impliment
                React for the Front- end and Express servers paired with Node.js
                to connect to our SQL database.
              </p>
              <p style={{ fontSize: "20px", paddingTop: "20px" }}>
                GitHub Repo:
                <a
                  style={{ paddingLeft: "15px", textDecoration: "none" }}
                  href="https://github.com/winfreychristopher/great-linkerator"
                  target="blank"
                >
                  Here
                </a>
              </p>
            </div>
          </article>
        </div>
        <div>
          <article
            className="article-container"
          >
            <img
              className="img2"
              src={snakeImg}
              alt=""
              onClick={() => {
                window.open("https://loving-ritchie-61ca48.netlify.app");
              }}
              style={{ width: "300px", height: "300px", borderRadius: "25%" }}
            ></img>
            <div className="article-text-container" style={{ width: "600px" }}>
              <h1
                style={{
                  fontFamily: "Lato",
                  color: "beige",
                  fontSize: "45px",
                  paddingBottom: "15px",
                }}
              >
                Snake
              </h1>
              <p style={{ fontSize: "20px", color: "beige" }}>
                A classic Snake game with a Futuristic look. This snake game was
                creatied using Vanilla JavsScript and canvas. This was a project
                I worked on at the beginning of my coding career and I guess you
                can say it is the Project that ignited my passion for creating
                applications.
              </p>
              <p style={{ fontSize: "20px", paddingTop: "20px" }}>
                GitHub Repo:
                <a
                  style={{ paddingLeft: "15px", textDecoration: "none" }}
                  href="https://github.com/JeffHauckJr/Snake/tree/main"
                  target="blank"
                >
                  Here
                </a>
              </p>
            </div>
          </article>
        </div>
        <div>
          <article
            className="article-container"
          >
            <img
              className="img2"
              src={todoImg}
              alt=""
              onClick={() => {
                window.open(
                  "https://xenodochial-stonebraker-bcfb51.netlify.app/"
                );
              }}
              style={{ width: "300px", height: "300px", borderRadius: "25%" }}
            ></img>
            <div className="article-text-container" style={{ width: "600px" }}>
              <h1
                style={{
                  fontFamily: "Lato",
                  color: "beige",
                  fontSize: "45px",
                  paddingBottom: "15px",
                }}
              >
                To-Do App
              </h1>
              <p style={{ fontSize: "20px", color: "beige" }}>
                This project was made with Both JavaScript and jQuery. The To-Do
                app allows the user to set tasks for themselves that will
                persist through leaving the site and reloading saving to local
                storage.
              </p>
              <p style={{ fontSize: "20px", paddingTop: "20px" }}>
                {/* GitHub Repo: */}
              </p>
            </div>
          </article>
        </div>
        <div>
          <article
            className="article-container"
          >
            <img
              className="img2"
              src={artCollecterImg}
              alt=""
              onClick={() => {
                window.open("https://ecstatic-sammet-dc767d.netlify.app");
              }}
              style={{ width: "300px", height: "300px", borderRadius: "25%" }}
            ></img>
            <div className="article-text-container" style={{ width: "600px" }}>
              <h1
                style={{
                  fontFamily: "Lato",
                  color: "beige",
                  fontSize: "45px",
                  paddingBottom: "15px",
                }}
              >
                Harvard Art Museum
              </h1>
              <p style={{ fontSize: "20px", color: "beige" }}>
                The Harvard Art collecter is a FullStack application that
                implements React.js for front-end duties and Harvard's Art API
                to gain access to their database. This allows you to filter
                through their database with keywords to find what you are
                looking for.
              </p>
              <p style={{ fontSize: "20px", paddingTop: "20px" }}>
                GitHub Repo:
                <a
                  style={{ paddingLeft: "15px", textDecoration: "none" }}
                  href="https://github.com/JeffHauckJr/UNIV_Art_Collector_React_Starter"
                  target="blank"
                >
                  Here
                </a>
              </p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default PortfolioInfo;
