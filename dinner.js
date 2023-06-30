let customerList = [
    {name: 'raven', paid: 'yes', ticket: 'premium', age: 21, prefrence: 'nonVeg'},
    {name: 'sabhya', paid: 'yes', ticket: 'firstclass', age: 20, prefrence: 'nonVeg'},
    {name: 'karam', paid: 'yes', ticket: 'regular', age: 18, prefrence: 'veg'},
    {name: 'utkarsh', paid: 'yes', ticket: 'regular', age: 17, prefrence: 'veg'},
    {name: 'manan', paid: 'yes', ticket: 'regular', age: 19, prefrence: 'veg'},
    {name: 'ananshu', paid: 'no', ticket: 'regular', age: 19, prefrence: 'nonVeg'}
];
const softDrinks = ["fanta", "coke", "sprite", "thumbsup", "limca", "frooti"];
const hardDrinks = ["vodka", "rum", "beer", "whiskey", "wine"];
let vegDinner = ["paneer", "chole", "rajma", "aloo"];
let nonVegDinner = ["chicken", "mutton", "egg", "fish"];


for (let i = 0; i < customerList.length; i++) {
    console.log('This is the original customer list: ',customerList[i]);
}


function hasTicket(){
    for(let o=0; o<customerList.length; o++){
        let customer = customerList[o];
        if(customer.paid!=='yes'){
            customerList.splice(o,1);
            o--;
        }
    }
}
function orderDrinks(){
    for (let i = 0; i < customerList.length; i++) {
        let customer = customerList[i];
        console.log(customer.name);
        if(customer.age>=18){
            console.log('The menu for drinks are: ', hardDrinks, softDrinks);
            console.log('');
        }
        else{
            console.log('The menu for drinks is: ', softDrinks);
            console.log('');
        }
    }
}
function addOns(){
    for (let k = 0; k < customerList.length; k++) {
      let customer = customerList[k];
      let customerVeg = vegDinner.slice();
      let customerNonVeg = nonVegDinner.slice();
      if (customer.ticket === "firstclass" || customer.ticket === "premium") {
        customerVeg.push("dahi");
        customerNonVeg.push("biryani");
      }
  
      customer.vegDinner = customerVeg;
      customer.nonVegDinner = customerNonVeg;
    }
}  
function orderDinner(){
    for (let j=0 ; j<customerList.length; j++){
        let customer = customerList[j];
        addOns();
        console.log("Customer name : ", customer.name)
        if(customer.prefrence=='veg'){
            console.log(customer.vegDinner);
        }
        else{
            console.log(customer.nonVegDinner);
            }
    }
}

hasTicket();
for (let i = 0; i < customerList.length; i++) {
    console.log('This is the updated customer list: ',customerList[i]);
}
orderDrinks();
orderDinner();