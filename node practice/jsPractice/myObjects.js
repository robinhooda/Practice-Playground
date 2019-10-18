let student1 = {
    name: 'Robin',
    rollno: 34,
    marks: 78,
    Address: "Haryana"
}
let student2 = {
    name: 'Roshan',
    rollno: 11,
    marks : 55,
    Address: "Delhi"
}
// student1.name='Robin Hooda'
// console.log(student1)

// let changeMarks = function(myObject){
//     // console.log(myObject.marks)
//     console.log(`${myObject.name} have secured ${myObject.marks+2}`)
// }
// changeMarks(student1);
// changeMarks(student2)

let changeMarks = function(myObject){
    return {
        math: `${myObject.name} have secured ${myObject.marks+2}`,
        hindi:`${myObject.name} have secured ${myObject.marks+8}`
    }
}
let math = changeMarks(student1)
let hindi = changeMarks(student1.hindi)
console.log(math.hindi)



// console.log(`Name of Student : ${studentId.name} and  he lives in ${studentId.Address}, bearing roll no. ${studentId.rollno}`)

// let output = function(myObject){
//     return `Name of student is ${myObject.name}`
// }
// console.log(edit(studentId));



// let output = function(myObject){
//     return {
//       output1 : '`Name of student is ${myObject.name}`',
//       output2 : '`Name of student is ${myObject.name}`'
//     }
// }
// let x=output(student1.output1)
// console.log(x)



// let list = [1, 2, 3, 4,5,1,3,9,22,1,6,7];
// // list2 = [4, 2, 7, 0];
// // let list3 = [...list, ...list2];
// let sorted = list.sort((a, b) => a - b);
// console.log(sorted);