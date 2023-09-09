import { useState } from "react";

const Header = () => {
	const [scrolled, setScrolled] = useState(false);

	window.addEventListener("scroll", () => {
		const bodyScrollHeight = window.scrollY;

		// if the scrollHeight is more than 50, the header will get a class
		if (bodyScrollHeight > 50) setScrolled(true);
		// else it will be removed
		else setScrolled(false);
	});

	return (
		<header id="silverBox-header" className={`${scrolled ? "scrolled" : ""} `}>
			
			<div className="container">
				<nav>
					<a href="/" id="logo">
						<img src="/src/assets/images/silverBox-TransParent.svg" />
						<span>SilverBox</span>
					</a>
					<ul>
						<li>
							<a href="#silverBox-heroSection">Intro</a>
						</li>
						<li>
							<a href="#silverBox-exampleSection">Example</a>
						</li>
						<li>
							<a href="#silverBox-usageSection">Usage</a>
						</li>
						<li className="silverBox-documentation-header">
							<a href="/documentation?v=latest">Documentation</a>
						</li>
					</ul>
					<div id="hamburger-menu">
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
