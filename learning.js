let cl =console.log;
console.log("Hello World!");
    function drawTree(h) {
        let star = "#";
        let space = " ";
        let spaceCount = h-1;
        let starCount = 1;
        
        for(let i = 0; i < h; i++) {
            console.log(`${space.repeat(spaceCount)}${star.repeat(starCount)}${space.repeat(spaceCount)}`);
            spaceCount -= 1;
            starCount += 2;
        }
        cl("                #####")
    }
    
    drawTree(20)
for (let i = 1; i <= 100; i++) {
    if(i % 3==0 && i % 5==0){cl("FizzBuzz");
    } else if (i % 3==0) {
    cl("Fizz")
    } else if (i % 5==0){
    cl("Buzz")
    } else{
    cl(i)
    }
    }

let name = "Landon"

cl("Landon");
cl(name); 

let x=1;

let greet = function(name) {
    return 
}
let fun = function(){
    cl("Function says hello");
};
fun();








cl(
    "854-206-0043",

    'He'+'llo World',
    854-206-20043

    );
