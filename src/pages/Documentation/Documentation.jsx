import { useEffect, useState } from "react";
import silverBoxDocumentationTableComponent from "./helpers/documentationTableComponent";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer";
import documentations from "./data/documentations/index";

const Documentation = () => {
	const [versionNumber, setVersionNumber] = useState("");

	useEffect(() => {
		// all versions of documentation
		const allVersions = ["1.0.0", "1.1.0", "1.2.0"];

		// version number from query string url
		let queryStringVersionNumber = getParameterByName("v");

		// if version number from query string is not given or does not exist in allVersions array
		if (
			!queryStringVersionNumber ||
			!allVersions.includes(queryStringVersionNumber)
		) {
			// set the versionNumber to the latest version
			queryStringVersionNumber = allVersions[allVersions.length - 1];
		}

		(async () => {
			try {
				const docs =
					documentations[
						`v${queryStringVersionNumber.replaceAll(".", "_")}`
					];

				setVersionNumber(queryStringVersionNumber);
				silverBoxDocumentationTableComponent(
					".silverBox-tableWrapper",
					docs
				);
			} catch (error) {
				console.error("Error loading documentation:", error);
			}
		})();
	}, []);

	// Helper function to get query string value from URL
	function getParameterByName(name, url = window.location.href) {
		name = name.replace(/[[\]]/g, "\\$&");
		const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
		const results = regex.exec(url);
		if (!results) return null;
		if (!results[2]) return "";
		return decodeURIComponent(results[2].replace(/\+/g, " "));
	}

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
