// Scope & context- part -1 
   // This will prints name as Robin
        // let myName = "Robin";
        // function printName(){
        //         console.log(myName);        
        // }
        // printName();
   // This will nopt print name as Robin
        // function printName(){
        //         let myName = "Robin";        
        // }
        // printName();
        // console.log(myName);
   // Scope to print different values Of myName 
        let myName = "Robin";
        function printName(){
                let myName="Robin Hooda";
                if(2+2==4){
                        let myName=" Mr. Robin Hooda"
                        console.log(myName);       
                }        
        }
        printName();