import { useState, useRef, useLayoutEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import handleTitle from "./helpers/handleTitleChange";
import NavigationLinks from "./NavigationLinks";
import handleHamburgerMenuToggle from "./helpers/handleHamburgerMenuClick";
import HamburgerMenu from "./HamburgerMenu";

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

					<ul ref={navigationList}>
						<NavigationLinks
							location={location}
							navigate={navigate}
						/>
					</ul>

					<div
						id="hamburger-menu"
						ref={hamburgerMenuIcon}
						onClick={() => {
							handleHamburgerMenuToggle({
								navigationList,
								silverBoxLogo,
								hamburgerMenuIcon,
							});
						}}
					>
						<HamburgerMenu />
					</div>
				</nav>
			</div>
		</header>
	);
};

export default Header;
