// References:
// Dark mode: https://www.highcharts.com/docs/chart-design-and-style/themes#dark-mode-in-highcharts-the-adaptive-theme.
// Templating: https://www.highcharts.com/docs/chart-concepts/templating.

// ── External Dependencies & Registrations
import 'highcharts/themes/adaptive';
import 'highcharts/modules/accessibility';
import 'highcharts/modules/pattern-fill';
import Highcharts from 'highcharts';
import type { Chart, Options, SeriesOptionsType } from 'highcharts';

// ── DPUse Framework
import type {
    PresentationCartesianTypeId,
    PresentationPolarTypeId,
    PresentationRangeTypeId,
    PresentationView,
    PresentationVisualContentConfig
} from '@dpuse/dpuse-shared/component/presentation';

// ── Types ────────────────────────────────────────────────────────────────────────────────────────────────────────────

export interface HighchartsView extends PresentationView {
    chart: Chart;
}

// ── Constants ────────────────────────────────────────────────────────────────────────────────────────────────────────

const CARTESIAN_SERIES_TYPE_MAP: Record<PresentationCartesianTypeId, 'area' | 'areaspline' | 'bar' | 'column' | 'line' | 'spline'> = {
    areaLine: 'area',
    areaSpline: 'areaspline',
    bar: 'bar',
    column: 'column',
    line: 'line',
    spline: 'spline'
};
const POLAR_SERIES_TYPE_MAP: Record<PresentationPolarTypeId, 'area' | 'arearange' | 'areaspline' | 'column' | 'columnrange' | 'line' | 'spline'> = {
    areaLine: 'area',
    areaRange: 'arearange',
    areaSpline: 'areaspline',
    column: 'column',
    columnRange: 'columnrange',
    line: 'line',
    spline: 'spline'
};
const RANGE_SERIES_TYPE_MAP: Record<PresentationRangeTypeId, 'arearange' | 'areasplinerange' | 'columnrange'> = {
    areaLine: 'arearange',
    areaSpline: 'areasplinerange',
    bar: 'columnrange',
    column: 'columnrange'
};
const HIGHCHARTS_ID = 'highcharts';

// ── State ────────────────────────────────────────────────────────────────────────────────────────────────────────────

const state = {
    isDependencyWheelAndSankeyModulesLoaded: false,
    isHighchartsMoreLoaded: false,
    isStreamgraphModuleLoaded: false
};

// ── Tools ────────────────────────────────────────────────────────────────────────────────────────────────────────────

export class HighchartsTool {
    // Actions - Render cartesian chart.
    renderCartesianChart(typeId: PresentationCartesianTypeId, contentConfig: PresentationVisualContentConfig, renderTo: HTMLElement, callback?: () => void): HighchartsView {
        const type = CARTESIAN_SERIES_TYPE_MAP[typeId];
        const series: SeriesOptionsType[] = Array.from(contentConfig.data.measures, (measure) => ({ type, name: measure.name, data: measure.values }));
        const options: Options = {
            chart: { type },
            plotOptions: { series: { borderColor: '#333' } },
            series,
            title: { text: contentConfig.title.text },
            xAxis: { categories: contentConfig.data.dimension.values.map((value) => value.label?.text ?? '') },
            yAxis: { title: { text: contentConfig.title.text } }
        };
        const chart = Highcharts.chart(renderTo, options, callback);
        return {
            chart,
            resize: () => {
                chart.reflow();
            },
            vendorId: HIGHCHARTS_ID
        };
    }

    // Actions - Render.
    async render(options: Options, renderTo: HTMLElement, callback?: () => void): Promise<unknown> {
        await this.loadHighchartsMore();

        const chart = Highcharts.chart(renderTo, options, callback);
        return {
            chart,
            resize: () => {
                chart.reflow();
            },
            vendorId: HIGHCHARTS_ID
        };
    }

