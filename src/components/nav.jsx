import { AppBar, Toolbar } from "@material-ui/core";
import { Link } from "react-router-dom";
import {
	HOME_ROUTE,
	ABOUT_ROUTE,
    PORTFOLIO_ROUTE,
    CONTACT_ROUTE
} from "../constants";

const Navigation = () => {
		return (
			<>
			<AppBar style={{background: '#074253'}}>
				<Toolbar>
					<Link to={HOME_ROUTE} style={{textDecoration: "none", marginRight: '50px', fontSize: '25px', color: 'beige', fontFamily: 'Lato' }}>Home</Link>
					<Link to={ABOUT_ROUTE} style={{textDecoration: "none", marginRight: '50px', fontSize: '25px', color: 'beige',  fontFamily: 'Lato'}}>About</Link>
					<Link to={PORTFOLIO_ROUTE} style={{textDecoration: "none", marginRight: '50px', fontSize: '25px', color: 'beige',  fontFamily: 'Lato'}}>Portfolio</Link>
					<h1 style={{textDecoration: "none", marginLeft: '65%', fontSize: '25px', color: 'beige',  fontFamily: 'Lato'}}>Jeffery Hauck</h1>
				</Toolbar>
			</AppBar>
			</>
		)	
};
export default Navigation;