import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Part1 from "./components/Part1";
import Part2 from "./components/Part2";
import Part3 from "./components/Part3";
import Part4 from "./components/Part4";
import Part5 from "./components/Part5";
import Part6 from "./components/Part6";
import Footer from "./components/Footer";
import Scroll from "./components/Scroll";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	BrowserRouter,
} from "react-router-dom";

const App = () => {
	return (
		// <BrowserRouter>
		// 	<Navbar />
		// 	<Routes>
		// 		<Route path="/" exact compnent={Part1} />
		// 		<Route path="/part2" compnent={Part2} />
		// 		<Route path="/part3" compnent={Part3} />
		// 		<Route path="/part4" compnent={Part4} />
		// 		<Route path="/part5" compnent={Part5} />
		// 		<Route path="/part" compnent={Part6} />
		// 	</Routes>
		// 	{/* <Part1 />
		// 	<Part2 />
		// 	<Part3 />
		// 	<Part4 />
		// 	<Part5 />
		// 	<Part6 />
		// 	<Footer /> */}
		// </BrowserRouter>
		<div>
			<Navbar />
			<Part1 />
			<Part2 />
			<Part3 />
			<Part4 />
			<Part5 />
			<Part6 />
			<Footer />
		</div>
	);
};

export default App;
