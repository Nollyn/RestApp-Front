import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { DishesModel } from "@app/models/dishes.model";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Observable } from "rxjs";
import { OptionsModel } from "@app/models/options.model";
import { OptionsService } from "@app/core/services/options.service";

@Component({
  selector: 'dish-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @ViewChild('uploadControl') uploadControl: ElementRef;
  uploadFileName = 'Choose File';

  @Input() dish: DishesModel;
  @Input() option: OptionsModel;
  @Output() saveForm = new EventEmitter<DishesModel>();
  @Output() cancelForm = new EventEmitter();

  options$: Observable<OptionsModel[]>;
  imgBase64Path: string;

  form: FormGroup;

  constructor(private optionsService: OptionsService) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(this.dish?.name ?? '', [Validators.required]),
      description: new FormControl(this.dish?.description ?? '', [Validators.required]),
      price: new FormControl(this.dish?.price ?? '', [Validators.required]),
      image: new FormControl(this.dish?.image ?? ''),
      option: new FormControl(this.option?.id ?? 0)
    });
    this.options$ = this.optionsService.getAll();
  }

  onFileChange(e: any) {

    if (e.target.files && e.target.files[0]) {
      this.uploadFileName = '';
      const fileReader = new FileReader();
      fileReader.onload = (e: any) => {
        const img = new Image();
        img.src = e.target.result;
        img.onload = res => {
          this.imgBase64Path = e.target.result;
        };
      };
      fileReader.readAsDataURL(e.target.files[0]);
      // this.uploadControl.nativeElement.value = "";
    } else {
      this.uploadFileName = 'Choose File';
    }
  }

  submit(value: DishesModel) {
    value.image = this.imgBase64Path.split(",")[1];
    this.saveForm.emit(value);
  }

  clickHandler() {
    this.cancelForm.emit();
  }


}
