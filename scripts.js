//step 1
let villeChoisie;

if ("geolocation" in navigator) {
navigator.geolocation.watchPosition((position) => {
  const url = 'https://api.openweathermap.org/data/2.5/weather?lat='
  + position.coords.latitude + '&lon='
  + position.coords.longitude + '&appid=cc5d5a00b708015b0b9a5bab2831c790&units=metric';
  console.log(url);
let request = new XMLHttpRequest();
//GET
request.open('GET', url);
request.responseType = 'json';
request.send();

request.onload = function () {
    if (request.readyState === XMLHttpRequest.DONE) {
        if (request.status === 200) {
            let repose      = request.response;
            let temperature = repose.main.temp;
            let ville = repose.name;
            //step 2
            document.querySelector('#temperature_label').textContent = temperature;
            document.querySelector('#ville').textContent = ville;
            //end step 2
        }
        else {
            alert('Some problm there is');
        }
    }
}
}, erreur, options);
}
else {
  villeChoisie = 'Paris';
  recevoirTemperature(villeChoisie);
}

var options = {
  enableHighAccurancy: true
}
// 
//step 3
let changerDeVille = document.querySelector('#changer');
changerDeVille.addEventListener('click', () => {
  villeChoisie     = prompt('Quelle ville souhaitez-vous voir ?');
  //end step 3
  recevoirTemperature(villeChoisie);
});

function erreur() {
  villeChoisie = "Paris";
  recevoirTemperature(villeChoisie);
}

//step 1
function recevoirTemperature(ville) {
  const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + ville + '&appid=cc5d5a00b708015b0b9a5bab2831c790&units=metric';
let request = new XMLHttpRequest();
//GET
request.open('GET', url);
request.responseType = 'json';
request.send();

request.onload = function () {
    if (request.readyState === XMLHttpRequest.DONE) {
        if (request.status === 200) {
            let repose      = request.response;
            let temperature = repose.main.temp;
            let ville = repose.name;
            //step 2
            document.querySelector('#temperature_label').textContent = temperature;
            document.querySelector('#ville').textContent = ville;
            //end step 2
        }
        else {
            alert('Some problm there is');
        }
    }
}
}