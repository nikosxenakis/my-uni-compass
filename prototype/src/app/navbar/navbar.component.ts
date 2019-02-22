import { Component, Input } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss', './../../assets/styles/languages.min.css']
})
export class NavbarComponent {
  title = 'my-uni-compass';

  @Input() universityId: number;

  languageList = [{
    value: 'en',
    viewValue: 'English'
  }, {
    value: 'gr',
    viewValue: 'Greek'
  }];

  // selectedLanguage = this.languageList[0];

  selectedLanguage = 'en';

}
