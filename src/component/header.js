import React from "react";
import Logo from "../image/logo.svg";
import "./header.css";

class Header extends React.Component {
	render() {
		return (
			<div className="header">
				<img src={Logo} className="w-50 logo" alt="Logo di Discover Culture"></img>
			</div>
		);
	}
}
export default Header;
