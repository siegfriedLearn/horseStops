// This array contains the coordinates for all bus stops between MIT and Harvard
const busStops = [
  [ -103.32834090665862, 20.713979106312998],//Guadalajara
  [ -104.87018520090614, 21.935463427426928],//Tierras Nayaritas
  [ -105.7796280689361, 22.83167006056774],//Esquinapa
  [ -107.38379274645082, 24.873868059801207],//Culiacán
  [ -108.96779498557257, 25.790942293729245],//Mochis
  [ -110.35198871422696, 30.28590373495531],//Sonora
  [ -109.9077602357086, 27.57237971778815],//Valle del Yaqui
  [ -110.95362777719816, 29.073728575518803],//Hermosillo
  [ -112.13839028275734, 30.776211834472587],//Caborca
  [ -115.40533073181902, 32.58611057508934],//Mexicali
  [ -116.07406520961196, 32.52721889118916],//Rumorosa
  [ -117.01865151052324, 32.50820936814842],//Tijuana
  [ -117.05923039695855, 32.37503021402636],//Rosarito
  [ -116.59964489398374, 31.86708943919681],//Ensenada
];

// TODO: add your own access token
mapboxgl.accessToken = 'pk.eyJ1IjoiY2FtbWVkaW5hbWUiLCJhIjoiY2xpdGFtOHVzMDF4bzNkcjF2dXpsbjJqZSJ9.UPLNGKdRC37sfRh4smGQRA';

// This is the map instance
let map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-108.94423520446351, 25.863956642013296],
  zoom: 5,
});

// TODO: add a marker to the map at the first coordinates in the array busStops. The marker variable should be named "marker"

let marker = new mapboxgl.Marker()
.setLngLat([-103.3389863878888, 20.723936112152085])
.addTo(map);


// counter here represents the index of the current bus stop
let counter = 0;
function move() {
  // TODO: move the marker on the map every 1000ms. Use the function marker.setLngLat() to update the marker coordinates
  // Use counter to access bus stops in the array busStops
  // Make sure you call move() after you increment the counter.
  setTimeout(()=>{
    if (counter >= busStops.length) return;
    marker.setLngLat(busStops[counter]);
    counter++;
    move()
  }
  , 1000)
}