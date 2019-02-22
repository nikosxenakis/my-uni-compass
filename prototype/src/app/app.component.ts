import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  universityId = null;

  onOpenUniversity(universityId: number) {
    this.universityId = universityId;
  }
}
