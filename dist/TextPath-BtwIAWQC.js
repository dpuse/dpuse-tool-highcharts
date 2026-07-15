import { E as e, F as t, J as n, _ as r, j as i, nt as a, tt as o, u as s, ut as c } from "./SeriesRegistry-BGZZizI3.js";
//#region node_modules/highcharts/es-modules/Series/Sankey/SankeyColumnComposition.js
var l;
(function(n) {
	function r(e, t) {
		let n = e;
		return n.sankeyColumn = new i(n, t), n;
	}
	n.compose = r;
	class i {
		constructor(e, t) {
			this.points = e, this.series = t;
		}
		getTranslationFactor(e) {
			let t = this.points, n = t.slice(), r = e.chart, i = e.options.minLinkWidth || 0, a, o = 0, s, c = (r.plotSizeY || 0) - (e.options.borderWidth || 0) - (t.length - 1) * e.nodePadding;
			for (; t.length;) {
				for (o = c / t.sankeyColumn.sum(), a = !1, s = t.length; s--;) t[s].getSum() * o < i && (t.splice(s, 1), c = Math.max(0, c - i), a = !0);
				if (!a) break;
			}
			t.length = 0;
			for (let e of n) t.push(e);
			return o;
		}
		top(e) {
			let n = this.series, r = n.nodePadding, i = this.points.reduce((t, i) => {
				t > 0 && (t += r);
				let a = Math.max(i.getSum() * e, n.options.minLinkWidth || 0);
				return t += a, t;
			}, 0);
			return t(n.options.nodeAlignment || "center") * ((n.chart.plotSizeY || 0) - i);
		}
		left(e) {
			let t = this.series, n = t.chart, r = t.options.equalNodes, i = n.inverted ? n.plotHeight : n.plotWidth, a = t.nodePadding, o = this.points.reduce((n, o) => {
				n > 0 && (n += a);
				let s = r ? i / o.series.nodes.length - a : Math.max(o.getSum() * e, t.options.minLinkWidth || 0);
				return n += s, n;
			}, 0);
			return ((n.plotSizeX || 0) - Math.round(o)) / 2;
		}
		sum() {
			return this.points.reduce((e, t) => e + t.getSum(), 0);
		}
		offset(t, n) {
			let r = this.points, i = this.series, o = i.nodePadding, s = 0, c;
			if (i.is("organization") && t.hangsFrom) return { absoluteTop: t.hangsFrom.nodeY };
			for (let l = 0; l < r.length; l++) {
				let u = r[l].getSum(), d = Math.max(u * n, i.options.minLinkWidth || 0), f = t.options[i.chart.inverted ? "offsetHorizontal" : "offsetVertical"], p = t.options.offset || 0;
				if (c = u ? d + o : 0, r[l] === t) return { relativeTop: s + (e(f) ? a(f, d) : a(p, c)) };
				s += c;
			}
		}
	}
	n.SankeyColumnAdditions = i;
})(l ||= {});
var u = l, { composed: d, deg2rad: f } = c;
function p(t, a) {
	let o = this.renderer.url, c = this.text || this, l = c.textPath, { attributes: u, enabled: d } = n({
		enabled: !0,
		attributes: {
			dy: -5,
			startOffset: "50%",
			textAnchor: "middle"
		}
	}, a);
	if (t ||= l && l.path, l?.undo(), t && d) {
		let n = r(c, "afterModifyTree", (n) => {
			if (t && d) {
				let r = t.attr("id");
				r || t.attr("id", r = s());
				let a = {
					x: 0,
					y: 0
				};
				e(u.dx) && (a.dx = u.dx, delete u.dx), e(u.dy) && (a.dy = u.dy, delete u.dy), c.attr(a), this.attr({ transform: "" }), this.box &&= this.box.destroy();
				let l = n.nodes.slice(0);
				n.nodes.length = 0, n.nodes[0] = {
					tagName: "textPath",
					attributes: i(u, {
						"text-anchor": u.textAnchor,
						href: `${o}#${r}`
					}),
					children: l
				};
			}
		});
		c.textPath = {
			path: t,
			undo: n
		};
	} else c.attr({
		dx: 0,
		dy: 0
	}), delete c.textPath;
	return this.added && (c.textCache = "", this.renderer.buildText(c)), this;
}
function m(e) {
	let t = e.bBox, n = this.element?.querySelector("textPath");
	if (n) {
		let e = [], { b: r, h: i } = this.renderer.fontMetrics(this.element), a = i - r, o = /* @__PURE__ */ RegExp("(<tspan>|<tspan(?!\\sclass=\"highcharts-br\")[^>]*>|<\\/tspan>)", "g"), s = n.innerHTML.replace(o, "").split(/<tspan class="highcharts-br"[^>]*>/), c = s.length, l = (e, t) => {
			let { x: i, y: o } = t, s = (n.getRotationOfChar(e) - 90) * f, c = Math.cos(s), l = Math.sin(s);
			return [[i - a * c, o - a * l], [i + r * c, o + r * l]];
		};
		for (let t = 0, r = 0; r < c; r++) {
			let i = s[r].length;
			for (let a = 0; a < i; a += 5) try {
				let i = t + a + r, [o, s] = l(i, n.getStartPositionOfChar(i));
				a === 0 ? (e.push(s), e.push(o)) : (r === 0 && e.unshift(s), r === c - 1 && e.push(o));
			} catch {
				break;
			}
			t += i - 1;
			try {
				let i = t + r, [a, o] = l(i, n.getEndPositionOfChar(i));
				e.unshift(o), e.unshift(a);
			} catch {
				break;
			}
		}
		e.length && e.push(e[0].slice()), t.polygon = e;
	}
	return t;
}
function h(e) {
	let t = e.labelOptions, n = e.point, r = t[n.formatPrefix + "TextPath"] || t.textPath;
	r && !t.useHTML && (this.setTextPath(n.getDataLabelPath?.(this) || n.graphic, r), n.dataLabelPath && !r.enabled && (n.dataLabelPath = n.dataLabelPath.destroy()));
}
function g(e) {
	o(d, "TextPath") && (r(e, "afterGetBBox", m), r(e, "beforeAddingDataLabel", h), e.prototype.setTextPath = e.prototype.setTextPath ?? p);
}
//#endregion
export { u as n, g as t };

//# sourceMappingURL=TextPath-BtwIAWQC.js.map