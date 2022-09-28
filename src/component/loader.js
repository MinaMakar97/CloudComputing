import React from "react";
import "./loader.css";

class Loader extends React.Component {
	render() {
		return (
			<>
				<div className="book">
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
				</div>
				<div className="scritta">Loading</div>
			</>
		);
	}
}
export default Loader;
