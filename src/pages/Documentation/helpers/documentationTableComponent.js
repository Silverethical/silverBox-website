// import
import silverBoxTableRow from "./silverBoxTableRow";
import silverBoxTableHeader from "./silverBoxTableHeader";
import toggleConfig from "./toggleConfig";

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

export default silverBoxDocumentationTableComponent;
