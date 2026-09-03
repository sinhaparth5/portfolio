// Small "copy" buttons next to the email address and each DOI.
const announcer = document.getElementById("copy-announcer");

document.querySelectorAll<HTMLButtonElement>("[data-copy]").forEach((btn) => {
	const label = btn.querySelector<HTMLElement>(".copy-btn-text");
	const original = label?.textContent ?? "copy";

	btn.addEventListener("click", async () => {
		const value = btn.dataset.copy;
		if (!value) return;
		try {
			await navigator.clipboard.writeText(value);
			if (label) label.textContent = "copied";
			btn.classList.add("copied");
			if (announcer) announcer.textContent = "Copied to clipboard";
			setTimeout(() => {
				if (label) label.textContent = original;
				btn.classList.remove("copied");
			}, 1500);
		} catch {
			// clipboard blocked (permissions, insecure context): the value is
			// still selectable as plain text right next to the button
		}
	});
});
