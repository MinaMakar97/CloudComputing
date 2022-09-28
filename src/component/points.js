import React from "react";
import "./points.css";

class Points extends React.Component {
	render() {
		//console.log(JSON.stringify(this.props.content["result"]["Item"]["attributes"]));
		return Object.entries(this.props.content["Item"]["attributes"]).map(([key, value]) =>
			key !== "description" && key !== "url" ? (
				<p>
					<strong>{key}</strong> {value}
				</p>
			) : null
		);
		//return <div>ciao</div>;
		//console.log("JSON", this.props.content);
		//return;
	}
}
export default Points;
