$(function(){
    // data in attributes
    // getAttributeData()
   //getJSON();
    getLocalData()
   // console.log("Good morning")
 })
//  function getJSON(){
//      console.log("hi");
//     $.getJSON('ques-db.json',function(){
//          let questions = json;
//         console.log(Object)
//         console.log("hi");
//         const keys = Object.keys(questions)
//         console.log(keys.length);
//         // [0 -> 1] * 1
//         let randIndex = Math.floor(Math.round(Math.random()*(keys.length-1)));
//         // console.log(randIndex);
//     })
//  }
//  let users=[];
//  users.push("robin");
//  users.push("rob");
//  users.push("akash");
//  let Jsonusers=JSON.stringify(users);
function getLocalData(){
  //  let names =['robin','rohan','mohan'];
    var array = [1, 2, 3];

    localStorage.setItem("array", JSON.stringify(array));
    array = JSON.parse(localStorage.getItem("array"));

    console.log(array);
    console.log(array[1]);


}