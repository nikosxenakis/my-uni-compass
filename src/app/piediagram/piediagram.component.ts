import { Component, OnInit, EventEmitter, Output, Input, OnChanges } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'pie-diagram',
    templateUrl: './piediagram.component.html',
    styleUrls: ['./piediagram.component.scss']
})

export class PieDiagramComponent implements OnInit, OnChanges {

    @Input() data: any;
    @Input() title: string;

    constructor(private http: Http) { }

    pieChartOptions = {
        responsive: true
    };

    pieChartLabels =  [];

    pieChartColor: any = [
        {
            backgroundColor: ['rgba(30, 169, 224, 0.8)',
            'rgba(255,165,0,0.9)',
            'rgba(139, 136, 136, 0.9)',
            'rgba(255, 161, 181, 0.9)',
            'rgba(255, 102, 0, 0.9)'
            ]
        }
    ];

    pieChartData: any = [
        {
            data: []
        }
    ];
    onChartClick(event) {
        console.log(this.title);
    }

    ngOnInit() {
        this.refreshData();
    }

    refreshData() {
        var temp = [];
        this.pieChartLabels = [];
        for(var key in this.data) {
            temp.push(this.data[key]);
            this.pieChartLabels.push(key);
        }

        this.pieChartData = [
            {
                data: temp
            }
        ];
    }


    ngOnChanges() {
        this.refreshData();
    }
}
