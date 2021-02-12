import React from 'react';
import './App.css';
import CityInput from "./components/CityInput";
import CityWeather from "./components/CityWeather";

function App() {
  const [city,setCity] =React.useState("");
  const [cityWeather,setCityWeather] = React.useState({});
  // const [cityTemp,setCityTemp] = React.useState({});
  
  const fetchCityWeather =() => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9a652a614f63279a6be9ba627a1368fe`
    )
    .then((res) => res.json())
    .then((result) => {
      // console.log("Result is result",result);
      setCityWeather(result);
      // setCityTemp(result.main);
    });
  };
  
  return (
    <div className={(typeof cityWeather.main != "undefined") ? ((cityWeather.main.temp-271.15 > 16) ? 'app warm' : 'app') : 'app'}>
    <CityInput 
    city={city}
    setCity={setCity}
    fetchCityWeather={fetchCityWeather}
    />
    <CityWeather 
    cityWeather={cityWeather}
    />
    </div>
  );
}
export default App;
