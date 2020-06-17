import { Component, OnInit } from '@angular/core';

import {SelectItem} from 'primeng';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
  types: SelectItem[];

  selectedType: string;

  selectedTypes: string[] = ['PayPal', 'MasterCard'];

  selectedModes: string[];

  modes: SelectItem[];

  countries: any[];

  selectedCountry: any;

  constructor() {
    this.types = [
      {label: 'Погодинная', value: 'Погодинная'},
      {label: 'Помісячна', value: 'Помісячна'},
    ];

    this.countries = [
      {name: 'USA', flag: 'usa.png'},
      {name: 'Germany', flag: 'germany.png'},
      {name: 'Japan', flag: 'japan.png'}
    ];
  }

  clear() {
    this.selectedType = null;
    this.selectedTypes = [];
    this.selectedModes = [];
    this.selectedCountry = null;
  }
}
