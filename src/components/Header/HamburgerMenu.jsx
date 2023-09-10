import PropTypes from "prop-types";
import handleHamburgerMenuToggle from "./helpers/handleHamburgerMenuClick";

const HamburgerMenu = ({
	navigationList,
	silverBoxLogo,
	hamburgerMenuIcon,
}) => {
	return (
		<div
			id="hamburger-menu"
			ref={hamburgerMenuIcon}
			onClick={() => {
				handleHamburgerMenuToggle({
					navigationList: navigationList,
					silverBoxLogo: silverBoxLogo,
					hamburgerMenuIcon: hamburgerMenuIcon,
				});
			}}
		>
			<div className="row"></div>
			<div className="row"></div>
			<div className="row"></div>
		</div>
	);
};

HamburgerMenu.propTypes = {
	hamburgerMenuIcon: PropTypes.object,
	navigationList: PropTypes.object,
	silverBoxLogo: PropTypes.object,
};

export default HamburgerMenu;
