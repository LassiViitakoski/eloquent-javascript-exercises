// Oma ratkaisu

function arraysToArray(arrays) {
    if (arrays.length == 0 || typeof(arrays) != "object") return arrays;

    return arrays.reduce((a, b) => {
        if (typeof(a) != "object" || a == null) return [a].concat(b);
        return a.concat(b);
    })
}

// Malliratkaisu

console.log(arrays.reduce((flat, current) => flat.concat(current)));