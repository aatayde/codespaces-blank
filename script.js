
let key = "0376c7e7c3f905978d9b8dfbdc92fdda"
let city = "london"
let weatherCall = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${key}`

// console.log(weatherCall)

async function logWeather() {
    const response = await fetch(weatherCall);
    const weather = await response.json();
    console.log(weather);
  }
  
logWeather()

