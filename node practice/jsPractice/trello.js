// const days=['Mon','Tue','Wed','Thrs','fri','Sat','Sun']

// days.forEach(function(day,index){
//     console.log(`Day ${index+1}: ${day}`);
// })


// // for(let index=0; index< days.length; index++){
// //     console.log(days[index]);
// // }

// for(let index=days.length-1; index>=0; index--){
//     console.log(days[index]);
// }
 const myTodos = []

 myTodos.push('Complete Css tutorial')
 myTodos.push('Complete Jquery')
 myTodos.push('Go to Gym')

 //using foreach loop
 myTodos.forEach(function(task, index){
     console.log(`Your task no. ${index+1} is: ${task}`);
 })

 //using for loop
for(let index=myTodos.length; index>0;index--){
    console.log(`Your task no. ${index} is: ${myTodos[index-1]}`);
}