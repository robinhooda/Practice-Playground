let myForm = document.getElementById("myForm");
let myField = document.getElementById("myField");
let myList = document.getElementById("mylist");

myForm.addEventListener("submit",(e) => {
     e.preventDefault();
     alert("Item added to the list"); 
     addItem(myField.value);  
     // myForm.reset();  
}) 

function addItem(x){
     let myListItems = `<li> ${x}<button onclick="deleteItem(this)">Delete</button></li>`
     myList.insertAdjacentHTML("beforeend",myListItems)
     myField.value = ""
     // console.log(this);
     
}

function deleteItem(elementToDelete){
     elementToDelete.parentElement.remove();
}



