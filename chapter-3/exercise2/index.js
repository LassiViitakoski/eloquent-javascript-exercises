// Oma ratkaisu

function isEven(value) {
    if (value === 1) return false;
    if (value === 0) return true;

    if (value > 0) return isEven(value - 2);
    else           return isEven(value + 2);
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////

// Malliratkaisu

/*function isEven(n) {
    if (n == 0) return true;
    else if (n == 1) return false;
    else if (n < 0) return isEven(-n);
    else return isEven(n - 2);
}*/