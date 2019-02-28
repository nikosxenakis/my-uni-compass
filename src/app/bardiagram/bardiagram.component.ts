import { Component, OnInit, EventEmitter, Output, Input  } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'bar-diagram',
    templateUrl: './bardiagram.component.html',
    styleUrls: ['./bardiagram.component.scss']
})

export class BarDiagramComponent implements OnInit {

    @Input() data: string[];
    @Input() legendlabels: string[];
    @Input() title: string;

    constructor(private http: Http) { }

    barChartOptions = {
        responsive: true,
        scales: {
            xAxes: [{
                display: false
            }],
            yAxes: [{
                display: true,
                ticks: {
                    min: 0,
                    max: 1,
                    stepSize: 0.1
                }
            }],
        }
    };

    public barChartColor: Array<any> = [
        {
            backgroundColor: 'rgba(30, 169, 224, 0.8)'
        },
        {
            backgroundColor: 'rgba(255,165,0,0.9)'
        },
        {
            backgroundColor: 'rgba(139, 136, 136, 0.9)'
        },
        {
            backgroundColor: 'rgba(255, 161, 181, 0.9)'
        },
        {
            backgroundColor: 'rgba(255, 102, 0, 0.9)'
        },
    ];
    barChartData: any = [];

    ngOnInit() {

        console.log(this.data);
        console.log(this.legendlabels);

        this.barChartData = [];
        for (const elem of this.data) {
            const i = this.data.indexOf(elem);

            this.barChartData.push({
                data: [this.data[i]],
                label: this.legendlabels[i]
            });
        }
    }

    onChartClick(event) {
        console.log(this.title);
        console.log(this.barChartData);
    }

}
