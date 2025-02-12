import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.jpeg";
import { Search } from "./search";
import "../../styles/home.scss";
import "../../styles/index.scss";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-verde mb-3 verde">
			<Link to="/">
				<img src={"logo.jpeg"} style={{ width: "80px", height: "40px" }} />
			</Link>
			<Search />
			<div className="ml-auto nav">
				<Link className="nav-item" to="/RegisterUserIn">
					<a
						className="nav-link"
						style={{ color: "white", background: "#0", fontFamily: "'Roboto', sans-serif" }}>
						Reservar
					</a>
				</Link>

				<Link className="nav-item" to="/logUserIn">
					<a
						className="nav-link"
						style={{ color: "white", background: "#0", fontFamily: "'Roboto', sans-serif" }}>
						Fotos
					</a>
				</Link>

				<Link className="nav-item" to="/contact-us">
					<a
						className="nav-link"
						style={{ color: "white", background: "#0", fontFamily: "'Roboto', sans-serif" }}>
						Contacto

					</a>
				</Link>
			</div>
		</nav>
	);
};
