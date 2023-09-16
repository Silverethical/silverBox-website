import { useEffect, useState } from "react";
import SilverBoxDocumentationTableComponent from "./helpers/documentationTableComponent";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer";
import documentations from "./data/documentations/index";
import getParameterByName from "./helpers/getParameterByName";
import Documentation from "./Documentation";
import SideBar from "./Sidebar";

const DocumentationRender = () => {
    const [versionNumber, setVersionNumber] = useState("");
    const [docs, setDocs] = useState("");

    useEffect(() => {
        // All versions of documentation
        const allVersions = ["1.0.0", "1.1.0", "1.2.0"];

        // Version number from query string URL
        let queryStringVersionNumber = getParameterByName("v");

        // If version number from query string is not given or does not exist in allVersions array
        if (
            !queryStringVersionNumber ||
            !allVersions.includes(queryStringVersionNumber)
        ) {
            // Set the versionNumber to the latest version
            queryStringVersionNumber = allVersions[allVersions.length - 1];
        }

        setVersionNumber(queryStringVersionNumber);
    }, []);

    useEffect(() => {
        // Render the SilverBoxDocumentationTableComponent once the versionNumber is set
        if (versionNumber) {
            const docs =
                documentations[`v${versionNumber.replaceAll(".", "_")}`];

            SilverBoxDocumentationTableComponent(
                ".silverBox-tableWrapper",
                docs
            );

            setDocs(docs);
        }
    }, [versionNumber]);

    return (
        <>
            {/* Header component */}
            <Header />

            {/* Documentation component */}
            <Documentation versionNumber={versionNumber}></Documentation>
            <SideBar config={docs} />

            {/* Footer Component */}
            <Footer />
        </>
    );
};

export default DocumentationRender;
