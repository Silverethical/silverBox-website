import propTypes from "prop-types";
const Documentation = ({ versionNumber }) => {
    return (
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
    );
};

Documentation.propTypes = {
    versionNumber: propTypes.string,
};

export default Documentation;
