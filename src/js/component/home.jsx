import React from "react";

//include images into your bundle




//create your first component
const Home = (props) => {

	return (
		<>
			<div className="row d-flex justify-content-evenly bg-dark text-light ">
				<h1 className="col">{props.numbersString.charAt(0)}</h1>
				<h1 className="col">{props.numbersString.charAt(1)}</h1>
				<h1 className="col">{props.numbersString.charAt(2)}</h1>
				<h1 className="col">{props.numbersString.charAt(3)}</h1>
				<h1 className="col">{props.numbersString.charAt(4)}</h1>
				<h1 className="col">{props.numbersString.charAt(5)}</h1>
			</div>
		</>
	);
};
export default Home;
