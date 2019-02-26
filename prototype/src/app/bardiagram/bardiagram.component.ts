import { Component, OnInit, EventEmitter, Output, Input  } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'bar-diagram',
  templateUrl: './bardiagram.component.html',
  styleUrls: ['./bardiagram.component.scss']
})

export class BarDiagramComponent {

    @Input() data:string[];
    @Input() legendlabels:string[];
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
    }

    barChartLabels =  [];
  
    barChartColor:any = [
        {
            backgroundColor: ['rgba(30, 169, 224, 0.8)',
            'rgba(255,165,0,0.9)',
            'rgba(139, 136, 136, 0.9)',
            'rgba(255, 161, 181, 0.9)',
            'rgba(255, 102, 0, 0.9)'
            ]
        }
    ]

    barChartData:any = [
        { 
            data: []
        }
    ];

    ngOnInit () {

        var temp = []
        for(var i = 0; i < this.data.length; i++){
            temp.push(this.data[i]);
            this.barChartLabels.push(this.legendlabels[i]);
        }

        this.barChartData = [
            { 
                data: temp
            }
        ];
             
    }

    onChartClick(event) {
        console.log(this.title);
        console.log(this.barChartData);
        console.log(this.barChartLabels);
    }

}