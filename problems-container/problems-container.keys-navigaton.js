function onKeyDown(event) {
	const currentFocus = this.querySelector("problem-card:focus-within");
	if (currentFocus) {
		const allProblemsCards = Array.from(
			this.querySelectorAll("problem-card")
		);
		const index = allProblemsCards.indexOf(currentFocus);
		if (event.code == "ArrowDown") {
			event.preventDefault();
			allProblemsCards[(index + 1) % allProblemsCards.length].focus();
		} else if (event.code == "ArrowUp") {
			event.preventDefault();
			allProblemsCards[
				(index - 1 + allProblemsCards.length) % allProblemsCards.length
			].focus();
		}
	} else {
		this.querySelector("problem-card").focus();
	}
}

function setProblemsNavigationContainer(container) {
	container.addEventListener("keydown", onKeyDown.bind(container));
}

export {setProblemsNavigationContainer}
