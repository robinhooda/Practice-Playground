// let orderData = {
//      orderNumber: 234566,
//      customerName: "Robin",
//      customerAddress: "HSR layout sector-4",
//      customerMessageOnSuccessfullDelivery(){
//           console.log("Order No: "+ this.orderNumber+" is delivered to "+this.customerName+" at "+this.customerAddress);
//      }
// }
// orderData.customerMessageOnSuccessfullDelivery();



// let orderData = {
//      orderNumber: 234566,
//      customerName: "Robin",
//      customerAddress: "HSR layout sector-4",
//      customerMessageOnSuccessfullDelivery(){
//           function tryThis(){
//                console.log(this); // represnts the whole window in which all the web elements are available
//           }
//           tryThis();
//           console.log("Order No: "+ this.orderNumber+" is delivered to "+this.customerName+" at "+this.customerAddress);
//      }
// }
// orderData.customerMessageOnSuccessfullDelivery();


// let orderData = {
//      orderNumber: 234566,
//      customerName: "Robin",
//      customerAddress: "HSR layout sector-4",
//      customerMessageOnSuccessfullDelivery(){
//           console.log("Order No: "+ this.orderNumber+" is delivered to "+this.customerName+" at "+this.customerAddress);
//           // console.log(this);
//      }
// }
// // console.log(this);

// orderData.customerMessageOnSuccessfullDelivery();

//call function
     // function paymentMode(){
     //      console.log(this.customerName+" have to pay by cash");  
     // }
     // paymentMode.call(orderData);


// this using arrow function
 
let orderData = {
     orderNumber: 234566,
     customerName: "Robin",
     customerAddress: "HSR layout sector-4",
     customerMessageOnSuccessfullDelivery(){
         let tryThis = () =>console.log(this);
          tryThis();
          console.log("Order No: "+ this.orderNumber+" is delivered to "+this.customerName+" at "+this.customerAddress);
     }
}
orderData.customerMessageOnSuccessfullDelivery();



