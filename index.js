// Write a JavaScript function that takes an array of strings and returns a new array with the length of each string
function getStringLength(arr){
    return arr.map(str=>str.length);
}
const strings=["Hello","Carol","Khembo"];
const lengths= getStringLength(strings);
console.log(lengths);

// Given an array of numbers, write a function that filters out and returns only the even numbers.
function filterEvenNumbers(arr){
    return arr.filter(num=>num%2===0);
}
const numbers=[1,2,3,4,5,6,7,8,9,10];
const EvenNumber=filterEvenNumbers(numbers);
console.log(EvenNumber);

// Create a function that takes an array of student objects with name and score properties and returns a new array containing only the names of students who scored above 75.
function getStudentsAbove75(students){
    let hello =  students.filter(student=>student.score>75).map(student=>student.names);
    return hello
}
const students=[{names:"Carol",score:90},{names:"Cara",score:70},{names:"Clara",score:85},{names:"sara",score:60},{names:"Mala",score:80}];
const topStudent = getStudentsAbove75(students);
console.log(topStudent);

// Write a function that accepts an array of numbers and returns a new array with each number squared using the map() method.
function squaredOfNumber(squaredNumber){
    let hello =  squaredNumber.map((numbers=>numbers**2));
    return hello;
}
const squaredNumber=[1,2,3,4,5,6,7,8]

console.log(squaredOfNumber(squaredNumber));

//Write a JavaScript function that takes an array of mixed data types and returns a new array containing only the string elements, all converted to uppercase.
function filterCorvertUpperCase(arr){
    let arr2 =arr.filter((element)=>element===str).map(str=>str.toUpperCase());
    return upperMixedString;
}
const arr2=[1,"Caro",29,"Love","Flowers",6,"Mando"];
const upperMixedString=filterCorvertUpperCase(arr2);
console.log(upperMixedString);


