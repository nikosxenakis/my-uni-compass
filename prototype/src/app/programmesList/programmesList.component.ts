import { Component, OnInit, EventEmitter, Output  } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'programmes-list',
  templateUrl: './programmesList.component.html',
  styleUrls: ['./programmesList.component.scss']
})

export class ProgrammesListComponent implements OnInit {

  @Output() openProgrammesEvent = new EventEmitter<string>();

  programmesHeaderList = [
    'Programme',
    'Domain',
    'Type',
    'Tuition Fees UK/EU',
    'Tuition Fees International'
  ];

  programmesItemList: Array<ProgrammeItem> = [];

  constructor(private http: Http) { }

  ngOnInit() {

    this.http.get('./assets/data/universityList.json')
    .pipe(
      map( response => {
        return response.json();
      })
    )
    .subscribe( data => {
      this.programmesItemList = data[0].programmes;
      console.log(this.programmesItemList);
    });

  }

  onOpenProgramme(programme: string) {
    this.openProgrammesEvent.emit(programme);
  }

}
