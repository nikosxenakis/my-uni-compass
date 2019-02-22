import { Component, OnInit, EventEmitter, Output  } from '@angular/core';
import { UniversityItem } from 'src/classes/UniversityItem';

@Component({
  selector: 'tabbar',
  templateUrl: './tabbar.component.html',
  styleUrls: ['./tabbar.component.scss']
})
export class TabbarComponent {

  @Output() openUniversityEvent = new EventEmitter<UniversityItem>();


  onOpenUniversity(uniItem: UniversityItem) {
    this.openUniversityEvent.emit(uniItem);
  }

}
