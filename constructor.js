function Customers(name, age, ticket, prefrence){
    this.name=name;
    this.age = parseInt(age);
    this.ticket = ticket;
    this.prefrence = prefrence;
}

var sabhya = new Customers("sabhya", 21, "paid", "veg");
var raven = new Customers("raven", 25, "paid", "nonVeg");
var manan = new Customers("manan", 18, "paid", "nonVeg");

var customer=[sabhya, raven, manan];

// console.log(sabhya);
// console.log(raven);
// console.log(manan);
// console.log(customer);
// console.log(Customers);
for(var i=0;i<customer.length;i++){
    console.log(customer[i],"\n");
}