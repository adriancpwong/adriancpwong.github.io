//Nav shrink code

/*
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("nav-section").style.padding = "10px 0px";
  } else {
    document.getElementById("nav-section").style.padding = "20px 0px";
  }
}
*/

//Collapsable skills code

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

//Collapsable work code

var coll = document.getElementsByClassName("work-collapsible");
var j;

for (j = 0; j < coll.length; j++) {
  coll[j].addEventListener("click", function() {
    this.classList.toggle("work-active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

//Parallax function

document.getElementById("body").onscroll = function myFunction() {  
    
    var scrolltotop = document.scrollingElement.scrollTop;
    var target = document.getElementById("front-section");
    var xvalue = "center";
    var factor = 0.5;
    var yvalue = scrolltotop * factor - 0;
    target.style.backgroundPosition = xvalue + " " + yvalue + "px";
    
    //Combined scroll shrink code
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("nav-section").style.padding = "0px 0px";
        document.getElementById("nav-section").style.opacity = "0.75";
    } else {
        document.getElementById("nav-section").style.padding = "20px 0px";
        document.getElementById("nav-section").style.opacity = "1";
    }
}

