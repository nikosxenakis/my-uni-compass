import { Component, Output, EventEmitter, AfterViewInit, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Http } from '@angular/http';
import {map} from 'rxjs/operators';

@Component({
  selector: 'searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit, AfterViewInit {

  @Output() searchEvent = new EventEmitter<any>();

  addFilterLabel = 'More filters';
  degreeLevelList = [
    'All',
    'Undergraduate',
    'Postgraduate'
  ];

  countryList = [
    'All',
    'United Kingdom',
    'Greece',
    'Germany',
    'China',
    'United States',
    'Japan',
    'Sweeden'
  ];

  yearList = [
    2018,
    2017,
    2016,
    2015
  ];

  domainList = [];

  form = new FormGroup({
    degreeLevel: new FormControl(this.degreeLevelList[0]),
    country: new FormControl(this.countryList[0]),
    year: new FormControl(this.yearList[0]),
    domain: new FormControl(this.domainList[0]),
    teachingExcellenceMin: new FormControl(0),
    teachingExcellenceMax: new FormControl(100),
    lifeQualityMin: new FormControl(0),
    lifeQualityMax: new FormControl(100),
    employabilityMin: new FormControl(0),
    employabilityMax: new FormControl(100),
    graduationRatesMin: new FormControl(0),
    graduationRatesMax: new FormControl(100)
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
    'Teaching Excellence',
    'Actions'
  ];

  elementsVisibility: any;
  constructor(private http: Http) {
    this.elementsVisibility = {
      degreeLevel: true,
      country: true,
      year: true,
      domain: true,
      teachingExcellence: true,
      lifeQuality: true,
      employability: true,
      graduationRates: true
    };
  }

  ngOnInit() {
    this.getDomains();
  }

  ngAfterViewInit() {
    this.moveElement('teachingExcellence', 'remove');
    this.moveElement('lifeQuality', 'remove');
    this.moveElement('employability', 'remove');
    this.moveElement('graduationRates', 'remove');
  }

  search(form: any) {
    console.log(form);
    this.searchEvent.emit(form);
  }
  more() {
    this.moreHidden = !this.moreHidden;
    this.addFilterLabel = this.moreHidden ? 'More filters' : 'Hide filters';
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
    if (elementId === 'country') {
      this.form.controls[elementId].setValue(this.countryList[0]);
    }
    if (elementId === 'year') {
      this.form.controls[elementId].setValue(this.yearList[0]);
    }
    if (elementId === 'domain') {
      this.form.controls[elementId].setValue(this.domainList[0]);
    }
    if (elementId === 'teachingExcellence') {
      this.form.controls.teachingExcellenceMin.setValue(0);
      this.form.controls.teachingExcellenceMax.setValue(100);
    }
    if (elementId === 'lifeQuality') {
      this.form.controls.lifeQualityMin.setValue(0);
      this.form.controls.lifeQualityMax.setValue(100);
    }
    if (elementId === 'employability') {
      this.form.controls.employabilityMin.setValue(0);
      this.form.controls.employabilityMax.setValue(100);
    }
    if (elementId === 'graduationRates') {
      this.form.controls.graduationRatesMin.setValue(0);
      this.form.controls.graduationRatesMax.setValue(100);
    }
  }

  getDomains() {
    this.http.get('./assets/data/data.json')
    .pipe(
      map( response => {
        return response.json();
      })
    )
    .subscribe( data => {
      this.domainList = ['All'];
      for (const uniItem of data.universityList) {
        for (const prog of uniItem.programmes) {
          if (this.domainList.indexOf(prog.domain) === -1) {
            this.domainList.push(prog.domain);
          }
        }
      }
      this.form.controls.domain.setValue(this.domainList[0]);
    });
  }
}
