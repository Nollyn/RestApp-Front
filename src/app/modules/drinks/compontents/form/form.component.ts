import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DrinksModel } from '@app/models/drinks.model';

@Component({
  selector: 'drink-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input() drink: DrinksModel;
  @Output() saveForm = new EventEmitter<DrinksModel>();
  @Output() cancelForm = new EventEmitter();

  form: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(this.drink?.name ?? '', [Validators. required]),
      description: new FormControl(this.drink?.description ?? '', [Validators. required]),
      price: new FormControl(this.drink?.price ?? '', [Validators. required]),
      // image: new FormControl(this.drink?.image ?? '', [Validators. required]),
    });
  }

  submit(value:DrinksModel){
    this.saveForm.emit(value);
  }

  clickHandler(){
    this.cancelForm.emit();
  }
}
