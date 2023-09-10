import { useState, useRef, useLayoutEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import handleTitle from "./helpers/handleTitleChange";
import NavigationLinks from "./NavigationLinks";

const Header = () => {
	const hamburgerMenuIcon = useRef(null);
	const silverBoxLogo = useRef(null);
	const navigationList = useRef(null);
	const [scrolled, setScrolled] = useState(false);

	window.addEventListener("scroll", () => {
		const bodyScrollHeight = window.scrollY;

		if (bodyScrollHeight > 50) setScrolled(true);
		else setScrolled(false);
	});

	const location = useLocation();
	const navigate = useNavigate();

	// Scroll to the top if the path changes
	useLayoutEffect(() => {
		window.scrollTo(0, 0);
		handleTitle();
	}, [location.pathname]);

	return (
		<header
			id="silverBox-header"
			className={`${scrolled ? "scrolled" : ""}`}
		>
			<div className="container">
				<nav>
					<Link to="/" id="logo" ref={silverBoxLogo}>
						<img
							src="/src/assets/images/silverBox-TransParent.svg"
							alt="SilverBox Logo"
						/>
						<span>SilverBox</span>
					</Link>

					<NavigationLinks location={location} navigate={navigate} />

					<div
						id="hamburger-menu"
						ref={hamburgerMenuIcon}
						onClick={() => {
							if (
								!navigationList.current.classList.contains(
									"show"
								)
							) {
								hamburgerMenuIcon.current.classList.add(
									"rotate"
								);
								navigationList.current.classList.add("show");
								silverBoxLogo.current.classList.add("hide");
							} else {
								hamburgerMenuIcon.current.classList.remove(
									"rotate"
								);
								navigationList.current.classList.remove("show");
								silverBoxLogo.current.classList.remove("hide");
							}
						}}
					>
						<div className="row"></div>
						<div className="row"></div>
						<div className="row"></div>
					</div>
				</nav>
			</div>
		</header>
	);
};

export default Header;
