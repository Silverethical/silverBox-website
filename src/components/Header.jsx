const Header = () => {
	return (
		<header id="silverBox-header">
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
