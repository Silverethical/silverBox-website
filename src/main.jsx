import React from "react";
import ReactDOM from "react-dom/client";

// rrd imports
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";

// component imports
import Documentation from "./pages/Documentation/Documentation.jsx";
import App from "./App.jsx";

// general style import
import "./scss/index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Navigate to="/landing" />} />
				<Route path="/landing" element={<App />} />
				<Route path="/documentation" element={<Documentation />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
