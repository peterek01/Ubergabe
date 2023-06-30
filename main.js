const date = document.querySelector("h1 span");
const now = new Date();
date.textContent =
	now.getDate() + "." + now.getMonth() + "." + now.getFullYear();
