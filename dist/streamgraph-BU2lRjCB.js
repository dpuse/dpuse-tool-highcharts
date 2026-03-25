import { t as e } from "./chunk-efA98nb6.js";
//#region node_modules/highcharts/modules/streamgraph.js
var t = /* @__PURE__ */ e(((e, t) => {
	(function(n, r) {
		typeof e == "object" && typeof t == "object" ? t.exports = r(n._Highcharts, n._Highcharts.SeriesRegistry) : typeof define == "function" && define.amd ? define("highcharts/modules/streamgraph", ["highcharts/highcharts"], function(e) {
			return r(e, e.SeriesRegistry);
		}) : typeof e == "object" ? e["highcharts/modules/streamgraph"] = r(n._Highcharts, n._Highcharts.SeriesRegistry) : n.Highcharts = r(n.Highcharts, n.Highcharts.SeriesRegistry);
	})("u" < typeof window ? e : window, (e, t) => (() => {
		var n = {
			512: (e) => {
				e.exports = t;
			},
			944: (t) => {
				t.exports = e;
			}
		}, r = {};
		function i(e) {
			var t = r[e];
			if (t !== void 0) return t.exports;
			var a = r[e] = { exports: {} };
			return n[e](a, a.exports, i), a.exports;
		}
		i.n = (e) => {
			var t = e && e.__esModule ? () => e.default : () => e;
			return i.d(t, { a: t }), t;
		}, i.d = (e, t) => {
			for (var n in t) i.o(t, n) && !i.o(e, n) && Object.defineProperty(e, n, {
				enumerable: !0,
				get: t[n]
			});
		}, i.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t);
		var a = {};
		i.d(a, { default: () => h });
		var o = i(944), s = i.n(o), c = i(512), l = i.n(c);
		let { areaspline: u } = l().seriesTypes, { addEvent: d, merge: f, extend: p } = s();
		class m extends u {
			streamStacker(e, t, n) {
				e[0] -= t.total / 2, e[1] -= t.total / 2, this.stackedYData && (this.stackedYData[n] = Math.max.apply(0, e));
			}
		}
		m.defaultOptions = f(u.defaultOptions, {
			fillOpacity: 1,
			lineWidth: 0,
			marker: { enabled: !1 },
			stacking: "stream"
		}), d(m, "afterGetExtremes", (e) => {
			e.dataExtremes.dataMin = -e.dataExtremes.dataMax;
		}), p(m.prototype, { negStacks: !1 }), l().registerSeriesType("streamgraph", m);
		let h = s();
		return a.default;
	})());
}));
//#endregion
export default t();
