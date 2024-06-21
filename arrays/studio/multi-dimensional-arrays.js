let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
let cabinet1 = "water bottles, meal packs, snacks, chocolate".split(', ').sort();
let cabinet2 = "space suits, jet packs, tool belts, thermal detonators".split(', ').sort();
let cabinet3 = "parrots, cats, moose, alien eggs".split(', ').sort();
let cabinet4 = "blankets, pillows, eyepatches, alarm clocks".split(', ').sort();

let cargoHold = [cabinet1, cabinet2, cabinet3, cabinet4];

console.log(cargoHold);

//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
onst readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Select a cabinet (0-3): ', (index) => {
    index = parseInt(index);
    if (index >= 0 && index <= 3) {
        console.log(`Contents of Cabinet ${index}: ${cargoHold[index].join(', ')}`);
      } else {
        console.log('Invalid cabinet number. Please enter a number between 0 and 3.');
      }
    
      readline.close();
    });
//3) Query the user to select a cabinet (0 - 3) in the cargoHold.
readline.question('Select a cabinet (0-3): ', (cabinetIndex) => {
    cabinetIndex = parseInt(cabinetIndex);
//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.

//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”
f (cabinetIndex >= 0 && cabinetIndex <= 3) {
    readline.question('Enter an item to check: ', (item) => {
      if (cargoHold[cabinetIndex].includes(item)) {
        console.log(`Cabinet ${cabinetIndex} DOES contain ${item}.`);
      } else {
        console.log(`Cabinet ${cabinetIndex} DOES NOT contain ${item}.`);
      }
      readline.close();
    });
  } else {
    console.log('Invalid cabinet number. Please enter a number between 0 and 3.');
    readline.close();
  }
});