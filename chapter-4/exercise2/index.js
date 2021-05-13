// Oma ratkaisu

function reverseArray(array) {
    let reversedArray = [];

    for (let i = 1; i <= array.length; i++) reversedArray.push(array[array.length - i]);
    
    return reversedArray;
}

function reverseArrayInPlace(array) {
    let shiftedValue, 
        lastIndex = array.length - 1,
        count = array.length / 2;

    if (count % 1 !== 0) count -= 0.5;

    for (let i = 0; i < count; i++) {
        shiftedValue = array[i];
        array[i] = array[lastIndex - i];
        array[lastIndex - i] = shiftedValue;
    }

    return array;
}

//////////////////////////////////////////////////////////////////////////////////////////////////

// Malliratkaisu

/*function reverseArray(array) {
    let output = [];
    for (let i = array.length - 1; i >= 0; i--) {
      output.push(array[i]);
    }
    return output;
}

function reverseArrayInPlace(array) {
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
      let old = array[i];
      array[i] = array[array.length - 1 - i];
      array[array.length - 1 - i] = old;
    }
    return array;
}*/