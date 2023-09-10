import { useState, useRef, useLayoutEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

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

	const navigate = useNavigate();
	const location = useLocation();

	// Scroll to the top if the path changes
	useLayoutEffect(() => {
		window.scrollTo(0, 0);
	}, [location.pathname]);

	const handleLinkClick = (hash) => {
		const targetElement = document.querySelector(hash);

		// If in documentation path, this code executes
		if (location.pathname.includes("documentation")) {
			// navigate to /landing route
			navigate("/landing");

			// Use setTimeOut so that the code runs after navigated to landing
			setTimeout(() => {
				// Reselect the target element after navigating to landing
				const updatedTargetElement = document.querySelector(hash);

				if (updatedTargetElement) {
					// scrolls to the element
					updatedTargetElement.scrollIntoView();
				}
			}, 0);
		}

		// If already in landing, scroll to the element
		if (location.pathname.includes("landing")) {
			if (targetElement) {
				targetElement.scrollIntoView();
			}
		}
	};

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
						<li>
							<Link
								to="/landing"
								onClick={() =>
									handleLinkClick("#silverBox-heroSection")
								}
							>
								Intro
							</Link>
						</li>
						<li>
							<Link
								to="/landing"
								onClick={() =>
									handleLinkClick("#silverBox-exampleSection")
								}
							>
								Example
							</Link>
						</li>
						<li>
							<Link
								to="/landing"
								onClick={() =>
									handleLinkClick("#silverBox-usageSection")
								}
							>
								Usage
							</Link>
						</li>
						<li className="silverBox-documentation-header">
							<Link
								to="/documentation?v=latest"
								onClick={() =>
									handleLinkClick(
										"#silverBox-documentationSection"
									)
								}
							>
								Documentation
							</Link>
						</li>
					</ul>
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
