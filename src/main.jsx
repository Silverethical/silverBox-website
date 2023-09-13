import React from "react";
import ReactDOM from "react-dom/client";

// rrd imports
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";

// component imports
import Documentation from "./pages/Documentation/Documentation.jsx";
import App from "./App.jsx";

// general style import
import "./scss/index.scss";

// constants import
import { basePath } from "./constants";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route
					path={`${basePath}/`}
					element={<Navigate to={`${basePath}/landing`} />}
				/>
				<Route path={`${basePath}/landing`} element={<App />} />
				<Route path={`${basePath}/`} element={<App />} />
				<Route
					path={`${basePath}/documentation`}
					element={<Documentation />}
				/>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
