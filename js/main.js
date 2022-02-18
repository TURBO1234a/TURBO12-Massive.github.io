//Back to top
var btn = $('#button');

$(window).scroll(function () {
  if ($(window).scrollTop() > 100) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});
//NavBar

window.onscroll = function () {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    var img = document.querySelector(".navbar-brand img");
    var header = document.getElementById("header");
    // var item = document.querySelector(".navbar__list .navbar-nav");
    var item1 = document.querySelector(".navbar__list");
    item1.style.width = "auto";
    header.style.background="#0a0a0a";
    // item.style.height="60px";
    // header.style.background="#0a0a0a";
    // header.style.height="60px";

    img.style.height = "60px";
  } else {
    var img = document.querySelector(".navbar-brand img");
    img.style.height = "96px";
    var header = document.getElementById("header");

    header.style.background="transparent";

    // var item1 = document.querySelector(".navbar__list");
    // item1.style.width="100%";

  }
}


