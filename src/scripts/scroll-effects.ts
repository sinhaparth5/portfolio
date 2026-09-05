// Everything that reacts to scroll position: active nav link, section
// reveal-on-entry, the progress bar under the nav, and the back-to-top button.
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// --- active nav link -----------------------------------------------
// Scroll-position based rather than IntersectionObserver: a margin-band
// observer gets unreliable for the last section once its bottom can't
// reach the trigger band. Picking "last section whose top has passed a
// fixed line" is simpler and correct at the top and bottom of the page.
const navLinks = document.querySelectorAll<HTMLAnchorElement>("[data-nav-link]");
const sections = Array.from(navLinks)
	.map((link) => ({ id: link.dataset.navLink ?? "", el: document.getElementById(link.dataset.navLink ?? "") }))
	.filter((s): s is { id: string; el: HTMLElement } => s.el !== null);

function updateActiveNav() {
	if (!sections.length) return;
	const doc = document.documentElement;
	const line = window.scrollY + window.innerHeight * 0.35;
	// near the very bottom, the last section's top may sit past however far
	// the page can actually scroll, so the offset check alone never reaches it
	const nearBottom = window.scrollY + window.innerHeight >= doc.scrollHeight - 2;
	let current = "";
	for (const s of sections) {
		if (s.el.offsetTop <= line) current = s.id;
	}
	if (nearBottom) current = sections[sections.length - 1].id;
	navLinks.forEach((link) => {
		if (link.dataset.navLink === current) link.setAttribute("aria-current", "true");
		else link.removeAttribute("aria-current");
	});
}

// --- reveal-on-scroll --------------------------------------------------
const revealEls = document.querySelectorAll<HTMLElement>(".reveal");
if (revealEls.length && !prefersReducedMotion) {
	revealEls.forEach((el) => el.classList.add("pending"));
	const revealObserver = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (!entry.isIntersecting) return;
				entry.target.classList.remove("pending");
				entry.target.classList.add("visible");
				revealObserver.unobserve(entry.target);
			});
		},
		{ threshold: 0, rootMargin: "0px 0px -40px 0px" },
	);
	revealEls.forEach((el) => revealObserver.observe(el));
}

// --- progress bar + back-to-top, both driven by one scroll listener ---
const backToTop = document.getElementById("back-to-top");

let ticking = false;
function onScroll() {
	if (ticking) return;
	ticking = true;
	requestAnimationFrame(() => {
		const doc = document.documentElement;
		const scrollable = doc.scrollHeight - doc.clientHeight;
		const progress = scrollable > 0 ? doc.scrollTop / scrollable : 0;
		doc.style.setProperty("--scroll-progress", progress.toFixed(4));

		backToTop?.classList.toggle("show", doc.scrollTop > window.innerHeight * 0.6);
		updateActiveNav();
		ticking = false;
	});
}

window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

backToTop?.addEventListener("click", () => {
	window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
});
