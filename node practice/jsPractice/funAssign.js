 let getMyGrade = function(marksSecured, TotalMarks=100){
    let myPercent =(marksSecured/TotalMarks)*100;

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
 let myresult= getMyGrade(69,400);
 console.log(myresult)