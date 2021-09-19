import { Component, Input, OnInit } from '@angular/core';
import { DishesModel } from '@app/models/dishes.model';
import { BaseListComponent } from '@app/base-list/base-list.component';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-list-dishes',
  templateUrl: './list-dishes.component.html',
  styleUrls: ['./list-dishes.component.css']
})
export class ListDishesComponent extends BaseListComponent implements OnInit {

  @Input() dishes: DishesModel[];

  constructor() {
    super();
    this.displayedColumns = [
      'name',
      'description',
      'price',
      'actions'
    ];
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.dishes);
  }

}
