import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExtrasService } from '@app/core/services/extras.service';
import { ExtrasModel } from '@app/models/extras.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main-extras',
  templateUrl: './main-extras.page.html',
  styleUrls: ['./main-extras.page.css']
})
export class MainExtrasPage implements OnInit {

  extras$: Observable<ExtrasModel[]>;
  constructor(
    private extrasService: ExtrasService,
    private router: Router
    ) { }

  ngOnInit() {
    this.extras$ = this.extrasService.getAll();
  }

  newHandler() {
    this.router.navigate(['extras/new']);
  }
  editHandler(event: any) {
    this.router.navigate(['extras/edit', event.id]);
  }

  deleteHandler(event: any) {
    console.log('MainCategoriesPage::deleteHandler', event);
  }
}
