// [START maps_interaction_cooperative]
/**
 * This sample sets the gesture handling mode to 'cooperative',
 * which means that on a mobile device, the user must swipe with one
 * finger to scroll the page and two fingers to pan the map.
 */
function initMap() {
  const center = { lat: -25.363, lng: 131.044 };
  const zoom = 4;

  // [START maps_interaction_cooperative_mapoptions]
  new google.maps.Map(document.getElementById("map"), {
    zoom,
    center,
    gestureHandling: "cooperative",
  });
  // [END maps_interaction_cooperative_mapoptions]
}
// [END maps_interaction_cooperative]
