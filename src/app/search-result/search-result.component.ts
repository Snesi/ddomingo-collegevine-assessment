import {Component, Input, OnInit} from '@angular/core';
import {CollegeDataModel} from "../domain/college-data.model";

@Component({
  selector: 'cv-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {

  @Input() collegeList: CollegeDataModel[] | null = []

  constructor() { }

  ngOnInit(): void {
  }

}
