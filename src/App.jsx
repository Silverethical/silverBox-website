// Components Import
import Header from "./components/Header";
import HeroSection from "./pages/Home/HeroSection";
import ExampleSection from "./pages/Home/ExampleSection";
import UsageSection from "./pages/Home/UsageSection";
import CreditsSection from "./pages/Home/CreditsSection";
import Footer from "./components/Footer";
import Documentation from "./pages/documentation/Documentation";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";

const App = () => {
	return (
		<BrowserRouter>
			<Header />

			{/* main */}
			<main>
				<Routes>
					<Route path="/" element={<Navigate to="/landing" />} />
					<Route
						path="/landing"
						element={
							<>
								<HeroSection />
								<ExampleSection />
								<UsageSection />
								<CreditsSection />
							</>
						}
					/>
					<Route path="/documentation" element={<Documentation />} />
				</Routes>
			</main>

			{/* footer */}
			<Footer />
		</BrowserRouter>
	);
};

export default App;
