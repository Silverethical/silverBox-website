// import
import replaceQuotedTextWithSpan from "./replaceQuotedTextWithSpan";
import copyArgument from "./copyArgument.js";

// selector: element that table is appended to
function silverBoxDocumentationTableComponent(selector, documentation) {
	// select element
	const selectorEl = document.querySelector(selector);
	// tableWrapper selector
	// adds tableHeader to tableWrapper
	selectorEl.append(silverBoxTableHeader());

	// document argument
	let silverBoxTableRowConfig = (selector, idValue, configValue) =>
		silverBoxTableRow({
			name: selector.configName,
			type: selector.type,
			description: selector.explanation,
			defaultValue: selector.defaultValue,
			id: idValue,
			config: configValue,
		});
	// for loop
	documentation.forEach((documentItem) => {
		// tableRowFunctionConfig
		selectorEl.append(
			silverBoxTableRowConfig(documentItem, "noConfig", documentItem)
		);

		// if there is no config in object item this code will be executed
		if ("config" in documentItem) {
			// creates document configs wrapper
			let documentConfigWrapper = document.createElement("div");
			documentConfigWrapper.classList.add(
				"silverBox-document-has-config"
			);

			documentItem.config.forEach((config) => {
				let configTableRow = silverBoxTableRowConfig(
					config,
					"hasConfig",
					documentItem
				);
				// appending each config to the parent div
				documentConfigWrapper.append(configTableRow);
			});
			// appending the whole parent div after the related config explanation
			selectorEl.append(documentConfigWrapper);
		}
	});
	toggleConfig();
}
/**
 * creates tableHeader
 * @returns {element} - tableHeader Element
 */
function silverBoxTableHeader() {
	// create tableHeader
	const tableHeader = document.createElement("div");
	tableHeader.classList.add("silverBox-tableRow", "silverBox-tableRowHeader");

	// name header
	const nameHeader = document.createElement("div");
	nameHeader.classList.add("silverBox-tableColumn", "tableHeaderColumn");
	nameHeader.textContent = "Name";

	// type header
	const typeHeader = document.createElement("div");
	typeHeader.classList.add("silverBox-tableColumn", "tableHeaderColumn");
	typeHeader.textContent = "Type";

	// default header
	const defaultHeader = document.createElement("div");
	defaultHeader.classList.add("silverBox-tableColumn", "tableHeaderColumn");
	defaultHeader.textContent = "Default";

	// description header
	const descriptionHeader = document.createElement("div");
	descriptionHeader.classList.add(
		"silverBox-tableColumn",
		"tableHeaderColumn"
	);
	descriptionHeader.textContent = "Description";

	// append all items
	tableHeader.append(nameHeader);
	tableHeader.append(typeHeader);
	tableHeader.append(defaultHeader);
	tableHeader.append(descriptionHeader);

	return tableHeader;
}

/**
 * creates table row element
 * @param {string} argument - document argument
 * @param {string} explanation - document explanation
 * @param {string} defaultValue - document defaultValue
 * @param {string} config - document config
 * @param {string} id - determines the status of id (how the id is added)
 * @returns {element} - table row element
 */
function silverBoxTableRow({
	name,
	type,
	description,
	defaultValue,
	id,
	config,
}) {
	// selectors
	const tableRowEl = document.createElement("div");
	tableRowEl.classList.add("silverBox-tableRow");

	// name column ----

	const docNameColumn = document.createElement("a");
	docNameColumn.classList.add("silverBox-tableColumn");
	const docNameSpan = document.createElement("span");
	docNameSpan.classList.add("silverBox-document-argument");
	docNameSpan.textContent = name;
	docNameColumn.append(docNameSpan);

	// type column
	const docTypeColumn = document.createElement("div");
	docTypeColumn.classList.add("silverBox-tableColumn");
	const docTypeSpan = document.createElement("span");
	docTypeSpan.classList.add("silverBox-document-type");
	docTypeSpan.textContent = type;
	docTypeColumn.append(docTypeSpan);

	// copies the name textContent after being Clicked
	docNameColumn.onclick = () => {
		copyArgument(docNameColumn);
		// eslint-disable-next-line no-undef
		silverBox({
			timer: 1500,
			theme: "dark",
			position: "top-left",
			title: {
				text: "Argument copied.",
			},
			centerContent: true,
		});
	};

	// description column ----

	const docDescriptionColumn = document.createElement("div");
	docDescriptionColumn.classList.add(
		"silverBox-tableColumn",
		"silverBox-document-description"
	);
	const descriptionSpan = document.createElement("span");
	descriptionSpan.classList.add("silverBox-explanation-span");
	descriptionSpan.innerHTML = replaceQuotedTextWithSpan(description);
	docDescriptionColumn.append(descriptionSpan);

	// default value column ----

	const docDefaultValueColumn = document.createElement("div");
	docDefaultValueColumn.classList.add(
		"silverBox-tableColumn",
		"silverBox-document-default"
	);
	const defaultValueSpan = document.createElement("span");

	if (defaultValue != "emptyDefaultValue") {
		defaultValueSpan.classList.add("silverBox-document-string");
		defaultValueSpan.textContent = defaultValue;

		if (defaultValue === "") {
			defaultValueSpan.classList.add("silverBox-document-string");
			defaultValueSpan.textContent = '" "';
		}
	}
	docDefaultValueColumn.append(defaultValueSpan);

	// if id == "noConfig" this code will be executed
	if (id == "noConfig") {
		docNameColumn.setAttribute("href", "#" + name);
		tableRowEl.id = `${name}`;

		// if there is config keyword in the value of config which is documentation in our case
		// this code will be executed
		if ("config" in config) {
			// creates the show more button
			// create indicator
			let documentConfigWrapperIndicator = document.createElement("div");
			documentConfigWrapperIndicator.classList.add(
				"silverBox-documentConfig-indicator"
			);
			docNameColumn.append(documentConfigWrapperIndicator);
		}
	}
	// if id == "hasConfig" this code will be executed
	else if (id == "hasConfig") {
		// gets the id of the configName that contains the config
		docNameColumn.setAttribute("href", `#${config.configName}${name}`);
		tableRowEl.id = `${config.configName}${name}`;
	}
	// appends the items to table row

	// name
	tableRowEl.append(docNameColumn);
	// type
	tableRowEl.append(docTypeColumn);
	// default value
	tableRowEl.append(docDefaultValueColumn);
	// description
	tableRowEl.append(docDescriptionColumn);

	return tableRowEl;
}
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

export default silverBoxDocumentationTableComponent;
