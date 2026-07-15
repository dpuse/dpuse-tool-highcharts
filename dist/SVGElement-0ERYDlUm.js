import { A as e, C as t, E as n, F as r, G as i, J as a, K as o, P as s, Q as c, T as l, V as u, W as d, X as f, _ as p, b as m, et as h, g, it as _, j as v, m as y, q as b, st as x, tt as S, u as C, ut as w, w as T } from "./SeriesRegistry-BGZZizI3.js";
//#region node_modules/highcharts/es-modules/Core/Renderer/SVG/SVGElement.js
var { animate: E, animObject: D, stop: O } = y, { deg2rad: k, doc: A, svg: j, SVG_NS: M, win: N, isFirefox: P } = w, F = class y {
	_defaultGetter(e) {
		let t = h(this[e + "Value"], this[e], this.element ? this.element.getAttribute(e) : null, 0);
		return /^-?[\d\.]+$/.test(t) && (t = parseFloat(t)), t;
	}
	_defaultSetter(e, t, n) {
		n.setAttribute(t, e);
	}
	add(e) {
		let t = this.renderer, n = this.element, r;
		return e && (this.parentGroup = e), this.textStr !== void 0 && this.element.nodeName === "text" && t.buildText(this), this.added = !0, (!e || e.handleZ || this.zIndex) && (r = this.zIndexSetter()), r || (e ? e.element : t.box).appendChild(n), this.onAdd && this.onAdd(), this;
	}
	addClass(e, t) {
		let n = t ? "" : this.attr("class") || "";
		return e = (e || "").split(/ /g).reduce(function(e, t) {
			return n.indexOf(t) === -1 && e.push(t), e;
		}, n ? [n] : []).join(" "), e !== n && this.attr("class", e), this;
	}
	afterSetters() {
		this.doTransform &&= (this.updateTransform(), !1);
	}
	align(e, t, n, i = !0) {
		let a = this.renderer, o = a.alignedObjects, s = !!e;
		e ? (this.alignOptions = e, this.alignByTranslate = t, this.alignTo = n) : (e = this.alignOptions || {}, t = this.alignByTranslate, n = this.alignTo);
		let c = !n || b(n) ? n || "renderer" : void 0;
		c && (s && S(o, this), n = void 0);
		let l = h(n, a[c], a), u = (l.x || 0) + (e.x || 0) + ((l.width || 0) - (e.width || 0)) * r(e.align), d = (l.y || 0) + (e.y || 0) + ((l.height || 0) - (e.height || 0)) * r(e.verticalAlign), f = {};
		return e.align && (f["text-align"] = e.align), f[t ? "translateX" : "x"] = Math.round(u), f[t ? "translateY" : "y"] = Math.round(d), i && (this[this.placed ? "animate" : "attr"](f), this.placed = !0), this.alignAttr = f, this;
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
		let r = D(h(t, this.renderer.globalAnimation, !0)), i = r.defer;
		return A.hidden && (r.duration = 0), r.duration === 0 ? (this.attr(e, void 0, n || r.complete), f(e, function(e, t) {
			r.step && r.step.call(this, e, {
				prop: t,
				pos: 1,
				elem: this
			});
		}, this)) : (n && (r.complete = n), x(() => {
			this.element && E(this, e, r);
		}, i)), this;
	}
	applyTextOutline(e) {
		let t = this.element, n = e.indexOf("contrast") !== -1, r = {};
		n && (r.textOutline = e = e.replace(/contrast/g, this.renderer.getContrast(t.style.fill)));
		let i = e.indexOf(" "), a = e.substring(i + 1), o = e.substring(0, i);
		if (o && o !== "none" && w.svg) {
			this.fakeTS = !0, o = o.replace(/(^[\d\.]+)(.*?)$/g, function(e, t, n) {
				return 2 * Number(t) + n;
			}), this.removeTextOutline();
			let e = A.createElementNS(M, "tspan");
			m(e, {
				class: "highcharts-text-outline",
				fill: a,
				stroke: a,
				"stroke-width": o,
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
			let r = 0;
			[].forEach.call(n.querySelectorAll("text tspan"), (e) => {
				r += Number(e.getAttribute("dy"));
			});
			let i = A.createElementNS(M, "tspan");
			i.textContent = "​", m(i, {
				x: Number(t.getAttribute("x")),
				dy: -r
			}), e.appendChild(i), n.insertBefore(e, n.firstChild);
		}
	}
	attr(e, t, n, r) {
		let { element: i } = this, a = y.symbolCustomAttribs, o, s, c = this, l, u;
		return typeof e == "string" && t !== void 0 && (o = e, e = {}, e[o] = t), typeof e == "string" ? c = (this[e + "Getter"] || this._defaultGetter).call(this, e, i) : (f(e, function(t, n) {
			l = !1, r || O(this, n), this.symbolName && a.indexOf(n) !== -1 && (s ||= (this.symbolAttr(e), !0), l = !0), this.rotation && (n === "x" || n === "y") && (this.doTransform = !0), l || (u = this[n + "Setter"] || this._defaultSetter, u.call(this, t, n, i));
		}, this), this.afterSetters()), n && n.call(this), c;
	}
	clip(e) {
		if (e && !e.clipPath) {
			let t = C() + "-", n = this.renderer.createElement("clipPath").attr({ id: t }).add(this.renderer.defs);
			v(e, {
				clipPath: n,
				id: t,
				count: 0
			}), e.add(n);
		}
		return this.attr("clip-path", e ? `url(${this.renderer.url}#${e.id})` : "none");
	}
	crisp(e, t) {
		t = Math.round(t || e.strokeWidth || 0);
		let r = e.x || this.x || 0, i = e.y || this.y || 0, a = (e.width || this.width || 0) + r, o = (e.height || this.height || 0) + i, s = T(r, t), c = T(i, t), l = T(a, t), u = T(o, t);
		return v(e, {
			x: s,
			y: c,
			width: l - s,
			height: u - c
		}), n(e.strokeWidth) && (e.strokeWidth = t), e;
	}
	complexColor(e, t, r) {
		let i = this.renderer, o, c, l, d, p, m, h, _, v, y = [], b;
		s(this.renderer, "complexColor", { args: arguments }, () => {
			if (e.radialGradient ? c = "radialGradient" : e.linearGradient && (c = "linearGradient"), c) {
				if (l = e[c], p = i.gradients, m = e.stops, _ = r.radialReference, u(l) && (e[c] = l = {
					x1: l[0],
					y1: l[1],
					x2: l[2],
					y2: l[3],
					gradientUnits: "userSpaceOnUse"
				}), c === "radialGradient" && _ && !n(l.gradientUnits) && (d = l, l = a(l, i.getRadialAttr(_, d), { gradientUnits: "userSpaceOnUse" })), f(l, function(e, t) {
					t !== "id" && y.push(t, e);
				}), f(m, function(e) {
					y.push(e);
				}), y = y.join(","), p[y]) v = p[y].attr("id");
				else {
					l.id = v = C();
					let e = p[y] = i.createElement(c).attr(l).add(i.defs);
					e.radAttr = d, e.stops = [], m.forEach(([t, n]) => {
						n.indexOf("rgba") === 0 ? (o = g.parse(n), n = o.get("rgb"), h = o.get("a")) : h = 1;
						let r = i.createElement("stop").attr({
							offset: t,
							"stop-color": n,
							"stop-opacity": h
						}).add(e);
						e.stops.push(r);
					});
				}
				b = "url(" + i.url + "#" + v + ")", r.setAttribute(t, b), r.gradient = y, e.toString = function() {
					return b;
				};
			}
		});
	}
	css(e) {
		let t = this.styles, n = {}, r = this.element, o = this.renderer, s, u = !t;
		if (t && f(e, function(e, r) {
			t && t[r] !== e && (n[r] = e, u = !0);
		}), u) {
			t && (e = v(t, n)), e.width === null || e.width === "auto" ? delete this.textWidth : r.nodeName.toLowerCase() === "text" && e.width && (s = this.textWidth = c(e.width)), v(this.styles, e), s && !j && o.forExport && delete e.width;
			let u = P && e.fontSize || null;
			u && (i(u) || /^\d+$/.test(u)) && (e.fontSize += "px");
			let d = a(e);
			r.namespaceURI === this.SVG_NS && ([
				"textOutline",
				"textOverflow",
				"whiteSpace",
				"width"
			].forEach((e) => d && delete d[e]), d.color && (d.fill = d.color, delete d.color)), l(r, d);
		}
		return this.added && (this.element.nodeName === "text" && o.buildText(this), e.textOutline && this.applyTextOutline(e.textOutline)), this;
	}
	dashstyleSetter(e) {
		let t, n = this["stroke-width"];
		if (n === "inherit" && (n = 1), e) {
			e = e.toLowerCase();
			let r = e.replace("shortdashdotdot", "3,1,1,1,1,1,").replace("shortdashdot", "3,1,1,1").replace("shortdot", "1,1,").replace("shortdash", "3,1,").replace("longdash", "8,3,").replace(/dot/g, "1,3,").replace("dash", "4,3,").replace(/,$/, "").split(",");
			for (t = r.length; t--;) r[t] = "" + c(r[t]) * h(n, NaN);
			e = r.join(",").replace(/NaN/g, "none"), this.element.setAttribute("stroke-dasharray", e);
		}
	}
	destroy() {
		let t = this, { element: n = {}, renderer: r, stops: i } = t, a = n.ownerSVGElement;
		if (n.onclick = n.onmouseout = n.onmouseover = n.onmousemove = n.point = null, O(t), t.clipPath && a) {
			let e = t.clipPath;
			[].forEach.call(a.querySelectorAll("[clip-path],[CLIP-PATH]"), function(t) {
				t.getAttribute("clip-path").indexOf(e.element.id) > -1 && t.removeAttribute("clip-path");
			}), t.clipPath = e.destroy();
		}
		if (i) {
			for (let e of i) e.destroy();
			i.length = 0;
		}
		t.safeRemoveChild(n), t.alignOptions && e(r.alignedObjects, t), f(t, (e, n) => {
			(t[n]?.parentGroup === t || ["connector", "foreignObject"].indexOf(n) !== -1) && t[n]?.destroy?.(), delete t[n];
		});
	}
	dSetter(e, t, n) {
		u(e) && (typeof e[0] == "string" && (e = this.renderer.pathToSegments(e)), this.pathArray = e, e = e.reduce((e, t, n) => t?.join ? (n ? e + " " : "") + t.join(" ") : (t || "").toString(), "")), /(NaN| {2}|^$)/.test(e) && (e = "M 0 0"), this[t] !== e && (n.setAttribute(t, e), this[t] = e);
	}
	fillSetter(e, t, n) {
		typeof e == "string" ? n.setAttribute(t, e) : e && this.complexColor(e, t, n);
	}
	hrefSetter(e, t, n) {
		n.setAttributeNS("http://www.w3.org/1999/xlink", t, e);
	}
	getBBox(e, t) {
		let n = this, { element: r, renderer: i, styles: a, textStr: o } = n, { cache: c, cacheKeys: u } = i, f = r.namespaceURI === n.SVG_NS, p = h(t, n.rotation, 0), m = i.styledMode ? r && y.prototype.getStyle.call(r, "font-size") : a.fontSize, g = this.getBBoxCacheKey([
			i.rootFontSize,
			this.textWidth,
			this.alignValue,
			a.fontWeight,
			a.lineClamp,
			a.textOverflow,
			m,
			p
		]), _, b, x;
		if (g && !e && (_ = c[g]), !_ || _.polygon) {
			if (f || i.forExport) {
				try {
					x = this.fakeTS && function(e) {
						let t = r.querySelector(".highcharts-text-outline");
						t && l(t, { display: e });
					}, d(x) && x("none"), _ = r.getBBox ? v({}, r.getBBox()) : {
						width: r.offsetWidth,
						height: r.offsetHeight,
						x: 0,
						y: 0
					}, d(x) && x("");
				} catch {}
				(!_ || _.width < 0) && (_ = {
					x: 0,
					y: 0,
					width: 0,
					height: 0
				});
			} else _ = n.htmlGetBBox();
			b = _.height, f && (_.height = b = {
				"11px,17": 14,
				"13px,20": 16
			}[`${m || ""},${Math.round(b)}`] || b), p && (_ = this.getRotatedBox(_, p));
			let e = { bBox: _ };
			s(this, "afterGetBBox", e), _ = e.bBox;
		}
		if (g && (o === "" || _.height > 0)) {
			for (; u.length > 250;) delete c[u.shift()];
			c[g] || u.push(g), c[g] = _;
		}
		return _;
	}
	getBBoxCacheKey(e) {
		if (n(this.textStr)) {
			let t = "" + this.textStr;
			return t.indexOf("<") === -1 && (t = t.replace(/\d/g, "0")), [t, ...e].join(",");
		}
	}
	getRotatedBox(e, t) {
		let { x: n, y: i, width: a, height: o } = e, { alignValue: s, translateY: c, rotationOriginX: l = 0, rotationOriginY: u = 0 } = this, d = r(s), f = Number(this.element.getAttribute("y") || 0) - (c ? 0 : i), p = t * k, m = (t - 90) * k, h = Math.cos(p), g = Math.sin(p), _ = a * h, v = a * g, y = Math.cos(m), b = Math.sin(m), [[x, S], [C, w]] = [l, u].map((e) => [e - e * h, e * g]), T = n + d * (a - _) + x + w, E = i + f - d * v - S + C, D = T + f * y, O = D + _, A = O - o * y, j = A - _, M = E + f * b, N = M + v, P = N - o * b, F = P - v, I = Math.min(D, O, A, j), L = Math.min(M, N, P, F);
		return {
			x: I,
			y: L,
			width: Math.max(D, O, A, j) - I,
			height: Math.max(M, N, P, F) - L,
			polygon: [
				[D, M],
				[O, N],
				[A, P],
				[j, F]
			]
		};
	}
	getStyle(e) {
		return N.getComputedStyle(this.element || this, "").getPropertyValue(e);
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
	constructor(e, n) {
		this.onEvents = {}, this.opacity = 1, this.SVG_NS = M, this.element = n === "div" || n === "body" ? t(n) : A.createElementNS(this.SVG_NS, n), this.renderer = e, this.styles = {}, s(this, "afterInit");
	}
	on(e, t) {
		let { onEvents: n } = this;
		return n[e] && n[e](), n[e] = p(this.element, e, t), this;
	}
	opacitySetter(e, t, n) {
		let r = Number(Number(e).toFixed(3));
		this.opacity = r, n.setAttribute(t, r);
	}
	reAlign() {
		this.alignOptions?.width && this.alignOptions.align !== "left" && (this.alignOptions.width = this.getBBox().width, this.placed = !1, this.align());
	}
	removeClass(e) {
		return this.attr("class", ("" + this.attr("class")).replace(b(e) ? RegExp(`(^| )${e}( |$)`) : e, " ").replace(/ +/g, " ").trim());
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
		let { renderer: t } = this, n = a(this.parentGroup?.rotation === 90 ? {
			offsetX: -1,
			offsetY: -1
		} : {}, o(e) ? e : {}), r = t.shadowDefinition(n);
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
		return /px$/.test(e) ? t = c(e) : e !== "" && (n = A.createElementNS(M, "rect"), m(n, {
			width: e,
			"stroke-width": 0
		}), this.element.parentNode.appendChild(n), t = n.getBBox().width, n.parentNode.removeChild(n)), t;
	}
	symbolAttr(e) {
		let t = this;
		y.symbolCustomAttribs.forEach(function(n) {
			t[n] = h(e[n], t[n]);
		}), t.attr({ d: t.renderer.symbols[t.symbolName](t.x, t.y, t.width, t.height, t) });
	}
	textSetter(e) {
		e !== this.textStr && (delete this.textPxLength, this.textStr = e, this.added && this.renderer.buildText(this), this.reAlign());
	}
	titleSetter(e) {
		let t = this.element, n = t.getElementsByTagName("title")[0] || A.createElementNS(this.SVG_NS, "title");
		t.insertBefore ? t.insertBefore(n, t.firstChild) : t.appendChild(n), n.textContent = _(h(e, ""), [/<[^>]*>/g, ""]).replace(/&lt;/g, "<").replace(/&gt;/g, ">");
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
		let { element: t, foreignObject: r, matrix: i, rotation: a = 0, rotationOriginX: o, rotationOriginY: s, scaleX: c, scaleY: l, text: u, translateX: d = 0, translateY: f = 0 } = this, p = [`translate(${d},${f})`];
		n(i) && p.push("matrix(" + i.join(",") + ")"), a && p.push("rotate(" + a + " " + (o ?? t.getAttribute("x") ?? this.x ?? 0) + " " + (s ?? t.getAttribute("y") ?? this.y ?? 0) + ")"), (n(c) || n(l)) && p.push(`scale(${c ?? 1} ${l ?? 1})`), p.length && !(u || this).textPath && (r?.element || t).setAttribute(e, p.join(" "));
	}
	visibilitySetter(e, t, n) {
		e === "inherit" ? n.removeAttribute(t) : this[t] !== e && n.setAttribute(t, e), this[t] = e;
	}
	xGetter(e) {
		return this.element.nodeName === "circle" && (e === "x" ? e = "cx" : e === "y" && (e = "cy")), this._defaultGetter(e);
	}
	zIndexSetter(e, t) {
		let { element: r, parentGroup: i, renderer: a } = this, o = i?.element || a.box, s = o === a.box, c, l, u, d = !1, f, p = this.added, m;
		if (n(e) ? (r.setAttribute("data-z-index", e), e = +e, this[t] === e && (p = !1)) : n(this[t]) && r.removeAttribute("data-z-index"), this[t] = e, p) {
			for (e = this.zIndex, e && i && (i.handleZ = !0), c = o.childNodes, m = c.length - 1; m >= 0 && !d; m--) l = c[m], u = l.getAttribute("data-z-index"), f = !n(u), l !== r && (n(e) && e < 0 && f && !s && !m ? (o.insertBefore(r, c[m]), d = !0) : (n(e) && parseFloat(u || "") <= e || f && (!n(e) || e >= 0)) && (o.insertBefore(r, c[m + 1]), d = !0));
			d ||= (o.insertBefore(r, c[s ? 3 : 0]), !0);
		}
		return d;
	}
};
F.symbolCustomAttribs = [
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
], F.prototype.strokeSetter = F.prototype.fillSetter, F.prototype.yGetter = F.prototype.xGetter, F.prototype.matrixSetter = F.prototype.rotationOriginXSetter = F.prototype.rotationOriginYSetter = F.prototype.rotationSetter = F.prototype.scaleXSetter = F.prototype.scaleYSetter = F.prototype.translateXSetter = F.prototype.translateYSetter = F.prototype.verticalAlignSetter = function(e, t) {
	this[t] = e, this.doTransform = !0;
};
//#endregion
export { F as t };

//# sourceMappingURL=SVGElement-0ERYDlUm.js.map