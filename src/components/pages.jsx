import { Route } from 'react-router-dom';
import {
	HOME_ROUTE,
	ABOUT_ROUTE,
    PORTFOLIO_ROUTE,
    CONTACT_ROUTE
} from '../constants';
import  Home  from './Home.jsx'
import AboutInfo from './about';
import PortfolioInfo from './Portfolio';




const Pages = () => {
	return (
		<>
			<Route path={HOME_ROUTE}>
                <Home/>
			</Route>
			<Route path={ABOUT_ROUTE}>
                <AboutInfo/>
			</Route>
			<Route path={PORTFOLIO_ROUTE}>
                <PortfolioInfo/>
			</Route>
			<Route path={CONTACT_ROUTE}>
			</Route>
		</>
	);
};

export default Pages;