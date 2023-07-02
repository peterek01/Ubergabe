const date = document.querySelector("h1 span");
const now = new Date();
const day = now.getDate() < 10 ? "0" + now.getDate() : now.getDate();
const month = now.getMonth() < 10 ? "0" + now.getMonth() : now.getMonth;
const year = now.getFullYear();

date.textContent = `${day}.${month}.${year}`;

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
