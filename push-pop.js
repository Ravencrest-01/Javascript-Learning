var genre=[];

genre[0]="Raven";
genre[1]="Nanotech";
genre[2]="Pysn";
genre[3]="Manan";
var size = genre.length;
console.log(size);

var output;
for(var i=0;i<genre.length;i++)
{
    output=("Genre number "+i+" is: "+genre[i]);
    console.log(output);
}
console.log("________________________________");
console.log("Now Pushing");

genre.push("Ananshu");
genre.push("Kapil");
var size = genre.length;
console.log(size);
for(var i=0;i<genre.length;i++)
{
    output=("Genre number "+i+" is: "+genre[i]);
    console.log(output);
}

console.log("________________________________");
console.log("Now Poping");

genre.pop();
var size = genre.length;
console.log(size);
for(var i=0;i<genre.length;i++)
{
    output=("Genre number "+i+" is: "+genre[i]);
    console.log(output);
}
