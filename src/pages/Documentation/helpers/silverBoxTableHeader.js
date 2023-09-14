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

export default silverBoxTableHeader;