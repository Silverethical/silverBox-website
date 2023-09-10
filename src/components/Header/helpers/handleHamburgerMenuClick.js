const handleHamburgerMenuToggle = ({
	navigationList,
	silverBoxLogo,
	hamburgerMenuIcon,
}) => {
	if (!navigationList.current.classList.contains("show")) {
		hamburgerMenuIcon.current.classList.add("rotate");
		navigationList.current.classList.add("show");
		silverBoxLogo.current.classList.add("hide");
	} else {
		hamburgerMenuIcon.current.classList.remove("rotate");
		navigationList.current.classList.remove("show");
		silverBoxLogo.current.classList.remove("hide");
	}
};

export default handleHamburgerMenuToggle;
