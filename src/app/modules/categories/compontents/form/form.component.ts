import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoriesModel } from '@app/models/categories.model';

@Component({
  selector: 'category-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input() category: CategoriesModel;
  @Output() saveForm = new EventEmitter<CategoriesModel>();
  @Output() cancelForm = new EventEmitter();

  form: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(this.category?.name ?? '', [Validators.required]),
      description: new FormControl(this.category?.description ?? '', [Validators.required])
    });
  }

  submit(value:CategoriesModel){
    this.saveForm.emit(value);
  }

  clickHandler(){
    this.cancelForm.emit();
  }
}
