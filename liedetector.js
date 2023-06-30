function lieDetectorTest() {
    var lies = 0;
    var stolenDiamond = {}; if (stolenDiamond) {
        console.log("You stole the diamond"); 
        lies++;
        console.log(lies);

    } var car = { keysInPocket: null }; if (car.keysInPocket) {
        console.log("Uh oh, guess you stole the car!"); 
        lies++;
        console.log(lies);

    } if (car.emptyGasTank) {
        console.log("You drove the car after you stole it!"); 
        lies++;
        console.log(lies);

    }
    var foundYouAtTheCrimeScene = []; if (foundYouAtTheCrimeScene) {
        console.log("A sure sign of guilt");
        lies++;
        console.log(lies);

    } if (foundYouAtTheCrimeScene[0]) {
        console.log("Caught with a stolen item!"); 
        lies++;
        console.log(lies);

    }
    var yourName = " "; if (yourName) {
        // A string with one space.
        console.log("Guess you lied about your name"); 
        lies++;
        console.log(lies);

    } return lies;
}
var numberOfLies = lieDetectorTest(); 
console.log("You told " + numberOfLies + " lies!"); 
if (numberOfLies >= 3) {
console.log("Guilty as charged");
}