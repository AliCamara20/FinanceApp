
const minimizeBtn = document.querySelector(".minimize");
const sectionLabel = document.querySelectorAll(".desc");
const navItem = document.querySelector("header");
const header = document.querySelector("header");
const mainSection = document.querySelector('.sections');
const sections = document.querySelectorAll(".section");



minimizeBtn.addEventListener('click', function(){
    
    

    header.classList.toggle('minimize-header');
    mainSection.classList.toggle('expand-main')
});

 

function displaySide(evt, section){

    var tabs, i; 

    tabs = document.getElementsByClassName("nav_item");

    for (i = 0; i < tabs.length; i++) {
        const element= tabs[i];
        element.className = element.className.replace("active", "")
        
    }
    

    evt.currentTarget.className += " active";

}

 document.getElementById("default").click();




