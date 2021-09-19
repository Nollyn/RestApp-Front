import { Component, Input, OnInit} from '@angular/core';
import { CategoriesModel } from '@app/models/categories.model';
import { MatTableDataSource } from "@angular/material/table";
import { BaseListComponent } from "@app/base-list/base-list.component";

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: [ './list-categories.component.css' ]
})
export class ListCategoriesComponent extends BaseListComponent implements OnInit {
  @Input() categories: CategoriesModel[];

  constructor() {
    super();
    this.displayedColumns = [
      'name',
      'description',
      'actions'
    ];
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.categories);
  }
}
