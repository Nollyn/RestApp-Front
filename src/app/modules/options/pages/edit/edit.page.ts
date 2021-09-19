import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OptionsService } from '@app/core/services/options.service';
import { OptionsModel } from '@app/models/options.model';
import { Observable } from 'rxjs';
import { Location } from "@angular/common";
import { BaseComponent } from "@app/core/base/base.component";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss']
})
export class EditPage extends BaseComponent implements OnInit {
  id: any;
  options$: Observable<OptionsModel>;

  constructor(
    private router: Router,
    private routerState: ActivatedRoute,
    private optionsService: OptionsService,
    private location: Location
  ) {
    super()
  }

  ngOnInit(): void {
    this.routerState.params.subscribe(param => {
      this.id = param.id;
      this.options$ = this.optionsService.getById(this.id);
    });
  }

  saveHandler(e: OptionsModel){
    e.id = this.id;
    this.optionsService.update(e).subscribe(response => {
        this.router.navigate(['options/edit', this.id]).then(r => console.log('Navigate to edit', r));
      }, () => this.error(),
      () => this.success());
  }

  cancelHandler(){
    this.location.back();
  }
}
