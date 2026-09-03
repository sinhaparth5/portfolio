// Mochi cat: an oneko-style loop (idle/roam/sleep) driving a set of
// pre-drawn pose frames instead of one shared SVG's toggleable sub-parts.
// Roams the full viewport (x and y), clamped to its bounds — no per-element
// collision against paragraphs/buttons, that's more than a portfolio-page pet needs.
const ROOT_ID = "desk-pet";
const BOND_KEY = "pet-bond";
const SPRITE_W = 84;
const SPRITE_H = 84;
const SLEEP_AFTER_MS = 25000;
const IDLE_TICK_MS = 6000;
const BLINK_EVERY_MS = 4500;

type Pose =
	| "idle" | "blink" | "walk-1" | "walk-2" | "run-1" | "run-2"
	| "eat" | "sleep" | "angry" | "happy" | "love" | "surprised" | "sad" | "play" | "stretch";
type Mode = "idle" | "walk" | "run" | "sleep" | "busy";

const root = document.getElementById(ROOT_ID);

if (root) {
	const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
	const bubble = root.querySelector<HTMLElement>(".pet-bubble");
	const frames = new Map<string, HTMLElement>();
	root.querySelectorAll<HTMLElement>("[data-pose-frame]").forEach((el) => {
		frames.set(el.dataset.poseFrame ?? "", el);
	});

	let bond = Number(localStorage.getItem(BOND_KEY) ?? 0);
	let mode: Mode = "idle";
	let idleSince = Date.now();
	let cycleTimer = 0;

	function showPose(pose: Pose) {
		frames.forEach((el, name) => el.toggleAttribute("hidden", name !== pose));
		root.dataset.pose = pose;
	}

	function say(text: string, ms = 1400) {
		if (!bubble) return;
		bubble.textContent = text;
		bubble.classList.add("show");
		window.setTimeout(() => bubble.classList.remove("show"), ms);
	}

	function place(px: number, py: number) {
		const x = Math.max(8, Math.min(window.innerWidth - SPRITE_W - 8, px));
		const y = Math.max(8, Math.min(window.innerHeight - SPRITE_H - 8, py));
		root.style.left = `${x}px`;
		root.style.top = `${y}px`;
	}
	place(window.innerWidth - 130, window.innerHeight - 130);
	window.addEventListener(
		"resize",
		() => {
			// re-clamp instantly; the in-flight roam step() re-clamps on its own
			// next frame too (place() always clamps), so no need to also stop it
			const rect = root.getBoundingClientRect();
			place(rect.left, rect.top);
		},
		{ passive: true },
	);

	function bump(by = 1) {
		bond = Math.min(20, bond + by);
		localStorage.setItem(BOND_KEY, String(bond));
	}

	function enterIdle() {
		mode = "idle";
		idleSince = Date.now();
		showPose("idle");
	}

	// a transient mood/reaction: show a pose, then return to idle after `ms`.
	// clears any running walk/run frame-cycle so it can't flicker back over the reaction.
	function react(pose: Pose, ms: number) {
		window.clearInterval(cycleTimer);
		mode = "busy";
		showPose(pose);
		window.setTimeout(() => {
			if (mode === "busy") enterIdle();
		}, ms);
	}

	// oneko-style: step toward the target at a constant speed (px/s) each frame,
	// instead of a CSS transition — a fixed-duration transition covers a random
	// distance at a random speed, which reads as a jump/teleport, not a walk.
	function roam(kind: "walk" | "run") {
		const seq = kind === "walk" ? (["walk-1", "walk-2"] as const) : (["run-1", "run-2"] as const);
		const speed = kind === "walk" ? 70 : 220; // px/s
		const frameStep = kind === "walk" ? 260 : 150;
		mode = kind;
		const targetX = Math.random() * (window.innerWidth - SPRITE_W - 16) + 8;
		const targetY = Math.random() * (window.innerHeight - SPRITE_H - 16) + 8;
		let i = 0;
		window.clearInterval(cycleTimer);
		cycleTimer = window.setInterval(() => {
			showPose(seq[i % 2]);
			i++;
		}, frameStep);

		let last = performance.now();
		function step(now: number) {
			if (mode !== kind) return; // interrupted by a click/hover/sleep
			const dt = (now - last) / 1000;
			last = now;
			const rect = root.getBoundingClientRect();
			const dx = targetX - rect.left;
			const dy = targetY - rect.top;
			const dist = Math.hypot(dx, dy);
			const moveBy = speed * dt;
			if (dist <= moveBy) {
				place(targetX, targetY);
				window.clearInterval(cycleTimer);
				enterIdle();
				return;
			}
			place(rect.left + (dx / dist) * moveBy, rect.top + (dy / dist) * moveBy);
			requestAnimationFrame(step);
		}
		requestAnimationFrame((t) => {
			last = t;
			requestAnimationFrame(step);
		});
	}

	function wake() {
		idleSince = Date.now();
		if (mode === "sleep") react("stretch", 900);
	}
	(["mousemove", "scroll", "keydown"] as const).forEach((evt) =>
		window.addEventListener(evt, wake, { passive: true }),
	);

	// small delay to tell a single click from the first half of a double-click
	let clickTimer = 0;
	root.addEventListener("click", () => {
		window.clearTimeout(clickTimer);
		clickTimer = window.setTimeout(() => {
			wake();
			bump(1);
			const grumpy = Math.random() * 20 > bond; // calmer as bond grows
			react(grumpy ? "angry" : "love", 1200);
			say(grumpy ? "pss pss!" : "purr~");
		}, 220);
	});

	root.addEventListener("dblclick", () => {
		window.clearTimeout(clickTimer);
		wake();
		bump(2);
		react("play", 1400);
		say("wanna play?");
	});

	let hoverTimer: number;
	root.addEventListener("mouseenter", () => {
		hoverTimer = window.setTimeout(() => {
			bump(1);
			window.clearInterval(cycleTimer);
			mode = "busy";
			showPose(bond >= 10 ? "love" : "happy");
		}, 700);
	});
	root.addEventListener("mouseleave", () => {
		window.clearTimeout(hoverTimer);
		if (mode === "busy" && (root.dataset.pose === "happy" || root.dataset.pose === "love")) enterIdle();
	});

	showPose("idle");

	if (!prefersReducedMotion) {
		window.setInterval(() => {
			if (mode !== "idle") return;
			if (Date.now() - idleSince > SLEEP_AFTER_MS) {
				mode = "sleep";
				showPose("sleep");
				return;
			}
			const r = Math.random();
			if (r < 0.45) roam(Math.random() < 0.75 ? "walk" : "run");
			else if (r < 0.55) react("eat", 2200);
			else if (r < 0.63) react("sad", 1600);
			else if (r < 0.71) react("surprised", 1300);
			// else stays idle this tick
		}, IDLE_TICK_MS);

		window.setInterval(() => {
			if (mode === "idle" && root.dataset.pose === "idle") {
				showPose("blink");
				window.setTimeout(() => {
					if (mode === "idle") showPose("idle");
				}, 150);
			}
		}, BLINK_EVERY_MS);
	}
}
