import { $ as e, A as t, B as n, C as r, D as i, E as a, F as o, G as s, H as c, I as l, J as u, K as d, L as f, M as p, N as m, O as h, P as g, Q as _, R as v, S as y, T as b, U as x, V as S, W as C, X as w, Y as T, Z as E, _ as D, a as O, at as k, b as A, c as ee, ct as j, d as M, et as N, f as P, g as F, h as te, i as I, it as ne, j as L, k as re, l as ie, lt as ae, m as R, n as oe, nt as z, o as se, ot as ce, p as le, q as B, r as V, rt as H, s as U, st as ue, t as W, tt as G, u as de, ut as K, v as fe, w as pe, x as q, y as me, z as he } from "./SeriesRegistry-BGZZizI3.js";
import { a as ge, c as _e, i as ve, l as ye, o as be, r as xe, s as Se, t as Ce } from "./BorderRadius-BO3V-8GG.js";
import { t as we } from "./SVGElement-0ERYDlUm.js";
//#region node_modules/highcharts/es-modules/Core/Axis/AxisDefaults.js
var Te;
(function(e) {
	e.xAxis = {
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
	}, e.yAxis = {
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
})(Te ||= {});
var Ee = Te, { deg2rad: De } = K, Oe = class {
	constructor(e, t, n, r, i) {
		this.isNew = !0, this.isNewLabel = !0, this.axis = e, this.pos = t, this.type = n || "", this.parameters = i || {}, this.tickmarkOffset = this.parameters.tickmarkOffset, this.options = this.parameters.options, g(this, "init"), !n && !r && this.addLabel();
	}
	addLabel() {
		let e = this, t = e.axis, n = t.options, r = t.chart, i = t.categories, a = t.logarithmic, o = t.names, c = e.pos, l = N(e.options?.labels, n.labels), u = t.tickPositions, d = c === u[0], f = c === u[u.length - 1], p = u.info, m = p?.boundaryTicks[c], h = n.dateTimeLabelFormats, _ = e.label, v, b, x, S = this.parameters.category || (i ? N(i[c], o[c], c) : c);
		if (a && s(S) && (S = y(a.lin2log(S))), t.dateTime && h) if (p) {
			let e = {
				millisecond: "hour",
				second: "hour",
				minute: "hour",
				hour: "day",
				day: "month",
				week: "month",
				month: "year",
				year: "year"
			}, t = p.unitName, i = e[t], a = !n.grid?.enabled && m && i && h[i]?.boundary || h[t];
			b = r.time.resolveDTLFormat(a), v = b.main;
		} else s(S) && (v = t.dateTime.getXDateFormat(S, h || {}));
		e.isFirst = d, e.isLast = f, e.boundary = m;
		let C = {
			axis: t,
			chart: r,
			dateTimeLabelFormat: v,
			boundary: m,
			isFirst: d,
			isLast: f,
			pos: c,
			tick: e,
			tickPositionInfo: p,
			value: S
		};
		g(this, "labelFormat", C);
		let w = (e) => l.formatter ? l.formatter.call(e, e) : l.format ? (e.text = t.defaultLabelFormatter.call(e), I.format(l.format, e, r)) : t.defaultLabelFormatter.call(e), T = w.call(C, C), E = b?.list;
		E ? e.shortenLabel = function() {
			for (x = 0; x < E.length; x++) if (L(C, { dateTimeLabelFormat: E[x] }), _.attr({ text: w.call(C, C) }), _.getBBox().width < t.getSlotWidth(e) - 2 * (l.padding || 0)) return;
			_.attr({ text: "" });
		} : e.shortenLabel = void 0, _ ? _.textStr !== T && (_.textWidth && !l.style.width && !_.styles.width && _.css({ width: void 0 }), _.attr({ text: T }), _.textPxLength = _.getBBox().width) : (e.label = _ = e.createLabel(T, l), e.rotation = 0);
	}
	createLabel(e, t, n) {
		let r = this.axis, { renderer: i, styledMode: o } = r.chart, s = t.style.whiteSpace, c = a(e) && t.enabled ? i.text(e, n?.x, n?.y, t.useHTML).add(r.labelGroup) : void 0;
		return c && (o || c.css(u(t.style)), c.textPxLength = c.getBBox().width, !o && s && c.css({ whiteSpace: s })), c;
	}
	destroy() {
		i(this, this.axis);
	}
	getPosition(e, t, n, r) {
		let i = this.axis, a = i.chart, o = r && a.oldChartHeight || a.chartHeight, s = {
			x: e ? y(i.translate(t + n, void 0, void 0, r) + i.transB) : i.left + i.offset + (i.opposite ? (r && a.oldChartWidth || a.chartWidth) - i.right - i.left : 0),
			y: e ? o - i.bottom + i.offset - (i.opposite ? i.height : 0) : y(o - i.translate(t + n, void 0, void 0, r) - i.transB)
		};
		return s.y = q(s.y, -1e9, 1e9), g(this, "afterGetPosition", { pos: s }), s;
	}
	getLabelPosition(e, t, n, r, i, o, s, c) {
		let l = this.axis, u = l.transA, d = l.isLinked && l.linkedParent ? l.linkedParent.reversed : l.reversed, f = l.staggerLines, p = l.tickRotCorr || {
			x: 0,
			y: 0
		}, m = !r && !l.reserveSpaceDefault ? -l.labelOffset * (l.labelAlign === "center" ? .5 : 1) : 0, h = i.distance, _ = {}, v, y;
		return v = l.side === 0 ? n.rotation ? -h : -n.getBBox().height : l.side === 2 ? p.y + h : Math.cos(n.rotation * De) * (p.y - n.getBBox(!1, 0).height / 2), a(i.y) && (v = l.side === 0 && l.horiz ? i.y + v : i.y), e = e + N(i.x, [
			0,
			1,
			0,
			-1
		][l.side] * h) + m + p.x - (o && r ? o * u * (d ? -1 : 1) : 0), t = t + v - (o && !r ? o * u * (d ? 1 : -1) : 0), f && (y = s / (c || 1) % f, l.opposite && (y = f - y - 1), t += y * (l.labelOffset / f)), _.x = e, _.y = Math.round(t), g(this, "afterGetLabelPosition", {
			pos: _,
			tickmarkOffset: o,
			index: s
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
		let t = this, n = this.axis, r = n.options.labels, i = e.x, a = n.chart.chartWidth, s = n.chart.spacing, c = N(n.labelLeft, Math.min(n.pos, s[3])), l = N(n.labelRight, Math.max(n.isRadial ? 0 : n.pos + n.len, a - s[1])), u = this.label, d = this.rotation, f = o(n.labelAlign || u.attr("align")), p = u.getBBox().width, m = n.getSlotWidth(t), h = f, g = {}, _ = m, v = 1, y, b, x;
		!d && r.overflow === "justify" ? (y = i - f * p, b = i + (1 - f) * p, y < c ? _ = e.x + _ * (1 - f) - c : b > l && (_ = l - e.x + _ * f, v = -1), _ = Math.min(m, _), _ < m && n.labelAlign === "center" && (e.x += v * (m - _ - h * (m - Math.min(p, _)))), (p > _ || n.autoRotation && u?.styles?.width) && (x = _)) : d < 0 && i - f * p < c ? x = Math.round(i / Math.cos(d * De) - c) : d > 0 && i + f * p > l && (x = Math.round((a - i) / Math.cos(d * De))), x && u && (t.shortenLabel ? t.shortenLabel() : u.css(L(g, {
			width: Math.floor(x) + "px",
			lineClamp: +!n.isRadial
		})));
	}
	render(e, t, n) {
		let r = this, i = r.axis, a = i.horiz, o = r.pos, s = N(r.tickmarkOffset, i.tickmarkOffset), c = r.getPosition(a, o, s, t), l = c.x, u = c.y, d = i.pos, f = d + i.len, p = a ? l : u, m = N(n, r.label?.newOpacity, 1);
		!i.chart.polar && (y(p) < d || p > f) && (n = 0), n ??= 1, this.isActive = !0, this.renderGridLine(t, n), this.renderMark(c, n), this.renderLabel(c, t, m, e), r.isNew = !1, g(this, "afterRender");
	}
	renderGridLine(e, t) {
		let n = this, r = n.axis, i = r.options, a = {}, o = n.pos, s = n.type, c = N(n.tickmarkOffset, r.tickmarkOffset), l = r.chart.renderer, u = n.gridLine, d, f = i.gridLineWidth, p = i.gridLineColor, m = i.gridLineDashStyle;
		n.type === "minor" && (f = i.minorGridLineWidth, p = i.minorGridLineColor, m = i.minorGridLineDashStyle), u || (r.chart.styledMode || (a.stroke = p, a["stroke-width"] = f || 0, a.dashstyle = m), s || (a.zIndex = 1), e && (t = 0), n.gridLine = u = l.path().attr(a).addClass("highcharts-" + (s ? s + "-" : "") + "grid-line").add(r.gridGroup)), u && (d = r.getPlotLinePath({
			value: o + c,
			lineWidth: u.strokeWidth(),
			force: "pass",
			old: e,
			acrossPanes: !1
		}), d && u[e || n.isNew ? "attr" : "animate"]({
			d,
			opacity: t
		}));
	}
	renderMark(e, t) {
		let n = this, r = n.axis, i = r.options, a = r.chart.renderer, o = n.type, s = r.tickSize(o ? o + "Tick" : "tick"), c = e.x, l = e.y, u = N(i[o === "minor" ? "minorTickWidth" : "tickWidth"], !o && r.isXAxis ? 1 : 0), d = i[o === "minor" ? "minorTickColor" : "tickColor"], f = n.mark, p = !f;
		s && (r.opposite && (s[0] = -s[0]), f || (n.mark = f = a.path().addClass("highcharts-" + (o ? o + "-" : "") + "tick").add(r.axisGroup), r.chart.styledMode || f.attr({
			stroke: d,
			"stroke-width": u
		})), f[p ? "attr" : "animate"]({
			d: n.getMarkPath(c, l, s[0], f.strokeWidth(), r.horiz, a),
			opacity: t
		}));
	}
	renderLabel(e, t, n, r) {
		let i = this, a = i.axis, o = a.horiz, c = a.options, l = i.label, u = c.labels, d = u.step, f = N(i.tickmarkOffset, a.tickmarkOffset), p = e.x, m = e.y, h = !0;
		l && s(p) && (l.xy = e = i.getLabelPosition(p, m, l, o, u, f, r, d), i.isFirst && !i.isLast && !c.showFirstLabel || i.isLast && !i.isFirst && !c.showLastLabel ? h = !1 : o && !t && n !== 0 && i.handleOverflow(e), d && r % d && (h = !1), h && s(e.y) ? (e.opacity = n, l[i.isNewLabel ? "attr" : "animate"](e).show(!0), i.isNewLabel = !1) : (l.hide(), i.isNewLabel = !0));
	}
}, { animObject: ke } = R, { xAxis: Ae, yAxis: je } = Ee, { parse: Me } = F, { defaultOptions: Ne } = O, { registerEventOptions: Pe } = ye, { deg2rad: Fe } = K, Ie = (e, t) => T(t, void 0, void 0, N(e.options.allowDecimals, t < .5 || e.tickAmount !== void 0), !!e.tickAmount);
L(Ne, {
	xAxis: Ae,
	yAxis: u(Ae, je)
});
var Le = class e {
	constructor(e, t, n) {
		this.clippable = !0, this.init(e, t, n);
	}
	init(e, t, n = this.coll) {
		let r = n === "xAxis", i = this, o = i.isZAxis || (e.inverted ? !r : r);
		i.chart = e, i.horiz = o, i.isXAxis = r, i.coll = n, g(this, "init", { userOptions: t }), i.opposite = N(t.opposite, i.opposite), i.side = N(t.side, i.side, o ? i.opposite ? 0 : 2 : i.opposite ? 1 : 3), i.setOptions(t);
		let c = i.options, l = c.labels;
		i.type ??= c.type || "linear", i.uniqueNames ??= c.uniqueNames ?? !0, g(i, "afterSetType"), i.userOptions = t, i.minPixelPadding = 0, i.reversed = N(c.reversed, i.reversed), i.visible = c.visible, i.zoomEnabled = c.zoomEnabled, i.hasNames = this.type === "category" || c.categories === !0, i.categories = S(c.categories) && c.categories || (i.hasNames ? [] : void 0), i.names ||= [], i.namesMap ||= {}, i.plotLinesAndBandsGroups = {}, i.positiveValuesOnly = !!i.logarithmic, i.isLinked = a(c.linkedTo), i.ticks = {}, i.labelEdge = [], i.minorTicks = {}, i.plotLinesAndBands = [], i.alternateBands = {}, i.len ??= 0, i.minRange = i.userMinRange = c.minRange || c.maxZoom, i.range = c.range, i.max = void 0, i.min = void 0;
		let u = N(c.crosshair, k(e.options.tooltip.crosshairs)[+!r]);
		i.crosshair = u === !0 ? {} : u, e.axes.indexOf(i) === -1 && (r ? e.axes.splice(e.xAxis.length, 0, i) : e.axes.push(i), ee(this, e[this.coll])), e.orderItems(i.coll), i.series = i.series || [], e.inverted && !i.isZAxis && r && !a(i.reversed) && (i.reversed = !0), i.labelRotation = s(l.rotation) ? l.rotation : void 0, Pe(i, c), g(this, "afterInit");
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
		this.options = u(t, this.coll === "yAxis" ? { title: { text: this.chart.options.lang.yAxisTitle } } : {}, Ne[this.coll], e), g(this, "afterSetOptions", { userOptions: e });
	}
	defaultLabelFormatter() {
		let e = this.axis, t = this.chart, { numberFormatter: n } = t, r = s(this.value) ? this.value : NaN, i = e.chart.time, a = e.categories, o = this.dateTimeLabelFormat, c = Ne.lang, l = c.numericSymbols, u = c.numericSymbolMagnitude || 1e3, d = e.logarithmic ? Math.abs(r) : e.tickInterval, f = l?.length, p, m;
		if (a) m = `${this.value}`;
		else if (o) m = i.dateFormat(o, r, !0);
		else if (f && l && d >= 1e3) for (; f-- && m === void 0;) p = u ** +(f + 1), d >= p && r * 10 % p == 0 && l[f] !== null && r !== 0 && (m = n(r / p, -1, void 0, void 0, t) + l[f]);
		return m ??= n(r, -1, void 0, Math.abs(r) < 1e4 ? "" : void 0, t), m;
	}
	getSeriesExtremes() {
		let e = this, t;
		g(this, "getSeriesExtremes", null, function() {
			e.hasVisibleSeries = !1, e.dataMin = e.dataMax = e.threshold = void 0, e.softThreshold = !e.isXAxis, e.series.forEach((n) => {
				if (n.reserveSpace()) {
					let r = n.options, i, o = r.threshold, c, l;
					if (e.hasVisibleSeries = !0, e.positiveValuesOnly && (o || 0) <= 0 && (o = void 0), e.isXAxis) i = n.getColumn("x"), i.length && (i = e.logarithmic ? i.filter((e) => e > 0) : i, t = n.getXExtremes(i), c = t.min, l = t.max, !s(c) && !(c instanceof Date) && (i = i.filter(s), t = n.getXExtremes(i), c = t.min, l = t.max), i.length && (e.dataMin = Math.min(N(e.dataMin, c), c), e.dataMax = Math.max(N(e.dataMax, l), l)));
					else {
						let t = n.applyExtremes();
						s(t.dataMin) && (c = t.dataMin, e.dataMin = Math.min(N(e.dataMin, c), c)), s(t.dataMax) && (l = t.dataMax, e.dataMax = Math.max(N(e.dataMax, l), l)), a(o) && (e.threshold = o), (!r.softThreshold || e.positiveValuesOnly) && (e.softThreshold = !1);
					}
				}
			});
		}), g(this, "afterGetSeriesExtremes");
	}
	translate(e, t, n, r, i, a) {
		let o = this.linkedParent || this, c = r && o.old ? o.old.min : o.min;
		if (!s(c)) return NaN;
		let l = o.minPixelPadding, u = (o.isOrdinal || o.brokenAxis?.hasBreaks || o.logarithmic && i) && !!o.lin2val, d = 1, f = 0, p = r && o.old ? o.old.transA : o.transA, m = 0;
		return p ||= o.transA, n && (d *= -1, f = o.len), o.reversed && (d *= -1, f -= d * (o.sector || o.len)), t ? (e = e * d + f, e -= l, m = e / p + c, u && (m = o.lin2val(m))) : (u && (e = o.val2lin(e)), m = d * (e - c) * p + f + d * l + (s(a) ? p * a : 0), o.isRadial || (m = y(m))), m;
	}
	toPixels(e, t) {
		return this.translate(this.chart?.time.parse(e) ?? NaN, !1, !this.horiz, void 0, !0) + (t ? 0 : this.pos);
	}
	toValue(e, t) {
		return this.translate(e - (t ? 0 : this.pos), !0, !this.horiz, void 0, !0);
	}
	getPlotLinePath(e) {
		let t = this, n = t.chart, r = t.left, i = t.top, a = e.old, o = e.value, c = e.lineWidth, l = a && n.oldChartHeight || n.chartHeight, u = a && n.oldChartWidth || n.chartWidth, d = t.transB, f = e.translatedValue, p = e.force, m, h, _, v, y;
		function b(e, t, n) {
			return p !== "pass" && (e < t || e > n) && (p ? e = q(e, t, n) : y = !0), e;
		}
		let x = {
			value: o,
			lineWidth: c,
			old: a,
			force: p,
			acrossPanes: e.acrossPanes,
			translatedValue: f
		};
		return g(this, "getPlotLinePath", x, function(e) {
			f = N(f, t.translate(o, void 0, void 0, a)), f = q(f, -1e9, 1e9), m = _ = f + d, h = v = l - f - d, s(f) ? t.horiz ? (h = i, v = l - t.bottom + (t.options.isInternal ? 0 : n.scrollablePixelsY || 0), m = _ = b(m, r, r + t.width)) : (m = r, _ = u - t.right + (n.scrollablePixelsX || 0), h = v = b(h, i, i + t.height)) : (y = !0, p = !1), e.path = y && !p ? void 0 : n.renderer.crispLine([[
				"M",
				m,
				h
			], [
				"L",
				_,
				v
			]], c || 1);
		}), x.path;
	}
	getLinearTickPositions(e, t, n) {
		let r = y(Math.floor(t / e) * e), i = y(Math.ceil(n / e) * e), a = [], o, s, c;
		if (y(r + e) === r && (c = 20), this.single) return [t];
		for (o = r; o <= i && (a.push(o), o = y(o + e, c), o !== s);) s = o;
		return a;
	}
	getMinorTickInterval() {
		let { minorTicks: e, minorTickInterval: t } = this.options;
		if (e === !0) return N(t, "auto");
		if (e !== !1) return t;
	}
	getMinorTickPositions() {
		let e = this, t = e.options, n = e.tickPositions, r = e.minorTickInterval, i = e.pointRangePadding || 0, a = (e.min || 0) - i, o = (e.max || 0) + i, s = e.brokenAxis?.hasBreaks ? e.brokenAxis.unitLength : o - a, c = [], l;
		if (s && s / r < e.len / 3) {
			let i = e.logarithmic;
			if (i) this.paddedTicks.forEach(function(e, t, n) {
				t && c.push.apply(c, i.getLogTickPositions(r, n[t - 1], n[t], !0));
			});
			else if (e.dateTime && this.getMinorTickInterval() === "auto") c = c.concat(e.getTimeTicks(e.dateTime.normalizeTimeTickInterval(r), a, o, t.startOfWeek));
			else for (l = a + (n[0] - a) % r; l <= o && l !== c[0]; l += r) c.push(l);
		}
		return c.length !== 0 && e.trimTicks(c), c;
	}
	adjustForMinRange() {
		let e = this, t = e.options, n = e.logarithmic, r = e.chart.time, { max: i, min: o, minRange: c } = e, u, d, f, p, m;
		e.isXAxis && c === void 0 && !n && (a(t.min) || a(t.max) || a(t.floor) || a(t.ceiling) ? c = null : (f = l(e.series.map((e) => {
			let t = e.getColumn("x");
			return e.xIncrement ? t.slice(0, 2) : t;
		})) || 0, c = Math.min(f * 5, e.dataMax - e.dataMin))), s(i) && s(o) && s(c) && i - o < c && (d = e.dataMax - e.dataMin >= c, u = (c - i + o) / 2, p = [o - u, r.parse(t.min) ?? o - u], d && (p[2] = n ? n.log2lin(e.dataMin) : e.dataMin), o = fe(p), m = [o + c, r.parse(t.max) ?? o + c], d && (m[2] = n ? n.log2lin(e.dataMax) : e.dataMax), i = me(m), i - o < c && (p[0] = i - c, p[1] = r.parse(t.min) ?? i - c, o = fe(p))), e.minRange = c, e.min = o, e.max = i;
	}
	getClosest() {
		let e, t;
		if (this.categories) t = 1;
		else {
			let n = [];
			this.series.forEach(function(e) {
				let r = e.closestPointRange, i = e.getColumn("x");
				i.length === 1 ? n.push(i[0]) : e.sorted && a(r) && e.reserveSpace() && (t = a(t) ? Math.min(t, r) : r);
			}), n.length && (n.sort((e, t) => e - t), e = l([n]));
		}
		return e && t ? Math.min(e, t) : e || t;
	}
	nameToX(e, t) {
		let n = S(this.options.categories), { name: r, series: i } = e, o = n ? this.categories : this.names, c = this.namesMap, l;
		return i.requireSorting = !1, a(t) || (t = this.uniqueNames && o ? n ? o.indexOf(r) : c[r] ?? -1 : i.autoIncrement()), t === -1 ? !n && o && (l = o.length) : s(t) && (l = t), l === void 0 ? l = s(e.x) ? e.x : i.autoIncrement() : (this.names[l] = e.name, c[e.name] = l), l;
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
			let n = r ? 1 : i ? N(t.options.pointRange, o, 0) : e.axisPointRange || 0, l = t.options.pointPlacement;
			if (a = Math.max(a, n), !e.single || r) {
				let e = t.is("xrange") ? !i : i;
				s = Math.max(s, e && B(l) ? 0 : n / 2), c = Math.max(c, e && l === "on" ? 0 : n);
			}
		}), l = e.ordinal?.slope && o ? e.ordinal.slope / o : 1, e.minPointOffset = s *= l, e.pointRangePadding = c *= l, e.pointRange = Math.min(a, e.single && r ? 1 : t), i && (e.closestPointRange = o)), e.translationSlope = e.transA = u = e.staticScale || e.len / (t + c || 1), e.transB = e.horiz ? e.left : e.bottom, e.minPixelPadding = u * s, g(this, "afterSetAxisTranslation");
	}
	minFromRange() {
		let { max: e, min: t } = this;
		return s(e) && s(t) && e - t || void 0;
	}
	setTickInterval(e) {
		let t = this, { categories: n, chart: r, dataMax: i, dataMin: o, dateTime: c, isXAxis: l, logarithmic: u, options: d, softThreshold: f } = t, p = r.time, m = s(t.threshold) ? t.threshold : void 0, h = t.minRange || 0, { ceiling: _, floor: v, linkedTo: b, softMax: x, softMin: S } = d, C = s(b) && r[t.coll]?.[b], w = d.tickPixelInterval, T = d.maxPadding, E = d.minPadding, D = 0, O, k = s(d.tickInterval) && d.tickInterval >= 0 ? d.tickInterval : void 0, A, ee, j, M;
		if (!c && !n && !C && this.getTickAmount(), j = N(t.userMin, p.parse(d.min)), M = N(t.userMax, p.parse(d.max)), C ? (t.linkedParent = C, O = C.getExtremes(), t.min = N(O.min, O.dataMin), t.max = N(O.max, O.dataMax), this.type !== C.type && U(11, !0, r)) : (f && a(m) && s(i) && s(o) && (o >= m ? (A = m, E = 0) : i <= m && (ee = m, T = 0)), t.min = N(j, A, o), t.max = N(M, ee, i)), s(t.max) && s(t.min) && (u && (t.positiveValuesOnly && !e && Math.min(t.min, N(o, t.min)) <= 0 && U(10, !0, r), t.min = y(u.log2lin(t.min), 16), t.max = y(u.log2lin(t.max), 16)), t.range && s(o) && (t.userMin = t.min = j = Math.max(o, t.minFromRange() || 0), t.userMax = M = t.max, t.range = void 0)), g(t, "foundExtremes"), t.adjustForMinRange(), s(t.min) && s(t.max)) {
			if (!s(t.userMin) && s(S) && S < t.min && (t.min = j = S), !s(t.userMax) && s(x) && x > t.max && (t.max = M = x), !n && !t.axisPointRange && !t.stacking?.usePercentage && !C && (D = t.max - t.min, D && (!a(j) && E && (t.min -= D * E), !a(M) && T && (t.max += D * T))), !s(t.userMin) && s(v) && (t.min = Math.max(t.min, v)), !s(t.userMax) && s(_) && (t.max = Math.min(t.max, _)), f && s(o) && s(i)) {
				let e = m || 0;
				!a(j) && t.min < e && o >= e ? t.min = d.minRange ? Math.min(e, t.max - h) : e : !a(M) && t.max > e && i <= e && (t.max = d.minRange ? Math.max(e, t.min + h) : e);
			}
			!r.polar && t.min > t.max && (a(d.min) ? t.max = t.min : a(d.max) && (t.min = t.max)), D = t.max - t.min;
		}
		if (t.min === t.max || !s(t.min) || !s(t.max) ? t.tickInterval = 1 : C && !k && w === C.options.tickPixelInterval ? t.tickInterval = k = C.tickInterval : t.tickInterval = N(k, this.tickAmount ? D / Math.max(this.tickAmount - 1, 1) : void 0, n ? 1 : D * w / Math.max(t.len, w)), l && !e) {
			let e = t.min !== t.old?.min || t.max !== t.old?.max;
			t.series.forEach(function(t) {
				t.forceCrop = t.forceCropping?.(), t.processData(e);
			}), g(this, "postProcessData", { hasExtremesChanged: e });
		}
		t.setAxisTranslation(), g(this, "initialAxisTranslation"), t.pointRange && !k && (t.tickInterval = Math.max(t.pointRange, t.tickInterval));
		let P = N(d.minTickInterval, c && !t.series.some((e) => !e.sorted) ? t.closestPointRange : 0);
		!k && P && t.tickInterval < P && (t.tickInterval = P), !c && !u && !k && (t.tickInterval = Ie(t, t.tickInterval)), this.tickAmount || (t.tickInterval = t.unsquish()), this.setTickPositions();
	}
	setTickPositions() {
		let e = this, t = this.options, n = t.tickPositions, r = t.tickPositioner, i = this.getMinorTickInterval(), o = !this.isPanning, c = o && t.startOnTick, l = o && t.endOnTick, u = [], d;
		if (this.tickmarkOffset = this.categories && t.tickmarkPlacement === "between" && this.tickInterval === 1 ? .5 : 0, this.single = this.min === this.max && a(this.min) && !this.tickAmount && (this.min % 1 == 0 || t.allowDecimals !== !1), n) u = n.slice();
		else if (s(this.min) && s(this.max)) {
			if (!e.ordinal?.positions && (this.max - this.min) / this.tickInterval > Math.max(2 * this.len, 200)) u = [this.min, this.max], U(19, !1, this.chart);
			else if (e.dateTime) u = e.getTimeTicks(e.dateTime.normalizeTimeTickInterval(this.tickInterval, t.units), this.min, this.max, t.startOfWeek, e.ordinal?.positions, this.closestPointRange, !0);
			else if (e.logarithmic) u = e.logarithmic.getLogTickPositions(this.tickInterval, this.min, this.max);
			else {
				let e = this.tickInterval, t = e;
				for (; t <= e * 2 && (u = this.getLinearTickPositions(this.tickInterval, this.min, this.max), this.tickAmount && u.length > this.tickAmount);) this.tickInterval = Ie(this, t *= 1.1);
			}
			u.length > this.len && (u = [u[0], u[u.length - 1]], u[0] === u[1] && (u.length = 1)), r && (this.tickPositions = u, d = r.apply(e, [
				this.min,
				this.max,
				e
			]), d && (u = d));
		}
		!this.isDirty && u.length !== this.tickPositions?.length && (this.isDirty = !0), this.tickPositions = u, this.minorTickInterval = i === "auto" && this.tickInterval ? this.tickInterval / t.minorTicksPerMajor : i, this.paddedTicks = u.slice(0), this.trimTicks(u, c, l), !this.isLinked && s(this.min) && s(this.max) && (this.single && u.length < 2 && !this.categories && !this.series.some((e) => e.is("heatmap") && e.options.pointPlacement === "between") && (this.min -= .5, this.max += .5), !n && !d && this.adjustTickAmount()), g(this, "afterSetTickPositions");
	}
	trimTicks(e, t, n) {
		let r = e[0], i = e[e.length - 1], o = !this.isOrdinal && this.minPointOffset || 0;
		if (g(this, "trimTicks"), !this.isLinked || !this.grid) {
			if (t && s(r)) this.min = r;
			else if (e.length) for (; this.min - o > e[0];) e.shift();
			if (n && s(i)) this.max = i;
			else for (; this.max + o < e[e.length - 1];) e.pop();
			e.length === 0 && a(r) && !this.options.tickPositions && e.push((i + r) / 2);
		}
	}
	alignToOthers() {
		let e = this, t = e.chart, n = [this], r = e.options, i = t.options.chart, a = this.coll === "yAxis" && i.alignThresholds, o = [], c;
		if (e.thresholdAlignment = void 0, (i.alignTicks !== !1 && r.alignTicks || a) && r.startOnTick !== !1 && r.endOnTick !== !1 && !e.logarithmic) {
			let r = (e) => {
				let { horiz: t, options: n } = e;
				return [
					t ? n.left : n.top,
					n.width,
					n.height,
					n.pane
				].join(",");
			}, i = r(this);
			t[this.coll].forEach(function(t) {
				let { series: a } = t;
				a.length && a.some((e) => e.visible) && t !== e && r(t) === i && (c = !0, n.push(t));
			});
		}
		if (c && a) {
			n.forEach((t) => {
				let n = t.getThresholdAlignment(e);
				s(n) && o.push(n);
			});
			let t = o.length > 1 ? o.reduce((e, t) => e += t, 0) / o.length : void 0;
			n.forEach((e) => {
				e.thresholdAlignment = t;
			});
		}
		return c;
	}
	getThresholdAlignment(e) {
		if ((!s(this.dataMin) || this !== e && this.series.some((e) => e.isDirty || e.isDirtyData || e.xAxis?.isDirty)) && this.getSeriesExtremes(), s(this.threshold)) {
			let e = q((this.threshold - (this.dataMin || 0)) / ((this.dataMax || 0) - (this.dataMin || 0)), 0, 1);
			return this.options.reversed && (e = 1 - e), e;
		}
	}
	getTickAmount() {
		let e = this, t = this.options, n = t.tickPixelInterval, r = t.tickAmount;
		!a(t.tickInterval) && !r && this.len < n && !this.isRadial && !e.logarithmic && t.startOnTick && t.endOnTick && (r = 2), !r && this.alignToOthers() && (r = Math.ceil(this.len / n) + 1), r < 4 && (this.finalTickAmt = r, r = 5), this.tickAmount = r;
	}
	adjustTickAmount() {
		let e = this, { finalTickAmt: t, max: n, min: r, options: i, tickPositions: o, tickAmount: c, thresholdAlignment: l } = e, u = o?.length, d = N(e.threshold, e.softThreshold ? 0 : null), f, p, m = e.tickInterval, h, g = () => o.push(y(o[o.length - 1] + m)), _ = () => o.unshift(y(o[0] - m));
		if (s(l) && (h = l === 0 ? 0 : l === 1 ? c - 1 : Math.round(q(l * (c - 1), 1, c - 2)), i.reversed && (h = c - 1 - h)), e.hasData() && s(r) && s(n)) {
			let l = () => {
				e.transA *= (u - 1) / (c - 1), e.min = i.startOnTick ? o[0] : Math.min(r, o[0]), e.max = i.endOnTick ? o[o.length - 1] : Math.max(n, o[o.length - 1]);
			};
			if (s(h) && s(e.threshold)) {
				for (; o[h] !== d || o.length !== c || o[0] > r || o[o.length - 1] < n;) {
					for (o.length = 0, o.push(e.threshold); o.length < c;) o[h] === void 0 || o[h] > e.threshold ? _() : g();
					if (m > e.tickInterval * 8) break;
					m *= 2;
				}
				l();
			} else if (u < c) {
				for (; o.length < c;) o.length % 2 || r === d ? g() : _();
				l();
			}
			if (a(t)) {
				for (p = f = o.length; p--;) (t === 3 && p % 2 == 1 || t <= 2 && p > 0 && p < f - 1) && o.splice(p, 1);
				e.finalTickAmt = void 0;
			}
		}
	}
	setScale() {
		let e = this, { coll: t, stacking: n } = e, r = !1, i = !1;
		e.series.forEach((e) => {
			r = r || e.isDirtyData || e.isDirty, i = i || e.xAxis?.isDirty || !1;
		}), e.setAxisSize();
		let a = e.len !== e.old?.len;
		a || r || i || e.isLinked || e.forceRedraw || e.userMin !== e.old?.userMin || e.userMax !== e.old?.userMax || e.alignToOthers() ? (n && t === "yAxis" && n.buildStacks(), e.forceRedraw = !1, e.userMinRange || (e.minRange = void 0), e.getSeriesExtremes(), e.setTickInterval(), n && t === "xAxis" && n.buildStacks(), e.isDirty ||= a || e.min !== e.old?.min || e.max !== e.old?.max) : n && n.cleanStacks(), r && delete e.allExtremes, g(this, "afterSetScale");
	}
	setExtremes(e, t, n = !0, r, i) {
		let a = this.chart;
		this.series.forEach((e) => {
			delete e.kdTree;
		}), e = a.time.parse(e), t = a.time.parse(t), i = L(i, {
			min: e,
			max: t
		}), g(this, "setExtremes", i, (e) => {
			this.userMin = e.min, this.userMax = e.max, this.eventArgs = e, n && a.redraw(r);
		});
	}
	setAxisSize() {
		let e = this.chart, t = this.options, n = t.offsets || [
			0,
			0,
			0,
			0
		], r = this.horiz, i = this.width = Math.round(z(N(t.width, e.plotWidth - n[3] + n[1]), e.plotWidth)), a = this.height = Math.round(z(N(t.height, e.plotHeight - n[0] + n[2]), e.plotHeight)), o = this.top = Math.round(z(N(t.top, e.plotTop + n[0]), e.plotHeight, e.plotTop)), s = this.left = Math.round(z(N(t.left, e.plotLeft + n[3]), e.plotWidth, e.plotLeft));
		this.bottom = e.chartHeight - a - o, this.right = e.chartWidth - i - s, this.len = Math.max(r ? i : a, 0), this.pos = r ? s : o;
	}
	getExtremes() {
		let e = this, t = e.logarithmic;
		return {
			min: t ? y(t.lin2log(e.min)) : e.min,
			max: t ? y(t.lin2log(e.max)) : e.max,
			dataMin: e.dataMin,
			dataMax: e.dataMax,
			userMin: e.userMin,
			userMax: e.userMax
		};
	}
	getThreshold(e) {
		let t = this, n = t.logarithmic, r = n ? n.lin2log(t.min) : t.min, i = n ? n.lin2log(t.max) : t.max;
		return e === null || e === -Infinity ? e = r : e === Infinity ? e = i : r > e ? e = r : i < e && (e = i), t.translate(e, 0, 1, 0, 1);
	}
	autoLabelAlign(e) {
		let t = ((e - this.side * 90) % 360 + 360) % 360, n = { align: "center" };
		return g(this, "autoLabelAlign", n, function(e) {
			t > 15 && t < 165 ? e.align = "right" : t > 195 && t < 345 && (e.align = "left");
		}), n.align;
	}
	tickSize(e) {
		let t = this.options, n = N(t[e === "tick" ? "tickWidth" : "minorTickWidth"], e === "tick" && this.isXAxis && !this.categories ? 1 : 0), r = t[e === "tick" ? "tickLength" : "minorTickLength"], i;
		n && r && (t[e + "Position"] === "inside" && (r = -r), i = [r, n]);
		let a = {
			tickSize: i,
			prefix: e
		};
		return g(this, "afterTickSize", a), a.tickSize;
	}
	labelMetrics() {
		let e = this.chart.renderer, t = this.ticks, n = t[Object.keys(t)[0]] || {};
		return this.chart.renderer.fontMetrics(n.label || e.box);
	}
	unsquish() {
		let e = this.options.labels, t = e.padding || 0, n = this.horiz, r = this.tickInterval, i = this.len / ((+!!this.categories + this.max - this.min) / r), a = e.rotation, o = y(this.labelMetrics().h * .8), c = Math.max(this.max - this.min, 0), l = function(e) {
			let n = (e + 2 * t) / (i || 1);
			return n = n > 1 ? Math.ceil(n) : 1, n * r > c && e !== Infinity && i !== Infinity && c && (n = Math.ceil(c / r)), y(n * r);
		}, u = r, d, f = Number.MAX_VALUE, p;
		if (n) {
			if (e.staggerLines || (s(a) ? p = [a] : i < e.autoRotationLimit && (p = e.autoRotation)), p) {
				let e, t;
				for (let n of p) (n === a || n && n >= -90 && n <= 90) && (e = l(Math.abs(o / Math.sin(Fe * n))), t = e + Math.abs(n / 360), t < f && (f = t, d = n, u = e));
			}
		} else u = l(o * .75);
		return this.autoRotation = p, this.labelRotation = N(d, s(a) ? a : 0), e.step ? r : u;
	}
	getSlotWidth(e) {
		let t = this.chart, n = this.horiz, r = this.options.labels, i = Math.max(this.tickPositions.length - +!this.categories, 1), a = t.margin[3];
		if (e && s(e.slotWidth)) return e.slotWidth;
		if (n && r.step < 2 && !this.isRadial) return r.rotation ? 0 : (this.staggerLines || 1) * this.len / i;
		if (!n) {
			let e = r.style.width;
			if (e !== void 0) return parseInt(String(e), 10);
			if (!this.opposite && a) return a - t.spacing[3];
		}
		return t.chartWidth * .33;
	}
	renderUnsquish() {
		let e = this.chart, t = e.renderer, n = this.tickPositions, r = this.ticks, i = this.options.labels, a = i.style, o = this.horiz, s = this.getSlotWidth(), c = Math.max(1, Math.round(s - (o ? 2 * (i.padding || 0) : i.distance || 0))), l = {}, u = this.labelMetrics(), d = a.lineClamp, f, p = d ?? (Math.floor(this.len / (n.length * u.h)) || 1), m = 0;
		B(i.rotation) || (l.rotation = i.rotation || 0), n.forEach(function(e) {
			m = Math.max(m, r[e].label?.textPxLength || 0);
		}), this.maxLabelLength = m, this.autoRotation ? m > c && m > u.h ? l.rotation = this.labelRotation : this.labelRotation = 0 : s && (f = c), l.rotation && (f = m > e.chartHeight * .5 ? e.chartHeight * .33 : m, d || (p = 1)), this.labelAlign = i.align || this.autoLabelAlign(this.labelRotation || 0), this.labelAlign && (l.align = this.labelAlign), n.forEach(function(e) {
			let t = r[e], n = t?.label, i = a.width, o = {};
			n && (n.attr(l), t.shortenLabel ? t.shortenLabel() : f && !i && a.whiteSpace !== "nowrap" && (f < (n.textPxLength || 0) || n.element.tagName === "DIV") ? n.css(L(o, {
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
		}) || this.options.showEmpty && a(this.min) && a(this.max);
	}
	addTitle(e) {
		let t = this, n = t.chart.renderer, r = t.horiz, i = t.opposite, a = t.options.title, o = t.chart.styledMode, s;
		t.axisTitle || (s = a.textAlign, s ||= (r ? {
			low: "left",
			middle: "center",
			high: "right"
		} : {
			low: i ? "right" : "left",
			middle: "center",
			high: i ? "left" : "right"
		})[a.align], t.axisTitle = n.text(a.text || "", 0, 0, a.useHTML).attr({
			zIndex: 7,
			rotation: a.rotation || 0,
			align: s
		}).addClass("highcharts-axis-title"), o || t.axisTitle.css(u(a.style)), t.axisTitle.add(t.axisGroup), t.axisTitle.isNew = !0), !o && !a.style.width && !t.isRadial && t.axisTitle.css({ width: t.len + "px" }), t.axisTitle[e ? "show" : "hide"](e);
	}
	generateTick(e) {
		let t = this, n = t.ticks;
		n[e] ? n[e].addLabel() : n[e] = new Oe(t, e);
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
				a(i) && r !== i && (e[r] && (e[r].pos = i, this.isDirty = !0), e[i] && this.names.indexOf(t[i]) === -1 && (e[i].pos = NaN));
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
		let e = this, { chart: t, horiz: n, options: r, side: i, ticks: o, tickPositions: c, coll: l } = e, u = e.hasData(), d = r.title, f = r.labels, p = s(r.crossing), m = t.axisOffset, h = t.clipOffset, _ = [
			-1,
			1,
			1,
			-1
		][i], v = e.tickRotCorr || {
			x: 0,
			y: 0
		}, y = 0, b, x = 0, S, C = 0, T = 0, E, D, O;
		if (e.showAxis = b = u || r.showEmpty, e.staggerLines = e.horiz && f.staggerLines || void 0, e.createGroups(), u || e.isLinked ? (e.shuffleTicks(), c.forEach(e.generateTick.bind(e)), e.renderUnsquish(), v = e.tickRotCorr, y = Math.abs(v.x), O = e.reserveSpaceDefault = i === 0 || i === 2 || {
			1: "left",
			3: "right"
		}[i] === e.labelAlign, (f.reserveSpace ?? (!p && null) ?? (e.labelAlign === "center" || null) ?? O) && c.forEach(function(e) {
			T = Math.max(o[e].getLabelSize(), T);
		}), e.staggerLines && (T *= e.staggerLines), !n && s(e.labelRotation) && O && (T -= y), e.labelOffset = T * (e.opposite ? -1 : 1)) : w(o, function(e, t) {
			e.destroy(), delete o[t];
		}), d?.text && d.enabled !== !1 && (e.addTitle(b), b && !p && d.reserveSpace !== !1 && (e.titleOffset = x = e.axisTitle.getBBox()[n ? "height" : "width"], S = d.offset, C = a(S) ? 0 : N(d.margin, n ? 5 : 10))), e.renderLine(), e.offset = _ * (s(r.offset) ? r.offset : m[i] ? m[i] + (r.margin || 0) : 0), D = i === 0 ? -e.labelMetrics().h : i === 2 ? v.y : 0, E = Math.abs(T) + C, T && (E -= D, E += _ * (n ? f.y ?? v.y + _ * f.distance : f.x ?? (O ? _ * (f.distance - y) : v.x + _ * f.distance)), !n && !O && e.labelAlign === "center" && s(e.labelRotation) && (E += y)), e.axisTitleMargin = S ?? E, e.maxLabelDimensions = e.getMaxLabelDimensions?.(o, c), l !== "colorAxis" && h) {
			let t = this.tickSize("tick");
			m[i] = Math.max(m[i], (e.axisTitleMargin || 0) + x + _ * e.offset, E, c?.length && t ? t[0] + _ * e.offset : 0);
			let n = !e.axisLine || r.offset ? 0 : e.axisLine.strokeWidth() / 2;
			h[i] = Math.max(h[i], n);
		}
		g(this, "afterGetOffset");
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
		return g(this, "afterGetTitlePosition", { titlePosition: h }), h;
	}
	renderMinorTick(e, t) {
		let n = this, r = n.minorTicks;
		r[e] || (r[e] = new Oe(n, e, "minor")), t && r[e].isNew && r[e].render(null, !0), r[e].render(null, !1, 1);
	}
	renderTick(e, t, n) {
		let r = this, i = r.isLinked, a = r.ticks;
		(!i || e >= r.min && e <= r.max || r.grid?.isColumn) && (a[e] || (a[e] = new Oe(r, e)), n && a[e].isNew && a[e].render(t, !0, -1), a[e].render(t));
	}
	render() {
		let e = this, t = e.chart, n = e.logarithmic, r = t.renderer, i = e.options, a = e.isLinked, o = e.tickPositions, c = e.axisTitle, l = e.ticks, u = e.minorTicks, d = e.alternateBands, f = i.stackLabels, p = i.alternateGridColor, m = i.crossing, h = e.tickmarkOffset, _ = e.axisLine, v = e.showAxis, y = ke(r.globalAnimation), b, x;
		if (e.labelEdge.length = 0, e.overlap = !1, [
			l,
			u,
			d
		].forEach(function(e) {
			w(e, function(e) {
				e.isActive = !1;
			});
		}), s(m)) {
			let n = this.isXAxis ? t.yAxis[0] : t.xAxis[0], r = [
				1,
				-1,
				-1,
				1
			][this.side];
			if (n) {
				let t = n.toPixels(m, !0);
				e.horiz && (t = n.len - t), e.offset = r * t;
			}
		}
		if (e.hasData() || a) {
			let r = e.chart.hasRendered && e.old && s(e.old.min);
			e.minorTickInterval && !e.categories && e.getMinorTickPositions().forEach(function(t) {
				e.renderMinorTick(t, r);
			}), o.length && (o.forEach(function(t, n) {
				e.renderTick(t, n, r);
			}), h && (e.min === 0 || e.single) && (l[-1] ||= new Oe(e, -1, null, !0), l[-1].render(-1))), p && o.forEach(function(r, i) {
				x = o[i + 1] === void 0 ? e.max - h : o[i + 1] + h, i % 2 == 0 && r < e.max && x <= e.max + (t.polar ? -h : h) && (d[r] || (d[r] = new K.PlotLineOrBand(e, {})), b = r + h, d[r].options = {
					from: n ? n.lin2log(b) : b,
					to: n ? n.lin2log(x) : x,
					color: p,
					className: "highcharts-alternate-grid"
				}, d[r].render(), d[r].isActive = !0);
			}), e._addedPlotLB || (e._addedPlotLB = !0, (i.plotLines || []).concat(i.plotBands || []).forEach(function(t) {
				e.addPlotBandOrLine(t);
			}));
		}
		[
			l,
			u,
			d
		].forEach(function(e) {
			let n = [], r = y.duration;
			w(e, function(e, t) {
				e.isActive || (e.render(t, !1, 0), e.isActive = !1, n.push(t));
			}), ue(function() {
				let t = n.length;
				for (; t--;) e[n[t]] && !e[n[t]].isActive && (e[n[t]].destroy(), delete e[n[t]]);
			}, e === d || !t.hasRendered || !r ? 0 : r);
		}), _ && (_[_.isPlaced ? "animate" : "attr"]({ d: this.getLinePath(_.strokeWidth()) }), _.isPlaced = !0, _[v ? "show" : "hide"](v)), c && v && (c[c.isNew ? "attr" : "animate"](e.getTitlePosition(c)), c.isNew = !1), f?.enabled && e.stacking && e.stacking.renderStackTotals(), this.old || this.saveOld(), e.isDirty = !1, g(this, "afterRender");
	}
	redraw() {
		this.visible && (this.render(), this.plotLinesAndBands.forEach(function(e) {
			e.render();
		})), this.series.forEach(function(e) {
			e.isDirty = !0;
		});
	}
	saveOld() {
		this.old = s(this.min) ? {
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
		return this.keepProps || e.keepProps;
	}
	destroy(e) {
		let t = this, n = t.plotLinesAndBands, r = this.eventOptions;
		if (g(this, "destroy", { keepEvents: e }), e || H(t), [
			t.ticks,
			t.minorTicks,
			t.alternateBands
		].forEach(function(e) {
			i(e);
		}), n) {
			let e = n.length;
			for (; e--;) n[e].destroy();
		}
		[
			"axisLine",
			"axisTitle",
			"axisGroup",
			"gridGroup",
			"labelGroup",
			"cross",
			"scrollbar"
		].forEach(function(e) {
			t[e] && (t[e] = t[e].destroy());
		});
		for (let e in t.plotLinesAndBandsGroups) t.plotLinesAndBandsGroups[e] = t.plotLinesAndBandsGroups[e].destroy();
		w(t, function(e, n) {
			t.getKeepProps().indexOf(n) === -1 && delete t[n];
		}), this.eventOptions = r;
	}
	drawCrosshair(e, t) {
		let n = this.crosshair, r = n?.snap ?? !0, i = this.chart, o = this.cross, s, c, l, u;
		if (g(this, "drawCrosshair", {
			e,
			point: t
		}), e ||= this.cross?.e, !n || (a(t) || !r) === !1) this.hideCrosshair();
		else {
			if (clearTimeout(this.crossShowTimer), r ? a(t) && (c = N(this.coll === "colorAxis" ? null : t.crosshairPos, this.isXAxis ? t.plotX : this.len - t.plotY)) : c = e && (this.horiz ? e.chartX - this.pos : this.len - e.chartY + this.pos), a(c) && (u = {
				value: t && (this.isXAxis ? t.x : N(t.stackY, t.y)),
				translatedValue: c
			}, i.polar && L(u, {
				isCrosshair: !0,
				chartX: e?.chartX,
				chartY: e?.chartY,
				point: t
			}), s = this.getPlotLinePath(u) || null), !a(s)) {
				this.hideCrosshair();
				return;
			}
			l = this.categories && !this.isRadial, this.crossShowTimer = ue(() => {
				let t = this.cross;
				t || (this.cross = t = i.renderer.path().addClass("highcharts-crosshair highcharts-crosshair-" + (l ? "category " : "thin ") + (n.className || "")).attr({ zIndex: N(n.zIndex, 2) }).clip(n.clip === !1 ? void 0 : i.plotClipInner).add(), i.styledMode || (t.attr({
					stroke: n.color || (l ? Me("var(--highcharts-highlight-color-20)").setOpacity(.25).get() : "var(--highcharts-neutral-color-20)"),
					"stroke-width": N(n.width, 1)
				}).css({ "pointer-events": "none" }), n.dashStyle && t.attr({ dashstyle: n.dashStyle }))), t.show().animate({ d: s }, ke(n?.animation)), l && !n.width && t.attr({ "stroke-width": this.transA }), this.cross && (this.cross.e = e);
			}, (!o || o.attr("visibility") === "hidden") && n.showDelay || 0);
		}
		g(this, "afterDrawCrosshair", {
			e,
			point: t
		});
	}
	hideCrosshair() {
		clearTimeout(this.crossShowTimer), this.cross && this.cross.hide(), g(this, "afterHideCrosshair");
	}
	update(e, t) {
		let n = this.chart;
		e = u(this.userOptions, e), this.destroy(!0), this.init(n, e), n.isDirtyBox = !0, N(t, !0) && n.redraw();
	}
	remove(e) {
		let n = this.chart, r = this.coll, i = this.series, a = i.length;
		for (; a--;) i[a] && i[a].remove(!1);
		t(n.axes, this), t(n[r] || [], this), n.orderItems(r), this.destroy(), n.isDirtyBox = !0, N(e, !0) && n.redraw();
	}
	setTitle(e, t) {
		this.update({ title: e }, t);
	}
	setCategories(e, t) {
		this.update({ categories: e }, t);
	}
};
Le.keepProps = [
	"coll",
	"extKey",
	"hcEvents",
	"len",
	"names",
	"series",
	"userMax",
	"userMin"
];
//#endregion
//#region node_modules/highcharts/es-modules/Core/Color/Palette.js
var { charts: Re } = K, ze = [
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
], Be = [
	null,
	"#00e272",
	"#efdf00"
], Ve = (e, t) => {
	let n = (e) => {
		let n = "";
		return w(t.light, (r, i) => {
			n += e && r !== t.dark[i] ? `  ${i}: light-dark(${r}, ${t.dark[i]});\n` : `  ${i}: ${r};\n`;
		}), n;
	}, r = n(), i = n(!0);
	return `${e || ":root"} {
${r}
}
@supports (color: light-dark(#fff, #000)) {
  ${e || ":root"} {
${i}
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
}, He = class {
	constructor(e, t) {
		this.defaultOptions = P, this.options = u(P), this.cssVars = {
			light: {},
			dark: {}
		}, this.renderer = e, this.update(t);
	}
	injectCSS(e) {
		let { cssVars: t, renderer: n } = this, r = Object.keys(h(e, this.defaultOptions)).length > 0, i = Math.max(e.colors?.length || 0, ze.length), a = "light", o = (e, n) => {
			B(e) && (n = n.replace(/([0-9]+)/g, "-$1").replace(/[A-Z]/g, (e) => `-${e.toLowerCase()}`), t[a][`--highcharts-${n}`] = e);
		};
		for (let n of ["light", "dark"]) {
			let r = e[n] || {}, s = {}, c = new F(r?.neutralColor || ""), l = new F(r?.backgroundColor || ""), u = new F(r?.highlightColor || "");
			a = n, [
				3,
				5,
				10,
				20,
				40,
				60,
				80,
				100
			].forEach((e) => {
				s[`neutralColor${e}`] = l.tweenTo(c, e / 100), s[`highlightColor${e}`] = l.tweenTo(u, e / 100);
			});
			for (let t = 0; t < i; t++) o(r?.colors?.[t] || e.colors?.[t] || (n === "dark" ? Be : [])?.[t] || ze[t] || "#888a", `color${t}`);
			w(r, o), w(s, o), n === "light" && L(t.dark, t.light);
		}
		let s = n.defs.element, c = r ? `*[data-highcharts-chart="${n.chartIndex}"]` : "", l = s.querySelector("style.highcharts-palette") || n.box.ownerDocument.createElement("style");
		l.parentNode || (l.nonce = "highcharts", l.className = "highcharts-palette", s.appendChild(l)), l.textContent = Ve(c, t);
	}
	update(e) {
		let t = this.renderer.box.parentElement, n = Re?.[this.renderer.chartIndex];
		e = u(!0, this.options, e), n && (n.options.palette = e), e.injectCSS !== !1 && this.injectCSS(e), t && (B(e.colorScheme) && [
			"light",
			"dark",
			"inherit"
		].includes(e.colorScheme) ? t.style.colorScheme = e.colorScheme : t.style.removeProperty("color-scheme"));
	}
}, Ue = class e extends we {
	constructor(t, n, r, i, a, o, s, c, l, u) {
		super(t, "g"), this.paddingLeftSetter = this.paddingSetter, this.paddingRightSetter = this.paddingSetter, this.doUpdate = !1, this.textStr = n, this.x = r, this.y = i, this.anchorX = o, this.anchorY = s, this.baseline = l, this.className = u, this.addClass(u === "button" ? "highcharts-no-tooltip" : "highcharts-label"), u && this.addClass("highcharts-" + u), this.text = t.text(void 0, 0, 0, c).attr({ zIndex: 1 });
		let d;
		typeof a == "string" && (d = /^url\((.*?)\)$/.test(a), (d || this.renderer.symbols[a]) && (this.symbolKey = a)), this.bBox = e.emptyBBox, this.padding = 3, this.baselineOffset = 0, this.needsBox = t.styledMode || d, this.deferredAttr = {}, this.alignFactor = 0;
	}
	alignSetter(e) {
		let t = o(e);
		this.textAlign = e, t !== this.alignFactor && (this.alignFactor = t, this.bBox && s(this.xSetting) && this.attr({ x: this.xSetting }), this.updateTextPadding());
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
	css(t) {
		if (t) {
			let n = {};
			t = u(t), e.textProps.forEach((e) => {
				t[e] !== void 0 && (n[e] = t[e], delete t[e]);
			}), this.text.css(n), "fontSize" in n || "fontWeight" in n || "width" in n ? this.updateTextPadding() : "textOverflow" in n && this.updateBoxSize(), "color" in n && this.updateBackground();
		}
		return we.prototype.css.call(this, t);
	}
	destroy() {
		H(this.element, "mouseenter"), H(this.element, "mouseleave"), this.text && this.text.destroy(), this.box &&= this.box.destroy(), we.prototype.destroy.call(this);
	}
	fillSetter(e, t) {
		e && (this.needsBox = !0), this.fill = e, this.boxAttr(t, e);
	}
	getBBox(e, t) {
		(this.textStr && this.bBox.width === 0 && this.bBox.height === 0 || this.rotation) && this.updateBoxSize();
		let { padding: n, height: r = 0, translateX: i = 0, translateY: a = 0, width: o = 0 } = this, s = N(this.paddingLeft, n), c = t ?? (this.rotation || 0), l = {
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
			text: N(this.textStr, ""),
			x: this.x || 0,
			y: this.y || 0
		}), this.box && a(this.anchorX) && this.attr({
			anchorX: this.anchorX,
			anchorY: this.anchorY
		});
	}
	paddingSetter(e, t) {
		s(e) ? e !== this[t] && (this[t] = e, this.updateTextPadding()) : this[t] = void 0;
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
		let t = this.text, n = {}, r = this.padding, i = this.bBox = (!s(this.widthSetting) || !s(this.heightSetting) || this.textAlign) && a(t.textStr) ? t.getBBox(void 0, 0) : e.emptyBBox, o;
		this.width = this.getPaddedWidth(), this.height = (this.heightSetting || i.height || 0) + 2 * r;
		let c = this.renderer.fontMetrics(t);
		if (this.baselineOffset = r + Math.min((this.text.firstLineMetrics || c).b, i.height || Infinity), this.heightSetting && (this.baselineOffset += (this.heightSetting - c.h) / 2), this.needsBox && !t.textPath) {
			if (!this.box) {
				let e = this.box = this.symbolKey ? this.renderer.symbol(this.symbolKey) : this.renderer.rect();
				e.addClass((this.className === "button" ? "" : "highcharts-label-box") + (this.className ? " highcharts-" + this.className + "-box" : "")), e.add(this);
			}
			o = this.getCrispAdjust(), n.x = o, n.y = (this.baseline ? -this.baselineOffset : 0) + o, n.width = Math.round(this.width), n.height = Math.round(this.height), this.box.attr(L(n, this.deferredAttr)), this.deferredAttr = {};
		}
	}
	updateTextPadding() {
		let e = this.text, t = e.styles.textAlign || this.textAlign;
		if (!e.textPath) {
			this.updateBoxSize();
			let n = this.baseline ? 0 : this.baselineOffset, r = (this.paddingLeft ?? this.padding) + o(t) * (this.widthSetting ?? this.bBox.width);
			(r !== e.x || n !== e.y) && (e.attr({
				align: t,
				x: r
			}), n !== void 0 && e.attr("y", n)), e.x = r, e.y = n;
		}
	}
	widthSetter(e) {
		this.widthSetting = s(e) ? e : void 0, this.doUpdate = !0;
	}
	getPaddedWidth() {
		let e = this.padding, t = N(this.paddingLeft, e), n = N(this.paddingRight, e);
		return (this.widthSetting || this.bBox.width || 0) + t + n;
	}
	xSetter(e) {
		this.x = e, this.alignFactor && (e -= this.alignFactor * this.getPaddedWidth(), this["forceAnimate:x"] = !0), this.anchorX && (this["forceAnimate:anchorX"] = !0), this.xSetting = Math.round(e), this.attr("translateX", this.xSetting);
	}
	ySetter(e) {
		this.anchorY && (this["forceAnimate:anchorY"] = !0), this.ySetting = this.y = Math.round(e), this.attr("translateY", this.ySetting);
	}
};
Ue.emptyBBox = {
	width: 0,
	height: 0,
	x: 0,
	y: 0
}, Ue.textProps = [
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
//#endregion
//#region node_modules/highcharts/es-modules/Core/Renderer/SVG/Symbols.js
function We(e, t, n, r, i) {
	let o = [];
	if (i) {
		let s = i.start || 0, c = i.end || 0, l = N(i.r, n), u = N(i.r, r || n), d = 1e-4, f = Math.abs(c - s - 2 * Math.PI) < d;
		f && (s = Math.PI / 2, c = Math.PI * 2.5 - d);
		let p = i.innerR, m = N(i.open, f), h = f ? 0 : Math.cos(s), g = f ? 1 : Math.sin(s), _ = f ? 0 : Math.cos(c), v = f ? 1 : Math.sin(c), y = N(i.longArc, c - s - Math.PI < d ? 0 : 1), b = [
			"A",
			l,
			u,
			0,
			y,
			N(i.clockwise, 1),
			e + (f ? .001 : l * _),
			t + u * v
		];
		b.params = {
			start: s,
			end: c,
			cx: e,
			cy: t
		}, o.push([
			"M",
			e + l * h,
			t + u * g
		], b), a(p) && (b = [
			"A",
			p,
			p,
			0,
			y,
			a(i.clockwise) ? 1 - i.clockwise : 0,
			e + (f ? -.001 : p * h),
			t + p * g
		], b.params = {
			start: c,
			end: s,
			cx: e,
			cy: t
		}, o.push(m ? [
			"M",
			e + p * _,
			t + p * v
		] : [
			"L",
			e + p * _,
			t + p * v
		], b)), m || o.push(["Z"]);
	}
	return o;
}
function Ge(e, t, n, r, i) {
	let a = Math.min(i?.r || 0, n, r), o = a + 6, c = i?.anchorX, l = i?.anchorY || 0, u = Ye(e, t, n, r, { r: a });
	if (!s(c) || c < n && c > 0 && l < r && l > 0) return u;
	if (e + c > n - o) if (l > t + o && l < t + r - o) u.splice(3, 1, [
		"L",
		e + n,
		l - 6
	], [
		"L",
		e + n + 6,
		l
	], [
		"L",
		e + n,
		l + 6
	], [
		"L",
		e + n,
		t + r - a
	]);
	else if (c < n) {
		let i = l < t + o, s = i ? t : t + r, d = i ? 2 : 5;
		u.splice(d, 0, [
			"L",
			c,
			l
		], [
			"L",
			e + n - a,
			s
		]);
	} else u.splice(3, 1, [
		"L",
		e + n,
		r / 2
	], [
		"L",
		c,
		l
	], [
		"L",
		e + n,
		r / 2
	], [
		"L",
		e + n,
		t + r - a
	]);
	else if (e + c < o) if (l > t + o && l < t + r - o) u.splice(7, 1, [
		"L",
		e,
		l + 6
	], [
		"L",
		e - 6,
		l
	], [
		"L",
		e,
		l - 6
	], [
		"L",
		e,
		t + a
	]);
	else if (c > 0) {
		let n = l < t + o, i = n ? t : t + r, s = n ? 1 : 6;
		u.splice(s, 0, [
			"L",
			c,
			l
		], [
			"L",
			e + a,
			i
		]);
	} else u.splice(7, 1, [
		"L",
		e,
		r / 2
	], [
		"L",
		c,
		l
	], [
		"L",
		e,
		r / 2
	], [
		"L",
		e,
		t + a
	]);
	else l > r && c < n - o ? u.splice(5, 1, [
		"L",
		c + 6,
		t + r
	], [
		"L",
		c,
		t + r + 6
	], [
		"L",
		c - 6,
		t + r
	], [
		"L",
		e + a,
		t + r
	]) : l < 0 && c > o && u.splice(1, 1, [
		"L",
		c - 6,
		t
	], [
		"L",
		c,
		t - 6
	], [
		"L",
		c + 6,
		t
	], [
		"L",
		n - a,
		t
	]);
	return u;
}
function Ke(e, t, n, r) {
	return We(e + n / 2, t + r / 2, n / 2, r / 2, {
		start: Math.PI * .5,
		end: Math.PI * 2.5,
		open: !1
	});
}
function qe(e, t, n, r) {
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
}
function Je(e, t, n, r, i) {
	return i?.r ? Ye(e, t, n, r, i) : [
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
function Ye(e, t, n, r, i) {
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
function Xe(e, t, n, r) {
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
}
function Ze(e, t, n, r) {
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
var Qe = {
	arc: We,
	callout: Ge,
	circle: Ke,
	diamond: qe,
	rect: Je,
	roundedRect: Ye,
	square: Je,
	triangle: Xe,
	"triangle-down": Ze
}, { doc: $e, SVG_NS: et, win: tt } = K, nt = (e, t) => e.substring(0, t) + "…", rt = class {
	constructor(e) {
		let t = e.styles;
		this.renderer = e.renderer, this.svgElement = e, this.width = e.textWidth, this.textLineHeight = t?.lineHeight, this.textOutline = t?.textOutline, this.ellipsis = t?.textOverflow === "ellipsis", this.lineClamp = t?.lineClamp, this.noWrap = t?.whiteSpace === "nowrap";
	}
	buildSVG() {
		let e = this.svgElement, t = e.element, n = e.renderer, r = N(e.textStr, "").toString(), i = r.indexOf("<") !== -1, a = t.childNodes, o = !e.added && n.box, s = /<br.*?>/g, c = [
			r,
			this.ellipsis,
			this.noWrap,
			this.textLineHeight,
			this.textOutline,
			e.getStyle("font-size"),
			e.styles.lineClamp,
			this.width
		].join(",");
		if (c !== e.textCache) {
			e.textCache = c, delete e.actualWidth;
			for (let e = a.length; e--;) t.removeChild(a[e]);
			if (!i && !this.ellipsis && !this.width && !e.textPath && (r.indexOf(" ") === -1 || this.noWrap && !s.test(r))) t.appendChild($e.createTextNode(this.unescapeEntities(r)));
			else if (r !== "") {
				o && o.appendChild(t);
				let n = new V(r);
				this.modifyTree(n.nodes), n.addToDOM(t), this.modifyDOM(), this.ellipsis && (t.textContent || "").indexOf("…") !== -1 && e.attr("title", this.unescapeEntities(e.textStr || "", ["&lt;", "&gt;"])), o && o.removeChild(t);
			}
			B(this.textOutline) && e.applyTextOutline && e.applyTextOutline(this.textOutline);
		}
	}
	modifyDOM() {
		let e = this.svgElement, t = A(e.element, "x");
		e.firstLineMetrics = void 0;
		let n;
		for (; (n = e.element.firstChild) && /^[\s\u200B]*$/.test(n.textContent || " ");) e.element.removeChild(n);
		[].forEach.call(e.element.querySelectorAll("tspan.highcharts-br"), (n, r) => {
			n.nextSibling && n.previousSibling && (r === 0 && n.previousSibling.nodeType === 1 && (e.firstLineMetrics = e.renderer.fontMetrics(n.previousSibling)), A(n, {
				dy: this.getLineHeight(n.nextSibling),
				x: t
			}));
		});
		let r = this.width || 0;
		if (!r) return;
		let i = (n, i) => {
			let a = n.textContent || "", o = a.replace(/([^\^])-/g, "$1- ").split(" "), s = !this.noWrap && (o.length > 1 || e.element.childNodes.length > 1), c = this.getLineHeight(i), l = Math.max(0, r - .8 * c), u = 0, d = e.actualWidth;
			if (s) {
				let a = [], s = [];
				for (; i.firstChild && i.firstChild !== n;) s.push(i.firstChild), i.removeChild(i.firstChild);
				for (; o.length;) if (o.length && !this.noWrap && u > 0 && (a.push(n.textContent || ""), n.textContent = o.join(" ").replace(/- /g, "-")), this.truncate(n, void 0, o, u === 0 && d || 0, r, l, (e, t) => o.slice(0, t).join(" ").replace(/- /g, "-")), d = e.actualWidth, u++, this.lineClamp && u >= this.lineClamp) {
					o.length && (this.truncate(n, n.textContent || "", void 0, 0, r, l, nt), n.textContent = n.textContent?.replace("…", "") + "…");
					break;
				}
				s.forEach((e) => {
					i.insertBefore(e, n);
				}), a.forEach((e) => {
					i.insertBefore($e.createTextNode(e), n);
					let r = $e.createElementNS(et, "tspan");
					r.textContent = "​", A(r, {
						dy: c,
						x: t
					}), i.insertBefore(r, n);
				});
			} else this.ellipsis && a && this.truncate(n, a, void 0, 0, r, l, nt);
		}, a = ((t) => {
			[].slice.call(t.childNodes).forEach((n) => {
				n.nodeType === tt.Node.TEXT_NODE ? i(n, t) : (n.className.baseVal.indexOf("highcharts-br") !== -1 && (e.actualWidth = 0), a(n));
			});
		});
		a(e.element);
	}
	getLineHeight(e) {
		let t = e.nodeType === tt.Node.TEXT_NODE ? e.parentElement : e;
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
			s !== "#text" && s !== "a" && (n.tagName = "tspan"), L(n, {
				attributes: i,
				style: o
			}), a && a.filter((e) => e.tagName !== "#text").forEach(t);
		};
		e.forEach(t), g(this.svgElement, "afterModifyTree", { nodes: e });
	}
	truncate(e, t, n, r, i, a, o) {
		let s = this.svgElement, { rotation: c } = s, l = [], u = n && !r ? 1 : 0, d = (t || n || "").length, f = d, p, m;
		n || (i = a);
		let h = function(t, i) {
			let a = i || t, o = e.parentNode;
			if (o && l[a] === void 0 && o.getSubStringLength) try {
				l[a] = r + o.getSubStringLength(0, n ? a + 1 : a);
			} catch {}
			return l[a];
		};
		if (s.rotation = 0, m = h(e.textContent.length), r + m > i) {
			for (; u <= d;) f = Math.ceil((u + d) / 2), n && (p = o(n, f)), m = h(f, p && p.length - 1), u === d ? u = d + 1 : m > i ? d = f - 1 : u = f;
			d === 0 ? e.textContent = "" : t && d === t.length - 1 || (e.textContent = p || o(t || n, f)), this.ellipsis && m > i && this.truncate(e, e.textContent || "", void 0, 0, i, a, nt);
		}
		n && n.splice(0, f), s.actualWidth = m, s.rotation = c;
	}
	unescapeEntities(e, t) {
		return w(this.renderer.escapes, function(n, r) {
			(!t || t.indexOf(n) === -1) && (e = e.toString().replace(new RegExp(n, "g"), r));
		}), e;
	}
}, { defaultOptions: it } = O, { charts: at, deg2rad: ot, doc: st, isFirefox: ct, isMS: lt, isWebKit: ut, noop: dt, SVG_NS: ft, symbolSizes: pt, win: mt } = K, ht, gt = class {
	constructor(e, t, n, r, i, a, o, s, c) {
		this.x = 0, this.y = 0;
		let l = this, u = l.createElement("svg").attr({
			version: "1.1",
			class: "highcharts-root"
		}), d = u.element;
		e.appendChild(d), A(e, "dir", "ltr"), e.innerHTML.indexOf("xmlns") === -1 && A(d, "xmlns", this.SVG_NS), this.box = d, this.boxWrapper = u, this.alignedObjects = [], this.url = this.getReferenceURL(), this.createElement("desc").add().element.appendChild(st.createTextNode("Created with Highcharts 13.0.0")), this.defs = this.createElement("defs").add(), this.allowHTML = a, this.forExport = i, this.styledMode = o, this.chartIndex = c || 0, this.gradients = {}, this.cache = {}, this.cacheKeys = [], this.asyncCounter = 0, this.rootFontSize = u.getStyle("font-size"), l.setSize(t, n, !1), o || (u.css(this.getStyle(r || {})), this.palette = new He(this, s || it.palette));
		let f, p;
		ct && e.getBoundingClientRect && (f = function() {
			b(e, {
				left: 0,
				top: 0
			}), p = e.getBoundingClientRect(), b(e, {
				left: Math.ceil(p.left) - p.left + "px",
				top: Math.ceil(p.top) - p.top + "px"
			});
		}, f(), l.unSubPixelFix = D(mt, "resize", f));
	}
	definition(e) {
		return new V([e]).addToDOM(this.defs.element);
	}
	getReferenceURL() {
		if ((ct || ut) && st.getElementsByTagName("base").length) {
			if (!a(ht)) {
				let e = de(), t = new V([{
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
				}]).addToDOM(st.body);
				b(t, {
					position: "fixed",
					top: 0,
					left: 0,
					zIndex: 9e5
				}), ht = st.elementFromPoint(6, 6)?.id === "hitme", st.body.removeChild(t);
			}
			if (ht) return ne(mt.location.href.split("#")[0], [/<[^>]*>/g, ""], [/([\('\)])/g, "\\$1"], [/ /g, "%20"]);
		}
		return "";
	}
	getStyle(e) {
		return this.style = L({
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
		let e = this, t = e.defs;
		return e.box = null, e.boxWrapper = e.boxWrapper.destroy(), i(e.gradients || {}), e.gradients = null, e.defs = t.destroy(), e.unSubPixelFix && e.unSubPixelFix(), e.alignedObjects.length = 0, null;
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
		let t = [`highcharts-drop-shadow-${this.chartIndex}`, ...Object.keys(e).map((t) => `${t}-${e[t]}`)].join("-").toLowerCase().replace(/[^a-z\d\-]/g, ""), n = u({
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
				"flood-opacity": Math.min(e.opacity * 5, 1),
				stdDeviation: e.width / 2
			}
		}];
	}
	buildText(e) {
		new rt(e).buildSVG();
	}
	getContrast(e) {
		if (e === "transparent") return "#000000";
		let t = F.parse(e).rgba;
		if (s(t[0]) || !F.useColorMix) {
			let e = t.map((e) => {
				let t = e / 255;
				return t <= .04 ? t / 12.92 : ((t + .055) / 1.055) ** 2.4;
			}), n = .2126 * e[0] + .7152 * e[1] + .0722 * e[2];
			return 1.05 / (n + .05) > (n + .05) / .05 ? "#FFFFFF" : "#000000";
		}
		return "color(from " + e + " srgb clamp(0,calc(9e9*(0.5 - (0.2126*r + 0.7152*g + 0.0722*b))),1) clamp(0,calc(9e9*(0.5 - (0.2126*r + 0.7152*g + 0.0722*b))),1) clamp(0,calc(9e9*(0.5 - (0.2126*r + 0.7152*g + 0.0722*b))),1))";
	}
	button(e, t, n, r, i = {}, a, o, s, c, l) {
		let f = this.label(e, t, n, c, void 0, void 0, l, void 0, "button"), p = this.styledMode, m = arguments, h = 0;
		i = u(it.global.buttonTheme, i), p && (delete i.fill, delete i.stroke, delete i["stroke-width"]);
		let g = i.states || {}, _ = i.style || {};
		delete i.states, delete i.style;
		let v = [V.filterUserAttributes(i)], y = [_];
		return p || [
			"hover",
			"select",
			"disabled"
		].forEach((e, t) => {
			v.push(u(v[0], V.filterUserAttributes(m[t + 5] || g[e] || {}))), y.push(v[t + 1].style), delete v[t + 1].style;
		}), D(f.element, lt ? "mouseover" : "mouseenter", function() {
			h !== 3 && f.setState(1);
		}), D(f.element, lt ? "mouseout" : "mouseleave", function() {
			h !== 3 && f.setState(h);
		}), f.setState = (e = 0) => {
			if (e !== 1 && (f.state = h = e), f.removeClass(/highcharts-button-(normal|hover|pressed|disabled)/).addClass("highcharts-button-" + [
				"normal",
				"hover",
				"pressed",
				"disabled"
			][e]), !p) {
				f.attr(v[e]);
				let t = y[e];
				d(t) && f.css(t);
			}
		}, f.attr(v[0]), p || (f.css(L({ cursor: "default" }, _)), l && f.text.css({ pointerEvents: "none" })), f.on("touchstart", (e) => e.stopPropagation()).on("click", function(e) {
			h !== 3 && r?.call(f, e);
		});
	}
	crispLine(e, t) {
		let [n, r] = e;
		return a(n[1]) && n[1] === r[1] && (n[1] = r[1] = pe(n[1], t)), a(n[2]) && n[2] === r[2] && (n[2] = r[2] = pe(n[2], t)), e;
	}
	path(e) {
		let t = this.styledMode ? {} : { fill: "none" };
		return S(e) ? t.d = e : d(e) && L(t, e), this.createElement("path").attr(t);
	}
	circle(e, t, n) {
		let r = d(e) ? e : e === void 0 ? {} : {
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
		d(e) ? (o = e, t = o.y, n = o.r, r = o.innerR, i = o.start, a = o.end, e = o.x) : o = {
			innerR: r,
			start: i,
			end: a
		};
		let s = this.symbol("arc", e, t, n, n, o);
		return s.r = n, s;
	}
	rect(e, t, n, r, i, a) {
		let o = d(e) ? e : e === void 0 ? {} : {
			x: e,
			y: t,
			r: i,
			width: Math.max(n || 0, 0),
			height: Math.max(r || 0, 0)
		}, s = this.createElement("rect");
		return this.styledMode || (a !== void 0 && (o["stroke-width"] = a, L(o, s.crisp(o))), o.fill = "none"), s.rSetter = function(e, t, n) {
			s.r = e, A(n, {
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
		let r = this;
		r.width = e, r.height = t, r.boxWrapper.animate({
			width: e,
			height: t
		}, {
			step: function() {
				this.attr({ viewBox: "0 0 " + this.attr("width") + " " + this.attr("height") });
			},
			duration: N(n, !0) ? void 0 : 0
		}), r.alignElements();
	}
	g(e) {
		let t = this.createElement("g");
		return e ? t.attr({ class: "highcharts-" + e }) : t;
	}
	image(e, t, n, r, i, a) {
		let o = { preserveAspectRatio: "none" };
		s(t) && (o.x = t), s(n) && (o.y = n), s(r) && (o.width = r), s(i) && (o.height = i);
		let c = this.createElement("image").attr(o), l = function(t) {
			c.attr({ href: e }), a.call(c, t);
		};
		if (a) {
			c.attr({ href: "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" });
			let t = new mt.Image();
			D(t, "load", l), t.src = e, t.complete && l({});
		} else c.attr({ href: e });
		return c;
	}
	symbol(e, t, n, i, o, s) {
		let c = this, l = /^url\((.*?)\)$/, u = l.test(e), d = !u && (this.symbols[e] ? e : "circle"), f = d && this.symbols[d], p, m, h, g;
		if (f) typeof t == "number" && (m = f.call(this.symbols, t || 0, n || 0, i || 0, o || 0, s)), p = this.path(m), c.styledMode || p.attr("fill", "none"), L(p, {
			symbolName: d || void 0,
			x: t,
			y: n,
			width: i,
			height: o
		}), s && L(p, s);
		else if (u) {
			h = e.match(l)[1];
			let i = p = this.image(h);
			i.imgwidth = N(s?.width, pt[h]?.width), i.imgheight = N(s?.height, pt[h]?.height), g = (e) => e.attr({
				width: e.width,
				height: e.height
			}), ["width", "height"].forEach((e) => {
				i[`${e}Setter`] = function(e, t) {
					this[t] = e;
					let { alignByTranslate: n, element: r, width: i, height: a, imgwidth: o, imgheight: c } = this, l = t === "width" ? o : c, u = 1;
					s && s.backgroundSize === "within" && i && a && o && c ? (u = Math.min(i / o, a / c), A(r, {
						width: Math.round(o * u),
						height: Math.round(c * u)
					})) : r && l && r.setAttribute(t, l), !n && o && c && this.translate(((i || 0) - o * u) / 2, ((a || 0) - c * u) / 2);
				};
			}), a(t) && i.attr({
				x: t,
				y: n
			}), i.isImg = !0, a(i.imgwidth) && a(i.imgheight) ? g(i) : (i.attr({
				width: 0,
				height: 0
			}), r("img", {
				onload: function() {
					let e = at[c.chartIndex];
					this.width === 0 && (b(this, {
						position: "absolute",
						top: "-999em"
					}), st.body.appendChild(this)), pt[h] = {
						width: this.width,
						height: this.height
					}, i.imgwidth = this.width, i.imgheight = this.height, i.element && g(i), this.parentNode && this.parentNode.removeChild(this), c.asyncCounter--, !c.asyncCounter && e && !e.hasLoaded && e.onload();
				},
				src: h
			}), this.asyncCounter++);
		}
		return p;
	}
	clipRect(e, t, n, r) {
		return this.rect(e, t, n, r, 0);
	}
	text(e, t, n, r) {
		let i = this, o = {};
		if (r && (i.allowHTML || !i.forExport)) return i.html(e, t, n);
		o.x = Math.round(t || 0), n && (o.y = Math.round(n)), a(e) && (o.text = e);
		let s = i.createElement("text").attr(o);
		return (!r || i.forExport && !i.allowHTML) && (s.xSetter = function(e, t, n) {
			let r = n.getElementsByTagName("tspan"), i = n.getAttribute(t);
			for (let n = 0, a; n < r.length; n++) a = r[n], a.getAttribute(t) === i && a.setAttribute(t, e);
			n.setAttribute(t, e);
		}), s;
	}
	fontMetrics(e) {
		let t = s(e) ? e : _(we.prototype.getStyle.call(e, "font-size") || 0), n = t < 24 ? t + 3 : Math.round(t * 1.2);
		return {
			h: n,
			b: Math.round(n * .8),
			f: t
		};
	}
	rotCorr(e, t, n) {
		let r = e;
		return t && n && (r = Math.max(r * Math.cos(t * ot), 4)), {
			x: -e / 3 * Math.sin(t * ot),
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
		for (let i = 0; i < e.length; i++) B(n[0]) && s(e[i]) && n.length === r[n[0].toUpperCase()] && e.splice(i, 0, n[0].replace("M", "L").replace("m", "l")), typeof e[i] == "string" && (n.length && t.push(n.slice(0)), n.length = 0), n.push(e[i]);
		return t.push(n.slice(0)), t;
	}
	label(e, t, n, r, i, a, o, s, c) {
		return new Ue(this, e, t, n, r, i, a, o, s, c);
	}
	alignElements() {
		this.alignedObjects.forEach((e) => e.align());
	}
};
L(gt.prototype, {
	Element: we,
	SVG_NS: ft,
	escapes: {
		"&": "&amp;",
		"<": "&lt;",
		">": "&gt;",
		"'": "&#39;",
		"\"": "&quot;"
	},
	symbols: Qe,
	draw: dt
}), K.Renderer = gt;
//#endregion
//#region node_modules/highcharts/es-modules/Core/Chart/Chart.js
var { animate: _t, animObject: vt, setAnimation: yt } = R, { defaultOptions: bt } = O, { numberFormat: xt } = I, { registerEventOptions: St } = ye, { charts: Ct, doc: wt, marginNames: Tt, win: Et } = K, { seriesTypes: Dt } = W, Ot = class e {
	static chart(t, n, r) {
		let i = new e(t, n, r);
		return i.promise || i;
	}
	constructor(e, t, n) {
		if (this.sharedClips = {}, !wt) {
			U(36, !1, this);
			return;
		}
		let r = [...arguments];
		(B(e) || e.nodeName) && (this.renderTo = r.shift()), this.init(r[0], r[1]);
	}
	setZoomOptions() {
		let e = this, t = e.options.chart, n = t.zooming;
		e.zooming = {
			...n,
			type: N(t.zoomType, n.type),
			key: N(t.zoomKey, n.key),
			pinchType: N(t.pinchType, n.pinchType),
			singleTouch: N(t.zoomBySingleTouch, n.singleTouch, !1),
			resetButton: u(n.resetButton, t.resetZoomButton)
		};
	}
	init(e, t) {
		g(this, "init", { args: arguments }, function() {
			let n = u(bt, e), r = n.chart, i = this.renderTo || r.renderTo;
			this.userOptions = L({}, e), (this.renderTo = B(i) ? wt.getElementById(i) : i) || U(13, !0, this), this.margin = [], this.spacing = [], this.labelCollectors = [], t === !0 ? this.promise = new Promise((e) => {
				this.callback = e;
			}) : this.callback = t, this.isResizing = 0, this.options = n, this.axes = [], this.series = [], this.locale = n.lang.locale ?? this.renderTo.closest("[lang]")?.lang, this.time = new se(L(n.time || {}, { locale: this.locale }), n.lang), n.time = this.time.options, this.numberFormatter = (r.numberFormatter || xt).bind(this), this.styledMode = r.styledMode, this.hasCartesianSeries = r.showAxes;
			let a = this;
			a.index = Ct.length, a.dataTable = a.getDataTable(n), Ct.push(a), K.chartCount++, St(this, r), a.xAxis = [], a.yAxis = [], a.pointCount = a.colorCounter = a.symbolCounter = 0, this.setZoomOptions(), g(a, "afterInit"), a.firstRender();
		});
	}
	getDataTable(e) {
		return (e.dataTable ? k(e.dataTable) : []).map((e) => e.isDataTable ? e : new _e(e));
	}
	initSeries(e) {
		let t = this, n = t.options.chart, r = e.type || n.type, i = Dt[r];
		i || U(17, !0, t, { missingModuleFor: r });
		let a = new i();
		return typeof a.init == "function" && a.init(t, e), a;
	}
	orderItems(e, t = 0) {
		let n = this[e], r = this.options[e] = k(this.options[e]).slice(), i = this.userOptions[e] = this.userOptions[e] ? k(this.userOptions[e]).slice() : [];
		if (this.hasRendered && (r.splice(t), i.splice(t)), n) for (let e = t, a = n.length; e < a; ++e) {
			let t = n[e];
			t && (t.index = e, t instanceof be && (t.name = t.getName()), t.options.isInternal || (r[e] = t.options, i[e] = t.userOptions));
		}
	}
	getClipBox(e, t) {
		let n = this.inverted, { xAxis: r, yAxis: i } = e || {}, { x: a, y: o, width: s, height: c } = u(this.clipBox);
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
		return g(this, "afterIsInsidePlot", m), m.isInsidePlot;
	}
	redraw(e) {
		g(this, "beforeRedraw");
		let t = this, n = t.hasCartesianSeries ? t.axes : t.colorAxis || [], r = t.series, i = t.pointer, a = t.legend, o = t.userOptions.legend, s = t.renderer, c = s.isHidden(), l = [], u, d, f, p = t.isDirtyBox, m = t.isDirtyLegend, h;
		for (s.rootFontSize = s.boxWrapper.getStyle("font-size"), t.setResponsive && t.setResponsive(!1), yt(t.hasRendered ? e : !1, t), c && t.temporaryDisplay(), t.layOutTitles(!1), f = r.length; f--;) if (h = r[f], (h.options.stacking || h.options.centerInCategory) && (d = !0, h.isDirty)) {
			u = !0;
			break;
		}
		if (u) for (f = r.length; f--;) h = r[f], h.options.stacking && (h.isDirty = !0);
		r.forEach(function(e) {
			e.isDirty && (e.options.legendType === "point" ? (typeof e.updateTotals == "function" && e.updateTotals(), m = !0) : o && (o.labelFormatter || o.labelFormat) && (m = !0)), e.isDirtyData && g(e, "updatedData");
		}), m && a && a.options.enabled && (a.render(), t.isDirtyLegend = !1), d && t.getStacks(), n.forEach(function(e) {
			e.updateNames(), e.setScale();
		}), t.getMargins(), n.forEach(function(e) {
			e.isDirty && (p = !0);
		}), n.forEach(function(e) {
			let t = e.min + "," + e.max;
			e.extKey !== t && (e.extKey = t, l.push(function() {
				g(e, "afterSetExtremes", L(e.eventArgs, e.getExtremes())), delete e.eventArgs;
			})), (p || d) && e.redraw();
		}), p && t.drawChartBox(), g(t, "predraw"), r.forEach(function(e) {
			(p || e.isDirty) && e.visible && e.redraw(), e.isDirtyData = !1;
		}), i && i.reset(!0), s.draw(), n.forEach((e) => {
			e.saveOld();
		}), g(t, "redraw"), g(t, "render"), c && t.temporaryDisplay(!0), l.forEach(function(e) {
			e.call();
		});
	}
	get(e) {
		let t = this.series;
		function n(t) {
			return t.id === e || t.options && t.options.id === e;
		}
		let r = m(this.axes, n) || m(this.series, n);
		for (let e = 0; !r && e < t.length; e++) r = m(t[e].points || [], n);
		return r;
	}
	createAxes() {
		let e = this.userOptions;
		g(this, "createAxes");
		for (let t of ["xAxis", "yAxis"]) {
			let n = e[t] = k(e[t] || {});
			for (let e of n) new Le(this, e, t);
		}
		g(this, "afterCreateAxes");
	}
	getSelectedPoints() {
		return this.series.reduce((e, t) => (t.getPointsCollection().forEach((t) => {
			N(t.selectedStaging, t.selected) && e.push(t);
		}), e), []);
	}
	getSelectedSeries() {
		return this.series.filter((e) => e.selected);
	}
	setTitle(e, t, n) {
		this.applyDescription("title", e), this.applyDescription("subtitle", t), this.applyDescription("caption", void 0), this.layOutTitles(n);
	}
	applyDescription(e, t) {
		let n = this, r = this.options[e] = u(this.options[e], t), i = this[e];
		i && t && (this[e] = i = i.destroy()), r && !i && (i = this.renderer.text(r.text, 0, 0, r.useHTML).attr({
			align: r.align,
			class: "highcharts-" + e,
			zIndex: r.zIndex || 4
		}).css({
			textOverflow: "ellipsis",
			whiteSpace: "nowrap"
		}).add(), i.update = function(t, r) {
			n.applyDescription(e, t), n.layOutTitles(r);
		}, this.styledMode || i.css(L(e === "title" ? { fontSize: this.options.isStock ? "1em" : "1.2em" } : {}, r.style)), i.textPxLength = i.getBBox().width, i.css({ whiteSpace: r.style?.whiteSpace }), this[e] = i);
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
			let n = this[e], a = this.options[e], s = u(i), c = n?.textPxLength || 0;
			if (n && a) {
				g(this, "layOutTitle", {
					alignTo: s,
					key: e,
					textPxLength: c
				});
				let i = r.fontMetrics(n), l = i.b, d = i.h, f = a.verticalAlign || "top", p = f === "top", m = p && a.minScale || 1, h = e === "title" ? p ? -3 : 0 : p ? t[0] + 2 : 0, _ = Math.min(s.width / c, 1), v = Math.max(m, _), y = u({ y: f === "bottom" ? l : h + l }, a), b = (a.width || (_ > m ? this.chartWidth : s.width) / v) + "px";
				y.align ??= e === "title" ? _ < m ? "left" : "center" : this.title?.alignValue, n.alignValue !== y.align && (n.placed = !1);
				let x = Math.round(n.css({ width: b }).getBBox(a.useHTML).height);
				if (y.height = x, n.align(y, !1, s).attr({
					align: y.align,
					scaleX: v,
					scaleY: v,
					"transform-origin": `${s.x + c * v * o(y.align)} ${d}`
				}), !a.floating) {
					let e = x * (x < d * 1.2 ? 1 : v);
					f === "top" ? t[0] = Math.ceil(t[0] + e) : f === "bottom" && (t[2] = Math.ceil(t[2] + e));
				}
			}
		}, this), t[0] && (n.title?.verticalAlign || "top") === "top" && (t[0] += n.title?.margin || 0), t[2] && n.caption?.verticalAlign === "bottom" && (t[2] += n.caption?.margin || 0);
		let a = !this.titleOffset || this.titleOffset.join(",") !== t.join(",");
		this.titleOffset = t, g(this, "afterLayOutTitles"), !this.isDirtyBox && a && (this.isDirtyBox = this.isDirtyLegend = a, this.hasRendered && e && this.isDirtyBox && this.redraw());
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
		let e = this, t = e.options.chart, n = t.width, r = t.height, i = e.getContainerBox(), a = i.height <= 1 || !e.renderTo.parentElement?.style.height && e.renderTo.style.height === "100%";
		e.chartWidth = Math.max(0, n || i.width || 600), e.chartHeight = Math.max(0, z(r, e.chartWidth) || (a ? 400 : i.height)), e.containerBox = i;
	}
	temporaryDisplay(e) {
		let t = this.renderTo, n;
		if (e) for (; t?.style;) t.hcOrigStyle && (b(t, t.hcOrigStyle), delete t.hcOrigStyle), t.hcOrigDetached && (wt.body.removeChild(t), t.hcOrigDetached = !1), t = t.parentNode;
		else for (; t?.style && (!wt.body.contains(t) && !t.parentNode && (t.hcOrigDetached = !0, wt.body.appendChild(t)), (he(t, "display", !1) === "none" || t.hcOrigDetached) && (t.hcOrigStyle = {
			display: t.style.display,
			height: t.style.height,
			overflow: t.style.overflow
		}, n = {
			display: "block",
			overflow: "hidden"
		}, t !== this.renderTo && (n.height = 0), b(t, n), t.offsetWidth || t.style.setProperty("display", "block", "important")), t = t.parentNode, t !== wt.body););
	}
	setClassName(e) {
		this.container.className = "highcharts-container " + (e || "");
	}
	getContainer() {
		let e = this, t = e.options, n = t.chart, i = "data-highcharts-chart", a = de(), o = e.renderTo, c, l = _(A(o, i));
		s(l) && Ct[l] && Ct[l].hasRendered && Ct[l].destroy(), A(o, i, e.index), o.innerHTML = V.emptyHTML, !n.skipClone && !o.offsetWidth && e.temporaryDisplay(), e.getChartSize();
		let u = e.chartHeight, d = e.chartWidth;
		e.styledMode || b(o, { overflow: "hidden" }), e.styledMode || (c = L({
			position: "relative",
			overflow: "hidden",
			width: d + "px",
			height: u + "px",
			textAlign: "left",
			lineHeight: "normal",
			zIndex: 0,
			"-webkit-tap-highlight-color": "rgba(0,0,0,0)",
			userSelect: "none",
			"touch-action": "manipulation",
			outline: "none",
			padding: "0px"
		}, n.style || {}));
		let f = r("div", { id: a }, c, o);
		if (e.container = f, e.getChartSize(), d !== e.chartWidth && (d = e.chartWidth, e.styledMode || b(f, { width: N(n.style?.width, d + "px") })), e._cursor = f.style.cursor, e.renderer = new gt(f, d, u, void 0, n.forExport, t.exporting?.allowHTML, e.styledMode, t.palette, e.index), e.containerBox = e.getContainerBox(), yt(void 0, e), e.setClassName(n.className), !e.styledMode) e.renderer.setStyle(n.style), this.palette = e.renderer.palette;
		else for (let e in t.defs) this.renderer.definition(t.defs[e]);
		g(this, "afterGetContainer");
	}
	getMargins(e) {
		let { spacing: t, margin: n, titleOffset: r } = this;
		this.resetMargins(), r[0] && !a(n[0]) && (this.plotTop = Math.max(this.plotTop, r[0] + t[0])), r[2] && !a(n[2]) && (this.marginBottom = Math.max(this.marginBottom, r[2] + t[2])), this.legend?.display && this.legend.adjustMargins(n, t), g(this, "getMargins"), e || this.getAxisMargins();
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
		e.hasCartesianSeries ? i(e.axes) : n?.length && i(n), Tt.forEach((n, i) => {
			a(r[i]) || (e[n] += t[i]);
		}), e.setChartSize();
	}
	getOptions() {
		return h(this.userOptions, bt);
	}
	reflow(e) {
		let t = this, r = t.containerBox, i = t.getContainerBox();
		delete t.pointer?.chartPosition, !t.exporting?.isPrinting && !t.isResizing && r && i.width && ((i.width !== r.width || i.height !== r.height) && (n(t.reflowTimeout), t.reflowTimeout = ue(function() {
			if (t.container) {
				t.setSize(void 0, void 0, !1);
				let e = t.containerBox;
				e && (e.height = t.chartHeight);
			}
		}, e ? 100 : 0)), t.containerBox = i);
	}
	setReflow() {
		let e = this, t = (t) => {
			e.options?.chart.reflow && e.hasLoaded && e.reflow(t);
		};
		if (typeof ResizeObserver == "function") new ResizeObserver(t).observe(e.renderTo);
		else {
			let e = D(Et, "resize", t);
			D(this, "destroy", e);
		}
	}
	setSize(e, t, n) {
		let r = this, i = r.renderer;
		r.isResizing += 1, yt(n, r);
		let a = i.globalAnimation;
		r.oldChartHeight = r.chartHeight, r.oldChartWidth = r.chartWidth, e !== void 0 && (r.options.chart.width = e), t !== void 0 && (r.options.chart.height = t), r.getChartSize();
		let { chartWidth: o, chartHeight: s, scrollablePixelsX: c = 0, scrollablePixelsY: l = 0 } = r;
		(r.isDirtyBox || o !== r.oldChartWidth || s !== r.oldChartHeight) && (r.styledMode || (a ? _t : b)(r.container, {
			width: `${o + c}px`,
			height: `${s + l}px`
		}, a), r.setChartSize(!0), i.setSize(o, s, a), r.axes.forEach(function(e) {
			e.isDirty = !0, e.setScale();
		}), r.isDirtyLegend = !0, r.isDirtyBox = !0, r.layOutTitles(), r.getMargins(), r.redraw(a), r.oldChartHeight = void 0, g(r, "resize"), setTimeout(() => {
			r && g(r, "endResize");
		}, vt(a).duration)), --r.isResizing;
	}
	setChartSize(e) {
		let t = this, { chartHeight: n, chartWidth: r, clipOffset: i, inverted: a, spacing: o, renderer: s } = t, c = Math[a ? "floor" : "round"], l, u, d, f;
		if (t.plotLeft = l = Math.round(t.plotLeft), t.plotTop = u = Math.round(t.plotTop), t.plotWidth = d = Math.max(0, Math.round(r - l - (t.marginRight ?? 0))), t.plotHeight = f = Math.max(0, Math.round(n - u - (t.marginBottom ?? 0))), t.plotSizeX = a ? f : d, t.plotSizeY = a ? d : f, t.spacingBox = s.spacingBox = {
			x: o[3],
			y: o[0],
			width: r - o[3] - o[1],
			height: n - o[0] - o[2]
		}, t.plotBox = s.plotBox = {
			x: l,
			y: u,
			width: d,
			height: f
		}, i && (t.clipBox = {
			x: c(i[a ? 2 : 3]),
			y: c(i[+!!a]),
			width: c(t.plotSizeX - i[+!a] - i[a ? 2 : 3]),
			height: c(t.plotSizeY - i[+!!a] - i[a ? 3 : 2])
		}), !e) {
			for (let e of t.axes) e.setAxisSize(), e.setAxisTranslation();
			s.alignElements();
		}
		g(t, "afterSetChartSize", { skipAxes: e });
	}
	resetMargins() {
		g(this, "resetMargins");
		let e = this, t = e.options.chart, n = t.plotBorderWidth || 0, r = Math.round(n) / 2;
		["margin", "spacing"].forEach((n) => {
			let r = t[n], i = d(r) ? r : [
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
		}), Tt.forEach((t, n) => {
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
		let e = this, t = e.options.chart, { backgroundColor: n, plotBackgroundColor: r, plotBackgroundImage: i, plotBorderRadius: a = 0, shadow: o } = t, { chartWidth: s, chartHeight: c, clipBox: l, clipOffset: d, clipRect: f, plotBGImage: p, plotBox: m, plotLeft: h, plotTop: _, plotWidth: v, plotHeight: y, renderer: b, styledMode: x } = e, S = e.chartBackground, C = e.plotBackground, w = e.plotBorder, T, E, D, O = "animate";
		S || (e.chartBackground = S = b.rect().addClass("highcharts-background").add(), O = "attr"), x ? T = E = S.strokeWidth() : (T = t.borderWidth || 0, E = T + (o ? 8 : 0), D = { fill: n || "none" }, (T || S["stroke-width"]) && (D.stroke = t.borderColor, D["stroke-width"] = T), S.attr(D).shadow(o)), S[O]({
			x: E / 2,
			y: E / 2,
			width: s - E - T % 2,
			height: c - E - T % 2,
			r: t.borderRadius
		}), O = "animate", C || (O = "attr", e.plotBackground = C = b.rect().addClass("highcharts-plot-background").add()), C[O]({
			...m,
			r: a
		}), x || (C.attr({ fill: r || "none" }).shadow(t.plotShadow), i && (p ? (i !== p.attr("href") && p.attr("href", i), p.animate(m)) : e.plotBGImage = b.image(i, h, _, v, y).add())), f ? f.animate({
			width: l.width,
			height: l.height
		}) : e.clipRect = b.clipRect(l), O = "animate", w || (O = "attr", e.plotBorder = w = b.rect().addClass("highcharts-plot-border").attr({ zIndex: 1.5 }).add()), w.attr(x ? void 0 : {
			stroke: t.plotBorderColor,
			"stroke-width": t.plotBorderWidth || 0,
			fill: "none"
		})[O]({ r: a });
		let k = w.strokeWidth(), A = u(w.crisp(m, -k));
		if (d && !x) {
			let e = d[0] - k / 2, t = d[3] - k / 2;
			A.x -= t, A.y -= e, A.width += t + d[1] - k / 2, A.height += e + d[2] - k / 2;
		}
		w[O](A), ["plotClipOuter", "plotClipInner"].forEach((t, n) => {
			let r = e[t], i = n ? -k : k;
			r?.[a ? O : "attr"]({
				x: A.x - i / 2,
				y: A.y - i / 2,
				width: A.width + i,
				height: A.height + i,
				r: a ? a + i / 2 : 0
			}), r?.parentGroup?.attr({ display: a ? "" : "none" });
		}), e.isDirtyBox = !1, g(this, "afterDrawChartBox");
	}
	propFromSeries() {
		let e = this, t = e.options.chart, n = e.options.series, r, i, a;
		[
			"inverted",
			"angular",
			"polar"
		].forEach(function(o) {
			for (i = Dt[t.type], a = t[o] || i && i.prototype[o], r = n?.length; !a && r--;) i = Dt[n[r].type], i && i.prototype[o] && (a = !0);
			e[o] = a;
		});
	}
	linkSeries(e) {
		let t = this, n = t.series;
		n.forEach(function(e) {
			e.linkedSeries.length = 0;
		}), n.forEach(function(e) {
			let { linkedTo: r } = e.options, i = B(r) && (r === ":previous" ? n[e.index - 1] : t.get(r));
			i && i.linkedParent !== e && (i.linkedSeries.push(e), e.linkedParent = i, e.visible = e.options.visible ?? i.options.visible ?? e.visible);
		}), g(this, "afterLinkSeries", { isUpdating: e });
	}
	renderSeries() {
		this.series.forEach(function(e) {
			e.translate(), e.render();
		});
	}
	render() {
		let e = this, t = e.axes, n = e.colorAxis, r = e.renderer, { axisLayoutRuns: i = 2, plotBorderRadius: a } = e.options.chart, o = (e) => {
			e.forEach((e) => {
				e.visible && e.render();
			});
		}, c = 0, l = !0, u, d = 0;
		a && (e.plotClipOuter ||= r.clipRect(), e.plotClipInner ||= r.clipRect()), e.setTitle(), g(e, "beforeMargins"), e.getStacks?.(), e.getMargins(!0), e.setChartSize();
		for (let n of t) {
			let { options: t } = n, { labels: r, offset: i } = t;
			if (e.hasCartesianSeries && n.horiz && n.visible && r.enabled && n.series.length && n.coll !== "colorAxis" && !n.isRadial) {
				c = t.tickLength, n.createGroups();
				let e = new Oe(n, 0, "", !0), a = e.createLabel("x", r);
				if (e.destroy(), a && N(r.reserveSpace, !s(t.crossing)) && (c = a.getBBox().height + r.distance + Math.max(s(i) ? i : 0, 0)), c) {
					a?.destroy();
					break;
				}
			}
		}
		for (e.plotHeight = Math.max(e.plotHeight - c, 0); (l || u || i > 1) && d < i;) {
			let n = e.plotWidth, r = e.plotHeight, i = [1.05, 1.1];
			for (let e of t) {
				let t = +(e.horiz || 0);
				if (d === 0) {
					e.setScale();
					let n = e.tickPositions?.info?.match;
					n && (i[t] = Math.min(n, i[t]));
				} else (t && l || !t && u) && e.setTickInterval(!0);
			}
			d === 0 ? e.getAxisMargins() : e.getMargins(), l = n / e.plotWidth > (d ? 1 : i[1]), u = r / e.plotHeight > (d ? 1 : i[0]), d++;
		}
		e.drawChartBox(), e.hasCartesianSeries ? o(t) : n?.length && o(n), e.seriesGroup ||= r.g("series-group").attr({ zIndex: 3 }).shadow(e.options.chart.seriesGroupShadow).add(), e.renderSeries(), e.addCredits(), e.setResponsive && e.setResponsive(), e.hasRendered = !0;
	}
	addCredits(e) {
		let t = this, n = u(!0, this.options.credits, e);
		n.enabled && !this.credits && (this.credits = this.renderer.text(n.text + (this.mapCredits || ""), 0, 0, n.useHTML).addClass("highcharts-credits").on("click", function(e) {
			g(t, "creditsClick", e, () => {
				n.href && (Et.location.href = n.href);
			});
		}).attr({
			align: n.position.align,
			zIndex: 8
		}), n.events?.click && D(t, "creditsClick", n.events.click), t.styledMode || this.credits.css(n.style), this.credits.add().align(n.position), this.credits.update = function(e) {
			t.credits = t.credits.destroy(), t.addCredits(e);
		});
	}
	destroy() {
		let e = this, n = e.axes, r = e.series, i = e.container, a = i?.parentNode, o;
		for (g(e, "destroy"), e.renderer.forExport ? t(Ct, e) : Ct[e.index] = void 0, K.chartCount--, e.renderTo.removeAttribute("data-highcharts-chart"), H(e), o = n.length; o--;) n[o] = n[o].destroy();
		for (this.scroller?.destroy?.(), o = r.length; o--;) r[o] = r[o].destroy();
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
		].forEach((t) => {
			e[t] = e[t]?.destroy?.();
		}), i && (i.innerHTML = V.emptyHTML, H(i), a && re(i)), w(e, function(t, n) {
			delete e[n];
		});
	}
	firstRender() {
		let e = this, t = e.options;
		e.getContainer(), e.resetMargins(), e.setChartSize(), e.propFromSeries(), e.createAxes();
		let n = S(t.series) ? t.series : [];
		t.series = [], n.forEach(function(t) {
			e.initSeries(t);
		}), e.linkSeries(), g(e, "beforeRender"), e.render(), e.pointer?.getChartPosition(), !e.renderer.asyncCounter && !e.hasLoaded && e.onload(), e.temporaryDisplay(!0);
	}
	onload() {
		this.callbacks.concat([this.callback]).forEach(function(e) {
			e && this.index !== void 0 && e.apply(this, [this]);
		}, this), g(this, "load"), g(this, "render"), a(this.index) && this.setReflow(), this.warnIfA11yModuleNotLoaded(), this.warnIfCSSNotLoaded(), this.hasLoaded = !0;
	}
	warnIfA11yModuleNotLoaded() {
		let { options: e, title: t } = this;
		e && !this.accessibility && (this.renderer.boxWrapper.attr({
			role: "img",
			"aria-label": (t?.element.textContent || "").replace(/</g, "&lt;")
		}), e.accessibility && e.accessibility.enabled === !1 || U("Highcharts warning: Consider including the \"accessibility.js\" module to make your chart more usable for people with disabilities. Set the \"accessibility.enabled\" option to false to remove this warning. See https://www.highcharts.com/docs/accessibility/accessibility-module.", !1, this));
	}
	warnIfCSSNotLoaded() {
		this.styledMode && Et.getComputedStyle(this.container).zIndex !== "0" && U(35, !1, this);
	}
	addSeries(e, t, n) {
		let r = this, i;
		return e && (t = N(t, !0), g(r, "addSeries", { options: e }, function() {
			i = r.initSeries(e), r.isDirtyLegend = !0, r.linkSeries(), g(r, "afterAddSeries", { series: i }), t && r.redraw(n);
		})), i;
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
		let n = new Le(this, t.axis, e);
		return N(t.redraw, !0) && this.redraw(t.animation), n;
	}
	showLoading(e) {
		let t = this, n = t.options, i = n.loading, a = i?.style ?? {}, o = function() {
			s && b(s, {
				left: a.left ?? t.plotLeft + "px",
				top: a.top ?? t.plotTop + "px",
				width: a.width ?? t.plotWidth + "px",
				height: a.height ?? t.plotHeight + "px"
			});
		}, s = t.loadingDiv, c = t.loadingSpan;
		s || (t.loadingDiv = s = r("div", { className: "highcharts-loading highcharts-loading-hidden" }, null, t.container)), c || (t.loadingSpan = c = r("span", { className: "highcharts-loading-inner" }, null, s), D(t, "redraw", o)), s.className = "highcharts-loading", V.setElementHTML(c, N(e, n.lang.loading, "")), t.styledMode || (b(s, L(a, { zIndex: 10 })), b(c, i?.labelStyle ?? {}), t.loadingShown || (b(s, {
			opacity: 0,
			display: ""
		}), _t(s, { opacity: a.opacity ?? .5 }, { duration: i?.showDuration ?? 0 }))), t.loadingShown = !0, o();
	}
	hideLoading() {
		let e = this.options, t = this.loadingDiv;
		t && (t.className = "highcharts-loading highcharts-loading-hidden", this.styledMode || _t(t, { opacity: 0 }, {
			duration: e.loading?.hideDuration ?? 100,
			complete: function() {
				b(t, { display: "none" });
			}
		})), this.loadingShown = !1;
	}
	update(e, t, n, r) {
		let i = this, o = {
			credits: "addCredits",
			title: "setTitle",
			subtitle: "setSubtitle",
			caption: "setCaption"
		}, c = e.isResponsiveOptions, l = [], d, f, p;
		g(i, "update", { options: e }), c || i.setResponsive(!1, !0), e = h(e, i.options), i.userOptions = u(i.userOptions, e);
		let m = e.chart;
		m && (u(!0, i.options.chart, m), this.setZoomOptions(), "className" in m && i.setClassName(m.className), ("inverted" in m || "polar" in m || "type" in m) && (i.propFromSeries(), d = !0), "alignTicks" in m && (d = !0), "events" in m && St(this, m), w(m, function(e, t) {
			i.propsRequireUpdateSeries.indexOf("chart." + t) !== -1 && (f = !0), i.propsRequireDirtyBox.indexOf(t) !== -1 && (i.isDirtyBox = !0), i.propsRequireReflow.indexOf(t) !== -1 && (i.isDirtyBox = !0, c || (p = !0));
		}), !i.styledMode && m.style && i.renderer.setStyle(i.options.chart.style || {})), !i.styledMode && e.colors && (this.options.colors = e.colors), w(e, function(t, n) {
			i[n] && typeof i[n].update == "function" ? i[n].update(t, !1) : typeof i[o[n]] == "function" ? i[o[n]](t) : n !== "colors" && i.collectionsWithUpdate.indexOf(n) === -1 && u(!0, i.options[n], e[n]), n !== "chart" && i.propsRequireUpdateSeries.indexOf(n) !== -1 && (f = !0);
		}), this.collectionsWithUpdate.forEach((t) => {
			e[t] && (k(e[t]).forEach((e, r) => {
				if (!e) return;
				let o = a(e.id), s;
				o && (s = i.get(e.id)), !s && i[t] && (s = i[t][N(e.index, r)], s && (o && a(s.options.id) || s.options.isInternal) && (s = void 0)), s && s.coll === t && (s.update(e, !1), n && (s.touched = !0)), !s && n && i.collectionsWithInit[t] && (i.collectionsWithInit[t][0].apply(i, [e].concat(i.collectionsWithInit[t][1] || [], [!1])).touched = !0);
			}), n && i[t].forEach((e) => {
				!e.touched && !e.options.isInternal ? l.push(e) : delete e.touched;
			}));
		}), l.forEach((e) => {
			e.chart && e.remove && e.remove(!1);
		}), d && i.axes.forEach(function(e) {
			e.update({}, !1);
		}), f && i.series.forEach((e) => {
			e.chart && e.update({}, !1);
		});
		let _ = m?.width, v = m && (B(m.height) ? z(m.height, _ || i.chartWidth) : m.height);
		p || s(_) && _ !== i.chartWidth || s(v) && v !== i.chartHeight ? i.setSize(_, v, r) : N(t, !0) && i.redraw(r), g(i, "afterUpdate", {
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
		g(this, "beforeShowResetZoom", null, function() {
			e.resetZoomButton = e.renderer.button(t.resetZoom, null, null, a, r).attr({
				align: n.position.align,
				title: t.resetZoomTitle
			}).addClass("highcharts-reset-zoom").add().align(n.position, !1, i);
		}), g(this, "afterShowResetZoom");
	}
	zoomOut() {
		g(this, "selection", { resetSelection: !0 }, () => this.transform({
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
		o?.panning && (o.panning = r), g(this, "pan", { originalEvent: e }, () => {
			n.transform({
				axes: a,
				event: e,
				to: {
					x: e.chartX - (n.mouseDownX || 0),
					y: e.chartY - (n.mouseDownY || 0)
				},
				trigger: "pan"
			}), b(n.container, { cursor: "move" });
		});
	}
	transform(e) {
		let { axes: t = this.axes, event: n, from: r = {}, reset: i, selection: o, to: c = {}, trigger: l, allowResetButton: u = !0 } = e, { inverted: d, time: f } = this;
		this.hoverPoints?.forEach((e) => e.setState()), g(this, "transform", e);
		let p = e.hasZoomed || !1, m, h;
		for (let e of t) {
			let { horiz: t, len: g, minPointOffset: _ = 0, options: v, reversed: y } = e, b = t ? "width" : "height", x = t ? "x" : "y", S = N(c[b], e.len), C = N(r[b], e.len), w = Math.abs(S) < 10 ? 1 : S / C, T = (r[x] || 0) + C / 2 - e.pos, E = T - ((c[x] ?? e.pos) + S / 2 - e.pos) / w, D = y && !d || !y && d ? -1 : 1, O = E;
			if (!i && (T < 0 || T > e.len)) continue;
			let k = e.chart.polar || e.isOrdinal && w <= 1 ? 0 : _ * D || 0, A = e.toValue(O, !0), ee = e.toValue(O + g / w, !0), j = A + k, M = ee - k, P = e.allExtremes;
			if (o && o[e.coll].push({
				axis: e,
				min: Math.min(A, ee),
				max: Math.max(A, ee)
			}), j > M && ([j, M] = [M, j]), w === 1 && !i && e.coll === "yAxis" && !P) {
				for (let t of e.series) {
					let e = t.getExtremes(t.getProcessedData(!0).modified.getColumn(t.pointValKey || "y") || [], !0);
					P ??= {
						dataMin: Number.MAX_VALUE,
						dataMax: -Number.MAX_VALUE
					}, s(e.dataMin) && s(e.dataMax) && (P.dataMin = Math.min(e.dataMin, P.dataMin), P.dataMax = Math.max(e.dataMax, P.dataMax));
				}
				e.allExtremes = P;
			}
			let { dataMin: F, dataMax: te, min: I, max: ne } = L(e.getExtremes(), P || {}), re = f.parse(v.min), ie = f.parse(v.max), ae = F ?? re, R = te ?? ie, oe = M - j, z = e.categories ? 0 : Math.min(oe, R - ae), se = ae - z * (a(re) ? 0 : v.minPadding), ce = R + z * (a(ie) ? 0 : v.maxPadding), le = e.allowZoomOutside || w === 1 || l !== "zoom" && w > 1, B = Math.min(re ?? se, se, le ? I : se), V = Math.max(ie ?? ce, ce, le ? ne : ce);
			(!e.isOrdinal || w !== 1 || i) && (j < B && (j = B, w >= 1 && (M = j + oe)), M > V && (M = V, w >= 1 && (j = M - oe)), (i || e.series.length && (j !== I || M !== ne) && j >= B && M <= V) && (o ? o[e.coll].push({
				axis: e,
				min: j,
				max: M
			}) : (e.isPanning = l !== "zoom", e.isPanning && l !== "mousewheel" && (h = !0), e.setExtremes(i ? void 0 : j, i ? void 0 : M, !1, !1, {
				move: E,
				trigger: l,
				scale: w
			}), !i && (j > B || M < V) && (m = u)), p = !0), !this.hasCartesianSeries && !i && (m = u), n && (this[t ? "mouseDownX" : "mouseDownY"] = n[t ? "chartX" : "chartY"]));
		}
		return p && (o ? g(this, "selection", o, () => {
			delete e.selection, e.trigger = "zoom", this.transform(e);
		}) : (m && !h && !this.resetZoomButton ? this.showResetZoom() : !m && this.resetZoomButton && (this.resetZoomButton = this.resetZoomButton.destroy()), this.redraw(l === "zoom" && (this.options.chart.animation ?? this.pointCount < 100)))), p;
	}
};
L(Ot.prototype, {
	callbacks: [],
	collectionsWithInit: {
		xAxis: [Ot.prototype.addAxis, [!0]],
		yAxis: [Ot.prototype.addAxis, [!1]],
		series: [Ot.prototype.addSeries]
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
//#endregion
//#region node_modules/highcharts/es-modules/Extensions/Themes/Adaptive.js
var { setOptions: kt } = O, At = "\n        /* Colors for data series and points */\n        --highcharts-color-0: #2caffe;\n        --highcharts-color-1: #544fc5;\n        --highcharts-color-2: #00e272;\n        --highcharts-color-3: #fe6a35;\n        --highcharts-color-4: #6b8abc;\n        --highcharts-color-5: #d568fb;\n        --highcharts-color-6: #2ee0ca;\n        --highcharts-color-7: #fa4b42;\n        --highcharts-color-8: #feb56a;\n        --highcharts-color-9: #91e8e1;\n\n    /* Chart background, point stroke for markers and columns etc */\n    --highcharts-background-color: #ffffff;\n\n    /*\n    Neutral colors, grayscale by default. The default colors are defined by\n    mixing the background-color with neutral, with a weight corresponding to\n    the number in the name.\n\n    https://www.highcharts.com/samples/highcharts/css/palette-helper\n    */\n\n    /* Strong text. */\n    --highcharts-neutral-color-100: #000000;\n\n    /* Main text, axis labels and some strokes. */\n    --highcharts-neutral-color-80: #333333;\n\n    /* Axis title, connector fallback. */\n    --highcharts-neutral-color-60: #666666;\n\n    /* Credits text, export menu stroke. */\n    --highcharts-neutral-color-40: #999999;\n\n    /* Disabled texts, button strokes, crosshair etc. */\n    --highcharts-neutral-color-20: #cccccc;\n\n    /* Grid lines etc. */\n    --highcharts-neutral-color-10: #e6e6e6;\n\n    /* Minor grid lines etc. */\n    --highcharts-neutral-color-5: #f2f2f2;\n\n    /* Tooltip background, button fills, map null points. */\n    --highcharts-neutral-color-3: #f7f7f7;\n\n    /*\n    Highlights, shades of blue by default\n    */\n\n    /* Drilldown clickable labels, color axis max color. */\n    --highcharts-highlight-color-100: #0022ff;\n\n    /* Selection marker, menu hover, button hover, chart border, navigator\n    series. */\n    --highcharts-highlight-color-80: #334eff;\n\n    /* Navigator mask fill. */\n    --highcharts-highlight-color-60: #667aff;\n\n    /* Ticks and axis line. */\n    --highcharts-highlight-color-20: #ccd3ff;\n\n    /* Pressed button, color axis min color. */\n    --highcharts-highlight-color-10: #e6e9ff;\n\n    /* Indicators */\n    --highcharts-positive-color: #06b535;\n    --highcharts-negative-color: #f21313;\n\n    /* Transparent colors for annotations */\n    --highcharts-annotation-color-0: rgba(130, 170, 255, 0.4);\n    --highcharts-annotation-color-1: rgba(139, 191, 216, 0.4);\n    --highcharts-annotation-color-2: rgba(150, 216, 192, 0.4);\n    --highcharts-annotation-color-3: rgba(156, 229, 161, 0.4);\n    --highcharts-annotation-color-4: rgba(162, 241, 130, 0.4);\n    --highcharts-annotation-color-5: rgba(169, 255, 101, 0.4);\n", jt = "\n    /* Colors for data series and points */\n    --highcharts-color-1: #00e272;\n    --highcharts-color-2: #efdf00;\n\n    /* UI colors */\n    --highcharts-background-color: #141414;\n\n    /*\n        Neutral color variations\n        https://www.highcharts.com/samples/highcharts/css/palette-helper\n    */\n    --highcharts-neutral-color-100: #ffffff;\n    --highcharts-neutral-color-80: #d0d0d0;\n    --highcharts-neutral-color-60: #a1a1a1;\n    --highcharts-neutral-color-40: #727272;\n    --highcharts-neutral-color-20: #434343;\n    --highcharts-neutral-color-10: #2c2c2c;\n    --highcharts-neutral-color-5: #202020;\n    --highcharts-neutral-color-3: #1b1b1b;\n\n    /* Highlight color variations */\n    --highcharts-highlight-color-100: #2caffe;\n    --highcharts-highlight-color-80: #2790cf;\n    --highcharts-highlight-color-60: #2271a0;\n    --highcharts-highlight-color-20: #193343;\n    --highcharts-highlight-color-10: #16242b;\n", Mt = `
:root,
.highcharts-light {
    ${At}
}

@media (prefers-color-scheme: dark) {
    :root {
        ${jt}
    }
}

.highcharts-dark {
    ${jt}
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
`, Nt;
(function(e) {
	e.options = {
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
	};
	function t() {
		let t = document.createElement("style");
		t.nonce = "highcharts", t.innerText = Mt, t.id = "highcharts-adaptive-theme", document.getElementsByTagName("head")[0].appendChild(t), kt(e.options), D(Ot, "afterGetContainer", function() {
			let e = this.container.getRootNode().host?.shadowRoot;
			if (e && !e.getElementById("highcharts-adaptive-theme")) {
				let n = t.cloneNode(!0);
				e.appendChild(n);
			}
		});
	}
	e.apply = t;
})(Nt ||= {});
var Pt = Nt;
K.theme = Pt.options, Pt.apply();
//#endregion
//#region node_modules/highcharts/es-modules/Accessibility/Utils/HTMLUtilities.js
var { doc: Ft, win: J } = K, It = J.EventTarget && new J.EventTarget() || "none";
function Lt(e, t) {
	e.classList ? e.classList.add(t) : e.className.indexOf(t) < 0 && (e.className += " " + t);
}
function Rt(e, t) {
	e.classList ? e.classList.remove(t) : e.className = e.className.replace(new RegExp(t, "g"), "");
}
function zt(e) {
	if (typeof J.MouseEvent == "function") return new J.MouseEvent(e.type, e);
	if (Ft?.createEvent) {
		let t = Ft.createEvent("MouseEvent");
		if (t.initMouseEvent) return t.initMouseEvent(e.type, e.bubbles, e.cancelable, e.view || J, e.detail, e.screenX, e.screenY, e.clientX, e.clientY, e.ctrlKey, e.altKey, e.shiftKey, e.metaKey, e.button, e.relatedTarget), t;
	}
	return Ut(e.type);
}
function Bt(e) {
	let t = (e) => {
		let t = [];
		for (let n = 0; n < e.length; ++n) {
			let r = e.item(n);
			r && t.push(r);
		}
		return t;
	};
	if (typeof J.TouchEvent == "function") {
		let n = new J.TouchEvent(e.type, {
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
	let n = zt(e);
	return n.touches = e.touches, n.changedTouches = e.changedTouches, n.targetTouches = e.targetTouches, n;
}
function Vt(e) {
	return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;");
}
function Ht(e) {
	return Ft.getElementById(e);
}
function Ut(e, t, n) {
	let r = t || {
		x: 0,
		y: 0
	};
	if (typeof J.MouseEvent == "function") return new J.MouseEvent(e, {
		bubbles: !0,
		cancelable: !0,
		composed: !0,
		button: 0,
		buttons: 1,
		relatedTarget: n || It,
		view: J,
		detail: +(e === "click"),
		screenX: r.x,
		screenY: r.y,
		clientX: r.x,
		clientY: r.y
	});
	if (Ft?.createEvent) {
		let t = Ft.createEvent("MouseEvent");
		if (t.initMouseEvent) return t.initMouseEvent(e, !0, !0, J, +(e === "click"), r.x, r.y, r.x, r.y, !1, !1, !1, !1, 0, null), t;
	}
	return { type: e };
}
function Wt(e) {
	let t = (e) => {
		let t = parseInt(e.slice(1), 10);
		return "h" + Math.min(6, t + 1);
	}, n = (e) => /^H[1-6]$/i.test(e), r = (e) => {
		let t = e;
		for (; t = t.previousSibling;) {
			let e = t.tagName || "";
			if (n(e)) return e;
		}
		return "";
	}, i = (e) => {
		let a = r(e);
		if (a) return t(a);
		let o = e.parentElement;
		if (!o) return "h6";
		let s = o.tagName;
		return n(s) ? t(s) : i(o);
	};
	return i(e);
}
function Gt(e) {
	e && e.parentNode && e.parentNode.removeChild(e);
}
function Kt(e) {
	for (; e.lastChild;) e.removeChild(e.lastChild);
}
function qt(e) {
	let t = e.childNodes.length;
	for (; t--;) e.appendChild(e.childNodes[t]);
}
function Jt(e, t = !1) {
	return typeof e == "string" ? t ? e.replace(/<\/?[^>]+(>|$)/g, "") : e.replace(/<\/?(?!\s)[^>]+(>|$)/g, "") : e;
}
function Yt(e) {
	b(e, {
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
var Y = {
	addClass: Lt,
	cloneMouseEvent: zt,
	cloneTouchEvent: Bt,
	escapeStringForHTML: Vt,
	getElement: Ht,
	getFakeMouseEvent: Ut,
	getHeadingTagNameForElement: Wt,
	removeChildNodes: Kt,
	removeClass: Rt,
	removeElement: Gt,
	reverseChildNodes: qt,
	simulatedEventTarget: It,
	stripHTMLTagsFromString: Jt,
	visuallyHideElement: Yt
}, { format: Xt } = I, Zt;
(function(e) {
	function t(e) {
		let t = e.prototype;
		t.langFormat ||= i;
	}
	e.compose = t;
	function n(e, t) {
		let n = e.indexOf("#each("), r = e.indexOf("#plural("), i = e.indexOf("["), o = e.indexOf("]"), s, c;
		if (n > -1) {
			let r = e.slice(n).indexOf(")") + n, i = e.substring(0, n), a = e.substring(r + 1), o = e.substring(n + 6, r).split(","), l = Number(o[1]), u;
			if (c = "", s = v(o[0], t), s) {
				l = isNaN(l) ? s.length : l, u = l < 0 ? s.length + l : Math.min(l, s.length);
				for (let e = 0; e < u; ++e) c += i + s[e] + a;
			}
			return c.length ? c : "";
		}
		if (r > -1) {
			let n = e.slice(r).indexOf(")") + r, i = e.substring(r + 8, n).split(",");
			switch (Number(v(i[0], t))) {
				case 0:
					c = N(i[4], i[1]);
					break;
				case 1:
					c = N(i[2], i[1]);
					break;
				case 2:
					c = N(i[3], i[1]);
					break;
				default: c = i[1];
			}
			return c ? a(c) : "";
		}
		if (i > -1) {
			let n = e.substring(0, i), r = Number(e.substring(i + 1, o)), a;
			return s = v(n, t), !isNaN(r) && s && (r < 0 ? (a = s[s.length + r], a === void 0 && (a = s[0])) : (a = s[r], a === void 0 && (a = s[s.length - 1]))), a === void 0 ? "" : a;
		}
		return "{" + e + "}";
	}
	function r(e, t, r) {
		let i = (e, t) => {
			let n = e.slice(t || 0), r = n.indexOf("{"), i = n.indexOf("}");
			if (r > -1 && i > r) return {
				statement: n.substring(r + 1, i),
				begin: t + r + 1,
				end: t + i
			};
		}, a = [], o, s, c = 0;
		do
			o = i(e, c), s = e.substring(c, o && o.begin - 1), s.length && a.push({
				value: s,
				type: "constant"
			}), o && a.push({
				value: o.statement,
				type: "statement"
			}), c = o ? o.end + 1 : c + 1;
		while (o);
		return a.forEach((e) => {
			e.type === "statement" && (e.value = n(e.value, t));
		}), Xt(a.reduce((e, t) => e + t.value, ""), t, r);
	}
	e.i18nFormat = r;
	function i(e, t) {
		let n = e.split("."), i = this.options.lang, a = 0;
		for (; a < n.length; ++a) i &&= i[n[a]];
		return typeof i == "string" ? r(i, t, this) : "";
	}
	function a(e) {
		return e.trim && e.trim() || e.replace(/^\s+|\s+$/g, "");
	}
})(Zt ||= {});
var Qt = Zt, { doc: $t } = K, { stripHTMLTagsFromString: en } = Y;
function tn(e, t) {
	let n = t.type, r = e.hcEvents;
	$t?.createEvent && (e.dispatchEvent || e.fireEvent) ? e.dispatchEvent ? e.dispatchEvent(t) : e.fireEvent(n, t) : r && r[n] ? g(e, n, t) : e.element && tn(e.element, t);
}
function nn(e) {
	return en(e.options.title.text || e.langFormat("accessibility.defaultChartTitle", { chart: e }), e.renderer.forExport);
}
function rn(e) {
	return e && (e.options.accessibility?.description || e.axisTitle?.textStr || e.options.id || e.categories && e.chart.langFormat("accessibility.axis.defaultAxisNames.categories", {}) || e.dateTime && e.chart.langFormat("accessibility.axis.defaultAxisNames.time", {}) || e.chart.langFormat("accessibility.axis.defaultAxisNames.values", {}));
}
function an(e) {
	let t = e.options || {};
	return t.accessibility && t.accessibility.rangeDescription !== void 0 ? t.accessibility.rangeDescription : e.categories ? on(e) : e.dateTime && (e.min === 0 || e.dataMin === 0) ? sn(e) : cn(e);
}
function on(e) {
	let t = e.chart;
	return e.dataMax && e.dataMin ? t.langFormat("accessibility.axis.rangeCategories", {
		chart: t,
		axis: e,
		numCategories: e.dataMax - e.dataMin + 1
	}) : "";
}
function sn(e) {
	let t = e.chart, n = {}, r = e.dataMin || e.min || 0, i = e.dataMax || e.max || 0, a = "Seconds";
	n.Seconds = (i - r) / 1e3, n.Minutes = n.Seconds / 60, n.Hours = n.Minutes / 60, n.Days = n.Hours / 24, [
		"Minutes",
		"Hours",
		"Days"
	].forEach(function(e) {
		n[e] > 2 && (a = e);
	});
	let o = n[a].toFixed(+(a !== "Seconds" && a !== "Minutes"));
	return t.langFormat("accessibility.axis.timeRange" + a, {
		chart: t,
		axis: e,
		range: o.replace(".0", "")
	});
}
function cn(e) {
	let t = e.chart, n = t.options, r = n && n.accessibility && n.accessibility.screenReaderSection.axisRangeDateFormat || "", i = {
		min: e.dataMin || e.min || 0,
		max: e.dataMax || e.max || 0
	}, a = function(n) {
		return e.dateTime ? t.time.dateFormat(r, i[n]) : i[n].toString();
	};
	return t.langFormat("accessibility.axis.rangeFromTo", {
		chart: t,
		axis: e,
		rangeFrom: a("min"),
		rangeTo: a("max")
	});
}
function ln(e) {
	if (e.points && e.points.length) {
		let t = m(e.points, (e) => !!e.graphic);
		return t && t.graphic && t.graphic.element;
	}
}
function un(e) {
	let t = ln(e);
	return t && t.parentNode || e.graph && e.graph.element || e.group && e.group.element;
}
function dn(e, t) {
	t.setAttribute("aria-hidden", !1), !(t === e.renderTo || !t.parentNode || t.parentNode === $t.body) && (Array.prototype.forEach.call(t.parentNode.childNodes, function(e) {
		e.hasAttribute("aria-hidden") || e.setAttribute("aria-hidden", !0);
	}), dn(e, t.parentNode));
}
function fn(e) {
	let t = un(e);
	t && t.setAttribute("aria-hidden", !0);
}
function pn(e, t) {
	return t ? (e.series || []).filter(function(e) {
		return e.name === t;
	}) : e.series;
}
function mn(e, t, n) {
	let r = e.length, i;
	for (; r--;) if (i = m(e[r].points || [], function(e) {
		return e.x === t && e.y === n;
	}), i) return i;
}
function hn(e, t) {
	if (!a(e.dataMin) || !a(e.dataMax)) return 0;
	let n = e.toPixels(e.dataMin), r = e.toPixels(e.dataMax), i = e.coll === "xAxis" ? "x" : "y";
	return (e.toPixels(t[i] || 0) - n) / (r - n);
}
function gn(e) {
	let t = e.series.xAxis, n = e.series.yAxis, r = t && t.scrollbar ? t : n, i = r && r.scrollbar;
	if (i && a(i.to) && a(i.from)) {
		let t = i.to - i.from, n = hn(r, e);
		i.updatePosition(n - t / 2, n + t / 2), g(i, "changed", {
			from: i.from,
			to: i.to,
			trigger: "scrollbar",
			DOMEvent: null
		});
	}
}
var X = {
	fireEventOnWrappedOrUnwrappedElement: tn,
	getChartTitle: nn,
	getAxisDescription: rn,
	getAxisRangeDescription: an,
	getPointFromXY: mn,
	getSeriesFirstPointElement: ln,
	getSeriesFromName: pn,
	getSeriesA11yElement: un,
	unhideChartElementFromAT: dn,
	hideSeriesFromAT: fn,
	scrollAxisToPoint: gn
}, { doc: _n } = K, { removeElement: vn } = Y, yn = class {
	constructor() {
		this.elements = [];
	}
	createElement() {
		let e = _n.createElement.apply(_n, arguments);
		return this.elements.push(e), e;
	}
	removeElement(e) {
		vn(e), this.elements.splice(this.elements.indexOf(e), 1);
	}
	destroyCreatedElements() {
		this.elements.forEach(function(e) {
			vn(e);
		}), this.elements = [];
	}
}, bn = class {
	constructor() {
		this.eventRemovers = [];
	}
	addEvent() {
		let e = D.apply(K, arguments);
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
}, { fireEventOnWrappedOrUnwrappedElement: xn } = X, { getFakeMouseEvent: Sn } = Y, Cn = class {
	destroy() {}
	getKeyboardNavigation() {
		return [];
	}
	init() {}
	onChartRender() {}
	onChartUpdate() {}
	initBase(e, t) {
		this.chart = e, this.eventProvider = new bn(), this.domElementProvider = new yn(), this.proxyProvider = t, this.keyCodes = {
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
		xn(e, Sn("click"));
	}
	destroyBase() {
		this.domElementProvider.destroyCreatedElements(), this.eventProvider.removeAddedEvents();
	}
}, Z = class {
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
		let t = e.which || e.keyCode, n = this.response.noHandler, r = m(this.keyCodeMap, function(e) {
			return e[0].indexOf(t) > -1;
		});
		return r ? n = r[1].call(this, t, e) : t === 9 && (n = this.response[e.shiftKey ? "prev" : "next"]), n;
	}
}, { unhideChartElementFromAT: wn, getChartTitle: Tn } = X, { doc: En } = K, { stripHTMLTagsFromString: Dn } = Y, On = class extends Cn {
	onChartUpdate() {
		this.handleSVGTitleElement(), this.setSVGContainerLabel(), this.setGraphicContainerAttrs(), this.setRenderToAttrs(), this.makeCreditsAccessible();
	}
	handleSVGTitleElement() {
		let e = this.chart, t = "highcharts-title-" + e.index, n = Dn(e.langFormat("accessibility.svgContainerTitle", { chartTitle: Tn(e) }));
		if (n.length) {
			let r = this.svgTitleElement = this.svgTitleElement || En.createElementNS("http://www.w3.org/2000/svg", "title");
			r.textContent = n, r.id = t, e.renderTo.insertBefore(r, e.renderTo.firstChild);
		}
	}
	setSVGContainerLabel() {
		let e = this.chart, t = e.langFormat("accessibility.svgContainerLabel", { chartTitle: Tn(e) });
		e.renderer.box && t.length && e.renderer.box.setAttribute("aria-label", t);
	}
	setGraphicContainerAttrs() {
		let e = this.chart, t = e.langFormat("accessibility.graphicContainerLabel", { chartTitle: Tn(e) });
		t.length && e.container.setAttribute("aria-label", t);
	}
	setRenderToAttrs() {
		let e = this.chart, t = e.options.accessibility.landmarkVerbosity !== "disabled", n = e.langFormat("accessibility.chartContainerLabel", {
			title: Tn(e),
			chart: e
		});
		n && (e.renderTo.setAttribute("role", t ? "region" : "group"), e.renderTo.setAttribute("aria-label", n));
	}
	makeCreditsAccessible() {
		let e = this.chart, t = e.credits;
		t && (t.textStr && t.element.setAttribute("aria-label", e.langFormat("accessibility.credits", { creditsStr: Dn(t.textStr, e.renderer.forExport) })), wn(e, t.element));
	}
	getKeyboardNavigation() {
		let e = this.chart;
		return new Z(e, {
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
}, kn;
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
	function n(e, t) {
		let n = e.prototype, a = t.prototype;
		n.renderFocusBorder || (n.renderFocusBorder = r, n.setFocusToElement = i), a.addFocusBorder || (a.addFocusBorder = o, a.removeFocusBorder = l);
	}
	e.compose = n;
	function r() {
		let e = this.focusElement, t = this.options.accessibility.keyboardNavigation.focusBorder;
		e && (e.removeFocusBorder(), t.enabled && e.addFocusBorder(t.margin, {
			stroke: t.style.color,
			strokeWidth: t.style.lineWidth,
			r: t.style.borderRadius
		}));
	}
	function i(e, t) {
		let n = this.options.accessibility.keyboardNavigation.focusBorder, r = t || e.element;
		r && r.focus && (r.hcEvents && r.hcEvents.focusin || D(r, "focusin", function() {}), r.focus(), n.hideBrowserFocusOutline && (r.style.outline = "none")), this.focusElement && this.focusElement.removeFocusBorder(), this.focusElement = e, D(this, "endResize", function() {
			this.renderFocusBorder();
		}), this.renderFocusBorder();
	}
	function a(e) {
		if (e.focusBorderDestroyHook) return;
		let t = e.destroy;
		e.destroy = function() {
			return e.focusBorder && e.focusBorder.destroy && e.focusBorder.destroy(), t.apply(e, arguments);
		}, e.focusBorderDestroyHook = t;
	}
	function o(e, t) {
		this.focusBorder && this.removeFocusBorder();
		let n = this.getBBox(), r = N(e, 3), i = this.parentGroup, o = this.scaleX || i && i.scaleX, c = this.scaleY || i && i.scaleY, l = (o ? !c : c) ? Math.abs(o || c || 1) : (Math.abs(o || 1) + Math.abs(c || 1)) / 2, u = this.renderer.fontMetrics(this).h;
		n.x += this.translateX ? this.translateX : 0, n.y += this.translateY ? this.translateY : 0;
		let d = n.x - r, f = n.y - r, p = n.width + 2 * r, m = n.height + 2 * r;
		function h(e) {
			let t = 0, n = 0;
			return e.attr("text-anchor") === "middle" ? t = n = .5 : e.rotation ? t = .25 : n = .75, {
				x: t,
				y: n
			};
		}
		let g = !!this.text;
		if (this.element.nodeName === "text" || g) {
			let e = !!this.rotation, t = g ? {
				x: +!!e,
				y: 0
			} : h(this), i = +this.attr("x"), a = +this.attr("y");
			if (isNaN(i) || (d = i - n.width * t.x - r), isNaN(a) || (f = a - (this.attr("text-anchor") === "start" ? u : n.height) * t.y - r), g && e) {
				let e = p;
				p = m, m = e, isNaN(i) || (d = i - n.height * t.x - r), isNaN(a) || (f = a - n.width * t.y - r);
			}
		}
		this.focusBorder = this.renderer.rect(d, f, p, m, parseInt((t && t.r || 0).toString(), 10) / l).addClass("highcharts-focus-border").attr({ zIndex: 99 }).add(i), this.renderer.styledMode || this.focusBorder.attr({
			stroke: t && t.stroke,
			"stroke-width": (t && t.strokeWidth || 0) / l
		}), s(this, e, t), a(this);
	}
	function s(e, ...n) {
		e.focusBorderUpdateHooks || (e.focusBorderUpdateHooks = {}, t.forEach((t) => {
			let r = t + "Setter", i = e[r] || e._defaultSetter;
			e.focusBorderUpdateHooks[r] = i, e[r] = function() {
				let t = i.apply(e, arguments);
				return e.addFocusBorder.apply(e, n), t;
			};
		}));
	}
	function c(e) {
		e.focusBorderDestroyHook && (e.destroy = e.focusBorderDestroyHook, delete e.focusBorderDestroyHook);
	}
	function l() {
		u(this), c(this), this.focusBorder && (this.focusBorder.destroy(), delete this.focusBorder);
	}
	function u(e) {
		e.focusBorderUpdateHooks && (Object.keys(e.focusBorderUpdateHooks).forEach((t) => {
			let n = e.focusBorderUpdateHooks[t];
			n === e._defaultSetter ? delete e[t] : e[t] = n;
		}), delete e.focusBorderUpdateHooks);
	}
})(kn ||= {});
var An = kn, { doc: jn } = K, { addClass: Mn, visuallyHideElement: Nn } = Y, Pn = class {
	constructor(e, t) {
		this.chart = e, this.domElementProvider = new yn(), this.announceRegion = this.addAnnounceRegion(t);
	}
	destroy() {
		this.domElementProvider.destroyCreatedElements();
	}
	announce(e) {
		V.setElementHTML(this.announceRegion, e), this.clearAnnouncementRegionTimer && n(this.clearAnnouncementRegionTimer), this.clearAnnouncementRegionTimer = setTimeout(() => {
			this.announceRegion.innerHTML = V.emptyHTML, delete this.clearAnnouncementRegionTimer;
		}, 3e3);
	}
	addAnnounceRegion(e) {
		let t = this.chart.announcerContainer || this.createAnnouncerContainer(), n = this.domElementProvider.createElement("div");
		return A(n, {
			"aria-hidden": !1,
			"aria-live": e,
			"aria-atomic": !0
		}), Nn(n), this.chart.styledMode && Mn(n, "highcharts-visually-hidden"), t.appendChild(n), n;
	}
	createAnnouncerContainer() {
		let e = this.chart, t = jn.createElement("div");
		return A(t, {
			"aria-hidden": !1,
			class: "highcharts-announcer-container"
		}), Nn(t), e.renderTo.insertBefore(t, e.renderTo.firstChild), e.announcerContainer = t, t;
	}
}, { escapeStringForHTML: Fn, stripHTMLTagsFromString: In } = Y;
function Ln(e) {
	return (e.annotations || []).reduce((e, t) => (t.options && t.options.visible !== !1 && (e = e.concat(t.labels)), e), []);
}
function Rn(e) {
	return e.options && e.options.accessibility && e.options.accessibility.description || e.graphic && e.graphic.text && e.graphic.text.textStr || "";
}
function zn(e) {
	let t = e.options && e.options.accessibility && e.options.accessibility.description;
	if (t) return t;
	let n = e.chart, r = Rn(e), i = e.points, a = (e) => e.graphic && e.graphic.element && e.graphic.element.getAttribute("aria-label") || "", o = i.filter((e) => !!e.graphic).map((e) => {
		let t = e.accessibility && e.accessibility.valueDescription || a(e), n = e && e.series.name || "";
		return (n ? n + ", " : "") + "data point " + t;
	}).filter((e) => !!e), s = o.length, c = "accessibility.screenReaderSection.annotations.description" + (s > 1 ? "MultiplePoints" : s ? "SinglePoint" : "NoPoints"), l = {
		annotationText: r,
		annotation: e,
		numPoints: s,
		annotationPoint: o[0],
		additionalAnnotationPoints: o.slice(1)
	};
	return n.langFormat(c, l);
}
function Bn(e) {
	return Ln(e).map((t) => {
		let n = Fn(In(zn(t), e.renderer.forExport));
		return n ? `<li>${n}</li>` : "";
	});
}
function Vn(e) {
	let t = e.annotations;
	return t && t.length ? `<ul style="list-style-type: none">${Bn(e).join(" ")}</ul>` : "";
}
function Hn(e) {
	let t = Ln(e.series.chart).filter((t) => t.points.indexOf(e) > -1);
	return t.length ? t.map((e) => `${Rn(e)}`) : [];
}
var Un = {
	getAnnotationsInfoHTML: Vn,
	getAnnotationLabelDescription: zn,
	getAnnotationListItems: Bn,
	getPointAnnotationTexts: Hn
}, { getAnnotationsInfoHTML: Wn } = Un, { getAxisDescription: Gn, getAxisRangeDescription: Kn, getChartTitle: qn, unhideChartElementFromAT: Jn } = X, { format: Yn } = I, { doc: Xn } = K, { addClass: Zn, getElement: Qn, getHeadingTagNameForElement: $n, stripHTMLTagsFromString: er, visuallyHideElement: tr } = Y;
function nr(e) {
	return e.langFormat("accessibility.table.tableSummary", { chart: e });
}
function rr(e, t) {
	return t.mapTitle ? e.langFormat("accessibility.chartTypes.mapTypeDescription", t) : e.langFormat("accessibility.chartTypes.unknownMap", t);
}
function ir(e, t) {
	return e.langFormat("accessibility.chartTypes.combinationChart", t);
}
function ar(e, t) {
	return e.langFormat("accessibility.chartTypes.emptyChart", t);
}
function or(e, t, n) {
	let r = t[0], i = e.langFormat("accessibility.seriesTypeDescriptions." + r, n), a = e.series && e.series.length < 2 ? "Single" : "Multiple";
	return (e.langFormat("accessibility.chartTypes." + r + a, n) || e.langFormat("accessibility.chartTypes.default" + a, n)) + (i ? " " + i : "");
}
function sr(e, t) {
	let n = t[0], r = e.series && e.series[0] || {}, i = e.mapView && e.mapView.geoMap && e.mapView.geoMap.title, a = {
		numSeries: e.series.length,
		numPoints: r.points && r.points.length,
		chart: e,
		mapTitle: i
	};
	return n ? n === "map" || n === "tiledwebmap" ? rr(e, a) : e.types.length > 1 ? ir(e, a) : or(e, t, a) : ar(e, a);
}
function cr(e) {
	return ne(e, [/<([\w\-.:!]+)\b[^<>]*>\s*<\/\1>/g, ""]);
}
var lr = class extends Cn {
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
		}), this.announcer = new Pn(e, "assertive");
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
		let t = Yn(e, this.chart), n = Xn.querySelectorAll(t);
		if (n.length === 1) return n[0];
	}
	setLinkedDescriptionAttrs() {
		let e = this.linkedDescriptionElement;
		e && (e.setAttribute("aria-hidden", "true"), Zn(e, "highcharts-linked-description"));
	}
	updateScreenReaderSection(e) {
		let t = this.chart, n = this.screenReaderSections[e], r = n.buildContent(t), i = n.element = n.element || this.createElement("div"), a = i.firstChild || this.createElement("div");
		r ? (this.setScreenReaderSectionAttribs(i, e), V.setElementHTML(a, r), i.appendChild(a), n.insertIntoDOM(i, t), tr(a), t.styledMode && Zn(a, "highcharts-visually-hidden"), Jn(t, a), n.afterInserted && n.afterInserted()) : (i.parentNode && i.parentNode.removeChild(i), n.element = null);
	}
	setScreenReaderSectionAttribs(e, t) {
		let n = this.chart, r = n.langFormat("accessibility.screenReaderSection." + t + "RegionLabel", {
			chart: n,
			chartTitle: qn(n)
		});
		A(e, {
			id: `highcharts-screen-reader-region-${t}-${n.index}`,
			"aria-label": r || void 0
		}), e.style.position = "relative", r && e.setAttribute("role", n.options.accessibility.landmarkVerbosity === "all" ? "region" : "group");
	}
	defaultBeforeChartFormatter() {
		let e = this.chart, t = e.options.accessibility.screenReaderSection.beforeChartFormat;
		if (!t) return "";
		let n = this.getAxesDescription(), r = e.sonify && e.options.sonification && e.options.sonification.enabled, i = "highcharts-a11y-sonify-data-btn-" + e.index, a = "hc-linkto-highcharts-data-table-" + e.index, o = Wn(e), s = e.langFormat("accessibility.screenReaderSection.annotations.heading", { chart: e }), c = {
			headingTagName: $n(e.renderTo),
			chartTitle: qn(e),
			typeDescription: this.getTypeDescriptionText(),
			chartSubtitle: this.getSubtitleText(),
			chartLongdesc: this.getLongdescText(),
			xAxisDescription: n.xAxis,
			yAxisDescription: n.yAxis,
			playAsSoundButton: r ? this.getSonifyButtonText(i) : "",
			viewTableButton: e.exporting?.getCSV ? this.getDataTableButtonText(a) : "",
			annotationsTitle: o ? s : "",
			annotationsList: o
		}, l = Qt.i18nFormat(t, c, e);
		return this.dataTableButtonId = a, this.sonifyButtonId = i, cr(l);
	}
	defaultAfterChartFormatter() {
		let e = this.chart, t = e.options.accessibility.screenReaderSection.afterChartFormat;
		if (!t) return "";
		let n = { endOfChartMarker: this.getEndOfChartMarkerText() };
		return cr(Qt.i18nFormat(t, n, e));
	}
	getLinkedDescription() {
		let e = this.linkedDescriptionElement;
		return er(e && e.innerHTML || "", this.chart.renderer.forExport);
	}
	getLongdescText() {
		let e = this.chart.options, t = e.caption, n = t && t.text, r = this.getLinkedDescription();
		return e.accessibility.description || r || n || "";
	}
	getTypeDescriptionText() {
		let e = this.chart;
		return e.types ? e.options.accessibility.typeDescription || sr(e, e.types) : "";
	}
	getDataTableButtonText(e) {
		let t = this.chart, n = t.langFormat("accessibility.table.viewAsDataTableButtonText", {
			chart: t,
			chartTitle: qn(t)
		});
		return "<button id=\"" + e + "\">" + n + "</button>";
	}
	getSonifyButtonText(e) {
		let t = this.chart;
		if (t.options.sonification && t.options.sonification.enabled === !1) return "";
		let n = t.langFormat("accessibility.sonification.playAsSoundButtonText", {
			chart: t,
			chartTitle: qn(t)
		});
		return "<button id=\"" + e + "\">" + n + "</button>";
	}
	getSubtitleText() {
		let e = this.chart.options.subtitle;
		return er(e && e.text || "", this.chart.renderer.forExport);
	}
	getEndOfChartMarkerText() {
		let e = Qn(`highcharts-end-of-chart-marker-${this.chart.index}`);
		if (e) return e.outerHTML;
		let t = this.chart, n = t.langFormat("accessibility.screenReaderSection.endOfChartMarker", { chart: t });
		return "<div id=\"" + ("highcharts-end-of-chart-marker-" + t.index) + "\">" + n + "</div>";
	}
	onDataTableCreated(e) {
		let t = this.chart;
		if (t.options.accessibility.enabled) {
			this.viewDataTableButton && this.viewDataTableButton.setAttribute("aria-expanded", "true");
			let n = e.tree.attributes || {};
			n.tabindex = -1, n.summary = nr(t), e.tree.attributes = n;
		}
	}
	focusDataTable() {
		let e = this.dataTableDiv, t = e && e.getElementsByTagName("table")[0];
		t && t.focus && t.focus();
	}
	initSonifyButton(e) {
		let t = this.sonifyButton = Qn(e), n = this.chart, r = (e) => {
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
		let t = this.viewDataTableButton = Qn(e), n = this.chart, r = e.replace("hc-linkto-", "");
		t && (A(t, {
			tabindex: -1,
			"aria-expanded": !!Qn(r)
		}), t.onclick = n.options.accessibility.screenReaderSection.onViewDataTableClick || function() {
			n.exporting?.viewData();
		});
	}
	getAxesDescription() {
		let e = this.chart, t = function(t, n) {
			let r = e[t];
			return r.length > 1 || r[0] && N(r[0].options.accessibility && r[0].options.accessibility.enabled, n);
		}, n = !!e.types && e.types.indexOf("map") < 0 && e.types.indexOf("treemap") < 0 && e.types.indexOf("tilemap") < 0, r = !!e.hasCartesianSeries, i = t("xAxis", !e.angular && r && n), a = t("yAxis", r && n), o = {};
		return i && (o.xAxis = this.getAxisDescriptionText("xAxis")), a && (o.yAxis = this.getAxisDescriptionText("yAxis")), o;
	}
	getAxisDescriptionText(e) {
		let t = this.chart, n = t[e];
		return t.langFormat("accessibility.axis." + e + "Description" + (n.length > 1 ? "Plural" : "Singular"), {
			chart: t,
			names: n.map(function(e) {
				return Gn(e);
			}),
			ranges: n.map(function(e) {
				return Kn(e);
			}),
			numAxes: n.length
		});
	}
	destroy() {
		this.announcer && this.announcer.destroy();
	}
}, { getChartTitle: ur, unhideChartElementFromAT: dr } = X, { getFakeMouseEvent: fr } = Y;
function pr(e) {
	return e.exporting?.svgElements?.[0];
}
function mr(e) {
	let t = e.options.exporting, n = pr(e);
	return !!(t && t.enabled !== !1 && t.accessibility && t.accessibility.enabled && n && n.element);
}
var hr = class extends Cn {
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
		t && (this.addAccessibleContextMenuAttribs(), dr(e, t)), this.setExportButtonExpandedState("true");
	}
	setExportButtonExpandedState(e) {
		this.exportButtonProxy && this.exportButtonProxy.innerElement.setAttribute("aria-expanded", e);
	}
	onChartRender() {
		let e = this.chart, t = e.focusElement, n = e.accessibility;
		this.proxyProvider.clearGroup("chartMenu"), this.proxyMenuButton(), this.exportButtonProxy && t && t === e.exporting?.group && (t.focusBorder ? e.setFocusToElement(t, this.exportButtonProxy.innerElement) : n && n.keyboardNavigation.tabindexContainer.focus());
	}
	proxyMenuButton() {
		let e = this.chart, t = this.proxyProvider, n = pr(e);
		mr(e) && n && (this.exportButtonProxy = t.addProxyElement("chartMenu", { click: n }, "button", {
			"aria-label": e.langFormat("accessibility.exporting.menuButtonLabel", {
				chart: e,
				chartTitle: ur(e)
			}),
			"aria-expanded": !1,
			title: e.options.lang.contextButtonTitle || null
		}));
	}
	createProxyGroup() {
		this.chart && this.proxyProvider && this.proxyProvider.addGroup("chartMenu");
	}
	addAccessibleContextMenuAttribs() {
		let e = this.chart, t = e.exporting?.divElements;
		if (t && t.length) {
			t.forEach((e) => {
				e && (e.tagName === "LI" && !(e.children && e.children.length) ? e.setAttribute("tabindex", -1) : e.setAttribute("aria-hidden", "true"));
			});
			let n = t[0] && t[0].parentNode;
			n && A(n, {
				"aria-hidden": void 0,
				"aria-label": e.langFormat("accessibility.exporting.chartMenuLabel", { chart: e }),
				role: "list"
			});
		}
	}
	getKeyboardNavigation() {
		let e = this.keyCodes, t = this.chart, n = this;
		return new Z(t, {
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
				return !!t.exporting && t.options.exporting?.buttons?.contextButton.enabled !== !1 && t.options.exporting.enabled !== !1 && (t.options.exporting.accessibility?.enabled || !1) !== !1;
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
		let t = this.chart, n = t.highlightedExportItemIx !== void 0 && t.exporting?.divElements?.[t.highlightedExportItemIx], r = pr(t)?.element;
		return t.exporting?.openMenu ? n && this.fakeClickEvent(n) : (r && this.fakeClickEvent(r), t.highlightExportItem(0)), e.response.success;
	}
};
(function(e) {
	function t(e) {
		let t = e.prototype;
		t.hideExportMenu || (t.hideExportMenu = r, t.highlightExportItem = i, t.highlightLastExportItem = a, t.showExportMenu = n);
	}
	e.compose = t;
	function n() {
		let e = pr(this);
		if (e) {
			let t = e.element;
			t.onclick &&= function() {
				fr("click");
			};
		}
	}
	function r() {
		let e = this, t = e.exporting?.divElements;
		t && e.exporting?.contextMenuEl && e.exporting?.openMenu && (t.forEach((e) => {
			e && e.className === "highcharts-menu-item" && e.onmouseout && e.onmouseout(fr("mouseout"));
		}), e.highlightedExportItemIx = 0, e.exporting.contextMenuEl.hideMenu(), e.container.focus());
	}
	function i(e) {
		let t = this.exporting?.divElements?.[e], n = this.highlightedExportItemIx !== void 0 && this.exporting?.divElements?.[this.highlightedExportItemIx];
		if (t && t.tagName === "LI" && !(t.children && t.children.length)) {
			let r = !!(this.renderTo.getElementsByTagName("g")[0] || {}).focus;
			return t.focus && r && t.focus(), n && n.onmouseout && n.onmouseout(fr("mouseout")), t.onmouseover && t.onmouseover(fr("mouseover")), this.highlightedExportItemIx = e, !0;
		}
		return !1;
	}
	function a() {
		let e = this;
		if (e.exporting?.divElements) {
			let t = e.exporting?.divElements.length;
			for (; t--;) if (e.highlightExportItem(t)) return !0;
		}
		return !1;
	}
})(hr ||= {});
var gr = hr, { doc: _r, win: vr } = K, { getElement: yr, simulatedEventTarget: br } = Y, xr = class {
	constructor(e, t) {
		this.currentModuleIx = NaN, this.modules = [], this.init(e, t);
	}
	init(e, t) {
		let n = this.eventProvider = new bn();
		this.chart = e, this.components = t, this.modules = [], this.currentModuleIx = 0, this.update(), n.addEvent(this.tabindexContainer, "keydown", (e) => this.onKeydown(e)), n.addEvent(this.tabindexContainer, "focus", (e) => this.onFocus(e)), ["mouseup", "touchend"].forEach((e) => n.addEvent(_r, e, (e) => this.onMouseUp(e))), ["mousedown", "touchstart"].forEach((t) => n.addEvent(e.renderTo, t, () => {
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
		let e = yr(`highcharts-end-of-chart-marker-${this.chart.index}`);
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
		if (delete this.isClickingChart, !this.keyboardReset && e.relatedTarget !== br) {
			let t = this.chart;
			if (!e.target || !t.container.contains(e.target)) {
				let e = this.modules && this.modules[this.currentModuleIx || 0];
				e && e.terminate && e.terminate(), this.currentModuleIx = 0;
			}
			t.focusElement && (t.focusElement.removeFocusBorder(), delete t.focusElement), this.keyboardReset = !0;
		}
	}
	onKeydown(e) {
		let t = e || vr.event, n = this.modules && this.modules.length && this.modules[this.currentModuleIx], r, i = t.target;
		if (!(i && i.nodeName === "INPUT" && !i.classList.contains("highcharts-a11y-proxy-element")) && (this.keyboardReset = !1, this.exiting = !1, n)) {
			let e = n.run(t);
			e === n.response.success ? r = !0 : e === n.response.prev ? r = this.move(-1) : e === n.response.next && (r = this.move(1)), r && (t.preventDefault(), t.stopPropagation());
		}
	}
	updateContainerTabindex() {
		let e = this.chart.options.accessibility, t = e && e.keyboardNavigation, n = !(t && t.enabled === !1), r = this.chart, i = r.container, a;
		r.renderTo.hasAttribute("tabindex") ? (i.removeAttribute("tabindex"), a = r.renderTo) : a = i, this.tabindexContainer = a;
		let o = a.getAttribute("tabindex");
		n && !o ? a.setAttribute("tabindex", "0") : n || r.container.removeAttribute("tabindex");
	}
	createExitAnchor() {
		let e = this.chart, t = this.exitAnchor = _r.createElement("div");
		e.renderTo.appendChild(t), this.makeElementAnExitAnchor(t);
	}
	makeElementAnExitAnchor(e) {
		let t = this.tabindexContainer.getAttribute("tabindex") || 0;
		e.setAttribute("class", "highcharts-exit-anchor"), e.setAttribute("tabindex", t), e.setAttribute("aria-hidden", !1), this.addExitAnchorEventsToEl(e);
	}
	removeExitAnchor() {
		if (this.exitAnchor) {
			let e = this.eventProvider.eventRemovers.find((e) => e.element === this.exitAnchor);
			e && a(e.remover) && this.eventProvider.removeEvent(e.remover), this.exitAnchor.parentNode && this.exitAnchor.parentNode.removeChild(this.exitAnchor), delete this.exitAnchor;
		}
	}
	addExitAnchorEventsToEl(e) {
		let t = this.chart, n = this;
		this.eventProvider.addEvent(e, "focus", function(e) {
			let r = e || vr.event, i = !(r.relatedTarget && t.container.contains(r.relatedTarget) || n.exiting);
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
};
(function(e) {
	function t(e) {
		gr.compose(e);
		let t = e.prototype;
		return t.dismissPopupContent || (t.dismissPopupContent = n, _r && D(_r, "keydown", r)), e;
	}
	e.compose = t;
	function n() {
		let e = this;
		g(this, "dismissPopupContent", {}, function() {
			e.tooltip && e.tooltip.hide(0), e.hideExportMenu();
		});
	}
	function r(e) {
		(e.which || e.keyCode) === 27 && K.charts && K.charts.forEach((e) => {
			e && e.dismissPopupContent && e.dismissPopupContent();
		});
	}
})(xr ||= {});
var Sr = xr, Cr;
(function(e) {
	function t(e, n, r) {
		let i = e, a = i.reducedLen || n, o = (e, t) => (t.rank || 0) - (e.rank || 0), s = (e, t) => e.target - t.target, c = [], l = e.length, u = [], d = c.push, f, p = !0, m, h, g = 0, _;
		for (f = l; f--;) g += e[f].size;
		if (g > a) {
			if (ce(e, o), _ = e[0].rank === e[e.length - 1].rank, _) {
				let t = [[0, l - 1]];
				for (; t.length && g > a;) {
					let n = t.shift();
					if (!n) break;
					f = Math.floor((n[0] + n[1]) / 2), m = e[f], G(u, f) && (g -= m.size), n[0] < f && t.push([n[0], f - 1]), f < n[1] && t.push([f + 1, n[1]]);
				}
			} else for (f = l - 1; g > a && f >= 0;) m = e[f], G(u, f) && (g -= m.size), f--;
			u.sort((e, t) => t - e).forEach((t) => d.apply(c, e.splice(t, 1)));
		}
		for (ce(e, s), e = e.map((e) => ({
			size: e.size,
			targets: [e.target],
			align: N(e.align, .5)
		})); p;) {
			for (f = e.length; f--;) m = e[f], h = (Math.min.apply(0, m.targets) + Math.max.apply(0, m.targets)) / 2, m.pos = q(h - m.size * m.align, 0, n - m.size);
			for (f = e.length, p = !1; f--;) f > 0 && e[f - 1].pos + e[f - 1].size > e[f].pos && (e[f - 1].size += e[f].size, e[f - 1].targets = e[f - 1].targets.concat(e[f].targets), e[f - 1].align = .5, e[f - 1].pos + e[f - 1].size > n && (e[f - 1].pos = n - e[f - 1].size), e.splice(f, 1), p = !0);
		}
		return d.apply(i, c), f = 0, e.some((e) => {
			let a = 0;
			return (e.targets || []).some(() => (i[f].pos = e.pos + a, r !== void 0 && Math.abs(i[f].pos - i[f].target) > r ? (i.slice(0, f + 1).forEach((e) => delete e.pos), i.reducedLen = (i.reducedLen || n) - n * .1, i.reducedLen > n * .1 && t(i, n, r), !0) : (a += i[f].size, f++, !1)));
		}), ce(i, s), i;
	}
	e.distribute = t;
})(Cr ||= {});
var wr = Cr, { animObject: Tr, setAnimation: Er } = R, { registerEventOptions: Dr } = ye, { composed: Or, marginNames: kr } = K, { distribute: Ar } = wr, { format: jr } = I, Mr = class {
	constructor(e, t) {
		this.allItems = [], this.initialItemY = 0, this.itemHeight = 0, this.itemMarginBottom = 0, this.itemMarginTop = 0, this.itemX = 0, this.itemY = 0, this.lastItemY = 0, this.lastLineHeight = 0, this.legendHeight = 0, this.legendWidth = 0, this.maxItemWidth = 0, this.maxLegendWidth = 0, this.offsetWidth = 0, this.padding = 0, this.pages = [], this.symbolHeight = 0, this.symbolWidth = 0, this.titleHeight = 0, this.totalItemWidth = 0, this.widthOption = 0, this.chart = e, this.setOptions(t), t.enabled && (this.render(), Dr(this, t), D(this.chart, "endResize", function() {
			this.legend.positionCheckboxes();
		})), D(this.chart, "render", () => {
			this.options.enabled && this.proximate && (this.proximatePositions(), this.positionItems());
		});
	}
	setOptions(e) {
		let t = N(e.padding, 8);
		this.options = e, this.chart.styledMode || (this.itemStyle = e.itemStyle, this.itemHiddenStyle = u(this.itemStyle, e.itemHiddenStyle)), this.itemMarginTop = e.itemMarginTop, this.itemMarginBottom = e.itemMarginBottom, this.padding = t, this.initialItemY = t - 5, this.symbolWidth = N(e.symbolWidth, 16), this.pages = [], this.proximate = e.layout === "proximate" && !this.chart.inverted, this.baseline = void 0;
	}
	update(e, t) {
		let n = this.chart;
		this.setOptions(u(!0, this.options, e)), "events" in this.options && Dr(this, this.options), this.destroy(), n.isDirtyLegend = n.isDirtyBox = !0, N(t, !0) && n.redraw(), g(this, "afterUpdate", { redraw: t });
	}
	colorizeItem(e, t) {
		let n = e.color, { area: r, group: i, label: a, line: o, symbol: s } = e.legendItem || {};
		if ((e instanceof be || e instanceof oe) && (e.color = e.options?.legendSymbolColor || n), i?.[t ? "removeClass" : "addClass"]("highcharts-legend-item-hidden"), !this.chart.styledMode) {
			let { itemHiddenStyle: n = {} } = this, i = n.color, { fillColor: c, lineColor: l } = e.options, d = (e) => (t || (e.fill &&= i, e.stroke &&= i), e);
			a?.css(u(t ? this.itemStyle : n)), o?.attr(d({ stroke: l || e.color })), s?.attr(d(e.series ? e.series.pointAttribs?.(e) : e.pointAttribs?.() || { fill: e.color })), r?.attr(d({
				fill: c || e.color,
				"fill-opacity": c ? 1 : e.options.fillOpacity ?? .75
			}));
		}
		e.color = n, g(this, "afterColorizeItem", {
			item: e,
			visible: t
		});
	}
	positionItems() {
		this.allItems.forEach(this.positionItem, this), this.chart.isResizing || this.positionCheckboxes();
	}
	positionItem(e) {
		let t = this, { group: n, x: r = 0, y: i = 0 } = e.legendItem || {}, o = t.options, s = o.symbolPadding, c = !o.rtl, l = e.checkbox;
		if (n?.element) {
			let o = {
				translateX: c ? r : t.legendWidth - r - 2 * s - 4,
				translateY: i
			};
			n[a(n.translateY) ? "animate" : "attr"](o, void 0, () => {
				g(this, "afterPositionItem", { item: e });
			});
		}
		l && (l.x = r, l.y = i);
	}
	destroyItem(e) {
		let t = e.legendItem || {};
		for (let e of [
			"group",
			"label",
			"line",
			"symbol"
		]) t[e] && (t[e] = t[e].destroy());
		e.checkbox = re(e.checkbox), e.legendItem = void 0;
	}
	destroy() {
		let e = this;
		for (let e of this.getAllItems()) this.destroyItem(e);
		for (let t of [
			"clipRect",
			"up",
			"down",
			"pager",
			"nav",
			"box",
			"title",
			"group"
		]) e[t] && (e[t] = e[t].destroy());
		this.display = null;
	}
	positionCheckboxes() {
		let e = this.group?.alignAttr, t = this.clipHeight || this.legendHeight, n = this.titleHeight, r;
		e && (r = e.translateY, this.allItems.forEach(function(i) {
			let a = i.checkbox, o;
			a && (o = r + n + a.y + (this.scrollOffset || 0) + 3, b(a, {
				left: e.translateX + i.checkboxOffset + a.x - 20 + "px",
				top: o + "px",
				display: this.proximate || o > r - 6 && o < r + t - 6 ? "" : "none"
			}));
		}, this));
	}
	renderTitle() {
		let e = this.options, t = this.padding, n = e.title, r, i = 0;
		n.text && (this.title || (this.title = this.chart.renderer.label(n.text, t - 3, t - 4, void 0, void 0, void 0, e.useHTML, void 0, "legend-title").attr({ zIndex: 1 }), this.chart.styledMode || this.title.css(n.style), this.title.add(this.group)), n.width || this.title.css({ width: this.maxLegendWidth + "px" }), r = this.title.getBBox(), i = r.height, this.offsetWidth = r.width, this.contentGroup.attr({ translateY: i })), this.titleHeight = i;
	}
	setText(e) {
		let t = this.options;
		e.legendItem.label.attr({ text: t.labelFormat ? jr(t.labelFormat, e, this.chart) : t.labelFormatter.call(e, e) });
	}
	renderItem(e) {
		let t = this, n = e.legendItem = e.legendItem || {}, r = t.chart, i = r.renderer, a = t.options, o = a.layout === "horizontal", s = t.symbolWidth, c = a.symbolPadding || 0, l = t.itemStyle, d = t.itemHiddenStyle, f = o ? N(a.itemDistance, 20) : 0, p = !a.rtl, m = !e.series, h = !m && e.series.drawLegendSymbol ? e.series : e, g = h.options, _ = !!t.createCheckboxForItem && g && g.showCheckbox, v = a.useHTML, y = e.options.className, b = n.label, x = s + c + f + (_ ? 20 : 0);
		b || (n.group = i.g("legend-item").addClass("highcharts-" + h.type + "-series highcharts-color-" + e.colorIndex + (y ? " " + y : "") + (m ? " highcharts-series-" + e.index : "")).attr({ zIndex: 1 }).add(t.scrollGroup), n.label = b = i.text("", p ? s + c : -c, t.baseline || 0, v), r.styledMode || b.css(u(e.visible ? l : d)), b.attr({
			align: p ? "left" : "right",
			zIndex: 2
		}).add(n.group), t.baseline || (t.fontMetrics = i.fontMetrics(b), t.baseline = t.fontMetrics.f + 3 + t.itemMarginTop, b.attr("y", t.baseline), t.symbolHeight = N(a.symbolHeight, t.fontMetrics.f), a.squareSymbol && (t.symbolWidth = N(a.symbolWidth, Math.max(t.symbolHeight, 16)), x = t.symbolWidth + c + f + (_ ? 20 : 0), p && b.attr("x", t.symbolWidth + c))), h.drawLegendSymbol(t, e), t.setItemEvents && t.setItemEvents(e, b, v)), _ && !e.checkbox && t.createCheckboxForItem && t.createCheckboxForItem(e), t.colorizeItem(e, e.visible), (r.styledMode || !l.width) && b.css({ width: Math.min(a.itemWidth || t.widthOption || r.spacingBox.width, a.maxWidth ? z(a.maxWidth, r.chartWidth) : Infinity) - x + "px" }), t.setText(e);
		let S = b.getBBox(), C = t.fontMetrics?.h || 0;
		e.itemWidth = e.checkboxOffset = a.itemWidth || n.labelWidth || S.width + x, t.maxItemWidth = Math.max(t.maxItemWidth, e.itemWidth), t.totalItemWidth += e.itemWidth, t.itemHeight = e.itemHeight = Math.round(n.labelHeight || (S.height > C * 1.5 ? S.height : C));
	}
	layoutItem(e) {
		let t = this.options, n = this.padding, r = t.layout === "horizontal", i = e.itemHeight, a = this.itemMarginBottom, o = this.itemMarginTop, s = r ? N(t.itemDistance, 20) : 0, c = this.maxLegendWidth, l = t.alignColumns && this.totalItemWidth > c ? this.maxItemWidth : e.itemWidth, u = e.legendItem || {};
		r && this.itemX - n + l > c && (this.itemX = n, this.lastLineHeight && (this.itemY += o + this.lastLineHeight + a), this.lastLineHeight = 0), this.lastItemY = o + this.itemY + a, this.lastLineHeight = Math.max(i, this.lastLineHeight), u.x = this.itemX, u.y = this.itemY, r ? this.itemX += l : (this.itemY += o + i + a, this.lastLineHeight = i), this.offsetWidth = this.widthOption || Math.max((r ? this.itemX - n - (e.checkbox ? 0 : s) : l) + n, this.offsetWidth);
	}
	getAllItems() {
		let e = [];
		return this.chart.series.forEach(function(t) {
			let n = t?.options;
			t && N(n.showInLegend, !a(n.linkedTo) && void 0, !0) && (e = e.concat(t.legendItem?.labels || (n.legendType === "point" ? t.data : t)));
		}), g(this, "afterGetAllItems", { allItems: e }), e;
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
		].forEach((o, s) => {
			o.test(i) && !a(e[s]) && (n[kr[s]] = Math.max(n[kr[s]], n.legend[(s + 1) % 2 ? "legendHeight" : "legendWidth"] + [
				1,
				-1,
				-1,
				1
			][s] * r[s % 2 ? "x" : "y"] + (r.margin ?? 12) + t[s] + (n.titleOffset[s] || 0)));
		});
	}
	proximatePositions() {
		let e = this.chart, t = [], n = this.options.align === "left";
		this.allItems.forEach(function(r) {
			let i, a, o = n, c, l;
			r.yAxis && (r.xAxis.options.reversed && (o = !o), r.points && (i = m(o ? r.points : r.points.slice(0).reverse(), function(e) {
				return s(e.plotY);
			})), a = this.itemMarginTop + r.legendItem.label.getBBox().height + this.itemMarginBottom, l = r.yAxis.top - e.plotTop, r.visible ? (c = i ? i.plotY : r.yAxis.height, c += l - .3 * a) : c = l + r.yAxis.height, t.push({
				target: c,
				size: a,
				item: r
			}));
		}, this);
		let r;
		for (let n of Ar(t, e.plotHeight)) r = n.item.legendItem || {}, s(n.pos) && (r.y = e.plotTop - e.spacing[0] + n.pos);
	}
	render() {
		let e = this, t = e.chart, n = t.spacingBox.width, r = t.renderer, i = e.options, a = e.padding, o = e.getAllItems(), s, c, l, u = e.group, d, f = e.box;
		e.itemX = a, e.itemY = e.initialItemY, e.offsetWidth = 0, e.lastItemY = 0, e.widthOption = z(i.width, n - a), d = n - 2 * a - i.x, ["rm", "lm"].indexOf(e.getAlignment().substring(0, 2)) > -1 && (d /= 2), e.maxLegendWidth = e.widthOption || d, u || (e.group = u = r.g("legend").addClass(i.className || "").attr({ zIndex: 7 }).add(), e.contentGroup = r.g().attr({ zIndex: 1 }).add(u), e.scrollGroup = r.g().add(e.contentGroup)), e.renderTitle(), ce(o, (e, t) => (e.options?.legendIndex || 0) - (t.options?.legendIndex || 0)), i.reversed && o.reverse(), e.allItems = o, e.display = s = !!o.length, e.lastLineHeight = 0, e.maxItemWidth = 0, e.totalItemWidth = 0, e.itemHeight = 0, o.forEach(e.renderItem, e), o.forEach(e.layoutItem, e), c = (i.maxWidth ? Math.min(e.widthOption || e.offsetWidth, d, z(i.maxWidth, t.chartWidth) || Infinity) : e.widthOption || e.offsetWidth) + a, l = e.lastItemY + e.lastLineHeight + e.titleHeight, l = e.handleOverflow(l), l += a, f || (e.box = f = r.rect().addClass("highcharts-legend-box").attr({ r: i.borderRadius }).add(u)), t.styledMode || f.attr({
			stroke: i.borderColor,
			"stroke-width": i.borderWidth || 0,
			fill: i.backgroundColor || "none"
		}).shadow(i.shadow), c > 0 && l > 0 && f[f.placed ? "animate" : "attr"](f.crisp.call({}, {
			x: 0,
			y: 0,
			width: c,
			height: l
		}, f.strokeWidth())), u[s ? "show" : "hide"](), t.styledMode && u.getStyle("display") === "none" && (c = l = 0), e.legendWidth = c, e.legendHeight = l, s && e.align(), this.proximate || this.positionItems(), g(this, "afterRender");
	}
	align(e = this.chart.spacingBox) {
		let t = this.chart, n = this.options, r = e.y;
		/(lth|ct|rth)/.test(this.getAlignment()) && t.titleOffset[0] > 0 ? r += t.titleOffset[0] : /(lbh|cb|rbh)/.test(this.getAlignment()) && t.titleOffset[2] > 0 && (r -= t.titleOffset[2]), r !== e.y && (e = u(e, { y: r })), t.hasRendered || (this.group.placed = !1), this.group.align(u(n, {
			width: this.legendWidth,
			height: this.legendHeight,
			verticalAlign: this.proximate ? "top" : n.verticalAlign
		}), !0, e);
	}
	handleOverflow(e) {
		let t = this, n = this.chart, r = n.renderer, i = this.options, a = i.y, o = i.verticalAlign === "top", s = this.padding, c = i.maxHeight, l = i.navigation, u = N(l.animation, !0), d = l.arrowSize || 12, f = this.pages, p = this.allItems, m = function(e) {
			typeof e == "number" ? S.attr({ height: e }) : S && (t.clipRect = S.destroy(), t.contentGroup.clip()), t.contentGroup.div && (t.contentGroup.div.style.clip = e ? "rect(" + s + "px,9999px," + (s + e) + "px,0)" : "auto");
		}, h = function(e) {
			return t[e] = r.circle(0, 0, d * 1.3).translate(d / 2, d / 2).add(x), n.styledMode || t[e].attr("fill", "rgba(0,0,0,0.0001)"), t[e];
		}, g, _, v, y, b = n.spacingBox.height + (o ? -a : a) - s, x = this.nav, S = this.clipRect;
		return i.layout === "horizontal" && i.verticalAlign !== "middle" && !i.floating && (b /= 2), c && (b = Math.min(b, c)), f.length = 0, e && b > 0 && e > b && l.enabled !== !1 ? (this.clipHeight = g = Math.max(b - 20 - this.titleHeight - s, 0), this.currentPage = N(this.currentPage, 1), this.fullHeight = e, p.forEach((e, t) => {
			v = e.legendItem || {};
			let n = v.y || 0, r = Math.round(v.label.getBBox().height), i = f.length;
			(!i || n - f[i - 1] > g && (_ || n) !== f[i - 1]) && (f.push(_ || n), i++), v.pageIx = i - 1, _ && y && (y.pageIx = i - 1), t === p.length - 1 && n + r - f[i - 1] > g && n > f[i - 1] && (f.push(n), v.pageIx = i), n !== _ && (_ = n), y = v;
		}), S || (S = t.clipRect = r.clipRect(0, s - 2, 9999, 0), t.contentGroup.clip(S)), m(g), x || (this.nav = x = r.g().attr({ zIndex: 1 }).add(this.group), this.up = r.symbol("triangle", 0, 0, d, d).add(x), h("upTracker").on("click", function() {
			t.scroll(-1, u);
		}), this.pager = r.text("", 15, 10).addClass("highcharts-legend-navigation"), !n.styledMode && l.style && this.pager.css(l.style), this.pager.add(x), this.down = r.symbol("triangle-down", 0, 0, d, d).add(x), h("downTracker").on("click", function() {
			t.scroll(1, u);
		})), t.scroll(0), e = b) : x && (m(), this.nav = x.destroy(), this.scrollGroup.attr({ translateY: 1 }), this.clipHeight = 0), e;
	}
	scroll(e, t) {
		let n = this.chart, r = this.pages, i = r.length, a = this.clipHeight, o = this.options.navigation, s = this.pager, c = this.padding, l = this.currentPage + e;
		l > i && (l = i), l > 0 && (t !== void 0 && Er(t, n), this.nav.attr({
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
		}, this), n.styledMode || (this.up.attr({ fill: l === 1 ? o.inactiveColor : o.activeColor }), this.upTracker.css({ cursor: l === 1 ? "default" : "pointer" }), this.down.attr({ fill: l === i ? o.inactiveColor : o.activeColor }), this.downTracker.css({ cursor: l === i ? "default" : "pointer" })), this.scrollOffset = -r[l - 1] + this.initialItemY, this.scrollGroup.animate({ translateY: this.scrollOffset }), this.currentPage = l, this.positionCheckboxes(), ue(() => {
			g(this, "afterScroll", { currentPage: l });
		}, Tr(N(t, n.renderer.globalAnimation, !0)).duration));
	}
	setItemEvents(e, t, n) {
		let r = this, i = e.legendItem || {}, a = r.chart.renderer.boxWrapper, o = e instanceof oe, s = e instanceof be, c = "highcharts-legend-" + (o ? "point" : "series") + "-active", l = r.chart.styledMode, d = n ? [t, i.symbol] : [i.group], f = (t) => {
			r.allItems.forEach((n) => {
				e !== n && [n].concat(n.linkedSeries || []).forEach((e) => {
					e.setState(t, !o);
				});
			});
		};
		for (let n of d) n && n.on("mouseover", function() {
			e.visible && f("inactive"), e.setState("hover"), e.visible && a.addClass(c), l || t.css(r.options.itemHoverStyle);
		}).on("mouseout", function() {
			r.chart.styledMode || t.css(u(e.visible ? r.itemStyle : r.itemHiddenStyle)), f(""), a.removeClass(c), e.setState();
		}).on("click", function(t) {
			a.removeClass(c), g(r, "itemClick", {
				browserEvent: t,
				legendItem: e,
				context: r
			}, function() {
				e.setVisible && e.setVisible(), f(e.visible ? "inactive" : "");
			}), o ? e.firePointEvent("legendItemClick", { browserEvent: t }) : s && g(e, "legendItemClick", { browserEvent: t });
		});
	}
	createCheckboxForItem(e) {
		let t = this;
		e.checkbox = r("input", {
			type: "checkbox",
			className: "highcharts-legend-checkbox",
			checked: e.selected,
			defaultChecked: e.selected
		}, t.options.itemCheckboxStyle, t.chart.container), D(e.checkbox, "click", function(t) {
			let n = t.target;
			g(e.series || e, "checkboxClick", {
				checked: n.checked,
				item: e
			}, function() {
				e.select();
			});
		});
	}
};
(function(e) {
	function t(t) {
		G(Or, "Core.Legend") && D(t, "beforeMargins", function() {
			this.legend = new e(this, this.options.legend);
		});
	}
	e.compose = t;
})(Mr ||= {});
var Nr = Mr, { animObject: Pr } = R, { doc: Fr } = K, { getChartTitle: Ir } = X, { stripHTMLTagsFromString: Lr, addClass: Rr, removeClass: zr } = Y;
function Br(e, t) {
	let n = (e.allItems[t].legendItem || {}).pageIx, r = e.currentPage;
	n !== void 0 && n + 1 !== r && e.scroll(1 + n - r);
}
function Vr(e) {
	let t = e.legend && e.legend.allItems, n = e.options.legend.accessibility || {}, r = e.colorAxis && e.colorAxis.some((e) => !e.dataClasses || !e.dataClasses.length);
	return !!(t && t.length && !r && n.enabled !== !1);
}
function Hr(e, t) {
	let n = t.legendItem || {};
	t.setState(e ? "hover" : "", !0);
	for (let t of [
		"group",
		"label",
		"symbol"
	]) {
		let r = n[t], i = r && r.element || r;
		i && g(i, e ? "mouseover" : "mouseout");
	}
}
var Ur = class extends Cn {
	constructor() {
		super(...arguments), this.highlightedLegendItemIx = NaN, this.proxyGroup = null;
	}
	init() {
		let e = this;
		this.recreateProxies(), this.addEvent(Nr, "afterScroll", function() {
			this.chart === e.chart && (e.proxyProvider.updateGroupProxyElementPositions("legend"), e.updateLegendItemProxyVisibility(), e.highlightedLegendItemIx > -1 && this.chart.highlightLegendItem(e.highlightedLegendItemIx));
		}), this.addEvent(Nr, "afterPositionItem", function(t) {
			this.chart === e.chart && this.chart.renderer && e.updateProxyPositionForItem(t.item);
		}), this.addEvent(Nr, "afterRender", function() {
			this.chart === e.chart && this.chart.renderer && e.recreateProxies() && ue(() => e.proxyProvider.updateGroupProxyElementPositions("legend"), Pr(N(this.chart.renderer.globalAnimation, !0)).duration);
		});
	}
	updateLegendItemProxyVisibility() {
		let e = this.chart, t = e.legend, n = t.allItems || [], r = t.currentPage || 1, i = t.clipHeight || 0, a;
		n.forEach((n) => {
			if (n.a11yProxyElement) {
				let o = t.pages && t.pages.length, s = n.a11yProxyElement.element, c = !1;
				if (a = n.legendItem || {}, o) {
					let e = a.pageIx || 0;
					c = (a.y || 0) + (a.label ? Math.round(a.label.getBBox().height) : 0) - t.pages[e] > i || e !== r - 1;
				}
				c ? e.styledMode ? Rr(s, "highcharts-a11y-invisible") : s.style.visibility = "hidden" : (zr(s, "highcharts-a11y-invisible"), s.style.visibility = "");
			}
		});
	}
	onChartRender() {
		Vr(this.chart) || this.removeProxies();
	}
	highlightAdjacentLegendPage(e) {
		let t = this.chart, n = t.legend, r = (n.currentPage || 1) + e, i = n.pages || [];
		if (r > 0 && r <= i.length) {
			let e = 0, i;
			for (let a of n.allItems) ((a.legendItem || {}).pageIx || 0) + 1 === r && (i = t.highlightLegendItem(e), i && (this.highlightedLegendItemIx = e)), ++e;
		}
	}
	updateProxyPositionForItem(e) {
		e.a11yProxyElement && e.a11yProxyElement.refreshPosition();
	}
	recreateProxies() {
		let e = Fr.activeElement, t = this.proxyGroup, n = e && t && t.contains(e);
		return this.removeProxies(), Vr(this.chart) ? (this.addLegendProxyGroup(), this.proxyLegendItems(), this.updateLegendItemProxyVisibility(), this.updateLegendTitle(), n && this.chart.highlightLegendItem(this.highlightedLegendItemIx), !0) : !1;
	}
	removeProxies() {
		this.proxyProvider.removeGroup("legend");
	}
	updateLegendTitle() {
		let e = this.chart, t = Lr((e.legend && e.legend.options.title && e.legend.options.title.text || "").replace(/<br ?\/?>/g, " "), e.renderer.forExport), n = e.langFormat("accessibility.legend.legendLabel" + (t ? "" : "NoTitle"), {
			chart: e,
			legendTitle: t,
			chartTitle: Ir(e)
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
		let e = this, t = (this.chart.legend || {}).allItems || [], n;
		t.forEach((t) => {
			n = t.legendItem || {}, n.label && n.label.element && e.proxyLegendItem(t);
		});
	}
	proxyLegendItem(e) {
		let t = e.legendItem || {}, n = e.legendItem?.label, r = n?.element, i = t.label?.styles?.textOverflow === "ellipsis";
		if (!t.label || !t.group) return;
		let a = this.chart.langFormat("accessibility.legend.legendItem", {
			chart: this.chart,
			itemName: Lr(e.name, this.chart.renderer.forExport),
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
		return new Z(n, {
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
				t.highlightedLegendItemIx = -1, n.legend.allItems.forEach((e) => Hr(!1, e));
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
		if (!Vr(this.chart)) return !1;
		let e = this.chart, t = (e.options.legend || {}).accessibility || {};
		return !!(e.legend.display && t.keyboardNavigation && t.keyboardNavigation.enabled);
	}
	destroy() {
		this.removeProxies();
	}
};
(function(e) {
	function t(e) {
		let t = this.legend.allItems, n = this.accessibility && this.accessibility.components.legend.highlightedLegendItemIx, r = t[e], i = r?.legendItem || {};
		if (r) {
			s(n) && t[n] && Hr(!1, t[n]), Br(this.legend, e);
			let a = i.label, o = r.a11yProxyElement && r.a11yProxyElement.innerElement;
			return a && a.element && o && this.setFocusToElement(a, o), Hr(!0, r), !0;
		}
		return !1;
	}
	function n(e, n) {
		let i = e.prototype;
		i.highlightLegendItem || (i.highlightLegendItem = t, D(n, "afterColorizeItem", r));
	}
	e.compose = n;
	function r(e) {
		let t = this.chart.options.accessibility, n = e.item;
		t.enabled && n && n.a11yProxyElement && n.a11yProxyElement.innerElement.setAttribute("aria-pressed", e.visible ? "true" : "false");
	}
})(Ur ||= {});
var Wr = Ur, { isTouchDevice: Gr } = K, Kr = [], qr;
function Jr(e, t) {
	if (G(Kr, e)) {
		let n = e.prototype;
		qr = t, n.callbacks.push(ei), D(e, "afterAddSeries", Yr), D(e, "afterSetChartSize", Xr), D(e, "afterUpdate", Zr), D(e, "beforeRender", Qr), D(e, "beforeShowResetZoom", $r), D(e, "update", ti);
	}
}
function Yr() {
	this.navigator && this.navigator.setBaseSeries(null, !1);
}
function Xr() {
	let e = this.legend, t = this.navigator, n, r, i;
	if (t) {
		n = e && e.options, r = t.xAxis, i = t.yAxis;
		let { scrollbarHeight: a, scrollButtonSize: o } = t;
		this.inverted ? (t.left = t.opposite ? this.chartWidth - a - t.height : this.spacing[3] + a, t.top = this.plotTop + o) : (t.left = N(r.left, this.plotLeft + o), t.top = t.navigatorOptions.top || this.chartHeight - t.height - a - (this.scrollbar?.options.margin || 0) - this.spacing[2] - (this.rangeSelector && this.extraBottomMargin ? this.rangeSelector.getHeight() : 0) - (n && n.verticalAlign === "bottom" && n.layout !== "proximate" && n.enabled && !n.floating ? e.legendHeight + N(n.margin, 10) : 0) - (this.titleOffset ? this.titleOffset[2] : 0)), r && i && (this.inverted ? r.options.left = i.options.left = t.left : r.options.top = i.options.top = t.top, r.setAxisSize(), i.setAxisSize());
	}
}
function Zr(e) {
	!this.navigator && !this.scroller && (this.options.navigator.enabled || this.options.scrollbar.enabled) && (this.scroller = this.navigator = new qr(this), N(e.redraw, !0) && this.redraw(e.animation));
}
function Qr() {
	let e = this.options;
	(e.navigator.enabled || e.scrollbar.enabled) && (this.scroller = this.navigator = new qr(this));
}
function $r() {
	let e = this.options, t = e.navigator, n = e.rangeSelector;
	if ((t && t.enabled || n && n.enabled) && (!Gr && this.zooming.type === "x" || Gr && this.zooming.pinchType === "x")) return !1;
}
function ei(e) {
	let t = e.navigator;
	if (t && e.xAxis[0]) {
		let n = e.xAxis[0].getExtremes();
		t.render(n.min, n.max);
	}
}
function ti(e) {
	let t = e.options.navigator || {}, n = e.options.scrollbar || {};
	!this.navigator && !this.scroller && (t.enabled || n.enabled) && (u(!0, this.options.navigator, t), u(!0, this.options.scrollbar, n), delete e.options.navigator, delete e.options.scrollbar);
}
var ni = { compose: Jr }, { isTouchDevice: ri } = K;
function ii() {
	let e = this;
	e.navigatorAxis ||= new oi(e);
}
function ai(e) {
	let t = this, n = t.chart, r = n.options, i = r.navigator, o = t.navigatorAxis, s = n.zooming.pinchType, c = r.rangeSelector, l = n.zooming.type, u;
	if (t.isXAxis && (i?.enabled || c?.enabled)) {
		if (l === "y" && e.trigger === "zoom") u = !1;
		else if ((e.trigger === "zoom" && l === "xy" || ri && s === "xy") && t.options.range) {
			let n = o.previousZoom;
			a(e.min) ? o.previousZoom = [t.min, t.max] : n && (e.min = n[0], e.max = n[1], o.previousZoom = void 0);
		}
	}
	u !== void 0 && e.preventDefault();
}
var oi = class {
	static compose(e) {
		e.keepProps.includes("navigatorAxis") || (e.keepProps.push("navigatorAxis"), D(e, "init", ii), D(e, "setExtremes", ai));
	}
	constructor(e) {
		this.axis = e;
	}
	destroy() {
		this.axis = void 0;
	}
	toFixedRange(e, t, n, r) {
		let i = this.axis, o = (i.pointRange || 0) / 2, c = N(n, i.translate(e, !0, !i.horiz)), l = N(r, i.translate(t, !0, !i.horiz));
		return a(n) || (c = y(c + o)), a(r) || (l = y(l - o)), (!s(c) || !s(l)) && (c = l = void 0), {
			min: c,
			max: l
		};
	}
}, { seriesTypes: si } = W, ci = {
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
		type: si.areaspline === void 0 ? "line" : "areaspline",
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
};
//#endregion
//#region node_modules/highcharts/es-modules/Stock/Navigator/NavigatorSymbols.js
function li(e, t, n, r, i = {}) {
	let a = i.width ? i.width / 2 : n, o = 1.5, s = z(i.borderRadius || 0, Math.min(a * 2, r));
	return r = i.height || r, [
		[
			"M",
			-1.5,
			r / 2 - 3.5
		],
		[
			"L",
			-1.5,
			r / 2 + 4.5
		],
		[
			"M",
			o - 1,
			r / 2 - 3.5
		],
		[
			"L",
			o - 1,
			r / 2 + 4.5
		],
		...Qe.rect(-a - 1, .5, a * 2 + 1, r, { r: s })
	];
}
var ui = { "navigator-handle": li };
//#endregion
//#region node_modules/highcharts/es-modules/Stock/Utilities/StockUtilities.js
function di(e) {
	let t = this.xAxis[0];
	a(t.dataMax) && a(t.dataMin) && e ? this.fixedRange = Math.min(e, t.dataMax - t.dataMin) : this.fixedRange = e;
}
var fi = { setFixedRange: di }, { defaultOptions: pi } = O, { composed: mi } = K, { setFixedRange: hi } = fi;
function gi(e, t, n) {
	oi.compose(t), G(mi, "Navigator") && (e.prototype.setFixedRange = hi, L(gt.prototype.symbols, ui), L(pi, { navigator: ci }), D(n, "afterUpdate", _i));
}
function _i() {
	this.chart.navigator && !this.options.isInternal && this.chart.navigator.setBaseSeries(null, !1);
}
var vi = { compose: gi }, { composed: yi } = K, bi;
(function(e) {
	let t;
	function n(e, n) {
		G(yi, "Axis.Scrollbar") && (t = n, D(e, "afterGetOffset", i), D(e, "afterInit", o), D(e, "afterRender", s));
	}
	e.compose = n;
	function r(e) {
		let t = N(e.options?.min, e.min), n = N(e.options?.max, e.max);
		return {
			axisMin: t,
			axisMax: n,
			scrollMin: a(e.dataMin) ? Math.min(t, e.min ?? Infinity, e.dataMin, e.threshold ?? Infinity) : t,
			scrollMax: e.treeGrid?.adjustedMax ?? (a(e.dataMax) ? Math.max(n, e.max ?? -Infinity, e.dataMax, e.threshold ?? -Infinity) : n)
		};
	}
	function i() {
		let e = this, t = e.scrollbar, n = t && !t.options.opposite, r = e.horiz ? 2 : n ? 3 : 1;
		t && (e.chart.scrollbarsOffsets = [0, 0], e.chart.axisOffset[r] += t.size + (t.options.margin || 0));
	}
	function o() {
		let e = this;
		e.options?.scrollbar?.enabled && (e.options.scrollbar.vertical = !e.horiz, e.options.startOnTick = e.options.endOnTick = !1, e.scrollbar = new t(e.chart.renderer, e.options.scrollbar, e.chart), D(e.scrollbar, "changed", function(t) {
			let { axisMin: n, axisMax: i, scrollMin: o, scrollMax: s } = r(e), c = e.toPixels(o), l = e.toPixels(s) - c, u, d;
			if (!(!a(n) || !a(i))) if (e.horiz && !e.reversed || !e.horiz && e.reversed ? (u = Math.min(s, e.toValue(c + l * this.to)), d = Math.max(o, e.toValue(c + l * this.from))) : (u = Math.min(s, e.toValue(c + l * (1 - this.from))), d = Math.max(o, e.toValue(c + l * (1 - this.to)))), this.shouldUpdateExtremes(t.DOMType)) {
				let n = t.DOMType === "mousemove" || t.DOMType === "touchmove" ? !1 : void 0;
				e.setExtremes(y(d), y(u), !0, n, t);
			} else this.setRange(this.from, this.to);
		}));
	}
	function s() {
		let e = this, { scrollMin: t, scrollMax: n } = r(e), i = e.scrollbar, o = (e.axisTitleMargin || 0) + (e.titleOffset || 0), s = e.chart.scrollbarsOffsets, c = e.options.margin || 0, l, u, d;
		if (i && s) {
			if (e.horiz) e.opposite || (s[1] += o), i.position(e.left, e.top + e.height + 2 + s[1] - (e.opposite ? c : 0), e.width, e.height), e.opposite || (s[1] += c), l = 1;
			else {
				e.opposite && (s[0] += o);
				let t;
				t = i.options.opposite ? e.left + e.width + 2 + s[0] - (e.opposite ? 0 : c) : e.opposite ? 0 : c, i.position(t, e.top, e.width, e.height), e.opposite && (s[0] += c), l = 0;
			}
			if (s[l] += i.size + (i.options.margin || 0), isNaN(t) || isNaN(n) || !a(e.min) || !a(e.max) || a(e.dataMin) && e.dataMin === e.dataMax) i.setRange(0, 1);
			else if (e.min === e.max) {
				let t = e.pointRange / (e.dataMax + 1);
				u = t * e.min, d = t * (e.max + 1), i.setRange(u, d);
			} else u = (e.toPixels(e.min) - e.toPixels(t)) / (e.toPixels(n) - e.toPixels(t)), d = (e.toPixels(e.max) - e.toPixels(t)) / (e.toPixels(n) - e.toPixels(t)), e.horiz && !e.reversed || !e.horiz && e.reversed ? i.setRange(u, d) : i.setRange(1 - d, 1 - u);
		}
	}
})(bi ||= {});
var xi = bi, Si = {
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
}, { defaultOptions: Ci } = O, { composed: wi } = K, Ti = class e {
	static compose(t) {
		xi.compose(t, e), G(wi, "Scrollbar") && L(Ci, { scrollbar: Si });
	}
	static swapXY(e, t) {
		return t && e.forEach((e) => {
			let t = e.length, n;
			for (let r = 0; r < t; r += 2) n = e[r + 1], typeof n == "number" && (e[r + 1] = e[r + 2], e[r + 2] = n);
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
			D.apply(null, e);
		}), this._events = s;
	}
	buttonToMaxClick(e) {
		let t = this, n = (t.to - t.from) * N(t.options.step, .2);
		t.updatePosition(t.from + n, t.to + n), g(t, "changed", {
			from: t.from,
			to: t.to,
			trigger: "scrollbar",
			DOMEvent: e
		});
	}
	buttonToMinClick(e) {
		let t = this, n = y(t.to - t.from) * N(t.options.step, .2);
		t.updatePosition(y(t.from - n), y(t.to - n)), g(t, "changed", {
			from: t.from,
			to: t.to,
			trigger: "scrollbar",
			DOMEvent: e
		});
	}
	cursorToScrollbarPosition(e) {
		let t = this, n = t.options, r = n.minWidth > t.calculatedWidth ? n.minWidth : 0;
		return {
			chartX: (e.chartX - t.x - t.xOffset) / (t.barWidth - r),
			chartY: (e.chartY - t.y - t.yOffset) / (t.barWidth - r)
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
		}), t && e === t.scrollbar && (t.scrollbar = null, i(t.scrollbarButtons));
	}
	drawScrollbarButton(t) {
		let n = this, r = n.renderer, i = n.scrollbarButtons, a = n.options, o = n.size, s = r.g().add(n.group);
		if (i.push(s), a.buttonsEnabled) {
			let c = r.rect().addClass("highcharts-scrollbar-button").add(s);
			n.chart.styledMode || c.attr({
				stroke: a.buttonBorderColor,
				"stroke-width": a.buttonBorderWidth,
				fill: a.buttonBackgroundColor
			}), c.attr(c.crisp({
				x: -.5,
				y: -.5,
				width: o,
				height: o,
				r: a.buttonBorderRadius
			}, c.strokeWidth()));
			let l = r.path(e.swapXY([
				[
					"M",
					o / 2 + (t ? -1 : 1),
					o / 2 - 3
				],
				[
					"L",
					o / 2 + (t ? -1 : 1),
					o / 2 + 3
				],
				[
					"L",
					o / 2 + (t ? 2 : -2),
					o / 2
				]
			], a.vertical)).addClass("highcharts-scrollbar-arrow").add(i[t]);
			n.chart.styledMode || l.attr({ fill: a.buttonArrowColor });
		}
	}
	init(e, t, n) {
		let r = this;
		r.scrollbarButtons = [], r.renderer = e, r.userOptions = t, r.options = u(Si, Ci.scrollbar, t), r.options.margin = N(r.options.margin, 10), r.chart = n, r.size = N(r.options.size, r.options.height), t.enabled && (r.render(), r.addEvents());
	}
	mouseDownHandler(e) {
		let t = this, n = t.chart.pointer?.normalize(e) || e, r = t.cursorToScrollbarPosition(n);
		t.chartX = r.chartX, t.chartY = r.chartY, t.initPositions = [t.from, t.to], t.grabbedCenter = !0;
	}
	mouseMoveHandler(e) {
		let t = this, n = t.chart.pointer?.normalize(e) || e, r = t.options.vertical ? "chartY" : "chartX", i = t.initPositions || [], a, o, s;
		t.grabbedCenter && (!e.touches || e.touches[0][r] !== 0) && (o = t.cursorToScrollbarPosition(n)[r], a = t[r], s = o - a, t.hasDragged = !0, t.updatePosition(i[0] + s, i[1] + s), t.hasDragged && g(t, "changed", {
			from: t.from,
			to: t.to,
			trigger: "scrollbar",
			DOMType: e.type,
			DOMEvent: e
		}));
	}
	mouseUpHandler(e) {
		let t = this;
		t.hasDragged && g(t, "changed", {
			from: t.from,
			to: t.to,
			trigger: "scrollbar",
			DOMType: e.type,
			DOMEvent: e
		}), t.grabbedCenter = t.hasDragged = t.chartX = t.chartY = null;
	}
	position(e, t, n, r) {
		let i = this, { buttonsEnabled: a, margin: o = 0, vertical: s } = i.options, c = i.rendered ? "animate" : "attr", l = r, u = 0;
		i.group.show(), i.x = e, i.y = t + this.trackBorderWidth, i.width = n, i.height = r, i.xOffset = l, i.yOffset = u, s ? (i.width = i.yOffset = n = u = i.size, i.xOffset = l = 0, i.yOffset = u = a ? i.size : 0, i.barWidth = r - (a ? n * 2 : 0), i.x = e += o) : (i.height = r = i.size, i.xOffset = l = a ? i.size : 0, i.barWidth = n - (a ? r * 2 : 0), i.y += o), i.group[c]({
			translateX: e,
			translateY: i.y
		}), i.track[c]({
			width: n,
			height: r
		}), i.scrollbarButtons[1][c]({
			translateX: s ? 0 : n - l,
			translateY: s ? r - u : 0
		});
	}
	removeEvents() {
		this._events.forEach(function(e) {
			H.apply(null, e);
		}), this._events.length = 0;
	}
	render() {
		let t = this, n = t.renderer, r = t.options, i = t.size, a = t.chart.styledMode, o = n.g("scrollbar").attr({ zIndex: r.zIndex }).hide().add();
		t.group = o, t.track = n.rect().addClass("highcharts-scrollbar-track").attr({
			r: r.trackBorderRadius || 0,
			height: i,
			width: i
		}).add(o), a || t.track.attr({
			fill: r.trackBackgroundColor,
			stroke: r.trackBorderColor,
			"stroke-width": r.trackBorderWidth
		});
		let s = t.trackBorderWidth = t.track.strokeWidth();
		t.track.attr({
			x: -pe(0, s),
			y: -pe(0, s)
		}), t.scrollbarGroup = n.g().add(o), t.scrollbar = n.rect().addClass("highcharts-scrollbar-thumb").attr({
			height: i - s,
			width: i - s,
			r: r.barBorderRadius || 0
		}).add(t.scrollbarGroup), t.scrollbarRifles = n.path(e.swapXY([
			[
				"M",
				-3,
				i / 4
			],
			[
				"L",
				-3,
				2 * i / 3
			],
			[
				"M",
				0,
				i / 4
			],
			[
				"L",
				0,
				2 * i / 3
			],
			[
				"M",
				3,
				i / 4
			],
			[
				"L",
				3,
				2 * i / 3
			]
		], r.vertical)).addClass("highcharts-scrollbar-rifles").add(t.scrollbarGroup), a || (t.scrollbar.attr({
			fill: r.barBackgroundColor,
			stroke: r.barBorderColor,
			"stroke-width": r.barBorderWidth
		}), t.scrollbarRifles.attr({
			stroke: r.rifleColor,
			"stroke-width": 1
		})), t.scrollbarStrokeWidth = t.scrollbar.strokeWidth(), t.scrollbarGroup.translate(-pe(0, t.scrollbarStrokeWidth), -pe(0, t.scrollbarStrokeWidth)), t.drawScrollbarButton(0), t.drawScrollbarButton(1);
	}
	setRange(e, t) {
		let n = this, r = n.options, i = r.vertical, o = r.minWidth, s = n.barWidth, c = this.rendered && !this.hasDragged && !(this.chart.navigator && this.chart.navigator.hasDragged) ? "animate" : "attr";
		if (!a(s)) return;
		let l = s * Math.min(t, 1), u, d;
		e = Math.max(e, 0), u = Math.ceil(s * e), n.calculatedWidth = d = y(l - u), d < o && (u = (s - o + d) * e, d = o);
		let f = Math.floor(u + n.xOffset + n.yOffset), p = d / 2 - .5;
		n.from = e, n.to = t, i ? (n.scrollbarGroup[c]({ translateY: f }), n.scrollbar[c]({ height: d }), n.scrollbarRifles[c]({ translateY: p }), n.scrollbarTop = f, n.scrollbarLeft = 0) : (n.scrollbarGroup[c]({ translateX: f }), n.scrollbar[c]({ width: d }), n.scrollbarRifles[c]({ translateX: p }), n.scrollbarLeft = f, n.scrollbarTop = 0), d <= 12 ? n.scrollbarRifles.hide() : n.scrollbarRifles.show(), r.showFull === !1 && (e <= 0 && t >= 1 ? n.group.hide() : n.group.show()), n.rendered = !0;
	}
	shouldUpdateExtremes(e) {
		return N(this.options.liveRedraw, K.svg && !K.isTouchDevice && !this.chart.boosted) || e === "mouseup" || e === "touchend" || !a(e);
	}
	trackClick(e) {
		let t = this, n = t.chart.pointer?.normalize(e) || e, r = t.to - t.from, i = t.y + t.scrollbarTop, a = t.x + t.scrollbarLeft;
		t.options.vertical && n.chartY > i || !t.options.vertical && n.chartX > a ? t.updatePosition(t.from + r, t.to + r) : t.updatePosition(t.from - r, t.to - r), g(t, "changed", {
			from: t.from,
			to: t.to,
			trigger: "scrollbar",
			DOMEvent: e
		});
	}
	update(e) {
		this.destroy(), this.init(this.chart.renderer, u(!0, this.options, e), this.chart);
	}
	updatePosition(e, t) {
		t > 1 && (e = y(1 - y(t - e)), t = 1), e < 0 && (t = y(t - e), e = 0), this.from = e, this.to = t;
	}
};
Ti.defaultOptions = Si;
//#endregion
//#region node_modules/highcharts/es-modules/Stock/Navigator/Navigator.js
var { defaultOptions: Ei } = O, { isTouchDevice: Di } = K;
function Oi(e, ...t) {
	let n = [].filter.call(t, s);
	if (n.length) return Math[e].apply(0, n);
}
var ki = class e {
	static compose(t, n, r) {
		ni.compose(t, e), vi.compose(t, n, r);
	}
	constructor(e) {
		this.isDirty = !1, this.scrollbarHeight = 0, this.init(e);
	}
	drawHandle(e, t, n, r) {
		let i = this, a = i.navigatorOptions.handles.height;
		i.handles[t][r](n ? {
			translateX: Math.round(i.left + i.height / 2),
			translateY: Math.round(i.top + parseInt(e, 10) + .5 - a)
		} : {
			translateX: Math.round(i.left + parseInt(e, 10)),
			translateY: Math.round(i.top + i.height / 2 - a / 2 - 1)
		});
	}
	drawOutline(e, t, n, r) {
		let i = this, a = i.navigatorOptions.maskInside, o = i.outline.strokeWidth(), s = o / 2, c = o % 2 / 2, l = i.scrollButtonSize, u = i.size, d = i.top, f = i.height, p = d - s, m = d + f, h = i.left, g, _;
		n ? (g = d + t + c, t = d + e + c, _ = [
			[
				"M",
				h + f,
				d - l - c
			],
			[
				"L",
				h + f,
				g
			],
			[
				"L",
				h,
				g
			],
			[
				"M",
				h,
				t
			],
			[
				"L",
				h + f,
				t
			],
			[
				"L",
				h + f,
				d + u + l
			]
		], a && _.push([
			"M",
			h + f,
			g - s
		], [
			"L",
			h + f,
			t + s
		])) : (h -= l, e += h + l - c, t += h + l - c, _ = [
			[
				"M",
				h,
				p
			],
			[
				"L",
				e,
				p
			],
			[
				"L",
				e,
				m
			],
			[
				"M",
				t,
				m
			],
			[
				"L",
				t,
				p
			],
			[
				"L",
				h + u + l * 2,
				p
			]
		], a && _.push([
			"M",
			e - s,
			p
		], [
			"L",
			t + s,
			p
		])), i.outline[r]({ d: _ });
	}
	drawMasks(e, t, n, r) {
		let i = this, a = i.left, o = i.top, s = i.height, c, l, u, d;
		n ? (u = [
			a,
			a,
			a
		], d = [
			o,
			o + e,
			o + t
		], l = [
			s,
			s,
			s
		], c = [
			e,
			t - e,
			i.size - t
		]) : (u = [
			a,
			a + e,
			a + t
		], d = [
			o,
			o,
			o
		], l = [
			e,
			t - e,
			i.size - t
		], c = [
			s,
			s,
			s
		]), i.shades.forEach((e, t) => {
			e[r]({
				x: u[t],
				y: d[t],
				width: l[t],
				height: c[t]
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
				n ||= e.handles[t]?.symbolName !== u, n && (e.handles[t]?.destroy(), e.handles[t] = a.symbol(u, -l / 2 - 1, 0, l, c, i), e.handles[t].attr({ zIndex: 7 - t }).addClass("highcharts-navigator-handle highcharts-navigator-handle-" + ["left", "right"][t]).add(s)), r.inverted && e.handles[t].attr({
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
		if (u(!0, n.options.navigator, e), this.navigatorOptions = n.options.navigator || {}, this.setOpposite(), a(e.enabled) || r) return this.destroy(), this.navigatorEnabled = e.enabled || this.navigatorEnabled, this.init(n);
		if (this.navigatorEnabled && (this.isDirty = !0, e.adaptToUpdatedData === !1 && this.baseSeries.forEach((e) => {
			H(e, "updatedData", this.updatedDataHandler);
		}, this), e.adaptToUpdatedData && this.baseSeries.forEach((e) => {
			e.eventsToUnbind.push(D(e, "updatedData", this.updatedDataHandler));
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
		let i = this, o = i.chart, c = i.xAxis, l = c.pointRange || 0, u = c.navigatorAxis.fake ? o.xAxis[0] : c, d = i.navigatorEnabled, f = i.rendered, p = o.inverted, m = o.xAxis[0].minRange, h = o.xAxis[0].options.maxRange, _ = i.scrollButtonSize, v, b, x, S = i.scrollbarHeight, C, w;
		if (this.hasDragged && !a(n)) return;
		if (this.isDirty && this.renderElements(), e = y(e - l / 2), t = y(t + l / 2), !s(e) || !s(t)) if (f) n = 0, r = N(c.width, u.width);
		else return;
		i.left = N(c.left, o.plotLeft + _ + (p ? o.plotWidth : 0));
		let T = i.size = C = N(c.len, (p ? o.plotHeight : o.plotWidth) - 2 * _);
		v = p ? S : C + 2 * _, n = N(n, c.toPixels(e, !0)), r = N(r, c.toPixels(t, !0)), (!s(n) || Math.abs(n) === Infinity) && (n = 0, r = v);
		let E = c.toValue(n, !0), D = c.toValue(r, !0), O = Math.abs(y(D - E));
		a(m) && O < m ? this.grabbedLeft ? n = c.toPixels(D - m - l, !0) : this.grabbedRight && (r = c.toPixels(E + m + l, !0)) : a(h) && y(O - l) > h && (this.grabbedLeft ? n = c.toPixels(D - h - l, !0) : this.grabbedRight && (r = c.toPixels(E + h + l, !0))), i.zoomedMax = q(Math.max(n, r), 0, T), i.zoomedMin = q(i.fixedWidth ? i.zoomedMax - i.fixedWidth : Math.min(n, r), 0, T), i.range = i.zoomedMax - i.zoomedMin, T = Math.round(i.zoomedMax);
		let k = Math.round(i.zoomedMin);
		d && (i.navigatorGroup.attr({ visibility: "inherit" }), w = f && !i.hasDragged ? "animate" : "attr", i.drawMasks(k, T, p, w), i.drawOutline(k, T, p, w), i.navigatorOptions.handles?.enabled && (i.drawHandle(k, 0, p, w), i.drawHandle(T, 1, p, w))), i.scrollbar && (p ? (x = i.top - _, b = i.left - S + (d || !u.opposite ? 0 : (u.titleOffset || 0) + u.axisTitleMargin), S = C + 2 * _) : (x = i.top + (d ? i.height : -S), b = i.left - _), i.scrollbar.position(b, x, v, S), i.scrollbar.setRange(i.zoomedMin / (C || 1), i.zoomedMax / (C || 1))), i.rendered = !0, this.isDirty = !1, g(this, "afterRender");
	}
	addMouseEvents() {
		let e = this, t = e.chart, n = t.container, r = [], i, a;
		e.mouseMoveHandler = i = function(t) {
			e.onMouseMove(t);
		}, e.mouseUpHandler = a = function(t) {
			e.onMouseUp(t);
		}, r.push(D(t.renderTo, "mousemove", i), D(n.ownerDocument, "mouseup", a), D(t.renderTo, "touchmove", i), D(n.ownerDocument, "touchend", a)), e.eventsToUnbind = r, e.series && e.series[0] && r.push(D(e.series[0].xAxis, "foundExtremes", function() {
			t.navigator?.modifyNavigatorAxisExtremes();
		}));
	}
	getPartsEvents(e) {
		let t = this, n = [];
		return ["shades", "handles"].forEach((r) => {
			t[r].forEach(function(i, a) {
				n.push(D(i.element, e, function(e) {
					t[`${r}Mousedown`](e, a);
				}));
			});
		}), n;
	}
	shadesMousedown(e, t) {
		e = this.chart.pointer?.normalize(e) || e;
		let n = this, r = n.chart, i = n.xAxis, o = n.zoomedMin, s = n.size, c = n.range, l = n.left, u = e.chartX, d, f, p, m;
		r.inverted && (u = e.chartY, l = n.top), t === 1 ? (n.grabbedCenter = u, n.fixedWidth = c, n.dragOffset = u - o) : (m = u - l - c / 2, t === 0 ? m = Math.max(0, m) : t === 2 && m + c >= s && (m = s - c, n.reversedExtremes ? (m -= c, f = n.getUnionExtremes()?.dataMin) : d = n.getUnionExtremes()?.dataMax), m !== o && (n.fixedWidth = c, p = i.navigatorAxis.toFixedRange(m, m + c, f, d), a(p.min) && g(this, "setRange", {
			min: Math.min(p.min, p.max),
			max: Math.max(p.min, p.max),
			redraw: !0,
			eventArguments: { trigger: "navigator" }
		})));
	}
	handlesMousedown(e, t) {
		e = this.chart.pointer?.normalize(e) || e;
		let n = this, r = n.chart, i = r.xAxis[0], a = n.reversedExtremes;
		t === 0 ? (n.grabbedLeft = !0, n.otherHandlePos = n.zoomedMax, n.fixedExtreme = a ? i.min : i.max) : (n.grabbedRight = !0, n.otherHandlePos = n.zoomedMin, n.fixedExtreme = a ? i.max : i.min), r.setFixedRange(void 0);
	}
	onMouseMove(e) {
		let t = this, n = t.chart, r = t.navigatorSize, i = t.range, a = t.dragOffset, o = n.inverted, s = t.left, c;
		(!e.touches || e.touches[0].pageX !== 0) && (e = n.pointer?.normalize(e) || e, c = e.chartX, o && (s = t.top, c = e.chartY), t.grabbedLeft ? (t.hasDragged = !0, t.render(0, 0, c - s, t.otherHandlePos)) : t.grabbedRight ? (t.hasDragged = !0, t.render(0, 0, t.otherHandlePos, c - s)) : t.grabbedCenter && a && (t.hasDragged = !0, c < a ? c = a : c > r + a - i && (c = r + a - i), t.render(0, 0, c - a, c - a + i)), t.hasDragged && N(t.scrollbarOptions?.liveRedraw, !Di && !this.chart.boosted) && (e.DOMType = e.type, setTimeout(function() {
			t.onMouseUp(e);
		}, 0)));
	}
	onMouseUp(e) {
		let t = this, n = t.chart, r = t.xAxis, i = t.scrollbar, o = e.DOMEvent || e, c = n.inverted, l = t.rendered && !t.hasDragged ? "animate" : "attr", u, d, f, p, m, h;
		(t.hasDragged && (!i || !i.hasDragged) || e.trigger === "scrollbar") && (f = t.getUnionExtremes(), t.zoomedMin === t.otherHandlePos ? p = t.fixedExtreme : t.zoomedMax === t.otherHandlePos && (m = t.fixedExtreme), t.zoomedMax === t.size && (m = t.reversedExtremes ? f.dataMin : f.dataMax), t.zoomedMin === 0 && (p = t.reversedExtremes ? f.dataMax : f.dataMin), h = r.navigatorAxis.toFixedRange(t.zoomedMin, t.zoomedMax, p, m), a(h.min) && g(this, "setRange", {
			min: Math.min(h.min, h.max),
			max: Math.max(h.min, h.max),
			redraw: !0,
			animation: !t.hasDragged && null,
			eventArguments: {
				trigger: "navigator",
				triggerOp: "navigator-drag",
				DOMEvent: o
			}
		})), e.DOMType !== "mousemove" && e.DOMType !== "touchmove" && (t.grabbedLeft = t.grabbedRight = t.grabbedCenter = t.fixedWidth = t.fixedExtreme = t.otherHandlePos = t.hasDragged = t.dragOffset = null), t.navigatorEnabled && s(t.zoomedMin) && s(t.zoomedMax) && (d = Math.round(t.zoomedMin), u = Math.round(t.zoomedMax), t.shades && t.drawMasks(d, u, c, l), t.outline && t.drawOutline(d, u, c, l), t.navigatorOptions.handles?.enabled && Object.keys(t.handles).length === t.handles.length && (t.drawHandle(d, 0, c, l), t.drawHandle(u, 1, c, l)));
	}
	removeEvents() {
		this.eventsToUnbind?.forEach((e) => {
			e();
		}), this.eventsToUnbind = void 0, this.removeBaseSeriesEvents();
	}
	removeBaseSeriesEvents() {
		let e = this.baseSeries || [];
		this.navigatorEnabled && e[0] && (this.navigatorOptions.adaptToUpdatedData !== !1 && e.forEach(function(e) {
			H(e, "updatedData", this.updatedDataHandler);
		}, this), e[0].xAxis && H(e[0].xAxis, "foundExtremes", this.modifyBaseAxisExtremes));
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
		let t = e.options, n = t.navigator || {}, r = n.enabled, i = t.scrollbar || {}, a = i.enabled, o = r && n.height || 0, c = a && i.height || 0, l = i.buttonsEnabled && c || 0;
		this.handles = [], this.shades = [], this.chart = e, this.setBaseSeries(), this.height = o, this.scrollbarHeight = c, this.scrollButtonSize = l, this.scrollbarEnabled = a, this.navigatorEnabled = !!r, this.navigatorOptions = n, this.scrollbarOptions = i, this.setOpposite();
		let d = this, f = d.baseSeries, p = e.xAxis.length, m = e.yAxis.length, h = f && f[0] && f[0].xAxis || e.xAxis[0] || { options: {} };
		if (e.isDirtyBox = !0, d.navigatorEnabled) {
			let t = this.getXAxisOffsets();
			d.xAxis = new Le(e, u({
				breaks: h.options.breaks,
				ordinal: h.options.ordinal,
				overscroll: h.options.overscroll
			}, n.xAxis, {
				type: "datetime",
				yAxis: n.yAxis?.id,
				index: p,
				isInternal: !0,
				offset: 0,
				keepOrdinalPadding: !0,
				startOnTick: !1,
				endOnTick: !1,
				minPadding: h.options.ordinal ? 0 : h.options.minPadding,
				maxPadding: h.options.ordinal ? 0 : h.options.maxPadding,
				zoomEnabled: !1
			}, e.inverted ? {
				offsets: t,
				width: o
			} : {
				offsets: t,
				height: o
			}), "xAxis"), d.yAxis = new Le(e, u(n.yAxis, {
				alignTicks: !1,
				offset: 0,
				index: m,
				isInternal: !0,
				reversed: N(n.yAxis && n.yAxis.reversed, e.yAxis[0] && e.yAxis[0].reversed, !1),
				zoomEnabled: !1
			}, e.inverted ? { width: o } : { height: o }), "yAxis"), d.xAxis.clippable = !1, d.yAxis.clippable = !1, f || n.series?.data || n.series?.dataTable ? d.updateNavigatorSeries(!1) : e.series.length === 0 && (d.unbindRedraw = D(e, "beforeRedraw", function() {
				e.series.length > 0 && !d.series && (d.setBaseSeries(), d.unbindRedraw?.());
			})), d.reversedExtremes = e.inverted && !d.xAxis.reversed || !e.inverted && d.xAxis.reversed, d.renderElements(), d.addMouseEvents();
		} else d.xAxis = {
			chart: e,
			navigatorAxis: { fake: !0 },
			translate: function(t, n) {
				let r = e.xAxis[0], i = r.getExtremes(), a = r.len - 2 * l, o = Oi("min", r.options.min, i.dataMin), s = Oi("max", r.options.max, i.dataMax) - o;
				return n ? t * s / a + o : a * (t - o) / s;
			},
			toPixels: function(e) {
				return this.translate(e);
			},
			toValue: function(e) {
				return this.translate(e, !0);
			}
		}, d.xAxis.navigatorAxis.axis = d.xAxis, d.xAxis.navigatorAxis.toFixedRange = oi.prototype.toFixedRange.bind(d.xAxis.navigatorAxis);
		if (e.options.scrollbar?.enabled) {
			let t = u(e.options.scrollbar, { vertical: e.inverted });
			s(t.margin) || (t.margin = e.inverted ? -3 : 3), e.scrollbar = d.scrollbar = new Ti(e.renderer, t, e), D(d.scrollbar, "changed", function(e) {
				let t = d.size, n = t * this.to, r = t * this.from;
				d.hasDragged = d.scrollbar?.hasDragged, d.render(0, 0, r, n), this.shouldUpdateExtremes(e.DOMType) && setTimeout(function() {
					d.onMouseUp(e);
				});
			});
		}
		d.addBaseSeriesEvents(), d.addChartEvents();
	}
	setOpposite() {
		let e = this.navigatorOptions, t = this.navigatorEnabled, n = this.chart;
		this.opposite = N(e.opposite, !!(!t && n.inverted));
	}
	getUnionExtremes(e) {
		let t = this.chart.xAxis[0], n = this.chart.time, r = this.xAxis, i = r.options, a = t.options, o;
		return (!e || t.dataMin !== null) && (o = {
			dataMin: N(n.parse(i?.min), Oi("min", n.parse(a.min), t.dataMin, r.dataMin, r.min)),
			dataMax: N(n.parse(i?.max), Oi("max", n.parse(a.max), t.dataMax, r.dataMax, r.max))
		}), o;
	}
	setBaseSeries(e, t) {
		let n = this.chart, r = this.baseSeries = [];
		e = e || n.options.navigator?.baseSeries || (n.series.length ? m(n.series, (e) => !e.options.isInternal).index : 0), (n.series || []).forEach((t, n) => {
			!t.options.isInternal && (t.options.showInNavigator || (n === e || t.options.id === e) && t.options.showInNavigator !== !1) && r.push(t);
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
			return t && i.indexOf(t) < 0 ? (t && (H(t, "updatedData", n.updatedDataHandler), delete t.navigatorSeries), e.chart && e.destroy(), !1) : !0;
		}), s, c, l = n.navigatorOptions.series, d;
		if (i && i.length && i.forEach((e) => {
			let f = e.navigatorSeries, p = L({
				color: e.color,
				visible: e.visible
			}, S(l) ? Ei.navigator.series : l);
			if (f && n.navigatorOptions.adaptToUpdatedData === !1) return;
			a.name = "Navigator " + i.length, s = e.options || {}, d = s.navigatorOptions || {}, p.dataLabels = k(p.dataLabels), c = u(s, a, p, d), c.pointRange = N(p.pointRange, d.pointRange, Ei.plotOptions[c.type || "line"]?.pointRange);
			let m = d.data || p.data, h = d.dataTable || p.dataTable;
			n.hasNavigatorData = n.hasNavigatorData || !!m || !!h, c.data = m || s.data?.slice(0), c.dataTable = h || s.dataTable, f && f.options ? f.update(c, t) : (e.navigatorSeries = r.initSeries(c), g(e.navigatorSeries, "afterUpdate"), e.navigatorSeries.baseSeries = e, o.push(e.navigatorSeries));
		}), (l?.data || l?.dataTable) && !(i && i.length) || S(l)) {
			let e = r.options.colors || [];
			n.hasNavigatorData = !1, l = k(l), l.forEach((t, i) => {
				a.name = "Navigator " + (o.length + 1), c = u(Ei.navigator?.series, { color: r.series[i] && !r.series[i].options.isInternal && r.series[i].color || e[i] || e[0] }, a, t), c.data = t.data, c.dataTable = t.dataTable, (c.data || c.dataTable) && (n.hasNavigatorData = !0, o.push(r.initSeries(c)));
			});
		}
		e && this.addBaseSeriesEvents();
	}
	addBaseSeriesEvents() {
		let e = this, n = e.baseSeries || [];
		n[0] && n[0].xAxis && n[0].eventsToUnbind.push(D(n[0].xAxis, "foundExtremes", this.modifyBaseAxisExtremes)), n.forEach((r) => {
			r.eventsToUnbind.push(D(r, "show", function() {
				this.navigatorSeries && this.navigatorSeries.setVisible(!0, !1);
			})), r.eventsToUnbind.push(D(r, "hide", function() {
				this.navigatorSeries && this.navigatorSeries.setVisible(!1, !1);
			})), this.navigatorOptions.adaptToUpdatedData !== !1 && r.xAxis && r.eventsToUnbind.push(D(r, "updatedData", this.updatedDataHandler)), r.eventsToUnbind.push(D(r, "remove", function() {
				n && t(n, r), this.navigatorSeries && e.series && (t(e.series, this.navigatorSeries), a(this.navigatorSeries.options) && this.navigatorSeries.remove(!1), delete this.navigatorSeries);
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
		let e = this, t = e.chart.navigator, n = e.getExtremes(), r = n.min, i = n.max, a = n.dataMin, o = n.dataMax, c = i - r, l = t?.stickToMin, u = t?.stickToMax, d = N(e.ordinal?.convertOverscroll(e.options.overscroll), 0), f = t.series && t.series[0], p = !!e.setExtremes, m = e.eventArgs && e.eventArgs.trigger === "rangeSelectorButton", h, g;
		m || (l && (g = a, h = g + c), u && (h = o + d, l || (g = Math.max(a, h - c, t.getBaseSeriesMin(f && f.xData ? f.xData[0] : -Number.MAX_VALUE)))), p && (l || u) && s(g) && (e.min = e.userMin = g, e.max = e.userMax = h)), t.stickToMin = t.stickToMax = null;
	}
	updatedDataHandler() {
		let e = this.chart.navigator, t = this, n = this.navigatorSeries, r = e.reversedExtremes ? Math.round(e.zoomedMin) === 0 : Math.round(e.zoomedMax) >= Math.round(e.size);
		e.stickToMax = N(this.chart.options.navigator && this.chart.options.navigator.stickToMax, r), e.stickToMin = e.shouldStickToMin(t, e), n && !e.hasNavigatorData && (n.options.pointStart = t.getColumn("x")[0], n.setData(t.options.data || t.options.dataTable, !1, void 0, !1));
	}
	shouldStickToMin(e, t) {
		let n = t.getBaseSeriesMin(e.getColumn("x")[0]), r = e.xAxis, i = r.max, a = r.min, o = r.options.range, c = !0;
		return c = s(i) && s(a) ? o && i - n > 0 ? i - n < o : a <= n : !1, c;
	}
	addChartEvents() {
		this.eventsToUnbind ||= [], this.eventsToUnbind.push(D(this.chart, "redraw", function() {
			let e = this.navigator, t = e && (e.baseSeries && e.baseSeries[0] && e.baseSeries[0].xAxis || this.xAxis[0]);
			t && e.render(t.min, t.max);
		}), D(this.chart, "getMargins", function() {
			let e = this, t = e.navigator, n = t.opposite ? "plotTop" : "marginBottom";
			e.inverted && (n = t.opposite ? "marginRight" : "plotLeft"), e[n] = (e[n] || 0) + (t.navigatorEnabled || !e.inverted ? t.height + (this.scrollbar?.options.margin || 0) + t.scrollbarHeight : 0) + (t.navigatorOptions.margin || 0);
		}), D(this, "setRange", function(e) {
			this.chart.xAxis[0].setExtremes(e.min, e.max, e.redraw, e.animation, e.eventArguments);
		}));
	}
	destroy() {
		this.removeEvents(), this.xAxis && (t(this.chart.xAxis, this.xAxis), t(this.chart.axes, this.xAxis)), this.yAxis && (t(this.chart.yAxis, this.yAxis), t(this.chart.axes, this.yAxis)), (this.series || []).forEach((e) => {
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
			i(e);
		}), this.baseSeries.forEach((e) => {
			e.navigatorSeries = void 0;
		}), this.navigatorEnabled = !1;
	}
}, { animObject: Ai } = R, { format: ji } = I, { getFakeMouseEvent: Mi } = Y, { getAxisRangeDescription: Ni, fireEventOnWrappedOrUnwrappedElement: Pi } = X, Fi = class extends Cn {
	init() {
		let e = this.chart, t = this;
		this.announcer = new Pn(e, "polite"), this.addEvent(ki, "afterRender", function() {
			this.chart === t.chart && this.chart.renderer && ue(() => {
				t.proxyProvider.updateGroupProxyElementPositions("navigator"), t.updateHandleValues();
			}, Ai(N(this.chart.renderer.globalAnimation, !0)).duration);
		});
	}
	onChartUpdate() {
		let e = this.chart, t = e.options, n = t.navigator;
		if (n.enabled && n.accessibility?.enabled) {
			let n = t.accessibility.landmarkVerbosity, r = t.lang.accessibility?.navigator.groupLabel;
			this.proxyProvider.removeGroup("navigator"), this.proxyProvider.addGroup("navigator", "div", {
				role: n === "all" ? "region" : "group",
				"aria-label": ji(r, { chart: e }, e)
			});
			let i = t.lang.accessibility?.navigator.handleLabel;
			[0, 1].forEach((t) => {
				let n = this.getHandleByIx(t);
				if (n) {
					let r = this.proxyProvider.addProxyElement("navigator", { click: n }, "input", {
						type: "range",
						"aria-label": ji(i, {
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
		return new Z(n, {
			keyCodeMap: [[[
				i.left,
				i.right,
				i.up,
				i.down
			], function(a) {
				if (r) {
					let o = a === i.left || a === i.up ? -1 : 1;
					r.value = "" + q(parseFloat(r.value) + o, 0, 100), t.updateNavigator(() => {
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
		this.updateNavigatorThrottleTimer && n(this.updateNavigatorThrottleTimer), this.proxyProvider.removeGroup("navigator"), this.announcer && this.announcer.destroy();
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
					i && Pi(i, Mi(t, {
						x: a.left + n.left + r,
						y: a.top + n.top
					}, i));
				}), i && (i.keyboardReset = !1), e && e();
				let c = t.options.lang.accessibility?.navigator.changeAnnouncement, l = Ni(t.xAxis[0]);
				this.announcer.announce(ji(c, {
					axisRangeDescription: l,
					chart: t
				}, t));
			}
		};
		this.updateNavigatorThrottleTimer && n(this.updateNavigatorThrottleTimer), this.updateNavigatorThrottleTimer = setTimeout(t.bind(this, e), 20);
	}
}, { getPointAnnotationTexts: Ii } = Un, { getAxisDescription: Li, getSeriesFirstPointElement: Ri, getSeriesA11yElement: zi, unhideChartElementFromAT: Bi } = X, { format: Vi, numberFormat: Hi } = I, { reverseChildNodes: Ui, stripHTMLTagsFromString: Wi } = Y;
function Gi(e) {
	let t = e.index;
	if (!e.series || !e.series.data || !a(t)) return null;
	let n = e.series.options?.nullInteraction;
	return m(e.series.data, function(e) {
		return !!(e && e.index !== void 0 && (n || e.index > t) && e.graphic && e.graphic.element);
	}) || null;
}
function Ki(e) {
	let t = e.series, n = t && t.chart, r = t && t.is("sunburst"), i = e.isNull, a = n && n.options.accessibility.point.describeNull;
	return i && !r && a;
}
function qi(e, t) {
	let n = e.series.chart.renderer.rect(t.x, t.y, 1, 1);
	return n.attr({
		class: "highcharts-a11y-mock-point",
		fill: "none",
		opacity: 0,
		"fill-opacity": 0,
		"stroke-opacity": 0
	}), n;
}
function Ji(e) {
	let t = e.series, n = Gi(e), r = n && n.graphic, i = r ? r.parentGroup : t.graph || t.group, a = qi(e, n ? {
		x: N(e.plotX, n.plotX, 0),
		y: N(e.plotY, n.plotY, 0)
	} : {
		x: N(e.plotX, 0),
		y: N(e.plotY, 0)
	});
	if (i && i.element) return e.graphic = a, e.hasMockGraphic = !0, a.add(i), i.element.insertBefore(a.element, r ? r.element : null), a.element;
}
function Yi(e) {
	let t = e.chart.options.accessibility.series.pointDescriptionEnabledThreshold;
	return !!(t !== !1 && e.points && e.points.length >= +t);
}
function Xi(e) {
	let t = e.options.accessibility || {};
	return !Yi(e) && !t.exposeAsGroupOnly;
}
function Zi(e) {
	let t = e.chart.options.accessibility.keyboardNavigation.seriesNavigation;
	return !!(e.points && (e.points.length < +t.pointNavigationEnabledThreshold || t.pointNavigationEnabledThreshold === !1));
}
function Qi(e) {
	let t = e.chart, n = t.options.chart, r = n.options3d && n.options3d.enabled, i = t.series.length > 1, a = t.options.accessibility.series.describeSingleSeries, o = (e.options.accessibility || {}).exposeAsGroupOnly;
	return !(r && i) && (i || a || o || Yi(e));
}
function $i(e, t) {
	let n = e.series, r = n.chart, i = r.options.accessibility.point || {}, a = n.options.accessibility && n.options.accessibility.point || {}, o = n.tooltipOptions || {}, c = r.options.lang;
	return s(t) ? Hi(t, a.valueDecimals || i.valueDecimals || o.valueDecimals || -1, c.decimalPoint, c.accessibility.thousandsSep || c.thousandsSep) : t;
}
function ea(e) {
	let t = (e.options.accessibility || {}).description;
	return t && e.chart.langFormat("accessibility.series.description", {
		description: t,
		series: e
	}) || "";
}
function ta(e, t) {
	let n = e[t];
	return e.chart.langFormat("accessibility.series." + t + "Description", {
		name: Li(n),
		series: e
	});
}
function na(e) {
	let t = e.series, n = t.chart, r = t.options.accessibility && t.options.accessibility.point || {}, i = n.options.accessibility.point || {}, a = t.xAxis && t.xAxis.dateTime;
	if (a) {
		let t = a.getXDateFormat(e.x || 0, n.options.tooltip.dateTimeLabelFormats), o = r.dateFormatter && r.dateFormatter(e) || i.dateFormatter?.(e) || r.dateFormat || i.dateFormat || t;
		return n.time.dateFormat(o, e.x || 0, void 0);
	}
}
function ra(e) {
	let t = na(e), n = (e.series.xAxis || {}).categories && a(e.category) && ("" + e.category).replace("<br/>", " "), r = a(e.id) && ("" + e.id).indexOf("highcharts-") < 0, i = "x, " + e.x;
	return e.name || t || n || (r ? e.id : i);
}
function ia(e, t, n) {
	let r = t || "", i = n || "", a = function(t) {
		let n = $i(e, N(e[t], e.options[t]));
		return n === void 0 ? n : t + ": " + r + n + i;
	};
	return e.series.pointArrayMap.reduce(function(e, t) {
		let n = a(t);
		return n ? e + (e.length ? ", " : "") + n : e;
	}, "");
}
function aa(e) {
	let t = e.series, n = t.chart.options.accessibility.point || {}, r = t.chart.options.accessibility && t.chart.options.accessibility.point || {}, i = t.tooltipOptions || {}, a = r.valuePrefix || n.valuePrefix || i.valuePrefix || "", o = r.valueSuffix || n.valueSuffix || i.valueSuffix || "", s = $i(e, e[e.value === void 0 ? "y" : "value"]);
	return e.isNull ? t.chart.langFormat("accessibility.series.nullPointValue", { point: e }) : t.pointArrayMap ? ia(e, a, o) : a + s + o;
}
function oa(e) {
	let t = e.series.chart, n = Ii(e), r = {
		point: e,
		annotations: n
	};
	return n.length ? t.langFormat("accessibility.series.pointAnnotationsDescription", r) : "";
}
function sa(e) {
	let t = e.series, n = t.chart, r = t.options.accessibility, i = r && r.point && r.point.valueDescriptionFormat || n.options.accessibility.point.valueDescriptionFormat, o = N(t.xAxis && t.xAxis.options.accessibility && t.xAxis.options.accessibility.enabled, !n.angular && t.type !== "flowmap"), s = o ? ra(e) : "";
	return Vi(i, {
		point: e,
		index: a(e.index) ? e.index + 1 : "",
		xDescription: s,
		value: aa(e),
		separator: o ? ", " : ""
	}, n);
}
function ca(e) {
	let t = e.series, n = t.chart.series.length > 1 || t.options.name, r = sa(e), i = e.options && e.options.accessibility && e.options.accessibility.description, a = i ? " " + i : "", o = n ? " " + t.name + "." : "", s = oa(e), c = s ? " " + s : "";
	return e.accessibility = e.accessibility || {}, e.accessibility.valueDescription = r, r + a + o + c;
}
function la(e, t) {
	let n = e.series, r = n.options.accessibility?.point || {}, i = n.chart.options.accessibility.point || {}, a = Wi(B(r.descriptionFormat) && Vi(r.descriptionFormat, e, n.chart) || r.descriptionFormatter?.(e) || B(i.descriptionFormat) && Vi(i.descriptionFormat, e, n.chart) || i.descriptionFormatter?.(e) || ca(e), n.chart.renderer.forExport);
	t.setAttribute("role", "img"), t.setAttribute("aria-label", a);
}
function ua(e) {
	let t = Xi(e), n = Zi(e), r = e.chart.options.accessibility.point.describeNull;
	(t || n) && e.points.forEach((n) => {
		let i = n.graphic && n.graphic.element || Ki(n) && Ji(n), a = n.options && n.options.accessibility && n.options.accessibility.enabled === !1;
		if (i) {
			if (n.isNull && !r) {
				i.setAttribute("aria-hidden", !0);
				return;
			}
			i.setAttribute("tabindex", "-1"), e.chart.styledMode || (i.style.outline = "none"), t && !a ? la(n, i) : i.setAttribute("aria-hidden", !0);
		}
	});
}
function da(e) {
	let t = e.chart, n = t.types || [], r = ea(e), i = function(n) {
		return t[n] && t[n].length > 1 && e[n];
	}, a = e.index + 1, o = ta(e, "xAxis"), s = ta(e, "yAxis"), c = {
		seriesNumber: a,
		series: e,
		chart: t
	}, l = n.length > 1 ? "Combination" : "", u = t.langFormat("accessibility.series.summary." + e.type + l, c) || t.langFormat("accessibility.series.summary.default" + l, c), d = (i("yAxis") ? " " + s + "." : "") + (i("xAxis") ? " " + o + "." : "");
	return Vi(N(e.options.accessibility && e.options.accessibility.descriptionFormat, t.options.accessibility.series.descriptionFormat, ""), {
		seriesDescription: u,
		authorDescription: r ? " " + r : "",
		axisDescription: d,
		series: e,
		chart: t,
		seriesNumber: a
	}, void 0);
}
function fa(e, t) {
	let n = e.options.accessibility || {}, r = e.chart.options.accessibility, i = r.landmarkVerbosity;
	n.exposeAsGroupOnly ? t.setAttribute("role", "img") : i === "all" ? t.setAttribute("role", "region") : t.setAttribute("role", "group"), t.setAttribute("tabindex", "-1"), e.chart.styledMode || (t.style.outline = "none"), t.setAttribute("aria-label", Wi(r.series.descriptionFormatter && r.series.descriptionFormatter(e) || da(e), e.chart.renderer.forExport));
}
function pa(e) {
	let t = e.chart, n = Ri(e), r = zi(e), i = t.is3d && t.is3d();
	r && (r.lastChild === n && !i && Ui(r), ua(e), Bi(t, r), Qi(e) ? fa(e, r) : r.removeAttribute("aria-label"));
}
var ma = {
	defaultPointDescriptionFormatter: ca,
	defaultSeriesDescriptionFormatter: da,
	describeSeries: pa
}, { composed: ha } = K, { getChartTitle: ga } = X, { defaultPointDescriptionFormatter: _a, defaultSeriesDescriptionFormatter: va } = ma;
function ya(e) {
	return !!e.options.accessibility.announceNewData.enabled;
}
function ba(e) {
	let t = e.series.data.filter((t) => e.x === t.x && e.y === t.y);
	return t.length === 1 ? t[0] : e;
}
function xa(e, t) {
	let n = (e || []).concat(t || []).reduce((e, t) => (e[t.name + t.index] = t, e), {});
	return Object.keys(n).map((e) => n[e]);
}
var Sa = class {
	constructor(e) {
		this.dirty = { allSeries: {} }, this.lastAnnouncementTime = 0, this.chart = e;
	}
	init() {
		let e = this.chart, t = e.options.accessibility.announceNewData.interruptUser ? "assertive" : "polite";
		this.lastAnnouncementTime = 0, this.dirty = { allSeries: {} }, this.eventProvider = new bn(), this.announcer = new Pn(e, t), this.addEventListeners();
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
		ya(this.chart) && (this.dirty.hasDirty = !0, this.dirty.allSeries[e.name + e.index] = e, this.dirty.newSeries = a(this.dirty.newSeries) ? void 0 : e);
	}
	announceDirtyData() {
		let e = this.chart, t = this;
		if (e.options.accessibility.announceNewData && this.dirty.hasDirty) {
			let e = this.dirty.newPoint;
			e &&= ba(e), this.queueAnnouncement(Object.keys(this.dirty.allSeries).map((e) => t.dirty.allSeries[e]), this.dirty.newSeries, e), this.dirty = { allSeries: {} };
		}
	}
	queueAnnouncement(e, t, r) {
		let i = this.chart.options.accessibility.announceNewData;
		if (i.enabled) {
			let a = +/* @__PURE__ */ new Date(), o = a - this.lastAnnouncementTime, s = Math.max(0, i.minAnnounceInterval - o), c = xa(this.queuedAnnouncement && this.queuedAnnouncement.series, e), l = this.buildAnnouncementMessage(c, t, r);
			l && (this.queuedAnnouncement && n(this.queuedAnnouncementTimer), this.queuedAnnouncement = {
				time: a,
				message: l,
				series: c
			}, this.queuedAnnouncementTimer = setTimeout(() => {
				this && this.announcer && (this.lastAnnouncementTime = +/* @__PURE__ */ new Date(), this.announcer.announce(this.queuedAnnouncement.message), delete this.queuedAnnouncement, delete this.queuedAnnouncementTimer);
			}, s));
		}
	}
	buildAnnouncementMessage(e, t, n) {
		let r = this.chart, i = r.options.accessibility.announceNewData;
		if (i.announcementFormatter) {
			let r = i.announcementFormatter(e, t, n, this);
			if (r !== !1) return r.length ? r : null;
		}
		let a = K.charts && K.charts.length > 1 ? "Multiple" : "Single", o = t ? "newSeriesAnnounce" + a : n ? "newPointAnnounce" + a : "newDataAnnounce", s = ga(r);
		return r.langFormat("accessibility.announceNewData." + o, {
			chartTitle: s,
			seriesDesc: t ? va(t) : null,
			pointDesc: n ? _a(n) : null,
			point: n,
			series: t
		});
	}
};
(function(e) {
	function t(e) {
		G(ha, "A11y.NDA") && (D(e, "addPoint", n), D(e, "updatedData", r));
	}
	e.compose = t;
	function n(e) {
		let t = this.chart, n = t.accessibility?.components.series.newDataAnnouncer;
		n && n.chart === t && ya(t) && (n.dirty.newPoint = a(n.dirty.newPoint) ? void 0 : e.point);
	}
	function r() {
		let e = this.chart, t = e.accessibility?.components.series.newDataAnnouncer;
		t && t.chart === e && ya(e) && (t.dirty.hasDirty = !0, t.dirty.allSeries[this.name + this.index] = this);
	}
})(Sa ||= {});
var Ca = Sa, { doc: wa, win: Ta } = K, { fireEventOnWrappedOrUnwrappedElement: Ea } = X, { cloneMouseEvent: Da, cloneTouchEvent: Oa, getFakeMouseEvent: ka, removeElement: Aa } = Y, ja = class {
	constructor(e, t, n = "button", r, i) {
		this.chart = e, this.target = t, this.eventProvider = new bn();
		let a = this.innerElement = wa.createElement(n), o = this.element = r ? wa.createElement(r) : a;
		e.styledMode || this.hideElementVisually(a), r && (r === "li" && !e.styledMode && (o.style.listStyle = "none"), o.appendChild(a), this.element = o), this.updateTarget(t, i);
	}
	click() {
		let e = this.getTargetPosition();
		e.x += e.width / 2, e.y += e.height / 2;
		let t = ka("click", e);
		Ea(this.target.click, t);
	}
	updateTarget(e, t) {
		this.target = e, this.updateCSSClassName();
		let n = t || {};
		Object.keys(n).forEach((e) => {
			n[e] === null && delete n[e];
		});
		let r = this.getTargetAttr(e.click, "aria-label");
		A(this.innerElement, u(r ? { "aria-label": r } : {}, n)), this.eventProvider.removeAddedEvents(), this.addProxyEventsToElement(this.innerElement, e.click), this.refreshPosition();
	}
	refreshPosition() {
		let e = this.getTargetPosition();
		b(this.innerElement, {
			width: (e.width || 1) + "px",
			height: (e.height || 1) + "px",
			left: (Math.round(e.x) || 0) + "px",
			top: (Math.round(e.y) || 0) + "px"
		});
	}
	remove() {
		this.eventProvider.removeAddedEvents(), Aa(this.element);
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
				let n = r ? Oa(e) : Da(e);
				t && Ea(t, n), e.stopPropagation(), r || e.preventDefault();
			}, { passive: !1 });
		});
	}
	hideElementVisually(e) {
		b(e, {
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
			let e = Ta.scrollY || wa.documentElement.scrollTop, t = n.getBoundingClientRect(), r = i.getChartPosition();
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
}, { doc: Ma } = K, { unhideChartElementFromAT: Na } = X, { removeChildNodes: Pa } = Y, Fa = class {
	constructor(e) {
		this.chart = e, this.domElementProvider = new yn(), this.groups = {}, this.groupOrder = [], this.beforeChartProxyPosContainer = this.createProxyPosContainer("before"), this.afterChartProxyPosContainer = this.createProxyPosContainer("after"), this.update();
	}
	addProxyElement(e, t, n = "button", r) {
		let i = this.groups[e];
		if (!i) throw Error("ProxyProvider.addProxyElement: Invalid group key " + e);
		let a = i.type === "ul" || i.type === "ol" ? "li" : void 0, o = new ja(this.chart, t, n, a, r);
		return i.proxyContainerElement.appendChild(o.element), i.proxyElements.push(o), o;
	}
	addGroup(e, t = "div", n) {
		let r = this.groups[e];
		if (r) return r.groupElement;
		let i = this.domElementProvider.createElement(t), a;
		return n && n.role && t !== "div" ? (a = this.domElementProvider.createElement("div"), a.appendChild(i)) : a = i, a.className = "highcharts-a11y-proxy-group highcharts-a11y-proxy-group-" + e.replace(/\W/g, "-"), this.groups[e] = {
			proxyContainerElement: i,
			groupElement: a,
			type: t,
			proxyElements: []
		}, A(a, n || {}), t === "ul" && i.setAttribute("role", "list"), this.afterChartProxyPosContainer.appendChild(a), this.updateGroupOrder(this.groupOrder), a;
	}
	updateGroupAttrs(e, t) {
		let n = this.groups[e];
		if (!n) throw Error("ProxyProvider.updateGroupAttrs: Invalid group key " + e);
		A(n.groupElement, t);
	}
	updateGroupOrder(e) {
		if (this.groupOrder = e.slice(), this.isDOMOrderGroupOrder()) return;
		let t = e.indexOf("series"), n = t > -1 ? e.slice(0, t) : e, r = t > -1 ? e.slice(t + 1) : [], i = Ma.activeElement;
		["before", "after"].forEach((e) => {
			let t = this[e === "before" ? "beforeChartProxyPosContainer" : "afterChartProxyPosContainer"], i = e === "before" ? n : r;
			Pa(t), i.forEach((e) => {
				let n = this.groups[e];
				n && t.appendChild(n.groupElement);
			});
		}), (this.beforeChartProxyPosContainer.contains(i) || this.afterChartProxyPosContainer.contains(i)) && i && i.focus && i.focus();
	}
	clearGroup(e) {
		let t = this.groups[e];
		if (!t) throw Error("ProxyProvider.clearGroup: Invalid group key " + e);
		Pa(t.proxyContainerElement);
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
		return t.setAttribute("aria-hidden", "false"), t.className = "highcharts-a11y-proxy-container" + (e ? "-" + e : ""), b(t, {
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
		e.container.insertBefore(this.afterChartProxyPosContainer, t.nextSibling), e.container.insertBefore(this.beforeChartProxyPosContainer, t), Na(this.chart, this.afterChartProxyPosContainer), Na(this.chart, this.beforeChartProxyPosContainer);
	}
}, { unhideChartElementFromAT: Ia, getAxisRangeDescription: La } = X;
function Ra(e) {
	return !!(e.rangeSelector && e.rangeSelector.inputGroup && e.rangeSelector.inputGroup.element.style.visibility !== "hidden" && e.options.rangeSelector.inputEnabled !== !1 && e.rangeSelector.minInput && e.rangeSelector.maxInput);
}
var za = class extends Cn {
	init() {
		let e = this.chart;
		this.announcer = new Pn(e, "polite");
	}
	onChartUpdate() {
		let e = this.chart, t = this, n = e.rangeSelector;
		n && (this.updateSelectorVisibility(), this.setDropdownAttrs(), n.buttons && n.buttons.length && n.buttons.forEach((e) => {
			t.setRangeButtonAttrs(e);
		}), n.maxInput && n.minInput && ["minInput", "maxInput"].forEach(function(r, i) {
			let a = n[r];
			a && (Ia(e, a), t.setRangeInputAttrs(a, "accessibility.rangeSelector." + (i ? "max" : "min") + "InputLabel"));
		}));
	}
	updateSelectorVisibility() {
		let e = this.chart, t = e.rangeSelector, n = t && t.dropdown, r = t && t.buttons || [], i = (e) => e.setAttribute("aria-hidden", !0);
		t && t.hasVisibleDropdown && n ? (Ia(e, n), r.forEach((e) => i(e.element))) : (n && i(n), r.forEach((t) => Ia(e, t.element)));
	}
	setDropdownAttrs() {
		let e = this.chart, t = e.rangeSelector && e.rangeSelector.dropdown;
		if (t) {
			let n = e.langFormat("accessibility.rangeSelector.dropdownLabel", { rangeTitle: e.options.lang.rangeSelectorZoom });
			t.setAttribute("aria-label", n), t.setAttribute("tabindex", -1);
		}
	}
	setRangeButtonAttrs(e) {
		A(e.element, {
			tabindex: -1,
			role: "button"
		});
	}
	setRangeInputAttrs(e, t) {
		let n = this.chart;
		A(e, {
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
		let e = this.chart, t = La(e.xAxis[0]), n = e.langFormat("accessibility.rangeSelector.clickButtonAnnouncement", {
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
		let t = this, n = this.chart, r = e > 0 ? 0 : 1, i = n.rangeSelector, a = i && i[r ? "maxDateBox" : "minDateBox"], o = i && i.minInput, s = i && i.maxInput, c = r ? s : o;
		if (n.highlightedInputRangeIx = r, a && o && s) {
			n.setFocusToElement(a, c), this.removeInputKeydownHandler && this.removeInputKeydownHandler();
			let e = (e) => {
				(e.which || e.keyCode) === this.keyCodes.tab && t.onInputKbdMove(e.shiftKey ? -1 : 1) && (e.preventDefault(), e.stopPropagation());
			}, r = D(o, "keydown", e), i = D(s, "keydown", e);
			this.removeInputKeydownHandler = () => {
				r(), i();
			};
		}
	}
	onInputNavTerminate() {
		let e = this.chart.rangeSelector || {};
		e.maxInput && e.hideInput("max"), e.minInput && e.hideInput("min"), this.removeInputKeydownHandler && (this.removeInputKeydownHandler(), delete this.removeInputKeydownHandler);
	}
	initDropdownNav() {
		let e = this.chart, t = e.rangeSelector, n = t && t.dropdown;
		t && n && (e.setFocusToElement(t.buttonGroup, n), this.removeDropdownKeydownHandler && this.removeDropdownKeydownHandler(), this.removeDropdownKeydownHandler = D(n, "keydown", (t) => {
			let n = (t.which || t.keyCode) === this.keyCodes.tab, r = e.accessibility;
			n && (t.preventDefault(), t.stopPropagation(), r && r.keyboardNavigation.move(t.shiftKey ? -1 : 1));
		}));
	}
	getRangeSelectorButtonNavigation() {
		let e = this.chart, t = this.keyCodes, n = this;
		return new Z(e, {
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
		return new Z(e, {
			keyCodeMap: [],
			validate: function() {
				return Ra(e);
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
};
(function(e) {
	function t(e) {
		let t = this.rangeSelector && this.rangeSelector.buttons || [], n = this.highlightedRangeSelectorItemIx, r = this.rangeSelector && this.rangeSelector.selected;
		return n !== void 0 && t[n] && n !== r && t[n].setState(this.oldRangeSelectorItemState || 0), this.highlightedRangeSelectorItemIx = e, t[e] ? (this.setFocusToElement(t[e].box, t[e].element), e !== r && (this.oldRangeSelectorItemState = t[e].state, t[e].setState(1)), !0) : !1;
	}
	function n(e, n) {
		let i = e.prototype;
		i.highlightRangeSelectorButton || (i.highlightRangeSelectorButton = t, D(n, "afterBtnClick", r));
	}
	e.compose = n;
	function r() {
		let e = this.chart.accessibility;
		if (e && e.components.rangeSelector) return e.components.rangeSelector.onAfterBtnClick();
	}
})(za ||= {});
var Ba = za, { composed: Va } = K, Ha;
(function(e) {
	function t(e) {
		G(Va, "A11y.FM") && (D(e, "afterSetOptions", c), D(e, "render", l), D(e, "afterRender", s), D(e, "renderCanvas", h));
	}
	e.compose = t;
	function n(e) {
		u(!0, e, { marker: {
			enabled: !0,
			states: { normal: { opacity: 0 } }
		} });
	}
	function r(e) {
		return e.marker.states && e.marker.states.normal && e.marker.states.normal.opacity;
	}
	function i(e) {
		let t = e.points.length;
		for (; t--;) {
			let i = e.points[t], a = i.options, o = i.hasForcedA11yMarker;
			if (delete i.hasForcedA11yMarker, a.marker) {
				let e = o && r(a) === 0;
				a.marker.enabled && !e ? (f(a), i.hasForcedA11yMarker = !1) : a.marker.enabled === !1 && (n(a), i.hasForcedA11yMarker = !0);
			}
		}
	}
	function a(e) {
		return !!(e._hasPointMarkers && e.points && e.points.length);
	}
	function o(e) {
		let t = e.chart.options.accessibility;
		return e.points.length < t.series.pointDescriptionEnabledThreshold || t.series.pointDescriptionEnabledThreshold === !1;
	}
	function s() {
		let e = this;
		e.chart.styledMode && (e.markerGroup && e.markerGroup[e.a11yMarkersForced ? "addClass" : "removeClass"]("highcharts-a11y-markers-hidden"), a(e) && e.points.forEach((e) => {
			e.graphic && (e.graphic[e.hasForcedA11yMarker ? "addClass" : "removeClass"]("highcharts-a11y-marker-hidden"), e.graphic[e.hasForcedA11yMarker === !1 ? "addClass" : "removeClass"]("highcharts-a11y-marker-visible"));
		}));
	}
	function c(e) {
		this.resetA11yMarkerOptions = u(e.options.marker || {}, this.userOptions.marker || {});
	}
	function l() {
		let e = this, t = e.options;
		d(e) ? (t.marker?.enabled === !1 && (e.a11yMarkersForced = !0, n(e.options)), a(e) && i(e)) : e.a11yMarkersForced ? (delete e.a11yMarkersForced, e.isDirty = !0, m(e), t.marker?.enabled === !1 && delete e.resetA11yMarkerOptions) : e.chart.styledMode && t.marker?.enabled === !1 && !a(e) && p(e);
	}
	function d(e) {
		let t = e.chart.options.accessibility.enabled, n = (e.options.accessibility && e.options.accessibility.enabled) !== !1;
		return t && n && o(e);
	}
	function f(e) {
		u(!0, e.marker, { states: { normal: { opacity: r(e) || 1 } } });
	}
	function p(e) {
		e.points?.forEach((e) => {
			e.graphic &&= e.graphic.destroy();
		});
	}
	function m(e) {
		let t = e.resetA11yMarkerOptions;
		if (t) {
			let n = t.states && t.states.normal && t.states.normal.opacity;
			e.chart.styledMode && t.enabled === !1 && p(e), e.userOptions && e.userOptions.marker && (e.userOptions.marker.enabled = !0), e.update({ marker: {
				enabled: t.enabled,
				states: { normal: { opacity: n } }
			} });
		}
	}
	function h() {
		this.boosted && this.a11yMarkersForced && (u(!0, this.options, { marker: { enabled: !1 } }), delete this.a11yMarkersForced);
	}
})(Ha ||= {});
var Ua = Ha, { seriesTypes: Wa } = W, { doc: Ga } = K, { getPointFromXY: Ka, getSeriesFromName: qa, scrollAxisToPoint: Ja } = X;
function Ya(e) {
	let t = e.index, n = e.series.points, r = n.length;
	if (n[t] !== e) {
		for (; r--;) if (n[r] === e) return r;
	} else return t;
}
function Xa(e) {
	let t = e.chart.options.accessibility.keyboardNavigation.seriesNavigation, n = e.options.accessibility || {}, r = n.keyboardNavigation;
	return r && r.enabled === !1 || n.enabled === !1 || e.options.enableMouseTracking === !1 || !e.visible || t.pointNavigationEnabledThreshold && +t.pointNavigationEnabledThreshold <= e.points.length;
}
function Za(e) {
	let t = e.series, n = t.options.nullInteraction, r = e.options.accessibility, i = t.chart.options.accessibility, a = r?.enabled === !1;
	return i.keyboardNavigation.seriesNavigation.skipNullPoints ?? (!(!e.isNull || n) && e.visible === !1 || e.isInside === !1 || a || Xa(t));
}
function Qa(e) {
	let t = e.points || [], n = t.length;
	for (let e = 0; e < n; ++e) if (!Za(t[e])) return t[e];
	return null;
}
function $a(e) {
	let t = e.series || [], n = t.length;
	for (let e = 0; e < n; ++e) if (!Xa(t[e])) {
		let n = Qa(t[e]);
		if (n) return n;
	}
	return null;
}
function eo(e) {
	let t = e.series.length, n = !1;
	for (; t-- && (e.highlightedPoint = e.series[t].points[e.series[t].points.length - 1], n = e.series[t].highlightNextValidPoint(), !n););
	return n;
}
function to(e) {
	let t = $a(e);
	t && t.highlight(!1);
}
function no(e) {
	delete e.highlightedPoint;
	let t = $a(e);
	return t ? t.highlight() : !1;
}
var ro = class {
	constructor(e, t) {
		this.keyCodes = t, this.chart = e;
	}
	init() {
		let e = this, t = this.chart, n = this.eventProvider = new bn();
		n.addEvent(be, "destroy", function() {
			return e.onSeriesDestroy(this);
		}), n.addEvent(t, "afterApplyDrilldown", function() {
			to(this);
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
		}), n.addEvent(oe, "afterSetState", function() {
			let e = this, n = e.graphic && e.graphic.element, r = Ga.activeElement, i = r && r.getAttribute("class"), a = i && i.indexOf("highcharts-a11y-proxy-element") > -1;
			t.highlightedPoint === e && r !== n && !a && n && n.focus && n.focus();
		});
	}
	onDrillupAll() {
		let e = this.lastDrilledDownPoint, t = this.chart, n = e && qa(t, e.seriesName), r;
		e && n && a(e.x) && a(e.y) && (r = Ka(n, e.x, e.y)), r ||= $a(t), t.container && t.container.focus(), r && r.highlight && r.highlight(!1);
	}
	getKeyboardNavigationHandler() {
		let e = this, t = this.keyCodes, n = this.chart, r = n.inverted;
		return new Z(n, {
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
						}, g(r.series, "click", t), r.firePointEvent("click", t);
					}
					return this.response.success;
				}],
				[[t.home], function() {
					return no(n), this.response.success;
				}],
				[[t.end], function() {
					return eo(n), this.response.success;
				}],
				[[t.pageDown, t.pageUp], function(e) {
					return n.highlightAdjacentSeries(e === t.pageDown), this.response.success;
				}]
			],
			init: function() {
				return e.onHandlerInit(this);
			},
			validate: function() {
				return !!$a(n);
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
		return t.options.accessibility.keyboardNavigation.seriesNavigation.rememberPointFocus && t.highlightedPoint ? t.highlightedPoint.highlight() : no(t), e.response.success;
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
		return n.highlightAdjacentPoint(t) || r && (t ? no(n) : eo(n)) ? e.response.success : e.response[t ? "next" : "prev"];
	}
	onSeriesDestroy(e) {
		let t = this.chart;
		t.highlightedPoint && t.highlightedPoint.series === e && (delete t.highlightedPoint, t.focusElement && t.focusElement.removeFocusBorder());
	}
	destroy() {
		this.eventProvider.removeAddedEvents();
	}
};
(function(e) {
	function t(e) {
		let t = this, n = t.series, r = t.highlightedPoint, i = r && Ya(r) || 0, a = r && r.series.points || [], o = t.series && t.series[t.series.length - 1], s = o && o.points && o.points[o.points.length - 1], c, l;
		if (!n[0] || !n[0].points) return !1;
		if (!r) l = e ? n[0].points[0] : s;
		else if (c = n[r.series.index + (e ? 1 : -1)], l = a[i + (e ? 1 : -1)], !l && c && (l = c.points[e ? 0 : c.points.length - 1]), !l) return !1;
		return Za(l) ? (c = l.series, Xa(c) ? t.highlightedPoint = e ? c.points[c.points.length - 1] : c.points[0] : t.highlightedPoint = l, t.highlightAdjacentPoint(e)) : l.highlight();
	}
	function n(e) {
		let t = this.highlightedPoint, n = Infinity, r;
		return !a(t.plotX) || !a(t.plotY) ? !1 : (this.series.forEach((i) => {
			Xa(i) || i.points.forEach((o) => {
				if (!a(o.plotY) || !a(o.plotX) || o === t) return;
				let s = o.plotY - t.plotY, c = Math.abs(o.plotX - t.plotX), l = Math.abs(s) * Math.abs(s) + c * c * 4;
				i.yAxis && i.yAxis.reversed && (s *= -1), !(s <= 0 && e || s >= 0 && !e || l < 5 || Za(o)) && l < n && (n = l, r = o);
			});
		}), r ? r.highlight() : !1);
	}
	function r(e) {
		let t = this, n = t.highlightedPoint, r = t.series && t.series[t.series.length - 1], i = r && r.points && r.points[r.points.length - 1], a, s, c;
		return t.highlightedPoint ? (a = t.series[n.series.index + (e ? -1 : 1)], !a || (s = o(n, a, 4), !s) ? !1 : Xa(a) ? (s.highlight(), c = t.highlightAdjacentSeries(e), c || (n.highlight(), !1)) : (s.highlight(), s.series.highlightNextValidPoint())) : (a = e ? t.series && t.series[0] : r, s = e ? a && a.points && a.points[0] : i, s ? s.highlight() : !1);
	}
	function i(e, i, a) {
		let o = e.prototype, l = i.prototype, u = a.prototype;
		o.highlightAdjacentPoint || (o.highlightAdjacentPoint = t, o.highlightAdjacentPointVertical = n, o.highlightAdjacentSeries = r, l.highlight = s, u.keyboardMoveVertical = !0, [
			"column",
			"gantt",
			"pie"
		].forEach((e) => {
			Wa[e] && (Wa[e].prototype.keyboardMoveVertical = !1);
		}), u.highlightNextValidPoint = c);
	}
	e.compose = i;
	function o(e, t, n, r) {
		let i = Infinity, o, s, c, l = t.points.length, u = (e) => !(a(e.plotX) && a(e.plotY));
		if (!u(e)) {
			for (; l--;) o = t.points[l], !u(o) && (c = (e.plotX - o.plotX) * (e.plotX - o.plotX) * (n || 1) + (e.plotY - o.plotY) * (e.plotY - o.plotY) * (r || 1), c < i && (i = c, s = l));
			return a(s) ? t.points[s] : void 0;
		}
	}
	function s(e = !0) {
		let t = this.series.chart, n = t.tooltip?.label?.element;
		(!this.isNull || this.series.options?.nullInteraction) && e ? this.onMouseOver() : t.tooltip && t.tooltip.hide(0), Ja(this), this.graphic && (t.setFocusToElement(this.graphic), !e && t.focusElement && t.focusElement.removeFocusBorder()), t.highlightedPoint = this;
		let r = n?.getBoundingClientRect().top;
		if (n && r && r < 0) {
			let e = window.scrollY + r;
			window.scrollTo({
				behavior: "smooth",
				top: e
			});
		}
		return this;
	}
	function c() {
		let e = this.chart.highlightedPoint, t = (e && e.series) === this ? Ya(e) : 0, n = this.points, r = n.length;
		if (n && r) {
			for (let e = t; e < r; ++e) if (!Za(n[e])) return n[e].highlight();
			for (let e = t; e >= 0; --e) if (!Za(n[e])) return n[e].highlight();
		}
		return !1;
	}
})(ro ||= {});
var io = ro, { hideSeriesFromAT: ao } = X, { describeSeries: oo } = ma, so = class extends Cn {
	static compose(e, t, n) {
		Ca.compose(n), Ua.compose(n), io.compose(e, t, n);
	}
	init() {
		this.newDataAnnouncer = new Ca(this.chart), this.newDataAnnouncer.init(), this.keyboardNavigation = new io(this.chart, this.keyCodes), this.keyboardNavigation.init(), this.hideTooltipFromATWhenShown(), this.hideSeriesLabelsFromATWhenShown();
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
			(e.options.accessibility && e.options.accessibility.enabled) !== !1 && e.visible && e.getPointsCollection().length !== 0 ? oo(e) : ao(e);
		});
	}
	getKeyboardNavigation() {
		return this.keyboardNavigation.getKeyboardNavigationHandler();
	}
	destroy() {
		this.newDataAnnouncer.destroy(), this.keyboardNavigation.destroy();
	}
}, { unhideChartElementFromAT: co } = X, { getFakeMouseEvent: lo } = Y;
function uo(e) {
	return !!(e.mapView && e.mapNavigation && e.mapNavigation.navButtons.length);
}
var fo = class extends Cn {
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
			co(e, n.element), t.setMapNavButtonAttrs(n.element, "accessibility.zoom.mapZoom" + (r ? "Out" : "In"));
		});
	}
	setMapNavButtonAttrs(e, t) {
		let n = this.chart;
		A(e, {
			tabindex: -1,
			role: "button",
			"aria-label": n.langFormat(t, { chart: n })
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
		return new Z(t, {
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
				return uo(t);
			},
			init: function(e) {
				return n.onMapNavInit(e);
			}
		});
	}
	onMapKbdArrow(e, t) {
		let n = this.chart, r = this.keyCodes, i = n.container, a = t === r.up || t === r.down, o = t === r.left || t === r.up ? 1 : -1, s = (a ? n.plotHeight : n.plotWidth) / 10 * o, c = Math.random() * 10, l = {
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
			lo("mousedown", l),
			lo("mousemove", u),
			lo("mouseup", u)
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
		return new Z(a, {
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
				return N(n(this, a), this.response.success);
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
}, { doc: po, isMS: mo, win: ho } = K;
function go() {
	if (mo && ho.getComputedStyle) {
		let e = po.createElement("div");
		e.style.backgroundImage = "url(data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==)", po.body.appendChild(e);
		let t = (e.currentStyle || ho.getComputedStyle(e)).backgroundImage;
		return po.body.removeChild(e), t === "none";
	}
	return ho.matchMedia && ho.matchMedia("(forced-colors: active)").matches;
}
function _o(e) {
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
}
var vo = {
	isHighContrastModeActive: go,
	setHighContrastTheme: _o
}, yo = {
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
}, bo = {
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
}, xo = { accessibility: {
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
} };
//#endregion
//#region node_modules/highcharts/es-modules/Accessibility/Options/DeprecatedOptions.js
function So(e, t, n) {
	let r = e, i, a = 0;
	for (; a < t.length - 1; ++a) i = t[a], r = r[i] = N(r[i], {});
	r[t[t.length - 1]] = n;
}
function Co(e, t, n, r) {
	function i(e, t) {
		return t.reduce(function(e, t) {
			return e[t];
		}, e);
	}
	let a = i(e.options, t), o = i(e.options, n);
	Object.keys(r).forEach(function(i) {
		let s = a[i];
		s !== void 0 && (So(o, r[i], s), U(32, !1, e, { [t.join(".") + "." + i]: n.join(".") + "." + r[i].join(".") }));
	});
}
function wo(e) {
	let t = e.options.chart, n = e.options.accessibility || {};
	["description", "typeDescription"].forEach(function(r) {
		t[r] && (n[r] = t[r], U(32, !1, e, { [`chart.${r}`]: `use accessibility.${r}` }));
	});
}
function To(e) {
	e.axes.forEach(function(t) {
		let n = t.options;
		n && n.description && (n.accessibility = n.accessibility || {}, n.accessibility.description = n.description, U(32, !1, e, { "axis.description": "use axis.accessibility.description" }));
	});
}
function Eo(e) {
	let t = {
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
	};
	e.series.forEach(function(n) {
		Object.keys(t).forEach(function(r) {
			let i = n.options[r];
			r === "accessibility.pointDescriptionFormatter" && (i = n.options.accessibility && n.options.accessibility.pointDescriptionFormatter), i !== void 0 && (So(n.options, t[r], r === "skipKeyboardNavigation" ? !i : i), U(32, !1, e, { [`series.${r}`]: "series." + t[r].join(".") }));
		});
	});
}
function Do(e) {
	Co(e, ["accessibility"], ["accessibility"], {
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
	});
}
function Oo(e) {
	Co(e, ["accessibility", "keyboardNavigation"], [
		"accessibility",
		"keyboardNavigation",
		"seriesNavigation"
	], {
		skipNullPoints: ["skipNullPoints"],
		mode: ["mode"]
	});
}
function ko(e) {
	Co(e, ["lang", "accessibility"], ["lang", "accessibility"], {
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
}
function Ao(e) {
	wo(e), To(e), e.series && Eo(e), Do(e), Oo(e), ko(e);
}
//#endregion
//#region node_modules/highcharts/es-modules/Accessibility/Accessibility.js
var { defaultOptions: jo } = O, { doc: Mo } = K, { removeElement: No } = Y, Po = class {
	constructor(e) {
		this.init(e);
	}
	init(e) {
		if (this.chart = e, !Mo?.addEventListener) {
			this.zombie = !0, this.components = {}, e.renderTo.setAttribute("aria-hidden", !0);
			return;
		}
		Ao(e), this.proxyProvider = new Fa(this.chart), this.initComponents(), this.keyboardNavigation = new Sr(e, this.components);
	}
	initComponents() {
		let e = this.chart, t = this.proxyProvider, n = e.options.accessibility;
		this.components = {
			container: new On(),
			infoRegions: new lr(),
			legend: new Wr(),
			chartMenu: new gr(),
			rangeSelector: new Ba(),
			series: new so(),
			zoom: new fo(),
			navigator: new Fi()
		}, n.customComponents && L(this.components, n.customComponents);
		let r = this.components;
		this.getComponentOrder().forEach(function(n) {
			r[n].initBase(e, t), r[n].init();
		});
	}
	getComponentOrder() {
		if (!this.components) return [];
		if (!this.components.series) return Object.keys(this.components);
		let e = Object.keys(this.components).filter((e) => e !== "series");
		return ["series"].concat(e);
	}
	update() {
		let e = this.components, t = this.chart, n = t.options.accessibility;
		g(t, "beforeA11yUpdate"), t.types = this.getChartTypes();
		let r = n.keyboardNavigation.order;
		this.proxyProvider.updateGroupOrder(r), this.getComponentOrder().forEach(function(n) {
			e[n].onChartUpdate(), g(t, "afterA11yComponentUpdate", {
				name: n,
				component: e[n]
			});
		}), this.keyboardNavigation.update(r), !t.highContrastState?.applying && n.highContrastMode !== !1 && (t.highContrastState?.active || vo.isHighContrastModeActive() || n.highContrastMode === !0) && vo.setHighContrastTheme(t), g(t, "afterA11yUpdate", { accessibility: this });
	}
	destroy() {
		let e = this.chart || {}, t = this.components;
		Object.keys(t).forEach(function(e) {
			t[e].destroy(), t[e].destroyBase();
		}), this.proxyProvider && this.proxyProvider.destroy(), e.announcerContainer && No(e.announcerContainer), this.keyboardNavigation && this.keyboardNavigation.destroy(), e.renderTo && e.renderTo.setAttribute("aria-hidden", !0), e.focusElement && e.focusElement.removeFocusBorder();
	}
	getChartTypes() {
		let e = {};
		return this.chart.series.forEach(function(t) {
			e[t.type] = 1;
		}), Object.keys(e);
	}
};
(function(e) {
	e.i18nFormat = Qt.i18nFormat;
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
		t && (t.customComponents && (this.options.accessibility.customComponents = t.customComponents, delete t.customComponents), u(!0, this.options.accessibility, t), this.accessibility && this.accessibility.destroy && (this.accessibility.destroy(), delete this.accessibility)), this.a11yDirty = !0;
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
	function a(e, a, s, c, l, u) {
		Sr.compose(e), Ca.compose(c), Wr.compose(e, a), gr.compose(e), so.compose(e, s, c), Qt.compose(e), An.compose(e, l), u && Ba.compose(e, u);
		let d = e.prototype;
		d.updateA11yEnabled || (d.updateA11yEnabled = i, D(e, "destroy", t), D(e, "render", n), D(e, "update", r), ["addSeries", "init"].forEach((t) => {
			D(e, t, function() {
				this.a11yDirty = !0;
			});
		}), ["afterApplyDrilldown", "drillupall"].forEach((t) => {
			D(e, t, function() {
				let e = this.accessibility;
				e && !e.zombie && e.update();
			});
		}), D(s, "update", o), [
			"update",
			"updatedData",
			"remove"
		].forEach((e) => {
			D(c, e, function() {
				this.chart.accessibility && (this.chart.a11yDirty = !0);
			});
		}));
	}
	e.compose = a;
	function o() {
		this.series.chart.accessibility && (this.series.chart.a11yDirty = !0);
	}
})(Po ||= {}), u(!0, jo, bo, {
	accessibility: { highContrastTheme: yo },
	lang: xo
});
var Fo = Po, Q = K;
Q.i18nFormat = Fo.i18nFormat, Q.A11yChartUtilities = X, Q.A11yHTMLUtilities = Y, Q.AccessibilityComponent = Cn, Q.KeyboardNavigationHandler = Z, Q.SeriesAccessibilityDescriber = ma, Fo.compose(Q.Chart, Q.Legend, Q.Point, Q.Series, Q.SVGElement, Q.RangeSelector);
//#endregion
//#region node_modules/highcharts/es-modules/Extensions/PatternFill.js
var { getOptions: Io } = O, Lo = zo();
function Ro(e, t, n) {
	let r = t.prototype.pointClass, i = r.prototype;
	i.calculatePatternDimensions || (D(e, "endResize", Ho), D(e, "redraw", Uo), L(i, { calculatePatternDimensions: qo }), D(r, "afterInit", Wo), D(t, "render", Ko), ae(t.prototype, "getColor", Yo), D(t, "afterRender", Xo), D(t, "mapZoomComplete", Xo), L(n.prototype, { addPattern: Jo }), D(n, "complexColor", Go));
}
function zo() {
	let e = [], t = Io().colors, n = 0;
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
	n = 5;
	for (let r of [
		"M 0 0 L 5 10 L 10 0",
		"M 3 3 L 8 3 L 8 8 L 3 8 Z",
		"M 5 5 m -4 0 a 4 4 0 1 1 8 0 a 4 4 0 1 1 -8 0",
		"M 0 0 L 10 10 M 9 -1 L 11 1 M -1 9 L 1 11",
		"M 0 10 L 10 0 M -1 1 L 1 -1 M 9 11 L 11 9"
	]) e.push({
		path: r,
		color: t[n++],
		width: 10,
		height: 10
	});
	return e;
}
function Bo(e, t) {
	let n = u({}, e), r = t.getBBox ? t.getBBox() : {
		x: 0,
		y: 0,
		width: 32,
		height: 32
	};
	return n._x = r.x, n._y = r.y, n;
}
function Vo(e, t) {
	let n = JSON.stringify(e), r = n.length || 0, i = 0, a = 0, o, s;
	if (t) {
		s = Math.max(Math.floor(r / 500), 1);
		for (let e = 0; e < r; e += s) i += n.charCodeAt(e);
		i &= i;
	}
	for (; a < r; ++a) o = n.charCodeAt(a), i = (i << 5) - i + o, i &= i;
	return i.toString(16).replace("-", "1");
}
function Ho() {
	if (this.renderer && (this.renderer.defIds || []).filter((e) => e && e.indexOf && e.indexOf("highcharts-pattern-") === 0).length) {
		for (let e of this.series) if (e.visible) for (let t of e.points) {
			let e = t.options && t.options.color;
			e && e.pattern && (e.pattern._width = "defer", e.pattern._height = "defer");
		}
		this.redraw(!1);
	}
}
function Uo() {
	let e = {}, n = this.renderer, r = (n.defIds || []).filter((e) => e.indexOf && e.indexOf("highcharts-pattern-") === 0);
	if (r.length) {
		[].forEach.call(this.renderTo.querySelectorAll("[color^=\"url(\"], [fill^=\"url(\"], [stroke^=\"url(\"]"), (t) => {
			let r = t.getAttribute("fill") || t.getAttribute("color") || t.getAttribute("stroke");
			if (r) {
				let t = r.replace(n.url, "").replace("url(#", "").replace(")", "");
				e[t] = !0;
			}
		});
		for (let i of r) e[i] || (t(n.defIds, i), n.patternElements[i] && (n.patternElements[i].destroy(), delete n.patternElements[i]));
	}
}
function Wo() {
	let e = this, t = e.options.color;
	t && (t.pattern || t.patternIndex !== void 0) && (typeof t.pattern?.path == "string" && (t.pattern.path = { d: t.pattern.path }), e.color = e.options.color = u(e.series.options.color, t));
}
function Go(e) {
	let t = e.args[0], n = e.args[1], r = e.args[2], i = this.chartIndex || 0, a = t.pattern, o = "var(--highcharts-neutral-color-80)";
	if (t.patternIndex !== void 0 && Lo && (a = Lo[t.patternIndex]), !a) return !0;
	if (a.image || typeof a.path == "string" || a.path && a.path.d) {
		let e = r.parentNode && r.parentNode.getAttribute("class");
		e &&= e.indexOf("highcharts-legend") > -1, (a._width === "defer" || a._height === "defer") && qo.call({ graphic: { element: r } }, a), (e || !a.id || a.anchorToPoint) && (a = u({}, a), a.anchorToPoint && (a = Bo(a, r)), a.id = "highcharts-pattern-" + i + "-" + Vo(a) + Vo(a, !0) + (a.anchorToPoint ? "-anchored" : "")), this.addPattern(a, !this.forExport && N(a.animation, this.globalAnimation, { duration: 100 })), o = `url(${this.url}#${a.id + (this.forExport ? "-export" : "")})`;
	} else o = a.color || o;
	return r.setAttribute(n, o), t.toString = function() {
		return o;
	}, !1;
}
function Ko() {
	let e = this.chart.isResizing;
	if (this.isDirtyData || e || !this.chart.hasRendered) for (let t of this.points) {
		let n = t.options && t.options.color;
		n && n.pattern && (e && !(t.shapeArgs && t.shapeArgs.width && t.shapeArgs.height) ? (n.pattern._width = "defer", n.pattern._height = "defer") : t.calculatePatternDimensions(n.pattern));
	}
}
function qo(e) {
	if (e.width && e.height && !e.anchorToPoint) return;
	let t = this.graphic && (this.graphic.getBBox && this.graphic.getBBox(!0) || this.graphic.element && this.graphic.element.getBBox()) || {}, n = this.shapeArgs;
	if (n && (t.width = n.width || t.width, t.height = n.height || t.height, t.x = n.x || t.x, t.y = n.y || t.y), e.image) {
		if (!t.width || !t.height) {
			e._width = "defer", e._height = "defer";
			let t = this.series.chart.mapView && this.series.chart.mapView.getSVGTransform().scaleY;
			a(t) && t < 0 && (e._inverted = !0);
			return;
		}
		e.aspectRatio && (t.aspectRatio = t.width / t.height, e.aspectRatio > t.aspectRatio ? t.aspectWidth = t.height * e.aspectRatio : t.aspectHeight = t.width / e.aspectRatio), e._width = e.width || Math.ceil(t.aspectWidth || t.width), e._height = e.height || Math.ceil(t.aspectHeight || t.height);
	}
	e.anchorToPoint ? (e._x = 0, e._y = 0, e.width || (e._width = t.width), e.height || (e._height = t.height)) : (e.width || (e._x = e.x || 0, e._x += t.x - Math.round(t.aspectWidth ? Math.abs(t.aspectWidth - t.width) / 2 : 0)), e.height || (e._y = e.y || 0, e._y += t.y - Math.round(t.aspectHeight ? Math.abs(t.aspectHeight - t.height) / 2 : 0)));
}
function Jo(e, t) {
	let n = N(t, !0), r = le(n), i = e.color || "var(--highcharts-neutral-color-80)", a = e.height || (typeof e._height == "number" ? e._height : 0) || 32, o = e.width || (typeof e._width == "number" ? e._width : 0) || 32, s = e.anchorToPoint ? "userSpaceOnUse" : e.patternContentUnits || "userSpaceOnUse", c = (e) => this.rect(0, 0, o, a).attr({ fill: e }).add(m), l, u = e.id, f;
	if (u || (this.idCounter = this.idCounter || 0, u = "highcharts-pattern-" + this.idCounter + "-" + (this.chartIndex || 0), ++this.idCounter), this.forExport && (u += "-export"), this.defIds = this.defIds || [], this.defIds.indexOf(u) > -1) return;
	this.defIds.push(u);
	let p = {
		id: u,
		patternUnits: "userSpaceOnUse",
		patternContentUnits: s,
		width: o,
		height: a,
		x: e._x || e.x || 0,
		y: e._y || e.y || 0
	};
	e._inverted && (p.patternTransform = "scale(1, -1)", e.patternTransform && (e.patternTransform += " scale(1, -1)")), e.patternTransform && (p.patternTransform = e.patternTransform);
	let m = this.createElement("pattern").attr(p).add(this.defs);
	return m.id = u, e.path ? (f = d(e.path) ? e.path : { d: e.path }, e.backgroundColor && c(e.backgroundColor), l = { d: f.d }, this.styledMode || (l.stroke = f.stroke || i, l["stroke-width"] = N(f.strokeWidth, 2), l.fill = f.fill || "none"), f.transform && (l.transform = f.transform), this.createElement("path").attr(l).add(m), m.color = i) : e.image && (n ? this.image(e.image, 0, 0, o, a, function() {
		this.animate({ opacity: N(e.opacity, 1) }, r), H(this.element, "load");
	}).attr({ opacity: 0 }).add(m) : this.image(e.image, 0, 0, o, a).add(m)), !(e.image && n) && e.opacity !== void 0 && [].forEach.call(m.element.childNodes, (t) => {
		t.setAttribute("opacity", e.opacity);
	}), this.patternElements = this.patternElements || {}, this.patternElements[u] = m, m;
}
function Yo(e) {
	let t = this.options.color;
	t && t.pattern && !t.pattern.color ? (delete this.options.color, e.apply(this, [].slice.call(arguments, 1)), t.pattern.color = this.color, this.color = this.options.color = t) : e.apply(this, [].slice.call(arguments, 1));
}
function Xo() {
	let e = this;
	if (!e.chart?.mapView) return;
	let t = e.chart.renderer, n = t.patternElements;
	t.defIds?.length && n && e.points.filter(function(e) {
		let t = e;
		return t.graphic ? (t.graphic.element.hasAttribute("fill") || t.graphic.element.hasAttribute("color") || t.graphic.element.hasAttribute("stroke")) && !t.options.color?.pattern?.image && !!t.group?.scaleX && !!t.group?.scaleY : !1;
	}).map(function(e) {
		let n = e;
		return {
			id: (n.graphic?.element.getAttribute("fill") || n.graphic?.element.getAttribute("color") || n.graphic?.element.getAttribute("stroke") || "").replace(t.url, "").replace("url(#", "").replace(")", ""),
			x: n.group?.scaleX || 1,
			y: n.group?.scaleY || 1
		};
	}).filter(function(e, t, n) {
		return e.id !== "" && e.id.indexOf("highcharts-pattern-") !== -1 && !n.some(function(n, r) {
			return n.id === e.id && r < t;
		});
	}).forEach(function(e) {
		let t = e.id;
		n[t].scaleX = 1 / e.x, n[t].scaleY = 1 / e.y, n[t].updateTransform("patternTransform");
	});
}
//#endregion
//#region node_modules/highcharts/es-modules/masters/modules/pattern-fill.src.js
var Zo = K;
Zo.patterns = Lo, Ro(Zo.Chart, Zo.Series, Zo.SVGRenderer);
//#endregion
//#region node_modules/highcharts/es-modules/Core/Renderer/HTML/HTMLElement.js
var { composed: Qo, isFirefox: $o } = K, es = class e extends we {
	static compose(t) {
		G(Qo, "HTMLElement") && (t.prototype.html = function(t, n, r) {
			return new e(this, "div").attr({
				text: t,
				x: Math.round(n),
				y: Math.round(r)
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
		let { element: t } = this, n = e && "width" in e, r = n && e.width, i;
		return n && (delete e.width, this.textWidth = _(r) || void 0, i = !0), e?.textOverflow === "ellipsis" && (e.overflow = "hidden", e.whiteSpace = "nowrap"), e?.lineClamp ? (e.display = "-webkit-box", e.WebkitLineClamp = e.lineClamp, e.WebkitBoxOrient = "vertical", e.overflow = "hidden") : e?.lineClamp === 0 && (e.display = "inline-block"), s(Number(e?.fontSize)) && (e.fontSize += "px"), L(this.styles, e), b(t, e), i && this.updateTransform(), this;
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
		if (!this.added) {
			this.alignOnAdd = !0;
			return;
		}
		let { element: e, foreignObject: t, oldTextWidth: n, renderer: r, rotation: i, scaleX: c, styles: { display: l = "inline-block", whiteSpace: u }, textAlign: d = "left", textWidth: f, x: p = 0, y: m = 0 } = this, h = () => this.textPxLength ? this.textPxLength : (b(e, {
			width: "",
			whiteSpace: u || "nowrap"
		}), e.offsetWidth), g = [
			i,
			d,
			e.innerHTML,
			f,
			this.textAlign
		].join(","), _;
		if (b(e, {
			display: "inline-block",
			verticalAlign: "top"
		}), f !== n) {
			let t = h(), a = f || 0, o = !r.styledMode && e.style.textOverflow === "" && e.style.webkitLineClamp;
			(a > n || t > a || o) && (/[\-\s\u00AD]/.test(e.textContent || e.innerText) || e.style.textOverflow === "ellipsis") && (b(e, {
				width: (i || c || t > a) && s(f) ? f + "px" : o ? Math.min(t + 1, a) + "px" : "auto",
				display: l,
				whiteSpace: u || "normal"
			}), this.oldTextWidth = f);
		}
		t.attr({
			width: r.width,
			height: r.height
		}), g !== this.cTT && (_ = r.fontMetrics(e).b, this.getSpanCorrection(!a(i) && !this.textWidth && this.textPxLength || e.offsetWidth, _, o(d))), super.updateTransform(), s(p) && s(m) ? (t.attr({
			x: p + (this.xCorr || 0),
			y: m + (this.yCorr || 0),
			width: e.offsetWidth + 4,
			height: e.offsetHeight + 1,
			"transform-origin": e.getAttribute("transform-origin") || "0 0"
		}), b(e, {
			display: l,
			textAlign: d
		})) : $o && t.attr({
			width: 0,
			height: 0
		}), this.cTT = g;
	}
	add(e) {
		let { foreignObject: t, renderer: n } = this;
		return t.add(e), super.add(n.createElement("body").attr({ xmlns: "http://www.w3.org/1999/xhtml" }).css({
			background: "transparent",
			margin: "0 3px 0 0"
		}).add(t)), this.alignOnAdd && this.updateTransform(), this;
	}
	textSetter(e) {
		e !== this.textStr && (delete this.oldTextWidth, V.setElementHTML(this.element, e ?? ""), this.textStr = e, this.doTransform = !0);
	}
	alignSetter(e) {
		this.alignValue = this.textAlign = e, this.doTransform = !0;
	}
	xSetter(e, t) {
		this[t] = e, this.doTransform = !0;
	}
}, ts = es.prototype;
ts.ySetter = ts.xSetter;
//#endregion
//#region node_modules/highcharts/es-modules/Core/Axis/DateTimeAxis.js
var ns;
(function(e) {
	function t(e) {
		if (!e.keepProps.includes("dateTime")) {
			e.keepProps.push("dateTime");
			let t = e.prototype;
			t.getTimeTicks = n, D(e, "afterSetType", r);
		}
		return e;
	}
	e.compose = t;
	function n() {
		return this.chart.time.getTimeTicks.apply(this.chart.time, arguments);
	}
	function r() {
		if (this.type !== "datetime") {
			this.dateTime = void 0;
			return;
		}
		this.dateTime ||= new i(this);
	}
	class i {
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
			], r = n[n.length - 1], i = ie[r[0]], a = r[1], o, s;
			for (o = 0; o < n.length; o++) if (r = n[o], i = ie[r[0]], a = r[1], n[o + 1]) {
				let t = (i * a[a.length - 1] + ie[n[o + 1][0]]) / 2;
				if (e <= t) {
					s = t / e;
					break;
				}
			}
			i === ie.year && e < 5 * i && (a = [
				1,
				2,
				5
			]);
			let c = T(e / i, a, r[0] === "year" ? Math.max(f(e / i), 1) : 1);
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
	e.Additions = i;
})(ns ||= {});
var rs = ns, is;
(function(e) {
	function t(e) {
		return e.keepProps.includes("logarithmic") || (e.keepProps.push("logarithmic"), D(e, "afterSetType", n), D(e, "afterInit", r)), e;
	}
	e.compose = t;
	function n() {
		this.type === "logarithmic" ? this.logarithmic ??= new i(this) : this.logarithmic = void 0;
	}
	function r() {
		let e = this, t = e.logarithmic;
		t && (e.lin2val = function(e) {
			return t.lin2log(e);
		}, e.val2lin = function(e) {
			return t.log2lin(e);
		});
	}
	class i {
		constructor(e) {
			this.axis = e;
		}
		getLogTickPositions(e, t, n, r) {
			let i = this, a = i.axis, o = a.len, s = a.options, c = [];
			if (r || (i.minorAutoInterval = void 0), e >= .5) e = Math.round(e), c = a.getLinearTickPositions(e, t, n);
			else if (e >= .08) {
				let a = Math.floor(t), o, s, l, u, d, f, p;
				for (o = e > .3 ? [
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
				], s = a; s < n + 1 && !p; s++) for (u = o.length, l = 0; l < u && !p; l++) d = i.log2lin(i.lin2log(s) * o[l]), d > t && (!r || f <= n) && f !== void 0 && c.push(f), f > n && (p = !0), f = d;
			} else {
				let l = i.lin2log(t), u = i.lin2log(n), d = r ? a.getMinorTickInterval() : s.tickInterval, f = d === "auto" ? null : d, p = s.tickPixelInterval / (r ? 5 : 1), m = r ? o / a.tickPositions.length : o;
				e = N(f, i.minorAutoInterval, (u - l) * p / (m || 1)), e = T(e), c = a.getLinearTickPositions(e, l, u).map(i.log2lin), r || (i.minorAutoInterval = e / 5);
			}
			return r || (a.tickInterval = e), c;
		}
		lin2log(e) {
			return 10 ** e;
		}
		log2lin(e) {
			return Math.log(e) / Math.LN10;
		}
	}
	e.Additions = i;
})(is ||= {});
var as = is, os;
(function(e) {
	let n;
	function r(e) {
		return this.addPlotBandOrLine(e, "plotBands");
	}
	function i(e, t) {
		let r = this.userOptions, i = new n(this, e);
		if (this.visible && (i = i.render()), i) {
			if (this._addedPlotLB || (this._addedPlotLB = !0, (r.plotLines || []).concat(r.plotBands || []).forEach((e) => {
				this.addPlotBandOrLine(e);
			})), t) {
				let n = r[t] || [];
				n.push(e), r[t] = n;
			}
			this.plotLinesAndBands.push(i);
		}
		return i;
	}
	function a(e) {
		return this.addPlotBandOrLine(e, "plotLines");
	}
	function o(e, t) {
		let o = t.prototype;
		return o.addPlotBand || (n = e, L(o, {
			addPlotBand: r,
			addPlotLine: a,
			addPlotBandOrLine: i,
			getPlotBandPath: c,
			removePlotBand: l,
			removePlotLine: d,
			removePlotBandOrLine: u
		})), t;
	}
	e.compose = o;
	function c(e, t, n) {
		n ||= this.options;
		let r = this.getPlotLinePath({
			value: t,
			force: !0,
			acrossPanes: n.acrossPanes
		}), i = [], a = this.horiz, o = !s(this.min) || !s(this.max) || e < this.min && t < this.min || e > this.max && t > this.max, c = this.getPlotLinePath({
			value: e,
			force: !0,
			acrossPanes: n.acrossPanes
		}), l, u = 1, d;
		if (c && r) for (o && (d = c.toString() === r.toString(), u = 0), l = 0; l < c.length; l += 2) {
			let e = c[l], t = c[l + 1], n = r[l], o = r[l + 1];
			(e[0] === "M" || e[0] === "L") && (t[0] === "M" || t[0] === "L") && (n[0] === "M" || n[0] === "L") && (o[0] === "M" || o[0] === "L") && (a && n[1] === e[1] ? (n[1] += u, o[1] += u) : !a && n[2] === e[2] && (n[2] += u, o[2] += u), i.push([
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
			], ["Z"])), i.isFlat = d;
		}
		return i;
	}
	function l(e) {
		this.removePlotBandOrLine(e);
	}
	function u(e) {
		let n = this.plotLinesAndBands, r = this.options, i = this.userOptions;
		if (n) {
			let a = n.length;
			for (; a--;) n[a].id === e && n[a].destroy();
			[
				r.plotLines || [],
				i.plotLines || [],
				r.plotBands || [],
				i.plotBands || []
			].forEach(function(n) {
				for (a = n.length; a--;) n[a]?.id === e && t(n, n[a]);
			});
		}
	}
	function d(e) {
		this.removePlotBandOrLine(e);
	}
})(os ||= {});
var ss = os, cs = class e {
	static compose(t, n) {
		return D(t, "afterInit", function() {
			this.labelCollectors.push(() => {
				let e = [];
				for (let t of this.axes) for (let { label: n, options: r } of t.plotLinesAndBands) n && !r?.label?.allowOverlap && e.push(n);
				return e;
			});
		}), ss.compose(e, n);
	}
	constructor(e, t) {
		this.axis = e, this.options = t, this.id = t.id;
	}
	render() {
		g(this, "render");
		let { axis: e, options: t } = this, { chart: n, horiz: r, logarithmic: i } = e, { color: o, events: s, zIndex: c = 0 } = t, { renderer: l, time: d } = e.chart, f = {}, p = d.parse(t.to), m = d.parse(t.from), h = d.parse(t.value), _ = t.borderWidth, v = t.label, { label: y, svgElem: b } = this, x = [], S, C = a(m) && a(p), T = a(h), E = !b, D = { class: "highcharts-plot-" + (C ? "band " : "line ") + (t.className || "") }, O = C ? "bands" : "lines";
		if (n.styledMode || (T ? (D.stroke = o || "var(--highcharts-neutral-color-40)", D["stroke-width"] = N(t.width, 1), t.dashStyle && (D.dashstyle = t.dashStyle)) : C && (D.fill = o || "var(--highcharts-highlight-color-10)", _ && (D.stroke = t.borderColor, D["stroke-width"] = _))), f.zIndex = c, O += "-" + c, S = e.plotLinesAndBandsGroups[O], S || (e.plotLinesAndBandsGroups[O] = S = l.g("plot-" + O).clip(n.plotClipOuter).attr(f).add()), b || (this.svgElem = b = l.path().attr(D).add(S)), a(h)) x = e.getPlotLinePath({
			value: i?.log2lin(h) ?? h,
			lineWidth: b.strokeWidth(),
			acrossPanes: t.acrossPanes
		});
		else if (a(m) && a(p)) x = e.getPlotBandPath(i?.log2lin(m) ?? m, i?.log2lin(p) ?? p, t);
		else return;
		return !this.eventsAdded && s && (w(s, (e, t) => {
			b?.on(t, (e) => {
				s[t].apply(this, [e, this]);
			});
		}), this.eventsAdded = !0), (E || !b.d) && x?.length ? b.attr({ d: x }) : b && (x ? (b.show(), b.animate({ d: x })) : b.d && (b.hide(), y && (this.label = y = y.destroy()))), v && (a(v.text) || a(v.formatter)) && x?.length && e.width > 0 && e.height > 0 && !x.isFlat ? (v = u({
			align: r && C ? "center" : void 0,
			x: r ? !C && 4 : 10,
			verticalAlign: !r && C ? "middle" : void 0,
			y: r ? C ? 16 : 10 : C ? 6 : -4,
			rotation: r && !C ? 90 : 0,
			...C ? { inside: !0 } : {}
		}, v), this.renderLabel(v, x, C, c)) : y && y.hide(), this;
	}
	renderLabel(e, t, n, r) {
		let i = this, o = i.axis, s = o.chart.renderer, c = e.inside, l = i.label;
		l || (i.label = l = s.text(this.getLabelText(e), 0, 0, e.useHTML).attr({
			align: e.textAlign || e.align,
			rotation: e.rotation,
			class: "highcharts-plot-" + (n ? "band" : "line") + "-label " + (e.className || ""),
			zIndex: r
		}), o.chart.styledMode || l.css(u({
			color: o.chart.options.title?.style?.color,
			fontSize: "0.8em",
			textOverflow: n && !c ? "" : "ellipsis"
		}, e.style)), l.add());
		let d = t.xBounds || [
			t[0][1],
			t[1][1],
			n ? t[2][1] : t[0][1]
		], f = t.yBounds || [
			t[0][2],
			t[1][2],
			n ? t[2][2] : t[0][2]
		], p = me(d), m = me(f), h = fe(d) - p;
		l.align(e, !1, {
			x: p,
			y: m,
			width: h,
			height: fe(f) - m
		}), l.alignAttr.y -= s.fontMetrics(l).b, (!l.alignValue || l.alignValue === "left" || a(c)) && l.css({ width: (e.style?.width || (!n || !c ? l.rotation === 90 ? o.height - (l.alignAttr.y - o.top) : (e.clip ? o.width + o.left : o.chart.chartWidth) - l.alignAttr.x : h)) + "px" }), l.show(!0);
	}
	getLabelText(e) {
		return a(e.formatter) ? e.formatter.call(this, this) : e.text;
	}
	destroy() {
		t(this.axis.plotLinesAndBands, this), delete this.axis, i(this);
	}
}, { animObject: ls } = R, { format: us } = I, { composed: ds, dateFormats: fs, doc: ps, isSafari: ms } = K, { distribute: hs } = wr, gs = (e) => {
	clearTimeout(e.hideTimer), clearTimeout(e.showTimer);
}, _s = class {
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
		let t = this.points || k(this), n;
		return n = [e.headerFooterFormatter(t[0])], n = n.concat(e.bodyFormatter(t)), n.push(e.headerFooterFormatter(t[0], !0)), n;
	}
	destroy() {
		this.label &&= this.label.destroy(), this.split && (this.cleanSplit(!0), this.tt &&= this.tt.destroy()), this.renderer && (this.renderer = this.renderer.destroy(), re(this.container)), n(this.hideTimer), gs(this);
	}
	getAnchor(e, t) {
		let { chart: n, pointer: r } = this, i = n.inverted, a = n.plotTop, o = n.plotLeft, s;
		if (e = k(e), e[0].series?.yAxis && !e[0].series.yAxis.options.reversedStacks && (e = e.slice().reverse()), this.followPointer && t) t.chartX === void 0 && (t = r.normalize(t)), s = [t.chartX - o, t.chartY - a];
		else if (e[0].tooltipPos) s = e[0].tooltipPos;
		else {
			let n = 0, r = 0;
			e.forEach(function(e) {
				let t = e.pos(!0);
				t && (n += t[0], r += t[1]);
			}), n /= e.length, r /= e.length, this.shared && e.length > 1 && t && (i ? n = t.chartX : r = t.chartY), s = [n - o, r - a];
		}
		let c = {
			point: e[0],
			ret: s
		};
		return g(this, "getAnchor", c), c.ret.map(Math.round);
	}
	getClassName(e, t, n) {
		let r = this.options, i = e.series, a = i.options;
		return [
			r.className,
			"highcharts-label",
			n && "highcharts-tooltip-header",
			t ? "highcharts-tooltip-box" : "highcharts-tooltip",
			!n && "highcharts-color-" + N(e.colorIndex, i.colorIndex),
			a?.className
		].filter(B).join(" ");
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
				this.container = o = K.doc.createElement("div"), o.className = "highcharts-container highcharts-tooltip-container " + (e.renderTo.className.match(/(highcharts[a-zA-Z0-9-]+)\s?/gm) || [].join(" ")), o.dataset.highchartsChart = e.index.toString(), b(o, {
					position: "absolute",
					top: "1px",
					pointerEvents: "none",
					zIndex: Math.max(i.style.zIndex || 0, (t?.zIndex || 0) + 3)
				}), this.renderer = s = new gt(o, 0, 0, t, void 0, void 0, s.styledMode);
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
		return o && !o.parentElement && K.doc.body.appendChild(o), this.label;
	}
	getPlayingField() {
		let { body: e, documentElement: t } = ps, { chart: n, distance: r, outside: i } = this;
		return {
			width: i ? Math.max(e.scrollWidth, t.scrollWidth, e.offsetWidth, t.offsetWidth, t.clientWidth) - 2 * r - 2 : n.chartWidth,
			height: i ? Math.max(e.scrollHeight, t.scrollHeight, e.offsetHeight, t.offsetHeight, t.clientHeight) : n.chartHeight
		};
	}
	getPosition(e, t, n) {
		let { distance: r, chart: i, outside: a, pointer: o } = this, { inverted: s, plotLeft: c, plotTop: l, polar: u } = i, { plotX: d = 0, plotY: f = 0 } = n, p = {}, m = s && n.h || 0, { height: h, width: g } = this.getPlayingField(), _ = o.getChartPosition(), v = (e) => e * _.scaleX, y = (e) => e * _.scaleY, b = (n) => {
			let o = n === "x";
			return [
				n,
				o ? g : h,
				o ? e : t
			].concat(a ? [
				o ? v(e) : y(t),
				o ? _.left - r + v(d + c) : _.top - r + y(f + l),
				0,
				o ? g : h
			] : [
				o ? e : t,
				o ? d + c : f + l,
				o ? c : l,
				o ? c + i.plotWidth : l + i.plotHeight
			]);
		}, x = b("y"), S = b("x"), C, w = !!n.negative;
		!u && i.hoverSeries?.yAxis?.reversed && (w = !w);
		let T = !this.followPointer && N(n.ttBelow, !u && !s === w), E = function(e, t, n, i, o, s, c) {
			let l = a ? e === "y" ? y(r) : v(r) : r, u = (n - i) / 2, d = i < o - r, f = o + r + i < t, h = o - l - n + u, g = o + l - u;
			if (T && f) p[e] = g;
			else if (!T && d) p[e] = h;
			else if (d) p[e] = Math.min(c - i, h - m < 0 ? h : h - m);
			else if (f) p[e] = Math.max(s, g + m + n > t ? g : g + m);
			else return p[e] = 0, !1;
		}, D = function(e, t, n, i, a) {
			if (a < r || a > t - r) return !1;
			a < n / 2 ? p[e] = 1 : a > t - i / 2 ? p[e] = t - i - 2 : p[e] = a - n / 2;
		}, O = function(e) {
			[x, S] = [S, x], C = e;
		}, k = () => {
			E.apply(0, x) === !1 ? C ? p.x = p.y = 0 : (O(!0), k()) : D.apply(0, S) === !1 && !C && (O(!0), k());
		};
		return (s && !u || this.len > 1) && O(), k(), a && (p.x -= _.left, p.y -= _.top), p;
	}
	getFixedPosition(e, t, n) {
		let r = n.series, { chart: i, options: a, split: s } = this, c = a.position, l = c.relativeTo, u = a.shared || r?.yAxis?.isRadial && (l === "pane" || !l) ? "plotBox" : l, d = u === "chart" ? i.renderer : i[u] || i.getClipBox(r, !0);
		return {
			x: d.x + (d.width - e) * o(c.align) + c.x,
			y: d.y + (d.height - t) * o(c.verticalAlign) + (!s && c.y || 0)
		};
	}
	hide(e) {
		let t = this;
		gs(this), e = N(e, this.options.hideDelay), this.isHidden || (this.hideTimer = ue(function() {
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
		this.chart = e, this.options = t, this.crosshairs = [], this.isHidden = !0, this.split = t.split && !e.inverted && !e.polar, this.shared = t.shared || this.split, this.outside = N(t.outside, !!(e.scrollablePixelsX || e.scrollablePixelsY));
	}
	shouldStickOnContact(e) {
		return !!(!this.followPointer && this.options.stickOnContact && (!e || this.pointer.inClass(e.target, "highcharts-tooltip")));
	}
	move(e, t, n, r) {
		let { followPointer: i, options: a } = this, o = ls(!i && !this.isHidden && !a.fixed && a.animation), s = i || (this.len || 0) > 1, c = {
			x: e,
			y: t
		};
		s ? c.anchorX = c.anchorY = NaN : (c.anchorX = n, c.anchorY = r), o.step = () => this.drawTracker(), this.getLabel().animate(c, o);
	}
	refresh(e, t) {
		let n = this, { chart: r, options: i, pointer: a, shared: o } = this, s = k(e), c = s[0], l = i.format, u = i.formatter || n.defaultFormatter, d = r.styledMode, f = n.allowShared;
		if (!i.enabled || !c.series) return;
		gs(this), n.allowShared = !(!S(e) && e.series && e.series.noSharedTooltip), f &&= !n.allowShared, n.followPointer = !n.split && c.series.tooltipOptions.followPointer;
		let p = n.getAnchor(e, t), m = p[0], h = p[1];
		o && n.allowShared && (a.applyInactiveState(s), s.forEach((e) => e.setState("hover")), c.points = s), this.len = s.length;
		let _ = B(l) ? us(l, c, r) : u.call(c, n, c);
		c.points = void 0;
		let v = c.series;
		this.distance = N(v.tooltipOptions.distance, 16), _ === !1 ? this.hide() : this.showTimer = ue(() => {
			if (n.split && n.allowShared) n.renderSplit(_, s);
			else {
				let e = m, o = h;
				if (t && a.isDirectTouch && (e = t.chartX - r.plotLeft, o = t.chartY - r.plotTop), r.polar || v.options.clip === !1 || s.some((t) => a.isDirectTouch || t.series.shouldShowTooltip(e, o))) {
					let e = n.getLabel(f && n.tt || {});
					(!i.style.width || d) && e.css({ width: (this.outside ? this.getPlayingField() : r.spacingBox).width - 2 * i.padding + "px" }), e.attr({
						class: n.getClassName(c),
						text: S(_) ? _.join("") : _
					}), this.outside && e.attr({ x: q(e.x || 0, 0, this.getPlayingField().width - (e.width || 0) - 1) }), d || e.attr({ stroke: i.borderColor || c.color || v.color || "var(--highcharts-neutral-color-60)" }), n.updatePosition({
						plotX: m,
						plotY: h,
						negative: c.negative,
						ttBelow: c.ttBelow,
						series: v,
						h: p[2] || 0
					});
				} else {
					n.hide();
					return;
				}
			}
			n.isHidden && n.label && n.label.attr({ opacity: 1 }).show(), n.isHidden = !1;
		}, n.isHidden && i.showDelay || 0), g(this, "refresh");
	}
	renderSplit(e, t) {
		let n = this, { chart: r, chart: { chartWidth: i, chartHeight: a, plotHeight: o, plotLeft: s, plotTop: c, scrollablePixelsY: l = 0, scrollablePixelsX: d, styledMode: f }, distance: p, options: m, options: { fixed: h, position: g, positioner: _ }, pointer: v } = n, { scrollLeft: y = 0, scrollTop: b = 0 } = r.scrollablePlotArea?.scrollingContainer || {}, x = n.outside && typeof d != "number" ? ps.documentElement.getBoundingClientRect() : {
			left: y,
			right: y + i,
			top: b,
			bottom: b + a
		}, S = n.getLabel(), C = this.renderer || r.renderer, w = !!r.xAxis[0]?.opposite, { left: T, top: E } = v.getChartPosition(), D = _ || h, O = c + b, k = 0, A = o - l;
		function ee(e) {
			let { isHeader: t, plotX: n = 0, plotY: r = 0, series: i } = e, a, l;
			if (t) a = Math.max(s + n, s), l = c + o / 2;
			else {
				let { xAxis: e, yAxis: t } = i;
				a = e.pos + q(n, -p, e.len + p), i.shouldShowTooltip(0, t.pos - c + r, { ignoreX: !0 }) && (l = t.pos + r);
			}
			return a = q(a, x.left - p, x.right + p), {
				anchorX: a,
				anchorY: l
			};
		}
		let j = function(e, t, r, i, a = [0, 0], o = !0) {
			let s, c;
			if (r.isHeader) c = w ? 0 : A, s = q(a[0] - e / 2, x.left, x.right - e - (n.outside ? T : 0));
			else if (h && r) {
				let i = n.getFixedPosition(e, t, r);
				s = i.x, c = i.y - O;
			} else c = a[1] - O, s = o ? a[0] - e - p : a[0] + p, s = q(s, o ? s : x.left, x.right);
			return {
				x: s,
				y: c
			};
		};
		function M(e, t, r) {
			let i = e, { isHeader: a, series: o } = t, s = o.tooltipOptions || m, c = a ? u(s, s.header) : s;
			if (!i) {
				let e = {
					padding: s.padding,
					r: s.borderRadius
				};
				f || (e.fill = c.backgroundColor, e["stroke-width"] = c.borderWidth ?? +!s.fixed), i = C.label("", 0, 0, c.shape || (h && !a ? "rect" : "callout"), void 0, void 0, s.useHTML).addClass(n.getClassName(t, !0, a)).attr(e).add(S);
			}
			return i.isActive = !0, f || i.css(c.style), i.attr({ text: r }), f || i.attr({ stroke: c.borderColor || t.color || o.color || "var(--highcharts-neutral-color-80)" }), i;
		}
		B(e) && (e = [!1, e]);
		let P = e.slice(0, t.length + 1).reduce(function(e, r, i) {
			if (r !== !1 && r !== "") {
				let a = t[i - 1] || {
					isHeader: !0,
					plotX: t[0].plotX,
					plotY: o,
					series: {}
				}, s = a.isHeader, c = s ? n : a.series, l = c.tt = M(c.tt, a, r.toString()), u = l.getBBox(), d = u.width + l.strokeWidth();
				s && (k = u.height + m.header.distance, A += k, w && (O -= k));
				let { anchorX: f, anchorY: p } = ee(a);
				if (typeof p == "number") {
					let t = u.height + 1, r = (_ || j).call(n, d, t, a, n, [f, p]);
					e.push({
						align: D ? 0 : void 0,
						anchorX: f,
						anchorY: p,
						boxWidth: d,
						point: a,
						rank: N(r.rank, +!!s),
						size: t,
						target: r.y,
						tt: l,
						x: r.x
					});
				} else l.isActive = !1;
			}
			return e;
		}, []);
		!D && P.some((e) => {
			let { outside: t } = n, r = (t ? T : 0) + e.anchorX;
			return r < x.left && r + e.boxWidth < x.right || r < T - x.left + e.boxWidth && x.right - r > r;
		}) && (P = P.map((e) => {
			let { x: t, y: n } = j.call(this, e.boxWidth, e.size, e.point, void 0, [e.anchorX, e.anchorY], !1);
			return L(e, {
				target: n,
				x: t
			});
		})), n.cleanSplit(), hs(P, A);
		let F = {
			left: T,
			right: T
		};
		P.forEach(function(e) {
			let { x: t, boxWidth: r, isHeader: i } = e;
			i || (n.outside && T + t < F.left && (F.left = T + t), n.outside && F.left + r > F.right && (F.right = T + t));
		}), P.forEach(function(e) {
			let { x: t, anchorX: r, anchorY: i, pos: a, point: { isHeader: o } } = e, s = {
				visibility: a === void 0 ? "hidden" : "inherit",
				x: t,
				y: (a || 0) + O + (h && g.y || 0),
				anchorX: r,
				anchorY: i
			};
			if (n.outside && t < r) {
				let e = T - F.left;
				e > 0 && (s.x = o ? (F.right - F.left) / 2 : t + e, s.anchorX = r + e);
			}
			e.tt.attr(s);
		});
		let { container: te, outside: I, renderer: ne } = n;
		if (I && te && ne) {
			let { width: e, height: t, x: n, y: r } = S.getBBox();
			ne.setSize(e + n, t + r, !1), te.style.left = F.left + "px", te.style.top = E + "px";
		}
		ms && S.attr({ opacity: S.opacity === 1 ? .999 : 1 });
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
		a[0] += t.plotLeft - (n.translateX || 0), a[1] += t.plotTop - (n.translateY || 0), i.x = Math.min(0, a[0]), i.y = Math.min(0, a[1]), i.width = a[0] < 0 ? Math.max(Math.abs(a[0]), o.width - a[0]) : Math.max(Math.abs(a[0]), o.width), i.height = a[1] < 0 ? Math.max(Math.abs(a[1]), o.height - Math.abs(a[1])) : Math.max(Math.abs(a[1]), o.height), e.tracker ? e.tracker.attr(i) : (e.tracker = n.renderer.rect(i).addClass("highcharts-tracker").add(n), D(e.tracker.element, "mouseenter", () => gs(e)), t.styledMode || e.tracker.attr({ fill: "rgba(0,0,0,0)" }));
	}
	styledModeFormat(e) {
		return e.replace("style=\"font-size: 0.8em\"", "class=\"highcharts-header\"").replace(/style="color:{(point|series)\.color}"/g, "class=\"highcharts-color-{$1.colorIndex} {series.options.className} {point.options.className}\"");
	}
	headerFooterFormatter(e, t) {
		let n = e.series, r = n.tooltipOptions, i = n.xAxis?.dateTime, a = {
			isFooter: t,
			point: e
		}, o = r.xDateFormat || "", c = r[t ? "footerFormat" : "headerFormat"];
		return g(this, "headerFormatter", a, function(t) {
			if (i && !o && s(e.key) && (o = i.getXDateFormat(e.key, r.dateTimeLabelFormats)), i && o) {
				if (d(o)) {
					let e = o;
					fs[0] = (t) => n.chart.time.dateFormat(e, t), o = "%0";
				}
				(e.tooltipDateKeys || ["key"]).forEach((e) => {
					c = c.replace(RegExp("point\\." + e + "([ \\)}])"), `(point.${e}:${o})$1`);
				});
			}
			n.chart.styledMode && (c = this.styledModeFormat(c)), t.text = us(c, e, this.chart);
		}), a.text || "";
	}
	update(e) {
		this.destroy(), this.init(this.chart, u(!0, this.options, e));
	}
	updatePosition(e) {
		let { chart: t, container: n, distance: r, options: i, pointer: a, renderer: o } = this, { height: s = 0, width: c = 0 } = this.getLabel(), { fixed: l, positioner: u } = i, { left: d, top: f, scaleX: p, scaleY: m } = a.getChartPosition(), h = (u || l && this.getFixedPosition || this.getPosition).call(this, c, s, e, this), g = K.doc, _ = (e.plotX || 0) + t.plotLeft, v = (e.plotY || 0) + t.plotTop, y;
		if (o && n) {
			if (h.x += d, h.y += f, u || l) {
				let { scrollLeft: e = 0, scrollTop: n = 0 } = t.scrollablePlotArea?.scrollingContainer || {};
				h.x += e, h.y += n;
			}
			y = (i.borderWidth ?? +!l) + 2 * r + 2, o.setSize(q(c + y, 0, g.documentElement.clientWidth) - 1, s + y, !1), (p !== 1 || m !== 1) && (b(n, { transform: `scale(${p}, ${m})` }), _ *= p, v *= m), _ += d - h.x, v += f - h.y;
		}
		this.move(Math.round(h.x), Math.round(h.y || 0), _, v);
	}
};
(function(e) {
	function t(t) {
		G(ds, "Core.Tooltip") && D(t, "afterInit", function() {
			let t = this.chart;
			t.options.tooltip && (t.tooltip = new e(t, t.options.tooltip, this));
		});
	}
	e.compose = t;
})(_s ||= {});
var vs = _s, { charts: ys, composed: bs, isTouchDevice: xs } = K, Ss = (e, t) => !a(t) || e[`${t}Key`], Cs = class e {
	applyInactiveState(e = []) {
		let t = [];
		e.forEach((e) => {
			let n = e.series;
			t.push(n), n.linkedParent && t.push(n.linkedParent), n.linkedSeries && t.push.apply(t, n.linkedSeries), n.navigatorSeries && t.push(n.navigatorSeries), n.boosted && n.markerGroup && t.push.apply(t, this.chart.series.filter((e) => e.markerGroup === n.markerGroup));
		});
		for (let e of this.chart.series) {
			let n = e.options;
			n.states?.inactive?.enabled !== !1 && (t.indexOf(e) === -1 ? e.setState("inactive", !0) : n.inactiveOtherPoints && e.setAllPointsToState("inactive"));
		}
	}
	destroy() {
		let t = this;
		this.eventsToUnbind.forEach((e) => e()), this.eventsToUnbind = [], K.chartCount || (e.unbindDocumentMouseUp.forEach((e) => e.unbind()), e.unbindDocumentMouseUp.length = 0, e.unbindDocumentTouchEnd &&= e.unbindDocumentTouchEnd()), w(t, function(e, n) {
			t[n] = void 0;
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
		return g(this, "getSelectionMarkerAttrs", n, (n) => {
			let { chart: r, zoomHor: i, zoomVert: a } = this, { mouseDownX: o = 0, mouseDownY: s = 0 } = r, c = n.attrs, l;
			c.x = r.plotLeft, c.y = r.plotTop, c.width = i ? 1 : r.plotWidth, c.height = a ? 1 : r.plotHeight, i && (l = e - o, c.width = Math.max(1, Math.abs(l)), c.x = (l > 0 ? 0 : l) + o), a && (l = t - s, c.height = Math.max(1, Math.abs(l)), c.y = (l > 0 ? 0 : l) + s);
		}), n;
	}
	drag(e) {
		let { chart: t } = this, { mouseDownX: n = 0, mouseDownY: r = 0 } = t, { panning: i, panKey: a, selectionMarkerFill: o } = t.options.chart, s = t.plotLeft, c = t.plotTop, l = t.plotWidth, u = t.plotHeight, f = d(i) ? i.enabled : i, p = a && e[`${a}Key`], m = e.chartX, h = e.chartY, g, _ = this.selectionMarker;
		if (!(_ && _.touch) && (m < s ? m = s : m > s + l && (m = s + l), h < c ? h = c : h > c + u && (h = c + u), this.hasDragged = Math.sqrt((n - m) ** 2 + (r - h) ** 2), this.hasDragged > 10)) {
			g = t.isInsidePlot(n - s, r - c, { visiblePlotOnly: !0 });
			let { shapeType: l, attrs: u } = this.getSelectionMarkerAttrs(m, h);
			this.hasZoom && g && !p && (_ || (this.selectionMarker = _ = t.renderer[l](), _.attr({
				class: "highcharts-selection-marker",
				zIndex: 7
			}).add(), t.styledMode || _.attr({ fill: o }))), _ && _.attr(u), g && !_ && f && Ss(e, a) && t.pan(e, i);
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
		return g(this, "getSelectionBox", t), t.result;
	}
	drop(e) {
		let { chart: t, selectionMarker: n } = this, r;
		for (let e of t.axes) e.isPanning && (e.isPanning = !1, (e.options.startOnTick || e.options.endOnTick || e.series.some((e) => e.boosted)) && (e.forceRedraw = !0, e.setExtremes(e.userMin, e.userMax, !1), r = !0));
		if (r && t.redraw(), n && e) {
			if (this.hasDragged) {
				let r = this.getSelectionBox(n);
				t.transform({
					axes: t.axes.filter((e) => e.zoomEnabled && (e.coll === "xAxis" && this.zoomX || e.coll === "yAxis" && this.zoomY)),
					selection: {
						originalEvent: e,
						xAxis: [],
						yAxis: [],
						...r
					},
					from: r
				});
			}
			s(t.index) && (this.selectionMarker = n.destroy());
		}
		t && s(t.index) && (b(t.container, { cursor: t._cursor }), t.cancelClick = this.hasDragged > 10, t.mouseIsDown = !1, this.hasDragged = 0, this.pinchDown = [], this.hasPinchMoved = !1);
	}
	findNearestKDPoint(e, t, n) {
		let r;
		function i(e, n) {
			let r = e.distX - n.distX, i = e.dist - n.dist, a = n.series.group?.zIndex - e.series.group?.zIndex, o;
			return o = r !== 0 && t ? r : i === 0 ? a === 0 ? e.series.index > n.series.index ? -1 : 1 : a : i, o;
		}
		return e.forEach(function(e) {
			let a = !(e.noSharedTooltip && t) && e.options.findNearestPointBy.indexOf("y") < 0, o = e.searchPoint(n, a);
			d(o, !0) && o.series && (!d(r, !0) || i(r, o) > 0) && (r = o);
		}), r;
	}
	getChartCoordinatesFromPoint(e, t) {
		let { xAxis: n, yAxis: r } = e.series, i = e.shapeArgs;
		if (n && r) {
			let a = e.clientX ?? e.plotX ?? 0, o = e.plotY || 0;
			return e.isNode && i && s(i.x) && s(i.y) && (a = i.x, o = i.y), t ? {
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
		let { container: e } = this.chart, t = E(e);
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
		let o = [], s = !!(r && e), c = function(e) {
			return e.visible && !(!i && e.directTouch) && N(e.options.enableMouseTracking, !0);
		}, l = t, u, f = {
			chartX: a ? a.chartX : void 0,
			chartY: a ? a.chartY : void 0,
			shared: i
		};
		g(this, "beforeGetHoverData", f), u = l && !l.stickyTracking ? [l] : n.filter((e) => e.stickyTracking && (f.filter || c)(e));
		let p = s || !a ? e : this.findNearestKDPoint(u, i, a);
		return l = p?.series, p && (i && !l.noSharedTooltip ? (u = n.filter(function(e) {
			return f.filter ? f.filter(e) : c(e) && !e.noSharedTooltip;
		}), u.forEach(function(e) {
			let t = e.options?.nullInteraction, n = m(e.points, function(e) {
				return e.x === p.x && (!e.isNull || !!t);
			});
			d(n) && (e.boosted && e.boost && (n = e.boost.getPoint(n)), o.push(n));
		})) : o.push(p)), f = { hoverPoint: p }, g(this, "afterGetHoverData", f), {
			hoverPoint: f.hoverPoint,
			hoverSeries: l,
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
		this.isDirectTouch = !1, r && n && !r.stickyTracking && !this.inClass(n, "highcharts-tooltip") && (!this.inClass(n, "highcharts-series-" + r.index) || !this.inClass(n, "highcharts-tracker")) && r.onMouseOut();
	}
	inClass(e, t) {
		let n = e, r;
		for (; n;) {
			if (r = A(n, "class"), r) {
				if (r.indexOf(t) !== -1) return !0;
				if (r.indexOf("highcharts-container") !== -1) return !1;
			}
			n = n.parentElement;
		}
	}
	constructor(e, t) {
		this.hasDragged = 0, this.pointerCaptureEventsToUnbind = [], this.eventsToUnbind = [], this.options = t, this.chart = e, this.runChartClick = !!t.chart.events?.click, this.pinchDown = [], this.setDOMEvents(), g(this, "afterInit");
	}
	normalize(e, t) {
		let n = e.touches, r = n ? n.length ? n.item(0) : N(n.changedTouches, e.changedTouches)[0] : e;
		t ||= this.getChartPosition();
		let i = r.pageX - t.left, a = r.pageY - t.top;
		return i /= t.scaleX, a /= t.scaleY, L(e, {
			chartX: Math.round(i),
			chartY: Math.round(a)
		});
	}
	onContainerClick(e) {
		let t = this.chart, n = t.hoverPoint, r = this.normalize(e), i = t.plotLeft, a = t.plotTop;
		t.cancelClick || (n && this.inClass(r.target, "highcharts-tracker") ? (g(n.series, "click", L(r, { point: n })), t.hoverPoint && n.firePointEvent("click", r)) : (L(r, this.getCoordinates(r)), t.isInsidePlot(r.chartX - i, r.chartY - a, { visiblePlotOnly: !0 }) && g(t, "click", r)));
	}
	onContainerMouseDown(e) {
		let t = ((e.buttons || e.button) & 1) == 1;
		e = this.normalize(e), K.isFirefox && e.button !== 0 && this.onContainerMouseMove(e), (e.button === void 0 || t) && (this.zoomOption(e), t && e.preventDefault?.(), this.dragStart(e));
	}
	onContainerMouseLeave(t) {
		let { pointer: n } = ys[N(e.hoverChartIndex, -1)] || {};
		t = this.normalize(t), this.onContainerMouseMove(t), n && !this.inClass(t.relatedTarget, "highcharts-tooltip") && (n.reset(), n.chartPosition = void 0);
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
		r && !t.isInsidePlot(i.chartX - t.plotLeft, i.chartY - t.plotTop, { visiblePlotOnly: !0 }) && !n?.shouldStickOnContact(i) && (i.target === t.container.ownerDocument || !this.inClass(i.target, "highcharts-tracker")) && this.reset();
	}
	onDocumentMouseUp(t) {
		t?.touches && this.hasPinchMoved && t?.preventDefault?.(), ys[N(e.hoverChartIndex, -1)]?.pointer?.drop(t);
	}
	pinch(e) {
		let t = this, { chart: n, hasZoom: r, lastTouches: i } = t, a = [].map.call(e.touches || [], (e) => t.normalize(e)), o = a.length, s = o === 1 && (t.inClass(e.target, "highcharts-tracker") && n.runTrackerClick || t.runChartClick), c = o === 1 && (n.tooltip?.options.followTouchMove ?? !0);
		o > 1 ? t.initiated = !0 : c && (t.initiated = !1), r && t.initiated && !s && e.cancelable !== !1 && e.preventDefault(), e.type === "touchstart" ? (t.pinchDown = a, t.res = !0, n.mouseDownX = e.chartX) : c ? this.runPointActions(t.normalize(e)) : i && (g(n, "touchpan", {
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
		let n = this, r = n.chart, i = r.hoverSeries, a = r.hoverPoint, o = r.hoverPoints, s = r.tooltip, c = s?.shared ? o : a;
		e && c && k(c).forEach(function(t) {
			t.series.isCartesian && t.plotX === void 0 && (e = !1);
		}), e ? s && c && k(c).length && (s.refresh(c), s.shared && o ? o.forEach(function(e) {
			e.setState(e.state, !0), e.series.isCartesian && (e.series.xAxis.crosshair && e.series.xAxis.drawCrosshair(null, e), e.series.yAxis.crosshair && e.series.yAxis.drawCrosshair(null, e));
		}) : a && (a.setState(a.state, !0), r.axes.forEach(function(e) {
			e.crosshair && a.series[e.coll] === e && e.drawCrosshair(null, a);
		}))) : (a && a.onMouseOut(), o && o.forEach(function(e) {
			e.setState();
		}), i && i.onMouseOut(), s && s.hide(t), n.unDocMouseMove &&= n.unDocMouseMove(), r.axes.forEach(function(e) {
			e.hideCrosshair();
		}), r.hoverPoints = r.hoverPoint = void 0);
	}
	runPointActions(t, n, r) {
		let i = this, a = i.chart, o = a.series, s = a.tooltip?.options.enabled ? a.tooltip : void 0, c = s ? s.shared : !1, l = n || a.hoverPoint, u = l?.series || a.hoverSeries, d = (!t || t.type !== "touchmove") && (!!n || u?.directTouch && i.isDirectTouch), f = this.getHoverData(l, u, o, d, c, t);
		l = f.hoverPoint, u = f.hoverSeries;
		let p = f.hoverPoints, h = u?.tooltipOptions.followPointer && !u.tooltipOptions.split, g = c && u && !u.noSharedTooltip;
		if (l && (r || l !== a.hoverPoint || s?.isHidden)) {
			if ((a.hoverPoints || []).forEach(function(e) {
				p.indexOf(e) === -1 && e.setState();
			}), a.hoverSeries !== u && u.onMouseOver(), i.applyInactiveState(p), (p || []).forEach(function(e) {
				e.setState("hover");
			}), a.hoverPoint && a.hoverPoint.firePointEvent("mouseOut"), !l.series) return;
			a.hoverPoints = p, a.hoverPoint = l, l.firePointEvent("mouseOver", void 0, () => {
				s && l && s.refresh(g ? p : l, t);
			});
		} else if (h && s && !s.isHidden) {
			let e = s.getAnchor([{}], t);
			a.isInsidePlot(e[0], e[1], { visiblePlotOnly: !0 }) && s.updatePosition({
				plotX: e[0],
				plotY: e[1]
			});
		}
		i.unDocMouseMove || (i.unDocMouseMove = D(a.container.ownerDocument, "mousemove", (t) => ys[e.hoverChartIndex ?? -1]?.pointer?.onDocumentMouseMove(t)), i.eventsToUnbind.push(i.unDocMouseMove)), a.axes.forEach(function(e) {
			let n = e.crosshair?.snap ?? !0, r;
			n && (r = a.hoverPoint, (!r || r.series[e.coll] !== e) && (r = m(p, (t) => t.series?.[e.coll] === e))), r || !n ? e.drawCrosshair(t, r) : e.hideCrosshair();
		});
	}
	setDOMEvents() {
		let t = this.chart.container, n = t.ownerDocument, r = (e) => e.parentElement || e.getRootNode()?.host?.parentElement;
		t.onmousedown = this.onContainerMouseDown.bind(this), t.onmousemove = this.onContainerMouseMove.bind(this), t.onclick = this.onContainerClick.bind(this), this.eventsToUnbind.push(D(t, "mouseenter", this.onContainerMouseEnter.bind(this)), D(t, "mouseleave", this.onContainerMouseLeave.bind(this))), e.unbindDocumentMouseUp.some((e) => e.doc === n) || e.unbindDocumentMouseUp.push({
			doc: n,
			unbind: D(n, "mouseup", this.onDocumentMouseUp.bind(this))
		});
		let i = r(this.chart.renderTo);
		for (; i && i.tagName !== "BODY";) this.eventsToUnbind.push(D(i, "scroll", () => {
			delete this.chartPosition;
		})), i = r(i);
		this.eventsToUnbind.push(D(t, "touchstart", this.onContainerTouchStart.bind(this), { passive: !1 }), D(t, "touchmove", this.onContainerTouchMove.bind(this), { passive: !1 })), e.unbindDocumentTouchEnd ||= D(n, "touchend", this.onDocumentTouchEnd.bind(this), { passive: !1 }), this.setPointerCapture(), D(this.chart, "redraw", this.setPointerCapture.bind(this));
	}
	setPointerCapture() {
		if (!xs) return;
		let e = this, t = e.pointerCaptureEventsToUnbind, n = e.chart, r = n.container, i = (n.options.tooltip?.followTouchMove ?? !0) && n.series.some((e) => e.options.findNearestPointBy.indexOf("y") > -1);
		!e.hasPointerCapture && i ? (t.push(D(r, "pointerdown", (e) => {
			e.target?.hasPointerCapture(e.pointerId) && e.target?.releasePointerCapture(e.pointerId);
		}), D(r, "pointermove", (e) => {
			n.pointer?.getPointFromEvent(e)?.onMouseOver(e);
		})), e.hasPointerCapture = !0) : e.hasPointerCapture && !i && (t.forEach((e) => e()), t.length = 0, e.hasPointerCapture = !1);
	}
	setHoverChartIndex(t) {
		let n = this.chart, r = K.charts[N(e.hoverChartIndex, -1)];
		if (r && r !== n) {
			let e = { relatedTarget: n.container };
			t && !t?.relatedTarget && Object.assign({}, t, e), r.pointer?.onContainerMouseLeave(t || e);
		}
		r?.mouseIsDown || (e.hoverChartIndex = n.index);
	}
	touch(e, t) {
		let { chart: n, pinchDown: r = [] } = this, i, a;
		this.setHoverChartIndex(), e = this.normalize(e), e.touches.length === 1 ? (a = n.isInsidePlot(e.chartX - n.plotLeft, e.chartY - n.plotTop, { visiblePlotOnly: !0 }), a && !n.exporting?.openMenu ? (t && this.runPointActions(e), e.type === "touchmove" && (this.hasPinchMoved = i = r[0] ? (r[0].chartX - e.chartX) ** 2 + (r[0].chartY - e.chartY) ** 2 >= 16 : !1), N(i, !0) && this.pinch(e)) : t && this.reset(), (n.tooltip?.options.followTouchMove ?? !0) && a && e.preventDefault()) : e.touches.length === 2 && this.pinch(e);
	}
	touchSelect(e) {
		return !!(this.chart.zooming.singleTouch && e.touches && e.touches.length === 1);
	}
	zoomOption(e) {
		let t = this.chart, n = t.inverted, r = t.zooming.type || "", i, a;
		/touch/.test(e.type) && (r = N(t.zooming.pinchType, r)), this.zoomX = i = /x/.test(r), this.zoomY = a = /y/.test(r), this.zoomHor = i && !n || a && n, this.zoomVert = a && !n || i && n, this.hasZoom = (i || a) && Ss(e, t.zooming.key);
	}
};
Cs.unbindDocumentMouseUp = [], (function(e) {
	function t(t) {
		G(bs, "Core.Pointer") && D(t, "beforeRender", function() {
			this.pointer = new e(this, this.options);
		});
	}
	e.compose = t;
})(Cs ||= {});
var ws = Cs, { stop: Ts } = R, { composed: Es } = K;
function Ds() {
	(this.scrollablePixelsX || this.scrollablePixelsY) && !this.scrollablePlotArea && (this.scrollablePlotArea = new ks(this)), this.scrollablePlotArea?.applyFixed();
}
function Os() {
	this.chart.scrollablePlotArea && (this.chart.scrollablePlotArea.isDirty = !0);
}
var ks = class e {
	static compose(e, t, n) {
		G(Es, "ScrollablePlotArea") && (D(e, "afterInit", Os), D(t, "afterSetChartSize", (e) => this.afterSetSize(e.target, e)), D(t, "render", Ds), D(n, "show", Os));
	}
	static afterSetSize(e, t) {
		let { minWidth: n, minHeight: r } = e.options.chart.scrollablePlotArea || {}, { clipBox: i, plotBox: o, inverted: s, renderer: c } = e, l, d, f;
		if (!c.forExport) if (n ? (e.scrollablePixelsX = l = Math.max(0, n - e.chartWidth), l && (e.scrollablePlotBox = u(e.plotBox), o.width = e.plotWidth += l, i[s ? "height" : "width"] += l, f = !0)) : r && (e.scrollablePixelsY = d = Math.max(0, r - e.chartHeight), a(d) && (e.scrollablePlotBox = u(e.plotBox), o.height = e.plotHeight += d, i[s ? "width" : "height"] += d, f = !1)), a(f)) {
			if (!t.skipAxes) for (let t of e.axes) (t.horiz === f || e.hasParallelCoordinates && t.coll === "yAxis") && (t.setAxisSize(), t.setAxisTranslation());
		} else delete e.scrollablePlotBox;
	}
	constructor(e) {
		let t = e.options.chart, n = t.scrollablePlotArea || {}, i = this.moveFixedElements.bind(this), a = {
			WebkitOverflowScrolling: "touch",
			overflowX: "hidden",
			overflowY: "hidden"
		};
		e.scrollablePixelsX && (a.overflowX = "auto"), e.scrollablePixelsY && (a.overflowY = "auto"), this.chart = e;
		let o = this.parentDiv = r("div", { className: "highcharts-scrolling-parent" }, { position: "relative" }, e.renderTo), s = this.scrollingContainer = r("div", { className: "highcharts-scrolling" }, a, o), c = this.innerContainer = r("div", { className: "highcharts-inner-container" }, void 0, s), l = this.fixedDiv = r("div", { className: "highcharts-fixed" }, {
			position: "absolute",
			overflow: "hidden",
			pointerEvents: "none",
			zIndex: (t.style?.zIndex || 0) + 2,
			top: 0
		}, void 0, !0), u = this.fixedRenderer = new gt(l, e.chartWidth, e.chartHeight, t.style);
		this.mask = u.path().attr({
			fill: t.backgroundColor || "#fff",
			"fill-opacity": n.opacity ?? .85,
			zIndex: -1
		}).addClass("highcharts-scrollable-mask").add(), s.parentNode.insertBefore(l, s), b(e.renderTo, { overflow: "visible" }), D(e, "afterShowResetZoom", i), D(e, "afterApplyDrilldown", i), D(e, "afterLayOutTitles", i);
		let d;
		D(s, "scroll", () => {
			let { pointer: t, hoverPoint: n } = e;
			t && (delete t.chartPosition, n && (d = n), t.runPointActions(void 0, d, !0));
		}), c.appendChild(e.container);
	}
	applyFixed() {
		let { chart: e, fixedRenderer: t, isDirty: n, scrollingContainer: r } = this, { axisOffset: i, chartWidth: o, chartHeight: s, container: c, plotHeight: l, plotLeft: u, plotTop: d, plotWidth: f, scrollablePixelsX: p = 0, scrollablePixelsY: m = 0 } = e, { scrollPositionX: h = 0, scrollPositionY: g = 0 } = e.options.chart.scrollablePlotArea || {}, _ = o + p, v = s + m;
		t.setSize(o, s), (n ?? !0) && (this.isDirty = !1, this.moveFixedElements()), Ts(e.container), b(c, {
			width: `${_}px`,
			height: `${v}px`
		}), e.renderer.boxWrapper.attr({
			width: _,
			height: v,
			viewBox: [
				0,
				0,
				_,
				v
			].join(" ")
		}), e.chartBackground?.attr({
			width: _,
			height: v
		}), b(r, {
			width: `${o}px`,
			height: `${s}px`
		}), a(n) || (r.scrollLeft = p * h, r.scrollTop = m * g);
		let y = d - i[0] - 1, x = u - i[3] - 1, S = d + l + i[2] + 1, C = u + f + i[1] + 1, w = u + f - p, T = d + l - m, E = [[
			"M",
			0,
			0
		]];
		p ? E = [
			[
				"M",
				0,
				y
			],
			[
				"L",
				u - 1,
				y
			],
			[
				"L",
				u - 1,
				S
			],
			[
				"L",
				0,
				S
			],
			["Z"],
			[
				"M",
				w,
				y
			],
			[
				"L",
				o,
				y
			],
			[
				"L",
				o,
				S
			],
			[
				"L",
				w,
				S
			],
			["Z"]
		] : m && (E = [
			[
				"M",
				x,
				0
			],
			[
				"L",
				x,
				d - 1
			],
			[
				"L",
				C,
				d - 1
			],
			[
				"L",
				C,
				0
			],
			["Z"],
			[
				"M",
				x,
				T
			],
			[
				"L",
				x,
				s
			],
			[
				"L",
				C,
				s
			],
			[
				"L",
				C,
				T
			],
			["Z"]
		]), e.redrawTrigger !== "adjustHeight" && this.mask.attr({ d: E });
	}
	moveFixedElements() {
		let { container: n, inverted: r, scrollablePixelsX: i, scrollablePixelsY: a } = this.chart, o = this.fixedRenderer, s = e.fixedSelectors.slice(), c;
		if (i && !r ? c = ".highcharts-yaxis" : i && r || a && !r ? c = ".highcharts-xaxis" : a && r && (c = ".highcharts-yaxis"), c && !(this.chart.hasParallelCoordinates && c === ".highcharts-yaxis")) for (let e of [`${c}:not(.highcharts-radial-axis)`, `${c}-labels:not(.highcharts-radial-axis-labels)`]) G(s, e);
		else for (let e of [".highcharts-xaxis", ".highcharts-yaxis"]) for (let n of [`${e}:not(.highcharts-radial-axis)`, `${e}-labels:not(.highcharts-radial-axis-labels)`]) t(s, n);
		for (let e of s) [].forEach.call(n.querySelectorAll(e), (e) => {
			(e.namespaceURI === o.SVG_NS ? o.box : o.box.parentNode).appendChild(e), e.style.pointerEvents = "auto";
		});
	}
};
ks.fixedSelectors = [
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
//#endregion
//#region node_modules/highcharts/es-modules/Core/Axis/Stacking/StackingAxis.js
var { getDeferredAnimation: As } = R, { series: { prototype: js } } = W;
function Ms() {
	let e = this, t = e.inverted;
	e.axes.forEach((e) => {
		e.stacking?.stacks && e.hasVisibleSeries && (e.stacking.oldStacks = e.stacking.stacks);
	}), e.series.forEach((e) => {
		let n = e.xAxis?.options || {};
		e.options.stacking && e.reserveSpace() && (e.stackKey = [
			e.type,
			N(e.options.stack, ""),
			t ? n.top : n.left,
			t ? n.height : n.width
		].join(","));
	});
}
function Ns() {
	let e = this.stacking;
	if (e) {
		let t = e.stacks;
		w(t, (e, n) => {
			i(e), delete t[n];
		}), e.stackTotalGroup?.destroy();
	}
}
function Ps() {
	this.stacking ||= new Bs(this);
}
function Fs(e, t, n, r) {
	return !a(e) || e.x !== t || r && e.stackKey !== r ? e = {
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
function Is() {
	let e = this, t = e.yAxis, n = e.stackKey || "", r = t.stacking.stacks, i = e.getColumn("x", !0), a = e[e.options.stacking + "Stacker"], o;
	a && [n, "-" + n].forEach((t) => {
		let n = i.length, s, c, l;
		for (; n--;) s = i[n], o = e.getStackIndicator(o, s, e.index, t), c = r[t]?.[s], l = c?.points[o.key || ""], l && a.call(e, l, c, n);
	});
}
function Ls(e, t, n) {
	let r = t.total ? 100 / t.total : 0;
	e[0] = y(e[0] * r), e[1] = y(e[1] * r), this.stackedYData[n] = e[1];
}
function Rs(e) {
	(this.is("column") || this.is("columnrange")) && (this.options.centerInCategory && this.chart.series.length > 1 ? js.setStackedPoints.call(this, e, "group") : e.stacking.resetStacks());
}
function zs(e, t) {
	let n = t || this.options.stacking;
	if (!n || !this.reserveSpace() || ({ group: "xAxis" }[n] || "yAxis") !== e.coll) return;
	let r = this, i = r.getColumn("x", !0), o = r.getColumn(r.pointValKey || "y", !0), c = [], l = o.length, u = r.options, d = u.threshold || 0, f = u.startFromThreshold ? d : 0, p = u.stack, m = t ? `${r.type},${n}` : r.stackKey || "", h = "-" + m, g = r.negStacks, _ = e.stacking, v = _.stacks, b = _.oldStacks, x, S, C, w, T, E, D;
	for (_.stacksTouched += 1, D = 0; D < l; D++) {
		let t = i[D] || 0, l = o[D], u = s(l) && l || 0;
		x = r.getStackIndicator(x, t, r.index), E = x.key || "", S = g && u < (f ? 0 : d), T = S ? h : m, v[T] || (v[T] = {}), v[T][t] || (b[T]?.[t] ? (v[T][t] = b[T][t], v[T][t].total = null) : v[T][t] = new ge(e, e.options.stackLabels, !!S, t, p)), C = v[T][t], l === null ? (delete C.points[E], delete C.points[r.index]) : (C.points[E] = C.points[r.index] = [N(C.cumulative, f)], a(C.cumulative) || (C.base = E), C.touched = _.stacksTouched, x.index > 0 && r.singleStacks === !1 && (C.points[E][0] = C.points[r.index + "," + t + ",0"][0]));
		let O = C.total || 0;
		n === "percent" ? (w = S ? m : h, g && v[w]?.[t] ? (w = v[w][t], O = w.total = Math.max(w.total || 0, O) + Math.abs(u)) : O = y(O + Math.abs(u))) : n === "group" ? s(l) && O++ : O = y(O + u), n === "group" ? C.cumulative = (O || 1) - 1 : C.cumulative = y(N(C.cumulative, f) + u), C.total = O, l !== null && (C.points[E].push(C.cumulative), c[D] = C.cumulative, C.hasValidPoints = !0);
	}
	n === "percent" && (_.usePercentage = !0), n !== "group" && (this.stackedYData = c), _.oldStacks = {};
}
var Bs = class {
	constructor(e) {
		this.oldStacks = {}, this.stacks = {}, this.stacksTouched = 0, this.axis = e;
	}
	buildStacks() {
		let e = this, t = e.axis, n = t.series, r = t.coll === "xAxis", i = t.options.reversedStacks, a = n.length, o, s;
		for (this.resetStacks(), e.usePercentage = !1, s = a; s--;) o = n[i ? s : a - s - 1], r && o.setGroupedPoints(t), o.setStackedPoints(t);
		if (!r) for (s = 0; s < a; s++) n[s].modifyStacks();
		g(t, "afterBuildStacks");
	}
	cleanStacks() {
		this.oldStacks && (this.stacks = this.oldStacks, w(this.stacks, (e) => {
			w(e, (e) => {
				e.cumulative = e.total;
			});
		}));
	}
	resetStacks() {
		w(this.stacks, (e) => {
			w(e, (t, n) => {
				s(t.touched) && t.touched < this.stacksTouched ? (t.destroy(), delete e[n]) : (t.total = null, t.cumulative = null);
			});
		});
	}
	renderStackTotals() {
		let e = this, t = e.axis, n = t.chart, r = n.renderer, i = e.stacks, a = t.options.stackLabels?.animation, o = As(n, a || !1), s = e.stackTotalGroup = e.stackTotalGroup || r.g("stack-labels").attr({
			zIndex: 6,
			opacity: 0
		}).add();
		s.translate(n.plotLeft, n.plotTop), w(i, (e) => {
			w(e, (e) => {
				e.render(s);
			});
		}), s.animate({ opacity: 1 }, o);
	}
}, Vs;
(function(e) {
	function t(e, t, n) {
		let r = t.prototype, i = n.prototype;
		r.getStacks || (D(e, "init", Ps), D(e, "destroy", Ns), r.getStacks = Ms, i.getStackIndicator = Fs, i.modifyStacks = Is, i.percentStacker = Ls, i.setGroupedPoints = Rs, i.setStackedPoints = zs);
	}
	e.compose = t;
})(Vs ||= {});
var Hs = Vs, Us = class extends be {
	drawGraph() {
		let e = this.options, t = (this.gappedPath || this.getGraphPath).call(this), n = this.chart.styledMode;
		[this, ...this.zones].forEach((r, i) => {
			let a, o = r.graph, s = o ? "animate" : "attr", c = r.dashStyle || e.dashStyle;
			if (o ? (o.endX = this.preventGraphAnimation ? null : t.xMap, o.animate({ d: t })) : t.length && (r.graph = o = this.chart.renderer.path(t).addClass("highcharts-graph" + (i ? ` highcharts-zone-graph-${i - 1} ` : " ") + (i && r.className || "")).attr({ zIndex: 1 }).add(this.group)), o && !n && (a = {
				stroke: !i && e.lineColor || r.color || this.color || "var(--highcharts-neutral-color-20)",
				"stroke-width": e.lineWidth || 0,
				fill: this.fillGraph && this.color || "none"
			}, c ? a.dashstyle = c : e.linecap !== "square" && (a["stroke-linecap"] = a["stroke-linejoin"] = "round"), o[s](a), e.shadow)) {
				let t = this.chart.inverted, n = { filterUnits: "userSpaceOnUse" }, r = d(e.shadow) ? u(t ? {} : n, e.shadow) : t ? !0 : n;
				o.shadow(r);
			}
			o && (o.startX = t.xMap, o.isArea = t.isArea);
		});
	}
	getGraphPath(e, t, n) {
		let r = this, i = r.options, o = [], s = [], c, l = i.step;
		e ||= r.points;
		let u = e.reversed;
		return u && e.reverse(), l = {
			right: 1,
			center: 2
		}[l] || l && 3, l && u && (l = 4 - l), e = this.getValidPoints(e, !1, i.nullInteraction || !(i.connectNulls && !t && !n)), e.forEach(function(u, d) {
			let f = u.plotX, p = u.plotY, m = e[d - 1], h = u.isNull || typeof p != "number", g;
			(u.leftCliff || m?.rightCliff) && !n && (c = !0), h && !a(t) && d > 0 ? c = !i.connectNulls : h && !t ? c = !0 : (d === 0 || c ? g = [[
				"M",
				u.plotX,
				u.plotY
			]] : r.getPointSpline ? g = [r.getPointSpline(e, u, d)] : l ? (g = l === 1 ? [[
				"L",
				m.plotX,
				p
			]] : l === 2 ? [[
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
			]], g.push([
				"L",
				f,
				p
			])) : g = [[
				"L",
				f,
				p
			]], s.push(u.x), l && (s.push(u.x), l === 2 && s.push(u.x)), o.push.apply(o, g), c = !1);
		}), o.xMap = s, r.graphPath = o, o;
	}
};
Us.defaultOptions = u(be.defaultOptions, { legendSymbol: "lineMarker" }), W.registerSeriesType("line", Us);
//#endregion
//#region node_modules/highcharts/es-modules/Series/Area/AreaSeriesDefaults.js
var Ws = {
	threshold: 0,
	legendSymbol: "areaMarker"
}, { seriesTypes: { line: Gs } } = W, Ks = class extends Gs {
	drawGraph() {
		this.areaPath = [], super.drawGraph.apply(this);
		let { areaPath: e, options: t } = this;
		[this, ...this.zones].forEach((n, r) => {
			let i = {}, a = n.fillColor || t.fillColor, o = n.area, s = o ? "animate" : "attr";
			o ? (o.endX = this.preventGraphAnimation ? null : e.xMap, o.animate({ d: e })) : (i.zIndex = 0, o = n.area = this.chart.renderer.path(e).addClass("highcharts-area" + (r ? ` highcharts-zone-area-${r - 1} ` : " ") + (r && n.className || "")).add(this.group), o.isArea = !0), this.chart.styledMode || (i.fill = a || n.color || this.color, i["fill-opacity"] = a ? 1 : t.fillOpacity ?? .75, o.css({ pointerEvents: this.stickyTracking ? "none" : "auto" })), o[s](i), o.startX = e.xMap, o.shiftUnit = t.step ? 2 : 1;
		});
	}
	getGraphPath(e) {
		let t = Gs.prototype.getGraphPath, n = this.options, r = n.stacking, i = this.yAxis, o = [], s = [], c = this.index, l = i.stacking.stacks[this.stackKey], u = n.threshold, d = Math.round(i.getThreshold(n.threshold)), f = N(n.connectNulls, r === "percent"), p = function(t, n, f) {
			let p = e[t], h = e[n], g = r && l[p.x].points[c], _ = p[f + "Null"] || 0, v = p[f + "Cliff"] || 0, y, b, x = !0;
			g && (v || _) ? (y = (_ ? g[0] : g[1]) + v, b = g[0] + v, x = !!_) : !r && h && (h.isNull || !a(h.plotY)) && (y = b = u), y !== void 0 && (s.push({
				plotX: m,
				plotY: y === null ? d : i.getThreshold(y),
				isNull: x,
				isCliff: !0
			}), o.push({
				plotX: m,
				plotY: b === null ? d : i.getThreshold(b),
				doCurve: !1
			}));
		}, m, h, g;
		e ||= this.points, r && (e = this.getStackPoints(e));
		for (let t = 0, n = e.length; t < n; ++t) r || (e[t].leftCliff = e[t].rightCliff = e[t].leftNull = e[t].rightNull = void 0), h = e[t].isNull || !a(e[t].plotY), m = N(e[t].rectPlotX, e[t].plotX), g = r ? N(e[t].yBottom, d) : d, (!h || f) && (f || p(t, t - 1, "left"), h && !r && f || (s.push(e[t]), o.push({
			x: t,
			plotX: m,
			plotY: g
		})), f || p(t, t + 1, "right"));
		let _ = t.call(this, s, !0, !0);
		o.reversed = !0;
		let v = t.call(this, o, !0, !0), y = v[0];
		y && y[0] === "M" && (v[0] = [
			"L",
			y[1],
			y[2]
		]);
		let b = _.concat(v);
		b.length && b.push(["Z"]);
		let x = t.call(this, s, !1, f);
		return this.chart.series.length > 1 && r && s.some((e) => e.isCliff) && (b.hasStackedCliffs = x.hasStackedCliffs = !0), b.xMap = _.xMap, this.areaPath = b, x;
	}
	getStackPoints(e) {
		let t = this, n = [], r = [], i = this.xAxis, a = this.yAxis, o = a.stacking.stacks[this.stackKey], s = {}, c = a.series, l = c.length, u = a.options.reversedStacks ? 1 : -1, d = c.indexOf(t), f = a.getThreshold(t.options.threshold || 0);
		if (e ||= this.points, this.options.stacking) {
			for (let t = 0; t < e.length; t++) e[t].leftNull = e[t].rightNull = void 0, s[e[t].x] = e[t];
			w(o, function(e, t) {
				e.total !== null && r.push(t);
			}), r.sort(function(e, t) {
				return e - t;
			});
			let p = c.map((e) => e.visible);
			r.forEach(function(e, m) {
				let h = 0, g, _;
				if (s[e] && !s[e].isNull) n.push(s[e]), [-1, 1].forEach(function(n) {
					let i = n === 1 ? "rightNull" : "leftNull", a = n === 1 ? "rightCliff" : "leftCliff", f = o[r[m + n]], h = 0;
					if (f) {
						let n = d;
						for (; n >= 0 && n < l;) {
							let r = c[n].index;
							g = f.points[r], g || (r === t.index ? s[e][i] = !0 : p[n] && (_ = o[e].points[r], _ && (h -= _[1] - _[0]))), n += u;
						}
					}
					s[e][a] = h;
				});
				else {
					let t = d;
					for (; t >= 0 && t < l;) {
						let n = c[t].index;
						if (g = o[e].points[n], g) {
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
};
Ks.defaultOptions = u(Gs.defaultOptions, Ws), L(Ks.prototype, { singleStacks: !1 }), W.registerSeriesType("area", Ks);
//#endregion
//#region node_modules/highcharts/es-modules/Series/Spline/SplineSeries.js
var { line: qs } = W.seriesTypes, Js = class extends qs {
	getPointSpline(e, t, n) {
		let r = 1.5, i = 2.5, a = t.plotX || 0, o = t.plotY || 0, s = e[n - 1], c = e[n + 1], l, u, d, f;
		function p(e) {
			return e && !e.isNull && e.doCurve !== !1 && !t.isCliff;
		}
		if (p(s) && p(c)) {
			let e = s.plotX || 0, n = s.plotY || 0, p = c.plotX || 0, m = c.plotY || 0, h = 0;
			l = (r * a + e) / i, u = (r * o + n) / i, d = (r * a + p) / i, f = (r * o + m) / i, d !== l && (h = (f - u) * (d - a) / (d - l) + o - f), u += h, f += h, u > n && u > o ? (u = Math.max(n, o), f = 2 * o - u) : u < n && u < o && (u = Math.min(n, o), f = 2 * o - u), f > m && f > o ? (f = Math.max(m, o), u = 2 * o - f) : f < m && f < o && (f = Math.min(m, o), u = 2 * o - f), t.rightContX = d, t.rightContY = f, t.controlPoints = {
				low: [l, u],
				high: [d, f]
			};
		}
		let m = [
			"C",
			N(s.rightContX, s.plotX, 0),
			N(s.rightContY, s.plotY, 0),
			N(l, a, 0),
			N(u, o, 0),
			a,
			o
		];
		return s.rightContX = s.rightContY = void 0, m;
	}
};
Js.defaultOptions = u(qs.defaultOptions), W.registerSeriesType("spline", Js);
//#endregion
//#region node_modules/highcharts/es-modules/Series/AreaSpline/AreaSplineSeries.js
var { area: Ys, area: { prototype: Xs } } = W.seriesTypes, Zs = class extends Js {};
Zs.defaultOptions = u(Js.defaultOptions, Ys.defaultOptions), L(Zs.prototype, {
	getGraphPath: Xs.getGraphPath,
	getStackPoints: Xs.getStackPoints,
	drawGraph: Xs.drawGraph
}), W.registerSeriesType("areaspline", Zs);
//#endregion
//#region node_modules/highcharts/es-modules/Core/Series/DataLabel.js
var { getDeferredAnimation: Qs } = R, { format: $s } = I, ec;
(function(e) {
	function t() {
		return m(this).some((e) => e?.enabled);
	}
	function n(e, t, n, r, i) {
		let c = this, { chart: l } = this, d = this.isCartesian && l.inverted, { condemned: f, origin: p, plotX: m, plotY: h } = e, { crop: g = !0, distance: _, overflow: v = "justify", rotation: y = 0 } = n, b = o(n.align), x = o(n.verticalAlign), S = y === 0 && !f && v === "justify", C = e.pos(), w = a(m) && a(h) && l.isInsidePlot(m, Math.round(h), {
			inverted: d,
			paneCoordinates: !0,
			series: c
		}), T = this.visible && e.visible && a(m) && (c.forceDL || f || w || N(n.inside, !!this.options.stacking) && r && l.isInsidePlot(m, d ? r.x + 1 : r.y + r.height - 1, {
			inverted: d,
			paneCoordinates: !0,
			series: c
		}));
		if (C) {
			let a = t.getBBox(), o = t.getBBox(void 0, 0);
			r = L({
				x: C[0],
				y: Math.round(C[1]),
				width: 0,
				height: 0
			}, r || {}), n.alignTo === "plotEdges" && c.isCartesian && (r[d ? "x" : "y"] = 0, r[d ? "width" : "height"] = this.yAxis?.len || 0), L(n, {
				width: a.width,
				height: a.height
			});
			let m = 0, h = 0;
			s(_) && !n.inside && (m = _ * (1 - 2 * b), h = _ * (1 - 2 * x)), t.align(u(n, {
				x: (n.x || 0) + m,
				y: (n.y || 0) + h,
				width: o.width,
				height: o.height
			}), !1, r, !1), t.distX = m, t.distY = h, t.alignAttr.x += b * (o.width - a.width), t.alignAttr.y += x * (o.height - a.height);
			let v = t.alignAttr.x + (a.width - o.width) / 2, w = t.alignAttr.y + (a.height - o.height) / 2;
			if (p) {
				let n = e.pos(!1, p.x, p.y);
				if (n) {
					let r = [n[0] - C[0], n[1] - C[1]];
					(c.is("column") || e.plotHigh) && (r[+!d] = 0), t.attr({
						x: v + r[0],
						y: w + r[1],
						opacity: .01
					}), t.placed = !0, i = !1;
				}
			}
			let E = {
				"text-align": t.alignAttr["text-align"] || "center",
				x: v,
				y: w,
				rotationOriginX: (t.width || 0) / 2,
				rotationOriginY: (t.height || 0) / 2
			};
			if ((f || !T) && (E.opacity = 0), t[t.placed ? "animate" : "attr"](E), S && T && r.height >= 0) this.justifyDataLabel(t, n, t.alignAttr, a, r, i);
			else if (g && !f) {
				let { x: e, y: n } = t.alignAttr;
				T = l.isInsidePlot(e, n, {
					paneCoordinates: !0,
					series: c
				}) && l.isInsidePlot(e + a.width - 1, n + a.height - 1, {
					paneCoordinates: !0,
					series: c
				});
			}
			n.shape && !y && t[i ? "attr" : "animate"]({
				anchorX: C[0],
				anchorY: C[1]
			});
		}
		t[i ? "attr" : "animate"]({ visibility: T ? "inherit" : "hidden" }), t.placed = T;
	}
	function r(e, t) {
		let n = t.filter;
		if (n) {
			let t = n.operator, r = e[n.property], i = n.value;
			return t === ">" && r > i || t === "<" && r < i || t === ">=" && r >= i || t === "<=" && r <= i || t === "==" && r == i || t === "===" && r === i || t === "!=" && r != i || t === "!==" && r !== i;
		}
		return !0;
	}
	function i(e) {
		let r = e.prototype;
		r.initDataLabels || (r.initDataLabels = l, r.initDataLabelsGroup = c, r.alignDataLabel = n, r.drawDataLabels = d, r.justifyDataLabel = f, r.mergeArrays = p, r.hasDataLabels = t);
	}
	e.compose = i;
	function c(e, t) {
		g(this, "initDataLabelsGroup", {
			index: e,
			zIndex: t?.zIndex
		}), this.dataLabelsGroup = this.dataLabelsGroups?.[e];
		let n = this.plotGroup("dataLabelsGroup", "data-labels", this.hasRendered ? "inherit" : "hidden", t?.zIndex ?? 6, this.dataLabelsParentGroups?.[e]);
		return this.dataLabelsGroups ||= [], this.dataLabelsGroups[e] = n, this.dataLabelsGroup = this.dataLabelsGroups[0], n;
	}
	function l(e, t, n) {
		let r = this, i = !!r.hasRendered, a = this.initDataLabelsGroup(e, n).attr({ opacity: +i });
		return !i && a && (r.visible && a.show(), r.options.animation ? a.animate({ opacity: 1 }, t) : a.attr({ opacity: 1 })), a;
	}
	function d(e) {
		e ||= this.points;
		let t = this, n = t.chart, i = t.options, o = n.renderer, { backgroundColor: s, plotBackgroundColor: c } = n.options.chart, l = o.getContrast(B(c) && c || B(s) && s || "var(--highcharts-background-color)"), u = [], d = m(t), { animation: f, defer: h } = d[0], v = h ? Qs(n, f, t) : {
			defer: 0,
			duration: 0
		};
		g(this, "drawDataLabels"), t.hasDataLabels?.() && e.concat(t.condemnedPoints).forEach((e) => {
			let s = e.dataLabels || [], c = e.color || t.color;
			k(p(d, e.dlOptions || e.options?.dataLabels)).forEach((d, f) => {
				let p = d.enabled && (e.visible || e.dataLabelOnHidden) && (!e.isNull || e.dataLabelOnNull) && r(e, d), { backgroundColor: m, borderColor: h, distance: y, style: b = {} } = d, x = k(d.padding || 0), S, C, T, E = {}, D = s[f], O = !D, A;
				if (p && (S = N(d[e.formatPrefix + "Format"], d.format), C = a(S) ? $s(S, e, n) : (d[e.formatPrefix + "Formatter"] || d.formatter).call(e, d, e), T = d.rotation, n.styledMode || (b.color = N(d.color, b.color, B(t.color) ? t.color : void 0, "var(--highcharts-neutral-color-100)"), b.color === "contrast" ? (m !== "none" && (A = m), e.contrastColor = o.getContrast(A !== "auto" && A !== "contrast" && B(A) && A || (B(c) ? c : "")), b.color = A && A !== "contrast" || d.inside || _(y || 0) < 0 || i.stacking ? e.contrastColor : l) : delete e.contrastColor, i.cursor && (b.cursor = i.cursor)), E = {
					r: d.borderRadius ?? 3,
					rotation: T,
					padding: x[0],
					paddingLeft: x[3 % x.length],
					paddingRight: x[1 % x.length],
					zIndex: 1
				}, n.styledMode || (E.fill = m === "auto" ? e.color : m, E.stroke = h === "auto" ? e.color : h, E["stroke-width"] = d.borderWidth), w(E, (e, t) => {
					e === void 0 && delete E[t];
				})), D && (!p || !a(C) || !!(D.div || D.text?.foreignObject) != !!d.useHTML || (!D.rotation || !d.rotation) && D.rotation !== d.rotation) && (D = void 0, O = !0), p && a(C) && C !== "" && (D ? E.text = C : (D = o.label(C, 0, 0, d.shape, void 0, void 0, d.useHTML, void 0, "data-label"), D.addClass(" highcharts-data-label-color-" + e.colorIndex + " " + (d.className || "") + (d.useHTML ? " highcharts-tracker" : ""))), D)) {
					D.options = d, D.attr(E), n.styledMode ? b.width && D.css({
						width: b.width,
						textOverflow: b.textOverflow,
						whiteSpace: b.whiteSpace
					}) : D.css(b).shadow(d.shadow), g(D, "beforeAddingDataLabel", {
						labelOptions: d,
						point: e
					});
					let r = u[f] = u[f] || this.initDataLabels(f, v, d);
					D.added || D.add(r), t.alignDataLabel(e, D, d, void 0, O), D.isActive = !0, s[f] && s[f] !== D && s[f].destroy(), s[f] = D;
				}
			});
			let f = s.length;
			for (; f--;) s[f]?.isActive ? s[f].isActive = !1 : (s[f]?.destroy(), s.splice(f, 1));
			e.dataLabel = s[0], e.dataLabels = s;
		}), g(this, "afterDrawDataLabels");
	}
	function f(e, t, n, r, i, a) {
		let o = this.chart, { align: s, verticalAlign: c } = t, { distX: l = 0, distY: u = 0 } = e, d = e.box ? 0 : e.padding || 0, f = o.inverted ? this.yAxis : this.xAxis, p = f ? f.left - o.plotLeft : 0, m = o.inverted ? this.xAxis : this.yAxis, h = m ? m.top - o.plotTop : 0, { x: g = 0, y: _ = 0 } = t, v, y, b;
		return v = (n.x || 0) - l + d + p, v < 0 && (s === "right" && g >= 0 ? (t.align = "left", t.inside = !0, g -= l) : g -= v, y = !0), v = (n.x || 0) + r.width - l - d + p, v > o.plotWidth && (s === "left" && g <= 0 ? (t.align = "right", t.inside = !0, g -= l) : g += o.plotWidth - v, y = !0), v = (n.y || 0) - u + d + h, v < 0 && (c === "bottom" && _ >= 0 ? (t.verticalAlign = "top", t.inside = !0, _ -= u) : _ -= v, b = !0), v = (n.y || 0) + r.height - u - d + h, v > o.plotHeight && (c === "top" && _ <= 0 ? (t.verticalAlign = "bottom", t.inside = !0, _ -= u) : _ += o.plotHeight - v, b = !0), (y || b) && (t.x = y ? g : g + l, t.y = b ? _ : _ + u, e.placed = !a, e.align(t, void 0, i)), y || b;
	}
	function p(e, t) {
		let n = [], r;
		if (S(e) && !S(t)) n = e.map(function(e) {
			return u(e, t);
		});
		else if (S(t) && !S(e)) n = t.map(function(t) {
			return u(e, t);
		});
		else if (!S(e) && !S(t)) n = u(e, t);
		else if (S(e) && S(t)) for (r = Math.max(e.length, t.length); r--;) n[r] = u(e[r], t[r]);
		return n;
	}
	function m(e) {
		let t = e.chart.options.plotOptions;
		return k(p(p(t?.series?.dataLabels, t?.[e.type]?.dataLabels), e.options.dataLabels));
	}
})(ec ||= {});
var tc = ec, { composed: nc } = K, { series: rc } = W, ic;
(function(e) {
	function t(e, t, n, r, i) {
		let { chart: a, options: o } = this, s = a.inverted, c = this.xAxis?.len || a.plotSizeX || 0, l = this.yAxis?.len || a.plotSizeY || 0, d = e.dlBox || e.shapeArgs, f = e.below ?? (e.plotY || 0) > (this.translatedThreshold ?? l), p = n.inside ?? !!o.stacking;
		if (d) {
			if (r = u(d), n.overflow !== "allow" || n.crop !== !1 || o.clip !== !1) {
				r.y < 0 && (r.height += r.y, r.y = 0);
				let e = r.y + r.height - l;
				e > 0 && e < r.height - 1 && (r.height -= e);
			}
			s && (r = {
				x: l - r.y - r.height,
				y: c - r.x - r.width,
				width: r.height,
				height: r.width
			}), p || (s ? (r.x += f ? 0 : r.width, r.width = 0) : (r.y += f ? r.height : 0, r.height = 0));
		}
		n.align ??= !s || p ? "center" : f ? "right" : "left", n.verticalAlign ??= s || p ? "middle" : f ? "top" : "bottom", rc.prototype.alignDataLabel.call(this, e, t, n, r, i), n.inside && e.contrastColor && t.css({ color: e.contrastColor });
	}
	function n(e) {
		tc.compose(rc), G(nc, "ColumnDataLabel") && (e.prototype.alignDataLabel = t);
	}
	e.compose = n;
})(ic ||= {});
var ac = ic, oc = class extends ve {};
oc.defaultOptions = u(ve.defaultOptions, {}), L(oc.prototype, { inverted: !0 }), W.registerSeriesType("bar", oc);
//#endregion
//#region node_modules/highcharts/es-modules/Series/Scatter/ScatterSeriesDefaults.js
var sc = {
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
}, { column: cc, line: lc } = W.seriesTypes, uc = class extends lc {
	applyJitter() {
		let e = this, t = this.options.jitter, n = this.points.length;
		function r(e) {
			let t = Math.sin(e) * 1e4;
			return t - Math.floor(t);
		}
		t && this.points.forEach(function(i, a) {
			["x", "y"].forEach(function(o, s) {
				if (t[o] && !i.isNull) {
					let c = `plot${o.toUpperCase()}`, l = e[`${o}Axis`], u = t[o] * l.transA;
					if (l && !l.logarithmic) {
						let e = Math.max(0, (i[c] || 0) - u);
						i[c] = e + (Math.min(l.len, (i[c] || 0) + u) - e) * r(a + s * n), o === "x" && (i.clientX = i.plotX);
					}
				}
			});
		});
	}
	drawGraph() {
		this.options.lineWidth ? super.drawGraph() : this.graph &&= this.graph.destroy();
	}
};
uc.defaultOptions = u(lc.defaultOptions, sc), L(uc.prototype, {
	allowOutsidePlotInteraction: !0,
	drawTracker: cc.prototype.drawTracker,
	sorted: !1,
	requireSorting: !1,
	noSharedTooltip: !0,
	trackerGroups: [
		"group",
		"markerGroup",
		"dataLabelsGroup"
	]
}), D(uc, "afterTranslate", function() {
	this.applyJitter();
}), W.registerSeriesType("scatter", uc);
//#endregion
//#region node_modules/highcharts/es-modules/Series/Pie/PiePoint.js
var { setAnimation: dc } = R, fc = class extends oe {
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
		D(this, "select", r), D(this, "unselect", r);
	}
	isValid() {
		return s(this.y) && this.y >= 0;
	}
	setVisible(e, t = !0) {
		e !== this.visible && this.update({ visible: e ?? !this.visible }, t, void 0, !1);
	}
	slice(e, t, n) {
		let r = this.series, i = r.chart;
		dc(n, i), t = N(t, !0), this.sliced = this.options.sliced = e ?? !this.sliced, r.options.data && (r.options.data[r.data.indexOf(this)] = this.options), this.graphic?.animate(this.getTranslate());
	}
};
L(fc.prototype, { connectorShapes: {
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
			let e = z(n.crookDistance, 1);
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
//#endregion
//#region node_modules/highcharts/es-modules/Series/Pie/PieSeriesDefaults.js
var pc = {
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
}, { getStartAndEndRadians: mc } = xe, { noop: hc } = K, gc = class extends be {
	animate(e) {
		let t = this, n = t.points, r = t.startAngleRad;
		e || n.forEach(function(e) {
			let n = e.graphic, i = e.shapeArgs;
			n && i && (n.attr({
				r: N(e.startR, t.center && t.center[3] / 2),
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
		let e = this.startAngleRad, t = this.endAngleRad, n = this.options, r, i;
		this.total === 0 && this.center ? (r = this.center[0], i = this.center[1], this.graph ||= this.chart.renderer.arc(r, i, this.center[1] / 2, 0, e, t).addClass("highcharts-empty-series").add(this.group), this.graph.attr({ d: Qe.arc(r, i, this.center[2] / 2, 0, {
			start: e,
			end: t,
			innerR: this.center[3] / 2
		}) }), this.chart.styledMode || this.graph.attr({
			"stroke-width": n.borderWidth,
			fill: n.fillColor || "none",
			stroke: n.color || "var(--highcharts-neutral-color-20)"
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
		let i = this.center, a = this.radii ? this.radii[n.index] || 0 : i[2] / 2, o = r.dataLabelPosition?.distance || 0, s = Math.asin(q((e - i[1]) / (a + o), -1, 1));
		return i[0] + (t ? -1 : 1) * (Math.cos(s) * (a + o)) + (o > 0 ? t ? -5 : 5 : 0);
	}
	hasData() {
		return this.points.some((e) => e.visible);
	}
	redrawPoints() {
		let e = this, t = e.chart, n, r, i, a;
		this.drawEmpty(), e.group && !t.styledMode && e.group.shadow(e.options.shadow), e.points.forEach(function(o) {
			let s = {};
			r = o.graphic, !o.isNull && r ? (a = o.shapeArgs, n = o.getTranslate(), t.styledMode || (i = e.pointAttribs(o, o.selected && "select")), o.delayedRendering ? (r.setRadialReference(e.center).attr(a).attr(n), t.styledMode || r.attr(i).attr({ "stroke-linejoin": "round" }), o.delayedRendering = !1) : (r.setRadialReference(e.center), t.styledMode || u(!0, s, i), u(!0, s, a, n), r.animate(s)), r.attr({ visibility: o.visible ? "inherit" : "hidden" }), r.addClass(o.getClassName(), !0)) : r && (o.graphic = r.destroy());
		});
	}
	sortByAngle(e, t) {
		e.sort(function(e, n) {
			return e.angle !== void 0 && (n.angle - e.angle) * t;
		});
	}
	translate(e) {
		g(this, "translate"), this.generatePoints();
		let t = this, n = t.options, r = n.slicedOffset, i = mc(n.startAngle, n.endAngle), a = t.startAngleRad = i.start, o = (t.endAngleRad = i.end) - a, s = t.points, c = n.ignoreHiddenPoint, l = s.length, u, d, f, p, m, h, _, v = 0;
		for (e || (t.center = e = t.getCenter()), h = 0; h < l; h++) {
			_ = s[h], u = a + v * o, _.isValid() && (!c || _.visible) && (v += _.percentage / 100), d = a + v * o;
			let t = {
				x: e[0],
				y: e[1],
				r: e[2] / 2,
				innerR: e[3] / 2,
				start: u,
				end: d
			};
			_.shapeType = "arc", _.shapeArgs = t, f = (d + u) / 2, f > 1.5 * Math.PI ? f -= 2 * Math.PI : f < -Math.PI / 2 && (f += 2 * Math.PI), _.slicedTranslation = {
				translateX: Math.round(Math.cos(f) * r),
				translateY: Math.round(Math.sin(f) * r)
			}, p = Math.cos(f) * e[2] / 2, m = Math.sin(f) * e[2] / 2, _.tooltipPos = [e[0] + p * .7, e[1] + m * .7], _.half = +(f < -Math.PI / 2 || f > Math.PI / 2), _.angle = f;
		}
		g(t, "afterTranslate");
	}
	updateTotals() {
		let e = this.points, t = e.length, n = this.options.ignoreHiddenPoint, r, i, a = 0;
		for (r = 0; r < t; r++) i = e[r], i.isValid() && (!n || i.visible) && (a += i.y);
		for (this.total = a, r = 0; r < t; r++) i = e[r], i.percentage = a > 0 && (i.visible || !n) ? i.y / a * 100 : 0, i.total = a;
	}
};
gc.defaultOptions = u(be.defaultOptions, pc), L(gc.prototype, {
	axisTypes: [],
	directTouch: !0,
	drawGraph: void 0,
	drawTracker: ve.prototype.drawTracker,
	getCenter: xe.getCenter,
	getSymbol: hc,
	invertible: !1,
	isCartesian: !1,
	noSharedTooltip: !0,
	pointAttribs: ve.prototype.pointAttribs,
	pointClass: fc,
	requireSorting: !1,
	searchPoint: hc,
	trackerGroups: ["group", "dataLabelsGroup"]
}), W.registerSeriesType("pie", gc);
//#endregion
//#region node_modules/highcharts/es-modules/Series/Pie/PieDataLabel.js
var { composed: _c, noop: vc } = K, { distribute: yc } = wr, { series: bc } = W, xc;
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
				a = e.dataLabel.getBBox().width, a > i && (i = a);
			}), t ? i + r : n - i - r;
		}
	};
	function n(e) {
		if (tc.compose(bc), G(_c, "PieDataLabel")) {
			let n = e.prototype;
			n.dataLabelPositioners = t, n.alignDataLabel = vc, n.drawDataLabels = i, n.getDataLabelPosition = r, n.placeDataLabels = o, n.verifyDataLabelOverflow = c;
		}
	}
	e.compose = n;
	function r(e, t) {
		let n = Math.PI / 2, { start: r = 0, end: i = 0 } = e.shapeArgs || {}, a = e.angle || 0;
		t > 0 && r < n && i > n && a > n / 2 && a < n * 1.5 && (a = a <= n ? Math.max(n / 2, (r + n) / 2) : Math.min(n * 1.5, (n + i) / 2));
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
	function i() {
		let e = this, t = e.points, n = e.chart, r = n.plotWidth, i = n.plotHeight, o = n.plotLeft, c = Math.round(n.chartWidth / 3), l = e.center, u = l[2] / 2, d = l[1], f = [[], []], p = [
			0,
			0,
			0,
			0
		], m = e.dataLabelPositioners, h, g, _, v = 0;
		!e.visible || !e.hasDataLabels?.() || (t.forEach((e) => {
			(e.dataLabels || []).forEach((e) => {
				e.shortened &&= (e.attr({ width: "auto" }).css({
					width: "auto",
					textOverflow: "clip"
				}), !1);
			});
		}), bc.prototype.drawDataLabels.apply(e), t.forEach((e) => {
			(e.dataLabels || []).forEach((t, n) => {
				let r = l[2] / 2, i = t.options, o = z(i?.distance || 0, r);
				n === 0 && f[e.half].push(e), a(i?.style?.width) || t.getBBox().width > c && (t.css({ width: Math.round(c * .7) + "px" }), t.shortened = !0), t.dataLabelPosition = this.getDataLabelPosition(e, o), v = Math.max(v, o);
			});
		}), f.forEach((t, s) => {
			let c = t.length, f = [], h, y, b = 0, x;
			c && (e.sortByAngle(t, s - .5), v > 0 && (h = Math.max(0, d - u - v), y = Math.min(d + u + v, n.plotHeight), t.forEach((e) => {
				(e.dataLabels || []).forEach((t) => {
					let r = t.dataLabelPosition;
					r && r.distance > 0 && (r.top = Math.max(0, d - u - r.distance), r.bottom = Math.min(d + u + r.distance, n.plotHeight), b = t.getBBox().height || 21, t.lineHeight = n.renderer.fontMetrics(t.text || t).h + 2 * t.padding, e.distributeBox = {
						target: (t.dataLabelPosition?.natural.y || 0) - r.top + t.lineHeight / 2,
						size: b,
						rank: e.y
					}, f.push(e.distributeBox));
				});
			}), x = y + b - h, yc(f, x, x / 5)), t.forEach((n) => {
				(n.dataLabels || []).forEach((c) => {
					let d = c.options || {}, h = n.distributeBox, v = c.dataLabelPosition, y = v?.natural.y || 0, b = d.connectorPadding || 0, x = c.lineHeight || 21, S = (x - c.getBBox().height) / 2, C = 0, w = y, T = "inherit";
					if (v) {
						if (f && a(h) && v.distance > 0 && (h.pos === void 0 ? T = "hidden" : (_ = h.size, w = m.radialDistributionY(n, c))), d.justify) C = m.justify(n, c, u, l);
						else switch (d.alignTo) {
							case "connectors":
								C = m.alignToConnectors(t, s, r, o);
								break;
							case "plotEdges":
								C = m.alignToPlotEdges(c, s, r, o);
								break;
							default: C = m.radialDistributionX(e, n, w - S, y, c);
						}
						if (v.attribs = {
							visibility: T,
							align: v.alignment
						}, v.posAttribs = {
							x: C + (d.x || 0) + ({
								left: b,
								right: -b
							}[v.alignment] || 0),
							y: w + (d.y || 0) - x / 2
						}, v.computed.x = C, v.computed.y = w - S, N(d.crop, !0)) {
							g = c.getBBox().width;
							let e;
							C - g < b && s === 1 ? (e = Math.round(g - C + b), p[3] = Math.max(e, p[3])) : C + g > r - b && s === 0 && (e = Math.round(C + g - r + b), p[1] = Math.max(e, p[1])), w - _ / 2 < 0 ? p[0] = Math.max(Math.round(-w + _ / 2), p[0]) : w + _ / 2 > i && (p[2] = Math.max(Math.round(w + _ / 2 - i), p[2])), v.sideOverflow = e;
						}
					}
				});
			}));
		}), (fe(p) === 0 || this.verifyDataLabelOverflow(p)) && (this.placeDataLabels(), this.points.forEach((t) => {
			t.dataLabels?.forEach((r, i) => {
				let { connectorColor: a, connectorWidth: o = 1 } = r.options || {}, c = r.dataLabelPosition;
				if (s(o)) {
					let s;
					h = r.connector, c && c.distance > 0 ? (s = !h, h || (r.connector = h = n.renderer.path().addClass("highcharts-data-label-connector  highcharts-color-" + t.colorIndex + (t.className ? " " + t.className : "")).add(e.dataLabelsGroups?.[i])), n.styledMode || h.attr({
						"stroke-width": o,
						stroke: a || t.color || "var(--highcharts-neutral-color-60)"
					}), h[s ? "attr" : "animate"]({ d: t.getConnectorPath(r) }), h.attr({ visibility: c.attribs?.visibility })) : h && (r.connector = h.destroy());
				}
			});
		})));
	}
	function o() {
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
	function c(e) {
		let t = this.center, n = this.options, r = n.center, i = n.minSize || 80, a = i, o = n.size !== null;
		return o || (r[0] === null ? (a = Math.max(t[2] - e[1] - e[3], i), t[0] += (e[3] - e[1]) / 2) : a = Math.max(t[2] - Math.max(e[1], e[3]), i), r[1] === null ? (a = q(a, i, t[2] - e[0] - e[2]), t[1] += (e[0] - e[2]) / 2) : a = q(a, i, t[2] - Math.max(e[0], e[2])), a < t[2] ? (t[2] = a, t[3] = Math.min(n.thickness ? Math.max(0, a - n.thickness * 2) : Math.max(0, z(n.innerSize || 0, a)), a), this.translate(t), this.drawDataLabels && this.drawDataLabels()) : o = !0), o;
	}
})(xc ||= {});
var Sc = xc, Cc;
(function(e) {
	function t(e) {
		let t = e.reduce((e, t) => (e.x += t.x, e.y += t.y, e), {
			x: 0,
			y: 0
		});
		return {
			x: t.x / e.length,
			y: t.y / e.length
		};
	}
	e.getCenterOfPoints = t;
	function n(e, t) {
		return Math.sqrt((t.x - e.x) ** 2 + (t.y - e.y) ** 2);
	}
	e.getDistanceBetweenPoints = n;
	function r(e, t) {
		return Math.atan2(t.x - e.x, t.y - e.y);
	}
	e.getAngleBetweenPoints = r;
	function i({ x: e, y: t }, n) {
		let r = n.length, i, a, o = !1;
		for (i = 0, a = r - 1; i < r; a = i++) {
			let [r, s] = n[i], [c, l] = n[a];
			s > t != l > t && e < (c - r) * (t - s) / (l - s) + r && (o = !o);
		}
		return o;
	}
	e.pointInPolygon = i;
})(Cc ||= {});
//#endregion
//#region node_modules/highcharts/es-modules/Core/Series/OverlappingDataLabels.js
var { pointInPolygon: wc } = Cc;
function Tc(e) {
	let t = this, n = e.length, r = (e, t) => !(t.x >= e.x + e.width || t.x + t.width <= e.x || t.y >= e.y + e.height || t.y + t.height <= e.y), i = (e, t) => {
		for (let n of e) if (wc({
			x: n[0],
			y: n[1]
		}, t)) return !0;
		return !1;
	};
	function a(e) {
		if (e && (!e.alignAttr || e.placed)) {
			let t = e.box ? 0 : e.padding || 0, n = e.dataLabelPosition?.posAttribs || e.alignAttr || {
				x: e.attr("x"),
				y: e.attr("y")
			}, { height: r, polygon: i, width: a } = e.getBBox(), s = o(e.alignValue) * a;
			return e.width = a, e.height = r, {
				x: n.x + (e.parentGroup?.translateX || 0) + t - s,
				y: n.y + (e.parentGroup?.translateY || 0) + t,
				width: a - 2 * t,
				height: r - 2 * t,
				polygon: i
			};
		}
	}
	let s, c, l, u, d, f = !1;
	for (let t = 0; t < n; t++) s = e[t], s && (s.oldOpacity = s.opacity, s.newOpacity = 1, s.absoluteBox = a(s));
	e.sort((e, t) => (t?.labelrank || 0) - (e?.labelrank || 0));
	for (let t = 0; t < n; ++t) {
		c = e[t], u = c && c.absoluteBox;
		let a = u?.polygon;
		for (let o = t + 1; o < n; ++o) {
			l = e[o], d = l && l.absoluteBox;
			let t = !1;
			if (u && d && c !== l && c?.newOpacity !== 0 && l?.newOpacity !== 0 && c?.visibility !== "hidden" && l?.visibility !== "hidden") {
				let e = d.polygon;
				if (a && e && a !== e ? i(a, e) && (t = !0) : r(u, d) && (t = !0), t) {
					let e = c?.labelrank < l?.labelrank ? c : l, t = e?.text;
					e && (e.newOpacity = 0), t?.element.querySelector("textPath") && t.hide();
				}
			}
		}
	}
	for (let n of e) n && Dc(n, t) && (f = !0);
	f && g(t, "afterHideAllOverlappingLabels");
}
function Ec(e) {
	let t = e.prototype;
	t.hideOverlappingLabels || (t.hideOverlappingLabels = Tc, D(e, "render", Oc));
}
function Dc(e, t) {
	let n, r, i = !1;
	return e && (r = e.newOpacity, e.oldOpacity !== r && (e.hasClass("highcharts-data-label") ? (e[r ? "removeClass" : "addClass"]("highcharts-data-label-hidden"), n = function() {
		t.styledMode || e.css({ pointerEvents: r ? "auto" : "none" });
	}, i = !0, e[e.isOld || e.placed ? "animate" : "attr"]({ opacity: r }, void 0, n), g(t, "afterHideOverlappingLabel")) : e.attr({ opacity: r })), e.isOld = !0), i;
}
function Oc() {
	let e = this, t = [];
	for (let n of e.labelCollectors || []) t = t.concat(n());
	for (let n of e.yAxis || []) n.stacking && n.options.stackLabels && !n.options.stackLabels.allowOverlap && w(n.stacking.stacks, (e) => {
		w(e, (e) => {
			e.label && t.push(e.label);
		});
	});
	for (let n of e.series || []) if (n.visible && n.hasDataLabels?.()) {
		let r = (r) => {
			for (let i of r) i.visible && (i.dataLabels || []).forEach((r) => {
				let a = r.options || {};
				r.labelrank = N(a.labelrank, i.labelrank, i.shapeArgs?.height), a.allowOverlap ?? (n.is("pie") && Number(a.distance) > 0) ? (r.oldOpacity = r.opacity, r.newOpacity = 1, Dc(r, e)) : t.push(r);
			});
		};
		r(n.nodes || []), r(n.points);
	}
	this.hideOverlappingLabels(t);
}
//#endregion
//#region node_modules/highcharts/es-modules/Core/Responsive.js
var kc;
(function(e) {
	function t(e) {
		let t = e.prototype;
		return t.matchResponsiveRule || L(t, {
			matchResponsiveRule: n,
			setResponsive: r
		}), e;
	}
	e.compose = t;
	function n(e, t) {
		let n = e.condition;
		(n.callback || function() {
			return this.chartWidth <= N(n.maxWidth, Number.MAX_VALUE) && this.chartHeight <= N(n.maxHeight, Number.MAX_VALUE) && this.chartWidth >= N(n.minWidth, 0) && this.chartHeight >= N(n.minHeight, 0);
		}).call(this, this) && t.push(e._id);
	}
	function r(e, t) {
		let n = this.options.responsive, r = this.currentResponsive, i = [], a;
		!t && n && n.rules && n.rules.forEach((e) => {
			e._id === void 0 && (e._id = de()), this.matchResponsiveRule(e, i);
		}, this);
		let o = u(...i.map((e) => m(n?.rules || [], (t) => t._id === e)).map((e) => e?.chartOptions));
		o.isResponsiveOptions = !0, i = i.toString() || void 0;
		let s = r?.ruleIds;
		i !== s && (r && (this.currentResponsive = void 0, this.updatingResponsive = !0, this.update(r.undoOptions, e, !0), this.updatingResponsive = !1), i ? (a = h(o, this.options, !0, this.collectionsWithUpdate), a.isResponsiveOptions = !0, this.currentResponsive = {
			ruleIds: i,
			mergedOptions: o,
			undoOptions: a
		}, this.updatingResponsive || this.update(o, e, !0)) : this.currentResponsive = void 0);
	}
})(kc ||= {});
var Ac = kc, $ = K;
$.AST = V, $.Axis = Le, $.Chart = Ot, $.Color = F, $.DataLabel = tc, $.DataTable = _e, $.DataTableCore = _e, $.Fx = te, $.HTMLElement = es, $.Legend = Nr, $.LegendSymbol = Se, $.PlotLineOrBand = cs, $.Point = oe, $.Pointer = ws, $.Series = be, $.SeriesRegistry = W, $.StackItem = ge, $.SVGElement = we, $.SVGRenderer = gt, $.Templating = I, $.Tick = Oe, $.Time = se, $.Tooltip = vs, $.addEvent = D, $.animObject = R.animObject, $.animate = R.animate, $.arrayMax = fe, $.arrayMin = me, $.attr = A, $.chart = Ot.chart, $.clamp = q, $.color = F.parse, $.correctFloat = y, $.createElement = r, $.css = b, $.crisp = pe, $.dateFormat = I.dateFormat, $.defaultOptions = O.defaultOptions, $.defined = a, $.destroyObjectProperties = i, $.diffObjects = h, $.discardElement = re, $.distribute = wr.distribute, $.erase = t, $.error = U, $.extend = L, $.extendClass = p, $.find = m, $.fireEvent = g, $.format = I.format, $.getAlignFactor = o, $.getClosestDistance = l, $.getDeferredAnimation = R.getDeferredAnimation, $.getMagnitude = f, $.getNestedProperty = v, $.getOptions = O.getOptions, $.getStyle = he, $.insertItem = ee, $.isArray = S, $.isClass = c, $.isDOMElement = x, $.isFunction = C, $.isNumber = s, $.isObject = d, $.isString = B, $.internalClearTimeout = n, $.merge = u, $.normalizeTickInterval = T, $.numberFormat = I.numberFormat, $.objectEach = w, $.offset = E, $.pad = e, $.pick = N, $.pushUnique = G, $.pInt = _, $.relativeLength = z, $.removeEvent = H, $.replaceNested = ne, $.seriesType = W.seriesType, $.setAnimation = R.setAnimation, $.setOptions = O.setOptions, $.splat = k, $.stableSort = ce, $.stop = R.stop, $.syncTimeout = ue, $.time = O.defaultTime, $.ucfirst = j, $.timers = te.timers, $.timeUnits = ie, $.uniqueKey = de, $.useSerialIds = M, $.wrap = ae, Ce($.Series, $.SVGElement, $.SVGRenderer), ac.compose($.Series.types.column), tc.compose($.Series), rs.compose($.Axis), es.compose($.SVGRenderer), Nr.compose($.Chart), as.compose($.Axis), Ec($.Chart), Sc.compose($.Series.types.pie), cs.compose($.Chart, $.Axis), ws.compose($.Chart), Ac.compose($.Chart), ks.compose($.Axis, $.Chart, $.Series), Hs.compose($.Axis, $.Chart, $.Series), vs.compose($.Pointer);
//#endregion
//#region src/index.ts
var jc = {
	areaLine: "area",
	areaSpline: "areaspline",
	bar: "bar",
	column: "column",
	line: "line",
	spline: "spline"
}, Mc = {
	areaLine: "area",
	areaRange: "arearange",
	areaSpline: "areaspline",
	column: "column",
	columnRange: "columnrange",
	line: "line",
	spline: "spline"
}, Nc = {
	areaLine: "arearange",
	areaSpline: "areasplinerange",
	bar: "columnrange",
	column: "columnrange"
}, Pc = "highcharts", Fc = {
	isDependencyWheelAndSankeyModulesLoaded: !1,
	isHighchartsMoreLoaded: !1,
	isStreamgraphModuleLoaded: !1
}, Ic = class {
	renderCartesianChart(e, t, n, r) {
		let i = jc[e], a = Array.from(t.data.measures, (e) => ({
			type: i,
			name: e.name,
			data: e.values
		})), o = {
			chart: { type: i },
			plotOptions: { series: { borderColor: "#333" } },
			series: a,
			title: { text: t.title.text },
			xAxis: { categories: t.data.dimension.values.map((e) => e.label?.text ?? "") },
			yAxis: { title: { text: t.title.text } }
		}, s = $.chart(n, o, r);
		return {
			chart: s,
			resize: () => {
				s.reflow();
			},
			vendorId: Pc
		};
	}
	async render(e, t, n) {
		await this.loadHighchartsMore();
		let r = $.chart(t, e, n);
		return {
			chart: r,
			resize: () => {
				r.reflow();
			},
			vendorId: Pc
		};
	}
	async renderPeriodFlowBoundaries(e, t, n) {
		await this.loadHighchartsMore();
		let r = {
			chart: { type: "waterfall" },
			plotOptions: { series: { borderColor: "#333" } },
			series: Array.from(e.data.measures, (e) => ({
				type: "waterfall",
				name: e.name,
				data: e.values
			})),
			title: { text: e.title.text },
			xAxis: { categories: e.data.dimension.values.map((e) => e.label?.text ?? "") },
			yAxis: { title: { text: e.title.text } }
		}, i = $.chart(t, r, n);
		return {
			chart: i,
			resize: () => {
				i.reflow();
			},
			vendorId: Pc
		};
	}
	async renderPolarChart(e, t, n, r) {
		await this.loadHighchartsMore();
		let i = Mc[e], a = {
			chart: { polar: !0 },
			plotOptions: { series: { borderColor: "#333" } },
			series: Array.from(t.data.measures, (e) => ({
				type: i,
				name: e.name,
				data: e.values
			})),
			title: { text: t.title.text },
			xAxis: { categories: t.data.dimension.values.map((e) => e.label?.text ?? "") },
			yAxis: { title: { text: t.title.text } }
		}, o = $.chart(n, a, r);
		return {
			chart: o,
			resize: () => {
				o.reflow();
			},
			vendorId: Pc
		};
	}
	async renderRangeChart(e, t, n, r) {
		await this.loadHighchartsMore();
		let i = Nc[e], a = [], o = [];
		for (let e = 0; e < t.data.dimension.values.length; e++) o.push([t.data.measures[0]?.values[e]?.[0] ?? 0, t.data.measures[1]?.values[e]?.[0] ?? 0]);
		a.push({
			type: i,
			name: "Unknown",
			data: o
		});
		let s = {
			chart: {
				type: i,
				inverted: e === "bar"
			},
			plotOptions: { series: { borderColor: "#333" } },
			series: a,
			title: { text: t.title.text },
			xAxis: { categories: t.data.dimension.values.map((e) => e.label?.text ?? "") },
			yAxis: { title: { text: t.title.text } }
		}, c = $.chart(n, s, r);
		return {
			chart: c,
			resize: () => {
				c.reflow();
			},
			vendorId: Pc
		};
	}
	async loadDependencyWheelAndSankeyModules() {
		Fc.isDependencyWheelAndSankeyModulesLoaded ||= (await Promise.all([import("./dependency-wheel.src-Do6WEv1U.js"), import("./sankey.src-B6FOI3xv.js")]), !0);
	}
	async loadHighchartsMore() {
		Fc.isHighchartsMoreLoaded ||= (await import("./highchartsMoreCustom-BbFIr2hA.js"), !0);
	}
	async loadStreamGraphModule() {
		Fc.isStreamgraphModuleLoaded ||= (await import("./streamgraph.src-DAf1Z8NV.js"), !0);
	}
};
//#endregion
export { Ic as HighchartsTool };

//# sourceMappingURL=dpuse-tool-highcharts.es.js.map