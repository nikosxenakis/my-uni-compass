import { Component, Input, OnInit, AfterContentInit, ViewChild } from '@angular/core';
import { UniversityItem } from 'src/classes/UniversityItem';
import { MediaChange } from '@angular/flex-layout';
import { MatGridList } from '@angular/material';

@Component({
  selector: 'university-details',
  templateUrl: './universityDetails.component.html',
  styleUrls: ['./universityDetails.component.scss']
})
export class UniversityDetailsComponent implements OnInit, AfterContentInit {

  @Input() uniItem: UniversityItem;
  @ViewChild('grid') grid: MatGridList;

  gridByBreakpoint = {
    xl: 8,
    lg: 6,
    md: 4,
    sm: 2,
    xs: 1
  };

  ngOnInit() {
    console.log(this.uniItem);
  }

  constructor() {}

  ngAfterContentInit() {
  }
}

