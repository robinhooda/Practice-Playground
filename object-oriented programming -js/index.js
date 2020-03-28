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

// Constructor Function

    function Circle(radius) {
        // console.log('this',this);
        this.radius = radius;
        this.draw = function(){
            console.log('draw');
        }
    }

    const another = new Circle(145);
    // console.log(another);

    console.log(another.radius);
    console.log(another.draw);






