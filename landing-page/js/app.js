
/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/



/**
 * Define Global Variables
 *
*/

// Build menu
const sections = document.querySelectorAll('section')
const navi = document.getElementById('navbar__list')
for (sec of sections) {

let newEle = document.createElement("a")
    
navi.appendChild(newEle);


// Scroll to section on link click
// link between id and # to go to the section
    newEle.innerHTML=`<li><a href = "#${sec.id}" data-nav="${sec.id}" class= "menu__link">${sec.id}</a></li>`
    

}


/**
 * Begin Events
 *
*/

navi.addEventListener("click", (e)=>{
    e.preventDefault();
    if(e.target.dataset.nav){
    document
    .getElementById(`${e.target.dataset.nav}`)
    .scrollIntoView({behavior: "smooth"});
    }

});




// Set sections as active

window.onscroll = scr => {
    sections.forEach(function (active) {
let act= navi.querySelector(`[data-nav=${active.id}]`);
if (active.getBoundingClientRect().top >= -250 && active.getBoundingClientRect().top <= 250) {
        active.classList.add("your-active-class");
        act.classList.add("active");

}
else {
        active.classList.remove("your-active-class");
        act.classList.remove("active");
}
    });
}

