import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./scss/index.scss";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import Documentation from "./pages/Documentation/Documentation.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Navigate to="/landing" />} />
				<Route path="/landing" element={<App />} />
        <Route path="/documentation" element={<Documentation/>}/>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
