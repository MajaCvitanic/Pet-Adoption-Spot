import React, { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import "./Navbar.css";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { Bars3Icon } from "@heroicons/react/24/solid";
import Logo from "./Logo.png";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isSmallScreen, setIsSmallScreen] = useState(false);

	useEffect(() => {
		const mediaQuery = window.matchMedia("(max-width: 768px)");
		setIsSmallScreen(mediaQuery.matches);

		const handleResize = (e) => {
			setIsSmallScreen(e.matches);
			setIsOpen(false);
		};

		mediaQuery.addEventListener("change", handleResize);

		return () => {
			mediaQuery.removeEventListener("change", handleResize);
		};
	}, []);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<nav className="navbar">
				<img className="navbar-logo" src={Logo} alt="logo"></img>

				<ul
					className={
						isOpen && isSmallScreen
							? "nav-links active "
							: "nav-links "
					}
				>
					<li class="active">
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
					<li>
						<Link to="/donation">Donation</Link>
					</li>
					<li>
						<Link to="/homepets">Available Pets</Link>
					</li>
				</ul>

				{isSmallScreen &&
					(isOpen ? (
						<XMarkIcon
							className="h-12 w-12 text-blue-500"
							onClick={toggleMenu}
						/>
					) : (
						<Bars3Icon
							className="h-12 w-12 text-blue-500"
							onClick={toggleMenu}
						/>
					))}
			</nav>
			<Outlet />
		</>
	);
};
export default Navbar;
