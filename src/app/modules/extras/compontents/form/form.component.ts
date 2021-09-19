import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ExtrasModel } from '@app/models/extras.model';
import { Observable } from "rxjs";
import { CategoriesModel } from "@app/models/categories.model";
import { CategoriesService } from "@app/core/services/categories.service";

@Component({
  selector: 'extras-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input() extra: ExtrasModel;
  @Output() saveForm = new EventEmitter<ExtrasModel>();
  @Output() cancelForm = new EventEmitter();

  categories$ : Observable<CategoriesModel[]>;

  form: FormGroup;

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(this.extra?.name ?? '',[Validators.required]),
      description: new FormControl(this.extra?.description ?? '',[Validators.required]),
      idCategory: new FormControl(this.extra?.idCategory ?? '',[Validators.required]),
    })
    this.categories$ = this.categoriesService.getAll();
  }

  submit(value:ExtrasModel){
    this.saveForm.emit(value);
  }

  clickHandler(){
    this.cancelForm.emit();
  }
}
