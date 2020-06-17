import { Component, OnInit } from '@angular/core';
import {SelectItem} from "primeng";

@Component({
  selector: 'app-parking-scheduler',
  templateUrl: './parking-scheduler.component.html',
  styleUrls: ['./parking-scheduler.component.scss']
})
export class ParkingSchedulerComponent implements OnInit {

  val3: number;
  selectedType: string;
  selectedCars1: string[] = [];
  cars: SelectItem[];

  types: SelectItem[];

  items: SelectItem[];

  item: string;


  constructor() {
    this.cars = [
      {label: 'відстанню', value: 'Відстанню'},
      {label: 'якістю', value: 'Якістю'},
      {label: 'ціною', value: 'Ціною'},
    ];

    this.types = [
      {label: 'Погодинная', value: 'Погодинная'},
      {label: 'Помісячна', value: 'Помісячна'},
    ];

    this.items = [];
    for (let i = 0; i < 10000; i++) {
      this.items.push({label: 'Item ' + i, value: 'Item ' + i});
    }
  }

  ngOnInit(): void {
  }

}
