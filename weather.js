const API_KEYS = "e2726558468470e1bb014e0e0e6b7c3c"
const COORDS = "coords";

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
}
function handleGeoError(){
    console.log("can't access")
}
function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess,handleGeoError)
}


function loadCoords(){
    const loadedCords =  localStorage.getItem(COORDS);
    if(loadedCords ===  null){
        askForCoords();

    }else{
        //getWeather
    }
}
function init(){
    loadCoords();
};
init();