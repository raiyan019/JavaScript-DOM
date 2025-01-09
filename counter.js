// get all htl element
const counter = document.getElementById("counter");
const btn = document.querySelectorAll(".btn");
console.log(btn); 
 
btn.forEach((btn) => {
    btn.addEventListener('click' , ()=> {
        console.log("click done")

    });
});