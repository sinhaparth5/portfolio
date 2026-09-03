// Cookie consent gate: analytics only loads after the visitor opts in.
// The choice itself lives in a first-party cookie, "essential only" loads nothing else.
const KEY = "cookie-consent";
const GTAG_ID = "G-0P5Z6LMTGX";
const GTM_ID = "GTM-NGRLW2RH";

declare global {
	interface Window {
		dataLayer?: unknown[];
	}
}

function getCookie(name: string): string | null {
	return document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`))?.[1] ?? null;
}

function setCookie(name: string, value: string) {
	// 6 months, site-wide, Lax (essential, not third-party)
	document.cookie = `${name}=${value}; max-age=15552000; path=/; SameSite=Lax`;
}

function loadAnalytics() {
	window.dataLayer = window.dataLayer || [];
	const gtag = (...args: unknown[]) => window.dataLayer?.push(args);
	gtag("js", new Date());
	gtag("config", GTAG_ID);

	for (const src of [
		`https://www.googletagmanager.com/gtag/js?id=${GTAG_ID}`,
		`https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`,
	]) {
		const script = document.createElement("script");
		script.async = true;
		script.src = src;
		document.head.appendChild(script);
	}
}

const banner = document.getElementById("consent-banner");
const consent = getCookie(KEY);

if (consent === "all") {
	loadAnalytics();
} else if (consent !== "essential") {
	banner?.classList.add("show");
}

function choose(value: "all" | "essential") {
	setCookie(KEY, value);
	banner?.classList.remove("show");
	if (value === "all") loadAnalytics();
}

document.getElementById("consent-essential")?.addEventListener("click", () => choose("essential"));
document.getElementById("consent-all")?.addEventListener("click", () => choose("all"));
