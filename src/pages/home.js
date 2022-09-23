import React from "react";

import Header from "../component/header";
import Loader from "../component/loader";
import LoadPhoto from "../component/load_photo";
import colosseo from "../image/Colosseo_2.png";

import "./home.css";
class Home extends React.Component {
	constructor(props) {
		super(props);
		this.changeToLoading = this.changeToLoading.bind(this);
		this.state = {
			isEdit: false,
		};
	}

	changeToLoading() {
		this.setState({
			isEdit: true,
		});
	}

	render() {
		return (
			<div>
				<div className="row superiore">
					<Header></Header>
				</div>
				<div className="row inferiore">
					<div className="col-8 ">
						<img className="colosseo" src={colosseo} alt="Home page" />
					</div>
					{!this.state.isEdit ? (
						<div className="col-3 container" id="to_replace">
							<div className="row-mb-3 immagine">
								<LoadPhoto changeToLoading={this.changeToLoading}></LoadPhoto>
							</div>

							<div className="row-mb-3 testo">
								<p className="font-text">upload a photo of an Italian monument and discover the name and its history</p>
							</div>
						</div>
					) : (
						<Loader></Loader>
					)}
				</div>
			</div>
		);
	}
}
export default Home;
