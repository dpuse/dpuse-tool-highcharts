import { default as Highcharts, Chart, Options } from 'highcharts';
import { PresentationCartesianTypeId, PresentationPolarTypeId, PresentationRangeTypeId, PresentationView, PresentationVisualContentConfig } from '@dpuse/dpuse-shared';
interface HighchartsView extends PresentationView {
    chart: Chart;
}
declare class HighchartsTool {
    constructor();
    renderCartesianChart(typeId: PresentationCartesianTypeId, contentConfig: PresentationVisualContentConfig, renderTo: HTMLElement, callback?: () => void): Promise<HighchartsView>;
    render(options: Options, renderTo: HTMLElement, callback?: () => void): Promise<{
        chart: Highcharts.Chart;
        resize: () => void;
        vendorId: string;
    }>;
    renderPeriodFlowBoundaries(contentConfig: PresentationVisualContentConfig, renderTo: HTMLElement, callback?: () => void): Promise<{
        chart: Highcharts.Chart;
        resize: () => void;
        vendorId: string;
    }>;
    renderPolarChart(typeId: PresentationPolarTypeId, contentConfig: PresentationVisualContentConfig, renderTo: HTMLElement, callback?: () => void): Promise<HighchartsView>;
    renderRangeChart(typeId: PresentationRangeTypeId, contentConfig: PresentationVisualContentConfig, renderTo: HTMLElement, callback?: () => void): Promise<HighchartsView>;
    private loadDependencyWheelAndSankeyModules;
    private loadHighchartsMore;
    private loadStreamGraphModule;
}
export { HighchartsTool, HighchartsView };
