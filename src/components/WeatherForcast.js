import React from "react";
import WeatherImage from "./WeatherImage";
import WeatherData from "./WeatherData"

const WeatherForcast = (props) => {
	return (
		<div class="weather">
			<WeatherImage 
				src={props.imgSrc}
			/>
			<WeatherData 
				condition={props.condition}
				time={props.time}
			/>
		</div>
	)
}

export default WeatherForcast