let display = document.getElementById("display");
let buttons = document.querySelectorAll(".btn");

for (let button of buttons) {
    button.addEventListener("click", function () {

         
        if(button.innerText =="="){
            try{
            display.value=eval(display.value);
        }
        catch{
            display.value="Error";
        

        }
            
        }
        else if(button.innerText=="C"){
            display.value="";
        }
        else if(button.innerText=="DEL"){
            display.value=display.value.slice(0,-1);
        }
        else{
           
            if(display.value=="Error"){
            display.value="";
             }
            display.value=display.value+button.innerText;       
            }
        });
}