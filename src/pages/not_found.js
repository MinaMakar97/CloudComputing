import React from "react";

import Header from "../component/header";
import LoadPhoto from "../component/load_photo";
import no_result from "../image/no_result.png";

import "./not_found.css";
class Home extends React.Component {
	render() {
		return (
			<div>
				<div className="row superiore">
					<Header></Header>
				</div>
				<div className="row inferiore">
					<div className="col-8 ">
						<div className="row-mb-3 immagine">
							<img className="notFound" src={no_result} alt="not found" />
						</div>
						<div className="row-mb-3 testo">
							<p className="font-text">No result found </p>
							<p className="font-text">try to upload another photo</p>
						</div>
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
