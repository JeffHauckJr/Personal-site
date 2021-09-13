import { Route, Redirect } from "react-router-dom";
import { HOME_ROUTE, ABOUT_ROUTE, PORTFOLIO_ROUTE } from "../constants";
import HomeInfo from "./Home.jsx";
import AboutInfo from "./about";
import PortfolioInfo from "./Portfolio";

const Pages = () => {
  return (
    <>
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>

      <Route path={HOME_ROUTE}>
        <HomeInfo />
      </Route>
      <Route path={ABOUT_ROUTE}>
        <AboutInfo />
      </Route>
      <Route path={PORTFOLIO_ROUTE}>
        <PortfolioInfo />
      </Route>
    </>
  );
};

export default Pages;
