// Oma ratkaisu

function range(start, end, step = 1) {
    let array = [];
    let arrayCount = end - start;
    let isStartGreaterThanEnd = start > end;

    if (isStartGreaterThanEnd && step > 0) return array;
    if (!isStartGreaterThanEnd && step < 0) return array;

    if (isStartGreaterThanEnd) {
        arrayCount *= -1;
        step *= -1;
    }
    
    for (let i = 0; i < (arrayCount + 1); i += step) {
        (isStartGreaterThanEnd) ? array.push(start - i) : array.push(start + i);
    }

    return array;
}

function sum(array) {
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }

    return sum;
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Malliratkaisu

/*function range(start, end, step = start < end ? 1 : -1) {
    let array = [];
  
    if (step > 0) {
      for (let i = start; i <= end; i += step) array.push(i);
    } else {
      for (let i = start; i >= end; i += step) array.push(i);
    }
    return array;
}
  
function sum(array) {
    let total = 0;
    for (let value of array) {
      total += value;
    }
    return total;
}*/