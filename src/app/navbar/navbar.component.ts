import { Component, Input, Output, EventEmitter, OnInit, AfterViewInit } from '@angular/core';
import { UniversityItem } from 'src/classes/UniversityItem';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  title = 'my-uni-compass';
  mobile;
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

  ngOnInit() {
    if (window.screen.width >= 500) { // 768px portrait
      this.mobile = true;
    }
    if (window.screen.width < 500) { // 768px portrait
      this.mobile = false;
    }
  }

}
