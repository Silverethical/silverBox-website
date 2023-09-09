// Components Import
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ExampleSection from "./components/ExampleSection";
import UsageSection from "./components/UsageSection";
import CreditsSection from "./components/CreditsSection";
import Footer from "./components/Footer";

const App = () => {
	return (
		<>
			<Header />
			{/* <!-- hero section --> */}
			<HeroSection />

			{/* <!-- main --> */}
			<main>
				{/* <!-- example --> */}
				<ExampleSection />

				{/* <!-- usage --> */}
				<UsageSection />

				{/* <!-- credits --> */}
				<CreditsSection />
			</main>
			{/* <!-- footer --> */}
			<Footer />
		</>
	);
};

export default App;
