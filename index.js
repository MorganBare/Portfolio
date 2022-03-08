const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("overlay");
const bar1 = document.getElementById('bar1');
const bar2 = document.getElementById('bar2');
const bar3 = document.getElementById('bar3');
const overlay = document.getElementById('overlay')


hamburger.addEventListener("click", function(){
    console.log('click')
    overlay.classList.toggle('open');
    bar1.classList.toggle('bar1Animate');
    bar2.classList.toggle('bar2Animate');
    bar3.classList.toggle('bar3Animate');
})
   



  
