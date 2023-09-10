const handleLinkClick = (hash, location, navigate) => {
	const targetElement = document.querySelector(hash);

	// If in documentation path, this code executes
	if (location.pathname.includes("documentation")) {
		// navigate to /landing route
		navigate("/landing");

		// Use setTimeOut so that the code runs after navigated to landing
		setTimeout(() => {
			// Reselect the target element after navigating to landing
			const updatedTargetElement = document.querySelector(hash);

			if (updatedTargetElement) {
				// scrolls to the element
				updatedTargetElement.scrollIntoView();
			}
		}, 0);
	}

	// If already in landing, scroll to the element
	if (location.pathname.includes("landing")) {
		if (targetElement) {
			targetElement.scrollIntoView();
		}
	}
};

export default handleLinkClick;
