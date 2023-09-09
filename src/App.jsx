
const App = () => {
  return (
    <>
    
	<header id="silverBox-header">
		<div className="container">
			<nav>
				<a href="/" id="logo">
					<img src="/public/src/images/silverBox-TransParent.svg" />
					<span>SilverBox</span>
				</a>
				<ul>
					<li><a href="#silverBox-heroSection">Intro</a></li>
					<li><a href="#silverBox-exampleSection">Example</a></li>
					<li><a href="#silverBox-usageSection">Usage</a></li>
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
	{/* <!-- hero section --> */}
	<section id="silverBox-heroSection">
		{/* <!-- container --> */}
		<div className="container">
			<h2 className="silverBox-tagline">
				Simplifying Complexity, Empowering Creativity
			</h2>

			<div className="whySilverBox">
				<div className="silverBox-introduction">
					Welcome to <span className="silverBox-name-tag">SilverBox</span>, the JavaScript library that simplifies
					modals and alerts while offering unmatched customization.
					What sets SilverBox apart is
					its use of CSS variables, allowing developers to customize the visual appearance seamlessly. No more
					complex CSS files -
					simply modify the variables for a personalized look. Key features include streamlined modal
					creation, interactive
					alerts, unlimited customization options, lightweight performance, and cross-browser compatibility.
					Revolutionize your
					modals and alerts with SilverBox and simplify your development process. Experience the power of
					effortless customization
					and take your web applications to the next level.
				</div>
			</div>
			<button className="get-silverBox">
				<a href="#silverBox-usageSection">Get SilverBox</a>
			</button>
		</div>
	</section>

	{/* <!-- main --> */}
	<main>
		{/* <!-- example --> */}
		<section id="silverBox-exampleSection">
			<div className="container">
				<h2 className="silverBox-sectionHeader">Example</h2>
			</div>
		</section>
		{/* <!-- usage --> */}

		<section id="silverBox-usageSection">
			<div className="container">
				<h2 className="silverBox-sectionHeader">Usage</h2>

				<div id="silverBox-usageInstructions">
					<p>
						<a href="https://github.com/silverethical/silverbox/releases" target="_blank" rel="noreferrer">1. Get
							<span>SilverBox.</span>
						</a>
					</p>
					<p className="step1">
						2. Initialize the plugin by referencing the
						necessary files:
					</p>
					<pre><code className="language-html step1"></code></pre>
					<p className="step2">
						3. Call the silverBox function after the page has
						loaded:
					</p>
					<pre id="usage-example">
                        <code className="language-javascript step2"></code>
                        <button className="silverBox-exampleCopyButton"><img src="/public/src/images/copyIcon.png"/></button>
                    </pre>

				</div>
			</div>
		</section>

		{/* <!-- credits --> */}
		<section id="silverBox-CreditsSection" className="hidden">
			<div className="container">
				<h2 className="silverBox-sectionHeader">Credits</h2>

				{/* <!-- team members --> */}
				<div className="silverBox-teamMembers"></div>
			</div>
		</section>
	</main>
	{/* <!-- footer --> */}
	<footer>
		<br />
		Special thanks to
		<a href="https://sweetalert2.github.io/" target="_blank" id="sweetAlert" rel="noreferrer">SweetAlert2</a>
		and
		<a href="https://www.untitledui.com/" target="_blank" id="Untitled-UI" rel="noreferrer">Untitled UI</a>
	</footer>
    </>
  )
}

export default App
