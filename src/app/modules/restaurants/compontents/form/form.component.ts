import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RestaurantsModel } from '@app/models/restaurants.model';

@Component({
  selector: 'restaurants-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input() restaurant: RestaurantsModel;
  @Output() saveForm = new EventEmitter<RestaurantsModel>();
  @Output() cancelForm = new EventEmitter();

  form: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(this.restaurant?.name ?? '',[Validators.required]),
      address: new FormControl(this.restaurant?.address ?? '',[Validators.required]),
      nif: new FormControl(this.restaurant?.nif ?? '',[Validators.required]),
      phone: new FormControl(this.restaurant?.phone ?? '',[Validators.required]),
      postalCode: new FormControl(this.restaurant?.postalCode ?? '',[Validators.required]),
      description: new FormControl(this.restaurant?.description ?? '',[Validators.required]),
      city: new FormControl(this.restaurant?.city ?? '',[Validators.required]),
      country: new FormControl(this.restaurant?.country ?? '',[Validators.required]),
    })
  }

  submit(value:RestaurantsModel){
    this.saveForm.emit(value);
  }

  clickHandler(){
    this.cancelForm.emit();
  }
}
