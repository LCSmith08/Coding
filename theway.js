console.log("Landon")
console.log(10+5)
let cl=console.log
cl(6+3)
cl(6*3)
cl(6/3)

console.log(4 + 5);
console.log("4 + 5");
console.log("4" + "5");

function ask(){

    name = prompt("What is your name?");
      
        if(name != null && isNaN(name) & name != ""){
              document.write("Hello ", name);
        }else{
          alert("Invalid name, please try again")
          ask();
        }
    }
    
    ask();
