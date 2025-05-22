// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]

//Parameters: is it always going to be integers? Are we going to be given any special characters? An empty array?
//Return: Return a new array with each value doubled
//Edge Cases: [1, 2, 3] --> [2, 4, 6]

//make a function that takes in an array
//map through the array and multiply each element by two
function maps(x){
   return x.map(num => num *2) 
}

//solve with for loop
function maps(x){

    //arr is empty array
    let arr = [];
    //i starts at 0 while shorter than length of array loop through array
    for(let i = 0; i < x.length; i++){
        //push to new array the element from array x times 2
        arr.push(x[i] * 2)
    }
}
//return new array
return arr