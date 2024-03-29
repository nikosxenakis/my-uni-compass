import { Component, EventEmitter, Output } from '@angular/core';
import { UniversityItem } from 'src/classes/UniversityItem';
import { Http } from '@angular/http';
import {map} from 'rxjs/operators';

@Component({
  selector: 'tabbar',
  templateUrl: './tabbar.component.html',
  styleUrls: ['./tabbar.component.scss']
})
export class TabbarComponent {
  @Output() openUniversityEvent = new EventEmitter<UniversityItem>();

  universityItemList: Array<UniversityItem> = [];
  universityItemFavoritesList: Array<number> = [];
  universityItemSavedList: Array<number> = [];
  resultsString = 'Apply criteria and press search to find universities';
  constructor(private http: Http) {}
  onOpenUniversity(uniItem: UniversityItem) {
    this.openUniversityEvent.emit(uniItem);
  }

  search(searchForm: any) {

    this.http.get('./assets/data/data.json')
    .pipe(
      map( response => {
        return response.json();
      })
    )
    .subscribe( data => {
      this.filterUniversityList(data.universityList, searchForm);

      this.universityItemFavoritesList = data.favorites;
      this.universityItemSavedList = data.saved;
      console.log(this.universityItemList);

    });
  }

  filterUniversityList(inputUniversityList: Array<UniversityItem>, searchForm: any) {

    console.log(searchForm);

    this.universityItemList = [];
    const indexToRemove = [];

    for (const uni of inputUniversityList) {
      this.universityItemList.push(uni);
    }

    for (const element of this.universityItemList) {
      console.log(element);
      let toRemove = false;

      let found = false;
      for (const prog of element.programmes) {
        if (searchForm.domain === prog.domain) {
          found = true;
          console.log('found ', element.universityName, searchForm.domain, prog.domain);
        }
      }
      if (found === false && searchForm.domain !== 'All') {
        toRemove = true;
      }

      if (searchForm.degreeLevel === 'Undergraduate' && element.undergraduatePrograms === 0 ||
          searchForm.degreeLevel === 'Postgraduate' && element.postgraduatePrograms === 0 ||
          (searchForm.country !== 'United Kingdom' && searchForm.country !== 'All') ||
          searchForm.year !== 2018 ||
          searchForm.teachingExcellenceMin > element.teachingExcellence ||
          searchForm.teachingExcellenceMax < element.teachingExcellence ||
          searchForm.lifeQualityMin > element.lifeQuality * 100 ||
          searchForm.lifeQualityMax < element.lifeQuality * 100 ||
          searchForm.graduationRatesMin > element.graduationRates * 100 ||
          searchForm.graduationRatesMax < element.graduationRates * 100 ||
          searchForm.employabilityMin > element.employability * 100 ||
          searchForm.employabilityMax < element.employability * 100
      ) {
        toRemove = true;
      }

      if (toRemove === true) {
        indexToRemove.push(this.universityItemList.indexOf(element));
      }
    }

    for (let index = indexToRemove.length - 1; index >= 0 ; index--) {
      this.universityItemList.splice(indexToRemove[index], 1);
    }

    this.resultsString = this.universityItemList.length + ' Universities';

    let underPrograms = 0;
    let postPrograms = 0;
    for (const uniItem of this.universityItemList) {
      underPrograms += uniItem.undergraduatePrograms;
      postPrograms += uniItem.postgraduatePrograms;
    }

    if (searchForm.degreeLevel === 'Undergraduate') {
      this.resultsString += ' with ' +
      underPrograms +
      ' undergraduate programs ';
    }
    if (searchForm.degreeLevel === 'Postgraduate') {
      this.resultsString += ' with ' +
      postPrograms +
      ' postgraduate programs ';
    }
    if (searchForm.degreeLevel === 'All') {
      this.resultsString += ' with ' +
      underPrograms +
      ' undergraduate and ' +
      postPrograms +
      ' postgraduate programs ';
    }

    this.resultsString += 'found';
  }

}
