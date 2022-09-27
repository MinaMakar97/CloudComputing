import React from "react";
import Header from "../component/header";
import Loader from "../component/loader";
import LoadPhoto from "../component/load_photo";
import colosseo from "../image/Colosseo_2.png";
import "./home.css";
import Result from "./result";

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.changeToLoading = this.changeToLoading.bind(this);
		this.changePage = this.changePage.bind(this);
		this.state = {
			isEdit: false,
			redirect: false,
			jsonPage: {},
		};
	}

	changeToLoading() {
		this.setState({
			isEdit: true,
		});
	}

	changePage(json) {
		this.setState({ redirect: true, jsonPage: JSON.parse(json["result"]) }, () => {
			console.log(this.state.redirect);
		});
	}

	render() {
		return !this.state.redirect || Object.keys(this.state.jsonPage).length === 0 ? (
			<div>
				<div className="row superiore">
					<Header></Header>
				</div>
				<div className="row inferiore ">
					<div className="col-8">
						<img className="colosseo" src={colosseo} alt="Home page" />
					</div>
					{!this.state.isEdit ? (
						<div className="col-4 container" id="to_replace">
							<div className="row-mb-3 immagine">
								<LoadPhoto changeToLoading={this.changeToLoading} changePage={this.changePage}></LoadPhoto>
							</div>

							<div className="row-mb-3 testo mobile">
								<p className="font-text">upload a photo of an Italian monument and discover the name and its history</p>
							</div>
						</div>
					) : (
						<div className="col-4 allinea d-flex flex-column">
							<Loader></Loader>
						</div>
					)}
				</div>
			</div>
		) : (
			//window.open("/result")
			<Result contentPage={this.state.jsonPage}></Result>
		);
	}
}
export default Home;
