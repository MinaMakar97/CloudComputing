import React from "react";

import Header from "../component/header";
import LoadPhoto from "../component/load_photo";
import colosseo from "../image/Colosseum_1.jpg";

import "./result.css";
class Result extends React.Component {
	render() {
		return (
			<div>
				<div className="row superiore">
					<Header></Header>
				</div>
				<div className="row description elem">
					<p className="titles">
						<strong>Colosseo</strong>
					</p>
					<p className="content_description">
						The Colosseum is an oval amphitheatre in the centre of the city of Rome, Italy, just east of the Roman Forum. It is the
						largest ancient amphitheatre ever built, and is still the largest standing amphitheatre in the world today, despite its age.
					</p>
				</div>
				<div className="row content_element">
					<div className="col-7 elem info">
						<p>
							<strong>Architectural style</strong> ancient Roman architecture{" "}
						</p>
						<p>
							<strong>Culture</strong> Ancient Rome{" "}
						</p>
						<p>
							<strong>Date of official opening</strong> 81{" "}
						</p>
						<p>
							<strong>Has use</strong> ludi (Ancient Rome)quarrytourist attraction{" "}
						</p>
						<p>
							<strong>Height</strong> 48 m{" "}
						</p>
						<p>
							<strong>Heritage designation</strong> Italian national heritage{" "}
						</p>
						<p>
							<strong>Inception</strong> 82{" "}
						</p>
						<p>
							<strong>Instance of</strong> Roman amphitheatre,archaeological site,tourist attraction,stadium
						</p>
						<p>
							<strong>Length</strong> 187 m
						</p>
						<p>
							<strong>Location</strong> Municipio I, Rome, Municipio I, Italy
						</p>
						<p>
							<strong>Made from material</strong> travertine (facade)tuff (wall)concrete (vault)
						</p>
						<p>
							<strong>Maximum capacity</strong> 65,000 ±15000
						</p>
						<p>
							<strong>Part of</strong> Old Rome,parco archeologico del Colosseo
						</p>
						<p>
							<strong>Street address</strong> piazza del Colosseo, 1 - Roma
						</p>
						<p>
							<strong>Visitors per year</strong> 7,400,000 (2018)
						</p>
						<p>
							<strong>Width</strong> 155 m
						</p>
					</div>
					<div className="col-4 result">
						<img className="img-result" src={colosseo} />
					</div>
				</div>
			</div>
		);
	}
}
export default Result;
