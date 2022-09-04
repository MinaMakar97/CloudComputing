import React from "react";

import Header from "../component/header";
import LoadPhoto from "../component/load_photo";
import colosseo from "../image/Colosseo_2.png";

import "./home.css";
class Home extends React.Component {
	render() {
		return (
			<div>
				<div className="row superiore">
					<Header></Header>
				</div>
				<div className="row inferiore">
					<div className="col-8 ">
						<img className="colosseo" src={colosseo} />
					</div>
					<div className="col-3 container">
						<div className="row-mb-3 immagine">
							<LoadPhoto></LoadPhoto>
						</div>

						<div className="row-mb-3 testo">
							<p className="font-text">upload a photo of an Italian monument and discover the name and its history</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default Home;
