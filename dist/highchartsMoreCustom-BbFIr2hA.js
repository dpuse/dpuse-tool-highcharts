import { E as e, F as t, G as n, J as r, K as i, P as a, S as o, V as s, X as c, _ as l, a as u, at as d, et as f, j as p, lt as m, m as h, n as g, nt as _, t as v, tt as y, ut as b, v as x, w as S, x as C, y as w } from "./SeriesRegistry-BGZZizI3.js";
import { a as T, i as E, n as D, r as O } from "./BorderRadius-BO3V-8GG.js";
//#region node_modules/highcharts/es-modules/Series/AreaRange/AreaRangePoint.js
var { area: { prototype: { pointClass: k, pointClass: { prototype: A } } } } = v.seriesTypes, j = class extends k {
	setState() {
		let t = this.state, r = this.series, i = r.chart.polar;
		e(this.plotHigh) || (this.plotHigh = r.yAxis.toPixels(this.high, !0)), e(this.plotLow) || (this.plotLow = this.plotY = r.yAxis.toPixels(this.low, !0)), r.lowerStateMarkerGraphic = r.stateMarkerGraphic, r.stateMarkerGraphic = r.upperStateMarkerGraphic, this.graphic = this.graphics && this.graphics[1], this.plotY = this.plotHigh, i && n(this.plotHighX) && (this.plotX = this.plotHighX), A.setState.apply(this, arguments), this.state = t, this.plotY = this.plotLow, this.graphic = this.graphics && this.graphics[0], i && n(this.plotLowX) && (this.plotX = this.plotLowX), r.upperStateMarkerGraphic = r.stateMarkerGraphic, r.stateMarkerGraphic = r.lowerStateMarkerGraphic, r.lowerStateMarkerGraphic = void 0;
		let a = r.modifyMarkerSettings();
		A.setState.apply(this, arguments), r.restoreMarkerSettings(a);
	}
	haloPath() {
		let e = this.series.chart.polar, t = [];
		return this.plotY = this.plotLow, e && n(this.plotLowX) && (this.plotX = this.plotLowX), this.isInside && (t = A.haloPath.apply(this, arguments)), this.plotY = this.plotHigh, e && n(this.plotHighX) && (this.plotX = this.plotHighX), this.isTopInside && (t = t.concat(A.haloPath.apply(this, arguments))), t;
	}
	isValid() {
		return n(this.low) && n(this.high);
	}
}, { noop: ee } = b, { area: M, area: { prototype: N }, column: { prototype: P } } = v.seriesTypes, F = {
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
		let t = [], n = [], r = N.getGraphPath, i = this.options, a = this.chart.polar, o = a && i.connectEnds !== !1, s = i.connectNulls, c, l, u, d = i.step;
		for (e ||= this.points, c = e.length; c--;) {
			l = e[c];
			let r = a ? {
				plotX: l.rectPlotX,
				plotY: l.yBottom,
				doCurve: !1
			} : {
				plotX: l.plotX,
				plotY: l.plotY,
				doCurve: !1
			};
			!l.isNull && !o && !s && (!e[c + 1] || e[c + 1].isNull) && n.push(r), u = {
				polarPlotY: l.polarPlotY,
				rectPlotX: l.rectPlotX,
				yBottom: l.yBottom,
				plotX: f(l.plotHighX, l.plotX),
				plotY: l.plotHigh,
				isNull: l.isNull
			}, n.push(u), t.push(u), !l.isNull && !o && !s && (!e[c - 1] || e[c - 1].isNull) && n.push(r);
		}
		let p = r.call(this, e);
		d && (d === !0 && (d = "left"), i.step = {
			left: "right",
			center: "center",
			right: "left"
		}[d]);
		let m = r.call(this, t), h = r.call(this, n);
		i.step = d;
		let g = [].concat(p, m);
		return !this.chart.polar && h[0] && h[0][0] === "M" && (h[0] = [
			"L",
			h[0][1],
			h[0][2]
		]), this.graphPath = g, this.areaPath = p.concat(h), g.isArea = !0, g.xMap = p.xMap, this.areaPath.xMap = p.xMap, g;
	}
	drawDataLabels() {
		let e = this.points, t = e.length, n = [], r = this.options.dataLabels, i = this.chart.inverted, a, o, c, l, u;
		if (r) {
			if (s(r) ? (l = r[0] || { enabled: !1 }, u = r[1] || { enabled: !1 }) : (l = p({}, r), l.x = r.xHigh, l.y = r.yHigh, u = p({}, r), u.x = r.xLow, u.y = r.yLow), l.enabled || this.hasDataLabels?.()) {
				for (a = t; a--;) if (o = e[a], o) {
					let { plotHigh: e = 0, plotLow: t = 0 } = o;
					c = l.inside ? e < t : e > t, o.y = o.high, o._plotY = o.plotY, o.plotY = e, n[a] = o.dataLabel, o.dataLabel = o.dataLabelUpper, o.below = c, i ? l.align ||= c ? "right" : "left" : l.verticalAlign ||= c ? "top" : "bottom";
				}
				for (this.options.dataLabels = l, N.drawDataLabels && N.drawDataLabels.apply(this, arguments), a = t; a--;) o = e[a], o && (o.dataLabelUpper = o.dataLabel, o.dataLabel = n[a], delete o.dataLabels, o.y = o.low, o.plotY = o._plotY);
			}
			if (u.enabled || this.hasDataLabels?.()) {
				for (a = t; a--;) if (o = e[a], o) {
					let { plotHigh: e = 0, plotLow: t = 0 } = o;
					c = u.inside ? e < t : e > t, o.below = !c, i ? u.align ||= c ? "left" : "right" : u.verticalAlign ||= c ? "bottom" : "top";
				}
				this.options.dataLabels = u, N.drawDataLabels && N.drawDataLabels.apply(this, arguments);
			}
			if (l.enabled) for (a = t; a--;) o = e[a], o && (o.dataLabels = [o.dataLabelUpper, o.dataLabel].filter(function(e) {
				return !!e;
			}));
			this.options.dataLabels = r;
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
			e.options.marker = r(t, n), n.symbol && (e.symbol = n.symbol);
		}
		return t;
	}
	restoreMarkerSettings(e) {
		let t = this;
		t.options.marker = e.marker, t.symbol = e.symbol;
	}
	drawPoints() {
		let t = this, n = t.points.length, r, i, a = t.modifyMarkerSettings();
		for (N.drawPoints.apply(t, arguments), t.restoreMarkerSettings(a), r = 0; r < n;) i = t.points[r], i.graphics = i.graphics || [], i.origProps = {
			plotY: i.plotY,
			plotX: i.plotX,
			isInside: i.isInside,
			negative: i.negative,
			zone: i.zone,
			y: i.y
		}, (i.graphic || i.graphics[0]) && (i.graphics[0] = i.graphic), i.graphic = i.graphics[1], i.plotY = i.plotHigh, e(i.plotHighX) && (i.plotX = i.plotHighX), i.y = f(i.high, i.origProps.y), i.negative = i.y < (t.options.threshold || 0), t.zones.length && (i.zone = i.getZone()), t.chart.polar || (i.isInside = i.isTopInside = i.plotY !== void 0 && i.plotY >= 0 && i.plotY <= t.yAxis.len && i.plotX >= 0 && i.plotX <= t.xAxis.len), r++;
		for (N.drawPoints.apply(t, arguments), r = 0; r < n;) i = t.points[r], i.graphics = i.graphics || [], (i.graphic || i.graphics[1]) && (i.graphics[1] = i.graphic), i.graphic = i.graphics[0], i.origProps && (p(i, i.origProps), delete i.origProps), r++;
	}
	hasMarkerChanged(e, t) {
		let n = e.lowMarker, r = t.lowMarker || {};
		return n && (n.enabled === !1 || r.symbol !== n.symbol || r.height !== n.height || r.width !== n.width) || super.hasMarkerChanged(e, t);
	}
};
I.defaultOptions = r(M.defaultOptions, F), l(I, "afterTranslate", function() {
	this.pointArrayMap.join(",") === "low,high" && this.points.forEach((e) => {
		let t = e.high, r = e.plotY;
		e.isNull ? e.plotY = void 0 : (e.plotLow = r, e.plotHigh = n(t) ? this.yAxis.translate(this.dataModify ? this.dataModify.modifyValue(t) : t, !1, !0, void 0, !0) : void 0, this.dataModify && (e.yBottom = e.plotHigh));
	});
}, { order: 0 }), l(I, "afterTranslate", function() {
	this.points.forEach((e) => {
		if (this.chart.polar) this.highToXY(e), e.plotLow = e.plotY, e.tooltipPos = [((e.plotHighX || 0) + (e.plotLowX || 0)) / 2, ((e.plotHigh || 0) + (e.plotLow || 0)) / 2];
		else {
			let t = e.pos(!1, void 0, e.plotLow), n = e.pos(!1, void 0, e.plotHigh);
			t && n && (t[0] = (t[0] + n[0]) / 2, t[1] = (t[1] + n[1]) / 2), e.tooltipPos = t;
		}
	});
}, { order: 3 }), p(I.prototype, {
	deferTranslatePolar: !0,
	pointArrayMap: ["low", "high"],
	pointClass: j,
	pointValKey: "low",
	setStackedPoints: ee
}), v.registerSeriesType("arearange", I);
//#endregion
//#region node_modules/highcharts/es-modules/Series/AreaSplineRange/AreaSplineRangeSeries.js
var { spline: { prototype: te } } = v.seriesTypes, L = class extends I {};
L.defaultOptions = r(I.defaultOptions), p(L.prototype, { getPointSpline: te.getPointSpline }), v.registerSeriesType("areasplinerange", L);
//#endregion
//#region node_modules/highcharts/es-modules/Series/ColumnRange/ColumnRangePoint.js
var { seriesTypes: { column: { prototype: { pointClass: { prototype: R } } }, arearange: { prototype: { pointClass: z } } } } = v, B = class extends z {
	isValid() {
		return n(this.low);
	}
};
p(B.prototype, { setState: R.setState });
//#endregion
//#region node_modules/highcharts/es-modules/Series/ColumnRange/ColumnRangeSeries.js
var { noop: V } = b, { seriesTypes: { arearange: H, column: ne, column: { prototype: U } } } = v, re = {
	borderRadius: { where: "all" },
	pointRange: null,
	legendSymbol: "rectangle",
	marker: null,
	states: { hover: { halo: !1 } }
}, W = class extends H {
	setOptions() {
		return r(!0, arguments[0], { stacking: void 0 }), H.prototype.setOptions.apply(this, arguments);
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
		let e = this.yAxis, t = this.xAxis, i = t.startAngleRad, a = this.chart, o = this.xAxis.isRadial, s = Math.max(a.chartWidth, a.chartHeight) + 999, c, l, u, d;
		function p(e) {
			return C(e, -s, s);
		}
		this.points.forEach((s) => {
			let m = s.shapeArgs || {}, h = this.options.minPointLength, g = s.plotY, _ = e.translate(s.high, 0, 1, 0, 1);
			if (n(_) && n(g)) if (s.plotHigh = p(_), s.plotLow = p(g), d = s.plotHigh, c = f(s.rectPlotY, s.plotY) - s.plotHigh, Math.abs(c) < h ? (l = h - c, c += l, d -= l / 2) : c < 0 && (c *= -1, d -= c), o && this.polar) u = s.barX + i, s.shapeType = "arc", s.shapeArgs = this.polar.arc(d + c, d, u, u + (s.pointWidth || 0));
			else {
				m.height = c, m.y = d;
				let { x: n = 0, width: i = 0 } = m;
				s.shapeArgs = r(s.shapeArgs, this.crispCol(n, d, i, c)), s.tooltipPos = a.inverted ? [
					e.len + e.pos - a.plotLeft - d - c / 2,
					t.len + t.pos - a.plotTop - n - i / 2,
					c
				] : [
					t.left - a.plotLeft + n + i / 2,
					e.pos - a.plotTop + d + c / 2,
					c
				];
			}
		});
	}
};
W.defaultOptions = r(ne.defaultOptions, H.defaultOptions, re), l(W, "afterColumnTranslate", function() {
	W.prototype.afterColumnTranslate.apply(this);
}, { order: 5 }), p(W.prototype, {
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
}), v.registerSeriesType("columnrange", W);
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
	n.getHoverPane || (n.collectionsWithUpdate.push("pane"), n.getHoverPane = ie, l(e, "afterIsInsidePlot", oe), l(t, "afterGetHoverData", se), l(t, "beforeGetHoverData", ce));
}
function G(t, n, r, i, a) {
	let s = !0, c = r[0], l = r[1], u = 2 * Math.PI, d = Math.sqrt((t - c) ** 2 + (n - l) ** 2);
	if (e(i) && e(a)) {
		let e = Math.atan2(o(n - l, 8), o(t - c, 8));
		e = (e + u) % u, i = (i + u) % u, a = (a + u) % u, Math.abs(a - i) > 1e-6 && (s = i > a ? e >= i || e <= a : e >= i && e <= a);
	} else s = !0;
	return d <= Math.ceil(r[2] / 2) && s;
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
		return n.visible && !(!e.shared && n.directTouch) && f(n.options.enableMouseTracking, !0) && (!t.hoverPane || n.xAxis.pane === t.hoverPane);
	}) : t.hoverPane = void 0;
}
var le = { compose: ae }, { defaultOptions: ue } = u, de = {
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
		this.options = r(q.pane, this.chart.angular ? {
			background: {},
			innerSize: "85%"
		} : {}, e);
	}
	render() {
		let e = this.options, t = this.chart.renderer;
		this.group ||= t.g("pane-group").attr({ zIndex: e.zIndex || 0 }).add(), this.updateCenter();
		let n = this.options.background;
		if (n) {
			n = d(n);
			let e = Math.max(n.length, this.background.length || 0);
			for (let t = 0; t < e; t++) n[t] && this.axis ? this.renderBackground(r(q.background, { borderRadius: this.options.borderRadius }, n[t]), t) : this.background[t] && (this.background[t] = this.background[t].destroy(), this.background.splice(t, 1));
		}
	}
	renderBackground(e, t) {
		let n = { class: "highcharts-pane " + (e.className || "") }, r = "animate";
		this.chart.styledMode || p(n, {
			fill: e.backgroundColor,
			stroke: e.borderColor,
			"stroke-width": e.borderWidth
		}), this.background[t] || (this.background[t] = this.chart.renderer.path().add(this.group), r = "attr"), this.background[t][r]({ d: this.axis.getPlotBandPath(e.from, e.to, e) }).attr(n);
	}
	updateCenter() {
		let { axis: r, chart: i, options: a } = this, { plotHeight: o, plotWidth: s } = i, c = a.center?.[1], l = a.margin, u = this.axis?.options.labels, f = a.thickness, p = Array.isArray(l) ? l : [
			l,
			l,
			l,
			l
		], m = [], h = a.size, g, v = 0, y = 0, b = Math.min(i.series.reduce((e, n) => {
			if (!n.is("gauge") || n.yAxis?.pane !== this) return e;
			let r = d(n.options.dataLabels)[0], i = 0;
			return r && r.enabled !== !1 && (i = (1 - t(r.verticalAlign)) * 30 + (r.y || 0)), Math.max(e, i);
		}, 0), o * .3);
		if (u?.enabled) {
			let e = String(u.style?.fontSize || ""), t = (/px$/.test(e) ? parseFloat(e) : /em$/.test(e) ? parseFloat(e) * 12 : 12) * 1.2;
			y = Math.max(u.distance || 0, 0) + t / 2;
		}
		if (p.forEach((e, t) => {
			m[t] = e ?? Math.max(y || 0);
		}), r && (h === void 0 || c === void 0)) {
			let { endAngleRad: e, startAngleRad: t } = r, n = Math.PI * 2 / 360, i = t < Math.PI / 2 && e > Math.PI / 2 || d(a.background).some((e) => e?.shape === "circle") ? Math.PI : Math.max(Math.abs(t + Math.PI / 2), Math.abs(e + Math.PI / 2)), c = Math.sin(i - Math.PI / 2), l = .5 + .5 * Math.max(c, Math.sin(n * 0));
			if (g = (o - m[0] - m[2]) / l, h === void 0) {
				h = Math.max(Math.min(g, s - m[1] - m[3]), 1);
				let e = h + m[0] + m[2] + 2 * (b - o);
				e > 0 && (v = e, h = Math.max(1, h - v));
			}
		}
		this.center = (r || {}).center = O.getCenter.call(this), n(h) && h >= 0 && (this.center[2] = h, n(f) ? this.center[3] = this.center[2] - f * 2 : this.center[3] = Math.min(h, _(a.innerSize || 0, h))), e(c) || (a.size ? this.center[1] = o / 2 : n(g) && (this.center[1] = (g + this.center[2] - v) / 4 + m[0]));
	}
	update(e, t) {
		r(!0, this.options, e), this.setOptions(this.options), this.render(), this.chart.axes.forEach(function(e) {
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
}, { defaultOptions: J } = u, { composed: me, noop: Y } = b, he;
(function(t) {
	t.radialDefaultOptions = r(pe);
	function s() {
		this.autoConnect = this.isCircular && f(this.userMax, this.options.max) === void 0 && o(this.endAngleRad - this.startAngleRad) === o(2 * Math.PI), !this.isCircular && this.chart.inverted && this.max++, this.autoConnect && n(this.max) && (this.max += this.categories && 1 || this.pointRange || this.closestPointRange || 0);
	}
	function c(e, t) {
		return y(me, "Axis.Radial") && (l(e, "afterInit", k), l(e, "afterTickSize", A), l(e, "autoLabelAlign", j), l(e, "destroy", ee), l(e, "init", M), l(e, "initialAxisTranslation", N), l(t, "afterGetLabelPosition", P), l(t, "afterGetPosition", F), l(b, "setOptions", I), m(e.prototype, "getMinorTickInterval", V), m(t.prototype, "getMarkPath", H)), e;
	}
	t.compose = c;
	function u() {
		return () => {
			if (this.isRadial && this.tickPositions && this.options.labels && this.options.labels.allowOverlap !== !0) return this.tickPositions.map((e) => this.ticks[e]?.label).filter((e) => !!e);
		};
	}
	function h() {
		return Y;
	}
	function g(t, n, r) {
		let i = this.pane.center, a = t.value, o, s, c, l;
		return this.isCircular ? (e(a) ? t.point && (o = t.point.shapeArgs || {}, o.start && (a = this.chart.inverted ? this.translate(t.point.rectPlotY, !0) : t.point.x)) : (c = t.chartX || 0, l = t.chartY || 0, a = this.translate(Math.atan2(l - r, c - n) - this.startAngleRad, !0)), s = this.getPosition(a), c = s.x, l = s.y) : (e(a) || (c = t.chartX, l = t.chartY), e(c) && e(l) && (r = i[1] + this.chart.plotTop, a = this.translate(Math.min(Math.sqrt((c - n) ** 2 + (l - r) ** 2), i[2] / 2) - i[3] / 2, !0))), [
			a,
			c || 0,
			l || 0
		];
	}
	function v(e, t, n) {
		let r = this.pane.center, i = this.chart, a = this.left || 0, o = this.top || 0, s, c, l = f(t, r[2] / 2 - this.offset);
		return n ??= this.horiz ? 0 : this.center && -this.center[3] / 2, n && n > 0 && (l += n), this.isCircular || t !== void 0 ? (c = this.chart.renderer.symbols.arc(a + r[0], o + r[1], l, l, {
			start: this.startAngleRad,
			end: this.endAngleRad,
			open: !0,
			innerR: 0
		}), c.xBounds = [a + r[0]], c.yBounds = [o + r[1] - l]) : (s = this.postTranslate(this.angleRad, l), c = [[
			"M",
			this.center[0] + i.plotLeft,
			this.center[1] + i.plotTop
		], [
			"L",
			s.x,
			s.y
		]]), c;
	}
	function x() {
		this.constructor.prototype.getOffset.call(this);
		let t = this.options.offset ?? (this.pane.hasSeriesType("gauge") ? "-20%" : void 0);
		e(t) && (this.offset = _(t, this.center[2] / 2) * -1), this.chart.axisOffset[this.side] = 0;
	}
	function S(e, t, r) {
		let i = this.chart, a = (e) => {
			if (typeof e == "string") {
				let t = parseInt(e, 10);
				return h.test(e) && (t = t * u / 100), t;
			}
			return e;
		}, o = this.center, { endAngleRad: s, startAngleRad: c } = this, l = D(r.borderRadius ?? this.pane.options.borderRadius), u = o[2] / 2, d = Math.min(this.offset || 0, 0), p = this.left || 0, m = this.top || 0, h = /%$/, g = this.isCircular, _ = this.options.plotBands || [], v = _.indexOf(r), y, b, x, S, C, w, T = f(a(r.outerRadius), u), E = a(r.innerRadius), O = a(r.thickness), k = !0, A = !0;
		if (l.radius && l.scope === "stack" && v > -1 && (_[v - 1] && _[v - 1].to === e && (k = !1), _[v + 1] && _[v + 1].from === t && (A = !1)), this.options.gridLineInterpolation === "polygon") w = this.getPlotLinePath({ value: e }).concat(this.getPlotLinePath({
			value: t,
			reverse: !0
		}));
		else {
			n(this.min) && (e = Math.max(e, this.min)), n(this.max) && (t = Math.min(t, this.max));
			let a = this.translate(e), u = this.translate(t);
			g || (T = a || 0, E = u || 0), !n(this.min) && !n(this.max) && !r.color && !r.className ? (y = c, b = s) : r.shape === "circle" || !g ? (y = -Math.PI / 2, b = Math.PI * 1.5, C = !0) : (y = c + (a || 0), b = c + (u || 0)), T -= d, n(O) && (O -= d), w = i.renderer.symbols.arc(p + o[0], m + o[1], T, T, {
				start: Math.min(y, b),
				end: Math.max(y, b),
				innerR: f(E, n(O) ? T - O : void 0, this.center[3] / 2),
				open: C,
				borderRadius: l.radius,
				brStart: k,
				brEnd: A
			}), g && (x = (b + y) / 2, S = p + o[0] + o[2] / 2 * Math.cos(x), w.xBounds = x > -Math.PI / 2 && x < Math.PI / 2 ? [S, i.plotWidth] : [0, S], w.yBounds = [m + o[1] + o[2] / 2 * Math.sin(x)], w.yBounds[0] += x > -Math.PI && x < 0 || x > Math.PI ? -10 : 10);
		}
		return w;
	}
	function C(e) {
		let t = this.pane.center, n = this.chart, r = n.inverted, i = e.reverse, a = this.pane.options.background, o = a ? d(a)[0] : {}, s = o.innerRadius || "0%", c = o.outerRadius || "100%", l = t[0] + n.plotLeft, u = t[1] + n.plotTop, f = this.height, p = e.isCrosshair, m = t[3] / 2, h = n.time.parse(e.value) || 0, g, v, y, b, x, S, C, w, T, E = this.getPosition(h, t[2] / 2 + (this.isCircular ? this.offset : 0)), D = E.x, O = E.y;
		if (p && (w = this.getCrosshairPosition(e, l, u), h = w[0] || 0, D = w[1], O = w[2]), this.isCircular) v = Math.sqrt((D - l) ** 2 + (O - u) ** 2), y = typeof s == "string" ? _(s, 1) : s / v, b = typeof c == "string" ? _(c, 1) : c / v, t && m && (g = m / v, y < g && (y = g), b < g && (b = g)), T = [[
			"M",
			l + y * (D - l),
			u - y * (u - O)
		], [
			"L",
			D - (1 - b) * (D - l),
			O + (1 - b) * (u - O)
		]];
		else {
			let e = this.translate(h);
			if (e && (e < 0 || e > f) && (e = 0), this.options.gridLineInterpolation === "circle") T = this.getLinePath(0, e, m);
			else if (T = [], n[r ? "yAxis" : "xAxis"].forEach((e) => {
				e.pane === this.pane && (x = e);
			}), x) {
				C = x.tickPositions, x.autoConnect && (C = C.concat([C[0]])), i && (C = C.slice().reverse()), e && (e += m);
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
		return this.postTranslate(this.isCircular ? n : this.angleRad, f(this.isCircular ? t : n < 0 ? 0 : n, this.center[2] / 2) - this.offset);
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
		e.beforeSetTickPositions = s, e.createLabelCollector = u, e.getCrosshairPosition = g, e.getLinePath = v, e.getOffset = x, e.getPlotBandPath = S, e.getPlotLinePath = C, e.getPosition = w, e.getTitlePosition = T, e.postTranslate = te, e.setAxisSize = R, e.setAxisTranslation = z, e.setOptions = B;
	}
	function O(e) {
		e.isHidden = !0, e.createLabelCollector = h, e.getOffset = Y, e.redraw = L, e.render = L, e.setCategories = Y, e.setTitle = Y;
	}
	function k() {
		let e = this.chart, t = this.options, n = e.angular && this.isXAxis, r = this.pane, i = r?.options;
		if (!n && r && (e.angular || e.polar)) {
			let n = Math.PI * 2, r = i.startAngle ?? (e.angular ? -135 : 0), a = (r - 90) * Math.PI / 180, o = (f(i.endAngle, r + (e.angular ? 270 : 360)) - 90) * Math.PI / 180;
			this.angleRad = (t.angle || 0) * Math.PI / 180, this.startAngleRad = a, this.endAngleRad = o;
			let s = (a % n + n) % n, c = (o % n + n) % n;
			s > Math.PI && (s -= n), c > Math.PI && (c -= n), this.normalizedStartAngleRad = s, this.normalizedEndAngleRad = c;
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
	function P(t) {
		let n = this.label;
		if (!n) return;
		let r = this.axis, i = n.getBBox(), a = r.options.labels, o = (r.translate(this.pos) + r.startAngleRad + Math.PI / 2) / Math.PI * 180 % 360, s = Math.round(o), c = e(a.y) ? 0 : -i.height * .3, l = a.y, u, d = 20, f = a.align, p = "end", m = s < 0 ? s + 360 : s, h = m, g = 0, v = 0;
		r.isRadial && (u = r.getPosition(this.pos, r.center[2] / 2 + _(a.distance ?? -25, r.center[2] / 2) + r.offset), a.rotation === "auto" ? n.attr({ rotation: o }) : e(l) || (l = r.chart.renderer.fontMetrics(n).b - i.height / 2), e(f) || (r.isCircular ? (i.width > r.len * r.tickInterval / (r.max - r.min) && (d = 0), f = o > d && o < 180 - d ? "left" : o > 180 + d && o < 360 - d ? "right" : "center") : f = "center", n.attr({ align: f })), f === "auto" && r.tickPositions.length === 2 && r.isCircular && (m > 90 && m < 180 ? m = 180 - m : m > 270 && m <= 360 && (m = 540 - m), h > 180 && h <= 360 && (h = 360 - h), (r.pane.options.startAngle === s || r.pane.options.startAngle === s + 360 || r.pane.options.startAngle === s - 360) && (p = "start"), f = s >= -90 && s <= 90 || s >= -360 && s <= -270 || s >= 270 && s <= 360 ? p === "start" ? "right" : "left" : p === "start" ? "left" : "right", h > 70 && h < 110 && (f = "center"), m < 15 || m >= 180 && m < 195 ? g = i.height * .3 : m >= 15 && m <= 35 ? g = p === "start" ? 0 : i.height * .75 : m >= 195 && m <= 215 ? g = p === "start" ? i.height * .75 : 0 : m > 35 && m <= 90 ? g = p === "start" ? -i.height * .25 : i.height : m > 215 && m <= 270 && (g = p === "start" ? i.height : -i.height * .25), h < 15 ? v = p === "start" ? -i.height * .15 : i.height * .15 : h > 165 && h <= 180 && (v = p === "start" ? i.height * .15 : -i.height * .15), n.attr({ align: f }), n.translate(v, g + c)), t.pos.x = u.x + (a.x || 0), t.pos.y = u.y + (l || 0));
	}
	function F(e) {
		this.axis.getPosition && p(e.pos, this.axis.getPosition(this.pos));
	}
	function I({ options: e }) {
		e.xAxis && r(!0, t.radialDefaultOptions.circular, e.xAxis), e.yAxis && r(!0, t.radialDefaultOptions.radialGauge, e.yAxis);
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
	function B(e) {
		let { coll: n } = this, { angular: o, inverted: s, polar: c } = this.chart, l = {};
		o ? this.isXAxis || (l = r(J.yAxis, t.radialDefaultOptions.radialGauge)) : c && (l = this.horiz ? r(J.xAxis, t.radialDefaultOptions.circular) : r(n === "xAxis" ? J.xAxis : J.yAxis, t.radialDefaultOptions.radial)), s && n === "yAxis" && (l.stackLabels = i(J.yAxis, !0) ? J.yAxis.stackLabels : {}, l.reversedStacks = !0);
		let u = this.options = r(l, e);
		u.plotBands ||= [], a(this, "afterSetOptions");
	}
	function V(t) {
		return !e(this.options.minorTicks) && this.pane.hasSeriesType("gauge") ? "auto" : t.apply(this, Array.prototype.slice.call(arguments, 1));
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
var { animObject: ge } = h, { defaultOptions: _e } = u, { composed: ve } = b, { composed: ye } = b, X;
(function(e) {
	function t(e, t) {
		y(ye, "Axis.Waterfall") && (l(e, "init", i), l(e, "afterBuildStacks", n), l(e, "afterRender", r), l(t, "beforeRedraw", a));
	}
	e.compose = t;
	function n() {
		let e = this.waterfall?.stacks;
		e && (e.changed = !1, delete e.alreadyChanged);
	}
	function r() {
		let e = this;
		e.options.stackLabels?.enabled && e.waterfall?.stacks && e.waterfall.renderStackTotals();
	}
	function i() {
		let e = this;
		e.waterfall ||= new o(e);
	}
	function a() {
		let e = this.axes, t = this.series;
		for (let n of t) if (n.options.stacking) {
			for (let t of e) !t.isXAxis && t.waterfall && (t.waterfall.stacks.changed = !0);
			break;
		}
	}
	class o {
		constructor(e) {
			this.axis = e, this.stacks = { changed: !1 };
		}
		renderStackTotals() {
			let e = this.axis, t = e.waterfall?.stacks, n = e.stacking?.stackTotalGroup, r = new T(e, e.options.stackLabels || {}, !1, 0, void 0);
			this.dummyStackItem = r, n && c(t, (e) => {
				c(e, (e, t) => {
					r.total = e.stackTotal, r.x = +t, e.label && (r.label = e.label), T.prototype.render.call(r, n), e.label = r.label, delete r.label;
				});
			}), r.total = null;
		}
	}
	e.Composition = o;
})(X ||= {});
var be = X, xe = class extends E.prototype.pointClass {
	getClassName() {
		let e = g.prototype.getClassName.call(this);
		return this.isSum ? e += " highcharts-sum" : this.isIntermediateSum && (e += " highcharts-intermediate-sum"), e;
	}
	isValid() {
		return n(this.y) || this.isSum || !!this.isIntermediateSum;
	}
}, Se = {
	dataLabels: { inside: !0 },
	lineWidth: 1,
	lineColor: "var(--highcharts-neutral-color-80)",
	dashStyle: "Dot",
	borderColor: "var(--highcharts-neutral-color-80)",
	states: { hover: { lineWidthPlus: 0 } }
}, { column: Z, line: Ce } = v.seriesTypes;
function Q(e, t) {
	return Object.hasOwnProperty.call(e, t);
}
var $ = class extends Z {
	generatePoints() {
		Z.prototype.generatePoints.apply(this);
		let e = this.getColumn("y", !0);
		for (let t = 0, r = this.points.length; t < r; t++) {
			let r = this.points[t], i = e[t];
			n(i) && (r.isIntermediateSum || r.isSum) && (r.y = o(i));
		}
	}
	processData(e) {
		let t = this, n = t.options, r = t.getColumn("y"), i = t.getColumn("isSum"), a = t.getColumn("isIntermediateSum"), s = r.length, c = n.threshold || 0, l, u, d, f, p;
		u = l = d = f = 0;
		for (let e = 0; e < s; e++) p = r[e], p === "sum" || i[e] ? r[e] = o(u) : p === "intermediateSum" || a[e] ? (r[e] = o(l), l = 0) : (u += p, l += p), d = Math.min(u, d), f = Math.max(u, f);
		super.processData.call(this, e), n.stacking || (t.dataMin = d + c, t.dataMax = f);
	}
	toYData(e) {
		return e.isSum ? "sum" : e.isIntermediateSum ? "intermediateSum" : e.y;
	}
	pointAttribs(e, t) {
		let r = this.options.upColor;
		r && !e.options.color && n(e.y) && (e.color = e.y > 0 ? r : void 0);
		let i = Z.prototype.pointAttribs.call(this, e, t);
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
		let e = this.points.filter((e) => n(e.y)), t = this.yAxis, r = e.length, i = this.graph?.strokeWidth() || 0, a = this.xAxis.reversed, o = this.yAxis.reversed, s = this.options.stacking, c = [];
		for (let l = 1; l < r; l++) {
			if (!(this.options.connectNulls || n(this.data[e[l].index - 1].y))) continue;
			let r = e[l].box, u = e[l - 1], d = u.y || 0, f = e[l - 1].box;
			if (!r || !f) continue;
			let p = t.waterfall?.stacks[this.stackKey], m = d > 0 ? -f.height : 0;
			if (p && f && r) {
				let e = p[l - 1], n;
				n = S(s ? t.translate(e.connectorThreshold || 0, !1, !0, !1, !0) + (o ? m : 0) : f.y + (u.minPointLengthOffset || 0), i), c.push([
					"M",
					(f.x || 0) + (a ? 0 : f.width || 0),
					n
				], [
					"L",
					(r.x || 0) + (a && r.width || 0),
					n
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
		let t = this, n = t.options, r = e.waterfall?.stacks, a = n.threshold || 0, o = t.stackKey, s = t.getColumn("x"), c = t.getColumn("y"), l = s.length, u = a, d = u, f, p = 0, m = 0, h = 0, g, _, v, y, b, x, S, C, w = (e, t, n, r) => {
			if (f) {
				if (!g) f.stackState[0] = e, g = f.stackState.length;
				else for (; n < g; n++) f.stackState[n] += r;
				f.stackState.push(f.stackState[g - 1] + t);
			}
		};
		if (e.stacking && r && t.reserveSpace()) {
			C = r.changed, S = r.alreadyChanged, S && S.indexOf(o) < 0 && (C = !0), r[o] || (r[o] = {});
			let e = r[o];
			if (e) for (let t = 0; t < l; t++) x = s[t], (!e[x] || C) && (e[x] = {
				negTotal: 0,
				posTotal: 0,
				stackTotal: 0,
				threshold: 0,
				stateIndex: 0,
				stackState: [],
				label: C && e[x] ? e[x].label : void 0
			}), f = e[x], b = c[t], b >= 0 ? f.posTotal += b : f.negTotal += b, y = n.data?.[t], _ = f.absolutePos = f.posTotal, v = f.absoluteNeg = f.negTotal, f.stackTotal = _ + v, g = f.stackState.length, i(y, !0) && y.isIntermediateSum ? (w(h, m, 0, h), h = m, m = a, u ^= d, d ^= u, u ^= d) : i(y, !0) && y.isSum ? (w(a, p, g, 0), u = a) : (w(u, b, 0, p), y && (p += b, m += b)), f.stateIndex++, f.threshold = u, u += f.stackTotal;
			r.changed = !1, r.alreadyChanged ||= [], r.alreadyChanged.push(o);
		}
	}
	getExtremes() {
		let e = this.options.stacking, t = this.yAxis.waterfall?.stacks, n, r;
		return e && t ? (n = this.stackedYNeg = [], r = this.stackedYPos = [], e === "overlap" ? c(t[this.stackKey], function(e) {
			n.push(w(e.stackState)), r.push(x(e.stackState));
		}) : c(t[this.stackKey], function(e) {
			n.push(e.negTotal + e.threshold), r.push(e.posTotal + e.threshold);
		}), {
			dataMin: w(n),
			dataMax: x(r)
		}) : {
			dataMin: this.dataMin,
			dataMax: this.dataMax
		};
	}
};
$.defaultOptions = r(Z.defaultOptions, Se), $.compose = be.compose, p($.prototype, {
	pointValKey: "y",
	showLine: !0,
	pointClass: xe
}), l($, "afterColumnTranslate", function() {
	let e = this, { options: t, points: i, yAxis: a } = e, o = f(t.minPointLength, 5), s = o / 2, c = t.threshold || 0, l = t.stacking, u = a.waterfall?.stacks[e.stackKey], d = e.getColumn("y", !0), m = c, h = c, g, _, v;
	for (let t = 0; t < i.length; t++) {
		let f = i[t], y = d[t], b = f.shapeArgs, x = p({
			x: 0,
			y: 0,
			width: 0,
			height: 0
		}, b || {});
		f.box = x;
		let C = [0, y], w = f.y || 0;
		if (l) {
			if (u) {
				let r = u[t];
				l === "overlap" ? (_ = r.stackState[r.stateIndex--], g = w >= 0 ? _ : _ - w, Q(r, "absolutePos") && delete r.absolutePos, Q(r, "absoluteNeg") && delete r.absoluteNeg) : (w >= 0 ? (_ = r.threshold + r.posTotal, r.posTotal -= w, g = _) : (_ = r.threshold + r.negTotal, r.negTotal -= w, g = _ - w), r.posTotal || n(r.absolutePos) && Q(r, "absolutePos") && (r.posTotal = r.absolutePos, delete r.absolutePos), r.negTotal || n(r.absoluteNeg) && Q(r, "absoluteNeg") && (r.negTotal = r.absoluteNeg, delete r.absoluteNeg)), f.isSum || (r.connectorThreshold = r.threshold + r.stackTotal), v = g - Math.abs(w), a.reversed && ([g, v] = [v, g]), f.below = g <= c, x.y = a.translate(g, !1, !0, !1, !0), x.height = a.translate(v, !1, !0, !1, !0) - x.y;
				let i = a.waterfall?.dummyStackItem;
				i && (i.x = t, i.label = u[t].label, i.setOffset(e.pointXOffset || 0, e.barW || 0, e.stackedYNeg[t], e.stackedYPos[t], void 0, this.xAxis));
			}
		} else g = Math.max(h, h + w) + C[0], x.y = a.translate(g, !1, !0, !1, !0), f.isSum ? (x.y = a.translate(C[1], !1, !0, !1, !0), x.height = Math.min(a.translate(C[0], !1, !0, !1, !0), a.len) - x.y, f.below = C[1] <= c) : f.isIntermediateSum ? (w >= 0 ? (g = C[1] + m, v = m) : (g = m, v = C[1] + m), a.reversed && ([g, v] = [v, g]), x.y = a.translate(g, !1, !0, !1, !0), x.height = Math.abs(x.y - Math.min(a.translate(v, !1, !0, !1, !0), a.len)), m += C[1], f.below = g <= c) : (x.height = y > 0 ? a.translate(h, !1, !0, !1, !0) - x.y : a.translate(h + y, !1, !0, !1, !0) - a.translate(h, !1, !0, !1, !0), h += y, f.below = h < c);
		x.height < 0 && (x.y += x.height, x.height *= -1), f.plotY = x.y, f.yBottom = x.y + x.height, x.height <= o && !f.isNull ? (x.height = o, x.y -= s, f.yBottom = x.y + x.height, f.plotY = x.y, w < 0 ? f.minPointLengthOffset = -s : f.minPointLengthOffset = s) : (f.isNull && (x.width = 0), f.minPointLengthOffset = 0);
		let T = f.plotY + (f.negative ? x.height : 0);
		f.below && (f.plotY += x.height), f.tooltipPos && (e.chart.inverted ? f.tooltipPos[0] = a.len - T : f.tooltipPos[1] = T), f.isInside = this.isPointInside(f);
		let E = S(f.yBottom, e.borderWidth);
		x.y = S(x.y, e.borderWidth), x.height = E - x.y, r(!0, f.shapeArgs, x);
	}
}, { order: 2 }), v.registerSeriesType("waterfall", $);
//#endregion

//# sourceMappingURL=highchartsMoreCustom-BbFIr2hA.js.map