import React from 'react'



const CityWeather = (props)=> {
    const dateBuilder = (d) => {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();
    
        return `${day} ${date} ${month} ${year}`
    }
   
    return (
        <div className="hlo">
            {(typeof props.cityWeather.main != "undefined") ? (
                <main>
                    <div className="location-box">
                        <div className="location">{props.cityWeather.name},{props.cityWeather.sys.country}</div>
                        <div className="date">{dateBuilder(new Date())}</div>
                    </div>
                    <div className="weather-box">
                        <div className="temp">
                        {Math.round((props.cityWeather.main.temp)-273.15)}°C
                            <div className="feel">Feel like{Math.round((props.cityWeather.main.feels_like)-273.15)}°C</div>
                            <div className="weather">{props.cityWeather.weather[0].main}</div>
                        </div>
                    </div>
                </main>
            ):('No such type of data')}
        </div>  
    )
};
export default CityWeather;

