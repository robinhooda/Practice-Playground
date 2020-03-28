let flag=0;
let getMyGrade = function(marksSecured, totalMarks=100){
    if(Number.isInteger(marksSecured)&& Number.isInteger(totalMarks)){

        let myPercent =(marksSecured/totalMarks)*100;
        let myGrade=''
    
        if(myPercent>90)
            myGrade='A';
        else if(myPercent>80)
            myGrade='B';
        else if(myPercent>70)
            myGrade='C';
        else if(myPercent>60)
            myGrade='D';
        else 
            myGrade='E';
    
        return `Your Grade is ${myGrade} and your percentage is ${myPercent}`
    }
    else{
        console.log("please enter integer number");
        flag =1;
    }

 }
let myresult= getMyGrade(234,400);
if(!flag){
    console.log(myresult)
}
 