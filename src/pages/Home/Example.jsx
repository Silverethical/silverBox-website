import { useRef } from "react";
import copyConfig from "../../helpers/copyConfig";
import customStringify from "../../helpers/customStringify";
import PropTypes from "prop-types"

const Example = ({ data }) => {
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
					<button
						className="silverBox-showExample silverBox-exampleButtons"
						onClick={() => {
							silverBox(config);
						}}
					>
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
					<pre>
						<code>SilverBox({customStringify(config)})</code>
					</pre>
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

Example.propTypes = {
	data: PropTypes.object
}

export default Example