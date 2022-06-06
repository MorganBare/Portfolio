const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("overlay");
const bar1 = document.getElementById('bar1');
const bar2 = document.getElementById('bar2');
const bar3 = document.getElementById('bar3');
const overlay = document.getElementById('overlay');
const main = document.getElementById('main');
const footer = document.getElementById('footer');
let prevScrollPos = window.pageYOffset;

hamburger.addEventListener("click", function(){
    console.log('click')
    overlay.classList.toggle('open');
    bar1.classList.toggle('bar1Animate');
    bar2.classList.toggle('bar2Animate');
    bar3.classList.toggle('bar3Animate');
    main.classList.toggle('is-blurred');
    footer.classList.toggle('is-blurred');
})

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos) {
      document.getElementById("overlay").style.top = "0";
    } else {
      document.getElementById("overlay").style.top = "-100px";
    }
    prevScrollPos = currentScrollPos;
  }
   



  
