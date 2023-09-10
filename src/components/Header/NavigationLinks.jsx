import { Link } from "react-router-dom";
import handleLinkClick from "./helpers/handleLinkClick";
import PropTypes from "prop-types";

const linksDetails = [
	{
		name: "Intro",
		path: "/landing",
		relatedSection: "#silverBox-heroSection",
	},
	{
		name: "Example",
		path: "/landing",
		relatedSection: "#silverBox-exampleSection",
	},
	{
		name: "Usage",
		path: "/landing",
		relatedSection: "#silverBox-usageSection",
	},
	{
		name: "Documentation",
		path: "/documentation?v=latest",
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
