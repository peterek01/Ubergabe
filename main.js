const date = document.querySelector("h1 span");
const now = new Date();
const day = now.getDate() < 10? '0' + now.getDate() : now.getDate();
const month = now.getMonth() < 10 ? '0' + now.getMonth() : now.getMonth;
const year = now.getFullYear();

date.textContent = `${day}.${month}.${year}`;