function toggleConfig() {
	// select all configs
	const documentThatHasConfig = document.querySelectorAll(
		".silverBox-document-has-config"
	);
	const silverBoxDocumentConfigIndicator = document.querySelectorAll(
		".silverBox-documentConfig-indicator"
	);

	// for loop
	for (let i = 0; i < documentThatHasConfig.length; i++) {
		// click event for each showMoreBtn
		silverBoxDocumentConfigIndicator[i].addEventListener("click", () => {
			// if each document that has config contains "hide" class this code will be executed
			if (documentThatHasConfig[i].classList.contains("silverBox-hide")) {
				// remove "hide" class from document that has config
				documentThatHasConfig[i].classList.remove("silverBox-hide");
				// remove "hide" class from Document Config Indicator
				silverBoxDocumentConfigIndicator[i].classList.remove(
					"silverBox-hide"
				);
			}
			// if each document that has config doesn't contain "hide" class this code will be executed
			else {
				// add "hide" class to document that has config
				documentThatHasConfig[i].classList.add("silverBox-hide");
				// add "hide" class to Document Config Indicator
				silverBoxDocumentConfigIndicator[i].classList.add(
					"silverBox-hide"
				);
			}
		});
	}
}

export default toggleConfig;