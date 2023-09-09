const UsageSection = () => {
	return (
		<section id="silverBox-usageSection">
			<div className="container">
				<h2 className="silverBox-sectionHeader">Usage</h2>

				<div id="silverBox-usageInstructions">
					<p>
						<a
							href="https://github.com/silverethical/silverbox/releases"
							target="_blank"
							rel="noreferrer"
						>
							1. Get <span>SilverBox.</span>
						</a>
					</p>
					<p className="step1">
						2. Initialize the plugin by referencing the necessary
						files:
					</p>
					<pre>
						<code className="language-html step1"></code>
					</pre>
					<p className="step2">
						3. Call the silverBox function after the page has
						loaded:
					</p>
					<pre id="usage-example">
						<code className="language-javascript step2"></code>
						<button className="silverBox-exampleCopyButton">
							<img src="/public/src/images/copyIcon.png" />
						</button>
					</pre>
				</div>
			</div>
		</section>
	);
};

export default UsageSection;
