import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Error } from "./views/error";
import { PlantsInfo } from "./views/single";
import { Userview } from "./views/userview";
import { PlantSingleStatistic } from "./views/plantSingleStatistic.jsx";

import injectContext from "./store/appContext";
import { NavbarUser } from "./component/navbar_user.jsx";
import { NavbarHome } from "./component/navbar_home.jsx";
import { Footer } from "./component/footer.jsx";
import { Panelprofile } from "./views/panelprofile.js";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Switch>
						<Route exact path="/">
							<NavbarHome />
							<Home />
						</Route>
						<Route exact path="/username/view">
							<NavbarUser />
							<Userview />
						</Route>
						<Route exact path="/username/:plantName">
							<NavbarUser />
							<PlantSingleStatistic />
						</Route>
						<Route exact path="/panelprofile">
							<NavbarUser />
							<Panelprofile />
						</Route>
						<Route>
							<NavbarUser />
							<Error />
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
