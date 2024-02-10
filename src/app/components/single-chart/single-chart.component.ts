import { Component, Input, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';
import { Chart } from 'chart.js';
import zoomPlugin from 'chartjs-plugin-zoom';
Chart.register(zoomPlugin);

@Component({
    selector: 'app-single-chart',
    templateUrl: './single-chart.component.html',
    styleUrls: ['./single-chart.component.scss'],
})
export class SingleChartComponent implements OnInit {
    @Input() resourceData: any[] = [];
    @Input() optsForValueChanges: any = {};
    @Input() optsForEuroChanges: any = {};
    public graph: any;

    get latestValue() {
        return this.resourceData[this.resourceData.length - 1]['value'];
    }

    get latestValueInEuro() {
        return this.resourceData[this.resourceData.length - 1]['valueInEuro'];
    }

    ngOnInit(): void {
        this.initGraph();
    }

    documentStyle = getComputedStyle(document.documentElement);
    textColor = this.documentStyle.getPropertyValue('--text-color');
    textColorSecondary = this.documentStyle.getPropertyValue('--text-color-secondary');
    surfaceBorder = this.documentStyle.getPropertyValue('--surface-border');

    initGraph() {
        const values1 = this.resourceData.map((e) => e.value);
        const values2 = this.resourceData.map((e) => e.valueInEuro);
        const timeStamps = this.resourceData.map((e) => new Date(e.timeStamp));

        this.graph = {
            data: {
                labels: timeStamps,
                datasets: [
                    {
                        label: this.parseTitle(this.resourceData[0].name),
                        fill: false,
                        borderColor: 'red',
                        yAxisID: 'y',
                        tension: 0.4,
                        data: values1,
                    },
                ],
            },
            options: {
                stacked: true,
                maintainAspectRatio: false,
                aspectRatio: 0.9,
                plugins: {
                    legend: {
                        labels: {
                            color: 'black',
                        },
                    },
                    zoom: {
                        pan: {
                            enabled: true,
                        },
                        zoom: {
                            wheel: {
                                enabled: true,
                            },
                            pinch: {
                                enabled: true,
                            },
                            mode: 'xy',
                        },
                    },
                },
                scales: {
                    x: {
                        ticks: {
                            color: this.textColorSecondary,
                            font: {
                                size: 10,
                            },
                        },
                        grid: {
                            color: this.surfaceBorder,
                        },
                        type: 'time',
                        time: {
                            tooltipFormat: 'DD T',
                        },
                    },
                    y: {
                        type: 'linear',
                        display: true,
                        position: 'right',
                        ticks: {
                            color: this.textColorSecondary,
                            callback: function (value: any, index: any, ticks: any) {
                                if (Number(value) < 10) {
                                    return value.toFixed(2);
                                }
                                return value
                            },
                        },
                        grid: {
                            color: this.surfaceBorder,
                        },
                    },
                },
            },
        };

        if (this.checkIfEuro(this.resourceData)) {
            this.graph.data.datasets.push({
                label: 'in Euro',
                fill: false,
                borderColor: 'blue',
                yAxisID: 'y1',
                tension: 0.4,
                data: values2,
            });
            this.graph.options.scales['y1'] = {
                type: 'linear',
                display: true,
                position: 'left',
                ticks: {
                    color: this.textColorSecondary,
                    callback: function (value: any, index: any, ticks: any) {
                        return value.toFixed(0) + '€';
                    },
                },
                grid: {
                    drawOnChartArea: false,
                    color: this.surfaceBorder,
                },
            };
        }
    }

    private checkIfEuro(dataArray: any): boolean {
        return !!dataArray[0]['valueInEuro'];
    }

    private parseTitle(title: string): string {
        return title.charAt(0).toUpperCase() + title.split('-').join(' ').slice(1);
    }
}
