const menuIcon = document.querySelector("#br-menu-icon .fa-bars");
const menu = document.getElementById("br-menu-list");

menuIcon.addEventListener("click", function () {
	
		menu.classList.toggle("br-down");
		console.log("Toggle!!");
});