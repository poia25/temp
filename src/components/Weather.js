import React from "react";

const Weather = (props) => {
    return(
        <div>
                {props.city && 
                <div className="city">
                <p>Местоположение:  {props.city},  {props.country}</p>
                <p>Температура:  {props.temp} C</p>
                <p>Давление:  {props.pressure}</p>
                <p>Восход солнца:  {props.sunrise}</p>
                <p>Заход солнца:  {props.sunset}</p>
                </div>}
                <p>{ props.error }</p>               
            </div>
    )
}

export default Weather;