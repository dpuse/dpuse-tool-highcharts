import { E as e, G as t, J as n, K as r, N as i, V as a, _ as o, et as s, g as c, j as l, n as u, nt as d, ot as f, t as p, ut as m, w as h, x as g } from "./SeriesRegistry-BGZZizI3.js";
import { t as _ } from "./SVGElement-0ERYDlUm.js";
import { n as v, t as y } from "./TextPath-BtwIAWQC.js";
//#region node_modules/highcharts/es-modules/Series/NodesComposition.js
var { series: { prototype: b, prototype: { pointClass: { prototype: x } } } } = p, S;
(function(t) {
	function r(e, t) {
		let n = e.prototype, r = t.prototype;
		return n.setNodeState = p, n.setState = p, n.update = m, r.destroy = u, r.setData = f, o(t, "afterUpdate", a), t;
	}
	t.compose = r;
	function a() {
		if (!this.hasDataLabels?.() && this.nodes) for (let e of this.nodes) e.destroyElements({ dataLabel: 1 });
	}
	function c(e) {
		let t = this.pointClass, n = (e, t) => i(e, (e) => e.id === t), r = n(this.nodes, e), a;
		if (!r) {
			a = this.options.nodes && n(this.options.nodes, e);
			let i = new t(this, l({
				className: "highcharts-node",
				isNode: !0,
				id: e,
				y: 1
			}, a));
			i.linksTo = [], i.linksFrom = [], i.getSum = function() {
				let e = 0, t = 0;
				return i.linksTo.forEach((t) => {
					e += t.weight || 0;
				}), i.linksFrom.forEach((e) => {
					t += e.weight || 0;
				}), Math.max(e, t);
			}, i.offset = function(e, t) {
				let n = 0;
				for (let r = 0; r < i[t].length; r++) {
					if (i[t][r] === e) return n;
					n += i[t][r].weight;
				}
			}, i.hasShape = function() {
				let e = 0;
				return i.linksTo.forEach((t) => {
					t.outgoing && e++;
				}), !i.linksTo.length || e !== i.linksTo.length;
			}, i.index = this.nodes.push(i) - 1, r = i;
		}
		return r.formatPrefix = "node", r.name = r.name || r.options.id || "", r.mass = s(r.options.mass, r.options.marker && r.options.marker.radius, this.options.marker && this.options.marker.radius, 4), r;
	}
	t.createNode = c;
	function u() {
		return this.data = [].concat(this.points || [], this.nodes), b.destroy.apply(this, arguments);
	}
	t.destroy = u;
	function d() {
		let t = this.chart, n = {};
		b.generatePoints.call(this), this.nodes ||= [], this.colorCounter = 0, this.nodes.forEach((e) => {
			e.linksFrom.length = 0, e.linksTo.length = 0, e.level = e.options.level;
		}), this.points.forEach((r) => {
			e(r.from) && (n[r.from] || (n[r.from] = this.createNode(r.from)), n[r.from].linksFrom.push(r), r.fromNode = n[r.from], t.styledMode ? r.colorIndex = s(r.options.colorIndex, n[r.from].colorIndex) : r.color = r.options.color || n[r.from].color), e(r.to) && (n[r.to] || (n[r.to] = this.createNode(r.to)), n[r.to].linksTo.push(r), r.toNode = n[r.to]), r.name = r.name || r.id;
		}, this), this.nodeLookup = n;
	}
	t.generatePoints = d;
	function f() {
		this.nodes && (this.nodes.forEach((e) => {
			e.destroy();
		}), this.nodes.length = 0), b.setData.apply(this, arguments);
	}
	function p(e) {
		let t = arguments, n = this.isNode ? this.linksTo.concat(this.linksFrom) : [this.fromNode, this.toNode];
		e !== "select" && n.forEach((e) => {
			e && e.series && (x.setState.apply(e, t), e.isNode || (e.fromNode.graphic && x.setState.apply(e.fromNode, t), e.toNode && e.toNode.graphic && x.setState.apply(e.toNode, t)));
		}), x.setState.apply(this, t);
	}
	t.setNodeState = p;
	function m(e, t, r, i) {
		let a = this.series.options.nodes, o = this.series.options.data, c = o?.length || 0, l = o?.[this.index];
		if (x.update.call(this, e, !this.isNode && t, r, i), this.isNode) {
			let e = (a || []).reduce((e, t, n) => this.id === t.id ? n : e, -1), i = n(a && a[e] || {}, o?.[this.index] || {});
			o && (l ? o[this.index] = l : o.length = c), a ? e >= 0 ? a[e] = i : a.push(i) : this.series.options.nodes = [i], s(t, !0) && this.series.chart.redraw(r);
		}
	}
	t.updateNode = m;
})(S ||= {});
var C = S, { column: w } = p.seriesTypes, T = class extends w.prototype.pointClass {
	applyOptions(t, n) {
		return u.prototype.applyOptions.call(this, t, n), e(this.options.level) && (this.options.column = this.column = this.options.level), this;
	}
	getClassName() {
		return (this.isNode ? "highcharts-node " : "highcharts-link ") + u.prototype.getClassName.call(this);
	}
	getFromNode() {
		let e = this, t = -1, n;
		for (let r = 0; r < e.linksTo.length; r++) {
			let i = e.linksTo[r];
			i.fromNode.column > t && i.fromNode !== e && (n = i.fromNode, t = n.column);
		}
		return {
			fromNode: n,
			fromColumn: t
		};
	}
	setNodeColumn() {
		let t = this;
		e(t.options.column) || (t.linksTo.length === 0 ? t.column = 0 : t.column = t.getFromNode().fromColumn + 1);
	}
	isValid() {
		return this.isNode || typeof this.weight == "number";
	}
}, E = {
	borderWidth: 0,
	colorByPoint: !0,
	curveFactor: .33,
	dataLabels: {
		enabled: !0,
		backgroundColor: "none",
		crop: !1,
		nodeFormat: void 0,
		nodeFormatter: function() {
			return this.point.name;
		},
		format: void 0,
		formatter: function() {},
		inside: !0
	},
	inactiveOtherPoints: !0,
	linkColorMode: "from",
	linkOpacity: .5,
	opacity: 1,
	minLinkWidth: 0,
	nodeAlignment: "center",
	nodeWidth: 20,
	nodePadding: 10,
	nodeDistance: 30,
	showInLegend: !1,
	states: {
		hover: {
			linkOpacity: 1,
			opacity: 1
		},
		inactive: {
			linkOpacity: .1,
			opacity: .1,
			animation: { duration: 50 }
		}
	},
	tooltip: {
		followPointer: !0,
		headerFormat: "<span style=\"font-size: 0.8em\">{series.name}</span><br/>",
		pointFormat: "{point.fromNode.name} → {point.toNode.name}: <b>{point.weight}</b><br/>",
		nodeFormat: "{point.name}: <b>{point.sum}</b><br/>"
	}
};
//#endregion
//#region node_modules/highcharts/es-modules/Series/TreeUtilities.js
function D(e, t) {
	let n = t.index, r = t.mapOptionsToLevel, i = t.parentColor, a = t.parentColorIndex, o = t.series, l = t.colors, u = t.siblings, d = o.points, f = o.chart.options.chart, p, m, h, g, _, v, y;
	return e && (m = d[e.i], h = r[e.level] || {}, p = m && h.colorByPoint, p && (_ = m.index % (l ? l.length : f.colorCount), g = l && l[_]), o.chart.styledMode || (v = s(m && m.options.color, h && h.color, g, i && ((e) => {
		let t = h && h.colorVariation;
		return t && t.key === "brightness" && n && u ? c.parse(e).brighten(t.to * (n / u)).get() : e;
	})(i), o.color)), y = s(m && m.options.colorIndex, h && h.colorIndex, _, a, t.colorIndex)), {
		color: v,
		colorIndex: y
	};
}
function O(e) {
	let i = {}, o, c, l, u, d, f;
	if (r(e)) for (u = t(e.from) ? e.from : 1, f = e.levels, c = {}, o = r(e.defaults) ? e.defaults : {}, a(f) && (c = f.reduce((e, i) => {
		let a, c, l;
		return r(i) && t(i.level) && (l = n({}, i), c = s(l.levelIsConstant, o.levelIsConstant), delete l.levelIsConstant, delete l.level, a = i.level + (c ? 0 : u - 1), r(e[a]) ? n(!0, e[a], l) : e[a] = l), e;
	}, {})), d = t(e.to) ? e.to : 1, l = 0; l <= d; l++) i[l] = n({}, o, r(c[l]) ? c[l] : {});
	return i;
}
function k(e, t) {
	let n = t.before, r = t.idRoot, i = t.mapIdToNode[r], a = t.levelIsConstant !== !1, o = t.points[e.i], c = o && o.options || {}, u = [], d = 0;
	e.levelDynamic = e.level - (a ? 0 : i.level), e.name = s(o && o.name, ""), e.visible = r === e.id || t.visible === !0, typeof n == "function" && (e = n(e, t)), e.children.forEach((n, r) => {
		let i = l({}, t);
		l(i, {
			index: r,
			siblings: e.children.length,
			visible: e.visible
		}), n = k(n, i), u.push(n), n.visible && (d += n.val);
	});
	let f = s(c.value, d);
	return e.visible = f >= 0 && (d > 0 || e.visible), e.children = u, e.childrenTotal = d, e.isLeaf = e.visible && !d, e.val = f, e;
}
function A(e) {
	let t, n;
	return r(e) && (n = r(e.options) ? e.options : {}, t = s(e.rootNode, n.rootId, ""), r(e.userOptions) && (e.userOptions.rootId = t), e.rootNode = t), t;
}
function j(e, t) {
	let { chart: n, options: r } = e, { nodeDistance: i = 0, nodeWidth: a = 0 } = r, { plotSizeX: o = 1 } = n;
	if (a === "auto") {
		if (typeof i == "string" && /%$/.test(i)) return o / (t + parseFloat(i) / 100 * (t - 1));
		let e = Number(i);
		return (o + e) / (t || 1) - e;
	}
	return d(a, o);
}
var M = {
	getColor: D,
	getLevelOptions: O,
	getNodeWidth: j,
	setTreeValues: k,
	updateRootId: A
}, { column: N, line: P } = p.seriesTypes, { parse: F } = c, { getLevelOptions: I, getNodeWidth: L } = M;
y(_);
var R = class e extends N {
	static getDLOptions(e) {
		let t = r(e.optionsPoint) ? e.optionsPoint.dataLabels : {}, i = r(e.level) ? e.level.dataLabels : {};
		return n({ style: {} }, i, t, { zIndex: i?.zIndex });
	}
	createNodeColumns() {
		let e = [];
		for (let t of this.nodes) t.setNodeColumn(), e[t.column] || (e[t.column] = v.compose([], this)), e[t.column].push(t);
		for (let t = 0; t < e.length; t++) e[t] === void 0 && (e[t] = v.compose([], this));
		return e;
	}
	order(e, t, n) {
		let r = this;
		if (n ||= /* @__PURE__ */ new Set(), e.level === void 0 || e.level < t) {
			e.level = t, n.add(e);
			for (let i of e.linksFrom) i.toNode && !n.has(i.toNode) && r.order(i.toNode, t + 1, n);
			n.delete(e);
		}
	}
	generatePoints() {
		if (C.generatePoints.apply(this, arguments), this.orderNodes) {
			for (let e of this.nodes) e.linksTo.length === 0 && this.order(e, 0);
			f(this.nodes, (e, t) => e.level - t.level);
		}
	}
	getNodePadding() {
		let e = this.options.nodePadding || 0;
		if (this.nodeColumns) {
			let t = this.nodeColumns.reduce((e, t) => Math.max(e, t.length), 0);
			t * e > this.chart.plotSizeY && (e = this.chart.plotSizeY / t);
		}
		return e;
	}
	hasData() {
		return !!this.dataTable.rowCount;
	}
	pointAttribs(e, t) {
		if (!e) return {};
		let n = this, r = e.isNode ? e.level : e.fromNode.level, i = n.mapOptionsToLevel[r || 0] || {}, a = e.options, o = i.states && i.states[t || ""] || {}, c = [
			"colorByPoint",
			"borderColor",
			"borderWidth",
			"linkOpacity",
			"opacity"
		].reduce((e, t) => (e[t] = s(o[t], a[t], i[t], n.options[t]), e), {}), l = s(o.color, a.color, c.colorByPoint ? e.color : i.color);
		return e.isNode ? {
			fill: l,
			stroke: c.borderColor,
			"stroke-width": c.borderWidth,
			opacity: c.opacity
		} : {
			fill: l,
			"fill-opacity": c.linkOpacity
		};
	}
	drawTracker() {
		N.prototype.drawTracker.call(this, this.points), N.prototype.drawTracker.call(this, this.nodes);
	}
	drawPoints() {
		N.prototype.drawPoints.call(this, this.points), N.prototype.drawPoints.call(this, this.nodes);
	}
	drawDataLabels() {
		N.prototype.drawDataLabels.call(this, this.points), N.prototype.drawDataLabels.call(this, this.nodes);
	}
	translate() {
		this.generatePoints(), this.nodeColumns = this.createNodeColumns();
		let e = this, t = this.chart, n = this.options, r = this.nodeColumns, i = r.length;
		this.nodeWidth = L(this, i), this.nodePadding = this.getNodePadding(), this.translationFactor = r.reduce((t, n) => Math.min(t, n.sankeyColumn.getTranslationFactor(e)), Infinity), this.colDistance = (t.plotSizeX - this.nodeWidth - n.borderWidth) / Math.max(1, r.length - 1), e.mapOptionsToLevel = I({
			from: 1,
			levels: n.levels,
			to: r.length - 1,
			defaults: {
				borderColor: n.borderColor,
				borderRadius: n.borderRadius,
				borderWidth: n.borderWidth,
				color: e.color,
				colorByPoint: n.colorByPoint,
				levelIsConstant: !0,
				linkColor: n.linkColor,
				linkLineWidth: n.linkLineWidth,
				linkOpacity: n.linkOpacity,
				states: n.states
			}
		});
		for (let t of r) for (let n of t) e.translateNode(n, t);
		for (let t of this.nodes) for (let n of t.linksFrom) (n.weight || n.isNull) && n.to && (e.translateLink(n), n.allowShadow = !1);
	}
	getY(e, t, n, r) {
		let i = (t.offset(e, n) || 0) * this.translationFactor;
		return Math.min(t.nodeY + i, t.nodeY + (t.shapeArgs && t.shapeArgs.height || 0) - r);
	}
	translateLink(e, t) {
		let n = e.fromNode, r = e.toNode, i = this.chart, { inverted: a } = i, o = this.translationFactor, c = this.options, l = s(e.linkColorMode, c.linkColorMode), u = (i.inverted ? -this.colDistance : this.colDistance) * c.curveFactor, d = n.nodeX, f = r.nodeX, p = e.outgoing, m = Math.max((e.weight || 0) * o, this.options.minLinkWidth || 0), h = this.getY(e, n, "linksFrom", m), g = t || this.getY(e, r, "linksTo", m), _ = this.nodeWidth, v = f > d + _;
		if (i.inverted && (h = i.plotSizeY - h, g = (i.plotSizeY || 0) - g, _ = -_, m = -m, v = d > f), e.shapeType = "path", e.linkBase = [
			h,
			h + m,
			g,
			g + m
		], v && typeof g == "number") e.shapeArgs = { d: [
			[
				"M",
				d + _,
				h
			],
			[
				"C",
				d + _ + u,
				h,
				f - u,
				g,
				f,
				g
			],
			[
				"L",
				f + (p ? _ : 0),
				g + m / 2
			],
			[
				"L",
				f,
				g + m
			],
			[
				"C",
				f - u,
				g + m,
				d + _ + u,
				h + m,
				d + _,
				h + m
			],
			["Z"]
		] };
		else if (typeof g == "number") {
			let t = i.plotHeight - h - m, n = f - 20 - m, r = f - 20, a = f, o = d + _, s = o + 20, c = s + m, l = h, u = h + m, p = u + 20, v = p + t, y = v + 20, b = y + m, x = g, S = x + m, C = S + 20, w = u - m * .7, T = y + m * .7, E = S - m * .7, D = a - m * .7, O = o + m * .7;
			e.shapeArgs = { d: [
				[
					"M",
					o,
					l
				],
				[
					"C",
					O,
					l,
					c,
					w,
					c,
					p
				],
				[
					"L",
					c,
					v
				],
				[
					"C",
					c,
					T,
					O,
					b,
					o,
					b
				],
				[
					"L",
					a,
					b
				],
				[
					"C",
					D,
					b,
					n,
					T,
					n,
					v
				],
				[
					"L",
					n,
					C
				],
				[
					"C",
					n,
					E,
					D,
					x,
					a,
					x
				],
				[
					"L",
					a,
					S
				],
				[
					"C",
					r,
					S,
					r,
					S,
					r,
					C
				],
				[
					"L",
					r,
					v
				],
				[
					"C",
					r,
					y,
					r,
					y,
					a,
					y
				],
				[
					"L",
					o,
					y
				],
				[
					"C",
					s,
					y,
					s,
					y,
					s,
					v
				],
				[
					"L",
					s,
					p
				],
				[
					"C",
					s,
					u,
					s,
					u,
					o,
					u
				],
				["Z"]
			] };
		}
		if (e.dlBox = {
			x: d + (f - d + _) / 2,
			y: h + (g - h) / 2,
			height: m,
			width: 0
		}, e.tooltipPos = i.inverted ? [i.plotSizeY - e.dlBox.y - m / 2, i.plotSizeX - e.dlBox.x] : [e.dlBox.x, e.dlBox.y + m / 2], e.y = e.plotY = 1, e.x = e.plotX = 1, !e.options.color) {
			if (l === "from") e.color = n.color;
			else if (l === "to") e.color = r.color;
			else if (l === "gradient") {
				let t = F(n.color).get(), i = F(r.color).get();
				e.color = {
					linearGradient: {
						x1: 1,
						x2: 0,
						y1: 0,
						y2: 0
					},
					stops: [[0, a ? t : i], [1, a ? i : t]]
				};
			}
		}
	}
	translateNode(t, n) {
		let r = this.translationFactor, i = this.chart, a = this.options, { borderRadius: o, borderWidth: c = 0 } = a, l = t.getSum(), u = Math.max(Math.round(l * r), this.options.minLinkWidth), f = Math.round(this.nodeWidth), p = n.sankeyColumn.offset(t, r), m = h(s(p.absoluteTop, n.sankeyColumn.top(r) + p.relativeTop), c), _ = h(this.colDistance * t.column + c / 2, c) + d(t.options[i.inverted ? "offsetVertical" : "offsetHorizontal"] || 0, f), v = i.inverted ? i.plotSizeX - _ : _;
		if (t.sum = l, l) {
			t.shapeType = "roundedRect", t.nodeX = v, t.nodeY = m;
			let n = v, r = m, s = t.options.width || a.width || f, c = t.options.height || a.height || u, l = g(d(typeof o == "object" ? o.radius : o || 0, s), 0, u / 2);
			i.inverted && (n = v - f, r = i.plotSizeY - m - u, s = t.options.height || a.height || f, c = t.options.width || a.width || u), t.dlOptions = {
				...e.getDLOptions({
					level: this.mapOptionsToLevel[t.level],
					optionsPoint: t.options
				}),
				zIndex: void 0
			}, delete t.dlOptions.zIndex, t.plotX = 1, t.plotY = 1, t.tooltipPos = i.inverted ? [i.plotSizeY - r - c / 2, i.plotSizeX - n - s / 2] : [n + s / 2, r + c / 2], t.shapeArgs = {
				x: n,
				y: r,
				width: s,
				height: c,
				r: l,
				display: t.hasShape() ? "" : "none"
			};
		} else t.dlOptions = { enabled: !1 };
	}
};
R.defaultOptions = n(N.defaultOptions, E), C.compose(T, R), l(R.prototype, {
	animate: P.prototype.animate,
	createNode: C.createNode,
	forceDL: !0,
	invertible: !0,
	isCartesian: !1,
	orderNodes: !0,
	noSharedTooltip: !0,
	pointArrayMap: [
		"from",
		"to",
		"weight"
	],
	pointClass: T,
	searchPoint: m.noop
}), p.registerSeriesType("sankey", R);
//#endregion
//#region node_modules/highcharts/es-modules/masters/modules/sankey.src.js
var z = m;
//#endregion
export { z as default };

//# sourceMappingURL=sankey.src-B6FOI3xv.js.map