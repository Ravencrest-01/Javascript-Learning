var supra = {
    make: "toyota",
    year: "2005",
    model: "mk3",
    started: false,
    fuel: 0,

    start: function()
    {
        this.started = true;
    },
    stop: function()
    {
        this.started = false;
    },

    drive: function()
    {
        if(this.started==true)
        {
            if(this.fuel>0)
            {
                alert(this.make+" "+this.model+" supra "+" goes stutututu");
                alert(this.make+" "+this.model+" supra "+" goes Ratatatata");
                alert(this.make+" "+this.model+" supra "+" goes stutututu");
                alert(this.make+" "+this.model+" supra "+" goes Ratatatata");
            }
            else
            {
                alert("Oh No!!! Out of fuel. Add some fuel to get started");
            }
        }
        else
        {
            alert("Please start the engine");
        }
    },

    addFuel: function(amount){
        amount=prompt("How much fuel you want to add")
        this.fuel=this.fuel+amount;
        alert("You have "+amount+" fuel in your "+supra.make+" supra "+supra.model);
    } 
};
supra.drive();
supra.start();
supra.drive();
supra.addFuel();
supra.drive();
supra.stop();