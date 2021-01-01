window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("nav-section").style.padding = "10px 0px";
  } else {
    document.getElementById("nav-section").style.padding = "20px 0px";
  }
}