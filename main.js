const date = document.querySelector("h1 span");
const now = new Date();
let day = now.getDate() < 10 ? "0" + now.getDate() : now.getDate();
let month = now.getMonth() + 1;
let year = now.getFullYear();

date.innerHTML = `${day}.${month}.${year}`;

// const btn = document.querySelector(".send");
// const select = document.querySelector("select~option");

// const sendForm = () => {
// 	if (select === "wählen")
// 		return alert("Wählst du einen Mitarbeiter oder ein Auto");
// };

// btn.addEventListener("submit", sendForm);

// const btn = document.querySelector('.send');

// const sendForm = () => {
//   alert('Bist du sicher?');
// };

// btn.addEventListener('click', sendForm);

// const search = document.getElementById('searchInput');
// const li = [...document.querySelectorAll('li')];
// const ol = document.querySelector('ol');

// const searchWord = (e) => {
//   const currentWord = e.target.value.toLowerCase();
//   let result = li;
//   result = result.filter(li => li.textContent.toLowerCase().includes(currentWord));
//   ol.textContent = '';
//   result.forEach(name => ol.appendChild(name));
// };

// search.addEventListener('input', searchWord);
