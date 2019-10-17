let studentId = {
    name: 'Robin',
    rollno: 34,
    Address: "Haryana"
}
// console.log(studentId);

// console.log(`Name of Student : ${studentId.name} and  he lives in ${studentId.Address}, bearing roll no. ${studentId.rollno}`)

let edit = function(myObject){
    return `Name of student is ${myObject.name}`
}
console.log(edit(studentId));

// let list = [1, 2, 3, 4,5,1,3,9,22,1,6,7];
// // list2 = [4, 2, 7, 0];
// // let list3 = [...list, ...list2];
// let sorted = list.sort((a, b) => a - b);
// console.log(sorted);