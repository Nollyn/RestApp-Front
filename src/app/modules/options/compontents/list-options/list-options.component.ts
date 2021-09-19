import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { BaseListComponent } from '@app/base-list/base-list.component';
import { OptionsModel } from '@app/models/options.model';

@Component({
  selector: 'app-list-options',
  templateUrl: './list-options.component.html',
  styleUrls: ['./list-options.component.css']
})
export class ListOptionsComponent extends BaseListComponent implements OnInit {

  @Input() options: OptionsModel[];
  constructor() { 
    super();
    this.displayedColumns = [
      'name',
      'description',
      'actions'
    ];
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.options);
  }

}
