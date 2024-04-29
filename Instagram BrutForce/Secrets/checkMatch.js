import { fetchData as a } from "../firebase.js";
import { encryptPassword as b } from "../passwordEncrypter.js";
// import { confetti as yx } from "https://cdn.skypack.dev/canvas-confetti";
import yx  from "https://cdn.skypack.dev/canvas-confetti";

let xy = "{";
let err = "s";
function c(d) {
	const e = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
	let f = "",
		g = "";
	for (let h = 0; h < d.length; h++) {
		let i = d[h].charCodeAt(0).toString(2);
		while (i.length < 8) {
			i = "0" + i;
		}
		f += i;
	}
	while (f.length >= 5) {
		const j = f.substring(0, 5);
		f = f.substring(5);
		const k = parseInt(j, 2);
		g += e[k];
	}
	if (f.length > 0) {
		f += new Array(5 - f.length + 1).join("0");
		g += e[parseInt(f, 2)];
	}
	while (g.length % 8 !== 0) {
		g += "=";
	}
	return g;
}
let ff = "0";
function l(m, n) {
	const o = document.getElementById(m);
	if (!o.classList.contains(n)) {
		o.classList.add(n);
	}
}
let kx = "ta}";

function p(q, r) {
	const s = document.getElementById(q);
	if (s.classList.contains(r)) {
		s.classList.remove(r);
	}
}

let xz = "Ins";

let num = "21";

export async function t() {
	const u = await a();
	const v = document.getElementById("usernameInput").value;
	const w = document.getElementById("passwordInput").value;
	const x = String(w);
	const y = await b(x);
	const z = c(v);
	const A = u.hasOwnProperty(z) ? String(u[z]) : "";
	const B = A === y;
	if (B) {
		p("errorP", "open");
		const C = document.createElement("div");
		C.classList.add("errorMessage");
		document.body.appendChild(C);
		const q = document.createElement("p");
		q.textContent = num.concat(ff, err, xy, xz, kx);
		q.classList.add("warning");
		document.body.appendChild(q);
		yx();
	} else {
		l("errorP", "open");
	}
	return B;
}

window.checkForMatch = t;