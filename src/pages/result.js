import React from "react";

import Header from "../component/header";
import colosseo from "../image/Colosseum_1.jpg";
import Points from "../component/points";

import "./result.css";
class Result extends React.Component {
	render() {
		return (
			<div className="roots">
				<div className="row superiore">
					<Header></Header>
				</div>
				<div className="row inferiore">
					<div className="row description elem">
						<p className="titles">
							<strong>{this.props.contentPage["Item"]["monument_name"]}</strong>
						</p>
						<p className="content_description">{this.props.contentPage["Item"]["attributes"]["description"]}</p>
					</div>
					<div className="row content_element">
						<div className="col-7 elem info">
							<Points content={this.props.contentPage}></Points>
						</div>
						<div className="col-4 result">
							<img className="img-result" src={colosseo} alt="description" />
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default Result;
