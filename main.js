const date = document.querySelector("h1 span");
const now = new Date();
let day = now.getDate() < 10 ? "0" + now.getDate() : now.getDate();
let month = now.getMonth() + 1;
let year = now.getFullYear();

date.innerHTML = `${day}.${month}.${year}`;

document.getElementById("myForm").addEventListener("submit", function (e) {
	const selectValue = document.getElementById("user").value;
	if (selectValue === "") {
		e.preventDefault();
		alert("Bitte wählen ein Auto aus der Liste aus");
		window.scrollTo(0, 0);
	}
});

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
