import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { BaseListComponent } from '@app/base-list/base-list.component';
import { DrinksModel } from '@app/models/drinks.model';

@Component({
  selector: 'app-list-drinks',
  templateUrl: './list-drinks.component.html',
  styleUrls: ['./list-drinks.component.css']
})
export class ListDrinksComponent extends BaseListComponent implements OnInit {

  @Input() drinks: DrinksModel[];
  constructor() { 
    super();
    this.displayedColumns = [
      'name',
      'description',
      'actions'
    ];
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.drinks);
  }

}
