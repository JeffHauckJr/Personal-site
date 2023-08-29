import { Route, Navigate, Routes } from "react-router-dom";
import { HOME_ROUTE, ABOUT_ROUTE, PORTFOLIO_ROUTE } from "../constants";
import HomeInfo from "./Home.jsx";
import AboutInfo from "./about";
import PortfolioInfo from "./Portfolio";

const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />

      <Route path={HOME_ROUTE} element={<HomeInfo />} />
      <Route path={ABOUT_ROUTE} element={<AboutInfo />} />
      <Route path={PORTFOLIO_ROUTE} element={<PortfolioInfo />} />
    </Routes>
  );
};

export default Pages;
