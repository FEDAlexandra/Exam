const app = document.querySelector('.weather-app');
const temp = document.querySelector('.temp');
const dateOutput = document.querySelector('.date');
const timeOutput = document.querySelector('.time');
const conditionOutput = document.querySelector('.condition');
const nameOutput = document.querySelector('.name');
const icon = document.querySelector('.icon');
const form = document.getElementById('locationInput');
const search = document.querySelector('.search')
const btn = document.querySelector('.submit');
const cities = document.querySelectorAll('.city');
const currentWeatherItemEl = document.getElementById('current-weather-items');




let cityInput = "Kiev";

cities.forEach((city) => {
    city.addEventListener('click', (e) => {
        cityInput = e.target.innerHTML;
        fetchWeatherData();
        app.style.opacity = "0";
});
})
form.addEventListener('submit', (e) => {
    if(search.value.length == 0) {
        alert('Please type in a city name');
    } else {
        cityInput = search.value;
        fetchWeatherData();
        search.value = "";
        app.style.opacity = "0";
    }
    e.preventDefault();
});



function dayOfTheWeek(day, month, year) {
    weekday = ['Sunday',
     'Monday', 
     'Tuesday', 
     'Wednesday', 
     'Thursday',
      'Friday',
       'Saturday'];
    return weekday[new Date(`${day}/${month}/${year}`).getDay()];

};

