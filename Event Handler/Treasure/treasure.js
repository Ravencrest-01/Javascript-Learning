var map = document.getElementById("map");
var coords = document.getElementById("coords");

window.onload = init;

function init() {
    map.addEventListener("mousemove", showCoords);
}

function showCoords(eventObj) {
    var x= eventObj.clientX;
    var y= eventObj.clientY;
    
    coords.innerHTML = "Map Coordinates: " + x +", "+y;
}

// function timeHandler(){
//     alert("Hey what are you doing? Staring at blank screen!!!");
// }

// setTimeout(timeHandler, 5000)

function msBeforeUnload() {
    // do something before the page unloads
    return "Are you sure you want to leave?";
  }
  
  window.onmsbeforeunload = msBeforeUnload;
  
