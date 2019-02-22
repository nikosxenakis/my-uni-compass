import { Component, OnInit, EventEmitter, Output  } from '@angular/core';
import { Http } from '@angular/http';
import {map} from 'rxjs/operators';

@Component({
  selector: 'uni-list',
  templateUrl: './uniList.component.html',
  styleUrls: ['./uniList.component.scss']
})
export class UniListComponent implements OnInit {

  @Output() openUniversityEvent = new EventEmitter<number>();

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

  universityItemList: Array<UniversityItem> = [];

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
      console.log(this.universityItemList);
    });

  }

  openUniversity(universityId: number) {
    this.openUniversityEvent.emit(universityId);
  }

}
