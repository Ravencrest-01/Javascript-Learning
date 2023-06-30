function compareNumber(num1, num2){
    if (num1>num2){
        return 1;
    }
    else if(num1===num2){
        return 0;
    }
    else{
        return -1;
    }
}

var arrayNumber = [50,10,20,30,70,40,1000];
var sortedArray = arrayNumber.slice();
sortedArray.sort(compareNumber);
console.log('This is original Array:-' ,arrayNumber.join(','));
console.log("This is the sorted Array:-",sortedArray.join(','));