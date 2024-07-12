const searchInput=document.querySelector(".search");
const searchIcon=document.querySelector(".searchIcon");
const weather_Image=document.querySelector(".wheaterImg");
const current_Temperature=document.querySelector(".tempreature");
const currengt_Info=document.querySelector(".weatherinfo");
const humidity=document.querySelector(".humidityval");
const wind_Speed=document.querySelector(".windSpeed");
const presuure=document.querySelector(".presuure");

async function checkWeather(cityName){
    const api_key="5c7dfb5af1803402232e092f94d8e660";
    const api_url=`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${api_key}`;

    const weather_data=await fetch(`${api_url}`).then(Response=>Response.json());
    console.log(weather_data);
    console.log(weather_data.main.temp);
    console.log(weather_data.wind.speed);
    const apitemp= Math.round(weather_data.main.temp - 273.15);
    current_Temperature.innerHTML=`${apitemp}°C`;

    wind_Speed.innerHTML=`<span class="windSpeed text-3xl font-semibold">${weather_data.wind.speed}Km/H</span>`;
    humidity.innerHTML=`${weather_data.main.humidity}%`;

    presuure.innerHTML=`${weather_data.main.pressure} Mb`

    currengt_Info.innerHTML=`${weather_data.weather[0].description}`
    console.log(weather_data.weather[0].description);

    if(weather_data.weather[0].main=="Clouds"){
        weather_Image.innerHTML=`<img src="${allimages/cloud.png}" alt="clearimg" class="w-64 inline-block"></img>`;
    }
    else if(weather_data.weather[0].main=="Clear"){
        weather_Image.innerHTML=`<img src=${"allimages/clear.png"} alt="clearimg" class="w-64 inline-block"></img>`;
    }
    else if(weather_data.weather[0].main=="Rain"){
        weather_Image.innerHTML=`<img src=${"allimages/rain.png"} alt="clearimg" class="w-64 inline-block"></img>`;
    }
    else if(weather_data.weather[0].main=="Haze"){
        weather_Image.innerHTML=`<img src=${"allimages/mist.png"} alt="clearimg" class="w-64 inline-block"></img>`;
    }
    else if(weather_data.weather[0].main=="Snow"){
        weather_Image.innerHTML=`<img src=${"allimages/snow.png"} alt="clearimg" class="w-64 inline-block"></img>`;
    }

}

searchIcon.addEventListener('click',()=>{
    checkWeather(searchInput.value);
})
