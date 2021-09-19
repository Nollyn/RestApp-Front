import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ExtrasService } from '@app/core/services/extras.service';
import { ExtrasModel } from '@app/models/extras.model';
import { Observable, of } from 'rxjs';
import { Router } from "@angular/router";
import { BaseComponent } from "@app/core/base/base.component";

@Component({
  selector: 'app-new',
  templateUrl: './new.page.html',
  styleUrls: ['./new.page.scss']
})
export class NewPage extends BaseComponent implements OnInit {
  extras$: Observable<ExtrasModel>;

  constructor(
    private router: Router,
    private extrasService: ExtrasService,
    private location: Location
  ) {
    super()
  }

  ngOnInit(): void {
    this.extras$ = of(new ExtrasModel());
  }

  saveHandler(e: ExtrasModel){
    this.extrasService.insert(e).subscribe(response => {
        this.router.navigate(['extras/edit', response.id]).then(r => console.log('Navigate to edit', r));
      }, () => this.error(),
      () => this.success());
  }

  cancelHandler(){
    this.location.back();
  }
}