function fetchWeatherData() {
    fetch(`http://api.weatherapi.com/v1/forecast.json?key=78ce6343333a4939a2f81302211411&q=${cityInput}&days=7&aqi=yes&alerts=yes`)
    .then(response => response.json())
    .then(data => {
        console.log(data);

        temp.innerHTML = data.current.temp_c + "&#176;";
        conditionOutput.innerHTML = data.current.condition.text;
        const date = data.location.localtime;
        const y = parseInt(date.substr(0, 4));
        const m = parseInt(date.substr(5, 2));
        const d = parseInt(date.substr(8, 2));
        const time = date.substr(11);
        dateOutput.innerHTML = `${dayOfTheWeek(d, m, y)} ${d}, ${m} ${y}`;
        timeOutput.innerHTML = time;
        nameOutput.innerHTML = data.location.name;


            let {feelslike_c, wind_kph, precip_mm, humidity, cloud} = data.current;
        console.log(data.current)
            currentWeatherItemEl.innerHTML = 
            `<div class="weather-item">
                <div>🥶Feels like temperature: ${feelslike_c}</div>
                    <div></div>
                    </div>
                    <div class="weather-item">
                    <div>🌫️Wind speed in kilometers:${wind_kph}</div>
                        <div></div>
                        </div>
                        <div class="weather-item">
                    <div>👇🏻Pressure in millimeters: ${precip_mm}</div>
                        <div></div>
                        </div>
                        <div class="weather-item">
                    <div>💧Humidity percentage: ${humidity}</div>
                        <div></div>
                        </div>
                        <div class="weather-item">
                        <div>☁️Cloud cover percentage: ${cloud}</div>
                            <div></div>
                            </div>
                      ` ;
                   
   
                      const API_KEY = 'ea0b872d582e24b9d8c1bb85bb1315ed'
                      let latitude = data.location.lat;
                      let longitude = data.location.lon;
                      
                      getWeatherData()
                      function getWeatherData () {
                              fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`).then(res => res.json()).then(data => {
                              console.log(data)
                  
                              showWeatherData(data);

                              })
                      

                     
                       
                      
                       
                      









                      const weatherForecastEl = document.getElementById('weather-forecast');
                        const currenttempEl = document.getElementById('current-temp');
                        const weatherHourEl = document.getElementById('weather-hour');
                      function showWeatherData (data) {

                        
                    
                                    let otherDayForcast = ''
                                    data.daily.forEach((day, idx) => {
                                        if(idx == 0){
                                            
                                            currenttempEl.innerHTML = `
                                            <img src="http://openweathermap.org/img/wn/${day.weather[0].icon}@4x.png" 
                                alt="weather icon" class="w-icon">
                                <div class="other">
                                <div class="day">${window.moment(day.dt*1000).format('ddd')}</div>
                                <div class="temp">Night  ${day.temp.night}&#176; C</div>
                                <div class="temp">Day  ${day.temp.day}&#176; C</div>
                                <div class="temp">Clouds  ${day.clouds}%</div>
                            </div>
                                            
                                            
                                            `
                                        }else{
                                            otherDayForcast += `
                                            <div class="weather-forecast-item">
                                            <div class="day">${window.moment(day.dt*1000).format('ddd')}</div>
                                            <img src="http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png" alt="weather icon" class="w-icon">
                                            <div class="temp">Night  ${day.temp.night}&#176; C</div>
                                            <div class="temp">Day  ${day.temp.day}&#176; C</div>
                                            <div class="temp">Clouds  ${day.clouds}%</div>
                                        </div>
                                            
                                            `
                                        }
                                    })
                    
                    
                                    weatherForecastEl.innerHTML = otherDayForcast;
                                    
                                 
                              
                       
                                    
                       
                           
                    }
                }
                   

                   
         


                //    console.log(data.forecast.forecastday[0].hour[0])
                   console.log(data.forecast.forecastday[0].hour[0].wind_kph)
                      let temperature0 = data.forecast.forecastday[0].hour[2].temp_c;
                      let temperature1 =  data.forecast.forecastday[0].hour[6].temp_c;
                      let temperature2 = data.forecast.forecastday[0].hour[10].temp_c;
                      let temperature3 = data.forecast.forecastday[0].hour[14].temp_c;
                      let temperature4 = data.forecast.forecastday[0].hour[18].temp_c;
                      let temperature5 = data.forecast.forecastday[0].hour[22].temp_c;
                      let wind0 = data.forecast.forecastday[0].hour[2].wind_kph;
                      let wind1 = data.forecast.forecastday[0].hour[6].wind_kph;
                      let wind2 = data.forecast.forecastday[0].hour[10].wind_kph;
                      let wind3 = data.forecast.forecastday[0].hour[14].wind_kph;
                      let wind4 = data.forecast.forecastday[0].hour[18].wind_kph;
                      let wind5 = data.forecast.forecastday[0].hour[22].wind_kph;

                    let icon = data.forecast.forecastday[0].hour[2].condition.icon;
                    let zero = document.getElementById("0");
                    zero.innerHTML =
                    `<div id="0">
                    <div class="weather-hour-item">
                    <div class="time" id="time0">Tue</div>
                    <img src="https:${icon}" alt="weather icon" class="w-icon" id="icon0">
                    <div class="temp" id="temp0">Temperature:${temperature0 }</div>
                    <div class="temp" id="temp0">Wind:${wind0}kp/h</div>
                </div>
                </div>`
                    
                let icon1 = data.forecast.forecastday[0].hour[6].condition.icon;
                let one = document.getElementById("1");
                one.innerHTML =
                `<div id="1">
                <div class="weather-hour-item">
                <div class="time" id="time1">Tue</div>
                <img src="https:${icon1}" alt="weather icon" class="w-icon" id="icon1">
                <div class="temp" id="temp1">Temperature:${temperature1 }</div>
                <div class="temp" id="temp0">Wind:${wind1}kp/h</div>
            </div>
            </div>`
            let icon2 = data.forecast.forecastday[0].hour[10].condition.icon;
                let two = document.getElementById("2");
                two.innerHTML =
                `<div id="2">
                <div class="weather-hour-item">
                <div class="time" id="time2">Tue</div>
                <img src="https:${icon2}" alt="weather icon" class="w-icon" id="icon2">
                <div class="temp" id="temp2">Temperature:${temperature2}</div>
                <div class="temp" id="temp0">Wind:${wind2}kp/h</div>
            </div>
            </div>`
            let icon3 = data.forecast.forecastday[0].hour[14].condition.icon;
                let three = document.getElementById("3");
                three.innerHTML =
                `<div id="3">
                <div class="weather-hour-item">
                <div class="time" id="time3">Tue</div>
                <img src="https:${icon3}" alt="weather icon" class="w-icon" id="icon3">
                <div class="temp" id="temp3">Temperature:${temperature3}</div>
                <div class="temp" id="temp0">Wind:${wind3}kp/h</div>
            </div>
            </div>`
            let icon4 = data.forecast.forecastday[0].hour[18].condition.icon;
                let four = document.getElementById("4");
                four.innerHTML =
                `<div id="4">
                <div class="weather-hour-item">
                <div class="time" id="time4">Tue</div>
                <img src="https:${icon4}" alt="weather icon" class="w-icon" id="icon4">
                <div class="temp" id="temp4">Temperature:${temperature4}</div>
                <div class="temp" id="temp0">Wind:${wind4}kp/h</div>
            </div>
            </div>`
            let icon5 = data.forecast.forecastday[0].hour[22].condition.icon;
                let five = document.getElementById("5");
                five.innerHTML =
                `<div id="5">
                <div class="weather-hour-item">
                <div class="time" id="time5">Tue</div>
                <img src="https:${icon5}" alt="weather icon" class="w-icon" id="icon5">
                <div class="temp" id="temp5">Temperature:${temperature5}</div>
                <div class="temp" id="temp0">Wind:${wind5}kp/h</div>
            </div>
            </div>`
                
     
                      let time0 =  '2:00';
                      let time1 =  '6:00';
                      let time2 = '10:00';
                      let time3 = '14:00';
                      let time4 = '18:00';
                      let time5 = '22:00';
                      
                  
                      document.getElementById("time0").innerHTML =  time0;
                      document.getElementById("time1").innerHTML =  time1;
                      document.getElementById("time2").innerHTML =  time2;
                      document.getElementById("time3").innerHTML =  time3;
                      document.getElementById("time4").innerHTML = time4;
                      document.getElementById("time5").innerHTML = time5;
                      
                  
                      
                    

        

        const iconId = data.current.condition.icon.substr(
            "//cdn.weatherapi.com/weather/64x64/".length);
            icon.src = "./icons/64x64/" + iconId;
            let timeOfDay = "day";
            const code = data.current.condition.code;
            if(!data.current.is_day) {
                timeOfDay = "night";
            }
        if(code == 1000) {
            app.style.backgroundImage = `
            url(./images/${timeOfDay}/clear.jpg)`
            btn.style.background = "#e5ba92";
            if(timeOfDay == "night") {
                btn.style.background = "#181e27";

            }
        }
        else if (
            code == 1003 ||
            code == 1006 ||
            code == 1009 ||
            code == 1030 ||
            code == 1069 ||
            code == 1087 ||
            code == 1135 ||
            code == 1273 ||
            code == 1276 ||
            code == 1279 ||
            code == 1282 
        ) {
            app.style.backgroundImage = `
            url(./images/${timeOfDay}/cloudy.jpg)`;
            btn.style.background = "#fa6d1b";
            if(timeOfDay == "night") {
                btn.style.background = "#181e27";
            }
        } else if (
            code == 1063 ||
            code == 1069 ||
            code == 1072 ||
            code == 1150 ||
            code == 1153 ||
            code == 1180 ||
            code == 1183 ||
            code == 1186 ||
            code == 1189 ||
            code == 1192 ||
            code == 1195 ||
            code == 1204 ||
            code == 1207 ||
            code == 1240 ||
            code == 1243 ||
            code == 1246 ||
            code == 1249 ||
            code == 1252 
        ) {
            app.style.backgroundImage = `
            url(./images/${timeOfDay}/rainy.jpg)`;
            btn.style.background = "#647d75";
            if(timeOfDay == "night") {
                btn.style.background = "#325c80";
            }
        } else {
            app.style.backgroundImage = `
            url(./images/${timeOfDay}/snowy.jpg)`;
            btn.style.background = "#4d72aa";
            if(timeOfDay == "night") {
                btn.style.background = "#1b1b1b";
            }
        }
        app.style.opacity = "1";
    })
    .catch(() =>  {
        alert('City not found');
        app.style.opacity = "1";
    });


    document.querySelector('.button').onmousemove = e => {

        const x = e.pageX - e.target.offsetLeft;
        const y = e.pageY - e.target.offsetTop;
      
        e.target.style.setProperty('--x', `${x}px`);
        e.target.style.setProperty('--y', `${y}px`);
      
      }



}
fetchWeatherData();
app.style.opacity = "1";


