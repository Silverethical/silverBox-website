// react imports
import { useRef,} from "react";

// elpers
import copyConfig from "../../helpers/copyConfig";


const UsageSection = () => {

	// refs
	const iconRef = useRef(null);
	const usageRef = useRef(null);

	
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
						<code className="language-html step1">
							{`<link rel="stylesheet" href="silverBox.min.css" />
							\n<script src="silverBox.min.js"></script>`}
						</code>
					</pre>
					<p className="step2">
						3. Call the silverBox function after the page has
						loaded:
					</p>
					<pre id="usage-example">
						<code
							className="language-javascript step2"
							ref={usageRef}
						>
							{`silverBox({
	alertIcon: "success",
	text: "Your task has been completed.",
	centerContent: true,
	confirmButton: {
		bgColor: "#3085d6",
		borderColor: "#3085d6",
		textColor: "#fff",
		text: "Confirm",
		closeOnClick: true
	}
})`}
						</code>
						<button
							className="silverBox-exampleCopyButton"
							onClick={() => {
								copyConfig({
									copy: usageRef.current.textContent,
									iconElement: iconRef.current,
									timeOut: 1500,
								});
							}}
						>
							<img
								src="/src/assets/images/copyIcon.png"
								ref={iconRef}
							/>
						</button>
					</pre>
				</div>
			</div>
		</section>
	);
};

export default UsageSection;
