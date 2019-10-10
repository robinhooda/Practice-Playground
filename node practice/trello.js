const days=['Mon','Tue','Wed','Thrs','fri','Sat','Sun']

days.forEach(function(day,index){
    console.log(`Day ${index+1}: ${day}`);
})


// for(let index=0; index< days.length; index++){
//     console.log(days[index]);
// }

for(let index=days.length-1; index>=0; index--){
    console.log(days[index]);
}