    // Actions - Render period flow & boundaries chart.
    async renderPeriodFlowBoundaries(contentConfig: PresentationVisualContentConfig, renderTo: HTMLElement, callback?: () => void): Promise<unknown> {
        await this.loadHighchartsMore();

        const series: SeriesOptionsType[] = Array.from(contentConfig.data.measures, (measure) => ({ type: 'waterfall', name: measure.name, data: measure.values }));

        // const series: SeriesOptionsType[] = [];
        // const data = [];
        // for (let index = 0; index < content.data.categoryLabels.length; index++) {
        //     data.push([content.data.measures[0].values[index][0], content.data.measures[1].values[index][0]]);
        // }
        // series.push({ type: type.options.highchartsType, name: 'Unknown', data });

        const options: Options = {
            chart: { type: 'waterfall' },
            plotOptions: { series: { borderColor: '#333' } },
            series,
            title: { text: contentConfig.title.text },
            xAxis: { categories: contentConfig.data.dimension.values.map((value) => value.label?.text ?? '') },
            yAxis: { title: { text: contentConfig.title.text } }
        };

        const chart = Highcharts.chart(renderTo, options, callback);
        return {
            chart,
            resize: () => {
                chart.reflow();
            },
            vendorId: HIGHCHARTS_ID
        };
    }

    // Actions - Render polar chart.
    async renderPolarChart(typeId: PresentationPolarTypeId, contentConfig: PresentationVisualContentConfig, renderTo: HTMLElement, callback?: () => void): Promise<HighchartsView> {
        await this.loadHighchartsMore();

        const type = POLAR_SERIES_TYPE_MAP[typeId];
        const series: SeriesOptionsType[] = Array.from(contentConfig.data.measures, (measure) => ({ type, name: measure.name, data: measure.values }));

        const options: Options = {
            chart: { polar: true },
            plotOptions: { series: { borderColor: '#333' } },
            series,
            title: { text: contentConfig.title.text },
            xAxis: { categories: contentConfig.data.dimension.values.map((value) => value.label?.text ?? '') },
            yAxis: { title: { text: contentConfig.title.text } }
        };

        const chart = Highcharts.chart(renderTo, options, callback);
        return {
            chart,
            resize: () => {
                chart.reflow();
            },
            vendorId: HIGHCHARTS_ID
        };
    }

    // Actions - Render range chart.
    async renderRangeChart(typeId: PresentationRangeTypeId, contentConfig: PresentationVisualContentConfig, renderTo: HTMLElement, callback?: () => void): Promise<HighchartsView> {
        await this.loadHighchartsMore();

        const type = RANGE_SERIES_TYPE_MAP[typeId];
        const series: SeriesOptionsType[] = [];
        const data = [];
        for (let index = 0; index < contentConfig.data.dimension.values.length; index++) {
            data.push([contentConfig.data.measures[0]?.values[index]?.[0] ?? 0, contentConfig.data.measures[1]?.values[index]?.[0] ?? 0]);
        }
        series.push({ type, name: 'Unknown', data });

        const options: Options = {
            chart: { type, inverted: typeId === 'bar' ? true : false },
            plotOptions: { series: { borderColor: '#333' } },
            series,
            title: { text: contentConfig.title.text },
            xAxis: { categories: contentConfig.data.dimension.values.map((value) => value.label?.text ?? '') },
            yAxis: { title: { text: contentConfig.title.text } }
        };

        const chart = Highcharts.chart(renderTo, options, callback);
        return {
            chart,
            resize: () => {
                chart.reflow();
            },
            vendorId: HIGHCHARTS_ID
        };
    }

    // Helpers - Load dependency wheel and sankey modules.
    private async loadDependencyWheelAndSankeyModules(): Promise<void> {
        if (state.isDependencyWheelAndSankeyModulesLoaded) return;

        await Promise.all([import('highcharts/modules/dependency-wheel'), import('highcharts/modules/sankey')]);
        state.isDependencyWheelAndSankeyModulesLoaded = true;
    }

    // Helpers - Load Highcharts more.
    private async loadHighchartsMore(): Promise<void> {
        if (state.isHighchartsMoreLoaded) return;

        await import('highcharts/highcharts-more');
        state.isHighchartsMoreLoaded = true;
    }

    // Helpers - Load stream graph module.
    private async loadStreamGraphModule(): Promise<void> {
        if (state.isStreamgraphModuleLoaded) return;

        await import('highcharts/modules/streamgraph');
        state.isStreamgraphModuleLoaded = true;
    }
}
