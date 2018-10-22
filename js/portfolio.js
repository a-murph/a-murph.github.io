//Modal event listeners
const cardLinks = document.querySelectorAll(".portfolio-card-hover");

for (let i = 0; i < cardLinks.length; i++) {
	cardLinks[i].addEventListener("click", event => {
		let project = event.target.dataset.project;
		let modal = document.getElementById(`${project}-modal`);

		modal.style.display = "block";
	});
}

//Close modal button event listeners
const xButtons = document.querySelectorAll(".modal-close");

for (let i = 0; i < xButtons.length; i++) {
	xButtons[i].addEventListener("click", event => {
		event.target.parentElement.parentElement.style.display = "none";
	});
}

//Close by clicking outside event listeners
const modals = document.querySelectorAll(".modal");

for (let i = 0; i < modals.length; i++) {
	modals[i].addEventListener("click", function(event) {
		if (event.target !== this)
			return;

		event.target.style.display = "none";
	});
}