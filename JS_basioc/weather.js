const weather = document.querySelector(".js-weather")
const API_KEY = "e2726558468470e1bb014e0e0e6b7c3c"
const COORDS = "coords";

function getWeather(lat,lng){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`     
    )
    .then(function(response){
        return response.json();
    })
    .then(function(json){
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = `${temperature} @ ${place}`
    })

}
function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj))
}

function  handleGeoSuccess(position){
    const latitude = position.coords.latitude
    const longitude = position.coords.longitude
    const coordsObj = {
        // latitude : latitude,
        // longitude : longitude,
        latitude,
        longitude
    }
    saveCoords(coordsObj);
    getWeather(latitude,longitude)
}
function handleGeoError(){
    console.log("can't access")
}
function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess,handleGeoError)
}


function loadCoords(){
    const loadedCoords =  localStorage.getItem(COORDS);
    if(loadedCoords ===  null){
        askForCoords();

    }else{
        const parsedCoordes = JSON.parse(loadedCoords);
        getWeather(parsedCoordes.latitude,parsedCoordes.longitude)
    }
}
function init(){
    loadCoords();
};
init();