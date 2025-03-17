const cpfInput = document.getElementById("cpf");
const telefoneInput = document.getElementById("telefone");
const celularInput = document.getElementById("celular");
const cepInput = document.getElementById("cep");
const cnpjInput = document.getElementById("cnpj");
const cartaoInput = document.getElementById("cartao");
const cvvInput = document.getElementById("cvv");
const hamburger = document.getElementById('hamburger-menu');
const sidebar = document.getElementById('sidebar');

cpfInput.addEventListener("input", function (e) {
	let cpf = e.target.value.replace(/\D/g, "");
	cpf = cpf.substring(0, 11);
	cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
	cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
	cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
	e.target.value = cpf;
});

telefoneInput.addEventListener("input", function (e) {
	let digits = e.target.value.replace(/\D/g, "");
	digits = digits.substring(0, 10);

	let formatted = "";
	if (digits.length > 0) {
		formatted += "(" + digits.substring(0, 2);
	}
	if (digits.length >= 3) {
		formatted += ") " + digits.substring(2, 6);
	}
	if (digits.length >= 7) {
		formatted += "-" + digits.substring(6, 10);
	}

	e.target.value = formatted;
});

celularInput.addEventListener("input", function (e) {
	let digits = e.target.value.replace(/\D/g, "");
	digits = digits.substring(0, 11);

	let formatted = "";
	if (digits.length > 0) {
		formatted += "(" + digits.substring(0, 2);
	}
	if (digits.length >= 3) {
		formatted += ") ";
		if (digits.length <= 7) {
			formatted += digits.substring(2);
		} else {
			formatted += digits.substring(2, 7) + "-" + digits.substring(7);
		}
	}

	e.target.value = formatted;
});

cepInput.addEventListener("input", function (e) {
	let digits = e.target.value.replace(/\D/g, "");
	digits = digits.substring(0, 8);

	let formatted = "";
	if (digits.length > 5) {
		formatted = digits.substring(0, 5) + "-" + digits.substring(5);
	} else {
		formatted = digits;
	}

	e.target.value = formatted;
});

cnpjInput.addEventListener("input", function (e) {
	let digits = e.target.value.replace(/\D/g, "");
	digits = digits.substring(0, 14);

	let formatted = "";

	if (digits.length > 0) {
		formatted += digits.substring(0, 2);
	}
	if (digits.length >= 3) {
		formatted += "." + digits.substring(2, 5);
	}
	if (digits.length >= 6) {
		formatted += "." + digits.substring(5, 8);
	}
	if (digits.length >= 9) {
		formatted += "/" + digits.substring(8, 12);
	}
	if (digits.length >= 13) {
		formatted += "-" + digits.substring(12, 14);
	}

	e.target.value = formatted;
});

cartaoInput.addEventListener("input", function (e) {
	let digits = e.target.value.replace(/\D/g, "");
	digits = digits.substring(0, 16);

	let formatted = "";
	for (let i = 0; i < digits.length; i++) {
		if (i > 0 && i % 4 === 0) {
			formatted += " ";
		}
		formatted += digits[i];
	}

	e.target.value = formatted;
});

cvvInput.addEventListener("input", function (e) {
	let cvv = e.target.value.replace(/\D/g, "");
	if (cvv.length > 4) {
		cvv = cvv.substring(0, 4);
	}
	e.target.value = cvv;
});

document.addEventListener("DOMContentLoaded", function () {
	const btnLimpar = document.querySelector(".btn-limpar");
	btnLimpar.addEventListener("click", function () {
		const forms = document.querySelectorAll("form");
		forms.forEach(function (form) {
			form.reset();
		});
	});
});



hamburger.addEventListener('click', () => {
	sidebar.classList.toggle('active');
	});

	const sidebarLinks = sidebar.querySelectorAll('a');
	sidebarLinks.forEach(link => {
		link.addEventListener('click', () => {
			sidebar.classList.remove('active');
	});
});