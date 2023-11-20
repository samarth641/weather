import React, { useState, useEffect } from 'react';


const api = {
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const searchCity = '';
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const [suggestions, setSuggestions] = useState([]);
  const myArray = [1, 2, 3];





  if (myArray !== undefined && myArray.length > 0) {
    console.log(`The first element of myArray is ${myArray[0]}`);
  }



  useEffect(() => {
    // Get user's current location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async position => {
        const { latitude, longitude } = position.coords;

        // Fetch weather data for user's location
        const url = `${api.base}weather?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_OPEN_WEATHER}`;
        const res = await fetch(url);
        const result = await res.json();
        setWeather(result);
      }, error => {
        console.log(error.message);
      });
    }
  }, []);

  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&appid=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery(''); // moved this line inside the then block
        });
    }
  };


  const handleChange = evt => {
    setQuery(evt.target.value);

    // Get city suggestions
    if (evt.target.value.length >= 3) {
      fetch(`${api.base}find?q=${evt.target.value}&type=like&cnt=5&appid=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setSuggestions(result.list);
        });
    } else {
      setSuggestions([]);
    }
  };




  const handleSuggestionClick = suggestion => {
    setQuery(suggestion.name);
    setSuggestions([]);
    fetch(`${api.base}weather?q=${suggestion.name}&appid=${api.key}`)
      .then(res => res.json())
      .then(result => {
        setWeather(result);
        setQuery('');
      });
  };
  
  
  

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }

  return (
    <div className={`app ${typeof weather.main != "undefined" ? weather.weather[0].main.toLowerCase() : ""}`}>
      <main>
        <div class="Card">
          <div class="CardInner">
            <label>Search the city name</label>
            <div class="container">
              <div class="Icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#657789" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
              </div>
              <div class="InputContainer">
                <input
                  type="search"
                  name="search"
                  pattern=".*\S.*"
                  required
                  className="search-bar"
                  placeholder="Search..."
                  onChange={handleChange}
                  value={query}
                  onKeyPress={search} />
              </div>
            </div>
          </div>
         
          {suggestions.length > 0 && (
            <div className="suggestions">
              <ul>
                {suggestions.slice(0, 4).map(suggestion => (
                  <li
                    key={suggestion.id}
                    className="suggestion"
                    onClick={() => handleSuggestionClick(suggestion)}
                  >
                    {suggestion.name}, {suggestion.sys.country}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>


        {(typeof weather.main != "undefined") ? (
          <div>
            <div className="location-box">
              <div className="location">{weather.name}, {weather.sys.country}</div>
              <div className="date">{dateBuilder(new Date())}</div>
            </div>
            <div className="weather-box">
              <div className="temp">
                {Math.round(weather.main.temp - 273.15)}°c
              </div>
              {weather.weather && weather.weather.length > 0 && (
                <div className="weather">{weather.weather[0].main}</div>
              )}
              {weather.weather && weather.weather[0].icon && (
                <img
                  src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
                  alt="weather icon"
                  className="weather-icon"
                />
              )}
            </div>

          </div>
        ) : ('')}
      </main>
    </div>
  );

}

export default App;