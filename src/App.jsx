// Components Import
import Header from "./components/Header";
import HeroSection from "./pages/Home/HeroSection";
import ExampleSection from "./pages/Home/ExampleSection";
import UsageSection from "./pages/Home/UsageSection";
import CreditsSection from "./pages/Home/CreditsSection";
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
