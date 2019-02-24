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
  pageSizeOptions: number[] = [5, 10, 25, 100];
  universityHeaderList = [
    {name: 'University Name', colspan: '17'},
    {name: 'City', colspan: '18'},
    {name: 'Undergraduate Programs', colspan: '10'},
    {name: 'Postgraduate Programs', colspan: '10'},
    {name: 'Graduation Rates', colspan: '10'},
    {name: 'Employability', colspan: '10'},
    {name: 'Life Quality', colspan: '10'},
    {name: 'Teaching Excelence', colspan: '10'},
    {name: 'Actions', colspan: '5'}
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
}
