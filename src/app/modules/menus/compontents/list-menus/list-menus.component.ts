import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { BaseListComponent } from '@app/base-list/base-list.component';
import { MenusModel } from '@app/models/menus.model';

@Component({
  selector: 'app-list-menus',
  templateUrl: './list-menus.component.html',
  styleUrls: ['./list-menus.component.css']
})
export class ListMenusComponent extends BaseListComponent implements OnInit {

  @Input() menus: MenusModel[];

  constructor() {
    super();
    this.displayedColumns = [
      'name',
      'description',
      'dayMenu',
      'date',
      'actions'
    ];
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.menus);
  }

}
