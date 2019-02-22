import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'university-details',
  templateUrl: './universityDetails.component.html',
  styleUrls: ['./universityDetails.component.scss']
})
export class UniversityDetailsComponent implements OnInit {

  @Input() universityId: number;
  @Output() universityIdChange = new EventEmitter<number>();

  ngOnInit() {
    console.log(this.universityId);
  }
  goBack() {
    this.universityIdChange.emit(null);
  }

}
