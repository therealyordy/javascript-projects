// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener("load", function() {
    
    
    let rocket = document.getElementById("rocket");
    rocket.style.position = "absolute";
    rocket.style.bottom = "0px";
    rocket.style.left = "270px";

    let status = document.getElementById("flighstatus");
    let background = document.getElementByIdId('shuttleBackground');
    let height = document.getElementById('spaceShuttleHeight');


    const takeOff = document.getElementById("takeoff")
    takeOff.addEventListener("click", event => {
    let responsose = window.confirm("Confirm that the shuttle is ready for takeoff.");
    if (response) {
        let status = document.getElementById('flightstatus');
        status.innerHTML = "shuttle in flight.";
        
        background.style.backgroundColor = "blue";
        this.document.getElementById("spaceShuttleHeight").innerHTML = "10000"; 
    }
});

const land = document.getElementById("landing");
landing.addEventListener("click", function() {
    window.alert("The shuttle is landing. Landing gear engaged.");
    status.innerHTML = "The shuttle has landed "
   
}


});