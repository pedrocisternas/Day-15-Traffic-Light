import React, { useState } from "react";
import { PropTypes } from "prop-types";

//create your first component
export function Home(props) {
	return (
		<div
			id="traffic-light"
			className="container-fluid d-flex flex-column align-items-center justify-content-center">
			<div
				className={props.active == "red" ? "light red" : "light"}></div>
			<div
				className={
					props.active == "yellow" ? "light yellow" : "light"
				}></div>
			<div
				className={
					props.active == "green" ? "light  green" : "light"
				}></div>
		</div>
	);
}
Home.propTypes = {
	active: PropTypes.string
};
