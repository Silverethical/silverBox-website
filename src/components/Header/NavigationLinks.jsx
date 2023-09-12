import { Link } from "react-router-dom";
import handleLinkClick from "./helpers/handleLinkClick";
import PropTypes from "prop-types";
import { basePath } from "../../constants";

const linksDetails = [
	{
		name: "Intro",
		path: `${basePath}/landing`,
		relatedSection: "#silverBox-heroSection",
	},
	{
		name: "Example",
		path: `${basePath}/landing`,
		relatedSection: "#silverBox-exampleSection",
	},
	{
		name: "Usage",
		path: `${basePath}/landing`,
		relatedSection: "#silverBox-usageSection",
	},
	{
		name: "Documentation",
		path:  `${basePath}/documentation?v=latest`,
		relatedSection: "#silverBox-documentationSection",
	},
];

const NavigationLinks = ({ location, navigate }) => {
	const handleClick = (hash) => {
		handleLinkClick(hash, location, navigate);
	};

	return (
		<>
			{linksDetails.map((link, idx) => (
				<li key={idx}>
					<Link
						to={link.path}
						onClick={() => handleClick(link.relatedSection)}
					>
						{link.name}
					</Link>
				</li>
			))}
		</>
	);
};

NavigationLinks.propTypes = {
	location: PropTypes.object,
	navigate: PropTypes.func,
};

export default NavigationLinks;
