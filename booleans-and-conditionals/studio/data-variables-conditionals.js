// Initialize Variables below
let date = "Monday 2019-03-18";
let time = "10:05:34 AM";
let astronautCount = 7;
let astronautStatus = ready;
let averageAstronautMassKg = 80.7;
let crewMassKg = (astronautCount * averageAstronautMassKg);
let fuelMassKg = "760,000";
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg
let maximumMassLimit = 850000;
let fuelTempCelsius = -225;
let minimumFuelTemp = -300;
let maximumFuelTemp = -150;
let fuelLevel = "100%";
let weatherStatus =  "clear";
let preparedForLiftOff = true;

// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
if (astronautCount > 7) {
    preparedForLiftOff = false;
    console.log("Security alert Kick" + (astronautCount - 7) + "astronauts off to launch");
}
// add logic below to verify all astronauts are ready
if (astronautStatus !=="ready") {
    preparedForLiftOff = false; 
    console.log('Somehow, one or more astrnonaut is not ready??');
// add logic below to verify the total mass does not exceed the maximum limit of 850000
if (totalMassKg > maximumMassLimit) {
    console.log("Mass exceeds maximum mass limit");
    preparedForLiftOffset = false;
}
// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300

if (fuelTempCelsius < minimumFuelTempCelsius || fuelttempCelsius > maximumFuelTemp) {
    console.log("Fuel temperature is not in range - DO NOT LAUNCH");
}

// add logic below to verify the fuel level is at 100%

if (fuelLevel !== "100%") {
    preparedForLiftOff = false; 
    console.log("Please refuel before launch.");
}

// add logic below to verify the weather status is clear
if (weatherStatus !== "clear") {
    console.log("Weather is not clear.");
    preparedForLiftOff = false;
}
// Verify shuttle launch can proceed based on above conditions
if (!preparedForLiftOff) {
    console.log("ABORT MISSION!");
} else {
    console.log(`
    All systems are a go! Initiating space shuttle launch sequence.
    ${dashes}
    Date: ${date}
    Time: ${time}
    Astronaut Count: ${astronautCount}
    Crew Mass: ${crewMassKg} kg
    Fuel Mass: ${fuelMassKg} kg
    Shuttle Mass: ${shuttleMassKg} kg
    Total Mass: ${totalMassKg} kg
    Fuel Temperarture: ${fuelttempCelsius} C
    Weather Status: ${weatherStatus}
    ${dashes}
    Have a safe trip astronauts!`);
}
