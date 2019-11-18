// returning vs mutating

let students = [
    { name:"Robin", qualification: "B.Tech", percentage:"64"},
    { name:"Roshan", qualification: "BCA", percentage:"61"},
    { name:"Rakesh", qualification: "MCA", percentage:"69"},
    {name:"Ranjit",qualification:'MCA',percentage:"71"}
];
// console.log(students);

// console.log(students.push({name:"Rohan",qualification:'M.Tech',percentage:"72"}));
students.push({name:"Rohan",qualification:'M.Tech',percentage:"72"});
 
// students.foreach(y);
// function y(x){
//     console.log(`Name : ${x.name} have secured ${x.percentage} in ${x.qualification}`);
// }
// console.log(students);

//map function

let nameDisplay = students.map(nameOnly);

function nameOnly(person){
    return person.qualification;
}

console.log(nameDisplay);

