function isPin(pin) {
    if(pin.length > 5) {
        return true;
        // console.log("you entered more than 5 numbers");
    } else {
        return false;

    }
}

isPin("1 2 5");