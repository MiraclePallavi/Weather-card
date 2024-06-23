const options = {
  method: 'GET',

  headers: {
    'X-RapidAPI-Key': '10da349928msh177d5962780f5e0p1a57b8jsn33dd92a5a907',
    'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
  }
};
const getWeather = (city)=>{
  cityname.innerHTML = city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
  .then(response => response.json())
  .then(response => {
    console.log(response)
  
    //cloud_pct.innerHTML= response.cloud_pct
    //feels_like.innerHTML=response.feels_like
    humidity.innerHTML=response.humidity+ "%"
   // max_temp.innerHTML=response.max_temp
    //min_temp.innerHTML=response.min_temp
    //sunrise.innerHTML=response.sunrise
    //sunset.innerHTML=response.sunset
    temp.innerHTML=response.temp + "C"
    //wind_degrees.innerHTML=response.wind_degrees
    wind_speed.innerHTML=response.wind_speed + "km/h"
  })
  .catch(err => console.log(err));
}

submit.addEventListener("click", (e)=>{
  getWeather(city.value)
  e.preventDefault()
})
getWeather("Patna")