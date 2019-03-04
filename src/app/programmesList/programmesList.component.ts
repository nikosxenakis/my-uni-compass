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
  programmesItemViewList: Array<ProgrammeItem> = [];
  programmesItemView2List: Array<ProgrammeItem> = [];
  pageSizeOptions: number[] = [5, 10, 15, 20];
  domainList = [];
  selectedDomain: string;
  constructor(private http: Http) { }

  ngOnInit() {
    this.programmesItemList = this.uniItem.programmes;
    this.domainList = ['All'];
    for (const prog of this.programmesItemList) {
      if (this.domainList.indexOf(prog.domain) === -1) {
        this.domainList.push(prog.domain);
      }
    }
    this.selectedDomain = this.domainList[0];
    this.search();
    this.updateView({
      pageIndex: 0,
      pageSize: 10
    });
  }

  openProgramme(programmeItem: any) {
    window.location.href = programmeItem.url;
  }

  search() {
    console.log(this.selectedDomain);
    this.programmesItemViewList = [];

    for (const prog of this.programmesItemList) {
      if (this.selectedDomain === prog.domain || this.selectedDomain === 'All') {
        this.programmesItemViewList.push(prog);
      }
    }
    this.updateView({
      pageIndex: 0,
      pageSize: 10
    });
  }

  updateView(event: any) {
    console.log(event);

    this.programmesItemView2List = [];

    for (let i = event.pageIndex * event.pageSize; i < (event.pageIndex + 1 ) * event.pageSize; i++) {
      if (i < this.programmesItemViewList.length) {
        this.programmesItemView2List.push(this.programmesItemViewList[i]);
      }
    }
  }
}
