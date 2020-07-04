"use strict";

var menuIcon = document.querySelector("#br-menu-icon .fa-bars");
var menu = document.getElementById("br-menu-list");
menuIcon.addEventListener("click", function () {
  menu.classList.toggle("br-down");
  console.log("Toggle!!");
});