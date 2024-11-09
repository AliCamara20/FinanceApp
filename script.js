
const minimizeBtn = document.querySelector(".minimize");
const sectionLabel = document.querySelectorAll(".desc");
const navItem = document.querySelector("header");
const header = document.querySelector("header");
const mainSection = document.querySelector('.sections');



minimizeBtn.addEventListener('click', function(){
    
    for (let index = 0; index <sectionLabel.length; index++) {
        const element = sectionLabel[index];
        element.classList.toggle("close");
    }

    header.classList.toggle('minimize-header');
    mainSection.classList.toggle('expand-main')
});


function displaySide(evt){
    var tabs; 
    
    tabs = document.getElementsByClassName("nav_items");

    for( let i = 0; i < tabs.length; i++){
        tabs[i].className = tabs[i].className.replace('active', ' ');

    }
    evt.currentTarget.className += " active";



}




