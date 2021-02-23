

const loc = document.querySelector('.location-timezone');
const locDiv = document.querySelector('.location p');
const temp = document.querySelector('.temperature-degree');
const desc = document.querySelector('.temperature-description');
const weatherIcon = document.querySelector('.weather_icon');

window.addEventListener('load', ()=> {
    let long;
    let lat;
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition( position =>{
            // console.log(position);
            long = position.coords.longitude;
            lat = position.coords.latitude;
            const proxy = 'https://cors-anywhere.herokuapp.com/';
            const api = `${proxy}api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=f26243ce6038fed6ff92523226e6b337
            `;
            fetch(api)
            .then( (reponse) =>{
                return reponse.json();
            }) 
            .then(data => { 
                const {name} = data;
                const {feels_like} = data.main;
                const {icon, description} = data.weather[0]; 
                loc.textContent = name;
                // console.log(icon, data);
                temp.textContent = Math.floor(feels_like) - 273;
                locDiv.innerHTML =`<img class="weather_icon" src="http://openweathermap.org/img/wn/${icon}@2x.png" alt="weather-img">`;
                 desc.textContent = description; 
            })
        })
    }
    
});