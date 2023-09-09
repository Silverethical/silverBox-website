import { useRef } from "react";
import copyConfig from "../../helpers/copyConfig";
import customStringify from "../../helpers/customStringify"
import examples from "../../data/example";

const ExampleComponent = ({ data }) => {
	const iconRef = useRef(null);
	const { explanation, config } = data;


	const handleCopyExample = () => {
		// calls the copyConfig
		copyConfig({
			copy: customStringify(config),
			iconElement: iconRef.current,
			timeOut: 1500,
		});
	};

	const handleCopyButton = () => {
		copyConfig({ copy: config });
	};

	return (
		<div className="silverBox-example">
			{/* First Example Column */}
			<div className="silverBox-exampleColumn">
				{/* Example explanation div */}
				<div className="silverBox-exampleExplanation">
					{explanation}
				</div>
				{/* Example button wrapper */}
				<div className="silverBox-example-button-wrapper">
					{/* Show button */}
					<button className="silverBox-showExample silverBox-exampleButtons" 
					onClick={()=>{
						silverBox(config)
					}}>
						Show Me
					</button>
					{/* Copy config button */}
					<button
						className="silverBox-copyConfig silverBox-exampleButtons"
						onClick={handleCopyButton}
					>
						Copy Code
					</button>
				</div>
			</div>
			{/* Second Example Column */}
			<div className="silverBox-exampleColumn silverBox-exampleColumn-code">
				{/* Example config */}
				<div className="silverBox-exampleConfig">
					<pre><code>{customStringify(config)}</code></pre>
					{/* Copy example button */}
					<button
						className="silverBox-exampleCopyButton"
						onClick={handleCopyExample}
					>
						<img
							src="/src/assets/images/copyIcon.png"
							alt="Copy"
							ref={iconRef}
						/>
					</button>
				</div>
			</div>
		</div>
	);
};

const ExampleSection = () => {
	return (
		<section id="silverBox-exampleSection">
			<div className="container">
				<h2 className="silverBox-sectionHeader">Example</h2>
				{examples.map((example, idx) => (
					<ExampleComponent key={idx} data={example} />
				))}
			</div>
		</section>
	);
};

export default ExampleSection;
