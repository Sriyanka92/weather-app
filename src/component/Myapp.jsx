import React, { useState } from 'react'
import clear from "../../public/images/clear.png";
import cloud from "../../public/images/clouds.png";
import drizzle from "../../public/images/drizzle.png";
import haze from "../../public/images/haze.png";
import mist from "../../public/images/mist.png";
import rain from "../../public/images/rain.png";
import snow from "../../public/images/snow.png";


function Myapp() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState();
  const [error, setError] = useState();
  const APIKEY = "fd145fceaabe5eecc80c55a36e1bc45c";
  const API = "https://api.openweathermap.org/data/2.5/weather?q={search}&appid={API key}"

  const handelInput = (event) =>
    {
      setSearch(event.target.value)
      console.log(event.target.value);
    }
    const checkWeather = async () => {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${APIKEY}&units=metric`);
      const jdata = await response.json();
      console.log(jdata);
      setData(jdata)

      if(search === "")
        {
           alert("Enter the input....")
        }
    }
    
  return (
    <>
    <div className="container">
      <div className="search-bar">
        <input type="text" className="search-input" placeholder="Enter a location..."onChange={handelInput}  />
        <button  onClick={checkWeather}className="search-button">Search</button>
      </div>
      <div className="current-info">
           
        <div className="date-container">
          <div className="time" id="time">
            <span id="mytime"></span> 
          </div>
          <div className="date" id="date">
            Monday, 24 May
          </div>
          <div className="others" id="current-weather-items">
            <div className="weather-item">
              <div>Humidity</div>
              <div className="humidity">{data?.main?.humidity}</div>
            </div>
            <div className="weather-item">
              <div>Temperature</div>
              <div className="tem">{Math.floor(data?.main?.temp)}°C</div> 
            </div>
            <div className="weather-item">
              <div>Pressure</div>
              <div className="pres">{data?.main?.pressure}</div> 
            </div>
            <div className="weather-item">
              <div>Wind Speed</div>
              <div className="wind">{data?.wind?.speed}</div> 
            </div>
            <div className="weather-item">
              <div>Description</div>
              <div className="des">{data?.weather?.[0]?.description}</div> 
            </div>
          </div>
        </div>
        <div className="place-container">
            {data && data.weather ? (
              <>
                <div id="country" className="country">
                   {data.name}
                </div>
                <img
              src={
                data.weather[0].main === "Clear"
                  ? clear
                  : data.weather[0].main === "Clouds"
                  ? cloud
                  : data.weather[0].main === "Drizzle"
                  ? drizzle
                  : data.weather[0].main === "Haze"
                  ? haze
                  : data.weather[0].main === "Mist"
                  ? mist
                  : data.weather[0].main === "Rain"
                  ? rain
                  : data.weather[0].main === "Snow"
                  ? snow
                  : "" 
              }
              
             
            />
            <div className="des"  style={{ fontWeight: 'bold', fontSize: '30px' }}>{data?.weather?.[0]?.description}</div> 
              </>
            ) : (
              <div></div>
            )}
          </div>
      </div>
    </div>
    </>
  )
}

export default Myapp;