import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { BaseListComponent } from '@app/base-list/base-list.component';
import { ExtrasModel } from '@app/models/extras.model';

@Component({
  selector: 'app-list-extras',
  templateUrl: './list-extras.component.html',
  styleUrls: ['./list-extras.component.css']
})
export class ListExtrasComponent extends BaseListComponent implements OnInit {

  @Input() extras: ExtrasModel[];

  constructor() {
    super();
    this.displayedColumns = [
      'name',
      'description',
      'actions'
    ];
   }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.extras);
  }

}
