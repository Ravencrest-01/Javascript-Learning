// var name;
// var age;
// function voter(name, age)
// {
//     if (age>=18)
//     {
//         console.log(name+" is able to Vote in this and upcoming elections 😁.");
//     }
//     else
//     {
//         console.log(name+" have to wait till he/she are 18 😔.");
//     }
// }

// voter("Ritik", 20);
// voter("Raven", 18);
// voter("Sabhya", 16);

var x=0;
var age=2;

function addOne(x)
{
    while(age>0)
    {
    console.log(age+" Age Before\n");
    console.log(x+" value of x Before\n");
    console.log("__________________________");    
    x=x+1;
    console.log(age+" Age after\n");
    console.log(x+" value of x after\n");
    console.log("__________________________");
    age=age-1;
    console.log(age+" Age after substration\n");
    console.log("__________________________");
    }
}
addOne(age);