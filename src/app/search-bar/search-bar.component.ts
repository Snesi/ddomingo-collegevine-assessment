import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {GeolocationSearch} from "../services/college-search.service";

@Component({
  selector: 'cv-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  @Input() latitude: number | undefined | null = 0;
  @Input() longitude: number | undefined | null = 0;
  @Input() radius: number | undefined | null = 6000;

  @Output() coordsUpdated = new EventEmitter<GeolocationSearch>()

  constructor() { }

  ngOnInit(): void {

  }

  handleSearchClick() {
    this.coordsUpdated.emit({ latitude: this.latitude || 0, longitude: this.longitude || 0, radius: this.radius || 6000})
  }

}
