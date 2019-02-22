import { Component, OnInit, EventEmitter, Output  } from '@angular/core';
import { Http } from '@angular/http';
import {map} from 'rxjs/operators';

@Component({
  selector: 'courses-list',
  templateUrl: './coursesList.component.html',
  styleUrls: ['./coursesList.component.scss']
})
export class CoursesListComponent implements OnInit {

  @Output() openCoursesEvent = new EventEmitter<number>();

  coursesHeaderList = [
    'Programme',
    'Domain',
    'Type',
    'Tuition Fees UK/EU',
    'Tuition Fees International'
  ];

  coursesItemList: Array<UniversityItem> = [];

  constructor(private http: Http) { }

  ngOnInit() {

    this.http.get('./assets/data/universityList.json')
    .pipe(
      map( response => {
        return response.json();
      })
    )
    .subscribe( data => {
      this.coursesItemList = data;
      console.log(this.coursesItemList);
    });

  }

  openUniversity(universityId: number) {
    this.openCoursesEvent.emit(universityId);
  }

}
