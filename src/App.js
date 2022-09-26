import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import NotFound from "./pages/not_found";
import Result from "./pages/result";
import "./App.css";

class App extends Component {
	render() {
		return (
			<div className="container-fluid contenitore-principale">
				<Router>
					<Routes>
						<Route path="/notFound" exact element={<NotFound />} />
						<Route path="/result" exact element={<Result />} />
						<Route path="*" element={<Home />} />
					</Routes>
				</Router>
			</div>
		);
	}
}

export default App;
