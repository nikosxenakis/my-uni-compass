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
  @Output() backEvent = new EventEmitter<null>();

  languageList = [{
    value: 'en',
    viewValue: 'English'
  }, {
    value: 'de',
    viewValue: 'German'
  }];

  selectedLanguage = 'en';

  goBack() {
    this.backEvent.emit(null);
  }

}
