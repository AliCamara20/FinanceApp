
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

function setActive(){
} 

function displaySide(evt, section){
    localStorage.setItem("sec", "sections");
    var tabs, i; 
    tabs = document.getElementsByClassName("nav_item");
    for (i = 0; i < tabs.length; i++) {
        const element= tabs[i];
        element.className = element.className.replace("active", "")    
    }
    if(section === 'section'){
        document.getElementById(section).style.display = "block";
        document.getElementById(section).firstElementChild.children[1].classList.add("pots_row");
        
        for( let sec of sections){
            sec.style.display = "block"
        }

    }
    else{
        for (let index = 0; index < sections.length; index++) {
            const element = sections[index];
            element.style.display = "none";     
        }

        let currentTab = document.getElementById(section);
        currentTab.style.display = "block";
        currentTab.style.width = "100%";
        currentTab.parentElement.parentElement.classList.remove("pots_row")
       
        
    }
    
    
    evt.currentTarget.className += " active";

}

document.getElementById("default").click();




