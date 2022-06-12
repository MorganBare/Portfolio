const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("overlay");
const bar1 = document.getElementById('bar1');
const bar2 = document.getElementById('bar2');
const bar3 = document.getElementById('bar3');
const overlay = document.getElementById('overlay');
const navItemProjects = document.getElementById('nav-item-projects');
const navItemContact = document.getElementById('nav-item-contact');
const containerHeader = document.getElementById('container-header');
const main = document.getElementById('main');
const footer = document.getElementById('footer');
let prevScrollPos = window.pageYOffset;

hamburger.addEventListener("click", function(){
    overlay.classList.toggle('open');
    bar1.classList.toggle('bar1Animate');
    bar2.classList.toggle('bar2Animate');
    bar3.classList.toggle('bar3Animate');
    main.classList.toggle('is-blurred');
    footer.classList.toggle('is-blurred');
})

navItemProjects.addEventListener('click', () =>{
  overlay.classList.remove('open');
  main.classList.remove('is-blurred');
  footer.classList.remove('is-blurred');
  bar1.classList.remove('bar1Animate');
  bar2.classList.remove('bar2Animate');
  bar3.classList.remove('bar3Animate');
})

navItemContact.addEventListener('click', () =>{
  overlay.classList.remove('open');
  main.classList.remove('is-blurred');
  footer.classList.remove('is-blurred');
  bar1.classList.remove('bar1Animate');
  bar2.classList.remove('bar2Animate');
  bar3.classList.remove('bar3Animate');
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

   



  
