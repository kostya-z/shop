import { Component, OnInit } from '@angular/core';
import { CategoryEnum } from './categoryEnum';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {

  name: string = 'name';
  desciption: string = 'description';
  price: number = 100;
  category: CategoryEnum = CategoryEnum.Category2;
  isAvailable : boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
