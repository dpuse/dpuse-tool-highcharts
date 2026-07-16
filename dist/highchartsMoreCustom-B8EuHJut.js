import { A as e, B as t, E as n, G as r, I as i, U as a, V as o, X as s, Y as c, Z as l, _ as u, a as d, et as f, f as p, g as m, it as h, k as g, m as _, n as v, ot as y, p as b, x, y as S } from "./AnimationUtilities-CfxhHVEw.js";
import { n as C, t as w } from "./SeriesRegistry-Drf7P7c8.js";
import { a as T, i as E, n as D, r as O } from "./BorderRadius-7nQt-8g5.js";
//#region node_modules/highcharts/es-modules/Series/AreaRange/AreaRangePoint.js
var { area: { prototype: { pointClass: k, pointClass: { prototype: A } } } } = w.seriesTypes, j = class extends k {
	setState() {
		let e = this.state, n = this.series, r = n.chart.polar;
		x(this.plotHigh) || (this.plotHigh = n.yAxis.toPixels(this.high, !0)), x(this.plotLow) || (this.plotLow = this.plotY = n.yAxis.toPixels(this.low, !0)), n.lowerStateMarkerGraphic = n.stateMarkerGraphic, n.stateMarkerGraphic = n.upperStateMarkerGraphic, this.graphic = this.graphics && this.graphics[1], this.plotY = this.plotHigh, r && t(this.plotHighX) && (this.plotX = this.plotHighX), A.setState.apply(this, arguments), this.state = e, this.plotY = this.plotLow, this.graphic = this.graphics && this.graphics[0], r && t(this.plotLowX) && (this.plotX = this.plotLowX), n.upperStateMarkerGraphic = n.stateMarkerGraphic, n.stateMarkerGraphic = n.lowerStateMarkerGraphic, n.lowerStateMarkerGraphic = void 0;
		let i = n.modifyMarkerSettings();
		A.setState.apply(this, arguments), n.restoreMarkerSettings(i);
	}
	haloPath() {
		let e = this.series.chart.polar, n = [];
		return this.plotY = this.plotLow, e && t(this.plotLowX) && (this.plotX = this.plotLowX), this.isInside && (n = A.haloPath.apply(this, arguments)), this.plotY = this.plotHigh, e && t(this.plotHighX) && (this.plotX = this.plotHighX), this.isTopInside && (n = n.concat(A.haloPath.apply(this, arguments))), n;
	}
	isValid() {
		return t(this.low) && t(this.high);
	}
}, { noop: ee } = y, { area: M, area: { prototype: N }, column: { prototype: P } } = w.seriesTypes, F = {
	lineWidth: 1,
	threshold: null,
	tooltip: { pointFormat: "<span style=\"color:{series.color}\">●</span> {series.name}: <b>{point.low}</b> - <b>{point.high}</b><br/>" },
	trackByArea: !0,
	dataLabels: {
		align: void 0,
		verticalAlign: void 0,
		xLow: 0,
		xHigh: 0,
		yLow: 0,
		yHigh: 0
	}
}, I = class extends M {
	toYData(e) {
		return [e.low, e.high];
	}
	highToXY(e) {
		let t = this.chart, n = this.xAxis.postTranslate(e.rectPlotX || 0, this.yAxis.len - (e.plotHigh || 0));
		e.plotHighX = n.x - t.plotLeft, e.plotHigh = n.y - t.plotTop, e.plotLowX = e.plotX;
	}
	getGraphPath(e) {
		let t = [], n = [], r = N.getGraphPath, i = this.options, a = this.chart.polar, o = a && i.connectEnds !== !1, s = i.connectNulls, l, u, d, f = i.step;
		for (e ||= this.points, l = e.length; l--;) {
			u = e[l];
			let r = a ? {
				plotX: u.rectPlotX,
				plotY: u.yBottom,
				doCurve: !1
			} : {
				plotX: u.plotX,
				plotY: u.plotY,
				doCurve: !1
			};
			!u.isNull && !o && !s && (!e[l + 1] || e[l + 1].isNull) && n.push(r), d = {
				polarPlotY: u.polarPlotY,
				rectPlotX: u.rectPlotX,
				yBottom: u.yBottom,
				plotX: c(u.plotHighX, u.plotX),
				plotY: u.plotHigh,
				isNull: u.isNull
			}, n.push(d), t.push(d), !u.isNull && !o && !s && (!e[l - 1] || e[l - 1].isNull) && n.push(r);
		}
		let p = r.call(this, e);
		f && (f === !0 && (f = "left"), i.step = {
			left: "right",
			center: "center",
			right: "left"
		}[f]);
		let m = r.call(this, t), h = r.call(this, n);
		i.step = f;
		let g = [].concat(p, m);
		return !this.chart.polar && h[0] && h[0][0] === "M" && (h[0] = [
			"L",
			h[0][1],
			h[0][2]
		]), this.graphPath = g, this.areaPath = p.concat(h), g.isArea = !0, g.xMap = p.xMap, this.areaPath.xMap = p.xMap, g;
	}
	drawDataLabels() {
		let e = this.points, t = e.length, r = [], a = this.options.dataLabels, o = this.chart.inverted, s, c, l, u, d;
		if (a) {
			if (i(a) ? (u = a[0] || { enabled: !1 }, d = a[1] || { enabled: !1 }) : (u = n({}, a), u.x = a.xHigh, u.y = a.yHigh, d = n({}, a), d.x = a.xLow, d.y = a.yLow), u.enabled || this.hasDataLabels?.()) {
				for (s = t; s--;) if (c = e[s], c) {
					let { plotHigh: e = 0, plotLow: t = 0 } = c;
					l = u.inside ? e < t : e > t, c.y = c.high, c._plotY = c.plotY, c.plotY = e, r[s] = c.dataLabel, c.dataLabel = c.dataLabelUpper, c.below = l, o ? u.align ||= l ? "right" : "left" : u.verticalAlign ||= l ? "top" : "bottom";
				}
				for (this.options.dataLabels = u, N.drawDataLabels && N.drawDataLabels.apply(this, arguments), s = t; s--;) c = e[s], c && (c.dataLabelUpper = c.dataLabel, c.dataLabel = r[s], delete c.dataLabels, c.y = c.low, c.plotY = c._plotY);
			}
			if (d.enabled || this.hasDataLabels?.()) {
				for (s = t; s--;) if (c = e[s], c) {
					let { plotHigh: e = 0, plotLow: t = 0 } = c;
					l = d.inside ? e < t : e > t, c.below = !l, o ? d.align ||= l ? "left" : "right" : d.verticalAlign ||= l ? "bottom" : "top";
				}
				this.options.dataLabels = d, N.drawDataLabels && N.drawDataLabels.apply(this, arguments);
			}
			if (u.enabled) for (s = t; s--;) c = e[s], c && (c.dataLabels = [c.dataLabelUpper, c.dataLabel].filter(function(e) {
				return !!e;
			}));
			this.options.dataLabels = a;
		}
	}
	alignDataLabel() {
		P.alignDataLabel.apply(this, arguments);
	}
	modifyMarkerSettings() {
		let e = this, t = {
			marker: e.options.marker,
			symbol: e.symbol
		};
		if (e.options.lowMarker) {
			let { options: { marker: t, lowMarker: n } } = e;
			e.options.marker = a(t, n), n.symbol && (e.symbol = n.symbol);
		}
		return t;
	}
	restoreMarkerSettings(e) {
		let t = this;
		t.options.marker = e.marker, t.symbol = e.symbol;
	}
	drawPoints() {
		let e = this, t = e.points.length, r, i, a = e.modifyMarkerSettings();
		for (N.drawPoints.apply(e, arguments), e.restoreMarkerSettings(a), r = 0; r < t;) i = e.points[r], i.graphics = i.graphics || [], i.origProps = {
			plotY: i.plotY,
			plotX: i.plotX,
			isInside: i.isInside,
			negative: i.negative,
			zone: i.zone,
			y: i.y
		}, (i.graphic || i.graphics[0]) && (i.graphics[0] = i.graphic), i.graphic = i.graphics[1], i.plotY = i.plotHigh, x(i.plotHighX) && (i.plotX = i.plotHighX), i.y = c(i.high, i.origProps.y), i.negative = i.y < (e.options.threshold || 0), e.zones.length && (i.zone = i.getZone()), e.chart.polar || (i.isInside = i.isTopInside = i.plotY !== void 0 && i.plotY >= 0 && i.plotY <= e.yAxis.len && i.plotX >= 0 && i.plotX <= e.xAxis.len), r++;
		for (N.drawPoints.apply(e, arguments), r = 0; r < t;) i = e.points[r], i.graphics = i.graphics || [], (i.graphic || i.graphics[1]) && (i.graphics[1] = i.graphic), i.graphic = i.graphics[0], i.origProps && (n(i, i.origProps), delete i.origProps), r++;
	}
	hasMarkerChanged(e, t) {
		let n = e.lowMarker, r = t.lowMarker || {};
		return n && (n.enabled === !1 || r.symbol !== n.symbol || r.height !== n.height || r.width !== n.width) || super.hasMarkerChanged(e, t);
	}
};
I.defaultOptions = a(M.defaultOptions, F), p(I, "afterTranslate", function() {
	this.pointArrayMap.join(",") === "low,high" && this.points.forEach((e) => {
		let n = e.high, r = e.plotY;
		e.isNull ? e.plotY = void 0 : (e.plotLow = r, e.plotHigh = t(n) ? this.yAxis.translate(this.dataModify ? this.dataModify.modifyValue(n) : n, !1, !0, void 0, !0) : void 0, this.dataModify && (e.yBottom = e.plotHigh));
	});
}, { order: 0 }), p(I, "afterTranslate", function() {
	this.points.forEach((e) => {
		if (this.chart.polar) this.highToXY(e), e.plotLow = e.plotY, e.tooltipPos = [((e.plotHighX || 0) + (e.plotLowX || 0)) / 2, ((e.plotHigh || 0) + (e.plotLow || 0)) / 2];
		else {
			let t = e.pos(!1, void 0, e.plotLow), n = e.pos(!1, void 0, e.plotHigh);
			t && n && (t[0] = (t[0] + n[0]) / 2, t[1] = (t[1] + n[1]) / 2), e.tooltipPos = t;
		}
	});
}, { order: 3 }), n(I.prototype, {
	deferTranslatePolar: !0,
	pointArrayMap: ["low", "high"],
	pointClass: j,
	pointValKey: "low",
	setStackedPoints: ee
}), w.registerSeriesType("arearange", I);
//#endregion
//#region node_modules/highcharts/es-modules/Series/AreaSplineRange/AreaSplineRangeSeries.js
var { spline: { prototype: te } } = w.seriesTypes, L = class extends I {};
L.defaultOptions = a(I.defaultOptions), n(L.prototype, { getPointSpline: te.getPointSpline }), w.registerSeriesType("areasplinerange", L);
//#endregion
//#region node_modules/highcharts/es-modules/Series/ColumnRange/ColumnRangePoint.js
var { seriesTypes: { column: { prototype: { pointClass: { prototype: R } } }, arearange: { prototype: { pointClass: z } } } } = w, B = class extends z {
	isValid() {
		return t(this.low);
	}
};
n(B.prototype, { setState: R.setState });
//#endregion
//#region node_modules/highcharts/es-modules/Series/ColumnRange/ColumnRangeSeries.js
var { noop: V } = y, { seriesTypes: { arearange: H, column: ne, column: { prototype: U } } } = w, re = {
	borderRadius: { where: "all" },
	pointRange: null,
	legendSymbol: "rectangle",
	marker: null,
	states: { hover: { halo: !1 } }
}, W = class extends H {
	setOptions() {
		return a(!0, arguments[0], { stacking: void 0 }), H.prototype.setOptions.apply(this, arguments);
	}
	translate() {
		return U.translate.apply(this);
	}
	pointAttribs() {
		return U.pointAttribs.apply(this, arguments);
	}
	translate3dPoints() {
		return U.translate3dPoints.apply(this, arguments);
	}
	translate3dShapes() {
		return U.translate3dShapes.apply(this, arguments);
	}
	afterColumnTranslate() {
		let e = this.yAxis, n = this.xAxis, r = n.startAngleRad, i = this.chart, o = this.xAxis.isRadial, s = Math.max(i.chartWidth, i.chartHeight) + 999, l, u, d, f;
		function p(e) {
			return m(e, -s, s);
		}
		this.points.forEach((s) => {
			let m = s.shapeArgs || {}, h = this.options.minPointLength, g = s.plotY, _ = e.translate(s.high, 0, 1, 0, 1);
			if (t(_) && t(g)) if (s.plotHigh = p(_), s.plotLow = p(g), f = s.plotHigh, l = c(s.rectPlotY, s.plotY) - s.plotHigh, Math.abs(l) < h ? (u = h - l, l += u, f -= u / 2) : l < 0 && (l *= -1, f -= l), o && this.polar) d = s.barX + r, s.shapeType = "arc", s.shapeArgs = this.polar.arc(f + l, f, d, d + (s.pointWidth || 0));
			else {
				m.height = l, m.y = f;
				let { x: t = 0, width: r = 0 } = m;
				s.shapeArgs = a(s.shapeArgs, this.crispCol(t, f, r, l)), s.tooltipPos = i.inverted ? [
					e.len + e.pos - i.plotLeft - f - l / 2,
					n.len + n.pos - i.plotTop - t - r / 2,
					l
				] : [
					n.left - i.plotLeft + t + r / 2,
					e.pos - i.plotTop + f + l / 2,
					l
				];
			}
		});
	}
};
W.defaultOptions = a(ne.defaultOptions, H.defaultOptions, re), p(W, "afterColumnTranslate", function() {
	W.prototype.afterColumnTranslate.apply(this);
}, { order: 5 }), n(W.prototype, {
	directTouch: !0,
	pointClass: B,
	trackerGroups: ["group", "dataLabelsGroup"],
	adjustForMissingColumns: U.adjustForMissingColumns,
	animate: U.animate,
	crispCol: U.crispCol,
	drawGraph: V,
	drawPoints: U.drawPoints,
	getSymbol: V,
	drawTracker: U.drawTracker,
	getColumnMetrics: U.getColumnMetrics
}), w.registerSeriesType("columnrange", W);
//#endregion
//#region node_modules/highcharts/es-modules/Extensions/Pane/PaneComposition.js
function ie(e) {
	let t = this, n;
	return e && t.pane.forEach((r) => {
		G(e.chartX - t.plotLeft, e.chartY - t.plotTop, r.center) && (n = r);
	}), n;
}
function ae(e, t) {
	let n = e.prototype;
	n.getHoverPane || (n.collectionsWithUpdate.push("pane"), n.getHoverPane = ie, p(e, "afterIsInsidePlot", oe), p(t, "afterGetHoverData", se), p(t, "beforeGetHoverData", ce));
}
function G(e, t, n, r, i) {
	let a = !0, o = n[0], s = n[1], c = 2 * Math.PI, l = Math.sqrt((e - o) ** 2 + (t - s) ** 2);
	if (x(r) && x(i)) {
		let n = Math.atan2(u(t - s, 8), u(e - o, 8));
		n = (n + c) % c, r = (r + c) % c, i = (i + c) % c, Math.abs(i - r) > 1e-6 && (a = r > i ? n >= r || n <= i : n >= r && n <= i);
	} else a = !0;
	return l <= Math.ceil(n[2] / 2) && a;
}
function oe(e) {
	let t = this;
	t.polar && (e.options.inverted && ([e.x, e.y] = [e.y, e.x]), e.isInsidePlot = t.pane.some((t) => G(e.x, e.y, t.center, t.axis && t.axis.normalizedStartAngleRad, t.axis && t.axis.normalizedEndAngleRad)));
}
function se(e) {
	let t = this.chart;
	e.hoverPoint && e.hoverPoint.plotX && e.hoverPoint.plotY && t.hoverPane && !G(e.hoverPoint.plotX, e.hoverPoint.plotY, t.hoverPane.center) && (e.hoverPoint = void 0);
}
function ce(e) {
	let t = this.chart;
	t.polar ? (t.hoverPane = t.getHoverPane(e), e.filter = function(n) {
		return n.visible && !(!e.shared && n.directTouch) && c(n.options.enableMouseTracking, !0) && (!t.hoverPane || n.xAxis.pane === t.hoverPane);
	}) : t.hoverPane = void 0;
}
var le = { compose: ae }, { defaultOptions: ue } = d, de = {
	shape: "arc",
	borderRadius: void 0,
	borderWidth: 0,
	borderColor: "var(--highcharts-neutral-color-20)",
	backgroundColor: "var(--highcharts-neutral-color-3)",
	from: -Number.MAX_VALUE,
	to: Number.MAX_VALUE,
	outerRadius: "100%"
}, K = {
	borderRadius: 3,
	margin: void 0
};
ue.pane = K;
var q = {
	pane: K,
	background: de
}, fe = class {
	constructor(e, t) {
		this.coll = "pane", this.init(e, t);
	}
	init(e, t) {
		this.chart = t, this.background = [], t.pane.push(this), this.setOptions(e);
	}
	hasSeriesType(e) {
		return !!(this.chart.options?.chart?.type === e || this.chart.options?.series?.some((t) => t.type === e));
	}
	setOptions(e) {
		this.options = a(q.pane, this.chart.angular ? {
			background: {},
			innerSize: "85%"
		} : {}, e);
	}
	render() {
		let e = this.options, t = this.chart.renderer;
		this.group ||= t.g("pane-group").attr({ zIndex: e.zIndex || 0 }).add(), this.updateCenter();
		let n = this.options.background;
		if (n) {
			n = f(n);
			let e = Math.max(n.length, this.background.length || 0);
			for (let t = 0; t < e; t++) n[t] && this.axis ? this.renderBackground(a(q.background, { borderRadius: this.options.borderRadius }, n[t]), t) : this.background[t] && (this.background[t] = this.background[t].destroy(), this.background.splice(t, 1));
		}
	}
	renderBackground(e, t) {
		let r = { class: "highcharts-pane " + (e.className || "") }, i = "animate";
		this.chart.styledMode || n(r, {
			fill: e.backgroundColor,
			stroke: e.borderColor,
			"stroke-width": e.borderWidth
		}), this.background[t] || (this.background[t] = this.chart.renderer.path().add(this.group), i = "attr"), this.background[t][i]({ d: this.axis.getPlotBandPath(e.from, e.to, e) }).attr(r);
	}
	updateCenter() {
		let { axis: n, chart: r, options: i } = this, { plotHeight: a, plotWidth: o } = r, s = i.center?.[1], c = i.margin, u = this.axis?.options.labels, d = i.thickness, p = Array.isArray(c) ? c : [
			c,
			c,
			c,
			c
		], m = [], h = i.size, g, _ = 0, v = 0, y = Math.min(r.series.reduce((t, n) => {
			if (!n.is("gauge") || n.yAxis?.pane !== this) return t;
			let r = f(n.options.dataLabels)[0], i = 0;
			return r && r.enabled !== !1 && (i = (1 - e(r.verticalAlign)) * 30 + (r.y || 0)), Math.max(t, i);
		}, 0), a * .3);
		if (u?.enabled) {
			let e = String(u.style?.fontSize || ""), t = (/px$/.test(e) ? parseFloat(e) : /em$/.test(e) ? parseFloat(e) * 12 : 12) * 1.2;
			v = Math.max(u.distance || 0, 0) + t / 2;
		}
		if (p.forEach((e, t) => {
			m[t] = e ?? Math.max(v || 0);
		}), n && (h === void 0 || s === void 0)) {
			let { endAngleRad: e, startAngleRad: t } = n, r = Math.PI * 2 / 360, s = t < Math.PI / 2 && e > Math.PI / 2 || f(i.background).some((e) => e?.shape === "circle") ? Math.PI : Math.max(Math.abs(t + Math.PI / 2), Math.abs(e + Math.PI / 2)), c = Math.sin(s - Math.PI / 2), l = .5 + .5 * Math.max(c, Math.sin(r * 0));
			if (g = (a - m[0] - m[2]) / l, h === void 0) {
				h = Math.max(Math.min(g, o - m[1] - m[3]), 1);
				let e = h + m[0] + m[2] + 2 * (y - a);
				e > 0 && (_ = e, h = Math.max(1, h - _));
			}
		}
		this.center = (n || {}).center = O.getCenter.call(this), t(h) && h >= 0 && (this.center[2] = h, t(d) ? this.center[3] = this.center[2] - d * 2 : this.center[3] = Math.min(h, l(i.innerSize || 0, h))), x(s) || (i.size ? this.center[1] = a / 2 : t(g) && (this.center[1] = (g + this.center[2] - _) / 4 + m[0]));
	}
	update(e, t) {
		a(!0, this.options, e), this.setOptions(this.options), this.render(), this.chart.axes.forEach(function(e) {
			e.pane === this && (e.pane = null, e.update({}, t));
		}, this);
	}
};
fe.compose = le.compose;
//#endregion
//#region node_modules/highcharts/es-modules/Core/Axis/RadialAxisDefaults.js
var pe = {
	circular: {
		gridLineWidth: 1,
		labels: {
			align: void 0,
			x: 0,
			y: void 0
		},
		maxPadding: 0,
		minPadding: 0,
		showLastLabel: !1,
		tickLength: 0
	},
	radial: {
		gridLineInterpolation: "circle",
		gridLineWidth: 1,
		labels: {
			align: "right",
			padding: 5,
			x: -3,
			y: -2
		},
		showLastLabel: !1,
		title: {
			x: 4,
			text: null,
			rotation: 90
		}
	},
	radialGauge: {
		gridLineWidth: 0,
		labels: {
			align: "center",
			distance: 15,
			x: 0,
			y: void 0
		},
		minorGridLineWidth: 0,
		minorTickLength: 5,
		minorTickPosition: "inside",
		minorTicksPerMajor: 10,
		minorTickWidth: 1,
		tickLength: void 0,
		tickWidth: 2,
		tickPixelInterval: 100,
		tickPosition: "inside",
		title: {
			rotation: 0,
			text: ""
		},
		zIndex: 2
	}
}, { defaultOptions: J } = d, { composed: me, noop: Y } = y, he;
(function(e) {
	e.radialDefaultOptions = a(pe);
	function r() {
		this.autoConnect = this.isCircular && c(this.userMax, this.options.max) === void 0 && u(this.endAngleRad - this.startAngleRad) === u(2 * Math.PI), !this.isCircular && this.chart.inverted && this.max++, this.autoConnect && t(this.max) && (this.max += this.categories && 1 || this.pointRange || this.closestPointRange || 0);
	}
	function i(e, t) {
		return s(me, "Axis.Radial") && (p(e, "afterInit", k), p(e, "afterTickSize", A), p(e, "autoLabelAlign", j), p(e, "destroy", ee), p(e, "init", M), p(e, "initialAxisTranslation", N), p(t, "afterGetLabelPosition", P), p(t, "afterGetPosition", F), p(y, "setOptions", I), h(e.prototype, "getMinorTickInterval", V), h(t.prototype, "getMarkPath", H)), e;
	}
	e.compose = i;
	function d() {
		return () => {
			if (this.isRadial && this.tickPositions && this.options.labels && this.options.labels.allowOverlap !== !0) return this.tickPositions.map((e) => this.ticks[e]?.label).filter((e) => !!e);
		};
	}
	function m() {
		return Y;
	}
	function _(e, t, n) {
		let r = this.pane.center, i = e.value, a, o, s, c;
		return this.isCircular ? (x(i) ? e.point && (a = e.point.shapeArgs || {}, a.start && (i = this.chart.inverted ? this.translate(e.point.rectPlotY, !0) : e.point.x)) : (s = e.chartX || 0, c = e.chartY || 0, i = this.translate(Math.atan2(c - n, s - t) - this.startAngleRad, !0)), o = this.getPosition(i), s = o.x, c = o.y) : (x(i) || (s = e.chartX, c = e.chartY), x(s) && x(c) && (n = r[1] + this.chart.plotTop, i = this.translate(Math.min(Math.sqrt((s - t) ** 2 + (c - n) ** 2), r[2] / 2) - r[3] / 2, !0))), [
			i,
			s || 0,
			c || 0
		];
	}
	function v(e, t, n) {
		let r = this.pane.center, i = this.chart, a = this.left || 0, o = this.top || 0, s, l, u = c(t, r[2] / 2 - this.offset);
		return n ??= this.horiz ? 0 : this.center && -this.center[3] / 2, n && n > 0 && (u += n), this.isCircular || t !== void 0 ? (l = this.chart.renderer.symbols.arc(a + r[0], o + r[1], u, u, {
			start: this.startAngleRad,
			end: this.endAngleRad,
			open: !0,
			innerR: 0
		}), l.xBounds = [a + r[0]], l.yBounds = [o + r[1] - u]) : (s = this.postTranslate(this.angleRad, u), l = [[
			"M",
			this.center[0] + i.plotLeft,
			this.center[1] + i.plotTop
		], [
			"L",
			s.x,
			s.y
		]]), l;
	}
	function b() {
		this.constructor.prototype.getOffset.call(this);
		let e = this.options.offset ?? (this.pane.hasSeriesType("gauge") ? "-20%" : void 0);
		x(e) && (this.offset = l(e, this.center[2] / 2) * -1), this.chart.axisOffset[this.side] = 0;
	}
	function S(e, n, r) {
		let i = this.chart, a = (e) => {
			if (typeof e == "string") {
				let t = parseInt(e, 10);
				return h.test(e) && (t = t * d / 100), t;
			}
			return e;
		}, o = this.center, { endAngleRad: s, startAngleRad: l } = this, u = D(r.borderRadius ?? this.pane.options.borderRadius), d = o[2] / 2, f = Math.min(this.offset || 0, 0), p = this.left || 0, m = this.top || 0, h = /%$/, g = this.isCircular, _ = this.options.plotBands || [], v = _.indexOf(r), y, b, x, S, C, w, T = c(a(r.outerRadius), d), E = a(r.innerRadius), O = a(r.thickness), k = !0, A = !0;
		if (u.radius && u.scope === "stack" && v > -1 && (_[v - 1] && _[v - 1].to === e && (k = !1), _[v + 1] && _[v + 1].from === n && (A = !1)), this.options.gridLineInterpolation === "polygon") w = this.getPlotLinePath({ value: e }).concat(this.getPlotLinePath({
			value: n,
			reverse: !0
		}));
		else {
			t(this.min) && (e = Math.max(e, this.min)), t(this.max) && (n = Math.min(n, this.max));
			let a = this.translate(e), d = this.translate(n);
			g || (T = a || 0, E = d || 0), !t(this.min) && !t(this.max) && !r.color && !r.className ? (y = l, b = s) : r.shape === "circle" || !g ? (y = -Math.PI / 2, b = Math.PI * 1.5, C = !0) : (y = l + (a || 0), b = l + (d || 0)), T -= f, t(O) && (O -= f), w = i.renderer.symbols.arc(p + o[0], m + o[1], T, T, {
				start: Math.min(y, b),
				end: Math.max(y, b),
				innerR: c(E, t(O) ? T - O : void 0, this.center[3] / 2),
				open: C,
				borderRadius: u.radius,
				brStart: k,
				brEnd: A
			}), g && (x = (b + y) / 2, S = p + o[0] + o[2] / 2 * Math.cos(x), w.xBounds = x > -Math.PI / 2 && x < Math.PI / 2 ? [S, i.plotWidth] : [0, S], w.yBounds = [m + o[1] + o[2] / 2 * Math.sin(x)], w.yBounds[0] += x > -Math.PI && x < 0 || x > Math.PI ? -10 : 10);
		}
		return w;
	}
	function C(e) {
		let t = this.pane.center, n = this.chart, r = n.inverted, i = e.reverse, a = this.pane.options.background, o = a ? f(a)[0] : {}, s = o.innerRadius || "0%", c = o.outerRadius || "100%", u = t[0] + n.plotLeft, d = t[1] + n.plotTop, p = this.height, m = e.isCrosshair, h = t[3] / 2, g = n.time.parse(e.value) || 0, _, v, y, b, x, S, C, w, T, E = this.getPosition(g, t[2] / 2 + (this.isCircular ? this.offset : 0)), D = E.x, O = E.y;
		if (m && (w = this.getCrosshairPosition(e, u, d), g = w[0] || 0, D = w[1], O = w[2]), this.isCircular) v = Math.sqrt((D - u) ** 2 + (O - d) ** 2), y = typeof s == "string" ? l(s, 1) : s / v, b = typeof c == "string" ? l(c, 1) : c / v, t && h && (_ = h / v, y < _ && (y = _), b < _ && (b = _)), T = [[
			"M",
			u + y * (D - u),
			d - y * (d - O)
		], [
			"L",
			D - (1 - b) * (D - u),
			O + (1 - b) * (d - O)
		]];
		else {
			let e = this.translate(g);
			if (e && (e < 0 || e > p) && (e = 0), this.options.gridLineInterpolation === "circle") T = this.getLinePath(0, e, h);
			else if (T = [], n[r ? "yAxis" : "xAxis"].forEach((e) => {
				e.pane === this.pane && (x = e);
			}), x) {
				C = x.tickPositions, x.autoConnect && (C = C.concat([C[0]])), i && (C = C.slice().reverse()), e && (e += h);
				for (let t = 0; t < C.length; t++) S = x.getPosition(C[t], e), T.push(t ? [
					"L",
					S.x,
					S.y
				] : [
					"M",
					S.x,
					S.y
				]);
			}
		}
		return T;
	}
	function w(e, t) {
		let n = this.translate(e);
		return this.postTranslate(this.isCircular ? n : this.angleRad, c(this.isCircular ? t : n < 0 ? 0 : n, this.center[2] / 2) - this.offset);
	}
	function T() {
		let e = this.center, t = this.chart, n = this.options.title;
		return {
			x: t.plotLeft + e[0] + (n.x || 0),
			y: t.plotTop + e[1] - {
				high: .5,
				middle: .25,
				low: 0
			}[n.align] * e[2] + (n.y || 0)
		};
	}
	function E(e) {
		e.beforeSetTickPositions = r, e.createLabelCollector = d, e.getCrosshairPosition = _, e.getLinePath = v, e.getOffset = b, e.getPlotBandPath = S, e.getPlotLinePath = C, e.getPosition = w, e.getTitlePosition = T, e.postTranslate = te, e.setAxisSize = R, e.setAxisTranslation = z, e.setOptions = B;
	}
	function O(e) {
		e.isHidden = !0, e.createLabelCollector = m, e.getOffset = Y, e.redraw = L, e.render = L, e.setCategories = Y, e.setTitle = Y;
	}
	function k() {
		let e = this.chart, t = this.options, n = e.angular && this.isXAxis, r = this.pane, i = r?.options;
		if (!n && r && (e.angular || e.polar)) {
			let n = Math.PI * 2, r = i.startAngle ?? (e.angular ? -135 : 0), a = (r - 90) * Math.PI / 180, o = (c(i.endAngle, r + (e.angular ? 270 : 360)) - 90) * Math.PI / 180;
			this.angleRad = (t.angle || 0) * Math.PI / 180, this.startAngleRad = a, this.endAngleRad = o;
			let s = (a % n + n) % n, l = (o % n + n) % n;
			s > Math.PI && (s -= n), l > Math.PI && (l -= n), this.normalizedStartAngleRad = s, this.normalizedEndAngleRad = l;
		}
	}
	function A(e) {
		if (this.chart.angular) {
			let { options: t, pane: n } = this;
			n.hasSeriesType("gauge") && (e.tickSize = [t[`${e.prefix}Length`] ?? 10, t[`${e.prefix}Width`] ?? 1], t[`${e.prefix}Position`] === "inside" && (e.tickSize[0] *= -1));
		}
	}
	function j(e) {
		this.isRadial && (e.align = void 0, e.preventDefault());
	}
	function ee() {
		if (this.chart?.labelCollectors) {
			let e = this.labelCollector ? this.chart.labelCollectors.indexOf(this.labelCollector) : -1;
			e >= 0 && this.chart.labelCollectors.splice(e, 1);
		}
	}
	function M(e) {
		let t = this.chart, n = t.angular, r = t.polar, i = this.isXAxis, a = this.coll, o = n && i, s = e.userOptions.pane || 0, c = this.pane = t.pane && t.pane[s], l;
		if (a === "colorAxis") {
			this.isRadial = !1;
			return;
		}
		n ? (o ? O(this) : E(this), l = !i) : r && (E(this), l = this.horiz), n || r ? (this.isRadial = !0, this.labelCollector ||= this.createLabelCollector(), this.labelCollector && t.labelCollectors.push(this.labelCollector)) : this.isRadial = !1, c && l && (c.axis = this), this.isCircular = l;
	}
	function N() {
		this.isRadial && this.beforeSetTickPositions?.();
	}
	function P(e) {
		let t = this.label;
		if (!t) return;
		let n = this.axis, r = t.getBBox(), i = n.options.labels, a = (n.translate(this.pos) + n.startAngleRad + Math.PI / 2) / Math.PI * 180 % 360, o = Math.round(a), s = x(i.y) ? 0 : -r.height * .3, c = i.y, u, d = 20, f = i.align, p = "end", m = o < 0 ? o + 360 : o, h = m, g = 0, _ = 0;
		n.isRadial && (u = n.getPosition(this.pos, n.center[2] / 2 + l(i.distance ?? -25, n.center[2] / 2) + n.offset), i.rotation === "auto" ? t.attr({ rotation: a }) : x(c) || (c = n.chart.renderer.fontMetrics(t).b - r.height / 2), x(f) || (n.isCircular ? (r.width > n.len * n.tickInterval / (n.max - n.min) && (d = 0), f = a > d && a < 180 - d ? "left" : a > 180 + d && a < 360 - d ? "right" : "center") : f = "center", t.attr({ align: f })), f === "auto" && n.tickPositions.length === 2 && n.isCircular && (m > 90 && m < 180 ? m = 180 - m : m > 270 && m <= 360 && (m = 540 - m), h > 180 && h <= 360 && (h = 360 - h), (n.pane.options.startAngle === o || n.pane.options.startAngle === o + 360 || n.pane.options.startAngle === o - 360) && (p = "start"), f = o >= -90 && o <= 90 || o >= -360 && o <= -270 || o >= 270 && o <= 360 ? p === "start" ? "right" : "left" : p === "start" ? "left" : "right", h > 70 && h < 110 && (f = "center"), m < 15 || m >= 180 && m < 195 ? g = r.height * .3 : m >= 15 && m <= 35 ? g = p === "start" ? 0 : r.height * .75 : m >= 195 && m <= 215 ? g = p === "start" ? r.height * .75 : 0 : m > 35 && m <= 90 ? g = p === "start" ? -r.height * .25 : r.height : m > 215 && m <= 270 && (g = p === "start" ? r.height : -r.height * .25), h < 15 ? _ = p === "start" ? -r.height * .15 : r.height * .15 : h > 165 && h <= 180 && (_ = p === "start" ? r.height * .15 : -r.height * .15), t.attr({ align: f }), t.translate(_, g + s)), e.pos.x = u.x + (i.x || 0), e.pos.y = u.y + (c || 0));
	}
	function F(e) {
		this.axis.getPosition && n(e.pos, this.axis.getPosition(this.pos));
	}
	function I({ options: t }) {
		t.xAxis && a(!0, e.radialDefaultOptions.circular, t.xAxis), t.yAxis && a(!0, e.radialDefaultOptions.radialGauge, t.yAxis);
	}
	function te(e, t) {
		let n = this.chart, r = this.center;
		return e = this.startAngleRad + e, {
			x: n.plotLeft + r[0] + Math.cos(e) * t,
			y: n.plotTop + r[1] + Math.sin(e) * t
		};
	}
	function L() {
		this.isDirty = !1;
	}
	function R() {
		let e = this.constructor.prototype, t, n;
		e.setAxisSize.call(this), this.isRadial && (this.pane.updateCenter(), t = this.center = this.pane.center.slice(), this.isCircular ? (this.sector = this.endAngleRad - this.startAngleRad, this.len = this.width = this.height = t[2] * this.sector / 2) : (n = this.postTranslate(this.angleRad, t[3] / 2), t[0] = n.x - this.chart.plotLeft, t[1] = n.y - this.chart.plotTop, this.len = this.width = this.height = (t[2] - t[3]) / 2));
	}
	function z() {
		this.constructor.prototype.setAxisTranslation.call(this), this.center && (this.isCircular ? this.transA = (this.endAngleRad - this.startAngleRad) / (this.max - this.min || 1) : this.transA = (this.center[2] - this.center[3]) / 2 / (this.max - this.min || 1), this.isXAxis ? this.minPixelPadding = this.transA * this.minPointOffset : this.minPixelPadding = 0);
	}
	function B(t) {
		let { coll: n } = this, { angular: r, inverted: i, polar: s } = this.chart, c = {};
		r ? this.isXAxis || (c = a(J.yAxis, e.radialDefaultOptions.radialGauge)) : s && (c = this.horiz ? a(J.xAxis, e.radialDefaultOptions.circular) : a(n === "xAxis" ? J.xAxis : J.yAxis, e.radialDefaultOptions.radial)), i && n === "yAxis" && (c.stackLabels = o(J.yAxis, !0) ? J.yAxis.stackLabels : {}, c.reversedStacks = !0);
		let l = this.options = a(c, t);
		l.plotBands ||= [], g(this, "afterSetOptions");
	}
	function V(e) {
		return !x(this.options.minorTicks) && this.pane.hasSeriesType("gauge") ? "auto" : e.apply(this, Array.prototype.slice.call(arguments, 1));
	}
	function H(e, t, n, r, i, a, o) {
		let s = this.axis, c, l;
		return s.isRadial ? (c = s.getPosition(this.pos, s.center[2] / 2 + r), l = [
			"M",
			t,
			n,
			"L",
			c.x,
			c.y
		]) : l = e.call(this, t, n, r, i, a, o), l;
	}
})(he ||= {});
//#endregion
//#region node_modules/highcharts/es-modules/Series/PolarComposition.js
var { animObject: ge } = v, { defaultOptions: _e } = d, { composed: ve } = y, { composed: ye } = y, X;
(function(e) {
	function t(e, t) {
		s(ye, "Axis.Waterfall") && (p(e, "init", a), p(e, "afterBuildStacks", n), p(e, "afterRender", i), p(t, "beforeRedraw", o));
	}
	e.compose = t;
	function n() {
		let e = this.waterfall?.stacks;
		e && (e.changed = !1, delete e.alreadyChanged);
	}
	function i() {
		let e = this;
		e.options.stackLabels?.enabled && e.waterfall?.stacks && e.waterfall.renderStackTotals();
	}
	function a() {
		let e = this;
		e.waterfall ||= new c(e);
	}
	function o() {
		let e = this.axes, t = this.series;
		for (let n of t) if (n.options.stacking) {
			for (let t of e) !t.isXAxis && t.waterfall && (t.waterfall.stacks.changed = !0);
			break;
		}
	}
	class c {
		constructor(e) {
			this.axis = e, this.stacks = { changed: !1 };
		}
		renderStackTotals() {
			let e = this.axis, t = e.waterfall?.stacks, n = e.stacking?.stackTotalGroup, i = new T(e, e.options.stackLabels || {}, !1, 0, void 0);
			this.dummyStackItem = i, n && r(t, (e) => {
				r(e, (e, t) => {
					i.total = e.stackTotal, i.x = +t, e.label && (i.label = e.label), T.prototype.render.call(i, n), e.label = i.label, delete i.label;
				});
			}), i.total = null;
		}
	}
	e.Composition = c;
})(X ||= {});
var be = X, xe = class extends E.prototype.pointClass {
	getClassName() {
		let e = C.prototype.getClassName.call(this);
		return this.isSum ? e += " highcharts-sum" : this.isIntermediateSum && (e += " highcharts-intermediate-sum"), e;
	}
	isValid() {
		return t(this.y) || this.isSum || !!this.isIntermediateSum;
	}
}, Se = {
	dataLabels: { inside: !0 },
	lineWidth: 1,
	lineColor: "var(--highcharts-neutral-color-80)",
	dashStyle: "Dot",
	borderColor: "var(--highcharts-neutral-color-80)",
	states: { hover: { lineWidthPlus: 0 } }
}, { column: Z, line: Ce } = w.seriesTypes;
function Q(e, t) {
	return Object.hasOwnProperty.call(e, t);
}
var $ = class extends Z {
	generatePoints() {
		Z.prototype.generatePoints.apply(this);
		let e = this.getColumn("y", !0);
		for (let n = 0, r = this.points.length; n < r; n++) {
			let r = this.points[n], i = e[n];
			t(i) && (r.isIntermediateSum || r.isSum) && (r.y = u(i));
		}
	}
	processData(e) {
		let t = this, n = t.options, r = t.getColumn("y"), i = t.getColumn("isSum"), a = t.getColumn("isIntermediateSum"), o = r.length, s = n.threshold || 0, c, l, d, f, p;
		l = c = d = f = 0;
		for (let e = 0; e < o; e++) p = r[e], p === "sum" || i[e] ? r[e] = u(l) : p === "intermediateSum" || a[e] ? (r[e] = u(c), c = 0) : (l += p, c += p), d = Math.min(l, d), f = Math.max(l, f);
		super.processData.call(this, e), n.stacking || (t.dataMin = d + s, t.dataMax = f);
	}
	toYData(e) {
		return e.isSum ? "sum" : e.isIntermediateSum ? "intermediateSum" : e.y;
	}
	pointAttribs(e, n) {
		let r = this.options.upColor;
		r && !e.options.color && t(e.y) && (e.color = e.y > 0 ? r : void 0);
		let i = Z.prototype.pointAttribs.call(this, e, n);
		return delete i.dashstyle, i;
	}
	getGraphPath() {
		return this.graph?.pathArray || [[
			"M",
			0,
			0
		]];
	}
	getCrispPath() {
		let e = this.points.filter((e) => t(e.y)), n = this.yAxis, r = e.length, i = this.graph?.strokeWidth() || 0, a = this.xAxis.reversed, o = this.yAxis.reversed, s = this.options.stacking, c = [];
		for (let l = 1; l < r; l++) {
			if (!(this.options.connectNulls || t(this.data[e[l].index - 1].y))) continue;
			let r = e[l].box, u = e[l - 1], d = u.y || 0, f = e[l - 1].box;
			if (!r || !f) continue;
			let p = n.waterfall?.stacks[this.stackKey], m = d > 0 ? -f.height : 0;
			if (p && f && r) {
				let e = p[l - 1], t;
				t = S(s ? n.translate(e.connectorThreshold || 0, !1, !0, !1, !0) + (o ? m : 0) : f.y + (u.minPointLengthOffset || 0), i), c.push([
					"M",
					(f.x || 0) + (a ? 0 : f.width || 0),
					t
				], [
					"L",
					(r.x || 0) + (a && r.width || 0),
					t
				]);
			}
			if (f && c.length && (!s && d < 0 && !o || d > 0 && o)) {
				let e = c[c.length - 2];
				e && typeof e[2] == "number" && (e[2] += f.height || 0);
				let t = c[c.length - 1];
				t && typeof t[2] == "number" && (t[2] += f.height || 0);
			}
		}
		return c;
	}
	drawGraph() {
		Ce.prototype.drawGraph.call(this), this.graph?.animate({ d: this.getCrispPath() });
	}
	setStackedPoints(e) {
		let t = this, n = t.options, r = e.waterfall?.stacks, i = n.threshold || 0, a = t.stackKey, s = t.getColumn("x"), c = t.getColumn("y"), l = s.length, u = i, d = u, f, p = 0, m = 0, h = 0, g, _, v, y, b, x, S, C, w = (e, t, n, r) => {
			if (f) {
				if (!g) f.stackState[0] = e, g = f.stackState.length;
				else for (; n < g; n++) f.stackState[n] += r;
				f.stackState.push(f.stackState[g - 1] + t);
			}
		};
		if (e.stacking && r && t.reserveSpace()) {
			C = r.changed, S = r.alreadyChanged, S && S.indexOf(a) < 0 && (C = !0), r[a] || (r[a] = {});
			let e = r[a];
			if (e) for (let t = 0; t < l; t++) x = s[t], (!e[x] || C) && (e[x] = {
				negTotal: 0,
				posTotal: 0,
				stackTotal: 0,
				threshold: 0,
				stateIndex: 0,
				stackState: [],
				label: C && e[x] ? e[x].label : void 0
			}), f = e[x], b = c[t], b >= 0 ? f.posTotal += b : f.negTotal += b, y = n.data?.[t], _ = f.absolutePos = f.posTotal, v = f.absoluteNeg = f.negTotal, f.stackTotal = _ + v, g = f.stackState.length, o(y, !0) && y.isIntermediateSum ? (w(h, m, 0, h), h = m, m = i, u ^= d, d ^= u, u ^= d) : o(y, !0) && y.isSum ? (w(i, p, g, 0), u = i) : (w(u, b, 0, p), y && (p += b, m += b)), f.stateIndex++, f.threshold = u, u += f.stackTotal;
			r.changed = !1, r.alreadyChanged ||= [], r.alreadyChanged.push(a);
		}
	}
	getExtremes() {
		let e = this.options.stacking, t = this.yAxis.waterfall?.stacks, n, i;
		return e && t ? (n = this.stackedYNeg = [], i = this.stackedYPos = [], e === "overlap" ? r(t[this.stackKey], function(e) {
			n.push(_(e.stackState)), i.push(b(e.stackState));
		}) : r(t[this.stackKey], function(e) {
			n.push(e.negTotal + e.threshold), i.push(e.posTotal + e.threshold);
		}), {
			dataMin: _(n),
			dataMax: b(i)
		}) : {
			dataMin: this.dataMin,
			dataMax: this.dataMax
		};
	}
};
$.defaultOptions = a(Z.defaultOptions, Se), $.compose = be.compose, n($.prototype, {
	pointValKey: "y",
	showLine: !0,
	pointClass: xe
}), p($, "afterColumnTranslate", function() {
	let e = this, { options: r, points: i, yAxis: o } = e, s = c(r.minPointLength, 5), l = s / 2, u = r.threshold || 0, d = r.stacking, f = o.waterfall?.stacks[e.stackKey], p = e.getColumn("y", !0), m = u, h = u, g, _, v;
	for (let r = 0; r < i.length; r++) {
		let c = i[r], y = p[r], b = c.shapeArgs, x = n({
			x: 0,
			y: 0,
			width: 0,
			height: 0
		}, b || {});
		c.box = x;
		let C = [0, y], w = c.y || 0;
		if (d) {
			if (f) {
				let n = f[r];
				d === "overlap" ? (_ = n.stackState[n.stateIndex--], g = w >= 0 ? _ : _ - w, Q(n, "absolutePos") && delete n.absolutePos, Q(n, "absoluteNeg") && delete n.absoluteNeg) : (w >= 0 ? (_ = n.threshold + n.posTotal, n.posTotal -= w, g = _) : (_ = n.threshold + n.negTotal, n.negTotal -= w, g = _ - w), n.posTotal || t(n.absolutePos) && Q(n, "absolutePos") && (n.posTotal = n.absolutePos, delete n.absolutePos), n.negTotal || t(n.absoluteNeg) && Q(n, "absoluteNeg") && (n.negTotal = n.absoluteNeg, delete n.absoluteNeg)), c.isSum || (n.connectorThreshold = n.threshold + n.stackTotal), v = g - Math.abs(w), o.reversed && ([g, v] = [v, g]), c.below = g <= u, x.y = o.translate(g, !1, !0, !1, !0), x.height = o.translate(v, !1, !0, !1, !0) - x.y;
				let i = o.waterfall?.dummyStackItem;
				i && (i.x = r, i.label = f[r].label, i.setOffset(e.pointXOffset || 0, e.barW || 0, e.stackedYNeg[r], e.stackedYPos[r], void 0, this.xAxis));
			}
		} else g = Math.max(h, h + w) + C[0], x.y = o.translate(g, !1, !0, !1, !0), c.isSum ? (x.y = o.translate(C[1], !1, !0, !1, !0), x.height = Math.min(o.translate(C[0], !1, !0, !1, !0), o.len) - x.y, c.below = C[1] <= u) : c.isIntermediateSum ? (w >= 0 ? (g = C[1] + m, v = m) : (g = m, v = C[1] + m), o.reversed && ([g, v] = [v, g]), x.y = o.translate(g, !1, !0, !1, !0), x.height = Math.abs(x.y - Math.min(o.translate(v, !1, !0, !1, !0), o.len)), m += C[1], c.below = g <= u) : (x.height = y > 0 ? o.translate(h, !1, !0, !1, !0) - x.y : o.translate(h + y, !1, !0, !1, !0) - o.translate(h, !1, !0, !1, !0), h += y, c.below = h < u);
		x.height < 0 && (x.y += x.height, x.height *= -1), c.plotY = x.y, c.yBottom = x.y + x.height, x.height <= s && !c.isNull ? (x.height = s, x.y -= l, c.yBottom = x.y + x.height, c.plotY = x.y, w < 0 ? c.minPointLengthOffset = -l : c.minPointLengthOffset = l) : (c.isNull && (x.width = 0), c.minPointLengthOffset = 0);
		let T = c.plotY + (c.negative ? x.height : 0);
		c.below && (c.plotY += x.height), c.tooltipPos && (e.chart.inverted ? c.tooltipPos[0] = o.len - T : c.tooltipPos[1] = T), c.isInside = this.isPointInside(c);
		let E = S(c.yBottom, e.borderWidth);
		x.y = S(x.y, e.borderWidth), x.height = E - x.y, a(!0, c.shapeArgs, x);
	}
}, { order: 2 }), w.registerSeriesType("waterfall", $);
//#endregion

//# sourceMappingURL=highchartsMoreCustom-B8EuHJut.js.map