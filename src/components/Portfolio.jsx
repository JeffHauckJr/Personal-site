import "./portfolio.css";
import greatLinkImg from "./img/great-linkerator.PNG";
import snakeImg from "./img/snake.js-img.PNG";
import todoImg from "./img/to-do-img.PNG";
import artCollecterImg from "./img/art-collecter-img.PNG";

const PortfolioInfo = () => {
  return (
    <>
      <div>
        <h1 style={{color: 'beige', fontSize: '50px '}}>Projects</h1>
      </div>
      <div className="portfolio-container">
        <div>
          <article
            className="article-container"
            style={{ display: "flex", flexDirection: "row", marginTop: "15%" }}
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
            <div
              className="article-text-container"
              style={{ width: "600px" }}
            >
              <h1 style={{fontFamily: 'Lato', color: 'beige', fontSize: '45px', paddingBottom: '15px'}}>The Great Linkerator</h1>
              <p style={{ fontSize: "20px", color: 'beige'}}>
                This project is a FullStack application which allows users to
                create a post with a Link attached. This Link will have data on
                how popular this link may be. This FullStack application was a
                group project that spanned two weeks. We were able to impliment
                React for the Front- end and Express servers paired with Node.js
                to connect to our SQL database.
              </p>
                <p style={{ fontSize: "20px", paddingTop: '20px'}}>
                GitHub Repo:
                <a style={{paddingLeft: '15px', textDecoration: 'none'}} href='https://github.com/winfreychristopher/great-linkerator' target="blank">Here</a>
              </p>
            </div>
          </article>
        </div>
        <div>
          <article
            className="article-container"
            style={{ display: "flex", flexDirection: "row", marginTop: "15%" }}
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
            <div
              className="article-text-container"
              style={{ width: "600px" }}
            >
              <h1 style={{fontFamily: 'Lato', color: 'beige', fontSize: '45px', paddingBottom: '15px'}}>Snake</h1>
              <p style={{ fontSize: "20px", color: 'beige'}}>
                A classic Snake game with a Futuristic look. This snake game was creatied using Vanilla JavsScript and canvas.
                This was a project I worked on at the beginning of my coding career and I guess you can say it is the Project that 
                ignited my passion for creating applications.
              </p>
              <p style={{ fontSize: "20px", paddingTop: '20px'}}>
                GitHub Repo:
                <a style={{paddingLeft: '15px', textDecoration: 'none'}} href='https://github.com/JeffHauckJr/Snake/tree/main' target="blank">Here</a>
              </p>
            </div>
          </article>
        </div>
        <div>
          <article
            className="article-container"
            style={{ display: "flex", flexDirection: "row", marginTop: "15%" }}
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
            <div
              className="article-text-container"
              style={{ width: "600px" }}
            >
              <h1 style={{fontFamily: 'Lato', color: 'beige', fontSize: '45px', paddingBottom: '15px'}}>To-Do App</h1>
              <p style={{ fontSize: "20px", color: 'beige'}}>
                This project was made with Both JavaScript and jQuery. The To-Do app allows the user to set tasks for themselves that will persist
                through leaving the site and reloading saving to local storage. 
              </p>
              <p style={{ fontSize: "20px", paddingTop: '20px'}}>
                {/* GitHub Repo: */}
              </p>
            </div>
          </article>
        </div>
        <div>
          <article
            className="article-container"
            style={{ display: "flex", flexDirection: "row", marginTop: "15%", marginBottom: '10%' }}
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
            <div
              className="article-text-container"
              style={{ width: "600px" }}
            >
              <h1 style={{fontFamily: 'Lato', color: 'beige', fontSize: '45px', paddingBottom: '15px'}}>Harvard Art Museum</h1>
              <p style={{ fontSize: "20px", color: 'beige'}}>
               
              </p>
              <p style={{ fontSize: "20px", paddingTop: '20px'}}>
                GitHub Repo:
                <a style={{paddingLeft: '15px', textDecoration: 'none'}} href='https://github.com/JeffHauckJr/UNIV_Art_Collector_React_Starter' target="blank">Here</a>
              </p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default PortfolioInfo;
