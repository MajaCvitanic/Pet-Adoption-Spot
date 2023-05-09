import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Pets from "./pages/Pets";
import Donation from "./pages/Donation";
import About from "./pages/About";
import Navbar from "./navbar/Navbar";
import HomePets from "./pages/HomePets";

function App() {
	return (
		<>
			<div>
				<Routes>
					<Route path="/" element={<Navbar />}>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="/donation" element={<Donation />} />
						<Route path="/homePets" element={<HomePets />} />
					</Route>
				</Routes>
			</div>
		</>
	);
}

export default App;
