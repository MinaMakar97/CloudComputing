import React from "react";
import Load_foto from "../image/load_foto.svg";
import "./load_photo.css";

class LoadPhoto extends React.Component {
	render() {
		return (
			<div className="load">
				<img src={Load_foto} className="load-photo" alt="Logo di Discover Culture"></img>
			</div>
		);
	}
}
export default LoadPhoto;
