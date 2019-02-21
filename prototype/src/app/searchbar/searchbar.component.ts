import { Component } from '@angular/core';

@Component({
  selector: 'searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent {

  selected = 'en';
  moreHidden = true;
  resultsString = '123 Universities, 1425 undergraduate and 876 postgraduate programs found';

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
  search() {}
  more() {
    this.moreHidden = !this.moreHidden;
  }
}
