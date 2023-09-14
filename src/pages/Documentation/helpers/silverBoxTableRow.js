import replaceQuotedTextWithSpan from "./replaceQuotedTextWithSpan";
import copyArgument from "./copyArgument.js";
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

export default silverBoxTableRow;
