class ProblemCard extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
	}
	connectedCallback() {
		this.tabIndex = 0;
		this.shadowRoot.innerHTML = `<link href='${
			new URL("./problem-card.css", import.meta.url).href
		}' rel='stylesheet' />
		<slot name="main-text"></slot>
		<hr class="details">
		<slot name="details" class="details"></slot>`;

		this.addEventListener("dblclick", this.onDoubleClick);
		this.addEventListener("keydown", this.onKeyDown);
	}
	disconnectedCallback() {
		this.removeEventListener("dblclick", this.onDoubleClick);
		this.removeEventListener("keydown", this.onKeyDown);
	}
	onDoubleClick(event) {
		this.toggleAttribute("open");
	}
	onKeyDown(event) {
		if (event.code == "Enter") {
			this.toggleAttribute("open");
		}
	}
}
customElements.define("problem-card", ProblemCard);
