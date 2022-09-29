import React from "react";

import Header from "../component/header";
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
					<div className="col-12 titles order-1 order-sm-1">
						<strong>{this.props.contentPage["Item"]["monument_name"].replaceAll("_", " ")}</strong>
					</div>
					<div className="col-12 description order-3 order-sm-2">
						<p className="content_description">{this.props.contentPage["Item"]["attributes"]["description"]}</p>
					</div>
					<div className="col-12 col-sm-6 content_element order-4 order-sm-3">
						<div className="elem info">
							<Points content={this.props.contentPage}></Points>
						</div>
					</div>
					<div className="col-12 col-sm-6 result order-2 order-sm-4">
						<img className="img-result" src={this.props.contentPage["Item"]["attributes"]["url"]} alt="description" />
					</div>
				</div>
			</div>
		);
	}
}
export default Result;
