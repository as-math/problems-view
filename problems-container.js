const problemsContainer = document.getElementById("problems");
problemsContainer.querySelector("problem-card").focus();
problemsContainer.addEventListener("keydown", (event) => {
	const currentFocus = problemsContainer.querySelector(
		"problem-card:focus-within"
	);
	if (currentFocus) {
		const allProblemsCards = Array.from(
			problemsContainer.querySelectorAll("problem-card")
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
	}
});
