import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import {MatSnackBar} from '@angular/material';
import { UniversityItem } from 'src/classes/UniversityItem';

@Component({
  selector: 'uni-list',
  templateUrl: './uniList.component.html',
  styleUrls: ['./uniList.component.scss']
})
export class UniListComponent implements OnInit {
  @Input() universityItemList: Array<UniversityItem>;
  @Input() universityItemFavoritesList: Array<number>;
  @Input() universityItemSavedList: Array<number>;
  @Input() resultsString: string;
  @Output() openUniversityEvent = new EventEmitter<UniversityItem>();

  isAsc = true;

  pageSizeOptions: number[] = [5, 10, 25, 100];

  universityHeaderList = [
    {
      name: 'University Name',
      colspanSm: '100',
      colspanMd: '50',
      colspanLg: '50',
      colspan: '17',
      showSm: 'true',
      showMd: 'true',
      showLg: 'true'
    }, {
      name: 'City',
      colspanSm: '0',
      colspanMd: '30',
      colspanLg: '30',
      colspan: '17',
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

  pageEvent(event: any) {
    console.log(this.universityItemList.length, ' page changed');
  }
}
