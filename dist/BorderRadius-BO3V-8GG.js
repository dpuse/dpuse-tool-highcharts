import { A as e, B as t, D as n, E as r, F as i, G as a, I as o, J as s, K as c, O as l, P as u, S as d, V as f, W as p, X as m, _ as h, a as g, c as _, et as v, g as y, i as b, j as x, m as S, n as C, nt as w, q as T, rt as E, s as D, st as O, t as k, tt as A, u as j, ut as M, v as N, w as P, x as F, y as I } from "./SeriesRegistry-BGZZizI3.js";
import { t as ee } from "./SVGElement-0ERYDlUm.js";
//#region node_modules/highcharts/es-modules/Core/Foundation.js
var L;
(function(e) {
	function t(e, t) {
		e.eventOptions = e.eventOptions || {}, m(t.events, function(t, n) {
			e.eventOptions[n] !== t && (e.eventOptions[n] && (E(e, n, e.eventOptions[n]), delete e.eventOptions[n]), p(t) && (e.eventOptions[n] = t, h(e, n, t, { order: 0 })));
		});
	}
	e.registerEventOptions = t;
})(L ||= {});
var R = L;
//#endregion
//#region node_modules/highcharts/es-modules/Data/ColumnUtils.js
function te(e, t, n) {
	return Array.isArray(e) ? (e.length = t, e) : e[n ? "subarray" : "slice"](0, t);
}
function ne(e, t, n, r, i = []) {
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
function re(e, t) {
	switch (typeof e) {
		case "boolean": return +!!e;
		case "number": return isNaN(e) && !t ? null : e;
		default: return e = parseFloat(`${e ?? ""}`), isNaN(e) && !t ? null : e;
	}
}
//#endregion
//#region node_modules/highcharts/es-modules/Data/DataTableCore.js
var { setLength: ie, splice: z } = {
	convertToNumber: re,
	setLength: te,
	splice: ne
}, B = class {
	constructor(e = {}) {
		this.isDataTable = !0, this.autoId = !e.id, this.columns = {}, this.id = e.id || j(), this.rowCount = 0, this.versionTag = j();
		let t = 0;
		m(e.columns || {}, (e, n) => {
			this.columns[n] = e.slice(), t = Math.max(t, e.length);
		}), this.applyRowCount(t);
	}
	applyRowCount(e) {
		this.rowCount = e, m(this.columns, (t, n) => {
			t.length !== e && (this.columns[n] = ie(t, e));
		});
	}
	deleteRows(e, t = 1) {
		if (t > 0 && e < this.rowCount) {
			let n = 0;
			m(this.columns, (r, i) => {
				this.columns[i] = z(r, e, t).array, n = r.length;
			}), this.rowCount = n;
		}
		u(this, "afterDeleteRows", {
			rowIndex: e,
			rowCount: t
		}), this.versionTag = j();
	}
	getColumn(e, t) {
		return this.columns[e];
	}
	getColumns(e, t) {
		return (e || Object.keys(this.columns)).reduce((e, t) => (e[t] = this.columns[t], e), {});
	}
	getRowObject(e, t) {
		let n = {}, r = this.columns;
		t ??= Object.keys(this.columns);
		for (let i of t) n[i] = r[i]?.[e];
		return n;
	}
	setColumn(e, t = [], n = 0, r) {
		this.setColumns({ [e]: t }, n, r);
	}
	setColumns(e, t, n) {
		let r = this.rowCount;
		m(e, (e, t) => {
			this.columns[t] = e.slice(), r = e.length;
		}), this.applyRowCount(r), n?.silent || (u(this, "afterSetColumns"), this.versionTag = j());
	}
	setRow(e, t = this.rowCount, n, r) {
		var i;
		let { columns: a } = this, o = n ? this.rowCount + 1 : t + 1, s = Object.keys(e);
		if (r?.addColumns !== !1) for (let e = 0, t = s.length; e < t; e++) a[i = s[e]] || (a[i] = Array(this.rowCount));
		m(a, (r, i) => {
			r && (n ? r = z(r, t, 0, !0, [e[i]]).array : r[t] = i in e ? e[i] : r[t], a[i] = r);
		}), this.applyRowCount(Math.max(o, this.rowCount)), r?.silent || (u(this, "afterSetRows", { rowIndex: t }), this.versionTag = j());
	}
	getModified() {
		return this.modified || this;
	}
}, V;
(function(e) {
	function t(e, t) {
		n.call(this, e, t, !0);
	}
	e.areaMarker = t;
	function n(e, t, n) {
		let r = this.legendItem = this.legendItem || {}, { chart: i, options: a } = this, { baseline: o = 0, symbolWidth: c, symbolHeight: l } = e, u = this.symbol || "circle", d = l / 2, f = i.renderer, p = r.group, m = o - Math.round((e.fontMetrics?.b || l) * (n ? .4 : .3)), h = {}, g, _ = a.marker, y = 0;
		if (i.styledMode || (h["stroke-width"] = Math.min(a.lineWidth || 0, 24), a.dashStyle ? h.dashstyle = a.dashStyle : a.linecap !== "square" && (h["stroke-linecap"] = "round")), r.line = f.path().addClass("highcharts-graph").attr(h).add(p), n && (r.area = f.path().addClass("highcharts-area").add(p)), h["stroke-linecap"] && (y = Math.min(r.line.strokeWidth(), c) / 2), c) {
			let e = [[
				"M",
				y,
				m
			], [
				"L",
				c - y,
				m
			]];
			r.line.attr({ d: e }), r.area?.attr({ d: [
				...e,
				[
					"L",
					c - y,
					o
				],
				[
					"L",
					y,
					o
				]
			] });
		}
		if (_ && _.enabled !== !1 && c) {
			let e = Math.min(v(_.radius, d), d);
			u.indexOf("url") === 0 && (_ = s(_, {
				width: l,
				height: l
			}), e = 0), r.symbol = g = f.symbol(u, c / 2 - e, m - e, 2 * e, 2 * e, x({ context: "legend" }, _)).addClass("highcharts-point").add(p), g.isMarker = !0;
		}
	}
	e.lineMarker = n;
})(V ||= {});
var H = V, ae = {
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
}, { animObject: U, setAnimation: oe } = S, { defaultOptions: W } = g, { registerEventOptions: se } = R, { svg: ce, win: le } = M, { seriesTypes: G } = k, { format: ue } = b, K = class i {
	constructor() {
		this.zoneAxis = "y";
	}
	init(e, t) {
		u(this, "init", { options: t });
		let n = this, r = e.series;
		this.eventsToUnbind = [], this.condemnedPoints ||= [], n.chart = e, n.options = n.setOptions(t);
		let i = n.options, a = i.visible !== !1;
		this.dataTable ??= i.dataTable?.isDataTable ? i.dataTable : new B(i.dataTable), n.linkedSeries = [], n.bindAxes(), x(n, {
			name: i.name,
			state: "",
			visible: a,
			selected: i.selected === !0
		}), se(this, i), (i.events?.click || i.point?.events?.click || i.allowPointSelect) && (e.runTrackerClick = !0), n.getColor(), n.getSymbol(), n.isCartesian && (e.hasCartesianSeries = !0);
		let o;
		r.length && (o = r[r.length - 1]), n._i = v(o?._i, -1) + 1, n.opacity = n.options.opacity, e.orderItems("series", _(this, r)), !n.points && !n.data && n.setData(i.data, !1), u(this, "afterInit");
	}
	is(e) {
		return G[e] && this instanceof G[e];
	}
	bindAxes() {
		let e = this, t = e.options, n = e.chart, r;
		u(this, "bindAxes", null, function() {
			(e.axisTypes || []).forEach(function(i) {
				(n[i] || []).forEach(function(n) {
					r = n.options, (v(t[i], 0) === n.index || t[i] !== void 0 && t[i] === r.id) && (_(e, n.series), e[i] = n, n.isDirty = !0);
				}), !e[i] && e.optionalAxis !== i && D(18, !0, n);
			});
		}), u(this, "afterBindAxes");
	}
	hasData() {
		return this.visible && this.dataMax !== void 0 && this.dataMin !== void 0 || this.visible && this.dataTable.rowCount > 0;
	}
	hasMarkerChanged(e, t) {
		let n = e.marker, r = t.marker || {};
		return n && (r.enabled && !n.enabled || r.symbol !== n.symbol || r.height !== n.height || r.width !== n.width);
	}
	autoIncrement(e) {
		let t = this.options, { pointIntervalUnit: n, relativeXValue: r } = this.options, i = this.chart.time, o = this.xIncrement ?? i.parse(t.pointStart) ?? 0, s;
		if (this.pointInterval = s = v(this.pointInterval, t.pointInterval, 1), r && a(e) && (s *= e), n) {
			let e = i.toParts(o);
			n === "day" ? e[2] += s : n === "month" ? e[1] += s : n === "year" && (e[0] += s), s = i.makeTime.apply(i, e) - o;
		}
		return r && a(e) ? o + s : (this.xIncrement = o + s, o);
	}
	setOptions(e) {
		let t = this.chart, n = t.options.plotOptions, i = t.userOptions || {}, a = s(e), o = t.styledMode, c = {
			plotOptions: n,
			userOptions: a
		}, l;
		u(this, "setOptions", c);
		let d = c.plotOptions[this.type], f = i.plotOptions || {}, p = f.series || {}, m = W.plotOptions[this.type] || {}, h = f[this.type] || {};
		d.dataLabels = this.mergeArrays(m.dataLabels, d.dataLabels), this.userOptions = c.userOptions;
		let g = s(d, n.series, h, a), { negativeColor: _, negativeFillColor: y, zoneAxis: b = "y", zones: x } = g, S = (x || []).map((e) => ({ ...e }));
		return this.tooltipOptions = s(W.tooltip, W.plotOptions.series?.tooltip, m?.tooltip, t.userOptions.tooltip, f.series?.tooltip, h.tooltip, a.tooltip), this.stickyTracking = v(a.stickyTracking, h.stickyTracking, p.stickyTracking, this.tooltipOptions.shared && !this.noSharedTooltip ? !0 : g.stickyTracking), d.marker === null && delete g.marker, this.zones ||= S, this.zoneAxis = b, (_ || y) && !x && (l = {
			value: g[b + "Threshold"] || g.threshold || 0,
			className: "highcharts-negative"
		}, o || (typeof _ != "boolean" && (l.color = _), l.fillColor = y), S.push(l)), S.length && r(S[S.length - 1].value) && S.push(o ? {} : {
			color: this.color,
			fillColor: this.fillColor
		}), u(this, "afterSetOptions", { options: g }), g;
	}
	getName() {
		let { chart: e, options: t } = this, { dataMapping: n, name: r } = t, i = n?.y || n?.value, a = T(i) ? i : i?.column;
		return r ?? (T(a) ? a : ue(e.options.lang.seriesName, this, e));
	}
	getCyclic(e, t, n) {
		let i = this.chart, a = `${e}Index`, o = `${e}Counter`, s = n?.length || i.options.chart.colorCount, c, l;
		t || (l = v(e === "color" ? this.options.colorIndex : void 0, this[a]), r(l) ? c = l : (i.series.length || (i[o] = 0), c = i[o] % s, i[o] += 1), n && (t = n[c])), c !== void 0 && (this[a] = c), this[e] = t;
	}
	getColor() {
		let e = this.chart;
		e.styledMode ? this.getCyclic("color") : this.options.colorByPoint ? this.color = "var(--highcharts-neutral-color-20)" : this.getCyclic("color", this.options.color || W.plotOptions[this.type]?.color, e.options.colors);
	}
	getPointsCollection() {
		return (this.hasGroupedData ? this.points : this.data) || [];
	}
	getSymbol() {
		let e = this.options.marker;
		this.getCyclic("symbol", e.symbol, this.chart.options.symbols);
	}
	getColumn(e, t, n) {
		let i = t ? this.dataTable.getModified() : this.dataTable, a = i.rowCount, o = this.dataTable !== i, s = i.getColumn(e, !0);
		if (e === "x" && !o) {
			if (this.xColumn) return this.xColumn;
			let e = i.getColumn("name", !0), t = this.options, n = (e) => {
				if (this.xColumnIsNumbers !== void 0) return this.xColumnIsNumbers;
				for (let t of e) if (typeof t != "number") return this.xColumnIsNumbers = !1;
				return this.xColumnIsNumbers = !0;
			};
			if (this.xIncrement = null, !s || this.xAxis?.hasNames || t.relativeXValue || s.length < (t.turboThreshold || Infinity) && !this.boosted && !n(s)) {
				let t = [];
				for (let n = 0; n < a; n++) {
					let i = s?.[n];
					r(i) || (this.xIncrement ??= t[t.length - 1] ?? null), t.push(this.getX(i, e?.[n]));
				}
				return this.xColumn = t;
			}
		}
		return s || Array(n ? a : 0);
	}
	getX(e, t) {
		return this.xAxis?.hasNames && this.dataTable.getColumn("name", !0) && r(t) ? this.xAxis.nameToX({
			name: t,
			series: this
		}, e) : e === void 0 || a(e) && this.options.relativeXValue ? this.autoIncrement(e) : (typeof e == "string" && (e = this.chart.time.parse(e), a(e)), e);
	}
	matchPoints(e, t, n, i) {
		let { dataTable: a, options: o, requireSorting: s } = this, c = o.dataSorting, l = this.data, u = [], d = [], f = a.rowCount === l.length, p, m, h, g = 0, _ = !0;
		this.xIncrement = null, delete this.xColumn;
		let v = a.getColumn("x"), y = a.getColumn("id"), b = c?.matchByName ? a.getColumn("name") : void 0, x = a.getColumn("index");
		for (m = 0; m < a.rowCount; m++) {
			let o = v?.[m], h = y?.[m], _ = b?.[m], S = x?.[m], [C, w] = h && t ? [h, t] : _ && n ? [_, n] : r(S) && i ? [S, i] : r(o) && e ? [o, e] : [], T = -1;
			if (w) {
				if (T = w.indexOf(C, g), T === -1) {
					let t = v?.[m], n = e?.length ?? a.rowCount;
					for (; n && e && typeof t == "number" && e[n - 1] > t;) n--;
					u.push({
						newIndex: n,
						oldIndex: m
					});
				} else l[T] && (d.push({
					newIndex: T,
					oldIndex: m
				}), l[T].touched = !0, s && (g = T + 1));
				(!f || m !== T || c?.enabled || this.hasDerivedData) && (p = !0);
			} else u.push({
				newIndex: m,
				oldIndex: m
			});
		}
		if (p) {
			for (d.forEach((e) => {
				l[e.newIndex].applyOptions(a.getRowObject(e.oldIndex));
			}), u.sort((e, t) => t.newIndex - e.newIndex), u.forEach((e) => {
				l.splice(e.newIndex, 0, void 0);
			}), m = l.length; m--;) h = l[m], h && !h.touched && (h.destroy(), l.splice(m, 1));
			this.isDirtyData = this.isDirty = !0;
		} else if (f && !c?.enabled) {
			for (m = 0; m < a.rowCount; m++) if (!l[m].destroyed && !l[m].condemned) {
				let e = a.getRowObject(m);
				e && (Object.keys(e).forEach((t) => {
					r(e[t]) || delete e[t];
				}), Object.keys(e).length && l[m].update(e, !1, void 0, !1));
			}
		} else _ = !1;
		if (l.forEach((e) => {
			e && (e.touched = !1);
		}), !_) return !1;
		let S = this.getColumn("x");
		return this.xIncrement === null && S.length && (this.xIncrement = N(S), this.autoIncrement()), !0;
	}
	getDataColumnKeys() {
		return this.dataColumnKeys || ["x", ...this.pointArrayMap || ["y"]];
	}
	setData(e, t = !0, n, r) {
		let i = this, a = this.dataTable, o = i.options, c = i.points, l = c?.length || 0, u = a.getColumn("x"), d = a.getColumn("id"), p = o.dataSorting?.matchByName && c?.map((e) => e.name) || a.getColumn("name"), m = a.getColumn("index"), h = i.chart, g = i.xAxis, _, v, y;
		if (h.options.chart.allowMutatingData || (o.data && delete i.options.data, i.userOptions.data && delete i.userOptions.data, y = s(!0, e)), e = y || e, i.xIncrement = null, delete i.xColumn, delete i.xColumnIsNumbers, a !== o.dataTable && delete a.columns.x, i.colorCounter = 0, f(e) ? this.setDataFromArray(e) : this.setDataFromTable(e), r !== !1 && l && !i.cropped && !i.hasGroupedData && i.visible && !i.boosted && (_ = this.matchPoints(u, d, p, m)), !_) {
			for (T(this.getColumn("y")[0]) && D(14, !0, h), i.data = [], v = l; v--;) c[v]?.destroy();
			g && (g.minRange = g.userMinRange), i.isDirty = h.isDirtyBox = !0, i.isDirtyData = !!c, n = !1;
		}
		f(e) && (i.options.data = i.userOptions.data = e), o.legendType === "point" && (this.processData(), this.generatePoints()), t && h.redraw(n);
	}
	setDataFromArray(e) {
		let t = e.length, { keys: n, turboThreshold: r } = this.options, { pointValKey: i = "y", pointArrayMap: o = [] } = this, s = o.length, c = this.dataTable, l = this.getDataColumnKeys(), u = r && t > r, d = 0, p = 1;
		if (u) {
			let r = this.getFirstValidPoint(e), m = this.getFirstValidPoint(e, t - 1, -1), h = (e) => !!(f(e) && (n || a(e[0])));
			if (a(r) && a(m)) c.setColumn(i, e);
			else if (h(r) && h(m)) if (s) {
				let t = r.length === s, n = Array(r.length).fill(0).map(() => []);
				for (let t of e) for (let e = 0; e <= s; e++) n[e]?.push(t[e]);
				c.setColumns((t ? o : l).reduce((e, t, r) => (e[t] = n[r], e), {}));
			} else {
				n && (d = n.indexOf("x"), p = n.indexOf("y"), d = d >= 0 ? d : 0, p = p >= 0 ? p : 1), r.length === 1 && (p = 0);
				let t = [], a = [];
				if (d === p) {
					for (let t of e) a.push(t[p]);
					c.setColumn(i, a);
				} else {
					for (let n of e) t.push(n[d]), a.push(n[p]);
					c.setColumns({
						x: t,
						[i]: a
					});
				}
			}
			else u = !1;
		}
		if (!u) {
			let n = {};
			for (let r = 0; r < t; r++) {
				let i = this.pointClass.prototype.optionsToObject.call({ series: this }, e[r]);
				for (let e of Object.keys(i)) n[e] || (n[e] = Array(t)), n[e][r] = i[e];
			}
			t ? c.setColumns(n) : c.deleteRows(0, c.rowCount);
		}
	}
	setDataFromTable(e) {
		let { chart: t, options: n, dataTable: r } = this, i = t.getDataTable(n), o = e ? [e] : i.length ? i : t.dataTable, s = this.getDataColumnKeys(), c = n.dataMapping, l = s.slice();
		c && (Object.keys(c).forEach((e) => {
			A(l, e);
		}), this.dataColumnKeys = l), o.forEach((e, t) => {
			let n = l.reduce((n, r) => {
				let i = c?.[r], o = e.columns || {}, s = e.id, l = T(i) ? t === 0 && o[i] : ((i?.dataTable || 0) === t || s && i?.dataTable === s) && (a(i?.column) ? Object.values(o)[i.column] : o[i?.column || r]);
				return l && (n[r] = l), n;
			}, {});
			(c || e) && r.setColumns(n), e.isDataTable && this.bindDataTableEvents(e, n);
		});
	}
	bindDataTableEvents(e, t) {
		if (this.hasBoundDataTableEvents) return;
		let { chart: n, eventsToUnbind: r } = this, i = () => {
			clearTimeout(n.redrawTimeout), n.redrawTimeout = setTimeout(() => n.renderer && n.redraw(), 0);
		};
		r.push(h(e, "afterSetRows", (e) => {
			let n = e.rowIndex;
			if (a(n)) {
				let e = B.prototype.getRowObject.call({ columns: t }, n), r = this.data[n];
				e && (this.currentDataGrouping ? this.setData() : (r ? r.update(e, !1) : this.addPoint(e, !1), i()));
			}
		})), r.push(h(e, "afterDeleteRows", (e) => {
			let { rowCount: t, rowIndex: n } = e;
			if (a(n)) {
				for (let e = n + t - 1; e >= n; e--) this.removePoint(e, !1);
				i();
			}
		})), r.push(h(e, "afterSetColumns", (e) => {
			this.setData(e.target);
		})), this.hasBoundDataTableEvents = !0;
	}
	getProcessedData(e) {
		let t = this, { dataTable: n, isCartesian: r, options: i, xAxis: a } = t, s = i.cropThreshold, c = e || t.getExtremesFromAll, l = a?.logarithmic, u = n.rowCount, d, f, p = 0, m, h, g, _ = t.getColumn("x"), v = n, y = !1;
		a && (m = a.getExtremes(), h = m.min, g = m.max, y = !!(a.categories && !a.names.length), r && t.sorted && !c && (!s || u > s || t.forceCrop) && (_[u - 1] < h || _[0] > g ? v = new B() : t.getColumn(t.pointValKey || "y").length && (_[0] < h || _[u - 1] > g) && (d = this.cropData(n, h, g), v = d.modified, p = d.start, f = !0))), _ = this.getColumn("x", !0);
		let b = o([l ? _.map(l.log2lin) : _], () => t.requireSorting && !y && D(15, !1, t.chart));
		return {
			modified: v,
			cropped: f,
			cropStart: p,
			closestPointRange: b
		};
	}
	processData(e) {
		let t = this, n = t.xAxis, r = t.dataTable;
		if (t.isCartesian && !t.isDirty && !n.isDirty && !t.yAxis.isDirty && !e) return !1;
		let i = t.getProcessedData();
		r.modified = i.modified, t.cropped = i.cropped, t.cropStart = i.cropStart, t.closestPointRange = t.basePointRange = i.closestPointRange, u(t, "afterProcessData");
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
			modified: new B({ columns: l }),
			start: s,
			end: c
		};
	}
	generatePoints() {
		let e = this, t = e.options, n = e.hasProcessedDataTable ? void 0 : t.data, r = e.dataTable.getModified(), i = e.getColumn("x", !0), a = e.pointClass, o = r.rowCount, s = e.cropStart || 0, c = e.hasGroupedData, l = t.keys, d = [], f = t.dataGrouping?.groupAll ? s : 0, p = this.getDataColumnKeys(), m, h, g, _, v = e.data, y;
		if (!v && !c) {
			let t = [];
			t.length = n?.length || 0, v = e.data = t;
		}
		for (l && c && (e.options.keys = !1), _ = 0; _ < o; _++) h = s + _, c ? (g = new a(e, r.getRowObject(_, p)), g.dataGroup = e.groupMap?.[f + _], g.dataGroup?.options && (g.options = g.dataGroup.options, x(g, g.dataGroup.options), delete g.dataLabels, g.key = g.name ?? g.category)) : (g = v[h], y = n ? n[h] : r.getRowObject(_), !g && y !== void 0 ? v[h] = g = new a(e, y, i[_]) : g && (g.category = e.xAxis?.categories?.[g.x] ?? g.x, g.key = g.name ?? g.category)), g && (g.index = c ? f + _ : h, d[_] = g);
		if (e.options.keys = l, v && (o !== (m = v.length) || c)) for (_ = 0; _ < m; _++) _ === s && !c && (_ += o), v[_] && (v[_].destroyElements(), v[_].plotX = void 0);
		e.data = v, e.points = d, u(this, "afterGeneratePoints");
	}
	getXExtremes(e) {
		return {
			min: I(e),
			max: N(e)
		};
	}
	getExtremes(e, t) {
		let { xAxis: n, yAxis: r } = this, i = t || this.getExtremesFromAll || this.options.getExtremesFromAll, o = i && this.cropped ? this.dataTable : this.dataTable.getModified(), s = o.rowCount, c = e || this.stackedYData, l = c ? [c] : (this.keysAffectYAxis || this.pointArrayMap || ["y"])?.map((e) => o.getColumn(e, !0) || []) || [], d = this.getColumn("x", !0), f = [], p = this.requireSorting && !this.is("column") ? 1 : 0, m = r ? r.positiveValuesOnly : !1, h = i || this.cropped || !n, g, _, v, y = 0, b = 0;
		for (n && (g = n.getExtremes(), y = g.min, b = g.max), v = 0; v < s; v++) if (_ = d[v], h || (d[v + p] || _) >= y && (d[v - p] || _) <= b) for (let e of l) {
			let t = e[v];
			a(t) && (t > 0 || !m) && f.push(t);
		}
		let x = {
			activeYData: f,
			dataMin: I(f),
			dataMax: N(f)
		};
		return u(this, "afterGetExtremes", { dataExtremes: x }), x;
	}
	applyExtremes() {
		let e = this.getExtremes();
		return this.dataMin = e.dataMin, this.dataMax = e.dataMax, e;
	}
	getFirstValidPoint(e, t = 0, n = 1) {
		let i = e.length, a = t;
		for (; a >= 0 && a < i;) {
			if (r(e[a])) return e[a];
			a += n;
		}
	}
	translate() {
		this.generatePoints();
		let e = this, { options: t, xAxis: n, yAxis: i } = e, { stacking: o, threshold: s } = t, { hasRendered: c, polar: l } = e.chart, p = e.points.concat(e.condemnedPoints), m = p.length, h = e.pointPlacementToXValue(), g = !!h, _ = t.startFromThreshold ? s : 0, y = t?.nullInteraction && i.len, b, x, S, C, w = Number.MAX_VALUE;
		function T(e) {
			return F(e, -1e9, 1e9);
		}
		let E = (e, t) => {
			let r = n.translate(e, !1, !1, t, !0, h);
			return a(r) ? d(T(r)) : void 0;
		}, D = (e, t, n) => {
			if (a(e) && t.plotX !== void 0) {
				let t = i.translate(e, !1, !0, n, !0);
				return a(t) ? T(t) : void 0;
			}
			if (!a(e) && y) return y;
		};
		for (b = 0; b < m; b++) {
			let t = p[b], u = t.x, m, y, O = t.y, k = t.low, A = o && i.stacking?.stacks[(e.negStacks && O < (_ ? 0 : s) ? "-" : "") + e.stackKey];
			t.plotX = x = E(u), o && e.visible && A && A[u] && (C = e.getStackIndicator(C, u, e.index), !t.isNull && C.key && (m = A[u], y = m.points[C.key]), m && f(y) && (k = y[0], O = y[1], k === _ && C.key === A[u].base && (k = v(a(s) ? s : i.min)), i.positiveValuesOnly && r(k) && k <= 0 && (k = void 0), t.total = t.stackTotal = v(m.total), t.percentage = r(t.y) && m.total ? t.y / m.total * 100 : void 0, t.stackY = O, e.irregularWidths || m.setOffset(e.pointXOffset || 0, e.barW || 0, void 0, void 0, void 0, e.xAxis))), t.yBottom = r(k) ? T(i.translate(k, !1, !0, !1, !0)) : void 0, e.dataModify && (O = e.dataModify.modifyValue(O, b)), t.plotY = D(O, t), t.origin = c && !t.graphic && !l ? {
				x: E(u, !0),
				y: D(O, t, !0)
			} : void 0, t.isInside = this.isPointInside(t), t.clientX = g ? d(n.translate(u, !1, !1, !1, !0, h)) : x, t.negative = (t.y || 0) < (s || 0), !t.isNull && t.visible !== !1 && a(x) && (a(S) && (w = Math.min(w, Math.abs(x - S))), S = x), t.zone = this.zones.length ? t.getZone() : void 0;
		}
		e.closestPointRangePx = w, u(this, "afterTranslate");
	}
	getValidPoints(e, t, n) {
		let r = this.chart;
		return (e || this.points || []).filter(function(e) {
			let { plotX: i, plotY: o } = e;
			return !n && (e.isNull || !a(o)) || t && !r.isInsidePlot(i, o, { inverted: r.inverted }) ? !1 : e.visible !== !1;
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
		let { chart: t, group: n, markerGroup: r } = this, i = t.inverted, a = U(this.options.animation), o = [
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
		this.setClip(), m(this.chart.sharedClips, (e, t, n) => {
			e && !this.chart.container.querySelector(`[clip-path="url(#${e.id})"]`) && (e.destroy(), delete n[t]);
		}), this.finishedAnimating = !0, u(this, "afterAnimate");
	}
	drawPoints(e) {
		e ||= this.points.concat(this.condemnedPoints);
		let t = this, n = t.chart, i = n.styledMode, { colorAxis: a, options: o } = t, s = o.marker, c = o.nullInteraction, l = t[t.specialGroup || "markerGroup"], u = t.xAxis, d = v(s.enabled, !u || u.isRadial ? !0 : null, t.closestPointRangePx >= s.enabledThreshold * s.radius), f, p, m, h, g, _, y;
		if (s.enabled !== !1 || t._hasPointMarkers) for (f = 0; f < e.length; f++) {
			p = e[f], m = p.graphic, h = m ? "animate" : "attr", g = p.marker || {}, _ = !!p.marker;
			let o = p.isNull;
			if ((d && !r(g.enabled) || g.enabled) && (!o || c) && p.visible !== !1) {
				let e = v(g.symbol, t.symbol, "rect");
				y = t.markerAttribs(p, p.selected && "select");
				let r = p.isInside !== !1;
				if (!m && r && ((y.width || 0) > 0 || p.hasImage) && (p.graphic = m = n.renderer.symbol(e, y.x, y.y, y.width, y.height, _ ? g : s).add(l), p.origin)) {
					let e = p.getOrigin(p.origin, y);
					i || (e.opacity = 0), m.attr(e), h = "animate";
				}
				if (m) {
					h === "animate" && m?.animate(y);
					let e = t.pointAttribs(p, i || !p.selected ? void 0 : "select");
					i ? a && m.css({ fill: e.fill }) : m[h](e), m.addClass(p.getClassName(), !0);
				}
			} else m && (p.graphic = m.destroy());
		}
	}
	markerAttribs(e, t) {
		let n = this.options, r = n.marker, i = e.marker || {}, o = i.symbol || r.symbol, s = {}, c, l, u = v(i.radius, r?.radius);
		t && (c = r?.states?.[t], l = i.states?.[t], u = v(l?.radius, c?.radius, u && u + (c?.radiusPlus || 0))), e.hasImage = o && o.indexOf("url") === 0, e.hasImage && (u = 0);
		let d = e.pos();
		return a(u) && d && (n.crisp && (d[0] = P(d[0], e.hasImage ? 0 : o === "rect" ? r?.lineWidth || 0 : 1)), s.x = d[0] - u, s.y = d[1] - u), u && (s.width = s.height = 2 * u), s;
	}
	pointAttribs(e, t) {
		let n = this.options, r = n.marker, i = e?.options, a = i?.marker || {}, o = i?.color, s = e?.color, c = e?.zone?.color, l, u, d = this.color, f, p, m = v(a.lineWidth, r.lineWidth), h = e?.isNull && n.nullInteraction ? 0 : 1;
		return d = o || c || s || d, f = a.fillColor || r.fillColor || d, p = a.lineColor || r.lineColor || d, t ||= "normal", t && (l = r.states[t] || {}, u = a.states && a.states[t] || {}, m = v(u.lineWidth, l.lineWidth, m + v(u.lineWidthPlus, l.lineWidthPlus, 0)), f = u.fillColor || l.fillColor || f, p = u.lineColor || l.lineColor || p, h = v(u.opacity, l.opacity, h)), {
			stroke: p,
			"stroke-width": m,
			fill: f,
			opacity: e?.condemned || e?.isInside === !1 ? 0 : h
		};
	}
	destroy(r) {
		let i = this, a = i.chart, o = /AppleWebKit\/533/.test(le.navigator.userAgent), s = i.data || [], c, l, d;
		for (u(i, "destroy", { keepEventsForUpdate: r }), this.removeEvents(r), (i.axisTypes || []).forEach(function(t) {
			d = i[t], d?.series && (e(d.series, i), d.isDirty = d.forceRedraw = !0);
		}), i.legendItem && i.chart.legend.destroyItem(i), l = s.length; l--;) s[l]?.destroy?.();
		for (let e of i.zones || []) n(e, void 0, !0);
		t(i.animationTimeout), m(i, function(e, t) {
			e instanceof ee && !e.survive && (c = o && t === "group" ? "hide" : "destroy", e[c]());
		}), a.hoverSeries === i && (a.hoverSeries = void 0), e(a.series, i), a.orderItems("series"), m(i, function(e, t) {
			(!r || t !== "hcEvents") && delete i[t];
		});
	}
	applyZones() {
		let e = this, { area: t, chart: n, graph: i, zones: o, points: s, xAxis: c, yAxis: l, zoneAxis: u } = e, { inverted: d, renderer: f } = n, p = this[`${u}Axis`], { isXAxis: m, len: h = 0, minPointOffset: g = 0 } = p || {}, _ = (i?.strokeWidth() || 0) / 2 + 1, y = (e, t = 0, n = 0) => {
			d && (n = h - n);
			let { translated: i = 0, lineClip: a, value: o } = e, s = n - i;
			a?.push([
				"L",
				t,
				Math.abs(s) < _ ? n - _ * (s < 0 || s === 0 && r(o) ? -1 : 1) : i
			]);
		};
		if (o.length && (i || t) && p && a(p.min)) {
			let e = p.getExtremes().max + g, n = (e) => {
				e.forEach((t, n) => {
					(t[0] === "M" || t[0] === "L") && (e[n] = [
						t[0],
						m ? h - t[1] : t[1],
						m ? t[2] : h - t[2]
					]);
				});
			};
			if (o.forEach((t) => {
				t.lineClip = [], t.translated = F(p.toPixels(v(t.value, e), !0) || 0, 0, h);
			}), i && !this.showLine && i.hide(), t && t.hide(), u === "y" && s.length < c.len) for (let e of s) {
				let { plotX: t, plotY: n, zone: r } = e, i = r && o[o.indexOf(r) - 1];
				r && y(r, t, n), i && y(i, t, n);
			}
			let r = [], a = p.toPixels(p.getExtremes().min - g, !0);
			o.forEach((e) => {
				let o = e.lineClip || [], s = Math.round(e.translated || 0);
				c.reversed && o.reverse();
				let { clip: u, simpleClip: p } = e, h = 0, g = 0, _ = c.len, v = l.len;
				m ? (h = s, _ = a) : (g = s, v = a);
				let y = [
					[
						"M",
						h,
						g
					],
					[
						"L",
						_,
						g
					],
					[
						"L",
						_,
						v
					],
					[
						"L",
						h,
						v
					],
					["Z"]
				], b = [
					y[0],
					...o,
					y[1],
					y[2],
					...r,
					y[3],
					y[4]
				];
				r = o.reverse(), a = s, d && (n(b), t && n(y)), u ? (u.animate({ d: b }), p?.animate({ d: y })) : (u = e.clip = f.path(b), t && (p = e.simpleClip = f.path(y))), i && e.graph?.clip(u), t && e.area?.clip(p);
			});
		} else e.visible && (i && i.show(), t && t.show());
	}
	plotGroup(e, t, n, i, a) {
		let o = this[e], s = !o, c = {
			visibility: n,
			zIndex: i || .1
		};
		return r(this.opacity) && !this.chart.styledMode && this.state !== "inactive" && (c.opacity = this.opacity), o || (this[e] = o = this.chart.renderer.g().add(a)), o.addClass("highcharts-" + t + " highcharts-series-" + this.index + " highcharts-" + this.type + "-series " + (r(this.colorIndex) ? "highcharts-color-" + this.colorIndex + " " : "") + (this.options.className || "") + (o.hasClass("highcharts-tracker") ? " highcharts-tracker" : ""), !0), o.attr(c)[s ? "attr" : "animate"](this.getPlotBox(t)), o;
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
		u(this, "getPlotBox", a);
		let { scale: o, translateX: s, translateY: c } = a;
		return {
			translateX: s,
			translateY: c,
			rotation: i ? 90 : 0,
			rotationOriginX: i ? o * (t.len - n.len) / 2 : 0,
			rotationOriginY: i ? o * (t.len + n.len) / 2 : 0,
			scaleX: i ? -o : o,
			scaleY: o
		};
	}
	removeEvents(e) {
		let { eventsToUnbind: t } = this;
		e || E(this), t.length &&= (t.forEach((e) => {
			e();
		}), 0);
	}
	render() {
		let e = this, { chart: t, options: n, hasRendered: r } = e, i = U(n.animation), a = e.visible ? "inherit" : "hidden", o = n.zIndex, s = t.seriesGroup, c = e.finishedAnimating ? 0 : i.duration;
		u(this, "render"), t.plotClipInner && (e.plotClipGroup ||= t.renderer.g().add(s)), e.plotGroup("group", "series", a, o, e.plotClipGroup || s), e.markerGroup = e.plotGroup("markerGroup", "markers", a, o, s), n.clip !== !1 && e.setClip(), c && e.animate?.(!0), e.drawGraph && (e.drawGraph(), e.applyZones()), e.visible && e.drawPoints(), e.drawDataLabels?.(), e.redrawPoints?.(), n.enableMouseTracking && e.drawTracker?.(), c && e.animate?.(), r || (c && i.defer && (c += i.defer), e.animationTimeout = O(() => {
			e.afterAnimate();
		}, c || 0)), e.isDirty = !1, e.hasRendered = !0, u(e, "afterRender");
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
		function i(e, n, r) {
			let a = e?.length, o, s;
			if (a) return o = t.kdAxisArray[n % r], e.sort((e, t) => (e[o] || 0) - (t[o] || 0)), s = Math.floor(a / 2), {
				point: e[s],
				left: i(e.slice(0, s), n + 1, r),
				right: i(e.slice(s + 1), n + 1, r)
			};
		}
		function a() {
			t.kdTree = i(t.getValidPoints(void 0, !t.directTouch, n?.nullInteraction), r, r), t.buildingKdTree = !1;
		}
		delete t.kdTree, O(a, n.kdNow || e?.type === "touchstart" ? 0 : 1);
	}
	searchKDTree(e, t, n, i, a) {
		let o = this, [s, c] = this.kdAxisArray, l = t ? "distX" : "dist", u = (o.options.findNearestPointBy || "").indexOf("y") > -1 ? 2 : 1, d = !!o.isBubble, f = i || ((e, t, n) => {
			let r = e[n] || 0, i = t[n] || 0;
			return [r === i && e.index > t.index || r < i ? e : t, !1];
		}), p = a || ((e, t) => e < t);
		function m(e, t) {
			let n = e[s], i = t[s], a = r(n) && r(i) ? n - i : null, o = e[c], l = t[c], u = r(o) && r(l) ? o - l : 0, f = d && t.marker?.radius || 0;
			t.dist = Math.sqrt((a && a * a || 0) + u * u) - f, t.distX = r(a) ? Math.abs(a) - f : Number.MAX_VALUE;
		}
		function h(e, t, n, r) {
			let i = t.point, a = o.kdAxisArray[n % r], s = i, c = !1;
			m(e, i);
			let u = (e[a] || 0) - (i[a] || 0) + (d && i.marker?.radius || 0), g = u < 0 ? "left" : "right", _ = u < 0 ? "right" : "left";
			if (t[g] && ([s, c] = f(i, h(e, t[g], n + 1, r), l)), t[_]) {
				let i = Math.sqrt(u * u), a = s[l];
				p(i, a, c) && (s = f(s, h(e, t[_], n + 1, r), l)[0]);
			}
			return s;
		}
		if (!this.kdTree && !this.buildingKdTree && this.buildKDTree(n), this.kdTree) return h(e, this.kdTree, u, u);
	}
	pointPlacementToXValue() {
		let { options: e, xAxis: t } = this, n = e.pointPlacement;
		return n === "between" && (n = t.reversed ? -.5 : .5), a(n) ? n * (e.pointRange || t.pointRange) : 0;
	}
	isPointInside(e) {
		let { chart: t, xAxis: n, yAxis: r } = this, { plotX: i = -1, plotY: a = -1 } = e;
		return a >= 0 && a <= (r ? r.len : t.plotHeight) && i >= 0 && i <= (n ? n.len : t.plotWidth);
	}
	drawTracker() {
		let e = this, t = e.options, n = t.trackByArea, r = [].concat((n ? e.areaPath : e.graphPath) || []), i = e.chart, a = i.pointer, o = i.renderer, s = i.options.tooltip?.snap || 0, c = () => {
			t.enableMouseTracking && i.hoverSeries !== e && e.onMouseOver();
		}, l = "rgba(192,192,192," + (ce ? 1e-4 : .002) + ")", d = e.tracker;
		d ? d.attr({ d: r }) : e.graph && (e.tracker = d = o.path(r).attr({
			visibility: e.visible ? "inherit" : "hidden",
			zIndex: 2
		}).addClass(n ? "highcharts-tracker-area" : "highcharts-tracker-line").add(e.group), i.styledMode || d.attr({
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
		})), u(this, "afterDrawTracker");
	}
	addPoint(e, t, n, i, a) {
		let o = this, s = o.options, { chart: c, data: l, dataTable: d, xAxis: f } = o, p = f?.hasNames && f.names, m = s.data, h = o.getColumn("x"), g, _;
		t = v(t, !0);
		let { applyOptions: y, optionsToObject: b } = o.pointClass.prototype, x = { series: o }, S = b.call(x, e);
		y.call(x, S, void 0, !1);
		let C = x.x;
		if (_ = h.length, o.requireSorting && C < h[_ - 1]) for (g = !0; _ && h[_ - 1] > C;) _--;
		d.setRow(S, _, !0), this.xColumn?.splice(_, 0, this.getX(C)), p && x.name && (p[C] = x.name), m?.splice(_, 0, e), (g || o.hasProcessedDataTable) && (o.data.splice(_, 0, null), o.processData()), s.legendType === "point" && o.generatePoints(), n && (l[0] && l[0].remove ? l[0].remove(!1) : ([
			l,
			m,
			this.xColumn
		].filter(r).forEach((e) => {
			e.shift();
		}), d.deleteRows(0))), a !== !1 && u(o, "addPoint", { point: x }), o.isDirty = !0, o.isDirtyData = !0, t && c.redraw(i);
	}
	removePoint(e, t, n) {
		let i = this, { chart: a, data: o, points: s, dataTable: c } = i, l = o[e], u = function() {
			[
				s?.length === o.length ? s : void 0,
				o,
				i.options.data,
				i.xColumn
			].filter(r).forEach((t) => {
				t.splice(e, 1);
			}), c.deleteRows(e), c.modified = c, l?.destroy(), i.isDirty = !0, i.isDirtyData = !0, t && a.redraw();
		};
		oe(n, a), t = v(t, !0), l ? l.firePointEvent("remove", null, u) : u();
	}
	remove(e, t, n, r) {
		let i = this, a = i.chart;
		function o() {
			i.destroy(r), a.isDirtyLegend = a.isDirtyBox = !0, a.linkSeries(r), v(e, !0) && a.redraw(t);
		}
		n === !1 ? o() : u(i, "remove", null, o);
	}
	update(e, t) {
		e = l(e, this.userOptions), u(this, "update", { options: e });
		let n = this, r = n.chart, a = n.userOptions, o = n.initialType || n.type, c = r.options.plotOptions, d = G[o].prototype, f = [
			"dataLabelsGroup",
			"dataLabelsGroups",
			"dataLabelsParentGroups",
			"group",
			"markerGroup",
			"plotClipGroup",
			"transformGroup"
		], p = [
			"dataGrouping",
			"pointStart",
			"pointInterval",
			"pointIntervalUnit",
			"keys"
		], m = n.finishedAnimating && { animation: !1 }, h = {}, g = e.data || e.dataTable, _, y, b = i.keepProps.slice(), S = e.type || a.type || r.options.chart.type, C = !(this.hasDerivedData || S && S !== this.type || e.keys !== void 0 || e.pointStart !== void 0 || e.pointInterval !== void 0 || e.relativeXValue !== void 0 || e.joinBy || e.mapData || p.some((e) => n.hasOptionChanged(e)));
		S ||= o, C ? (b.push.apply(b, i.keepPropsForPoints), e.visible !== !1 && (b.push("area", "graph"), "zones" in e || b.push("zones")), n.parallelArrays.forEach(function(e) {
			b.push(e + "Data");
		}), g && (e.dataSorting && x(n.options.dataSorting, e.dataSorting), this.setData(g, !1))) : this.dataTable.modified = this.dataTable, e.dataLabels && a.dataLabels && (e.dataLabels = this.mergeArrays(a.dataLabels, e.dataLabels)), e = s(a, {
			index: a.index === void 0 ? n.index : a.index,
			pointStart: c?.series?.pointStart ?? a.pointStart
		}, !C && { data: n.options.data }, e, m), C && e.data && (e.data = n.options.data), b = f.concat(b), b.forEach(function(e) {
			b[e] = n[e], delete n[e];
		});
		let w = !1;
		if (G[S]) {
			if (w = S !== n.type, n.remove(!1, !1, !1, !0), w) if (r.propFromSeries(), Object.setPrototypeOf) Object.setPrototypeOf(n, G[S].prototype);
			else {
				let e = Object.hasOwnProperty.call(n, "hcEvents") && n.hcEvents;
				for (y in d) n[y] = void 0;
				x(n, G[S].prototype), e ? n.hcEvents = e : delete n.hcEvents;
			}
		} else D(17, !0, r, { missingModuleFor: S });
		if (b.forEach(function(e) {
			n[e] = b[e];
		}), n.init(r, e), C && this.points) {
			_ = n.options, _.visible === !1 ? (h.graphic = 1, h.dataLabel = 1) : (this.hasMarkerChanged(_, a) && (h.graphic = 1), n.hasDataLabels?.() || (h.dataLabel = 1));
			for (let e of this.points) e?.series && (e.resolveColor(), Object.keys(h).length && e.destroyElements(h), _.showInLegend === !1 && e.legendItem && r.legend.destroyItem(e));
		}
		n.initialType = o, r.linkSeries(), w && n.linkedSeries.length && (n.isDirtyData = !0), u(this, "afterUpdate"), v(t, !0) && r.redraw(C ? void 0 : !1);
	}
	setName(e) {
		this.name = this.options.name = this.userOptions.name = e, this.chart.isDirtyLegend = !0;
	}
	hasOptionChanged(e) {
		let t = this.chart, n = this.options[e], i = t.options.plotOptions, a = this.userOptions[e], o = v(i?.[this.type]?.[e], i?.series?.[e]);
		return a && !r(o) ? n !== a : n !== v(o, n);
	}
	onMouseOver() {
		let e = this, t = e.chart, n = t.hoverSeries;
		t.pointer?.setHoverChartIndex(), n && n !== e && n.onMouseOut(), u(e, "mouseOver"), e.setState("hover"), t.hoverSeries = e;
	}
	onMouseOut() {
		let e = this, t = e.chart, n = t.tooltip, r = t.hoverPoint;
		t.hoverSeries = null, r && r.onMouseOut(), u(e, "mouseOut"), n && !e.stickyTracking && (!n.shared || e.noSharedTooltip) && n.hide(), t.series.forEach(function(e) {
			e.setState("", !0);
		});
	}
	setState(e, t) {
		let n = this, { graph: r, options: i } = n, { inactiveOtherPoints: o, states: s } = i, c = v(s?.[e || "normal"]?.animation, n.chart.options.chart.animation), { lineWidth: l, opacity: u } = i;
		if (e ||= "", n.state !== e && ([
			n.group,
			n.markerGroup,
			...n.dataLabelsGroups || []
		].forEach(function(t) {
			t && (n.state && t.removeClass("highcharts-series-" + n.state), e && t.addClass("highcharts-series-" + e));
		}), n.state = e, !n.chart.styledMode)) {
			if (s[e]?.enabled === !1) return;
			if (e && (l = s[e].lineWidth || l + (s[e].lineWidthPlus || 0), u = v(s[e].opacity, u)), r && !r.dashstyle && a(l)) for (let e of [r, ...this.zones.map((e) => e.graph)]) e?.animate({ "stroke-width": l }, c);
			o || [
				n.group,
				n.markerGroup,
				...n.dataLabelsGroups || [],
				n.labelBySeries
			].forEach(function(e) {
				e?.animate({ opacity: u }, c);
			});
		}
		t && o && n.points && n.setAllPointsToState(e || void 0);
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
		}), i && (r.isDirtyBox = !0), u(n, o), t !== !1 && r.redraw();
	}
	show() {
		this.setVisible(!0);
	}
	hide() {
		this.setVisible(!1);
	}
	select(e) {
		let t = this;
		t.selected = e = this.options.selected = e === void 0 ? !t.selected : e, t.checkbox && (t.checkbox.checked = e), u(t, e ? "select" : "unselect");
	}
	shouldShowTooltip(e, t, n = {}) {
		return n.series = this, n.visiblePlotOnly = !0, this.chart.isInsidePlot(e, t, n);
	}
	drawLegendSymbol(e, t) {
		let n = this.chart.renderer, r = this.options.legendSymbol || "rectangle", i = t.legendItem || {}, { options: a, symbolHeight: o, symbolWidth: s } = e, c = a.squareSymbol, l = c ? o : s, u = c ? (s - o) / 2 : 0, d = (e.baseline || 0) - o + 1, f = l, p = o, m = a.symbolRadius ?? o, h = r === "rectangle" ? n.rect(u, d, f, p, m) : n.symbols[r] && n.symbol(r, u, d, f, p, { r: m });
		h ? i.symbol = h.addClass("highcharts-point").attr({ zIndex: 3 }).add(i.group) : H[r]?.call(this, e, t);
	}
};
K.defaultOptions = ae, K.types = k.seriesTypes, K.registerType = k.registerSeriesType, K.keepProps = [
	"colorIndex",
	"eventOptions",
	"navigatorSeries",
	"symbolIndex",
	"baseSeries"
], K.keepPropsForPoints = [
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
], x(K.prototype, {
	axisTypes: ["xAxis", "yAxis"],
	coll: "series",
	colorCounter: 0,
	directTouch: !1,
	invertible: !0,
	isCartesian: !0,
	kdAxisArray: ["clientX", "plotY"],
	parallelArrays: ["x", "y"],
	pointClass: C,
	requireSorting: !0,
	sorted: !0
}), k.series = K;
//#endregion
//#region node_modules/highcharts/es-modules/Core/Axis/Stacking/StackItem.js
var { format: de } = b, { series: fe } = k, pe = class {
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
		n(this, this.axis);
	}
	render(e) {
		let t = this.axis.chart, n = this.options, r = n.format, i = (r ? de(r, this, t) : n.formatter?.call(this, this)) || "";
		if (this.label) this.label.attr({
			text: i,
			visibility: "hidden"
		});
		else {
			this.label = t.renderer.label(i, null, void 0, n.shape, void 0, void 0, n.useHTML, !1, "stack-labels");
			let r = {
				r: n.borderRadius || 0,
				text: i,
				padding: v(n.padding, 5),
				visibility: "hidden"
			};
			t.styledMode || (r.fill = n.backgroundColor, r.stroke = n.borderColor, r["stroke-width"] = n.borderWidth, this.label.css(n.style || {})), this.label.attr(r), this.label.added || this.label.add(e);
		}
		this.label.labelrank = t.plotSizeY, u(this, "afterRender");
	}
	setOffset(e, t, n, r, o, s) {
		let { alignOptions: c, axis: l, label: d, options: f, textAlign: p } = this, m = l.chart, h = this.getStackBox({
			xOffset: e,
			width: t,
			boxBottom: n,
			boxTop: r,
			defaultX: o,
			xAxis: s
		}), { verticalAlign: g } = c;
		if (d && h) {
			let e = d.getBBox(void 0, 0), t = d.padding, n = v(f.overflow, "justify") === "justify", r;
			c.x = f.x || 0, c.y = f.y || 0;
			let { x: o, y: s } = this.adjustStackPosition({
				labelBox: e,
				verticalAlign: g,
				textAlign: p
			});
			h.x -= o, h.y -= s, d.align(c, !1, h), r = m.isInsidePlot(d.alignAttr.x + c.x + o, d.alignAttr.y + c.y + s), r || (n = !1), n && fe.prototype.justifyDataLabel.call(l, d, c, d.alignAttr, e, h), d.attr({
				x: d.alignAttr.x,
				y: d.alignAttr.y,
				rotation: f.rotation,
				rotationOriginX: e.width * i(f.textAlign || "center"),
				rotationOriginY: e.height / 2
			}), v(!n && f.crop, !0) && (r = a(d.x) && a(d.y) && m.isInsidePlot(d.x - t + (d.width || 0), d.y) && m.isInsidePlot(d.x + t, d.y)), d[r ? "show" : "hide"]();
		}
		u(this, "afterSetOffset", {
			xOffset: e,
			width: t
		});
	}
	adjustStackPosition({ labelBox: e, verticalAlign: t, textAlign: n }) {
		return {
			x: e.width / 2 + e.width / 2 * (2 * i(n) - 1),
			y: e.height / 2 * 2 * (1 - i(t))
		};
	}
	getStackBox(e) {
		let t = this, n = this.axis, r = n.chart, { boxTop: i, defaultX: o, xOffset: s, width: c, boxBottom: l } = e, u = n.stacking.usePercentage ? 100 : v(i, this.total, 0), d = n.toPixels(u), f = e.xAxis || r.xAxis[0], p = v(o, f.translate(this.x)) + s, m = n.toPixels(l || a(n.min) && n.logarithmic && n.logarithmic.lin2log(n.min) || 0), h = Math.abs(d - m), g = r.inverted, _ = t.isNegative;
		return g ? {
			x: (_ ? d : d - h) - r.plotLeft,
			y: f.height - p - c + f.top - r.plotTop,
			width: h,
			height: c
		} : {
			x: p + f.transB - r.plotLeft,
			y: (_ ? d - h : d) - r.plotTop,
			width: c,
			height: h
		};
	}
}, me = {
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
}, { animObject: he } = S, { parse: ge } = y, { noop: _e } = M, q = class extends K {
	animate(e) {
		let t = this, n = this.yAxis, r = n.pos, i = n.reversed, a = t.options, { clipOffset: o, inverted: s } = this.chart, c = {}, l = s ? "translateX" : "translateY", u, d;
		e && o ? (c.scaleY = .001, d = F(n.toPixels(a.threshold || 0), r, r + n.len), s ? (d += i ? -Math.floor(o[+!!s]) : Math.ceil(o[s ? 3 : 2]), c.translateX = d - n.len) : (d += i ? Math.ceil(o[+!!s]) : -Math.floor(o[s ? 3 : 2]), c.translateY = d), t.clipBox && t.setClip(), t.group.attr(c)) : (u = Number(t.group.attr(l)), t.group.animate({ scaleY: 1 }, x(he(t.options.animation), { step: function(e, n) {
			t.group && (c[l] = u + n.pos * (r - u), t.group.attr(c));
		} })));
	}
	init(e, t) {
		super.init.apply(this, arguments);
		let n = this;
		e = n.chart, e.hasRendered && e.series.forEach(function(e) {
			e.type === n.type && (e.isDirty = !0);
		});
	}
	getColumnMetrics() {
		let e = this, t = e.options, n = e.xAxis, r = e.yAxis, i = n.options.reversedStacks, a = n.reversed && !i || !n.reversed && i, o = {}, s, c = 0;
		t.grouping === !1 ? c = 1 : e.chart.series.forEach(function(t) {
			let n = t.yAxis, i = t.options, a;
			t.type === e.type && t.reserveSpace() && r.len === n.len && r.pos === n.pos && (i.stacking && i.stacking !== "group" ? (s = t.stackKey, o[s] === void 0 && (o[s] = c++), a = o[s]) : i.grouping !== !1 && (a = c++), t.columnIndex = a);
		});
		let l = Math.min(Math.abs(n.transA) * (!n.brokenAxis?.hasBreaks && n.ordinal?.slope || t.pointRange || n.closestPointRange || n.tickInterval || 1), n.len), u = l * t.groupPadding, d = (l - 2 * u) / (c || 1), f = Math.min(t.maxPointWidth || n.len, v(t.pointWidth, d * (1 - 2 * t.pointPadding)));
		return e.columnMetrics = {
			width: f,
			offset: (d - f) / 2 + (u + ((e.columnIndex || 0) + +!!a) * d - l / 2) * (a ? -1 : 1),
			paddedWidth: d,
			columnCount: c
		}, e.columnMetrics;
	}
	crispCol(e, t, n, r) {
		let i = this.borderWidth, a = this.chart.inverted, o = P(t + r, i, a);
		if (t = P(t, i, a), r = o - t, this.options.crisp) {
			let t = P(e + n, i);
			e = P(e, i), n = t - e;
		}
		return {
			x: e,
			y: t,
			width: n,
			height: r
		};
	}
	adjustForMissingColumns(e, t, n, i) {
		if (!n.isNull && i.columnCount > 1) {
			let o = this.xAxis.series.filter((e) => e.visible).map((e) => e.index), s = 0, c = 0;
			m(this.xAxis.stacking?.stacks, (e) => {
				let t = typeof n.x == "number" ? e[n.x.toString()]?.points : void 0, i = t?.[this.index], l = {};
				if (t && f(i)) {
					let e = this.index, n = Object.keys(t).filter((e) => !e.match(",") && t[e] && t[e].length > 1).map(parseFloat).filter((e) => o.indexOf(e) !== -1).filter((t) => {
						let n = this.chart.series[t].options, i = n.stacking && n.stack;
						if (r(i)) {
							if (a(l[i])) return e === t && (e = l[i]), !1;
							l[i] = t;
						}
						return !0;
					}).sort((e, t) => t - e);
					s = n.indexOf(e), c = n.length;
				}
			}), s = this.xAxis.reversed ? c - 1 - s : s;
			let l = (c - 1) * i.paddedWidth + t;
			e = (n.plotX || 0) + l / 2 - t - s * i.paddedWidth;
		}
		return e;
	}
	translate() {
		let e = this, t = e.chart, n = e.options, i = e.dense = e.closestPointRange * e.xAxis.transA < 2, o = e.borderWidth = n.borderWidth ?? +!i, s = e.xAxis, c = e.yAxis, l = n.threshold, d = n.minPointLength ?? 5, f = e.getColumnMetrics(), p = f.width, m = e.pointXOffset = f.offset, h = e.dataMin, g = e.dataMax, _ = e.translatedThreshold = c.getThreshold(l), v = e.barW = Math.max(p, 1 + 2 * o);
		n.pointPadding && n.crisp && (v = Math.ceil(v)), K.prototype.translate.apply(e), e.points.concat(e.condemnedPoints).forEach(function(i) {
			let o = i.yBottom ?? _, u = 999 + Math.abs(o), y = i.plotX || 0, b = F(i.plotY, -u, c.len + u), x, S = Math.min(b, o), C = Math.max(b, o) - S, w = p, T = y + m, E = v;
			d && Math.abs(C) < d && (C = d, x = !c.reversed && !i.negative || c.reversed && i.negative, a(l) && a(g) && i.y === l && g <= l && (c.min || 0) < l && (h !== g || (c.max || 0) <= l) && (x = !x, i.negative = !i.negative), S = Math.abs(S - _) > d ? o - (x ? d : 0) : _ - (x ? d : 0)), r(i.options.pointWidth) && (w = E = Math.ceil(i.options.pointWidth), T -= Math.round((w - p) / 2)), n.centerInCategory && (T = e.adjustForMissingColumns(T, w, i, f)), i.barX = T, i.pointWidth = w, i.tooltipPos = t.inverted ? [
				F(c.len + c.pos - t.plotLeft - b, c.pos - t.plotLeft, c.len + c.pos - t.plotLeft),
				s.len + s.pos - t.plotTop - T - E / 2,
				C
			] : [
				s.left - t.plotLeft + T + E / 2,
				F(b + c.pos - t.plotTop, c.pos - t.plotTop, c.len + c.pos - t.plotTop),
				C
			], i.shapeType = e.pointClass.prototype.shapeType || "roundedRect", i.shapeArgs = e.crispCol(T, S, E, i.isNull ? 0 : C);
		}), u(this, "afterColumnTranslate");
	}
	drawGraph() {
		this.group[this.dense ? "addClass" : "removeClass"]("highcharts-dense-data");
	}
	pointAttribs(e, t) {
		let n = this.options, r = this.pointAttrToOptions || {}, i = r.stroke || "borderColor", a = r["stroke-width"] || "borderWidth", o, c, l, u = e && e.color || this.color, d = e && e[i] || n[i] || u, f = e && e.options.dashStyle || n.dashStyle, p = e?.[a] ?? n[a] ?? this[a] ?? 1, m = e?.isNull && n.nullInteraction ? 0 : e?.opacity ?? n.opacity ?? 1;
		e && this.zones.length && (c = e.getZone(), u = e.options.color || c && (c.color || e.nonZonedColor) || this.color, c && (d = c.borderColor || d, f = c.dashStyle || f, p = c.borderWidth || p)), t && e && (o = s(n.states[t], e.options.states?.[t] || {}), l = o.brightness, u = o.color || l !== void 0 && ge(u).brighten(o.brightness).get() || u, d = o[i] || d, p = o[a] || p, f = o.dashStyle || f, m = v(o.opacity, m));
		let h = {
			fill: u,
			stroke: d,
			"stroke-width": p,
			opacity: e?.condemned ? 0 : m
		};
		return f && (h.dashstyle = f), h;
	}
	drawPoints(e) {
		e ||= this.points.concat(this.condemnedPoints);
		let t = this, n = this.chart, r = t.options, i = r.nullInteraction, { styledMode: o, renderer: c } = n, l = r.animationLimit || 250, u;
		e.forEach(function(e) {
			let d = e.plotY, f = e.graphic, p = !!f, m = f && n.pointCount < l ? "animate" : "attr";
			if (a(d) && (e.y !== null || i)) {
				if (u = e.shapeArgs, f && e.hasNewShapeType() && (f = f.destroy()), !f) {
					let r = u;
					e.origin && n.pointCount < l && (r = s(u, e.getOrigin(e.origin, u)), o || (r.opacity = 0), p = !0, m = "animate"), e.graphic = f = c[e.shapeType](r).add(e.group || t.group);
				}
				p && f[m](s(u)), o || f[m](t.pointAttribs(e, e.selected && "select")).shadow(e.allowShadow !== !1 && r.shadow), f.addClass(e.getClassName(), !0).attr({ visibility: e.visible ? "inherit" : "hidden" });
			} else f && (e.graphic = f.destroy());
		});
	}
	drawTracker(e = this.points) {
		let t = this, n = t.chart, r = n.pointer, i = function(e) {
			r?.normalize(e);
			let i = r?.getPointFromEvent(e);
			r && i && t.options.enableMouseTracking && (n.isInsidePlot(e.chartX - n.plotLeft, e.chartY - n.plotTop, { visiblePlotOnly: !0 }) || t.allowOutsidePlotInteraction && r?.inClass(e.target, "highcharts-point") || r?.inClass(e.target, "highcharts-data-label")) && (r.isDirectTouch = !0, i.onMouseOver(e));
		}, a;
		e.forEach(function(e) {
			a = f(e.dataLabels) ? e.dataLabels : e.dataLabel ? [e.dataLabel] : [], e.graphic && (e.graphic.element.point = e), a.forEach(function(t) {
				(t.div || t.element).point = e;
			});
		}), t._hasTracking ||= (t.trackerGroups?.reduce((e, n) => (n === "dataLabelsGroup" ? e.push(...t.dataLabelsGroups || []) : e.push(t[n]), e), []).forEach((e) => {
			e && (e.addClass("highcharts-tracker").on("mouseover", i).on("mouseout", function(e) {
				r?.onTrackerMouseOut(e);
			}).on("touchstart", i), !n.styledMode && t.options.cursor && e.css({ cursor: t.options.cursor }));
		}), !0), u(this, "afterDrawTracker");
	}
	remove() {
		let e = this, t = e.chart;
		t.hasRendered && t.series.forEach(function(t) {
			t.type === e.type && (t.isDirty = !0);
		}), K.prototype.remove.apply(e, arguments);
	}
};
q.defaultOptions = s(K.defaultOptions, me), x(q.prototype, {
	directTouch: !0,
	getSymbol: _e,
	negStacks: !0,
	trackerGroups: ["group", "dataLabelsGroup"]
}), k.registerSeriesType("column", q);
//#endregion
//#region node_modules/highcharts/es-modules/Series/CenteredUtilities.js
var { deg2rad: J } = M, Y;
(function(e) {
	function t() {
		let e = this.options, t = this.chart, n = 2 * (e.slicedOffset || 0), r = t.plotWidth - 2 * n, i = t.plotHeight - 2 * n, o = e.center, s = Math.min(r, i), c = e.thickness, l, d = e.size, f = e.innerSize || 0, p, m;
		typeof d == "string" && (d = parseFloat(d)), typeof f == "string" && (f = parseFloat(f));
		let h = [
			v(o?.[0], "50%"),
			v(o?.[1], "50%"),
			v(d && d < 0 ? void 0 : e.size, "100%"),
			v(f && f < 0 ? void 0 : e.innerSize || 0, "0%")
		];
		for (p = 0; p < 4; ++p) m = h[p], l = p < 2 || p === 2 && /%$/.test(m), h[p] = w(m, [
			r,
			i,
			s,
			h[2]
		][p]) + (l ? n : 0);
		return h[3] > h[2] && (h[3] = h[2]), a(c) && c * 2 < h[2] && c > 0 && (h[3] = h[2] - c * 2), u(this, "afterGetCenter", { positions: h }), h;
	}
	e.getCenter = t;
	function n(e, t) {
		let n = a(e) ? e : 0, r = a(t) && t > n && t - n < 360 ? t : n + 360;
		return {
			start: J * (n + -90),
			end: J * (r + -90)
		};
	}
	e.getStartAndEndRadians = n;
})(Y ||= {});
var ve = Y, { defaultOptions: ye } = g, { noop: X } = M, be = {
	radius: 0,
	scope: "stack",
	where: void 0
}, Z = X, Q = X;
function xe(e, t, n) {
	let r = e[t], i = e[t + 1];
	i[0] === "Z" && (i = e[0]);
	let a, o, s;
	if ((r[0] === "M" || r[0] === "L") && i[0] === "A" ? (a = r, o = i, s = !0) : r[0] === "A" && (i[0] === "M" || i[0] === "L") && (a = i, o = r), a && o && o.params) {
		let r = o[1], i = o[5], c = o.params, { start: l, end: u, cx: d, cy: f } = c, p = i ? r - n : r + n, m = p ? Math.asin(n / p) : 0, h = i ? m : -m, g = Math.cos(m) * p;
		s ? (c.start = l + h, a[1] = d + g * Math.cos(l), a[2] = f + g * Math.sin(l), e.splice(t + 1, 0, [
			"A",
			n,
			n,
			0,
			0,
			1,
			d + r * Math.cos(c.start),
			f + r * Math.sin(c.start)
		])) : (c.end = u - h, o[6] = d + r * Math.cos(c.end), o[7] = f + r * Math.sin(c.end), e.splice(t + 1, 0, [
			"A",
			n,
			n,
			0,
			0,
			1,
			d + g * Math.cos(u),
			f + g * Math.sin(u)
		])), o[4] = Math.abs(c.end - c.start) < Math.PI ? 0 : 1;
	}
}
function Se(e, t, n, r, i = {}) {
	let a = Z(e, t, n, r, i), { brStart: o = !0, brEnd: s = !0, innerR: c = 0, r: l = n, start: u = 0, end: d = 0 } = i;
	if (i.open || !i.borderRadius) return a;
	let f = d - u, p = Math.sin(f / 2), m = Math.max(Math.min(w(i.borderRadius || 0, l - c), (l - c) / 2, l * p / (1 + p)), 0), h = Math.min(m, f / Math.PI * 2 * c), g = a.length - 1;
	for (; g--;) !o && (g === 0 || g === 3) || !s && (g === 1 || g === 2) || xe(a, g, g > 1 ? h : m);
	return a;
}
function Ce() {
	if (this.options.borderRadius && !(this.chart.is3d && this.chart.is3d())) {
		let { options: e, yAxis: t } = this, n = e.stacking === "percent", r = ye.plotOptions?.[this.type]?.borderRadius, i = $(e.borderRadius, c(r) ? r : {}), a = t.options.reversed;
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
				let m = Math.min(w(i.radius, s), s / 2, p === "all" ? d / 2 : Infinity) || 0;
				p === "end" && (f && (u -= m), d += m), x(o, {
					brBoxHeight: d,
					brBoxY: u,
					r: m
				});
			}
		}
	}
}
function we(e, t, n) {
	let r = e.types.pie;
	if (!t.symbolCustomAttribs.includes("borderRadius")) {
		let i = n.prototype.symbols;
		h(e, "afterColumnTranslate", Ce, { order: 9 }), h(r, "afterTranslate", Te), t.symbolCustomAttribs.push("borderRadius", "brBoxHeight", "brBoxY", "brEnd", "brStart"), Z = i.arc, Q = i.roundedRect, i.arc = Se, i.roundedRect = Ee;
	}
}
function $(e, t) {
	return c(e) || (e = { radius: e || 0 }), s(be, t, e);
}
function Te() {
	let e = $(this.options.borderRadius);
	for (let t of this.points) {
		let n = t.shapeArgs;
		n && (n.borderRadius = w(e.radius, (n.r || 0) - (n.innerR || 0)));
	}
}
function Ee(e, t, n, r, i = {}) {
	let a = Q(e, t, n, r, i), { r: o = 0, brBoxHeight: s = r, brBoxY: c = t } = i, l = t - c, u = c + s - (t + r), d = l - o > -.1 ? 0 : o, f = u - o > -.1 ? 0 : o, p = Math.max(d && l, 0), m = Math.max(f && u, 0), h = [e + d, t], g = [e + n - d, t], _ = [e + n, t + d], v = [e + n, t + r - f], y = [e + n - f, t + r], b = [e + f, t + r], x = [e, t + r - f], S = [e, t + d], C = (e, t) => Math.sqrt(e ** 2 - t ** 2);
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
//#endregion
export { pe as a, B as c, q as i, R as l, $ as n, K as o, ve as r, H as s, we as t };

//# sourceMappingURL=BorderRadius-BO3V-8GG.js.map