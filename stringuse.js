var phoneNumber;
function validate(phoneNumber) {
    if (phoneNumber.length !== 8) {
        console.log("This works if numbers are not there");
        return false;
    }
    for (var i = 0; i < phoneNumber.length; i++) {
        if (i === 3) {
            if (phoneNumber.charAt(i) !== '-') {
                console.log("This works if there is no - at 3rd place");
                return false;
            }
        }
        else if (isNaN(phoneNumber.charAt(i)))
        {
            console.log("This works if there is no number present at all places except 3rd place");
            return false;
        }
        console.log("This works if the number is correct");
        return true;
    }
}
validate("1S3-4567");
console.log("The Code Works");


function validate2(phoneNumber) {
    if (phoneNumber.length !== 8) {
        return false;
    }

    var first = phoneNumber.substring(0, 3); 
    var second = phoneNumber.substring(4); 
    if (phoneNumber.charAt(3) !== "-" || isNaN(first) || isNaN(second)) 
    {
        console.log("This works if there is any error");
        console.log(first);
        return false;
    } 
    return true;
}
validate2("1234567");
console.log("The Code Works");