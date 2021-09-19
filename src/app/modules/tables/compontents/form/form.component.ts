import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RestaurantsService } from '@app/core/services/restaurants.service';
import { RestaurantsModel } from '@app/models/restaurants.model';
import { TablesModel } from '@app/models/tables.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'tables-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input() table: TablesModel;
  @Output() saveForm = new EventEmitter<TablesModel>();
  @Output() cancelForm = new EventEmitter();

  form: FormGroup;

  restaurants$: Observable<RestaurantsModel[]>;

  constructor(private restaurantsService: RestaurantsService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      code: new FormControl(this.table?.code ?? '', [Validators.required]),
      idRestaurant: new FormControl(this.table?.idRestaurant ?? '', [Validators.required]),
    });
    this.restaurants$ = this.restaurantsService.getAll();
  }

  submit(value:TablesModel){
    this.saveForm.emit(value);
  }
  clickHandler(){
    this.cancelForm.emit();
  }
}
