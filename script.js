
const minimizeBtn = document.getElementById("minimize");
const descriptions = document.querySelector(".desc");
const navItem = document.querySelector("header");

function close(){
    for (let index = 0; index < descriptions.length; index++) {
        const element = descriptions[index];
        element.style.display = "none";
        
    }
}

minimizeBtn.addEventListener('click', function(){
    close();
    navItem.style.width = 'fit-content';
});


function displaySide(evt){
    var tabs; 
    
    tabs = document.getElementsByClassName("nav_items");

    for( let i = 0; i < tabs.length; i++){
        tabs[i].className = tabs[i].className.replace('active', ' ');

    }
    evt.currentTarget.className += " active";



}




