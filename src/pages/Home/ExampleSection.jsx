import Example from "./Example";
import examples from "../../data/example";

const ExampleSection = () => {
	return (
		<section id="silverBox-exampleSection">
			<div className="container">
				<h2 className="silverBox-sectionHeader">Example</h2>
				{examples.map((example, idx) => (
					<Example key={idx} data={example} />
				))}
			</div>
		</section>
	);
};

export default ExampleSection;
