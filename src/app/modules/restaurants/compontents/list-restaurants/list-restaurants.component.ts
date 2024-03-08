import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { BaseListComponent } from '@app/base-list/base-list.component';
import { RestaurantsModel } from '@app/models/restaurants.model';

@Component({
  selector: 'app-list-restaurants',
  templateUrl: './list-restaurants.component.html',
  styleUrls: ['./list-restaurants.component.css']
})
export class ListRestaurantsComponent extends BaseListComponent implements OnInit {

  @Input() restaurants: RestaurantsModel[];
  constructor() {
    super();
    this.displayedColumns = [
      'name',
      'description',
      'address',
      'nif',
      'phoneNumber',
      'city',
      'country',
      'postalCode',
      'actions',
    ];
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.restaurants);
  }

}
