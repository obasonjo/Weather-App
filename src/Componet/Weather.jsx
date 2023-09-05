import React from "react";
import './Weather.css'
import cloud from './/imge/cloud.png'
import humi from './/imge/humidity.jpg'
import wind from './/imge/wind.png'
import sea from './/imge/search.jpg'
const WeatherApp = () =>{
        let api_key = "dd94f859a0e52d6e4767fddf735f04a7";

        const search = async () => {
            const element = document.getElementsByClassName("cityInput")
            if(element [0].value==="")
            {
                return 0;
            }
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${element [0].value}&units-Metric&appid=${api_key}`;
            
            let response = await fetch(url);
            let data = await response.json();
           
            const humidity = document.getElementsByClassName("humidity-percentage")
            const wind = document.getElementsByClassName("wind-rate")
            const temprature = document.getElementsByClassName ("weather-temp")
            const location = document.getElementsByClassName("weather-location")

            humidity[0].innerHTML = data.main.humidity+" %";
            wind[0].innerHTML = data.wind.speed+" km/h";
            temprature[0].innerHTML= data.main.temp+"C";
            location[0].innerHTML = data.name;

        }
    return(
        <div className="container">
            <div className="top-bar">
                <input type="text" className="cityInput" placeholder="Search" />
                <div className="search-icon" onClick={()=>{search()}}>
                <img className="sea" src= {sea} alt="" />
                </div>
            </div>
            <div className="weather-image">
                <img className="big" src= {cloud} alt="" />
            </div>
            <div className="weather-temp">24C</div>
            <div className="weather-location">Lagos</div>
            <div className="data-container">
                <div className="element">
                    <img src= {humi} alt="" className="icon" />
                    <div className="data">
                        <div className="humidity-percentage">64%</div>
                        <div className="text">Humidity</div>
                    </div>
                </div>
                <div className="element">
                    <img src= {wind} alt="" className="icon" />
                    <div className="data">
                        <div className="wind-rate">18 km/h</div>
                        <div className="text">Wind Speed</div>
                    </div>
            </div>
            </div>
            
        </div>
    )
}
export default WeatherApp