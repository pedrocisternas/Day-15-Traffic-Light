//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Home } from "./component/home.js";

//render your react application
let color = "green";

let changeColor = () => {
	if (color == "green") color = "yellow";
	else if (color == "yellow") color = "red";
	else if (color == "red") color = "green";
	ReactDOM.render(<Home active={color} />, document.querySelector("#app"));
};

setInterval(changeColor, 3000);
