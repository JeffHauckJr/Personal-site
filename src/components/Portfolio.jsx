import "./portfolio.css";
import greatLinkImg from "./img/great-linkerator.PNG";
import snakeImg from "./img/snake.js-img.PNG";
import todoImg from "./img/to-do-img.PNG";
import artCollecterImg from "./img/art-collecter-img.PNG";

const PortfolioInfo = () => {
  return (
    <>
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
              <h1>The Great Linkerator</h1>
              <p style={{ fontSize: "20px"}}>
                This project is a FullStack application which allows users to
                create a post with a Link attached. This Link will have data on
                how popular this link may be. This FullStack application was a
                group project that spanned two weeks. We were able to impliment
                React for the Front- end and Express servers paired with Node.js
                to connect to our SQL server.
              </p>
              <p>
                GitHub Repo:
                https://github.com/winfreychristopher/great-linkerator
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
              style={{ width: "600px", fontSize: "20px" }}
            >
              <h1>Snake</h1>
              <p style={{ fontSize: "20px"}}>JavaScript and Canvas</p>
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
              style={{ width: "600px", fontSize: "20px" }}
            >
              <h1>To-Do App</h1>
              <p style={{ fontSize: "20px"}}>jQuery Based</p>
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
              style={{ width: "600px", fontSize: "20px" }}
            >
              <h1>Harvard Art Collecter</h1>
              <p style={{ fontSize: "20px"}}
              >React Based</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default PortfolioInfo;
