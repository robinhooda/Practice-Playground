// high order functions
    //high order function that accepts a function as an argument
        // document.addEventListener("click",clickFunction)
        // function clickFunction(){
        //     alert("Cant click")
        // }

    // function doubleMe(x){
    //     return x*2
    // }
    // function TripleMe(x){
    //     return x*3
    // }
    // function quadrupleMe(x){
    //     return x*4
    // }
// example function that returns a function
    // function createMultiplier(multiplier){
    //     return function(x){
    //         return x* multiplier
    //     }
    // }

    // let doubleMe = createMultiplier(2)
    // let tripleMe = createMultiplier(3)
    // let quadrupleMe = createMultiplier(4)

    // document.write(doubleMe(10)+"<br>")
    // document.write(tripleMe(10))
    // document.write(quadrupleMe(10))
    

// foreach

let students=['Robin','Rohan','Rakesh'];
students.forEach(printList);

function printList(name,num){
    console.log(`Student ${num+1}:${name}\n`);
    
}




