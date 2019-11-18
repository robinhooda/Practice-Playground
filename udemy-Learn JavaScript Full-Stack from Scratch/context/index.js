let orderData = {
     orderNumber: 234566,
     customerName: "Robin",
     customerAddress: "HSR layout sector-4",
     customerMessageOnSuccessfullDelivery(){
          console.log("Order No: "+ this.orderNumber+" is delivered to "+this.customerName+" at "+this.customerAddress);
          console.log(this);
          
     }
}
orderData.customerMessageOnSuccessfullDelivery();