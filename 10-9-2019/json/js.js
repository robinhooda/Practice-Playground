$(function(){
    // data in attributes
    // getAttributeData()
    getJSON()
    // getLocalData()
 })
 function getJSON(){
    $.getJSON('ques-db.json',function(json){
        questions = json;
        // console.log(Object)
        const keys = Object.keys(questions)
        console.log(keys.length);
        // [0 -> 1] * 1
        let randIndex = Math.round(Math.random()*(keys.length-1))
        // console.log(randIndex);
    })
 }