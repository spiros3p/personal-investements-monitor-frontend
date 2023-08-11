import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-single-chart',
    templateUrl: './single-chart.component.html',
    styleUrls: ['./single-chart.component.scss'],
})
export class SingleChartComponent implements OnInit {
    @Input() resourceData: any[] = [];
    public graph: any;

    ngOnInit(): void {
        this.initGraph();
    }

    initGraph() {
        const values1 = this.resourceData.map((e) => e.value);

        const values2 = this.resourceData.map((e) => e.valueInEuro);
        const timeStamps = this.resourceData.map((e) => e.timeStamp);

        this.graph = {
            data: [
                {
                    x: timeStamps,
                    y: values1,
                    type: 'scatter',
                    mode: 'lines',
                    marker: { color: 'red' },
                    showlegend: false,
                },
            ],
            layout: { width: 350, height: 270, title: this.resourceData[0].name },
            config: {
                displayModeBar: false, // this is the line that hides the bar.
            },
        };
        if (this.checkIfEuro(this.resourceData)) {
            this.graph.data.push({
                x: timeStamps,
                y: values2,
                type: 'scatter',
                mode: 'lines',
                marker: { color: 'blue' },
                showlegend: false,
            });
        }
    }

    checkIfEuro(dataArray: any): boolean {
        return !!dataArray[0]['valueInEuro'];
    }
}
