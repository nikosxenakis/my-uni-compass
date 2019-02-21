import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import {map} from 'rxjs/operators';

@Component({
  selector: 'uni-list',
  templateUrl: './uniList.component.html',
  styleUrls: ['./uniList.component.scss']
})
export class UniListComponent implements OnInit {

  universityHeaderList = [
    'University Name',
    'City',
    'Undergraduate Programs',
    'Postgraduate Programs',
    'Graduation Rates',
    'Employability',
    'Life Quality',
    'Teaching Excelence',
    'Actions'
  ];

  universityItemList;

  // universityItemList = [
  //   [
  //     'University Name',
  //     'City',
  //     'Undergraduate Programs',
  //     'Postgraduate Programs',
  //     'Graduation Rates',
  //     'Employability',
  //     'Life Quality',
  //     'Teaching Excelence',
  //     'Actions'
  //   ]
  // ];

  // universityItemList = [
  //   {
  //     uniName: 'University of Edinburgh',
  //     city: 'Edinburgh, UK',
  //     underPrograms: '98',
  //     postPrograms: '32',
  //     gradRates: '80%',
  //     employability: '87%',
  //     lifeQuality: '75%',
  //     teachingExcellence: '78%',
  //     actions: 'actions'
  //   }
  // ];

  constructor(private http: Http) { }

  ngOnInit() {

    this.http.get('./assets/data/universityList.json')
    .pipe(
      map( response => {
        return response.json();
      })
    )
    .subscribe( data => {
      this.universityItemList = data;
    });

  }



}
