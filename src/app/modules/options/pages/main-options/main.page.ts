import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OptionsService } from '@app/core/services/options.service';
import { OptionsModel } from '@app/models/options.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main-options',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.css']
})
export class MainPage implements OnInit {

  options$: Observable<OptionsModel[]>;

  constructor(
    private optionsService: OptionsService,
    private router: Router
    ) { }

  ngOnInit() {
    this.options$ = this.optionsService.getAll();
  }

  newHandler() {
    this.router.navigate(['options/new']);
  }
  editHandler(event: any) {
    this.router.navigate(['options/edit', event.id]);
  }
  deleteHandler(event: any) {
    console.log('MainCategoriesPage::deleteHandler', event);
  }
}
