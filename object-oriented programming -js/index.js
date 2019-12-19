// Normal function using objects

// const circle={
//     radius: 1,
//     location: {
//         x: 1,
//         y:1
//     },
//     draw: function(){
//         console.log('draw');
        
//     }
// };

// circle.draw();


// Factory Function
function createCircle(radius){
    return{
        radius,
        draw: function(){
            console.log('draw');   
        }
    };   
}

const circleWithRadiusOne = createCircle(1);
const circleWithRadiusTwo = createCircle(2);

circleWithRadiusOne.draw();
console.log(circleWithRadiusOne.radius);
console.log(circleWithRadiusTwo.radius);


