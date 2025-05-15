// Description:
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example (Input => Output):
// 35231 => [1,3,2,5,3]
// 0     => [0]

function digitize(n){
    return n.toString().split('').reverse().map(Number)
}

//P: Are you ever given an empty array or undefined?
//R: Whatever number was given, it is now split up into an array and the order of the number is reversed.
//E: if we were given 35231 it should return [1,3,2,5,3]
//P: Take input n and convert to a string
    //split string
    //reverse string
    //use map to create new array of the reversed and convert to numbers

    function digitize(n){
    return n.toString().split('').reverse().map(Number)
}


//solution 2
//this will give us the same outcome however we are not using map and instead making an array using the from method and passing conversion of a string to number then reversing that whole array at the end
function digitize(n) {
  return Array.from(String(n), Number).reverse();
}