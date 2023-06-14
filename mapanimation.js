// This array contains the coordinates for all bus stops between MIT and Harvard
// const busStops = [
//   [-71.093729, 42.359244],
//   [-71.094915, 42.360175],
//   [-71.0958, 42.360698],
//   [-71.099558, 42.362953],
//   [-71.103476, 42.365248],
//   [-71.106067, 42.366806],
//   [-71.108717, 42.368355],
//   [-71.110799, 42.369192],
//   [-71.113095, 42.370218],
//   [-71.115476, 42.372085],
//   [-71.117585, 42.373016],
//   [-71.118625, 42.374863],
// ];

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