import React from "react";
import "./loader.css";

class Loader extends React.Component {
	render() {
		return (
			<>
				<div className="book ciao ">
					<div className="inner">
						<div className="left"></div>
						<div className="middle"></div>
						<div className="right"></div>
					</div>
					<ul>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
					</ul>
					<div className="scritta">Loading</div>
				</div>
				<a className="dribbble" href="https://dribbble.com/shots/7199149-Book-Loader" target="_blank"></a>
			</>
		);
	}
}
export default Loader;
