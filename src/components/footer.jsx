import fbLogo from "./img/facebook_logo.png"
import gitHubLogo from "./img/GitHub-cat-logo.jpg"
import linkedInLogo from "./img/linkedIn_logo.png"

const Socials = () => {
    return (
        <>
            <div className="footer">
                <img className="social"
                    src={fbLogo}
                    alt=""
                    onClick={() => {
                        window.open("https://www.facebook.com/jefferyhauckjr")
                    }}
                  />
                <img className="social"
                    src={gitHubLogo}
                    alt=""
                    onClick={() => {
                        window.open("https://github.com/JeffHauckJr")
                    }}
                  />
                <img className="social"
                    src={linkedInLogo}
                    alt=""
                    onClick={() => {
                        window.open("https://www.linkedin.com/in/jefferyhauckjr/")
                    }}
                    
                  />
            </div>
        </>
        
    )
        
    
}

export default Socials