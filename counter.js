// get all htl element
const counter = document.getElementById("counter");
const btn = document.querySelectorAll(".btn");
console.log(btn); 
 
let count = 0;
btn.forEach((btn) => {
    btn.addEventListener("click", (eachBtn)=> {
        let className = eachBtn.target.className;
       
      
     if(className.includes('increase')){
        count++;
     }
     else if (className.includes('decrease')) {
    count--;
     } else {
        count = 0
     };
     
     counter.innerHTML = count;  
     
        
    });
});