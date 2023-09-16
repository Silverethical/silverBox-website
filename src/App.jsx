// react imports
import {useEffect} from "react";

// Components Import
import Header from "./components/Header/Header";
import HeroSection from "./pages/Landing/HeroSection";
import ExampleSection from "./pages/Landing/Example/ExampleSection";
import UsageSection from "./pages/Landing/UsageSection";
import CreditsSection from "./pages/Landing/CreditsSection";
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
