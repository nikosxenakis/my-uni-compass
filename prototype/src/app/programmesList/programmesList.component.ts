import { Component, OnInit, EventEmitter, Output, Input  } from '@angular/core';
import { Http } from '@angular/http';
import { UniversityItem } from 'src/classes/UniversityItem';

@Component({
  selector: 'programmes-list',
  templateUrl: './programmesList.component.html',
  styleUrls: ['./programmesList.component.scss']
})

export class ProgrammesListComponent implements OnInit {

  @Input() uniItem: UniversityItem;
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

    this.programmesItemList = this.uniItem.programmes;

  }

  onOpenProgramme(programme: string) {
    this.openProgrammesEvent.emit(programme);
  }

}
