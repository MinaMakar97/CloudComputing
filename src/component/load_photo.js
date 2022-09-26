import React from "react";
import Load_foto from "../image/load_foto.svg";
import "./load_photo.css";

class LoadPhoto extends React.Component {
	constructor(props) {
		super(props);
		this.gestisciImmagine = this.gestisciImmagine.bind(this);
		this.dragOver = this.dragOver.bind(this);
		this.dragEnter = this.dragEnter.bind(this);
		this.dragEnter = this.dragEnter.bind(this);
		this.fileDrop = this.fileDrop.bind(this);
		this.convertImage = this.convertImage.bind(this);
		this.inviaFile = this.inviaFile.bind(this);
		this.toBase64 = this.toBase64.bind(this);
		this.state = {
			convert: "",
		};
	}

	gestisciImmagine(e) {
		const file = e.target.files[0];
		//if (file) this.cambiaImmagine(URL.createObjectURL(file));
		// console.log(file);
		e.target.value = "";
		this.convertImage(file);
	}

	dragOver = (e) => {
		e.preventDefault();
	};

	dragEnter = (e) => {
		e.preventDefault();
	};

	dragLeave = (e) => {
		e.preventDefault();
	};

	fileDrop = (e) => {
		e.preventDefault();
		const file = e.dataTransfer.files[0];
		// console.log(files);
		this.convertImage(file);
	};
	toBase64 = (file) => {
		const reader = new FileReader();
		reader.onload = (callback) => {
			this.inviaFile(reader.result.replace("data:image/jpeg;base64,", ""));
		};
		reader.readAsDataURL(file);
	};

	inviaFile(file) {
		const dati = { imageData: file };
		console.log(dati);
		// 	const req = new XMLHttpRequest();
		// 	req.onreadystatechange = (e) => {
		// 		if (e.target.readyState === 4 && e.target.status === 200) {
		// 			console.log(e);
		// 			// eslint-disable-next-line no-undef
		// 			//$("#popup-successo").modal();
		// 			this.props.changePage();
		// 		}
		// 	};
		// 	req.open("POST", "https://l7x5kh3emvpkztj5kqzqozzsum0zbydh.lambda-url.us-east-1.on.aws/");
		// 	req.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
		// 	// req.withCredentials = false;
		// 	// console.log(JSON.stringify(dati));
		// 	req.send(JSON.stringify(dati));
		//
		fetch("https://l7x5kh3emvpkztj5kqzqozzsum0zbydh.lambda-url.us-east-1.on.aws/", {
			method: "post",
			header: { "Content-Type": "application/json;charset=UTF-8" },
			body: JSON.stringify(dati),
		}).then((response) => {
			response.json().then((json) => this.props.changePage(json));
		});
	}

	async convertImage(file, inviaFile) {
		this.toBase64(file, inviaFile);
		this.props.changeToLoading();
	}
	render() {
		//const { match, location, history } = this.props;
		return (
			<div className="load" onDragOver={this.dragOver} onDragEnter={this.dragEnter} onDragLeave={this.dragLeave} onDrop={this.fileDrop}>
				<label className="carica-immagine">
					<input type="file" accept="image/*" hidden onChange={this.gestisciImmagine}></input>
					<img src={Load_foto} className="load-photo" alt="Logo di Discover Culture"></img>
				</label>
			</div>
		);
	}
}
export default LoadPhoto;
