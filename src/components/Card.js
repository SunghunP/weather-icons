import React from "react";

const Card = (props) => {
	return (
		<div class="weather">
			<img src={props.imgSrc} alt="an image" />
			<p><span>conditions:</span> {props.condition}</p>
			<p><span>time:</span> {props.time}</p>
		</div>
	)
}

export default Card