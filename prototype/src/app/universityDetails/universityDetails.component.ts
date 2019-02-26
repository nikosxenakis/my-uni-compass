import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { UniversityItem } from 'src/classes/UniversityItem';

@Component({
  selector: 'university-details',
  templateUrl: './universityDetails.component.html',
  styleUrls: ['./universityDetails.component.scss']
})
export class UniversityDetailsComponent implements OnInit {

  @Input() uniItem: UniversityItem;

  ngOnInit() {
    console.log(this.uniItem);
  }

}

