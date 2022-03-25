const txtInp = document.querySelector('.inputs input');
checkBtn = document.querySelector('.inputs button');
infoTxt = document.querySelector('.info-txt');

let filterInput;

checkBtn.addEventListener('click', () => {
	let reverseInput = filterInput.split('').reverse().join('');
	infoTxt.style.display = 'block';
	if (filterInput != reverseInput) {
		return (infoTxt.innerHTML = `NO, <span>'${txtInp.value}'</span> isn't a palindrome!`);
	}
	infoTxt.innerHTML = `Yes, <span>'${txtInp.value}'</span> is a palindrome!`;
});

txtInp.addEventListener('keyup', () => {
	filterInput = txtInp.value.toLowerCase().replace(/[^A-Z0-9]/gi, '');
	if (filterInput) {
		return checkBtn.classList.add('active');
	}
	infoTxt.style.display = 'none';
	checkBtn.classList.remove('active');
});
