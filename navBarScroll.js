window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollBottom > 5 || document.documentElement.scrollBottom > 5) {
    document.getElementsByClassName(".navbar").style.Bottom = "";
  } else {
    document.getElementsByClassName(".navbar").style.Bottom = "-50px";
  }
}
