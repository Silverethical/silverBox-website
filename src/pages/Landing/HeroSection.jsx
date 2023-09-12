const HeroSection = () => {
	return (
		<section id="silverBox-heroSection">
			{/* <!-- container --> */}
			<div className="container">
				<h2 className="silverBox-tagline">
					Simplifying Complexity, Empowering Creativity
				</h2>

				<div className="whySilverBox">
					<div className="silverBox-introduction">
						Welcome to{" "}
						<span className="silverBox-name-tag">SilverBox</span>,
						the JavaScript library that simplifies modals and alerts
						while offering unmatched customization. What sets
						SilverBox apart is its use of CSS variables, allowing
						developers to customize the visual appearance
						seamlessly. No more complex CSS files - simply modify
						the variables for a personalized look. Key features
						include streamlined modal creation, interactive alerts,
						unlimited customization options, lightweight
						performance, and cross-browser compatibility.
						Revolutionize your modals and alerts with SilverBox and
						simplify your development process. Experience the power
						of effortless customization and take your web
						applications to the next level.
					</div>
				</div>
				<button className="get-silverBox">
					<a href="#silverBox-usageSection">Get SilverBox</a>
				</button>
			</div>
		</section>
	);
};

export default HeroSection;
