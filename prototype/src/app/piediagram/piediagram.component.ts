import { Component, OnInit, EventEmitter, Output, Input  } from '@angular/core';
import { Http } from '@angular/http';
import { UniversityItem } from 'src/classes/UniversityItem';

@Component({
  selector: 'pie-diagram',
  templateUrl: './piediagram.component.html',
})

export class PieDiagramComponent {

    @Input() uniItem: UniversityItem;

    constructor(private http: Http) { }

    pieChartOptions = {
        responsive: true
    }

    pieChartLabels =  ['Rent', 'Transport', 'Food', 'Entertainment'];
  
    pieChartColor:any = [
        {
            backgroundColor: ['rgba(30, 169, 224, 0.8)',
            'rgba(255,165,0,0.9)',
            'rgba(139, 136, 136, 0.9)',
            'rgba(255, 161, 181, 0.9)',
            'rgba(255, 102, 0, 0.9)'
            ]
        }
    ]

    pieChartData:any = [
        { 
            data: []
        }
    ];
  
    ngOnInit () {
        this.http.get('./assets/data/data.json').subscribe(
            data => {
                this.pieChartData = [
                    this.uniItem.monthlyLivingExpensesMinimum.rent,
                    this.uniItem.monthlyLivingExpensesMinimum.transport,
                    this.uniItem.monthlyLivingExpensesMinimum.food,
                    this.uniItem.monthlyLivingExpensesMinimum.entertainment
                ]   
            }
        );
    }

    onChartClick(event) {
        console.log(event);
    }

}