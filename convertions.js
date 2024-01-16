// create a function that converts a number to a string
// create a function that converts a string to a number

// convertNumberToString
function convertNumberToString(number) {
    return number.toString();
}

// convertStringToNumber
function convertStringToNumber(string) {
    return parseInt(string);
}

// Path: arrays.js
// create a function that returns the sum of all numbers in an array
// create a function that returns the average of all numbers in an array
// create a function that returns the largest number in an array
// create a function that returns the smallest number in an array

// sumArray
function sumArray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++){
        sum += array[i];
    }
    return sum;
}

// averageArray
function averageArray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++){
        sum += array[i];
    }
    return sum / array.length;
}

// largestArray
function largestArray(array) {
    let largest = 0;
    for (let i = 0; i < array.length; i++){
        if (array[i] > largest) {
            largest = array[i];
        }
    }
    return largest;
}

// smallestArray
function smallestArray(array) {
    let smallest = 0;
    for (let i = 0; i < array.length; i++){
        if (array[i] < smallest) {
            smallest = array[i];
        }
    }
    return smallest;
}

// Path: objects.js
// create a function that returns the sum of all numbers in an object
// create a function that returns the average of all numbers in an object
// create a function that returns the largest number in an object
// create a function that returns the smallest number in an object

// sumObject
function sumObject(object) {
    let sum = 0;
    for (let key in object) {
        sum += object[key];
    }
    return sum;
}

// averageObject
function averageObject(object) {
    let sum = 0;
    for (let key in object) {
        sum += object[key];
    }
    return sum / Object.keys(object).length;
}