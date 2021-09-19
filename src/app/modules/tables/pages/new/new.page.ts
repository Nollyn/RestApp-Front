import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TablesService } from '@app/core/services/tables.service';
import { TablesModel } from '@app/models/tables.model';
import { Observable, of } from 'rxjs';
import { Router } from "@angular/router";
import { BaseComponent } from "@app/core/base/base.component";

@Component({
  selector: 'app-new',
  templateUrl: './new.page.html',
  styleUrls: ['./new.page.scss']
})
export class NewPage extends BaseComponent implements OnInit {

  tables$: Observable<TablesModel>;

  constructor(
    private router: Router,
    private tablesService: TablesService,
    private location: Location
    ) {
    super()
  }

  ngOnInit(): void {
    this.tables$ = of(new TablesModel())
  }

  saveHandler(e: TablesModel){
    this.tablesService.insert(e).subscribe(response => {
        this.router.navigate(['tables/edit', response.id]).then(r => console.log('Navigate to edit', r));
      }, () => this.error(),
      () => this.success());
  }

  cancelHandler(){
    this.location.back();
  }
}
