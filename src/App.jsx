// Components Import
import Header from "./components/Header";
import HeroSection from "./pages/Home/HeroSection";
import ExampleSection from "./pages/Home/ExampleSection";
import UsageSection from "./pages/Home/UsageSection";
import CreditsSection from "./pages/Home/CreditsSection";
import Footer from "./components/Footer";
// import Documentation from "./pages/documentation/Documentation";
import { Route, Routes, BrowserRouter } from "react-router-dom";

const App = () => {
	return (
		<>
			<BrowserRouter>
				<Header />

				{/* <!-- main --> */}
				<main>
					{/* <!-- hero section --> */}
					<HeroSection />

					{/* <!-- example --> */}
					<ExampleSection />

					{/* <!-- usage --> */}
					<UsageSection />

					{/* <!-- credits --> */}
					<CreditsSection />
				</main>
				{/* <!-- footer --> */}
				<Footer />
			</BrowserRouter>
		</>
	);
};

export default App;
