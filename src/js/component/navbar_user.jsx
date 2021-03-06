import React from "react";
import { Link } from "react-router-dom";
import LogoNavbar from "../../img/logo_navbar.jpg";
import Button from "react-bootstrap/Button";
import "../../styles/navbar_username.scss";

export const NavbarUser = () => {
	return (
		<nav className="navbar navbar-light">
			<Link to="/">
				<img className="logo-navbar" src={LogoNavbar} />
			</Link>
			<div className="ml-auto">
				<Button className="btn-navbar-view" onClick={() => window.location.reload()}>
					Logout
				</Button>
			</div>
		</nav>
	);
};
