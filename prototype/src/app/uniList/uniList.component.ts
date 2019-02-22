import { Component, OnInit, EventEmitter, Output, Inject } from '@angular/core';
import { Http } from '@angular/http';
import {map} from 'rxjs/operators';
import {MatSnackBar} from '@angular/material';
import { UniversityItem } from 'src/classes/UniversityItem';

@Component({
  selector: 'uni-list',
  templateUrl: './uniList.component.html',
  styleUrls: ['./uniList.component.scss']
})
export class UniListComponent implements OnInit {

  @Output() openUniversityEvent = new EventEmitter<UniversityItem>();

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

  resultsString = 'No results found';

  universityItemList: Array<UniversityItem> = [];
  universityItemFavoritesList: Array<number> = [];
  universityItemSavedList: Array<number> = [];

  constructor(private http: Http, private snackBar: MatSnackBar) { }

  ngOnInit() {

    this.http.get('./assets/data/data.json')
    .pipe(
      map( response => {
        return response.json();
      })
    )
    .subscribe( data => {
      this.universityItemList = data.universityList;
      this.universityItemFavoritesList = data.favorites;
      this.universityItemSavedList = data.saved;
      console.log(this.universityItemList);

      let underPrograms = 0;
      let postPrograms = 0;
      for (const uniItem of this.universityItemList) {
        underPrograms += uniItem.undergraduatePrograms;
        postPrograms += uniItem.postgraduatePrograms;
      }

      this.resultsString =
        this.universityItemList.length +
        ' Universities, ' +
        underPrograms +
        ' undergraduate and ' +
        postPrograms +
        ' postgraduate programs found';
    });

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
