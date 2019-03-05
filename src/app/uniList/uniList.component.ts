import { Component, OnInit, EventEmitter, Output, Input, OnChanges } from '@angular/core';
import {MatSnackBar} from '@angular/material';
import { UniversityItem } from 'src/classes/UniversityItem';
import {PageEvent} from '@angular/material';

@Component({
  selector: 'uni-list',
  templateUrl: './uniList.component.html',
  styleUrls: ['./uniList.component.scss']
})
export class UniListComponent implements OnInit, OnChanges {
  @Input() universityItemList: Array<UniversityItem>;
  @Input() universityItemViewList: Array<UniversityItem>;
  @Input() universityItemFavoritesList: Array<number>;
  @Input() universityItemSavedList: Array<number>;
  @Input() resultsString: string;
  @Output() openUniversityEvent = new EventEmitter<UniversityItem>();

  isAsc = true;

  pageSizeOptions: number[] = [5, 10, 15, 20];

  universityHeaderList = [
    {
      name: 'University Name',
      colspanSm: '100',
      colspanMd: '50',
      colspanLg: '50',
      colspan: '12',
      showSm: 'true',
      showMd: 'true',
      showLg: 'true'
    }, {
      name: 'City',
      colspanSm: '0',
      colspanMd: '30',
      colspanLg: '30',
      colspan: '12',
      showSm: 'false',
      showMd: 'true',
      showLg: 'true'
    }, {
      name: 'Undergraduate Programs',
      colspanSm: '0',
      colspanMd: '0',
      colspanLg: '0',
      colspan: '0',
      showSm: 'false',
      showMd: 'false',
      showLg: 'false'
    }, {
      name: 'Postgraduate Programs',
      colspanSm: '0',
      colspanMd: '0',
      colspanLg: '0',
      colspan: '0',
      showSm: 'false',
      showMd: 'false',
      showLg: 'false'
    }, {
      name: 'Graduation Rates',
      colspanSm: '0',
      colspanMd: '0',
      colspanLg: '0',
      colspan: '0',
      showSm: 'false',
      showMd: 'false',
      showLg: 'false'
    }, {
      name: 'Employability',
      colspanSm: '0',
      colspanMd: '0',
      colspanLg: '0',
      colspan: '0',
      showSm: 'false',
      showMd: 'false',
      showLg: 'false'
    }, {
      name: 'Life Quality',
      colspanSm: '0',
      colspanMd: '0',
      colspanLg: '0',
      colspan: '0',
      showSm: 'false',
      showMd: 'false',
      showLg: 'false'
    }, {
      name: 'Teaching Excelence',
      colspanSm: '0',
      colspanMd: '0',
      colspanLg: '0',
      colspan: '0',
      showSm: 'false',
      showMd: 'false',
      showLg: 'false'
    }, {
      name: 'Actions',
      colspanSm: '0',
      colspanMd: '20',
      colspanLg: '20',
      colspan: '10',
      showSm: 'false',
      showMd: 'true',
      showLg: 'true'
    }
  ];
  pageEvent: PageEvent;

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  openUniversity(uniItem: UniversityItem) {
    this.openUniversityEvent.emit(uniItem);
  }

  addToFavorites(uniItem: UniversityItem) {
    this.universityItemFavoritesList.push(uniItem.universityId);
    this.openDialog(uniItem.universityName + ' added to the favorites');
  }

  addToSaved(uniItem: UniversityItem) {
    this.universityItemSavedList.push(uniItem.universityId);
    this.openDialog(uniItem.universityName + ' added to the saved for later');
  }

  removeFromFavorites(uniItem: UniversityItem) {
    this.universityItemFavoritesList = this.universityItemFavoritesList.filter(
      obj => obj !== uniItem.universityId
    );
    this.openDialog(uniItem.universityName + ' removed from the favorites');
  }

  removeFromSaved(uniItem: UniversityItem) {
    this.universityItemSavedList = this.universityItemSavedList.filter(
      obj => obj !== uniItem.universityId
    );
    this.openDialog(uniItem.universityName + ' removed from the saved for later');
  }

  openDialog(msg: string) {
    event.stopPropagation();

    this.snackBar.open(msg, 'Close', {
      duration: 2000,
    });
  }

  sort() {
    this.isAsc = !this.isAsc;
  }

  ngOnChanges(model: any) {
    console.log(model);
    this.updateView({
      pageIndex: 0,
      pageSize: 10
    });
  }

  updateView(event: any) {
    console.log(event);

    this.universityItemViewList = [];

    for (let i = event.pageIndex * event.pageSize; i < (event.pageIndex + 1 ) * event.pageSize; i++) {
      if (i < this.universityItemList.length) {
        this.universityItemViewList.push(this.universityItemList[i]);
      }
    }
  }
}
