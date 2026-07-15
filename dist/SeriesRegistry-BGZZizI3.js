//#region node_modules/highcharts/es-modules/Core/Globals.js
var e;
(function(e) {
	e.SVG_NS = "http://www.w3.org/2000/svg", e.product = "Highcharts", e.version = "13.0.0", e.win = typeof window < "u" ? window : {}, e.doc = e.win.document, e.svg = !!e.doc?.createElementNS?.(e.SVG_NS, "svg")?.createSVGRect, e.pageLang = e.doc?.documentElement?.closest("[lang]")?.lang, e.userAgent = e.win.navigator?.userAgent || "", e.isChrome = e.win.chrome, e.isFirefox = e.userAgent.indexOf("Firefox") !== -1, e.isMS = /(edge|msie|trident)/i.test(e.userAgent) && !e.win.opera, e.isSafari = !e.isChrome && e.userAgent.indexOf("Safari") !== -1, e.isTouchDevice = /(Mobile|Android|Windows Phone)/.test(e.userAgent), e.isWebKit = e.userAgent.indexOf("AppleWebKit") !== -1, e.deg2rad = Math.PI * 2 / 360, e.marginNames = [
		"plotTop",
		"marginRight",
		"marginBottom",
		"plotLeft"
	], e.noop = function() {}, e.supportsPassiveEvents = function() {
		let t = !1;
		if (!e.isMS) {
			let n = Object.defineProperty({}, "passive", { get: function() {
				t = !0;
			} });
			e.win.addEventListener && e.win.removeEventListener && (e.win.addEventListener("testPassive", e.noop, n), e.win.removeEventListener("testPassive", e.noop, n));
		}
		return t;
	}(), e.charts = [], e.composed = [], e.dateFormats = {}, e.seriesTypes = {}, e.symbolSizes = {}, e.chartCount = 0;
})(e ||= {});
var t = e, { doc: n, win: r } = t;
function i(e, n, r, i = {}) {
	let a = typeof e == "function" && e.prototype || e;
	Object.hasOwnProperty.call(a, "hcEvents") || (a.hcEvents = {});
	let o = a.hcEvents;
	t.Point && e instanceof t.Point && e.series && e.series.chart && (e.series.chart.runTrackerClick = !0);
	let s = e.addEventListener;
	s && s.call(e, n, r, t.supportsPassiveEvents ? {
		passive: i.passive === void 0 ? n.indexOf("touch") !== -1 : i.passive,
		capture: !1
	} : !1), o[n] || (o[n] = []);
	let c = {
		fn: r,
		order: typeof i.order == "number" ? i.order : Infinity
	};
	return o[n].push(c), o[n].sort((e, t) => e.order - t.order), function() {
		I(e, n, r);
	};
}
function a(e) {
	let t = e.length, n = e[0];
	for (; t--;) e[t] < n && (n = e[t]);
	return n;
}
function o(e) {
	let t = e.length, n = e[0];
	for (; t--;) e[t] > n && (n = e[t]);
	return n;
}
function s(e, t, n) {
	let r = D(t) && !p(n), i, a = (t, n) => {
		p(t) ? e.setAttribute(n, t) : r ? (i = e.getAttribute(n), !i && n === "class" && (i = e.getAttribute(n + "Name"))) : e.removeAttribute(n);
	};
	return D(t) ? a(n, t) : M(t, a), i;
}
function c(e, t, n) {
	return e > t ? e < n ? e : n : t;
}
function l(e, t) {
	return e > 0x5af3107a4000 ? e : parseFloat(e.toPrecision(t || 14));
}
function u(e, t, r, i, a) {
	let o = n.createElement(e);
	return t && v(o, t), a && f(o, {
		padding: "0",
		border: "none",
		margin: "0"
	}), r && f(o, r), i && i.appendChild(o), o;
}
function d(e, t = 0, n) {
	let r = t % 2 / 2, i = n ? -1 : 1;
	return (Math.round(e * i - r) + r) * i;
}
function f(e, t) {
	v(e.style, t);
}
function p(e) {
	return e != null;
}
function m(e, t, n) {
	M(e, function(r, i) {
		r !== t && r?.destroy && r.destroy(), (r?.destroy || !n) && delete e[i];
	});
}
function h(e) {
	e?.parentElement?.removeChild(e);
}
function g(e, t, n, r) {
	let i = {};
	function a(e, t, i, o) {
		let s = n ? t : e;
		M(e, function(n, c) {
			if (!o && r && r.indexOf(c) > -1 && t[c]) {
				n = L(n), i[c] = [];
				for (let e = 0; e < Math.max(n.length, t[c].length); e++) t[c][e] && (n[e] === void 0 ? i[c][e] = t[c][e] : (i[c][e] = {}, a(n[e], t[c][e], i[c][e], o + 1)));
			} else A(n, !0) && !n.nodeType ? (i[c] = O(n) ? [] : {}, a(n, t[c] || {}, i[c], o + 1), Object.keys(i[c]).length === 0 && !(c === "colorAxis" && o === 0) && delete i[c]) : (e[c] !== t[c] || c in e && !(c in t)) && c !== "__proto__" && c !== "constructor" && (i[c] = s[c]);
		});
	}
	return a(e, t, i, 0), i;
}
function _(e, t) {
	let n = e.length;
	for (; n--;) if (e[n] === t) {
		e.splice(n, 1);
		break;
	}
}
function v(e, t) {
	let n;
	for (n in e ||= {}, t) e[n] = t[n];
	return e;
}
function y(e, t) {
	let n = (function() {});
	return n.prototype = new e(), v(n.prototype, t), n;
}
function b(e, r, i, a) {
	if (i ||= {}, n?.createEvent && (e.dispatchEvent || e.fireEvent && e !== t)) {
		let t = n.createEvent("Events");
		t.initEvent(r, !0, !0), i = v(t, i), e.dispatchEvent ? e.dispatchEvent(i) : e.fireEvent(r, i);
	} else if (e.hcEvents) {
		i.target || v(i, {
			preventDefault: function() {
				i.defaultPrevented = !0;
			},
			target: e,
			type: r
		});
		let t = [], n = e, a = !1;
		for (; n.hcEvents;) Object.hasOwnProperty.call(n, "hcEvents") && n.hcEvents[r] && (t.length && (a = !0), t.unshift.apply(t, n.hcEvents[r])), n = Object.getPrototypeOf(n);
		a && t.sort((e, t) => e.order - t.order), t.forEach((t) => {
			t.fn.call(e, i, e) === !1 && i.preventDefault();
		});
	}
	a && !i.defaultPrevented && a.call(e, i);
}
var x = (e = "") => ({
	center: .5,
	right: 1,
	middle: .5,
	bottom: 1
})[e] || 0;
function S(e, t) {
	let n = !t, r, i, a, o;
	return e.forEach((e) => {
		if (e.length > 1) for (i = e.length - 1, o = i; o > 0; o--) a = e[o] - e[o - 1], a < 0 && !n ? (t?.(), t = void 0) : a && (r === void 0 || a < r) && (r = a);
	}), r;
}
function C(e) {
	return 10 ** Math.floor(Math.log(e) / Math.LN10);
}
function w(e, t) {
	let n = e.split(".");
	for (; n.length && p(t);) {
		let e = n.shift();
		if (e === void 0 || e === "__proto__") return;
		if (e === "this") {
			let e;
			return A(t) && (e = t["@this"]), e ?? t;
		}
		let i = t[e.replace(/[\\'"]/g, "")];
		if (!p(i) || typeof i == "function" || typeof i.nodeType == "number" || i === r) return;
		t = i;
	}
	return t;
}
function T(e, t, n) {
	let i;
	if (t === "width") {
		let t = Math.min(e.offsetWidth, e.scrollWidth), n = e.getBoundingClientRect?.().width;
		return n < t && n >= t - 1 && (t = Math.floor(n)), Math.max(0, t - (T(e, "padding-left", !0) || 0) - (T(e, "padding-right", !0) || 0));
	}
	if (t === "height") return Math.max(0, Math.min(e.offsetHeight, e.scrollHeight) - (T(e, "padding-top", !0) || 0) - (T(e, "padding-bottom", !0) || 0));
	let a = r.getComputedStyle(e, void 0);
	return a && (i = a.getPropertyValue(t), P(n, t !== "opacity") && (i = F(i))), i;
}
var ee = Array.prototype.find ? function(e, t) {
	return e.find(t);
} : function(e, t) {
	let n, r = e.length;
	for (n = 0; n < r; n++) if (t(e[n], n)) return e[n];
};
function te(e) {
	p(e) && clearTimeout(e);
}
function ne(e) {
	return A(e) && typeof e.nodeType == "number";
}
function re(e) {
	let t = e?.constructor;
	return !!(A(e, !0) && !ne(e) && t?.name && t.name !== "Object");
}
function E(e) {
	return typeof e == "number" && !isNaN(e) && e < Infinity && e > -Infinity;
}
function D(e) {
	return typeof e == "string";
}
function O(e) {
	let t = Object.prototype.toString.call(e);
	return t === "[object Array]" || t === "[object Array Iterator]";
}
function k(e) {
	return typeof e == "function";
}
function A(e, t) {
	return !!e && typeof e == "object" && (!t || !O(e));
}
function j(e, ...t) {
	let n, r = [e, ...t], i = {}, a = function(e, t) {
		return typeof e != "object" && (e = {}), M(t, function(n, r) {
			r === "__proto__" || r === "constructor" || (A(n, !0) && !re(n) && !ne(n) ? e[r] = a(e[r] || {}, n) : e[r] = t[r]);
		}), e;
	};
	e === !0 && (i = r[1], r = Array.prototype.slice.call(r, 2));
	let o = r.length;
	for (n = 0; n < o; n++) i = a(i, r[n]);
	return i;
}
function ie(e, t, n, r, i) {
	let a, o = e;
	n = P(n, C(e));
	let s = e / n;
	for (t || (t = i ? [
		1,
		1.2,
		1.5,
		2,
		2.5,
		3,
		4,
		5,
		6,
		8,
		10
	] : [
		1,
		2,
		2.5,
		5,
		10
	], r === !1 && (n === 1 ? t = t.filter(function(e) {
		return e % 1 == 0;
	}) : n <= .1 && (t = [1 / n]))), a = 0; a < t.length && (o = t[a], !(i && o * n >= e || !i && s <= (t[a] + (t[a + 1] || t[a])) / 2)); a++);
	return o = l(o * n, -Math.round(Math.log(.001) / Math.LN10)), o;
}
function M(e, t, n) {
	for (let r in e) Object.hasOwnProperty.call(e, r) && t.call(n || e[r], e[r], r, e);
}
function ae(e) {
	let t = n.documentElement, i = e.parentElement || e.parentNode ? e.getBoundingClientRect() : {
		top: 0,
		left: 0,
		width: 0,
		height: 0
	};
	return {
		top: i.top + (r.pageYOffset || t.scrollTop) - (t.clientTop || 0),
		left: i.left + (r.pageXOffset || t.scrollLeft) - (t.clientLeft || 0),
		width: i.width,
		height: i.height
	};
}
function N(e, t, n) {
	return Array((t || 2) + 1 - String(e).replace("-", "").length).join(n || "0") + e;
}
function P() {
	let e = arguments, t = e.length;
	for (let n = 0; n < t; n++) {
		let t = e[n];
		if (t != null) return t;
	}
}
function F(e, t) {
	return parseInt(e, t || 10);
}
function oe(e, t) {
	return e.indexOf(t) < 0 && !!e.push(t);
}
function se(e, t, n) {
	return /%$/.test(e) ? t * parseFloat(e) / 100 + (n || 0) : parseFloat(e);
}
function ce(e, ...t) {
	let n, r;
	do {
		n = e;
		for (r of t) e = e.replace(r[0], r[1]);
	} while (e !== n);
	return e;
}
function I(e, t, n) {
	function r(t, n) {
		let r = e.removeEventListener;
		r && r.call(e, t, n, !1);
	}
	function i(n) {
		let i, a;
		e.nodeName && (t ? (i = {}, i[t] = !0) : i = n, M(i, function(e, t) {
			if (n[t]) for (a = n[t].length; a--;) r(t, n[t][a].fn);
		}));
	}
	let a = typeof e == "function" && e.prototype || e;
	if (Object.hasOwnProperty.call(a, "hcEvents")) {
		let e = a.hcEvents;
		if (t) {
			let a = e[t] || [];
			n ? (e[t] = a.filter(function(e) {
				return n !== e.fn;
			}), r(t, n)) : (i(e), e[t] = []);
		} else i(e), delete a.hcEvents;
	}
}
function L(e) {
	return O(e) ? e : [e];
}
function le(e, t) {
	let n = e.length, r, i;
	for (i = 0; i < n; i++) e[i].safeI = i;
	for (e.sort(function(e, n) {
		return r = t(e, n), r === 0 ? e.safeI - n.safeI : r;
	}), i = 0; i < n; i++) delete e[i].safeI;
}
function ue(e, t, n) {
	return t > 0 ? setTimeout(e, t, n) : (e.call(0, n), -1);
}
function de(e) {
	return D(e) ? e.substring(0, 1).toUpperCase() + e.substring(1) : String(e);
}
function fe(e, t, n) {
	let r = e[t];
	e[t] = function() {
		let e = arguments, t = this;
		return n.apply(this, [function() {
			return r.apply(t, arguments.length ? arguments : e);
		}].concat([].slice.call(arguments)));
	};
}
//#endregion
//#region node_modules/highcharts/es-modules/Core/Color/Color.js
var { win: pe } = t, R = (e, t, n) => n === 0 ? e : n === 1 ? t : `color-mix(in srgb,${e},${t} ${n * 100}%)`, z = (e) => D(e) && !!e && e !== "none", B = class e {
	static parse(t) {
		return t ? new e(t) : e.None;
	}
	constructor(n) {
		this.rgba = [
			NaN,
			NaN,
			NaN,
			NaN
		], this.input = n;
		let r = t.Color;
		if (r && r !== e) return new r(n);
		let i, a, o, s;
		if (typeof n == "object" && n.stops !== void 0) this.stops = n.stops.map((t) => new e(t[1]));
		else if (typeof n == "string") for (this.input = n = e.names[n.toLowerCase()] || n, o = e.parsers.length; o-- && !a;) s = e.parsers[o], i = s.regex.exec(n), i && (a = s.parse(i));
		a && (this.rgba = a);
	}
	get(e) {
		let t = this.input, n = this.rgba;
		if (this.output) return this.output;
		if (typeof t == "object" && this.stops !== void 0) {
			let n = j(t);
			return n.stops = [].slice.call(n.stops), this.stops.forEach((t, r) => {
				n.stops[r] = [n.stops[r][0], t.get(e)];
			}), n;
		}
		return n && E(n[0]) ? e === "rgb" || !e && n[3] === 1 ? "rgb(" + n[0] + "," + n[1] + "," + n[2] + ")" : e === "a" ? `${n[3]}` : "rgba(" + n.join(",") + ")" : t;
	}
	brighten(t) {
		let n = this.rgba;
		if (this.stops) this.stops.forEach(function(e) {
			e.brighten(t);
		});
		else if (E(t) && t !== 0) if (E(n[0])) for (let e = 0; e < 3; e++) n[e] += F(t * 255), n[e] < 0 && (n[e] = 0), n[e] > 255 && (n[e] = 255);
		else e.useColorMix && z(this.input) && (this.output = R(this.input, t > 0 ? "white" : "black", Math.abs(t)));
		return this;
	}
	setOpacity(t) {
		return E(this.rgba[0]) ? this.rgba[3] = t : e.useColorMix && z(this.input) && (this.output = R(this.input, "#0000", 1 - t)), this;
	}
	tweenTo(t, n) {
		let r = this.rgba, i = t.rgba;
		if (!E(r[0]) || !E(i[0])) return e.useColorMix && z(this.input) && z(t.input) && n < .99 ? R(this.input, t.input, n) : t.input || "none";
		let a = i[3] !== 1 || r[3] !== 1, o = (e, t) => e + (r[t] - e) * (1 - n), s = i.slice(0, 3).map(o).map(Math.round);
		return a && s.push(o(i[3], 3)), (a ? "rgba(" : "rgb(") + s.join(",") + ")";
	}
};
B.names = {
	white: "#ffffff",
	black: "#000000"
}, B.parsers = [
	{
		regex: /rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d?(?:\.\d+)?)\s*\)/,
		parse: function(e) {
			return [
				F(e[1]),
				F(e[2]),
				F(e[3]),
				parseFloat(e[4], 10)
			];
		}
	},
	{
		regex: /rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)/,
		parse: function(e) {
			return [
				F(e[1]),
				F(e[2]),
				F(e[3]),
				1
			];
		}
	},
	{
		regex: /^#([a-f0-9])([a-f0-9])([a-f0-9])([a-f0-9])?$/i,
		parse: function(e) {
			return [
				F(e[1] + e[1], 16),
				F(e[2] + e[2], 16),
				F(e[3] + e[3], 16),
				p(e[4]) ? F(e[4] + e[4], 16) / 255 : 1
			];
		}
	},
	{
		regex: /^#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})?$/i,
		parse: function(e) {
			return [
				F(e[1], 16),
				F(e[2], 16),
				F(e[3], 16),
				p(e[4]) ? F(e[4], 16) / 255 : 1
			];
		}
	}
], B.useColorMix = pe.CSS?.supports("color", "color-mix(in srgb,red,blue 9%)"), B.None = new B("");
//#endregion
//#region node_modules/highcharts/es-modules/Core/Animation/Fx.js
var { parse: me } = B, { win: he } = t, V = class e {
	constructor(e, t, n) {
		this.pos = NaN, this.options = t, this.elem = e, this.prop = n;
	}
	dSetter() {
		let e = this.paths, t = e?.[0], n = e?.[1], r = this.now || 0, i = [];
		if (r === 1 || !t || !n) i = this.toD || [];
		else if (t.length === n.length && r < 1) for (let e = 0; e < n.length; e++) {
			let a = t[e], o = n[e], s = [];
			for (let e = 0; e < o.length; e++) {
				let t = a[e], n = o[e];
				E(t) && E(n) && !(o[0] === "A" && (e === 4 || e === 5)) ? s[e] = t + r * (n - t) : s[e] = n;
			}
			i.push(s);
		}
		else i = n;
		this.elem.attr("d", i, void 0, !0);
	}
	update() {
		let e = this.elem, t = this.prop, n = this.now, r = this.options.step;
		this[t + "Setter"] ? this[t + "Setter"]() : e.attr ? e.element && e.attr(t, n, null, !0) : e.style[t] = n + this.unit, r && r.call(e, n, this);
	}
	run(t, n, r) {
		let i = this, a = i.options, o = function(e) {
			return !o.stopped && i.step(e);
		}, s = he.requestAnimationFrame || function(e) {
			setTimeout(e, 13);
		}, c = function() {
			for (let t = 0; t < e.timers.length; t++) e.timers[t]() || e.timers.splice(t--, 1);
			e.timers.length && s(c);
		};
		t === n && !this.elem["forceAnimate:" + this.prop] ? (delete a.curAnim[this.prop], a.complete && Object.keys(a.curAnim).length === 0 && a.complete.call(this.elem)) : (this.startTime = +/* @__PURE__ */ new Date(), this.start = t, this.end = n, this.unit = r, this.now = this.start, this.pos = 0, o.elem = this.elem, o.prop = this.prop, o() && e.timers.push(o) === 1 && s(c));
	}
	step(e) {
		let t = +/* @__PURE__ */ new Date(), n = this.options, r = this.elem, i = n.complete, a = n.duration, o = n.curAnim, s, c;
		return r.attr && !r.element ? s = !1 : e || t >= a + this.startTime ? (this.now = this.end, this.pos = 1, this.update(), o[this.prop] = !0, c = !0, M(o, function(e) {
			e !== !0 && (c = !1);
		}), c && i && i.call(r), s = !1) : (this.pos = n.easing((t - this.startTime) / a), this.now = this.start + (this.end - this.start) * this.pos, this.update(), s = !0), s;
	}
	initPath(e, t, n) {
		let r = e.startX, i = e.endX, a = n.slice(), o = e.isArea, s = o ? 2 : 1, c = t && n.length > t.length && n.hasStackedCliffs, l, u, d, f, p = t?.slice();
		if (!p || c) return [a, a];
		function m(e, t) {
			for (; e.length < u;) {
				let n = e[0], r = t[u - e.length];
				if (r && n[0] === "M" && (r[0] === "C" ? e[0] = [
					"C",
					n[1],
					n[2],
					n[1],
					n[2],
					n[1],
					n[2]
				] : e[0] = [
					"L",
					n[1],
					n[2]
				]), e.unshift(n), o) {
					let t = e.pop();
					e.push(e[e.length - 1], t);
				}
			}
		}
		function h(e) {
			for (; e.length < u;) {
				let t = e[Math.floor(e.length / s) - 1].slice();
				if (t[0] === "C" && (t[1] = t[5], t[2] = t[6]), !o) e.push(t);
				else {
					let n = e[Math.floor(e.length / s)].slice();
					e.splice(e.length / 2, 0, t, n);
				}
			}
		}
		if (r && i && i.length) {
			for (d = 0; d < r.length; d++) if (r[d] === i[0]) {
				l = d;
				break;
			} else if (r[0] === i[i.length - r.length + d]) {
				l = d, f = !0;
				break;
			} else if (r[r.length - 1] === i[i.length - r.length + d]) {
				l = r.length - d;
				break;
			}
			l === void 0 && (p = []);
		}
		return p.length && E(l) && (u = a.length + l * s, f ? (m(p, a), h(a)) : (m(a, p), h(p))), [p, a];
	}
	fillSetter() {
		e.prototype.strokeSetter.apply(this, arguments);
	}
	strokeSetter() {
		this.elem.attr(this.prop, me(this.start).tweenTo(me(this.end), this.pos), void 0, !0);
	}
};
V.timers = [];
//#endregion
//#region node_modules/highcharts/es-modules/Core/Animation/AnimationUtilities.js
function ge(e, t) {
	t.renderer.globalAnimation = P(e, t.options.chart.animation, !0);
}
function H(e) {
	return A(e) ? j({
		duration: 500,
		defer: 0
	}, e) : {
		duration: e ? 500 : 0,
		defer: 0
	};
}
function _e(e, t, n) {
	let r = H(t), i = n ? [n] : e.series, a = 0, o = 0;
	return i.forEach((e) => {
		let n = H(e.options.animation);
		a = A(t) && p(t.defer) ? r.defer : Math.max(a, n.duration + n.defer), o = Math.min(r.duration, n.duration);
	}), e.renderer.forExport && (a = 0), {
		defer: Math.max(0, a - o),
		duration: Math.min(a, o)
	};
}
function ve(e, t, n) {
	let r, i = "", a, o, s;
	A(n) || (s = arguments, n = {
		duration: s[2],
		easing: s[3],
		complete: s[4]
	}), E(n.duration) || (n.duration = 400), n.easing = typeof n.easing == "function" ? n.easing : Math[n.easing] || Math.easeInOutSine, n.curAnim = j(t), M(t, function(s, c) {
		ye(e, c), o = new V(e, n, c), a = void 0, c === "d" && O(t.d) ? (o.paths = o.initPath(e, e.pathArray, t.d), o.toD = t.d, r = 0, a = 1) : e.attr ? r = e.attr(c) : (r = parseFloat(T(e, c)) || 0, c !== "opacity" && (i = "px")), a ||= s, typeof a == "string" && a.match("px") && (a = a.replace(/px/g, "")), o.run(r, a, i);
	});
}
function ye(e, t) {
	let n = V.timers.length;
	for (; n--;) V.timers[n].elem === e && (!t || t === V.timers[n].prop) && (V.timers[n].stopped = !0);
}
var be = {
	animate: ve,
	animObject: H,
	getDeferredAnimation: _e,
	setAnimation: ge,
	stop: ye
}, xe = {
	alignThresholds: !1,
	panning: {
		enabled: !1,
		type: "x"
	},
	styledMode: !1,
	borderRadius: 0,
	colorCount: 10,
	allowMutatingData: !0,
	ignoreHiddenSeries: !0,
	spacing: [
		10,
		10,
		15,
		10
	],
	resetZoomButton: {
		theme: {},
		position: {}
	},
	reflow: !0,
	selectionMarkerFill: "color-mix(var(--highcharts-highlight-color-80) 25%, transparent)",
	type: "line",
	zooming: {
		singleTouch: !1,
		resetButton: {
			theme: { zIndex: 6 },
			position: {
				align: "right",
				x: -10,
				y: 10
			}
		}
	},
	width: null,
	height: null,
	borderColor: "var(--highcharts-highlight-color-80)",
	backgroundColor: "var(--highcharts-background-color)",
	plotBorderColor: "var(--highcharts-neutral-color-20)"
}, Se = {
	dark: {
		backgroundColor: "#141414",
		neutralColor: "#ffffff",
		highlightColor: "#2caffe"
	},
	light: {
		backgroundColor: "#ffffff",
		neutralColor: "#000000",
		highlightColor: "#0022ff",
		positiveColor: "#06b535",
		negativeColor: "#f21313"
	}
}, { charts: Ce, win: U } = t;
function W(e, n, r, i) {
	let a = n ? "Highcharts error" : "Highcharts warning";
	e === 32 && (e = `${a}: Deprecated member`);
	let o = E(e), s = o ? `${a} #${e}: www.highcharts.com/errors/${e}/` : e.toString(), c = function() {
		if (n) throw Error(s);
		U.console && W.messages.indexOf(s) === -1 && console.warn(s);
	};
	if (i !== void 0) {
		let e = "";
		o && (s += "?"), M(i, function(t, n) {
			e += `\n - ${n}: ${t}`, o && (s += encodeURI(n) + "=" + encodeURI(t));
		}), s += e;
	}
	b(t, "displayError", {
		chart: r,
		code: e,
		message: s,
		params: i
	}, c), W.messages.push(s);
}
(function(e) {
	e.messages = [];
})(W ||= {});
function we(e, t) {
	let n = e.options.index, r = t.length, i;
	for (i = e.options.isInternal ? r : 0; i < r + 1; i++) if (!t[i] || E(n) && n < P(t[i].options.index, t[i]._i) || t[i].options.isInternal) {
		t.splice(i, 0, e);
		break;
	}
	return i;
}
var G = {
	millisecond: 1,
	second: 1e3,
	minute: 6e4,
	hour: 36e5,
	day: 24 * 36e5,
	week: 168 * 36e5,
	month: 672 * 36e5,
	year: 364 * 24 * 36e5
};
Math.easeInOutSine = function(e) {
	return -.5 * (Math.cos(Math.PI * e) - 1);
};
var K, Te = function() {
	let e = Math.random().toString(36).substring(2, 9) + "-", t = 0;
	return function() {
		return "highcharts-" + (K ? "" : e) + t++;
	};
}();
function Ee(e) {
	return K = P(e, K);
}
U.jQuery && (U.jQuery.fn.highcharts = function() {
	let e = [].slice.call(arguments);
	if (this[0]) return e[0] ? (new t[D(e[0]) ? e.shift() : "Chart"](this[0], e[0], e[1]), this) : Ce[s(this[0], "data-highcharts-chart")];
});
//#endregion
//#region node_modules/highcharts/es-modules/Shared/TimeBase.js
var { pageLang: De, win: q } = t, Oe = t.isSafari && q.Intl && !q.Intl.DateTimeFormat.prototype.formatRange, ke = (e) => e.main === void 0, Ae = class {
	constructor(e, t) {
		this.options = { timezone: "UTC" }, this.variableTimezone = !1, this.Date = q.Date, this.update(e), this.lang = t;
	}
	update(e = {}) {
		this.dTLCache = {}, this.options = e = j(!0, this.options, e);
		let { timezoneOffset: t, useUTC: n, locale: r } = e;
		this.Date = e.Date || q.Date || Date;
		let i = e.timezone;
		p(n) && (i = n ? "UTC" : void 0), t && t % 60 == 0 && (i = "Etc/GMT" + (t > 0 ? "+" : "") + t / 60), this.variableTimezone = i !== "UTC" && i?.indexOf("Etc/GMT") !== 0, this.timezone = i, this.lang && r && (this.lang.locale = r), [
			"months",
			"shortMonths",
			"weekdays",
			"shortWeekdays"
		].forEach((e) => {
			let t = /months/i.test(e), n = /short/.test(e), r = { timeZone: "UTC" };
			r[t ? "month" : "weekday"] = n ? "short" : "long", this[e] = (t ? [
				0,
				1,
				2,
				3,
				4,
				5,
				6,
				7,
				8,
				9,
				10,
				11
			] : [
				3,
				4,
				5,
				6,
				7,
				8,
				9
			]).map((e) => this.dateFormat(r, (t ? 31 : 1) * 24 * 36e5 * e));
		});
	}
	toParts(e) {
		let [t, n, r, i, a, o, s] = this.dateTimeFormat({
			weekday: "narrow",
			day: "numeric",
			month: "numeric",
			year: "numeric",
			hour: "numeric",
			minute: "numeric",
			second: "numeric"
		}, e, "es").split(/(?:, | |\/|:)/g);
		return [
			+i,
			r - 1,
			+n,
			+a,
			+o,
			+s,
			Math.floor(Number(e) || 0) % 1e3,
			"DLMXJVS".indexOf(t)
		];
	}
	dateTimeFormat(e, t, n = this.options.locale || De) {
		let r = JSON.stringify(e) + n;
		D(e) && (e = this.str2dtf(e));
		let i = this.dTLCache[r];
		if (!i) {
			e.timeZone ??= this.timezone;
			try {
				i = new Intl.DateTimeFormat(n, e);
			} catch (t) {
				/Invalid time zone/i.test(t.message) ? (W(34), e.timeZone = "UTC", i = new Intl.DateTimeFormat(n, e)) : W(t.message, !1);
			}
		}
		return this.dTLCache[r] = i, i?.format(t) || "";
	}
	str2dtf(e, t = {}) {
		let n = {
			L: { fractionalSecondDigits: 3 },
			S: { second: "2-digit" },
			M: { minute: "numeric" },
			H: { hour: "2-digit" },
			k: { hour: "numeric" },
			E: { weekday: "narrow" },
			a: { weekday: "short" },
			A: { weekday: "long" },
			d: { day: "2-digit" },
			e: { day: "numeric" },
			b: { month: "short" },
			B: { month: "long" },
			m: { month: "2-digit" },
			o: { month: "numeric" },
			y: { year: "2-digit" },
			Y: { year: "numeric" }
		};
		return Object.keys(n).forEach((r) => {
			e.indexOf(r) !== -1 && v(t, n[r]);
		}), t;
	}
	makeTime(e, t, n = 1, r = 0, i, a, o) {
		let s = this.Date.UTC(e, t, n, r, i || 0, a || 0, o || 0);
		if (this.timezone !== "UTC") {
			let e = this.getTimezoneOffset(s);
			if (s += e, [
				2,
				3,
				8,
				9,
				10,
				11
			].indexOf(t) !== -1 && (r < 5 || r > 20)) {
				let t = this.getTimezoneOffset(s);
				e === t ? e - 36e5 === this.getTimezoneOffset(s - 36e5) && !Oe && (s -= 36e5) : s += t - e;
			}
		}
		return s;
	}
	parse(e) {
		if (!D(e)) return e ?? void 0;
		e = e.replace(/\//g, "-").replace(/(GMT|UTC)/, "");
		let t = e.indexOf("Z") > -1 || /([+-][0-9]{2}):?[0-9]{2}$/.test(e), n = /^[0-9]{4}-[0-9]{2}(-[0-9]{2}|)$/.test(e);
		!t && !n && (e += "Z");
		let r = Date.parse(e);
		if (E(r)) return r + (!t || n ? this.getTimezoneOffset(r) : 0);
	}
	getTimezoneOffset(e) {
		if (this.timezone !== "UTC") {
			let [t, n, r, i, a = 0] = this.dateTimeFormat({ timeZoneName: "shortOffset" }, e, "en").split(/(GMT|:)/).map(Number), o = -(r + a / 60) * 60 * 6e4;
			if (E(o)) return o;
		}
		return 0;
	}
	dateFormat(e, n, r) {
		let i = this.lang;
		if (!p(n) || isNaN(n)) return i?.invalidDate || "";
		if (e ??= "%Y-%m-%d %H:%M:%S", D(e)) {
			let t = /%\[([a-zA-Z]+)\]/g, r;
			for (; r = t.exec(e);) e = e.replace(r[0], this.dateTimeFormat(r[1], n, i?.locale));
		}
		if (D(e) && e.indexOf("%") !== -1) {
			let r = this, [a, o, s, c, l, u, d, f] = this.toParts(n), p = i?.weekdays || this.weekdays, m = i?.shortWeekdays || this.shortWeekdays, h = i?.months || this.months, g = i?.shortMonths || this.shortMonths;
			M(v({
				a: m ? m[f] : p[f].substr(0, 3),
				A: p[f],
				d: N(s),
				e: N(s, 2, " "),
				w: f,
				v: i?.weekFrom ?? "",
				b: g[o],
				B: h[o],
				m: N(o + 1),
				o: o + 1,
				y: a.toString().substr(2, 2),
				Y: a,
				H: N(c),
				k: c,
				I: N(c % 12 || 12),
				l: c % 12 || 12,
				M: N(l),
				p: c < 12 ? "AM" : "PM",
				P: c < 12 ? "am" : "pm",
				S: N(u),
				L: N(d, 3)
			}, t.dateFormats), function(t, i) {
				if (D(e)) for (; e.indexOf("%" + i) !== -1;) e = e.replace("%" + i, typeof t == "function" ? t.call(r, n, r) : t);
			});
		} else if (A(e)) {
			let t = (this.getTimezoneOffset(n) || 0) / (6e4 * 60), r = this.timezone || "Etc/GMT" + (t >= 0 ? "+" : "") + t, { prefix: i = "", suffix: a = "" } = e;
			e = i + this.dateTimeFormat(v({ timeZone: r }, e), n) + a;
		}
		return r ? de(e) : e;
	}
	resolveDTLFormat(e) {
		return A(e, !0) ? A(e, !0) && ke(e) ? { main: e } : e : (e = L(e), {
			main: e[0],
			from: e[1],
			to: e[2]
		});
	}
	getDateFormat(e, t, n, r) {
		let i = this.dateFormat("%m-%d %H:%M:%S.%L", t), a = "01-01 00:00:00.000", o = {
			millisecond: 15,
			second: 12,
			minute: 9,
			hour: 6,
			day: 3
		}, s = "millisecond", c = s;
		for (s in G) {
			if (e && e === G.week && +this.dateFormat("%w", t) === n && i.substr(6) === a.substr(6)) {
				s = "week";
				break;
			}
			if (e && G[s] > e) {
				s = c;
				break;
			}
			if (o[s] && i.substr(o[s]) !== a.substr(o[s])) break;
			s !== "week" && (c = s);
		}
		return this.resolveDTLFormat(r[s]).main;
	}
}, je = class extends Ae {
	getBoundaryTicks(e, t, n, r) {
		let i = {};
		if (t === G.year) return i;
		let a = p(n) && p(r), o = t < G.hour, s = t < G.day, c = t < G.month, l = t >= G.hour ? 9e5 : t >= G.minute ? 6e4 : t >= G.second && 1e3;
		if (e.length < 1e4) {
			let u = !0;
			for (let d = 0; d < e.length; d++) {
				let f = e[d];
				if (a) {
					if (f < n) continue;
					if (f > r) break;
				}
				if (u) {
					if (t === G.month) {
						i[f] = "year", u = !1;
						continue;
					}
					if (t === G.hour) {
						i[f] = "day", u = !1;
						continue;
					}
				}
				if (l && f % l !== 0) {
					u = !1;
					continue;
				}
				let [, p, m, h, g, _, v] = this.toParts(f), y = !h && !g && !_ && !v;
				o && g === 0 && (i[f] = "hour"), s && y && (i[f] = "day"), c && m === 1 && y && (i[f] = "month"), p === 0 && m === 1 && y && (i[f] = "year"), u = !1;
			}
		}
		return i;
	}
	getTimeTicks(e, t, n, r) {
		let i = this, a = [], { count: o = 1, unitRange: s } = e, c = t, l = n, [u, d, f, m, h, g] = i.toParts(t), _ = (t || 0) % 1e3, y;
		if (r ??= 1, p(t)) {
			if (_ = s >= G.second ? 0 : o * Math.floor(_ / o), s >= G.second && (g = s >= G.minute ? 0 : o * Math.floor(g / o)), s >= G.minute && (h = s >= G.hour ? 0 : o * Math.floor(h / o)), s >= G.hour && (m = s >= G.day ? 0 : o * Math.floor(m / o)), s >= G.day && (f = s >= G.month ? 1 : Math.max(1, o * Math.floor(f / o))), s >= G.month && (d = s >= G.year ? 0 : o * Math.floor(d / o)), s >= G.year && (u -= u % o), s === G.week) {
				o && (t = i.makeTime(u, d, f, m, h, g, _));
				let e = this.dateTimeFormat({
					timeZone: this.timezone,
					weekday: "narrow"
				}, t, "es"), n = "DLMXJVS".indexOf(e);
				f += -n + r + (n < r ? -7 : 0);
			}
			t = i.makeTime(u, d, f, m, h, g, _), i.variableTimezone && p(n) && (y = n - t > 4 * G.month || i.getTimezoneOffset(t) !== i.getTimezoneOffset(n));
			let e = t, c = 1;
			for (; e < n;) a.push(e), s === G.year ? e = i.makeTime(u + c * o, 0) : s === G.month ? e = i.makeTime(u, d + c * o) : y && (s === G.day || s === G.week) ? e = i.makeTime(u, d, f + c * o * (s === G.day ? 1 : 7)) : y && s === G.hour && o > 1 ? e = i.makeTime(u, d, f, m + c * o) : e += s * o, c++;
			a.push(e);
		}
		return a.info = v(e, {
			boundaryTicks: this.getBoundaryTicks(a, s, c, l),
			totalRange: s * o
		}), a;
	}
}, { isTouchDevice: Me } = t, J = {
	palette: Se,
	colors: Array(10).fill(1).map((e, t) => `var(--highcharts-color-${t})`),
	symbols: [
		"circle",
		"diamond",
		"square",
		"triangle",
		"triangle-down"
	],
	lang: {
		weekFrom: "week from",
		chartTitle: "Chart title",
		locale: void 0,
		loading: "Loading...",
		months: void 0,
		seriesName: "Series {add index 1}",
		shortMonths: void 0,
		weekdays: void 0,
		numericSymbols: [
			"k",
			"M",
			"G",
			"T",
			"P",
			"E"
		],
		pieSliceName: "Slice",
		resetZoom: "Reset zoom",
		yAxisTitle: "Values",
		resetZoomTitle: "Reset zoom level 1:1"
	},
	global: { buttonTheme: {
		fill: "var(--highcharts-neutral-color-3)",
		padding: 8,
		r: 2,
		stroke: "var(--highcharts-neutral-color-20)",
		"stroke-width": 1,
		style: {
			color: "var(--highcharts-neutral-color-80)",
			cursor: "pointer",
			fontSize: "0.8em",
			fontWeight: "normal"
		},
		states: {
			hover: { fill: "var(--highcharts-neutral-color-10)" },
			select: {
				fill: "var(--highcharts-highlight-color-10)",
				style: {
					color: "var(--highcharts-neutral-color-100)",
					fontWeight: "bold"
				}
			},
			disabled: { style: { color: "var(--highcharts-neutral-color-20)" } }
		}
	} },
	time: {
		Date: void 0,
		timezone: "UTC",
		timezoneOffset: 0,
		useUTC: void 0
	},
	chart: xe,
	title: {
		style: {
			color: "var(--highcharts-neutral-color-80)",
			fontWeight: "bold"
		},
		text: "Chart title",
		margin: 15,
		minScale: .67
	},
	subtitle: {
		style: {
			color: "var(--highcharts-neutral-color-60)",
			fontSize: "0.8em"
		},
		text: ""
	},
	caption: {
		margin: 15,
		style: {
			color: "var(--highcharts-neutral-color-60)",
			fontSize: "0.8em"
		},
		text: "",
		align: "left",
		verticalAlign: "bottom"
	},
	plotOptions: {},
	legend: {
		enabled: !0,
		align: "center",
		alignColumns: !0,
		className: "highcharts-no-tooltip",
		events: {},
		layout: "horizontal",
		itemMarginBottom: 2,
		itemMarginTop: 2,
		labelFormatter: function() {
			return this.name;
		},
		borderColor: "var(--highcharts-neutral-color-40)",
		borderRadius: 0,
		navigation: {
			style: { fontSize: "0.8em" },
			activeColor: "var(--highcharts-highlight-color-100)",
			inactiveColor: "var(--highcharts-neutral-color-20)"
		},
		itemStyle: {
			color: "var(--highcharts-neutral-color-80)",
			cursor: "pointer",
			fontSize: "0.8em",
			textDecoration: "none",
			textOverflow: "ellipsis"
		},
		itemHoverStyle: { color: "var(--highcharts-neutral-color-100)" },
		itemHiddenStyle: {
			color: "var(--highcharts-neutral-color-60)",
			textDecoration: "line-through"
		},
		shadow: !1,
		itemCheckboxStyle: {
			position: "absolute",
			width: "13px",
			height: "13px"
		},
		squareSymbol: !0,
		symbolPadding: 5,
		verticalAlign: "bottom",
		x: 0,
		y: 0,
		title: { style: {
			color: "var(--highcharts-neutral-color-80)",
			fontSize: "0.8em",
			fontWeight: "bold"
		} }
	},
	loading: {
		labelStyle: {
			fontWeight: "bold",
			position: "relative",
			top: "45%"
		},
		style: {
			position: "absolute",
			backgroundColor: "var(--highcharts-background-color)",
			opacity: .5,
			textAlign: "center"
		}
	},
	tooltip: {
		enabled: !0,
		animation: {
			duration: 300,
			easing: (e) => Math.sqrt(1 - (e - 1) ** 2)
		},
		borderColor: "light-dark(var(--highcharts-neutral-color-5), var(--highcharts-neutral-color-20))",
		borderRadius: 5,
		dateTimeLabelFormats: {
			millisecond: "%[AebHMSL]",
			second: "%[AebHMS]",
			minute: "%[AebHM]",
			hour: "%[AebHM]",
			day: "%[AebY]",
			week: "%v %[AebY]",
			month: "%[BY]",
			year: "%[Y]"
		},
		footerFormat: "",
		header: {
			distance: 5,
			shape: "callout",
			style: { fontSize: "1em" }
		},
		hideDelay: 500,
		showDelay: 0,
		padding: 8,
		position: {
			x: 0,
			y: 3
		},
		shared: !1,
		snap: Me ? 25 : 10,
		headerFormat: "<span style=\"font-size: 0.8em\">{ucfirst point.key}</span><br/>",
		pointFormat: "<span style=\"color:{point.color}\">●</span> {series.name}: <b>{point.y}</b><br/>",
		backgroundColor: "var(--highcharts-background-color)",
		borderWidth: void 0,
		stickOnContact: !1,
		style: {
			color: "var(--highcharts-neutral-color-80)",
			cursor: "default",
			fontSize: "0.8em"
		},
		useHTML: !1
	},
	credits: {
		enabled: !0,
		href: "https://www.highcharts.com?credits",
		position: {
			align: "right",
			verticalAlign: "bottom",
			x: -10,
			y: -5
		},
		style: {
			cursor: "pointer",
			color: "var(--highcharts-neutral-color-40)",
			fontSize: "0.6em"
		},
		text: "Highcharts.com"
	}
}, Ne = new je(J.time, J.lang);
function Pe() {
	return J;
}
function Fe(e) {
	return b(t, "setOptions", { options: e }), j(!0, J, e), e.time && Ne.update(J.time), e.lang && "locale" in e.lang && Ne.update({ locale: e.lang.locale }), e.lang?.chartTitle && (J.title = {
		...J.title,
		text: e.lang.chartTitle
	}), J;
}
var Y = {
	defaultOptions: J,
	defaultTime: Ne,
	getOptions: Pe,
	setOptions: Fe
}, { defaultOptions: Ie, defaultTime: Le } = Y, { pageLang: Re } = t, X = {
	add: (e, t) => e + t,
	divide: (e, t) => t === 0 ? "" : l(e / t),
	eq: (e, t) => e == t,
	each: function(e) {
		let t = arguments[arguments.length - 1];
		return O(e) ? e.map((n, r) => Z(t.body, v(A(n) ? n : { "@this": n }, {
			"@index": r,
			"@first": r === 0,
			"@last": r === e.length - 1
		}))).join("") : !1;
	},
	ge: (e, t) => e >= t,
	gt: (e, t) => e > t,
	if: (e) => !!e,
	le: (e, t) => e <= t,
	lt: (e, t) => e < t,
	multiply: (e, t) => l(e * t, 15),
	ne: (e, t) => e != t,
	subtract: (e, t) => e - t,
	ucfirst: de,
	unless: (e) => !e
}, ze = {}, Be = (e) => /^["'].+["']$/.test(e);
function Ve(e, t, n) {
	return Le.dateFormat(e, t, n);
}
function Z(e = "", t, n) {
	let r = /\{([^{}]+)\}/g, i = /\(([^()]+)\)/g, a = [], o = /f$/, s = /\.(\d)/, c = n?.options?.lang || Ie.lang, l = n?.time || Le, u = n?.numberFormatter || He.bind(n), d = (e = "") => {
		let n;
		return e === "true" ? !0 : e === "false" ? !1 : (n = Number(e)).toString() === e ? n : Be(e) ? e.slice(1, -1) : w(e, t);
	}, f, p, m = 0, h;
	for (; (f = r.exec(e)) !== null;) {
		let n = f, r = i.exec(f[1]);
		r && (f = r, h = !0), p?.isBlock || (p = {
			ctx: t,
			expression: f[1],
			find: f[0],
			isBlock: f[1].charAt(0) === "#",
			start: f.index,
			startInner: f.index + f[0].length,
			length: f[0].length
		});
		let o = (p.isBlock ? n : f)[1].split(" ")[0].replace("#", "");
		X[o] && (p.isBlock && o === p.fn && m++, p.fn ||= o);
		let s = f[1] === "else";
		if (p.isBlock && p.fn && (f[1] === `/${p.fn}` || s)) if (m) s || m--;
		else {
			let t = p.startInner, n = e.substr(t, f.index - t);
			p.body === void 0 ? (p.body = n, p.startInner = f.index + f[0].length) : p.elseBody = n, p.find += n + f[0], s || (a.push(p), p = void 0);
		}
		else p.isBlock || a.push(p);
		if (r && !p?.isBlock) break;
	}
	return a.forEach((r) => {
		let { body: a, elseBody: f, expression: p, fn: m } = r, h, g;
		if (m) {
			let e = [r], i = [], o = p.length, s = 0, c;
			for (g = 0; g <= o; g++) {
				let e = p.charAt(g);
				!c && (e === "\"" || e === "'") ? c = e : c === e && (c = ""), !c && (e === " " || g === o) && (i.push(p.substr(s, g - s)), s = g + 1);
			}
			for (g = X[m].length; g--;) e.unshift(d(i[g + 1]));
			h = X[m].apply(t, e), r.isBlock && typeof h == "boolean" && (h = Z(h ? a : f, t, n));
		} else {
			let e = Be(p) ? [p] : p.split(":");
			if (h = d(e.shift() || ""), e.length && typeof h == "number") {
				let t = e.join(":");
				if (o.test(t)) {
					let e = parseInt((t.match(s) || ["", "-1"])[1], 10);
					h !== null && (h = u(h, e, c.decimalPoint, t.indexOf(",") > -1 ? c.thousandsSep : ""));
				} else h = l.dateFormat(t, h);
			}
			i.lastIndex = 0, i.test(r.find) && D(h) && (h = `"${h}"`);
		}
		e = e.replace(r.find, P(h, ""));
	}), h ? Z(e, t, n) : e;
}
function He(e, t, n, r) {
	e = +e || 0, t = +t;
	let i, a, [o, s] = e.toString().split("e").map(Number), c = this?.options?.lang || Ie.lang, l = (e.toString().split(".")[1] || "").split("e")[0].length, u = t, d = {};
	n ??= c.decimalPoint, r ??= c.thousandsSep, t === -1 ? t = Math.min(l, 20) : E(t) ? t && s < 0 && (a = t + s, a >= 0 ? (o = +o.toExponential(a).split("e")[0], t = a) : (o = Math.floor(o), e = t < 20 ? +(o * 10 ** s).toFixed(t) : 0, s = 0)) : t = 2, s && (t ??= 2, e = o), E(t) && t >= 0 && (d.minimumFractionDigits = t, d.maximumFractionDigits = t), r === "" && (d.useGrouping = !1);
	let f = r || n, p = f ? "en" : this?.locale || c.locale || Re, m = JSON.stringify(d) + p;
	return i = (ze[m] ?? (ze[m] = new Intl.NumberFormat(p, d))).format(e), f && (i = i.replace(/([,\.])/g, "_$1").replace(/_\,/g, r ?? ",").replace("_.", n ?? ".")), (!t && +i == 0 || s < 0 && !u) && (i = "0"), s && +i != 0 && (i += "e" + (s < 0 ? "" : "+") + s), i;
}
var Ue = {
	dateFormat: Ve,
	format: Z,
	helpers: X,
	numberFormat: He
}, { SVG_NS: We, win: Ge } = t, { trustedTypes: Ke } = Ge, Q = Ke && k(Ke.createPolicy) && Ke.createPolicy("highcharts", { createHTML: (e) => e }), qe = Q ? Q.createHTML("") : "", $ = class e {
	static filterUserAttributes(t) {
		return M(t, (n, r) => {
			let i = !0;
			e.allowedAttributes.indexOf(r) === -1 && (i = !1), [
				"background",
				"dynsrc",
				"href",
				"lowsrc",
				"src"
			].indexOf(r) !== -1 && (i = D(n) && e.allowedReferences.some((e) => n.indexOf(e) === 0)), i || (W(33, !1, void 0, { "Invalid attribute in config": `${r}` }), delete t[r]), D(n) && t[r] && (t[r] = n.replace(/</g, "&lt;"));
		}), t;
	}
	static parseStyle(e) {
		return e.split(";").reduce((e, t) => {
			let n = t.split(":").map((e) => e.trim()), r = n.shift();
			return r && n.length && (e[r.replace(/-([a-z])/g, (e) => e[1].toUpperCase())] = n.join(":")), e;
		}, {});
	}
	static setElementHTML(t, n) {
		t.innerHTML = e.emptyHTML, n && new e(n).addToDOM(t);
	}
	constructor(e) {
		this.nodes = typeof e == "string" ? this.parseMarkup(e) : e;
	}
	addToDOM(n) {
		function r(n, i) {
			let a;
			return L(n).forEach(function(n) {
				let o = n.tagName, c = n.textContent ? t.doc.createTextNode(n.textContent) : void 0, l = e.bypassHTMLFiltering, u;
				if (o) if (o === "#text") u = c;
				else if (e.allowedTags.indexOf(o) !== -1 || l) {
					let a = o === "svg" ? We : i.namespaceURI || We, d = t.doc.createElementNS(a, o), p = n.attributes || {};
					M(n, function(e, t) {
						t !== "tagName" && t !== "attributes" && t !== "children" && t !== "style" && t !== "textContent" && (p[t] = e);
					}), s(d, l ? p : e.filterUserAttributes(p)), n.style && f(d, n.style), c && d.appendChild(c), r(n.children || [], d), u = d;
				} else W(33, !1, void 0, { "Invalid tagName in config": o });
				u && i.appendChild(u), a = u;
			}), a;
		}
		return r(this.nodes, n);
	}
	parseMarkup(t) {
		let n = [];
		t = t.trim().replace(/ style=(["'])/g, " data-style=$1");
		let r;
		try {
			r = new DOMParser().parseFromString(Q ? Q.createHTML(t) : t, "text/html");
		} catch {}
		if (!r) {
			let e = u("div");
			e.innerHTML = t, r = { body: e };
		}
		let i = (t, n) => {
			let r = t.nodeName.toLowerCase(), a = { tagName: r };
			r === "#text" && (a.textContent = t.textContent || "");
			let o = t.attributes;
			if (o) {
				let t = {};
				[].forEach.call(o, (n) => {
					n.name === "data-style" ? a.style = e.parseStyle(n.value) : t[n.name] = n.value;
				}), a.attributes = t;
			}
			if (t.childNodes.length) {
				let e = [];
				[].forEach.call(t.childNodes, (t) => {
					i(t, e);
				}), e.length && (a.children = e);
			}
			n.push(a);
		};
		return [].forEach.call(r.body.childNodes, (e) => i(e, n)), n;
	}
};
$.allowedAttributes = /* @__PURE__ */ "alt.aria-controls.aria-describedby.aria-expanded.aria-haspopup.aria-hidden.aria-label.aria-labelledby.aria-live.aria-pressed.aria-readonly.aria-roledescription.aria-selected.aria-sort.class.clip-path.color.colspan.cx.cy.d.disabled.dx.dy.fill.filterUnits.flood-color.flood-opacity.height.href.id.in.in2.markerHeight.markerWidth.offset.opacity.operator.orient.padding.paddingLeft.paddingRight.patternUnits.r.radius.refX.refY.result.role.rowspan.scope.slope.src.startOffset.stdDeviation.stroke-linecap.stroke-width.stroke.style.summary.tabindex.tableValues.target.text-align.text-anchor.textAnchor.textLength.title.type.valign.width.x.x1.x2.xlink:href.y.y1.y2.zIndex".split("."), $.allowedReferences = [
	"https://",
	"http://",
	"mailto:",
	"/",
	"../",
	"./",
	"#"
], $.allowedTags = /* @__PURE__ */ "#text.a.abbr.b.br.button.caption.circle.clipPath.code.dd.defs.div.dl.dt.em.feComponentTransfer.feComposite.feDropShadow.feFlood.feFuncA.feFuncB.feFuncG.feFuncR.feGaussianBlur.feMerge.feMergeNode.feMorphology.feOffset.filter.h1.h2.h3.h4.h5.h6.hr.i.img.li.linearGradient.marker.ol.p.path.pattern.pre.rect.small.span.stop.strong.style.sub.sup.svg.table.tbody.td.text.textPath.th.thead.title.tr.tspan.u.ul".split("."), $.emptyHTML = qe, $.bypassHTMLFiltering = !1;
//#endregion
//#region node_modules/highcharts/es-modules/Core/Series/Point.js
var { animObject: Je } = be, { defaultOptions: Ye } = Y, { format: Xe } = Ue, Ze = class e {
	constructor(e, t, n) {
		this.formatPrefix = "point", this.visible = !0, this.point = this, this.series = e, this.applyOptions(t, n), this.id ??= Te(), this.resolveColor(), this.dataLabelOnNull ??= e.options.nullInteraction, e.chart.pointCount++, this.category = e.xAxis?.categories?.[this.x] ?? this.x, this.key = this.name ?? this.category, b(this, "afterInit");
	}
	applyOptions(t, n, r) {
		let i = this, a = i.series, o = a.options.pointValKey || a.pointValKey;
		return t = e.prototype.optionsToObject.call(this, t), v(i, t), i.options ? i.options = a.chart.options.chart.allowMutatingData ? v(i.options, t) : j(i.options, t) : i.options = t, o && (i.y = e.prototype.getNestedProperty.call(i, o)), E(n) && (i.x = n), r || (i.selected && (i.state = "select"), t.group && delete i.group, t.dataLabels && delete i.dataLabels, i.isNull = i.isValid && !i.isValid(), i.formatPrefix = i.isNull ? "null" : "point"), i;
	}
	getOrigin({ x: e = 0, y: t = 0 }, n = {}) {
		let { graphic: r, series: i } = this;
		if (i.chart.inverted && r?.parentGroup && !r?.parentGroup?.rotation) {
			let n = this.pos(!1, e, t);
			n && (e = n[0], t = n[1]);
		}
		e -= (n.width || 0) / 2, t -= (n.height || 0) / 2;
		let a = { x: e };
		return !i.is("column") && !this.plotHigh && (a.y = t), a;
	}
	destroy() {
		if (!this.condemned) {
			let e = this, t = e.series, n = t.chart, r = n.hoverPoints, i = e.series.chart.renderer.globalAnimation, { duration: a } = Je(i), o = () => {
				(e.graphic || e.graphics || e.dataLabel || e.dataLabels) && (I(e), e.destroyElements());
				for (let t in e) delete e[t];
			};
			e.legendItem && n.legend.destroyItem(e), r && (e.setState(), _(r, e), r.length || (n.hoverPoints = void 0)), e === n.hoverPoint && e.onMouseOut(), a && t.condemnedPoints ? (t.condemnedPoints.push(this), this.graphic?.addClass("highcharts-point-condemned"), setTimeout(o, a)) : o(), n.pointCount--;
		}
		this.condemned = !0;
	}
	destroyElements(e = {
		graphic: 1,
		dataLabel: 1
	}) {
		let t = this, n = [], r, i;
		for (e.graphic && n.push("graphic", "connector"), e.dataLabel && n.push("dataLabel", "dataLabelPath", "dataLabelUpper"), i = n.length; i--;) r = n[i], t[r] && (t[r] = t[r].destroy());
		["graphic", "dataLabel"].forEach((n) => {
			let r = `${n}s`;
			e[n] && t[r] && (t[r].forEach((e) => {
				e?.element && e.destroy();
			}), delete t[r]);
		});
	}
	firePointEvent(e, t, n) {
		let r = this, i = this.series.options;
		r.manageEvent(e), e === "click" && i.allowPointSelect && (n = function(e) {
			!r.condemned && r.select && r.select(null, e.ctrlKey || e.metaKey || e.shiftKey);
		}), b(r, e, t, n);
	}
	getClassName() {
		let e = this;
		return "highcharts-point" + (e.selected ? " highcharts-point-select" : "") + (e.negative && e.series.options.negativeColor !== !1 ? " highcharts-negative" : "") + (e.isNull ? " highcharts-null-point" : "") + (e.colorIndex === void 0 ? "" : " highcharts-color-" + e.colorIndex) + (e.options.className ? " " + e.options.className : "") + (e.zone?.className ? " " + e.zone.className.replace("highcharts-negative", "") : "");
	}
	getNestedProperty(e) {
		if (e) return e.indexOf("custom.") === 0 ? w(e, this.options) : this[e];
	}
	getZone() {
		let e = this.series, t = e.zones, n = e.zoneAxis || "y", r, i = 0;
		for (r = t[i]; this[n] >= r.value;) r = t[++i];
		return this.nonZonedColor ||= this.color, r?.color && !this.options.color ? this.color = r.color : this.color = this.nonZonedColor, r;
	}
	hasNewShapeType() {
		let e = this;
		return (e.graphic && (e.graphic.symbolName || e.graphic.element.nodeName)) !== this.shapeType;
	}
	isValid() {
		return (E(this.x) || this.x instanceof Date) && E(this.y);
	}
	optionsToObject(t) {
		let n = this.series, r = n.options.keys, i = r || n.pointArrayMap || ["y"], a = i.length, o = {}, s, c = 0, l = 0;
		if (E(t) || t === null) o[i[0]] = t;
		else if (O(t)) for (!r && t.length > a && (s = typeof t[0], s === "string" ? n.xAxis?.dateTime ? o.x = n.chart.time.parse(t[0]) : o[n.tupleKey || "name"] = t[0] : s === "number" && (o.x = t[0]), c++); l < a;) (!r || t[c] !== void 0) && (o[i[l]] = t[c]), c++, l++;
		else typeof t == "object" && (o = t, t.dataLabels && (n.hasDataLabels = () => !0), t.marker && (n._hasPointMarkers = !0));
		return (r || !n.options.data) && Object.keys(o).forEach((t) => {
			t.indexOf(".") > 0 && (e.prototype.setNestedProperty(o, o[t], t), delete o[t]);
		}), o;
	}
	pos(e, t = this.plotX, n = this.plotY) {
		let { series: r } = this, { chart: i, xAxis: a, yAxis: o } = r || {}, s = 0, c = 0;
		if (i && E(t) && E(n)) return e && (s = a ? a.pos : i.plotLeft, c = o ? o.pos : i.plotTop), i.inverted && a && o ? [o.len - n + c, a.len - t + s] : [t + s, n + c];
	}
	resolveColor() {
		let { options: e, series: t } = this, n = t.chart, r = n.options.chart, i = n.styledMode, a, o = r.colorCount, s;
		if (delete this.nonZonedColor, t.options.colorByPoint) {
			if (!i) {
				let e = t.options.colors || n.options.colors;
				a = e?.[t.colorCounter], o = e?.length;
			}
			s = t.colorCounter, t.colorCounter++, t.colorCounter === o && (t.colorCounter = 0);
		} else i || (a = t.color), s = t.colorIndex;
		this.colorIndex = e.colorIndex ?? s, this.color = e.color ?? a;
	}
	setNestedProperty(e, t, n) {
		return n.split(".").reduce(function(e, n, r, i) {
			return e[n] = i.length - 1 === r ? t : A(e[n], !0) ? e[n] : {}, e[n];
		}, e), e;
	}
	shouldDraw() {
		return !this.isNull;
	}
	tooltipFormatter(e) {
		let { chart: t, pointArrayMap: n = ["y"], tooltipOptions: r } = this.series, { valueDecimals: i = "", valuePrefix: a = "", valueSuffix: o = "" } = r;
		return t.styledMode && (e = t.tooltip?.styledModeFormat(e) || e), n.forEach((t) => {
			t = "{point." + t, (a || o) && (e = e.replace(RegExp(t + "}", "g"), a + t + "}" + o)), e = e.replace(RegExp(t + "}", "g"), t + ":,." + i + "f}");
		}), Xe(e, this, t);
	}
	update(e, t = !0, n, r) {
		let i = this, a = i.series, o = i.graphic, s = a.chart, c = a.options, l = c.data;
		function u() {
			i.applyOptions(e);
			let r = o && i.hasMockGraphic, u = i.index, d = i.y === null ? !r : r;
			o && d && (i.graphic = o.destroy(), delete i.hasMockGraphic), A(e, !0) && (o?.element && e?.marker && e.marker.symbol !== void 0 && (i.graphic = o.destroy()), e?.dataLabels && i.dataLabel && (i.dataLabel = i.dataLabel.destroy()));
			let f = i.optionsToObject(e);
			a.hasProcessedDataTable || (a.dataTable.setRow(f, u), l && (l[u] = A(l[u], !0) || A(e, !0) ? i.options : e ?? l[u])), a.isDirty = a.isDirtyData = !0, "x" in f && (D(f.x) && (a.xColumnIsNumbers = void 0), i.x = a.getX(f.x), i.isNull = i.isValid && !i.isValid(), a.xColumn && (a.xColumn[u] = i.x)), !a.fixedBox && a.hasCartesianSeries && (s.isDirtyBox = !0), c.legendType === "point" && (s.isDirtyLegend = !0), t && s.redraw(n);
		}
		r === !1 ? u() : i.firePointEvent("update", { options: e }, u);
	}
	remove(e, t) {
		this.series.removePoint(this.series.data.indexOf(this), e, t);
	}
	select(e, t) {
		let n = this, r = n.series, i = r.chart;
		e = P(e, !n.selected), this.selectedStaging = e, n.firePointEvent(e ? "select" : "unselect", { accumulate: t }, function() {
			n.selected = n.options.selected = e, r.options.data && (r.options.data[r.data.indexOf(n)] = n.options), n.setState(e && "select"), t || i.getSelectedPoints().forEach(function(e) {
				let t = e.series, r = t.options;
				e.selected && e !== n && (e.selected = e.options.selected = !1, r.data && (r.data[t.data.indexOf(e)] = e.options), e.setState(i.hoverPoints && r.inactiveOtherPoints ? "inactive" : ""), e.firePointEvent("unselect"));
			});
		}), delete this.selectedStaging;
	}
	onMouseOver(e) {
		let t = this, { inverted: n, pointer: r } = t.series.chart;
		r && (e = e ? r.normalize(e) : r.getChartCoordinatesFromPoint(t, n), r.runPointActions(e, t));
	}
	onMouseOut() {
		let e = this;
		if (!e.series) return;
		let t = e.series.chart;
		e.firePointEvent("mouseOut"), e.series.options.inactiveOtherPoints || (t.hoverPoints || []).forEach(function(e) {
			e.setState();
		}), t.hoverPoints = t.hoverPoint = null;
	}
	manageEvent(e) {
		let t = this, n = j(t.series.options.point, t.options).events?.[e];
		k(n) && (!t.hcEvents?.[e] || t.hcEvents?.[e]?.map((e) => e.fn).indexOf(n) === -1) ? (t.importedUserEvent?.(), t.importedUserEvent = i(t, e, n), t.hcEvents && (t.hcEvents[e].userEvent = !0)) : t.importedUserEvent && !n && t.hcEvents?.[e] && t.hcEvents?.[e].userEvent && (I(t, e), delete t.hcEvents[e], Object.keys(t.hcEvents) || delete t.importedUserEvent);
	}
	setState(e, t) {
		let n = this, r = n.series, i = n.state, a = r.options.states[e || "normal"] || {}, o = Ye.plotOptions[r.type].marker && r.options.marker, s = o && o.enabled === !1, c = o?.states?.[e || "normal"] || {}, l = c.enabled === !1, u = n.marker || {}, d = r.chart, f = o && r.markerAttribs, p = r.halo, m, h, g, _ = r.stateMarkerGraphic, y;
		if (e ||= "", e === n.state && !t || n.selected && e !== "select" || a.enabled === !1 || e && (l || s && c.enabled === !1) || e && u.states && u.states[e] && u.states[e].enabled === !1) return;
		if (n.state = e, f && (m = r.markerAttribs(n, e)), n.graphic && !n.hasMockGraphic) {
			if (i && n.graphic.removeClass("highcharts-point-" + i), e && n.graphic.addClass("highcharts-point-" + e), !d.styledMode) {
				h = r.pointAttribs(n, e), g = P(d.options.chart.animation, a.animation);
				let t = h.opacity;
				r.options.inactiveOtherPoints && E(t) && (n.dataLabels || []).forEach(function(e) {
					e && !e.hasClass("highcharts-data-label-hidden") && (e.animate({ opacity: t }, g), e.connector && e.connector.animate({ opacity: t }, g));
				}), n.graphic.animate(h, g);
			}
			m && n.graphic.animate(m, P(d.options.chart.animation, c.animation, o.animation)), _ && _.hide();
		} else e && c && (y = u.symbol || r.symbol, _ && _.currentSymbol !== y && (_ = _.destroy()), m && (_ ? _[t ? "animate" : "attr"]({
			x: m.x,
			y: m.y
		}) : y && (r.stateMarkerGraphic = _ = d.renderer.symbol(y, m.x, m.y, m.width, m.height, j(o, c)).add(r.markerGroup), _.currentSymbol = y)), !d.styledMode && _ && n.state !== "inactive" && _.attr(r.pointAttribs(n, e))), _ && (_[e && n.isInside ? "show" : "hide"](), _.element.point = n, _.addClass(n.getClassName(), !0));
		let x = a.halo, S = n.graphic || _, C = S?.visibility || "inherit";
		x?.size && S && C !== "hidden" && !n.isCluster ? (p || (r.halo = p = d.renderer.path().add(S.parentGroup)), p.show()[t ? "animate" : "attr"]({ d: n.haloPath(x.size) }), p.attr({
			class: "highcharts-halo highcharts-color-" + P(n.colorIndex, r.colorIndex) + (n.className ? " " + n.className : ""),
			visibility: C,
			zIndex: -1
		}), p.point = n, d.styledMode || p.attr(v({
			fill: n.color || r.color,
			"fill-opacity": x.opacity
		}, $.filterUserAttributes(x.attributes || {})))) : p?.point?.haloPath && !p.point.destroyed && p.animate({ d: p.point.haloPath(0) }, null, p.hide), b(n, "afterSetState", { state: e });
	}
	haloPath(e) {
		let t = this.pos();
		return t ? this.series.chart.renderer.symbols.circle(d(t[0], 1) - e, t[1] - e, e * 2, e * 2) : [];
	}
}, { defaultOptions: Qe } = Y, $e;
(function(e) {
	e.seriesTypes = t.seriesTypes;
	function n(t, n) {
		let r = Qe.plotOptions || {}, i = n.defaultOptions, a = n.prototype;
		return a.type = t, a.pointClass ||= Ze, e.seriesTypes[t] ? !1 : (i && (r[t] = i), e.seriesTypes[t] = n, !0);
	}
	e.registerSeriesType = n;
	function r(r, i, a, o, s) {
		let c = Qe.plotOptions || {};
		if (i ||= "", c[r] = j(c[i], a), delete e.seriesTypes[r], n(r, y(e.seriesTypes[i] || t.Series, o)), e.seriesTypes[r].prototype.type = r, s) {
			class t extends Ze {}
			v(t.prototype, s), e.seriesTypes[r].prototype.pointClass = t;
		}
		return e.seriesTypes[r];
	}
	e.seriesType = r;
})($e ||= {});
var et = $e;
//#endregion
export { N as $, _ as A, te as B, u as C, m as D, p as E, x as F, E as G, re as H, S as I, j as J, A as K, C as L, y as M, ee as N, g as O, b as P, F as Q, w as R, l as S, f as T, ne as U, O as V, k as W, M as X, ie as Y, ae as Z, i as _, Y as a, L as at, s as b, we as c, de as ct, Ee as d, P as et, Se as f, B as g, V as h, Ue as i, ce as it, v as j, h as k, G as l, fe as lt, be as m, Ze as n, se as nt, je as o, le as ot, H as p, D as q, $ as r, I as rt, W as s, ue as st, et as t, oe as tt, Te as u, t as ut, o as v, d as w, c as x, a as y, T as z };

//# sourceMappingURL=SeriesRegistry-BGZZizI3.js.map