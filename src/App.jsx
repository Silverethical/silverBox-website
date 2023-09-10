// react imports
import { useEffect } from "react";

// Components Import
import Header from "./components/Header/Header";
import HeroSection from "./pages/Home/HeroSection";
import ExampleSection from "./pages/Home/ExampleSection";
import UsageSection from "./pages/Home/UsageSection";
import CreditsSection from "./pages/Home/CreditsSection";
import Footer from "./components/Footer";

// highlightJs imports
import hljs from "highlight.js";
import "./scss/libraries/_atom-one-dark-reasonable.scss";


const App = () => {

	useEffect(() => {
        hljs.highlightAll();
    }, []);

	return (
		<>
			<Header />

			{/* main */}
			<main>
				<HeroSection />
				<ExampleSection />
				<UsageSection />
				<CreditsSection />
			</main>

			{/* footer */}
			<Footer />
		</>
	);
};

export default App;
