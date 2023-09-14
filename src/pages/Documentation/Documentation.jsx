import { useEffect, useState } from "react";
import SilverBoxDocumentationTableComponent from "./helpers/documentationTableComponent";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer";
import documentations from "./data/documentations/index";
import getParameterByName from "./helpers/getParams";

const Documentation = () => {
    const [versionNumber, setVersionNumber] = useState("");

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
        }
    }, [versionNumber]);

    return (
        <>
            <Header />
            <main>
                <section id="silverBox-documentationSection">
                    <div className="container">
                        <div className="silverBox-tableWrapper">
                            <div>
                                <h2 className="silverBox-sectionHeader">
                                    <span id="silverBox-documentation">
                                        Documentation{" "}
                                        <span id="silverBox-documentation-version">
                                            {versionNumber
                                                ? `v${versionNumber}`
                                                : "Loading version..."}
                                        </span>
                                    </span>
                                </h2>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default Documentation;
