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
    {
      name: 'Programme',
      colspanSm: '100',
      colspanMd: '20',
      colspanLg: '50',
      colspan: '20',
      showSm: 'true',
      showMd: 'true',
      showLg: 'true'
    }, {
      name: 'Domain',
      colspanSm: '0',
      colspanMd: '20',
      colspanLg: '50',
      colspan: '20',
      showSm: 'false',
      showMd: 'true',
      showLg: 'true'
    }, {
      name: 'Type',
      colspanSm: '0',
      colspanMd: '0',
      colspanLg: '20',
      colspan: '20',
      showSm: 'false',
      showMd: 'false',
      showLg: 'false'
    }, {
      name: 'Tuition Fees UK/EU',
      colspanSm: '0',
      colspanMd: '0',
      colspanLg: '20',
      colspan: '20',
      showSm: 'false',
      showMd: 'false',
      showLg: 'true'
    }, {
      name: 'Tuition Fees International',
      colspanSm: '0',
      colspanMd: '0',
      colspanLg: '20',
      colspan: '20',
      showSm: 'false',
      showMd: 'false',
      showLg: 'true'
    }
  ];

  programmesItemList: Array<ProgrammeItem> = [];

  domainList = [
    'All',
    'Computer Science'
  ];

  constructor(private http: Http) { }

  ngOnInit() {

    this.programmesItemList = this.uniItem.programmes;

  }

  onOpenProgramme(programme: string) {
    this.openProgrammesEvent.emit(programme);
  }

}
