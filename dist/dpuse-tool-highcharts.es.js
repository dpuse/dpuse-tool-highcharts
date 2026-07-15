import { n as e, t } from "./rolldown-runtime-3b4jIN3o.js";
//#region node_modules/highcharts/highcharts.js
var n = /* @__PURE__ */ t(((e, t) => {
	(function(n, r) {
		typeof e == "object" && typeof t == "object" ? (n._Highcharts = r(), t.exports = n._Highcharts) : typeof define == "function" && define.amd ? define("highcharts/highcharts", [], r) : typeof e == "object" ? (n._Highcharts = r(), e.highcharts = n._Highcharts) : (n.Highcharts && n.Highcharts.error(16, !0), n.Highcharts = r());
	})("u" < typeof window ? e : window, () => (() => {
		let e, t, n, r, i;
		var a, o, s, c, l, u, d, f, p, m, h, g, _, v, y, b, x, S, C, w, T, E, D, O, k = {};
		k.d = (e, t) => {
			for (var n in t) k.o(t, n) && !k.o(e, n) && Object.defineProperty(e, n, {
				enumerable: !0,
				get: t[n]
			});
		}, k.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t);
		var A = {};
		k.d(A, { default: () => Wi }), (a = p ||= {}).SVG_NS = "http://www.w3.org/2000/svg", a.product = "Highcharts", a.version = "13.0.0", a.win = "u" > typeof window ? window : {}, a.doc = a.win.document, a.svg = !!a.doc?.createElementNS?.(a.SVG_NS, "svg")?.createSVGRect, a.pageLang = a.doc?.documentElement?.closest("[lang]")?.lang, a.userAgent = a.win.navigator?.userAgent || "", a.isChrome = a.win.chrome, a.isFirefox = a.userAgent.indexOf("Firefox") !== -1, a.isMS = /(edge|msie|trident)/i.test(a.userAgent) && !a.win.opera, a.isSafari = !a.isChrome && a.userAgent.indexOf("Safari") !== -1, a.isTouchDevice = /(Mobile|Android|Windows Phone)/.test(a.userAgent), a.isWebKit = a.userAgent.indexOf("AppleWebKit") !== -1, a.deg2rad = 2 * Math.PI / 360, a.marginNames = [
			"plotTop",
			"marginRight",
			"marginBottom",
			"plotLeft"
		], a.noop = function() {}, a.supportsPassiveEvents = function() {
			let e = !1;
			if (!a.isMS) {
				let t = Object.defineProperty({}, "passive", { get: function() {
					e = !0;
				} });
				a.win.addEventListener && a.win.removeEventListener && (a.win.addEventListener("testPassive", a.noop, t), a.win.removeEventListener("testPassive", a.noop, t));
			}
			return e;
		}(), a.charts = [], a.composed = [], a.dateFormats = {}, a.seriesTypes = {}, a.symbolSizes = {}, a.chartCount = 0;
		let j = p, ee = {
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
		}, { doc: te, win: ne } = j;
		function M(e, t, n, r = {}) {
			let i = typeof e == "function" && e.prototype || e;
			Object.hasOwnProperty.call(i, "hcEvents") || (i.hcEvents = {});
			let a = i.hcEvents;
			j.Point && e instanceof j.Point && e.series && e.series.chart && (e.series.chart.runTrackerClick = !0);
			let o = e.addEventListener;
			o && o.call(e, t, n, !!j.supportsPassiveEvents && {
				passive: r.passive === void 0 ? t.indexOf("touch") !== -1 : r.passive,
				capture: !1
			}), a[t] || (a[t] = []);
			let s = {
				fn: n,
				order: typeof r.order == "number" ? r.order : Infinity
			};
			return a[t].push(s), a[t].sort((e, t) => e.order - t.order), function() {
				De(e, t, n);
			};
		}
		function re(e) {
			let t = e.length, n = e[0];
			for (; t--;) e[t] < n && (n = e[t]);
			return n;
		}
		function N(e) {
			let t = e.length, n = e[0];
			for (; t--;) e[t] > n && (n = e[t]);
			return n;
		}
		function ie(e, t, n) {
			let r, i = H(t) && !L(n), a = (t, n) => {
				L(t) ? e.setAttribute(n, t) : i ? (r = e.getAttribute(n)) || n !== "class" || (r = e.getAttribute(n + "Name")) : e.removeAttribute(n);
			};
			return H(t) ? a(n, t) : K(t, a), r;
		}
		function P(e, t, n) {
			return e > t ? e < n ? e : n : t;
		}
		function F(e, t) {
			return e > 0x5af3107a4000 ? e : parseFloat(e.toPrecision(t || 14));
		}
		function ae(e, t, n, r, i) {
			let a = te.createElement(e);
			return t && z(a, t), i && I(a, {
				padding: "0",
				border: "none",
				margin: "0"
			}), n && I(a, n), r && r.appendChild(a), a;
		}
		function oe(e, t = 0, n) {
			let r = t % 2 / 2, i = n ? -1 : 1;
			return (Math.round(e * i - r) + r) * i;
		}
		function I(e, t) {
			z(e.style, t);
		}
		function L(e) {
			return e != null;
		}
		function R(e, t, n) {
			K(e, function(r, i) {
				r !== t && r?.destroy && r.destroy(), (r?.destroy || !n) && delete e[i];
			});
		}
		function se(e) {
			e?.parentElement?.removeChild(e);
		}
		function ce(e, t, n, r) {
			let i = {};
			return function e(t, i, a, o) {
				let s = n ? i : t;
				K(t, function(n, c) {
					if (!o && r && r.indexOf(c) > -1 && i[c]) {
						n = Oe(n), a[c] = [];
						for (let t = 0; t < Math.max(n.length, i[c].length); t++) i[c][t] && (n[t] === void 0 ? a[c][t] = i[c][t] : (a[c][t] = {}, e(n[t], i[c][t], a[c][t], o + 1)));
					} else W(n, !0) && !n.nodeType ? (a[c] = U(n) ? [] : {}, e(n, i[c] || {}, a[c], o + 1), Object.keys(a[c]).length === 0 && (c !== "colorAxis" || o !== 0) && delete a[c]) : (t[c] !== i[c] || c in t && !(c in i)) && c !== "__proto__" && c !== "constructor" && (a[c] = s[c]);
				});
			}(e, t, i, 0), i;
		}
		function le(e, t) {
			let n = e.length;
			for (; n--;) if (e[n] === t) {
				e.splice(n, 1);
				break;
			}
		}
		function z(e, t) {
			let n;
			for (n in e ||= {}, t) e[n] = t[n];
			return e;
		}
		function ue(e, t) {
			let n = function() {};
			return n.prototype = new e(), z(n.prototype, t), n;
		}
		function B(e, t, n, r) {
			if (n ||= {}, te?.createEvent && (e.dispatchEvent || e.fireEvent && e !== j)) {
				let r = te.createEvent("Events");
				r.initEvent(t, !0, !0), n = z(r, n), e.dispatchEvent ? e.dispatchEvent(n) : e.fireEvent(t, n);
			} else if (e.hcEvents) {
				n.target || z(n, {
					preventDefault: function() {
						n.defaultPrevented = !0;
					},
					target: e,
					type: t
				});
				let r = [], i = e, a = !1;
				for (; i.hcEvents;) Object.hasOwnProperty.call(i, "hcEvents") && i.hcEvents[t] && (r.length && (a = !0), r.unshift.apply(r, i.hcEvents[t])), i = Object.getPrototypeOf(i);
				a && r.sort((e, t) => e.order - t.order), r.forEach((t) => {
					!1 === t.fn.call(e, n, e) && n.preventDefault();
				});
			}
			r && !n.defaultPrevented && r.call(e, n);
		}
		let de = (e = "") => ({
			center: .5,
			right: 1,
			middle: .5,
			bottom: 1
		})[e] || 0;
		function fe(e, t) {
			let n, r, i, a = !t;
			return e.forEach((e) => {
				if (e.length > 1) for (i = e.length - 1; i > 0; i--) (r = e[i] - e[i - 1]) < 0 && !a ? (t?.(), t = void 0) : r && (n === void 0 || r < n) && (n = r);
			}), n;
		}
		function pe(e) {
			return 10 ** Math.floor(Math.log(e) / Math.LN10);
		}
		function me(e, t) {
			let n = e.split(".");
			for (; n.length && L(t);) {
				let e = n.shift();
				if (e === void 0 || e === "__proto__") return;
				if (e === "this") {
					let e;
					return W(t) && (e = t["@this"]), e ?? t;
				}
				let r = t[e.replace(/[\\'"]/g, "")];
				if (!L(r) || typeof r == "function" || typeof r.nodeType == "number" || r === ne) return;
				t = r;
			}
			return t;
		}
		function he(e, t, n) {
			let r;
			if (t === "width") {
				let t = Math.min(e.offsetWidth, e.scrollWidth), n = e.getBoundingClientRect?.().width;
				return n < t && n >= t - 1 && (t = Math.floor(n)), Math.max(0, t - (he(e, "padding-left", !0) || 0) - (he(e, "padding-right", !0) || 0));
			}
			if (t === "height") return Math.max(0, Math.min(e.offsetHeight, e.scrollHeight) - (he(e, "padding-top", !0) || 0) - (he(e, "padding-bottom", !0) || 0));
			let i = ne.getComputedStyle(e, void 0);
			return i && (r = i.getPropertyValue(t), q(n, t !== "opacity") && (r = J(r))), r;
		}
		let ge = Array.prototype.find ? function(e, t) {
			return e.find(t);
		} : function(e, t) {
			let n, r = e.length;
			for (n = 0; n < r; n++) if (t(e[n], n)) return e[n];
		};
		function _e(e) {
			L(e) && clearTimeout(e);
		}
		function ve(e) {
			return W(e) && typeof e.nodeType == "number";
		}
		function ye(e) {
			let t = e?.constructor;
			return !!(W(e, !0) && !ve(e) && t?.name && t.name !== "Object");
		}
		function V(e) {
			return typeof e == "number" && !isNaN(e) && e < Infinity && e > -Infinity;
		}
		function H(e) {
			return typeof e == "string";
		}
		function U(e) {
			let t = Object.prototype.toString.call(e);
			return t === "[object Array]" || t === "[object Array Iterator]";
		}
		function be(e) {
			return typeof e == "function";
		}
		function W(e, t) {
			return !!e && typeof e == "object" && (!t || !U(e));
		}
		function G(e, ...t) {
			let n, r = [e, ...t], i = {}, a = function(e, t) {
				return typeof e != "object" && (e = {}), K(t, function(n, r) {
					r !== "__proto__" && r !== "constructor" && (!W(n, !0) || ye(n) || ve(n) ? e[r] = t[r] : e[r] = a(e[r] || {}, n));
				}), e;
			};
			!0 === e && (i = r[1], r = Array.prototype.slice.call(r, 2));
			let o = r.length;
			for (n = 0; n < o; n++) i = a(i, r[n]);
			return i;
		}
		function xe(e, t, n, r, i) {
			let a, o = e;
			n = q(n, pe(e));
			let s = e / n;
			for (!t && (t = i ? [
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
			], !1 === r && (n === 1 ? t = t.filter(function(e) {
				return e % 1 == 0;
			}) : n <= .1 && (t = [1 / n]))), a = 0; a < t.length && (o = t[a], (!i || !(o * n >= e)) && (i || !(s <= (t[a] + (t[a + 1] || t[a])) / 2))); a++);
			return F(o * n, -Math.round(Math.log(.001) / Math.LN10));
		}
		function K(e, t, n) {
			for (let r in e) Object.hasOwnProperty.call(e, r) && t.call(n || e[r], e[r], r, e);
		}
		function Se(e) {
			let t = te.documentElement, n = e.parentElement || e.parentNode ? e.getBoundingClientRect() : {
				top: 0,
				left: 0,
				width: 0,
				height: 0
			};
			return {
				top: n.top + (ne.pageYOffset || t.scrollTop) - (t.clientTop || 0),
				left: n.left + (ne.pageXOffset || t.scrollLeft) - (t.clientLeft || 0),
				width: n.width,
				height: n.height
			};
		}
		function Ce(e, t, n) {
			return Array((t || 2) + 1 - String(e).replace("-", "").length).join(n || "0") + e;
		}
		function q() {
			let e = arguments, t = e.length;
			for (let n = 0; n < t; n++) {
				let t = e[n];
				if (t != null) return t;
			}
		}
		function J(e, t) {
			return parseInt(e, t || 10);
		}
		function we(e, t) {
			return 0 > e.indexOf(t) && !!e.push(t);
		}
		function Te(e, t, n) {
			return /%$/.test(e) ? t * parseFloat(e) / 100 + (n || 0) : parseFloat(e);
		}
		function Ee(e, ...t) {
			let n, r;
			do
				for (r of (n = e, t)) e = e.replace(r[0], r[1]);
			while (e !== n);
			return e;
		}
		function De(e, t, n) {
			function r(t, n) {
				let r = e.removeEventListener;
				r && r.call(e, t, n, !1);
			}
			function i(n) {
				let i, a;
				e.nodeName && (t ? (i = {})[t] = !0 : i = n, K(i, function(e, t) {
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
		function Oe(e) {
			return U(e) ? e : [e];
		}
		function ke(e, t) {
			let n, r, i = e.length;
			for (r = 0; r < i; r++) e[r].safeI = r;
			for (e.sort(function(e, r) {
				return (n = t(e, r)) === 0 ? e.safeI - r.safeI : n;
			}), r = 0; r < i; r++) delete e[r].safeI;
		}
		function Ae(e, t, n) {
			return t > 0 ? setTimeout(e, t, n) : (e.call(0, n), -1);
		}
		function je(e) {
			return H(e) ? e.substring(0, 1).toUpperCase() + e.substring(1) : String(e);
		}
		let { charts: Me, win: Ne } = j;
		function Y(e, t, n, r) {
			let i = t ? "Highcharts error" : "Highcharts warning";
			e === 32 && (e = `${i}: Deprecated member`);
			let a = V(e), o = a ? `${i} #${e}: www.highcharts.com/errors/${e}/` : e.toString();
			if (r !== void 0) {
				let e = "";
				a && (o += "?"), K(r, function(t, n) {
					e += `
 - ${n}: ${t}`, a && (o += encodeURI(n) + "=" + encodeURI(t));
				}), o += e;
			}
			B(j, "displayError", {
				chart: n,
				code: e,
				message: o,
				params: r
			}, function() {
				if (t) throw Error(o);
				Ne.console && Y.messages.indexOf(o) === -1 && console.warn(o);
			}), Y.messages.push(o);
		}
		function Pe(e, t) {
			let n, r = e.options.index, i = t.length;
			for (n = e.options.isInternal ? i : 0; n < i + 1; n++) if (!t[n] || V(r) && r < q(t[n].options.index, t[n]._i) || t[n].options.isInternal) {
				t.splice(n, 0, e);
				break;
			}
			return n;
		}
		(Y ||= {}).messages = [];
		let X = {
			millisecond: 1,
			second: 1e3,
			minute: 6e4,
			hour: 36e5,
			day: 864e5,
			week: 6048e5,
			month: 24192e5,
			year: 314496e5
		};
		Math.easeInOutSine = function(e) {
			return -.5 * (Math.cos(Math.PI * e) - 1);
		};
		let Fe = (n = Math.random().toString(36).substring(2, 9) + "-", r = 0, function() {
			return "highcharts-" + (e ? "" : n) + r++;
		});
		Ne.jQuery && (Ne.jQuery.fn.highcharts = function() {
			let e = [].slice.call(arguments);
			if (this[0]) return e[0] ? (new j[H(e[0]) ? e.shift() : "Chart"](this[0], e[0], e[1]), this) : Me[ie(this[0], "data-highcharts-chart")];
		});
		let { pageLang: Ie, win: Le } = j, Re = j.isSafari && Le.Intl && !Le.Intl.DateTimeFormat.prototype.formatRange, ze = class {
			constructor(e, t) {
				this.options = { timezone: "UTC" }, this.variableTimezone = !1, this.Date = Le.Date, this.update(e), this.lang = t;
			}
			update(e = {}) {
				this.dTLCache = {}, this.options = e = G(!0, this.options, e);
				let { timezoneOffset: t, useUTC: n, locale: r } = e;
				this.Date = e.Date || Le.Date || Date;
				let i = e.timezone;
				L(n) && (i = n ? "UTC" : void 0), t && t % 60 == 0 && (i = "Etc/GMT" + (t > 0 ? "+" : "") + t / 60), this.variableTimezone = i !== "UTC" && i?.indexOf("Etc/GMT") !== 0, this.timezone = i, this.lang && r && (this.lang.locale = r), [
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
			dateTimeFormat(e, t, n = this.options.locale || Ie) {
				let r = JSON.stringify(e) + n;
				H(e) && (e = this.str2dtf(e));
				let i = this.dTLCache[r];
				if (!i) {
					e.timeZone ??= this.timezone;
					try {
						i = new Intl.DateTimeFormat(n, e);
					} catch (t) {
						/Invalid time zone/i.test(t.message) ? (Y(34), e.timeZone = "UTC", i = new Intl.DateTimeFormat(n, e)) : Y(t.message, !1);
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
					e.indexOf(r) !== -1 && z(t, n[r]);
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
						e === t ? e - 36e5 !== this.getTimezoneOffset(s - 36e5) || Re || (s -= 36e5) : s += t - e;
					}
				}
				return s;
			}
			parse(e) {
				if (!H(e)) return e ?? void 0;
				let t = (e = e.replace(/\//g, "-").replace(/(GMT|UTC)/, "")).indexOf("Z") > -1 || /([+-][0-9]{2}):?[0-9]{2}$/.test(e), n = /^[0-9]{4}-[0-9]{2}(-[0-9]{2}|)$/.test(e);
				t || n || (e += "Z");
				let r = Date.parse(e);
				if (V(r)) return r + (!t || n ? this.getTimezoneOffset(r) : 0);
			}
			getTimezoneOffset(e) {
				if (this.timezone !== "UTC") {
					let [t, n, r, i, a = 0] = this.dateTimeFormat({ timeZoneName: "shortOffset" }, e, "en").split(/(GMT|:)/).map(Number), o = -(60 * (r + a / 60) * 6e4);
					if (V(o)) return o;
				}
				return 0;
			}
			dateFormat(e, t, n) {
				let r = this.lang;
				if (!L(t) || isNaN(t)) return r?.invalidDate || "";
				if (H(e ??= "%Y-%m-%d %H:%M:%S")) {
					let n, i = /%\[([a-zA-Z]+)\]/g;
					for (; n = i.exec(e);) e = e.replace(n[0], this.dateTimeFormat(n[1], t, r?.locale));
				}
				if (H(e) && e.indexOf("%") !== -1) {
					let n = this, [i, a, o, s, c, l, u, d] = this.toParts(t), f = r?.weekdays || this.weekdays, p = r?.shortWeekdays || this.shortWeekdays, m = r?.months || this.months, h = r?.shortMonths || this.shortMonths;
					K(z({
						a: p ? p[d] : f[d].substr(0, 3),
						A: f[d],
						d: Ce(o),
						e: Ce(o, 2, " "),
						w: d,
						v: r?.weekFrom ?? "",
						b: h[a],
						B: m[a],
						m: Ce(a + 1),
						o: a + 1,
						y: i.toString().substr(2, 2),
						Y: i,
						H: Ce(s),
						k: s,
						I: Ce(s % 12 || 12),
						l: s % 12 || 12,
						M: Ce(c),
						p: s < 12 ? "AM" : "PM",
						P: s < 12 ? "am" : "pm",
						S: Ce(l),
						L: Ce(u, 3)
					}, j.dateFormats), function(r, i) {
						if (H(e)) for (; e.indexOf("%" + i) !== -1;) e = e.replace("%" + i, typeof r == "function" ? r.call(n, t, n) : r);
					});
				} else if (W(e)) {
					let n = (this.getTimezoneOffset(t) || 0) / 36e5, r = this.timezone || "Etc/GMT" + (n >= 0 ? "+" : "") + n, { prefix: i = "", suffix: a = "" } = e;
					e = i + this.dateTimeFormat(z({ timeZone: r }, e), t) + a;
				}
				return n ? je(e) : e;
			}
			resolveDTLFormat(e) {
				return W(e, !0) ? W(e, !0) && e.main === void 0 ? { main: e } : e : {
					main: (e = Oe(e))[0],
					from: e[1],
					to: e[2]
				};
			}
			getDateFormat(e, t, n, r) {
				let i = this.dateFormat("%m-%d %H:%M:%S.%L", t), a = "01-01 00:00:00.000", o = {
					millisecond: 15,
					second: 12,
					minute: 9,
					hour: 6,
					day: 3
				}, s = "millisecond", c = s;
				for (s in X) {
					if (e && e === X.week && +this.dateFormat("%w", t) === n && i.substr(6) === a.substr(6)) {
						s = "week";
						break;
					}
					if (e && X[s] > e) {
						s = c;
						break;
					}
					if (o[s] && i.substr(o[s]) !== a.substr(o[s])) break;
					s !== "week" && (c = s);
				}
				return this.resolveDTLFormat(r[s]).main;
			}
		}, Be = class extends ze {
			getBoundaryTicks(e, t, n, r) {
				let i = {};
				if (t === X.year) return i;
				let a = L(n) && L(r), o = t < X.hour, s = t < X.day, c = t < X.month, l = t >= X.hour ? 9e5 : t >= X.minute ? 6e4 : t >= X.second && 1e3;
				if (e.length < 1e4) {
					let u = !0;
					for (let d = 0; d < e.length; d++) {
						let f = e[d];
						if (a) {
							if (f < n) continue;
							if (f > r) break;
						}
						if (u) {
							if (t === X.month) {
								i[f] = "year", u = !1;
								continue;
							}
							if (t === X.hour) {
								i[f] = "day", u = !1;
								continue;
							}
						}
						if (l && f % l != 0) {
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
				let i = [], { count: a = 1, unitRange: o } = e, s = t, [c, l, u, d, f, p] = this.toParts(t), m = (t || 0) % 1e3, h;
				if (r ??= 1, L(t)) {
					if (m = o >= X.second ? 0 : a * Math.floor(m / a), o >= X.second && (p = o >= X.minute ? 0 : a * Math.floor(p / a)), o >= X.minute && (f = o >= X.hour ? 0 : a * Math.floor(f / a)), o >= X.hour && (d = o >= X.day ? 0 : a * Math.floor(d / a)), o >= X.day && (u = o >= X.month ? 1 : Math.max(1, a * Math.floor(u / a))), o >= X.month && (l = o >= X.year ? 0 : a * Math.floor(l / a)), o >= X.year && (c -= c % a), o === X.week) {
						a && (t = this.makeTime(c, l, u, d, f, p, m));
						let e = this.dateTimeFormat({
							timeZone: this.timezone,
							weekday: "narrow"
						}, t, "es"), n = "DLMXJVS".indexOf(e);
						u += -n + r + (n < r ? -7 : 0);
					}
					t = this.makeTime(c, l, u, d, f, p, m), this.variableTimezone && L(n) && (h = n - t > 4 * X.month || this.getTimezoneOffset(t) !== this.getTimezoneOffset(n));
					let e = t, s = 1;
					for (; e < n;) i.push(e), o === X.year ? e = this.makeTime(c + s * a, 0) : o === X.month ? e = this.makeTime(c, l + s * a) : h && (o === X.day || o === X.week) ? e = this.makeTime(c, l, u + s * a * (o === X.day ? 1 : 7)) : h && o === X.hour && a > 1 ? e = this.makeTime(c, l, u, d + s * a) : e += o * a, s++;
					i.push(e);
				}
				return i.info = z(e, {
					boundaryTicks: this.getBoundaryTicks(i, o, s, n),
					totalRange: o * a
				}), i;
			}
		}, { isTouchDevice: Ve } = j, He = {
			palette: ee,
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
			chart: {
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
			},
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
				snap: Ve ? 25 : 10,
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
		}, Ue = new Be(He.time, He.lang), We = {
			defaultOptions: He,
			defaultTime: Ue,
			getOptions: function() {
				return He;
			},
			setOptions: function(e) {
				return B(j, "setOptions", { options: e }), G(!0, He, e), e.time && Ue.update(He.time), e.lang && "locale" in e.lang && Ue.update({ locale: e.lang.locale }), e.lang?.chartTitle && (He.title = {
					...He.title,
					text: e.lang.chartTitle
				}), He;
			}
		}, { win: Ge } = j, Ke = (e, t, n) => n === 0 ? e : n === 1 ? t : `color-mix(in srgb,${e},${t} ${100 * n}%)`, qe = (e) => H(e) && !!e && e !== "none";
		class Z {
			static parse(e) {
				return e ? new Z(e) : Z.None;
			}
			constructor(e) {
				let t, n, r, i;
				this.rgba = [
					NaN,
					NaN,
					NaN,
					NaN
				], this.input = e;
				let a = j.Color;
				if (a && a !== Z) return new a(e);
				if (typeof e == "object" && e.stops !== void 0) this.stops = e.stops.map((e) => new Z(e[1]));
				else if (typeof e == "string") for (this.input = e = Z.names[e.toLowerCase()] || e, r = Z.parsers.length; r-- && !n;) (t = (i = Z.parsers[r]).regex.exec(e)) && (n = i.parse(t));
				n && (this.rgba = n);
			}
			get(e) {
				let t = this.input, n = this.rgba;
				if (this.output) return this.output;
				if (typeof t == "object" && this.stops !== void 0) {
					let n = G(t);
					return n.stops = [].slice.call(n.stops), this.stops.forEach((t, r) => {
						n.stops[r] = [n.stops[r][0], t.get(e)];
					}), n;
				}
				return n && V(n[0]) ? e !== "rgb" && (e || n[3] !== 1) ? e === "a" ? `${n[3]}` : "rgba(" + n.join(",") + ")" : "rgb(" + n[0] + "," + n[1] + "," + n[2] + ")" : t;
			}
			brighten(e) {
				let t = this.rgba;
				if (this.stops) this.stops.forEach(function(t) {
					t.brighten(e);
				});
				else if (V(e) && e !== 0) if (V(t[0])) for (let n = 0; n < 3; n++) t[n] += J(255 * e), t[n] < 0 && (t[n] = 0), t[n] > 255 && (t[n] = 255);
				else Z.useColorMix && qe(this.input) && (this.output = Ke(this.input, e > 0 ? "white" : "black", Math.abs(e)));
				return this;
			}
			setOpacity(e) {
				return V(this.rgba[0]) ? this.rgba[3] = e : Z.useColorMix && qe(this.input) && (this.output = Ke(this.input, "#0000", 1 - e)), this;
			}
			tweenTo(e, t) {
				let n = this.rgba, r = e.rgba;
				if (!V(n[0]) || !V(r[0])) return Z.useColorMix && qe(this.input) && qe(e.input) && t < .99 ? Ke(this.input, e.input, t) : e.input || "none";
				let i = r[3] !== 1 || n[3] !== 1, a = (e, r) => e + (n[r] - e) * (1 - t), o = r.slice(0, 3).map(a).map(Math.round);
				return i && o.push(a(r[3], 3)), (i ? "rgba(" : "rgb(") + o.join(",") + ")";
			}
		}
		Z.names = {
			white: "#ffffff",
			black: "#000000"
		}, Z.parsers = [
			{
				regex: /rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d?(?:\.\d+)?)\s*\)/,
				parse: function(e) {
					return [
						J(e[1]),
						J(e[2]),
						J(e[3]),
						parseFloat(e[4], 10)
					];
				}
			},
			{
				regex: /rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)/,
				parse: function(e) {
					return [
						J(e[1]),
						J(e[2]),
						J(e[3]),
						1
					];
				}
			},
			{
				regex: /^#([a-f0-9])([a-f0-9])([a-f0-9])([a-f0-9])?$/i,
				parse: function(e) {
					return [
						J(e[1] + e[1], 16),
						J(e[2] + e[2], 16),
						J(e[3] + e[3], 16),
						L(e[4]) ? J(e[4] + e[4], 16) / 255 : 1
					];
				}
			},
			{
				regex: /^#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})?$/i,
				parse: function(e) {
					return [
						J(e[1], 16),
						J(e[2], 16),
						J(e[3], 16),
						L(e[4]) ? J(e[4], 16) / 255 : 1
					];
				}
			}
		], Z.useColorMix = Ge.CSS?.supports("color", "color-mix(in srgb,red,blue 9%)"), Z.None = new Z("");
		let { parse: Je } = Z, { win: Ye } = j;
		class Xe {
			constructor(e, t, n) {
				this.pos = NaN, this.options = t, this.elem = e, this.prop = n;
			}
			dSetter() {
				let e = this.paths, t = e?.[0], n = e?.[1], r = this.now || 0, i = [];
				if (r !== 1 && t && n) if (t.length === n.length && r < 1) for (let e = 0; e < n.length; e++) {
					let a = t[e], o = n[e], s = [];
					for (let e = 0; e < o.length; e++) {
						let t = a[e], n = o[e];
						V(t) && V(n) && (o[0] !== "A" || e !== 4 && e !== 5) ? s[e] = t + r * (n - t) : s[e] = n;
					}
					i.push(s);
				}
				else i = n;
				else i = this.toD || [];
				this.elem.attr("d", i, void 0, !0);
			}
			update() {
				let e = this.elem, t = this.prop, n = this.now, r = this.options.step;
				this[t + "Setter"] ? this[t + "Setter"]() : e.attr ? e.element && e.attr(t, n, null, !0) : e.style[t] = n + this.unit, r && r.call(e, n, this);
			}
			run(e, t, n) {
				let r = this, i = r.options, a = function(e) {
					return !a.stopped && r.step(e);
				}, o = Ye.requestAnimationFrame || function(e) {
					setTimeout(e, 13);
				}, s = function() {
					for (let e = 0; e < Xe.timers.length; e++) Xe.timers[e]() || Xe.timers.splice(e--, 1);
					Xe.timers.length && o(s);
				};
				e !== t || this.elem["forceAnimate:" + this.prop] ? (this.startTime = +/* @__PURE__ */ new Date(), this.start = e, this.end = t, this.unit = n, this.now = this.start, this.pos = 0, a.elem = this.elem, a.prop = this.prop, a() && Xe.timers.push(a) === 1 && o(s)) : (delete i.curAnim[this.prop], i.complete && Object.keys(i.curAnim).length === 0 && i.complete.call(this.elem));
			}
			step(e) {
				let t, n, r = +/* @__PURE__ */ new Date(), i = this.options, a = this.elem, o = i.complete, s = i.duration, c = i.curAnim;
				return a.attr && !a.element ? t = !1 : e || r >= s + this.startTime ? (this.now = this.end, this.pos = 1, this.update(), c[this.prop] = !0, n = !0, K(c, function(e) {
					!0 !== e && (n = !1);
				}), n && o && o.call(a), t = !1) : (this.pos = i.easing((r - this.startTime) / s), this.now = this.start + (this.end - this.start) * this.pos, this.update(), t = !0), t;
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
						if (t[0] === "C" && (t[1] = t[5], t[2] = t[6]), o) {
							let n = e[Math.floor(e.length / s)].slice();
							e.splice(e.length / 2, 0, t, n);
						} else e.push(t);
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
				return p.length && V(l) && (u = a.length + l * s, f ? (m(p, a), h(a)) : (m(a, p), h(p))), [p, a];
			}
			fillSetter() {
				Xe.prototype.strokeSetter.apply(this, arguments);
			}
			strokeSetter() {
				this.elem.attr(this.prop, Je(this.start).tweenTo(Je(this.end), this.pos), void 0, !0);
			}
		}
		function Ze(e) {
			return W(e) ? G({
				duration: 500,
				defer: 0
			}, e) : {
				duration: 500 * !!e,
				defer: 0
			};
		}
		function Qe(e, t) {
			let n = Xe.timers.length;
			for (; n--;) Xe.timers[n].elem !== e || t && t !== Xe.timers[n].prop || (Xe.timers[n].stopped = !0);
		}
		Xe.timers = [];
		let $e = {
			animate: function(e, t, n) {
				let r, i = "", a, o, s;
				W(n) || (s = arguments, n = {
					duration: s[2],
					easing: s[3],
					complete: s[4]
				}), V(n.duration) || (n.duration = 400), n.easing = typeof n.easing == "function" ? n.easing : Math[n.easing] || Math.easeInOutSine, n.curAnim = G(t), K(t, function(s, c) {
					Qe(e, c), o = new Xe(e, n, c), a = void 0, c === "d" && U(t.d) ? (o.paths = o.initPath(e, e.pathArray, t.d), o.toD = t.d, r = 0, a = 1) : e.attr ? r = e.attr(c) : (r = parseFloat(he(e, c)) || 0, c !== "opacity" && (i = "px")), a ||= s, typeof a == "string" && a.match("px") && (a = a.replace(/px/g, "")), o.run(r, a, i);
				});
			},
			animObject: Ze,
			getDeferredAnimation: function(e, t, n) {
				let r = Ze(t), i = n ? [n] : e.series, a = 0, o = 0;
				return i.forEach((e) => {
					let n = Ze(e.options.animation);
					a = W(t) && L(t.defer) ? r.defer : Math.max(a, n.duration + n.defer), o = Math.min(r.duration, n.duration);
				}), e.renderer.forExport && (a = 0), {
					defer: Math.max(0, a - o),
					duration: Math.min(a, o)
				};
			},
			setAnimation: function(e, t) {
				t.renderer.globalAnimation = q(e, t.options.chart.animation, !0);
			},
			stop: Qe
		}, { SVG_NS: et, win: tt } = j, { trustedTypes: nt } = tt, rt = nt && be(nt.createPolicy) && nt.createPolicy("highcharts", { createHTML: (e) => e }), it = rt ? rt.createHTML("") : "";
		class Q {
			static filterUserAttributes(e) {
				return K(e, (t, n) => {
					let r = !0;
					Q.allowedAttributes.indexOf(n) === -1 && (r = !1), [
						"background",
						"dynsrc",
						"href",
						"lowsrc",
						"src"
					].indexOf(n) !== -1 && (r = H(t) && Q.allowedReferences.some((e) => t.indexOf(e) === 0)), r || (Y(33, !1, void 0, { "Invalid attribute in config": `${n}` }), delete e[n]), H(t) && e[n] && (e[n] = t.replace(/</g, "&lt;"));
				}), e;
			}
			static parseStyle(e) {
				return e.split(";").reduce((e, t) => {
					let n = t.split(":").map((e) => e.trim()), r = n.shift();
					return r && n.length && (e[r.replace(/-([a-z])/g, (e) => e[1].toUpperCase())] = n.join(":")), e;
				}, {});
			}
			static setElementHTML(e, t) {
				e.innerHTML = Q.emptyHTML, t && new Q(t).addToDOM(e);
			}
			constructor(e) {
				this.nodes = typeof e == "string" ? this.parseMarkup(e) : e;
			}
			addToDOM(e) {
				return function e(t, n) {
					let r;
					return Oe(t).forEach(function(t) {
						let i, a = t.tagName, o = t.textContent ? j.doc.createTextNode(t.textContent) : void 0, s = Q.bypassHTMLFiltering;
						if (a) if (a === "#text") i = o;
						else if (Q.allowedTags.indexOf(a) !== -1 || s) {
							let r = a === "svg" ? et : n.namespaceURI || et, c = j.doc.createElementNS(r, a), l = t.attributes || {};
							K(t, function(e, t) {
								t !== "tagName" && t !== "attributes" && t !== "children" && t !== "style" && t !== "textContent" && (l[t] = e);
							}), ie(c, s ? l : Q.filterUserAttributes(l)), t.style && I(c, t.style), o && c.appendChild(o), e(t.children || [], c), i = c;
						} else Y(33, !1, void 0, { "Invalid tagName in config": a });
						i && n.appendChild(i), r = i;
					}), r;
				}(this.nodes, e);
			}
			parseMarkup(e) {
				let t, n = [];
				e = e.trim().replace(/ style=(["'])/g, " data-style=$1");
				try {
					t = new DOMParser().parseFromString(rt ? rt.createHTML(e) : e, "text/html");
				} catch {}
				if (!t) {
					let n = ae("div");
					n.innerHTML = e, t = { body: n };
				}
				let r = (e, t) => {
					let n = e.nodeName.toLowerCase(), i = { tagName: n };
					n === "#text" && (i.textContent = e.textContent || "");
					let a = e.attributes;
					if (a) {
						let e = {};
						[].forEach.call(a, (t) => {
							t.name === "data-style" ? i.style = Q.parseStyle(t.value) : e[t.name] = t.value;
						}), i.attributes = e;
					}
					if (e.childNodes.length) {
						let t = [];
						[].forEach.call(e.childNodes, (e) => {
							r(e, t);
						}), t.length && (i.children = t);
					}
					t.push(i);
				};
				return [].forEach.call(t.body.childNodes, (e) => r(e, n)), n;
			}
		}
		Q.allowedAttributes = /* @__PURE__ */ "alt.aria-controls.aria-describedby.aria-expanded.aria-haspopup.aria-hidden.aria-label.aria-labelledby.aria-live.aria-pressed.aria-readonly.aria-roledescription.aria-selected.aria-sort.class.clip-path.color.colspan.cx.cy.d.disabled.dx.dy.fill.filterUnits.flood-color.flood-opacity.height.href.id.in.in2.markerHeight.markerWidth.offset.opacity.operator.orient.padding.paddingLeft.paddingRight.patternUnits.r.radius.refX.refY.result.role.rowspan.scope.slope.src.startOffset.stdDeviation.stroke-linecap.stroke-width.stroke.style.summary.tabindex.tableValues.target.text-align.text-anchor.textAnchor.textLength.title.type.valign.width.x.x1.x2.xlink:href.y.y1.y2.zIndex".split("."), Q.allowedReferences = [
			"https://",
			"http://",
			"mailto:",
			"/",
			"../",
			"./",
			"#"
		], Q.allowedTags = /* @__PURE__ */ "#text.a.abbr.b.br.button.caption.circle.clipPath.code.dd.defs.div.dl.dt.em.feComponentTransfer.feComposite.feDropShadow.feFlood.feFuncA.feFuncB.feFuncG.feFuncR.feGaussianBlur.feMerge.feMergeNode.feMorphology.feOffset.filter.h1.h2.h3.h4.h5.h6.hr.i.img.li.linearGradient.marker.ol.p.path.pattern.pre.rect.small.span.stop.strong.style.sub.sup.svg.table.tbody.td.text.textPath.th.thead.title.tr.tspan.u.ul".split("."), Q.emptyHTML = it, Q.bypassHTMLFiltering = !1;
		let { defaultOptions: at, defaultTime: ot } = We, { pageLang: st } = j, ct = {
			add: (e, t) => e + t,
			divide: (e, t) => t === 0 ? "" : F(e / t),
			eq: (e, t) => e == t,
			each: function(e) {
				let t = arguments[arguments.length - 1];
				return !!U(e) && e.map((n, r) => ut(t.body, z(W(n) ? n : { "@this": n }, {
					"@index": r,
					"@first": r === 0,
					"@last": r === e.length - 1
				}))).join("");
			},
			ge: (e, t) => e >= t,
			gt: (e, t) => e > t,
			if: (e) => !!e,
			le: (e, t) => e <= t,
			lt: (e, t) => e < t,
			multiply: (e, t) => F(e * t, 15),
			ne: (e, t) => e != t,
			subtract: (e, t) => e - t,
			ucfirst: je,
			unless: (e) => !e
		}, lt = {};
		function ut(e = "", t, n) {
			let r = /\{([^{}]+)\}/g, i = /\(([^()]+)\)/g, a = [], o = /f$/, s = /\.(\d)/, c = n?.options?.lang || at.lang, l = n?.time || ot, u = n?.numberFormatter || dt.bind(n), d = (e = "") => {
				let n;
				return e === "true" || e !== "false" && ((n = Number(e)).toString() === e ? n : /^["'].+["']$/.test(e) ? e.slice(1, -1) : me(e, t));
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
				ct[o] && (p.isBlock && o === p.fn && m++, p.fn ||= o);
				let s = f[1] === "else";
				if (p.isBlock && p.fn && (f[1] === `/${p.fn}` || s)) if (m) !s && m--;
				else {
					let t = p.startInner, n = e.substr(t, f.index - t);
					p.body === void 0 ? (p.body = n, p.startInner = f.index + f[0].length) : p.elseBody = n, p.find += n + f[0], s || (a.push(p), p = void 0);
				}
				else p.isBlock || a.push(p);
				if (r && !p?.isBlock) break;
			}
			return a.forEach((r) => {
				let a, f, { body: p, elseBody: m, expression: h, fn: g } = r;
				if (g) {
					let e = [r], i = [], o = h.length, s = 0, c;
					for (f = 0; f <= o; f++) {
						let e = h.charAt(f);
						c || e !== "\"" && e !== "'" ? c === e && (c = "") : c = e, c || e !== " " && f !== o || (i.push(h.substr(s, f - s)), s = f + 1);
					}
					for (f = ct[g].length; f--;) e.unshift(d(i[f + 1]));
					a = ct[g].apply(t, e), r.isBlock && typeof a == "boolean" && (a = ut(a ? p : m, t, n));
				} else {
					let e = /^["'].+["']$/.test(h) ? [h] : h.split(":");
					if (a = d(e.shift() || ""), e.length && typeof a == "number") {
						let t = e.join(":");
						if (o.test(t)) {
							let e = parseInt((t.match(s) || ["", "-1"])[1], 10);
							a !== null && (a = u(a, e, c.decimalPoint, t.indexOf(",") > -1 ? c.thousandsSep : ""));
						} else a = l.dateFormat(t, a);
					}
					i.lastIndex = 0, i.test(r.find) && H(a) && (a = `"${a}"`);
				}
				e = e.replace(r.find, q(a, ""));
			}), h ? ut(e, t, n) : e;
		}
		function dt(e, t, n, r) {
			t *= 1;
			let i, a, [o, s] = (e = +e || 0).toString().split("e").map(Number), c = this?.options?.lang || at.lang, l = (e.toString().split(".")[1] || "").split("e")[0].length, u = t, d = {};
			n ??= c.decimalPoint, r ??= c.thousandsSep, t === -1 ? t = Math.min(l, 20) : V(t) ? t && s < 0 && ((a = t + s) >= 0 ? (o = +o.toExponential(a).split("e")[0], t = a) : (o = Math.floor(o), e = t < 20 ? +(o * 10 ** s).toFixed(t) : 0, s = 0)) : t = 2, s && (t ??= 2, e = o), V(t) && t >= 0 && (d.minimumFractionDigits = t, d.maximumFractionDigits = t), r === "" && (d.useGrouping = !1);
			let f = r || n, p = f ? "en" : this?.locale || c.locale || st, m = JSON.stringify(d) + p;
			return i = (lt[m] ?? (lt[m] = new Intl.NumberFormat(p, d))).format(e), f && (i = i.replace(/([,\.])/g, "_$1").replace(/_\,/g, r ?? ",").replace("_.", n ?? ".")), (t || +i != 0) && (!(s < 0) || u) || (i = "0"), s && +i != 0 && (i += "e" + (s < 0 ? "" : "+") + s), i;
		}
		let ft = {
			dateFormat: function(e, t, n) {
				return ot.dateFormat(e, t, n);
			},
			format: ut,
			helpers: ct,
			numberFormat: dt
		};
		(m ||= {}).distribute = function e(t, n, r) {
			let i = t, a = i.reducedLen || n, o = (e, t) => e.target - t.target, s = [], c = t.length, l = [], u = s.push, d, f = !0, p, m, h = 0;
			for (d = c; d--;) h += t[d].size;
			if (h > a) {
				if (ke(t, (e, t) => (t.rank || 0) - (e.rank || 0)), t[0].rank === t[t.length - 1].rank) {
					let e = [[0, c - 1]];
					for (; e.length && h > a;) {
						let n = e.shift();
						if (!n) break;
						p = t[d = Math.floor((n[0] + n[1]) / 2)], we(l, d) && (h -= p.size), n[0] < d && e.push([n[0], d - 1]), d < n[1] && e.push([d + 1, n[1]]);
					}
				} else for (d = c - 1; h > a && d >= 0;) p = t[d], we(l, d) && (h -= p.size), d--;
				l.sort((e, t) => t - e).forEach((e) => u.apply(s, t.splice(e, 1)));
			}
			for (ke(t, o), t = t.map((e) => ({
				size: e.size,
				targets: [e.target],
				align: q(e.align, .5)
			})); f;) {
				for (d = t.length; d--;) p = t[d], m = (Math.min.apply(0, p.targets) + Math.max.apply(0, p.targets)) / 2, p.pos = P(m - p.size * p.align, 0, n - p.size);
				for (d = t.length, f = !1; d--;) d > 0 && t[d - 1].pos + t[d - 1].size > t[d].pos && (t[d - 1].size += t[d].size, t[d - 1].targets = t[d - 1].targets.concat(t[d].targets), t[d - 1].align = .5, t[d - 1].pos + t[d - 1].size > n && (t[d - 1].pos = n - t[d - 1].size), t.splice(d, 1), f = !0);
			}
			return u.apply(i, s), d = 0, t.some((t) => {
				let a = 0;
				return (t.targets || []).some(() => (i[d].pos = t.pos + a, r !== void 0 && Math.abs(i[d].pos - i[d].target) > r ? (i.slice(0, d + 1).forEach((e) => delete e.pos), i.reducedLen = (i.reducedLen || n) - .1 * n, i.reducedLen > .1 * n && e(i, n, r), !0) : (a += i[d].size, d++, !1)));
			}), ke(i, o), i;
		};
		let pt = m, { animate: mt, animObject: ht, stop: gt } = $e, { deg2rad: _t, doc: vt, svg: yt, SVG_NS: bt, win: xt, isFirefox: St } = j;
		class Ct {
			_defaultGetter(e) {
				let t = q(this[e + "Value"], this[e], this.element ? this.element.getAttribute(e) : null, 0);
				return /^-?[\d\.]+$/.test(t) && (t = parseFloat(t)), t;
			}
			_defaultSetter(e, t, n) {
				n.setAttribute(t, e);
			}
			add(e) {
				let t, n = this.renderer, r = this.element;
				return e && (this.parentGroup = e), this.textStr !== void 0 && this.element.nodeName === "text" && n.buildText(this), this.added = !0, (!e || e.handleZ || this.zIndex) && (t = this.zIndexSetter()), t || (e ? e.element : n.box).appendChild(r), this.onAdd && this.onAdd(), this;
			}
			addClass(e, t) {
				let n = t ? "" : this.attr("class") || "";
				return (e = (e || "").split(/ /g).reduce(function(e, t) {
					return n.indexOf(t) === -1 && e.push(t), e;
				}, n ? [n] : []).join(" ")) !== n && this.attr("class", e), this;
			}
			afterSetters() {
				this.doTransform &&= (this.updateTransform(), !1);
			}
			align(e, t, n, r = !0) {
				let i = this.renderer, a = i.alignedObjects, o = !!e;
				e ? (this.alignOptions = e, this.alignByTranslate = t, this.alignTo = n) : (e = this.alignOptions || {}, t = this.alignByTranslate, n = this.alignTo);
				let s = !n || H(n) ? n || "renderer" : void 0;
				s && (o && we(a, this), n = void 0);
				let c = q(n, i[s], i), l = (c.x || 0) + (e.x || 0) + ((c.width || 0) - (e.width || 0)) * de(e.align), u = (c.y || 0) + (e.y || 0) + ((c.height || 0) - (e.height || 0)) * de(e.verticalAlign), d = {};
				return e.align && (d["text-align"] = e.align), d[t ? "translateX" : "x"] = Math.round(l), d[t ? "translateY" : "y"] = Math.round(u), r && (this[this.placed ? "animate" : "attr"](d), this.placed = !0), this.alignAttr = d, this;
			}
			alignSetter(e) {
				let t = {
					left: "start",
					center: "middle",
					right: "end"
				};
				t[e] && (this.alignValue = e, this.element.setAttribute("text-anchor", t[e]));
			}
			animate(e, t, n) {
				let r = ht(q(t, this.renderer.globalAnimation, !0)), i = r.defer;
				return vt.hidden && (r.duration = 0), r.duration === 0 ? (this.attr(e, void 0, n || r.complete), K(e, function(e, t) {
					r.step && r.step.call(this, e, {
						prop: t,
						pos: 1,
						elem: this
					});
				}, this)) : (n && (r.complete = n), Ae(() => {
					this.element && mt(this, e, r);
				}, i)), this;
			}
			applyTextOutline(e) {
				let t = this.element;
				e.indexOf("contrast") !== -1 && (e = e.replace(/contrast/g, this.renderer.getContrast(t.style.fill)));
				let n = e.indexOf(" "), r = e.substring(n + 1), i = e.substring(0, n);
				if (i && i !== "none" && j.svg) {
					this.fakeTS = !0, i = i.replace(/(^[\d\.]+)(.*?)$/g, function(e, t, n) {
						return 2 * Number(t) + n;
					}), this.removeTextOutline();
					let e = vt.createElementNS(bt, "tspan");
					ie(e, {
						class: "highcharts-text-outline",
						fill: r,
						stroke: r,
						"stroke-width": i,
						"stroke-linejoin": "round"
					});
					let n = t.querySelector("textPath") || t;
					[].forEach.call(n.childNodes, (t) => {
						let n = t.cloneNode(!0);
						n.removeAttribute && [
							"fill",
							"stroke",
							"stroke-width",
							"stroke"
						].forEach((e) => n.removeAttribute(e)), e.appendChild(n);
					});
					let a = 0;
					[].forEach.call(n.querySelectorAll("text tspan"), (e) => {
						a += Number(e.getAttribute("dy"));
					});
					let o = vt.createElementNS(bt, "tspan");
					o.textContent = "​", ie(o, {
						x: Number(t.getAttribute("x")),
						dy: -a
					}), e.appendChild(o), n.insertBefore(e, n.firstChild);
				}
			}
			attr(e, t, n, r) {
				let { element: i } = this, a = Ct.symbolCustomAttribs, o, s, c = this, l;
				return typeof e == "string" && t !== void 0 && (o = e, (e = {})[o] = t), typeof e == "string" ? c = (this[e + "Getter"] || this._defaultGetter).call(this, e, i) : (K(e, function(t, n) {
					l = !1, r || gt(this, n), this.symbolName && a.indexOf(n) !== -1 && (s ||= (this.symbolAttr(e), !0), l = !0), this.rotation && (n === "x" || n === "y") && (this.doTransform = !0), l || (this[n + "Setter"] || this._defaultSetter).call(this, t, n, i);
				}, this), this.afterSetters()), n && n.call(this), c;
			}
			clip(e) {
				if (e && !e.clipPath) {
					let t = Fe() + "-", n = this.renderer.createElement("clipPath").attr({ id: t }).add(this.renderer.defs);
					z(e, {
						clipPath: n,
						id: t,
						count: 0
					}), e.add(n);
				}
				return this.attr("clip-path", e ? `url(${this.renderer.url}#${e.id})` : "none");
			}
			crisp(e, t) {
				t = Math.round(t || e.strokeWidth || 0);
				let n = e.x || this.x || 0, r = e.y || this.y || 0, i = (e.width || this.width || 0) + n, a = (e.height || this.height || 0) + r, o = oe(n, t), s = oe(r, t);
				return z(e, {
					x: o,
					y: s,
					width: oe(i, t) - o,
					height: oe(a, t) - s
				}), L(e.strokeWidth) && (e.strokeWidth = t), e;
			}
			complexColor(e, t, n) {
				let r = this.renderer, i, a, o, s, c, l, u, d, f, p = [], m;
				B(this.renderer, "complexColor", { args: arguments }, () => {
					if (e.radialGradient ? a = "radialGradient" : e.linearGradient && (a = "linearGradient"), a) {
						if (o = e[a], c = r.gradients, l = e.stops, d = n.radialReference, U(o) && (e[a] = o = {
							x1: o[0],
							y1: o[1],
							x2: o[2],
							y2: o[3],
							gradientUnits: "userSpaceOnUse"
						}), a === "radialGradient" && d && !L(o.gradientUnits) && (s = o, o = G(o, r.getRadialAttr(d, s), { gradientUnits: "userSpaceOnUse" })), K(o, function(e, t) {
							t !== "id" && p.push(t, e);
						}), K(l, function(e) {
							p.push(e);
						}), c[p = p.join(",")]) f = c[p].attr("id");
						else {
							o.id = f = Fe();
							let e = c[p] = r.createElement(a).attr(o).add(r.defs);
							e.radAttr = s, e.stops = [], l.forEach(([t, n]) => {
								n.indexOf("rgba") === 0 ? (n = (i = Z.parse(n)).get("rgb"), u = i.get("a")) : u = 1;
								let a = r.createElement("stop").attr({
									offset: t,
									"stop-color": n,
									"stop-opacity": u
								}).add(e);
								e.stops.push(a);
							});
						}
						m = "url(" + r.url + "#" + f + ")", n.setAttribute(t, m), n.gradient = p, e.toString = function() {
							return m;
						};
					}
				});
			}
			css(e) {
				let t = this.styles, n = {}, r = this.element, i = this.renderer, a, o = !t;
				if (t && K(e, function(e, r) {
					t && t[r] !== e && (n[r] = e, o = !0);
				}), o) {
					t && (e = z(t, n)), e.width === null || e.width === "auto" ? delete this.textWidth : r.nodeName.toLowerCase() === "text" && e.width && (a = this.textWidth = J(e.width)), z(this.styles, e), a && !yt && i.forExport && delete e.width;
					let o = St && e.fontSize || null;
					o && (V(o) || /^\d+$/.test(o)) && (e.fontSize += "px");
					let s = G(e);
					r.namespaceURI === this.SVG_NS && ([
						"textOutline",
						"textOverflow",
						"whiteSpace",
						"width"
					].forEach((e) => s && delete s[e]), s.color && (s.fill = s.color, delete s.color)), I(r, s);
				}
				return this.added && (this.element.nodeName === "text" && i.buildText(this), e.textOutline && this.applyTextOutline(e.textOutline)), this;
			}
			dashstyleSetter(e) {
				let t, n = this["stroke-width"];
				if (n === "inherit" && (n = 1), e) {
					let r = (e = e.toLowerCase()).replace("shortdashdotdot", "3,1,1,1,1,1,").replace("shortdashdot", "3,1,1,1").replace("shortdot", "1,1,").replace("shortdash", "3,1,").replace("longdash", "8,3,").replace(/dot/g, "1,3,").replace("dash", "4,3,").replace(/,$/, "").split(",");
					for (t = r.length; t--;) r[t] = "" + J(r[t]) * q(n, NaN);
					e = r.join(",").replace(/NaN/g, "none"), this.element.setAttribute("stroke-dasharray", e);
				}
			}
			destroy() {
				let e = this, { element: t = {}, renderer: n, stops: r } = e, i = t.ownerSVGElement;
				if (t.onclick = t.onmouseout = t.onmouseover = t.onmousemove = t.point = null, gt(e), e.clipPath && i) {
					let t = e.clipPath;
					[].forEach.call(i.querySelectorAll("[clip-path],[CLIP-PATH]"), function(e) {
						e.getAttribute("clip-path").indexOf(t.element.id) > -1 && e.removeAttribute("clip-path");
					}), e.clipPath = t.destroy();
				}
				if (r) {
					for (let e of r) e.destroy();
					r.length = 0;
				}
				e.safeRemoveChild(t), e.alignOptions && le(n.alignedObjects, e), K(e, (t, n) => {
					(e[n]?.parentGroup === e || ["connector", "foreignObject"].indexOf(n) !== -1) && e[n]?.destroy?.(), delete e[n];
				});
			}
			dSetter(e, t, n) {
				U(e) && (typeof e[0] == "string" && (e = this.renderer.pathToSegments(e)), this.pathArray = e, e = e.reduce((e, t, n) => t?.join ? (n ? e + " " : "") + t.join(" ") : (t || "").toString(), "")), /(NaN| {2}|^$)/.test(e) && (e = "M 0 0"), this[t] !== e && (n.setAttribute(t, e), this[t] = e);
			}
			fillSetter(e, t, n) {
				typeof e == "string" ? n.setAttribute(t, e) : e && this.complexColor(e, t, n);
			}
			hrefSetter(e, t, n) {
				n.setAttributeNS("http://www.w3.org/1999/xlink", t, e);
			}
			getBBox(e, t) {
				let n, r, i, { element: a, renderer: o, styles: s, textStr: c } = this, { cache: l, cacheKeys: u } = o, d = a.namespaceURI === this.SVG_NS, f = q(t, this.rotation, 0), p = o.styledMode ? a && Ct.prototype.getStyle.call(a, "font-size") : s.fontSize, m = this.getBBoxCacheKey([
					o.rootFontSize,
					this.textWidth,
					this.alignValue,
					s.fontWeight,
					s.lineClamp,
					s.textOverflow,
					p,
					f
				]);
				if (m && !e && (n = l[m]), !n || n.polygon) {
					if (d || o.forExport) {
						try {
							i = this.fakeTS && function(e) {
								let t = a.querySelector(".highcharts-text-outline");
								t && I(t, { display: e });
							}, be(i) && i("none"), n = a.getBBox ? z({}, a.getBBox()) : {
								width: a.offsetWidth,
								height: a.offsetHeight,
								x: 0,
								y: 0
							}, be(i) && i("");
						} catch {}
						(!n || n.width < 0) && (n = {
							x: 0,
							y: 0,
							width: 0,
							height: 0
						});
					} else n = this.htmlGetBBox();
					r = n.height, d && (n.height = r = {
						"11px,17": 14,
						"13px,20": 16
					}[`${p || ""},${Math.round(r)}`] || r), f && (n = this.getRotatedBox(n, f));
					let e = { bBox: n };
					B(this, "afterGetBBox", e), n = e.bBox;
				}
				if (m && (c === "" || n.height > 0)) {
					for (; u.length > 250;) delete l[u.shift()];
					l[m] || u.push(m), l[m] = n;
				}
				return n;
			}
			getBBoxCacheKey(e) {
				if (L(this.textStr)) {
					let t = "" + this.textStr;
					return t.indexOf("<") === -1 && (t = t.replace(/\d/g, "0")), [t, ...e].join(",");
				}
			}
			getRotatedBox(e, t) {
				let { x: n, y: r, width: i, height: a } = e, { alignValue: o, translateY: s, rotationOriginX: c = 0, rotationOriginY: l = 0 } = this, u = de(o), d = Number(this.element.getAttribute("y") || 0) - (s ? 0 : r), f = t * _t, p = (t - 90) * _t, m = Math.cos(f), h = Math.sin(f), g = i * m, _ = i * h, v = Math.cos(p), y = Math.sin(p), [[b, x], [S, C]] = [c, l].map((e) => [e - e * m, e * h]), w = n + u * (i - g) + b + C + d * v, T = w + g, E = T - a * v, D = E - g, O = r + d - u * _ - x + S + d * y, k = O + _, A = k - a * y, j = A - _, ee = Math.min(w, T, E, D), te = Math.min(O, k, A, j);
				return {
					x: ee,
					y: te,
					width: Math.max(w, T, E, D) - ee,
					height: Math.max(O, k, A, j) - te,
					polygon: [
						[w, O],
						[T, k],
						[E, A],
						[D, j]
					]
				};
			}
			getStyle(e) {
				return xt.getComputedStyle(this.element || this, "").getPropertyValue(e);
			}
			hasClass(e) {
				return ("" + this.attr("class")).split(" ").indexOf(e) !== -1;
			}
			hide() {
				return this.attr({ visibility: "hidden" });
			}
			htmlGetBBox() {
				return {
					height: 0,
					width: 0,
					x: 0,
					y: 0
				};
			}
			constructor(e, t) {
				this.onEvents = {}, this.opacity = 1, this.SVG_NS = bt, this.element = t === "div" || t === "body" ? ae(t) : vt.createElementNS(this.SVG_NS, t), this.renderer = e, this.styles = {}, B(this, "afterInit");
			}
			on(e, t) {
				let { onEvents: n } = this;
				return n[e] && n[e](), n[e] = M(this.element, e, t), this;
			}
			opacitySetter(e, t, n) {
				let r = Number(Number(e).toFixed(3));
				this.opacity = r, n.setAttribute(t, r);
			}
			reAlign() {
				this.alignOptions?.width && this.alignOptions.align !== "left" && (this.alignOptions.width = this.getBBox().width, this.placed = !1, this.align());
			}
			removeClass(e) {
				return this.attr("class", ("" + this.attr("class")).replace(H(e) ? RegExp(`(^| )${e}( |$)`) : e, " ").replace(/ +/g, " ").trim());
			}
			removeTextOutline() {
				let e = this.element.querySelector("tspan.highcharts-text-outline");
				e && this.safeRemoveChild(e);
			}
			safeRemoveChild(e) {
				let t = e.parentNode;
				t && t.removeChild(e);
			}
			setRadialReference(e) {
				let t = this.element.gradient && this.renderer.gradients[this.element.gradient] || void 0;
				return this.element.radialReference = e, t?.radAttr && t.animate(this.renderer.getRadialAttr(e, t.radAttr)), this;
			}
			shadow(e) {
				let { renderer: t } = this, n = G(this.parentGroup?.rotation === 90 ? {
					offsetX: -1,
					offsetY: -1
				} : {}, W(e) ? e : {}), r = t.shadowDefinition(n);
				return this.attr({ filter: e ? `url(${t.url}#${r})` : "none" });
			}
			show(e = !0) {
				return this.attr({ visibility: e ? "inherit" : "visible" });
			}
			"stroke-widthSetter"(e, t, n) {
				this[t] = e, n.setAttribute(t, e);
			}
			strokeWidth() {
				if (!this.renderer.styledMode) return this["stroke-width"] || 0;
				let e = this.getStyle("stroke-width"), t = 0, n;
				return /px$/.test(e) ? t = J(e) : e !== "" && (ie(n = vt.createElementNS(bt, "rect"), {
					width: e,
					"stroke-width": 0
				}), this.element.parentNode.appendChild(n), t = n.getBBox().width, n.parentNode.removeChild(n)), t;
			}
			symbolAttr(e) {
				let t = this;
				Ct.symbolCustomAttribs.forEach(function(n) {
					t[n] = q(e[n], t[n]);
				}), t.attr({ d: t.renderer.symbols[t.symbolName](t.x, t.y, t.width, t.height, t) });
			}
			textSetter(e) {
				e !== this.textStr && (delete this.textPxLength, this.textStr = e, this.added && this.renderer.buildText(this), this.reAlign());
			}
			titleSetter(e) {
				let t = this.element, n = t.getElementsByTagName("title")[0] || vt.createElementNS(this.SVG_NS, "title");
				t.insertBefore ? t.insertBefore(n, t.firstChild) : t.appendChild(n), n.textContent = Ee(q(e, ""), [/<[^>]*>/g, ""]).replace(/&lt;/g, "<").replace(/&gt;/g, ">");
			}
			toFront() {
				let e = this.element;
				return e.parentNode.appendChild(e), this;
			}
			translate(e, t) {
				return this.attr({
					translateX: e,
					translateY: t
				});
			}
			updateTransform(e = "transform") {
				let { element: t, foreignObject: n, matrix: r, rotation: i = 0, rotationOriginX: a, rotationOriginY: o, scaleX: s, scaleY: c, text: l, translateX: u = 0, translateY: d = 0 } = this, f = [`translate(${u},${d})`];
				L(r) && f.push("matrix(" + r.join(",") + ")"), i && f.push("rotate(" + i + " " + (a ?? t.getAttribute("x") ?? this.x ?? 0) + " " + (o ?? t.getAttribute("y") ?? this.y ?? 0) + ")"), (L(s) || L(c)) && f.push(`scale(${s ?? 1} ${c ?? 1})`), f.length && !(l || this).textPath && (n?.element || t).setAttribute(e, f.join(" "));
			}
			visibilitySetter(e, t, n) {
				e === "inherit" ? n.removeAttribute(t) : this[t] !== e && n.setAttribute(t, e), this[t] = e;
			}
			xGetter(e) {
				return this.element.nodeName === "circle" && (e === "x" ? e = "cx" : e === "y" && (e = "cy")), this._defaultGetter(e);
			}
			zIndexSetter(e, t) {
				let { element: n, parentGroup: r, renderer: i } = this, a = r?.element || i.box, o = a === i.box, s, c, l, u = !1, d, f = this.added, p;
				if (L(e) ? (n.setAttribute("data-z-index", e), e *= 1, this[t] === e && (f = !1)) : L(this[t]) && n.removeAttribute("data-z-index"), this[t] = e, f) {
					for ((e = this.zIndex) && r && (r.handleZ = !0), p = (s = a.childNodes).length - 1; p >= 0 && !u; p--) d = !L(l = (c = s[p]).getAttribute("data-z-index")), c !== n && (L(e) && e < 0 && d && !o && !p ? (a.insertBefore(n, s[p]), u = !0) : (L(e) && parseFloat(l || "") <= e || d && (!L(e) || e >= 0)) && (a.insertBefore(n, s[p + 1]), u = !0));
					u ||= (a.insertBefore(n, s[3 * !!o]), !0);
				}
				return u;
			}
		}
		Ct.symbolCustomAttribs = [
			"anchorX",
			"anchorY",
			"clockwise",
			"end",
			"height",
			"innerR",
			"r",
			"start",
			"width",
			"x",
			"y"
		], Ct.prototype.strokeSetter = Ct.prototype.fillSetter, Ct.prototype.yGetter = Ct.prototype.xGetter, Ct.prototype.matrixSetter = Ct.prototype.rotationOriginXSetter = Ct.prototype.rotationOriginYSetter = Ct.prototype.rotationSetter = Ct.prototype.scaleXSetter = Ct.prototype.scaleYSetter = Ct.prototype.translateXSetter = Ct.prototype.translateYSetter = Ct.prototype.verticalAlignSetter = function(e, t) {
			this[t] = e, this.doTransform = !0;
		};
		let wt = Ct, { charts: Tt } = j, Et = [
			"#2caffe",
			"#544fc5",
			"#00e272",
			"#fe6a35",
			"#6b8abc",
			"#d568fb",
			"#2ee0ca",
			"#fa4b42",
			"#feb56a",
			"#91e8e1"
		], Dt = [
			null,
			"#00e272",
			"#efdf00"
		];
		class Ot {
			constructor(e, t) {
				this.defaultOptions = ee, this.options = G(ee), this.cssVars = {
					light: {},
					dark: {}
				}, this.renderer = e, this.update(t);
			}
			injectCSS(e) {
				let t, n, r, { cssVars: i, renderer: a } = this, o = Object.keys(ce(e, this.defaultOptions)).length > 0, s = Math.max(e.colors?.length || 0, Et.length), c = "light", l = (e, t) => {
					H(e) && (t = t.replace(/([0-9]+)/g, "-$1").replace(/[A-Z]/g, (e) => `-${e.toLowerCase()}`), i[c][`--highcharts-${t}`] = e);
				};
				for (let t of ["light", "dark"]) {
					let n = e[t] || {}, r = {}, a = new Z(n?.neutralColor || ""), o = new Z(n?.backgroundColor || ""), u = new Z(n?.highlightColor || "");
					c = t, [
						3,
						5,
						10,
						20,
						40,
						60,
						80,
						100
					].forEach((e) => {
						r[`neutralColor${e}`] = o.tweenTo(a, e / 100), r[`highlightColor${e}`] = o.tweenTo(u, e / 100);
					});
					for (let r = 0; r < s; r++) l(n?.colors?.[r] || e.colors?.[r] || (t === "dark" ? Dt : [])?.[r] || Et[r] || "#888a", `color${r}`);
					K(n, l), K(r, l), t === "light" && z(i.dark, i.light);
				}
				let u = a.defs.element, d = o ? `*[data-highcharts-chart="${a.chartIndex}"]` : "", f = u.querySelector("style.highcharts-palette") || a.box.ownerDocument.createElement("style");
				f.parentNode || (f.nonce = "highcharts", f.className = "highcharts-palette", u.appendChild(f)), n = (t = (e) => {
					let t = "";
					return K(i.light, (n, r) => {
						t += e && n !== i.dark[r] ? `  ${r}: light-dark(${n}, ${i.dark[r]});
` : `  ${r}: ${n};
`;
					}), t;
				})(), r = t(!0), f.textContent = `${d || ":root"} {
${n}
}
@supports (color: light-dark(#fff, #000)) {
  ${d || ":root"} {
${r}
  }
}
.highcharts-container {
  color-scheme: light dark;
}
.highcharts-light .highcharts-container {
  color-scheme: light;
}
.highcharts-dark .highcharts-container {
  color-scheme: dark;
}`;
			}
			update(e) {
				let t = this.renderer.box.parentElement, n = Tt?.[this.renderer.chartIndex];
				e = G(!0, this.options, e), n && (n.options.palette = e), !1 !== e.injectCSS && this.injectCSS(e), t && (H(e.colorScheme) && [
					"light",
					"dark",
					"inherit"
				].includes(e.colorScheme) ? t.style.colorScheme = e.colorScheme : t.style.removeProperty("color-scheme"));
			}
		}
		class kt extends wt {
			constructor(e, t, n, r, i, a, o, s, c, l) {
				let u;
				super(e, "g"), this.paddingLeftSetter = this.paddingSetter, this.paddingRightSetter = this.paddingSetter, this.doUpdate = !1, this.textStr = t, this.x = n, this.y = r, this.anchorX = a, this.anchorY = o, this.baseline = c, this.className = l, this.addClass(l === "button" ? "highcharts-no-tooltip" : "highcharts-label"), l && this.addClass("highcharts-" + l), this.text = e.text(void 0, 0, 0, s).attr({ zIndex: 1 }), typeof i == "string" && ((u = /^url\((.*?)\)$/.test(i)) || this.renderer.symbols[i]) && (this.symbolKey = i), this.bBox = kt.emptyBBox, this.padding = 3, this.baselineOffset = 0, this.needsBox = e.styledMode || u, this.deferredAttr = {}, this.alignFactor = 0;
			}
			alignSetter(e) {
				let t = de(e);
				this.textAlign = e, t !== this.alignFactor && (this.alignFactor = t, this.bBox && V(this.xSetting) && this.attr({ x: this.xSetting }), this.updateTextPadding());
			}
			anchorXSetter(e, t) {
				this.anchorX = e, this.boxAttr(t, Math.round(e) - this.getCrispAdjust() - this.xSetting);
			}
			anchorYSetter(e, t) {
				this.anchorY = e, this.boxAttr(t, e - this.ySetting);
			}
			boxAttr(e, t) {
				this.box ? this.box.attr(e, t) : this.deferredAttr[e] = t;
			}
			css(e) {
				if (e) {
					let t = {};
					e = G(e), kt.textProps.forEach((n) => {
						e[n] !== void 0 && (t[n] = e[n], delete e[n]);
					}), this.text.css(t), "fontSize" in t || "fontWeight" in t || "width" in t ? this.updateTextPadding() : "textOverflow" in t && this.updateBoxSize(), "color" in t && this.updateBackground();
				}
				return wt.prototype.css.call(this, e);
			}
			destroy() {
				De(this.element, "mouseenter"), De(this.element, "mouseleave"), this.text && this.text.destroy(), this.box &&= this.box.destroy(), wt.prototype.destroy.call(this);
			}
			fillSetter(e, t) {
				e && (this.needsBox = !0), this.fill = e, this.boxAttr(t, e);
			}
			getBBox(e, t) {
				(this.textStr && this.bBox.width === 0 && this.bBox.height === 0 || this.rotation) && this.updateBoxSize();
				let { padding: n, height: r = 0, translateX: i = 0, translateY: a = 0, width: o = 0 } = this, s = q(this.paddingLeft, n), c = t ?? (this.rotation || 0), l = {
					width: o,
					height: r,
					x: i + this.bBox.x - s,
					y: a + this.bBox.y - n + this.baselineOffset
				};
				return c && (l = this.getRotatedBox(l, c)), l;
			}
			getCrispAdjust() {
				return (this.renderer.styledMode && this.box ? this.box.strokeWidth() : this["stroke-width"] ? parseInt(this["stroke-width"], 10) : 0) % 2 / 2;
			}
			heightSetter(e) {
				this.heightSetting = e, this.doUpdate = !0;
			}
			afterSetters() {
				super.afterSetters(), this.doUpdate &&= (this.updateBoxSize(), !1), this.updateBackground();
			}
			onAdd() {
				this.text.add(this), this.attr({
					text: q(this.textStr, ""),
					x: this.x || 0,
					y: this.y || 0
				}), this.box && L(this.anchorX) && this.attr({
					anchorX: this.anchorX,
					anchorY: this.anchorY
				});
			}
			paddingSetter(e, t) {
				V(e) ? e !== this[t] && (this[t] = e, this.updateTextPadding()) : this[t] = void 0;
			}
			rSetter(e, t) {
				this.boxAttr(t, e);
			}
			strokeSetter(e, t) {
				this.stroke = e, this.boxAttr(t, e);
			}
			"stroke-widthSetter"(e, t) {
				e && (this.needsBox = !0), this["stroke-width"] = e, this.boxAttr(t, e);
			}
			"text-alignSetter"(e) {
				this.textAlign = this["text-align"] = e, this.updateTextPadding();
			}
			textSetter(e) {
				e !== void 0 && this.text.attr({ text: e }), this.updateTextPadding(), this.reAlign();
			}
			updateBackground() {
				this.fill === "contrast" && this.box?.attr({
					fill: this.renderer.getContrast(this.text.styles.color || "#000"),
					"fill-opacity": .65
				});
			}
			updateBoxSize() {
				let e, t = this.text, n = {}, r = this.padding, i = this.bBox = (!V(this.widthSetting) || !V(this.heightSetting) || this.textAlign) && L(t.textStr) ? t.getBBox(void 0, 0) : kt.emptyBBox;
				this.width = this.getPaddedWidth(), this.height = (this.heightSetting || i.height || 0) + 2 * r;
				let a = this.renderer.fontMetrics(t);
				if (this.baselineOffset = r + Math.min((this.text.firstLineMetrics || a).b, i.height || Infinity), this.heightSetting && (this.baselineOffset += (this.heightSetting - a.h) / 2), this.needsBox && !t.textPath) {
					if (!this.box) {
						let e = this.box = this.symbolKey ? this.renderer.symbol(this.symbolKey) : this.renderer.rect();
						e.addClass((this.className === "button" ? "" : "highcharts-label-box") + (this.className ? " highcharts-" + this.className + "-box" : "")), e.add(this);
					}
					n.x = e = this.getCrispAdjust(), n.y = (this.baseline ? -this.baselineOffset : 0) + e, n.width = Math.round(this.width), n.height = Math.round(this.height), this.box.attr(z(n, this.deferredAttr)), this.deferredAttr = {};
				}
			}
			updateTextPadding() {
				let e = this.text, t = e.styles.textAlign || this.textAlign;
				if (!e.textPath) {
					this.updateBoxSize();
					let n = this.baseline ? 0 : this.baselineOffset, r = (this.paddingLeft ?? this.padding) + de(t) * (this.widthSetting ?? this.bBox.width);
					(r !== e.x || n !== e.y) && (e.attr({
						align: t,
						x: r
					}), n !== void 0 && e.attr("y", n)), e.x = r, e.y = n;
				}
			}
			widthSetter(e) {
				this.widthSetting = V(e) ? e : void 0, this.doUpdate = !0;
			}
			getPaddedWidth() {
				let e = this.padding, t = q(this.paddingLeft, e), n = q(this.paddingRight, e);
				return (this.widthSetting || this.bBox.width || 0) + t + n;
			}
			xSetter(e) {
				this.x = e, this.alignFactor && (e -= this.alignFactor * this.getPaddedWidth(), this["forceAnimate:x"] = !0), this.anchorX && (this["forceAnimate:anchorX"] = !0), this.xSetting = Math.round(e), this.attr("translateX", this.xSetting);
			}
			ySetter(e) {
				this.anchorY && (this["forceAnimate:anchorY"] = !0), this.ySetting = this.y = Math.round(e), this.attr("translateY", this.ySetting);
			}
		}
		function At(e, t, n, r, i) {
			let a = [];
			if (i) {
				let o = i.start || 0, s = i.end || 0, c = q(i.r, n), l = q(i.r, r || n), u = 1e-4 > Math.abs(s - o - 2 * Math.PI);
				u && (o = Math.PI / 2, s = 2.5 * Math.PI - 1e-4);
				let d = i.innerR, f = q(i.open, u), p = u ? 0 : Math.cos(o), m = u ? 1 : Math.sin(o), h = u ? 0 : Math.cos(s), g = u ? 1 : Math.sin(s), _ = q(i.longArc, s - o - Math.PI < 1e-4 ? 0 : 1), v = [
					"A",
					c,
					l,
					0,
					_,
					q(i.clockwise, 1),
					e + (u ? .001 : c * h),
					t + l * g
				];
				v.params = {
					start: o,
					end: s,
					cx: e,
					cy: t
				}, a.push([
					"M",
					e + c * p,
					t + l * m
				], v), L(d) && ((v = [
					"A",
					d,
					d,
					0,
					_,
					L(i.clockwise) ? 1 - i.clockwise : 0,
					e + (u ? -.001 : d * p),
					t + d * m
				]).params = {
					start: s,
					end: o,
					cx: e,
					cy: t
				}, a.push(f ? [
					"M",
					e + d * h,
					t + d * g
				] : [
					"L",
					e + d * h,
					t + d * g
				], v)), f || a.push(["Z"]);
			}
			return a;
		}
		function jt(e, t, n, r, i) {
			return i?.r ? Mt(e, t, n, r, i) : [
				[
					"M",
					e,
					t
				],
				[
					"L",
					e + n,
					t
				],
				[
					"L",
					e + n,
					t + r
				],
				[
					"L",
					e,
					t + r
				],
				["Z"]
			];
		}
		function Mt(e, t, n, r, i) {
			let a = i?.r || 0;
			return [
				[
					"M",
					e + a,
					t
				],
				[
					"L",
					e + n - a,
					t
				],
				[
					"A",
					a,
					a,
					0,
					0,
					1,
					e + n,
					t + a
				],
				[
					"L",
					e + n,
					t + r - a
				],
				[
					"A",
					a,
					a,
					0,
					0,
					1,
					e + n - a,
					t + r
				],
				[
					"L",
					e + a,
					t + r
				],
				[
					"A",
					a,
					a,
					0,
					0,
					1,
					e,
					t + r - a
				],
				[
					"L",
					e,
					t + a
				],
				[
					"A",
					a,
					a,
					0,
					0,
					1,
					e + a,
					t
				],
				["Z"]
			];
		}
		kt.emptyBBox = {
			width: 0,
			height: 0,
			x: 0,
			y: 0
		}, kt.textProps = [
			"color",
			"direction",
			"fontFamily",
			"fontSize",
			"fontStyle",
			"fontWeight",
			"lineClamp",
			"lineHeight",
			"textAlign",
			"textDecoration",
			"textOutline",
			"textOverflow",
			"whiteSpace",
			"width"
		];
		let Nt = {
			arc: At,
			callout: function(e, t, n, r, i) {
				let a = Math.min(i?.r || 0, n, r), o = a + 6, s = i?.anchorX, c = i?.anchorY || 0, l = Mt(e, t, n, r, { r: a });
				if (!V(s) || s < n && s > 0 && c < r && c > 0) return l;
				if (e + s > n - o) if (c > t + o && c < t + r - o) l.splice(3, 1, [
					"L",
					e + n,
					c - 6
				], [
					"L",
					e + n + 6,
					c
				], [
					"L",
					e + n,
					c + 6
				], [
					"L",
					e + n,
					t + r - a
				]);
				else if (s < n) {
					let i = c < t + o, u = i ? t : t + r;
					l.splice(i ? 2 : 5, 0, [
						"L",
						s,
						c
					], [
						"L",
						e + n - a,
						u
					]);
				} else l.splice(3, 1, [
					"L",
					e + n,
					r / 2
				], [
					"L",
					s,
					c
				], [
					"L",
					e + n,
					r / 2
				], [
					"L",
					e + n,
					t + r - a
				]);
				else if (e + s < o) if (c > t + o && c < t + r - o) l.splice(7, 1, [
					"L",
					e,
					c + 6
				], [
					"L",
					e - 6,
					c
				], [
					"L",
					e,
					c - 6
				], [
					"L",
					e,
					t + a
				]);
				else if (s > 0) {
					let n = c < t + o, i = n ? t : t + r;
					l.splice(n ? 1 : 6, 0, [
						"L",
						s,
						c
					], [
						"L",
						e + a,
						i
					]);
				} else l.splice(7, 1, [
					"L",
					e,
					r / 2
				], [
					"L",
					s,
					c
				], [
					"L",
					e,
					r / 2
				], [
					"L",
					e,
					t + a
				]);
				else c > r && s < n - o ? l.splice(5, 1, [
					"L",
					s + 6,
					t + r
				], [
					"L",
					s,
					t + r + 6
				], [
					"L",
					s - 6,
					t + r
				], [
					"L",
					e + a,
					t + r
				]) : c < 0 && s > o && l.splice(1, 1, [
					"L",
					s - 6,
					t
				], [
					"L",
					s,
					t - 6
				], [
					"L",
					s + 6,
					t
				], [
					"L",
					n - a,
					t
				]);
				return l;
			},
			circle: function(e, t, n, r) {
				return At(e + n / 2, t + r / 2, n / 2, r / 2, {
					start: .5 * Math.PI,
					end: 2.5 * Math.PI,
					open: !1
				});
			},
			diamond: function(e, t, n, r) {
				return [
					[
						"M",
						e + n / 2,
						t
					],
					[
						"L",
						e + n,
						t + r / 2
					],
					[
						"L",
						e + n / 2,
						t + r
					],
					[
						"L",
						e,
						t + r / 2
					],
					["Z"]
				];
			},
			rect: jt,
			roundedRect: Mt,
			square: jt,
			triangle: function(e, t, n, r) {
				return [
					[
						"M",
						e + n / 2,
						t
					],
					[
						"L",
						e + n,
						t + r
					],
					[
						"L",
						e,
						t + r
					],
					["Z"]
				];
			},
			"triangle-down": function(e, t, n, r) {
				return [
					[
						"M",
						e,
						t
					],
					[
						"L",
						e + n,
						t
					],
					[
						"L",
						e + n / 2,
						t + r
					],
					["Z"]
				];
			}
		}, { doc: Pt, SVG_NS: Ft, win: It } = j, Lt = (e, t) => e.substring(0, t) + "…", Rt = class {
			constructor(e) {
				let t = e.styles;
				this.renderer = e.renderer, this.svgElement = e, this.width = e.textWidth, this.textLineHeight = t?.lineHeight, this.textOutline = t?.textOutline, this.ellipsis = t?.textOverflow === "ellipsis", this.lineClamp = t?.lineClamp, this.noWrap = t?.whiteSpace === "nowrap";
			}
			buildSVG() {
				let e = this.svgElement, t = e.element, n = e.renderer, r = q(e.textStr, "").toString(), i = r.indexOf("<") !== -1, a = t.childNodes, o = !e.added && n.box, s = [
					r,
					this.ellipsis,
					this.noWrap,
					this.textLineHeight,
					this.textOutline,
					e.getStyle("font-size"),
					e.styles.lineClamp,
					this.width
				].join(",");
				if (s !== e.textCache) {
					e.textCache = s, delete e.actualWidth;
					for (let e = a.length; e--;) t.removeChild(a[e]);
					if (i || this.ellipsis || this.width || e.textPath || r.indexOf(" ") !== -1 && (!this.noWrap || /<br.*?>/g.test(r))) {
						if (r !== "") {
							o && o.appendChild(t);
							let n = new Q(r);
							this.modifyTree(n.nodes), n.addToDOM(t), this.modifyDOM(), this.ellipsis && (t.textContent || "").indexOf("…") !== -1 && e.attr("title", this.unescapeEntities(e.textStr || "", ["&lt;", "&gt;"])), o && o.removeChild(t);
						}
					} else t.appendChild(Pt.createTextNode(this.unescapeEntities(r)));
					H(this.textOutline) && e.applyTextOutline && e.applyTextOutline(this.textOutline);
				}
			}
			modifyDOM() {
				let e, t = this.svgElement, n = ie(t.element, "x");
				for (t.firstLineMetrics = void 0; (e = t.element.firstChild) && /^[\s\u200B]*$/.test(e.textContent || " ");) t.element.removeChild(e);
				[].forEach.call(t.element.querySelectorAll("tspan.highcharts-br"), (e, r) => {
					e.nextSibling && e.previousSibling && (r === 0 && e.previousSibling.nodeType === 1 && (t.firstLineMetrics = t.renderer.fontMetrics(e.previousSibling)), ie(e, {
						dy: this.getLineHeight(e.nextSibling),
						x: n
					}));
				});
				let r = this.width || 0;
				if (!r) return;
				let i = (e, i) => {
					let a = e.textContent || "", o = a.replace(/([^\^])-/g, "$1- ").split(" "), s = !this.noWrap && (o.length > 1 || t.element.childNodes.length > 1), c = this.getLineHeight(i), l = Math.max(0, r - .8 * c), u = 0, d = t.actualWidth;
					if (s) {
						let a = [], s = [];
						for (; i.firstChild && i.firstChild !== e;) s.push(i.firstChild), i.removeChild(i.firstChild);
						for (; o.length;) if (o.length && !this.noWrap && u > 0 && (a.push(e.textContent || ""), e.textContent = o.join(" ").replace(/- /g, "-")), this.truncate(e, void 0, o, u === 0 && d || 0, r, l, (e, t) => o.slice(0, t).join(" ").replace(/- /g, "-")), d = t.actualWidth, u++, this.lineClamp && u >= this.lineClamp) {
							o.length && (this.truncate(e, e.textContent || "", void 0, 0, r, l, Lt), e.textContent = e.textContent?.replace("…", "") + "…");
							break;
						}
						s.forEach((t) => {
							i.insertBefore(t, e);
						}), a.forEach((t) => {
							i.insertBefore(Pt.createTextNode(t), e);
							let r = Pt.createElementNS(Ft, "tspan");
							r.textContent = "​", ie(r, {
								dy: c,
								x: n
							}), i.insertBefore(r, e);
						});
					} else this.ellipsis && a && this.truncate(e, a, void 0, 0, r, l, Lt);
				}, a = (e) => {
					[].slice.call(e.childNodes).forEach((n) => {
						n.nodeType === It.Node.TEXT_NODE ? i(n, e) : (n.className.baseVal.indexOf("highcharts-br") !== -1 && (t.actualWidth = 0), a(n));
					});
				};
				a(t.element);
			}
			getLineHeight(e) {
				let t = e.nodeType === It.Node.TEXT_NODE ? e.parentElement : e;
				return this.textLineHeight ? parseInt(this.textLineHeight.toString(), 10) : this.renderer.fontMetrics(t || this.svgElement.element).h;
			}
			modifyTree(e) {
				let t = (n, r) => {
					let { attributes: i = {}, children: a, style: o = {}, tagName: s } = n, c = this.renderer.styledMode;
					if (s === "b" || s === "strong" ? c ? i.class = "highcharts-strong" : o.fontWeight = "bold" : (s === "i" || s === "em") && (c ? i.class = "highcharts-emphasized" : o.fontStyle = "italic"), o?.color && (o.fill = o.color), s === "br") {
						i.class = "highcharts-br", n.textContent = "​";
						let t = e[r + 1];
						t?.textContent && (t.textContent = t.textContent.replace(/^ +/gm, ""));
					} else s === "a" && a && a.some((e) => e.tagName === "#text") && (n.children = [{
						children: a,
						tagName: "tspan"
					}]);
					s !== "#text" && s !== "a" && (n.tagName = "tspan"), z(n, {
						attributes: i,
						style: o
					}), a && a.filter((e) => e.tagName !== "#text").forEach(t);
				};
				e.forEach(t), B(this.svgElement, "afterModifyTree", { nodes: e });
			}
			truncate(e, t, n, r, i, a, o) {
				let s, c, l = this.svgElement, { rotation: u } = l, d = [], f = n && !r ? 1 : 0, p = (t || n || "").length, m = p;
				n || (i = a);
				let h = function(t, i) {
					let a = i || t, o = e.parentNode;
					if (o && d[a] === void 0 && o.getSubStringLength) try {
						d[a] = r + o.getSubStringLength(0, n ? a + 1 : a);
					} catch {}
					return d[a];
				};
				if (l.rotation = 0, r + (c = h(e.textContent.length)) > i) {
					for (; f <= p;) m = Math.ceil((f + p) / 2), n && (s = o(n, m)), c = h(m, s && s.length - 1), f === p ? f = p + 1 : c > i ? p = m - 1 : f = m;
					p === 0 ? e.textContent = "" : t && p === t.length - 1 || (e.textContent = s || o(t || n, m)), this.ellipsis && c > i && this.truncate(e, e.textContent || "", void 0, 0, i, a, Lt);
				}
				n && n.splice(0, m), l.actualWidth = c, l.rotation = u;
			}
			unescapeEntities(e, t) {
				return K(this.renderer.escapes, function(n, r) {
					t && t.indexOf(n) !== -1 || (e = e.toString().replace(RegExp(n, "g"), r));
				}), e;
			}
		}, { defaultOptions: zt } = We, { charts: Bt, deg2rad: Vt, doc: Ht, isFirefox: Ut, isMS: Wt, isWebKit: Gt, noop: Kt, SVG_NS: qt, symbolSizes: Jt, win: Yt } = j;
		class Xt {
			constructor(e, t, n, r, i, a, o, s, c) {
				let l, u;
				this.x = 0, this.y = 0;
				let d = this.createElement("svg").attr({
					version: "1.1",
					class: "highcharts-root"
				}), f = d.element;
				e.appendChild(f), ie(e, "dir", "ltr"), e.innerHTML.indexOf("xmlns") === -1 && ie(f, "xmlns", this.SVG_NS), this.box = f, this.boxWrapper = d, this.alignedObjects = [], this.url = this.getReferenceURL(), this.createElement("desc").add().element.appendChild(Ht.createTextNode("Created with Highcharts 13.0.0")), this.defs = this.createElement("defs").add(), this.allowHTML = a, this.forExport = i, this.styledMode = o, this.chartIndex = c || 0, this.gradients = {}, this.cache = {}, this.cacheKeys = [], this.asyncCounter = 0, this.rootFontSize = d.getStyle("font-size"), this.setSize(t, n, !1), o || (d.css(this.getStyle(r || {})), this.palette = new Ot(this, s || zt.palette)), Ut && e.getBoundingClientRect && ((l = function() {
					I(e, {
						left: 0,
						top: 0
					}), u = e.getBoundingClientRect(), I(e, {
						left: Math.ceil(u.left) - u.left + "px",
						top: Math.ceil(u.top) - u.top + "px"
					});
				})(), this.unSubPixelFix = M(Yt, "resize", l));
			}
			definition(e) {
				return new Q([e]).addToDOM(this.defs.element);
			}
			getReferenceURL() {
				if ((Ut || Gt) && Ht.getElementsByTagName("base").length) {
					if (!L(t)) {
						let e = Fe(), n = new Q([{
							tagName: "svg",
							attributes: {
								width: 8,
								height: 8
							},
							children: [{
								tagName: "defs",
								children: [{
									tagName: "clipPath",
									attributes: { id: e },
									children: [{
										tagName: "rect",
										attributes: {
											width: 4,
											height: 4
										}
									}]
								}]
							}, {
								tagName: "rect",
								attributes: {
									id: "hitme",
									width: 8,
									height: 8,
									"clip-path": `url(#${e})`,
									fill: "rgba(0,0,0,0.001)"
								}
							}]
						}]).addToDOM(Ht.body);
						I(n, {
							position: "fixed",
							top: 0,
							left: 0,
							zIndex: 9e5
						}), t = Ht.elementFromPoint(6, 6)?.id === "hitme", Ht.body.removeChild(n);
					}
					if (t) return Ee(Yt.location.href.split("#")[0], [/<[^>]*>/g, ""], [/([\('\)])/g, "\\$1"], [/ /g, "%20"]);
				}
				return "";
			}
			getStyle(e) {
				return this.style = z({
					fontFamily: "-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", sans-serif",
					fontSize: "1rem"
				}, e), this.style;
			}
			setStyle(e) {
				this.boxWrapper.css(this.getStyle(e));
			}
			isHidden() {
				return !this.boxWrapper.getBBox().width;
			}
			destroy() {
				let e = this.defs;
				return this.box = null, this.boxWrapper = this.boxWrapper.destroy(), R(this.gradients || {}), this.gradients = null, this.defs = e.destroy(), this.unSubPixelFix && this.unSubPixelFix(), this.alignedObjects.length = 0, null;
			}
			createElement(e) {
				return new this.Element(this, e);
			}
			getRadialAttr(e, t) {
				return {
					cx: e[0] - e[2] / 2 + (t.cx || 0) * e[2],
					cy: e[1] - e[2] / 2 + (t.cy || 0) * e[2],
					r: (t.r || 0) * e[2]
				};
			}
			shadowDefinition(e) {
				let t = [`highcharts-drop-shadow-${this.chartIndex}`, ...Object.keys(e).map((t) => `${t}-${e[t]}`)].join("-").toLowerCase().replace(/[^a-z\d\-]/g, ""), n = G({
					color: "#000000",
					offsetX: 0,
					offsetY: 2,
					opacity: .05,
					width: 6
				}, e);
				return this.defs.element.querySelector(`#${t}`) || this.definition({
					tagName: "filter",
					attributes: {
						id: t,
						filterUnits: n.filterUnits
					},
					children: this.getShadowFilterContent(n)
				}), t;
			}
			getShadowFilterContent(e) {
				return [{
					tagName: "feDropShadow",
					attributes: {
						dx: e.offsetX,
						dy: e.offsetY,
						"flood-color": e.color,
						"flood-opacity": Math.min(5 * e.opacity, 1),
						stdDeviation: e.width / 2
					}
				}];
			}
			buildText(e) {
				new Rt(e).buildSVG();
			}
			getContrast(e) {
				if (e === "transparent") return "#000000";
				let t = Z.parse(e).rgba;
				if (V(t[0]) || !Z.useColorMix) {
					let e = t.map((e) => {
						let t = e / 255;
						return t <= .04 ? t / 12.92 : ((t + .055) / 1.055) ** 2.4;
					}), n = .2126 * e[0] + .7152 * e[1] + .0722 * e[2];
					return 1.05 / (n + .05) > (n + .05) / .05 ? "#FFFFFF" : "#000000";
				}
				return "color(from " + e + " srgb clamp(0,calc(9e9*(0.5 - (0.2126*r + 0.7152*g + 0.0722*b))),1) clamp(0,calc(9e9*(0.5 - (0.2126*r + 0.7152*g + 0.0722*b))),1) clamp(0,calc(9e9*(0.5 - (0.2126*r + 0.7152*g + 0.0722*b))),1))";
			}
			button(e, t, n, r, i = {}, a, o, s, c, l) {
				let u = this.label(e, t, n, c, void 0, void 0, l, void 0, "button"), d = this.styledMode, f = arguments, p = 0;
				i = G(zt.global.buttonTheme, i), d && (delete i.fill, delete i.stroke, delete i["stroke-width"]);
				let m = i.states || {}, h = i.style || {};
				delete i.states, delete i.style;
				let g = [Q.filterUserAttributes(i)], _ = [h];
				return d || [
					"hover",
					"select",
					"disabled"
				].forEach((e, t) => {
					g.push(G(g[0], Q.filterUserAttributes(f[t + 5] || m[e] || {}))), _.push(g[t + 1].style), delete g[t + 1].style;
				}), M(u.element, Wt ? "mouseover" : "mouseenter", function() {
					p !== 3 && u.setState(1);
				}), M(u.element, Wt ? "mouseout" : "mouseleave", function() {
					p !== 3 && u.setState(p);
				}), u.setState = (e = 0) => {
					if (e !== 1 && (u.state = p = e), u.removeClass(/highcharts-button-(normal|hover|pressed|disabled)/).addClass("highcharts-button-" + [
						"normal",
						"hover",
						"pressed",
						"disabled"
					][e]), !d) {
						u.attr(g[e]);
						let t = _[e];
						W(t) && u.css(t);
					}
				}, u.attr(g[0]), !d && (u.css(z({ cursor: "default" }, h)), l && u.text.css({ pointerEvents: "none" })), u.on("touchstart", (e) => e.stopPropagation()).on("click", function(e) {
					p !== 3 && r?.call(u, e);
				});
			}
			crispLine(e, t) {
				let [n, r] = e;
				return L(n[1]) && n[1] === r[1] && (n[1] = r[1] = oe(n[1], t)), L(n[2]) && n[2] === r[2] && (n[2] = r[2] = oe(n[2], t)), e;
			}
			path(e) {
				let t = this.styledMode ? {} : { fill: "none" };
				return U(e) ? t.d = e : W(e) && z(t, e), this.createElement("path").attr(t);
			}
			circle(e, t, n) {
				let r = W(e) ? e : e === void 0 ? {} : {
					x: e,
					y: t,
					r: n
				}, i = this.createElement("circle");
				return i.xSetter = i.ySetter = function(e, t, n) {
					n.setAttribute("c" + t, e);
				}, i.attr(r);
			}
			arc(e, t, n, r, i, a) {
				let o;
				W(e) ? (t = (o = e).y, n = o.r, r = o.innerR, i = o.start, a = o.end, e = o.x) : o = {
					innerR: r,
					start: i,
					end: a
				};
				let s = this.symbol("arc", e, t, n, n, o);
				return s.r = n, s;
			}
			rect(e, t, n, r, i, a) {
				let o = W(e) ? e : e === void 0 ? {} : {
					x: e,
					y: t,
					r: i,
					width: Math.max(n || 0, 0),
					height: Math.max(r || 0, 0)
				}, s = this.createElement("rect");
				return this.styledMode || (a !== void 0 && (o["stroke-width"] = a, z(o, s.crisp(o))), o.fill = "none"), s.rSetter = function(e, t, n) {
					s.r = e, ie(n, {
						rx: e,
						ry: e
					});
				}, s.rGetter = function() {
					return s.r || 0;
				}, s.attr(o);
			}
			roundedRect(e) {
				return this.symbol("roundedRect").attr(e);
			}
			setSize(e, t, n) {
				this.width = e, this.height = t, this.boxWrapper.animate({
					width: e,
					height: t
				}, {
					step: function() {
						this.attr({ viewBox: "0 0 " + this.attr("width") + " " + this.attr("height") });
					},
					duration: q(n, !0) ? void 0 : 0
				}), this.alignElements();
			}
			g(e) {
				let t = this.createElement("g");
				return e ? t.attr({ class: "highcharts-" + e }) : t;
			}
			image(e, t, n, r, i, a) {
				let o = { preserveAspectRatio: "none" };
				V(t) && (o.x = t), V(n) && (o.y = n), V(r) && (o.width = r), V(i) && (o.height = i);
				let s = this.createElement("image").attr(o), c = function(t) {
					s.attr({ href: e }), a.call(s, t);
				};
				if (a) {
					s.attr({ href: "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" });
					let t = new Yt.Image();
					M(t, "load", c), t.src = e, t.complete && c({});
				} else s.attr({ href: e });
				return s;
			}
			symbol(e, t, n, r, i, a) {
				let o, s, c, l, u = this, d = /^url\((.*?)\)$/, f = d.test(e), p = !f && (this.symbols[e] ? e : "circle"), m = p && this.symbols[p];
				if (m) typeof t == "number" && (s = m.call(this.symbols, t || 0, n || 0, r || 0, i || 0, a)), o = this.path(s), u.styledMode || o.attr("fill", "none"), z(o, {
					symbolName: p || void 0,
					x: t,
					y: n,
					width: r,
					height: i
				}), a && z(o, a);
				else if (f) {
					c = e.match(d)[1];
					let r = o = this.image(c);
					r.imgwidth = q(a?.width, Jt[c]?.width), r.imgheight = q(a?.height, Jt[c]?.height), l = (e) => e.attr({
						width: e.width,
						height: e.height
					}), ["width", "height"].forEach((e) => {
						r[`${e}Setter`] = function(e, t) {
							this[t] = e;
							let { alignByTranslate: n, element: r, width: i, height: o, imgwidth: s, imgheight: c } = this, l = t === "width" ? s : c, u = 1;
							a && a.backgroundSize === "within" && i && o && s && c ? (u = Math.min(i / s, o / c), ie(r, {
								width: Math.round(s * u),
								height: Math.round(c * u)
							})) : r && l && r.setAttribute(t, l), !n && s && c && this.translate(((i || 0) - s * u) / 2, ((o || 0) - c * u) / 2);
						};
					}), L(t) && r.attr({
						x: t,
						y: n
					}), r.isImg = !0, L(r.imgwidth) && L(r.imgheight) ? l(r) : (r.attr({
						width: 0,
						height: 0
					}), ae("img", {
						onload: function() {
							let e = Bt[u.chartIndex];
							this.width === 0 && (I(this, {
								position: "absolute",
								top: "-999em"
							}), Ht.body.appendChild(this)), Jt[c] = {
								width: this.width,
								height: this.height
							}, r.imgwidth = this.width, r.imgheight = this.height, r.element && l(r), this.parentNode && this.parentNode.removeChild(this), u.asyncCounter--, u.asyncCounter || !e || e.hasLoaded || e.onload();
						},
						src: c
					}), this.asyncCounter++);
				}
				return o;
			}
			clipRect(e, t, n, r) {
				return this.rect(e, t, n, r, 0);
			}
			text(e, t, n, r) {
				let i = {};
				if (r && (this.allowHTML || !this.forExport)) return this.html(e, t, n);
				i.x = Math.round(t || 0), n && (i.y = Math.round(n)), L(e) && (i.text = e);
				let a = this.createElement("text").attr(i);
				return r && (!this.forExport || this.allowHTML) || (a.xSetter = function(e, t, n) {
					let r = n.getElementsByTagName("tspan"), i = n.getAttribute(t);
					for (let n = 0, a; n < r.length; n++) (a = r[n]).getAttribute(t) === i && a.setAttribute(t, e);
					n.setAttribute(t, e);
				}), a;
			}
			fontMetrics(e) {
				let t = V(e) ? e : J(wt.prototype.getStyle.call(e, "font-size") || 0), n = t < 24 ? t + 3 : Math.round(1.2 * t);
				return {
					h: n,
					b: Math.round(.8 * n),
					f: t
				};
			}
			rotCorr(e, t, n) {
				let r = e;
				return t && n && (r = Math.max(r * Math.cos(t * Vt), 4)), {
					x: -e / 3 * Math.sin(t * Vt),
					y: r
				};
			}
			pathToSegments(e) {
				let t = [], n = [], r = {
					A: 8,
					C: 7,
					H: 2,
					L: 3,
					M: 3,
					Q: 5,
					S: 5,
					T: 3,
					V: 2
				};
				for (let i = 0; i < e.length; i++) H(n[0]) && V(e[i]) && n.length === r[n[0].toUpperCase()] && e.splice(i, 0, n[0].replace("M", "L").replace("m", "l")), typeof e[i] == "string" && (n.length && t.push(n.slice(0)), n.length = 0), n.push(e[i]);
				return t.push(n.slice(0)), t;
			}
			label(e, t, n, r, i, a, o, s, c) {
				return new kt(this, e, t, n, r, i, a, o, s, c);
			}
			alignElements() {
				this.alignedObjects.forEach((e) => e.align());
			}
		}
		z(Xt.prototype, {
			Element: wt,
			SVG_NS: qt,
			escapes: {
				"&": "&amp;",
				"<": "&lt;",
				">": "&gt;",
				"'": "&#39;",
				"\"": "&quot;"
			},
			symbols: Nt,
			draw: Kt
		}), j.Renderer = Xt;
		let { composed: Zt, isFirefox: Qt } = j;
		class $t extends wt {
			static compose(e) {
				we(Zt, "HTMLElement") && (e.prototype.html = function(e, t, n) {
					return new $t(this, "div").attr({
						text: e,
						x: Math.round(t),
						y: Math.round(n)
					});
				});
			}
			constructor(e, t) {
				super(e, t), this.foreignObject = e.createElement("foreignObject").attr({ zIndex: 2 }), this.element.style.whiteSpace = "nowrap";
			}
			getSpanCorrection(e, t, n) {
				this.xCorr = -e * n, this.yCorr = -t;
			}
			css(e) {
				let t, { element: n } = this, r = e && "width" in e, i = r && e.width;
				return r && (delete e.width, this.textWidth = J(i) || void 0, t = !0), e?.textOverflow === "ellipsis" && (e.overflow = "hidden", e.whiteSpace = "nowrap"), e?.lineClamp ? (e.display = "-webkit-box", e.WebkitLineClamp = e.lineClamp, e.WebkitBoxOrient = "vertical", e.overflow = "hidden") : e?.lineClamp === 0 && (e.display = "inline-block"), V(Number(e?.fontSize)) && (e.fontSize += "px"), z(this.styles, e), I(n, e), t && this.updateTransform(), this;
			}
			htmlGetBBox() {
				let { element: e } = this;
				return {
					x: e.offsetLeft,
					y: e.offsetTop,
					width: e.offsetWidth,
					height: e.offsetHeight
				};
			}
			updateTransform() {
				let e;
				if (!this.added) {
					this.alignOnAdd = !0;
					return;
				}
				let { element: t, foreignObject: n, oldTextWidth: r, renderer: i, rotation: a, scaleX: o, styles: { display: s = "inline-block", whiteSpace: c }, textAlign: l = "left", textWidth: u, x: d = 0, y: f = 0 } = this, p = () => this.textPxLength ? this.textPxLength : (I(t, {
					width: "",
					whiteSpace: c || "nowrap"
				}), t.offsetWidth), m = [
					a,
					l,
					t.innerHTML,
					u,
					this.textAlign
				].join(",");
				if (I(t, {
					display: "inline-block",
					verticalAlign: "top"
				}), u !== r) {
					let e = p(), n = u || 0, l = !i.styledMode && t.style.textOverflow === "" && t.style.webkitLineClamp;
					(n > r || e > n || l) && (/[\-\s\u00AD]/.test(t.textContent || t.innerText) || t.style.textOverflow === "ellipsis") && (I(t, {
						width: (a || o || e > n) && V(u) ? u + "px" : l ? Math.min(e + 1, n) + "px" : "auto",
						display: s,
						whiteSpace: c || "normal"
					}), this.oldTextWidth = u);
				}
				n.attr({
					width: i.width,
					height: i.height
				}), m !== this.cTT && (e = i.fontMetrics(t).b, this.getSpanCorrection(!L(a) && !this.textWidth && this.textPxLength || t.offsetWidth, e, de(l))), super.updateTransform(), V(d) && V(f) ? (n.attr({
					x: d + (this.xCorr || 0),
					y: f + (this.yCorr || 0),
					width: t.offsetWidth + 4,
					height: t.offsetHeight + 1,
					"transform-origin": t.getAttribute("transform-origin") || "0 0"
				}), I(t, {
					display: s,
					textAlign: l
				})) : Qt && n.attr({
					width: 0,
					height: 0
				}), this.cTT = m;
			}
			add(e) {
				let { foreignObject: t, renderer: n } = this;
				return t.add(e), super.add(n.createElement("body").attr({ xmlns: "http://www.w3.org/1999/xhtml" }).css({
					background: "transparent",
					margin: "0 3px 0 0"
				}).add(t)), this.alignOnAdd && this.updateTransform(), this;
			}
			textSetter(e) {
				e !== this.textStr && (delete this.oldTextWidth, Q.setElementHTML(this.element, e ?? ""), this.textStr = e, this.doTransform = !0);
			}
			alignSetter(e) {
				this.alignValue = this.textAlign = e, this.doTransform = !0;
			}
			xSetter(e, t) {
				this[t] = e, this.doTransform = !0;
			}
		}
		let en = $t.prototype;
		en.ySetter = en.xSetter, (o = h ||= {}).xAxis = {
			alignTicks: !0,
			allowDecimals: void 0,
			panningEnabled: !0,
			zIndex: 2,
			zoomEnabled: !0,
			dateTimeLabelFormats: {
				millisecond: {
					main: "%[HMSL]",
					range: !1
				},
				second: {
					main: "%[HMS]",
					range: !1
				},
				minute: {
					main: "%[HM]",
					range: !1
				},
				hour: {
					main: "%[HM]",
					boundary: void 0,
					range: !1
				},
				day: {
					main: "%[eb]",
					boundary: "%[eb]"
				},
				week: { main: "%[eb]" },
				month: {
					main: "%[bY]",
					boundary: void 0
				},
				year: {
					main: "%[Y]",
					boundary: void 0
				}
			},
			endOnTick: !1,
			gridLineDashStyle: "Solid",
			gridZIndex: 1,
			labels: {
				autoRotationLimit: 80,
				distance: 15,
				enabled: !0,
				indentation: 10,
				overflow: "justify",
				reserveSpace: void 0,
				rotation: void 0,
				staggerLines: 0,
				step: 0,
				useHTML: !1,
				zIndex: 7,
				style: {
					color: "var(--highcharts-neutral-color-80)",
					cursor: "default",
					fontSize: "0.8em",
					textOverflow: "ellipsis"
				}
			},
			maxPadding: .01,
			minorGridLineDashStyle: "Solid",
			minorTickLength: 2,
			minorTickPosition: "outside",
			minorTicksPerMajor: 5,
			minPadding: .01,
			offset: void 0,
			reversed: void 0,
			reversedStacks: !1,
			showEmpty: !0,
			showFirstLabel: !0,
			showLastLabel: !0,
			startOfWeek: 1,
			startOnTick: !1,
			tickLength: 10,
			tickmarkPlacement: "between",
			tickPixelInterval: 100,
			tickPosition: "outside",
			title: {
				align: "middle",
				useHTML: !1,
				x: 0,
				y: 0,
				style: {
					color: "var(--highcharts-neutral-color-60)",
					fontSize: "0.8em"
				}
			},
			visible: !0,
			minorGridLineColor: "var(--highcharts-neutral-color-5)",
			minorGridLineWidth: 1,
			minorTickColor: "var(--highcharts-neutral-color-40)",
			lineColor: "var(--highcharts-neutral-color-80)",
			lineWidth: 1,
			gridLineColor: "var(--highcharts-neutral-color-10)",
			gridLineWidth: void 0,
			tickColor: "var(--highcharts-neutral-color-80)"
		}, o.yAxis = {
			reversedStacks: !0,
			endOnTick: !0,
			maxPadding: .05,
			minPadding: .05,
			tickPixelInterval: 72,
			showLastLabel: !0,
			labels: { x: void 0 },
			startOnTick: !0,
			title: {},
			stackLabels: {
				animation: {},
				allowOverlap: !1,
				enabled: !1,
				crop: !0,
				overflow: "justify",
				formatter: function() {
					return this.axis.chart.numberFormatter(this.total || 0, -1);
				},
				style: {
					color: "var(--highcharts-neutral-color-100)",
					fontSize: "0.7em",
					fontWeight: "bold",
					textOutline: "1px contrast"
				}
			},
			gridLineWidth: 1,
			lineWidth: 0
		};
		let tn = h;
		(g ||= {}).registerEventOptions = function(e, t) {
			e.eventOptions = e.eventOptions || {}, K(t.events, function(t, n) {
				e.eventOptions[n] !== t && (e.eventOptions[n] && (De(e, n, e.eventOptions[n]), delete e.eventOptions[n]), be(t) && (e.eventOptions[n] = t, M(e, n, t, { order: 0 })));
			});
		};
		let nn = g, { deg2rad: rn } = j, an = class {
			constructor(e, t, n, r, i) {
				this.isNew = !0, this.isNewLabel = !0, this.axis = e, this.pos = t, this.type = n || "", this.parameters = i || {}, this.tickmarkOffset = this.parameters.tickmarkOffset, this.options = this.parameters.options, B(this, "init"), n || r || this.addLabel();
			}
			addLabel() {
				let e = this, t = e.axis, n = t.options, r = t.chart, i = t.categories, a = t.logarithmic, o = t.names, s = e.pos, c = q(e.options?.labels, n.labels), l = t.tickPositions, u = s === l[0], d = s === l[l.length - 1], f = l.info, p = f?.boundaryTicks[s], m = n.dateTimeLabelFormats, h = e.label, g, _, v, y = this.parameters.category || (i ? q(i[s], o[s], s) : s);
				if (a && V(y) && (y = F(a.lin2log(y))), t.dateTime && m) if (f) {
					let e = f.unitName, t = {
						millisecond: "hour",
						second: "hour",
						minute: "hour",
						hour: "day",
						day: "month",
						week: "month",
						month: "year",
						year: "year"
					}[e], i = !n.grid?.enabled && p && t && m[t]?.boundary || m[e];
					g = (_ = r.time.resolveDTLFormat(i)).main;
				} else V(y) && (g = t.dateTime.getXDateFormat(y, m || {}));
				e.isFirst = u, e.isLast = d, e.boundary = p;
				let b = {
					axis: t,
					chart: r,
					dateTimeLabelFormat: g,
					boundary: p,
					isFirst: u,
					isLast: d,
					pos: s,
					tick: e,
					tickPositionInfo: f,
					value: y
				};
				B(this, "labelFormat", b);
				let x = (e) => c.formatter ? c.formatter.call(e, e) : c.format ? (e.text = t.defaultLabelFormatter.call(e), ft.format(c.format, e, r)) : t.defaultLabelFormatter.call(e), S = x.call(b, b), C = _?.list;
				C ? e.shortenLabel = function() {
					for (v = 0; v < C.length; v++) if (z(b, { dateTimeLabelFormat: C[v] }), h.attr({ text: x.call(b, b) }), h.getBBox().width < t.getSlotWidth(e) - 2 * (c.padding || 0)) return;
					h.attr({ text: "" });
				} : e.shortenLabel = void 0, h ? h.textStr !== S && (!h.textWidth || c.style.width || h.styles.width || h.css({ width: void 0 }), h.attr({ text: S }), h.textPxLength = h.getBBox().width) : (e.label = h = e.createLabel(S, c), e.rotation = 0);
			}
			createLabel(e, t, n) {
				let r = this.axis, { renderer: i, styledMode: a } = r.chart, o = t.style.whiteSpace, s = L(e) && t.enabled ? i.text(e, n?.x, n?.y, t.useHTML).add(r.labelGroup) : void 0;
				return s && (a || s.css(G(t.style)), s.textPxLength = s.getBBox().width, !a && o && s.css({ whiteSpace: o })), s;
			}
			destroy() {
				R(this, this.axis);
			}
			getPosition(e, t, n, r) {
				let i = this.axis, a = i.chart, o = r && a.oldChartHeight || a.chartHeight, s = {
					x: e ? F(i.translate(t + n, void 0, void 0, r) + i.transB) : i.left + i.offset + (i.opposite ? (r && a.oldChartWidth || a.chartWidth) - i.right - i.left : 0),
					y: e ? o - i.bottom + i.offset - (i.opposite ? i.height : 0) : F(o - i.translate(t + n, void 0, void 0, r) - i.transB)
				};
				return s.y = P(s.y, -1e9, 1e9), B(this, "afterGetPosition", { pos: s }), s;
			}
			getLabelPosition(e, t, n, r, i, a, o, s) {
				let c, l, u = this.axis, d = u.transA, f = u.isLinked && u.linkedParent ? u.linkedParent.reversed : u.reversed, p = u.staggerLines, m = u.tickRotCorr || {
					x: 0,
					y: 0
				}, h = r || u.reserveSpaceDefault ? 0 : -u.labelOffset * (u.labelAlign === "center" ? .5 : 1), g = i.distance, _ = {};
				return c = u.side === 0 ? n.rotation ? -g : -n.getBBox().height : u.side === 2 ? m.y + g : Math.cos(n.rotation * rn) * (m.y - n.getBBox(!1, 0).height / 2), L(i.y) && (c = u.side === 0 && u.horiz ? i.y + c : i.y), e = e + q(i.x, [
					0,
					1,
					0,
					-1
				][u.side] * g) + h + m.x - (a && r ? a * d * (f ? -1 : 1) : 0), t = t + c - (a && !r ? a * d * (f ? 1 : -1) : 0), p && (l = o / (s || 1) % p, u.opposite && (l = p - l - 1), t += l * (u.labelOffset / p)), _.x = e, _.y = Math.round(t), B(this, "afterGetLabelPosition", {
					pos: _,
					tickmarkOffset: a,
					index: o
				}), _;
			}
			getLabelSize() {
				return this.label ? this.label.getBBox()[this.axis.horiz ? "height" : "width"] : 0;
			}
			getMarkPath(e, t, n, r, i = !1, a) {
				return a.crispLine([[
					"M",
					e,
					t
				], [
					"L",
					e + (i ? 0 : -n),
					t + (i ? n : 0)
				]], r);
			}
			handleOverflow(e) {
				let t = this.axis, n = t.options.labels, r = e.x, i = t.chart.chartWidth, a = t.chart.spacing, o = q(t.labelLeft, Math.min(t.pos, a[3])), s = q(t.labelRight, Math.max(t.isRadial ? 0 : t.pos + t.len, i - a[1])), c = this.label, l = this.rotation, u = de(t.labelAlign || c.attr("align")), d = c.getBBox().width, f = t.getSlotWidth(this), p = f, m = 1, h;
				l || n.overflow !== "justify" ? l < 0 && r - u * d < o ? h = Math.round(r / Math.cos(l * rn) - o) : l > 0 && r + u * d > s && (h = Math.round((i - r) / Math.cos(l * rn))) : (r - u * d < o ? p = e.x + p * (1 - u) - o : r + (1 - u) * d > s && (p = s - e.x + p * u, m = -1), (p = Math.min(f, p)) < f && t.labelAlign === "center" && (e.x += m * (f - p - u * (f - Math.min(d, p)))), (d > p || t.autoRotation && c?.styles?.width) && (h = p)), h && c && (this.shortenLabel ? this.shortenLabel() : c.css(z({}, {
					width: Math.floor(h) + "px",
					lineClamp: +!t.isRadial
				})));
			}
			render(e, t, n) {
				let r = this.axis, i = r.horiz, a = this.pos, o = q(this.tickmarkOffset, r.tickmarkOffset), s = this.getPosition(i, a, o, t), c = s.x, l = s.y, u = r.pos, d = u + r.len, f = i ? c : l, p = q(n, this.label?.newOpacity, 1);
				!r.chart.polar && (F(f) < u || f > d) && (n = 0), n ??= 1, this.isActive = !0, this.renderGridLine(t, n), this.renderMark(s, n), this.renderLabel(s, t, p, e), this.isNew = !1, B(this, "afterRender");
			}
			renderGridLine(e, t) {
				let n = this.axis, r = n.options, i = {}, a = this.pos, o = this.type, s = q(this.tickmarkOffset, n.tickmarkOffset), c = n.chart.renderer, l = this.gridLine, u, d = r.gridLineWidth, f = r.gridLineColor, p = r.gridLineDashStyle;
				this.type === "minor" && (d = r.minorGridLineWidth, f = r.minorGridLineColor, p = r.minorGridLineDashStyle), l || (n.chart.styledMode || (i.stroke = f, i["stroke-width"] = d || 0, i.dashstyle = p), o || (i.zIndex = 1), e && (t = 0), this.gridLine = l = c.path().attr(i).addClass("highcharts-" + (o ? o + "-" : "") + "grid-line").add(n.gridGroup)), l && (u = n.getPlotLinePath({
					value: a + s,
					lineWidth: l.strokeWidth(),
					force: "pass",
					old: e,
					acrossPanes: !1
				})) && l[e || this.isNew ? "attr" : "animate"]({
					d: u,
					opacity: t
				});
			}
			renderMark(e, t) {
				let n = this.axis, r = n.options, i = n.chart.renderer, a = this.type, o = n.tickSize(a ? a + "Tick" : "tick"), s = e.x, c = e.y, l = q(r[a === "minor" ? "minorTickWidth" : "tickWidth"], !a && n.isXAxis ? 1 : 0), u = r[a === "minor" ? "minorTickColor" : "tickColor"], d = this.mark, f = !d;
				o && (n.opposite && (o[0] = -o[0]), !d && (this.mark = d = i.path().addClass("highcharts-" + (a ? a + "-" : "") + "tick").add(n.axisGroup), n.chart.styledMode || d.attr({
					stroke: u,
					"stroke-width": l
				})), d[f ? "attr" : "animate"]({
					d: this.getMarkPath(s, c, o[0], d.strokeWidth(), n.horiz, i),
					opacity: t
				}));
			}
			renderLabel(e, t, n, r) {
				let i = this.axis, a = i.horiz, o = i.options, s = this.label, c = o.labels, l = c.step, u = q(this.tickmarkOffset, i.tickmarkOffset), d = e.x, f = e.y, p = !0;
				s && V(d) && (s.xy = e = this.getLabelPosition(d, f, s, a, c, u, r, l), (!this.isFirst || this.isLast || o.showFirstLabel) && (!this.isLast || this.isFirst || o.showLastLabel) ? a && !t && n !== 0 && this.handleOverflow(e) : p = !1, l && r % l && (p = !1), p && V(e.y) ? (e.opacity = n, s[this.isNewLabel ? "attr" : "animate"](e).show(!0), this.isNewLabel = !1) : (s.hide(), this.isNewLabel = !0));
			}
		}, { animObject: on } = $e, { xAxis: sn, yAxis: cn } = tn, { parse: ln } = Z, { defaultOptions: un } = We, { registerEventOptions: dn } = nn, { deg2rad: fn } = j, pn = (e, t) => xe(t, void 0, void 0, q(e.options.allowDecimals, t < .5 || e.tickAmount !== void 0), !!e.tickAmount);
		z(un, {
			xAxis: sn,
			yAxis: G(sn, cn)
		});
		class mn {
			constructor(e, t, n) {
				this.clippable = !0, this.init(e, t, n);
			}
			init(e, t, n = this.coll) {
				let r = n === "xAxis", i = this.isZAxis || (e.inverted ? !r : r);
				this.chart = e, this.horiz = i, this.isXAxis = r, this.coll = n, B(this, "init", { userOptions: t }), this.opposite = q(t.opposite, this.opposite), this.side = q(t.side, this.side, i ? 2 * !this.opposite : this.opposite ? 1 : 3), this.setOptions(t);
				let a = this.options, o = a.labels;
				this.type ??= a.type || "linear", this.uniqueNames ??= a.uniqueNames ?? !0, B(this, "afterSetType"), this.userOptions = t, this.minPixelPadding = 0, this.reversed = q(a.reversed, this.reversed), this.visible = a.visible, this.zoomEnabled = a.zoomEnabled, this.hasNames = this.type === "category" || !0 === a.categories, this.categories = U(a.categories) && a.categories || (this.hasNames ? [] : void 0), this.names ||= [], this.namesMap ||= {}, this.plotLinesAndBandsGroups = {}, this.positiveValuesOnly = !!this.logarithmic, this.isLinked = L(a.linkedTo), this.ticks = {}, this.labelEdge = [], this.minorTicks = {}, this.plotLinesAndBands = [], this.alternateBands = {}, this.len ??= 0, this.minRange = this.userMinRange = a.minRange || a.maxZoom, this.range = a.range, this.max = void 0, this.min = void 0;
				let s = q(a.crosshair, Oe(e.options.tooltip.crosshairs)[+!r]);
				this.crosshair = !0 === s ? {} : s, e.axes.indexOf(this) === -1 && (r ? e.axes.splice(e.xAxis.length, 0, this) : e.axes.push(this), Pe(this, e[this.coll])), e.orderItems(this.coll), this.series = this.series || [], e.inverted && !this.isZAxis && r && !L(this.reversed) && (this.reversed = !0), this.labelRotation = V(o.rotation) ? o.rotation : void 0, dn(this, a), B(this, "afterInit");
			}
			setOptions(e) {
				let t = this.horiz ? {
					labels: {
						autoRotation: [-45],
						padding: 3
					},
					margin: 15
				} : {
					labels: { padding: 1 },
					title: { rotation: 90 * this.side }
				};
				this.options = G(t, this.coll === "yAxis" ? { title: { text: this.chart.options.lang.yAxisTitle } } : {}, un[this.coll], e), B(this, "afterSetOptions", { userOptions: e });
			}
			defaultLabelFormatter() {
				let e = this.axis, t = this.chart, { numberFormatter: n } = t, r = V(this.value) ? this.value : NaN, i = e.chart.time, a = e.categories, o = this.dateTimeLabelFormat, s = un.lang, c = s.numericSymbols, l = s.numericSymbolMagnitude || 1e3, u = e.logarithmic ? Math.abs(r) : e.tickInterval, d = c?.length, f, p;
				if (a) p = `${this.value}`;
				else if (o) p = i.dateFormat(o, r, !0);
				else if (d && c && u >= 1e3) for (; d-- && p === void 0;) u >= (f = l ** +(d + 1)) && 10 * r % f == 0 && c[d] !== null && r !== 0 && (p = n(r / f, -1, void 0, void 0, t) + c[d]);
				return p ??= n(r, -1, void 0, 1e4 > Math.abs(r) ? "" : void 0, t), p;
			}
			getSeriesExtremes() {
				let e, t = this;
				B(this, "getSeriesExtremes", null, function() {
					t.hasVisibleSeries = !1, t.dataMin = t.dataMax = t.threshold = void 0, t.softThreshold = !t.isXAxis, t.series.forEach((n) => {
						if (n.reserveSpace()) {
							let r = n.options, i, a = r.threshold, o, s;
							if (t.hasVisibleSeries = !0, t.positiveValuesOnly && 0 >= (a || 0) && (a = void 0), t.isXAxis) (i = n.getColumn("x")).length && (i = t.logarithmic ? i.filter((e) => e > 0) : i, o = (e = n.getXExtremes(i)).min, s = e.max, V(o) || o instanceof Date || (i = i.filter(V), o = (e = n.getXExtremes(i)).min, s = e.max), i.length && (t.dataMin = Math.min(q(t.dataMin, o), o), t.dataMax = Math.max(q(t.dataMax, s), s)));
							else {
								let e = n.applyExtremes();
								V(e.dataMin) && (o = e.dataMin, t.dataMin = Math.min(q(t.dataMin, o), o)), V(e.dataMax) && (s = e.dataMax, t.dataMax = Math.max(q(t.dataMax, s), s)), L(a) && (t.threshold = a), (!r.softThreshold || t.positiveValuesOnly) && (t.softThreshold = !1);
							}
						}
					});
				}), B(this, "afterGetSeriesExtremes");
			}
			translate(e, t, n, r, i, a) {
				let o = this.linkedParent || this, s = r && o.old ? o.old.min : o.min;
				if (!V(s)) return NaN;
				let c = o.minPixelPadding, l = (o.isOrdinal || o.brokenAxis?.hasBreaks || o.logarithmic && i) && !!o.lin2val, u = 1, d = 0, f = r && o.old ? o.old.transA : o.transA, p = 0;
				return f ||= o.transA, n && (u *= -1, d = o.len), o.reversed && (u *= -1, d -= u * (o.sector || o.len)), t ? (p = (e = e * u + d - c) / f + s, l && (p = o.lin2val(p))) : (l && (e = o.val2lin(e)), p = u * (e - s) * f + d + u * c + (V(a) ? f * a : 0), o.isRadial || (p = F(p))), p;
			}
			toPixels(e, t) {
				return this.translate(this.chart?.time.parse(e) ?? NaN, !1, !this.horiz, void 0, !0) + (t ? 0 : this.pos);
			}
			toValue(e, t) {
				return this.translate(e - (t ? 0 : this.pos), !0, !this.horiz, void 0, !0);
			}
			getPlotLinePath(e) {
				let t = this, n = t.chart, r = t.left, i = t.top, a = e.old, o = e.value, s = e.lineWidth, c = a && n.oldChartHeight || n.chartHeight, l = a && n.oldChartWidth || n.chartWidth, u = t.transB, d = e.translatedValue, f = e.force, p, m, h, g, _;
				function v(e, t, n) {
					return f !== "pass" && (e < t || e > n) && (f ? e = P(e, t, n) : _ = !0), e;
				}
				let y = {
					value: o,
					lineWidth: s,
					old: a,
					force: f,
					acrossPanes: e.acrossPanes,
					translatedValue: d
				};
				return B(this, "getPlotLinePath", y, function(e) {
					p = h = (d = P(d = q(d, t.translate(o, void 0, void 0, a)), -1e9, 1e9)) + u, m = g = c - d - u, V(d) ? t.horiz ? (m = i, g = c - t.bottom + (t.options.isInternal ? 0 : n.scrollablePixelsY || 0), p = h = v(p, r, r + t.width)) : (p = r, h = l - t.right + (n.scrollablePixelsX || 0), m = g = v(m, i, i + t.height)) : (_ = !0, f = !1), e.path = _ && !f ? void 0 : n.renderer.crispLine([[
						"M",
						p,
						m
					], [
						"L",
						h,
						g
					]], s || 1);
				}), y.path;
			}
			getLinearTickPositions(e, t, n) {
				let r, i, a, o = F(Math.floor(t / e) * e), s = F(Math.ceil(n / e) * e), c = [];
				if (F(o + e) === o && (a = 20), this.single) return [t];
				for (r = o; r <= s && (c.push(r), (r = F(r + e, a)) !== i);) i = r;
				return c;
			}
			getMinorTickInterval() {
				let { minorTicks: e, minorTickInterval: t } = this.options;
				return !0 === e ? q(t, "auto") : !1 === e ? void 0 : t;
			}
			getMinorTickPositions() {
				let e = this.options, t = this.tickPositions, n = this.minorTickInterval, r = this.pointRangePadding || 0, i = (this.min || 0) - r, a = (this.max || 0) + r, o = this.brokenAxis?.hasBreaks ? this.brokenAxis.unitLength : a - i, s = [], c;
				if (o && o / n < this.len / 3) {
					let r = this.logarithmic;
					if (r) this.paddedTicks.forEach(function(e, t, i) {
						t && s.push.apply(s, r.getLogTickPositions(n, i[t - 1], i[t], !0));
					});
					else if (this.dateTime && this.getMinorTickInterval() === "auto") s = s.concat(this.getTimeTicks(this.dateTime.normalizeTimeTickInterval(n), i, a, e.startOfWeek));
					else for (c = i + (t[0] - i) % n; c <= a && c !== s[0]; c += n) s.push(c);
				}
				return s.length !== 0 && this.trimTicks(s), s;
			}
			adjustForMinRange() {
				let e = this.options, t = this.logarithmic, n = this.chart.time, { max: r, min: i, minRange: a } = this, o, s, c, l;
				this.isXAxis && a === void 0 && !t && (a = L(e.min) || L(e.max) || L(e.floor) || L(e.ceiling) ? null : Math.min(5 * (fe(this.series.map((e) => {
					let t = e.getColumn("x");
					return e.xIncrement ? t.slice(0, 2) : t;
				})) || 0), this.dataMax - this.dataMin)), V(r) && V(i) && V(a) && r - i < a && (s = this.dataMax - this.dataMin >= a, o = (a - r + i) / 2, c = [i - o, n.parse(e.min) ?? i - o], s && (c[2] = t ? t.log2lin(this.dataMin) : this.dataMin), l = [(i = N(c)) + a, n.parse(e.max) ?? i + a], s && (l[2] = t ? t.log2lin(this.dataMax) : this.dataMax), (r = re(l)) - i < a && (c[0] = r - a, c[1] = n.parse(e.min) ?? r - a, i = N(c))), this.minRange = a, this.min = i, this.max = r;
			}
			getClosest() {
				let e, t;
				if (this.categories) t = 1;
				else {
					let n = [];
					this.series.forEach(function(e) {
						let r = e.closestPointRange, i = e.getColumn("x");
						i.length === 1 ? n.push(i[0]) : e.sorted && L(r) && e.reserveSpace() && (t = L(t) ? Math.min(t, r) : r);
					}), n.length && (n.sort((e, t) => e - t), e = fe([n]));
				}
				return e && t ? Math.min(e, t) : e || t;
			}
			nameToX(e, t) {
				let n, r = U(this.options.categories), { name: i, series: a } = e, o = r ? this.categories : this.names, s = this.namesMap;
				return a.requireSorting = !1, L(t) || (t = this.uniqueNames && o ? r ? o.indexOf(i) : s[i] ?? -1 : a.autoIncrement()), t === -1 ? !r && o && (n = o.length) : V(t) && (n = t), n === void 0 ? n = V(e.x) ? e.x : a.autoIncrement() : (this.names[n] = e.name, s[e.name] = n), n;
			}
			updateNames() {
				let e = this, { names: t, namesMap: n } = this;
				t.length > 0 && (Object.keys(n).forEach(function(e) {
					delete n[e];
				}), t.length = 0, this.minRange = this.userMinRange, (this.series || []).forEach((t) => {
					if (t.xIncrement = null, delete t.xColumn, !t.points || t.isDirtyData) e.max = Math.max(e.max || 0, t.dataTable.rowCount - 1), t.processData(), t.generatePoints();
					else {
						let e = t.getColumn("x");
						t.points?.forEach((t) => {
							t.x = e[t.index];
						});
					}
				}));
			}
			setAxisTranslation() {
				let e = this, t = e.max - e.min, n = e.linkedParent, r = !!e.categories, i = e.isXAxis, a = e.axisPointRange || 0, o, s = 0, c = 0, l, u = e.transA;
				(i || r || a) && (o = e.getClosest(), n ? (s = n.minPointOffset, c = n.pointRangePadding) : e.series.forEach(function(t) {
					let n = r ? 1 : i ? q(t.options.pointRange, o, 0) : e.axisPointRange || 0, l = t.options.pointPlacement;
					if (a = Math.max(a, n), !e.single || r) {
						let e = t.is("xrange") ? !i : i;
						s = Math.max(s, e && H(l) ? 0 : n / 2), c = Math.max(c, e && l === "on" ? 0 : n);
					}
				}), l = e.ordinal?.slope && o ? e.ordinal.slope / o : 1, e.minPointOffset = s *= l, e.pointRangePadding = c *= l, e.pointRange = Math.min(a, e.single && r ? 1 : t), i && (e.closestPointRange = o)), e.translationSlope = e.transA = u = e.staticScale || e.len / (t + c || 1), e.transB = e.horiz ? e.left : e.bottom, e.minPixelPadding = u * s, B(this, "afterSetAxisTranslation");
			}
			minFromRange() {
				let { max: e, min: t } = this;
				return V(e) && V(t) && e - t || void 0;
			}
			setTickInterval(e) {
				let { categories: t, chart: n, dataMax: r, dataMin: i, dateTime: a, isXAxis: o, logarithmic: s, options: c, softThreshold: l } = this, u = n.time, d = V(this.threshold) ? this.threshold : void 0, f = this.minRange || 0, { ceiling: p, floor: m, linkedTo: h, softMax: g, softMin: _ } = c, v = V(h) && n[this.coll]?.[h], y = c.tickPixelInterval, b = c.maxPadding, x = c.minPadding, S = 0, C, w = V(c.tickInterval) && c.tickInterval >= 0 ? c.tickInterval : void 0, T, E, D, O;
				if (a || t || v || this.getTickAmount(), D = q(this.userMin, u.parse(c.min)), O = q(this.userMax, u.parse(c.max)), v ? (this.linkedParent = v, C = v.getExtremes(), this.min = q(C.min, C.dataMin), this.max = q(C.max, C.dataMax), this.type !== v.type && Y(11, !0, n)) : (l && L(d) && V(r) && V(i) && (i >= d ? (T = d, x = 0) : r <= d && (E = d, b = 0)), this.min = q(D, T, i), this.max = q(O, E, r)), V(this.max) && V(this.min) && (s && (this.positiveValuesOnly && !e && 0 >= Math.min(this.min, q(i, this.min)) && Y(10, !0, n), this.min = F(s.log2lin(this.min), 16), this.max = F(s.log2lin(this.max), 16)), this.range && V(i) && (this.userMin = this.min = D = Math.max(i, this.minFromRange() || 0), this.userMax = O = this.max, this.range = void 0)), B(this, "foundExtremes"), this.adjustForMinRange(), V(this.min) && V(this.max)) {
					if (!V(this.userMin) && V(_) && _ < this.min && (this.min = D = _), !V(this.userMax) && V(g) && g > this.max && (this.max = O = g), t || this.axisPointRange || this.stacking?.usePercentage || v || (S = this.max - this.min) && (!L(D) && x && (this.min -= S * x), !L(O) && b && (this.max += S * b)), !V(this.userMin) && V(m) && (this.min = Math.max(this.min, m)), !V(this.userMax) && V(p) && (this.max = Math.min(this.max, p)), l && V(i) && V(r)) {
						let e = d || 0;
						!L(D) && this.min < e && i >= e ? this.min = c.minRange ? Math.min(e, this.max - f) : e : !L(O) && this.max > e && r <= e && (this.max = c.minRange ? Math.max(e, this.min + f) : e);
					}
					!n.polar && this.min > this.max && (L(c.min) ? this.max = this.min : L(c.max) && (this.min = this.max)), S = this.max - this.min;
				}
				if (this.min !== this.max && V(this.min) && V(this.max) ? v && !w && y === v.options.tickPixelInterval ? this.tickInterval = w = v.tickInterval : this.tickInterval = q(w, this.tickAmount ? S / Math.max(this.tickAmount - 1, 1) : void 0, t ? 1 : S * y / Math.max(this.len, y)) : this.tickInterval = 1, o && !e) {
					let e = this.min !== this.old?.min || this.max !== this.old?.max;
					this.series.forEach(function(t) {
						t.forceCrop = t.forceCropping?.(), t.processData(e);
					}), B(this, "postProcessData", { hasExtremesChanged: e });
				}
				this.setAxisTranslation(), B(this, "initialAxisTranslation"), this.pointRange && !w && (this.tickInterval = Math.max(this.pointRange, this.tickInterval));
				let k = q(c.minTickInterval, a && !this.series.some((e) => !e.sorted) ? this.closestPointRange : 0);
				!w && k && this.tickInterval < k && (this.tickInterval = k), a || s || w || (this.tickInterval = pn(this, this.tickInterval)), this.tickAmount || (this.tickInterval = this.unsquish()), this.setTickPositions();
			}
			setTickPositions() {
				let e = this.options, t = e.tickPositions, n = e.tickPositioner, r = this.getMinorTickInterval(), i = !this.isPanning, a = i && e.startOnTick, o = i && e.endOnTick, s = [], c;
				if (this.tickmarkOffset = this.categories && e.tickmarkPlacement === "between" && this.tickInterval === 1 ? .5 : 0, this.single = this.min === this.max && L(this.min) && !this.tickAmount && (this.min % 1 == 0 || !1 !== e.allowDecimals), t) s = t.slice();
				else if (V(this.min) && V(this.max)) {
					if (!this.ordinal?.positions && (this.max - this.min) / this.tickInterval > Math.max(2 * this.len, 200)) s = [this.min, this.max], Y(19, !1, this.chart);
					else if (this.dateTime) s = this.getTimeTicks(this.dateTime.normalizeTimeTickInterval(this.tickInterval, e.units), this.min, this.max, e.startOfWeek, this.ordinal?.positions, this.closestPointRange, !0);
					else if (this.logarithmic) s = this.logarithmic.getLogTickPositions(this.tickInterval, this.min, this.max);
					else {
						let e = this.tickInterval, t = e;
						for (; t <= 2 * e && (s = this.getLinearTickPositions(this.tickInterval, this.min, this.max), this.tickAmount && s.length > this.tickAmount);) this.tickInterval = pn(this, t *= 1.1);
					}
					s.length > this.len && (s = [s[0], s[s.length - 1]])[0] === s[1] && (s.length = 1), n && (this.tickPositions = s, (c = n.apply(this, [
						this.min,
						this.max,
						this
					])) && (s = c));
				}
				this.isDirty || s.length === this.tickPositions?.length || (this.isDirty = !0), this.tickPositions = s, this.minorTickInterval = r === "auto" && this.tickInterval ? this.tickInterval / e.minorTicksPerMajor : r, this.paddedTicks = s.slice(0), this.trimTicks(s, a, o), !this.isLinked && V(this.min) && V(this.max) && (this.single && s.length < 2 && !this.categories && !this.series.some((e) => e.is("heatmap") && e.options.pointPlacement === "between") && (this.min -= .5, this.max += .5), t || c || this.adjustTickAmount()), B(this, "afterSetTickPositions");
			}
			trimTicks(e, t, n) {
				let r = e[0], i = e[e.length - 1], a = !this.isOrdinal && this.minPointOffset || 0;
				if (B(this, "trimTicks"), !this.isLinked || !this.grid) {
					if (t && V(r)) this.min = r;
					else if (e.length) for (; this.min - a > e[0];) e.shift();
					if (n && V(i)) this.max = i;
					else for (; this.max + a < e[e.length - 1];) e.pop();
					e.length === 0 && L(r) && !this.options.tickPositions && e.push((i + r) / 2);
				}
			}
			alignToOthers() {
				let e, t = this, n = t.chart, r = [this], i = t.options, a = n.options.chart, o = this.coll === "yAxis" && a.alignThresholds, s = [];
				if (t.thresholdAlignment = void 0, (!1 !== a.alignTicks && i.alignTicks || o) && !1 !== i.startOnTick && !1 !== i.endOnTick && !t.logarithmic) {
					let i = (e) => {
						let { horiz: t, options: n } = e;
						return [
							t ? n.left : n.top,
							n.width,
							n.height,
							n.pane
						].join(",");
					}, a = i(this);
					n[this.coll].forEach(function(n) {
						let { series: o } = n;
						o.length && o.some((e) => e.visible) && n !== t && i(n) === a && (e = !0, r.push(n));
					});
				}
				if (e && o) {
					r.forEach((e) => {
						let n = e.getThresholdAlignment(t);
						V(n) && s.push(n);
					});
					let e = s.length > 1 ? s.reduce((e, t) => e += t, 0) / s.length : void 0;
					r.forEach((t) => {
						t.thresholdAlignment = e;
					});
				}
				return e;
			}
			getThresholdAlignment(e) {
				if ((!V(this.dataMin) || this !== e && this.series.some((e) => e.isDirty || e.isDirtyData || e.xAxis?.isDirty)) && this.getSeriesExtremes(), V(this.threshold)) {
					let e = P((this.threshold - (this.dataMin || 0)) / ((this.dataMax || 0) - (this.dataMin || 0)), 0, 1);
					return this.options.reversed && (e = 1 - e), e;
				}
			}
			getTickAmount() {
				let e = this.options, t = e.tickPixelInterval, n = e.tickAmount;
				L(e.tickInterval) || n || !(this.len < t) || this.isRadial || this.logarithmic || !e.startOnTick || !e.endOnTick || (n = 2), !n && this.alignToOthers() && (n = Math.ceil(this.len / t) + 1), n < 4 && (this.finalTickAmt = n, n = 5), this.tickAmount = n;
			}
			adjustTickAmount() {
				let e = this, { finalTickAmt: t, max: n, min: r, options: i, tickPositions: a, tickAmount: o, thresholdAlignment: s } = e, c = a?.length, l = q(e.threshold, e.softThreshold ? 0 : null), u, d, f = e.tickInterval, p, m = () => a.push(F(a[a.length - 1] + f)), h = () => a.unshift(F(a[0] - f));
				if (V(s) && (p = s === 0 ? 0 : s === 1 ? o - 1 : Math.round(P(s * (o - 1), 1, o - 2)), i.reversed && (p = o - 1 - p)), e.hasData() && V(r) && V(n)) {
					let s = () => {
						e.transA *= (c - 1) / (o - 1), e.min = i.startOnTick ? a[0] : Math.min(r, a[0]), e.max = i.endOnTick ? a[a.length - 1] : Math.max(n, a[a.length - 1]);
					};
					if (V(p) && V(e.threshold)) {
						for (; a[p] !== l || a.length !== o || a[0] > r || a[a.length - 1] < n;) {
							for (a.length = 0, a.push(e.threshold); a.length < o;) a[p] === void 0 || a[p] > e.threshold ? h() : m();
							if (f > 8 * e.tickInterval) break;
							f *= 2;
						}
						s();
					} else if (c < o) {
						for (; a.length < o;) a.length % 2 || r === l ? m() : h();
						s();
					}
					if (L(t)) {
						for (d = u = a.length; d--;) (t === 3 && d % 2 == 1 || t <= 2 && d > 0 && d < u - 1) && a.splice(d, 1);
						e.finalTickAmt = void 0;
					}
				}
			}
			setScale() {
				let { coll: e, stacking: t } = this, n = !1, r = !1;
				this.series.forEach((e) => {
					n = n || e.isDirtyData || e.isDirty, r = r || e.xAxis?.isDirty || !1;
				}), this.setAxisSize();
				let i = this.len !== this.old?.len;
				i || n || r || this.isLinked || this.forceRedraw || this.userMin !== this.old?.userMin || this.userMax !== this.old?.userMax || this.alignToOthers() ? (t && e === "yAxis" && t.buildStacks(), this.forceRedraw = !1, this.userMinRange || (this.minRange = void 0), this.getSeriesExtremes(), this.setTickInterval(), t && e === "xAxis" && t.buildStacks(), this.isDirty ||= i || this.min !== this.old?.min || this.max !== this.old?.max) : t && t.cleanStacks(), n && delete this.allExtremes, B(this, "afterSetScale");
			}
			setExtremes(e, t, n = !0, r, i) {
				let a = this.chart;
				this.series.forEach((e) => {
					delete e.kdTree;
				}), e = a.time.parse(e), t = a.time.parse(t), B(this, "setExtremes", i = z(i, {
					min: e,
					max: t
				}), (e) => {
					this.userMin = e.min, this.userMax = e.max, this.eventArgs = e, n && a.redraw(r);
				});
			}
			setAxisSize() {
				let e = this.chart, t = this.options, n = t.offsets || [
					0,
					0,
					0,
					0
				], r = this.horiz, i = this.width = Math.round(Te(q(t.width, e.plotWidth - n[3] + n[1]), e.plotWidth)), a = this.height = Math.round(Te(q(t.height, e.plotHeight - n[0] + n[2]), e.plotHeight)), o = this.top = Math.round(Te(q(t.top, e.plotTop + n[0]), e.plotHeight, e.plotTop)), s = this.left = Math.round(Te(q(t.left, e.plotLeft + n[3]), e.plotWidth, e.plotLeft));
				this.bottom = e.chartHeight - a - o, this.right = e.chartWidth - i - s, this.len = Math.max(r ? i : a, 0), this.pos = r ? s : o;
			}
			getExtremes() {
				let e = this.logarithmic;
				return {
					min: e ? F(e.lin2log(this.min)) : this.min,
					max: e ? F(e.lin2log(this.max)) : this.max,
					dataMin: this.dataMin,
					dataMax: this.dataMax,
					userMin: this.userMin,
					userMax: this.userMax
				};
			}
			getThreshold(e) {
				let t = this.logarithmic, n = t ? t.lin2log(this.min) : this.min, r = t ? t.lin2log(this.max) : this.max;
				return e === null || e === -Infinity ? e = n : e === Infinity ? e = r : n > e ? e = n : r < e && (e = r), this.translate(e, 0, 1, 0, 1);
			}
			autoLabelAlign(e) {
				let t = ((e - 90 * this.side) % 360 + 360) % 360, n = { align: "center" };
				return B(this, "autoLabelAlign", n, function(e) {
					t > 15 && t < 165 ? e.align = "right" : t > 195 && t < 345 && (e.align = "left");
				}), n.align;
			}
			tickSize(e) {
				let t = this.options, n = q(t[e === "tick" ? "tickWidth" : "minorTickWidth"], e === "tick" && this.isXAxis && !this.categories ? 1 : 0), r = t[e === "tick" ? "tickLength" : "minorTickLength"], i;
				n && r && (t[e + "Position"] === "inside" && (r = -r), i = [r, n]);
				let a = {
					tickSize: i,
					prefix: e
				};
				return B(this, "afterTickSize", a), a.tickSize;
			}
			labelMetrics() {
				let e = this.chart.renderer, t = this.ticks, n = t[Object.keys(t)[0]] || {};
				return this.chart.renderer.fontMetrics(n.label || e.box);
			}
			unsquish() {
				let e = this.options.labels, t = e.padding || 0, n = this.horiz, r = this.tickInterval, i = this.len / ((+!!this.categories + this.max - this.min) / r), a = e.rotation, o = F(.8 * this.labelMetrics().h), s = Math.max(this.max - this.min, 0), c = function(e) {
					let n = (e + 2 * t) / (i || 1);
					return (n = n > 1 ? Math.ceil(n) : 1) * r > s && e !== Infinity && i !== Infinity && s && (n = Math.ceil(s / r)), F(n * r);
				}, l = r, u, d = Number.MAX_VALUE, f;
				if (n) {
					if (!e.staggerLines && (V(a) ? f = [a] : i < e.autoRotationLimit && (f = e.autoRotation)), f) {
						let e, t;
						for (let n of f) (n === a || n && n >= -90 && n <= 90) && (t = (e = c(Math.abs(o / Math.sin(fn * n)))) + Math.abs(n / 360)) < d && (d = t, u = n, l = e);
					}
				} else l = c(.75 * o);
				return this.autoRotation = f, this.labelRotation = q(u, V(a) ? a : 0), e.step ? r : l;
			}
			getSlotWidth(e) {
				let t = this.chart, n = this.horiz, r = this.options.labels, i = Math.max(this.tickPositions.length - !this.categories, 1), a = t.margin[3];
				if (e && V(e.slotWidth)) return e.slotWidth;
				if (n && r.step < 2 && !this.isRadial) return r.rotation ? 0 : (this.staggerLines || 1) * this.len / i;
				if (!n) {
					let e = r.style.width;
					if (e !== void 0) return parseInt(String(e), 10);
					if (!this.opposite && a) return a - t.spacing[3];
				}
				return .33 * t.chartWidth;
			}
			renderUnsquish() {
				let e = this.chart, t = e.renderer, n = this.tickPositions, r = this.ticks, i = this.options.labels, a = i.style, o = this.horiz, s = this.getSlotWidth(), c = Math.max(1, Math.round(s - (o ? 2 * (i.padding || 0) : i.distance || 0))), l = {}, u = this.labelMetrics(), d = a.lineClamp, f, p = d ?? (Math.floor(this.len / (n.length * u.h)) || 1), m = 0;
				H(i.rotation) || (l.rotation = i.rotation || 0), n.forEach(function(e) {
					m = Math.max(m, r[e].label?.textPxLength || 0);
				}), this.maxLabelLength = m, this.autoRotation ? m > c && m > u.h ? l.rotation = this.labelRotation : this.labelRotation = 0 : s && (f = c), l.rotation && (f = m > .5 * e.chartHeight ? .33 * e.chartHeight : m, d || (p = 1)), this.labelAlign = i.align || this.autoLabelAlign(this.labelRotation || 0), this.labelAlign && (l.align = this.labelAlign), n.forEach(function(e) {
					let t = r[e], n = t?.label, i = a.width, o = {};
					n && (n.attr(l), t.shortenLabel ? t.shortenLabel() : f && !i && a.whiteSpace !== "nowrap" && (f < (n.textPxLength || 0) || n.element.tagName === "DIV") ? n.css(z(o, {
						width: `${f}px`,
						lineClamp: p
					})) : (n.styles.width || n.textWidth || n.styles.lineClamp) && !o.width && !i && n.css({
						width: "auto",
						lineClamp: 0
					}), t.rotation = l.rotation);
				}, this), this.tickRotCorr = t.rotCorr(u.b, this.labelRotation || 0, this.side !== 0);
			}
			hasData() {
				return this.series.some(function(e) {
					return e.hasData();
				}) || this.options.showEmpty && L(this.min) && L(this.max);
			}
			addTitle(e) {
				let t, n = this.chart.renderer, r = this.horiz, i = this.opposite, a = this.options.title, o = this.chart.styledMode;
				this.axisTitle || ((t = a.textAlign) || (t = (r ? {
					low: "left",
					middle: "center",
					high: "right"
				} : {
					low: i ? "right" : "left",
					middle: "center",
					high: i ? "left" : "right"
				})[a.align]), this.axisTitle = n.text(a.text || "", 0, 0, a.useHTML).attr({
					zIndex: 7,
					rotation: a.rotation || 0,
					align: t
				}).addClass("highcharts-axis-title"), o || this.axisTitle.css(G(a.style)), this.axisTitle.add(this.axisGroup), this.axisTitle.isNew = !0), o || a.style.width || this.isRadial || this.axisTitle.css({ width: this.len + "px" }), this.axisTitle[e ? "show" : "hide"](e);
			}
			generateTick(e) {
				let t = this.ticks;
				t[e] ? t[e].addLabel() : t[e] = new an(this, e);
			}
			createGroups() {
				let { axisParent: e, chart: t, coll: n, options: r } = this, i = t.renderer, a = (t, a, o) => i.g(t).attr({ zIndex: o }).addClass(`highcharts-${n.toLowerCase()}${a} ` + (this.isRadial ? `highcharts-radial-axis${a} ` : "") + (r.className || "")).add(e);
				this.axisGroup || (this.gridGroup = a("grid", "-grid", r.gridZIndex).clip(this.clippable ? t.plotClipInner : void 0), this.axisGroup = a("axis", "", r.zIndex), this.labelGroup = a("axis-labels", "-labels", r.labels.zIndex));
			}
			shuffleTicks() {
				let e = this.ticks, t = this.old?.names;
				if (this.type === "category" && t) {
					t.forEach((n, r) => {
						let i = this.namesMap[n];
						L(i) && r !== i && (e[r] && (e[r].pos = i, this.isDirty = !0), e[i] && this.names.indexOf(t[i]) === -1 && (e[i].pos = NaN));
					});
					let n = Object.values(e);
					Object.keys(e).forEach((t) => {
						delete e[t];
					}), n.forEach((t) => {
						isNaN(t.pos) ? t.destroy() : e[t.pos] = t;
					});
				}
			}
			getOffset() {
				let { chart: e, horiz: t, options: n, side: r, ticks: i, tickPositions: a, coll: o } = this, s = this.hasData(), c = n.title, l = n.labels, u = V(n.crossing), d = e.axisOffset, f = e.clipOffset, p = [
					-1,
					1,
					1,
					-1
				][r], m = this.tickRotCorr || {
					x: 0,
					y: 0
				}, h = 0, g, _ = 0, v, y = 0, b = 0, x, S, C;
				if (this.showAxis = g = s || n.showEmpty, this.staggerLines = this.horiz && l.staggerLines || void 0, this.createGroups(), s || this.isLinked ? (this.shuffleTicks(), a.forEach(this.generateTick.bind(this)), this.renderUnsquish(), h = Math.abs((m = this.tickRotCorr).x), C = this.reserveSpaceDefault = r === 0 || r === 2 || {
					1: "left",
					3: "right"
				}[r] === this.labelAlign, (l.reserveSpace ?? (!u && null) ?? (this.labelAlign === "center" || null) ?? C) && a.forEach(function(e) {
					b = Math.max(i[e].getLabelSize(), b);
				}), this.staggerLines && (b *= this.staggerLines), !t && V(this.labelRotation) && C && (b -= h), this.labelOffset = b * (this.opposite ? -1 : 1)) : K(i, function(e, t) {
					e.destroy(), delete i[t];
				}), c?.text && !1 !== c.enabled && (this.addTitle(g), g && !u && !1 !== c.reserveSpace && (this.titleOffset = _ = this.axisTitle.getBBox()[t ? "height" : "width"], y = L(v = c.offset) ? 0 : q(c.margin, t ? 5 : 10))), this.renderLine(), this.offset = p * (V(n.offset) ? n.offset : d[r] ? d[r] + (n.margin || 0) : 0), S = r === 0 ? -this.labelMetrics().h : r === 2 ? m.y : 0, x = Math.abs(b) + y, b && (x -= S, x += p * (t ? l.y ?? m.y + p * l.distance : l.x ?? (C ? p * (l.distance - h) : m.x + p * l.distance)), !t && !C && this.labelAlign === "center" && V(this.labelRotation) && (x += h)), this.axisTitleMargin = v ?? x, this.maxLabelDimensions = this.getMaxLabelDimensions?.(i, a), o !== "colorAxis" && f) {
					let e = this.tickSize("tick");
					d[r] = Math.max(d[r], (this.axisTitleMargin || 0) + _ + p * this.offset, x, a?.length && e ? e[0] + p * this.offset : 0);
					let t = !this.axisLine || n.offset ? 0 : this.axisLine.strokeWidth() / 2;
					f[r] = Math.max(f[r], t);
				}
				B(this, "afterGetOffset");
			}
			getLinePath(e) {
				let t = this.chart, n = this.opposite, r = this.offset, i = this.horiz, a = this.left + (n ? this.width : 0) + r, o = t.chartHeight - this.bottom - (n ? this.height : 0) + r;
				return n && (e *= -1), t.renderer.crispLine([[
					"M",
					i ? this.left : a,
					i ? o : this.top
				], [
					"L",
					i ? t.chartWidth - this.right : a,
					i ? o : t.chartHeight - this.bottom
				]], e);
			}
			renderLine() {
				let { chart: e, offset: t = 0, options: n } = this;
				this.axisLine ||= e.renderer.path().addClass("highcharts-axis-line").attr(e.styledMode ? {} : {
					stroke: n.lineColor,
					"stroke-width": n.lineWidth,
					zIndex: 7
				}).clip(this.clippable && t <= 0 ? e.plotClipOuter : void 0).add(this.axisGroup);
			}
			getTitlePosition(e) {
				let t = this.horiz, n = this.left, r = this.top, i = this.len, a = this.options.title, o = t ? n : r, s = this.opposite, c = this.offset, l = a.x, u = a.y, d = this.chart.renderer.fontMetrics(e), f = e ? Math.max(e.getBBox(!1, 0).height - d.h - 1, 0) : 0, p = {
					low: o + (t ? 0 : i),
					middle: o + i / 2,
					high: o + (t ? i : 0)
				}[a.align], m = (t ? r + this.height : n) + (t ? 1 : -1) * (s ? -1 : 1) * (this.axisTitleMargin || 0) + [
					-f,
					f,
					d.f,
					-f
				][this.side], h = {
					x: t ? p + l : m + (s ? this.width : 0) + c + l,
					y: t ? m + u - (s ? this.height : 0) + c : p + u
				};
				return B(this, "afterGetTitlePosition", { titlePosition: h }), h;
			}
			renderMinorTick(e, t) {
				let n = this.minorTicks;
				n[e] || (n[e] = new an(this, e, "minor")), t && n[e].isNew && n[e].render(null, !0), n[e].render(null, !1, 1);
			}
			renderTick(e, t, n) {
				let r = this.isLinked, i = this.ticks;
				(!r || e >= this.min && e <= this.max || this.grid?.isColumn) && (i[e] || (i[e] = new an(this, e)), n && i[e].isNew && i[e].render(t, !0, -1), i[e].render(t));
			}
			render() {
				let e, t, n = this, r = n.chart, i = n.logarithmic, a = r.renderer, o = n.options, s = n.isLinked, c = n.tickPositions, l = n.axisTitle, u = n.ticks, d = n.minorTicks, f = n.alternateBands, p = o.stackLabels, m = o.alternateGridColor, h = o.crossing, g = n.tickmarkOffset, _ = n.axisLine, v = n.showAxis, y = on(a.globalAnimation);
				if (n.labelEdge.length = 0, n.overlap = !1, [
					u,
					d,
					f
				].forEach(function(e) {
					K(e, function(e) {
						e.isActive = !1;
					});
				}), V(h)) {
					let e = this.isXAxis ? r.yAxis[0] : r.xAxis[0], t = [
						1,
						-1,
						-1,
						1
					][this.side];
					if (e) {
						let r = e.toPixels(h, !0);
						n.horiz && (r = e.len - r), n.offset = t * r;
					}
				}
				if (n.hasData() || s) {
					let a = n.chart.hasRendered && n.old && V(n.old.min);
					n.minorTickInterval && !n.categories && n.getMinorTickPositions().forEach(function(e) {
						n.renderMinorTick(e, a);
					}), c.length && (c.forEach(function(e, t) {
						n.renderTick(e, t, a);
					}), g && (n.min === 0 || n.single) && (u[-1] ||= new an(n, -1, null, !0), u[-1].render(-1))), m && c.forEach(function(a, o) {
						t = c[o + 1] === void 0 ? n.max - g : c[o + 1] + g, o % 2 == 0 && a < n.max && t <= n.max + (r.polar ? -g : g) && (f[a] || (f[a] = new j.PlotLineOrBand(n, {})), e = a + g, f[a].options = {
							from: i ? i.lin2log(e) : e,
							to: i ? i.lin2log(t) : t,
							color: m,
							className: "highcharts-alternate-grid"
						}, f[a].render(), f[a].isActive = !0);
					}), n._addedPlotLB || (n._addedPlotLB = !0, (o.plotLines || []).concat(o.plotBands || []).forEach(function(e) {
						n.addPlotBandOrLine(e);
					}));
				}
				[
					u,
					d,
					f
				].forEach(function(e) {
					let t = [], n = y.duration;
					K(e, function(e, n) {
						e.isActive || (e.render(n, !1, 0), e.isActive = !1, t.push(n));
					}), Ae(function() {
						let n = t.length;
						for (; n--;) e[t[n]] && !e[t[n]].isActive && (e[t[n]].destroy(), delete e[t[n]]);
					}, e !== f && r.hasRendered && n ? n : 0);
				}), _ && (_[_.isPlaced ? "animate" : "attr"]({ d: this.getLinePath(_.strokeWidth()) }), _.isPlaced = !0, _[v ? "show" : "hide"](v)), l && v && (l[l.isNew ? "attr" : "animate"](n.getTitlePosition(l)), l.isNew = !1), p?.enabled && n.stacking && n.stacking.renderStackTotals(), this.old || this.saveOld(), n.isDirty = !1, B(this, "afterRender");
			}
			redraw() {
				this.visible && (this.render(), this.plotLinesAndBands.forEach(function(e) {
					e.render();
				})), this.series.forEach(function(e) {
					e.isDirty = !0;
				});
			}
			saveOld() {
				this.old = V(this.min) ? {
					len: this.len,
					max: this.max,
					min: this.min,
					names: this.names.slice(),
					transA: this.transA,
					userMax: this.userMax,
					userMin: this.userMin
				} : void 0;
			}
			getKeepProps() {
				return this.keepProps || mn.keepProps;
			}
			destroy(e) {
				let t = this, n = t.plotLinesAndBands, r = this.eventOptions;
				if (B(this, "destroy", { keepEvents: e }), e || De(t), [
					t.ticks,
					t.minorTicks,
					t.alternateBands
				].forEach(function(e) {
					R(e);
				}), n) {
					let e = n.length;
					for (; e--;) n[e].destroy();
				}
				for (let e in [
					"axisLine",
					"axisTitle",
					"axisGroup",
					"gridGroup",
					"labelGroup",
					"cross",
					"scrollbar"
				].forEach(function(e) {
					t[e] && (t[e] = t[e].destroy());
				}), t.plotLinesAndBandsGroups) t.plotLinesAndBandsGroups[e] = t.plotLinesAndBandsGroups[e].destroy();
				K(t, function(e, n) {
					t.getKeepProps().indexOf(n) === -1 && delete t[n];
				}), this.eventOptions = r;
			}
			drawCrosshair(e, t) {
				let n, r, i, a, o = this.crosshair, s = o?.snap ?? !0, c = this.chart, l = this.cross;
				if (B(this, "drawCrosshair", {
					e,
					point: t
				}), e ||= this.cross?.e, o && !1 !== (L(t) || !s)) {
					if (clearTimeout(this.crossShowTimer), s ? L(t) && (r = q(this.coll === "colorAxis" ? null : t.crosshairPos, this.isXAxis ? t.plotX : this.len - t.plotY)) : r = e && (this.horiz ? e.chartX - this.pos : this.len - e.chartY + this.pos), L(r) && (a = {
						value: t && (this.isXAxis ? t.x : q(t.stackY, t.y)),
						translatedValue: r
					}, c.polar && z(a, {
						isCrosshair: !0,
						chartX: e?.chartX,
						chartY: e?.chartY,
						point: t
					}), n = this.getPlotLinePath(a) || null), !L(n)) return void this.hideCrosshair();
					i = this.categories && !this.isRadial, this.crossShowTimer = Ae(() => {
						let t = this.cross;
						t || (this.cross = t = c.renderer.path().addClass("highcharts-crosshair highcharts-crosshair-" + (i ? "category " : "thin ") + (o.className || "")).attr({ zIndex: q(o.zIndex, 2) }).clip(!1 === o.clip ? void 0 : c.plotClipInner).add(), !c.styledMode && (t.attr({
							stroke: o.color || (i ? ln("var(--highcharts-highlight-color-20)").setOpacity(.25).get() : "var(--highcharts-neutral-color-20)"),
							"stroke-width": q(o.width, 1)
						}).css({ "pointer-events": "none" }), o.dashStyle && t.attr({ dashstyle: o.dashStyle }))), t.show().animate({ d: n }, on(o?.animation)), i && !o.width && t.attr({ "stroke-width": this.transA }), this.cross && (this.cross.e = e);
					}, (!l || l.attr("visibility") === "hidden") && o.showDelay || 0);
				} else this.hideCrosshair();
				B(this, "afterDrawCrosshair", {
					e,
					point: t
				});
			}
			hideCrosshair() {
				clearTimeout(this.crossShowTimer), this.cross && this.cross.hide(), B(this, "afterHideCrosshair");
			}
			update(e, t) {
				let n = this.chart;
				e = G(this.userOptions, e), this.destroy(!0), this.init(n, e), n.isDirtyBox = !0, q(t, !0) && n.redraw();
			}
			remove(e) {
				let t = this.chart, n = this.coll, r = this.series, i = r.length;
				for (; i--;) r[i] && r[i].remove(!1);
				le(t.axes, this), le(t[n] || [], this), t.orderItems(n), this.destroy(), t.isDirtyBox = !0, q(e, !0) && t.redraw();
			}
			setTitle(e, t) {
				this.update({ title: e }, t);
			}
			setCategories(e, t) {
				this.update({ categories: e }, t);
			}
		}
		mn.keepProps = [
			"coll",
			"extKey",
			"hcEvents",
			"len",
			"names",
			"series",
			"userMax",
			"userMin"
		], function(e) {
			function t() {
				return this.chart.time.getTimeTicks.apply(this.chart.time, arguments);
			}
			function n() {
				if (this.type !== "datetime") {
					this.dateTime = void 0;
					return;
				}
				this.dateTime ||= new r(this);
			}
			e.compose = function(e) {
				return e.keepProps.includes("dateTime") || (e.keepProps.push("dateTime"), e.prototype.getTimeTicks = t, M(e, "afterSetType", n)), e;
			};
			class r {
				constructor(e) {
					this.axis = e;
				}
				normalizeTimeTickInterval(e, t) {
					let n = t || [
						["millisecond", [
							1,
							2,
							5,
							10,
							20,
							25,
							50,
							100,
							200,
							500
						]],
						["second", [
							1,
							2,
							5,
							10,
							15,
							30
						]],
						["minute", [
							1,
							2,
							5,
							10,
							15,
							30
						]],
						["hour", [
							1,
							2,
							3,
							4,
							6,
							8,
							12
						]],
						["day", [1, 2]],
						["week", [1, 2]],
						["month", [
							1,
							2,
							3,
							4,
							6
						]],
						["year", null]
					], r = n[n.length - 1], i = X[r[0]], a = r[1], o, s;
					for (o = 0; o < n.length; o++) if (i = X[(r = n[o])[0]], a = r[1], n[o + 1]) {
						let t = (i * a[a.length - 1] + X[n[o + 1][0]]) / 2;
						if (e <= t) {
							s = t / e;
							break;
						}
					}
					i === X.year && e < 5 * i && (a = [
						1,
						2,
						5
					]);
					let c = xe(e / i, a, r[0] === "year" ? Math.max(pe(e / i), 1) : 1);
					return {
						unitRange: i,
						count: c,
						unitName: r[0],
						match: s
					};
				}
				getXDateFormat(e, t) {
					let { axis: n } = this, r = n.chart.time;
					return n.closestPointRange ? r.getDateFormat(n.closestPointRange, e, n.options.startOfWeek, t) || r.resolveDTLFormat(t.year).main : r.resolveDTLFormat(t.day).main;
				}
			}
			e.Additions = r;
		}(_ ||= {});
		let hn = _;
		(function(e) {
			function t() {
				this.type === "logarithmic" ? this.logarithmic ??= new r(this) : this.logarithmic = void 0;
			}
			function n() {
				let e = this.logarithmic;
				e && (this.lin2val = function(t) {
					return e.lin2log(t);
				}, this.val2lin = function(t) {
					return e.log2lin(t);
				});
			}
			e.compose = function(e) {
				return e.keepProps.includes("logarithmic") || (e.keepProps.push("logarithmic"), M(e, "afterSetType", t), M(e, "afterInit", n)), e;
			};
			class r {
				constructor(e) {
					this.axis = e;
				}
				getLogTickPositions(e, t, n, r) {
					let i = this.axis, a = i.len, o = i.options, s = [];
					if (r || (this.minorAutoInterval = void 0), e >= .5) e = Math.round(e), s = i.getLinearTickPositions(e, t, n);
					else if (e >= .08) {
						let i, a, o, c, l, u, d, f = Math.floor(t);
						for (i = e > .3 ? [
							1,
							2,
							4
						] : e > .15 ? [
							1,
							2,
							4,
							6,
							8
						] : [
							1,
							2,
							3,
							4,
							5,
							6,
							7,
							8,
							9
						], a = f; a < n + 1 && !d; a++) for (o = 0, c = i.length; o < c && !d; o++) (l = this.log2lin(this.lin2log(a) * i[o])) > t && (!r || u <= n) && u !== void 0 && s.push(u), u > n && (d = !0), u = l;
					} else {
						let c = this.lin2log(t), l = this.lin2log(n), u = r ? i.getMinorTickInterval() : o.tickInterval, d = o.tickPixelInterval / (r ? 5 : 1), f = r ? a / i.tickPositions.length : a;
						e = xe(e = q(u === "auto" ? null : u, this.minorAutoInterval, (l - c) * d / (f || 1))), s = i.getLinearTickPositions(e, c, l).map(this.log2lin), r || (this.minorAutoInterval = e / 5);
					}
					return r || (i.tickInterval = e), s;
				}
				lin2log(e) {
					return 10 ** e;
				}
				log2lin(e) {
					return Math.log(e) / Math.LN10;
				}
			}
			e.Additions = r;
		})(v ||= {});
		let gn = v;
		(function(e) {
			let t;
			function n(e) {
				return this.addPlotBandOrLine(e, "plotBands");
			}
			function r(e, n) {
				let r = this.userOptions, i = new t(this, e);
				if (this.visible && (i = i.render()), i) {
					if (this._addedPlotLB || (this._addedPlotLB = !0, (r.plotLines || []).concat(r.plotBands || []).forEach((e) => {
						this.addPlotBandOrLine(e);
					})), n) {
						let t = r[n] || [];
						t.push(e), r[n] = t;
					}
					this.plotLinesAndBands.push(i);
				}
				return i;
			}
			function i(e) {
				return this.addPlotBandOrLine(e, "plotLines");
			}
			function a(e, t, n) {
				n ||= this.options;
				let r = this.getPlotLinePath({
					value: t,
					force: !0,
					acrossPanes: n.acrossPanes
				}), i = [], a = this.horiz, o = !V(this.min) || !V(this.max) || e < this.min && t < this.min || e > this.max && t > this.max, s = this.getPlotLinePath({
					value: e,
					force: !0,
					acrossPanes: n.acrossPanes
				}), c, l = 1, u;
				if (s && r) for (o && (u = s.toString() === r.toString(), l = 0), c = 0; c < s.length; c += 2) {
					let e = s[c], t = s[c + 1], n = r[c], o = r[c + 1];
					(e[0] === "M" || e[0] === "L") && (t[0] === "M" || t[0] === "L") && (n[0] === "M" || n[0] === "L") && (o[0] === "M" || o[0] === "L") && (a && n[1] === e[1] ? (n[1] += l, o[1] += l) : a || n[2] !== e[2] || (n[2] += l, o[2] += l), i.push([
						"M",
						e[1],
						e[2]
					], [
						"L",
						t[1],
						t[2]
					], [
						"L",
						o[1],
						o[2]
					], [
						"L",
						n[1],
						n[2]
					], ["Z"])), i.isFlat = u;
				}
				return i;
			}
			function o(e) {
				this.removePlotBandOrLine(e);
			}
			function s(e) {
				let t = this.plotLinesAndBands, n = this.options, r = this.userOptions;
				if (t) {
					let i = t.length;
					for (; i--;) t[i].id === e && t[i].destroy();
					[
						n.plotLines || [],
						r.plotLines || [],
						n.plotBands || [],
						r.plotBands || []
					].forEach(function(t) {
						for (i = t.length; i--;) t[i]?.id === e && le(t, t[i]);
					});
				}
			}
			function c(e) {
				this.removePlotBandOrLine(e);
			}
			e.compose = function(e, l) {
				let u = l.prototype;
				return u.addPlotBand || (t = e, z(u, {
					addPlotBand: n,
					addPlotLine: i,
					addPlotBandOrLine: r,
					getPlotBandPath: a,
					removePlotBand: o,
					removePlotLine: c,
					removePlotBandOrLine: s
				})), l;
			};
		})(y ||= {});
		let _n = y;
		class vn {
			static compose(e, t) {
				return M(e, "afterInit", function() {
					this.labelCollectors.push(() => {
						let e = [];
						for (let t of this.axes) for (let { label: n, options: r } of t.plotLinesAndBands) n && !r?.label?.allowOverlap && e.push(n);
						return e;
					});
				}), _n.compose(vn, t);
			}
			constructor(e, t) {
				this.axis = e, this.options = t, this.id = t.id;
			}
			render() {
				B(this, "render");
				let { axis: e, options: t } = this, { chart: n, horiz: r, logarithmic: i } = e, { color: a, events: o, zIndex: s = 0 } = t, { renderer: c, time: l } = e.chart, u = {}, d = l.parse(t.to), f = l.parse(t.from), p = l.parse(t.value), m = t.borderWidth, h = t.label, { label: g, svgElem: _ } = this, v = [], y, b = L(f) && L(d), x = L(p), S = !_, C = { class: "highcharts-plot-" + (b ? "band " : "line ") + (t.className || "") }, w = b ? "bands" : "lines";
				if (!n.styledMode && (x ? (C.stroke = a || "var(--highcharts-neutral-color-40)", C["stroke-width"] = q(t.width, 1), t.dashStyle && (C.dashstyle = t.dashStyle)) : b && (C.fill = a || "var(--highcharts-highlight-color-10)", m && (C.stroke = t.borderColor, C["stroke-width"] = m))), u.zIndex = s, w += "-" + s, (y = e.plotLinesAndBandsGroups[w]) || (e.plotLinesAndBandsGroups[w] = y = c.g("plot-" + w).clip(n.plotClipOuter).attr(u).add()), _ || (this.svgElem = _ = c.path().attr(C).add(y)), L(p)) v = e.getPlotLinePath({
					value: i?.log2lin(p) ?? p,
					lineWidth: _.strokeWidth(),
					acrossPanes: t.acrossPanes
				});
				else {
					if (!(L(f) && L(d))) return;
					v = e.getPlotBandPath(i?.log2lin(f) ?? f, i?.log2lin(d) ?? d, t);
				}
				return !this.eventsAdded && o && (K(o, (e, t) => {
					_?.on(t, (e) => {
						o[t].apply(this, [e, this]);
					});
				}), this.eventsAdded = !0), (S || !_.d) && v?.length ? _.attr({ d: v }) : _ && (v ? (_.show(), _.animate({ d: v })) : _.d && (_.hide(), g && (this.label = g = g.destroy()))), h && (L(h.text) || L(h.formatter)) && v?.length && e.width > 0 && e.height > 0 && !v.isFlat ? (h = G({
					align: r && b ? "center" : void 0,
					x: r ? !b && 4 : 10,
					verticalAlign: !r && b ? "middle" : void 0,
					y: r ? b ? 16 : 10 : b ? 6 : -4,
					rotation: r && !b ? 90 : 0,
					...b ? { inside: !0 } : {}
				}, h), this.renderLabel(h, v, b, s)) : g && g.hide(), this;
			}
			renderLabel(e, t, n, r) {
				let i = this.axis, a = i.chart.renderer, o = e.inside, s = this.label;
				s || (this.label = s = a.text(this.getLabelText(e), 0, 0, e.useHTML).attr({
					align: e.textAlign || e.align,
					rotation: e.rotation,
					class: "highcharts-plot-" + (n ? "band" : "line") + "-label " + (e.className || ""),
					zIndex: r
				}), i.chart.styledMode || s.css(G({
					color: i.chart.options.title?.style?.color,
					fontSize: "0.8em",
					textOverflow: n && !o ? "" : "ellipsis"
				}, e.style)), s.add());
				let c = t.xBounds || [
					t[0][1],
					t[1][1],
					n ? t[2][1] : t[0][1]
				], l = t.yBounds || [
					t[0][2],
					t[1][2],
					n ? t[2][2] : t[0][2]
				], u = re(c), d = re(l), f = N(c) - u;
				s.align(e, !1, {
					x: u,
					y: d,
					width: f,
					height: N(l) - d
				}), s.alignAttr.y -= a.fontMetrics(s).b, (!s.alignValue || s.alignValue === "left" || L(o)) && s.css({ width: (e.style?.width || (n && o ? f : s.rotation === 90 ? i.height - (s.alignAttr.y - i.top) : (e.clip ? i.width + i.left : i.chart.chartWidth) - s.alignAttr.x)) + "px" }), s.show(!0);
			}
			getLabelText(e) {
				return L(e.formatter) ? e.formatter.call(this, this) : e.text;
			}
			destroy() {
				le(this.axis.plotLinesAndBands, this), delete this.axis, R(this);
			}
		}
		let { animObject: yn } = $e, { format: bn } = ft, { composed: xn, dateFormats: Sn, doc: Cn, isSafari: wn } = j, { distribute: Tn } = pt, En = (e) => {
			clearTimeout(e.hideTimer), clearTimeout(e.showTimer);
		};
		class Dn {
			constructor(e, t, n) {
				this.allowShared = !0, this.crosshairs = [], this.distance = 0, this.isHidden = !0, this.isSticky = !1, this.options = {}, this.outside = !1, this.chart = e, this.init(e, t), this.pointer = n;
			}
			bodyFormatter(e) {
				return e.map((e) => {
					let t = e.series.tooltipOptions, n = e.formatPrefix || "point";
					return (t[n + "Formatter"] || e.tooltipFormatter).call(e, t[n + "Format"] || "", e);
				});
			}
			cleanSplit(e) {
				this.chart.series.forEach(function(t) {
					let n = t?.tt;
					n && (!n.isActive || e ? t.tt = n.destroy() : n.isActive = !1);
				});
			}
			defaultFormatter(e) {
				let t, n = this.points || Oe(this);
				return (t = (t = [e.headerFooterFormatter(n[0])]).concat(e.bodyFormatter(n))).push(e.headerFooterFormatter(n[0], !0)), t;
			}
			destroy() {
				this.label &&= this.label.destroy(), this.split && (this.cleanSplit(!0), this.tt &&= this.tt.destroy()), this.renderer && (this.renderer = this.renderer.destroy(), se(this.container)), _e(this.hideTimer), En(this);
			}
			getAnchor(e, t) {
				let n, { chart: r, pointer: i } = this, a = r.inverted, o = r.plotTop, s = r.plotLeft;
				if (e = Oe(e), e[0].series?.yAxis && !e[0].series.yAxis.options.reversedStacks && (e = e.slice().reverse()), this.followPointer && t) t.chartX === void 0 && (t = i.normalize(t)), n = [t.chartX - s, t.chartY - o];
				else if (e[0].tooltipPos) n = e[0].tooltipPos;
				else {
					let r = 0, i = 0;
					e.forEach(function(e) {
						let t = e.pos(!0);
						t && (r += t[0], i += t[1]);
					}), r /= e.length, i /= e.length, this.shared && e.length > 1 && t && (a ? r = t.chartX : i = t.chartY), n = [r - s, i - o];
				}
				let c = {
					point: e[0],
					ret: n
				};
				return B(this, "getAnchor", c), c.ret.map(Math.round);
			}
			getClassName(e, t, n) {
				let r = this.options, i = e.series, a = i.options;
				return [
					r.className,
					"highcharts-label",
					n && "highcharts-tooltip-header",
					t ? "highcharts-tooltip-box" : "highcharts-tooltip",
					!n && "highcharts-color-" + q(e.colorIndex, i.colorIndex),
					a?.className
				].filter(H).join(" ");
			}
			getLabel({ anchorX: e, anchorY: t } = {
				anchorX: 0,
				anchorY: 0
			}) {
				let n = this, r = this.chart.styledMode, i = this.options, a = this.split && this.allowShared, o = this.container, s = this.chart.renderer;
				if (this.label) {
					let e = !this.label.hasClass("highcharts-label");
					(!a && e || a && !e) && this.destroy();
				}
				if (!this.label) {
					if (this.outside) {
						let e = this.chart, t = e.options.chart.style;
						this.container = o = j.doc.createElement("div"), o.className = "highcharts-container highcharts-tooltip-container " + (e.renderTo.className.match(/(highcharts[a-zA-Z0-9-]+)\s?/gm) || ""), o.dataset.highchartsChart = e.index.toString(), I(o, {
							position: "absolute",
							top: "1px",
							pointerEvents: "none",
							zIndex: Math.max(i.style.zIndex || 0, (t?.zIndex || 0) + 3)
						}), this.renderer = s = new Xt(o, 0, 0, t, void 0, void 0, s.styledMode);
					}
					if (a ? this.label = s.g("tooltip") : (this.label = s.label("", e, t, i.shape || "callout", void 0, void 0, i.useHTML, void 0, "tooltip").attr({
						padding: i.padding,
						r: i.borderRadius
					}), r || this.label.attr({
						fill: i.backgroundColor,
						"stroke-width": i.borderWidth ?? +!i.fixed
					}).css(i.style).css({ pointerEvents: i.style.pointerEvents || (this.shouldStickOnContact() ? "auto" : "none") })), n.outside) {
						let e = this.label;
						[e.xSetter, e.ySetter].forEach((t, r) => {
							e[r ? "ySetter" : "xSetter"] = (i) => {
								t.call(e, n.distance), e[r ? "y" : "x"] = i, o && (o.style[r ? "top" : "left"] = `${i}px`);
							};
						});
					}
					this.label.attr({ zIndex: 8 }).shadow(i.shadow ?? !i.fixed).add();
				}
				return o && !o.parentElement && j.doc.body.appendChild(o), this.label;
			}
			getPlayingField() {
				let { body: e, documentElement: t } = Cn, { chart: n, distance: r, outside: i } = this;
				return {
					width: i ? Math.max(e.scrollWidth, t.scrollWidth, e.offsetWidth, t.offsetWidth, t.clientWidth) - 2 * r - 2 : n.chartWidth,
					height: i ? Math.max(e.scrollHeight, t.scrollHeight, e.offsetHeight, t.offsetHeight, t.clientHeight) : n.chartHeight
				};
			}
			getPosition(e, t, n) {
				let { distance: r, chart: i, outside: a, pointer: o } = this, { inverted: s, plotLeft: c, plotTop: l, polar: u } = i, { plotX: d = 0, plotY: f = 0 } = n, p = {}, m = s && n.h || 0, { height: h, width: g } = this.getPlayingField(), _ = o.getChartPosition(), v = (n) => {
					let o = n === "x";
					return [
						n,
						o ? g : h,
						o ? e : t
					].concat(a ? [
						o ? e * _.scaleX : t * _.scaleY,
						o ? _.left - r + (d + c) * _.scaleX : _.top - r + (f + l) * _.scaleY,
						0,
						o ? g : h
					] : [
						o ? e : t,
						o ? d + c : f + l,
						o ? c : l,
						o ? c + i.plotWidth : l + i.plotHeight
					]);
				}, y = v("y"), b = v("x"), x, S = !!n.negative;
				!u && i.hoverSeries?.yAxis?.reversed && (S = !S);
				let C = !this.followPointer && q(n.ttBelow, !u && !s === S), w = function(e, t, n, i, o, s, c) {
					let l = a ? e === "y" ? r * _.scaleY : r * _.scaleX : r, u = (n - i) / 2, d = i < o - r, f = o + r + i < t, h = o - l - n + u, g = o + l - u;
					if (C && f) p[e] = g;
					else if (!C && d) p[e] = h;
					else if (d) p[e] = Math.min(c - i, h - m < 0 ? h : h - m);
					else {
						if (!f) return p[e] = 0, !1;
						p[e] = Math.max(s, g + m + n > t ? g : g + m);
					}
				}, T = function(e, t, n, i, a) {
					if (a < r || a > t - r) return !1;
					a < n / 2 ? p[e] = 1 : a > t - i / 2 ? p[e] = t - i - 2 : p[e] = a - n / 2;
				}, E = function(e) {
					[y, b] = [b, y], x = e;
				}, D = () => {
					!1 === w.apply(0, y) ? x ? p.x = p.y = 0 : (E(!0), D()) : !1 !== T.apply(0, b) || x || (E(!0), D());
				};
				return (s && !u || this.len > 1) && E(), D(), a && (p.x -= _.left, p.y -= _.top), p;
			}
			getFixedPosition(e, t, n) {
				let r = n.series, { chart: i, options: a, split: o } = this, s = a.position, c = s.relativeTo, l = a.shared || r?.yAxis?.isRadial && (c === "pane" || !c) ? "plotBox" : c, u = l === "chart" ? i.renderer : i[l] || i.getClipBox(r, !0);
				return {
					x: u.x + (u.width - e) * de(s.align) + s.x,
					y: u.y + (u.height - t) * de(s.verticalAlign) + (!o && s.y || 0)
				};
			}
			hide(e) {
				let t = this;
				En(this), e = q(e, this.options.hideDelay), this.isHidden || (this.hideTimer = Ae(function() {
					let n = t.getLabel();
					t.getLabel().animate({ opacity: 0 }, {
						duration: e && 150,
						complete: () => {
							n.hide(), t.container && t.container.remove();
						}
					}), t.isHidden = !0;
				}, e));
			}
			init(e, t) {
				this.chart = e, this.options = t, this.crosshairs = [], this.isHidden = !0, this.split = t.split && !e.inverted && !e.polar, this.shared = t.shared || this.split, this.outside = q(t.outside, !!(e.scrollablePixelsX || e.scrollablePixelsY));
			}
			shouldStickOnContact(e) {
				return !!(!this.followPointer && this.options.stickOnContact && (!e || this.pointer.inClass(e.target, "highcharts-tooltip")));
			}
			move(e, t, n, r) {
				let { followPointer: i, options: a } = this, o = yn(!i && !this.isHidden && !a.fixed && a.animation), s = i || (this.len || 0) > 1, c = {
					x: e,
					y: t
				};
				s ? c.anchorX = c.anchorY = NaN : (c.anchorX = n, c.anchorY = r), o.step = () => this.drawTracker(), this.getLabel().animate(c, o);
			}
			refresh(e, t) {
				let n = this, { chart: r, options: i, pointer: a, shared: o } = this, s = Oe(e), c = s[0], l = i.format, u = i.formatter || n.defaultFormatter, d = r.styledMode, f = n.allowShared;
				if (!i.enabled || !c.series) return;
				En(this), n.allowShared = !(!U(e) && e.series && e.series.noSharedTooltip), f &&= !n.allowShared, n.followPointer = !n.split && c.series.tooltipOptions.followPointer;
				let p = n.getAnchor(e, t), m = p[0], h = p[1];
				o && n.allowShared && (a.applyInactiveState(s), s.forEach((e) => e.setState("hover")), c.points = s), this.len = s.length;
				let g = H(l) ? bn(l, c, r) : u.call(c, n, c);
				c.points = void 0;
				let _ = c.series;
				this.distance = q(_.tooltipOptions.distance, 16), !1 === g ? this.hide() : this.showTimer = Ae(() => {
					if (n.split && n.allowShared) n.renderSplit(g, s);
					else {
						let e = m, o = h;
						if (t && a.isDirectTouch && (e = t.chartX - r.plotLeft, o = t.chartY - r.plotTop), !(r.polar || !1 === _.options.clip || s.some((t) => a.isDirectTouch || t.series.shouldShowTooltip(e, o)))) return void n.hide();
						{
							let e = n.getLabel(f && n.tt || {});
							(!i.style.width || d) && e.css({ width: (this.outside ? this.getPlayingField() : r.spacingBox).width - 2 * i.padding + "px" }), e.attr({
								class: n.getClassName(c),
								text: U(g) ? g.join("") : g
							}), this.outside && e.attr({ x: P(e.x || 0, 0, this.getPlayingField().width - (e.width || 0) - 1) }), d || e.attr({ stroke: i.borderColor || c.color || _.color || "var(--highcharts-neutral-color-60)" }), n.updatePosition({
								plotX: m,
								plotY: h,
								negative: c.negative,
								ttBelow: c.ttBelow,
								series: _,
								h: p[2] || 0
							});
						}
					}
					n.isHidden && n.label && n.label.attr({ opacity: 1 }).show(), n.isHidden = !1;
				}, n.isHidden && i.showDelay || 0), B(this, "refresh");
			}
			renderSplit(e, t) {
				let n = this, { chart: r, chart: { chartWidth: i, chartHeight: a, plotHeight: o, plotLeft: s, plotTop: c, scrollablePixelsY: l = 0, scrollablePixelsX: u, styledMode: d }, distance: f, options: p, options: { fixed: m, position: h, positioner: g }, pointer: _ } = n, { scrollLeft: v = 0, scrollTop: y = 0 } = r.scrollablePlotArea?.scrollingContainer || {}, b = n.outside && typeof u != "number" ? Cn.documentElement.getBoundingClientRect() : {
					left: v,
					right: v + i,
					top: y,
					bottom: y + a
				}, x = n.getLabel(), S = this.renderer || r.renderer, C = !!r.xAxis[0]?.opposite, { left: w, top: T } = _.getChartPosition(), E = g || m, D = c + y, O = 0, k = o - l, A = function(e, t, r, i, a = [0, 0], o = !0) {
					let s, c;
					if (r.isHeader) c = C ? 0 : k, s = P(a[0] - e / 2, b.left, b.right - e - (n.outside ? w : 0));
					else if (m && r) {
						let i = n.getFixedPosition(e, t, r);
						s = i.x, c = i.y - D;
					} else c = a[1] - D, s = P(s = o ? a[0] - e - f : a[0] + f, o ? s : b.left, b.right);
					return {
						x: s,
						y: c
					};
				};
				H(e) && (e = [!1, e]);
				let j = e.slice(0, t.length + 1).reduce(function(e, r, i) {
					if (!1 !== r && r !== "") {
						let a = t[i - 1] || {
							isHeader: !0,
							plotX: t[0].plotX,
							plotY: o,
							series: {}
						}, l = a.isHeader, u = l ? n : a.series, h = u.tt = function(e, t, r) {
							let i = e, { isHeader: a, series: o } = t, s = o.tooltipOptions || p, c = a ? G(s, s.header) : s;
							if (!i) {
								let e = {
									padding: s.padding,
									r: s.borderRadius
								};
								d || (e.fill = c.backgroundColor, e["stroke-width"] = c.borderWidth ?? +!s.fixed), i = S.label("", 0, 0, c.shape || (m && !a ? "rect" : "callout"), void 0, void 0, s.useHTML).addClass(n.getClassName(t, !0, a)).attr(e).add(x);
							}
							return i.isActive = !0, d || i.css(c.style), i.attr({ text: r }), d || i.attr({ stroke: c.borderColor || t.color || o.color || "var(--highcharts-neutral-color-80)" }), i;
						}(u.tt, a, r.toString()), _ = h.getBBox(), v = _.width + h.strokeWidth();
						l && (O = _.height + p.header.distance, k += O, C && (D -= O));
						let { anchorX: y, anchorY: w } = function(e) {
							let t, n, { isHeader: r, plotX: i = 0, plotY: a = 0, series: l } = e;
							if (r) t = Math.max(s + i, s), n = c + o / 2;
							else {
								let { xAxis: e, yAxis: r } = l;
								t = e.pos + P(i, -f, e.len + f), l.shouldShowTooltip(0, r.pos - c + a, { ignoreX: !0 }) && (n = r.pos + a);
							}
							return {
								anchorX: t = P(t, b.left - f, b.right + f),
								anchorY: n
							};
						}(a);
						if (typeof w == "number") {
							let t = _.height + 1, r = (g || A).call(n, v, t, a, n, [y, w]);
							e.push({
								align: E ? 0 : void 0,
								anchorX: y,
								anchorY: w,
								boxWidth: v,
								point: a,
								rank: q(r.rank, +!!l),
								size: t,
								target: r.y,
								tt: h,
								x: r.x
							});
						} else h.isActive = !1;
					}
					return e;
				}, []);
				!E && j.some((e) => {
					let { outside: t } = n, r = (t ? w : 0) + e.anchorX;
					return r < b.left && r + e.boxWidth < b.right || r < w - b.left + e.boxWidth && b.right - r > r;
				}) && (j = j.map((e) => {
					let { x: t, y: n } = A.call(this, e.boxWidth, e.size, e.point, void 0, [e.anchorX, e.anchorY], !1);
					return z(e, {
						target: n,
						x: t
					});
				})), n.cleanSplit(), Tn(j, k);
				let ee = {
					left: w,
					right: w
				};
				j.forEach(function(e) {
					let { x: t, boxWidth: r, isHeader: i } = e;
					!i && (n.outside && w + t < ee.left && (ee.left = w + t), n.outside && ee.left + r > ee.right && (ee.right = w + t));
				}), j.forEach(function(e) {
					let { x: t, anchorX: r, anchorY: i, pos: a, point: { isHeader: o } } = e, s = {
						visibility: a === void 0 ? "hidden" : "inherit",
						x: t,
						y: (a || 0) + D + (m && h.y || 0),
						anchorX: r,
						anchorY: i
					};
					if (n.outside && t < r) {
						let e = w - ee.left;
						e > 0 && (s.x = o ? (ee.right - ee.left) / 2 : t + e, s.anchorX = r + e);
					}
					e.tt.attr(s);
				});
				let { container: te, outside: ne, renderer: M } = n;
				if (ne && te && M) {
					let { width: e, height: t, x: n, y: r } = x.getBBox();
					M.setSize(e + n, t + r, !1), te.style.left = ee.left + "px", te.style.top = T + "px";
				}
				wn && x.attr({ opacity: x.opacity === 1 ? .999 : 1 });
			}
			drawTracker() {
				let e = this;
				if (!this.shouldStickOnContact()) {
					e.tracker &&= e.tracker.destroy();
					return;
				}
				let t = e.chart, n = e.label, r = e.shared ? t.hoverPoints : t.hoverPoint;
				if (!n || !r) return;
				let i = {
					x: 0,
					y: 0,
					width: 0,
					height: 0
				}, a = this.getAnchor(r), o = n.getBBox();
				a[0] += t.plotLeft - (n.translateX || 0), a[1] += t.plotTop - (n.translateY || 0), i.x = Math.min(0, a[0]), i.y = Math.min(0, a[1]), i.width = a[0] < 0 ? Math.max(Math.abs(a[0]), o.width - a[0]) : Math.max(Math.abs(a[0]), o.width), i.height = a[1] < 0 ? Math.max(Math.abs(a[1]), o.height - Math.abs(a[1])) : Math.max(Math.abs(a[1]), o.height), e.tracker ? e.tracker.attr(i) : (e.tracker = n.renderer.rect(i).addClass("highcharts-tracker").add(n), M(e.tracker.element, "mouseenter", () => En(e)), t.styledMode || e.tracker.attr({ fill: "rgba(0,0,0,0)" }));
			}
			styledModeFormat(e) {
				return e.replace("style=\"font-size: 0.8em\"", "class=\"highcharts-header\"").replace(/style="color:{(point|series)\.color}"/g, "class=\"highcharts-color-{$1.colorIndex} {series.options.className} {point.options.className}\"");
			}
			headerFooterFormatter(e, t) {
				let n = e.series, r = n.tooltipOptions, i = n.xAxis?.dateTime, a = {
					isFooter: t,
					point: e
				}, o = r.xDateFormat || "", s = r[t ? "footerFormat" : "headerFormat"];
				return B(this, "headerFormatter", a, function(t) {
					if (i && !o && V(e.key) && (o = i.getXDateFormat(e.key, r.dateTimeLabelFormats)), i && o) {
						if (W(o)) {
							let e = o;
							Sn[0] = (t) => n.chart.time.dateFormat(e, t), o = "%0";
						}
						(e.tooltipDateKeys || ["key"]).forEach((e) => {
							s = s.replace(RegExp("point\\." + e + "([ \\)}])"), `(point.${e}:${o})$1`);
						});
					}
					n.chart.styledMode && (s = this.styledModeFormat(s)), t.text = bn(s, e, this.chart);
				}), a.text || "";
			}
			update(e) {
				this.destroy(), this.init(this.chart, G(!0, this.options, e));
			}
			updatePosition(e) {
				let { chart: t, container: n, distance: r, options: i, pointer: a, renderer: o } = this, { height: s = 0, width: c = 0 } = this.getLabel(), { fixed: l, positioner: u } = i, { left: d, top: f, scaleX: p, scaleY: m } = a.getChartPosition(), h = (u || l && this.getFixedPosition || this.getPosition).call(this, c, s, e, this), g = j.doc, _ = (e.plotX || 0) + t.plotLeft, v = (e.plotY || 0) + t.plotTop, y;
				if (o && n) {
					if (h.x += d, h.y += f, u || l) {
						let { scrollLeft: e = 0, scrollTop: n = 0 } = t.scrollablePlotArea?.scrollingContainer || {};
						h.x += e, h.y += n;
					}
					y = (i.borderWidth ?? +!l) + 2 * r + 2, o.setSize(P(c + y, 0, g.documentElement.clientWidth) - 1, s + y, !1), (p !== 1 || m !== 1) && (I(n, { transform: `scale(${p}, ${m})` }), _ *= p, v *= m), _ += d - h.x, v += f - h.y;
				}
				this.move(Math.round(h.x), Math.round(h.y || 0), _, v);
			}
		}
		(s = Dn ||= {}).compose = function(e) {
			we(xn, "Core.Tooltip") && M(e, "afterInit", function() {
				let e = this.chart;
				e.options.tooltip && (e.tooltip = new s(e, e.options.tooltip, this));
			});
		};
		let On = Dn, { animObject: kn } = $e, { defaultOptions: An } = We, { format: jn } = ft;
		class Mn {
			constructor(e, t, n) {
				this.formatPrefix = "point", this.visible = !0, this.point = this, this.series = e, this.applyOptions(t, n), this.id ??= Fe(), this.resolveColor(), this.dataLabelOnNull ??= e.options.nullInteraction, e.chart.pointCount++, this.category = e.xAxis?.categories?.[this.x] ?? this.x, this.key = this.name ?? this.category, B(this, "afterInit");
			}
			applyOptions(e, t, n) {
				let r = this.series, i = r.options.pointValKey || r.pointValKey;
				return z(this, e = Mn.prototype.optionsToObject.call(this, e)), this.options ? this.options = r.chart.options.chart.allowMutatingData ? z(this.options, e) : G(this.options, e) : this.options = e, i && (this.y = Mn.prototype.getNestedProperty.call(this, i)), V(t) && (this.x = t), n || (this.selected && (this.state = "select"), e.group && delete this.group, e.dataLabels && delete this.dataLabels, this.isNull = this.isValid && !this.isValid(), this.formatPrefix = this.isNull ? "null" : "point"), this;
			}
			getOrigin({ x: e = 0, y: t = 0 }, n = {}) {
				let { graphic: r, series: i } = this;
				if (i.chart.inverted && r?.parentGroup && !r?.parentGroup?.rotation) {
					let n = this.pos(!1, e, t);
					n && (e = n[0], t = n[1]);
				}
				e -= (n.width || 0) / 2, t -= (n.height || 0) / 2;
				let a = { x: e };
				return i.is("column") || this.plotHigh || (a.y = t), a;
			}
			destroy() {
				if (!this.condemned) {
					let e = this, t = e.series, n = t.chart, r = n.hoverPoints, { duration: i } = kn(e.series.chart.renderer.globalAnimation), a = () => {
						for (let t in (e.graphic || e.graphics || e.dataLabel || e.dataLabels) && (De(e), e.destroyElements()), e) delete e[t];
					};
					e.legendItem && n.legend.destroyItem(e), r && (e.setState(), le(r, e), r.length || (n.hoverPoints = void 0)), e === n.hoverPoint && e.onMouseOut(), i && t.condemnedPoints ? (t.condemnedPoints.push(this), this.graphic?.addClass("highcharts-point-condemned"), setTimeout(a, i)) : a(), n.pointCount--;
				}
				this.condemned = !0;
			}
			destroyElements(e = {
				graphic: 1,
				dataLabel: 1
			}) {
				let t, n, r = this, i = [];
				for (e.graphic && i.push("graphic", "connector"), e.dataLabel && i.push("dataLabel", "dataLabelPath", "dataLabelUpper"), n = i.length; n--;) r[t = i[n]] && (r[t] = r[t].destroy());
				["graphic", "dataLabel"].forEach((t) => {
					let n = `${t}s`;
					e[t] && r[n] && (r[n].forEach((e) => {
						e?.element && e.destroy();
					}), delete r[n]);
				});
			}
			firePointEvent(e, t, n) {
				let r = this, i = this.series.options;
				r.manageEvent(e), e === "click" && i.allowPointSelect && (n = function(e) {
					!r.condemned && r.select && r.select(null, e.ctrlKey || e.metaKey || e.shiftKey);
				}), B(r, e, t, n);
			}
			getClassName() {
				return "highcharts-point" + (this.selected ? " highcharts-point-select" : "") + (this.negative && !1 !== this.series.options.negativeColor ? " highcharts-negative" : "") + (this.isNull ? " highcharts-null-point" : "") + (this.colorIndex === void 0 ? "" : " highcharts-color-" + this.colorIndex) + (this.options.className ? " " + this.options.className : "") + (this.zone?.className ? " " + this.zone.className.replace("highcharts-negative", "") : "");
			}
			getNestedProperty(e) {
				if (e) return e.indexOf("custom.") === 0 ? me(e, this.options) : this[e];
			}
			getZone() {
				let e = this.series, t = e.zones, n = e.zoneAxis || "y", r, i = 0;
				for (r = t[0]; this[n] >= r.value;) r = t[++i];
				return this.nonZonedColor ||= this.color, r?.color && !this.options.color ? this.color = r.color : this.color = this.nonZonedColor, r;
			}
			hasNewShapeType() {
				return (this.graphic && (this.graphic.symbolName || this.graphic.element.nodeName)) !== this.shapeType;
			}
			isValid() {
				return (V(this.x) || this.x instanceof Date) && V(this.y);
			}
			optionsToObject(e) {
				let t = this.series, n = t.options.keys, r = n || t.pointArrayMap || ["y"], i = r.length, a = {}, o, s = 0, c = 0;
				if (V(e) || e === null) a[r[0]] = e;
				else if (U(e)) for (!n && e.length > i && ((o = typeof e[0]) == "string" ? t.xAxis?.dateTime ? a.x = t.chart.time.parse(e[0]) : a[t.tupleKey || "name"] = e[0] : o === "number" && (a.x = e[0]), s++); c < i;) n && e[s] === void 0 || (a[r[c]] = e[s]), s++, c++;
				else typeof e == "object" && (a = e, e.dataLabels && (t.hasDataLabels = () => !0), e.marker && (t._hasPointMarkers = !0));
				return (n || !t.options.data) && Object.keys(a).forEach((e) => {
					e.indexOf(".") > 0 && (Mn.prototype.setNestedProperty(a, a[e], e), delete a[e]);
				}), a;
			}
			pos(e, t = this.plotX, n = this.plotY) {
				let { series: r } = this, { chart: i, xAxis: a, yAxis: o } = r || {}, s = 0, c = 0;
				if (i && V(t) && V(n)) return e && (s = a ? a.pos : i.plotLeft, c = o ? o.pos : i.plotTop), i.inverted && a && o ? [o.len - n + c, a.len - t + s] : [t + s, n + c];
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
					return e[n] = i.length - 1 === r ? t : W(e[n], !0) ? e[n] : {}, e[n];
				}, e), e;
			}
			shouldDraw() {
				return !this.isNull;
			}
			tooltipFormatter(e) {
				let { chart: t, pointArrayMap: n = ["y"], tooltipOptions: r } = this.series, { valueDecimals: i = "", valuePrefix: a = "", valueSuffix: o = "" } = r;
				return t.styledMode && (e = t.tooltip?.styledModeFormat(e) || e), n.forEach((t) => {
					t = "{point." + t, (a || o) && (e = e.replace(RegExp(t + "}", "g"), a + t + "}" + o)), e = e.replace(RegExp(t + "}", "g"), t + ":,." + i + "f}");
				}), jn(e, this, t);
			}
			update(e, t = !0, n, r) {
				let i = this, a = i.series, o = i.graphic, s = a.chart, c = a.options, l = c.data;
				function u() {
					i.applyOptions(e);
					let r = o && i.hasMockGraphic, u = i.index, d = i.y === null ? !r : r;
					o && d && (i.graphic = o.destroy(), delete i.hasMockGraphic), W(e, !0) && (o?.element && e?.marker && e.marker.symbol !== void 0 && (i.graphic = o.destroy()), e?.dataLabels && i.dataLabel && (i.dataLabel = i.dataLabel.destroy()));
					let f = i.optionsToObject(e);
					!a.hasProcessedDataTable && (a.dataTable.setRow(f, u), l && (l[u] = W(l[u], !0) || W(e, !0) ? i.options : e ?? l[u])), a.isDirty = a.isDirtyData = !0, "x" in f && (H(f.x) && (a.xColumnIsNumbers = void 0), i.x = a.getX(f.x), i.isNull = i.isValid && !i.isValid(), a.xColumn && (a.xColumn[u] = i.x)), !a.fixedBox && a.hasCartesianSeries && (s.isDirtyBox = !0), c.legendType === "point" && (s.isDirtyLegend = !0), t && s.redraw(n);
				}
				!1 === r ? u() : i.firePointEvent("update", { options: e }, u);
			}
			remove(e, t) {
				this.series.removePoint(this.series.data.indexOf(this), e, t);
			}
			select(e, t) {
				let n = this, r = n.series, i = r.chart;
				e = q(e, !n.selected), this.selectedStaging = e, n.firePointEvent(e ? "select" : "unselect", { accumulate: t }, function() {
					n.selected = n.options.selected = e, r.options.data && (r.options.data[r.data.indexOf(n)] = n.options), n.setState(e && "select"), t || i.getSelectedPoints().forEach(function(e) {
						let t = e.series, r = t.options;
						e.selected && e !== n && (e.selected = e.options.selected = !1, r.data && (r.data[t.data.indexOf(e)] = e.options), e.setState(i.hoverPoints && r.inactiveOtherPoints ? "inactive" : ""), e.firePointEvent("unselect"));
					});
				}), delete this.selectedStaging;
			}
			onMouseOver(e) {
				let { inverted: t, pointer: n } = this.series.chart;
				n && (e = e ? n.normalize(e) : n.getChartCoordinatesFromPoint(this, t), n.runPointActions(e, this));
			}
			onMouseOut() {
				if (!this.series) return;
				let e = this.series.chart;
				this.firePointEvent("mouseOut"), this.series.options.inactiveOtherPoints || (e.hoverPoints || []).forEach(function(e) {
					e.setState();
				}), e.hoverPoints = e.hoverPoint = null;
			}
			manageEvent(e) {
				let t = G(this.series.options.point, this.options).events?.[e];
				be(t) && (!this.hcEvents?.[e] || this.hcEvents?.[e]?.map((e) => e.fn).indexOf(t) === -1) ? (this.importedUserEvent?.(), this.importedUserEvent = M(this, e, t), this.hcEvents && (this.hcEvents[e].userEvent = !0)) : this.importedUserEvent && !t && this.hcEvents?.[e] && this.hcEvents?.[e].userEvent && (De(this, e), delete this.hcEvents[e], Object.keys(this.hcEvents) || delete this.importedUserEvent);
			}
			setState(e, t) {
				let n = this.series, r = this.state, i = n.options.states[e || "normal"] || {}, a = An.plotOptions[n.type].marker && n.options.marker, o = a && !1 === a.enabled, s = a?.states?.[e || "normal"] || {}, c = !1 === s.enabled, l = this.marker || {}, u = n.chart, d = a && n.markerAttribs, f = n.halo, p, m, h, g = n.stateMarkerGraphic, _;
				if ((e ||= "") === this.state && !t || this.selected && e !== "select" || !1 === i.enabled || e && (c || o && !1 === s.enabled) || e && l.states && l.states[e] && !1 === l.states[e].enabled) return;
				if (this.state = e, d && (p = n.markerAttribs(this, e)), this.graphic && !this.hasMockGraphic) {
					if (r && this.graphic.removeClass("highcharts-point-" + r), e && this.graphic.addClass("highcharts-point-" + e), !u.styledMode) {
						m = n.pointAttribs(this, e), h = q(u.options.chart.animation, i.animation);
						let t = m.opacity;
						n.options.inactiveOtherPoints && V(t) && (this.dataLabels || []).forEach(function(e) {
							e && !e.hasClass("highcharts-data-label-hidden") && (e.animate({ opacity: t }, h), e.connector && e.connector.animate({ opacity: t }, h));
						}), this.graphic.animate(m, h);
					}
					p && this.graphic.animate(p, q(u.options.chart.animation, s.animation, a.animation)), g && g.hide();
				} else e && s && (_ = l.symbol || n.symbol, g && g.currentSymbol !== _ && (g = g.destroy()), p && (g ? g[t ? "animate" : "attr"]({
					x: p.x,
					y: p.y
				}) : _ && (n.stateMarkerGraphic = g = u.renderer.symbol(_, p.x, p.y, p.width, p.height, G(a, s)).add(n.markerGroup), g.currentSymbol = _)), !u.styledMode && g && this.state !== "inactive" && g.attr(n.pointAttribs(this, e))), g && (g[e && this.isInside ? "show" : "hide"](), g.element.point = this, g.addClass(this.getClassName(), !0));
				let v = i.halo, y = this.graphic || g, b = y?.visibility || "inherit";
				v?.size && y && b !== "hidden" && !this.isCluster ? (f || (n.halo = f = u.renderer.path().add(y.parentGroup)), f.show()[t ? "animate" : "attr"]({ d: this.haloPath(v.size) }), f.attr({
					class: "highcharts-halo highcharts-color-" + q(this.colorIndex, n.colorIndex) + (this.className ? " " + this.className : ""),
					visibility: b,
					zIndex: -1
				}), f.point = this, u.styledMode || f.attr(z({
					fill: this.color || n.color,
					"fill-opacity": v.opacity
				}, Q.filterUserAttributes(v.attributes || {})))) : f?.point?.haloPath && !f.point.destroyed && f.animate({ d: f.point.haloPath(0) }, null, f.hide), B(this, "afterSetState", { state: e });
			}
			haloPath(e) {
				let t = this.pos();
				return t ? this.series.chart.renderer.symbols.circle(oe(t[0], 1) - e, t[1] - e, 2 * e, 2 * e) : [];
			}
		}
		let Nn = Mn, { charts: Pn, composed: Fn, isTouchDevice: In } = j, Ln = (e, t) => !L(t) || e[`${t}Key`];
		class Rn {
			applyInactiveState(e = []) {
				let t = [];
				for (let n of (e.forEach((e) => {
					let n = e.series;
					t.push(n), n.linkedParent && t.push(n.linkedParent), n.linkedSeries && t.push.apply(t, n.linkedSeries), n.navigatorSeries && t.push(n.navigatorSeries), n.boosted && n.markerGroup && t.push.apply(t, this.chart.series.filter((e) => e.markerGroup === n.markerGroup));
				}), this.chart.series)) {
					let e = n.options;
					e.states?.inactive?.enabled !== !1 && (t.indexOf(n) === -1 ? n.setState("inactive", !0) : e.inactiveOtherPoints && n.setAllPointsToState("inactive"));
				}
			}
			destroy() {
				let e = this;
				this.eventsToUnbind.forEach((e) => e()), this.eventsToUnbind = [], !j.chartCount && (Rn.unbindDocumentMouseUp.forEach((e) => e.unbind()), Rn.unbindDocumentMouseUp.length = 0, Rn.unbindDocumentTouchEnd &&= Rn.unbindDocumentTouchEnd()), K(e, function(t, n) {
					e[n] = void 0;
				});
			}
			getSelectionMarkerAttrs(e, t) {
				let n = {
					args: {
						chartX: e,
						chartY: t
					},
					attrs: {},
					shapeType: "rect"
				};
				return B(this, "getSelectionMarkerAttrs", n, (n) => {
					let r, { chart: i, zoomHor: a, zoomVert: o } = this, { mouseDownX: s = 0, mouseDownY: c = 0 } = i, l = n.attrs;
					l.x = i.plotLeft, l.y = i.plotTop, l.width = a ? 1 : i.plotWidth, l.height = o ? 1 : i.plotHeight, a && (l.width = Math.max(1, Math.abs(r = e - s)), l.x = (r > 0 ? 0 : r) + s), o && (l.height = Math.max(1, Math.abs(r = t - c)), l.y = (r > 0 ? 0 : r) + c);
				}), n;
			}
			drag(e) {
				let { chart: t } = this, { mouseDownX: n = 0, mouseDownY: r = 0 } = t, { panning: i, panKey: a, selectionMarkerFill: o } = t.options.chart, s = t.plotLeft, c = t.plotTop, l = t.plotWidth, u = t.plotHeight, d = W(i) ? i.enabled : i, f = a && e[`${a}Key`], p = e.chartX, m = e.chartY, h, g = this.selectionMarker;
				if ((!g || !g.touch) && (p < s ? p = s : p > s + l && (p = s + l), m < c ? m = c : m > c + u && (m = c + u), this.hasDragged = Math.sqrt((n - p) ** 2 + (r - m) ** 2), this.hasDragged > 10)) {
					h = t.isInsidePlot(n - s, r - c, { visiblePlotOnly: !0 });
					let { shapeType: l, attrs: u } = this.getSelectionMarkerAttrs(p, m);
					this.hasZoom && h && !f && !g && (this.selectionMarker = g = t.renderer[l](), g.attr({
						class: "highcharts-selection-marker",
						zIndex: 7
					}).add(), t.styledMode || g.attr({ fill: o })), g && g.attr(u), h && !g && d && Ln(e, a) && t.pan(e, i);
				}
			}
			dragStart(e) {
				let t = this.chart;
				t.mouseIsDown = e.type, t.cancelClick = !1, t.mouseDownX = e.chartX, t.mouseDownY = e.chartY;
			}
			getSelectionBox(e) {
				let t = {
					args: { marker: e },
					result: e.getBBox()
				};
				return B(this, "getSelectionBox", t), t.result;
			}
			drop(e) {
				let t, { chart: n, selectionMarker: r } = this;
				for (let e of n.axes) e.isPanning && (e.isPanning = !1, (e.options.startOnTick || e.options.endOnTick || e.series.some((e) => e.boosted)) && (e.forceRedraw = !0, e.setExtremes(e.userMin, e.userMax, !1), t = !0));
				if (t && n.redraw(), r && e) {
					if (this.hasDragged) {
						let t = this.getSelectionBox(r);
						n.transform({
							axes: n.axes.filter((e) => e.zoomEnabled && (e.coll === "xAxis" && this.zoomX || e.coll === "yAxis" && this.zoomY)),
							selection: {
								originalEvent: e,
								xAxis: [],
								yAxis: [],
								...t
							},
							from: t
						});
					}
					V(n.index) && (this.selectionMarker = r.destroy());
				}
				n && V(n.index) && (I(n.container, { cursor: n._cursor }), n.cancelClick = this.hasDragged > 10, n.mouseIsDown = !1, this.hasDragged = 0, this.pinchDown = [], this.hasPinchMoved = !1);
			}
			findNearestKDPoint(e, t, n) {
				let r;
				return e.forEach(function(e) {
					var i;
					let a, o, s, c = !(e.noSharedTooltip && t) && 0 > e.options.findNearestPointBy.indexOf("y"), l = e.searchPoint(n, c);
					W(l, !0) && l.series && (!W(r, !0) || (a = (i = r).distX - l.distX, o = i.dist - l.dist, s = l.series.group?.zIndex - i.series.group?.zIndex, (a !== 0 && t ? a : o === 0 ? s === 0 ? i.series.index > l.series.index ? -1 : 1 : s : o) > 0)) && (r = l);
				}), r;
			}
			getChartCoordinatesFromPoint(e, t) {
				let { xAxis: n, yAxis: r } = e.series, i = e.shapeArgs;
				if (n && r) {
					let a = e.clientX ?? e.plotX ?? 0, o = e.plotY || 0;
					return e.isNode && i && V(i.x) && V(i.y) && (a = i.x, o = i.y), t ? {
						chartX: r.len + r.pos - o,
						chartY: n.len + n.pos - a
					} : {
						chartX: a + n.pos,
						chartY: o + r.pos
					};
				}
				if (i?.x && i.y) return {
					chartX: i.x,
					chartY: i.y
				};
			}
			getChartPosition() {
				if (this.chartPosition) return this.chartPosition;
				let { container: e } = this.chart, t = Se(e);
				this.chartPosition = {
					left: t.left,
					top: t.top,
					scaleX: 1,
					scaleY: 1
				};
				let { offsetHeight: n, offsetWidth: r } = e;
				return r > 2 && n > 2 && (this.chartPosition.scaleX = t.width / r, this.chartPosition.scaleY = t.height / n), this.chartPosition;
			}
			getCoordinates(e) {
				let t = {
					xAxis: [],
					yAxis: []
				};
				for (let n of this.chart.axes) t[n.isXAxis ? "xAxis" : "yAxis"].push({
					axis: n,
					value: n.toValue(e[n.horiz ? "chartX" : "chartY"])
				});
				return t;
			}
			getHoverData(e, t, n, r, i, a) {
				let o = [], s = function(e) {
					return e.visible && !(!i && e.directTouch) && q(e.options.enableMouseTracking, !0);
				}, c = t, l, u = {
					chartX: a ? a.chartX : void 0,
					chartY: a ? a.chartY : void 0,
					shared: i
				};
				B(this, "beforeGetHoverData", u), l = c && !c.stickyTracking ? [c] : n.filter((e) => e.stickyTracking && (u.filter || s)(e));
				let d = r && e || !a ? e : this.findNearestKDPoint(l, i, a);
				return c = d?.series, d && (i && !c.noSharedTooltip ? (l = n.filter(function(e) {
					return u.filter ? u.filter(e) : s(e) && !e.noSharedTooltip;
				})).forEach(function(e) {
					let t = e.options?.nullInteraction, n = ge(e.points, function(e) {
						return e.x === d.x && (!e.isNull || !!t);
					});
					W(n) && (e.boosted && e.boost && (n = e.boost.getPoint(n)), o.push(n));
				}) : o.push(d)), B(this, "afterGetHoverData", u = { hoverPoint: d }), {
					hoverPoint: u.hoverPoint,
					hoverSeries: c,
					hoverPoints: o
				};
			}
			getPointFromEvent(e) {
				let t = e.target, n;
				for (; t && !n;) n = t.point, t = t.parentNode;
				return n;
			}
			onTrackerMouseOut(e) {
				let t = this.chart, n = e.relatedTarget, r = t.hoverSeries;
				this.isDirectTouch = !1, !r || !n || r.stickyTracking || this.inClass(n, "highcharts-tooltip") || this.inClass(n, "highcharts-series-" + r.index) && this.inClass(n, "highcharts-tracker") || r.onMouseOut();
			}
			inClass(e, t) {
				let n = e, r;
				for (; n;) {
					if (r = ie(n, "class")) {
						if (r.indexOf(t) !== -1) return !0;
						if (r.indexOf("highcharts-container") !== -1) return !1;
					}
					n = n.parentElement;
				}
			}
			constructor(e, t) {
				this.hasDragged = 0, this.pointerCaptureEventsToUnbind = [], this.eventsToUnbind = [], this.options = t, this.chart = e, this.runChartClick = !!t.chart.events?.click, this.pinchDown = [], this.setDOMEvents(), B(this, "afterInit");
			}
			normalize(e, t) {
				let n = e.touches, r = n ? n.length ? n.item(0) : q(n.changedTouches, e.changedTouches)[0] : e;
				t ||= this.getChartPosition();
				let i = r.pageX - t.left, a = r.pageY - t.top;
				return z(e, {
					chartX: Math.round(i /= t.scaleX),
					chartY: Math.round(a /= t.scaleY)
				});
			}
			onContainerClick(e) {
				let t = this.chart, n = t.hoverPoint, r = this.normalize(e), i = t.plotLeft, a = t.plotTop;
				!t.cancelClick && (n && this.inClass(r.target, "highcharts-tracker") ? (B(n.series, "click", z(r, { point: n })), t.hoverPoint && n.firePointEvent("click", r)) : (z(r, this.getCoordinates(r)), t.isInsidePlot(r.chartX - i, r.chartY - a, { visiblePlotOnly: !0 }) && B(t, "click", r)));
			}
			onContainerMouseDown(e) {
				let t = (1 & (e.buttons || e.button)) == 1;
				e = this.normalize(e), j.isFirefox && e.button !== 0 && this.onContainerMouseMove(e), (e.button === void 0 || t) && (this.zoomOption(e), t && e.preventDefault?.(), this.dragStart(e));
			}
			onContainerMouseLeave(e) {
				let { pointer: t } = Pn[q(Rn.hoverChartIndex, -1)] || {};
				e = this.normalize(e), this.onContainerMouseMove(e), t && !this.inClass(e.relatedTarget, "highcharts-tooltip") && (t.reset(), t.chartPosition = void 0);
			}
			onContainerMouseEnter() {
				delete this.chartPosition;
			}
			onContainerMouseMove(e) {
				let t = this.chart, n = t.tooltip, r = this.normalize(e);
				this.setHoverChartIndex(e), (t.mouseIsDown === "mousedown" || this.touchSelect(r)) && this.drag(r), !t.exporting?.openMenu && (this.inClass(r.target, "highcharts-tracker") || t.isInsidePlot(r.chartX - t.plotLeft, r.chartY - t.plotTop, { visiblePlotOnly: !0 })) && !n?.shouldStickOnContact(r) && (this.inClass(r.target, "highcharts-no-tooltip") ? this.reset(!1, 0) : this.runPointActions(r));
			}
			onDocumentTouchEnd(e) {
				this.onDocumentMouseUp(e);
			}
			onContainerTouchMove(e) {
				this.touchSelect(e) ? this.onContainerMouseMove(e) : this.touch(e);
			}
			onContainerTouchStart(e) {
				this.touchSelect(e) ? this.onContainerMouseDown(e) : (this.zoomOption(e), this.touch(e, !0));
			}
			onDocumentMouseMove(e) {
				let t = this.chart, n = t.tooltip, r = this.chartPosition, i = this.normalize(e, r);
				!r || t.isInsidePlot(i.chartX - t.plotLeft, i.chartY - t.plotTop, { visiblePlotOnly: !0 }) || n?.shouldStickOnContact(i) || i.target !== t.container.ownerDocument && this.inClass(i.target, "highcharts-tracker") || this.reset();
			}
			onDocumentMouseUp(e) {
				e?.touches && this.hasPinchMoved && e?.preventDefault?.(), Pn[q(Rn.hoverChartIndex, -1)]?.pointer?.drop(e);
			}
			pinch(e) {
				let t = this, { chart: n, hasZoom: r, lastTouches: i } = t, a = [].map.call(e.touches || [], (e) => t.normalize(e)), o = a.length, s = o === 1 && (t.inClass(e.target, "highcharts-tracker") && n.runTrackerClick || t.runChartClick), c = o === 1 && (n.tooltip?.options.followTouchMove ?? !0);
				o > 1 ? t.initiated = !0 : c && (t.initiated = !1), r && t.initiated && !s && !1 !== e.cancelable && e.preventDefault(), e.type === "touchstart" ? (t.pinchDown = a, t.res = !0, n.mouseDownX = e.chartX) : c ? this.runPointActions(t.normalize(e)) : i && (B(n, "touchpan", {
					originalEvent: e,
					touches: a
				}, () => {
					let t = (e) => {
						let t = e[0], n = e[1] || t;
						return {
							x: t.chartX,
							y: t.chartY,
							width: n.chartX - t.chartX,
							height: n.chartY - t.chartY
						};
					};
					n.transform({
						axes: n.axes.filter((e) => e.zoomEnabled && (this.zoomHor && e.horiz || this.zoomVert && !e.horiz)),
						to: t(a),
						from: t(i),
						trigger: e.type
					});
				}), t.res && (t.res = !1, this.reset(!1, 0))), t.lastTouches = a;
			}
			reset(e, t) {
				let n = this.chart, r = n.hoverSeries, i = n.hoverPoint, a = n.hoverPoints, o = n.tooltip, s = o?.shared ? a : i;
				e && s && Oe(s).forEach(function(t) {
					t.series.isCartesian && t.plotX === void 0 && (e = !1);
				}), e ? o && s && Oe(s).length && (o.refresh(s), o.shared && a ? a.forEach(function(e) {
					e.setState(e.state, !0), e.series.isCartesian && (e.series.xAxis.crosshair && e.series.xAxis.drawCrosshair(null, e), e.series.yAxis.crosshair && e.series.yAxis.drawCrosshair(null, e));
				}) : i && (i.setState(i.state, !0), n.axes.forEach(function(e) {
					e.crosshair && i.series[e.coll] === e && e.drawCrosshair(null, i);
				}))) : (i && i.onMouseOut(), a && a.forEach(function(e) {
					e.setState();
				}), r && r.onMouseOut(), o && o.hide(t), this.unDocMouseMove &&= this.unDocMouseMove(), n.axes.forEach(function(e) {
					e.hideCrosshair();
				}), n.hoverPoints = n.hoverPoint = void 0);
			}
			runPointActions(e, t, n) {
				let r = this.chart, i = r.series, a = r.tooltip?.options.enabled ? r.tooltip : void 0, o = !!a && a.shared, s = t || r.hoverPoint, c = s?.series || r.hoverSeries, l = (!e || e.type !== "touchmove") && (!!t || c?.directTouch && this.isDirectTouch), u = this.getHoverData(s, c, i, l, o, e);
				s = u.hoverPoint, c = u.hoverSeries;
				let d = u.hoverPoints, f = c?.tooltipOptions.followPointer && !c.tooltipOptions.split, p = o && c && !c.noSharedTooltip;
				if (s && (n || s !== r.hoverPoint || a?.isHidden)) {
					if ((r.hoverPoints || []).forEach(function(e) {
						d.indexOf(e) === -1 && e.setState();
					}), r.hoverSeries !== c && c.onMouseOver(), this.applyInactiveState(d), (d || []).forEach(function(e) {
						e.setState("hover");
					}), r.hoverPoint && r.hoverPoint.firePointEvent("mouseOut"), !s.series) return;
					r.hoverPoints = d, r.hoverPoint = s, s.firePointEvent("mouseOver", void 0, () => {
						a && s && a.refresh(p ? d : s, e);
					});
				} else if (f && a && !a.isHidden) {
					let t = a.getAnchor([{}], e);
					r.isInsidePlot(t[0], t[1], { visiblePlotOnly: !0 }) && a.updatePosition({
						plotX: t[0],
						plotY: t[1]
					});
				}
				this.unDocMouseMove || (this.unDocMouseMove = M(r.container.ownerDocument, "mousemove", (e) => Pn[Rn.hoverChartIndex ?? -1]?.pointer?.onDocumentMouseMove(e)), this.eventsToUnbind.push(this.unDocMouseMove)), r.axes.forEach(function(t) {
					let n, i = t.crosshair?.snap ?? !0;
					i && ((n = r.hoverPoint) && n.series[t.coll] === t || (n = ge(d, (e) => e.series?.[t.coll] === t))), n || !i ? t.drawCrosshair(e, n) : t.hideCrosshair();
				});
			}
			setDOMEvents() {
				let e = this.chart.container, t = e.ownerDocument, n = (e) => e.parentElement || e.getRootNode()?.host?.parentElement;
				e.onmousedown = this.onContainerMouseDown.bind(this), e.onmousemove = this.onContainerMouseMove.bind(this), e.onclick = this.onContainerClick.bind(this), this.eventsToUnbind.push(M(e, "mouseenter", this.onContainerMouseEnter.bind(this)), M(e, "mouseleave", this.onContainerMouseLeave.bind(this))), Rn.unbindDocumentMouseUp.some((e) => e.doc === t) || Rn.unbindDocumentMouseUp.push({
					doc: t,
					unbind: M(t, "mouseup", this.onDocumentMouseUp.bind(this))
				});
				let r = n(this.chart.renderTo);
				for (; r && r.tagName !== "BODY";) this.eventsToUnbind.push(M(r, "scroll", () => {
					delete this.chartPosition;
				})), r = n(r);
				this.eventsToUnbind.push(M(e, "touchstart", this.onContainerTouchStart.bind(this), { passive: !1 }), M(e, "touchmove", this.onContainerTouchMove.bind(this), { passive: !1 })), Rn.unbindDocumentTouchEnd ||= M(t, "touchend", this.onDocumentTouchEnd.bind(this), { passive: !1 }), this.setPointerCapture(), M(this.chart, "redraw", this.setPointerCapture.bind(this));
			}
			setPointerCapture() {
				if (!In) return;
				let e = this.pointerCaptureEventsToUnbind, t = this.chart, n = t.container, r = (t.options.tooltip?.followTouchMove ?? !0) && t.series.some((e) => e.options.findNearestPointBy.indexOf("y") > -1);
				!this.hasPointerCapture && r ? (e.push(M(n, "pointerdown", (e) => {
					e.target?.hasPointerCapture(e.pointerId) && e.target?.releasePointerCapture(e.pointerId);
				}), M(n, "pointermove", (e) => {
					t.pointer?.getPointFromEvent(e)?.onMouseOver(e);
				})), this.hasPointerCapture = !0) : this.hasPointerCapture && !r && (e.forEach((e) => e()), e.length = 0, this.hasPointerCapture = !1);
			}
			setHoverChartIndex(e) {
				let t = this.chart, n = j.charts[q(Rn.hoverChartIndex, -1)];
				if (n && n !== t) {
					let r = { relatedTarget: t.container };
					e && !e?.relatedTarget && Object.assign({}, e, r), n.pointer?.onContainerMouseLeave(e || r);
				}
				n?.mouseIsDown || (Rn.hoverChartIndex = t.index);
			}
			touch(e, t) {
				let n, r, { chart: i, pinchDown: a = [] } = this;
				this.setHoverChartIndex(), (e = this.normalize(e)).touches.length === 1 ? ((r = i.isInsidePlot(e.chartX - i.plotLeft, e.chartY - i.plotTop, { visiblePlotOnly: !0 })) && !i.exporting?.openMenu ? (t && this.runPointActions(e), e.type === "touchmove" && (this.hasPinchMoved = n = !!a[0] && (a[0].chartX - e.chartX) ** 2 + (a[0].chartY - e.chartY) ** 2 >= 16), q(n, !0) && this.pinch(e)) : t && this.reset(), (i.tooltip?.options.followTouchMove ?? !0) && r && e.preventDefault()) : e.touches.length === 2 && this.pinch(e);
			}
			touchSelect(e) {
				return !!(this.chart.zooming.singleTouch && e.touches && e.touches.length === 1);
			}
			zoomOption(e) {
				let t = this.chart, n = t.inverted, r = t.zooming.type || "", i, a;
				/touch/.test(e.type) && (r = q(t.zooming.pinchType, r)), this.zoomX = i = /x/.test(r), this.zoomY = a = /y/.test(r), this.zoomHor = i && !n || a && n, this.zoomVert = a && !n || i && n, this.hasZoom = (i || a) && Ln(e, t.zooming.key);
			}
		}
		Rn.unbindDocumentMouseUp = [], (c = Rn ||= {}).compose = function(e) {
			we(Fn, "Core.Pointer") && M(e, "beforeRender", function() {
				this.pointer = new c(this, this.options);
			});
		};
		let zn = Rn, { setLength: Bn, splice: Vn } = {
			convertToNumber: function(e, t) {
				switch (typeof e) {
					case "boolean": return +!!e;
					case "number": return isNaN(e) && !t ? null : e;
					default: return isNaN(e = parseFloat(`${e ?? ""}`)) && !t ? null : e;
				}
			},
			setLength: function(e, t, n) {
				return Array.isArray(e) ? (e.length = t, e) : e[n ? "subarray" : "slice"](0, t);
			},
			splice: function(e, t, n, r, i = []) {
				if (Array.isArray(e)) return Array.isArray(i) || (i = Array.from(i)), {
					removed: e.splice(t, n, ...i),
					array: e
				};
				let a = Object.getPrototypeOf(e).constructor, o = e[r ? "subarray" : "slice"](t, t + n), s = new a(e.length - n + i.length);
				return s.set(e.subarray(0, t), 0), s.set(i, t), s.set(e.subarray(t + n), t + i.length), {
					removed: o,
					array: s
				};
			}
		}, Hn = class {
			constructor(e = {}) {
				this.isDataTable = !0, this.autoId = !e.id, this.columns = {}, this.id = e.id || Fe(), this.rowCount = 0, this.versionTag = Fe();
				let t = 0;
				K(e.columns || {}, (e, n) => {
					this.columns[n] = e.slice(), t = Math.max(t, e.length);
				}), this.applyRowCount(t);
			}
			applyRowCount(e) {
				this.rowCount = e, K(this.columns, (t, n) => {
					t.length !== e && (this.columns[n] = Bn(t, e));
				});
			}
			deleteRows(e, t = 1) {
				if (t > 0 && e < this.rowCount) {
					let n = 0;
					K(this.columns, (r, i) => {
						this.columns[i] = Vn(r, e, t).array, n = r.length;
					}), this.rowCount = n;
				}
				B(this, "afterDeleteRows", {
					rowIndex: e,
					rowCount: t
				}), this.versionTag = Fe();
			}
			getColumn(e, t) {
				return this.columns[e];
			}
			getColumns(e, t) {
				return (e || Object.keys(this.columns)).reduce((e, t) => (e[t] = this.columns[t], e), {});
			}
			getRowObject(e, t) {
				let n = {}, r = this.columns;
				for (let i of (t ??= Object.keys(this.columns), t)) n[i] = r[i]?.[e];
				return n;
			}
			setColumn(e, t = [], n = 0, r) {
				this.setColumns({ [e]: t }, n, r);
			}
			setColumns(e, t, n) {
				let r = this.rowCount;
				K(e, (e, t) => {
					this.columns[t] = e.slice(), r = e.length;
				}), this.applyRowCount(r), n?.silent || (B(this, "afterSetColumns"), this.versionTag = Fe());
			}
			setRow(e, t = this.rowCount, n, r) {
				var i;
				let { columns: a } = this, o = n ? this.rowCount + 1 : t + 1, s = Object.keys(e);
				if (r?.addColumns !== !1) for (let e = 0, t = s.length; e < t; e++) a[i = s[e]] || (a[i] = Array(this.rowCount));
				K(a, (r, i) => {
					r && (n ? r = Vn(r, t, 0, !0, [e[i]]).array : r[t] = i in e ? e[i] : r[t], a[i] = r);
				}), this.applyRowCount(Math.max(o, this.rowCount)), r?.silent || (B(this, "afterSetRows", { rowIndex: t }), this.versionTag = Fe());
			}
			getModified() {
				return this.modified || this;
			}
		};
		var Un = b ||= {};
		function Wn(e, t, n) {
			let r = this.legendItem = this.legendItem || {}, { chart: i, options: a } = this, { baseline: o = 0, symbolWidth: s, symbolHeight: c } = e, l = this.symbol || "circle", u = c / 2, d = i.renderer, f = r.group, p = o - Math.round((e.fontMetrics?.b || c) * (n ? .4 : .3)), m = {}, h, g = a.marker, _ = 0;
			if (i.styledMode || (m["stroke-width"] = Math.min(a.lineWidth || 0, 24), a.dashStyle ? m.dashstyle = a.dashStyle : a.linecap !== "square" && (m["stroke-linecap"] = "round")), r.line = d.path().addClass("highcharts-graph").attr(m).add(f), n && (r.area = d.path().addClass("highcharts-area").add(f)), m["stroke-linecap"] && (_ = Math.min(r.line.strokeWidth(), s) / 2), s) {
				let e = [[
					"M",
					_,
					p
				], [
					"L",
					s - _,
					p
				]];
				r.line.attr({ d: e }), r.area?.attr({ d: [
					...e,
					[
						"L",
						s - _,
						o
					],
					[
						"L",
						_,
						o
					]
				] });
			}
			if (g && !1 !== g.enabled && s) {
				let e = Math.min(q(g.radius, u), u);
				l.indexOf("url") === 0 && (g = G(g, {
					width: c,
					height: c
				}), e = 0), r.symbol = h = d.symbol(l, s / 2 - e, p - e, 2 * e, 2 * e, z({ context: "legend" }, g)).addClass("highcharts-point").add(f), h.isMarker = !0;
			}
		}
		Un.areaMarker = function(e, t) {
			Wn.call(this, e, t, !0);
		}, Un.lineMarker = Wn;
		let Gn = b, { defaultOptions: Kn } = We;
		var qn = x ||= {};
		function Jn(e, t) {
			let n = Kn.plotOptions || {}, r = t.defaultOptions, i = t.prototype;
			return i.type = e, i.pointClass ||= Nn, !qn.seriesTypes[e] && (r && (n[e] = r), qn.seriesTypes[e] = t, !0);
		}
		qn.seriesTypes = j.seriesTypes, qn.registerSeriesType = Jn, qn.seriesType = function(e, t, n, r, i) {
			let a = Kn.plotOptions || {};
			if (t ||= "", a[e] = G(a[t], n), delete qn.seriesTypes[e], Jn(e, ue(qn.seriesTypes[t] || j.Series, r)), qn.seriesTypes[e].prototype.type = e, i) {
				class t extends Nn {}
				z(t.prototype, i), qn.seriesTypes[e].prototype.pointClass = t;
			}
			return qn.seriesTypes[e];
		};
		let $ = x, { animObject: Yn, setAnimation: Xn } = $e, { defaultOptions: Zn } = We, { registerEventOptions: Qn } = nn, { svg: $n, win: er } = j, { seriesTypes: tr } = $, { format: nr } = ft;
		class rr {
			constructor() {
				this.zoneAxis = "y";
			}
			init(e, t) {
				let n;
				B(this, "init", { options: t });
				let r = e.series;
				this.eventsToUnbind = [], this.condemnedPoints ||= [], this.chart = e, this.options = this.setOptions(t);
				let i = this.options, a = !1 !== i.visible;
				this.dataTable ??= i.dataTable?.isDataTable ? i.dataTable : new Hn(i.dataTable), this.linkedSeries = [], this.bindAxes(), z(this, {
					name: i.name,
					state: "",
					visible: a,
					selected: !0 === i.selected
				}), Qn(this, i), (i.events?.click || i.point?.events?.click || i.allowPointSelect) && (e.runTrackerClick = !0), this.getColor(), this.getSymbol(), this.isCartesian && (e.hasCartesianSeries = !0), r.length && (n = r[r.length - 1]), this._i = q(n?._i, -1) + 1, this.opacity = this.options.opacity, e.orderItems("series", Pe(this, r)), this.points || this.data || this.setData(i.data, !1), B(this, "afterInit");
			}
			is(e) {
				return tr[e] && this instanceof tr[e];
			}
			bindAxes() {
				let e, t = this, n = t.options, r = t.chart;
				B(this, "bindAxes", null, function() {
					(t.axisTypes || []).forEach(function(i) {
						(r[i] || []).forEach(function(r) {
							e = r.options, (q(n[i], 0) === r.index || n[i] !== void 0 && n[i] === e.id) && (Pe(t, r.series), t[i] = r, r.isDirty = !0);
						}), t[i] || t.optionalAxis === i || Y(18, !0, r);
					});
				}), B(this, "afterBindAxes");
			}
			hasData() {
				return this.visible && this.dataMax !== void 0 && this.dataMin !== void 0 || this.visible && this.dataTable.rowCount > 0;
			}
			hasMarkerChanged(e, t) {
				let n = e.marker, r = t.marker || {};
				return n && (r.enabled && !n.enabled || r.symbol !== n.symbol || r.height !== n.height || r.width !== n.width);
			}
			autoIncrement(e) {
				let t, n = this.options, { pointIntervalUnit: r, relativeXValue: i } = this.options, a = this.chart.time, o = this.xIncrement ?? a.parse(n.pointStart) ?? 0;
				if (this.pointInterval = t = q(this.pointInterval, n.pointInterval, 1), i && V(e) && (t *= e), r) {
					let e = a.toParts(o);
					r === "day" ? e[2] += t : r === "month" ? e[1] += t : r === "year" && (e[0] += t), t = a.makeTime.apply(a, e) - o;
				}
				return i && V(e) ? o + t : (this.xIncrement = o + t, o);
			}
			setOptions(e) {
				let t, n = this.chart, r = n.options.plotOptions, i = n.userOptions || {}, a = G(e), o = n.styledMode, s = {
					plotOptions: r,
					userOptions: a
				};
				B(this, "setOptions", s);
				let c = s.plotOptions[this.type], l = i.plotOptions || {}, u = l.series || {}, d = Zn.plotOptions[this.type] || {}, f = l[this.type] || {};
				c.dataLabels = this.mergeArrays(d.dataLabels, c.dataLabels), this.userOptions = s.userOptions;
				let p = G(c, r.series, f, a), { negativeColor: m, negativeFillColor: h, zoneAxis: g = "y", zones: _ } = p, v = (_ || []).map((e) => ({ ...e }));
				return this.tooltipOptions = G(Zn.tooltip, Zn.plotOptions.series?.tooltip, d?.tooltip, n.userOptions.tooltip, l.series?.tooltip, f.tooltip, a.tooltip), this.stickyTracking = q(a.stickyTracking, f.stickyTracking, u.stickyTracking, !!this.tooltipOptions.shared && !this.noSharedTooltip || p.stickyTracking), c.marker === null && delete p.marker, this.zones ||= v, this.zoneAxis = g, (m || h) && !_ && (t = {
					value: p[g + "Threshold"] || p.threshold || 0,
					className: "highcharts-negative"
				}, o || (typeof m != "boolean" && (t.color = m), t.fillColor = h), v.push(t)), v.length && L(v[v.length - 1].value) && v.push(o ? {} : {
					color: this.color,
					fillColor: this.fillColor
				}), B(this, "afterSetOptions", { options: p }), p;
			}
			getName() {
				let { chart: e, options: t } = this, { dataMapping: n, name: r } = t, i = n?.y || n?.value, a = H(i) ? i : i?.column;
				return r ?? (H(a) ? a : nr(e.options.lang.seriesName, this, e));
			}
			getCyclic(e, t, n) {
				let r, i, a = this.chart, o = `${e}Index`, s = `${e}Counter`, c = n?.length || a.options.chart.colorCount;
				!t && (L(i = q(e === "color" ? this.options.colorIndex : void 0, this[o])) ? r = i : (a.series.length || (a[s] = 0), r = a[s] % c, a[s] += 1), n && (t = n[r])), r !== void 0 && (this[o] = r), this[e] = t;
			}
			getColor() {
				let e = this.chart;
				e.styledMode ? this.getCyclic("color") : this.options.colorByPoint ? this.color = "var(--highcharts-neutral-color-20)" : this.getCyclic("color", this.options.color || Zn.plotOptions[this.type]?.color, e.options.colors);
			}
			getPointsCollection() {
				return (this.hasGroupedData ? this.points : this.data) || [];
			}
			getSymbol() {
				let e = this.options.marker;
				this.getCyclic("symbol", e.symbol, this.chart.options.symbols);
			}
			getColumn(e, t, n) {
				let r = t ? this.dataTable.getModified() : this.dataTable, i = r.rowCount, a = this.dataTable !== r, o = r.getColumn(e, !0);
				if (e === "x" && !a) {
					if (this.xColumn) return this.xColumn;
					let e = r.getColumn("name", !0), t = this.options, n = (e) => {
						if (this.xColumnIsNumbers !== void 0) return this.xColumnIsNumbers;
						for (let t of e) if (typeof t != "number") return this.xColumnIsNumbers = !1;
						return this.xColumnIsNumbers = !0;
					};
					if (this.xIncrement = null, !o || this.xAxis?.hasNames || t.relativeXValue || o.length < (t.turboThreshold || Infinity) && !this.boosted && !n(o)) {
						let t = [];
						for (let n = 0; n < i; n++) {
							let r = o?.[n];
							L(r) || (this.xIncrement ??= t[t.length - 1] ?? null), t.push(this.getX(r, e?.[n]));
						}
						return this.xColumn = t;
					}
				}
				return o || Array(n ? i : 0);
			}
			getX(e, t) {
				return this.xAxis?.hasNames && this.dataTable.getColumn("name", !0) && L(t) ? this.xAxis.nameToX({
					name: t,
					series: this
				}, e) : e === void 0 || V(e) && this.options.relativeXValue ? this.autoIncrement(e) : (typeof e == "string" && (e = this.chart.time.parse(e)), e);
			}
			matchPoints(e, t, n, r) {
				let { dataTable: i, options: a, requireSorting: o } = this, s = a.dataSorting, c = this.data, l = [], u = [], d = i.rowCount === c.length, f, p, m, h = 0, g = !0;
				this.xIncrement = null, delete this.xColumn;
				let _ = i.getColumn("x"), v = i.getColumn("id"), y = s?.matchByName ? i.getColumn("name") : void 0, b = i.getColumn("index");
				for (p = 0; p < i.rowCount; p++) {
					let a = _?.[p], m = v?.[p], g = y?.[p], x = b?.[p], [S, C] = m && t ? [m, t] : g && n ? [g, n] : L(x) && r ? [x, r] : L(a) && e ? [a, e] : [], w = -1;
					if (C) {
						if ((w = C.indexOf(S, h)) === -1) {
							let t = _?.[p], n = e?.length ?? i.rowCount;
							for (; n && e && typeof t == "number" && e[n - 1] > t;) n--;
							l.push({
								newIndex: n,
								oldIndex: p
							});
						} else c[w] && (u.push({
							newIndex: w,
							oldIndex: p
						}), c[w].touched = !0, o && (h = w + 1));
						(!d || p !== w || s?.enabled || this.hasDerivedData) && (f = !0);
					} else l.push({
						newIndex: p,
						oldIndex: p
					});
				}
				if (f) {
					for (u.forEach((e) => {
						c[e.newIndex].applyOptions(i.getRowObject(e.oldIndex));
					}), l.sort((e, t) => t.newIndex - e.newIndex), l.forEach((e) => {
						c.splice(e.newIndex, 0, void 0);
					}), p = c.length; p--;) (m = c[p]) && !m.touched && (m.destroy(), c.splice(p, 1));
					this.isDirtyData = this.isDirty = !0;
				} else if (d && !s?.enabled) {
					for (p = 0; p < i.rowCount; p++) if (!c[p].destroyed && !c[p].condemned) {
						let e = i.getRowObject(p);
						e && (Object.keys(e).forEach((t) => {
							L(e[t]) || delete e[t];
						}), Object.keys(e).length && c[p].update(e, !1, void 0, !1));
					}
				} else g = !1;
				if (c.forEach((e) => {
					e && (e.touched = !1);
				}), !g) return !1;
				let x = this.getColumn("x");
				return this.xIncrement === null && x.length && (this.xIncrement = N(x), this.autoIncrement()), !0;
			}
			getDataColumnKeys() {
				return this.dataColumnKeys || ["x", ...this.pointArrayMap || ["y"]];
			}
			setData(e, t = !0, n, r) {
				let i, a, o, s = this.dataTable, c = this.options, l = this.points, u = l?.length || 0, d = s.getColumn("x"), f = s.getColumn("id"), p = c.dataSorting?.matchByName && l?.map((e) => e.name) || s.getColumn("name"), m = s.getColumn("index"), h = this.chart, g = this.xAxis;
				if (h.options.chart.allowMutatingData || (c.data && delete this.options.data, this.userOptions.data && delete this.userOptions.data, o = G(!0, e)), e = o || e, this.xIncrement = null, delete this.xColumn, delete this.xColumnIsNumbers, s !== c.dataTable && delete s.columns.x, this.colorCounter = 0, U(e) ? this.setDataFromArray(e) : this.setDataFromTable(e), !1 === r || !u || this.cropped || this.hasGroupedData || !this.visible || this.boosted || (i = this.matchPoints(d, f, p, m)), !i) {
					for (H(this.getColumn("y")[0]) && Y(14, !0, h), this.data = [], a = u; a--;) l[a]?.destroy();
					g && (g.minRange = g.userMinRange), this.isDirty = h.isDirtyBox = !0, this.isDirtyData = !!l, n = !1;
				}
				U(e) && (this.options.data = this.userOptions.data = e), c.legendType === "point" && (this.processData(), this.generatePoints()), t && h.redraw(n);
			}
			setDataFromArray(e) {
				let t = e.length, { keys: n, turboThreshold: r } = this.options, { pointValKey: i = "y", pointArrayMap: a = [] } = this, o = a.length, s = this.dataTable, c = this.getDataColumnKeys(), l = r && t > r, u = 0, d = 1;
				if (l) {
					let r = this.getFirstValidPoint(e), f = this.getFirstValidPoint(e, t - 1, -1), p = (e) => !!(U(e) && (n || V(e[0])));
					if (V(r) && V(f)) s.setColumn(i, e);
					else if (p(r) && p(f)) if (o) {
						let t = r.length === o, n = Array(r.length).fill(0).map(() => []);
						for (let t of e) for (let e = 0; e <= o; e++) n[e]?.push(t[e]);
						s.setColumns((t ? a : c).reduce((e, t, r) => (e[t] = n[r], e), {}));
					} else {
						n && (u = n.indexOf("x"), d = n.indexOf("y"), u = u >= 0 ? u : 0, d = d >= 0 ? d : 1), r.length === 1 && (d = 0);
						let t = [], a = [];
						if (u === d) {
							for (let t of e) a.push(t[d]);
							s.setColumn(i, a);
						} else {
							for (let n of e) t.push(n[u]), a.push(n[d]);
							s.setColumns({
								x: t,
								[i]: a
							});
						}
					}
					else l = !1;
				}
				if (!l) {
					let n = {};
					for (let r = 0; r < t; r++) {
						let i = this.pointClass.prototype.optionsToObject.call({ series: this }, e[r]);
						for (let e of Object.keys(i)) n[e] || (n[e] = Array(t)), n[e][r] = i[e];
					}
					t ? s.setColumns(n) : s.deleteRows(0, s.rowCount);
				}
			}
			setDataFromTable(e) {
				let { chart: t, options: n, dataTable: r } = this, i = t.getDataTable(n), a = e ? [e] : i.length ? i : t.dataTable, o = this.getDataColumnKeys(), s = n.dataMapping, c = o.slice();
				s && (Object.keys(s).forEach((e) => {
					we(c, e);
				}), this.dataColumnKeys = c), a.forEach((e, t) => {
					let n = c.reduce((n, r) => {
						let i = s?.[r], a = e.columns || {}, o = e.id, c = H(i) ? t === 0 && a[i] : ((i?.dataTable || 0) === t || o && i?.dataTable === o) && (V(i?.column) ? Object.values(a)[i.column] : a[i?.column || r]);
						return c && (n[r] = c), n;
					}, {});
					(s || e) && r.setColumns(n), e.isDataTable && this.bindDataTableEvents(e, n);
				});
			}
			bindDataTableEvents(e, t) {
				if (this.hasBoundDataTableEvents) return;
				let { chart: n, eventsToUnbind: r } = this, i = () => {
					clearTimeout(n.redrawTimeout), n.redrawTimeout = setTimeout(() => n.renderer && n.redraw(), 0);
				};
				r.push(M(e, "afterSetRows", (e) => {
					let n = e.rowIndex;
					if (V(n)) {
						let e = Hn.prototype.getRowObject.call({ columns: t }, n), r = this.data[n];
						e && (this.currentDataGrouping ? this.setData() : (r ? r.update(e, !1) : this.addPoint(e, !1), i()));
					}
				})), r.push(M(e, "afterDeleteRows", (e) => {
					let { rowCount: t, rowIndex: n } = e;
					if (V(n)) {
						for (let e = n + t - 1; e >= n; e--) this.removePoint(e, !1);
						i();
					}
				})), r.push(M(e, "afterSetColumns", (e) => {
					this.setData(e.target);
				})), this.hasBoundDataTableEvents = !0;
			}
			getProcessedData(e) {
				let t = this, { dataTable: n, isCartesian: r, options: i, xAxis: a } = t, o = i.cropThreshold, s = e || t.getExtremesFromAll, c = a?.logarithmic, l = n.rowCount, u, d, f = 0, p, m, h, g = t.getColumn("x"), _ = n, v = !1;
				return a && (m = (p = a.getExtremes()).min, h = p.max, v = !!(a.categories && !a.names.length), r && t.sorted && !s && (!o || l > o || t.forceCrop) && (g[l - 1] < m || g[0] > h ? _ = new Hn() : t.getColumn(t.pointValKey || "y").length && (g[0] < m || g[l - 1] > h) && (_ = (u = this.cropData(n, m, h)).modified, f = u.start, d = !0))), g = this.getColumn("x", !0), {
					modified: _,
					cropped: d,
					cropStart: f,
					closestPointRange: fe([c ? g.map(c.log2lin) : g], () => t.requireSorting && !v && Y(15, !1, t.chart))
				};
			}
			processData(e) {
				let t = this.xAxis, n = this.dataTable;
				if (this.isCartesian && !this.isDirty && !t.isDirty && !this.yAxis.isDirty && !e) return !1;
				let r = this.getProcessedData();
				n.modified = r.modified, this.cropped = r.cropped, this.cropStart = r.cropStart, this.closestPointRange = this.basePointRange = r.closestPointRange, B(this, "afterProcessData");
			}
			cropData(e, t, n) {
				let r = e === this.dataTable ? this.getColumn("x") : e.getColumn("x", !0), i = r.length, a, o, s = 0, c = i;
				for (a = 0; a < i; a++) if (r[a] >= t) {
					s = Math.max(0, a - 1);
					break;
				}
				for (o = a; o < i; o++) if (r[o] > n) {
					c = o + 1;
					break;
				}
				let l = Object.keys(e.columns).reduce((t, n) => (t[n] = (e.getColumn(n, !0) || []).slice(s, c), t), {});
				return l.x = r.slice(s, c), {
					modified: new Hn({ columns: l }),
					start: s,
					end: c
				};
			}
			generatePoints() {
				let e = this.options, t = this.hasProcessedDataTable ? void 0 : e.data, n = this.dataTable.getModified(), r = this.getColumn("x", !0), i = this.pointClass, a = n.rowCount, o = this.cropStart || 0, s = this.hasGroupedData, c = e.keys, l = [], u = e.dataGrouping?.groupAll ? o : 0, d = this.getDataColumnKeys(), f, p, m, h, g = this.data, _;
				if (!g && !s) {
					let e = [];
					e.length = t?.length || 0, g = this.data = e;
				}
				for (c && s && (this.options.keys = !1), h = 0; h < a; h++) p = o + h, s ? ((m = new i(this, n.getRowObject(h, d))).dataGroup = this.groupMap?.[u + h], m.dataGroup?.options && (m.options = m.dataGroup.options, z(m, m.dataGroup.options), delete m.dataLabels, m.key = m.name ?? m.category)) : (m = g[p], _ = t ? t[p] : n.getRowObject(h), m || _ === void 0 ? m && (m.category = this.xAxis?.categories?.[m.x] ?? m.x, m.key = m.name ?? m.category) : g[p] = m = new i(this, _, r[h])), m && (m.index = s ? u + h : p, l[h] = m);
				if (this.options.keys = c, g && (a !== (f = g.length) || s)) for (h = 0; h < f; h++) h !== o || s || (h += a), g[h] && (g[h].destroyElements(), g[h].plotX = void 0);
				this.data = g, this.points = l, B(this, "afterGeneratePoints");
			}
			getXExtremes(e) {
				return {
					min: re(e),
					max: N(e)
				};
			}
			getExtremes(e, t) {
				let { xAxis: n, yAxis: r } = this, i = t || this.getExtremesFromAll || this.options.getExtremesFromAll, a = i && this.cropped ? this.dataTable : this.dataTable.getModified(), o = a.rowCount, s = e || this.stackedYData, c = s ? [s] : (this.keysAffectYAxis || this.pointArrayMap || ["y"])?.map((e) => a.getColumn(e, !0) || []) || [], l = this.getColumn("x", !0), u = [], d = this.requireSorting && !this.is("column") ? 1 : 0, f = !!r && r.positiveValuesOnly, p = i || this.cropped || !n, m, h, g, _ = 0, v = 0;
				for (n && (_ = (m = n.getExtremes()).min, v = m.max), g = 0; g < o; g++) if (h = l[g], p || (l[g + d] || h) >= _ && (l[g - d] || h) <= v) for (let e of c) {
					let t = e[g];
					V(t) && (t > 0 || !f) && u.push(t);
				}
				let y = {
					activeYData: u,
					dataMin: re(u),
					dataMax: N(u)
				};
				return B(this, "afterGetExtremes", { dataExtremes: y }), y;
			}
			applyExtremes() {
				let e = this.getExtremes();
				return this.dataMin = e.dataMin, this.dataMax = e.dataMax, e;
			}
			getFirstValidPoint(e, t = 0, n = 1) {
				let r = e.length, i = t;
				for (; i >= 0 && i < r;) {
					if (L(e[i])) return e[i];
					i += n;
				}
			}
			translate() {
				this.generatePoints();
				let { options: e, xAxis: t, yAxis: n } = this, { stacking: r, threshold: i } = e, { hasRendered: a, polar: o } = this.chart, s = this.points.concat(this.condemnedPoints), c = s.length, l = this.pointPlacementToXValue(), u = !!l, d = e.startFromThreshold ? i : 0, f = e?.nullInteraction && n.len, p, m, h, g, _ = Number.MAX_VALUE;
				function v(e) {
					return P(e, -1e9, 1e9);
				}
				let y = (e, n) => {
					let r = t.translate(e, !1, !1, n, !0, l);
					return V(r) ? F(v(r)) : void 0;
				}, b = (e, t, r) => {
					if (V(e) && t.plotX !== void 0) {
						let t = n.translate(e, !1, !0, r, !0);
						return V(t) ? v(t) : void 0;
					}
					if (!V(e) && f) return f;
				};
				for (p = 0; p < c; p++) {
					let e = s[p], c = e.x, f, x, S = e.y, C = e.low, w = r && n.stacking?.stacks[(this.negStacks && S < (d ? 0 : i) ? "-" : "") + this.stackKey];
					e.plotX = m = y(c), r && this.visible && w && w[c] && (g = this.getStackIndicator(g, c, this.index), !e.isNull && g.key && (x = (f = w[c]).points[g.key]), f && U(x) && (C = x[0], S = x[1], C === d && g.key === w[c].base && (C = q(V(i) ? i : n.min)), n.positiveValuesOnly && L(C) && C <= 0 && (C = void 0), e.total = e.stackTotal = q(f.total), e.percentage = L(e.y) && f.total ? e.y / f.total * 100 : void 0, e.stackY = S, this.irregularWidths || f.setOffset(this.pointXOffset || 0, this.barW || 0, void 0, void 0, void 0, this.xAxis))), e.yBottom = L(C) ? v(n.translate(C, !1, !0, !1, !0)) : void 0, this.dataModify && (S = this.dataModify.modifyValue(S, p)), e.plotY = b(S, e), e.origin = !a || e.graphic || o ? void 0 : {
						x: y(c, !0),
						y: b(S, e, !0)
					}, e.isInside = this.isPointInside(e), e.clientX = u ? F(t.translate(c, !1, !1, !1, !0, l)) : m, e.negative = (e.y || 0) < (i || 0), !e.isNull && !1 !== e.visible && V(m) && (V(h) && (_ = Math.min(_, Math.abs(m - h))), h = m), e.zone = this.zones.length ? e.getZone() : void 0;
				}
				this.closestPointRangePx = _, B(this, "afterTranslate");
			}
			getValidPoints(e, t, n) {
				let r = this.chart;
				return (e || this.points || []).filter(function(e) {
					let { plotX: i, plotY: a } = e;
					return (!!n || !e.isNull && !!V(a)) && (!t || !!r.isInsidePlot(i, a, { inverted: r.inverted })) && !1 !== e.visible;
				});
			}
			getSharedClipKey() {
				return this.sharedClipKey = (this.options.xAxis || 0) + "," + (this.options.yAxis || 0), this.sharedClipKey;
			}
			setClip() {
				let { chart: e, group: t, markerGroup: n, options: r, plotClipGroup: i } = this, a = e.sharedClips, o = e.renderer, s = e.getClipBox(this), c = r.clip ?? !0, l = this.getSharedClipKey(), u = a[l];
				u ? u.animate(s) : a[l] = u = o.clipRect(s), t?.clip(c ? u : void 0), n?.clip(), i?.clip(c && this.yAxis.clippable ? e.plotClipInner : void 0);
			}
			animate(e) {
				let { chart: t, group: n, markerGroup: r } = this, i = t.inverted, a = Yn(this.options.animation), o = [
					this.getSharedClipKey(),
					a.duration,
					a.easing,
					a.defer
				].join(","), s = t.sharedClips[o], c = t.sharedClips[o + "m"];
				if (e && n) {
					let e = t.getClipBox(this);
					if (s) s.attr("height", e.height);
					else {
						e.width = 0, i && (e.x = t.plotHeight), s = t.renderer.clipRect(e), t.sharedClips[o] = s;
						let n = {
							x: -99,
							y: -99,
							width: i ? t.plotWidth + 199 : 99,
							height: i ? 99 : t.plotHeight + 199
						};
						c = t.renderer.clipRect(n), t.sharedClips[o + "m"] = c;
					}
					n.clip(s), r?.clip(c);
				} else if (s && !s.hasClass("highcharts-animating")) {
					let e = t.getClipBox(this), n = a.step;
					(r?.element.childNodes.length || t.series.length > 1) && (a.step = function(e, t) {
						n && n.apply(t, arguments), t.prop === "width" && c?.element && c.attr(i ? "height" : "width", e + 99);
					}), s.addClass("highcharts-animating").animate(e, a);
				}
			}
			afterAnimate() {
				this.setClip(), K(this.chart.sharedClips, (e, t, n) => {
					e && !this.chart.container.querySelector(`[clip-path="url(#${e.id})"]`) && (e.destroy(), delete n[t]);
				}), this.finishedAnimating = !0, B(this, "afterAnimate");
			}
			drawPoints(e) {
				let t, n, r, i, a, o, s;
				e ||= this.points.concat(this.condemnedPoints);
				let c = this.chart, l = c.styledMode, { colorAxis: u, options: d } = this, f = d.marker, p = d.nullInteraction, m = this[this.specialGroup || "markerGroup"], h = this.xAxis, g = q(f.enabled, !h || !!h.isRadial || null, this.closestPointRangePx >= f.enabledThreshold * f.radius);
				if (!1 !== f.enabled || this._hasPointMarkers) for (t = 0; t < e.length; t++) {
					i = (r = (n = e[t]).graphic) ? "animate" : "attr", a = n.marker || {}, o = !!n.marker;
					let d = n.isNull;
					if ((g && !L(a.enabled) || a.enabled) && (!d || p) && !1 !== n.visible) {
						let e = q(a.symbol, this.symbol, "rect");
						s = this.markerAttribs(n, n.selected && "select");
						let t = !1 !== n.isInside;
						if (!r && t && ((s.width || 0) > 0 || n.hasImage) && (n.graphic = r = c.renderer.symbol(e, s.x, s.y, s.width, s.height, o ? a : f).add(m), n.origin)) {
							let e = n.getOrigin(n.origin, s);
							l || (e.opacity = 0), r.attr(e), i = "animate";
						}
						if (r) {
							i === "animate" && r?.animate(s);
							let e = this.pointAttribs(n, l || !n.selected ? void 0 : "select");
							l ? u && r.css({ fill: e.fill }) : r[i](e), r.addClass(n.getClassName(), !0);
						}
					} else r && (n.graphic = r.destroy());
				}
			}
			markerAttribs(e, t) {
				let n = this.options, r = n.marker, i = e.marker || {}, a = i.symbol || r.symbol, o = {}, s, c, l = q(i.radius, r?.radius);
				t && (s = r?.states?.[t], c = i.states?.[t], l = q(c?.radius, s?.radius, l && l + (s?.radiusPlus || 0))), e.hasImage = a && a.indexOf("url") === 0, e.hasImage && (l = 0);
				let u = e.pos();
				return V(l) && u && (n.crisp && (u[0] = oe(u[0], e.hasImage ? 0 : a === "rect" ? r?.lineWidth || 0 : 1)), o.x = u[0] - l, o.y = u[1] - l), l && (o.width = o.height = 2 * l), o;
			}
			pointAttribs(e, t) {
				let n = this.options, r = n.marker, i = e?.options, a = i?.marker || {}, o = i?.color, s = e?.color, c = e?.zone?.color, l, u, d = this.color, f, p, m = q(a.lineWidth, r.lineWidth), h = e?.isNull && n.nullInteraction ? 0 : 1;
				return d = o || c || s || d, f = a.fillColor || r.fillColor || d, p = a.lineColor || r.lineColor || d, t ||= "normal", l = r.states[t] || {}, m = q((u = a.states && a.states[t] || {}).lineWidth, l.lineWidth, m + q(u.lineWidthPlus, l.lineWidthPlus, 0)), f = u.fillColor || l.fillColor || f, p = u.lineColor || l.lineColor || p, h = q(u.opacity, l.opacity, h), {
					stroke: p,
					"stroke-width": m,
					fill: f,
					opacity: e?.condemned || e?.isInside === !1 ? 0 : h
				};
			}
			destroy(e) {
				let t, n, r = this, i = r.chart, a = /AppleWebKit\/533/.test(er.navigator.userAgent), o = r.data || [];
				for (B(r, "destroy", { keepEventsForUpdate: e }), this.removeEvents(e), (r.axisTypes || []).forEach(function(e) {
					n = r[e], n?.series && (le(n.series, r), n.isDirty = n.forceRedraw = !0);
				}), r.legendItem && r.chart.legend.destroyItem(r), t = o.length; t--;) o[t]?.destroy?.();
				for (let e of r.zones || []) R(e, void 0, !0);
				_e(r.animationTimeout), K(r, function(e, t) {
					e instanceof wt && !e.survive && e[a && t === "group" ? "hide" : "destroy"]();
				}), i.hoverSeries === r && (i.hoverSeries = void 0), le(i.series, r), i.orderItems("series"), K(r, function(t, n) {
					e && n === "hcEvents" || delete r[n];
				});
			}
			applyZones() {
				let { area: e, chart: t, graph: n, zones: r, points: i, xAxis: a, yAxis: o, zoneAxis: s } = this, { inverted: c, renderer: l } = t, u = this[`${s}Axis`], { isXAxis: d, len: f = 0, minPointOffset: p = 0 } = u || {}, m = (n?.strokeWidth() || 0) / 2 + 1, h = (e, t = 0, n = 0) => {
					c && (n = f - n);
					let { translated: r = 0, lineClip: i, value: a } = e, o = n - r;
					i?.push([
						"L",
						t,
						Math.abs(o) < m ? n - m * (o < 0 || o === 0 && L(a) ? -1 : 1) : r
					]);
				};
				if (r.length && (n || e) && u && V(u.min)) {
					let t = u.getExtremes().max + p, m = (e) => {
						e.forEach((t, n) => {
							(t[0] === "M" || t[0] === "L") && (e[n] = [
								t[0],
								d ? f - t[1] : t[1],
								d ? t[2] : f - t[2]
							]);
						});
					};
					if (r.forEach((e) => {
						e.lineClip = [], e.translated = P(u.toPixels(q(e.value, t), !0) || 0, 0, f);
					}), n && !this.showLine && n.hide(), e && e.hide(), s === "y" && i.length < a.len) for (let e of i) {
						let { plotX: t, plotY: n, zone: i } = e, a = i && r[r.indexOf(i) - 1];
						i && h(i, t, n), a && h(a, t, n);
					}
					let g = [], _ = u.toPixels(u.getExtremes().min - p, !0);
					r.forEach((t) => {
						let r = t.lineClip || [], i = Math.round(t.translated || 0);
						a.reversed && r.reverse();
						let { clip: s, simpleClip: u } = t, f = 0, p = 0, h = a.len, v = o.len;
						d ? (f = i, h = _) : (p = i, v = _);
						let y = [
							[
								"M",
								f,
								p
							],
							[
								"L",
								h,
								p
							],
							[
								"L",
								h,
								v
							],
							[
								"L",
								f,
								v
							],
							["Z"]
						], b = [
							y[0],
							...r,
							y[1],
							y[2],
							...g,
							y[3],
							y[4]
						];
						g = r.reverse(), _ = i, c && (m(b), e && m(y)), s ? (s.animate({ d: b }), u?.animate({ d: y })) : (s = t.clip = l.path(b), e && (u = t.simpleClip = l.path(y))), n && t.graph?.clip(s), e && t.area?.clip(u);
					});
				} else this.visible && (n && n.show(), e && e.show());
			}
			plotGroup(e, t, n, r, i) {
				let a = this[e], o = !a, s = {
					visibility: n,
					zIndex: r || .1
				};
				return L(this.opacity) && !this.chart.styledMode && this.state !== "inactive" && (s.opacity = this.opacity), a || (this[e] = a = this.chart.renderer.g().add(i)), a.addClass("highcharts-" + t + " highcharts-series-" + this.index + " highcharts-" + this.type + "-series " + (L(this.colorIndex) ? "highcharts-color-" + this.colorIndex + " " : "") + (this.options.className || "") + (a.hasClass("highcharts-tracker") ? " highcharts-tracker" : ""), !0), a.attr(s)[o ? "attr" : "animate"](this.getPlotBox(t)), a;
			}
			getPlotBox(e) {
				let t = this.xAxis, n = this.yAxis, r = this.chart, i = r.inverted && !r.polar && t && this.invertible && e === "series";
				r.inverted && (t = n, n = this.xAxis);
				let a = {
					scale: 1,
					translateX: t ? t.left : r.plotLeft,
					translateY: n ? n.top : r.plotTop,
					name: e
				};
				B(this, "getPlotBox", a);
				let { scale: o, translateX: s, translateY: c } = a;
				return {
					translateX: s,
					translateY: c,
					rotation: 90 * !!i,
					rotationOriginX: i ? o * (t.len - n.len) / 2 : 0,
					rotationOriginY: i ? o * (t.len + n.len) / 2 : 0,
					scaleX: i ? -o : o,
					scaleY: o
				};
			}
			removeEvents(e) {
				let { eventsToUnbind: t } = this;
				e || De(this), t.length &&= (t.forEach((e) => {
					e();
				}), 0);
			}
			render() {
				let e = this, { chart: t, options: n, hasRendered: r } = e, i = Yn(n.animation), a = e.visible ? "inherit" : "hidden", o = n.zIndex, s = t.seriesGroup, c = e.finishedAnimating ? 0 : i.duration;
				B(this, "render"), t.plotClipInner && (e.plotClipGroup ||= t.renderer.g().add(s)), e.plotGroup("group", "series", a, o, e.plotClipGroup || s), e.markerGroup = e.plotGroup("markerGroup", "markers", a, o, s), !1 !== n.clip && e.setClip(), c && e.animate?.(!0), e.drawGraph && (e.drawGraph(), e.applyZones()), e.visible && e.drawPoints(), e.drawDataLabels?.(), e.redrawPoints?.(), n.enableMouseTracking && e.drawTracker?.(), c && e.animate?.(), r || (c && i.defer && (c += i.defer), e.animationTimeout = Ae(() => {
					e.afterAnimate();
				}, c || 0)), e.isDirty = !1, e.hasRendered = !0, B(e, "afterRender");
			}
			redraw() {
				let e = this.isDirty || this.isDirtyData;
				this.translate(), this.render(), e && delete this.kdTree, this.condemnedPoints.length = 0;
			}
			reserveSpace() {
				return this.visible || !this.chart.options.chart.ignoreHiddenSeries;
			}
			searchPoint(e, t) {
				let { xAxis: n, yAxis: r } = this, i = this.chart.inverted;
				return this.searchKDTree({
					clientX: i ? n.len - e.chartY + n.pos : e.chartX - n.pos,
					plotY: i ? r.len - e.chartX + r.pos : e.chartY - r.pos
				}, t, e);
			}
			buildKDTree(e) {
				this.buildingKdTree = !0;
				let t = this, n = t.options, r = n.findNearestPointBy.indexOf("y") > -1 ? 2 : 1;
				delete t.kdTree, Ae(function() {
					t.kdTree = function e(n, r, i) {
						let a, o, s = n?.length;
						if (s) return a = t.kdAxisArray[r % i], n.sort((e, t) => (e[a] || 0) - (t[a] || 0)), {
							point: n[o = Math.floor(s / 2)],
							left: e(n.slice(0, o), r + 1, i),
							right: e(n.slice(o + 1), r + 1, i)
						};
					}(t.getValidPoints(void 0, !t.directTouch, n?.nullInteraction), r, r), t.buildingKdTree = !1;
				}, n.kdNow || e?.type === "touchstart" ? 0 : 1);
			}
			searchKDTree(e, t, n, r, i) {
				let a = this, [o, s] = this.kdAxisArray, c = t ? "distX" : "dist", l = (a.options.findNearestPointBy || "").indexOf("y") > -1 ? 2 : 1, u = !!a.isBubble, d = r || ((e, t, n) => {
					let r = e[n] || 0, i = t[n] || 0;
					return [r === i && e.index > t.index || r < i ? e : t, !1];
				}), f = i || ((e, t) => e < t);
				if (this.kdTree || this.buildingKdTree || this.buildKDTree(n), this.kdTree) return function e(t, n, r, i) {
					let l, p, m, h, g, _, v, y = n.point, b = a.kdAxisArray[r % i], x = y, S = !1;
					l = t[o], p = y[o], m = L(l) && L(p) ? l - p : null, h = t[s], g = y[s], _ = L(h) && L(g) ? h - g : 0, v = u && y.marker?.radius || 0, y.dist = Math.sqrt((m && m * m || 0) + _ * _) - v, y.distX = L(m) ? Math.abs(m) - v : Number.MAX_VALUE;
					let C = (t[b] || 0) - (y[b] || 0) + (u && y.marker?.radius || 0), w = C < 0 ? "left" : "right", T = C < 0 ? "right" : "left";
					return n[w] && ([x, S] = d(y, e(t, n[w], r + 1, i), c)), n[T] && f(Math.sqrt(C * C), x[c], S) && (x = d(x, e(t, n[T], r + 1, i), c)[0]), x;
				}(e, this.kdTree, l, l);
			}
			pointPlacementToXValue() {
				let { options: e, xAxis: t } = this, n = e.pointPlacement;
				return n === "between" && (n = t.reversed ? -.5 : .5), V(n) ? n * (e.pointRange || t.pointRange) : 0;
			}
			isPointInside(e) {
				let { chart: t, xAxis: n, yAxis: r } = this, { plotX: i = -1, plotY: a = -1 } = e;
				return a >= 0 && a <= (r ? r.len : t.plotHeight) && i >= 0 && i <= (n ? n.len : t.plotWidth);
			}
			drawTracker() {
				let e = this, t = e.options, n = t.trackByArea, r = [].concat((n ? e.areaPath : e.graphPath) || []), i = e.chart, a = i.pointer, o = i.renderer, s = i.options.tooltip?.snap || 0, c = () => {
					t.enableMouseTracking && i.hoverSeries !== e && e.onMouseOver();
				}, l = "rgba(192,192,192," + ($n ? 1e-4 : .002) + ")", u = e.tracker;
				u ? u.attr({ d: r }) : e.graph && (e.tracker = u = o.path(r).attr({
					visibility: e.visible ? "inherit" : "hidden",
					zIndex: 2
				}).addClass(n ? "highcharts-tracker-area" : "highcharts-tracker-line").add(e.group), i.styledMode || u.attr({
					"stroke-linecap": "round",
					"stroke-linejoin": "round",
					stroke: l,
					fill: n ? l : "none",
					"stroke-width": e.graph.strokeWidth() + (n ? 0 : 2 * s)
				}), [
					e.tracker,
					e.markerGroup,
					...e.dataLabelsGroups || []
				].forEach((e) => {
					e && (e.addClass("highcharts-tracker").on("mouseover", c).on("mouseout", (e) => {
						a?.onTrackerMouseOut(e);
					}), t.cursor && !i.styledMode && e.css({ cursor: t.cursor }), e.on("touchstart", c));
				})), B(this, "afterDrawTracker");
			}
			addPoint(e, t, n, r, i) {
				let a, o, s = this.options, { chart: c, data: l, dataTable: u, xAxis: d } = this, f = d?.hasNames && d.names, p = s.data, m = this.getColumn("x");
				t = q(t, !0);
				let { applyOptions: h, optionsToObject: g } = this.pointClass.prototype, _ = { series: this }, v = g.call(_, e);
				h.call(_, v, void 0, !1);
				let y = _.x;
				if (o = m.length, this.requireSorting && y < m[o - 1]) for (a = !0; o && m[o - 1] > y;) o--;
				u.setRow(v, o, !0), this.xColumn?.splice(o, 0, this.getX(y)), f && _.name && (f[y] = _.name), p?.splice(o, 0, e), (a || this.hasProcessedDataTable) && (this.data.splice(o, 0, null), this.processData()), s.legendType === "point" && this.generatePoints(), n && (l[0] && l[0].remove ? l[0].remove(!1) : ([
					l,
					p,
					this.xColumn
				].filter(L).forEach((e) => {
					e.shift();
				}), u.deleteRows(0))), !1 !== i && B(this, "addPoint", { point: _ }), this.isDirty = !0, this.isDirtyData = !0, t && c.redraw(r);
			}
			removePoint(e, t, n) {
				let r = this, { chart: i, data: a, points: o, dataTable: s } = r, c = a[e], l = function() {
					[
						o?.length === a.length ? o : void 0,
						a,
						r.options.data,
						r.xColumn
					].filter(L).forEach((t) => {
						t.splice(e, 1);
					}), s.deleteRows(e), s.modified = s, c?.destroy(), r.isDirty = !0, r.isDirtyData = !0, t && i.redraw();
				};
				Xn(n, i), t = q(t, !0), c ? c.firePointEvent("remove", null, l) : l();
			}
			remove(e, t, n, r) {
				let i = this, a = i.chart;
				function o() {
					i.destroy(r), a.isDirtyLegend = a.isDirtyBox = !0, a.linkSeries(r), q(e, !0) && a.redraw(t);
				}
				!1 === n ? o() : B(i, "remove", null, o);
			}
			update(e, t) {
				B(this, "update", { options: e = ce(e, this.userOptions) });
				let n = this, r = n.chart, i = n.userOptions, a = n.initialType || n.type, o = r.options.plotOptions, s = tr[a].prototype, c = n.finishedAnimating && { animation: !1 }, l = {}, u = e.data || e.dataTable, d, f, p = rr.keepProps.slice(), m = e.type || i.type || r.options.chart.type, h = !(this.hasDerivedData || m && m !== this.type || e.keys !== void 0 || e.pointStart !== void 0 || e.pointInterval !== void 0 || e.relativeXValue !== void 0 || e.joinBy || e.mapData || [
					"dataGrouping",
					"pointStart",
					"pointInterval",
					"pointIntervalUnit",
					"keys"
				].some((e) => n.hasOptionChanged(e)));
				m ||= a, h ? (p.push.apply(p, rr.keepPropsForPoints), !1 !== e.visible && (p.push("area", "graph"), "zones" in e || p.push("zones")), n.parallelArrays.forEach(function(e) {
					p.push(e + "Data");
				}), u && (e.dataSorting && z(n.options.dataSorting, e.dataSorting), this.setData(u, !1))) : this.dataTable.modified = this.dataTable, e.dataLabels && i.dataLabels && (e.dataLabels = this.mergeArrays(i.dataLabels, e.dataLabels)), e = G(i, {
					index: i.index === void 0 ? n.index : i.index,
					pointStart: o?.series?.pointStart ?? i.pointStart
				}, !h && { data: n.options.data }, e, c), h && e.data && (e.data = n.options.data), (p = [
					"dataLabelsGroup",
					"dataLabelsGroups",
					"dataLabelsParentGroups",
					"group",
					"markerGroup",
					"plotClipGroup",
					"transformGroup"
				].concat(p)).forEach(function(e) {
					p[e] = n[e], delete n[e];
				});
				let g = !1;
				if (tr[m]) {
					if (g = m !== n.type, n.remove(!1, !1, !1, !0), g) if (r.propFromSeries(), Object.setPrototypeOf) Object.setPrototypeOf(n, tr[m].prototype);
					else {
						let e = Object.hasOwnProperty.call(n, "hcEvents") && n.hcEvents;
						for (f in s) n[f] = void 0;
						z(n, tr[m].prototype), e ? n.hcEvents = e : delete n.hcEvents;
					}
				} else Y(17, !0, r, { missingModuleFor: m });
				if (p.forEach(function(e) {
					n[e] = p[e];
				}), n.init(r, e), h && this.points) for (let e of (!1 === (d = n.options).visible ? (l.graphic = 1, l.dataLabel = 1) : (this.hasMarkerChanged(d, i) && (l.graphic = 1), n.hasDataLabels?.() || (l.dataLabel = 1)), this.points)) e?.series && (e.resolveColor(), Object.keys(l).length && e.destroyElements(l), !1 === d.showInLegend && e.legendItem && r.legend.destroyItem(e));
				n.initialType = a, r.linkSeries(), g && n.linkedSeries.length && (n.isDirtyData = !0), B(this, "afterUpdate"), q(t, !0) && r.redraw(!!h && void 0);
			}
			setName(e) {
				this.name = this.options.name = this.userOptions.name = e, this.chart.isDirtyLegend = !0;
			}
			hasOptionChanged(e) {
				let t = this.chart, n = this.options[e], r = t.options.plotOptions, i = this.userOptions[e], a = q(r?.[this.type]?.[e], r?.series?.[e]);
				return i && !L(a) ? n !== i : n !== q(a, n);
			}
			onMouseOver() {
				let e = this.chart, t = e.hoverSeries;
				e.pointer?.setHoverChartIndex(), t && t !== this && t.onMouseOut(), B(this, "mouseOver"), this.setState("hover"), e.hoverSeries = this;
			}
			onMouseOut() {
				let e = this.chart, t = e.tooltip, n = e.hoverPoint;
				e.hoverSeries = null, n && n.onMouseOut(), B(this, "mouseOut"), t && !this.stickyTracking && (!t.shared || this.noSharedTooltip) && t.hide(), e.series.forEach(function(e) {
					e.setState("", !0);
				});
			}
			setState(e, t) {
				let n = this, { graph: r, options: i } = n, { inactiveOtherPoints: a, states: o } = i, s = q(o?.[e || "normal"]?.animation, n.chart.options.chart.animation), { lineWidth: c, opacity: l } = i;
				if (e ||= "", n.state !== e && ([
					n.group,
					n.markerGroup,
					...n.dataLabelsGroups || []
				].forEach(function(t) {
					t && (n.state && t.removeClass("highcharts-series-" + n.state), e && t.addClass("highcharts-series-" + e));
				}), n.state = e, !n.chart.styledMode)) {
					if (o[e]?.enabled === !1) return;
					if (e && (c = o[e].lineWidth || c + (o[e].lineWidthPlus || 0), l = q(o[e].opacity, l)), r && !r.dashstyle && V(c)) for (let e of [r, ...this.zones.map((e) => e.graph)]) e?.animate({ "stroke-width": c }, s);
					a || [
						n.group,
						n.markerGroup,
						...n.dataLabelsGroups || [],
						n.labelBySeries
					].forEach(function(e) {
						e?.animate({ opacity: l }, s);
					});
				}
				t && a && n.points && n.setAllPointsToState(e || void 0);
			}
			setAllPointsToState(e) {
				this.points.forEach(function(t) {
					t.setState && t.setState(e);
				});
			}
			setVisible(e, t) {
				let n = this, r = n.chart, i = r.options.chart.ignoreHiddenSeries, a = n.visible;
				n.visible = e = n.options.visible = n.userOptions.visible = e === void 0 ? !a : e;
				let o = e ? "show" : "hide";
				[
					"group",
					"markerGroup",
					"tracker",
					"tt"
				].forEach((e) => {
					n[e]?.[o]();
				}), n.dataLabelsGroups?.forEach((e) => {
					e?.[o]();
				}), (r.hoverSeries === n || r.hoverPoint?.series === n) && n.onMouseOut(), n.legendItem && r.legend.colorizeItem(n, e), n.isDirty = !0, n.options.stacking && r.series.forEach((e) => {
					e.options.stacking && e.visible && (e.isDirty = !0);
				}), n.linkedSeries.forEach((t) => {
					t.setVisible(e, !1);
				}), i && (r.isDirtyBox = !0), B(n, o), !1 !== t && r.redraw();
			}
			show() {
				this.setVisible(!0);
			}
			hide() {
				this.setVisible(!1);
			}
			select(e) {
				this.selected = e = this.options.selected = e === void 0 ? !this.selected : e, this.checkbox && (this.checkbox.checked = e), B(this, e ? "select" : "unselect");
			}
			shouldShowTooltip(e, t, n = {}) {
				return n.series = this, n.visiblePlotOnly = !0, this.chart.isInsidePlot(e, t, n);
			}
			drawLegendSymbol(e, t) {
				let n = this.chart.renderer, r = this.options.legendSymbol || "rectangle", i = t.legendItem || {}, { options: a, symbolHeight: o, symbolWidth: s } = e, c = a.squareSymbol, l = c ? o : s, u = c ? (s - o) / 2 : 0, d = (e.baseline || 0) - o + 1, f = a.symbolRadius ?? o, p = r === "rectangle" ? n.rect(u, d, l, o, f) : n.symbols[r] && n.symbol(r, u, d, l, o, { r: f });
				p ? i.symbol = p.addClass("highcharts-point").attr({ zIndex: 3 }).add(i.group) : Gn[r]?.call(this, e, t);
			}
		}
		rr.defaultOptions = {
			lineWidth: 2,
			allowPointSelect: !1,
			crisp: !0,
			showCheckbox: !1,
			animation: { duration: 1e3 },
			enableMouseTracking: !0,
			events: {},
			marker: {
				enabledThreshold: 2,
				lineColor: "var(--highcharts-background-color)",
				lineWidth: 0,
				radius: 4,
				states: {
					normal: { animation: !0 },
					hover: {
						animation: { duration: 150 },
						enabled: !0,
						radiusPlus: 2,
						lineWidthPlus: 1
					},
					select: {
						fillColor: "var(--highcharts-neutral-color-20)",
						lineColor: "var(--highcharts-neutral-color-100)",
						lineWidth: 2
					}
				}
			},
			point: { events: {} },
			dataLabels: {
				animation: {},
				align: "center",
				borderWidth: 0,
				defer: !0,
				distance: 4,
				formatter: function() {
					let { numberFormatter: e } = this.series.chart;
					return typeof this.y == "number" ? e(this.y, -1) : "";
				},
				padding: [1, 3],
				style: {
					fontSize: "0.7em",
					fontWeight: "bold",
					color: "contrast",
					textOutline: "1px contrast"
				},
				verticalAlign: "bottom",
				x: 0,
				y: 0
			},
			cropThreshold: 300,
			opacity: 1,
			pointRange: 0,
			softThreshold: !0,
			states: {
				normal: { animation: !0 },
				hover: {
					animation: { duration: 150 },
					lineWidthPlus: 1,
					marker: {},
					halo: {
						size: 10,
						opacity: .25
					}
				},
				select: { animation: { duration: 0 } },
				inactive: {
					animation: { duration: 150 },
					opacity: .2
				}
			},
			stickyTracking: !0,
			turboThreshold: 1e3,
			findNearestPointBy: "x"
		}, rr.types = $.seriesTypes, rr.registerType = $.registerSeriesType, rr.keepProps = [
			"colorIndex",
			"eventOptions",
			"navigatorSeries",
			"symbolIndex",
			"baseSeries"
		], rr.keepPropsForPoints = [
			"data",
			"isDirtyData",
			"isDirtyCanvas",
			"points",
			"condemnedPoints",
			"dataTable",
			"hasProcessedDataTable",
			"xIncrement",
			"cropped",
			"_hasPointMarkers",
			"hasDataLabels",
			"nodes",
			"layout",
			"level",
			"mapMap",
			"mapData",
			"minY",
			"maxY",
			"minX",
			"maxX",
			"transformGroups"
		], z(rr.prototype, {
			axisTypes: ["xAxis", "yAxis"],
			coll: "series",
			colorCounter: 0,
			directTouch: !1,
			invertible: !0,
			isCartesian: !0,
			kdAxisArray: ["clientX", "plotY"],
			parallelArrays: ["x", "y"],
			pointClass: Nn,
			requireSorting: !0,
			sorted: !0
		}), $.series = rr;
		let ir = rr, { animObject: ar, setAnimation: or } = $e, { registerEventOptions: sr } = nn, { composed: cr, marginNames: lr } = j, { distribute: ur } = pt, { format: dr } = ft;
		class fr {
			constructor(e, t) {
				this.allItems = [], this.initialItemY = 0, this.itemHeight = 0, this.itemMarginBottom = 0, this.itemMarginTop = 0, this.itemX = 0, this.itemY = 0, this.lastItemY = 0, this.lastLineHeight = 0, this.legendHeight = 0, this.legendWidth = 0, this.maxItemWidth = 0, this.maxLegendWidth = 0, this.offsetWidth = 0, this.padding = 0, this.pages = [], this.symbolHeight = 0, this.symbolWidth = 0, this.titleHeight = 0, this.totalItemWidth = 0, this.widthOption = 0, this.chart = e, this.setOptions(t), t.enabled && (this.render(), sr(this, t), M(this.chart, "endResize", function() {
					this.legend.positionCheckboxes();
				})), M(this.chart, "render", () => {
					this.options.enabled && this.proximate && (this.proximatePositions(), this.positionItems());
				});
			}
			setOptions(e) {
				let t = q(e.padding, 8);
				this.options = e, this.chart.styledMode || (this.itemStyle = e.itemStyle, this.itemHiddenStyle = G(this.itemStyle, e.itemHiddenStyle)), this.itemMarginTop = e.itemMarginTop, this.itemMarginBottom = e.itemMarginBottom, this.padding = t, this.initialItemY = t - 5, this.symbolWidth = q(e.symbolWidth, 16), this.pages = [], this.proximate = e.layout === "proximate" && !this.chart.inverted, this.baseline = void 0;
			}
			update(e, t) {
				let n = this.chart;
				this.setOptions(G(!0, this.options, e)), "events" in this.options && sr(this, this.options), this.destroy(), n.isDirtyLegend = n.isDirtyBox = !0, q(t, !0) && n.redraw(), B(this, "afterUpdate", { redraw: t });
			}
			colorizeItem(e, t) {
				let n = e.color, { area: r, group: i, label: a, line: o, symbol: s } = e.legendItem || {};
				if ((e instanceof ir || e instanceof Nn) && (e.color = e.options?.legendSymbolColor || n), i?.[t ? "removeClass" : "addClass"]("highcharts-legend-item-hidden"), !this.chart.styledMode) {
					let { itemHiddenStyle: n = {} } = this, i = n.color, { fillColor: c, lineColor: l } = e.options, u = (e) => (!t && (e.fill &&= i, e.stroke &&= i), e);
					a?.css(G(t ? this.itemStyle : n)), o?.attr(u({ stroke: l || e.color })), s?.attr(u(e.series ? e.series.pointAttribs?.(e) : e.pointAttribs?.() || { fill: e.color })), r?.attr(u({
						fill: c || e.color,
						"fill-opacity": c ? 1 : e.options.fillOpacity ?? .75
					}));
				}
				e.color = n, B(this, "afterColorizeItem", {
					item: e,
					visible: t
				});
			}
			positionItems() {
				this.allItems.forEach(this.positionItem, this), this.chart.isResizing || this.positionCheckboxes();
			}
			positionItem(e) {
				let { group: t, x: n = 0, y: r = 0 } = e.legendItem || {}, i = this.options, a = i.symbolPadding, o = !i.rtl, s = e.checkbox;
				if (t?.element) {
					let i = {
						translateX: o ? n : this.legendWidth - n - 2 * a - 4,
						translateY: r
					};
					t[L(t.translateY) ? "animate" : "attr"](i, void 0, () => {
						B(this, "afterPositionItem", { item: e });
					});
				}
				s && (s.x = n, s.y = r);
			}
			destroyItem(e) {
				let t = e.legendItem || {};
				for (let e of [
					"group",
					"label",
					"line",
					"symbol"
				]) t[e] && (t[e] = t[e].destroy());
				e.checkbox = se(e.checkbox), e.legendItem = void 0;
			}
			destroy() {
				for (let e of this.getAllItems()) this.destroyItem(e);
				for (let e of [
					"clipRect",
					"up",
					"down",
					"pager",
					"nav",
					"box",
					"title",
					"group"
				]) this[e] && (this[e] = this[e].destroy());
				this.display = null;
			}
			positionCheckboxes() {
				let e, t = this.group?.alignAttr, n = this.clipHeight || this.legendHeight, r = this.titleHeight;
				t && (e = t.translateY, this.allItems.forEach(function(i) {
					let a, o = i.checkbox;
					o && (a = e + r + o.y + (this.scrollOffset || 0) + 3, I(o, {
						left: t.translateX + i.checkboxOffset + o.x - 20 + "px",
						top: a + "px",
						display: this.proximate || a > e - 6 && a < e + n - 6 ? "" : "none"
					}));
				}, this));
			}
			renderTitle() {
				let e = this.options, t = this.padding, n = e.title, r, i = 0;
				n.text && (this.title || (this.title = this.chart.renderer.label(n.text, t - 3, t - 4, void 0, void 0, void 0, e.useHTML, void 0, "legend-title").attr({ zIndex: 1 }), this.chart.styledMode || this.title.css(n.style), this.title.add(this.group)), n.width || this.title.css({ width: this.maxLegendWidth + "px" }), i = (r = this.title.getBBox()).height, this.offsetWidth = r.width, this.contentGroup.attr({ translateY: i })), this.titleHeight = i;
			}
			setText(e) {
				let t = this.options;
				e.legendItem.label.attr({ text: t.labelFormat ? dr(t.labelFormat, e, this.chart) : t.labelFormatter.call(e, e) });
			}
			renderItem(e) {
				let t = e.legendItem = e.legendItem || {}, n = this.chart, r = n.renderer, i = this.options, a = i.layout === "horizontal", o = this.symbolWidth, s = i.symbolPadding || 0, c = this.itemStyle, l = this.itemHiddenStyle, u = a ? q(i.itemDistance, 20) : 0, d = !i.rtl, f = !e.series, p = !f && e.series.drawLegendSymbol ? e.series : e, m = p.options, h = !!this.createCheckboxForItem && m && m.showCheckbox, g = i.useHTML, _ = e.options.className, v = t.label, y = o + s + u + 20 * !!h;
				!v && (t.group = r.g("legend-item").addClass("highcharts-" + p.type + "-series highcharts-color-" + e.colorIndex + (_ ? " " + _ : "") + (f ? " highcharts-series-" + e.index : "")).attr({ zIndex: 1 }).add(this.scrollGroup), t.label = v = r.text("", d ? o + s : -s, this.baseline || 0, g), n.styledMode || v.css(G(e.visible ? c : l)), v.attr({
					align: d ? "left" : "right",
					zIndex: 2
				}).add(t.group), !this.baseline && (this.fontMetrics = r.fontMetrics(v), this.baseline = this.fontMetrics.f + 3 + this.itemMarginTop, v.attr("y", this.baseline), this.symbolHeight = q(i.symbolHeight, this.fontMetrics.f), i.squareSymbol && (this.symbolWidth = q(i.symbolWidth, Math.max(this.symbolHeight, 16)), y = this.symbolWidth + s + u + 20 * !!h, d && v.attr("x", this.symbolWidth + s))), p.drawLegendSymbol(this, e), this.setItemEvents && this.setItemEvents(e, v, g)), h && !e.checkbox && this.createCheckboxForItem && this.createCheckboxForItem(e), this.colorizeItem(e, e.visible), (n.styledMode || !c.width) && v.css({ width: Math.min(i.itemWidth || this.widthOption || n.spacingBox.width, i.maxWidth ? Te(i.maxWidth, n.chartWidth) : Infinity) - y + "px" }), this.setText(e);
				let b = v.getBBox(), x = this.fontMetrics?.h || 0;
				e.itemWidth = e.checkboxOffset = i.itemWidth || t.labelWidth || b.width + y, this.maxItemWidth = Math.max(this.maxItemWidth, e.itemWidth), this.totalItemWidth += e.itemWidth, this.itemHeight = e.itemHeight = Math.round(t.labelHeight || (b.height > 1.5 * x ? b.height : x));
			}
			layoutItem(e) {
				let t = this.options, n = this.padding, r = t.layout === "horizontal", i = e.itemHeight, a = this.itemMarginBottom, o = this.itemMarginTop, s = r ? q(t.itemDistance, 20) : 0, c = this.maxLegendWidth, l = t.alignColumns && this.totalItemWidth > c ? this.maxItemWidth : e.itemWidth, u = e.legendItem || {};
				r && this.itemX - n + l > c && (this.itemX = n, this.lastLineHeight && (this.itemY += o + this.lastLineHeight + a), this.lastLineHeight = 0), this.lastItemY = o + this.itemY + a, this.lastLineHeight = Math.max(i, this.lastLineHeight), u.x = this.itemX, u.y = this.itemY, r ? this.itemX += l : (this.itemY += o + i + a, this.lastLineHeight = i), this.offsetWidth = this.widthOption || Math.max((r ? this.itemX - n - (e.checkbox ? 0 : s) : l) + n, this.offsetWidth);
			}
			getAllItems() {
				let e = [];
				return this.chart.series.forEach(function(t) {
					let n = t?.options;
					t && q(n.showInLegend, !L(n.linkedTo) && void 0, !0) && (e = e.concat(t.legendItem?.labels || (n.legendType === "point" ? t.data : t)));
				}), B(this, "afterGetAllItems", { allItems: e }), e;
			}
			getAlignment() {
				let e = this.options;
				return this.proximate ? e.align.charAt(0) + "tv" : e.floating ? "" : e.align.charAt(0) + e.verticalAlign.charAt(0) + e.layout.charAt(0);
			}
			adjustMargins(e, t) {
				let n = this.chart, r = this.options, i = this.getAlignment();
				i && [
					/(lth|ct|rth)/,
					/(rtv|rm|rbv)/,
					/(rbh|cb|lbh)/,
					/(lbv|lm|ltv)/
				].forEach((a, o) => {
					a.test(i) && !L(e[o]) && (n[lr[o]] = Math.max(n[lr[o]], n.legend[(o + 1) % 2 ? "legendHeight" : "legendWidth"] + [
						1,
						-1,
						-1,
						1
					][o] * r[o % 2 ? "x" : "y"] + (r.margin ?? 12) + t[o] + (n.titleOffset[o] || 0)));
				});
			}
			proximatePositions() {
				let e, t = this.chart, n = [], r = this.options.align === "left";
				for (let i of (this.allItems.forEach(function(e) {
					let i, a, o = r, s, c;
					e.yAxis && (e.xAxis.options.reversed && (o = !o), e.points && (i = ge(o ? e.points : e.points.slice(0).reverse(), function(e) {
						return V(e.plotY);
					})), a = this.itemMarginTop + e.legendItem.label.getBBox().height + this.itemMarginBottom, c = e.yAxis.top - t.plotTop, s = e.visible ? (i ? i.plotY : e.yAxis.height) + (c - .3 * a) : c + e.yAxis.height, n.push({
						target: s,
						size: a,
						item: e
					}));
				}, this), ur(n, t.plotHeight))) e = i.item.legendItem || {}, V(i.pos) && (e.y = t.plotTop - t.spacing[0] + i.pos);
			}
			render() {
				let e = this.chart, t = e.spacingBox.width, n = e.renderer, r = this.options, i = this.padding, a = this.getAllItems(), o, s, c, l = this.group, u, d = this.box;
				this.itemX = i, this.itemY = this.initialItemY, this.offsetWidth = 0, this.lastItemY = 0, this.widthOption = Te(r.width, t - i), u = t - 2 * i - r.x, ["rm", "lm"].indexOf(this.getAlignment().substring(0, 2)) > -1 && (u /= 2), this.maxLegendWidth = this.widthOption || u, l || (this.group = l = n.g("legend").addClass(r.className || "").attr({ zIndex: 7 }).add(), this.contentGroup = n.g().attr({ zIndex: 1 }).add(l), this.scrollGroup = n.g().add(this.contentGroup)), this.renderTitle(), ke(a, (e, t) => (e.options?.legendIndex || 0) - (t.options?.legendIndex || 0)), r.reversed && a.reverse(), this.allItems = a, this.display = o = !!a.length, this.lastLineHeight = 0, this.maxItemWidth = 0, this.totalItemWidth = 0, this.itemHeight = 0, a.forEach(this.renderItem, this), a.forEach(this.layoutItem, this), s = (r.maxWidth ? Math.min(this.widthOption || this.offsetWidth, u, Te(r.maxWidth, e.chartWidth) || Infinity) : this.widthOption || this.offsetWidth) + i, c = this.lastItemY + this.lastLineHeight + this.titleHeight, c = this.handleOverflow(c) + i, d || (this.box = d = n.rect().addClass("highcharts-legend-box").attr({ r: r.borderRadius }).add(l)), e.styledMode || d.attr({
					stroke: r.borderColor,
					"stroke-width": r.borderWidth || 0,
					fill: r.backgroundColor || "none"
				}).shadow(r.shadow), s > 0 && c > 0 && d[d.placed ? "animate" : "attr"](d.crisp.call({}, {
					x: 0,
					y: 0,
					width: s,
					height: c
				}, d.strokeWidth())), l[o ? "show" : "hide"](), e.styledMode && l.getStyle("display") === "none" && (s = c = 0), this.legendWidth = s, this.legendHeight = c, o && this.align(), this.proximate || this.positionItems(), B(this, "afterRender");
			}
			align(e = this.chart.spacingBox) {
				let t = this.chart, n = this.options, r = e.y;
				/(lth|ct|rth)/.test(this.getAlignment()) && t.titleOffset[0] > 0 ? r += t.titleOffset[0] : /(lbh|cb|rbh)/.test(this.getAlignment()) && t.titleOffset[2] > 0 && (r -= t.titleOffset[2]), r !== e.y && (e = G(e, { y: r })), t.hasRendered || (this.group.placed = !1), this.group.align(G(n, {
					width: this.legendWidth,
					height: this.legendHeight,
					verticalAlign: this.proximate ? "top" : n.verticalAlign
				}), !0, e);
			}
			handleOverflow(e) {
				let t = this, n = this.chart, r = n.renderer, i = this.options, a = i.y, o = i.verticalAlign === "top", s = this.padding, c = i.maxHeight, l = i.navigation, u = q(l.animation, !0), d = l.arrowSize || 12, f = this.pages, p = this.allItems, m = function(e) {
					typeof e == "number" ? S.attr({ height: e }) : S && (t.clipRect = S.destroy(), t.contentGroup.clip()), t.contentGroup.div && (t.contentGroup.div.style.clip = e ? "rect(" + s + "px,9999px," + (s + e) + "px,0)" : "auto");
				}, h = function(e) {
					return t[e] = r.circle(0, 0, 1.3 * d).translate(d / 2, d / 2).add(x), n.styledMode || t[e].attr("fill", "rgba(0,0,0,0.0001)"), t[e];
				}, g, _, v, y, b = n.spacingBox.height + (o ? -a : a) - s, x = this.nav, S = this.clipRect;
				return i.layout !== "horizontal" || i.verticalAlign === "middle" || i.floating || (b /= 2), c && (b = Math.min(b, c)), f.length = 0, e && b > 0 && e > b && !1 !== l.enabled ? (this.clipHeight = g = Math.max(b - 20 - this.titleHeight - s, 0), this.currentPage = q(this.currentPage, 1), this.fullHeight = e, p.forEach((e, t) => {
					let n = (v = e.legendItem || {}).y || 0, r = Math.round(v.label.getBBox().height), i = f.length;
					(!i || n - f[i - 1] > g && (_ || n) !== f[i - 1]) && (f.push(_ || n), i++), v.pageIx = i - 1, _ && y && (y.pageIx = i - 1), t === p.length - 1 && n + r - f[i - 1] > g && n > f[i - 1] && (f.push(n), v.pageIx = i), n !== _ && (_ = n), y = v;
				}), S || (S = t.clipRect = r.clipRect(0, s - 2, 9999, 0), t.contentGroup.clip(S)), m(g), x || (this.nav = x = r.g().attr({ zIndex: 1 }).add(this.group), this.up = r.symbol("triangle", 0, 0, d, d).add(x), h("upTracker").on("click", function() {
					t.scroll(-1, u);
				}), this.pager = r.text("", 15, 10).addClass("highcharts-legend-navigation"), !n.styledMode && l.style && this.pager.css(l.style), this.pager.add(x), this.down = r.symbol("triangle-down", 0, 0, d, d).add(x), h("downTracker").on("click", function() {
					t.scroll(1, u);
				})), t.scroll(0), e = b) : x && (m(), this.nav = x.destroy(), this.scrollGroup.attr({ translateY: 1 }), this.clipHeight = 0), e;
			}
			scroll(e, t) {
				let n = this.chart, r = this.pages, i = r.length, a = this.clipHeight, o = this.options.navigation, s = this.pager, c = this.padding, l = this.currentPage + e;
				l > i && (l = i), l > 0 && (t !== void 0 && or(t, n), this.nav.attr({
					translateX: c,
					translateY: a + this.padding + 7 + this.titleHeight,
					visibility: "inherit"
				}), [this.up, this.upTracker].forEach(function(e) {
					e.attr({ class: l === 1 ? "highcharts-legend-nav-inactive" : "highcharts-legend-nav-active" });
				}), s.attr({ text: l + "/" + i }), [this.down, this.downTracker].forEach(function(e) {
					e.attr({
						x: 18 + this.pager.getBBox().width,
						class: l === i ? "highcharts-legend-nav-inactive" : "highcharts-legend-nav-active"
					});
				}, this), n.styledMode || (this.up.attr({ fill: l === 1 ? o.inactiveColor : o.activeColor }), this.upTracker.css({ cursor: l === 1 ? "default" : "pointer" }), this.down.attr({ fill: l === i ? o.inactiveColor : o.activeColor }), this.downTracker.css({ cursor: l === i ? "default" : "pointer" })), this.scrollOffset = -r[l - 1] + this.initialItemY, this.scrollGroup.animate({ translateY: this.scrollOffset }), this.currentPage = l, this.positionCheckboxes(), Ae(() => {
					B(this, "afterScroll", { currentPage: l });
				}, ar(q(t, n.renderer.globalAnimation, !0)).duration));
			}
			setItemEvents(e, t, n) {
				let r = this, i = e.legendItem || {}, a = r.chart.renderer.boxWrapper, o = e instanceof Nn, s = e instanceof ir, c = "highcharts-legend-" + (o ? "point" : "series") + "-active", l = r.chart.styledMode, u = n ? [t, i.symbol] : [i.group], d = (t) => {
					r.allItems.forEach((n) => {
						e !== n && [n].concat(n.linkedSeries || []).forEach((e) => {
							e.setState(t, !o);
						});
					});
				};
				for (let n of u) n && n.on("mouseover", function() {
					e.visible && d("inactive"), e.setState("hover"), e.visible && a.addClass(c), l || t.css(r.options.itemHoverStyle);
				}).on("mouseout", function() {
					r.chart.styledMode || t.css(G(e.visible ? r.itemStyle : r.itemHiddenStyle)), d(""), a.removeClass(c), e.setState();
				}).on("click", function(t) {
					a.removeClass(c), B(r, "itemClick", {
						browserEvent: t,
						legendItem: e,
						context: r
					}, function() {
						e.setVisible && e.setVisible(), d(e.visible ? "inactive" : "");
					}), o ? e.firePointEvent("legendItemClick", { browserEvent: t }) : s && B(e, "legendItemClick", { browserEvent: t });
				});
			}
			createCheckboxForItem(e) {
				e.checkbox = ae("input", {
					type: "checkbox",
					className: "highcharts-legend-checkbox",
					checked: e.selected,
					defaultChecked: e.selected
				}, this.options.itemCheckboxStyle, this.chart.container), M(e.checkbox, "click", function(t) {
					let n = t.target;
					B(e.series || e, "checkboxClick", {
						checked: n.checked,
						item: e
					}, function() {
						e.select();
					});
				});
			}
		}
		(l = fr ||= {}).compose = function(e) {
			we(cr, "Core.Legend") && M(e, "beforeMargins", function() {
				this.legend = new l(this, this.options.legend);
			});
		};
		let pr = fr, { animate: mr, animObject: hr, setAnimation: gr } = $e, { defaultOptions: _r } = We, { numberFormat: vr } = ft, { registerEventOptions: yr } = nn, { charts: br, doc: xr, marginNames: Sr, win: Cr } = j, { seriesTypes: wr } = $;
		class Tr {
			static chart(e, t, n) {
				let r = new Tr(e, t, n);
				return r.promise || r;
			}
			constructor(e, t, n) {
				if (this.sharedClips = {}, !xr) return void Y(36, !1, this);
				let r = [...arguments];
				(H(e) || e.nodeName) && (this.renderTo = r.shift()), this.init(r[0], r[1]);
			}
			setZoomOptions() {
				let e = this.options.chart, t = e.zooming;
				this.zooming = {
					...t,
					type: q(e.zoomType, t.type),
					key: q(e.zoomKey, t.key),
					pinchType: q(e.pinchType, t.pinchType),
					singleTouch: q(e.zoomBySingleTouch, t.singleTouch, !1),
					resetButton: G(t.resetButton, e.resetZoomButton)
				};
			}
			init(e, t) {
				B(this, "init", { args: arguments }, function() {
					let n = G(_r, e), r = n.chart, i = this.renderTo || r.renderTo;
					this.userOptions = z({}, e), (this.renderTo = H(i) ? xr.getElementById(i) : i) || Y(13, !0, this), this.margin = [], this.spacing = [], this.labelCollectors = [], !0 === t ? this.promise = new Promise((e) => {
						this.callback = e;
					}) : this.callback = t, this.isResizing = 0, this.options = n, this.axes = [], this.series = [], this.locale = n.lang.locale ?? this.renderTo.closest("[lang]")?.lang, this.time = new Be(z(n.time || {}, { locale: this.locale }), n.lang), n.time = this.time.options, this.numberFormatter = (r.numberFormatter || vr).bind(this), this.styledMode = r.styledMode, this.hasCartesianSeries = r.showAxes, this.index = br.length, this.dataTable = this.getDataTable(n), br.push(this), j.chartCount++, yr(this, r), this.xAxis = [], this.yAxis = [], this.pointCount = this.colorCounter = this.symbolCounter = 0, this.setZoomOptions(), B(this, "afterInit"), this.firstRender();
				});
			}
			getDataTable(e) {
				return (e.dataTable ? Oe(e.dataTable) : []).map((e) => e.isDataTable ? e : new Hn(e));
			}
			initSeries(e) {
				let t = this.options.chart, n = e.type || t.type, r = wr[n];
				r || Y(17, !0, this, { missingModuleFor: n });
				let i = new r();
				return typeof i.init == "function" && i.init(this, e), i;
			}
			orderItems(e, t = 0) {
				let n = this[e], r = this.options[e] = Oe(this.options[e]).slice(), i = this.userOptions[e] = this.userOptions[e] ? Oe(this.userOptions[e]).slice() : [];
				if (this.hasRendered && (r.splice(t), i.splice(t)), n) for (let e = t, a = n.length; e < a; ++e) {
					let t = n[e];
					t && (t.index = e, t instanceof ir && (t.name = t.getName()), t.options.isInternal || (r[e] = t.options, i[e] = t.userOptions));
				}
			}
			getClipBox(e, t) {
				let n = this.inverted, { xAxis: r, yAxis: i } = e || {}, { x: a, y: o, width: s, height: c } = G(this.clipBox);
				return e && (r && r.len !== this.plotSizeX && !r.isRadial && (s = r.len), i && i.len !== this.plotSizeY && !i.isRadial && (c = i.len), n && !e.invertible && ([s, c] = [c, s])), t && (a += (n ? i : r)?.pos ?? this.plotLeft, o += (n ? r : i)?.pos ?? this.plotTop), {
					x: a,
					y: o,
					width: s,
					height: c
				};
			}
			isInsidePlot(e, t, n = {}) {
				let { inverted: r, plotBox: i, plotLeft: a, plotTop: o, scrollablePlotBox: s } = this, { scrollLeft: c = 0, scrollTop: l = 0 } = n.visiblePlotOnly && this.scrollablePlotArea?.scrollingContainer || {}, u = n.series, d = n.visiblePlotOnly && s || i, f = n.inverted ? t : e, p = n.inverted ? e : t, m = {
					x: f,
					y: p,
					isInsidePlot: !0,
					options: n
				};
				if (!n.ignoreX) {
					let e = u && (r && !this.polar ? u.yAxis : u.xAxis) || {
						pos: a,
						len: Infinity
					}, t = n.paneCoordinates ? e.pos + f : a + f;
					t >= Math.max(c + a, e.pos) && t <= Math.min(c + a + d.width, e.pos + e.len) || (m.isInsidePlot = !1);
				}
				if (!n.ignoreY && m.isInsidePlot) {
					let e = !r && n.axis && !n.axis.isXAxis && n.axis || u && (r ? u.xAxis : u.yAxis) || {
						pos: o,
						len: Infinity
					}, t = n.paneCoordinates ? e.pos + p : o + p;
					t >= Math.max(l + o, e.pos) && t <= Math.min(l + o + d.height, e.pos + e.len) || (m.isInsidePlot = !1);
				}
				return B(this, "afterIsInsidePlot", m), m.isInsidePlot;
			}
			redraw(e) {
				B(this, "beforeRedraw");
				let t = this.hasCartesianSeries ? this.axes : this.colorAxis || [], n = this.series, r = this.pointer, i = this.legend, a = this.userOptions.legend, o = this.renderer, s = o.isHidden(), c = [], l, u, d, f = this.isDirtyBox, p = this.isDirtyLegend, m;
				for (o.rootFontSize = o.boxWrapper.getStyle("font-size"), this.setResponsive && this.setResponsive(!1), gr(!!this.hasRendered && e, this), s && this.temporaryDisplay(), this.layOutTitles(!1), d = n.length; d--;) if (((m = n[d]).options.stacking || m.options.centerInCategory) && (u = !0, m.isDirty)) {
					l = !0;
					break;
				}
				if (l) for (d = n.length; d--;) (m = n[d]).options.stacking && (m.isDirty = !0);
				n.forEach(function(e) {
					e.isDirty && (e.options.legendType === "point" ? (typeof e.updateTotals == "function" && e.updateTotals(), p = !0) : a && (a.labelFormatter || a.labelFormat) && (p = !0)), e.isDirtyData && B(e, "updatedData");
				}), p && i && i.options.enabled && (i.render(), this.isDirtyLegend = !1), u && this.getStacks(), t.forEach(function(e) {
					e.updateNames(), e.setScale();
				}), this.getMargins(), t.forEach(function(e) {
					e.isDirty && (f = !0);
				}), t.forEach(function(e) {
					let t = e.min + "," + e.max;
					e.extKey !== t && (e.extKey = t, c.push(function() {
						B(e, "afterSetExtremes", z(e.eventArgs, e.getExtremes())), delete e.eventArgs;
					})), (f || u) && e.redraw();
				}), f && this.drawChartBox(), B(this, "predraw"), n.forEach(function(e) {
					(f || e.isDirty) && e.visible && e.redraw(), e.isDirtyData = !1;
				}), r && r.reset(!0), o.draw(), t.forEach((e) => {
					e.saveOld();
				}), B(this, "redraw"), B(this, "render"), s && this.temporaryDisplay(!0), c.forEach(function(e) {
					e.call();
				});
			}
			get(e) {
				let t = this.series;
				function n(t) {
					return t.id === e || t.options && t.options.id === e;
				}
				let r = ge(this.axes, n) || ge(this.series, n);
				for (let e = 0; !r && e < t.length; e++) r = ge(t[e].points || [], n);
				return r;
			}
			createAxes() {
				let e = this.userOptions;
				for (let t of (B(this, "createAxes"), ["xAxis", "yAxis"])) for (let n of e[t] = Oe(e[t] || {})) new mn(this, n, t);
				B(this, "afterCreateAxes");
			}
			getSelectedPoints() {
				return this.series.reduce((e, t) => (t.getPointsCollection().forEach((t) => {
					q(t.selectedStaging, t.selected) && e.push(t);
				}), e), []);
			}
			getSelectedSeries() {
				return this.series.filter((e) => e.selected);
			}
			setTitle(e, t, n) {
				this.applyDescription("title", e), this.applyDescription("subtitle", t), this.applyDescription("caption", void 0), this.layOutTitles(n);
			}
			applyDescription(e, t) {
				let n = this, r = this.options[e] = G(this.options[e], t), i = this[e];
				i && t && (this[e] = i = i.destroy()), r && !i && ((i = this.renderer.text(r.text, 0, 0, r.useHTML).attr({
					align: r.align,
					class: "highcharts-" + e,
					zIndex: r.zIndex || 4
				}).css({
					textOverflow: "ellipsis",
					whiteSpace: "nowrap"
				}).add()).update = function(t, r) {
					n.applyDescription(e, t), n.layOutTitles(r);
				}, this.styledMode || i.css(z(e === "title" ? { fontSize: this.options.isStock ? "1em" : "1.2em" } : {}, r.style)), i.textPxLength = i.getBBox().width, i.css({ whiteSpace: r.style?.whiteSpace }), this[e] = i);
			}
			layOutTitles(e = !0) {
				let t = [
					0,
					0,
					0
				], { options: n, renderer: r, spacingBox: i } = this;
				[
					"title",
					"subtitle",
					"caption"
				].forEach((e) => {
					let n = this[e], a = this.options[e], o = G(i), s = n?.textPxLength || 0;
					if (n && a) {
						B(this, "layOutTitle", {
							alignTo: o,
							key: e,
							textPxLength: s
						});
						let i = r.fontMetrics(n), c = i.b, l = i.h, u = a.verticalAlign || "top", d = u === "top", f = d && a.minScale || 1, p = e === "title" ? d ? -3 : 0 : d ? t[0] + 2 : 0, m = Math.min(o.width / s, 1), h = Math.max(f, m), g = G({ y: u === "bottom" ? c : p + c }, a), _ = (a.width || (m > f ? this.chartWidth : o.width) / h) + "px";
						g.align ??= e === "title" ? m < f ? "left" : "center" : this.title?.alignValue, n.alignValue !== g.align && (n.placed = !1);
						let v = Math.round(n.css({ width: _ }).getBBox(a.useHTML).height);
						if (g.height = v, n.align(g, !1, o).attr({
							align: g.align,
							scaleX: h,
							scaleY: h,
							"transform-origin": `${o.x + s * h * de(g.align)} ${l}`
						}), !a.floating) {
							let e = v * (v < 1.2 * l ? 1 : h);
							u === "top" ? t[0] = Math.ceil(t[0] + e) : u === "bottom" && (t[2] = Math.ceil(t[2] + e));
						}
					}
				}, this), t[0] && (n.title?.verticalAlign || "top") === "top" && (t[0] += n.title?.margin || 0), t[2] && n.caption?.verticalAlign === "bottom" && (t[2] += n.caption?.margin || 0);
				let a = !this.titleOffset || this.titleOffset.join(",") !== t.join(",");
				this.titleOffset = t, B(this, "afterLayOutTitles"), !this.isDirtyBox && a && (this.isDirtyBox = this.isDirtyLegend = a, this.hasRendered && e && this.isDirtyBox && this.redraw());
			}
			getContainerBox() {
				let e = [].map.call(this.renderTo.children, (e) => {
					if (e !== this.container) {
						let t = e.style.display;
						return e.style.display = "none", [e, t];
					}
				}), t = {
					width: he(this.renderTo, "width", !0) || 0,
					height: he(this.renderTo, "height", !0) || 0
				};
				return e.filter(Boolean).forEach(([e, t]) => {
					e.style.display = t;
				}), t;
			}
			getChartSize() {
				let e = this.options.chart, t = e.width, n = e.height, r = this.getContainerBox(), i = r.height <= 1 || !this.renderTo.parentElement?.style.height && this.renderTo.style.height === "100%";
				this.chartWidth = Math.max(0, t || r.width || 600), this.chartHeight = Math.max(0, Te(n, this.chartWidth) || (i ? 400 : r.height)), this.containerBox = r;
			}
			temporaryDisplay(e) {
				let t = this.renderTo, n;
				if (e) for (; t?.style;) t.hcOrigStyle && (I(t, t.hcOrigStyle), delete t.hcOrigStyle), t.hcOrigDetached && (xr.body.removeChild(t), t.hcOrigDetached = !1), t = t.parentNode;
				else for (; t?.style && (xr.body.contains(t) || t.parentNode || (t.hcOrigDetached = !0, xr.body.appendChild(t)), (he(t, "display", !1) === "none" || t.hcOrigDetached) && (t.hcOrigStyle = {
					display: t.style.display,
					height: t.style.height,
					overflow: t.style.overflow
				}, n = {
					display: "block",
					overflow: "hidden"
				}, t !== this.renderTo && (n.height = 0), I(t, n), t.offsetWidth || t.style.setProperty("display", "block", "important")), (t = t.parentNode) !== xr.body););
			}
			setClassName(e) {
				this.container.className = "highcharts-container " + (e || "");
			}
			getContainer() {
				let e, t = this.options, n = t.chart, r = "data-highcharts-chart", i = Fe(), a = this.renderTo, o = J(ie(a, r));
				V(o) && br[o] && br[o].hasRendered && br[o].destroy(), ie(a, r, this.index), a.innerHTML = Q.emptyHTML, n.skipClone || a.offsetWidth || this.temporaryDisplay(), this.getChartSize();
				let s = this.chartHeight, c = this.chartWidth;
				this.styledMode || I(a, { overflow: "hidden" }), this.styledMode || (e = z({
					position: "relative",
					overflow: "hidden",
					width: c + "px",
					height: s + "px",
					textAlign: "left",
					lineHeight: "normal",
					zIndex: 0,
					"-webkit-tap-highlight-color": "rgba(0,0,0,0)",
					userSelect: "none",
					"touch-action": "manipulation",
					outline: "none",
					padding: "0px"
				}, n.style || {}));
				let l = ae("div", { id: i }, e, a);
				if (this.container = l, this.getChartSize(), c !== this.chartWidth && (c = this.chartWidth, this.styledMode || I(l, { width: q(n.style?.width, c + "px") })), this._cursor = l.style.cursor, this.renderer = new Xt(l, c, s, void 0, n.forExport, t.exporting?.allowHTML, this.styledMode, t.palette, this.index), this.containerBox = this.getContainerBox(), gr(void 0, this), this.setClassName(n.className), this.styledMode) for (let e in t.defs) this.renderer.definition(t.defs[e]);
				else this.renderer.setStyle(n.style), this.palette = this.renderer.palette;
				B(this, "afterGetContainer");
			}
			getMargins(e) {
				let { spacing: t, margin: n, titleOffset: r } = this;
				this.resetMargins(), r[0] && !L(n[0]) && (this.plotTop = Math.max(this.plotTop, r[0] + t[0])), r[2] && !L(n[2]) && (this.marginBottom = Math.max(this.marginBottom, r[2] + t[2])), this.legend?.display && this.legend.adjustMargins(n, t), B(this, "getMargins"), e || this.getAxisMargins();
			}
			getAxisMargins() {
				let e = this, t = e.axisOffset = [
					0,
					0,
					0,
					0
				], n = e.colorAxis, r = e.margin, i = (e) => {
					e.forEach((e) => {
						e.visible && e.getOffset();
					});
				};
				e.hasCartesianSeries ? i(e.axes) : n?.length && i(n), Sr.forEach((n, i) => {
					L(r[i]) || (e[n] += t[i]);
				}), e.setChartSize();
			}
			getOptions() {
				return ce(this.userOptions, _r);
			}
			reflow(e) {
				let t = this, n = t.containerBox, r = t.getContainerBox();
				delete t.pointer?.chartPosition, !t.exporting?.isPrinting && !t.isResizing && n && r.width && ((r.width !== n.width || r.height !== n.height) && (_e(t.reflowTimeout), t.reflowTimeout = Ae(function() {
					if (t.container) {
						t.setSize(void 0, void 0, !1);
						let e = t.containerBox;
						e && (e.height = t.chartHeight);
					}
				}, 100 * !!e)), t.containerBox = r);
			}
			setReflow() {
				let e = this, t = (t) => {
					e.options?.chart.reflow && e.hasLoaded && e.reflow(t);
				};
				if (typeof ResizeObserver == "function") new ResizeObserver(t).observe(e.renderTo);
				else {
					let e = M(Cr, "resize", t);
					M(this, "destroy", e);
				}
			}
			setSize(e, t, n) {
				let r = this, i = r.renderer;
				r.isResizing += 1, gr(n, r);
				let a = i.globalAnimation;
				r.oldChartHeight = r.chartHeight, r.oldChartWidth = r.chartWidth, e !== void 0 && (r.options.chart.width = e), t !== void 0 && (r.options.chart.height = t), r.getChartSize();
				let { chartWidth: o, chartHeight: s, scrollablePixelsX: c = 0, scrollablePixelsY: l = 0 } = r;
				(r.isDirtyBox || o !== r.oldChartWidth || s !== r.oldChartHeight) && (r.styledMode || (a ? mr : I)(r.container, {
					width: `${o + c}px`,
					height: `${s + l}px`
				}, a), r.setChartSize(!0), i.setSize(o, s, a), r.axes.forEach(function(e) {
					e.isDirty = !0, e.setScale();
				}), r.isDirtyLegend = !0, r.isDirtyBox = !0, r.layOutTitles(), r.getMargins(), r.redraw(a), r.oldChartHeight = void 0, B(r, "resize"), setTimeout(() => {
					r && B(r, "endResize");
				}, hr(a).duration)), --r.isResizing;
			}
			setChartSize(e) {
				let t, n, r, i, { chartHeight: a, chartWidth: o, clipOffset: s, inverted: c, spacing: l, renderer: u } = this, d = Math[c ? "floor" : "round"];
				if (this.plotLeft = t = Math.round(this.plotLeft), this.plotTop = n = Math.round(this.plotTop), this.plotWidth = r = Math.max(0, Math.round(o - t - (this.marginRight ?? 0))), this.plotHeight = i = Math.max(0, Math.round(a - n - (this.marginBottom ?? 0))), this.plotSizeX = c ? i : r, this.plotSizeY = c ? r : i, this.spacingBox = u.spacingBox = {
					x: l[3],
					y: l[0],
					width: o - l[3] - l[1],
					height: a - l[0] - l[2]
				}, this.plotBox = u.plotBox = {
					x: t,
					y: n,
					width: r,
					height: i
				}, s && (this.clipBox = {
					x: d(s[c ? 2 : 3]),
					y: d(s[+!!c]),
					width: d(this.plotSizeX - s[+!c] - s[c ? 2 : 3]),
					height: d(this.plotSizeY - s[+!!c] - s[c ? 3 : 2])
				}), !e) {
					for (let e of this.axes) e.setAxisSize(), e.setAxisTranslation();
					u.alignElements();
				}
				B(this, "afterSetChartSize", { skipAxes: e });
			}
			resetMargins() {
				B(this, "resetMargins");
				let e = this, t = e.options.chart, n = t.plotBorderWidth || 0, r = Math.round(n) / 2;
				["margin", "spacing"].forEach((n) => {
					let r = t[n], i = W(r) ? r : [
						r,
						r,
						r,
						r
					];
					[
						"Top",
						"Right",
						"Bottom",
						"Left"
					].forEach((r, a) => {
						e[n][a] = t[`${n}${r}`] ?? i[a];
					});
				}), Sr.forEach((t, n) => {
					e[t] = e.margin[n] ?? e.spacing[n];
				}), e.axisOffset = [
					0,
					0,
					0,
					0
				], e.clipOffset = [
					r,
					r,
					r,
					r
				], e.plotBorderWidth = n;
			}
			drawChartBox() {
				let e = this, t = e.options.chart, { backgroundColor: n, plotBackgroundColor: r, plotBackgroundImage: i, plotBorderRadius: a = 0, shadow: o } = t, { chartWidth: s, chartHeight: c, clipBox: l, clipOffset: u, clipRect: d, plotBGImage: f, plotBox: p, plotLeft: m, plotTop: h, plotWidth: g, plotHeight: _, renderer: v, styledMode: y } = e, b = e.chartBackground, x = e.plotBackground, S = e.plotBorder, C, w, T, E = "animate";
				b || (e.chartBackground = b = v.rect().addClass("highcharts-background").add(), E = "attr"), y ? C = w = b.strokeWidth() : (w = (C = t.borderWidth || 0) + 8 * !!o, T = { fill: n || "none" }, (C || b["stroke-width"]) && (T.stroke = t.borderColor, T["stroke-width"] = C), b.attr(T).shadow(o)), b[E]({
					x: w / 2,
					y: w / 2,
					width: s - w - C % 2,
					height: c - w - C % 2,
					r: t.borderRadius
				}), E = "animate", x || (E = "attr", e.plotBackground = x = v.rect().addClass("highcharts-plot-background").add()), x[E]({
					...p,
					r: a
				}), !y && (x.attr({ fill: r || "none" }).shadow(t.plotShadow), i && (f ? (i !== f.attr("href") && f.attr("href", i), f.animate(p)) : e.plotBGImage = v.image(i, m, h, g, _).add())), d ? d.animate({
					width: l.width,
					height: l.height
				}) : e.clipRect = v.clipRect(l), E = "animate", S || (E = "attr", e.plotBorder = S = v.rect().addClass("highcharts-plot-border").attr({ zIndex: 1.5 }).add()), S.attr(y ? void 0 : {
					stroke: t.plotBorderColor,
					"stroke-width": t.plotBorderWidth || 0,
					fill: "none"
				})[E]({ r: a });
				let D = S.strokeWidth(), O = G(S.crisp(p, -D));
				if (u && !y) {
					let e = u[0] - D / 2, t = u[3] - D / 2;
					O.x -= t, O.y -= e, O.width += t + u[1] - D / 2, O.height += e + u[2] - D / 2;
				}
				S[E](O), ["plotClipOuter", "plotClipInner"].forEach((t, n) => {
					let r = e[t], i = n ? -D : D;
					r?.[a ? E : "attr"]({
						x: O.x - i / 2,
						y: O.y - i / 2,
						width: O.width + i,
						height: O.height + i,
						r: a ? a + i / 2 : 0
					}), r?.parentGroup?.attr({ display: a ? "" : "none" });
				}), e.isDirtyBox = !1, B(this, "afterDrawChartBox");
			}
			propFromSeries() {
				let e, t, n, r = this, i = r.options.chart, a = r.options.series;
				[
					"inverted",
					"angular",
					"polar"
				].forEach(function(o) {
					for (t = wr[i.type], n = i[o] || t && t.prototype[o], e = a?.length; !n && e--;) (t = wr[a[e].type]) && t.prototype[o] && (n = !0);
					r[o] = n;
				});
			}
			linkSeries(e) {
				let t = this, n = t.series;
				n.forEach(function(e) {
					e.linkedSeries.length = 0;
				}), n.forEach(function(e) {
					let { linkedTo: r } = e.options, i = H(r) && (r === ":previous" ? n[e.index - 1] : t.get(r));
					i && i.linkedParent !== e && (i.linkedSeries.push(e), e.linkedParent = i, e.visible = e.options.visible ?? i.options.visible ?? e.visible);
				}), B(this, "afterLinkSeries", { isUpdating: e });
			}
			renderSeries() {
				this.series.forEach(function(e) {
					e.translate(), e.render();
				});
			}
			render() {
				let e = this.axes, t = this.colorAxis, n = this.renderer, { axisLayoutRuns: r = 2, plotBorderRadius: i } = this.options.chart, a = (e) => {
					e.forEach((e) => {
						e.visible && e.render();
					});
				}, o = 0, s = !0, c, l = 0;
				for (let t of (i && (this.plotClipOuter ||= n.clipRect(), this.plotClipInner ||= n.clipRect()), this.setTitle(), B(this, "beforeMargins"), this.getStacks?.(), this.getMargins(!0), this.setChartSize(), e)) {
					let { options: e } = t, { labels: n, offset: r } = e;
					if (this.hasCartesianSeries && t.horiz && t.visible && n.enabled && t.series.length && t.coll !== "colorAxis" && !t.isRadial) {
						o = e.tickLength, t.createGroups();
						let i = new an(t, 0, "", !0), a = i.createLabel("x", n);
						if (i.destroy(), a && q(n.reserveSpace, !V(e.crossing)) && (o = a.getBBox().height + n.distance + Math.max(V(r) ? r : 0, 0)), o) {
							a?.destroy();
							break;
						}
					}
				}
				for (this.plotHeight = Math.max(this.plotHeight - o, 0); (s || c || r > 1) && l < r;) {
					let t = this.plotWidth, n = this.plotHeight, r = [1.05, 1.1];
					for (let t of e) {
						let e = +(t.horiz || 0);
						if (l === 0) {
							t.setScale();
							let n = t.tickPositions?.info?.match;
							n && (r[e] = Math.min(n, r[e]));
						} else (e && s || !e && c) && t.setTickInterval(!0);
					}
					l === 0 ? this.getAxisMargins() : this.getMargins(), s = t / this.plotWidth > (l ? 1 : r[1]), c = n / this.plotHeight > (l ? 1 : r[0]), l++;
				}
				this.drawChartBox(), this.hasCartesianSeries ? a(e) : t?.length && a(t), this.seriesGroup ||= n.g("series-group").attr({ zIndex: 3 }).shadow(this.options.chart.seriesGroupShadow).add(), this.renderSeries(), this.addCredits(), this.setResponsive && this.setResponsive(), this.hasRendered = !0;
			}
			addCredits(e) {
				let t = this, n = G(!0, this.options.credits, e);
				n.enabled && !this.credits && (this.credits = this.renderer.text(n.text + (this.mapCredits || ""), 0, 0, n.useHTML).addClass("highcharts-credits").on("click", function(e) {
					B(t, "creditsClick", e, () => {
						n.href && (Cr.location.href = n.href);
					});
				}).attr({
					align: n.position.align,
					zIndex: 8
				}), n.events?.click && M(t, "creditsClick", n.events.click), t.styledMode || this.credits.css(n.style), this.credits.add().align(n.position), this.credits.update = function(e) {
					t.credits = t.credits.destroy(), t.addCredits(e);
				});
			}
			destroy() {
				let e, t = this, n = t.axes, r = t.series, i = t.container, a = i?.parentNode;
				for (B(t, "destroy"), t.renderer.forExport ? le(br, t) : br[t.index] = void 0, j.chartCount--, t.renderTo.removeAttribute("data-highcharts-chart"), De(t), e = n.length; e--;) n[e] = n[e].destroy();
				for (this.scroller?.destroy?.(), e = r.length; e--;) r[e] = r[e].destroy();
				[
					"title",
					"subtitle",
					"chartBackground",
					"plotBackground",
					"plotBGImage",
					"plotBorder",
					"seriesGroup",
					"clipRect",
					"credits",
					"pointer",
					"rangeSelector",
					"legend",
					"resetZoomButton",
					"tooltip",
					"renderer"
				].forEach((e) => {
					t[e] = t[e]?.destroy?.();
				}), i && (i.innerHTML = Q.emptyHTML, De(i), a && se(i)), K(t, function(e, n) {
					delete t[n];
				});
			}
			firstRender() {
				let e = this, t = e.options;
				e.getContainer(), e.resetMargins(), e.setChartSize(), e.propFromSeries(), e.createAxes();
				let n = U(t.series) ? t.series : [];
				t.series = [], n.forEach(function(t) {
					e.initSeries(t);
				}), e.linkSeries(), B(e, "beforeRender"), e.render(), e.pointer?.getChartPosition(), e.renderer.asyncCounter || e.hasLoaded || e.onload(), e.temporaryDisplay(!0);
			}
			onload() {
				this.callbacks.concat([this.callback]).forEach(function(e) {
					e && this.index !== void 0 && e.apply(this, [this]);
				}, this), B(this, "load"), B(this, "render"), L(this.index) && this.setReflow(), this.warnIfA11yModuleNotLoaded(), this.warnIfCSSNotLoaded(), this.hasLoaded = !0;
			}
			warnIfA11yModuleNotLoaded() {
				let { options: e, title: t } = this;
				e && !this.accessibility && (this.renderer.boxWrapper.attr({
					role: "img",
					"aria-label": (t?.element.textContent || "").replace(/</g, "&lt;")
				}), e.accessibility && !1 === e.accessibility.enabled || Y("Highcharts warning: Consider including the \"accessibility.js\" module to make your chart more usable for people with disabilities. Set the \"accessibility.enabled\" option to false to remove this warning. See https://www.highcharts.com/docs/accessibility/accessibility-module.", !1, this));
			}
			warnIfCSSNotLoaded() {
				this.styledMode && Cr.getComputedStyle(this.container).zIndex !== "0" && Y(35, !1, this);
			}
			addSeries(e, t, n) {
				let r, i = this;
				return e && (t = q(t, !0), B(i, "addSeries", { options: e }, function() {
					r = i.initSeries(e), i.isDirtyLegend = !0, i.linkSeries(), B(i, "afterAddSeries", { series: r }), t && i.redraw(n);
				})), r;
			}
			addAxis(e, t, n, r) {
				return this.createAxis(t ? "xAxis" : "yAxis", {
					axis: e,
					redraw: n,
					animation: r
				});
			}
			addColorAxis(e, t, n) {
				return this.createAxis("colorAxis", {
					axis: e,
					redraw: t,
					animation: n
				});
			}
			createAxis(e, t) {
				let n = new mn(this, t.axis, e);
				return q(t.redraw, !0) && this.redraw(t.animation), n;
			}
			showLoading(e) {
				let t = this, n = t.options, r = n.loading, i = r?.style ?? {}, a = function() {
					o && I(o, {
						left: i.left ?? t.plotLeft + "px",
						top: i.top ?? t.plotTop + "px",
						width: i.width ?? t.plotWidth + "px",
						height: i.height ?? t.plotHeight + "px"
					});
				}, o = t.loadingDiv, s = t.loadingSpan;
				o || (t.loadingDiv = o = ae("div", { className: "highcharts-loading highcharts-loading-hidden" }, null, t.container)), s || (t.loadingSpan = s = ae("span", { className: "highcharts-loading-inner" }, null, o), M(t, "redraw", a)), o.className = "highcharts-loading", Q.setElementHTML(s, q(e, n.lang.loading, "")), !t.styledMode && (I(o, z(i, { zIndex: 10 })), I(s, r?.labelStyle ?? {}), t.loadingShown || (I(o, {
					opacity: 0,
					display: ""
				}), mr(o, { opacity: i.opacity ?? .5 }, { duration: r?.showDuration ?? 0 }))), t.loadingShown = !0, a();
			}
			hideLoading() {
				let e = this.options, t = this.loadingDiv;
				t && (t.className = "highcharts-loading highcharts-loading-hidden", this.styledMode || mr(t, { opacity: 0 }, {
					duration: e.loading?.hideDuration ?? 100,
					complete: function() {
						I(t, { display: "none" });
					}
				})), this.loadingShown = !1;
			}
			update(e, t, n, r) {
				let i, a, o, s = this, c = {
					credits: "addCredits",
					title: "setTitle",
					subtitle: "setSubtitle",
					caption: "setCaption"
				}, l = e.isResponsiveOptions, u = [];
				B(s, "update", { options: e }), l || s.setResponsive(!1, !0), e = ce(e, s.options), s.userOptions = G(s.userOptions, e);
				let d = e.chart;
				d && (G(!0, s.options.chart, d), this.setZoomOptions(), "className" in d && s.setClassName(d.className), ("inverted" in d || "polar" in d || "type" in d) && (s.propFromSeries(), i = !0), "alignTicks" in d && (i = !0), "events" in d && yr(this, d), K(d, function(e, t) {
					s.propsRequireUpdateSeries.indexOf("chart." + t) !== -1 && (a = !0), s.propsRequireDirtyBox.indexOf(t) !== -1 && (s.isDirtyBox = !0), s.propsRequireReflow.indexOf(t) !== -1 && (s.isDirtyBox = !0, l || (o = !0));
				}), !s.styledMode && d.style && s.renderer.setStyle(s.options.chart.style || {})), !s.styledMode && e.colors && (this.options.colors = e.colors), K(e, function(t, n) {
					s[n] && typeof s[n].update == "function" ? s[n].update(t, !1) : typeof s[c[n]] == "function" ? s[c[n]](t) : n !== "colors" && s.collectionsWithUpdate.indexOf(n) === -1 && G(!0, s.options[n], e[n]), n !== "chart" && s.propsRequireUpdateSeries.indexOf(n) !== -1 && (a = !0);
				}), this.collectionsWithUpdate.forEach((t) => {
					e[t] && (Oe(e[t]).forEach((e, r) => {
						let i;
						if (!e) return;
						let a = L(e.id);
						a && (i = s.get(e.id)), !i && s[t] && (i = s[t][q(e.index, r)]) && (a && L(i.options.id) || i.options.isInternal) && (i = void 0), i && i.coll === t && (i.update(e, !1), n && (i.touched = !0)), !i && n && s.collectionsWithInit[t] && (s.collectionsWithInit[t][0].apply(s, [e].concat(s.collectionsWithInit[t][1] || [], [!1])).touched = !0);
					}), n && s[t].forEach((e) => {
						e.touched || e.options.isInternal ? delete e.touched : u.push(e);
					}));
				}), u.forEach((e) => {
					e.chart && e.remove && e.remove(!1);
				}), i && s.axes.forEach(function(e) {
					e.update({}, !1);
				}), a && s.series.forEach((e) => {
					e.chart && e.update({}, !1);
				});
				let f = d?.width, p = d && (H(d.height) ? Te(d.height, f || s.chartWidth) : d.height);
				o || V(f) && f !== s.chartWidth || V(p) && p !== s.chartHeight ? s.setSize(f, p, r) : q(t, !0) && s.redraw(r), B(s, "afterUpdate", {
					options: e,
					redraw: t,
					animation: r
				});
			}
			setSubtitle(e, t) {
				this.applyDescription("subtitle", e), this.layOutTitles(t);
			}
			setCaption(e, t) {
				this.applyDescription("caption", e), this.layOutTitles(t);
			}
			showResetZoom() {
				let e = this, t = e.options.lang, n = e.zooming.resetButton, r = n.theme, i = n.relativeTo === "chart" || n.relativeTo === "spacingBox" ? null : "plotBox";
				function a() {
					e.zoomOut();
				}
				B(this, "beforeShowResetZoom", null, function() {
					e.resetZoomButton = e.renderer.button(t.resetZoom, null, null, a, r).attr({
						align: n.position.align,
						title: t.resetZoomTitle
					}).addClass("highcharts-reset-zoom").add().align(n.position, !1, i);
				}), B(this, "afterShowResetZoom");
			}
			zoomOut() {
				B(this, "selection", { resetSelection: !0 }, () => this.transform({
					reset: !0,
					trigger: "zoom"
				}));
			}
			pan(e, t) {
				let n = this, r = typeof t == "object" ? t : {
					enabled: t,
					type: "x"
				}, i = r.type, a = i && n[{
					x: "xAxis",
					xy: "axes",
					y: "yAxis"
				}[i]].filter((e) => e.options.panningEnabled && !e.options.isInternal), o = n.options.chart;
				o?.panning && (o.panning = r), B(this, "pan", { originalEvent: e }, () => {
					n.transform({
						axes: a,
						event: e,
						to: {
							x: e.chartX - (n.mouseDownX || 0),
							y: e.chartY - (n.mouseDownY || 0)
						},
						trigger: "pan"
					}), I(n.container, { cursor: "move" });
				});
			}
			transform(e) {
				let { axes: t = this.axes, event: n, from: r = {}, reset: i, selection: a, to: o = {}, trigger: s, allowResetButton: c = !0 } = e, { inverted: l, time: u } = this;
				this.hoverPoints?.forEach((e) => e.setState()), B(this, "transform", e);
				let d = e.hasZoomed || !1, f, p;
				for (let e of t) {
					let { horiz: t, len: m, minPointOffset: h = 0, options: g, reversed: _ } = e, v = t ? "width" : "height", y = t ? "x" : "y", b = q(o[v], e.len), x = q(r[v], e.len), S = 10 > Math.abs(b) ? 1 : b / x, C = (r[y] || 0) + x / 2 - e.pos, w = C - ((o[y] ?? e.pos) + b / 2 - e.pos) / S, T = _ && !l || !_ && l ? -1 : 1;
					if (!i && (C < 0 || C > e.len)) continue;
					let E = e.chart.polar || e.isOrdinal && S <= 1 ? 0 : h * T || 0, D = e.toValue(w, !0), O = e.toValue(w + m / S, !0), k = D + E, A = O - E, j = e.allExtremes;
					if (a && a[e.coll].push({
						axis: e,
						min: Math.min(D, O),
						max: Math.max(D, O)
					}), k > A && ([k, A] = [A, k]), S === 1 && !i && e.coll === "yAxis" && !j) {
						for (let t of e.series) {
							let e = t.getExtremes(t.getProcessedData(!0).modified.getColumn(t.pointValKey || "y") || [], !0);
							j ??= {
								dataMin: Number.MAX_VALUE,
								dataMax: -Number.MAX_VALUE
							}, V(e.dataMin) && V(e.dataMax) && (j.dataMin = Math.min(e.dataMin, j.dataMin), j.dataMax = Math.max(e.dataMax, j.dataMax));
						}
						e.allExtremes = j;
					}
					let { dataMin: ee, dataMax: te, min: ne, max: M } = z(e.getExtremes(), j || {}), re = u.parse(g.min), N = u.parse(g.max), ie = ee ?? re, P = te ?? N, F = A - k, ae = e.categories ? 0 : Math.min(F, P - ie), oe = ie - ae * (L(re) ? 0 : g.minPadding), I = P + ae * (L(N) ? 0 : g.maxPadding), R = e.allowZoomOutside || S === 1 || s !== "zoom" && S > 1, se = Math.min(re ?? oe, oe, R ? ne : oe), ce = Math.max(N ?? I, I, R ? M : I);
					(!e.isOrdinal || S !== 1 || i) && (k < se && (k = se, S >= 1 && (A = k + F)), A > ce && (A = ce, S >= 1 && (k = A - F)), (i || e.series.length && (k !== ne || A !== M) && k >= se && A <= ce) && (a ? a[e.coll].push({
						axis: e,
						min: k,
						max: A
					}) : (e.isPanning = s !== "zoom", e.isPanning && s !== "mousewheel" && (p = !0), e.setExtremes(i ? void 0 : k, i ? void 0 : A, !1, !1, {
						move: w,
						trigger: s,
						scale: S
					}), !i && (k > se || A < ce) && (f = c)), d = !0), this.hasCartesianSeries || i || (f = c), n && (this[t ? "mouseDownX" : "mouseDownY"] = n[t ? "chartX" : "chartY"]));
				}
				return d && (a ? B(this, "selection", a, () => {
					delete e.selection, e.trigger = "zoom", this.transform(e);
				}) : (!f || p || this.resetZoomButton ? !f && this.resetZoomButton && (this.resetZoomButton = this.resetZoomButton.destroy()) : this.showResetZoom(), this.redraw(s === "zoom" && (this.options.chart.animation ?? this.pointCount < 100)))), d;
			}
		}
		z(Tr.prototype, {
			callbacks: [],
			collectionsWithInit: {
				xAxis: [Tr.prototype.addAxis, [!0]],
				yAxis: [Tr.prototype.addAxis, [!1]],
				series: [Tr.prototype.addSeries]
			},
			collectionsWithUpdate: [
				"xAxis",
				"yAxis",
				"series"
			],
			propsRequireDirtyBox: [
				"backgroundColor",
				"borderColor",
				"borderWidth",
				"borderRadius",
				"plotBackgroundColor",
				"plotBackgroundImage",
				"plotBorderColor",
				"plotBorderRadius",
				"plotBorderWidth",
				"plotShadow",
				"shadow"
			],
			propsRequireReflow: [
				"margin",
				"marginTop",
				"marginRight",
				"marginBottom",
				"marginLeft",
				"spacing",
				"spacingTop",
				"spacingRight",
				"spacingBottom",
				"spacingLeft"
			],
			propsRequireUpdateSeries: [
				"chart.inverted",
				"chart.polar",
				"chart.ignoreHiddenSeries",
				"chart.type",
				"colors",
				"plotOptions",
				"time",
				"tooltip"
			]
		});
		let { stop: Er } = $e, { composed: Dr } = j;
		function Or() {
			(this.scrollablePixelsX || this.scrollablePixelsY) && !this.scrollablePlotArea && (this.scrollablePlotArea = new Ar(this)), this.scrollablePlotArea?.applyFixed();
		}
		function kr() {
			this.chart.scrollablePlotArea && (this.chart.scrollablePlotArea.isDirty = !0);
		}
		class Ar {
			static compose(e, t, n) {
				we(Dr, "ScrollablePlotArea") && (M(e, "afterInit", kr), M(t, "afterSetChartSize", (e) => this.afterSetSize(e.target, e)), M(t, "render", Or), M(n, "show", kr));
			}
			static afterSetSize(e, t) {
				let n, r, i, { minWidth: a, minHeight: o } = e.options.chart.scrollablePlotArea || {}, { clipBox: s, plotBox: c, inverted: l, renderer: u } = e;
				if (!u.forExport) if (a ? (e.scrollablePixelsX = n = Math.max(0, a - e.chartWidth), n && (e.scrollablePlotBox = G(e.plotBox), c.width = e.plotWidth += n, s[l ? "height" : "width"] += n, i = !0)) : o && (e.scrollablePixelsY = r = Math.max(0, o - e.chartHeight), L(r) && (e.scrollablePlotBox = G(e.plotBox), c.height = e.plotHeight += r, s[l ? "width" : "height"] += r, i = !1)), L(i)) {
					if (!t.skipAxes) for (let t of e.axes) (t.horiz === i || e.hasParallelCoordinates && t.coll === "yAxis") && (t.setAxisSize(), t.setAxisTranslation());
				} else delete e.scrollablePlotBox;
			}
			constructor(e) {
				let t, n = e.options.chart, r = n.scrollablePlotArea || {}, i = this.moveFixedElements.bind(this), a = {
					WebkitOverflowScrolling: "touch",
					overflowX: "hidden",
					overflowY: "hidden"
				};
				e.scrollablePixelsX && (a.overflowX = "auto"), e.scrollablePixelsY && (a.overflowY = "auto"), this.chart = e;
				let o = this.parentDiv = ae("div", { className: "highcharts-scrolling-parent" }, { position: "relative" }, e.renderTo), s = this.scrollingContainer = ae("div", { className: "highcharts-scrolling" }, a, o), c = this.innerContainer = ae("div", { className: "highcharts-inner-container" }, void 0, s), l = this.fixedDiv = ae("div", { className: "highcharts-fixed" }, {
					position: "absolute",
					overflow: "hidden",
					pointerEvents: "none",
					zIndex: (n.style?.zIndex || 0) + 2,
					top: 0
				}, void 0, !0), u = this.fixedRenderer = new Xt(l, e.chartWidth, e.chartHeight, n.style);
				this.mask = u.path().attr({
					fill: n.backgroundColor || "#fff",
					"fill-opacity": r.opacity ?? .85,
					zIndex: -1
				}).addClass("highcharts-scrollable-mask").add(), s.parentNode.insertBefore(l, s), I(e.renderTo, { overflow: "visible" }), M(e, "afterShowResetZoom", i), M(e, "afterApplyDrilldown", i), M(e, "afterLayOutTitles", i), M(s, "scroll", () => {
					let { pointer: n, hoverPoint: r } = e;
					n && (delete n.chartPosition, r && (t = r), n.runPointActions(void 0, t, !0));
				}), c.appendChild(e.container);
			}
			applyFixed() {
				let { chart: e, fixedRenderer: t, isDirty: n, scrollingContainer: r } = this, { axisOffset: i, chartWidth: a, chartHeight: o, container: s, plotHeight: c, plotLeft: l, plotTop: u, plotWidth: d, scrollablePixelsX: f = 0, scrollablePixelsY: p = 0 } = e, { scrollPositionX: m = 0, scrollPositionY: h = 0 } = e.options.chart.scrollablePlotArea || {}, g = a + f, _ = o + p;
				t.setSize(a, o), (n ?? !0) && (this.isDirty = !1, this.moveFixedElements()), Er(e.container), I(s, {
					width: `${g}px`,
					height: `${_}px`
				}), e.renderer.boxWrapper.attr({
					width: g,
					height: _,
					viewBox: [
						"0 0",
						g,
						_
					].join(" ")
				}), e.chartBackground?.attr({
					width: g,
					height: _
				}), I(r, {
					width: `${a}px`,
					height: `${o}px`
				}), L(n) || (r.scrollLeft = f * m, r.scrollTop = p * h);
				let v = u - i[0] - 1, y = l - i[3] - 1, b = u + c + i[2] + 1, x = l + d + i[1] + 1, S = l + d - f, C = u + c - p, w = [[
					"M",
					0,
					0
				]];
				f ? w = [
					[
						"M",
						0,
						v
					],
					[
						"L",
						l - 1,
						v
					],
					[
						"L",
						l - 1,
						b
					],
					[
						"L",
						0,
						b
					],
					["Z"],
					[
						"M",
						S,
						v
					],
					[
						"L",
						a,
						v
					],
					[
						"L",
						a,
						b
					],
					[
						"L",
						S,
						b
					],
					["Z"]
				] : p && (w = [
					[
						"M",
						y,
						0
					],
					[
						"L",
						y,
						u - 1
					],
					[
						"L",
						x,
						u - 1
					],
					[
						"L",
						x,
						0
					],
					["Z"],
					[
						"M",
						y,
						C
					],
					[
						"L",
						y,
						o
					],
					[
						"L",
						x,
						o
					],
					[
						"L",
						x,
						C
					],
					["Z"]
				]), e.redrawTrigger !== "adjustHeight" && this.mask.attr({ d: w });
			}
			moveFixedElements() {
				let e, { container: t, inverted: n, scrollablePixelsX: r, scrollablePixelsY: i } = this.chart, a = this.fixedRenderer, o = Ar.fixedSelectors.slice();
				if (r && !n ? e = ".highcharts-yaxis" : r && n || i && !n ? e = ".highcharts-xaxis" : i && n && (e = ".highcharts-yaxis"), e && !(this.chart.hasParallelCoordinates && e === ".highcharts-yaxis")) for (let t of [`${e}:not(.highcharts-radial-axis)`, `${e}-labels:not(.highcharts-radial-axis-labels)`]) we(o, t);
				else for (let e of [".highcharts-xaxis", ".highcharts-yaxis"]) for (let t of [`${e}:not(.highcharts-radial-axis)`, `${e}-labels:not(.highcharts-radial-axis-labels)`]) le(o, t);
				for (let e of o) [].forEach.call(t.querySelectorAll(e), (e) => {
					(e.namespaceURI === a.SVG_NS ? a.box : a.box.parentNode).appendChild(e), e.style.pointerEvents = "auto";
				});
			}
		}
		Ar.fixedSelectors = [
			".highcharts-breadcrumbs-group",
			".highcharts-contextbutton",
			".highcharts-caption",
			".highcharts-credits",
			".highcharts-drillup-button",
			".highcharts-legend",
			".highcharts-legend-checkbox",
			".highcharts-navigator-series",
			".highcharts-navigator-xaxis",
			".highcharts-navigator-yaxis",
			".highcharts-navigator",
			".highcharts-range-selector-group",
			".highcharts-reset-zoom",
			".highcharts-scrollbar",
			".highcharts-subtitle",
			".highcharts-title"
		];
		let { format: jr } = ft, { series: Mr } = $, Nr = class {
			constructor(e, t, n, r, i) {
				let a = e.chart.inverted, o = e.reversed;
				this.axis = e;
				let s = this.isNegative = !!n != !!o;
				this.options = t ||= {}, this.x = r, this.total = null, this.cumulative = null, this.points = {}, this.hasValidPoints = !1, this.stack = i, this.leftCliff = 0, this.rightCliff = 0, this.alignOptions = {
					align: t.align || (a ? s ? "left" : "right" : "center"),
					verticalAlign: t.verticalAlign || (a ? "middle" : s ? "bottom" : "top"),
					y: t.y,
					x: t.x
				}, this.textAlign = t.textAlign || (a ? s ? "right" : "left" : "center");
			}
			destroy() {
				R(this, this.axis);
			}
			render(e) {
				let t = this.axis.chart, n = this.options, r = n.format, i = (r ? jr(r, this, t) : n.formatter?.call(this, this)) || "";
				if (this.label) this.label.attr({
					text: i,
					visibility: "hidden"
				});
				else {
					this.label = t.renderer.label(i, null, void 0, n.shape, void 0, void 0, n.useHTML, !1, "stack-labels");
					let r = {
						r: n.borderRadius || 0,
						text: i,
						padding: q(n.padding, 5),
						visibility: "hidden"
					};
					t.styledMode || (r.fill = n.backgroundColor, r.stroke = n.borderColor, r["stroke-width"] = n.borderWidth, this.label.css(n.style || {})), this.label.attr(r), this.label.added || this.label.add(e);
				}
				this.label.labelrank = t.plotSizeY, B(this, "afterRender");
			}
			setOffset(e, t, n, r, i, a) {
				let { alignOptions: o, axis: s, label: c, options: l, textAlign: u } = this, d = s.chart, f = this.getStackBox({
					xOffset: e,
					width: t,
					boxBottom: n,
					boxTop: r,
					defaultX: i,
					xAxis: a
				}), { verticalAlign: p } = o;
				if (c && f) {
					let e = c.getBBox(void 0, 0), t = c.padding, n = q(l.overflow, "justify") === "justify", r;
					o.x = l.x || 0, o.y = l.y || 0;
					let { x: i, y: a } = this.adjustStackPosition({
						labelBox: e,
						verticalAlign: p,
						textAlign: u
					});
					f.x -= i, f.y -= a, c.align(o, !1, f), (r = d.isInsidePlot(c.alignAttr.x + o.x + i, c.alignAttr.y + o.y + a)) || (n = !1), n && Mr.prototype.justifyDataLabel.call(s, c, o, c.alignAttr, e, f), c.attr({
						x: c.alignAttr.x,
						y: c.alignAttr.y,
						rotation: l.rotation,
						rotationOriginX: e.width * de(l.textAlign || "center"),
						rotationOriginY: e.height / 2
					}), q(!n && l.crop, !0) && (r = V(c.x) && V(c.y) && d.isInsidePlot(c.x - t + (c.width || 0), c.y) && d.isInsidePlot(c.x + t, c.y)), c[r ? "show" : "hide"]();
				}
				B(this, "afterSetOffset", {
					xOffset: e,
					width: t
				});
			}
			adjustStackPosition({ labelBox: e, verticalAlign: t, textAlign: n }) {
				return {
					x: e.width / 2 + e.width / 2 * (2 * de(n) - 1),
					y: e.height / 2 * 2 * (1 - de(t))
				};
			}
			getStackBox(e) {
				let t = this.axis, n = t.chart, { boxTop: r, defaultX: i, xOffset: a, width: o, boxBottom: s } = e, c = t.stacking.usePercentage ? 100 : q(r, this.total, 0), l = t.toPixels(c), u = e.xAxis || n.xAxis[0], d = q(i, u.translate(this.x)) + a, f = Math.abs(l - t.toPixels(s || V(t.min) && t.logarithmic && t.logarithmic.lin2log(t.min) || 0)), p = n.inverted, m = this.isNegative;
				return p ? {
					x: (m ? l : l - f) - n.plotLeft,
					y: u.height - d - o + u.top - n.plotTop,
					width: f,
					height: o
				} : {
					x: d + u.transB - n.plotLeft,
					y: (m ? l - f : l) - n.plotTop,
					width: o,
					height: f
				};
			}
		}, { getDeferredAnimation: Pr } = $e, { series: { prototype: Fr } } = $;
		function Ir() {
			let e = this.inverted;
			this.axes.forEach((e) => {
				e.stacking?.stacks && e.hasVisibleSeries && (e.stacking.oldStacks = e.stacking.stacks);
			}), this.series.forEach((t) => {
				let n = t.xAxis?.options || {};
				t.options.stacking && t.reserveSpace() && (t.stackKey = [
					t.type,
					q(t.options.stack, ""),
					e ? n.top : n.left,
					e ? n.height : n.width
				].join(","));
			});
		}
		function Lr() {
			let e = this.stacking;
			if (e) {
				let t = e.stacks;
				K(t, (e, n) => {
					R(e), delete t[n];
				}), e.stackTotalGroup?.destroy();
			}
		}
		function Rr() {
			this.stacking ||= new Wr(this);
		}
		function zr(e, t, n, r) {
			return !L(e) || e.x !== t || r && e.stackKey !== r ? e = {
				x: t,
				index: 0,
				key: r,
				stackKey: r
			} : e.index++, e.key = [
				n,
				t,
				e.index
			].join(","), e;
		}
		function Br() {
			let e, t = this, n = t.yAxis, r = t.stackKey || "", i = n.stacking.stacks, a = t.getColumn("x", !0), o = t[t.options.stacking + "Stacker"];
			o && [r, "-" + r].forEach((n) => {
				let r = a.length, s, c, l;
				for (; r--;) s = a[r], e = t.getStackIndicator(e, s, t.index, n), c = i[n]?.[s], (l = c?.points[e.key || ""]) && o.call(t, l, c, r);
			});
		}
		function Vr(e, t, n) {
			let r = t.total ? 100 / t.total : 0;
			e[0] = F(e[0] * r), e[1] = F(e[1] * r), this.stackedYData[n] = e[1];
		}
		function Hr(e) {
			(this.is("column") || this.is("columnrange")) && (this.options.centerInCategory && this.chart.series.length > 1 ? Fr.setStackedPoints.call(this, e, "group") : e.stacking.resetStacks());
		}
		function Ur(e, t) {
			let n, r, i, a, o, s, c, l = t || this.options.stacking;
			if (!l || !this.reserveSpace() || ({ group: "xAxis" }[l] || "yAxis") !== e.coll) return;
			let u = this.getColumn("x", !0), d = this.getColumn(this.pointValKey || "y", !0), f = [], p = d.length, m = this.options, h = m.threshold || 0, g = m.startFromThreshold ? h : 0, _ = m.stack, v = t ? `${this.type},${l}` : this.stackKey || "", y = "-" + v, b = this.negStacks, x = e.stacking, S = x.stacks, C = x.oldStacks;
			for (x.stacksTouched += 1, c = 0; c < p; c++) {
				let t = u[c] || 0, p = d[c], m = V(p) && p || 0;
				s = (n = this.getStackIndicator(n, t, this.index)).key || "", S[o = (r = b && m < (g ? 0 : h)) ? y : v] || (S[o] = {}), S[o][t] || (C[o]?.[t] ? (S[o][t] = C[o][t], S[o][t].total = null) : S[o][t] = new Nr(e, e.options.stackLabels, !!r, t, _)), i = S[o][t], p === null ? (delete i.points[s], delete i.points[this.index]) : (i.points[s] = i.points[this.index] = [q(i.cumulative, g)], L(i.cumulative) || (i.base = s), i.touched = x.stacksTouched, n.index > 0 && !1 === this.singleStacks && (i.points[s][0] = i.points[this.index + "," + t + ",0"][0]));
				let w = i.total || 0;
				l === "percent" ? (a = r ? v : y, w = b && S[a]?.[t] ? (a = S[a][t]).total = Math.max(a.total || 0, w) + Math.abs(m) : F(w + Math.abs(m))) : l === "group" ? V(p) && w++ : w = F(w + m), l === "group" ? i.cumulative = (w || 1) - 1 : i.cumulative = F(q(i.cumulative, g) + m), i.total = w, p !== null && (i.points[s].push(i.cumulative), f[c] = i.cumulative, i.hasValidPoints = !0);
			}
			l === "percent" && (x.usePercentage = !0), l !== "group" && (this.stackedYData = f), x.oldStacks = {};
		}
		class Wr {
			constructor(e) {
				this.oldStacks = {}, this.stacks = {}, this.stacksTouched = 0, this.axis = e;
			}
			buildStacks() {
				let e, t, n = this.axis, r = n.series, i = n.coll === "xAxis", a = n.options.reversedStacks, o = r.length;
				for (this.resetStacks(), this.usePercentage = !1, t = o; t--;) e = r[a ? t : o - t - 1], i && e.setGroupedPoints(n), e.setStackedPoints(n);
				if (!i) for (t = 0; t < o; t++) r[t].modifyStacks();
				B(n, "afterBuildStacks");
			}
			cleanStacks() {
				this.oldStacks && (this.stacks = this.oldStacks, K(this.stacks, (e) => {
					K(e, (e) => {
						e.cumulative = e.total;
					});
				}));
			}
			resetStacks() {
				K(this.stacks, (e) => {
					K(e, (t, n) => {
						V(t.touched) && t.touched < this.stacksTouched ? (t.destroy(), delete e[n]) : (t.total = null, t.cumulative = null);
					});
				});
			}
			renderStackTotals() {
				let e = this.axis, t = e.chart, n = t.renderer, r = this.stacks, i = Pr(t, e.options.stackLabels?.animation || !1), a = this.stackTotalGroup = this.stackTotalGroup || n.g("stack-labels").attr({
					zIndex: 6,
					opacity: 0
				}).add();
				a.translate(t.plotLeft, t.plotTop), K(r, (e) => {
					K(e, (e) => {
						e.render(a);
					});
				}), a.animate({ opacity: 1 }, i);
			}
		}
		(S ||= {}).compose = function(e, t, n) {
			let r = t.prototype, i = n.prototype;
			r.getStacks || (M(e, "init", Rr), M(e, "destroy", Lr), r.getStacks = Ir, i.getStackIndicator = zr, i.modifyStacks = Br, i.percentStacker = Vr, i.setGroupedPoints = Hr, i.setStackedPoints = Ur);
		};
		let Gr = S;
		class Kr extends ir {
			drawGraph() {
				let e = this.options, t = (this.gappedPath || this.getGraphPath).call(this), n = this.chart.styledMode;
				[this, ...this.zones].forEach((r, i) => {
					let a, o = r.graph, s = o ? "animate" : "attr", c = r.dashStyle || e.dashStyle;
					if (o ? (o.endX = this.preventGraphAnimation ? null : t.xMap, o.animate({ d: t })) : t.length && (r.graph = o = this.chart.renderer.path(t).addClass("highcharts-graph" + (i ? ` highcharts-zone-graph-${i - 1} ` : " ") + (i && r.className || "")).attr({ zIndex: 1 }).add(this.group)), o && !n && (a = {
						stroke: !i && e.lineColor || r.color || this.color || "var(--highcharts-neutral-color-20)",
						"stroke-width": e.lineWidth || 0,
						fill: this.fillGraph && this.color || "none"
					}, c ? a.dashstyle = c : e.linecap !== "square" && (a["stroke-linecap"] = a["stroke-linejoin"] = "round"), o[s](a), e.shadow)) {
						let t = this.chart.inverted, n = { filterUnits: "userSpaceOnUse" }, r = W(e.shadow) ? G(t ? {} : n, e.shadow) : !!t || n;
						o.shadow(r);
					}
					o && (o.startX = t.xMap, o.isArea = t.isArea);
				});
			}
			getGraphPath(e, t, n) {
				let r = this, i = r.options, a = [], o = [], s, c = i.step, l = (e ||= r.points).reversed;
				return l && e.reverse(), (c = {
					right: 1,
					center: 2
				}[c] || c && 3) && l && (c = 4 - c), (e = this.getValidPoints(e, !1, i.nullInteraction || !(i.connectNulls && !t && !n))).forEach(function(l, u) {
					let d, f = l.plotX, p = l.plotY, m = e[u - 1], h = l.isNull || typeof p != "number";
					(l.leftCliff || m?.rightCliff) && !n && (s = !0), h && !L(t) && u > 0 ? s = !i.connectNulls : h && !t ? s = !0 : (u === 0 || s ? d = [[
						"M",
						l.plotX,
						l.plotY
					]] : r.getPointSpline ? d = [r.getPointSpline(e, l, u)] : c ? (d = c === 1 ? [[
						"L",
						m.plotX,
						p
					]] : c === 2 ? [[
						"L",
						(m.plotX + f) / 2,
						m.plotY
					], [
						"L",
						(m.plotX + f) / 2,
						p
					]] : [[
						"L",
						f,
						m.plotY
					]]).push([
						"L",
						f,
						p
					]) : d = [[
						"L",
						f,
						p
					]], o.push(l.x), c && (o.push(l.x), c === 2 && o.push(l.x)), a.push.apply(a, d), s = !1);
				}), a.xMap = o, r.graphPath = a, a;
			}
		}
		Kr.defaultOptions = G(ir.defaultOptions, { legendSymbol: "lineMarker" }), $.registerSeriesType("line", Kr);
		let { seriesTypes: { line: qr } } = $;
		class Jr extends qr {
			drawGraph() {
				this.areaPath = [], super.drawGraph.apply(this);
				let { areaPath: e, options: t } = this;
				[this, ...this.zones].forEach((n, r) => {
					let i = {}, a = n.fillColor || t.fillColor, o = n.area, s = o ? "animate" : "attr";
					o ? (o.endX = this.preventGraphAnimation ? null : e.xMap, o.animate({ d: e })) : (i.zIndex = 0, (o = n.area = this.chart.renderer.path(e).addClass("highcharts-area" + (r ? ` highcharts-zone-area-${r - 1} ` : " ") + (r && n.className || "")).add(this.group)).isArea = !0), this.chart.styledMode || (i.fill = a || n.color || this.color, i["fill-opacity"] = a ? 1 : t.fillOpacity ?? .75, o.css({ pointerEvents: this.stickyTracking ? "none" : "auto" })), o[s](i), o.startX = e.xMap, o.shiftUnit = t.step ? 2 : 1;
				});
			}
			getGraphPath(e) {
				let t, n, r, i = qr.prototype.getGraphPath, a = this.options, o = a.stacking, s = this.yAxis, c = [], l = [], u = this.index, d = s.stacking.stacks[this.stackKey], f = a.threshold, p = Math.round(s.getThreshold(a.threshold)), m = q(a.connectNulls, o === "percent"), h = function(n, r, i) {
					let a = e[n], m = e[r], h = o && d[a.x].points[u], g = a[i + "Null"] || 0, _ = a[i + "Cliff"] || 0, v, y, b = !0;
					h && (_ || g) ? (v = (g ? h[0] : h[1]) + _, y = h[0] + _, b = !!g) : !o && m && (m.isNull || !L(m.plotY)) && (v = y = f), v !== void 0 && (l.push({
						plotX: t,
						plotY: v === null ? p : s.getThreshold(v),
						isNull: b,
						isCliff: !0
					}), c.push({
						plotX: t,
						plotY: y === null ? p : s.getThreshold(y),
						doCurve: !1
					}));
				};
				e ||= this.points, o && (e = this.getStackPoints(e));
				for (let i = 0, a = e.length; i < a; ++i) o || (e[i].leftCliff = e[i].rightCliff = e[i].leftNull = e[i].rightNull = void 0), n = e[i].isNull || !L(e[i].plotY), t = q(e[i].rectPlotX, e[i].plotX), r = o ? q(e[i].yBottom, p) : p, (!n || m) && (m || h(i, i - 1, "left"), n && !o && m || (l.push(e[i]), c.push({
					x: i,
					plotX: t,
					plotY: r
				})), m || h(i, i + 1, "right"));
				let g = i.call(this, l, !0, !0);
				c.reversed = !0;
				let _ = i.call(this, c, !0, !0), v = _[0];
				v && v[0] === "M" && (_[0] = [
					"L",
					v[1],
					v[2]
				]);
				let y = g.concat(_);
				y.length && y.push(["Z"]);
				let b = i.call(this, l, !1, m);
				return this.chart.series.length > 1 && o && l.some((e) => e.isCliff) && (y.hasStackedCliffs = b.hasStackedCliffs = !0), y.xMap = g.xMap, this.areaPath = y, b;
			}
			getStackPoints(e) {
				let t = this, n = [], r = [], i = this.xAxis, a = this.yAxis, o = a.stacking.stacks[this.stackKey], s = {}, c = a.series, l = c.length, u = a.options.reversedStacks ? 1 : -1, d = c.indexOf(t), f = a.getThreshold(t.options.threshold || 0);
				if (e ||= this.points, this.options.stacking) {
					for (let t = 0; t < e.length; t++) e[t].leftNull = e[t].rightNull = void 0, s[e[t].x] = e[t];
					K(o, function(e, t) {
						e.total !== null && r.push(t);
					}), r.sort(function(e, t) {
						return e - t;
					});
					let p = c.map((e) => e.visible);
					r.forEach(function(e, m) {
						let h = 0, g, _;
						if (s[e] && !s[e].isNull) n.push(s[e]), [-1, 1].forEach(function(n) {
							let i = n === 1 ? "rightNull" : "leftNull", a = o[r[m + n]], f = 0;
							if (a) {
								let n = d;
								for (; n >= 0 && n < l;) {
									let r = c[n].index;
									!(g = a.points[r]) && (r === t.index ? s[e][i] = !0 : p[n] && (_ = o[e].points[r]) && (f -= _[1] - _[0])), n += u;
								}
							}
							s[e][n === 1 ? "rightCliff" : "leftCliff"] = f;
						});
						else {
							let t = d;
							for (; t >= 0 && t < l;) {
								let n = c[t].index;
								if (g = o[e].points[n]) {
									h = g[1];
									break;
								}
								t += u;
							}
							h ||= 0;
							let r = a.positiveValuesOnly && h <= 0 ? f : a.translate(h, !1, !0, !1, !0);
							n.push({
								isNull: !0,
								plotX: i.translate(e, !1, !1, !1, !0),
								x: e,
								plotY: r,
								yBottom: r
							});
						}
					});
				}
				return n;
			}
		}
		Jr.defaultOptions = G(qr.defaultOptions, {
			threshold: 0,
			legendSymbol: "areaMarker"
		}), z(Jr.prototype, { singleStacks: !1 }), $.registerSeriesType("area", Jr);
		let { line: Yr } = $.seriesTypes;
		class Xr extends Yr {
			getPointSpline(e, t, n) {
				let r, i, a, o, s = t.plotX || 0, c = t.plotY || 0, l = e[n - 1], u = e[n + 1];
				function d(e) {
					return e && !e.isNull && !1 !== e.doCurve && !t.isCliff;
				}
				if (d(l) && d(u)) {
					let e = l.plotX || 0, n = l.plotY || 0, d = u.plotX || 0, f = u.plotY || 0, p = 0;
					r = (1.5 * s + e) / 2.5, i = (1.5 * c + n) / 2.5, a = (1.5 * s + d) / 2.5, o = (1.5 * c + f) / 2.5, a !== r && (p = (o - i) * (a - s) / (a - r) + c - o), i += p, o += p, i > n && i > c ? (i = Math.max(n, c), o = 2 * c - i) : i < n && i < c && (i = Math.min(n, c), o = 2 * c - i), o > f && o > c ? (o = Math.max(f, c), i = 2 * c - o) : o < f && o < c && (o = Math.min(f, c), i = 2 * c - o), t.rightContX = a, t.rightContY = o, t.controlPoints = {
						low: [r, i],
						high: [a, o]
					};
				}
				let f = [
					"C",
					q(l.rightContX, l.plotX, 0),
					q(l.rightContY, l.plotY, 0),
					q(r, s, 0),
					q(i, c, 0),
					s,
					c
				];
				return l.rightContX = l.rightContY = void 0, f;
			}
		}
		Xr.defaultOptions = G(Yr.defaultOptions), $.registerSeriesType("spline", Xr);
		let Zr = Xr, { area: Qr, area: { prototype: $r } } = $.seriesTypes;
		class ei extends Zr {}
		ei.defaultOptions = G(Zr.defaultOptions, Qr.defaultOptions), z(ei.prototype, {
			getGraphPath: $r.getGraphPath,
			getStackPoints: $r.getStackPoints,
			drawGraph: $r.drawGraph
		}), $.registerSeriesType("areaspline", ei);
		let { animObject: ti } = $e, { parse: ni } = Z, { noop: ri } = j;
		class ii extends ir {
			animate(e) {
				let t, n, r = this, i = this.yAxis, a = i.pos, o = i.reversed, s = r.options, { clipOffset: c, inverted: l } = this.chart, u = {}, d = l ? "translateX" : "translateY";
				e && c ? (u.scaleY = .001, n = P(i.toPixels(s.threshold || 0), a, a + i.len), l ? u.translateX = (n += o ? -Math.floor(c[+!!l]) : Math.ceil(c[l ? 3 : 2])) - i.len : u.translateY = n += o ? Math.ceil(c[+!!l]) : -Math.floor(c[l ? 3 : 2]), r.clipBox && r.setClip(), r.group.attr(u)) : (t = Number(r.group.attr(d)), r.group.animate({ scaleY: 1 }, z(ti(r.options.animation), { step: function(e, n) {
					r.group && (u[d] = t + n.pos * (a - t), r.group.attr(u));
				} })));
			}
			init(e, t) {
				super.init.apply(this, arguments);
				let n = this;
				(e = n.chart).hasRendered && e.series.forEach(function(e) {
					e.type === n.type && (e.isDirty = !0);
				});
			}
			getColumnMetrics() {
				let e = this, t = e.options, n = e.xAxis, r = e.yAxis, i = n.options.reversedStacks, a = n.reversed && !i || !n.reversed && i, o = {}, s, c = 0;
				!1 === t.grouping ? c = 1 : e.chart.series.forEach(function(t) {
					let n, i = t.yAxis, a = t.options;
					t.type === e.type && t.reserveSpace() && r.len === i.len && r.pos === i.pos && (a.stacking && a.stacking !== "group" ? (o[s = t.stackKey] === void 0 && (o[s] = c++), n = o[s]) : !1 !== a.grouping && (n = c++), t.columnIndex = n);
				});
				let l = Math.min(Math.abs(n.transA) * (!n.brokenAxis?.hasBreaks && n.ordinal?.slope || t.pointRange || n.closestPointRange || n.tickInterval || 1), n.len), u = l * t.groupPadding, d = (l - 2 * u) / (c || 1), f = Math.min(t.maxPointWidth || n.len, q(t.pointWidth, d * (1 - 2 * t.pointPadding))), p = (e.columnIndex || 0) + +!!a;
				return e.columnMetrics = {
					width: f,
					offset: (d - f) / 2 + (u + p * d - l / 2) * (a ? -1 : 1),
					paddedWidth: d,
					columnCount: c
				}, e.columnMetrics;
			}
			crispCol(e, t, n, r) {
				let i = this.borderWidth, a = this.chart.inverted;
				return r = oe(t + r, i, a) - (t = oe(t, i, a)), this.options.crisp && (n = oe(e + n, i) - (e = oe(e, i))), {
					x: e,
					y: t,
					width: n,
					height: r
				};
			}
			adjustForMissingColumns(e, t, n, r) {
				if (!n.isNull && r.columnCount > 1) {
					let i = this.xAxis.series.filter((e) => e.visible).map((e) => e.index), a = 0, o = 0;
					K(this.xAxis.stacking?.stacks, (e) => {
						let t = typeof n.x == "number" ? e[n.x.toString()]?.points : void 0, r = t?.[this.index], s = {};
						if (t && U(r)) {
							let e = this.index, n = Object.keys(t).filter((e) => !e.match(",") && t[e] && t[e].length > 1).map(parseFloat).filter((e) => i.indexOf(e) !== -1).filter((t) => {
								let n = this.chart.series[t].options, r = n.stacking && n.stack;
								if (L(r)) {
									if (V(s[r])) return e === t && (e = s[r]), !1;
									s[r] = t;
								}
								return !0;
							}).sort((e, t) => t - e);
							a = n.indexOf(e), o = n.length;
						}
					}), a = this.xAxis.reversed ? o - 1 - a : a;
					let s = (o - 1) * r.paddedWidth + t;
					e = (n.plotX || 0) + s / 2 - t - a * r.paddedWidth;
				}
				return e;
			}
			translate() {
				let e = this, t = e.chart, n = e.options, r = e.dense = e.closestPointRange * e.xAxis.transA < 2, i = e.borderWidth = n.borderWidth ?? +!r, a = e.xAxis, o = e.yAxis, s = n.threshold, c = n.minPointLength ?? 5, l = e.getColumnMetrics(), u = l.width, d = e.pointXOffset = l.offset, f = e.dataMin, p = e.dataMax, m = e.translatedThreshold = o.getThreshold(s), h = e.barW = Math.max(u, 1 + 2 * i);
				n.pointPadding && n.crisp && (h = Math.ceil(h)), ir.prototype.translate.apply(e), e.points.concat(e.condemnedPoints).forEach(function(r) {
					let i = r.yBottom ?? m, g = 999 + Math.abs(i), _ = r.plotX || 0, v = P(r.plotY, -g, o.len + g), y, b = Math.min(v, i), x = Math.max(v, i) - b, S = u, C = _ + d, w = h;
					c && Math.abs(x) < c && (x = c, y = !o.reversed && !r.negative || o.reversed && r.negative, V(s) && V(p) && r.y === s && p <= s && (o.min || 0) < s && (f !== p || (o.max || 0) <= s) && (y = !y, r.negative = !r.negative), b = Math.abs(b - m) > c ? i - (y ? c : 0) : m - (y ? c : 0)), L(r.options.pointWidth) && (C -= Math.round(((S = w = Math.ceil(r.options.pointWidth)) - u) / 2)), n.centerInCategory && (C = e.adjustForMissingColumns(C, S, r, l)), r.barX = C, r.pointWidth = S, r.tooltipPos = t.inverted ? [
						P(o.len + o.pos - t.plotLeft - v, o.pos - t.plotLeft, o.len + o.pos - t.plotLeft),
						a.len + a.pos - t.plotTop - C - w / 2,
						x
					] : [
						a.left - t.plotLeft + C + w / 2,
						P(v + o.pos - t.plotTop, o.pos - t.plotTop, o.len + o.pos - t.plotTop),
						x
					], r.shapeType = e.pointClass.prototype.shapeType || "roundedRect", r.shapeArgs = e.crispCol(C, b, w, r.isNull ? 0 : x);
				}), B(this, "afterColumnTranslate");
			}
			drawGraph() {
				this.group[this.dense ? "addClass" : "removeClass"]("highcharts-dense-data");
			}
			pointAttribs(e, t) {
				let n = this.options, r = this.pointAttrToOptions || {}, i = r.stroke || "borderColor", a = r["stroke-width"] || "borderWidth", o, s, c, l = e && e.color || this.color, u = e && e[i] || n[i] || l, d = e && e.options.dashStyle || n.dashStyle, f = e?.[a] ?? n[a] ?? this[a] ?? 1, p = e?.isNull && n.nullInteraction ? 0 : e?.opacity ?? n.opacity ?? 1;
				e && this.zones.length && (s = e.getZone(), l = e.options.color || s && (s.color || e.nonZonedColor) || this.color, s && (u = s.borderColor || u, d = s.dashStyle || d, f = s.borderWidth || f)), t && e && (c = (o = G(n.states[t], e.options.states?.[t] || {})).brightness, l = o.color || c !== void 0 && ni(l).brighten(o.brightness).get() || l, u = o[i] || u, f = o[a] || f, d = o.dashStyle || d, p = q(o.opacity, p));
				let m = {
					fill: l,
					stroke: u,
					"stroke-width": f,
					opacity: e?.condemned ? 0 : p
				};
				return d && (m.dashstyle = d), m;
			}
			drawPoints(e) {
				let t;
				e ||= this.points.concat(this.condemnedPoints);
				let n = this, r = this.chart, i = n.options, a = i.nullInteraction, { styledMode: o, renderer: s } = r, c = i.animationLimit || 250;
				e.forEach(function(e) {
					let l = e.plotY, u = e.graphic, d = !!u, f = u && r.pointCount < c ? "animate" : "attr";
					if (V(l) && (e.y !== null || a)) {
						if (t = e.shapeArgs, u && e.hasNewShapeType() && (u = u.destroy()), !u) {
							let i = t;
							e.origin && r.pointCount < c && (i = G(t, e.getOrigin(e.origin, t)), o || (i.opacity = 0), d = !0, f = "animate"), e.graphic = u = s[e.shapeType](i).add(e.group || n.group);
						}
						d && u[f](G(t)), o || u[f](n.pointAttribs(e, e.selected && "select")).shadow(!1 !== e.allowShadow && i.shadow), u.addClass(e.getClassName(), !0).attr({ visibility: e.visible ? "inherit" : "hidden" });
					} else u && (e.graphic = u.destroy());
				});
			}
			drawTracker(e = this.points) {
				let t, n = this, r = n.chart, i = r.pointer, a = function(e) {
					i?.normalize(e);
					let t = i?.getPointFromEvent(e);
					i && t && n.options.enableMouseTracking && (r.isInsidePlot(e.chartX - r.plotLeft, e.chartY - r.plotTop, { visiblePlotOnly: !0 }) || n.allowOutsidePlotInteraction && i?.inClass(e.target, "highcharts-point") || i?.inClass(e.target, "highcharts-data-label")) && (i.isDirectTouch = !0, t.onMouseOver(e));
				};
				e.forEach(function(e) {
					t = U(e.dataLabels) ? e.dataLabels : e.dataLabel ? [e.dataLabel] : [], e.graphic && (e.graphic.element.point = e), t.forEach(function(t) {
						(t.div || t.element).point = e;
					});
				}), n._hasTracking ||= (n.trackerGroups?.reduce((e, t) => (t === "dataLabelsGroup" ? e.push(...n.dataLabelsGroups || []) : e.push(n[t]), e), []).forEach((e) => {
					e && (e.addClass("highcharts-tracker").on("mouseover", a).on("mouseout", function(e) {
						i?.onTrackerMouseOut(e);
					}).on("touchstart", a), !r.styledMode && n.options.cursor && e.css({ cursor: n.options.cursor }));
				}), !0), B(this, "afterDrawTracker");
			}
			remove() {
				let e = this, t = e.chart;
				t.hasRendered && t.series.forEach(function(t) {
					t.type === e.type && (t.isDirty = !0);
				}), ir.prototype.remove.apply(e, arguments);
			}
		}
		ii.defaultOptions = G(ir.defaultOptions, {
			borderRadius: 3,
			centerInCategory: !1,
			groupPadding: .2,
			marker: null,
			pointPadding: .1,
			minPointLength: 0,
			cropThreshold: 50,
			pointRange: null,
			states: {
				hover: {
					halo: !1,
					brightness: .2
				},
				select: {
					color: "var(--highcharts-neutral-color-20)",
					borderColor: "var(--highcharts-neutral-color-100)"
				}
			},
			dataLabels: {
				align: void 0,
				verticalAlign: void 0,
				y: void 0
			},
			startFromThreshold: !0,
			stickyTracking: !1,
			tooltip: { distance: 6 },
			threshold: 0,
			borderColor: "var(--highcharts-background-color)"
		}), z(ii.prototype, {
			directTouch: !0,
			getSymbol: ri,
			negStacks: !0,
			trackerGroups: ["group", "dataLabelsGroup"]
		}), $.registerSeriesType("column", ii);
		let ai = ii, { getDeferredAnimation: oi } = $e, { format: si } = ft;
		(function(e) {
			function t() {
				return c(this).some((e) => e?.enabled);
			}
			function n(e, t, n, r, i) {
				let { chart: a } = this, o = this.isCartesian && a.inverted, { condemned: s, origin: c, plotX: l, plotY: u } = e, { crop: d = !0, distance: f, overflow: p = "justify", rotation: m = 0 } = n, h = de(n.align), g = de(n.verticalAlign), _ = e.pos(), v = L(l) && L(u) && a.isInsidePlot(l, Math.round(u), {
					inverted: o,
					paneCoordinates: !0,
					series: this
				}), y = this.visible && e.visible && L(l) && (this.forceDL || s || v || q(n.inside, !!this.options.stacking) && r && a.isInsidePlot(l, o ? r.x + 1 : r.y + r.height - 1, {
					inverted: o,
					paneCoordinates: !0,
					series: this
				}));
				if (_) {
					let l = t.getBBox(), u = t.getBBox(void 0, 0);
					r = z({
						x: _[0],
						y: Math.round(_[1]),
						width: 0,
						height: 0
					}, r || {}), n.alignTo === "plotEdges" && this.isCartesian && (r[o ? "x" : "y"] = 0, r[o ? "width" : "height"] = this.yAxis?.len || 0), z(n, {
						width: l.width,
						height: l.height
					});
					let v = 0, b = 0;
					V(f) && !n.inside && (v = f * (1 - 2 * h), b = f * (1 - 2 * g)), t.align(G(n, {
						x: (n.x || 0) + v,
						y: (n.y || 0) + b,
						width: u.width,
						height: u.height
					}), !1, r, !1), t.distX = v, t.distY = b, t.alignAttr.x += h * (u.width - l.width), t.alignAttr.y += g * (u.height - l.height);
					let x = t.alignAttr.x + (l.width - u.width) / 2, S = t.alignAttr.y + (l.height - u.height) / 2;
					if (c) {
						let n = e.pos(!1, c.x, c.y);
						if (n) {
							let r = [n[0] - _[0], n[1] - _[1]];
							(this.is("column") || e.plotHigh) && (r[+!o] = 0), t.attr({
								x: x + r[0],
								y: S + r[1],
								opacity: .01
							}), t.placed = !0, i = !1;
						}
					}
					let C = {
						"text-align": t.alignAttr["text-align"] || "center",
						x,
						y: S,
						rotationOriginX: (t.width || 0) / 2,
						rotationOriginY: (t.height || 0) / 2
					};
					if ((s || !y) && (C.opacity = 0), t[t.placed ? "animate" : "attr"](C), m === 0 && !s && p === "justify" && y && r.height >= 0) this.justifyDataLabel(t, n, t.alignAttr, l, r, i);
					else if (d && !s) {
						let { x: e, y: n } = t.alignAttr;
						y = a.isInsidePlot(e, n, {
							paneCoordinates: !0,
							series: this
						}) && a.isInsidePlot(e + l.width - 1, n + l.height - 1, {
							paneCoordinates: !0,
							series: this
						});
					}
					n.shape && !m && t[i ? "attr" : "animate"]({
						anchorX: _[0],
						anchorY: _[1]
					});
				}
				t[i ? "attr" : "animate"]({ visibility: y ? "inherit" : "hidden" }), t.placed = y;
			}
			function r(e, t) {
				B(this, "initDataLabelsGroup", {
					index: e,
					zIndex: t?.zIndex
				}), this.dataLabelsGroup = this.dataLabelsGroups?.[e];
				let n = this.plotGroup("dataLabelsGroup", "data-labels", this.hasRendered ? "inherit" : "hidden", t?.zIndex ?? 6, this.dataLabelsParentGroups?.[e]);
				return this.dataLabelsGroups ||= [], this.dataLabelsGroups[e] = n, this.dataLabelsGroup = this.dataLabelsGroups[0], n;
			}
			function i(e, t, n) {
				let r = !!this.hasRendered, i = this.initDataLabelsGroup(e, n).attr({ opacity: +r });
				return !r && i && (this.visible && i.show(), this.options.animation ? i.animate({ opacity: 1 }, t) : i.attr({ opacity: 1 })), i;
			}
			function a(e) {
				e ||= this.points;
				let t = this, n = t.chart, r = t.options, i = n.renderer, { backgroundColor: a, plotBackgroundColor: o } = n.options.chart, l = i.getContrast(H(o) && o || H(a) && a || "var(--highcharts-background-color)"), u = [], d = c(t), { animation: f, defer: p } = d[0], m = p ? oi(n, f, t) : {
					defer: 0,
					duration: 0
				};
				B(this, "drawDataLabels"), t.hasDataLabels?.() && e.concat(t.condemnedPoints).forEach((e) => {
					let a = e.dataLabels || [], o = e.color || t.color;
					Oe(s(d, e.dlOptions || e.options?.dataLabels)).forEach((s, c) => {
						let d = s.enabled && (e.visible || e.dataLabelOnHidden) && (!e.isNull || e.dataLabelOnNull) && function(e, t) {
							let n = t.filter;
							if (n) {
								let t = n.operator, r = e[n.property], i = n.value;
								return t === ">" && r > i || t === "<" && r < i || t === ">=" && r >= i || t === "<=" && r <= i || t === "==" && r == i || t === "===" && r === i || t === "!=" && r != i || t === "!==" && r !== i || !1;
							}
							return !0;
						}(e, s), { backgroundColor: f, borderColor: p, distance: h, style: g = {} } = s, _ = Oe(s.padding || 0), v, y, b, x = {}, S = a[c], C = !S, w;
						if (d && (y = L(v = q(s[e.formatPrefix + "Format"], s.format)) ? si(v, e, n) : (s[e.formatPrefix + "Formatter"] || s.formatter).call(e, s, e), b = s.rotation, !n.styledMode && (g.color = q(s.color, g.color, H(t.color) ? t.color : void 0, "var(--highcharts-neutral-color-100)"), g.color === "contrast" ? (f !== "none" && (w = f), e.contrastColor = i.getContrast(w !== "auto" && w !== "contrast" && H(w) && w || (H(o) ? o : "")), g.color = w && w !== "contrast" || s.inside || 0 > J(h || 0) || r.stacking ? e.contrastColor : l) : delete e.contrastColor, r.cursor && (g.cursor = r.cursor)), x = {
							r: s.borderRadius ?? 3,
							rotation: b,
							padding: _[0],
							paddingLeft: _[3 % _.length],
							paddingRight: _[1 % _.length],
							zIndex: 1
						}, n.styledMode || (x.fill = f === "auto" ? e.color : f, x.stroke = p === "auto" ? e.color : p, x["stroke-width"] = s.borderWidth), K(x, (e, t) => {
							e === void 0 && delete x[t];
						})), !S || d && L(y) && !!(S.div || S.text?.foreignObject) == !!s.useHTML && (S.rotation && s.rotation || S.rotation === s.rotation) || (S = void 0, C = !0), d && L(y) && y !== "" && (S ? x.text = y : (S = i.label(y, 0, 0, s.shape, void 0, void 0, s.useHTML, void 0, "data-label")).addClass(" highcharts-data-label-color-" + e.colorIndex + " " + (s.className || "") + (s.useHTML ? " highcharts-tracker" : "")), S)) {
							S.options = s, S.attr(x), n.styledMode ? g.width && S.css({
								width: g.width,
								textOverflow: g.textOverflow,
								whiteSpace: g.whiteSpace
							}) : S.css(g).shadow(s.shadow), B(S, "beforeAddingDataLabel", {
								labelOptions: s,
								point: e
							});
							let r = u[c] = u[c] || this.initDataLabels(c, m, s);
							S.added || S.add(r), t.alignDataLabel(e, S, s, void 0, C), S.isActive = !0, a[c] && a[c] !== S && a[c].destroy(), a[c] = S;
						}
					});
					let c = a.length;
					for (; c--;) a[c]?.isActive ? a[c].isActive = !1 : (a[c]?.destroy(), a.splice(c, 1));
					e.dataLabel = a[0], e.dataLabels = a;
				}), B(this, "afterDrawDataLabels");
			}
			function o(e, t, n, r, i, a) {
				let o = this.chart, { align: s, verticalAlign: c } = t, { distX: l = 0, distY: u = 0 } = e, d = e.box ? 0 : e.padding || 0, f = o.inverted ? this.yAxis : this.xAxis, p = f ? f.left - o.plotLeft : 0, m = o.inverted ? this.xAxis : this.yAxis, h = m ? m.top - o.plotTop : 0, { x: g = 0, y: _ = 0 } = t, v, y, b;
				return (v = (n.x || 0) - l + d + p) < 0 && (s === "right" && g >= 0 ? (t.align = "left", t.inside = !0, g -= l) : g -= v, y = !0), (v = (n.x || 0) + r.width - l - d + p) > o.plotWidth && (s === "left" && g <= 0 ? (t.align = "right", t.inside = !0, g -= l) : g += o.plotWidth - v, y = !0), (v = (n.y || 0) - u + d + h) < 0 && (c === "bottom" && _ >= 0 ? (t.verticalAlign = "top", t.inside = !0, _ -= u) : _ -= v, b = !0), (v = (n.y || 0) + r.height - u - d + h) > o.plotHeight && (c === "top" && _ <= 0 ? (t.verticalAlign = "bottom", t.inside = !0, _ -= u) : _ += o.plotHeight - v, b = !0), (y || b) && (t.x = y ? g : g + l, t.y = b ? _ : _ + u, e.placed = !a, e.align(t, void 0, i)), y || b;
			}
			function s(e, t) {
				let n = [], r;
				if (U(e) && !U(t)) n = e.map(function(e) {
					return G(e, t);
				});
				else if (U(t) && !U(e)) n = t.map(function(t) {
					return G(e, t);
				});
				else if (U(e) || U(t)) {
					if (U(e) && U(t)) for (r = Math.max(e.length, t.length); r--;) n[r] = G(e[r], t[r]);
				} else n = G(e, t);
				return n;
			}
			function c(e) {
				let t = e.chart.options.plotOptions;
				return Oe(s(s(t?.series?.dataLabels, t?.[e.type]?.dataLabels), e.options.dataLabels));
			}
			e.compose = function(e) {
				let c = e.prototype;
				c.initDataLabels || (c.initDataLabels = i, c.initDataLabelsGroup = r, c.alignDataLabel = n, c.drawDataLabels = a, c.justifyDataLabel = o, c.mergeArrays = s, c.hasDataLabels = t);
			};
		})(C ||= {});
		let ci = C, { composed: li } = j, { series: ui } = $;
		function di(e, t, n, r, i) {
			let { chart: a, options: o } = this, s = a.inverted, c = this.xAxis?.len || a.plotSizeX || 0, l = this.yAxis?.len || a.plotSizeY || 0, u = e.dlBox || e.shapeArgs, d = e.below ?? (e.plotY || 0) > (this.translatedThreshold ?? l), f = n.inside ?? !!o.stacking;
			if (u) {
				if (r = G(u), n.overflow !== "allow" || !1 !== n.crop || !1 !== o.clip) {
					r.y < 0 && (r.height += r.y, r.y = 0);
					let e = r.y + r.height - l;
					e > 0 && e < r.height - 1 && (r.height -= e);
				}
				s && (r = {
					x: l - r.y - r.height,
					y: c - r.x - r.width,
					width: r.height,
					height: r.width
				}), f || (s ? (r.x += d ? 0 : r.width, r.width = 0) : (r.y += d ? r.height : 0, r.height = 0));
			}
			n.align ??= !s || f ? "center" : d ? "right" : "left", n.verticalAlign ??= s || f ? "middle" : d ? "top" : "bottom", ui.prototype.alignDataLabel.call(this, e, t, n, r, i), n.inside && e.contrastColor && t.css({ color: e.contrastColor });
		}
		(w ||= {}).compose = function(e) {
			ci.compose(ui), we(li, "ColumnDataLabel") && (e.prototype.alignDataLabel = di);
		};
		let fi = w;
		class pi extends ai {}
		pi.defaultOptions = G(ai.defaultOptions, {}), z(pi.prototype, { inverted: !0 }), $.registerSeriesType("bar", pi);
		let { column: mi, line: hi } = $.seriesTypes;
		class gi extends hi {
			applyJitter() {
				let e = this, t = this.options.jitter, n = this.points.length;
				t && this.points.forEach(function(r, i) {
					["x", "y"].forEach(function(a, o) {
						if (t[a] && !r.isNull) {
							let s = `plot${a.toUpperCase()}`, c = e[`${a}Axis`], l = t[a] * c.transA;
							if (c && !c.logarithmic) {
								let e, t = Math.max(0, (r[s] || 0) - l);
								r[s] = t + (Math.min(c.len, (r[s] || 0) + l) - t) * ((e = 1e4 * Math.sin(i + o * n)) - Math.floor(e)), a === "x" && (r.clientX = r.plotX);
							}
						}
					});
				});
			}
			drawGraph() {
				this.options.lineWidth ? super.drawGraph() : this.graph &&= this.graph.destroy();
			}
		}
		gi.defaultOptions = G(hi.defaultOptions, {
			lineWidth: 0,
			findNearestPointBy: "xy",
			jitter: {
				x: 0,
				y: 0
			},
			marker: { enabled: !0 },
			tooltip: {
				headerFormat: "<span style=\"color:{point.color}\">●</span> <span style=\"font-size: 0.8em\"> {series.name}</span><br/>",
				pointFormat: "x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>"
			}
		}), z(gi.prototype, {
			allowOutsidePlotInteraction: !0,
			drawTracker: mi.prototype.drawTracker,
			sorted: !1,
			requireSorting: !1,
			noSharedTooltip: !0,
			trackerGroups: [
				"group",
				"markerGroup",
				"dataLabelsGroup"
			]
		}), M(gi, "afterTranslate", function() {
			this.applyJitter();
		}), $.registerSeriesType("scatter", gi);
		let { deg2rad: _i } = j;
		(u = T ||= {}).getCenter = function() {
			let e = this.options, t = this.chart, n = 2 * (e.slicedOffset || 0), r = t.plotWidth - 2 * n, i = t.plotHeight - 2 * n, a = e.center, o = Math.min(r, i), s = e.thickness, c, l = e.size, u = e.innerSize || 0, d, f;
			typeof l == "string" && (l = parseFloat(l)), typeof u == "string" && (u = parseFloat(u));
			let p = [
				q(a?.[0], "50%"),
				q(a?.[1], "50%"),
				q(l && l < 0 ? void 0 : e.size, "100%"),
				q(u && u < 0 ? void 0 : e.innerSize || 0, "0%")
			];
			for (d = 0; d < 4; ++d) f = p[d], c = d < 2 || d === 2 && /%$/.test(f), p[d] = Te(f, [
				r,
				i,
				o,
				p[2]
			][d]) + (c ? n : 0);
			return p[3] > p[2] && (p[3] = p[2]), V(s) && 2 * s < p[2] && s > 0 && (p[3] = p[2] - 2 * s), B(this, "afterGetCenter", { positions: p }), p;
		}, u.getStartAndEndRadians = function(e, t) {
			let n = V(e) ? e : 0, r = V(t) && t > n && t - n < 360 ? t : n + 360;
			return {
				start: _i * (n + -90),
				end: _i * (r + -90)
			};
		};
		let vi = T, { setAnimation: yi } = $e;
		class bi extends Nn {
			getConnectorPath(e) {
				let t = e.dataLabelPosition, n = e.options || {}, r = n.connectorShape, i = this.connectorShapes[r] || r;
				return t && i.call(this, {
					...t.computed,
					alignment: t.alignment
				}, t.connectorPosition, n) || [];
			}
			getTranslate() {
				return this.sliced && this.slicedTranslation || {
					translateX: 0,
					translateY: 0
				};
			}
			haloPath(e) {
				let t = this.shapeArgs;
				return this.sliced || !this.visible ? [] : this.series.chart.renderer.symbols.arc(t.x, t.y, t.r + e, t.r + e, {
					innerR: t.r - 1,
					start: t.start,
					end: t.end,
					borderRadius: t.borderRadius
				});
			}
			constructor(e, t, n) {
				super(e, t, n), this.half = 0, this.name ??= e.chart.options.lang.pieSliceName;
				let r = (e) => {
					this.slice(e.type === "select");
				};
				M(this, "select", r), M(this, "unselect", r);
			}
			isValid() {
				return V(this.y) && this.y >= 0;
			}
			setVisible(e, t = !0) {
				e !== this.visible && this.update({ visible: e ?? !this.visible }, t, void 0, !1);
			}
			slice(e, t, n) {
				let r = this.series;
				yi(n, r.chart), t = q(t, !0), this.sliced = this.options.sliced = e ?? !this.sliced, r.options.data && (r.options.data[r.data.indexOf(this)] = this.options), this.graphic?.animate(this.getTranslate());
			}
		}
		z(bi.prototype, { connectorShapes: {
			fixedOffset: function(e, t, n) {
				let r = t.breakAt, i = t.touchingSliceAt, a = n.softConnector ? [
					"C",
					e.x + (e.alignment === "left" ? -5 : 5),
					e.y,
					2 * r.x - i.x,
					2 * r.y - i.y,
					r.x,
					r.y
				] : [
					"L",
					r.x,
					r.y
				];
				return [
					[
						"M",
						e.x,
						e.y
					],
					a,
					[
						"L",
						i.x,
						i.y
					]
				];
			},
			straight: function(e, t) {
				let n = t.touchingSliceAt;
				return [[
					"M",
					e.x,
					e.y
				], [
					"L",
					n.x,
					n.y
				]];
			},
			crookedLine: function(e, t, n) {
				let { angle: r = this.angle || 0, breakAt: i, touchingSliceAt: a } = t, { series: o } = this, [s, c, l] = o.center, u = l / 2, { plotLeft: d, plotWidth: f } = o.chart, p = e.alignment === "left", { x: m, y: h } = e, g = i.x;
				if (n.crookDistance) {
					let e = Te(n.crookDistance, 1);
					g = p ? s + u + (f + d - s - u) * (1 - e) : d + (s - u) * e;
				} else g = s + (c - h) * Math.tan(r - Math.PI / 2);
				let _ = [[
					"M",
					m,
					h
				]];
				return (p ? g <= m && g >= i.x : g >= m && g <= i.x) && _.push([
					"L",
					g,
					h
				]), _.push([
					"L",
					i.x,
					i.y
				], [
					"L",
					a.x,
					a.y
				]), _;
			}
		} });
		let { getStartAndEndRadians: xi } = vi, { noop: Si } = j;
		class Ci extends ir {
			animate(e) {
				let t = this, n = t.points, r = t.startAngleRad;
				e || n.forEach(function(e) {
					let n = e.graphic, i = e.shapeArgs;
					n && i && (n.attr({
						r: q(e.startR, t.center && t.center[3] / 2),
						start: r,
						end: r
					}), n.animate({
						r: i.r,
						start: i.start,
						end: i.end
					}, t.options.animation));
				});
			}
			drawEmpty() {
				let e, t, n = this.startAngleRad, r = this.endAngleRad, i = this.options;
				this.total === 0 && this.center ? (e = this.center[0], t = this.center[1], this.graph ||= this.chart.renderer.arc(e, t, this.center[1] / 2, 0, n, r).addClass("highcharts-empty-series").add(this.group), this.graph.attr({ d: Nt.arc(e, t, this.center[2] / 2, 0, {
					start: n,
					end: r,
					innerR: this.center[3] / 2
				}) }), this.chart.styledMode || this.graph.attr({
					"stroke-width": i.borderWidth,
					fill: i.fillColor || "none",
					stroke: i.color || "var(--highcharts-neutral-color-20)"
				})) : this.graph &&= this.graph.destroy();
			}
			drawPoints() {
				let e = this.chart.renderer;
				this.points.forEach(function(t) {
					t.graphic && t.hasNewShapeType() && (t.graphic = t.graphic.destroy()), t.graphic || (t.graphic = e[t.shapeType](t.shapeArgs).add(t.series.group), t.delayedRendering = !0);
				});
			}
			generatePoints() {
				super.generatePoints(), this.updateTotals();
			}
			getXPos(e, t, n, r) {
				let i = this.center, a = this.radii ? this.radii[n.index] || 0 : i[2] / 2, o = r.dataLabelPosition?.distance || 0, s = Math.asin(P((e - i[1]) / (a + o), -1, 1));
				return i[0] + Math.cos(s) * (a + o) * (t ? -1 : 1) + (o > 0 ? t ? -5 : 5 : 0);
			}
			hasData() {
				return this.points.some((e) => e.visible);
			}
			redrawPoints() {
				let e, t, n, r, i = this, a = i.chart;
				this.drawEmpty(), i.group && !a.styledMode && i.group.shadow(i.options.shadow), i.points.forEach(function(o) {
					let s = {};
					t = o.graphic, !o.isNull && t ? (r = o.shapeArgs, e = o.getTranslate(), a.styledMode || (n = i.pointAttribs(o, o.selected && "select")), o.delayedRendering ? (t.setRadialReference(i.center).attr(r).attr(e), a.styledMode || t.attr(n).attr({ "stroke-linejoin": "round" }), o.delayedRendering = !1) : (t.setRadialReference(i.center), a.styledMode || G(!0, s, n), G(!0, s, r, e), t.animate(s)), t.attr({ visibility: o.visible ? "inherit" : "hidden" }), t.addClass(o.getClassName(), !0)) : t && (o.graphic = t.destroy());
				});
			}
			sortByAngle(e, t) {
				e.sort(function(e, n) {
					return e.angle !== void 0 && (n.angle - e.angle) * t;
				});
			}
			translate(e) {
				B(this, "translate"), this.generatePoints();
				let t = this.options, n = t.slicedOffset, r = xi(t.startAngle, t.endAngle), i = this.startAngleRad = r.start, a = (this.endAngleRad = r.end) - i, o = this.points, s = t.ignoreHiddenPoint, c = o.length, l, u, d, f, p, m, h, g = 0;
				for (e || (this.center = e = this.getCenter()), m = 0; m < c; m++) {
					h = o[m], l = i + g * a, h.isValid() && (!s || h.visible) && (g += h.percentage / 100), u = i + g * a;
					let t = {
						x: e[0],
						y: e[1],
						r: e[2] / 2,
						innerR: e[3] / 2,
						start: l,
						end: u
					};
					h.shapeType = "arc", h.shapeArgs = t, (d = (u + l) / 2) > 1.5 * Math.PI ? d -= 2 * Math.PI : d < -Math.PI / 2 && (d += 2 * Math.PI), h.slicedTranslation = {
						translateX: Math.round(Math.cos(d) * n),
						translateY: Math.round(Math.sin(d) * n)
					}, f = Math.cos(d) * e[2] / 2, p = Math.sin(d) * e[2] / 2, h.tooltipPos = [e[0] + .7 * f, e[1] + .7 * p], h.half = +(d < -Math.PI / 2 || d > Math.PI / 2), h.angle = d;
				}
				B(this, "afterTranslate");
			}
			updateTotals() {
				let e = this.points, t = e.length, n = this.options.ignoreHiddenPoint, r, i, a = 0;
				for (r = 0; r < t; r++) (i = e[r]).isValid() && (!n || i.visible) && (a += i.y);
				for (r = 0, this.total = a; r < t; r++) (i = e[r]).percentage = a > 0 && (i.visible || !n) ? i.y / a * 100 : 0, i.total = a;
			}
		}
		Ci.defaultOptions = G(ir.defaultOptions, {
			borderRadius: 3,
			center: [null, null],
			clip: !1,
			colorByPoint: !0,
			dataLabels: {
				connectorPadding: 5,
				connectorShape: "crookedLine",
				crookDistance: void 0,
				distance: 30,
				enabled: !0,
				formatter: function() {
					return this.isNull ? void 0 : this.name;
				},
				softConnector: !0,
				x: 0
			},
			fillColor: void 0,
			ignoreHiddenPoint: !0,
			inactiveOtherPoints: !0,
			legendType: "point",
			marker: null,
			size: null,
			showInLegend: !1,
			slicedOffset: 10,
			stickyTracking: !1,
			tooltip: { followPointer: !0 },
			borderColor: "var(--highcharts-background-color)",
			borderWidth: 1,
			lineWidth: void 0,
			states: { hover: { brightness: .1 } }
		}), z(Ci.prototype, {
			axisTypes: [],
			directTouch: !0,
			drawGraph: void 0,
			drawTracker: ai.prototype.drawTracker,
			getCenter: vi.getCenter,
			getSymbol: Si,
			invertible: !1,
			isCartesian: !1,
			noSharedTooltip: !0,
			pointAttribs: ai.prototype.pointAttribs,
			pointClass: bi,
			requireSorting: !1,
			searchPoint: Si,
			trackerGroups: ["group", "dataLabelsGroup"]
		}), $.registerSeriesType("pie", Ci);
		let { composed: wi, noop: Ti } = j, { distribute: Ei } = pt, { series: Di } = $;
		(function(e) {
			let t = {
				radialDistributionY: function(e, t) {
					return (t.dataLabelPosition?.top || 0) + e.distributeBox.pos;
				},
				radialDistributionX: function(e, t, n, r, i) {
					let a = i.dataLabelPosition;
					return e.getXPos(n < (a?.top || 0) + 2 || n > (a?.bottom || 0) - 2 ? r : n, t.half, t, i);
				},
				justify: function(e, t, n, r) {
					return r[0] + (e.half ? -1 : 1) * (n + (t.dataLabelPosition?.distance || 0));
				},
				alignToPlotEdges: function(e, t, n, r) {
					let i = e.getBBox().width;
					return t ? i + r : n - i - r;
				},
				alignToConnectors: function(e, t, n, r) {
					let i = 0, a;
					return e.forEach(function(e) {
						(a = e.dataLabel.getBBox().width) > i && (i = a);
					}), t ? i + r : n - i - r;
				}
			};
			function n(e, t) {
				let n = Math.PI / 2, { start: r = 0, end: i = 0 } = e.shapeArgs || {}, a = e.angle || 0;
				t > 0 && r < n && i > n && a > n / 2 && a < 1.5 * n && (a = a <= n ? Math.max(n / 2, (r + n) / 2) : Math.min(1.5 * n, (n + i) / 2));
				let { center: o, options: s } = this, c = o[2] / 2, l = Math.cos(a), u = Math.sin(a), d = o[0] + l * c, f = o[1] + u * c, p = Math.min((s.slicedOffset || 0) + (s.borderWidth || 0), t / 5);
				return {
					natural: {
						x: d + l * t,
						y: f + u * t
					},
					computed: {},
					alignment: t < 0 ? "center" : e.half ? "right" : "left",
					connectorPosition: {
						angle: a,
						breakAt: {
							x: d + l * p,
							y: f + u * p
						},
						touchingSliceAt: {
							x: d,
							y: f
						}
					},
					distance: t
				};
			}
			function r() {
				let e = this, t = e.points, n = e.chart, r = n.plotWidth, i = n.plotHeight, a = n.plotLeft, o = Math.round(n.chartWidth / 3), s = e.center, c = s[2] / 2, l = s[1], u = [[], []], d = [
					0,
					0,
					0,
					0
				], f = e.dataLabelPositioners, p, m, h, g = 0;
				e.visible && e.hasDataLabels?.() && (t.forEach((e) => {
					(e.dataLabels || []).forEach((e) => {
						e.shortened &&= (e.attr({ width: "auto" }).css({
							width: "auto",
							textOverflow: "clip"
						}), !1);
					});
				}), Di.prototype.drawDataLabels.apply(e), t.forEach((e) => {
					(e.dataLabels || []).forEach((t, n) => {
						let r = s[2] / 2, i = t.options, a = Te(i?.distance || 0, r);
						n === 0 && u[e.half].push(e), !L(i?.style?.width) && t.getBBox().width > o && (t.css({ width: Math.round(.7 * o) + "px" }), t.shortened = !0), t.dataLabelPosition = this.getDataLabelPosition(e, a), g = Math.max(g, a);
					});
				}), u.forEach((t, o) => {
					let u = t.length, p = [], _, v, y = 0, b;
					u && (e.sortByAngle(t, o - .5), g > 0 && (_ = Math.max(0, l - c - g), v = Math.min(l + c + g, n.plotHeight), t.forEach((e) => {
						(e.dataLabels || []).forEach((t) => {
							let r = t.dataLabelPosition;
							r && r.distance > 0 && (r.top = Math.max(0, l - c - r.distance), r.bottom = Math.min(l + c + r.distance, n.plotHeight), y = t.getBBox().height || 21, t.lineHeight = n.renderer.fontMetrics(t.text || t).h + 2 * t.padding, e.distributeBox = {
								target: (t.dataLabelPosition?.natural.y || 0) - r.top + t.lineHeight / 2,
								size: y,
								rank: e.y
							}, p.push(e.distributeBox));
						});
					}), Ei(p, b = v + y - _, b / 5)), t.forEach((n) => {
						(n.dataLabels || []).forEach((l) => {
							let u = l.options || {}, g = n.distributeBox, _ = l.dataLabelPosition, v = _?.natural.y || 0, y = u.connectorPadding || 0, b = l.lineHeight || 21, x = (b - l.getBBox().height) / 2, S = 0, C = v, w = "inherit";
							if (_) {
								if (p && L(g) && _.distance > 0 && (g.pos === void 0 ? w = "hidden" : (h = g.size, C = f.radialDistributionY(n, l))), u.justify) S = f.justify(n, l, c, s);
								else switch (u.alignTo) {
									case "connectors":
										S = f.alignToConnectors(t, o, r, a);
										break;
									case "plotEdges":
										S = f.alignToPlotEdges(l, o, r, a);
										break;
									default: S = f.radialDistributionX(e, n, C - x, v, l);
								}
								if (_.attribs = {
									visibility: w,
									align: _.alignment
								}, _.posAttribs = {
									x: S + (u.x || 0) + ({
										left: y,
										right: -y
									}[_.alignment] || 0),
									y: C + (u.y || 0) - b / 2
								}, _.computed.x = S, _.computed.y = C - x, q(u.crop, !0)) {
									let e;
									S - (m = l.getBBox().width) < y && o === 1 ? (e = Math.round(m - S + y), d[3] = Math.max(e, d[3])) : S + m > r - y && o === 0 && (e = Math.round(S + m - r + y), d[1] = Math.max(e, d[1])), C - h / 2 < 0 ? d[0] = Math.max(Math.round(-C + h / 2), d[0]) : C + h / 2 > i && (d[2] = Math.max(Math.round(C + h / 2 - i), d[2])), _.sideOverflow = e;
								}
							}
						});
					}));
				}), (N(d) === 0 || this.verifyDataLabelOverflow(d)) && (this.placeDataLabels(), this.points.forEach((t) => {
					t.dataLabels?.forEach((r, i) => {
						let { connectorColor: a, connectorWidth: o = 1 } = r.options || {}, s = r.dataLabelPosition;
						if (V(o)) {
							let c;
							p = r.connector, s && s.distance > 0 ? (c = !p, p || (r.connector = p = n.renderer.path().addClass("highcharts-data-label-connector  highcharts-color-" + t.colorIndex + (t.className ? " " + t.className : "")).add(e.dataLabelsGroups?.[i])), n.styledMode || p.attr({
								"stroke-width": o,
								stroke: a || t.color || "var(--highcharts-neutral-color-60)"
							}), p[c ? "attr" : "animate"]({ d: t.getConnectorPath(r) }), p.attr({ visibility: s.attribs?.visibility })) : p && (r.connector = p.destroy());
						}
					});
				})));
			}
			function i() {
				this.points.forEach((e) => {
					(e.dataLabels || []).forEach((e) => {
						let t = e.dataLabelPosition;
						t ? (t.sideOverflow && (e.css({
							width: Math.max(e.getBBox().width - t.sideOverflow, 0) + "px",
							textOverflow: e.options?.style?.textOverflow || "ellipsis"
						}), e.shortened = !0), e.attr(t.attribs), e[e.moved ? "animate" : "attr"](t.posAttribs), e.moved = !0) : e && e.attr({ y: -9999 });
					}), delete e.distributeBox;
				}, this);
			}
			function a(e) {
				let t = this.center, n = this.options, r = n.center, i = n.minSize || 80, a = i, o = n.size !== null;
				return !o && (r[0] === null ? (a = Math.max(t[2] - e[1] - e[3], i), t[0] += (e[3] - e[1]) / 2) : a = Math.max(t[2] - Math.max(e[1], e[3]), i), r[1] === null ? (a = P(a, i, t[2] - e[0] - e[2]), t[1] += (e[0] - e[2]) / 2) : a = P(a, i, t[2] - Math.max(e[0], e[2])), a < t[2] ? (t[2] = a, t[3] = Math.min(n.thickness ? Math.max(0, a - 2 * n.thickness) : Math.max(0, Te(n.innerSize || 0, a)), a), this.translate(t), this.drawDataLabels && this.drawDataLabels()) : o = !0), o;
			}
			e.compose = function(e) {
				if (ci.compose(Di), we(wi, "PieDataLabel")) {
					let o = e.prototype;
					o.dataLabelPositioners = t, o.alignDataLabel = Ti, o.drawDataLabels = r, o.getDataLabelPosition = n, o.placeDataLabels = i, o.verifyDataLabelOverflow = a;
				}
			};
		})(E ||= {});
		let Oi = E;
		(d = D ||= {}).getCenterOfPoints = function(e) {
			let t = e.reduce((e, t) => (e.x += t.x, e.y += t.y, e), {
				x: 0,
				y: 0
			});
			return {
				x: t.x / e.length,
				y: t.y / e.length
			};
		}, d.getDistanceBetweenPoints = function(e, t) {
			return Math.sqrt((t.x - e.x) ** 2 + (t.y - e.y) ** 2);
		}, d.getAngleBetweenPoints = function(e, t) {
			return Math.atan2(t.x - e.x, t.y - e.y);
		}, d.pointInPolygon = function({ x: e, y: t }, n) {
			let r = n.length, i, a, o = !1;
			for (i = 0, a = r - 1; i < r; a = i++) {
				let [r, s] = n[i], [c, l] = n[a];
				s > t != l > t && e < (c - r) * (t - s) / (l - s) + r && (o = !o);
			}
			return o;
		};
		let { pointInPolygon: ki } = D;
		function Ai(e, t) {
			let n, r = !1;
			return e && (n = e.newOpacity, e.oldOpacity !== n && (e.hasClass("highcharts-data-label") ? (e[n ? "removeClass" : "addClass"]("highcharts-data-label-hidden"), r = !0, e[e.isOld || e.placed ? "animate" : "attr"]({ opacity: n }, void 0, function() {
				t.styledMode || e.css({ pointerEvents: n ? "auto" : "none" });
			}), B(t, "afterHideOverlappingLabel")) : e.attr({ opacity: n })), e.isOld = !0), r;
		}
		let { defaultOptions: ji } = We, { noop: Mi } = j, Ni = {
			radius: 0,
			scope: "stack",
			where: void 0
		}, Pi = Mi, Fi = Mi;
		function Ii(e, t, n, r, i = {}) {
			let a = Pi(e, t, n, r, i), { brStart: o = !0, brEnd: s = !0, innerR: c = 0, r: l = n, start: u = 0, end: d = 0 } = i;
			if (i.open || !i.borderRadius) return a;
			let f = d - u, p = Math.sin(f / 2), m = Math.max(Math.min(Te(i.borderRadius || 0, l - c), (l - c) / 2, l * p / (1 + p)), 0), h = Math.min(m, f / Math.PI * 2 * c), g = a.length - 1;
			for (; g--;) (o || g !== 0 && g !== 3) && (s || g !== 1 && g !== 2) && function(e, t, n) {
				let r, i, a, o = e[t], s = e[t + 1];
				if (s[0] === "Z" && (s = e[0]), (o[0] === "M" || o[0] === "L") && s[0] === "A" ? (r = o, i = s, a = !0) : o[0] === "A" && (s[0] === "M" || s[0] === "L") && (r = s, i = o), r && i && i.params) {
					let o = i[1], s = i[5], c = i.params, { start: l, end: u, cx: d, cy: f } = c, p = s ? o - n : o + n, m = p ? Math.asin(n / p) : 0, h = s ? m : -m, g = Math.cos(m) * p;
					a ? (c.start = l + h, r[1] = d + g * Math.cos(l), r[2] = f + g * Math.sin(l), e.splice(t + 1, 0, [
						"A",
						n,
						n,
						0,
						0,
						1,
						d + o * Math.cos(c.start),
						f + o * Math.sin(c.start)
					])) : (c.end = u - h, i[6] = d + o * Math.cos(c.end), i[7] = f + o * Math.sin(c.end), e.splice(t + 1, 0, [
						"A",
						n,
						n,
						0,
						0,
						1,
						d + g * Math.cos(u),
						f + g * Math.sin(u)
					])), i[4] = Math.abs(c.end - c.start) < Math.PI ? 0 : 1;
				}
			}(a, g, g > 1 ? h : m);
			return a;
		}
		function Li() {
			if (this.options.borderRadius && !(this.chart.is3d && this.chart.is3d())) {
				let { options: e, yAxis: t } = this, n = e.stacking === "percent", r = ji.plotOptions?.[this.type]?.borderRadius, i = Ri(e.borderRadius, W(r) ? r : {}), a = t.options.reversed;
				for (let r of this.points) {
					let { shapeArgs: o } = r;
					if (r.shapeType === "roundedRect" && o) {
						let { width: s = 0, height: c = 0, y: l = 0 } = o, u = l, d = c;
						if (i.scope === "stack" && r.stackTotal) {
							let i = t.translate(n ? 100 : r.stackTotal, !1, !0, !1, !0), a = t.translate(e.threshold || 0, !1, !0, !1, !0), o = this.crispCol(0, Math.min(i, a), 0, Math.abs(i - a));
							u = o.y, d = o.height;
						}
						let f = (r.negative ? -1 : 1) * (a ? -1 : 1) == -1, p = i.where;
						!p && this.is("waterfall") && Math.abs((r.yBottom || 0) - (this.translatedThreshold || 0)) > this.borderWidth && (p = "all"), p ||= "end";
						let m = Math.min(Te(i.radius, s), s / 2, p === "all" ? d / 2 : Infinity) || 0;
						p === "end" && (f && (u -= m), d += m), z(o, {
							brBoxHeight: d,
							brBoxY: u,
							r: m
						});
					}
				}
			}
		}
		function Ri(e, t) {
			return W(e) || (e = { radius: e || 0 }), G(Ni, t, e);
		}
		function zi() {
			let e = Ri(this.options.borderRadius);
			for (let t of this.points) {
				let n = t.shapeArgs;
				n && (n.borderRadius = Te(e.radius, (n.r || 0) - (n.innerR || 0)));
			}
		}
		function Bi(e, t, n, r, i = {}) {
			let a = Fi(e, t, n, r, i), { r: o = 0, brBoxHeight: s = r, brBoxY: c = t } = i, l = t - c, u = c + s - (t + r), d = l - o > -.1 ? 0 : o, f = u - o > -.1 ? 0 : o, p = Math.max(d && l, 0), m = Math.max(f && u, 0), h = [e + d, t], g = [e + n - d, t], _ = [e + n, t + d], v = [e + n, t + r - f], y = [e + n - f, t + r], b = [e + f, t + r], x = [e, t + r - f], S = [e, t + d], C = (e, t) => Math.sqrt(e ** 2 - t ** 2);
			if (p) {
				let e = C(d, d - p);
				h[0] -= e, g[0] += e, _[1] = S[1] = t + d - p;
			}
			if (r < d - p) {
				let i = C(d, d - p - r);
				_[0] = v[0] = e + n - d + i, y[0] = Math.min(_[0], y[0]), b[0] = Math.max(v[0], b[0]), x[0] = S[0] = e + d - i, _[1] = S[1] = t + r;
			}
			if (m) {
				let e = C(f, f - m);
				y[0] += e, b[0] -= e, v[1] = x[1] = t + r - f + m;
			}
			if (r < f - m) {
				let i = C(f, f - m - r);
				_[0] = v[0] = e + n - f + i, g[0] = Math.min(_[0], g[0]), h[0] = Math.max(v[0], h[0]), x[0] = S[0] = e + f - i, v[1] = x[1] = t;
			}
			return a.length = 0, a.push(["M", ...h], ["L", ...g], [
				"A",
				d,
				d,
				0,
				0,
				1,
				..._
			], ["L", ...v], [
				"A",
				f,
				f,
				0,
				0,
				1,
				...y
			], ["L", ...b], [
				"A",
				f,
				f,
				0,
				0,
				1,
				...x
			], ["L", ...S], [
				"A",
				d,
				d,
				0,
				0,
				1,
				...h
			], ["Z"]), a;
		}
		function Vi(e, t) {
			let n = e.condition;
			(n.callback || function() {
				return this.chartWidth <= q(n.maxWidth, Number.MAX_VALUE) && this.chartHeight <= q(n.maxHeight, Number.MAX_VALUE) && this.chartWidth >= q(n.minWidth, 0) && this.chartHeight >= q(n.minHeight, 0);
			}).call(this, this) && t.push(e._id);
		}
		function Hi(e, t) {
			let n = this.options.responsive, r = this.currentResponsive, i = [], a;
			!t && n && n.rules && n.rules.forEach((e) => {
				e._id === void 0 && (e._id = Fe()), this.matchResponsiveRule(e, i);
			}, this);
			let o = G(...i.map((e) => ge(n?.rules || [], (t) => t._id === e)).map((e) => e?.chartOptions));
			o.isResponsiveOptions = !0, i = i.toString() || void 0;
			let s = r?.ruleIds;
			i !== s && (r && (this.currentResponsive = void 0, this.updatingResponsive = !0, this.update(r.undoOptions, e, !0), this.updatingResponsive = !1), i ? ((a = ce(o, this.options, !0, this.collectionsWithUpdate)).isResponsiveOptions = !0, this.currentResponsive = {
				ruleIds: i,
				mergedOptions: o,
				undoOptions: a
			}, this.updatingResponsive || this.update(o, e, !0)) : this.currentResponsive = void 0);
		}
		(O ||= {}).compose = function(e) {
			let t = e.prototype;
			return t.matchResponsiveRule || z(t, {
				matchResponsiveRule: Vi,
				setResponsive: Hi
			}), e;
		};
		let Ui = O;
		j.AST = Q, j.Axis = mn, j.Chart = Tr, j.Color = Z, j.DataLabel = ci, j.DataTable = Hn, j.DataTableCore = Hn, j.Fx = Xe, j.HTMLElement = $t, j.Legend = pr, j.LegendSymbol = Gn, j.PlotLineOrBand = vn, j.Point = Nn, j.Pointer = zn, j.Series = ir, j.SeriesRegistry = $, j.StackItem = Nr, j.SVGElement = wt, j.SVGRenderer = Xt, j.Templating = ft, j.Tick = an, j.Time = Be, j.Tooltip = On, j.addEvent = M, j.animObject = $e.animObject, j.animate = $e.animate, j.arrayMax = N, j.arrayMin = re, j.attr = ie, j.chart = Tr.chart, j.clamp = P, j.color = Z.parse, j.correctFloat = F, j.createElement = ae, j.css = I, j.crisp = oe, j.dateFormat = ft.dateFormat, j.defaultOptions = We.defaultOptions, j.defined = L, j.destroyObjectProperties = R, j.diffObjects = ce, j.discardElement = se, j.distribute = pt.distribute, j.erase = le, j.error = Y, j.extend = z, j.extendClass = ue, j.find = ge, j.fireEvent = B, j.format = ft.format, j.getAlignFactor = de, j.getClosestDistance = fe, j.getDeferredAnimation = $e.getDeferredAnimation, j.getMagnitude = pe, j.getNestedProperty = me, j.getOptions = We.getOptions, j.getStyle = he, j.insertItem = Pe, j.isArray = U, j.isClass = ye, j.isDOMElement = ve, j.isFunction = be, j.isNumber = V, j.isObject = W, j.isString = H, j.internalClearTimeout = _e, j.merge = G, j.normalizeTickInterval = xe, j.numberFormat = ft.numberFormat, j.objectEach = K, j.offset = Se, j.pad = Ce, j.pick = q, j.pushUnique = we, j.pInt = J, j.relativeLength = Te, j.removeEvent = De, j.replaceNested = Ee, j.seriesType = $.seriesType, j.setAnimation = $e.setAnimation, j.setOptions = We.setOptions, j.splat = Oe, j.stableSort = ke, j.stop = $e.stop, j.syncTimeout = Ae, j.time = We.defaultTime, j.ucfirst = je, j.timers = Xe.timers, j.timeUnits = X, j.uniqueKey = Fe, j.useSerialIds = function(t) {
			return e = q(t, e);
		}, j.wrap = function(e, t, n) {
			let r = e[t];
			e[t] = function() {
				let e = arguments, t = this;
				return n.apply(this, [function() {
					return r.apply(t, arguments.length ? arguments : e);
				}].concat([].slice.call(arguments)));
			};
		}, function(e, t, n) {
			let r = e.types.pie;
			if (!t.symbolCustomAttribs.includes("borderRadius")) {
				let i = n.prototype.symbols;
				M(e, "afterColumnTranslate", Li, { order: 9 }), M(r, "afterTranslate", zi), t.symbolCustomAttribs.push("borderRadius", "brBoxHeight", "brBoxY", "brEnd", "brStart"), Pi = i.arc, Fi = i.roundedRect, i.arc = Ii, i.roundedRect = Bi;
			}
		}(j.Series, j.SVGElement, j.SVGRenderer), fi.compose(j.Series.types.column), ci.compose(j.Series), hn.compose(j.Axis), $t.compose(j.SVGRenderer), pr.compose(j.Chart), gn.compose(j.Axis), (i = (f = j.Chart).prototype).hideOverlappingLabels || (i.hideOverlappingLabels = function(e) {
			let t = e.length, n = (e, t) => !(t.x >= e.x + e.width || t.x + t.width <= e.x || t.y >= e.y + e.height || t.y + t.height <= e.y), r = (e, t) => {
				for (let n of e) if (ki({
					x: n[0],
					y: n[1]
				}, t)) return !0;
				return !1;
			}, i, a, o, s, c, l = !1;
			for (let n = 0; n < t; n++) (i = e[n]) && (i.oldOpacity = i.opacity, i.newOpacity = 1, i.absoluteBox = function(e) {
				if (e && (!e.alignAttr || e.placed)) {
					let t = e.box ? 0 : e.padding || 0, n = e.dataLabelPosition?.posAttribs || e.alignAttr || {
						x: e.attr("x"),
						y: e.attr("y")
					}, { height: r, polygon: i, width: a } = e.getBBox(), o = de(e.alignValue) * a;
					return e.width = a, e.height = r, {
						x: n.x + (e.parentGroup?.translateX || 0) + t - o,
						y: n.y + (e.parentGroup?.translateY || 0) + t,
						width: a - 2 * t,
						height: r - 2 * t,
						polygon: i
					};
				}
			}(i));
			e.sort((e, t) => (t?.labelrank || 0) - (e?.labelrank || 0));
			for (let i = 0; i < t; ++i) {
				s = (a = e[i]) && a.absoluteBox;
				let l = s?.polygon;
				for (let u = i + 1; u < t; ++u) {
					c = (o = e[u]) && o.absoluteBox;
					let t = !1;
					if (s && c && a !== o && a?.newOpacity !== 0 && o?.newOpacity !== 0 && a?.visibility !== "hidden" && o?.visibility !== "hidden") {
						let e = c.polygon;
						if (l && e && l !== e ? r(l, e) && (t = !0) : n(s, c) && (t = !0), t) {
							let e = a?.labelrank < o?.labelrank ? a : o, t = e?.text;
							e && (e.newOpacity = 0), t?.element.querySelector("textPath") && t.hide();
						}
					}
				}
			}
			for (let t of e) t && Ai(t, this) && (l = !0);
			l && B(this, "afterHideAllOverlappingLabels");
		}, M(f, "render", function() {
			let e = this, t = [];
			for (let n of e.labelCollectors || []) t = t.concat(n());
			for (let n of e.yAxis || []) n.stacking && n.options.stackLabels && !n.options.stackLabels.allowOverlap && K(n.stacking.stacks, (e) => {
				K(e, (e) => {
					e.label && t.push(e.label);
				});
			});
			for (let n of e.series || []) if (n.visible && n.hasDataLabels?.()) {
				let r = (r) => {
					for (let i of r) i.visible && (i.dataLabels || []).forEach((r) => {
						let a = r.options || {};
						r.labelrank = q(a.labelrank, i.labelrank, i.shapeArgs?.height), a.allowOverlap ?? (n.is("pie") && Number(a.distance) > 0) ? (r.oldOpacity = r.opacity, r.newOpacity = 1, Ai(r, e)) : t.push(r);
					});
				};
				r(n.nodes || []), r(n.points);
			}
			this.hideOverlappingLabels(t);
		})), Oi.compose(j.Series.types.pie), vn.compose(j.Chart, j.Axis), zn.compose(j.Chart), Ui.compose(j.Chart), Ar.compose(j.Axis, j.Chart, j.Series), Gr.compose(j.Axis, j.Chart, j.Series), On.compose(j.Pointer);
		let Wi = j;
		return A.default;
	})());
})), r = /* @__PURE__ */ t(((e, t) => {
	(function(n, r) {
		typeof e == "object" && typeof t == "object" ? t.exports = r(n._Highcharts, n._Highcharts.Chart) : typeof define == "function" && define.amd ? define("highcharts/themes/adaptive", ["highcharts/highcharts"], function(e) {
			return r(e, e.Chart);
		}) : typeof e == "object" ? e["highcharts/themes/adaptive"] = r(n._Highcharts, n._Highcharts.Chart) : n.Highcharts = r(n.Highcharts, n.Highcharts.Chart);
	})("u" < typeof window ? e : window, (e, t) => (() => {
		var n, r, i = {
			944: (t) => {
				t.exports = e;
			},
			960: (e) => {
				e.exports = t;
			}
		}, a = {};
		function o(e) {
			var t = a[e];
			if (t !== void 0) return t.exports;
			var n = a[e] = { exports: {} };
			return i[e](n, n.exports, o), n.exports;
		}
		o.n = (e) => {
			var t = e && e.__esModule ? () => e.default : () => e;
			return o.d(t, { a: t }), t;
		}, o.d = (e, t) => {
			for (var n in t) o.o(t, n) && !o.o(e, n) && Object.defineProperty(e, n, {
				enumerable: !0,
				get: t[n]
			});
		}, o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t);
		var s = {};
		o.d(s, { default: () => g });
		var c = o(944), l = o.n(c), u = o(960), d = o.n(u);
		let { setOptions: f } = l(), p = "\n    /* Colors for data series and points */\n    --highcharts-color-1: #00e272;\n    --highcharts-color-2: #efdf00;\n\n    /* UI colors */\n    --highcharts-background-color: #141414;\n\n    /*\n        Neutral color variations\n        https://www.highcharts.com/samples/highcharts/css/palette-helper\n    */\n    --highcharts-neutral-color-100: #ffffff;\n    --highcharts-neutral-color-80: #d0d0d0;\n    --highcharts-neutral-color-60: #a1a1a1;\n    --highcharts-neutral-color-40: #727272;\n    --highcharts-neutral-color-20: #434343;\n    --highcharts-neutral-color-10: #2c2c2c;\n    --highcharts-neutral-color-5: #202020;\n    --highcharts-neutral-color-3: #1b1b1b;\n\n    /* Highlight color variations */\n    --highcharts-highlight-color-100: #2caffe;\n    --highcharts-highlight-color-80: #2790cf;\n    --highcharts-highlight-color-60: #2271a0;\n    --highcharts-highlight-color-20: #193343;\n    --highcharts-highlight-color-10: #16242b;\n", m = `
:root,
.highcharts-light {
    
        /* Colors for data series and points */
        --highcharts-color-0: #2caffe;
        --highcharts-color-1: #544fc5;
        --highcharts-color-2: #00e272;
        --highcharts-color-3: #fe6a35;
        --highcharts-color-4: #6b8abc;
        --highcharts-color-5: #d568fb;
        --highcharts-color-6: #2ee0ca;
        --highcharts-color-7: #fa4b42;
        --highcharts-color-8: #feb56a;
        --highcharts-color-9: #91e8e1;

    /* Chart background, point stroke for markers and columns etc */
    --highcharts-background-color: #ffffff;

    /*
    Neutral colors, grayscale by default. The default colors are defined by
    mixing the background-color with neutral, with a weight corresponding to
    the number in the name.

    https://www.highcharts.com/samples/highcharts/css/palette-helper
    */

    /* Strong text. */
    --highcharts-neutral-color-100: #000000;

    /* Main text, axis labels and some strokes. */
    --highcharts-neutral-color-80: #333333;

    /* Axis title, connector fallback. */
    --highcharts-neutral-color-60: #666666;

    /* Credits text, export menu stroke. */
    --highcharts-neutral-color-40: #999999;

    /* Disabled texts, button strokes, crosshair etc. */
    --highcharts-neutral-color-20: #cccccc;

    /* Grid lines etc. */
    --highcharts-neutral-color-10: #e6e6e6;

    /* Minor grid lines etc. */
    --highcharts-neutral-color-5: #f2f2f2;

    /* Tooltip background, button fills, map null points. */
    --highcharts-neutral-color-3: #f7f7f7;

    /*
    Highlights, shades of blue by default
    */

    /* Drilldown clickable labels, color axis max color. */
    --highcharts-highlight-color-100: #0022ff;

    /* Selection marker, menu hover, button hover, chart border, navigator
    series. */
    --highcharts-highlight-color-80: #334eff;

    /* Navigator mask fill. */
    --highcharts-highlight-color-60: #667aff;

    /* Ticks and axis line. */
    --highcharts-highlight-color-20: #ccd3ff;

    /* Pressed button, color axis min color. */
    --highcharts-highlight-color-10: #e6e9ff;

    /* Indicators */
    --highcharts-positive-color: #06b535;
    --highcharts-negative-color: #f21313;

    /* Transparent colors for annotations */
    --highcharts-annotation-color-0: rgba(130, 170, 255, 0.4);
    --highcharts-annotation-color-1: rgba(139, 191, 216, 0.4);
    --highcharts-annotation-color-2: rgba(150, 216, 192, 0.4);
    --highcharts-annotation-color-3: rgba(156, 229, 161, 0.4);
    --highcharts-annotation-color-4: rgba(162, 241, 130, 0.4);
    --highcharts-annotation-color-5: rgba(169, 255, 101, 0.4);

}

@media (prefers-color-scheme: dark) {
    :root {
        ${p}
    }
}

.highcharts-dark {
    ${p}
}

.highcharts-container {
    color-scheme: light dark;
}

.highcharts-light .highcharts-container {
    color-scheme: light;
}

.highcharts-dark .highcharts-container {
    color-scheme: dark;
}
`;
		(n = r ||= {}).options = {
			colors: [
				"var(--highcharts-color-0)",
				"var(--highcharts-color-1)",
				"var(--highcharts-color-2)",
				"var(--highcharts-color-3)",
				"var(--highcharts-color-4)",
				"var(--highcharts-color-5)",
				"var(--highcharts-color-6)",
				"var(--highcharts-color-7)",
				"var(--highcharts-color-8)",
				"var(--highcharts-color-9)"
			],
			global: { buttonTheme: {
				fill: "var(--highcharts-neutral-color-3)",
				stroke: "var(--highcharts-neutral-color-20)",
				style: { color: "var(--highcharts-neutral-color-80)" },
				states: {
					hover: { fill: "var(--highcharts-neutral-color-10)" },
					select: {
						fill: "var(--highcharts-highlight-color-10)",
						style: { color: "var(--highcharts-neutral-color-100)" }
					},
					disabled: { style: { color: "var(--highcharts-neutral-color-20)" } }
				}
			} },
			chart: {
				borderColor: "var(--highcharts-highlight-color-80)",
				backgroundColor: "var(--highcharts-background-color)",
				plotBorderColor: "var(--highcharts-neutral-color-20)"
			},
			title: { style: { color: "var(--highcharts-neutral-color-80)" } },
			subtitle: { style: { color: "var(--highcharts-neutral-color-60)" } },
			caption: { style: { color: "var(--highcharts-neutral-color-60)" } },
			plotOptions: {
				line: { marker: {
					lineColor: "var(--highcharts-background-color)",
					states: { select: {
						fillColor: "var(--highcharts-neutral-color-20)",
						lineColor: "var(--highcharts-neutral-color-100)"
					} }
				} },
				area: { marker: {
					lineColor: "var(--highcharts-background-color)",
					states: { select: {
						fillColor: "var(--highcharts-neutral-color-20)",
						lineColor: "var(--highcharts-neutral-color-100)"
					} }
				} },
				spline: { marker: {
					lineColor: "var(--highcharts-background-color)",
					states: { select: {
						fillColor: "var(--highcharts-neutral-color-20)",
						lineColor: "var(--highcharts-neutral-color-100)"
					} }
				} },
				areaspline: { marker: {
					lineColor: "var(--highcharts-background-color)",
					states: { select: {
						fillColor: "var(--highcharts-neutral-color-20)",
						lineColor: "var(--highcharts-neutral-color-100)"
					} }
				} },
				column: {
					states: { select: {
						color: "var(--highcharts-neutral-color-20)",
						borderColor: "var(--highcharts-neutral-color-100)"
					} },
					borderColor: "var(--highcharts-background-color)"
				},
				bar: {
					states: { select: {
						color: "var(--highcharts-neutral-color-20)",
						borderColor: "var(--highcharts-neutral-color-100)"
					} },
					borderColor: "var(--highcharts-background-color)"
				},
				scatter: { marker: {
					lineColor: "var(--highcharts-background-color)",
					states: { select: {
						fillColor: "var(--highcharts-neutral-color-20)",
						lineColor: "var(--highcharts-neutral-color-100)"
					} }
				} },
				pie: { borderColor: "var(--highcharts-background-color)" },
				hlc: {
					states: { select: {
						color: "var(--highcharts-neutral-color-20)",
						borderColor: "var(--highcharts-neutral-color-100)"
					} },
					borderColor: "var(--highcharts-background-color)"
				},
				ohlc: {
					states: { select: {
						color: "var(--highcharts-neutral-color-20)",
						borderColor: "var(--highcharts-neutral-color-100)"
					} },
					borderColor: "var(--highcharts-background-color)"
				},
				candlestick: {
					states: { select: {
						color: "var(--highcharts-neutral-color-20)",
						borderColor: "var(--highcharts-neutral-color-100)"
					} },
					borderColor: "var(--highcharts-background-color)",
					lineColor: "var(--highcharts-neutral-color-100)",
					upColor: "var(--highcharts-background-color)"
				},
				flags: {
					states: {
						hover: {
							lineColor: "var(--highcharts-neutral-color-100)",
							fillColor: "var(--highcharts-highlight-color-20)"
						},
						select: {
							color: "var(--highcharts-neutral-color-20)",
							borderColor: "var(--highcharts-neutral-color-100)"
						}
					},
					borderColor: "var(--highcharts-background-color)",
					fillColor: "var(--highcharts-background-color)",
					style: { color: "var(--highcharts-neutral-color-100)" }
				},
				arearange: { marker: {
					lineColor: "var(--highcharts-background-color)",
					states: { select: {
						fillColor: "var(--highcharts-neutral-color-20)",
						lineColor: "var(--highcharts-neutral-color-100)"
					} }
				} },
				areasplinerange: { marker: {
					lineColor: "var(--highcharts-background-color)",
					states: { select: {
						fillColor: "var(--highcharts-neutral-color-20)",
						lineColor: "var(--highcharts-neutral-color-100)"
					} }
				} },
				boxplot: {
					states: { select: {
						color: "var(--highcharts-neutral-color-20)",
						borderColor: "var(--highcharts-neutral-color-100)"
					} },
					borderColor: "var(--highcharts-background-color)",
					fillColor: "var(--highcharts-background-color)"
				},
				bubble: { marker: { states: { select: {
					fillColor: "var(--highcharts-neutral-color-20)",
					lineColor: "var(--highcharts-neutral-color-100)"
				} } } },
				columnrange: {
					states: { select: {
						color: "var(--highcharts-neutral-color-20)",
						borderColor: "var(--highcharts-neutral-color-100)"
					} },
					borderColor: "var(--highcharts-background-color)"
				},
				columnpyramid: {
					states: { select: {
						color: "var(--highcharts-neutral-color-20)",
						borderColor: "var(--highcharts-neutral-color-100)"
					} },
					borderColor: "var(--highcharts-background-color)"
				},
				errorbar: {
					states: { select: {
						color: "var(--highcharts-neutral-color-20)",
						borderColor: "var(--highcharts-neutral-color-100)"
					} },
					borderColor: "var(--highcharts-background-color)",
					fillColor: "var(--highcharts-background-color)",
					color: "var(--highcharts-neutral-color-100)"
				},
				gauge: {
					marker: {
						lineColor: "var(--highcharts-background-color)",
						states: { select: {
							fillColor: "var(--highcharts-neutral-color-20)",
							lineColor: "var(--highcharts-neutral-color-100)"
						} }
					},
					dataLabels: { borderColor: "var(--highcharts-neutral-color-20)" },
					dial: {
						backgroundColor: "var(--highcharts-neutral-color-100)",
						borderColor: "var(--highcharts-neutral-color-20)"
					},
					pivot: {
						borderColor: "var(--highcharts-neutral-color-100)",
						backgroundColor: "var(--highcharts-background-color)"
					}
				},
				packedbubble: { marker: { states: { select: {
					fillColor: "var(--highcharts-neutral-color-20)",
					lineColor: "var(--highcharts-neutral-color-100)"
				} } } },
				polygon: { marker: {
					lineColor: "var(--highcharts-background-color)",
					states: { select: {
						fillColor: "var(--highcharts-neutral-color-20)",
						lineColor: "var(--highcharts-neutral-color-100)"
					} }
				} },
				waterfall: {
					states: { select: {
						color: "var(--highcharts-neutral-color-20)",
						borderColor: "var(--highcharts-neutral-color-100)"
					} },
					borderColor: "var(--highcharts-neutral-color-80)",
					lineColor: "var(--highcharts-neutral-color-80)"
				},
				scatter3d: { marker: {
					lineColor: "var(--highcharts-background-color)",
					states: { select: {
						fillColor: "var(--highcharts-neutral-color-20)",
						lineColor: "var(--highcharts-neutral-color-100)"
					} }
				} },
				map: {
					states: {
						hover: { borderColor: "var(--highcharts-neutral-color-60)" },
						select: { color: "var(--highcharts-neutral-color-20)" }
					},
					nullColor: "var(--highcharts-neutral-color-3)",
					borderColor: "var(--highcharts-neutral-color-10)"
				},
				mapline: {
					states: {
						hover: { borderColor: "var(--highcharts-neutral-color-60)" },
						select: { color: "var(--highcharts-neutral-color-20)" }
					},
					nullColor: "var(--highcharts-neutral-color-3)",
					borderColor: "var(--highcharts-neutral-color-10)"
				},
				mappoint: {
					marker: {
						lineColor: "var(--highcharts-background-color)",
						states: { select: {
							fillColor: "var(--highcharts-neutral-color-20)",
							lineColor: "var(--highcharts-neutral-color-100)"
						} }
					},
					dataLabels: { style: { color: "var(--highcharts-neutral-color-100)" } }
				},
				mapbubble: { marker: { states: { select: {
					fillColor: "var(--highcharts-neutral-color-20)",
					lineColor: "var(--highcharts-neutral-color-100)"
				} } } },
				heatmap: {
					marker: { states: { select: {
						fillColor: "var(--highcharts-neutral-color-20)",
						lineColor: "var(--highcharts-neutral-color-100)"
					} } },
					nullColor: "var(--highcharts-neutral-color-3)"
				},
				xrange: {
					states: { select: {
						color: "var(--highcharts-neutral-color-20)",
						borderColor: "var(--highcharts-neutral-color-100)"
					} },
					borderColor: "var(--highcharts-background-color)"
				},
				gantt: {
					states: { select: {
						color: "var(--highcharts-neutral-color-20)",
						borderColor: "var(--highcharts-neutral-color-100)"
					} },
					borderColor: "var(--highcharts-background-color)"
				},
				sankey: {
					states: { select: {
						color: "var(--highcharts-neutral-color-20)",
						borderColor: "var(--highcharts-neutral-color-100)"
					} },
					borderColor: "var(--highcharts-background-color)"
				},
				dependencywheel: {
					states: { select: {
						color: "var(--highcharts-neutral-color-20)",
						borderColor: "var(--highcharts-neutral-color-100)"
					} },
					borderColor: "var(--highcharts-background-color)"
				},
				funnel: {
					states: { select: {
						color: "var(--highcharts-neutral-color-20)",
						borderColor: "var(--highcharts-neutral-color-100)"
					} },
					borderColor: "var(--highcharts-background-color)"
				},
				pyramid: {
					states: { select: {
						color: "var(--highcharts-neutral-color-20)",
						borderColor: "var(--highcharts-neutral-color-100)"
					} },
					borderColor: "var(--highcharts-background-color)"
				},
				histogram: {
					states: { select: {
						color: "var(--highcharts-neutral-color-20)",
						borderColor: "var(--highcharts-neutral-color-100)"
					} },
					borderColor: "var(--highcharts-background-color)"
				},
				bellcurve: { marker: {
					lineColor: "var(--highcharts-background-color)",
					states: { select: {
						fillColor: "var(--highcharts-neutral-color-20)",
						lineColor: "var(--highcharts-neutral-color-100)"
					} }
				} },
				item: {
					marker: {
						lineColor: "var(--highcharts-background-color)",
						states: { select: {
							fillColor: "var(--highcharts-neutral-color-20)",
							lineColor: "var(--highcharts-neutral-color-100)"
						} }
					},
					borderColor: "var(--highcharts-background-color)"
				},
				organization: {
					states: { select: {
						color: "var(--highcharts-neutral-color-20)",
						borderColor: "var(--highcharts-neutral-color-100)"
					} },
					borderColor: "var(--highcharts-neutral-color-60)",
					link: { color: "var(--highcharts-neutral-color-60)" }
				},
				solidgauge: {
					marker: {
						lineColor: "var(--highcharts-background-color)",
						states: { select: {
							fillColor: "var(--highcharts-neutral-color-20)",
							lineColor: "var(--highcharts-neutral-color-100)"
						} }
					},
					dataLabels: { borderColor: "var(--highcharts-neutral-color-20)" },
					dial: {
						backgroundColor: "var(--highcharts-neutral-color-100)",
						borderColor: "var(--highcharts-neutral-color-20)"
					},
					pivot: {
						borderColor: "var(--highcharts-neutral-color-20)",
						backgroundColor: "var(--highcharts-neutral-color-100)"
					}
				},
				timeline: {
					marker: {
						lineColor: "var(--highcharts-background-color)",
						states: { select: {
							fillColor: "var(--highcharts-neutral-color-20)",
							lineColor: "var(--highcharts-neutral-color-100)"
						} }
					},
					dataLabels: {
						backgroundColor: "var(--highcharts-background-color)",
						borderColor: "var(--highcharts-neutral-color-40)",
						color: "var(--highcharts-neutral-color-80)"
					}
				},
				treemap: {
					states: { hover: { borderColor: "var(--highcharts-neutral-color-40)" } },
					borderColor: "var(--highcharts-neutral-color-10)"
				},
				sunburst: {
					states: { hover: { borderColor: "var(--highcharts-neutral-color-40)" } },
					borderColor: "var(--highcharts-neutral-color-10)"
				},
				treegraph: {
					states: { hover: { borderColor: "var(--highcharts-neutral-color-40)" } },
					borderColor: "var(--highcharts-neutral-color-10)",
					link: { color: "var(--highcharts-neutral-color-60)" }
				}
			},
			legend: {
				borderColor: "var(--highcharts-neutral-color-40)",
				navigation: {
					activeColor: "var(--highcharts-highlight-color-100)",
					inactiveColor: "var(--highcharts-neutral-color-20)"
				},
				itemStyle: { color: "var(--highcharts-neutral-color-80)" },
				itemHoverStyle: { color: "var(--highcharts-neutral-color-100)" },
				itemHiddenStyle: { color: "var(--highcharts-neutral-color-60)" },
				title: { style: { color: "var(--highcharts-neutral-color-80)" } },
				bubbleLegend: { labels: { style: { color: "var(--highcharts-neutral-color-100)" } } }
			},
			loading: { style: { backgroundColor: "var(--highcharts-background-color)" } },
			tooltip: {
				backgroundColor: "var(--highcharts-background-color)",
				style: { color: "var(--highcharts-neutral-color-80)" }
			},
			credits: { style: { color: "var(--highcharts-neutral-color-40)" } },
			xAxis: {
				labels: { style: { color: "var(--highcharts-neutral-color-80)" } },
				title: { style: { color: "var(--highcharts-neutral-color-60)" } },
				minorGridLineColor: "var(--highcharts-neutral-color-5)",
				minorTickColor: "var(--highcharts-neutral-color-40)",
				lineColor: "var(--highcharts-neutral-color-80)",
				gridLineColor: "var(--highcharts-neutral-color-10)",
				tickColor: "var(--highcharts-neutral-color-80)",
				grid: { borderColor: "var(--highcharts-neutral-color-20)" }
			},
			yAxis: {
				labels: { style: { color: "var(--highcharts-neutral-color-80)" } },
				title: { style: { color: "var(--highcharts-neutral-color-60)" } },
				minorGridLineColor: "var(--highcharts-neutral-color-5)",
				minorTickColor: "var(--highcharts-neutral-color-40)",
				lineColor: "var(--highcharts-neutral-color-80)",
				gridLineColor: "var(--highcharts-neutral-color-10)",
				tickColor: "var(--highcharts-neutral-color-80)",
				stackLabels: { style: { color: "var(--highcharts-neutral-color-100)" } },
				grid: { borderColor: "var(--highcharts-neutral-color-20)" }
			},
			navigator: {
				handles: {
					backgroundColor: "var(--highcharts-neutral-color-5)",
					borderColor: "var(--highcharts-neutral-color-40)"
				},
				outlineColor: "var(--highcharts-neutral-color-40)",
				xAxis: {
					gridLineColor: "var(--highcharts-neutral-color-10)",
					labels: { style: { color: "var(--highcharts-neutral-color-100)" } }
				}
			},
			rangeSelector: {
				inputStyle: { color: "var(--highcharts-highlight-color-80)" },
				labelStyle: { color: "var(--highcharts-neutral-color-60)" }
			},
			scrollbar: {
				barBackgroundColor: "var(--highcharts-neutral-color-20)",
				barBorderColor: "var(--highcharts-neutral-color-20)",
				buttonArrowColor: "var(--highcharts-neutral-color-80)",
				buttonBackgroundColor: "var(--highcharts-neutral-color-10)",
				buttonBorderColor: "var(--highcharts-neutral-color-20)",
				trackBorderColor: "var(--highcharts-neutral-color-20)"
			},
			pane: { background: {
				borderColor: "var(--highcharts-neutral-color-20)",
				backgroundColor: "var(--highcharts-neutral-color-5)"
			} },
			zAxis: {
				labels: { style: { color: "var(--highcharts-neutral-color-80)" } },
				title: { style: { color: "var(--highcharts-neutral-color-60)" } },
				minorGridLineColor: "var(--highcharts-neutral-color-5)",
				minorTickColor: "var(--highcharts-neutral-color-40)",
				lineColor: "var(--highcharts-neutral-color-80)",
				gridLineColor: "var(--highcharts-neutral-color-10)",
				tickColor: "var(--highcharts-neutral-color-80)"
			},
			colorAxis: {
				labels: { style: { color: "var(--highcharts-neutral-color-80)" } },
				title: { style: { color: "var(--highcharts-neutral-color-60)" } },
				minorGridLineColor: "var(--highcharts-neutral-color-5)",
				minorTickColor: "var(--highcharts-neutral-color-40)",
				lineColor: "var(--highcharts-neutral-color-80)",
				gridLineColor: "var(--highcharts-background-color)",
				tickColor: "var(--highcharts-neutral-color-80)",
				marker: { color: "var(--highcharts-neutral-color-40)" },
				minColor: "var(--highcharts-highlight-color-10)",
				maxColor: "var(--highcharts-highlight-color-100)"
			},
			mapNavigation: { buttonOptions: {
				style: { color: "var(--highcharts-neutral-color-60)" },
				theme: {
					fill: "var(--highcharts-background-color)",
					stroke: "var(--highcharts-neutral-color-10)"
				}
			} },
			accessibility: { keyboardNavigation: { focusBorder: { style: { color: "var(--highcharts-highlight-color-80)" } } } },
			drilldown: {
				activeAxisLabelStyle: { color: "var(--highcharts-highlight-color-100)" },
				activeDataLabelStyle: { color: "var(--highcharts-highlight-color-100)" }
			},
			annotations: {
				labelOptions: {
					borderColor: "var(--highcharts-neutral-color-100)",
					backgroundColor: "color-mix(in srgb, var(--highcharts-neutral-color-100) 75%, transparent)"
				},
				controlPointOptions: { style: {
					fill: "var(--highcharts-background-color)",
					stroke: "var(--highcharts-neutral-color-100)"
				} },
				types: {
					elliottWave: { labelOptions: { style: { color: "var(--highcharts-neutral-color-60)" } } },
					fibonacci: {
						typeOptions: { lineColor: "var(--highcharts-neutral-color-40)" },
						labelOptions: { style: { color: "var(--highcharts-neutral-color-60)" } }
					},
					fibonacciTimeZones: { typeOptions: { line: { stroke: "var(--highcharts-neutral-color-80)" } } },
					verticalLine: { labelOptions: { style: { color: "var(--highcharts-neutral-color-60)" } } },
					measure: { typeOptions: { label: { style: { color: "var(--highcharts-neutral-color-60)" } } } }
				},
				shapeOptions: {
					fill: "color-mix(in srgb, var(--highcharts-neutral-color-100) 75%, transparent)",
					stroke: "color-mix(in srgb, var(--highcharts-neutral-color-100) 75%, transparent)"
				}
			},
			navigation: {
				buttonOptions: {
					symbolFill: "var(--highcharts-neutral-color-60)",
					symbolStroke: "var(--highcharts-neutral-color-60)",
					theme: { fill: "var(--highcharts-background-color)" }
				},
				menuStyle: { background: "var(--highcharts-background-color)" },
				menuItemStyle: { color: "var(--highcharts-neutral-color-80)" },
				menuItemHoverStyle: { background: "var(--highcharts-neutral-color-5)" }
			}
		}, n.apply = function() {
			let e = document.createElement("style");
			e.nonce = "highcharts", e.innerText = m, e.id = "highcharts-adaptive-theme", document.getElementsByTagName("head")[0].appendChild(e), f(n.options), (0, c.addEvent)(d(), "afterGetContainer", function() {
				let t = this.container.getRootNode().host?.shadowRoot;
				if (t && !t.getElementById("highcharts-adaptive-theme")) {
					let n = e.cloneNode(!0);
					t.appendChild(n);
				}
			});
		};
		let h = r;
		l().theme = h.options, h.apply();
		let g = l();
		return s.default;
	})());
})), i = /* @__PURE__ */ t(((e, t) => {
	(function(n, r) {
		typeof e == "object" && typeof t == "object" ? t.exports = r(n._Highcharts, n._Highcharts.Templating, n._Highcharts.AST, n._Highcharts.Legend, n._Highcharts.Axis, n._Highcharts.SeriesRegistry, n._Highcharts.SVGRenderer, n._Highcharts.Point, n._Highcharts.Series) : typeof define == "function" && define.amd ? define("highcharts/modules/accessibility", ["highcharts/highcharts"], function(e) {
			return r(e, e.Templating, e.AST, e.Legend, e.Axis, e.SeriesRegistry, e.SVGRenderer, e.Point, e.Series);
		}) : typeof e == "object" ? e["highcharts/modules/accessibility"] = r(n._Highcharts, n._Highcharts.Templating, n._Highcharts.AST, n._Highcharts.Legend, n._Highcharts.Axis, n._Highcharts.SeriesRegistry, n._Highcharts.SVGRenderer, n._Highcharts.Point, n._Highcharts.Series) : n.Highcharts = r(n.Highcharts, n.Highcharts.Templating, n.Highcharts.AST, n.Highcharts.Legend, n.Highcharts.Axis, n.Highcharts.SeriesRegistry, n.Highcharts.SVGRenderer, n.Highcharts.Point, n.Highcharts.Series);
	})("u" < typeof window ? e : window, (e, t, n, r, i, a, o, s, c) => (() => {
		let l;
		var u, d, f, p, m = {
			260: (e) => {
				e.exports = s;
			},
			512: (e) => {
				e.exports = a;
			},
			532: (e) => {
				e.exports = i;
			},
			540: (e) => {
				e.exports = o;
			},
			632: (e) => {
				e.exports = r;
			},
			660: (e) => {
				e.exports = n;
			},
			820: (e) => {
				e.exports = c;
			},
			944: (t) => {
				t.exports = e;
			},
			984: (e) => {
				e.exports = t;
			}
		}, h = {};
		function g(e) {
			var t = h[e];
			if (t !== void 0) return t.exports;
			var n = h[e] = { exports: {} };
			return m[e](n, n.exports, g), n.exports;
		}
		g.n = (e) => {
			var t = e && e.__esModule ? () => e.default : () => e;
			return g.d(t, { a: t }), t;
		}, g.d = (e, t) => {
			for (var n in t) g.o(t, n) && !g.o(e, n) && Object.defineProperty(e, n, {
				enumerable: !0,
				get: t[n]
			});
		}, g.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t);
		var _ = {};
		g.d(_, { default: () => vr });
		var v = g(944), y = g.n(v);
		let { doc: b, win: x } = y(), S = x.EventTarget && new x.EventTarget() || "none";
		function C(e) {
			if (typeof x.MouseEvent == "function") return new x.MouseEvent(e.type, e);
			if (b?.createEvent) {
				let t = b.createEvent("MouseEvent");
				if (t.initMouseEvent) return t.initMouseEvent(e.type, e.bubbles, e.cancelable, e.view || x, e.detail, e.screenX, e.screenY, e.clientX, e.clientY, e.ctrlKey, e.altKey, e.shiftKey, e.metaKey, e.button, e.relatedTarget), t;
			}
			return w(e.type);
		}
		function w(e, t, n) {
			let r = t || {
				x: 0,
				y: 0
			};
			if (typeof x.MouseEvent == "function") return new x.MouseEvent(e, {
				bubbles: !0,
				cancelable: !0,
				composed: !0,
				button: 0,
				buttons: 1,
				relatedTarget: n || S,
				view: x,
				detail: +(e === "click"),
				screenX: r.x,
				screenY: r.y,
				clientX: r.x,
				clientY: r.y
			});
			if (b?.createEvent) {
				let t = b.createEvent("MouseEvent");
				if (t.initMouseEvent) return t.initMouseEvent(e, !0, !0, x, +(e === "click"), r.x, r.y, r.x, r.y, !1, !1, !1, !1, 0, null), t;
			}
			return { type: e };
		}
		let T = {
			addClass: function(e, t) {
				e.classList ? e.classList.add(t) : 0 > e.className.indexOf(t) && (e.className += " " + t);
			},
			cloneMouseEvent: C,
			cloneTouchEvent: function(e) {
				let t = (e) => {
					let t = [];
					for (let n = 0; n < e.length; ++n) {
						let r = e.item(n);
						r && t.push(r);
					}
					return t;
				};
				if (typeof x.TouchEvent == "function") {
					let n = new x.TouchEvent(e.type, {
						touches: t(e.touches),
						targetTouches: t(e.targetTouches),
						changedTouches: t(e.changedTouches),
						ctrlKey: e.ctrlKey,
						shiftKey: e.shiftKey,
						altKey: e.altKey,
						metaKey: e.metaKey,
						bubbles: e.bubbles,
						cancelable: e.cancelable,
						composed: e.composed,
						detail: e.detail,
						view: e.view
					});
					return e.defaultPrevented && n.preventDefault(), n;
				}
				let n = C(e);
				return n.touches = e.touches, n.changedTouches = e.changedTouches, n.targetTouches = e.targetTouches, n;
			},
			escapeStringForHTML: function(e) {
				return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;");
			},
			getElement: function(e) {
				return b.getElementById(e);
			},
			getFakeMouseEvent: w,
			getHeadingTagNameForElement: function(e) {
				let t = (e) => "h" + Math.min(6, parseInt(e.slice(1), 10) + 1), n = (e) => /^H[1-6]$/i.test(e), r = (e) => {
					let i = ((e) => {
						let t = e;
						for (; t = t.previousSibling;) {
							let e = t.tagName || "";
							if (n(e)) return e;
						}
						return "";
					})(e);
					if (i) return t(i);
					let a = e.parentElement;
					if (!a) return "h6";
					let o = a.tagName;
					return n(o) ? t(o) : r(a);
				};
				return r(e);
			},
			removeChildNodes: function(e) {
				for (; e.lastChild;) e.removeChild(e.lastChild);
			},
			removeClass: function(e, t) {
				e.classList ? e.classList.remove(t) : e.className = e.className.replace(RegExp(t, "g"), "");
			},
			removeElement: function(e) {
				e && e.parentNode && e.parentNode.removeChild(e);
			},
			reverseChildNodes: function(e) {
				let t = e.childNodes.length;
				for (; t--;) e.appendChild(e.childNodes[t]);
			},
			simulatedEventTarget: S,
			stripHTMLTagsFromString: function(e, t = !1) {
				return typeof e == "string" ? t ? e.replace(/<\/?[^>]+(>|$)/g, "") : e.replace(/<\/?(?!\s)[^>]+(>|$)/g, "") : e;
			},
			visuallyHideElement: function(e) {
				(0, v.css)(e, {
					position: "absolute",
					width: "1px",
					height: "1px",
					overflow: "hidden",
					whiteSpace: "nowrap",
					clip: "rect(1px, 1px, 1px, 1px)",
					marginTop: "-3px",
					"-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=1)",
					filter: "alpha(opacity=1)",
					opacity: .01
				});
			}
		};
		var E = g(984), D = g.n(E);
		let { format: O } = D();
		var k = u ||= {};
		function A(e, t, n) {
			let r = (e, t) => {
				let n = e.slice(t || 0), r = n.indexOf("{"), i = n.indexOf("}");
				if (r > -1 && i > r) return {
					statement: n.substring(r + 1, i),
					begin: t + r + 1,
					end: t + i
				};
			}, i = [], a, o, s = 0;
			do
				a = r(e, s), (o = e.substring(s, a && a.begin - 1)).length && i.push({
					value: o,
					type: "constant"
				}), a && i.push({
					value: a.statement,
					type: "statement"
				}), s = a ? a.end + 1 : s + 1;
			while (a);
			return i.forEach((e) => {
				e.type === "statement" && (e.value = function(e, t) {
					let n, r, i = e.indexOf("#each("), a = e.indexOf("#plural("), o = e.indexOf("["), s = e.indexOf("]");
					if (i > -1) {
						let a = e.slice(i).indexOf(")") + i, o = e.substring(0, i), s = e.substring(a + 1), c = e.substring(i + 6, a).split(","), l = Number(c[1]), u;
						if (r = "", n = (0, v.getNestedProperty)(c[0], t)) {
							u = (l = isNaN(l) ? n.length : l) < 0 ? n.length + l : Math.min(l, n.length);
							for (let e = 0; e < u; ++e) r += o + n[e] + s;
						}
						return r.length ? r : "";
					}
					if (a > -1) {
						var c;
						let n = e.slice(a).indexOf(")") + a, i = e.substring(a + 8, n).split(",");
						switch (Number((0, v.getNestedProperty)(i[0], t))) {
							case 0:
								r = (0, v.pick)(i[4], i[1]);
								break;
							case 1:
								r = (0, v.pick)(i[2], i[1]);
								break;
							case 2:
								r = (0, v.pick)(i[3], i[1]);
								break;
							default: r = i[1];
						}
						return r ? (c = r).trim && c.trim() || c.replace(/^\s+|\s+$/g, "") : "";
					}
					if (o > -1) {
						let r, i = e.substring(0, o), a = Number(e.substring(o + 1, s));
						return n = (0, v.getNestedProperty)(i, t), !isNaN(a) && n && (a < 0 ? (r = n[n.length + a]) === void 0 && (r = n[0]) : (r = n[a]) === void 0 && (r = n[n.length - 1])), r === void 0 ? "" : r;
					}
					return "{" + e + "}";
				}(e.value, t));
			}), O(i.reduce((e, t) => e + t.value, ""), t, n);
		}
		function j(e, t) {
			let n = e.split("."), r = this.options.lang, i = 0;
			for (; i < n.length; ++i) r &&= r[n[i]];
			return typeof r == "string" ? A(r, t, this) : "";
		}
		k.compose = function(e) {
			let t = e.prototype;
			t.langFormat ||= j;
		}, k.i18nFormat = A;
		let ee = u, { doc: te } = y(), { stripHTMLTagsFromString: ne } = T;
		function M(e) {
			if (e.points && e.points.length) {
				let t = (0, v.find)(e.points, (e) => !!e.graphic);
				return t && t.graphic && t.graphic.element;
			}
		}
		function re(e) {
			let t = M(e);
			return t && t.parentNode || e.graph && e.graph.element || e.group && e.group.element;
		}
		let N = {
			fireEventOnWrappedOrUnwrappedElement: function e(t, n) {
				let r = n.type, i = t.hcEvents;
				te?.createEvent && (t.dispatchEvent || t.fireEvent) ? t.dispatchEvent ? t.dispatchEvent(n) : t.fireEvent(r, n) : i && i[r] ? (0, v.fireEvent)(t, r, n) : t.element && e(t.element, n);
			},
			getChartTitle: function(e) {
				return ne(e.options.title.text || e.langFormat("accessibility.defaultChartTitle", { chart: e }), e.renderer.forExport);
			},
			getAxisDescription: function(e) {
				return e && (e.options.accessibility?.description || e.axisTitle?.textStr || e.options.id || e.categories && e.chart.langFormat("accessibility.axis.defaultAxisNames.categories", {}) || e.dateTime && e.chart.langFormat("accessibility.axis.defaultAxisNames.time", {}) || e.chart.langFormat("accessibility.axis.defaultAxisNames.values", {}));
			},
			getAxisRangeDescription: function(e) {
				var t, n, r;
				let i, a, o, s, c, l, u, d, f, p, m, h, g = e.options || {};
				return g.accessibility && g.accessibility.rangeDescription !== void 0 ? g.accessibility.rangeDescription : e.categories ? (i = (t = e).chart, t.dataMax && t.dataMin ? i.langFormat("accessibility.axis.rangeCategories", {
					chart: i,
					axis: t,
					numCategories: t.dataMax - t.dataMin + 1
				}) : "") : e.dateTime && (e.min === 0 || e.dataMin === 0) ? (a = (n = e).chart, o = {}, s = n.dataMin || n.min || 0, c = n.dataMax || n.max || 0, l = "Seconds", o.Seconds = (c - s) / 1e3, o.Minutes = o.Seconds / 60, o.Hours = o.Minutes / 60, o.Days = o.Hours / 24, [
					"Minutes",
					"Hours",
					"Days"
				].forEach(function(e) {
					o[e] > 2 && (l = e);
				}), u = o[l].toFixed(+(l !== "Seconds" && l !== "Minutes")), a.langFormat("accessibility.axis.timeRange" + l, {
					chart: a,
					axis: n,
					range: u.replace(".0", "")
				})) : (p = (f = (d = (r = e).chart).options) && f.accessibility && f.accessibility.screenReaderSection.axisRangeDateFormat || "", m = {
					min: r.dataMin || r.min || 0,
					max: r.dataMax || r.max || 0
				}, h = function(e) {
					return r.dateTime ? d.time.dateFormat(p, m[e]) : m[e].toString();
				}, d.langFormat("accessibility.axis.rangeFromTo", {
					chart: d,
					axis: r,
					rangeFrom: h("min"),
					rangeTo: h("max")
				}));
			},
			getPointFromXY: function(e, t, n) {
				let r = e.length, i;
				for (; r--;) if (i = (0, v.find)(e[r].points || [], function(e) {
					return e.x === t && e.y === n;
				})) return i;
			},
			getSeriesFirstPointElement: M,
			getSeriesFromName: function(e, t) {
				return t ? (e.series || []).filter(function(e) {
					return e.name === t;
				}) : e.series;
			},
			getSeriesA11yElement: re,
			unhideChartElementFromAT: function e(t, n) {
				n.setAttribute("aria-hidden", !1), n !== t.renderTo && n.parentNode && n.parentNode !== te.body && (Array.prototype.forEach.call(n.parentNode.childNodes, function(e) {
					e.hasAttribute("aria-hidden") || e.setAttribute("aria-hidden", !0);
				}), e(t, n.parentNode));
			},
			hideSeriesFromAT: function(e) {
				let t = re(e);
				t && t.setAttribute("aria-hidden", !0);
			},
			scrollAxisToPoint: function(e) {
				let t = e.series.xAxis, n = e.series.yAxis, r = t && t.scrollbar ? t : n, i = r && r.scrollbar;
				if (i && (0, v.defined)(i.to) && (0, v.defined)(i.from)) {
					let t = i.to - i.from, n = function(e, t) {
						if (!(0, v.defined)(e.dataMin) || !(0, v.defined)(e.dataMax)) return 0;
						let n = e.toPixels(e.dataMin), r = e.toPixels(e.dataMax), i = e.coll === "xAxis" ? "x" : "y";
						return (e.toPixels(t[i] || 0) - n) / (r - n);
					}(r, e);
					i.updatePosition(n - t / 2, n + t / 2), (0, v.fireEvent)(i, "changed", {
						from: i.from,
						to: i.to,
						trigger: "scrollbar",
						DOMEvent: null
					});
				}
			}
		}, { doc: ie } = y(), { removeElement: P } = T, F = class {
			constructor() {
				this.elements = [];
			}
			createElement() {
				let e = ie.createElement.apply(ie, arguments);
				return this.elements.push(e), e;
			}
			removeElement(e) {
				P(e), this.elements.splice(this.elements.indexOf(e), 1);
			}
			destroyCreatedElements() {
				this.elements.forEach(function(e) {
					P(e);
				}), this.elements = [];
			}
		}, ae = class {
			constructor() {
				this.eventRemovers = [];
			}
			addEvent() {
				let e = v.addEvent.apply(y(), arguments);
				return this.eventRemovers.push({
					element: arguments[0],
					remover: e
				}), e;
			}
			removeEvent(e) {
				let t = this.eventRemovers.map((e) => e.remover).indexOf(e);
				this.eventRemovers[t].remover(), this.eventRemovers.splice(t, 1);
			}
			removeAddedEvents() {
				this.eventRemovers.map((e) => e.remover).forEach((e) => e()), this.eventRemovers = [];
			}
		}, { fireEventOnWrappedOrUnwrappedElement: oe } = N, { getFakeMouseEvent: I } = T, L = class {
			destroy() {}
			getKeyboardNavigation() {
				return [];
			}
			init() {}
			onChartRender() {}
			onChartUpdate() {}
			initBase(e, t) {
				this.chart = e, this.eventProvider = new ae(), this.domElementProvider = new F(), this.proxyProvider = t, this.keyCodes = {
					left: 37,
					right: 39,
					up: 38,
					down: 40,
					enter: 13,
					space: 32,
					esc: 27,
					tab: 9,
					pageUp: 33,
					pageDown: 34,
					end: 35,
					home: 36
				};
			}
			addEvent(e, t, n, r) {
				return this.eventProvider.addEvent(e, t, n, r);
			}
			createElement(e, t) {
				return this.domElementProvider.createElement(e, t);
			}
			fakeClickEvent(e) {
				oe(e, I("click"));
			}
			destroyBase() {
				this.domElementProvider.destroyCreatedElements(), this.eventProvider.removeAddedEvents();
			}
		}, R = class {
			constructor(e, t) {
				this.chart = e, this.keyCodeMap = t.keyCodeMap || [], this.validate = t.validate, this.init = t.init, this.terminate = t.terminate, this.response = {
					success: 1,
					prev: 2,
					next: 3,
					noHandler: 4,
					fail: 5
				};
			}
			run(e) {
				let t = e.which || e.keyCode, n = this.response.noHandler, r = (0, v.find)(this.keyCodeMap, function(e) {
					return e[0].indexOf(t) > -1;
				});
				return r ? n = r[1].call(this, t, e) : t === 9 && (n = this.response[e.shiftKey ? "prev" : "next"]), n;
			}
		}, { unhideChartElementFromAT: se, getChartTitle: ce } = N, { doc: le } = y(), { stripHTMLTagsFromString: z } = T, ue = class extends L {
			onChartUpdate() {
				this.handleSVGTitleElement(), this.setSVGContainerLabel(), this.setGraphicContainerAttrs(), this.setRenderToAttrs(), this.makeCreditsAccessible();
			}
			handleSVGTitleElement() {
				let e = this.chart, t = "highcharts-title-" + e.index, n = z(e.langFormat("accessibility.svgContainerTitle", { chartTitle: ce(e) }));
				if (n.length) {
					let r = this.svgTitleElement = this.svgTitleElement || le.createElementNS("http://www.w3.org/2000/svg", "title");
					r.textContent = n, r.id = t, e.renderTo.insertBefore(r, e.renderTo.firstChild);
				}
			}
			setSVGContainerLabel() {
				let e = this.chart, t = e.langFormat("accessibility.svgContainerLabel", { chartTitle: ce(e) });
				e.renderer.box && t.length && e.renderer.box.setAttribute("aria-label", t);
			}
			setGraphicContainerAttrs() {
				let e = this.chart, t = e.langFormat("accessibility.graphicContainerLabel", { chartTitle: ce(e) });
				t.length && e.container.setAttribute("aria-label", t);
			}
			setRenderToAttrs() {
				let e = this.chart, t = e.options.accessibility.landmarkVerbosity !== "disabled", n = e.langFormat("accessibility.chartContainerLabel", {
					title: ce(e),
					chart: e
				});
				n && (e.renderTo.setAttribute("role", t ? "region" : "group"), e.renderTo.setAttribute("aria-label", n));
			}
			makeCreditsAccessible() {
				let e = this.chart, t = e.credits;
				t && (t.textStr && t.element.setAttribute("aria-label", e.langFormat("accessibility.credits", { creditsStr: z(t.textStr, e.renderer.forExport) })), se(e, t.element));
			}
			getKeyboardNavigation() {
				let e = this.chart;
				return new R(e, {
					keyCodeMap: [],
					validate: function() {
						return !0;
					},
					init: function() {
						let t = e.accessibility;
						t && t.keyboardNavigation.tabindexContainer.focus();
					}
				});
			}
			destroy() {
				this.chart.renderTo.setAttribute("aria-hidden", !0);
			}
		};
		(function(e) {
			let t = [
				"x",
				"y",
				"transform",
				"width",
				"height",
				"r",
				"d",
				"stroke-width"
			];
			function n() {
				let e = this.focusElement, t = this.options.accessibility.keyboardNavigation.focusBorder;
				e && (e.removeFocusBorder(), t.enabled && e.addFocusBorder(t.margin, {
					stroke: t.style.color,
					strokeWidth: t.style.lineWidth,
					r: t.style.borderRadius
				}));
			}
			function r(e, t) {
				let n = this.options.accessibility.keyboardNavigation.focusBorder, r = t || e.element;
				r && r.focus && (r.hcEvents && r.hcEvents.focusin || (0, v.addEvent)(r, "focusin", function() {}), r.focus(), n.hideBrowserFocusOutline && (r.style.outline = "none")), this.focusElement && this.focusElement.removeFocusBorder(), this.focusElement = e, (0, v.addEvent)(this, "endResize", function() {
					this.renderFocusBorder();
				}), this.renderFocusBorder();
			}
			function i(e, n) {
				this.focusBorder && this.removeFocusBorder();
				let r = this.getBBox(), i = (0, v.pick)(e, 3), a = this.parentGroup, o = this.scaleX || a && a.scaleX, s = this.scaleY || a && a.scaleY, c = (o ? !s : s) ? Math.abs(o || s || 1) : (Math.abs(o || 1) + Math.abs(s || 1)) / 2, l = this.renderer.fontMetrics(this).h;
				r.x += this.translateX ? this.translateX : 0, r.y += this.translateY ? this.translateY : 0;
				let u = r.x - i, d = r.y - i, f = r.width + 2 * i, p = r.height + 2 * i, m = !!this.text;
				if (this.element.nodeName === "text" || m) {
					let e, t, n = !!this.rotation, a = m ? {
						x: +!!n,
						y: 0
					} : (e = 0, t = 0, this.attr("text-anchor") === "middle" ? e = t = .5 : this.rotation ? e = .25 : t = .75, {
						x: e,
						y: t
					}), o = +this.attr("x"), s = +this.attr("y");
					if (isNaN(o) || (u = o - r.width * a.x - i), isNaN(s) || (d = s - (this.attr("text-anchor") === "start" ? l : r.height) * a.y - i), m && n) {
						let e = f;
						f = p, p = e, isNaN(o) || (u = o - r.height * a.x - i), isNaN(s) || (d = s - r.width * a.y - i);
					}
				}
				this.focusBorder = this.renderer.rect(u, d, f, p, parseInt((n && n.r || 0).toString(), 10) / c).addClass("highcharts-focus-border").attr({ zIndex: 99 }).add(a), this.renderer.styledMode || this.focusBorder.attr({
					stroke: n && n.stroke,
					"stroke-width": (n && n.strokeWidth || 0) / c
				}), function(e, ...n) {
					e.focusBorderUpdateHooks || (e.focusBorderUpdateHooks = {}, t.forEach((t) => {
						let r = t + "Setter", i = e[r] || e._defaultSetter;
						e.focusBorderUpdateHooks[r] = i, e[r] = function() {
							let t = i.apply(e, arguments);
							return e.addFocusBorder.apply(e, n), t;
						};
					}));
				}(this, e, n), function(e) {
					if (e.focusBorderDestroyHook) return;
					let t = e.destroy;
					e.destroy = function() {
						return e.focusBorder && e.focusBorder.destroy && e.focusBorder.destroy(), t.apply(e, arguments);
					}, e.focusBorderDestroyHook = t;
				}(this);
			}
			function a() {
				var e = this;
				e.focusBorderUpdateHooks && (Object.keys(e.focusBorderUpdateHooks).forEach((t) => {
					let n = e.focusBorderUpdateHooks[t];
					n === e._defaultSetter ? delete e[t] : e[t] = n;
				}), delete e.focusBorderUpdateHooks), this.focusBorderDestroyHook && (this.destroy = this.focusBorderDestroyHook, delete this.focusBorderDestroyHook), this.focusBorder && (this.focusBorder.destroy(), delete this.focusBorder);
			}
			e.compose = function(e, t) {
				let o = e.prototype, s = t.prototype;
				o.renderFocusBorder || (o.renderFocusBorder = n, o.setFocusToElement = r), s.addFocusBorder || (s.addFocusBorder = i, s.removeFocusBorder = a);
			};
		})(d ||= {});
		let B = d;
		var de = g(660), fe = g.n(de);
		let { doc: pe } = y(), { addClass: me, visuallyHideElement: he } = T, ge = class {
			constructor(e, t) {
				this.chart = e, this.domElementProvider = new F(), this.announceRegion = this.addAnnounceRegion(t);
			}
			destroy() {
				this.domElementProvider.destroyCreatedElements();
			}
			announce(e) {
				fe().setElementHTML(this.announceRegion, e), this.clearAnnouncementRegionTimer && (0, v.internalClearTimeout)(this.clearAnnouncementRegionTimer), this.clearAnnouncementRegionTimer = setTimeout(() => {
					this.announceRegion.innerHTML = fe().emptyHTML, delete this.clearAnnouncementRegionTimer;
				}, 3e3);
			}
			addAnnounceRegion(e) {
				let t = this.chart.announcerContainer || this.createAnnouncerContainer(), n = this.domElementProvider.createElement("div");
				return (0, v.attr)(n, {
					"aria-hidden": !1,
					"aria-live": e,
					"aria-atomic": !0
				}), he(n), this.chart.styledMode && me(n, "highcharts-visually-hidden"), t.appendChild(n), n;
			}
			createAnnouncerContainer() {
				let e = this.chart, t = pe.createElement("div");
				return (0, v.attr)(t, {
					"aria-hidden": !1,
					class: "highcharts-announcer-container"
				}), he(t), e.renderTo.insertBefore(t, e.renderTo.firstChild), e.announcerContainer = t, t;
			}
		}, { escapeStringForHTML: _e, stripHTMLTagsFromString: ve } = T;
		function ye(e) {
			return (e.annotations || []).reduce((e, t) => (t.options && !1 !== t.options.visible && (e = e.concat(t.labels)), e), []);
		}
		function V(e) {
			return e.options && e.options.accessibility && e.options.accessibility.description || e.graphic && e.graphic.text && e.graphic.text.textStr || "";
		}
		function H(e) {
			let t = e.options && e.options.accessibility && e.options.accessibility.description;
			if (t) return t;
			let n = e.chart, r = V(e), i = e.points.filter((e) => !!e.graphic).map((e) => {
				let t = e.accessibility && e.accessibility.valueDescription || e.graphic && e.graphic.element && e.graphic.element.getAttribute("aria-label") || "", n = e && e.series.name || "";
				return (n ? n + ", " : "") + "data point " + t;
			}).filter((e) => !!e), a = i.length, o = a > 1 ? "MultiplePoints" : a ? "SinglePoint" : "NoPoints", s = {
				annotationText: r,
				annotation: e,
				numPoints: a,
				annotationPoint: i[0],
				additionalAnnotationPoints: i.slice(1)
			};
			return n.langFormat("accessibility.screenReaderSection.annotations.description" + o, s);
		}
		function U(e) {
			return ye(e).map((t) => {
				let n = _e(ve(H(t), e.renderer.forExport));
				return n ? `<li>${n}</li>` : "";
			});
		}
		let be = {
			getAnnotationsInfoHTML: function(e) {
				let t = e.annotations;
				return t && t.length ? `<ul style="list-style-type: none">${U(e).join(" ")}</ul>` : "";
			},
			getAnnotationLabelDescription: H,
			getAnnotationListItems: U,
			getPointAnnotationTexts: function(e) {
				let t = ye(e.series.chart).filter((t) => t.points.indexOf(e) > -1);
				return t.length ? t.map((e) => `${V(e)}`) : [];
			}
		}, { getAnnotationsInfoHTML: W } = be, { getAxisDescription: G, getAxisRangeDescription: xe, getChartTitle: K, unhideChartElementFromAT: Se } = N, { format: Ce } = D(), { doc: q } = y(), { addClass: J, getElement: we, getHeadingTagNameForElement: Te, stripHTMLTagsFromString: Ee, visuallyHideElement: De } = T;
		function Oe(e) {
			return (0, v.replaceNested)(e, [/<([\w\-.:!]+)\b[^<>]*>\s*<\/\1>/g, ""]);
		}
		let ke = class extends L {
			constructor() {
				super(...arguments), this.screenReaderSections = {};
			}
			init() {
				let e = this.chart, t = this;
				this.initRegionsDefinitions(), this.addEvent(e, "afterGetTableAST", function(e) {
					t.onDataTableCreated(e);
				}), this.addEvent(e, "afterViewData", function(e) {
					e.wasHidden && (t.dataTableDiv = e.element, setTimeout(function() {
						t.focusDataTable();
					}, 300));
				}), this.addEvent(e, "afterHideData", function() {
					t.viewDataTableButton && t.viewDataTableButton.setAttribute("aria-expanded", "false");
				}), e.exporting && this.addEvent(e, "afterPrint", function() {
					t.updateAllScreenReaderSections();
				}), this.announcer = new ge(e, "assertive");
			}
			initRegionsDefinitions() {
				let e = this, t = this.chart.options.accessibility;
				this.screenReaderSections = {
					before: {
						element: null,
						buildContent: function(n) {
							let r = t.screenReaderSection.beforeChartFormatter;
							return r ? r(n, e) : e.defaultBeforeChartFormatter();
						},
						insertIntoDOM: function(e, t) {
							t.renderTo.insertBefore(e, t.renderTo.firstChild);
						},
						afterInserted: function() {
							e.sonifyButtonId !== void 0 && e.initSonifyButton(e.sonifyButtonId), e.dataTableButtonId !== void 0 && e.initDataTableButton(e.dataTableButtonId);
						}
					},
					after: {
						element: null,
						buildContent: function(n) {
							let r = t.screenReaderSection.afterChartFormatter;
							return r ? r(n, e) : e.defaultAfterChartFormatter();
						},
						insertIntoDOM: function(e, t) {
							t.renderTo.insertBefore(e, t.container.nextSibling);
						},
						afterInserted: function() {
							e.chart.accessibility && t.keyboardNavigation.enabled && e.chart.accessibility.keyboardNavigation.updateExitAnchor();
						}
					}
				};
			}
			onChartRender() {
				this.linkedDescriptionElement = this.getLinkedDescriptionElement(), this.setLinkedDescriptionAttrs(), this.updateAllScreenReaderSections();
			}
			updateAllScreenReaderSections() {
				let e = this;
				Object.keys(this.screenReaderSections).forEach(function(t) {
					e.updateScreenReaderSection(t);
				});
			}
			getLinkedDescriptionElement() {
				let e = this.chart.options.accessibility.linkedDescription;
				if (!e) return;
				if (typeof e != "string") return e;
				let t = Ce(e, this.chart), n = q.querySelectorAll(t);
				if (n.length === 1) return n[0];
			}
			setLinkedDescriptionAttrs() {
				let e = this.linkedDescriptionElement;
				e && (e.setAttribute("aria-hidden", "true"), J(e, "highcharts-linked-description"));
			}
			updateScreenReaderSection(e) {
				let t = this.chart, n = this.screenReaderSections[e], r = n.buildContent(t), i = n.element = n.element || this.createElement("div"), a = i.firstChild || this.createElement("div");
				r ? (this.setScreenReaderSectionAttribs(i, e), fe().setElementHTML(a, r), i.appendChild(a), n.insertIntoDOM(i, t), De(a), t.styledMode && J(a, "highcharts-visually-hidden"), Se(t, a), n.afterInserted && n.afterInserted()) : (i.parentNode && i.parentNode.removeChild(i), n.element = null);
			}
			setScreenReaderSectionAttribs(e, t) {
				let n = this.chart, r = n.langFormat("accessibility.screenReaderSection." + t + "RegionLabel", {
					chart: n,
					chartTitle: K(n)
				}), i = `highcharts-screen-reader-region-${t}-${n.index}`;
				(0, v.attr)(e, {
					id: i,
					"aria-label": r || void 0
				}), e.style.position = "relative", r && e.setAttribute("role", n.options.accessibility.landmarkVerbosity === "all" ? "region" : "group");
			}
			defaultBeforeChartFormatter() {
				let e = this.chart, t = e.options.accessibility.screenReaderSection.beforeChartFormat;
				if (!t) return "";
				let n = this.getAxesDescription(), r = e.sonify && e.options.sonification && e.options.sonification.enabled, i = "highcharts-a11y-sonify-data-btn-" + e.index, a = "hc-linkto-highcharts-data-table-" + e.index, o = W(e), s = e.langFormat("accessibility.screenReaderSection.annotations.heading", { chart: e }), c = {
					headingTagName: Te(e.renderTo),
					chartTitle: K(e),
					typeDescription: this.getTypeDescriptionText(),
					chartSubtitle: this.getSubtitleText(),
					chartLongdesc: this.getLongdescText(),
					xAxisDescription: n.xAxis,
					yAxisDescription: n.yAxis,
					playAsSoundButton: r ? this.getSonifyButtonText(i) : "",
					viewTableButton: e.exporting?.getCSV ? this.getDataTableButtonText(a) : "",
					annotationsTitle: o ? s : "",
					annotationsList: o
				}, l = ee.i18nFormat(t, c, e);
				return this.dataTableButtonId = a, this.sonifyButtonId = i, Oe(l);
			}
			defaultAfterChartFormatter() {
				let e = this.chart, t = e.options.accessibility.screenReaderSection.afterChartFormat;
				if (!t) return "";
				let n = { endOfChartMarker: this.getEndOfChartMarkerText() };
				return Oe(ee.i18nFormat(t, n, e));
			}
			getLinkedDescription() {
				let e = this.linkedDescriptionElement;
				return Ee(e && e.innerHTML || "", this.chart.renderer.forExport);
			}
			getLongdescText() {
				let e = this.chart.options, t = e.caption, n = t && t.text, r = this.getLinkedDescription();
				return e.accessibility.description || r || n || "";
			}
			getTypeDescriptionText() {
				let e = this.chart;
				return e.types ? e.options.accessibility.typeDescription || function(e, t) {
					let n, r, i, a = t[0], o = e.series && e.series[0] || {}, s = e.mapView && e.mapView.geoMap && e.mapView.geoMap.title, c = {
						numSeries: e.series.length,
						numPoints: o.points && o.points.length,
						chart: e,
						mapTitle: s
					};
					return a ? a === "map" || a === "tiledwebmap" ? c.mapTitle ? e.langFormat("accessibility.chartTypes.mapTypeDescription", c) : e.langFormat("accessibility.chartTypes.unknownMap", c) : e.types.length > 1 ? e.langFormat("accessibility.chartTypes.combinationChart", c) : (n = t[0], r = e.langFormat("accessibility.seriesTypeDescriptions." + n, c), i = e.series && e.series.length < 2 ? "Single" : "Multiple", (e.langFormat("accessibility.chartTypes." + n + i, c) || e.langFormat("accessibility.chartTypes.default" + i, c)) + (r ? " " + r : "")) : e.langFormat("accessibility.chartTypes.emptyChart", c);
				}(e, e.types) : "";
			}
			getDataTableButtonText(e) {
				let t = this.chart;
				return "<button id=\"" + e + "\">" + t.langFormat("accessibility.table.viewAsDataTableButtonText", {
					chart: t,
					chartTitle: K(t)
				}) + "</button>";
			}
			getSonifyButtonText(e) {
				let t = this.chart;
				return t.options.sonification && !1 === t.options.sonification.enabled ? "" : "<button id=\"" + e + "\">" + t.langFormat("accessibility.sonification.playAsSoundButtonText", {
					chart: t,
					chartTitle: K(t)
				}) + "</button>";
			}
			getSubtitleText() {
				let e = this.chart.options.subtitle;
				return Ee(e && e.text || "", this.chart.renderer.forExport);
			}
			getEndOfChartMarkerText() {
				let e = we(`highcharts-end-of-chart-marker-${this.chart.index}`);
				if (e) return e.outerHTML;
				let t = this.chart, n = t.langFormat("accessibility.screenReaderSection.endOfChartMarker", { chart: t });
				return "<div id=\"highcharts-end-of-chart-marker-" + t.index + "\">" + n + "</div>";
			}
			onDataTableCreated(e) {
				let t = this.chart;
				if (t.options.accessibility.enabled) {
					this.viewDataTableButton && this.viewDataTableButton.setAttribute("aria-expanded", "true");
					let n = e.tree.attributes || {};
					n.tabindex = -1, n.summary = t.langFormat("accessibility.table.tableSummary", { chart: t }), e.tree.attributes = n;
				}
			}
			focusDataTable() {
				let e = this.dataTableDiv, t = e && e.getElementsByTagName("table")[0];
				t && t.focus && t.focus();
			}
			initSonifyButton(e) {
				let t = this.sonifyButton = we(e), n = this.chart, r = (e) => {
					t && (t.setAttribute("aria-hidden", "true"), t.setAttribute("aria-label", "")), e.preventDefault(), e.stopPropagation();
					let r = n.langFormat("accessibility.sonification.playAsSoundClickAnnouncement", { chart: n });
					this.announcer.announce(r), setTimeout(() => {
						t && (t.removeAttribute("aria-hidden"), t.removeAttribute("aria-label")), n.sonify && n.sonify();
					}, 1e3);
				};
				t && n && (t.setAttribute("tabindex", -1), t.onclick = function(e) {
					(n.options.accessibility && n.options.accessibility.screenReaderSection.onPlayAsSoundClick || r).call(this, e, n, this);
				});
			}
			initDataTableButton(e) {
				let t = this.viewDataTableButton = we(e), n = this.chart, r = e.replace("hc-linkto-", "");
				t && ((0, v.attr)(t, {
					tabindex: -1,
					"aria-expanded": !!we(r)
				}), t.onclick = n.options.accessibility.screenReaderSection.onViewDataTableClick || function() {
					n.exporting?.viewData();
				});
			}
			getAxesDescription() {
				let e = this.chart, t = function(t, n) {
					let r = e[t];
					return r.length > 1 || r[0] && (0, v.pick)(r[0].options.accessibility && r[0].options.accessibility.enabled, n);
				}, n = !!e.types && 0 > e.types.indexOf("map") && 0 > e.types.indexOf("treemap") && 0 > e.types.indexOf("tilemap"), r = !!e.hasCartesianSeries, i = t("xAxis", !e.angular && r && n), a = t("yAxis", r && n), o = {};
				return i && (o.xAxis = this.getAxisDescriptionText("xAxis")), a && (o.yAxis = this.getAxisDescriptionText("yAxis")), o;
			}
			getAxisDescriptionText(e) {
				let t = this.chart, n = t[e];
				return t.langFormat("accessibility.axis." + e + "Description" + (n.length > 1 ? "Plural" : "Singular"), {
					chart: t,
					names: n.map(function(e) {
						return G(e);
					}),
					ranges: n.map(function(e) {
						return xe(e);
					}),
					numAxes: n.length
				});
			}
			destroy() {
				this.announcer && this.announcer.destroy();
			}
		}, { getChartTitle: Ae, unhideChartElementFromAT: je } = N, { getFakeMouseEvent: Me } = T;
		function Ne(e) {
			return e.exporting?.svgElements?.[0];
		}
		class Y extends L {
			init() {
				let e = this.chart, t = this;
				this.addEvent(e, "exportMenuShown", function() {
					t.onMenuShown();
				}), this.addEvent(e, "exportMenuHidden", function() {
					t.onMenuHidden();
				}), this.createProxyGroup();
			}
			onMenuHidden() {
				let e = this.chart.exporting?.contextMenuEl;
				e && e.setAttribute("aria-hidden", "true"), this.setExportButtonExpandedState("false");
			}
			onMenuShown() {
				let e = this.chart, t = e.exporting?.contextMenuEl;
				t && (this.addAccessibleContextMenuAttribs(), je(e, t)), this.setExportButtonExpandedState("true");
			}
			setExportButtonExpandedState(e) {
				this.exportButtonProxy && this.exportButtonProxy.innerElement.setAttribute("aria-expanded", e);
			}
			onChartRender() {
				let e = this.chart, t = e.focusElement, n = e.accessibility;
				this.proxyProvider.clearGroup("chartMenu"), this.proxyMenuButton(), this.exportButtonProxy && t && t === e.exporting?.group && (t.focusBorder ? e.setFocusToElement(t, this.exportButtonProxy.innerElement) : n && n.keyboardNavigation.tabindexContainer.focus());
			}
			proxyMenuButton() {
				let e, t, n = this.chart, r = this.proxyProvider, i = Ne(n);
				e = n.options.exporting, t = Ne(n), e && !1 !== e.enabled && e.accessibility && e.accessibility.enabled && t && t.element && i && (this.exportButtonProxy = r.addProxyElement("chartMenu", { click: i }, "button", {
					"aria-label": n.langFormat("accessibility.exporting.menuButtonLabel", {
						chart: n,
						chartTitle: Ae(n)
					}),
					"aria-expanded": !1,
					title: n.options.lang.contextButtonTitle || null
				}));
			}
			createProxyGroup() {
				this.chart && this.proxyProvider && this.proxyProvider.addGroup("chartMenu");
			}
			addAccessibleContextMenuAttribs() {
				let e = this.chart, t = e.exporting?.divElements;
				if (t && t.length) {
					t.forEach((e) => {
						e && (e.tagName !== "LI" || e.children && e.children.length ? e.setAttribute("aria-hidden", "true") : e.setAttribute("tabindex", -1));
					});
					let n = t[0] && t[0].parentNode;
					n && (0, v.attr)(n, {
						"aria-hidden": void 0,
						"aria-label": e.langFormat("accessibility.exporting.chartMenuLabel", { chart: e }),
						role: "list"
					});
				}
			}
			getKeyboardNavigation() {
				let e = this.keyCodes, t = this.chart, n = this;
				return new R(t, {
					keyCodeMap: [
						[[e.left, e.up], function() {
							return n.onKbdPrevious(this);
						}],
						[[e.right, e.down], function() {
							return n.onKbdNext(this);
						}],
						[[e.enter, e.space], function() {
							return n.onKbdClick(this);
						}]
					],
					validate: function() {
						return !!t.exporting && t.options.exporting?.buttons?.contextButton.enabled !== !1 && !1 !== t.options.exporting.enabled && !1 !== (t.options.exporting.accessibility?.enabled || !1);
					},
					init: function() {
						let e = n.exportButtonProxy, r = n.chart.exporting?.group;
						e && r && t.setFocusToElement(r, e.innerElement);
					},
					terminate: function() {
						t.hideExportMenu();
					}
				});
			}
			onKbdPrevious(e) {
				let t = this.chart, n = t.options.accessibility, r = e.response, i = t.highlightedExportItemIx || 0;
				for (; i--;) if (t.highlightExportItem(i)) return r.success;
				return n.keyboardNavigation.wrapAround ? (t.highlightLastExportItem(), r.success) : r.prev;
			}
			onKbdNext(e) {
				let t = this.chart, n = t.options.accessibility, r = e.response;
				for (let e = (t.highlightedExportItemIx || 0) + 1; e < (t.exporting?.divElements?.length || 0); ++e) if (t.highlightExportItem(e)) return r.success;
				return n.keyboardNavigation.wrapAround ? (t.highlightExportItem(0), r.success) : r.next;
			}
			onKbdClick(e) {
				let t = this.chart, n = t.highlightedExportItemIx !== void 0 && t.exporting?.divElements?.[t.highlightedExportItemIx], r = Ne(t)?.element;
				return t.exporting?.openMenu ? n && this.fakeClickEvent(n) : (r && this.fakeClickEvent(r), t.highlightExportItem(0)), e.response.success;
			}
		}
		(function(e) {
			function t() {
				let e = Ne(this);
				if (e) {
					let t = e.element;
					t.onclick &&= function() {
						Me("click");
					};
				}
			}
			function n() {
				let e = this.exporting?.divElements;
				e && this.exporting?.contextMenuEl && this.exporting?.openMenu && (e.forEach((e) => {
					e && e.className === "highcharts-menu-item" && e.onmouseout && e.onmouseout(Me("mouseout"));
				}), this.highlightedExportItemIx = 0, this.exporting.contextMenuEl.hideMenu(), this.container.focus());
			}
			function r(e) {
				let t = this.exporting?.divElements?.[e], n = this.highlightedExportItemIx !== void 0 && this.exporting?.divElements?.[this.highlightedExportItemIx];
				if (t && t.tagName === "LI" && !(t.children && t.children.length)) {
					let r = !!(this.renderTo.getElementsByTagName("g")[0] || {}).focus;
					return t.focus && r && t.focus(), n && n.onmouseout && n.onmouseout(Me("mouseout")), t.onmouseover && t.onmouseover(Me("mouseover")), this.highlightedExportItemIx = e, !0;
				}
				return !1;
			}
			function i() {
				if (this.exporting?.divElements) {
					let e = this.exporting?.divElements.length;
					for (; e--;) if (this.highlightExportItem(e)) return !0;
				}
				return !1;
			}
			e.compose = function(e) {
				let a = e.prototype;
				a.hideExportMenu || (a.hideExportMenu = n, a.highlightExportItem = r, a.highlightLastExportItem = i, a.showExportMenu = t);
			};
		})(Y ||= {});
		let Pe = Y, { doc: X, win: Fe } = y(), { getElement: Ie, simulatedEventTarget: Le } = T;
		class Re {
			constructor(e, t) {
				this.currentModuleIx = NaN, this.modules = [], this.init(e, t);
			}
			init(e, t) {
				let n = this.eventProvider = new ae();
				this.chart = e, this.components = t, this.modules = [], this.currentModuleIx = 0, this.update(), n.addEvent(this.tabindexContainer, "keydown", (e) => this.onKeydown(e)), n.addEvent(this.tabindexContainer, "focus", (e) => this.onFocus(e)), ["mouseup", "touchend"].forEach((e) => n.addEvent(X, e, (e) => this.onMouseUp(e))), ["mousedown", "touchstart"].forEach((t) => n.addEvent(e.renderTo, t, () => {
					this.isClickingChart = !0;
				}));
			}
			update(e) {
				let t = this.chart.options.accessibility, n = t && t.keyboardNavigation, r = this.components;
				this.updateContainerTabindex(), n && n.enabled && e && e.length ? (this.modules = e.reduce(function(e, t) {
					let n = r[t].getKeyboardNavigation();
					return e.concat(n);
				}, []), this.updateExitAnchor()) : (this.modules = [], this.currentModuleIx = 0, this.removeExitAnchor());
			}
			updateExitAnchor() {
				let e = Ie(`highcharts-end-of-chart-marker-${this.chart.index}`);
				this.removeExitAnchor(), e ? (this.makeElementAnExitAnchor(e), this.exitAnchor = e) : this.createExitAnchor();
			}
			move(e) {
				let t = this.modules && this.modules[this.currentModuleIx];
				t && t.terminate && t.terminate(e), this.chart.focusElement && this.chart.focusElement.removeFocusBorder(), this.currentModuleIx += e;
				let n = this.modules && this.modules[this.currentModuleIx];
				if (n) {
					if (n.validate && !n.validate()) return this.move(e);
					if (n.init) return n.init(e), !0;
				}
				return this.currentModuleIx = 0, this.exiting = !0, e > 0 ? this.exitAnchor && this.exitAnchor.focus() : this.tabindexContainer.focus(), !1;
			}
			onFocus(e) {
				let t = this.chart, n = e.relatedTarget && t.container.contains(e.relatedTarget), r = t.options.accessibility, i = r && r.keyboardNavigation;
				if (i && i.enabled && !this.exiting && !this.tabbingInBackwards && !this.isClickingChart && !n) {
					let e = this.getFirstValidModuleIx();
					e !== null && (this.currentModuleIx = e, this.modules[e].init(1));
				}
				this.keyboardReset = !1, this.exiting = !1;
			}
			onMouseUp(e) {
				if (delete this.isClickingChart, !this.keyboardReset && e.relatedTarget !== Le) {
					let t = this.chart;
					if (!e.target || !t.container.contains(e.target)) {
						let e = this.modules && this.modules[this.currentModuleIx || 0];
						e && e.terminate && e.terminate(), this.currentModuleIx = 0;
					}
					t.focusElement && (t.focusElement.removeFocusBorder(), delete t.focusElement), this.keyboardReset = !0;
				}
			}
			onKeydown(e) {
				let t, n = e || Fe.event, r = this.modules && this.modules.length && this.modules[this.currentModuleIx], i = n.target;
				if ((!i || i.nodeName !== "INPUT" || i.classList.contains("highcharts-a11y-proxy-element")) && (this.keyboardReset = !1, this.exiting = !1, r)) {
					let e = r.run(n);
					e === r.response.success ? t = !0 : e === r.response.prev ? t = this.move(-1) : e === r.response.next && (t = this.move(1)), t && (n.preventDefault(), n.stopPropagation());
				}
			}
			updateContainerTabindex() {
				let e, t = this.chart.options.accessibility, n = t && t.keyboardNavigation, r = !(n && !1 === n.enabled), i = this.chart, a = i.container;
				i.renderTo.hasAttribute("tabindex") ? (a.removeAttribute("tabindex"), e = i.renderTo) : e = a, this.tabindexContainer = e;
				let o = e.getAttribute("tabindex");
				r && !o ? e.setAttribute("tabindex", "0") : r || i.container.removeAttribute("tabindex");
			}
			createExitAnchor() {
				let e = this.chart, t = this.exitAnchor = X.createElement("div");
				e.renderTo.appendChild(t), this.makeElementAnExitAnchor(t);
			}
			makeElementAnExitAnchor(e) {
				let t = this.tabindexContainer.getAttribute("tabindex") || 0;
				e.setAttribute("class", "highcharts-exit-anchor"), e.setAttribute("tabindex", t), e.setAttribute("aria-hidden", !1), this.addExitAnchorEventsToEl(e);
			}
			removeExitAnchor() {
				if (this.exitAnchor) {
					let e = this.eventProvider.eventRemovers.find((e) => e.element === this.exitAnchor);
					e && (0, v.defined)(e.remover) && this.eventProvider.removeEvent(e.remover), this.exitAnchor.parentNode && this.exitAnchor.parentNode.removeChild(this.exitAnchor), delete this.exitAnchor;
				}
			}
			addExitAnchorEventsToEl(e) {
				let t = this.chart, n = this;
				this.eventProvider.addEvent(e, "focus", function(e) {
					let r = e || Fe.event, i = !(r.relatedTarget && t.container.contains(r.relatedTarget) || n.exiting);
					if (t.focusElement && delete t.focusElement, i) {
						if (n.tabbingInBackwards = !0, n.tabindexContainer.focus(), delete n.tabbingInBackwards, r.preventDefault(), n.modules && n.modules.length) {
							n.currentModuleIx = n.modules.length - 1;
							let e = n.modules[n.currentModuleIx];
							e && e.validate && !e.validate() ? n.move(-1) : e && e.init(-1);
						}
					} else n.exiting = !1;
				});
			}
			getFirstValidModuleIx() {
				let e = this.modules.length;
				for (let t = 0; t < e; ++t) {
					let e = this.modules[t];
					if (!e.validate || e.validate()) return t;
				}
				return null;
			}
			destroy() {
				this.removeExitAnchor(), this.eventProvider.removeAddedEvents(), this.chart.container.removeAttribute("tabindex");
			}
		}
		function ze() {
			let e = this;
			(0, v.fireEvent)(this, "dismissPopupContent", {}, function() {
				e.tooltip && e.tooltip.hide(0), e.hideExportMenu();
			});
		}
		function Be(e) {
			(e.which || e.keyCode) === 27 && y().charts && y().charts.forEach((e) => {
				e && e.dismissPopupContent && e.dismissPopupContent();
			});
		}
		(Re ||= {}).compose = function(e) {
			Pe.compose(e);
			let t = e.prototype;
			return !t.dismissPopupContent && (t.dismissPopupContent = ze, X && (0, v.addEvent)(X, "keydown", Be)), e;
		};
		let Ve = Re;
		var He = g(632), Ue = g.n(He);
		let { animObject: We } = y(), { doc: Ge } = y(), { getChartTitle: Ke } = N, { stripHTMLTagsFromString: qe, addClass: Z, removeClass: Je } = T;
		function Ye(e) {
			let t = e.legend && e.legend.allItems, n = e.options.legend.accessibility || {}, r = e.colorAxis && e.colorAxis.some((e) => !e.dataClasses || !e.dataClasses.length);
			return !!(t && t.length && !r && !1 !== n.enabled);
		}
		function Xe(e, t) {
			let n = t.legendItem || {};
			for (let r of (t.setState(e ? "hover" : "", !0), [
				"group",
				"label",
				"symbol"
			])) {
				let t = n[r], i = t && t.element || t;
				i && (0, v.fireEvent)(i, e ? "mouseover" : "mouseout");
			}
		}
		class Ze extends L {
			constructor() {
				super(...arguments), this.highlightedLegendItemIx = NaN, this.proxyGroup = null;
			}
			init() {
				let e = this;
				this.recreateProxies(), this.addEvent(Ue(), "afterScroll", function() {
					this.chart === e.chart && (e.proxyProvider.updateGroupProxyElementPositions("legend"), e.updateLegendItemProxyVisibility(), e.highlightedLegendItemIx > -1 && this.chart.highlightLegendItem(e.highlightedLegendItemIx));
				}), this.addEvent(Ue(), "afterPositionItem", function(t) {
					this.chart === e.chart && this.chart.renderer && e.updateProxyPositionForItem(t.item);
				}), this.addEvent(Ue(), "afterRender", function() {
					this.chart === e.chart && this.chart.renderer && e.recreateProxies() && (0, v.syncTimeout)(() => e.proxyProvider.updateGroupProxyElementPositions("legend"), We((0, v.pick)(this.chart.renderer.globalAnimation, !0)).duration);
				});
			}
			updateLegendItemProxyVisibility() {
				let e, t = this.chart, n = t.legend, r = n.allItems || [], i = n.currentPage || 1, a = n.clipHeight || 0;
				r.forEach((r) => {
					if (r.a11yProxyElement) {
						let o = n.pages && n.pages.length, s = r.a11yProxyElement.element, c = !1;
						if (e = r.legendItem || {}, o) {
							let t = e.pageIx || 0;
							c = (e.y || 0) + (e.label ? Math.round(e.label.getBBox().height) : 0) - n.pages[t] > a || t !== i - 1;
						}
						c ? t.styledMode ? Z(s, "highcharts-a11y-invisible") : s.style.visibility = "hidden" : (Je(s, "highcharts-a11y-invisible"), s.style.visibility = "");
					}
				});
			}
			onChartRender() {
				Ye(this.chart) || this.removeProxies();
			}
			highlightAdjacentLegendPage(e) {
				let t = this.chart, n = t.legend, r = (n.currentPage || 1) + e, i = n.pages || [];
				if (r > 0 && r <= i.length) {
					let e = 0;
					for (let i of n.allItems) ((i.legendItem || {}).pageIx || 0) + 1 === r && t.highlightLegendItem(e) && (this.highlightedLegendItemIx = e), ++e;
				}
			}
			updateProxyPositionForItem(e) {
				e.a11yProxyElement && e.a11yProxyElement.refreshPosition();
			}
			recreateProxies() {
				let e = Ge.activeElement, t = this.proxyGroup, n = e && t && t.contains(e);
				return this.removeProxies(), !!Ye(this.chart) && (this.addLegendProxyGroup(), this.proxyLegendItems(), this.updateLegendItemProxyVisibility(), this.updateLegendTitle(), n && this.chart.highlightLegendItem(this.highlightedLegendItemIx), !0);
			}
			removeProxies() {
				this.proxyProvider.removeGroup("legend");
			}
			updateLegendTitle() {
				let e = this.chart, t = qe((e.legend && e.legend.options.title && e.legend.options.title.text || "").replace(/<br ?\/?>/g, " "), e.renderer.forExport), n = e.langFormat("accessibility.legend.legendLabel" + (t ? "" : "NoTitle"), {
					chart: e,
					legendTitle: t,
					chartTitle: Ke(e)
				});
				this.proxyProvider.updateGroupAttrs("legend", { "aria-label": n });
			}
			addLegendProxyGroup() {
				let e = this.chart.options.accessibility.landmarkVerbosity === "all" ? "region" : null;
				this.proxyGroup = this.proxyProvider.addGroup("legend", "ul", {
					"aria-label": "_placeholder_",
					role: e
				});
			}
			proxyLegendItems() {
				let e, t = this;
				((this.chart.legend || {}).allItems || []).forEach((n) => {
					(e = n.legendItem || {}).label && e.label.element && t.proxyLegendItem(n);
				});
			}
			proxyLegendItem(e) {
				let t = e.legendItem || {}, n = e.legendItem?.label, r = n?.element, i = t.label?.styles?.textOverflow === "ellipsis";
				if (!t.label || !t.group) return;
				let a = this.chart.langFormat("accessibility.legend.legendItem", {
					chart: this.chart,
					itemName: qe(e.name, this.chart.renderer.forExport),
					item: e
				}), o = {
					tabindex: -1,
					"aria-pressed": e.visible,
					"aria-label": a,
					title: ""
				};
				i && (r.textContent || "").indexOf("…") !== -1 && (o.title = n?.textStr);
				let s = t.group.div ? t.label : t.group;
				e.a11yProxyElement = this.proxyProvider.addProxyElement("legend", {
					click: t.label,
					visual: s.element
				}, "button", o);
			}
			getKeyboardNavigation() {
				let e = this.keyCodes, t = this, n = this.chart;
				return new R(n, {
					keyCodeMap: [
						[[
							e.left,
							e.right,
							e.up,
							e.down
						], function(e) {
							return t.onKbdArrowKey(this, e);
						}],
						[[e.enter, e.space], function() {
							return t.onKbdClick(this);
						}],
						[[e.pageDown, e.pageUp], function(n) {
							let r = n === e.pageDown ? 1 : -1;
							return t.highlightAdjacentLegendPage(r), this.response.success;
						}]
					],
					validate: function() {
						return t.shouldHaveLegendNavigation();
					},
					init: function() {
						n.highlightLegendItem(0), t.highlightedLegendItemIx = 0;
					},
					terminate: function() {
						t.highlightedLegendItemIx = -1, n.legend.allItems.forEach((e) => Xe(!1, e));
					}
				});
			}
			onKbdArrowKey(e, t) {
				let { keyCodes: { left: n, up: r }, highlightedLegendItemIx: i, chart: a } = this, o = a.legend.allItems.length, s = a.options.accessibility.keyboardNavigation.wrapAround, c = t === n || t === r ? -1 : 1;
				return a.highlightLegendItem(i + c) ? this.highlightedLegendItemIx += c : s && o > 1 && (this.highlightedLegendItemIx = c > 0 ? 0 : o - 1, a.highlightLegendItem(this.highlightedLegendItemIx)), e.response.success;
			}
			onKbdClick(e) {
				let t = this.chart.legend.allItems[this.highlightedLegendItemIx];
				return t && t.a11yProxyElement && t.a11yProxyElement.click(), e.response.success;
			}
			shouldHaveLegendNavigation() {
				if (!Ye(this.chart)) return !1;
				let e = this.chart, t = (e.options.legend || {}).accessibility || {};
				return !!(e.legend.display && t.keyboardNavigation && t.keyboardNavigation.enabled);
			}
			destroy() {
				this.removeProxies();
			}
		}
		function Qe(e) {
			let t = this.legend.allItems, n = this.accessibility && this.accessibility.components.legend.highlightedLegendItemIx, r = t[e], i = r?.legendItem || {};
			if (r) {
				var a;
				let o, s;
				(0, v.isNumber)(n) && t[n] && Xe(!1, t[n]), a = this.legend, o = (a.allItems[e].legendItem || {}).pageIx, s = a.currentPage, o !== void 0 && o + 1 !== s && a.scroll(1 + o - s);
				let c = i.label, l = r.a11yProxyElement && r.a11yProxyElement.innerElement;
				return c && c.element && l && this.setFocusToElement(c, l), Xe(!0, r), !0;
			}
			return !1;
		}
		function $e(e) {
			let t = this.chart.options.accessibility, n = e.item;
			t.enabled && n && n.a11yProxyElement && n.a11yProxyElement.innerElement.setAttribute("aria-pressed", e.visible ? "true" : "false");
		}
		(Ze ||= {}).compose = function(e, t) {
			let n = e.prototype;
			n.highlightLegendItem || (n.highlightLegendItem = Qe, (0, v.addEvent)(t, "afterColorizeItem", $e));
		};
		let et = Ze;
		var tt = g(532), nt = g.n(tt);
		let { isTouchDevice: rt } = y(), it = [];
		function Q() {
			this.navigator && this.navigator.setBaseSeries(null, !1);
		}
		function at() {
			let e, t, n, r = this.legend, i = this.navigator;
			if (i) {
				e = r && r.options, t = i.xAxis, n = i.yAxis;
				let { scrollbarHeight: a, scrollButtonSize: o } = i;
				this.inverted ? (i.left = i.opposite ? this.chartWidth - a - i.height : this.spacing[3] + a, i.top = this.plotTop + o) : (i.left = (0, v.pick)(t.left, this.plotLeft + o), i.top = i.navigatorOptions.top || this.chartHeight - i.height - a - (this.scrollbar?.options.margin || 0) - this.spacing[2] - (this.rangeSelector && this.extraBottomMargin ? this.rangeSelector.getHeight() : 0) - (e && e.verticalAlign === "bottom" && e.layout !== "proximate" && e.enabled && !e.floating ? r.legendHeight + (0, v.pick)(e.margin, 10) : 0) - (this.titleOffset ? this.titleOffset[2] : 0)), t && n && (this.inverted ? t.options.left = n.options.left = i.left : t.options.top = n.options.top = i.top, t.setAxisSize(), n.setAxisSize());
			}
		}
		function ot(e) {
			!this.navigator && !this.scroller && (this.options.navigator.enabled || this.options.scrollbar.enabled) && (this.scroller = this.navigator = new l(this), (0, v.pick)(e.redraw, !0) && this.redraw(e.animation));
		}
		function st() {
			let e = this.options;
			(e.navigator.enabled || e.scrollbar.enabled) && (this.scroller = this.navigator = new l(this));
		}
		function ct() {
			let e = this.options, t = e.navigator, n = e.rangeSelector;
			if ((t && t.enabled || n && n.enabled) && (!rt && this.zooming.type === "x" || rt && this.zooming.pinchType === "x")) return !1;
		}
		function lt(e) {
			let t = e.navigator;
			if (t && e.xAxis[0]) {
				let n = e.xAxis[0].getExtremes();
				t.render(n.min, n.max);
			}
		}
		function ut(e) {
			let t = e.options.navigator || {}, n = e.options.scrollbar || {};
			!this.navigator && !this.scroller && (t.enabled || n.enabled) && ((0, v.merge)(!0, this.options.navigator, t), (0, v.merge)(!0, this.options.scrollbar, n), delete e.options.navigator, delete e.options.scrollbar);
		}
		let dt = function(e, t) {
			if ((0, v.pushUnique)(it, e)) {
				let n = e.prototype;
				l = t, n.callbacks.push(lt), (0, v.addEvent)(e, "afterAddSeries", Q), (0, v.addEvent)(e, "afterSetChartSize", at), (0, v.addEvent)(e, "afterUpdate", ot), (0, v.addEvent)(e, "beforeRender", st), (0, v.addEvent)(e, "beforeShowResetZoom", ct), (0, v.addEvent)(e, "update", ut);
			}
		}, { isTouchDevice: ft } = y();
		function pt() {
			this.navigatorAxis ||= new ht(this);
		}
		function mt(e) {
			let t, n = this.chart, r = n.options, i = r.navigator, a = this.navigatorAxis, o = n.zooming.pinchType, s = r.rangeSelector, c = n.zooming.type;
			if (this.isXAxis && (i?.enabled || s?.enabled)) {
				if (c === "y" && e.trigger === "zoom") t = !1;
				else if ((e.trigger === "zoom" && c === "xy" || ft && o === "xy") && this.options.range) {
					let t = a.previousZoom;
					(0, v.defined)(e.min) ? a.previousZoom = [this.min, this.max] : t && (e.min = t[0], e.max = t[1], a.previousZoom = void 0);
				}
			}
			t !== void 0 && e.preventDefault();
		}
		class ht {
			static compose(e) {
				e.keepProps.includes("navigatorAxis") || (e.keepProps.push("navigatorAxis"), (0, v.addEvent)(e, "init", pt), (0, v.addEvent)(e, "setExtremes", mt));
			}
			constructor(e) {
				this.axis = e;
			}
			destroy() {
				this.axis = void 0;
			}
			toFixedRange(e, t, n, r) {
				let i = this.axis, a = (i.pointRange || 0) / 2, o = (0, v.pick)(n, i.translate(e, !0, !i.horiz)), s = (0, v.pick)(r, i.translate(t, !0, !i.horiz));
				return (0, v.defined)(n) || (o = (0, v.correctFloat)(o + a)), (0, v.defined)(r) || (s = (0, v.correctFloat)(s - a)), (0, v.isNumber)(o) && (0, v.isNumber)(s) || (o = s = void 0), {
					min: o,
					max: s
				};
			}
		}
		var gt = g(512), _t = g.n(gt);
		let { seriesTypes: vt } = _t(), yt = {
			height: 40,
			margin: 22,
			maskInside: !0,
			handles: {
				width: 7,
				borderRadius: 0,
				height: 15,
				symbols: ["navigator-handle", "navigator-handle"],
				enabled: !0,
				lineWidth: 1,
				backgroundColor: "var(--highcharts-neutral-color-5)",
				borderColor: "var(--highcharts-neutral-color-40)"
			},
			maskFill: "color-mix(var(--highcharts-highlight-color-60) 30%, transparent)",
			outlineColor: "var(--highcharts-neutral-color-40)",
			outlineWidth: 1,
			series: {
				type: vt.areaspline === void 0 ? "line" : "areaspline",
				fillOpacity: .05,
				lineWidth: 1,
				compare: null,
				sonification: { enabled: !1 },
				dataGrouping: {
					approximation: "average",
					enabled: !0,
					groupPixelWidth: 2,
					firstAnchor: "firstPoint",
					anchor: "middle",
					lastAnchor: "lastPoint",
					units: [
						["millisecond", [
							1,
							2,
							5,
							10,
							20,
							25,
							50,
							100,
							200,
							500
						]],
						["second", [
							1,
							2,
							5,
							10,
							15,
							30
						]],
						["minute", [
							1,
							2,
							5,
							10,
							15,
							30
						]],
						["hour", [
							1,
							2,
							3,
							4,
							6,
							8,
							12
						]],
						["day", [
							1,
							2,
							3,
							4
						]],
						["week", [
							1,
							2,
							3
						]],
						["month", [
							1,
							3,
							6
						]],
						["year", null]
					]
				},
				dataLabels: {
					enabled: !1,
					zIndex: 2
				},
				id: "highcharts-navigator-series",
				className: "highcharts-navigator-series",
				lineColor: null,
				marker: { enabled: !1 },
				threshold: null
			},
			xAxis: {
				className: "highcharts-navigator-xaxis",
				tickLength: 0,
				lineWidth: 0,
				gridLineColor: "var(--highcharts-neutral-color-10)",
				id: "navigator-x-axis",
				gridLineWidth: 1,
				tickPixelInterval: 200,
				labels: {
					align: "left",
					style: {
						color: "var(--highcharts-neutral-color-100)",
						fontSize: "0.7em",
						opacity: .6,
						textOutline: "2px contrast"
					},
					x: 3,
					y: -4
				},
				crosshair: !1
			},
			yAxis: {
				className: "highcharts-navigator-yaxis",
				gridLineWidth: 0,
				startOnTick: !1,
				endOnTick: !1,
				minPadding: .1,
				id: "navigator-y-axis",
				maxPadding: .1,
				labels: { enabled: !1 },
				crosshair: !1,
				title: { text: void 0 },
				tickLength: 0,
				tickWidth: 0
			}
		}, bt = { "navigator-handle": function(e, t, n, r, i = {}) {
			var a, o, s, c;
			let l = i.width ? i.width / 2 : n, u = (0, v.relativeLength)(i.borderRadius || 0, Math.min(2 * l, r));
			return [
				[
					"M",
					-1.5,
					(r = i.height || r) / 2 - 3.5
				],
				[
					"L",
					-1.5,
					r / 2 + 4.5
				],
				[
					"M",
					.5,
					r / 2 - 3.5
				],
				[
					"L",
					.5,
					r / 2 + 4.5
				],
				...(a = -l - 1, o = 2 * l + 1, s = r, c = { r: u }, c?.r ? function(e, t, n, r, i) {
					let a = i?.r || 0;
					return [
						[
							"M",
							e + a,
							t
						],
						[
							"L",
							e + n - a,
							t
						],
						[
							"A",
							a,
							a,
							0,
							0,
							1,
							e + n,
							t + a
						],
						[
							"L",
							e + n,
							t + r - a
						],
						[
							"A",
							a,
							a,
							0,
							0,
							1,
							e + n - a,
							t + r
						],
						[
							"L",
							e + a,
							t + r
						],
						[
							"A",
							a,
							a,
							0,
							0,
							1,
							e,
							t + r - a
						],
						[
							"L",
							e,
							t + a
						],
						[
							"A",
							a,
							a,
							0,
							0,
							1,
							e + a,
							t
						],
						["Z"]
					];
				}(a, .5, o, s, c) : [
					[
						"M",
						a,
						.5
					],
					[
						"L",
						a + o,
						.5
					],
					[
						"L",
						a + o,
						.5 + s
					],
					[
						"L",
						a,
						.5 + s
					],
					["Z"]
				])
			];
		} };
		var xt = g(540), St = g.n(xt);
		let { defaultOptions: Ct } = y(), { composed: wt } = y(), { setFixedRange: Tt } = { setFixedRange: function(e) {
			let t = this.xAxis[0];
			(0, v.defined)(t.dataMax) && (0, v.defined)(t.dataMin) && e ? this.fixedRange = Math.min(e, t.dataMax - t.dataMin) : this.fixedRange = e;
		} };
		function Et() {
			this.chart.navigator && !this.options.isInternal && this.chart.navigator.setBaseSeries(null, !1);
		}
		let Dt = function(e, t, n) {
			ht.compose(t), (0, v.pushUnique)(wt, "Navigator") && (e.prototype.setFixedRange = Tt, (0, v.extend)(St().prototype.symbols, bt), (0, v.extend)(Ct, { navigator: yt }), (0, v.addEvent)(n, "afterUpdate", Et));
		}, { composed: Ot } = y();
		(function(e) {
			let t;
			function n(e) {
				let t = (0, v.pick)(e.options?.min, e.min), n = (0, v.pick)(e.options?.max, e.max);
				return {
					axisMin: t,
					axisMax: n,
					scrollMin: (0, v.defined)(e.dataMin) ? Math.min(t, e.min ?? Infinity, e.dataMin, e.threshold ?? Infinity) : t,
					scrollMax: e.treeGrid?.adjustedMax ?? ((0, v.defined)(e.dataMax) ? Math.max(n, e.max ?? -Infinity, e.dataMax, e.threshold ?? -Infinity) : n)
				};
			}
			function r() {
				let e = this.scrollbar, t = e && !e.options.opposite, n = this.horiz ? 2 : t ? 3 : 1;
				e && (this.chart.scrollbarsOffsets = [0, 0], this.chart.axisOffset[n] += e.size + (e.options.margin || 0));
			}
			function i() {
				let e = this;
				e.options?.scrollbar?.enabled && (e.options.scrollbar.vertical = !e.horiz, e.options.startOnTick = e.options.endOnTick = !1, e.scrollbar = new t(e.chart.renderer, e.options.scrollbar, e.chart), (0, v.addEvent)(e.scrollbar, "changed", function(t) {
					let r, i, { axisMin: a, axisMax: o, scrollMin: s, scrollMax: c } = n(e), l = e.toPixels(s), u = e.toPixels(c) - l;
					if ((0, v.defined)(a) && (0, v.defined)(o)) if (e.horiz && !e.reversed || !e.horiz && e.reversed ? (r = Math.min(c, e.toValue(l + u * this.to)), i = Math.max(s, e.toValue(l + u * this.from))) : (r = Math.min(c, e.toValue(l + u * (1 - this.from))), i = Math.max(s, e.toValue(l + u * (1 - this.to)))), this.shouldUpdateExtremes(t.DOMType)) {
						let n = t.DOMType !== "mousemove" && t.DOMType !== "touchmove" && void 0;
						e.setExtremes((0, v.correctFloat)(i), (0, v.correctFloat)(r), !0, n, t);
					} else this.setRange(this.from, this.to);
				}));
			}
			function a() {
				let e, t, r, { scrollMin: i, scrollMax: a } = n(this), o = this.scrollbar, s = (this.axisTitleMargin || 0) + (this.titleOffset || 0), c = this.chart.scrollbarsOffsets, l = this.options.margin || 0;
				if (o && c) {
					if (this.horiz) this.opposite || (c[1] += s), o.position(this.left, this.top + this.height + 2 + c[1] - (this.opposite ? l : 0), this.width, this.height), this.opposite || (c[1] += l), e = 1;
					else {
						let t;
						this.opposite && (c[0] += s), t = o.options.opposite ? this.left + this.width + 2 + c[0] - (this.opposite ? 0 : l) : this.opposite ? 0 : l, o.position(t, this.top, this.width, this.height), this.opposite && (c[0] += l), e = 0;
					}
					if (c[e] += o.size + (o.options.margin || 0), isNaN(i) || isNaN(a) || !(0, v.defined)(this.min) || !(0, v.defined)(this.max) || (0, v.defined)(this.dataMin) && this.dataMin === this.dataMax) o.setRange(0, 1);
					else if (this.min === this.max) {
						let e = this.pointRange / (this.dataMax + 1);
						t = e * this.min, r = e * (this.max + 1), o.setRange(t, r);
					} else t = (this.toPixels(this.min) - this.toPixels(i)) / (this.toPixels(a) - this.toPixels(i)), r = (this.toPixels(this.max) - this.toPixels(i)) / (this.toPixels(a) - this.toPixels(i)), this.horiz && !this.reversed || !this.horiz && this.reversed ? o.setRange(t, r) : o.setRange(1 - r, 1 - t);
				}
			}
			e.compose = function(e, n) {
				(0, v.pushUnique)(Ot, "Axis.Scrollbar") && (t = n, (0, v.addEvent)(e, "afterGetOffset", r), (0, v.addEvent)(e, "afterInit", i), (0, v.addEvent)(e, "afterRender", a));
			};
		})(f ||= {});
		let kt = f, At = {
			height: 10,
			barBorderRadius: 5,
			buttonBorderRadius: 0,
			buttonsEnabled: !1,
			liveRedraw: void 0,
			margin: void 0,
			minWidth: 6,
			opposite: !0,
			step: .2,
			zIndex: 3,
			barBackgroundColor: "var(--highcharts-neutral-color-20)",
			barBorderWidth: 0,
			barBorderColor: "var(--highcharts-neutral-color-20)",
			buttonArrowColor: "var(--highcharts-neutral-color-80)",
			buttonBackgroundColor: "var(--highcharts-neutral-color-10)",
			buttonBorderColor: "var(--highcharts-neutral-color-20)",
			buttonBorderWidth: 1,
			rifleColor: "none",
			trackBackgroundColor: "rgba(255, 255, 255, 0.001)",
			trackBorderColor: "var(--highcharts-neutral-color-20)",
			trackBorderRadius: 5,
			trackBorderWidth: 1
		}, { defaultOptions: jt } = y(), { composed: Mt } = y();
		class Nt {
			static compose(e) {
				kt.compose(e, Nt), (0, v.pushUnique)(Mt, "Scrollbar") && (0, v.extend)(jt, { scrollbar: At });
			}
			static swapXY(e, t) {
				return t && e.forEach((e) => {
					let t, n = e.length;
					for (let r = 0; r < n; r += 2) typeof (t = e[r + 1]) == "number" && (e[r + 1] = e[r + 2], e[r + 2] = t);
				}), e;
			}
			constructor(e, t, n) {
				this._events = [], this.chartX = 0, this.chartY = 0, this.from = 0, this.scrollbarButtons = [], this.scrollbarLeft = 0, this.scrollbarStrokeWidth = 1, this.scrollbarTop = 0, this.size = 0, this.to = 0, this.trackBorderWidth = 1, this.x = 0, this.y = 0, this.init(e, t, n);
			}
			addEvents() {
				let e = this.options.inverted ? [1, 0] : [0, 1], t = this.scrollbarButtons, n = this.scrollbarGroup.element, r = this.track.element, i = this.mouseDownHandler.bind(this), a = this.mouseMoveHandler.bind(this), o = this.mouseUpHandler.bind(this), s = [
					[
						t[e[0]].element,
						"click",
						this.buttonToMinClick.bind(this)
					],
					[
						t[e[1]].element,
						"click",
						this.buttonToMaxClick.bind(this)
					],
					[
						r,
						"click",
						this.trackClick.bind(this)
					],
					[
						n,
						"mousedown",
						i
					],
					[
						n.ownerDocument,
						"mousemove",
						a
					],
					[
						n.ownerDocument,
						"mouseup",
						o
					],
					[
						n,
						"touchstart",
						i
					],
					[
						n.ownerDocument,
						"touchmove",
						a
					],
					[
						n.ownerDocument,
						"touchend",
						o
					]
				];
				s.forEach(function(e) {
					v.addEvent.apply(null, e);
				}), this._events = s;
			}
			buttonToMaxClick(e) {
				let t = (this.to - this.from) * (0, v.pick)(this.options.step, .2);
				this.updatePosition(this.from + t, this.to + t), (0, v.fireEvent)(this, "changed", {
					from: this.from,
					to: this.to,
					trigger: "scrollbar",
					DOMEvent: e
				});
			}
			buttonToMinClick(e) {
				let t = (0, v.correctFloat)(this.to - this.from) * (0, v.pick)(this.options.step, .2);
				this.updatePosition((0, v.correctFloat)(this.from - t), (0, v.correctFloat)(this.to - t)), (0, v.fireEvent)(this, "changed", {
					from: this.from,
					to: this.to,
					trigger: "scrollbar",
					DOMEvent: e
				});
			}
			cursorToScrollbarPosition(e) {
				let t = this.options, n = t.minWidth > this.calculatedWidth ? t.minWidth : 0;
				return {
					chartX: (e.chartX - this.x - this.xOffset) / (this.barWidth - n),
					chartY: (e.chartY - this.y - this.yOffset) / (this.barWidth - n)
				};
			}
			destroy() {
				let e = this, t = e.chart.scroller;
				e.removeEvents(), [
					"track",
					"scrollbarRifles",
					"scrollbar",
					"scrollbarGroup",
					"group"
				].forEach(function(t) {
					e[t] && e[t].destroy && (e[t] = e[t].destroy());
				}), t && e === t.scrollbar && (t.scrollbar = null, (0, v.destroyObjectProperties)(t.scrollbarButtons));
			}
			drawScrollbarButton(e) {
				let t = this.renderer, n = this.scrollbarButtons, r = this.options, i = this.size, a = t.g().add(this.group);
				if (n.push(a), r.buttonsEnabled) {
					let o = t.rect().addClass("highcharts-scrollbar-button").add(a);
					this.chart.styledMode || o.attr({
						stroke: r.buttonBorderColor,
						"stroke-width": r.buttonBorderWidth,
						fill: r.buttonBackgroundColor
					}), o.attr(o.crisp({
						x: -.5,
						y: -.5,
						width: i,
						height: i,
						r: r.buttonBorderRadius
					}, o.strokeWidth()));
					let s = t.path(Nt.swapXY([
						[
							"M",
							i / 2 + (e ? -1 : 1),
							i / 2 - 3
						],
						[
							"L",
							i / 2 + (e ? -1 : 1),
							i / 2 + 3
						],
						[
							"L",
							i / 2 + (e ? 2 : -2),
							i / 2
						]
					], r.vertical)).addClass("highcharts-scrollbar-arrow").add(n[e]);
					this.chart.styledMode || s.attr({ fill: r.buttonArrowColor });
				}
			}
			init(e, t, n) {
				this.scrollbarButtons = [], this.renderer = e, this.userOptions = t, this.options = (0, v.merge)(At, jt.scrollbar, t), this.options.margin = (0, v.pick)(this.options.margin, 10), this.chart = n, this.size = (0, v.pick)(this.options.size, this.options.height), t.enabled && (this.render(), this.addEvents());
			}
			mouseDownHandler(e) {
				let t = this.chart.pointer?.normalize(e) || e, n = this.cursorToScrollbarPosition(t);
				this.chartX = n.chartX, this.chartY = n.chartY, this.initPositions = [this.from, this.to], this.grabbedCenter = !0;
			}
			mouseMoveHandler(e) {
				let t, n = this.chart.pointer?.normalize(e) || e, r = this.options.vertical ? "chartY" : "chartX", i = this.initPositions || [];
				this.grabbedCenter && (!e.touches || e.touches[0][r] !== 0) && (t = this.cursorToScrollbarPosition(n)[r] - this[r], this.hasDragged = !0, this.updatePosition(i[0] + t, i[1] + t), this.hasDragged && (0, v.fireEvent)(this, "changed", {
					from: this.from,
					to: this.to,
					trigger: "scrollbar",
					DOMType: e.type,
					DOMEvent: e
				}));
			}
			mouseUpHandler(e) {
				this.hasDragged && (0, v.fireEvent)(this, "changed", {
					from: this.from,
					to: this.to,
					trigger: "scrollbar",
					DOMType: e.type,
					DOMEvent: e
				}), this.grabbedCenter = this.hasDragged = this.chartX = this.chartY = null;
			}
			position(e, t, n, r) {
				let { buttonsEnabled: i, margin: a = 0, vertical: o } = this.options, s = this.rendered ? "animate" : "attr", c = r, l = 0;
				this.group.show(), this.x = e, this.y = t + this.trackBorderWidth, this.width = n, this.height = r, this.xOffset = c, this.yOffset = l, o ? (this.width = this.yOffset = n = l = this.size, this.xOffset = c = 0, this.yOffset = l = i ? this.size : 0, this.barWidth = r - (i ? 2 * n : 0), this.x = e += a) : (this.height = r = this.size, this.xOffset = c = i ? this.size : 0, this.barWidth = n - (i ? 2 * r : 0), this.y += a), this.group[s]({
					translateX: e,
					translateY: this.y
				}), this.track[s]({
					width: n,
					height: r
				}), this.scrollbarButtons[1][s]({
					translateX: o ? 0 : n - c,
					translateY: o ? r - l : 0
				});
			}
			removeEvents() {
				this._events.forEach(function(e) {
					v.removeEvent.apply(null, e);
				}), this._events.length = 0;
			}
			render() {
				let e = this.renderer, t = this.options, n = this.size, r = this.chart.styledMode, i = e.g("scrollbar").attr({ zIndex: t.zIndex }).hide().add();
				this.group = i, this.track = e.rect().addClass("highcharts-scrollbar-track").attr({
					r: t.trackBorderRadius || 0,
					height: n,
					width: n
				}).add(i), r || this.track.attr({
					fill: t.trackBackgroundColor,
					stroke: t.trackBorderColor,
					"stroke-width": t.trackBorderWidth
				});
				let a = this.trackBorderWidth = this.track.strokeWidth();
				this.track.attr({
					x: -(0, v.crisp)(0, a),
					y: -(0, v.crisp)(0, a)
				}), this.scrollbarGroup = e.g().add(i), this.scrollbar = e.rect().addClass("highcharts-scrollbar-thumb").attr({
					height: n - a,
					width: n - a,
					r: t.barBorderRadius || 0
				}).add(this.scrollbarGroup), this.scrollbarRifles = e.path(Nt.swapXY([
					[
						"M",
						-3,
						n / 4
					],
					[
						"L",
						-3,
						2 * n / 3
					],
					[
						"M",
						0,
						n / 4
					],
					[
						"L",
						0,
						2 * n / 3
					],
					[
						"M",
						3,
						n / 4
					],
					[
						"L",
						3,
						2 * n / 3
					]
				], t.vertical)).addClass("highcharts-scrollbar-rifles").add(this.scrollbarGroup), r || (this.scrollbar.attr({
					fill: t.barBackgroundColor,
					stroke: t.barBorderColor,
					"stroke-width": t.barBorderWidth
				}), this.scrollbarRifles.attr({
					stroke: t.rifleColor,
					"stroke-width": 1
				})), this.scrollbarStrokeWidth = this.scrollbar.strokeWidth(), this.scrollbarGroup.translate(-(0, v.crisp)(0, this.scrollbarStrokeWidth), -(0, v.crisp)(0, this.scrollbarStrokeWidth)), this.drawScrollbarButton(0), this.drawScrollbarButton(1);
			}
			setRange(e, t) {
				let n, r, i = this.options, a = i.vertical, o = i.minWidth, s = this.barWidth, c = !this.rendered || this.hasDragged || this.chart.navigator && this.chart.navigator.hasDragged ? "attr" : "animate";
				if (!(0, v.defined)(s)) return;
				let l = s * Math.min(t, 1);
				n = Math.ceil(s * (e = Math.max(e, 0))), this.calculatedWidth = r = (0, v.correctFloat)(l - n), r < o && (n = (s - o + r) * e, r = o);
				let u = Math.floor(n + this.xOffset + this.yOffset), d = r / 2 - .5;
				this.from = e, this.to = t, a ? (this.scrollbarGroup[c]({ translateY: u }), this.scrollbar[c]({ height: r }), this.scrollbarRifles[c]({ translateY: d }), this.scrollbarTop = u, this.scrollbarLeft = 0) : (this.scrollbarGroup[c]({ translateX: u }), this.scrollbar[c]({ width: r }), this.scrollbarRifles[c]({ translateX: d }), this.scrollbarLeft = u, this.scrollbarTop = 0), r <= 12 ? this.scrollbarRifles.hide() : this.scrollbarRifles.show(), !1 === i.showFull && (e <= 0 && t >= 1 ? this.group.hide() : this.group.show()), this.rendered = !0;
			}
			shouldUpdateExtremes(e) {
				return (0, v.pick)(this.options.liveRedraw, y().svg && !y().isTouchDevice && !this.chart.boosted) || e === "mouseup" || e === "touchend" || !(0, v.defined)(e);
			}
			trackClick(e) {
				let t = this.chart.pointer?.normalize(e) || e, n = this.to - this.from, r = this.y + this.scrollbarTop, i = this.x + this.scrollbarLeft;
				this.options.vertical && t.chartY > r || !this.options.vertical && t.chartX > i ? this.updatePosition(this.from + n, this.to + n) : this.updatePosition(this.from - n, this.to - n), (0, v.fireEvent)(this, "changed", {
					from: this.from,
					to: this.to,
					trigger: "scrollbar",
					DOMEvent: e
				});
			}
			update(e) {
				this.destroy(), this.init(this.chart.renderer, (0, v.merge)(!0, this.options, e), this.chart);
			}
			updatePosition(e, t) {
				t > 1 && (e = (0, v.correctFloat)(1 - (0, v.correctFloat)(t - e)), t = 1), e < 0 && (t = (0, v.correctFloat)(t - e), e = 0), this.from = e, this.to = t;
			}
		}
		Nt.defaultOptions = At;
		let { defaultOptions: Pt } = y(), { isTouchDevice: Ft } = y();
		function It(e, ...t) {
			let n = [].filter.call(t, v.isNumber);
			if (n.length) return Math[e].apply(0, n);
		}
		class Lt {
			static compose(e, t, n) {
				dt(e, Lt), Dt(e, t, n);
			}
			constructor(e) {
				this.isDirty = !1, this.scrollbarHeight = 0, this.init(e);
			}
			drawHandle(e, t, n, r) {
				let i = this.navigatorOptions.handles.height;
				this.handles[t][r](n ? {
					translateX: Math.round(this.left + this.height / 2),
					translateY: Math.round(this.top + parseInt(e, 10) + .5 - i)
				} : {
					translateX: Math.round(this.left + parseInt(e, 10)),
					translateY: Math.round(this.top + this.height / 2 - i / 2 - 1)
				});
			}
			drawOutline(e, t, n, r) {
				let i = this.navigatorOptions.maskInside, a = this.outline.strokeWidth(), o = a / 2, s = a % 2 / 2, c = this.scrollButtonSize, l = this.size, u = this.top, d = this.height, f = u - o, p = u + d, m = this.left, h, g;
				n ? (h = u + t + s, t = u + e + s, g = [
					[
						"M",
						m + d,
						u - c - s
					],
					[
						"L",
						m + d,
						h
					],
					[
						"L",
						m,
						h
					],
					[
						"M",
						m,
						t
					],
					[
						"L",
						m + d,
						t
					],
					[
						"L",
						m + d,
						u + l + c
					]
				], i && g.push([
					"M",
					m + d,
					h - o
				], [
					"L",
					m + d,
					t + o
				])) : (m -= c, e += m + c - s, t += m + c - s, g = [
					[
						"M",
						m,
						f
					],
					[
						"L",
						e,
						f
					],
					[
						"L",
						e,
						p
					],
					[
						"M",
						t,
						p
					],
					[
						"L",
						t,
						f
					],
					[
						"L",
						m + l + 2 * c,
						f
					]
				], i && g.push([
					"M",
					e - o,
					f
				], [
					"L",
					t + o,
					f
				])), this.outline[r]({ d: g });
			}
			drawMasks(e, t, n, r) {
				let i, a, o, s, c = this.left, l = this.top, u = this.height;
				n ? (o = [
					c,
					c,
					c
				], s = [
					l,
					l + e,
					l + t
				], a = [
					u,
					u,
					u
				], i = [
					e,
					t - e,
					this.size - t
				]) : (o = [
					c,
					c + e,
					c + t
				], s = [
					l,
					l,
					l
				], a = [
					e,
					t - e,
					this.size - t
				], i = [
					u,
					u,
					u
				]), this.shades.forEach((e, t) => {
					e[r]({
						x: o[t],
						y: s[t],
						width: a[t],
						height: i[t]
					});
				});
			}
			renderElements() {
				let e = this, t = e.navigatorOptions, n = t.maskInside, r = e.chart, i = r.inverted, a = r.renderer, o = { cursor: i ? "ns-resize" : "ew-resize" }, s = e.navigatorGroup ??= a.g("navigator").attr({
					zIndex: 8,
					visibility: "hidden"
				}).add();
				if ([
					!n,
					n,
					!n
				].forEach((n, i) => {
					let c = e.shades[i] ?? (e.shades[i] = a.rect().addClass("highcharts-navigator-mask" + (i === 1 ? "-inside" : "-outside")).add(s));
					r.styledMode || (c.attr({ fill: n ? t.maskFill : "rgba(0,0,0,0)" }), i === 1 && c.css(o));
				}), e.outline ||= a.path().addClass("highcharts-navigator-outline").add(s), r.styledMode || e.outline.attr({
					"stroke-width": t.outlineWidth,
					stroke: t.outlineColor
				}), t.handles?.enabled) {
					let n = !1, i = t.handles, { height: c, width: l } = i;
					[0, 1].forEach((t) => {
						let u = i.symbols[t];
						(n ||= e.handles[t]?.symbolName !== u) && (e.handles[t]?.destroy(), e.handles[t] = a.symbol(u, -l / 2 - 1, 0, l, c, i), e.handles[t].attr({ zIndex: 7 - t }).addClass("highcharts-navigator-handle highcharts-navigator-handle-" + ["left", "right"][t]).add(s)), r.inverted && e.handles[t].attr({
							rotation: 90,
							rotationOriginX: Math.floor(-l / 2),
							rotationOriginY: (c + l) / 2
						}), r.styledMode || e.handles[t].attr({
							fill: i.backgroundColor,
							stroke: i.borderColor,
							"stroke-width": i.lineWidth,
							width: i.width,
							height: i.height,
							x: -l / 2 - 1,
							y: 0
						}).css(o);
					}), n && (e.partsEventsToUnbind?.forEach((e) => {
						e();
					}), e.partsEventsToUnbind = [...e.getPartsEvents("mousedown"), ...e.getPartsEvents("touchstart")]);
				}
			}
			update(e, t = !1) {
				let n = this.chart, r = n.options.chart.inverted !== n.scrollbar?.options.vertical;
				if ((0, v.merge)(!0, n.options.navigator, e), this.navigatorOptions = n.options.navigator || {}, this.setOpposite(), (0, v.defined)(e.enabled) || r) return this.destroy(), this.navigatorEnabled = e.enabled || this.navigatorEnabled, this.init(n);
				if (this.navigatorEnabled && (this.isDirty = !0, !1 === e.adaptToUpdatedData && this.baseSeries.forEach((e) => {
					(0, v.removeEvent)(e, "updatedData", this.updatedDataHandler);
				}, this), e.adaptToUpdatedData && this.baseSeries.forEach((e) => {
					e.eventsToUnbind.push((0, v.addEvent)(e, "updatedData", this.updatedDataHandler));
				}, this), (e.series || e.baseSeries) && this.setBaseSeries(void 0, !1), e.height || e.xAxis || e.yAxis)) {
					this.height = e.height ?? this.height;
					let t = this.getXAxisOffsets();
					this.xAxis.update({
						...e.xAxis,
						offsets: t,
						[n.inverted ? "width" : "height"]: this.height,
						[n.inverted ? "height" : "width"]: void 0
					}, !1), this.yAxis.update({
						...e.yAxis,
						[n.inverted ? "width" : "height"]: this.height
					}, !1);
				}
				t && n.redraw();
			}
			render(e, t, n, r) {
				let i = this.chart, a = this.xAxis, o = a.pointRange || 0, s = a.navigatorAxis.fake ? i.xAxis[0] : a, c = this.navigatorEnabled, l = this.rendered, u = i.inverted, d = i.xAxis[0].minRange, f = i.xAxis[0].options.maxRange, p = this.scrollButtonSize, m, h, g, _ = this.scrollbarHeight, y, b;
				if (this.hasDragged && !(0, v.defined)(n)) return;
				if (this.isDirty && this.renderElements(), e = (0, v.correctFloat)(e - o / 2), t = (0, v.correctFloat)(t + o / 2), !(0, v.isNumber)(e) || !(0, v.isNumber)(t)) if (l) n = 0, r = (0, v.pick)(a.width, s.width);
				else return;
				this.left = (0, v.pick)(a.left, i.plotLeft + p + (u ? i.plotWidth : 0));
				let x = this.size = y = (0, v.pick)(a.len, (u ? i.plotHeight : i.plotWidth) - 2 * p);
				m = u ? _ : y + 2 * p, n = (0, v.pick)(n, a.toPixels(e, !0)), r = (0, v.pick)(r, a.toPixels(t, !0)), (0, v.isNumber)(n) && Math.abs(n) !== Infinity || (n = 0, r = m);
				let S = a.toValue(n, !0), C = a.toValue(r, !0), w = Math.abs((0, v.correctFloat)(C - S));
				(0, v.defined)(d) && w < d ? this.grabbedLeft ? n = a.toPixels(C - d - o, !0) : this.grabbedRight && (r = a.toPixels(S + d + o, !0)) : (0, v.defined)(f) && (0, v.correctFloat)(w - o) > f && (this.grabbedLeft ? n = a.toPixels(C - f - o, !0) : this.grabbedRight && (r = a.toPixels(S + f + o, !0))), this.zoomedMax = (0, v.clamp)(Math.max(n, r), 0, x), this.zoomedMin = (0, v.clamp)(this.fixedWidth ? this.zoomedMax - this.fixedWidth : Math.min(n, r), 0, x), this.range = this.zoomedMax - this.zoomedMin, x = Math.round(this.zoomedMax);
				let T = Math.round(this.zoomedMin);
				c && (this.navigatorGroup.attr({ visibility: "inherit" }), b = l && !this.hasDragged ? "animate" : "attr", this.drawMasks(T, x, u, b), this.drawOutline(T, x, u, b), this.navigatorOptions.handles?.enabled && (this.drawHandle(T, 0, u, b), this.drawHandle(x, 1, u, b))), this.scrollbar && (u ? (g = this.top - p, h = this.left - _ + (c || !s.opposite ? 0 : (s.titleOffset || 0) + s.axisTitleMargin), _ = y + 2 * p) : (g = this.top + (c ? this.height : -_), h = this.left - p), this.scrollbar.position(h, g, m, _), this.scrollbar.setRange(this.zoomedMin / (y || 1), this.zoomedMax / (y || 1))), this.rendered = !0, this.isDirty = !1, (0, v.fireEvent)(this, "afterRender");
			}
			addMouseEvents() {
				let e, t, n = this, r = n.chart, i = r.container, a = [];
				n.mouseMoveHandler = e = function(e) {
					n.onMouseMove(e);
				}, n.mouseUpHandler = t = function(e) {
					n.onMouseUp(e);
				}, a.push((0, v.addEvent)(r.renderTo, "mousemove", e), (0, v.addEvent)(i.ownerDocument, "mouseup", t), (0, v.addEvent)(r.renderTo, "touchmove", e), (0, v.addEvent)(i.ownerDocument, "touchend", t)), n.eventsToUnbind = a, n.series && n.series[0] && a.push((0, v.addEvent)(n.series[0].xAxis, "foundExtremes", function() {
					r.navigator?.modifyNavigatorAxisExtremes();
				}));
			}
			getPartsEvents(e) {
				let t = this, n = [];
				return ["shades", "handles"].forEach((r) => {
					t[r].forEach(function(i, a) {
						n.push((0, v.addEvent)(i.element, e, function(e) {
							t[`${r}Mousedown`](e, a);
						}));
					});
				}), n;
			}
			shadesMousedown(e, t) {
				e = this.chart.pointer?.normalize(e) || e;
				let n = this.chart, r = this.xAxis, i = this.zoomedMin, a = this.size, o = this.range, s = this.left, c = e.chartX, l, u, d, f;
				n.inverted && (c = e.chartY, s = this.top), t === 1 ? (this.grabbedCenter = c, this.fixedWidth = o, this.dragOffset = c - i) : (f = c - s - o / 2, t === 0 ? f = Math.max(0, f) : t === 2 && f + o >= a && (f = a - o, this.reversedExtremes ? (f -= o, u = this.getUnionExtremes()?.dataMin) : l = this.getUnionExtremes()?.dataMax), f !== i && (this.fixedWidth = o, d = r.navigatorAxis.toFixedRange(f, f + o, u, l), (0, v.defined)(d.min) && (0, v.fireEvent)(this, "setRange", {
					min: Math.min(d.min, d.max),
					max: Math.max(d.min, d.max),
					redraw: !0,
					eventArguments: { trigger: "navigator" }
				})));
			}
			handlesMousedown(e, t) {
				e = this.chart.pointer?.normalize(e) || e;
				let n = this.chart, r = n.xAxis[0], i = this.reversedExtremes;
				t === 0 ? (this.grabbedLeft = !0, this.otherHandlePos = this.zoomedMax, this.fixedExtreme = i ? r.min : r.max) : (this.grabbedRight = !0, this.otherHandlePos = this.zoomedMin, this.fixedExtreme = i ? r.max : r.min), n.setFixedRange(void 0);
			}
			onMouseMove(e) {
				let t = this, n = t.chart, r = t.navigatorSize, i = t.range, a = t.dragOffset, o = n.inverted, s = t.left, c;
				(!e.touches || e.touches[0].pageX !== 0) && (c = (e = n.pointer?.normalize(e) || e).chartX, o && (s = t.top, c = e.chartY), t.grabbedLeft ? (t.hasDragged = !0, t.render(0, 0, c - s, t.otherHandlePos)) : t.grabbedRight ? (t.hasDragged = !0, t.render(0, 0, t.otherHandlePos, c - s)) : t.grabbedCenter && a && (t.hasDragged = !0, c < a ? c = a : c > r + a - i && (c = r + a - i), t.render(0, 0, c - a, c - a + i)), t.hasDragged && (0, v.pick)(t.scrollbarOptions?.liveRedraw, !Ft && !this.chart.boosted) && (e.DOMType = e.type, setTimeout(function() {
					t.onMouseUp(e);
				}, 0)));
			}
			onMouseUp(e) {
				let t, n, r, i, a, o, s = this.chart, c = this.xAxis, l = this.scrollbar, u = e.DOMEvent || e, d = s.inverted, f = this.rendered && !this.hasDragged ? "animate" : "attr";
				(this.hasDragged && (!l || !l.hasDragged) || e.trigger === "scrollbar") && (r = this.getUnionExtremes(), this.zoomedMin === this.otherHandlePos ? i = this.fixedExtreme : this.zoomedMax === this.otherHandlePos && (a = this.fixedExtreme), this.zoomedMax === this.size && (a = this.reversedExtremes ? r.dataMin : r.dataMax), this.zoomedMin === 0 && (i = this.reversedExtremes ? r.dataMax : r.dataMin), o = c.navigatorAxis.toFixedRange(this.zoomedMin, this.zoomedMax, i, a), (0, v.defined)(o.min) && (0, v.fireEvent)(this, "setRange", {
					min: Math.min(o.min, o.max),
					max: Math.max(o.min, o.max),
					redraw: !0,
					animation: !this.hasDragged && null,
					eventArguments: {
						trigger: "navigator",
						triggerOp: "navigator-drag",
						DOMEvent: u
					}
				})), e.DOMType !== "mousemove" && e.DOMType !== "touchmove" && (this.grabbedLeft = this.grabbedRight = this.grabbedCenter = this.fixedWidth = this.fixedExtreme = this.otherHandlePos = this.hasDragged = this.dragOffset = null), this.navigatorEnabled && (0, v.isNumber)(this.zoomedMin) && (0, v.isNumber)(this.zoomedMax) && (n = Math.round(this.zoomedMin), t = Math.round(this.zoomedMax), this.shades && this.drawMasks(n, t, d, f), this.outline && this.drawOutline(n, t, d, f), this.navigatorOptions.handles?.enabled && Object.keys(this.handles).length === this.handles.length && (this.drawHandle(n, 0, d, f), this.drawHandle(t, 1, d, f)));
			}
			removeEvents() {
				this.eventsToUnbind?.forEach((e) => {
					e();
				}), this.eventsToUnbind = void 0, this.removeBaseSeriesEvents();
			}
			removeBaseSeriesEvents() {
				let e = this.baseSeries || [];
				this.navigatorEnabled && e[0] && (!1 !== this.navigatorOptions.adaptToUpdatedData && e.forEach(function(e) {
					(0, v.removeEvent)(e, "updatedData", this.updatedDataHandler);
				}, this), e[0].xAxis && (0, v.removeEvent)(e[0].xAxis, "foundExtremes", this.modifyBaseAxisExtremes));
			}
			getXAxisOffsets() {
				return this.chart.inverted ? [
					this.scrollButtonSize,
					0,
					-this.scrollButtonSize,
					0
				] : [
					0,
					-this.scrollButtonSize,
					0,
					this.scrollButtonSize
				];
			}
			init(e) {
				let t = e.options, n = t.navigator || {}, r = n.enabled, i = t.scrollbar || {}, a = i.enabled, o = r && n.height || 0, s = a && i.height || 0, c = i.buttonsEnabled && s || 0;
				this.handles = [], this.shades = [], this.chart = e, this.setBaseSeries(), this.height = o, this.scrollbarHeight = s, this.scrollButtonSize = c, this.scrollbarEnabled = a, this.navigatorEnabled = !!r, this.navigatorOptions = n, this.scrollbarOptions = i, this.setOpposite();
				let l = this, u = l.baseSeries, d = e.xAxis.length, f = e.yAxis.length, p = u && u[0] && u[0].xAxis || e.xAxis[0] || { options: {} };
				if (e.isDirtyBox = !0, l.navigatorEnabled) {
					let t = this.getXAxisOffsets();
					l.xAxis = new (nt())(e, (0, v.merge)({
						breaks: p.options.breaks,
						ordinal: p.options.ordinal,
						overscroll: p.options.overscroll
					}, n.xAxis, {
						type: "datetime",
						yAxis: n.yAxis?.id,
						index: d,
						isInternal: !0,
						offset: 0,
						keepOrdinalPadding: !0,
						startOnTick: !1,
						endOnTick: !1,
						minPadding: p.options.ordinal ? 0 : p.options.minPadding,
						maxPadding: p.options.ordinal ? 0 : p.options.maxPadding,
						zoomEnabled: !1
					}, e.inverted ? {
						offsets: t,
						width: o
					} : {
						offsets: t,
						height: o
					}), "xAxis"), l.yAxis = new (nt())(e, (0, v.merge)(n.yAxis, {
						alignTicks: !1,
						offset: 0,
						index: f,
						isInternal: !0,
						reversed: (0, v.pick)(n.yAxis && n.yAxis.reversed, e.yAxis[0] && e.yAxis[0].reversed, !1),
						zoomEnabled: !1
					}, e.inverted ? { width: o } : { height: o }), "yAxis"), l.xAxis.clippable = !1, l.yAxis.clippable = !1, u || n.series?.data || n.series?.dataTable ? l.updateNavigatorSeries(!1) : e.series.length === 0 && (l.unbindRedraw = (0, v.addEvent)(e, "beforeRedraw", function() {
						e.series.length > 0 && !l.series && (l.setBaseSeries(), l.unbindRedraw?.());
					})), l.reversedExtremes = e.inverted && !l.xAxis.reversed || !e.inverted && l.xAxis.reversed, l.renderElements(), l.addMouseEvents();
				} else l.xAxis = {
					chart: e,
					navigatorAxis: { fake: !0 },
					translate: function(t, n) {
						let r = e.xAxis[0], i = r.getExtremes(), a = r.len - 2 * c, o = It("min", r.options.min, i.dataMin), s = It("max", r.options.max, i.dataMax) - o;
						return n ? t * s / a + o : a * (t - o) / s;
					},
					toPixels: function(e) {
						return this.translate(e);
					},
					toValue: function(e) {
						return this.translate(e, !0);
					}
				}, l.xAxis.navigatorAxis.axis = l.xAxis, l.xAxis.navigatorAxis.toFixedRange = ht.prototype.toFixedRange.bind(l.xAxis.navigatorAxis);
				if (e.options.scrollbar?.enabled) {
					let t = (0, v.merge)(e.options.scrollbar, { vertical: e.inverted });
					(0, v.isNumber)(t.margin) || (t.margin = e.inverted ? -3 : 3), e.scrollbar = l.scrollbar = new Nt(e.renderer, t, e), (0, v.addEvent)(l.scrollbar, "changed", function(e) {
						let t = l.size, n = t * this.to, r = t * this.from;
						l.hasDragged = l.scrollbar?.hasDragged, l.render(0, 0, r, n), this.shouldUpdateExtremes(e.DOMType) && setTimeout(function() {
							l.onMouseUp(e);
						});
					});
				}
				l.addBaseSeriesEvents(), l.addChartEvents();
			}
			setOpposite() {
				let e = this.navigatorOptions, t = this.navigatorEnabled, n = this.chart;
				this.opposite = (0, v.pick)(e.opposite, !!(!t && n.inverted));
			}
			getUnionExtremes(e) {
				let t, n = this.chart.xAxis[0], r = this.chart.time, i = this.xAxis, a = i.options, o = n.options;
				return e && n.dataMin === null || (t = {
					dataMin: (0, v.pick)(r.parse(a?.min), It("min", r.parse(o.min), n.dataMin, i.dataMin, i.min)),
					dataMax: (0, v.pick)(r.parse(a?.max), It("max", r.parse(o.max), n.dataMax, i.dataMax, i.max))
				}), t;
			}
			setBaseSeries(e, t) {
				let n = this.chart, r = this.baseSeries = [];
				e = e || n.options.navigator?.baseSeries || (n.series.length ? (0, v.find)(n.series, (e) => !e.options.isInternal).index : 0), (n.series || []).forEach((t, n) => {
					!t.options.isInternal && (t.options.showInNavigator || (n === e || t.options.id === e) && !1 !== t.options.showInNavigator) && r.push(t);
				}), this.xAxis && !this.xAxis.navigatorAxis.fake && this.updateNavigatorSeries(!0, t);
			}
			updateNavigatorSeries(e, t) {
				let n = this, r = n.chart, i = n.baseSeries, a = {
					enableMouseTracking: !1,
					index: null,
					linkedTo: null,
					group: "nav",
					padXAxis: !1,
					xAxis: this.navigatorOptions.xAxis?.id,
					yAxis: this.navigatorOptions.yAxis?.id,
					showInLegend: !1,
					stacking: void 0,
					isInternal: !0,
					states: { inactive: { opacity: 1 } }
				}, o = n.series = (n.series || []).filter((e) => {
					let t = e.baseSeries;
					return !(t && 0 > i.indexOf(t)) || (t && ((0, v.removeEvent)(t, "updatedData", n.updatedDataHandler), delete t.navigatorSeries), e.chart && e.destroy(), !1);
				}), s, c, l = n.navigatorOptions.series, u;
				if (i && i.length && i.forEach((e) => {
					let d = e.navigatorSeries, f = (0, v.extend)({
						color: e.color,
						visible: e.visible
					}, (0, v.isArray)(l) ? Pt.navigator.series : l);
					if (d && !1 === n.navigatorOptions.adaptToUpdatedData) return;
					a.name = "Navigator " + i.length, u = (s = e.options || {}).navigatorOptions || {}, f.dataLabels = (0, v.splat)(f.dataLabels), (c = (0, v.merge)(s, a, f, u)).pointRange = (0, v.pick)(f.pointRange, u.pointRange, Pt.plotOptions[c.type || "line"]?.pointRange);
					let p = u.data || f.data, m = u.dataTable || f.dataTable;
					n.hasNavigatorData = n.hasNavigatorData || !!p || !!m, c.data = p || s.data?.slice(0), c.dataTable = m || s.dataTable, d && d.options ? d.update(c, t) : (e.navigatorSeries = r.initSeries(c), (0, v.fireEvent)(e.navigatorSeries, "afterUpdate"), e.navigatorSeries.baseSeries = e, o.push(e.navigatorSeries));
				}), (l?.data || l?.dataTable) && !(i && i.length) || (0, v.isArray)(l)) {
					let e = r.options.colors || [];
					n.hasNavigatorData = !1, (l = (0, v.splat)(l)).forEach((t, i) => {
						a.name = "Navigator " + (o.length + 1), (c = (0, v.merge)(Pt.navigator?.series, { color: r.series[i] && !r.series[i].options.isInternal && r.series[i].color || e[i] || e[0] }, a, t)).data = t.data, c.dataTable = t.dataTable, (c.data || c.dataTable) && (n.hasNavigatorData = !0, o.push(r.initSeries(c)));
					});
				}
				e && this.addBaseSeriesEvents();
			}
			addBaseSeriesEvents() {
				let e = this, t = e.baseSeries || [];
				t[0] && t[0].xAxis && t[0].eventsToUnbind.push((0, v.addEvent)(t[0].xAxis, "foundExtremes", this.modifyBaseAxisExtremes)), t.forEach((n) => {
					n.eventsToUnbind.push((0, v.addEvent)(n, "show", function() {
						this.navigatorSeries && this.navigatorSeries.setVisible(!0, !1);
					})), n.eventsToUnbind.push((0, v.addEvent)(n, "hide", function() {
						this.navigatorSeries && this.navigatorSeries.setVisible(!1, !1);
					})), !1 !== this.navigatorOptions.adaptToUpdatedData && n.xAxis && n.eventsToUnbind.push((0, v.addEvent)(n, "updatedData", this.updatedDataHandler)), n.eventsToUnbind.push((0, v.addEvent)(n, "remove", function() {
						t && (0, v.erase)(t, n), this.navigatorSeries && e.series && ((0, v.erase)(e.series, this.navigatorSeries), (0, v.defined)(this.navigatorSeries.options) && this.navigatorSeries.remove(!1), delete this.navigatorSeries);
					}));
				});
			}
			getBaseSeriesMin(e) {
				return this.baseSeries.reduce(function(e, t) {
					return Math.min(e, t.getColumn("x")[0] ?? e);
				}, e);
			}
			modifyNavigatorAxisExtremes() {
				let e = this.xAxis;
				if (e.getExtremes !== void 0) {
					let t = this.getUnionExtremes(!0);
					t && (t.dataMin !== e.min || t.dataMax !== e.max) && (e.min = t.dataMin, e.max = t.dataMax);
				}
			}
			modifyBaseAxisExtremes() {
				let e, t, n = this.chart.navigator, r = this.getExtremes(), i = r.min, a = r.max, o = r.dataMin, s = r.dataMax, c = a - i, l = n?.stickToMin, u = n?.stickToMax, d = (0, v.pick)(this.ordinal?.convertOverscroll(this.options.overscroll), 0), f = n.series && n.series[0], p = !!this.setExtremes;
				!(this.eventArgs && this.eventArgs.trigger === "rangeSelectorButton") && (l && (e = (t = o) + c), u && (e = s + d, l || (t = Math.max(o, e - c, n.getBaseSeriesMin(f && f.xData ? f.xData[0] : -Number.MAX_VALUE)))), p && (l || u) && (0, v.isNumber)(t) && (this.min = this.userMin = t, this.max = this.userMax = e)), n.stickToMin = n.stickToMax = null;
			}
			updatedDataHandler() {
				let e = this.chart.navigator, t = this.navigatorSeries, n = e.reversedExtremes ? Math.round(e.zoomedMin) === 0 : Math.round(e.zoomedMax) >= Math.round(e.size);
				e.stickToMax = (0, v.pick)(this.chart.options.navigator && this.chart.options.navigator.stickToMax, n), e.stickToMin = e.shouldStickToMin(this, e), t && !e.hasNavigatorData && (t.options.pointStart = this.getColumn("x")[0], t.setData(this.options.data || this.options.dataTable, !1, void 0, !1));
			}
			shouldStickToMin(e, t) {
				let n = t.getBaseSeriesMin(e.getColumn("x")[0]), r = e.xAxis, i = r.max, a = r.min, o = r.options.range;
				return !!((0, v.isNumber)(i) && (0, v.isNumber)(a)) && (o && i - n > 0 ? i - n < o : a <= n);
			}
			addChartEvents() {
				this.eventsToUnbind ||= [], this.eventsToUnbind.push((0, v.addEvent)(this.chart, "redraw", function() {
					let e = this.navigator, t = e && (e.baseSeries && e.baseSeries[0] && e.baseSeries[0].xAxis || this.xAxis[0]);
					t && e.render(t.min, t.max);
				}), (0, v.addEvent)(this.chart, "getMargins", function() {
					let e = this.navigator, t = e.opposite ? "plotTop" : "marginBottom";
					this.inverted && (t = e.opposite ? "marginRight" : "plotLeft"), this[t] = (this[t] || 0) + (e.navigatorEnabled || !this.inverted ? e.height + (this.scrollbar?.options.margin || 0) + e.scrollbarHeight : 0) + (e.navigatorOptions.margin || 0);
				}), (0, v.addEvent)(this, "setRange", function(e) {
					this.chart.xAxis[0].setExtremes(e.min, e.max, e.redraw, e.animation, e.eventArguments);
				}));
			}
			destroy() {
				this.removeEvents(), this.xAxis && ((0, v.erase)(this.chart.xAxis, this.xAxis), (0, v.erase)(this.chart.axes, this.xAxis)), this.yAxis && ((0, v.erase)(this.chart.yAxis, this.yAxis), (0, v.erase)(this.chart.axes, this.yAxis)), (this.series || []).forEach((e) => {
					e.destroy && e.destroy();
				}), [
					"series",
					"xAxis",
					"yAxis",
					"shades",
					"outline",
					"scrollbarTrack",
					"scrollbarRifles",
					"scrollbarGroup",
					"scrollbar",
					"navigatorGroup",
					"rendered"
				].forEach((e) => {
					this[e] && this[e].destroy && this[e].destroy(), this[e] = null;
				}), [this.handles].forEach((e) => {
					(0, v.destroyObjectProperties)(e);
				}), this.baseSeries.forEach((e) => {
					e.navigatorSeries = void 0;
				}), this.navigatorEnabled = !1;
			}
		}
		let { animObject: Rt } = y(), { format: zt } = D(), { getFakeMouseEvent: Bt } = T, { getAxisRangeDescription: Vt, fireEventOnWrappedOrUnwrappedElement: Ht } = N, Ut = class extends L {
			init() {
				let e = this.chart, t = this;
				this.announcer = new ge(e, "polite"), this.addEvent(Lt, "afterRender", function() {
					this.chart === t.chart && this.chart.renderer && (0, v.syncTimeout)(() => {
						t.proxyProvider.updateGroupProxyElementPositions("navigator"), t.updateHandleValues();
					}, Rt((0, v.pick)(this.chart.renderer.globalAnimation, !0)).duration);
				});
			}
			onChartUpdate() {
				let e = this.chart, t = e.options, n = t.navigator;
				if (n.enabled && n.accessibility?.enabled) {
					let n = t.accessibility.landmarkVerbosity, r = t.lang.accessibility?.navigator.groupLabel;
					this.proxyProvider.removeGroup("navigator"), this.proxyProvider.addGroup("navigator", "div", {
						role: n === "all" ? "region" : "group",
						"aria-label": zt(r, { chart: e }, e)
					});
					let i = t.lang.accessibility?.navigator.handleLabel;
					[0, 1].forEach((t) => {
						let n = this.getHandleByIx(t);
						if (n) {
							let r = this.proxyProvider.addProxyElement("navigator", { click: n }, "input", {
								type: "range",
								"aria-label": zt(i, {
									handleIx: t,
									chart: e
								}, e)
							});
							this[t ? "maxHandleProxy" : "minHandleProxy"] = r.innerElement, r.innerElement.style.pointerEvents = "none", r.innerElement.oninput = () => this.updateNavigator();
						}
					}), this.updateHandleValues();
				} else this.proxyProvider.removeGroup("navigator");
			}
			getNavigatorHandleNavigation(e) {
				let t = this, n = this.chart, r = e ? this.maxHandleProxy : this.minHandleProxy, i = this.keyCodes;
				return new R(n, {
					keyCodeMap: [[[
						i.left,
						i.right,
						i.up,
						i.down
					], function(a) {
						if (r) {
							let o = a === i.left || a === i.up ? -1 : 1;
							r.value = "" + (0, v.clamp)(parseFloat(r.value) + o, 0, 100), t.updateNavigator(() => {
								let i = t.getHandleByIx(e);
								i && n.setFocusToElement(i, r);
							});
						}
						return this.response.success;
					}]],
					init: () => {
						n.setFocusToElement(this.getHandleByIx(e), r);
					},
					validate: () => !!(this.getHandleByIx(e) && r && n.options.navigator.accessibility?.enabled)
				});
			}
			getKeyboardNavigation() {
				return [this.getNavigatorHandleNavigation(0), this.getNavigatorHandleNavigation(1)];
			}
			destroy() {
				this.updateNavigatorThrottleTimer && (0, v.internalClearTimeout)(this.updateNavigatorThrottleTimer), this.proxyProvider.removeGroup("navigator"), this.announcer && this.announcer.destroy();
			}
			updateHandleValues() {
				let e = this.chart.navigator;
				if (e && this.minHandleProxy && this.maxHandleProxy) {
					let t = e.size;
					this.minHandleProxy.value = "" + Math.round(e.zoomedMin / t * 100), this.maxHandleProxy.value = "" + Math.round(e.zoomedMax / t * 100);
				}
			}
			getHandleByIx(e) {
				let t = this.chart.navigator;
				return t && t.handles && t.handles[e];
			}
			updateNavigator(e) {
				let t = (e) => {
					let t = this.chart, { navigator: n, pointer: r } = t, i = this.chart.accessibility?.keyboardNavigation;
					if (n && r && this.minHandleProxy && this.maxHandleProxy) {
						let a = r.getChartPosition(), o = parseFloat(this.minHandleProxy.value) / 100 * n.size, s = parseFloat(this.maxHandleProxy.value) / 100 * n.size;
						[
							[
								0,
								"mousedown",
								n.zoomedMin
							],
							[
								0,
								"mousemove",
								o
							],
							[
								0,
								"mouseup",
								o
							],
							[
								1,
								"mousedown",
								n.zoomedMax
							],
							[
								1,
								"mousemove",
								s
							],
							[
								1,
								"mouseup",
								s
							]
						].forEach(([e, t, r]) => {
							let i = this.getHandleByIx(e)?.element;
							i && Ht(i, Bt(t, {
								x: a.left + n.left + r,
								y: a.top + n.top
							}, i));
						}), i && (i.keyboardReset = !1), e && e();
						let c = t.options.lang.accessibility?.navigator.changeAnnouncement, l = Vt(t.xAxis[0]);
						this.announcer.announce(zt(c, {
							axisRangeDescription: l,
							chart: t
						}, t));
					}
				};
				this.updateNavigatorThrottleTimer && (0, v.internalClearTimeout)(this.updateNavigatorThrottleTimer), this.updateNavigatorThrottleTimer = setTimeout(t.bind(this, e), 20);
			}
		}, { getPointAnnotationTexts: Wt } = be, { getAxisDescription: Gt, getSeriesFirstPointElement: Kt, getSeriesA11yElement: qt, unhideChartElementFromAT: Jt } = N, { format: Yt, numberFormat: Xt } = D(), { reverseChildNodes: Zt, stripHTMLTagsFromString: Qt } = T;
		function $t(e) {
			let t = e.chart.options.accessibility.series.pointDescriptionEnabledThreshold;
			return !!(!1 !== t && e.points && e.points.length >= +t);
		}
		function en(e, t) {
			let n = e.series, r = n.chart, i = r.options.accessibility.point || {}, a = n.options.accessibility && n.options.accessibility.point || {}, o = n.tooltipOptions || {}, s = r.options.lang;
			return (0, v.isNumber)(t) ? Xt(t, a.valueDecimals || i.valueDecimals || o.valueDecimals || -1, s.decimalPoint, s.accessibility.thousandsSep || s.thousandsSep) : t;
		}
		function tn(e, t) {
			let n = e[t];
			return e.chart.langFormat("accessibility.series." + t + "Description", {
				name: Gt(n),
				series: e
			});
		}
		function nn(e) {
			let t, n, r, i, a, o, s, c, l, u, d, f, p = e.series, m = p.chart.series.length > 1 || p.options.name, h = (o = (a = e.series).chart, c = (s = a.options.accessibility) && s.point && s.point.valueDescriptionFormat || o.options.accessibility.point.valueDescriptionFormat, u = (l = (0, v.pick)(a.xAxis && a.xAxis.options.accessibility && a.xAxis.options.accessibility.enabled, !o.angular && a.type !== "flowmap")) ? (t = function(e) {
				let t = e.series, n = t.chart, r = t.options.accessibility && t.options.accessibility.point || {}, i = n.options.accessibility.point || {}, a = t.xAxis && t.xAxis.dateTime;
				if (a) {
					let t = a.getXDateFormat(e.x || 0, n.options.tooltip.dateTimeLabelFormats), o = r.dateFormatter && r.dateFormatter(e) || i.dateFormatter?.(e) || r.dateFormat || i.dateFormat || t;
					return n.time.dateFormat(o, e.x || 0, void 0);
				}
			}(e), n = (e.series.xAxis || {}).categories && (0, v.defined)(e.category) && ("" + e.category).replace("<br/>", " "), r = (0, v.defined)(e.id) && 0 > ("" + e.id).indexOf("highcharts-"), i = "x, " + e.x, e.name || t || n || (r ? e.id : i)) : "", Yt(c, {
				point: e,
				index: (0, v.defined)(e.index) ? e.index + 1 : "",
				xDescription: u,
				value: function(e) {
					let t = e.series, n = t.chart.options.accessibility.point || {}, r = t.chart.options.accessibility && t.chart.options.accessibility.point || {}, i = t.tooltipOptions || {}, a = r.valuePrefix || n.valuePrefix || i.valuePrefix || "", o = r.valueSuffix || n.valueSuffix || i.valueSuffix || "", s = en(e, e[e.value === void 0 ? "y" : "value"]);
					if (e.isNull) return t.chart.langFormat("accessibility.series.nullPointValue", { point: e });
					if (t.pointArrayMap) {
						let t, n, r;
						return t = a || "", n = o || "", r = function(r) {
							let i = en(e, (0, v.pick)(e[r], e.options[r]));
							return i === void 0 ? i : r + ": " + t + i + n;
						}, e.series.pointArrayMap.reduce(function(e, t) {
							let n = r(t);
							return n ? e + (e.length ? ", " : "") + n : e;
						}, "");
					}
					return a + s + o;
				}(e),
				separator: l ? ", " : ""
			}, o)), g = e.options && e.options.accessibility && e.options.accessibility.description, _ = m ? " " + p.name + "." : "", y = (d = e.series.chart, (f = Wt(e)).length ? d.langFormat("accessibility.series.pointAnnotationsDescription", {
				point: e,
				annotations: f
			}) : "");
			return e.accessibility = e.accessibility || {}, e.accessibility.valueDescription = h, h + (g ? " " + g : "") + _ + (y ? " " + y : "");
		}
		function rn(e) {
			let t, n = e.chart, r = n.types || [], i = (t = (e.options.accessibility || {}).description) && e.chart.langFormat("accessibility.series.description", {
				description: t,
				series: e
			}) || "", a = function(t) {
				return n[t] && n[t].length > 1 && e[t];
			}, o = e.index + 1, s = tn(e, "xAxis"), c = tn(e, "yAxis"), l = {
				seriesNumber: o,
				series: e,
				chart: n
			}, u = r.length > 1 ? "Combination" : "", d = n.langFormat("accessibility.series.summary." + e.type + u, l) || n.langFormat("accessibility.series.summary.default" + u, l), f = (a("yAxis") ? " " + c + "." : "") + (a("xAxis") ? " " + s + "." : "");
			return Yt((0, v.pick)(e.options.accessibility && e.options.accessibility.descriptionFormat, n.options.accessibility.series.descriptionFormat, ""), {
				seriesDescription: d,
				authorDescription: i ? " " + i : "",
				axisDescription: f,
				series: e,
				chart: n,
				seriesNumber: o
			}, void 0);
		}
		let an = {
			defaultPointDescriptionFormatter: nn,
			defaultSeriesDescriptionFormatter: rn,
			describeSeries: function(e) {
				let t = e.chart, n = Kt(e), r = qt(e), i = t.is3d && t.is3d();
				if (r) {
					let a, o, s, c, l, u, d, f, p, m, h;
					if (r.lastChild !== n || i || Zt(r), a = e.options.accessibility || {}, s = !$t(e) && !a.exposeAsGroupOnly, o = e.chart.options.accessibility.keyboardNavigation.seriesNavigation, c = !!(e.points && (e.points.length < +o.pointNavigationEnabledThreshold || !1 === o.pointNavigationEnabledThreshold)), l = e.chart.options.accessibility.point.describeNull, (s || c) && e.points.forEach((t) => {
						let n, r, i, a, o, c = t.graphic && t.graphic.element || (r = (n = t.series) && n.chart, i = n && n.is("sunburst"), a = t.isNull, o = r && r.options.accessibility.point.describeNull, a && !i && o && function(e) {
							let t, n = e.series, r = function(e) {
								let t = e.index;
								if (!e.series || !e.series.data || !(0, v.defined)(t)) return null;
								let n = e.series.options?.nullInteraction;
								return (0, v.find)(e.series.data, function(e) {
									return !!(e && e.index !== void 0 && (n || e.index > t) && e.graphic && e.graphic.element);
								}) || null;
							}(e), i = r && r.graphic, a = i ? i.parentGroup : n.graph || n.group, o = r ? {
								x: (0, v.pick)(e.plotX, r.plotX, 0),
								y: (0, v.pick)(e.plotY, r.plotY, 0)
							} : {
								x: (0, v.pick)(e.plotX, 0),
								y: (0, v.pick)(e.plotY, 0)
							}, s = ((t = e.series.chart.renderer.rect(o.x, o.y, 1, 1)).attr({
								class: "highcharts-a11y-mock-point",
								fill: "none",
								opacity: 0,
								"fill-opacity": 0,
								"stroke-opacity": 0
							}), t);
							if (a && a.element) return e.graphic = s, e.hasMockGraphic = !0, s.add(a), a.element.insertBefore(s.element, i ? i.element : null), s.element;
						}(t)), u = t.options && t.options.accessibility && !1 === t.options.accessibility.enabled;
						if (c) {
							if (t.isNull && !l) return void c.setAttribute("aria-hidden", !0);
							if (c.setAttribute("tabindex", "-1"), e.chart.styledMode || (c.style.outline = "none"), s && !u) {
								let e, n, r, i;
								e = t.series, n = e.options.accessibility?.point || {}, r = e.chart.options.accessibility.point || {}, i = Qt((0, v.isString)(n.descriptionFormat) && Yt(n.descriptionFormat, t, e.chart) || n.descriptionFormatter?.(t) || (0, v.isString)(r.descriptionFormat) && Yt(r.descriptionFormat, t, e.chart) || r.descriptionFormatter?.(t) || nn(t), e.chart.renderer.forExport), c.setAttribute("role", "img"), c.setAttribute("aria-label", i);
							} else c.setAttribute("aria-hidden", !0);
						}
					}), Jt(t, r), f = (d = (u = e.chart).options.chart).options3d && d.options3d.enabled, p = u.series.length > 1, m = u.options.accessibility.series.describeSingleSeries, h = (e.options.accessibility || {}).exposeAsGroupOnly, !(f && p) && (p || m || h || $t(e))) {
						let t, n, i;
						t = e.options.accessibility || {}, i = (n = e.chart.options.accessibility).landmarkVerbosity, t.exposeAsGroupOnly ? r.setAttribute("role", "img") : i === "all" ? r.setAttribute("role", "region") : r.setAttribute("role", "group"), r.setAttribute("tabindex", "-1"), e.chart.styledMode || (r.style.outline = "none"), r.setAttribute("aria-label", Qt(n.series.descriptionFormatter && n.series.descriptionFormatter(e) || rn(e), e.chart.renderer.forExport));
					} else r.removeAttribute("aria-label");
				}
			}
		}, { composed: on } = y(), { getChartTitle: sn } = N, { defaultPointDescriptionFormatter: cn, defaultSeriesDescriptionFormatter: ln } = an;
		function un(e) {
			return !!e.options.accessibility.announceNewData.enabled;
		}
		class dn {
			constructor(e) {
				this.dirty = { allSeries: {} }, this.lastAnnouncementTime = 0, this.chart = e;
			}
			init() {
				let e = this.chart, t = e.options.accessibility.announceNewData.interruptUser ? "assertive" : "polite";
				this.lastAnnouncementTime = 0, this.dirty = { allSeries: {} }, this.eventProvider = new ae(), this.announcer = new ge(e, t), this.addEventListeners();
			}
			destroy() {
				this.eventProvider.removeAddedEvents(), this.announcer.destroy();
			}
			addEventListeners() {
				let e = this, t = this.chart, n = this.eventProvider;
				n.addEvent(t, "afterApplyDrilldown", function() {
					e.lastAnnouncementTime = 0;
				}), n.addEvent(t, "afterAddSeries", function(t) {
					e.onSeriesAdded(t.series);
				}), n.addEvent(t, "redraw", function() {
					e.announceDirtyData();
				});
			}
			onSeriesAdded(e) {
				un(this.chart) && (this.dirty.hasDirty = !0, this.dirty.allSeries[e.name + e.index] = e, this.dirty.newSeries = (0, v.defined)(this.dirty.newSeries) ? void 0 : e);
			}
			announceDirtyData() {
				let e = this.chart, t = this;
				if (e.options.accessibility.announceNewData && this.dirty.hasDirty) {
					var n;
					let e, r = this.dirty.newPoint;
					r &&= (e = (n = r).series.data.filter((e) => n.x === e.x && n.y === e.y)).length === 1 ? e[0] : n, this.queueAnnouncement(Object.keys(this.dirty.allSeries).map((e) => t.dirty.allSeries[e]), this.dirty.newSeries, r), this.dirty = { allSeries: {} };
				}
			}
			queueAnnouncement(e, t, n) {
				let r = this.chart.options.accessibility.announceNewData;
				if (r.enabled) {
					var i;
					let a, o = +/* @__PURE__ */ new Date(), s = o - this.lastAnnouncementTime, c = Math.max(0, r.minAnnounceInterval - s), l = (i = this.queuedAnnouncement && this.queuedAnnouncement.series, Object.keys(a = (i || []).concat(e || []).reduce((e, t) => (e[t.name + t.index] = t, e), {})).map((e) => a[e])), u = this.buildAnnouncementMessage(l, t, n);
					u && (this.queuedAnnouncement && (0, v.internalClearTimeout)(this.queuedAnnouncementTimer), this.queuedAnnouncement = {
						time: o,
						message: u,
						series: l
					}, this.queuedAnnouncementTimer = setTimeout(() => {
						this && this.announcer && (this.lastAnnouncementTime = +/* @__PURE__ */ new Date(), this.announcer.announce(this.queuedAnnouncement.message), delete this.queuedAnnouncement, delete this.queuedAnnouncementTimer);
					}, c));
				}
			}
			buildAnnouncementMessage(e, t, n) {
				let r = this.chart, i = r.options.accessibility.announceNewData;
				if (i.announcementFormatter) {
					let r = i.announcementFormatter(e, t, n, this);
					if (!1 !== r) return r.length ? r : null;
				}
				let a = y().charts && y().charts.length > 1 ? "Multiple" : "Single", o = t ? "newSeriesAnnounce" + a : n ? "newPointAnnounce" + a : "newDataAnnounce", s = sn(r);
				return r.langFormat("accessibility.announceNewData." + o, {
					chartTitle: s,
					seriesDesc: t ? ln(t) : null,
					pointDesc: n ? cn(n) : null,
					point: n,
					series: t
				});
			}
		}
		function fn(e) {
			let t = this.chart, n = t.accessibility?.components.series.newDataAnnouncer;
			n && n.chart === t && un(t) && (n.dirty.newPoint = (0, v.defined)(n.dirty.newPoint) ? void 0 : e.point);
		}
		function pn() {
			let e = this.chart, t = e.accessibility?.components.series.newDataAnnouncer;
			t && t.chart === e && un(e) && (t.dirty.hasDirty = !0, t.dirty.allSeries[this.name + this.index] = this);
		}
		(dn ||= {}).compose = function(e) {
			(0, v.pushUnique)(on, "A11y.NDA") && ((0, v.addEvent)(e, "addPoint", fn), (0, v.addEvent)(e, "updatedData", pn));
		};
		let mn = dn, { doc: hn, win: gn } = y(), { fireEventOnWrappedOrUnwrappedElement: _n } = N, { cloneMouseEvent: vn, cloneTouchEvent: yn, getFakeMouseEvent: bn, removeElement: xn } = T, Sn = class {
			constructor(e, t, n = "button", r, i) {
				this.chart = e, this.target = t, this.eventProvider = new ae();
				let a = this.innerElement = hn.createElement(n), o = this.element = r ? hn.createElement(r) : a;
				e.styledMode || this.hideElementVisually(a), r && (r !== "li" || e.styledMode || (o.style.listStyle = "none"), o.appendChild(a), this.element = o), this.updateTarget(t, i);
			}
			click() {
				let e = this.getTargetPosition();
				e.x += e.width / 2, e.y += e.height / 2;
				let t = bn("click", e);
				_n(this.target.click, t);
			}
			updateTarget(e, t) {
				this.target = e, this.updateCSSClassName();
				let n = t || {};
				Object.keys(n).forEach((e) => {
					n[e] === null && delete n[e];
				});
				let r = this.getTargetAttr(e.click, "aria-label");
				(0, v.attr)(this.innerElement, (0, v.merge)(r ? { "aria-label": r } : {}, n)), this.eventProvider.removeAddedEvents(), this.addProxyEventsToElement(this.innerElement, e.click), this.refreshPosition();
			}
			refreshPosition() {
				let e = this.getTargetPosition();
				(0, v.css)(this.innerElement, {
					width: (e.width || 1) + "px",
					height: (e.height || 1) + "px",
					left: (Math.round(e.x) || 0) + "px",
					top: (Math.round(e.y) || 0) + "px"
				});
			}
			remove() {
				this.eventProvider.removeAddedEvents(), xn(this.element);
			}
			updateCSSClassName() {
				let e = (e) => e.indexOf("highcharts-no-tooltip") > -1, t = e(this.chart.legend?.group?.div?.className || ""), n = e(this.getTargetAttr(this.target.click, "class") || "");
				this.innerElement.className = t || n ? "highcharts-a11y-proxy-element highcharts-no-tooltip" : "highcharts-a11y-proxy-element";
			}
			addProxyEventsToElement(e, t) {
				[
					"click",
					"touchstart",
					"touchend",
					"touchcancel",
					"touchmove",
					"mouseover",
					"mouseenter",
					"mouseleave",
					"mouseout"
				].forEach((n) => {
					let r = n.indexOf("touch") === 0;
					this.eventProvider.addEvent(e, n, (e) => {
						let n = r ? yn(e) : vn(e);
						t && _n(t, n), e.stopPropagation(), r || e.preventDefault();
					}, { passive: !1 });
				});
			}
			hideElementVisually(e) {
				(0, v.css)(e, {
					borderWidth: 0,
					backgroundColor: "transparent",
					cursor: "pointer",
					outline: "none",
					opacity: .001,
					filter: "alpha(opacity=1)",
					zIndex: 999,
					overflow: "hidden",
					padding: 0,
					margin: 0,
					display: "block",
					position: "absolute",
					"-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=1)"
				});
			}
			getTargetPosition() {
				let e = this.target.click, t = e.element ? e.element : e, n = this.target.visual || t, r = this.chart.renderTo, i = this.chart.pointer;
				if (r && n?.getBoundingClientRect && i) {
					let e = gn.scrollY || hn.documentElement.scrollTop, t = n.getBoundingClientRect(), r = i.getChartPosition();
					return {
						x: (t.left - r.left) / r.scaleX,
						y: (t.top + e - r.top) / r.scaleY,
						width: t.right / r.scaleX - t.left / r.scaleX,
						height: t.bottom / r.scaleY - t.top / r.scaleY
					};
				}
				return {
					x: 0,
					y: 0,
					width: 1,
					height: 1
				};
			}
			getTargetAttr(e, t) {
				return e.element ? e.element.getAttribute(t) : e.getAttribute(t);
			}
		}, { doc: Cn } = y(), { unhideChartElementFromAT: wn } = N, { removeChildNodes: Tn } = T, En = class {
			constructor(e) {
				this.chart = e, this.domElementProvider = new F(), this.groups = {}, this.groupOrder = [], this.beforeChartProxyPosContainer = this.createProxyPosContainer("before"), this.afterChartProxyPosContainer = this.createProxyPosContainer("after"), this.update();
			}
			addProxyElement(e, t, n = "button", r) {
				let i = this.groups[e];
				if (!i) throw Error("ProxyProvider.addProxyElement: Invalid group key " + e);
				let a = i.type === "ul" || i.type === "ol" ? "li" : void 0, o = new Sn(this.chart, t, n, a, r);
				return i.proxyContainerElement.appendChild(o.element), i.proxyElements.push(o), o;
			}
			addGroup(e, t = "div", n) {
				let r, i = this.groups[e];
				if (i) return i.groupElement;
				let a = this.domElementProvider.createElement(t);
				return n && n.role && t !== "div" ? (r = this.domElementProvider.createElement("div")).appendChild(a) : r = a, r.className = "highcharts-a11y-proxy-group highcharts-a11y-proxy-group-" + e.replace(/\W/g, "-"), this.groups[e] = {
					proxyContainerElement: a,
					groupElement: r,
					type: t,
					proxyElements: []
				}, (0, v.attr)(r, n || {}), t === "ul" && a.setAttribute("role", "list"), this.afterChartProxyPosContainer.appendChild(r), this.updateGroupOrder(this.groupOrder), r;
			}
			updateGroupAttrs(e, t) {
				let n = this.groups[e];
				if (!n) throw Error("ProxyProvider.updateGroupAttrs: Invalid group key " + e);
				(0, v.attr)(n.groupElement, t);
			}
			updateGroupOrder(e) {
				if (this.groupOrder = e.slice(), this.isDOMOrderGroupOrder()) return;
				let t = e.indexOf("series"), n = t > -1 ? e.slice(0, t) : e, r = t > -1 ? e.slice(t + 1) : [], i = Cn.activeElement;
				["before", "after"].forEach((e) => {
					let t = this[e === "before" ? "beforeChartProxyPosContainer" : "afterChartProxyPosContainer"];
					Tn(t), (e === "before" ? n : r).forEach((e) => {
						let n = this.groups[e];
						n && t.appendChild(n.groupElement);
					});
				}), (this.beforeChartProxyPosContainer.contains(i) || this.afterChartProxyPosContainer.contains(i)) && i && i.focus && i.focus();
			}
			clearGroup(e) {
				let t = this.groups[e];
				if (!t) throw Error("ProxyProvider.clearGroup: Invalid group key " + e);
				Tn(t.proxyContainerElement);
			}
			removeGroup(e) {
				let t = this.groups[e];
				t && (this.domElementProvider.removeElement(t.groupElement), t.groupElement !== t.proxyContainerElement && this.domElementProvider.removeElement(t.proxyContainerElement), delete this.groups[e]);
			}
			update() {
				this.updatePosContainerPositions(), this.updateGroupOrder(this.groupOrder), this.updateProxyElementPositions();
			}
			updateProxyElementPositions() {
				Object.keys(this.groups).forEach(this.updateGroupProxyElementPositions.bind(this));
			}
			updateGroupProxyElementPositions(e) {
				let t = this.groups[e];
				t && t.proxyElements.forEach((e) => e.refreshPosition());
			}
			destroy() {
				this.domElementProvider.destroyCreatedElements();
			}
			createProxyPosContainer(e) {
				let t = this.domElementProvider.createElement("div");
				return t.setAttribute("aria-hidden", "false"), t.className = "highcharts-a11y-proxy-container" + (e ? "-" + e : ""), (0, v.css)(t, {
					position: "absolute",
					top: "0",
					left: "0",
					whiteSpace: "nowrap"
				}), t;
			}
			getCurrentGroupOrderInDOM() {
				let e = (e) => {
					let t = Object.keys(this.groups), n = t.length;
					for (; n--;) {
						let r = t[n], i = this.groups[r];
						if (i && e === i.groupElement) return r;
					}
				}, t = (t) => {
					let n = [], r = t.children;
					for (let t = 0; t < r.length; ++t) {
						let i = e(r[t]);
						i && n.push(i);
					}
					return n;
				}, n = t(this.beforeChartProxyPosContainer), r = t(this.afterChartProxyPosContainer);
				return n.push("series"), n.concat(r);
			}
			isDOMOrderGroupOrder() {
				let e = this.getCurrentGroupOrderInDOM(), t = this.groupOrder.filter((e) => e === "series" || !!this.groups[e]), n = e.length;
				if (n !== t.length) return !1;
				for (; n--;) if (e[n] !== t[n]) return !1;
				return !0;
			}
			updatePosContainerPositions() {
				let e = this.chart;
				if (e.renderer.forExport) return;
				let t = e.renderer.box;
				e.container.insertBefore(this.afterChartProxyPosContainer, t.nextSibling), e.container.insertBefore(this.beforeChartProxyPosContainer, t), wn(this.chart, this.afterChartProxyPosContainer), wn(this.chart, this.beforeChartProxyPosContainer);
			}
		}, { unhideChartElementFromAT: Dn, getAxisRangeDescription: On } = N;
		class kn extends L {
			init() {
				let e = this.chart;
				this.announcer = new ge(e, "polite");
			}
			onChartUpdate() {
				let e = this.chart, t = this, n = e.rangeSelector;
				n && (this.updateSelectorVisibility(), this.setDropdownAttrs(), n.buttons && n.buttons.length && n.buttons.forEach((e) => {
					t.setRangeButtonAttrs(e);
				}), n.maxInput && n.minInput && ["minInput", "maxInput"].forEach(function(r, i) {
					let a = n[r];
					a && (Dn(e, a), t.setRangeInputAttrs(a, "accessibility.rangeSelector." + (i ? "max" : "min") + "InputLabel"));
				}));
			}
			updateSelectorVisibility() {
				let e = this.chart, t = e.rangeSelector, n = t && t.dropdown, r = t && t.buttons || [];
				t && t.hasVisibleDropdown && n ? (Dn(e, n), r.forEach((e) => e.element.setAttribute("aria-hidden", !0))) : (n && n.setAttribute("aria-hidden", !0), r.forEach((t) => Dn(e, t.element)));
			}
			setDropdownAttrs() {
				let e = this.chart, t = e.rangeSelector && e.rangeSelector.dropdown;
				if (t) {
					let n = e.langFormat("accessibility.rangeSelector.dropdownLabel", { rangeTitle: e.options.lang.rangeSelectorZoom });
					t.setAttribute("aria-label", n), t.setAttribute("tabindex", -1);
				}
			}
			setRangeButtonAttrs(e) {
				(0, v.attr)(e.element, {
					tabindex: -1,
					role: "button"
				});
			}
			setRangeInputAttrs(e, t) {
				let n = this.chart;
				(0, v.attr)(e, {
					tabindex: -1,
					"aria-label": n.langFormat(t, { chart: n })
				});
			}
			onButtonNavKbdArrowKey(e, t) {
				let n = e.response, r = this.keyCodes, i = this.chart, a = i.options.accessibility.keyboardNavigation.wrapAround, o = t === r.left || t === r.up ? -1 : 1;
				return i.highlightRangeSelectorButton(i.highlightedRangeSelectorItemIx + o) ? n.success : a ? (e.init(o), n.success) : n[o > 0 ? "next" : "prev"];
			}
			onButtonNavKbdClick(e) {
				let t = e.response, n = this.chart;
				return n.oldRangeSelectorItemState !== 3 && this.fakeClickEvent(n.rangeSelector.buttons[n.highlightedRangeSelectorItemIx].element), t.success;
			}
			onAfterBtnClick() {
				let e = this.chart, t = On(e.xAxis[0]), n = e.langFormat("accessibility.rangeSelector.clickButtonAnnouncement", {
					chart: e,
					axisRangeDescription: t
				});
				n && this.announcer.announce(n);
			}
			onInputKbdMove(e) {
				let t = this.chart, n = t.rangeSelector, r = t.highlightedInputRangeIx = (t.highlightedInputRangeIx || 0) + e;
				if (r > 1 || r < 0) {
					if (t.accessibility) return t.accessibility.keyboardNavigation.exiting = !0, t.accessibility.keyboardNavigation.tabindexContainer.focus(), t.accessibility.keyboardNavigation.move(e);
				} else if (n) {
					let e = n[r ? "maxDateBox" : "minDateBox"], i = n[r ? "maxInput" : "minInput"];
					e && i && t.setFocusToElement(e, i);
				}
				return !0;
			}
			onInputNavInit(e) {
				let t = this, n = this.chart, r = e > 0 ? 0 : 1, i = n.rangeSelector, a = i && i[r ? "maxDateBox" : "minDateBox"], o = i && i.minInput, s = i && i.maxInput;
				if (n.highlightedInputRangeIx = r, a && o && s) {
					n.setFocusToElement(a, r ? s : o), this.removeInputKeydownHandler && this.removeInputKeydownHandler();
					let e = (e) => {
						(e.which || e.keyCode) === this.keyCodes.tab && t.onInputKbdMove(e.shiftKey ? -1 : 1) && (e.preventDefault(), e.stopPropagation());
					}, i = (0, v.addEvent)(o, "keydown", e), c = (0, v.addEvent)(s, "keydown", e);
					this.removeInputKeydownHandler = () => {
						i(), c();
					};
				}
			}
			onInputNavTerminate() {
				let e = this.chart.rangeSelector || {};
				e.maxInput && e.hideInput("max"), e.minInput && e.hideInput("min"), this.removeInputKeydownHandler && (this.removeInputKeydownHandler(), delete this.removeInputKeydownHandler);
			}
			initDropdownNav() {
				let e = this.chart, t = e.rangeSelector, n = t && t.dropdown;
				t && n && (e.setFocusToElement(t.buttonGroup, n), this.removeDropdownKeydownHandler && this.removeDropdownKeydownHandler(), this.removeDropdownKeydownHandler = (0, v.addEvent)(n, "keydown", (t) => {
					let n = (t.which || t.keyCode) === this.keyCodes.tab, r = e.accessibility;
					n && (t.preventDefault(), t.stopPropagation(), r && r.keyboardNavigation.move(t.shiftKey ? -1 : 1));
				}));
			}
			getRangeSelectorButtonNavigation() {
				let e = this.chart, t = this.keyCodes, n = this;
				return new R(e, {
					keyCodeMap: [[[
						t.left,
						t.right,
						t.up,
						t.down
					], function(e) {
						return n.onButtonNavKbdArrowKey(this, e);
					}], [[t.enter, t.space], function() {
						return n.onButtonNavKbdClick(this);
					}]],
					validate: function() {
						return !!(e.rangeSelector && e.rangeSelector.buttons && e.rangeSelector.buttons.length);
					},
					init: function(t) {
						let r = e.rangeSelector;
						if (r && r.hasVisibleDropdown) n.initDropdownNav();
						else if (r) {
							let n = r.buttons.length - 1;
							e.highlightRangeSelectorButton(t > 0 ? 0 : n);
						}
					},
					terminate: function() {
						n.removeDropdownKeydownHandler && (n.removeDropdownKeydownHandler(), delete n.removeDropdownKeydownHandler);
					}
				});
			}
			getRangeSelectorInputNavigation() {
				let e = this.chart, t = this;
				return new R(e, {
					keyCodeMap: [],
					validate: function() {
						return !!(e.rangeSelector && e.rangeSelector.inputGroup && e.rangeSelector.inputGroup.element.style.visibility !== "hidden" && !1 !== e.options.rangeSelector.inputEnabled && e.rangeSelector.minInput && e.rangeSelector.maxInput);
					},
					init: function(e) {
						t.onInputNavInit(e);
					},
					terminate: function() {
						t.onInputNavTerminate();
					}
				});
			}
			getKeyboardNavigation() {
				return [this.getRangeSelectorButtonNavigation(), this.getRangeSelectorInputNavigation()];
			}
			destroy() {
				this.removeDropdownKeydownHandler && this.removeDropdownKeydownHandler(), this.removeInputKeydownHandler && this.removeInputKeydownHandler(), this.announcer && this.announcer.destroy();
			}
		}
		function An(e) {
			let t = this.rangeSelector && this.rangeSelector.buttons || [], n = this.highlightedRangeSelectorItemIx, r = this.rangeSelector && this.rangeSelector.selected;
			return n !== void 0 && t[n] && n !== r && t[n].setState(this.oldRangeSelectorItemState || 0), this.highlightedRangeSelectorItemIx = e, !!t[e] && (this.setFocusToElement(t[e].box, t[e].element), e !== r && (this.oldRangeSelectorItemState = t[e].state, t[e].setState(1)), !0);
		}
		function jn() {
			let e = this.chart.accessibility;
			if (e && e.components.rangeSelector) return e.components.rangeSelector.onAfterBtnClick();
		}
		(kn ||= {}).compose = function(e, t) {
			let n = e.prototype;
			n.highlightRangeSelectorButton || (n.highlightRangeSelectorButton = An, (0, v.addEvent)(t, "afterBtnClick", jn));
		};
		let Mn = kn, { composed: Nn } = y();
		(function(e) {
			function t(e) {
				(0, v.merge)(!0, e, { marker: {
					enabled: !0,
					states: { normal: { opacity: 0 } }
				} });
			}
			function n(e) {
				return e.marker.states && e.marker.states.normal && e.marker.states.normal.opacity;
			}
			function r(e) {
				return !!(e._hasPointMarkers && e.points && e.points.length);
			}
			function i() {
				this.chart.styledMode && (this.markerGroup && this.markerGroup[this.a11yMarkersForced ? "addClass" : "removeClass"]("highcharts-a11y-markers-hidden"), r(this) && this.points.forEach((e) => {
					e.graphic && (e.graphic[e.hasForcedA11yMarker ? "addClass" : "removeClass"]("highcharts-a11y-marker-hidden"), e.graphic[!1 === e.hasForcedA11yMarker ? "addClass" : "removeClass"]("highcharts-a11y-marker-visible"));
				}));
			}
			function a(e) {
				this.resetA11yMarkerOptions = (0, v.merge)(e.options.marker || {}, this.userOptions.marker || {});
			}
			function o() {
				let e = this.options;
				(function(e) {
					let t, n = e.chart.options.accessibility.enabled, r = !1 !== (e.options.accessibility && e.options.accessibility.enabled);
					return n && r && (t = e.chart.options.accessibility, e.points.length < t.series.pointDescriptionEnabledThreshold || !1 === t.series.pointDescriptionEnabledThreshold);
				})(this) ? (e.marker?.enabled === !1 && (this.a11yMarkersForced = !0, t(this.options)), r(this) && function(e) {
					let r = e.points.length;
					for (; r--;) {
						let a = e.points[r], o = a.options, s = a.hasForcedA11yMarker;
						if (delete a.hasForcedA11yMarker, o.marker) {
							var i;
							let e = s && n(o) === 0;
							o.marker.enabled && !e ? (i = o, (0, v.merge)(!0, i.marker, { states: { normal: { opacity: n(i) || 1 } } }), a.hasForcedA11yMarker = !1) : !1 === o.marker.enabled && (t(o), a.hasForcedA11yMarker = !0);
						}
					}
				}(this)) : this.a11yMarkersForced ? (delete this.a11yMarkersForced, this.isDirty = !0, function(e) {
					let t = e.resetA11yMarkerOptions;
					if (t) {
						let n = t.states && t.states.normal && t.states.normal.opacity;
						e.chart.styledMode && !1 === t.enabled && s(e), e.userOptions && e.userOptions.marker && (e.userOptions.marker.enabled = !0), e.update({ marker: {
							enabled: t.enabled,
							states: { normal: { opacity: n } }
						} });
					}
				}(this), e.marker?.enabled === !1 && delete this.resetA11yMarkerOptions) : this.chart.styledMode && e.marker?.enabled === !1 && !r(this) && s(this);
			}
			function s(e) {
				e.points?.forEach((e) => {
					e.graphic &&= e.graphic.destroy();
				});
			}
			function c() {
				this.boosted && this.a11yMarkersForced && ((0, v.merge)(!0, this.options, { marker: { enabled: !1 } }), delete this.a11yMarkersForced);
			}
			e.compose = function(e) {
				(0, v.pushUnique)(Nn, "A11y.FM") && ((0, v.addEvent)(e, "afterSetOptions", a), (0, v.addEvent)(e, "render", o), (0, v.addEvent)(e, "afterRender", i), (0, v.addEvent)(e, "renderCanvas", c));
			};
		})(p ||= {});
		let Pn = p;
		var Fn = g(260), In = g.n(Fn), Ln = g(820), Rn = g.n(Ln);
		let { seriesTypes: zn } = _t(), { doc: Bn } = y(), { getPointFromXY: Vn, getSeriesFromName: Hn, scrollAxisToPoint: Un } = N;
		function Wn(e) {
			let t = e.index, n = e.series.points, r = n.length;
			if (n[t] === e) return t;
			for (; r--;) if (n[r] === e) return r;
		}
		function Gn(e) {
			let t = e.chart.options.accessibility.keyboardNavigation.seriesNavigation, n = e.options.accessibility || {}, r = n.keyboardNavigation;
			return r && !1 === r.enabled || !1 === n.enabled || !1 === e.options.enableMouseTracking || !e.visible || t.pointNavigationEnabledThreshold && +t.pointNavigationEnabledThreshold <= e.points.length;
		}
		function Kn(e) {
			let t = e.series, n = t.options.nullInteraction, r = e.options.accessibility, i = t.chart.options.accessibility, a = r?.enabled === !1;
			return i.keyboardNavigation.seriesNavigation.skipNullPoints ?? (!(!e.isNull || n) && !1 === e.visible || !1 === e.isInside || a || Gn(t));
		}
		function qn(e) {
			let t = e.series || [], n = t.length;
			for (let e = 0; e < n; ++e) if (!Gn(t[e])) {
				let n = function(e) {
					let t = e.points || [], n = t.length;
					for (let e = 0; e < n; ++e) if (!Kn(t[e])) return t[e];
					return null;
				}(t[e]);
				if (n) return n;
			}
			return null;
		}
		function Jn(e) {
			let t = e.series.length, n = !1;
			for (; t-- && (e.highlightedPoint = e.series[t].points[e.series[t].points.length - 1], !(n = e.series[t].highlightNextValidPoint())););
			return n;
		}
		function $(e) {
			delete e.highlightedPoint;
			let t = qn(e);
			return !!t && t.highlight();
		}
		class Yn {
			constructor(e, t) {
				this.keyCodes = t, this.chart = e;
			}
			init() {
				let e = this, t = this.chart, n = this.eventProvider = new ae();
				n.addEvent(Rn(), "destroy", function() {
					return e.onSeriesDestroy(this);
				}), n.addEvent(t, "afterApplyDrilldown", function() {
					let e;
					(e = qn(this)) && e.highlight(!1);
				}), n.addEvent(t, "drilldown", function(t) {
					let n = t.point, r = n.series;
					e.lastDrilledDownPoint = {
						x: n.x,
						y: n.y,
						seriesName: r ? r.name : ""
					};
				}), n.addEvent(t, "drillupall", function() {
					setTimeout(function() {
						e.onDrillupAll();
					}, 10);
				}), n.addEvent(In(), "afterSetState", function() {
					let e = this.graphic && this.graphic.element, n = Bn.activeElement, r = n && n.getAttribute("class"), i = r && r.indexOf("highcharts-a11y-proxy-element") > -1;
					t.highlightedPoint === this && n !== e && !i && e && e.focus && e.focus();
				});
			}
			onDrillupAll() {
				let e, t = this.lastDrilledDownPoint, n = this.chart, r = t && Hn(n, t.seriesName);
				t && r && (0, v.defined)(t.x) && (0, v.defined)(t.y) && (e = Vn(r, t.x, t.y)), e ||= qn(n), n.container && n.container.focus(), e && e.highlight && e.highlight(!1);
			}
			getKeyboardNavigationHandler() {
				let e = this, t = this.keyCodes, n = this.chart, r = n.inverted;
				return new R(n, {
					keyCodeMap: [
						[r ? [t.up, t.down] : [t.left, t.right], function(t) {
							return e.onKbdSideways(this, t);
						}],
						[r ? [t.left, t.right] : [t.up, t.down], function(t) {
							return e.onKbdVertical(this, t);
						}],
						[[t.enter, t.space], function(e, t) {
							let r = n.highlightedPoint;
							if (r) {
								let { plotLeft: e, plotTop: n } = this.chart, { plotX: i = 0, plotY: a = 0 } = r;
								t = {
									...t,
									chartX: e + i,
									chartY: n + a,
									point: r,
									target: r.graphic?.element || t.target
								}, (0, v.fireEvent)(r.series, "click", t), r.firePointEvent("click", t);
							}
							return this.response.success;
						}],
						[[t.home], function() {
							return $(n), this.response.success;
						}],
						[[t.end], function() {
							return Jn(n), this.response.success;
						}],
						[[t.pageDown, t.pageUp], function(e) {
							return n.highlightAdjacentSeries(e === t.pageDown), this.response.success;
						}]
					],
					init: function() {
						return e.onHandlerInit(this);
					},
					validate: function() {
						return !!qn(n);
					},
					terminate: function() {
						return e.onHandlerTerminate();
					}
				});
			}
			onKbdSideways(e, t) {
				let n = this.keyCodes, r = t === n.right || t === n.down;
				return this.attemptHighlightAdjacentPoint(e, r);
			}
			onHandlerInit(e) {
				let t = this.chart;
				return t.options.accessibility.keyboardNavigation.seriesNavigation.rememberPointFocus && t.highlightedPoint ? t.highlightedPoint.highlight() : $(t), e.response.success;
			}
			onKbdVertical(e, t) {
				let n = this.chart, r = this.keyCodes, i = t === r.down || t === r.right, a = n.options.accessibility.keyboardNavigation.seriesNavigation;
				return a.mode && a.mode === "serialize" ? this.attemptHighlightAdjacentPoint(e, i) : (n[n.highlightedPoint && n.highlightedPoint.series.keyboardMoveVertical ? "highlightAdjacentPointVertical" : "highlightAdjacentSeries"](i), e.response.success);
			}
			onHandlerTerminate() {
				let e = this.chart, t = e.options.accessibility.keyboardNavigation;
				e.tooltip && e.tooltip.hide(0);
				let n = e.highlightedPoint && e.highlightedPoint.series;
				n && n.onMouseOut && n.onMouseOut(), e.highlightedPoint && e.highlightedPoint.onMouseOut && e.highlightedPoint.onMouseOut(), t.seriesNavigation.rememberPointFocus || delete e.highlightedPoint;
			}
			attemptHighlightAdjacentPoint(e, t) {
				let n = this.chart, r = n.options.accessibility.keyboardNavigation.wrapAround;
				return n.highlightAdjacentPoint(t) || r && (t ? $(n) : Jn(n)) ? e.response.success : e.response[t ? "next" : "prev"];
			}
			onSeriesDestroy(e) {
				let t = this.chart;
				t.highlightedPoint && t.highlightedPoint.series === e && (delete t.highlightedPoint, t.focusElement && t.focusElement.removeFocusBorder());
			}
			destroy() {
				this.eventProvider.removeAddedEvents();
			}
		}
		(function(e) {
			function t(e) {
				let t, n, r = this.series, i = this.highlightedPoint, a = i && Wn(i) || 0, o = i && i.series.points || [], s = this.series && this.series[this.series.length - 1], c = s && s.points && s.points[s.points.length - 1];
				if (!r[0] || !r[0].points) return !1;
				if (i) {
					if (t = r[i.series.index + (e ? 1 : -1)], (n = o[a + (e ? 1 : -1)]) || !t || (n = t.points[e ? 0 : t.points.length - 1]), !n) return !1;
				} else n = e ? r[0].points[0] : c;
				return Kn(n) ? (Gn(t = n.series) ? this.highlightedPoint = e ? t.points[t.points.length - 1] : t.points[0] : this.highlightedPoint = n, this.highlightAdjacentPoint(e)) : n.highlight();
			}
			function n(e) {
				let t = this.highlightedPoint, n = Infinity, r;
				return !!(0, v.defined)(t.plotX) && !!(0, v.defined)(t.plotY) && (this.series.forEach((i) => {
					Gn(i) || i.points.forEach((a) => {
						if (!(0, v.defined)(a.plotY) || !(0, v.defined)(a.plotX) || a === t) return;
						let o = a.plotY - t.plotY, s = Math.abs(a.plotX - t.plotX), c = Math.abs(o) * Math.abs(o) + s * s * 4;
						i.yAxis && i.yAxis.reversed && (o *= -1), !(o <= 0 && e || o >= 0 && !e || c < 5 || Kn(a)) && c < n && (n = c, r = a);
					});
				}), !!r && r.highlight());
			}
			function r(e) {
				let t, n, r, i = this.highlightedPoint, a = this.series && this.series[this.series.length - 1], o = a && a.points && a.points[a.points.length - 1];
				return this.highlightedPoint ? !!(t = this.series[i.series.index + (e ? -1 : 1)]) && !!(n = function(e, t, n, r) {
					let i = Infinity, a, o, s, c = t.points.length, l = (e) => !((0, v.defined)(e.plotX) && (0, v.defined)(e.plotY));
					if (!l(e)) {
						for (; c--;) !l(a = t.points[c]) && (s = (e.plotX - a.plotX) * (e.plotX - a.plotX) * 4 + (e.plotY - a.plotY) * (e.plotY - a.plotY) * 1) < i && (i = s, o = c);
						return (0, v.defined)(o) ? t.points[o] : void 0;
					}
				}(i, t, 4)) && (Gn(t) ? (n.highlight(), (r = this.highlightAdjacentSeries(e)) ? r : (i.highlight(), !1)) : (n.highlight(), n.series.highlightNextValidPoint())) : (t = e ? this.series && this.series[0] : a, !!(n = e ? t && t.points && t.points[0] : o) && n.highlight());
			}
			function i(e = !0) {
				let t = this.series.chart, n = t.tooltip?.label?.element;
				(!this.isNull || this.series.options?.nullInteraction) && e ? this.onMouseOver() : t.tooltip && t.tooltip.hide(0), Un(this), this.graphic && (t.setFocusToElement(this.graphic), !e && t.focusElement && t.focusElement.removeFocusBorder()), t.highlightedPoint = this;
				let r = n?.getBoundingClientRect().top;
				if (n && r && r < 0) {
					let e = window.scrollY;
					window.scrollTo({
						behavior: "smooth",
						top: e + r
					});
				}
				return this;
			}
			function a() {
				let e = this.chart.highlightedPoint, t = (e && e.series) === this ? Wn(e) : 0, n = this.points, r = n.length;
				if (n && r) {
					for (let e = t; e < r; ++e) if (!Kn(n[e])) return n[e].highlight();
					for (let e = t; e >= 0; --e) if (!Kn(n[e])) return n[e].highlight();
				}
				return !1;
			}
			e.compose = function(e, o, s) {
				let c = e.prototype, l = o.prototype, u = s.prototype;
				c.highlightAdjacentPoint || (c.highlightAdjacentPoint = t, c.highlightAdjacentPointVertical = n, c.highlightAdjacentSeries = r, l.highlight = i, u.keyboardMoveVertical = !0, [
					"column",
					"gantt",
					"pie"
				].forEach((e) => {
					zn[e] && (zn[e].prototype.keyboardMoveVertical = !1);
				}), u.highlightNextValidPoint = a);
			};
		})(Yn ||= {});
		let Xn = Yn, { hideSeriesFromAT: Zn } = N, { describeSeries: Qn } = an, $n = class extends L {
			static compose(e, t, n) {
				mn.compose(n), Pn.compose(n), Xn.compose(e, t, n);
			}
			init() {
				this.newDataAnnouncer = new mn(this.chart), this.newDataAnnouncer.init(), this.keyboardNavigation = new Xn(this.chart, this.keyCodes), this.keyboardNavigation.init(), this.hideTooltipFromATWhenShown(), this.hideSeriesLabelsFromATWhenShown();
			}
			hideTooltipFromATWhenShown() {
				let e = this;
				this.chart.tooltip && this.addEvent(this.chart.tooltip.constructor, "refresh", function() {
					this.chart === e.chart && this.label && this.label.element && this.label.element.setAttribute("aria-hidden", !0);
				});
			}
			hideSeriesLabelsFromATWhenShown() {
				this.addEvent(this.chart, "afterDrawSeriesLabels", function() {
					this.series.forEach(function(e) {
						e.labelBySeries && e.labelBySeries.attr("aria-hidden", !0);
					});
				});
			}
			onChartRender() {
				this.chart.series.forEach(function(e) {
					!1 !== (e.options.accessibility && e.options.accessibility.enabled) && e.visible && e.getPointsCollection().length !== 0 ? Qn(e) : Zn(e);
				});
			}
			getKeyboardNavigation() {
				return this.keyboardNavigation.getKeyboardNavigationHandler();
			}
			destroy() {
				this.newDataAnnouncer.destroy(), this.keyboardNavigation.destroy();
			}
		}, { unhideChartElementFromAT: er } = N, { getFakeMouseEvent: tr } = T, nr = class extends L {
			constructor() {
				super(...arguments), this.focusedMapNavButtonIx = -1;
			}
			init() {
				let e = this, t = this.chart;
				this.proxyProvider.addGroup("zoom", "div"), [
					"afterShowResetZoom",
					"afterApplyDrilldown",
					"drillupall"
				].forEach((n) => {
					e.addEvent(t, n, function() {
						e.updateProxyOverlays();
					});
				});
			}
			onChartUpdate() {
				let e = this.chart, t = this;
				e.mapNavigation && e.mapNavigation.navButtons.forEach((n, r) => {
					er(e, n.element), t.setMapNavButtonAttrs(n.element, "accessibility.zoom.mapZoom" + (r ? "Out" : "In"));
				});
			}
			setMapNavButtonAttrs(e, t) {
				let n = this.chart, r = n.langFormat(t, { chart: n });
				(0, v.attr)(e, {
					tabindex: -1,
					role: "button",
					"aria-label": r
				});
			}
			onChartRender() {
				this.updateProxyOverlays();
			}
			updateProxyOverlays() {
				let e = this.chart;
				if (this.proxyProvider.clearGroup("zoom"), e.resetZoomButton && this.createZoomProxyButton(e.resetZoomButton, "resetZoomProxyButton", e.langFormat("accessibility.zoom.resetZoomButton", { chart: e })), e.drillUpButton && e.breadcrumbs && e.breadcrumbs.list) {
					let t = e.breadcrumbs.list[e.breadcrumbs.list.length - 1];
					this.createZoomProxyButton(e.drillUpButton, "drillUpProxyButton", e.langFormat("accessibility.drillUpButton", {
						chart: e,
						buttonText: e.breadcrumbs.getButtonText(t)
					}));
				}
			}
			createZoomProxyButton(e, t, n) {
				this[t] = this.proxyProvider.addProxyElement("zoom", { click: e }, "button", {
					"aria-label": n,
					tabindex: -1
				});
			}
			getMapZoomNavigation() {
				let e = this.keyCodes, t = this.chart, n = this;
				return new R(t, {
					keyCodeMap: [
						[[
							e.up,
							e.down,
							e.left,
							e.right
						], function(e) {
							return n.onMapKbdArrow(this, e);
						}],
						[[e.tab], function(e, t) {
							return n.onMapKbdTab(this, t);
						}],
						[[e.space, e.enter], function() {
							return n.onMapKbdClick(this);
						}]
					],
					validate: function() {
						return !!(t.mapView && t.mapNavigation && t.mapNavigation.navButtons.length);
					},
					init: function(e) {
						return n.onMapNavInit(e);
					}
				});
			}
			onMapKbdArrow(e, t) {
				let n = this.chart, r = this.keyCodes, i = n.container, a = t === r.up || t === r.down, o = t === r.left || t === r.up ? 1 : -1, s = (a ? n.plotHeight : n.plotWidth) / 10 * o, c = 10 * Math.random(), l = {
					x: i.offsetLeft + n.plotLeft + n.plotWidth / 2 + c,
					y: i.offsetTop + n.plotTop + n.plotHeight / 2 + c
				}, u = a ? {
					x: l.x,
					y: l.y + s
				} : {
					x: l.x + s,
					y: l.y
				};
				return [
					tr("mousedown", l),
					tr("mousemove", u),
					tr("mouseup", u)
				].forEach((e) => i.dispatchEvent(e)), e.response.success;
			}
			onMapKbdTab(e, t) {
				let n = this.chart, r = e.response, i = t.shiftKey, a = i && !this.focusedMapNavButtonIx || !i && this.focusedMapNavButtonIx;
				if (n.mapNavigation.navButtons[this.focusedMapNavButtonIx].setState(0), a) return n.mapView && n.mapView.zoomBy(), r[i ? "prev" : "next"];
				this.focusedMapNavButtonIx += i ? -1 : 1;
				let o = n.mapNavigation.navButtons[this.focusedMapNavButtonIx];
				return n.setFocusToElement(o.box, o.element), o.setState(2), r.success;
			}
			onMapKbdClick(e) {
				let t = this.chart.mapNavigation.navButtons[this.focusedMapNavButtonIx].element;
				return this.fakeClickEvent(t), e.response.success;
			}
			onMapNavInit(e) {
				let t = this.chart, n = t.mapNavigation.navButtons[0], r = t.mapNavigation.navButtons[1], i = e > 0 ? n : r;
				t.setFocusToElement(i.box, i.element), i.setState(2), this.focusedMapNavButtonIx = e > 0 ? 0 : 1;
			}
			simpleButtonNavigation(e, t, n) {
				let r = this.keyCodes, i = this, a = this.chart;
				return new R(a, {
					keyCodeMap: [[[
						r.tab,
						r.up,
						r.down,
						r.left,
						r.right
					], function(e, t) {
						let n = e === r.tab && t.shiftKey || e === r.left || e === r.up;
						return this.response[n ? "prev" : "next"];
					}], [[r.space, r.enter], function() {
						let e = n(this, a);
						return (0, v.pick)(e, this.response.success);
					}]],
					validate: function() {
						return a[e] && a[e].box && i[t].innerElement;
					},
					init: function() {
						a.setFocusToElement(a[e].box, i[t].innerElement);
					}
				});
			}
			getKeyboardNavigation() {
				return [
					this.simpleButtonNavigation("resetZoomButton", "resetZoomProxyButton", function(e, t) {
						t.zoomOut();
					}),
					this.simpleButtonNavigation("drillUpButton", "drillUpProxyButton", function(e, t) {
						return t.drillUp(), e.response.prev;
					}),
					this.getMapZoomNavigation()
				];
			}
		}, { doc: rr, isMS: ir, win: ar } = y(), or = function() {
			if (ir && ar.getComputedStyle) {
				let e = rr.createElement("div");
				e.style.backgroundImage = "url(data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==)", rr.body.appendChild(e);
				let t = (e.currentStyle || ar.getComputedStyle(e)).backgroundImage;
				return rr.body.removeChild(e), t === "none";
			}
			return ar.matchMedia && ar.matchMedia("(forced-colors: active)").matches;
		}, sr = function(e) {
			let t = e.highContrastState ||= {};
			t.active = !0, t.applying = !0;
			try {
				let t = e.options.accessibility.highContrastTheme;
				e.update(t, !1);
				let n = t.colors?.length > 1;
				e.series.forEach(function(e) {
					let r = t.plotOptions[e.type] || {}, i = n && e.colorIndex !== void 0 ? t.colors[e.colorIndex] : r.color || "window", a = {
						color: r.color || "windowText",
						colors: n ? t.colors : [r.color || "windowText"],
						borderColor: r.borderColor || "window",
						fillColor: i
					};
					e.update(a, !1), e.points && e.points.forEach(function(e) {
						e.options && e.options.color && e.update({
							color: r.color || "windowText",
							borderColor: r.borderColor || "window"
						}, !1);
					});
				}), e.redraw();
			} finally {
				delete t.applying;
			}
		}, cr = {
			chart: { backgroundColor: "window" },
			title: { style: { color: "windowText" } },
			subtitle: { style: { color: "windowText" } },
			colorAxis: {
				minColor: "windowText",
				maxColor: "windowText",
				stops: [],
				dataClasses: []
			},
			colors: ["windowText"],
			xAxis: {
				gridLineColor: "windowText",
				labels: { style: { color: "windowText" } },
				lineColor: "windowText",
				minorGridLineColor: "windowText",
				tickColor: "windowText",
				title: { style: { color: "windowText" } }
			},
			yAxis: {
				gridLineColor: "windowText",
				labels: { style: { color: "windowText" } },
				lineColor: "windowText",
				minorGridLineColor: "windowText",
				tickColor: "windowText",
				title: { style: { color: "windowText" } }
			},
			tooltip: {
				backgroundColor: "window",
				borderColor: "windowText",
				style: { color: "windowText" }
			},
			plotOptions: {
				series: {
					lineColor: "windowText",
					fillColor: "window",
					borderColor: "windowText",
					edgeColor: "windowText",
					borderWidth: 1,
					dataLabels: {
						connectorColor: "windowText",
						color: "windowText",
						style: {
							color: "windowText",
							textOutline: "none"
						}
					},
					marker: {
						lineColor: "windowText",
						fillColor: "windowText"
					}
				},
				pie: {
					color: "window",
					colors: ["window"],
					borderColor: "windowText",
					borderWidth: 1
				},
				boxplot: { fillColor: "window" },
				candlestick: {
					lineColor: "windowText",
					fillColor: "window"
				},
				errorbar: { fillColor: "window" }
			},
			legend: {
				backgroundColor: "window",
				itemStyle: { color: "windowText" },
				itemHoverStyle: { color: "windowText" },
				itemHiddenStyle: { color: "#555" },
				title: { style: { color: "windowText" } }
			},
			credits: { style: { color: "windowText" } },
			drilldown: {
				activeAxisLabelStyle: { color: "windowText" },
				activeDataLabelStyle: { color: "windowText" }
			},
			navigation: { buttonOptions: {
				symbolStroke: "windowText",
				theme: { fill: "window" }
			} },
			rangeSelector: {
				buttonTheme: {
					fill: "window",
					stroke: "windowText",
					style: { color: "windowText" },
					states: {
						hover: {
							fill: "window",
							stroke: "windowText",
							style: { color: "windowText" }
						},
						select: {
							fill: "#444",
							stroke: "windowText",
							style: { color: "windowText" }
						}
					}
				},
				inputBoxBorderColor: "windowText",
				inputStyle: {
					backgroundColor: "window",
					color: "windowText"
				},
				labelStyle: { color: "windowText" }
			},
			navigator: {
				handles: {
					backgroundColor: "window",
					borderColor: "windowText"
				},
				outlineColor: "windowText",
				maskFill: "transparent",
				series: {
					color: "windowText",
					lineColor: "windowText"
				},
				xAxis: { gridLineColor: "windowText" }
			},
			scrollbar: {
				barBackgroundColor: "#444",
				barBorderColor: "windowText",
				buttonArrowColor: "windowText",
				buttonBackgroundColor: "window",
				buttonBorderColor: "windowText",
				rifleColor: "windowText",
				trackBackgroundColor: "window",
				trackBorderColor: "windowText"
			}
		};
		function lr(e, t, n) {
			let r = e, i, a = 0;
			for (; a < t.length - 1; ++a) r = r[i = t[a]] = (0, v.pick)(r[i], {});
			r[t[t.length - 1]] = n;
		}
		function ur(e, t, n, r) {
			function i(e, t) {
				return t.reduce(function(e, t) {
					return e[t];
				}, e);
			}
			let a = i(e.options, t), o = i(e.options, n);
			Object.keys(r).forEach(function(i) {
				let s = a[i];
				s !== void 0 && (lr(o, r[i], s), (0, v.error)(32, !1, e, { [t.join(".") + "." + i]: n.join(".") + "." + r[i].join(".") }));
			});
		}
		let dr = function(e) {
			let t, n, r;
			t = e.options.chart, n = e.options.accessibility || {}, ["description", "typeDescription"].forEach(function(r) {
				t[r] && (n[r] = t[r], (0, v.error)(32, !1, e, { [`chart.${r}`]: `use accessibility.${r}` }));
			}), e.axes.forEach(function(t) {
				let n = t.options;
				n && n.description && (n.accessibility = n.accessibility || {}, n.accessibility.description = n.description, (0, v.error)(32, !1, e, { "axis.description": "use axis.accessibility.description" }));
			}), e.series && (r = {
				description: ["accessibility", "description"],
				exposeElementToA11y: ["accessibility", "exposeAsGroupOnly"],
				pointDescriptionFormat: [
					"accessibility",
					"point",
					"descriptionFormat"
				],
				pointDescriptionFormatter: [
					"accessibility",
					"point",
					"descriptionFormatter"
				],
				skipKeyboardNavigation: [
					"accessibility",
					"keyboardNavigation",
					"enabled"
				],
				"accessibility.pointDescriptionFormatter": [
					"accessibility",
					"point",
					"descriptionFormatter"
				]
			}, e.series.forEach(function(t) {
				Object.keys(r).forEach(function(n) {
					let i = t.options[n];
					n === "accessibility.pointDescriptionFormatter" && (i = t.options.accessibility && t.options.accessibility.pointDescriptionFormatter), i !== void 0 && (lr(t.options, r[n], n === "skipKeyboardNavigation" ? !i : i), (0, v.error)(32, !1, e, { [`series.${n}`]: "series." + r[n].join(".") }));
				});
			})), ur(e, ["accessibility"], ["accessibility"], {
				pointDateFormat: ["point", "dateFormat"],
				pointDateFormatter: ["point", "dateFormatter"],
				pointDescriptionFormatter: ["point", "descriptionFormatter"],
				pointDescriptionThreshold: ["series", "pointDescriptionEnabledThreshold"],
				pointNavigationThreshold: [
					"keyboardNavigation",
					"seriesNavigation",
					"pointNavigationEnabledThreshold"
				],
				pointValueDecimals: ["point", "valueDecimals"],
				pointValuePrefix: ["point", "valuePrefix"],
				pointValueSuffix: ["point", "valueSuffix"],
				screenReaderSectionFormatter: ["screenReaderSection", "beforeChartFormatter"],
				describeSingleSeries: ["series", "describeSingleSeries"],
				seriesDescriptionFormatter: ["series", "descriptionFormatter"],
				onTableAnchorClick: ["screenReaderSection", "onViewDataTableClick"],
				axisRangeDateFormat: ["screenReaderSection", "axisRangeDateFormat"]
			}), ur(e, ["accessibility", "keyboardNavigation"], [
				"accessibility",
				"keyboardNavigation",
				"seriesNavigation"
			], {
				skipNullPoints: ["skipNullPoints"],
				mode: ["mode"]
			}), ur(e, ["lang", "accessibility"], ["lang", "accessibility"], {
				legendItem: ["legend", "legendItem"],
				legendLabel: ["legend", "legendLabel"],
				mapZoomIn: ["zoom", "mapZoomIn"],
				mapZoomOut: ["zoom", "mapZoomOut"],
				resetZoomButton: ["zoom", "resetZoomButton"],
				screenReaderRegionLabel: ["screenReaderSection", "beforeRegionLabel"],
				rangeSelectorButton: ["rangeSelector", "buttonText"],
				rangeSelectorMaxInput: ["rangeSelector", "maxInputLabel"],
				rangeSelectorMinInput: ["rangeSelector", "minInputLabel"],
				svgContainerEnd: ["screenReaderSection", "endOfChartMarker"],
				viewAsDataTable: ["table", "viewAsDataTableButtonText"],
				tableSummary: ["table", "tableSummary"]
			});
		}, { defaultOptions: fr } = y(), { doc: pr } = y(), { removeElement: mr } = T;
		class hr {
			constructor(e) {
				this.init(e);
			}
			init(e) {
				if (this.chart = e, !pr?.addEventListener) {
					this.zombie = !0, this.components = {}, e.renderTo.setAttribute("aria-hidden", !0);
					return;
				}
				dr(e), this.proxyProvider = new En(this.chart), this.initComponents(), this.keyboardNavigation = new Ve(e, this.components);
			}
			initComponents() {
				let e = this.chart, t = this.proxyProvider, n = e.options.accessibility;
				this.components = {
					container: new ue(),
					infoRegions: new ke(),
					legend: new et(),
					chartMenu: new Pe(),
					rangeSelector: new Mn(),
					series: new $n(),
					zoom: new nr(),
					navigator: new Ut()
				}, n.customComponents && (0, v.extend)(this.components, n.customComponents);
				let r = this.components;
				this.getComponentOrder().forEach(function(n) {
					r[n].initBase(e, t), r[n].init();
				});
			}
			getComponentOrder() {
				return this.components ? this.components.series ? ["series"].concat(Object.keys(this.components).filter((e) => e !== "series")) : Object.keys(this.components) : [];
			}
			update() {
				let e = this.components, t = this.chart, n = t.options.accessibility;
				(0, v.fireEvent)(t, "beforeA11yUpdate"), t.types = this.getChartTypes();
				let r = n.keyboardNavigation.order;
				this.proxyProvider.updateGroupOrder(r), this.getComponentOrder().forEach(function(n) {
					e[n].onChartUpdate(), (0, v.fireEvent)(t, "afterA11yComponentUpdate", {
						name: n,
						component: e[n]
					});
				}), this.keyboardNavigation.update(r), !t.highContrastState?.applying && !1 !== n.highContrastMode && (t.highContrastState?.active || or() || !0 === n.highContrastMode) && sr(t), (0, v.fireEvent)(t, "afterA11yUpdate", { accessibility: this });
			}
			destroy() {
				let e = this.chart || {}, t = this.components;
				Object.keys(t).forEach(function(e) {
					t[e].destroy(), t[e].destroyBase();
				}), this.proxyProvider && this.proxyProvider.destroy(), e.announcerContainer && mr(e.announcerContainer), this.keyboardNavigation && this.keyboardNavigation.destroy(), e.renderTo && e.renderTo.setAttribute("aria-hidden", !0), e.focusElement && e.focusElement.removeFocusBorder();
			}
			getChartTypes() {
				let e = {};
				return this.chart.series.forEach(function(t) {
					e[t.type] = 1;
				}), Object.keys(e);
			}
		}
		(function(e) {
			function t() {
				this.accessibility && this.accessibility.destroy();
			}
			function n() {
				this.a11yDirty && this.renderTo && (delete this.a11yDirty, this.updateA11yEnabled());
				let e = this.accessibility;
				e && !e.zombie && (e.proxyProvider.updateProxyElementPositions(), e.getComponentOrder().forEach(function(t) {
					e.components[t].onChartRender();
				}));
			}
			function r(e) {
				let t = e.options.accessibility;
				t && (t.customComponents && (this.options.accessibility.customComponents = t.customComponents, delete t.customComponents), (0, v.merge)(!0, this.options.accessibility, t), this.accessibility && this.accessibility.destroy && (this.accessibility.destroy(), delete this.accessibility)), this.a11yDirty = !0;
			}
			function i() {
				let t = this.accessibility, n = this.options.accessibility, r = this.renderer.boxWrapper.element, i = this.title;
				if (n && n.enabled) t && !t.zombie ? t.update() : (this.accessibility = t = new e(this), t && !t.zombie && t.update(), r.getAttribute("role") === "img" && r.removeAttribute("role"));
				else if (t) t.destroy && t.destroy(), delete this.accessibility;
				else {
					this.renderTo.setAttribute("role", "img"), this.renderTo.setAttribute("aria-hidden", !1), this.renderTo.setAttribute("aria-label", (i && i.element.textContent || "").replace(/</g, "&lt;")), r.setAttribute("aria-hidden", !0);
					let e = document.getElementsByClassName("highcharts-description")[0];
					e && (e.setAttribute("aria-hidden", !1), e.classList.remove("highcharts-linked-description"));
				}
			}
			function a() {
				this.series.chart.accessibility && (this.series.chart.a11yDirty = !0);
			}
			e.i18nFormat = ee.i18nFormat, e.compose = function(e, o, s, c, l, u) {
				Ve.compose(e), mn.compose(c), et.compose(e, o), Pe.compose(e), $n.compose(e, s, c), ee.compose(e), B.compose(e, l), u && Mn.compose(e, u);
				let d = e.prototype;
				d.updateA11yEnabled || (d.updateA11yEnabled = i, (0, v.addEvent)(e, "destroy", t), (0, v.addEvent)(e, "render", n), (0, v.addEvent)(e, "update", r), ["addSeries", "init"].forEach((t) => {
					(0, v.addEvent)(e, t, function() {
						this.a11yDirty = !0;
					});
				}), ["afterApplyDrilldown", "drillupall"].forEach((t) => {
					(0, v.addEvent)(e, t, function() {
						let e = this.accessibility;
						e && !e.zombie && e.update();
					});
				}), (0, v.addEvent)(s, "update", a), [
					"update",
					"updatedData",
					"remove"
				].forEach((e) => {
					(0, v.addEvent)(c, e, function() {
						this.chart.accessibility && (this.chart.a11yDirty = !0);
					});
				}));
			};
		})(hr ||= {}), (0, v.merge)(!0, fr, {
			accessibility: {
				enabled: !0,
				screenReaderSection: {
					beforeChartFormat: "<{headingTagName}>{chartTitle}</{headingTagName}><div>{typeDescription}</div><div>{chartSubtitle}</div><div>{chartLongdesc}</div><div>{playAsSoundButton}</div><div>{viewTableButton}</div><div>{xAxisDescription}</div><div>{yAxisDescription}</div><div>{annotationsTitle}{annotationsList}</div>",
					afterChartFormat: "{endOfChartMarker}",
					axisRangeDateFormat: "%Y-%m-%d %H:%M:%S"
				},
				series: {
					descriptionFormat: "{seriesDescription}{authorDescription}{axisDescription}",
					describeSingleSeries: !1,
					pointDescriptionEnabledThreshold: 200
				},
				point: {
					valueDescriptionFormat: "{xDescription}{separator}{value}.",
					describeNull: !0
				},
				landmarkVerbosity: "all",
				linkedDescription: "*[data-highcharts-chart=\"{index}\"] + .highcharts-description",
				highContrastMode: "auto",
				keyboardNavigation: {
					enabled: !0,
					focusBorder: {
						enabled: !0,
						hideBrowserFocusOutline: !0,
						style: {
							color: "var(--highcharts-highlight-color-80)",
							lineWidth: 2,
							borderRadius: 3
						},
						margin: 2
					},
					order: [
						"series",
						"zoom",
						"rangeSelector",
						"navigator",
						"legend",
						"chartMenu"
					],
					wrapAround: !0,
					seriesNavigation: {
						skipNullPoints: void 0,
						pointNavigationEnabledThreshold: !1,
						rememberPointFocus: !1
					}
				},
				announceNewData: {
					enabled: !1,
					minAnnounceInterval: 5e3,
					interruptUser: !1
				}
			},
			legend: { accessibility: {
				enabled: !0,
				keyboardNavigation: { enabled: !0 }
			} },
			exporting: { accessibility: { enabled: !0 } },
			navigator: { accessibility: { enabled: !0 } }
		}, {
			accessibility: { highContrastTheme: cr },
			lang: { accessibility: {
				defaultChartTitle: "Chart",
				chartContainerLabel: "{title}. Highcharts interactive chart.",
				svgContainerLabel: "Interactive chart",
				drillUpButton: "{buttonText}",
				credits: "Chart credits: {creditsStr}",
				thousandsSep: ",",
				svgContainerTitle: "",
				graphicContainerLabel: "",
				screenReaderSection: {
					beforeRegionLabel: "",
					afterRegionLabel: "",
					annotations: {
						heading: "Chart annotations summary",
						descriptionSinglePoint: "{annotationText}. Related to {annotationPoint}",
						descriptionMultiplePoints: "{annotationText}. Related to {annotationPoint}{#each additionalAnnotationPoints}, also related to {this}{/each}",
						descriptionNoPoints: "{annotationText}"
					},
					endOfChartMarker: "End of interactive chart."
				},
				sonification: {
					playAsSoundButtonText: "Play as sound, {chartTitle}",
					playAsSoundClickAnnouncement: "Play"
				},
				legend: {
					legendLabelNoTitle: "Toggle series visibility, {chartTitle}",
					legendLabel: "Chart legend: {legendTitle}",
					legendItem: "Show {itemName}"
				},
				zoom: {
					mapZoomIn: "Zoom chart",
					mapZoomOut: "Zoom out chart",
					resetZoomButton: "Reset zoom"
				},
				rangeSelector: {
					dropdownLabel: "{rangeTitle}",
					minInputLabel: "Select start date.",
					maxInputLabel: "Select end date.",
					clickButtonAnnouncement: "Viewing {axisRangeDescription}"
				},
				navigator: {
					handleLabel: "{#eq handleIx 0}Start, percent{else}End, percent{/eq}",
					groupLabel: "Axis zoom",
					changeAnnouncement: "{axisRangeDescription}"
				},
				stockTools: {
					groupLabel: "Stock chart tools",
					arrowLabel: "Toggle submenu"
				},
				table: {
					viewAsDataTableButtonText: "View as data table, {chartTitle}",
					tableSummary: "Table representation of chart."
				},
				announceNewData: {
					newDataAnnounce: "Updated data for chart {chartTitle}",
					newSeriesAnnounceSingle: "New data series: {seriesDesc}",
					newPointAnnounceSingle: "New data point: {pointDesc}",
					newSeriesAnnounceMultiple: "New data series in chart {chartTitle}: {seriesDesc}",
					newPointAnnounceMultiple: "New data point in chart {chartTitle}: {pointDesc}"
				},
				seriesTypeDescriptions: {
					boxplot: "Box plot charts are typically used to display groups of statistical data. Each data point in the chart can have up to 5 values: minimum, lower quartile, median, upper quartile, and maximum.",
					arearange: "Arearange charts are line charts displaying a range between a lower and higher value for each point.",
					areasplinerange: "These charts are line charts displaying a range between a lower and higher value for each point.",
					bubble: "Bubble charts are scatter charts where each data point also has a size value.",
					columnrange: "Columnrange charts are column charts displaying a range between a lower and higher value for each point.",
					errorbar: "Errorbar series are used to display the variability of the data.",
					funnel: "Funnel charts are used to display reduction of data in stages.",
					pyramid: "Pyramid charts consist of a single pyramid with item heights corresponding to each point value.",
					waterfall: "A waterfall chart is a column chart where each column contributes towards a total end value."
				},
				chartTypes: {
					emptyChart: "Empty chart",
					mapTypeDescription: "Map of {mapTitle} with {numSeries} data series.",
					unknownMap: "Map of unspecified region with {numSeries} data series.",
					combinationChart: "Combination chart with {numSeries} data series.",
					defaultSingle: "Chart with {numPoints} data {#eq numPoints 1}point{else}points{/eq}.",
					defaultMultiple: "Chart with {numSeries} data series.",
					splineSingle: "Line chart with {numPoints} data {#eq numPoints 1}point{else}points{/eq}.",
					splineMultiple: "Line chart with {numSeries} lines.",
					lineSingle: "Line chart with {numPoints} data {#eq numPoints 1}point{else}points{/eq}.",
					lineMultiple: "Line chart with {numSeries} lines.",
					columnSingle: "Bar chart with {numPoints} {#eq numPoints 1}bar{else}bars{/eq}.",
					columnMultiple: "Bar chart with {numSeries} data series.",
					barSingle: "Bar chart with {numPoints} {#eq numPoints 1}bar{else}bars{/eq}.",
					barMultiple: "Bar chart with {numSeries} data series.",
					pieSingle: "Pie chart with {numPoints} {#eq numPoints 1}slice{else}slices{/eq}.",
					pieMultiple: "Pie chart with {numSeries} pies.",
					scatterSingle: "Scatter chart with {numPoints} {#eq numPoints 1}point{else}points{/eq}.",
					scatterMultiple: "Scatter chart with {numSeries} data series.",
					boxplotSingle: "Boxplot with {numPoints} {#eq numPoints 1}box{else}boxes{/eq}.",
					boxplotMultiple: "Boxplot with {numSeries} data series.",
					bubbleSingle: "Bubble chart with {numPoints} {#eq numPoints 1}bubbles{else}bubble{/eq}.",
					bubbleMultiple: "Bubble chart with {numSeries} data series."
				},
				axis: {
					xAxisDescriptionSingular: "The chart has 1 X axis displaying {names[0]}. {ranges[0]}",
					xAxisDescriptionPlural: "The chart has {numAxes} X axes displaying {#each names}{#unless @first},{/unless}{#if @last} and{/if} {this}{/each}.",
					yAxisDescriptionSingular: "The chart has 1 Y axis displaying {names[0]}. {ranges[0]}",
					yAxisDescriptionPlural: "The chart has {numAxes} Y axes displaying {#each names}{#unless @first},{/unless}{#if @last} and{/if} {this}{/each}.",
					timeRangeDays: "Data range: {range} days.",
					timeRangeHours: "Data range: {range} hours.",
					timeRangeMinutes: "Data range: {range} minutes.",
					timeRangeSeconds: "Data range: {range} seconds.",
					rangeFromTo: "Data ranges from {rangeFrom} to {rangeTo}.",
					rangeCategories: "Data range: {numCategories} categories.",
					defaultAxisNames: {
						categories: "categories",
						time: "Time",
						values: "values"
					}
				},
				exporting: {
					chartMenuLabel: "Chart menu",
					menuButtonLabel: "View chart context menu, {chartTitle}"
				},
				series: {
					summary: {
						default: "{series.name}, series {seriesNumber} of {chart.series.length} with {series.points.length} data {#eq series.points.length 1}point{else}points{/eq}.",
						defaultCombination: "{series.name}, series {seriesNumber} of {chart.series.length} with {series.points.length} data {#eq series.points.length 1}point{else}points{/eq}.",
						line: "{series.name}, line {seriesNumber} of {chart.series.length} with {series.points.length} data {#eq series.points.length 1}point{else}points{/eq}.",
						lineCombination: "{series.name}, series {seriesNumber} of {chart.series.length}. Line with {series.points.length} data {#eq series.points.length 1}point{else}points{/eq}.",
						spline: "{series.name}, line {seriesNumber} of {chart.series.length} with {series.points.length} data {#eq series.points.length 1}point{else}points{/eq}.",
						splineCombination: "{series.name}, series {seriesNumber} of {chart.series.length}. Line with {series.points.length} data {#eq series.points.length 1}point{else}points{/eq}.",
						column: "{series.name}, bar series {seriesNumber} of {chart.series.length} with {series.points.length} {#eq series.points.length 1}bar{else}bars{/eq}.",
						columnCombination: "{series.name}, series {seriesNumber} of {chart.series.length}. Bar series with {series.points.length} {#eq series.points.length 1}bar{else}bars{/eq}.",
						bar: "{series.name}, bar series {seriesNumber} of {chart.series.length} with {series.points.length} {#eq series.points.length 1}bar{else}bars{/eq}.",
						barCombination: "{series.name}, series {seriesNumber} of {chart.series.length}. Bar series with {series.points.length} {#eq series.points.length 1}bar{else}bars{/eq}.",
						pie: "{series.name}, pie {seriesNumber} of {chart.series.length} with {series.points.length} {#eq series.points.length 1}slice{else}slices{/eq}.",
						pieCombination: "{series.name}, series {seriesNumber} of {chart.series.length}. Pie with {series.points.length} {#eq series.points.length 1}slice{else}slices{/eq}.",
						scatter: "{series.name}, scatter plot {seriesNumber} of {chart.series.length} with {series.points.length} {#eq series.points.length 1}point{else}points{/eq}.",
						scatterCombination: "{series.name}, series {seriesNumber} of {chart.series.length}, scatter plot with {series.points.length} {#eq series.points.length 1}point{else}points{/eq}.",
						boxplot: "{series.name}, boxplot {seriesNumber} of {chart.series.length} with {series.points.length} {#eq series.points.length 1}box{else}boxes{/eq}.",
						boxplotCombination: "{series.name}, series {seriesNumber} of {chart.series.length}. Boxplot with {series.points.length} {#eq series.points.length 1}box{else}boxes{/eq}.",
						bubble: "{series.name}, bubble series {seriesNumber} of {chart.series.length} with {series.points.length} {#eq series.points.length 1}bubble{else}bubbles{/eq}.",
						bubbleCombination: "{series.name}, series {seriesNumber} of {chart.series.length}. Bubble series with {series.points.length} {#eq series.points.length 1}bubble{else}bubbles{/eq}.",
						map: "{series.name}, map {seriesNumber} of {chart.series.length} with {series.points.length} {#eq series.points.length 1}area{else}areas{/eq}.",
						mapCombination: "{series.name}, series {seriesNumber} of {chart.series.length}. Map with {series.points.length} {#eq series.points.length 1}area{else}areas{/eq}.",
						mapline: "{series.name}, line {seriesNumber} of {chart.series.length} with {series.points.length} data {#eq series.points.length 1}point{else}points{/eq}.",
						maplineCombination: "{series.name}, series {seriesNumber} of {chart.series.length}. Line with {series.points.length} data {#eq series.points.length 1}point{else}points{/eq}.",
						mapbubble: "{series.name}, bubble series {seriesNumber} of {chart.series.length} with {series.points.length} {#eq series.points.length 1}bubble{else}bubbles{/eq}.",
						mapbubbleCombination: "{series.name}, series {seriesNumber} of {chart.series.length}. Bubble series with {series.points.length} {#eq series.points.length 1}bubble{else}bubbles{/eq}."
					},
					description: "{description}",
					xAxisDescription: "X axis, {name}",
					yAxisDescription: "Y axis, {name}",
					nullPointValue: "No value",
					pointAnnotationsDescription: "{#each annotations}Annotation: {this}{/each}"
				}
			} }
		});
		let gr = hr, _r = y();
		_r.i18nFormat = gr.i18nFormat, _r.A11yChartUtilities = N, _r.A11yHTMLUtilities = T, _r.AccessibilityComponent = L, _r.KeyboardNavigationHandler = R, _r.SeriesAccessibilityDescriber = an, gr.compose(_r.Chart, _r.Legend, _r.Point, _r.Series, _r.SVGElement, _r.RangeSelector);
		let vr = y();
		return _.default;
	})());
})), a = /* @__PURE__ */ t(((e, t) => {
	(function(n, r) {
		typeof e == "object" && typeof t == "object" ? t.exports = r(n._Highcharts) : typeof define == "function" && define.amd ? define("highcharts/modules/pattern-fill", ["highcharts/highcharts"], function(e) {
			return r(e);
		}) : typeof e == "object" ? e["highcharts/modules/pattern-fill"] = r(n._Highcharts) : n.Highcharts = r(n.Highcharts);
	})("u" < typeof window ? e : window, (e) => (() => {
		let t, n;
		var r, i, a, o = { 944: (t) => {
			t.exports = e;
		} }, s = {};
		function c(e) {
			var t = s[e];
			if (t !== void 0) return t.exports;
			var n = s[e] = { exports: {} };
			return o[e](n, n.exports, c), n.exports;
		}
		c.n = (e) => {
			var t = e && e.__esModule ? () => e.default : () => e;
			return c.d(t, { a: t }), t;
		}, c.d = (e, t) => {
			for (var n in t) c.o(t, n) && !c.o(e, n) && Object.defineProperty(e, n, {
				enumerable: !0,
				get: t[n]
			});
		}, c.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t);
		var l = {};
		c.d(l, { default: () => v });
		var u = c(944), d = c.n(u);
		let { getOptions: f } = d(), p = function() {
			let e = [], t = f().colors, n = 0;
			for (let r of [
				"M 0 0 L 5 5 M 4.5 -0.5 L 5.5 0.5 M -0.5 4.5 L 0.5 5.5",
				"M 0 5 L 5 0 M -0.5 0.5 L 0.5 -0.5 M 4.5 5.5 L 5.5 4.5",
				"M 2 0 L 2 5 M 4 0 L 4 5",
				"M 0 2 L 5 2 M 0 4 L 5 4",
				"M 0 1.5 L 2.5 1.5 L 2.5 0 M 2.5 5 L 2.5 3.5 L 5 3.5"
			]) e.push({
				path: r,
				color: t[n++],
				width: 5,
				height: 5,
				patternTransform: "scale(1.4 1.4)"
			});
			for (let r of (n = 5, [
				"M 0 0 L 5 10 L 10 0",
				"M 3 3 L 8 3 L 8 8 L 3 8 Z",
				"M 5 5 m -4 0 a 4 4 0 1 1 8 0 a 4 4 0 1 1 -8 0",
				"M 0 0 L 10 10 M 9 -1 L 11 1 M -1 9 L 1 11",
				"M 0 10 L 10 0 M -1 1 L 1 -1 M 9 11 L 11 9"
			])) e.push({
				path: r,
				color: t[n++],
				width: 10,
				height: 10
			});
			return e;
		}();
		function m(e, t) {
			let n = JSON.stringify(e), r = n.length || 0, i = 0, a = 0, o;
			if (t) {
				o = Math.max(Math.floor(r / 500), 1);
				for (let e = 0; e < r; e += o) i += n.charCodeAt(e);
				i &= i;
			}
			for (; a < r; ++a) i = (i << 5) - i + n.charCodeAt(a), i &= i;
			return i.toString(16).replace("-", "1");
		}
		function h(e) {
			if (e.width && e.height && !e.anchorToPoint) return;
			let t = this.graphic && (this.graphic.getBBox && this.graphic.getBBox(!0) || this.graphic.element && this.graphic.element.getBBox()) || {}, n = this.shapeArgs;
			if (n && (t.width = n.width || t.width, t.height = n.height || t.height, t.x = n.x || t.x, t.y = n.y || t.y), e.image) {
				if (!t.width || !t.height) {
					e._width = "defer", e._height = "defer";
					let t = this.series.chart.mapView && this.series.chart.mapView.getSVGTransform().scaleY;
					(0, u.defined)(t) && t < 0 && (e._inverted = !0);
					return;
				}
				e.aspectRatio && (t.aspectRatio = t.width / t.height, e.aspectRatio > t.aspectRatio ? t.aspectWidth = t.height * e.aspectRatio : t.aspectHeight = t.width / e.aspectRatio), e._width = e.width || Math.ceil(t.aspectWidth || t.width), e._height = e.height || Math.ceil(t.aspectHeight || t.height);
			}
			e.anchorToPoint ? (e._x = 0, e._y = 0, e.width || (e._width = t.width), e.height || (e._height = t.height)) : (e.width || (e._x = e.x || 0, e._x += t.x - Math.round(t.aspectWidth ? Math.abs(t.aspectWidth - t.width) / 2 : 0)), e.height || (e._y = e.y || 0, e._y += t.y - Math.round(t.aspectHeight ? Math.abs(t.aspectHeight - t.height) / 2 : 0)));
		}
		function g() {
			if (!this.chart?.mapView) return;
			let e = this.chart.renderer, t = e.patternElements;
			e.defIds?.length && t && this.points.filter(function(e) {
				return !!e.graphic && (e.graphic.element.hasAttribute("fill") || e.graphic.element.hasAttribute("color") || e.graphic.element.hasAttribute("stroke")) && !e.options.color?.pattern?.image && !!e.group?.scaleX && !!e.group?.scaleY;
			}).map(function(t) {
				return {
					id: (t.graphic?.element.getAttribute("fill") || t.graphic?.element.getAttribute("color") || t.graphic?.element.getAttribute("stroke") || "").replace(e.url, "").replace("url(#", "").replace(")", ""),
					x: t.group?.scaleX || 1,
					y: t.group?.scaleY || 1
				};
			}).filter(function(e, t, n) {
				return e.id !== "" && e.id.indexOf("highcharts-pattern-") !== -1 && !n.some(function(n, r) {
					return n.id === e.id && r < t;
				});
			}).forEach(function(e) {
				let n = e.id;
				t[n].scaleX = 1 / e.x, t[n].scaleY = 1 / e.y, t[n].updateTransform("patternTransform");
			});
		}
		let _ = d();
		_.patterns = p, r = _.Chart, i = _.Series, a = _.SVGRenderer, (n = (t = i.prototype.pointClass).prototype).calculatePatternDimensions || ((0, u.addEvent)(r, "endResize", function() {
			if (this.renderer && (this.renderer.defIds || []).filter((e) => e && e.indexOf && e.indexOf("highcharts-pattern-") === 0).length) {
				for (let e of this.series) if (e.visible) for (let t of e.points) {
					let e = t.options && t.options.color;
					e && e.pattern && (e.pattern._width = "defer", e.pattern._height = "defer");
				}
				this.redraw(!1);
			}
		}), (0, u.addEvent)(r, "redraw", function() {
			let e = {}, t = this.renderer, n = (t.defIds || []).filter((e) => e.indexOf && e.indexOf("highcharts-pattern-") === 0);
			if (n.length) for (let r of ([].forEach.call(this.renderTo.querySelectorAll("[color^=\"url(\"], [fill^=\"url(\"], [stroke^=\"url(\"]"), (n) => {
				let r = n.getAttribute("fill") || n.getAttribute("color") || n.getAttribute("stroke");
				r && (e[r.replace(t.url, "").replace("url(#", "").replace(")", "")] = !0);
			}), n)) !e[r] && ((0, u.erase)(t.defIds, r), t.patternElements[r] && (t.patternElements[r].destroy(), delete t.patternElements[r]));
		}), (0, u.extend)(n, { calculatePatternDimensions: h }), (0, u.addEvent)(t, "afterInit", function() {
			let e = this.options.color;
			e && (e.pattern || e.patternIndex !== void 0) && (typeof e.pattern?.path == "string" && (e.pattern.path = { d: e.pattern.path }), this.color = this.options.color = (0, u.merge)(this.series.options.color, e));
		}), (0, u.addEvent)(i, "render", function() {
			let e = this.chart.isResizing;
			if (this.isDirtyData || e || !this.chart.hasRendered) for (let t of this.points) {
				let n = t.options && t.options.color;
				n && n.pattern && (e && !(t.shapeArgs && t.shapeArgs.width && t.shapeArgs.height) ? (n.pattern._width = "defer", n.pattern._height = "defer") : t.calculatePatternDimensions(n.pattern));
			}
		}), (0, u.wrap)(i.prototype, "getColor", function(e) {
			let t = this.options.color;
			t && t.pattern && !t.pattern.color ? (delete this.options.color, e.apply(this, [].slice.call(arguments, 1)), t.pattern.color = this.color, this.color = this.options.color = t) : e.apply(this, [].slice.call(arguments, 1));
		}), (0, u.addEvent)(i, "afterRender", g), (0, u.addEvent)(i, "mapZoomComplete", g), (0, u.extend)(a.prototype, { addPattern: function(e, t) {
			let n = (0, u.pick)(t, !0), r = (0, u.animObject)(n), i = e.color || "var(--highcharts-neutral-color-80)", a = e.height || (typeof e._height == "number" ? e._height : 0) || 32, o = e.width || (typeof e._width == "number" ? e._width : 0) || 32, s = e.anchorToPoint ? "userSpaceOnUse" : e.patternContentUnits || "userSpaceOnUse", c = (e) => this.rect(0, 0, o, a).attr({ fill: e }).add(m), l, d = e.id, f;
			if (!d && (this.idCounter = this.idCounter || 0, d = "highcharts-pattern-" + this.idCounter + "-" + (this.chartIndex || 0), ++this.idCounter), this.forExport && (d += "-export"), this.defIds = this.defIds || [], this.defIds.indexOf(d) > -1) return;
			this.defIds.push(d);
			let p = {
				id: d,
				patternUnits: "userSpaceOnUse",
				patternContentUnits: s,
				width: o,
				height: a,
				x: e._x || e.x || 0,
				y: e._y || e.y || 0
			};
			e._inverted && (p.patternTransform = "scale(1, -1)", e.patternTransform && (e.patternTransform += " scale(1, -1)")), e.patternTransform && (p.patternTransform = e.patternTransform);
			let m = this.createElement("pattern").attr(p).add(this.defs);
			return m.id = d, e.path ? (f = (0, u.isObject)(e.path) ? e.path : { d: e.path }, e.backgroundColor && c(e.backgroundColor), l = { d: f.d }, this.styledMode || (l.stroke = f.stroke || i, l["stroke-width"] = (0, u.pick)(f.strokeWidth, 2), l.fill = f.fill || "none"), f.transform && (l.transform = f.transform), this.createElement("path").attr(l).add(m), m.color = i) : e.image && (n ? this.image(e.image, 0, 0, o, a, function() {
				this.animate({ opacity: (0, u.pick)(e.opacity, 1) }, r), (0, u.removeEvent)(this.element, "load");
			}).attr({ opacity: 0 }).add(m) : this.image(e.image, 0, 0, o, a).add(m)), e.image && n || e.opacity === void 0 || [].forEach.call(m.element.childNodes, (t) => {
				t.setAttribute("opacity", e.opacity);
			}), this.patternElements = this.patternElements || {}, this.patternElements[d] = m, m;
		} }), (0, u.addEvent)(a, "complexColor", function(e) {
			let t = e.args[0], n = e.args[1], r = e.args[2], i = this.chartIndex || 0, a = t.pattern, o = "var(--highcharts-neutral-color-80)";
			if (t.patternIndex !== void 0 && p && (a = p[t.patternIndex]), !a) return !0;
			if (a.image || typeof a.path == "string" || a.path && a.path.d) {
				let e = r.parentNode && r.parentNode.getAttribute("class");
				if (e &&= e.indexOf("highcharts-legend") > -1, (a._width === "defer" || a._height === "defer") && h.call({ graphic: { element: r } }, a), e || !a.id || a.anchorToPoint) {
					var s;
					let e, t;
					(a = (0, u.merge)({}, a)).anchorToPoint && (s = a, e = (0, u.merge)({}, s), e._x = (t = r.getBBox ? r.getBBox() : {
						x: 0,
						y: 0,
						width: 32,
						height: 32
					}).x, e._y = t.y, a = e), a.id = "highcharts-pattern-" + i + "-" + m(a) + m(a, !0) + (a.anchorToPoint ? "-anchored" : "");
				}
				this.addPattern(a, !this.forExport && (0, u.pick)(a.animation, this.globalAnimation, { duration: 100 })), o = `url(${this.url}#${a.id + (this.forExport ? "-export" : "")})`;
			} else o = a.color || o;
			return r.setAttribute(n, o), t.toString = function() {
				return o;
			}, !1;
		}));
		let v = d();
		return l.default;
	})());
})), o = /* @__PURE__ */ e(n(), 1);
r(), i(), a();
var s = {
	areaLine: "area",
	areaSpline: "areaspline",
	bar: "bar",
	column: "column",
	line: "line",
	spline: "spline"
}, c = {
	areaLine: "area",
	areaRange: "arearange",
	areaSpline: "areaspline",
	column: "column",
	columnRange: "columnrange",
	line: "line",
	spline: "spline"
}, l = {
	areaLine: "arearange",
	areaSpline: "areasplinerange",
	bar: "columnrange",
	column: "columnrange"
}, u = "highcharts", d = !1, f = !1, p = !1, m = class {
	renderCartesianChart(e, t, n, r) {
		let i = s[e], a = [];
		for (let e of t.data.measures) a.push({
			type: i,
			name: e.name,
			data: e.values
		});
		let c = {
			chart: { type: i },
			plotOptions: { series: { borderColor: "#333" } },
			series: a,
			title: { text: t.title.text },
			xAxis: { categories: t.data.dimension.values.map((e) => e.label?.text ?? "") },
			yAxis: { title: { text: t.title?.text ?? void 0 } }
		}, l = o.default.chart(n, c, r);
		return {
			chart: l,
			resize: () => l.reflow(),
			vendorId: u
		};
	}
	async render(e, t, n) {
		await this.loadHighchartsMore();
		let r = o.default.chart(t, e, n);
		return {
			chart: r,
			resize: () => r.reflow(),
			vendorId: u
		};
	}
	async renderPeriodFlowBoundaries(e, t, n) {
		await this.loadHighchartsMore();
		let r = [];
		for (let t of e.data.measures) r.push({
			type: "waterfall",
			name: t.name,
			data: t.values
		});
		let i = {
			chart: { type: "waterfall" },
			plotOptions: { series: { borderColor: "#333" } },
			series: r,
			title: { text: e.title.text },
			xAxis: { categories: e.data.dimension.values.map((e) => e.label?.text ?? "") },
			yAxis: { title: { text: e.title?.text ?? void 0 } }
		}, a = o.default.chart(t, i, n);
		return {
			chart: a,
			resize: () => a.reflow(),
			vendorId: u
		};
	}
	async renderPolarChart(e, t, n, r) {
		await this.loadHighchartsMore();
		let i = c[e], a = [];
		for (let e of t.data.measures) a.push({
			type: i,
			name: e.name,
			data: e.values
		});
		let s = {
			chart: { polar: !0 },
			plotOptions: { series: { borderColor: "#333" } },
			series: a,
			title: { text: t.title.text },
			xAxis: { categories: t.data.dimension.values.map((e) => e.label?.text ?? "") },
			yAxis: { title: { text: t.title?.text ?? void 0 } }
		}, l = o.default.chart(n, s, r);
		return {
			chart: l,
			resize: () => l.reflow(),
			vendorId: u
		};
	}
	async renderRangeChart(e, t, n, r) {
		await this.loadHighchartsMore();
		let i = l[e], a = [], s = [];
		for (let e = 0; e < t.data.dimension.values.length; e++) s.push([t.data.measures[0]?.values[e]?.[0] ?? 0, t.data.measures[1]?.values[e]?.[0] ?? 0]);
		a.push({
			type: i,
			name: "Unknown",
			data: s
		});
		let c = {
			chart: {
				type: i,
				inverted: e === "bar"
			},
			plotOptions: { series: { borderColor: "#333" } },
			series: a,
			title: { text: t.title.text },
			xAxis: { categories: t.data.dimension.values.map((e) => e.label?.text ?? "") },
			yAxis: { title: { text: t.title?.text ?? void 0 } }
		}, d = o.default.chart(n, c, r);
		return {
			chart: d,
			resize: () => d.reflow(),
			vendorId: u
		};
	}
	async loadDependencyWheelAndSankeyModules() {
		d ||= (await Promise.all([import("./dependency-wheel-BJ8Htyx3.js").then((t) => /* @__PURE__ */ e(t.default, 1)), import("./sankey-PXPiVSFg.js").then((t) => /* @__PURE__ */ e(t.default, 1))]), !0);
	}
	async loadHighchartsMore() {
		f ||= (await import("./highcharts-more-0p0GqZ8D.js").then((t) => /* @__PURE__ */ e(t.default, 1)), !0);
	}
	async loadStreamGraphModule() {
		p ||= (await import("./streamgraph-Di8Fshuv.js").then((t) => /* @__PURE__ */ e(t.default, 1)), !0);
	}
};
//#endregion
export { m as HighchartsTool };

//# sourceMappingURL=dpuse-tool-highcharts.es.js.map