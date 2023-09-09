import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
	const hamburgerMenuIcon = useRef(null);
	const silverBoxLogo = useRef(null);
	const navigationList = useRef(null);

	const [scrolled, setScrolled] = useState(false);

	window.addEventListener("scroll", () => {
		const bodyScrollHeight = window.scrollY;

		// if the scrollHeight is more than 50, the header will get a class
		if (bodyScrollHeight > 50) setScrolled(true);
		// else it will be removed
		else setScrolled(false);
	});

	const navigate = useNavigate();

	useEffect(() => {
		const handleSmoothScrolling = () => {
			const hash = window.location.hash;
			if (hash) {
				const targetElement = document.querySelector(hash);
				if (targetElement) {
					targetElement.scrollIntoView({
						behavior: "smooth",
						block: "start",
					});
				}
			}
		};

		handleSmoothScrolling(); // Call it initially to handle scrolling on page load

		window.addEventListener("hashchange", handleSmoothScrolling);

		return () => {
			window.removeEventListener("hashchange", handleSmoothScrolling);
		};
	}, []);

	const handleLinkClick = (hash) => {
		const targetElement = document.querySelector(hash);
		if (targetElement) {
			if (window.location.pathname === "/landing") {
				targetElement.scrollIntoView({
					behavior: "smooth",
					block: "start",
				});
			} else {
				navigate(`/landing${hash}`);
				setTimeout(() => {
					targetElement.scrollIntoView({
						behavior: "smooth",
						block: "start",
					});
				}, 0);
			}
		}
	};

	return (
		<header
			id="silverBox-header"
			className={`${scrolled ? "scrolled" : ""} `}
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
