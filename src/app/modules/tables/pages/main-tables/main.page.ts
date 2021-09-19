import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TablesService } from '@app/core/services/tables.service';
import { TablesModel } from '@app/models/tables.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main-tables',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.css']
})
export class MainPage implements OnInit {

  tables$: Observable<TablesModel[]>;
  constructor(
    private tablesService: TablesService,
    private router: Router
    ) { }

  ngOnInit() {
    this.tables$ = this.tablesService.getAll();
  }

  newHandler() {
    this.router.navigate(['tables/new']);
  }
  editHandler(event: any) {
    this.router.navigate(['tables/edit', event.id]);
  }
  deleteHandler(event: any) {
    console.log('MainCategoriesPage::deleteHandler', event);
  }
}
