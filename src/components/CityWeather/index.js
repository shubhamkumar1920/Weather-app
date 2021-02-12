import React from 'react'

const CityWeather = (props)=> {
    return (
        <div>
            {(typeof props.cityWeather.main != "undefined") ? (
                <main>
                    <div className="location-box">
                        <div className="location">{props.cityWeather.name},{props.cityWeather.sys.country}</div>
                        <div className="date"></div>
                    </div>
                    <div className="Weather-box">
                        <div className="temp">
                            {(props.cityWeather.main.temp)-273.15}°C
                            <div className="feel">{Math.round((props.cityWeather.main.feels_like)-273.15)}°C</div>
                            <div className="weather">Sunny</div>
                        </div>
                    </div>
                </main>
            ):('')}
        </div>
        
    )
};
export default CityWeather;
