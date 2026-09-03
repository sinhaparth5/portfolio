// Auto-mounts drawably sketches on any element carrying a data-sketch-* hook.
// One script for the whole site instead of per-component init boilerplate.
import {
	drawablyBadge,
	drawablyButton,
	drawablyCard,
	drawablyCircle,
	drawablyDivider,
	drawablyHighlight,
	drawablyList,
	drawablyUnderline,
} from "drawably";

document.querySelectorAll<HTMLElement>("[data-sketch-button]").forEach((el) => {
	const variant = el.dataset.sketchButton as "outline" | "solid" | "scribble" | "";
	drawablyButton(el, { variant: variant || "solid" });
});

document.querySelectorAll<HTMLElement>("[data-sketch-underline]").forEach((el) => drawablyUnderline(el));
document.querySelectorAll<HTMLElement>("[data-sketch-highlight]").forEach((el) => drawablyHighlight(el));
document.querySelectorAll<HTMLElement>("[data-sketch-circle]").forEach((el) => drawablyCircle(el));
document.querySelectorAll<HTMLElement>("[data-sketch-divider]").forEach((el) => drawablyDivider(el));
document.querySelectorAll<HTMLElement>("[data-sketch-badge]").forEach((el) => drawablyBadge(el, { variant: "outline" }));
document.querySelectorAll<HTMLElement>("[data-sketch-card]").forEach((el) => drawablyCard(el));
document.querySelectorAll<HTMLElement>("[data-sketch-list]").forEach((el) => drawablyList(el, { marker: "dash" }));
