//Information buttons
const infoButtons = document.querySelectorAll(".project-info");

for (let i = 0; i < infoButtons.length; i++) {
	infoButtons[i].addEventListener("click", event => {
		let project = event.target.dataset.project;
		let modal = document.getElementById(`${project}-modal`);

		modal.style.display = "block";
	});
}

//Close modal buttons
const xButtons = document.querySelectorAll(".modal-close");

for (let i = 0; i < xButtons.length; i++) {
	xButtons[i].addEventListener("click", event => {
		event.target.parentElement.parentElement.style.display = "none";
	});
}

//Close by clicking outside of modal
const modals = document.querySelectorAll(".modal");

for (let i = 0; i < modals.length; i++) {
	modals[i].addEventListener("click", function(event) {
		if (event.target !== this)
			return;

		event.target.style.display = "none";
	});
}

//Live Site buttone
const linkButtons = document.querySelectorAll(".project-link");

for (let i = 0; i < linkButtons.length; i++) {
	linkButtons[i].addEventListener("click", event => {
		let link = event.target.dataset.link;

		window.location.href = link;
	});
}