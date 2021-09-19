import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TablesService } from '@app/core/services/tables.service';
import { TablesModel } from '@app/models/tables.model';
import { Observable } from 'rxjs';
import { BaseComponent } from "@app/core/base/base.component";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss']
})
export class EditPage extends BaseComponent implements OnInit {
  id: number;
  tables$: Observable<TablesModel>;

  constructor(
    private router: Router,
    private tablesService: TablesService,
    private routerState: ActivatedRoute,
    private location: Location
  ) {
    super()
  }

  ngOnInit(): void {
    this.routerState.params.subscribe(param => {
      this.id = +param.id;
      this.tables$ = this.tablesService.getById(this.id);
    });
  }

  saveHandler(e: TablesModel){
    e.id = this.id;
    this.tablesService.update(e).subscribe(response => {
        this.router.navigate(['tables/edit', this.id]).then(r => console.log('Navigate to edit', r));
      }, () => this.error(),
      () => this.success());
  }

  cancelHandler(){
    this.location.back();
  }
}
