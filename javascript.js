//removing array items from index
let num=[1,2,3,4,5,6,7]
num.splice(2,2);
console.log(num);

//array spreading
const arr1=[1,2,3,4];
const arr2=[5,6,7,8];
const comb=[...arr1,...arr2];
console.log(comb);

//inserting array item 
let arr=[11,22,33,44,66,77,88,99]
arr.splice(4,1,55);
console.log(arr);

//finding the longest string in the array
let str=["I am a dance",
    "I am Guitarist",
    "I am a Fullstact developer"
]
function longeststr(){
    return str.sort(function(a,b){
            return b.length-a.length;
    })[0];
}
console.log(longeststr());

//array rotation
function rotatearray(arr, rotateBy) {
    const n = arr.length;
    rotateBy %= n;
 
    return arr.slice(rotateBy).concat(arr.slice(0, rotateBy));
}
 
const originalArray = [5,6,7,8,9,10];
const rotatedarray = rotatearray(originalArray, 2);
console.log(rotatedarray);