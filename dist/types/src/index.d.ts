import { Chart, Options } from 'highcharts/highcharts.src';
import { PresentationCartesianTypeId, PresentationPolarTypeId, PresentationRangeTypeId, PresentationView, PresentationVisualContentConfig } from '@dpuse/dpuse-shared/component/presentation';
export type { Options as HighchartsOptions } from 'highcharts/highcharts.src';
export interface HighchartsView extends PresentationView {
    chart: Chart;
}
export declare class HighchartsTool {
    renderCartesianChart(typeId: PresentationCartesianTypeId, contentConfig: PresentationVisualContentConfig, renderTo: HTMLElement, callback?: () => void): HighchartsView;
    render(options: Options, renderTo: HTMLElement, callback?: () => void): Promise<unknown>;
    renderPeriodFlowBoundaries(contentConfig: PresentationVisualContentConfig, renderTo: HTMLElement, callback?: () => void): Promise<HighchartsView>;
    renderPolarChart(typeId: PresentationPolarTypeId, contentConfig: PresentationVisualContentConfig, renderTo: HTMLElement, callback?: () => void): Promise<HighchartsView>;
    renderRangeChart(typeId: PresentationRangeTypeId, contentConfig: PresentationVisualContentConfig, renderTo: HTMLElement, callback?: () => void): Promise<HighchartsView>;
    private loadDependencyWheelAndSankeyModules;
    private loadHighchartsMore;
    private loadPatternFill;
    private loadStreamGraphModule;
}
