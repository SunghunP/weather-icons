import React from "react";

const WeatherImage = (props) => {
	return (
		<div className="WeatherImage">
			<img src={props.src} alt=""/>
		</div>
	)
}

export default WeatherImage