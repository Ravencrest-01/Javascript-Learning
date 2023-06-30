var justAVar = "Global Scope";

function scoping(){
    justAVar = "Local Scope";
    return justAVar;
}

console.log(scoping());
console.log(justAVar);



var justAVar2 = "Global Scope";

function scoping2(){
    justAVar2 = "Local Scope";
    return justAVar2;
}

console.log(justAVar2);
console.log(scoping2());