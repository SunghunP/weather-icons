import React from "react";

const WeatherData = (props) => {
	return (
		<div>
			<p><span>conditions:</span> {props.condition}</p>
			<p><span>time:</span> {props.time}</p>
		</div>
	)
}

export default WeatherData