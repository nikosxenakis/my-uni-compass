import { Component, OnInit, EventEmitter, Output  } from '@angular/core';

@Component({
  selector: 'tabbar',
  templateUrl: './tabbar.component.html',
  styleUrls: ['./tabbar.component.scss']
})
export class TabbarComponent {

  @Output() openUniversityEvent = new EventEmitter<number>();


  onOpenUniversity(universityId: number) {
    this.openUniversityEvent.emit(universityId);
  }

}
