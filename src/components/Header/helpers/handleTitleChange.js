const handleTitle = () => {
	location.pathname.includes("/documentation")
		? (document.title = "SilverBox | Documentation")
		: (document.title = "SilverBox");
};

export default handleTitle;
