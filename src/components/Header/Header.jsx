import { useState, useRef, useLayoutEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import handleTitle from "./helpers/handleTitleChange";
import NavigationLinks from "./NavigationLinks";
import HamburgerMenu from "./HamburgerMenu";
import SilverBoxLogo from "./SilverBoxLogo";

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
					<SilverBoxLogo silverBoxLogoRef={silverBoxLogo} />

					<ul ref={navigationList}>
						<NavigationLinks
							location={location}
							navigate={navigate}
						/>
					</ul>

					<HamburgerMenu
						hamburgerMenuIcon={hamburgerMenuIcon}
						silverBoxLogo={silverBoxLogo}
						navigationList={navigationList}
					/>
				</nav>
			</div>
		</header>
	);
};

export default Header;
