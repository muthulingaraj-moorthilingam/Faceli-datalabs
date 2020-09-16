window.addEventListener("scroll",setNavbaratTop);

var tonggleButton = document.getElementById("tonggler-btn");
tonggleButton.addEventListener("click",showHide_Navlink);

var navLinks = document.getElementById("navbarToggler_Element");
var formSearch = document.getElementById("form-inline");

var headerNavbar = document.getElementById("navbar-fixed");
var topPosition = headerNavbar.offsetTop;
 
function setNavbaratTop(event){
    if(window.pageYOffset > topPosition){
        headerNavbar.classList.add("fixed-top");
    }
    else{
        headerNavbar.classList.remove("fixed-top");
    }
}

function showHide_Navlink(event){
    if(navLinks.classList.contains("hide")){
        navLinks.classList.remove("hide");
        navLinks.classList.add("show");
        navLinks.classList.add("drop-down-nav-link");
        formSearch.classList.add("hide");
    }
    else{
        if(navLinks.classList.contains("drop-down-nav-link")){
            navLinks.classList.remove("drop-down-nav-link");
            navLinks.classList.add("hide");
            navLinks.classList.remove("show");
            if(formSearch.classList.contains("hide")){
                formSearch.classList.remove("hide");
            }
        } 
    }
}

var sliderIndex =0;

showSliders();

function showSliders(){
    var i;
    var slideImg = document.getElementsByClassName("content-slider");
    for(let i=0;i<slideImg.length;i++){
        slideImg[i].style.display="none";
    }

    sliderIndex++;

    if(sliderIndex > slideImg.length){
        sliderIndex = 1;
    }
    slideImg[sliderIndex-1].style.display = "block";

    setTimeout(showSliders, 4000); 
}

var popUpicon = document.getElementById("pop-icon");
popUpicon.addEventListener("click",showPopup);


var submitButton = document.getElementById("submit-btn");
submitButton.addEventListener("click",hidePopup);

var crossBtn = document.getElementById("cross-btn");
crossBtn.addEventListener("click",hidePopup);

var userForm = document.getElementById("info-user");

function showPopup(event){
    if(userForm.classList.contains("hide")){
        userForm.classList.add("show");
        userForm.classList.remove("hide");
    }
}

function hidePopup(event){
    if(userForm.classList.contains("show")){
        userForm.classList.add("hide");
        userForm.classList.remove("show");
    }
}