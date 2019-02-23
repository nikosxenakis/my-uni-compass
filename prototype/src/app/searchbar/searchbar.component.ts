import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent {

  @Output() searchEvent = new EventEmitter<any>();

  degreeLevelList = [
    'All',
    'Undergraduate',
    'Postgraduate'
  ];

  countryList = [
    'All',
    'United Kingdom'
  ];

  yearList = [
    'All',
    '2018',
    '2017',
    '2016',
    '2015'
  ];

  domainList = [
    'All',
    'Computer Science'
  ];

  form = new FormGroup({
    degreeLevel: new FormControl(this.degreeLevelList[0]),
    teachingExcellenceMin: new FormControl(0),
    teachingExcellenceMax: new FormControl(100)
  });


  moreHidden = true;

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

  elementsVisibility = {
    degreeLevel: true
  };

  search(form: any) {
    console.log(form);
    // propagate the results
    this.searchEvent.emit(form);

  }
  more() {
    this.moreHidden = !this.moreHidden;
  }

  moveElement(elementId: string, action: string) {
    console.log(action, ': ', elementId);
    const target = document.getElementById(elementId);
    this.resetField(elementId);

    if (action === 'remove') {
      document.getElementById('hiddenFilters').appendChild(target);
    } else {
      document.getElementById('searchBarForm').appendChild(target);
    }

    this.elementsVisibility[elementId] = !this.elementsVisibility[elementId];
  }

  resetField(elementId: string) {

    if (elementId === 'degreeLevel') {
      this.form.controls[elementId].setValue(this.degreeLevelList[0]);
    }

  }
}
