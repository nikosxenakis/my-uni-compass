import { Component } from '@angular/core';
import { UniversityItem } from 'src/classes/UniversityItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  uniItem: UniversityItem = null;

  onOpenUniversity(uniItem: UniversityItem) {
    this.uniItem = uniItem;
  }
}
