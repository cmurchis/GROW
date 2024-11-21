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


 

   function initMap() {
    const myLatlng = { lat: -25.363, lng: 131.044 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: myLatlng,
    });
  

    map.addListener("center_changed", () => {
      // 3 seconds after the center of the map has changed, pan back to the
      // marker.
      window.setTimeout(() => {
        map.panTo(marker.getPosition());
      }, 3000);
    });
    marker.addListener("click", () => {
      map.setZoom(8);
      map.setCenter(marker.getPosition());
    });
  }

 
/* // Create a pin element.// */
const pin = new PinElement({
    scale: 1.5,
});
/* // Create a marker and apply the element.// */

const marker = new AdvancedMarkerElement({
    map,
    position: {lat: 38.8375, lng: -120.8958  },
    content: pin.element,
});


mapMarkerImg.src =
  "img/grow.png";




const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let labelIndex = 0;
  // Add the marker at the clicked location, and add the next-available label
  // from the array of alphabetical characters.

function fillInAddress() {
    // Get the place details from the autocomplete object.
    const place = autocomplete.getPlace();
    let address1 = "";
    let postcode = "";
  
    // Get each component of the address from the place details,
    // and then fill-in the corresponding field on the form.
    // place.address_components are google.maps.GeocoderAddressComponent objects
    // which are documented at http://goo.gle/3l5i5Mr
    for (const component of place.address_components) {
      const componentType = component.types[0];
  
      switch (componentType) {
        case "street_number": {
          address1 = `${component.long_name} ${address1}`;
          break;
        }
  
        case "route": {
          address1 += component.short_name;
          break;
        }
  
        case "postal_code": {
          postcode = `${component.long_name}${postcode}`;
          break;
        }
  
        case "postal_code_suffix": {
          postcode = `${postcode}-${component.long_name}`;
          break;
        }
        case "locality":
          document.querySelector("#locality").value = component.long_name;
          break;
        case "administrative_area_level_1": {
          document.querySelector("#state").value = component.short_name;
          break;
        }
        case "country":
          document.querySelector("#country").value = component.long_name;
          break;
      }
    }
  
    address1Field.value = address1;
    postalField.value = postcode;
    // After filling the form with address components from the Autocomplete
    // prediction, set cursor focus on the second address line to encourage
    // entry of subpremise information such as apartment, unit, or floor number.
    address2Field.focus();
  }
  
  window.initAutocomplete = initAutocomplete