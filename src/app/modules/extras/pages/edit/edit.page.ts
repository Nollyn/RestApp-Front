import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExtrasService } from '@app/core/services/extras.service';
import { ExtrasModel } from '@app/models/extras.model';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';
import { BaseComponent } from "@app/core/base/base.component";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss']
})
export class EditPage extends BaseComponent implements OnInit {
  id: number;
  extras$: Observable<ExtrasModel>;

  constructor(
    private router: Router,
    private routerState: ActivatedRoute,
    private location: Location,
    private extrasService: ExtrasService
  ) {
    super()
  }

  ngOnInit(): void {
    this.routerState.params.subscribe(param => {
      this.id = +param.id;
      this.extras$ = this.extrasService.getById(this.id);
    });
  }

  saveHandler(e: ExtrasModel) {
    e.id = this.id;
    this.extrasService.update(e).subscribe(response => {
        this.router.navigate(['extras/edit', this.id]).then(r => console.log('Navigate to edit', r));
      }, () => this.error(),
      () => this.success());
  }

  cancelHandler() {
    this.location.back();
  }
}
