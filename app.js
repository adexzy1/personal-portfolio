//variables
const navCloseBtn = document.querySelector('.nav_close')
const NavToggleBtn = document.querySelector('.nav_icon')
const navMenu = document.querySelector('.nav_menu')
const navLink = document.querySelectorAll('.nav_link')

//eventlisteners

eventlisteners()
function eventlisteners(){

    //close navigation button
    navCloseBtn.addEventListener('click', closeNavigation)

    //Open navigation button
    NavToggleBtn.addEventListener('click', openNavigation)

    //listen to click on each nav link
    navLink.forEach(nav_link => nav_link.addEventListener('click', RemoveMenu))
}




//functions

//close navigation function
function closeNavigation(){
    navMenu.classList.remove('toggle_menu')
}

//open navigation function

function openNavigation(){
    navMenu.classList.add('toggle_menu')
}

//Remove moenu function
function RemoveMenu(){
    navMenu.classList.remove('toggle_menu')  
}