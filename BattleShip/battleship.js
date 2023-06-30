//Declaration of variables
var randomLoc = Math.floor(Math.random()*5);
var location1 = randomLoc;
var location2 = location1+1;
var location3 = location2+1;
var guess;
var hits=0;
var guesses=0;
var isSunk = false;

//Looping of the code until isSunk is true
while(isSunk==false)
{
    //Getting Guess from user
    guess=prompt("Ready, aim, fire!!! (Enter number from 0-9):");


    //Variable declaration to check if the user has entered a valid input
    if(guess<0 || guess>9)
    {
        alert("Please enter a valid input!");
    }
    else
    {
        guesses=guesses+1;

        //Hits Registration process
        if(guess==location1 || guess==location2 || guess==location3)
        {
            alert("HIT!!!");
            hits=hits+1;

            if(hits==3)
            {
                isSunk=true;
                alert("You sunk my Battleship TwT !!!");
            }
        }
        else
        {
            alert("Miss!!!");
        }
    
    }
}

//Post game analysis
var stat= "You took "+guesses+" guesses to sink my Battleship."+" Which means your accuracy was "+ (3/guesses);
alert(stat);