function initMap() {
    const map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 38.8375, lng: -120.8958},
      zoom: 17,
      mapId: 'DEMO_MAP_ID',
    });

  }

  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");
  const navLink = document.querySelectorAll(".nav-link");
  
  hamburger.addEventListener("click", mobileMenu);
  navLink.forEach(n => n.addEventListener("click", closeMenu));
  
  function mobileMenu() {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
  }
  
  function closeMenu() {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
  }

  // A marker with a with a URL pointing to a PNG.
const mapMarkerImg = document.createElement("img");

mapMarkerImg.src =
  "img/grow.png";



const mapMarkerView = new mapMarkerElement({
  map,
  center: {lat: 38.8375, lng: -120.8958 },
  zoom: 17,
  content: mapMarkerImg,
  title: "A marker using a custom PNG Image",
});

const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let labelIndex = 0;

function initMap() {
  const sacramento = {lat: 38.8375, lng: -120.8958 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: bangalore,
  });

  // This event listener calls addMarker() when the map is clicked.
  google.maps.event.addListener(map, "click", (event) => {
    addMarker(event.latLng, map);
  });
  // Add a marker at the center of the map.
  addMarker(sacramento, map);
}

// Adds a marker to the map.
function addMarker(location, map) {
  // Add the marker at the clicked location, and add the next-available label
  // from the array of alphabetical characters.
  new google.maps.Marker({
    position: location,
    label: labels[labelIndex++ % labels.length],
    map: map,
  });
}

window.initMap = initMap;