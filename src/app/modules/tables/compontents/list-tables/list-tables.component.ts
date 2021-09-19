import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { BaseListComponent } from '@app/base-list/base-list.component';
import { TablesModel } from '@app/models/tables.model';

@Component({
  selector: 'app-list-tables',
  templateUrl: './list-tables.component.html',
  styleUrls: ['./list-tables.component.css']
})
export class ListTablesComponent extends BaseListComponent implements OnInit {

  @Input() tables: TablesModel[];
  constructor() { 
    super();
    this.displayedColumns = [
      'code',
      'qr',
      'actions'
    ];
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.tables);
  }

}
