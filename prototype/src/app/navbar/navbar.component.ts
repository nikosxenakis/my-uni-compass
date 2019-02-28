import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UniversityItem } from 'src/classes/UniversityItem';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss', './../../assets/styles/languages.min.css']
})
export class NavbarComponent {
  title = 'my-uni-compass';

  @Input() uniItem: UniversityItem;

  languageList = [{
    value: 'en',
    viewValue: 'English'
  }, {
    value: 'de',
    viewValue: 'German'
  }];

  selectedLanguage = 'en';

  goBack() {
    this.uniItem = null;
  }

  onOpenUniversity(uniItem: UniversityItem) {
    this.uniItem = uniItem;
  }

  onCloseUniversity() {
    this.uniItem = null;
  }

}
