$(function(){
    // data in attributes
    // getAttributeData()
   getJSON();
//    getLocalData()
//    console.log("Good morning")
 })
 function getJSON(){
    //  console.log("hi");
    $.getJSON('ques-db.json',function(json){
          questions = json;
        // console.log(Object)
        // console.log("hi");
        localStorage.setItem("question",JSON.stringify(questions));
        let set=JSON.parse(localStorage.getItem("question"));
        console.log(set);
        // const keys = Object.keys(set);
        // let q=set[keys[0]];
        // console.log(q["questions"]);
        // console.log(keys.length);
        // [0 -> 1] * 1
        // let randIndex = Math.floor(Math.round(Math.random()*(keys.length-1)));
        // console.log(randIndex);
    });
 }
//  let users=[];
//  users.push("robin");
//  users.push("rob");
//  users.push("akash");
//  let Jsonusers=JSON.stringify(users);
// function getLocalData(){
//   //  let names =['robin','rohan','mohan'];
//     // var array = [1, 2, 3];

//     // localStorage.setItem("array", JSON.stringify(array));
//     // array = JSON.parse(localStorage.getItem("array"));

//     // console.log(array);
//     // console.log(array[1]);
//     let questions = {
//         "q1": {
//                     "question": "Which one is correct team name in NBA?",
//                     "options": [
//                         "New York Bulls",
//                         "Los Angeles Kings",
//                         "Golden State Warriros",
//                         "Huston Rocket"
//                     ],
//                     "answer": "Huston Rocket"
//                 },
//         "q2": {
//                     "question": "Which one is WRONG team name in NBA?",
//                     "options": [
//                         "New York Bulls",
//                         "Los Angeles Kings",
//                         "Golden State Warriros",
//                         "Huston Rocket"
//                     ],
//                     "answer": "Huston Rocket"
//                 }
//     ​
// }
//     ;

//     localStorage.setItem("questions", JSON.stringify(questions));
//     questions = JSON.parse(localStorage.getItem("questions"));

//     console.log(questions);
   



// }
// $(document).ready(function(){
//    let jsonValues = $.getJSON( "ques-db.json", function() {
//         console.log("hii");
//         console.log(jsonValues);
//     console.log("hii");
   //  if (typeof (Storage) !== "undefined") {
    //  let dataToStore = JSON.stringify(jsonValues.responseJSON);
    //  console.log(dataToStore);
    //  localStorage.setItem('questions',dataToStore)
      /*if(localStorage.setItem('questions',dataToStore))
      {
      let retrievedObject = localStorage.getItem('questions');
      console.log(retrievedObject);
      }
      else {
        console.log('false');
   //    }*/
    // let retrievedObject = localStorage.getItem('questions');
    //   let parsedObject = JSON.parse(retrievedObject);
    //   //console.log(retrievedObject);
    //   console.log(parsedObject.q1);
    //       console.log(parsedObject.q2);
//    })
// //    });
//    });