import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const SilverBoxLogo = ({ silverBoxLogoRef }) => {
	return (
		<Link to="/" id="logo" ref={silverBoxLogoRef}>
			<img
				src="/src/assets/images/silverBox-TransParent.svg"
				alt="SilverBox Logo"
			/>
			<span>SilverBox</span>
		</Link>
	);
};

SilverBoxLogo.propTypes = {
	silverBoxLogoRef: PropTypes.object,
};

export default SilverBoxLogo;
